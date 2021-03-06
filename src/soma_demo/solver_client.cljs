(ns soma-demo.solver-client
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs-http.client :as http]
            [cljs.reader :refer [read-string]]
            [cljs.core.async :refer [put! <!  >! chan timeout]]
            ))

(defn term-as-str
  [term]
  (cond
    (seqable? term) (str (name (first term ))
                    (if-let [restval (seq (rest term))]
                      (str "(" (clojure.string/join "," (map term-as-str restval)) ")")
                      ""))
    :else term
    ))

(defn force-edn
  "Coalesces a response into edn even if its a string "
  [resp]
  (if (string? (:body resp))
    (update-in resp [:body] read-string)
    resp
    ))

(defn fetch-answerset
  [loc]
  (go
    (-> (<! (http/get loc {:with-credentials? false}))
        (force-edn)
        (:body)
        )))

(defn solve-programs
  "solves a program returns a channel which yeilds the answer sets "
  [progs]
  (let [c (chan)]
    (go (let [result
              (<! (http/post "/solver" {:body {:progs progs} :headers {"Content-Type" "application/edn"}}))]
          (.log js/console "got result " result)
          (>! c  (:body result))))
    c))

