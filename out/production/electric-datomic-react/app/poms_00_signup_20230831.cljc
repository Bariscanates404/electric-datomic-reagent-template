(ns app.poms-00-signup-20230831
  #?(:cljs (:require-macros [app.poms-00-signup-20230831 :refer [with-reagent]]))
  (:require contrib.str
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            [clojure.string :as str]

            #?(:cljs ["react" :as react])
            #?(:cljs ["slate" :refer [createEditor]])
            #?(:cljs ["slate-react" :refer [Slate Editable withReact]])
            #?(:cljs [reagent.core :as r])
            #?(:cljs [reagent.dom :as rdom])
            #?(:cljs ["react-dom/client" :as ReactDom])
            #?(:cljs ["react-data-table-component$default" :as DataTable])
            )
  )

;;- BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE ;;
#?(:cljs (defn create-root
           "See https://reactjs.org/docs/react-dom-client.html#createroot"
           ([node] (create-root node (str (gensym))))
           ([node id-prefix]
            (ReactDom/createRoot node #js {:identifierPrefix id-prefix}))))
#?(:cljs (defn render [root & args]
           (.render root (r/as-element (into [:f>] args)))))
(defmacro with-reagent [& args]
  `(dom/div
     (let [root# (create-root dom/node)]
       (render root# ~@args)
       (e/on-unmount #(.unmount root#)))))
;; - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE  ;;

(defn get-text [editor] (.-text (get (.-children (get (.-children editor) 0)) 0)))
(defn block [data on-change]
  #?(:cljs
     (let [[editor] (react/useState (fn [] (withReact (createEditor))))]
       [:> Slate
        {:editor       editor
         :initialValue [{:children
                         [{:text (:value data)}],
                         :type "paragraph"}]
         ;; :onChange on-change also works
         :onChange     (fn [value]
                         (println "onChange:" (-> value (get 0) (.-children) (get 0) (.-text)) ".  Not a plain function")
                         (on-change value))}
        [:> Editable
         {:onKeyDown (fn [e]

                       (when (= (.-key e) "Enter")
                         (println "onKeyDown: Enter, A plain function. ")

                         )

                       )}]])))
;; - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE  ;;

#?(:cljs (def columns
           #js
                   [#js {:name "Title", :selector (fn [row] (.-title row))}
                    #js {:name "Year", :selector (fn [row] (.-year row))}]))

#?(:cljs (def data
           #js
                   [#js {:id 1, :title "Beetlejuice", :year "1988"}
                    #js {:id 2, :title "Ghostbusters", :year "1984"}]))

#?(:cljs (defn MyComponent [] [:> DataTable {:columns columns, :data data}]))

(e/defn signup-page []
        (e/client
          (dom/text "hello")
          (with-reagent MyComponent)
          )
        )
