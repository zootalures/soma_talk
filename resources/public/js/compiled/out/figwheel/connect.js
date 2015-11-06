// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('soma_demo.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19556__delegate = function (x){
if(cljs.core.truth_(soma_demo.core.on_js_reload)){
return cljs.core.apply.call(null,soma_demo.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'soma-demo.core/on-js-reload' is missing");
}
};
var G__19556 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19561__i = 0, G__19561__a = new Array(arguments.length -  0);
while (G__19561__i < G__19561__a.length) {G__19561__a[G__19561__i] = arguments[G__19561__i + 0]; ++G__19561__i;}
  x = new cljs.core.IndexedSeq(G__19561__a,0);
} 
return G__19556__delegate.call(this,x);};
G__19556.cljs$lang$maxFixedArity = 0;
G__19556.cljs$lang$applyTo = (function (arglist__19563){
var x = cljs.core.seq(arglist__19563);
return G__19556__delegate(x);
});
G__19556.cljs$core$IFn$_invoke$arity$variadic = G__19556__delegate;
return G__19556;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1446823116583