(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [soma-demo.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/soma-demo.core.on-js-reload (apply js/soma-demo.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'soma-demo.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

