(ns ^:figwheel-always soma-demo.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [soma-demo.solver-client :as client]
            [cljs.core.async :refer [put! <!  >! chan timeout]]))

(enable-console-print!)
(defonce app-state (atom {:text "Hello world!"}))
(def pieces (atom []))

(defn init-camera
  [scene ]
  (let [camera (js/THREE.PerspectiveCamera. 60 (/ (.-innerWidth js/window)
                                                  (.-innerHeight js/window)) 1 10000)]
    (set! (.-z (.-position camera)) 1200)
    (.add scene camera)
    camera))

(defn init-lighting [scene]
  (let [dir-light  (js/THREE.HemisphereLight. 0xff3333 0xffffff 0.8)]
    (doto dir-light (.. -color (setHSL 0.6 1 0.6)))
    (doto dir-light (.. -groundColor (setHSL  0.095, 1, 0.75 )))

    (doto dir-light (.. -position (set 0 -1000 0)))
    (.add scene dir-light)
    ))

(def scene (js/THREE.Scene.))

;(defn build-shape
;  []
;  (let [geometry (js/THREE.CubeGeometry. 400 400 400)
;        material (js/THREE.MeshPhongMaterial. (clj->js {:color "red"}))
;        mesh (js/THREE.Mesh. geometry material)]
;    (doto mesh  (.. -position (set 1000 100 100)))
;    mesh))

;(def mesh (build-shape))
;(.add scene mesh)`
(def camera (init-camera scene))
(init-lighting scene)

(defn init-renderer
  []
  (let [renderer
        (js/THREE.WebGLRenderer.
          (clj->js {"canvas" (.getElementById js/document "canvas")}))]
    (.setSize renderer (.-innerWidth js/window) (.-innerHeight js/window))
    renderer))

(def renderer (init-renderer) )

(defn render [ts increment]
  (doseq [piece @pieces]
    (set! (.-x (.-rotation piece)) (+ (.-x (.-rotation piece)) (* increment 1) ))
    (set! (.-y (.-rotation piece)) (+ (.-y (.-rotation piece)) (* increment 2) )))

  (.render renderer scene camera))

(def lastidx (atom (.getTime (js/Date.))))

(defn animate []
  (.requestAnimationFrame js/window animate)
  (let [curtime (.getTime (js/Date.))]
    (render @lastidx  (/  (- curtime @lastidx) 1000))
    (reset! lastidx curtime)))

(animate)

(def colors
  [0xFF5330
   0x2EE659
   0xE6E623
   0x4A98E6
   0xE655D8
   0x61E6DD
   0xCB5EE6
   0x9FC997
   ])

(defn color-pallette
  [n]
  (nth colors (mod n (count colors))))

(defn create-piece-mesh
  "Create a mesh for a single piece - takes a piece index and  list of coords "
  [idx parts]
  (let [color (color-pallette  idx)
        material (js/THREE.MeshPhongMaterial. (clj->js {:color (js/THREE.Color. color)}))
        geometry
        (reduce
          (fn
            [parent [x y z]]
            (let [cube (js/THREE.CubeGeometry. 100 100 100 )
                  cubemesh (js/THREE.Mesh. cube  material)]
              (doto cubemesh (.. -position (set (* x 100) (* y 100) (* z 100))))
              (.updateMatrix cubemesh)
              (.merge parent   (.-geometry cubemesh)  (.-matrix cubemesh)))
            parent)
          (js/THREE.Geometry.)
          parts)
        ]
    (println "creating parts " idx ":" parts " " color)
    (js/THREE.Mesh. geometry material)))



(defn num-rows
  [total]
  (int (Math/floor (+ 1 (Math/sqrt total )))))

(defn num-columns
  [total]
  (int (Math/ceil (/ total (num-rows total)))))

(defn grid-coords
  [total idx]
  [(int (/ total (num-rows total)))
   (int (mod total (num-columns total)))])


(defn display-pieces-from-url
  [url ]
  (go
    (let [c (client/fetch-answerset url)
          resmap (as->
                   (<! c) $
                   (do (println "result" (type $) $) $)
                   (filter (fn [t] (= (first t) :part)) $)
                   (reduce (fn [mv  [_ idv  [ _ & coords]]]
                             (assoc mv idv
                                       (conj (get  mv idv []) coords))) {} $))]
      (doseq [[idx v] resmap]
        (println "creating " idx v)
        (let [piece (create-piece-mesh idx v)]
          (doto piece  (.. -position (set (- (* 450 idx) 1500)  0 0)))
          (.add scene piece )
          (reset! pieces (conj @pieces piece))
          )))))

;(display-pieces-from-url "http://localhost:8081/pieces")
;(display-pieces-from-url "http://localhost:8081/pieces-stage/1?n=100")
;(display-pieces-from-url "http://localhost:8081/pieces-stage/2?n=100")
;(display-pieces-from-url "http://localhost:8081/pieces-stage/3?n=100")
;(display-pieces-from-url "http://localhost:8081/pieces-stage/3?n=100&bs=true")
(display-pieces-from-url "http://localhost:8081/pieces-stage/4?bs=true")

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

