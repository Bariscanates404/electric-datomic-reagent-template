goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__33294 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__33295 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__33295);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__33300 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__33301 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__33301);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__33300);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__33294);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__33310 = arguments.length;
switch (G__33310) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__33322 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33322,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33322,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__33337_33360 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__33338_33361 = null;
var count__33339_33362 = (0);
var i__33340_33363 = (0);
while(true){
if((i__33340_33363 < count__33339_33362)){
var vec__33351_33364 = chunk__33338_33361.cljs$core$IIndexed$_nth$arity$2(null,i__33340_33363);
var container_33365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33351_33364,(0),null);
var comp_33366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33351_33364,(1),null);
reagent.dom.re_render_component(comp_33366,container_33365);


var G__33367 = seq__33337_33360;
var G__33368 = chunk__33338_33361;
var G__33369 = count__33339_33362;
var G__33370 = (i__33340_33363 + (1));
seq__33337_33360 = G__33367;
chunk__33338_33361 = G__33368;
count__33339_33362 = G__33369;
i__33340_33363 = G__33370;
continue;
} else {
var temp__5804__auto___33371 = cljs.core.seq(seq__33337_33360);
if(temp__5804__auto___33371){
var seq__33337_33372__$1 = temp__5804__auto___33371;
if(cljs.core.chunked_seq_QMARK_(seq__33337_33372__$1)){
var c__5568__auto___33373 = cljs.core.chunk_first(seq__33337_33372__$1);
var G__33374 = cljs.core.chunk_rest(seq__33337_33372__$1);
var G__33375 = c__5568__auto___33373;
var G__33376 = cljs.core.count(c__5568__auto___33373);
var G__33377 = (0);
seq__33337_33360 = G__33374;
chunk__33338_33361 = G__33375;
count__33339_33362 = G__33376;
i__33340_33363 = G__33377;
continue;
} else {
var vec__33354_33379 = cljs.core.first(seq__33337_33372__$1);
var container_33380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354_33379,(0),null);
var comp_33381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354_33379,(1),null);
reagent.dom.re_render_component(comp_33381,container_33380);


var G__33383 = cljs.core.next(seq__33337_33372__$1);
var G__33384 = null;
var G__33385 = (0);
var G__33386 = (0);
seq__33337_33360 = G__33383;
chunk__33338_33361 = G__33384;
count__33339_33362 = G__33385;
i__33340_33363 = G__33386;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
