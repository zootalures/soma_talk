(ns ^:figwheel-always soma-demo.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [soma-demo.solver-client :as client]
            [cljs.core.async :refer [put! <! >! chan timeout]]))

(enable-console-print!)


(defn init-camera
  [scene width height]
  (let [camera (js/THREE.PerspectiveCamera. 45 (/ width
                                                  height) 1 10000)]
    (set! (.-z (.-position camera)) 3000)
    (.add scene camera)
    camera))

(defn init-lighting
  [scene]
  (let [dir-light (js/THREE.HemisphereLight. 0xff3333 0xffffff 0.8)]
    (doto dir-light (.. -color (setHSL 0.6 1 0.6)))
    (doto dir-light (.. -groundColor (setHSL 0.095, 1, 0.80)))
    (doto dir-light (.. -position (set 0 -1000 0)))
    (.add scene dir-light)))


(defn init-renderer
  [canvas-element]
  (let [renderer
        (js/THREE.WebGLRenderer.
          (clj->js {"canvas" canvas-element}))
        ]
    (.setClearColor renderer 0x222222)
    renderer))


(defn animate-spin [piece ts increment]
  (set! (.-x (.-rotation piece)) (+ (.-x (.-rotation piece)) (* increment 0.3)))
  (set! (.-y (.-rotation piece)) (+ (.-y (.-rotation piece)) (* increment 0.4))))

(defn start-animation
  [update-animation renderer scene camera]
  (let [last-update (atom (.getTime (js/Date.)))]
    ((fn animation-loop []
       (.requestAnimationFrame js/window animation-loop)
       (let [curtime (.getTime (js/Date.))]
         (update-animation @last-update (/ (- curtime @last-update) 1000))
         (reset! last-update curtime))
       (.render renderer scene camera)))))

(def colors
  [0xFF5330
   0x2EE659
   0xE6E623
   0x4A98E6
   0xFFA500
   0x61E6DD
   0xCB5EE6
   0x9FC997
   ])

(defn color-pallette
  [n]
  (nth colors (mod n (count colors))))

(def cubesize
  100)

(defn create-piece-mesh
  "Create a mesh for a single piece - takes a piece index and  list of coords "
  [idx parts]
  (let [color (color-pallette idx)
        material (js/THREE.MeshPhongMaterial. (clj->js {:color (js/THREE.Color. color)}))
        geometry
        (reduce
          (fn
            [parent [x y z]]
            (let [cube (js/THREE.CubeGeometry. cubesize cubesize cubesize)
                  cubemesh (js/THREE.Mesh. cube material)]
              (doto cubemesh (.. -position (set (* x cubesize) (* y cubesize) (* z cubesize))))
              (.updateMatrix cubemesh)
              (.merge parent (.-geometry cubemesh) (.-matrix cubemesh)))
            parent)
          (js/THREE.Geometry.)
          parts)
        ]
    ; (println "creating parts " idx ":" parts " " color)
    (js/THREE.Mesh. geometry material)))

(defn place-piece
  "convert unit coords to xy coords "
  [rows cols size spacing x y]
  (let [grid-unit (+ spacing size)
        totalwidth (* cols grid-unit)
        totalheight (* rows grid-unit)]
    [(- (* x grid-unit) (/ totalwidth 2.0))
     (* -1 (- (* y grid-unit) (/ totalheight 2.0)))]))



(defn display-pieces-from-url
  ([canvas-element-id url] (display-pieces-from-url canvas-element-id url 5 true 1))
  ([canvas-element-id url cols spin] (display-pieces-from-url canvas-element-id url cols spin 1))
  ([canvas-element-id url cols spin ws-scale]
   (let [canvas-element (.getElementById js/document canvas-element-id)
         width (.-width canvas-element)
         height (.-height canvas-element)
         scene (js/THREE.Scene.)
         camera (init-camera scene width height)
         renderer (init-renderer canvas-element)
         pieces (atom [])]
     (println "showing in " width ":" height)
     (init-lighting scene)
     (start-animation (if spin
                        (fn [abs rel]
                          (doseq [piece @pieces]
                            (animate-spin piece abs rel)))
                        identity)
                      renderer
                      scene
                      camera)
     (go
       (let [c (client/fetch-answerset url)
             resmap (as->
                      (<! c) $
                      (filter (fn [t] (= (first t) :part)) $)
                      (reduce (fn [mv [_ idv [_ & coords]]]
                                (assoc mv idv
                                          (conj (get mv idv []) coords))) {} $)
                      (sort $))
             total-solutions (count resmap)
             rows (Math/ceil (/ total-solutions cols))
             scale-factor 1
             pieces-plane (js/THREE.Object3D.)
             ]
         (doseq [[idx v] resmap]
           (let [piece (create-piece-mesh idx v)
                 gy (Math.floor (/ idx cols))
                 gx (mod idx cols)
                 [cx cy] (place-piece rows cols (* 3 cubesize) (* 2 cubesize) gx gy)]
             (println [rows cols] "placing piece " idx " at grid " [gx gy] " in pos " [cx cy])
             (doto piece (.. -position (set cx
                                            cy
                                            0)))
             (doto piece (.. -scale (set scale-factor
                                         scale-factor
                                         scale-factor)))
             (.add pieces-plane piece)
             (reset! pieces (conj @pieces piece))
             ))
         (doto pieces-plane (.. -scale (set ws-scale ws-scale ws-scale)))
         (.add scene pieces-plane)
         )))))




