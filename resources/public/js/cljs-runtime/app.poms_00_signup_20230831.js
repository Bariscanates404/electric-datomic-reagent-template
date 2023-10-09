goog.provide('app.poms_00_signup_20230831');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$slate$dist$index=shadow.js.require("module$node_modules$slate$dist$index", {});
var module$node_modules$slate_react$dist$index=shadow.js.require("module$node_modules$slate_react$dist$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
/**
 * See https://reactjs.org/docs/react-dom-client.html#createroot
 */
app.poms_00_signup_20230831.create_root = (function app$poms_00_signup_20230831$create_root(var_args){
var G__35451 = arguments.length;
switch (G__35451) {
case 1:
return app.poms_00_signup_20230831.create_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.poms_00_signup_20230831.create_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.poms_00_signup_20230831.create_root.cljs$core$IFn$_invoke$arity$1 = (function (node){
return app.poms_00_signup_20230831.create_root.cljs$core$IFn$_invoke$arity$2(node,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()));
}));

(app.poms_00_signup_20230831.create_root.cljs$core$IFn$_invoke$arity$2 = (function (node,id_prefix){
return module$node_modules$react_dom$client.createRoot(node,({"identifierPrefix": id_prefix}));
}));

(app.poms_00_signup_20230831.create_root.cljs$lang$maxFixedArity = 2);

app.poms_00_signup_20230831.render = (function app$poms_00_signup_20230831$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35459 = arguments.length;
var i__5770__auto___35460 = (0);
while(true){
if((i__5770__auto___35460 < len__5769__auto___35459)){
args__5775__auto__.push((arguments[i__5770__auto___35460]));

var G__35461 = (i__5770__auto___35460 + (1));
i__5770__auto___35460 = G__35461;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return app.poms_00_signup_20230831.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(app.poms_00_signup_20230831.render.cljs$core$IFn$_invoke$arity$variadic = (function (root,args){
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198)], null),args)));
}));

(app.poms_00_signup_20230831.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.poms_00_signup_20230831.render.cljs$lang$applyTo = (function (seq35452){
var G__35453 = cljs.core.first(seq35452);
var seq35452__$1 = cljs.core.next(seq35452);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35453,seq35452__$1);
}));

app.poms_00_signup_20230831.get_text = (function app$poms_00_signup_20230831$get_text(editor){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(editor.children,(0)).children,(0)).text;
});
app.poms_00_signup_20230831.block = (function app$poms_00_signup_20230831$block(data,on_change){
var vec__35455 = module$node_modules$react$index.useState((function (){
return module$node_modules$slate_react$dist$index.withReact(module$node_modules$slate$dist$index.createEditor());
}));
var editor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35455,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$slate_react$dist$index.Slate,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editor","editor",-989377770),editor,new cljs.core.Keyword(null,"initialValue","initialValue",-951835084),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"type","type",1174270348),"paragraph"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (value){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["onChange:",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,(0)).children,(0)).text,".  Not a plain function"], 0));

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$slate_react$dist$index.Editable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["onKeyDown: Enter, A plain function. "], 0));
} else {
return null;
}
})], null)], null)], null);
});
app.poms_00_signup_20230831.columns = [({"name": "Title", "selector": (function (row){
return row.title;
})}),({"name": "Year", "selector": (function (row){
return row.year;
})})];
app.poms_00_signup_20230831.data = [({"id": (1), "title": "Beetlejuice", "year": "1988"}),({"id": (2), "title": "Ghostbusters", "year": "1984"})];
app.poms_00_signup_20230831.MyComponent = (function app$poms_00_signup_20230831$MyComponent(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),app.poms_00_signup_20230831.columns,new cljs.core.Keyword(null,"data","data",-232669377),app.poms_00_signup_20230831.data], null)], null);
});

//# sourceMappingURL=app.poms_00_signup_20230831.js.map
