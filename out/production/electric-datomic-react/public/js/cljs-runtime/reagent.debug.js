goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__29593__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29594__i = 0, G__29594__a = new Array(arguments.length -  0);
while (G__29594__i < G__29594__a.length) {G__29594__a[G__29594__i] = arguments[G__29594__i + 0]; ++G__29594__i;}
  args = new cljs.core.IndexedSeq(G__29594__a,0,null);
} 
return G__29593__delegate.call(this,args);};
G__29593.cljs$lang$maxFixedArity = 0;
G__29593.cljs$lang$applyTo = (function (arglist__29595){
var args = cljs.core.seq(arglist__29595);
return G__29593__delegate(args);
});
G__29593.cljs$core$IFn$_invoke$arity$variadic = G__29593__delegate;
return G__29593;
})()
);

(o.error = (function() { 
var G__29596__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29597__i = 0, G__29597__a = new Array(arguments.length -  0);
while (G__29597__i < G__29597__a.length) {G__29597__a[G__29597__i] = arguments[G__29597__i + 0]; ++G__29597__i;}
  args = new cljs.core.IndexedSeq(G__29597__a,0,null);
} 
return G__29596__delegate.call(this,args);};
G__29596.cljs$lang$maxFixedArity = 0;
G__29596.cljs$lang$applyTo = (function (arglist__29598){
var args = cljs.core.seq(arglist__29598);
return G__29596__delegate(args);
});
G__29596.cljs$core$IFn$_invoke$arity$variadic = G__29596__delegate;
return G__29596;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