(defn move-piece
  [part [dx dy dz]]
  (for [[x y z] part]
    [(+ x dx) (+ y dy) (+ z dz)]))
;
;; TODO work out center of piece as, move piece along vector
;
(defn center-of-piece
  "returns a point at the center of a piece's coordinates "
  [p]
  (let [[tx ty tz] (reduce (fn [[ax ay az] [px py pz]] [(+ ax px) (+ ay py) (+ az pz)]) [0 0 0] p)
        num (count p)]
    [(/ tx num) (/ ty num) (/ tz num)]))

(defn explode-translation
  "Moves a piece  away from the origin by a given distance "
  [piece v]
  (vec (map (partial * (+ 1 v)) (center-of-piece piece))))
;
;(defn grow-piece
;  [part d]
;  (let [[cx cy cz] (center-of-piece p)]
;    (move-piece part [(* cx d) (* cy d) (* cz d) ])))

(defn create-cube-sln
  "Create a cube returns the geometry "
  [ansset]
  (let [resmap (as-> ansset $
                     (filter (fn [t] (= (first t) :part)) $)
                     (reduce (fn [mv [_ idv [_ & coords]]]
                               (assoc mv idv
                                         (conj (get mv idv []) coords))) {} $))]
    (let
      [sln-geom (js/THREE.Object3D.)
       pieces
       (for [[idx v] resmap]
         ; (println "creating " idx v)
         (let
           [piece-geom (create-piece-mesh idx v)]
           (doto piece-geom (.. -position (set 0 0 0)))
           (.updateMatrix piece-geom)
           (.add sln-geom piece-geom)
           {:geom piece-geom :parts v}))]
      (let [outer-cube (js/THREE.Object3D.)]
        (doto sln-geom (.. -position (set (- (* cubesize 1.5))
                                          (- (* cubesize 1.5))
                                          (- (* cubesize 1.5)))))
        (.add outer-cube sln-geom)
        {:geom   outer-cube
         :pieces pieces}
        ))))

(defn animate-explode-part
  [geom parts v]
  (let [[x y z ] (explode-translation parts v)]
    (doto geom (.. -position (set x y z )))
    ))


(defn display-sln-from-url
  [canvas-element-id url cols ws-scale]
  (let [canvas-element (.getElementById js/document canvas-element-id)
        width (.-width canvas-element)
        height (.-height canvas-element)
        scene (js/THREE.Scene.)
        camera (init-camera scene width height)
        renderer (init-renderer canvas-element)
        cubes (atom [])                                     ; list of maps {:piece [[0 0 0] [ 1 1 1]] :model model}
        ]
    (init-lighting scene)
    (start-animation
      (fn [abs rel]
        (doseq [{cube-geom :geom  cube-pieces :pieces} @cubes]
          (animate-spin cube-geom abs rel)
          (doseq [{piece-geom :geom parts :parts} cube-pieces]
            (animate-explode-part piece-geom parts  (Math.max 0 (* 200 (Math.sin (/ abs 2000) ))))
            )

          )

        )
      renderer
      scene
      camera)

    (go
      (let [solutions (<! (client/fetch-answerset url))
            total-solutions (count solutions)
            rows (Math.ceil (/ total-solutions cols))
            scale-factor (* 5 (/ 1 rows))
            pieces-plane (js/THREE.Object3D.)
            ]
        (doseq [[idx sln] (map-indexed vector solutions)]
          (println "creating" idx " for solution " sln)
          (let [{cube-geom :geom
                 pieces    :pieces
                 :as       cube}
                (create-cube-sln sln)
                gy (Math.floor (/ idx cols))
                gx (mod idx cols)
                [cx cy] (place-piece rows cols (* 2 cubesize) (* 2 cubesize) gx gy)]
            (println " creating " cube)

            (doto cube-geom (.. -position (set cx
                                               cy
                                               0)))
            (doto cube-geom (.. -scale (set scale-factor
                                            scale-factor
                                            scale-factor)))

            (.add pieces-plane cube-geom)
            (reset! cubes (conj @cubes cube)))
          (doto pieces-plane (.. -scale (set ws-scale
                                             ws-scale
                                             ws-scale)))
          (.add scene pieces-plane)
          )))))


  (defn on-js-reload []
    ;; optionally touch your app-state to force rerendering depending on
    ;; your application
    ;; (swap! app-state update-in [:__figwheel_counter] inc)
    )

