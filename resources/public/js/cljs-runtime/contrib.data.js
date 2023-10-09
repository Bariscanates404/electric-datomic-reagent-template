goog.provide('contrib.data');
/**
 * Qualify a keyword with a namespace. If already qualified, leave kw untouched. Nil-safe.
 *   (qualify :db :isComponent) -> :db/isComponent
 */
contrib.data.qualify = (function contrib$data$qualify(ns,_QMARK_kw){
if((!((ns == null)))){
} else {
throw (new Error("Assert failed: (some? ns)"));
}

if((_QMARK_kw instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? ?kw)"));
}

if(cljs.core.truth_(_QMARK_kw)){
if(cljs.core.qualified_keyword_QMARK_(_QMARK_kw)){
return _QMARK_kw;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(_QMARK_kw));
}
} else {
return null;
}
});
/**
 * Strip namespace from keyword, discarding it and return unqualified keyword. Nil-safe.
 *   (unqualify :db.type/ref) -> :ref
 */
contrib.data.unqualify = (function contrib$data$unqualify(_QMARK_qualified_kw){
if((((_QMARK_qualified_kw == null)) || (cljs.core.qualified_keyword_QMARK_(_QMARK_qualified_kw)))){
} else {
throw (new Error(["Assert failed: ",[" can't unqualify: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_qualified_kw)].join(''),"\n","(or (nil? ?qualified-kw) (qualified-keyword? ?qualified-kw))"].join('')));
}

if(cljs.core.truth_(_QMARK_qualified_kw)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(_QMARK_qualified_kw));
} else {
return null;
}
});
contrib.data._omit_keys_ns = (function contrib$data$_omit_keys_ns(ns,_QMARK_m){
if((!((ns == null)))){
} else {
throw (new Error("Assert failed: (some? ns)"));
}

if(cljs.core.truth_(_QMARK_m)){
return cljs.core.reduce_kv((function (m,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.namespace(k))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,_QMARK_m);
} else {
return null;
}
});
/**
 * State if a `named` value (keyword or symbol) has such namespace `ns`.
 *   `ns` can be be a string, or a non-namespaced keyword or symbol.
 */
contrib.data.has_ns_QMARK_ = (function contrib$data$has_ns_QMARK_(ns,named){
if(((typeof ns === 'string') || (cljs.core.simple_ident_QMARK_(ns)))){
} else {
throw (new Error("Assert failed: (or (string? ns) (simple-ident? ns))"));
}

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.namespace(named));
});
/**
 * Like `select-keys` but select all namespaced keys by ns.
 */
contrib.data.select_ns = (function contrib$data$select_ns(ns,map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(map),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__28728){
var vec__28734 = p__28728;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28734,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28734,(1),null);
return contrib.data.has_ns_QMARK_(ns,k);
})),map);
});
/**
 * qualify any unqualified keys to the current ns and then add qualified defaults
 */
contrib.data._auto_props = (function contrib$data$_auto_props(ns,props,defaults_qualified){
if((!((ns == null)))){
} else {
throw (new Error("Assert failed: (some? ns)"));
}

if(((typeof ns === 'string') || ((ns instanceof cljs.core.Symbol)))){
} else {
throw (new Error("Assert failed: (or (string? ns) (symbol? ns))"));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults_qualified,cljs.core.update_keys(props,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(contrib.data.qualify,ns))], 0));
});
/**
 * an argument parser that accepts both scalars and collections, lifting scalars into a collection
 */
contrib.data.xorxs = (function contrib$data$xorxs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29123 = arguments.length;
var i__5770__auto___29124 = (0);
while(true){
if((i__5770__auto___29124 < len__5769__auto___29123)){
args__5775__auto__.push((arguments[i__5770__auto___29124]));

var G__29127 = (i__5770__auto___29124 + (1));
i__5770__auto___29124 = G__29127;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return contrib.data.xorxs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(contrib.data.xorxs.cljs$core$IFn$_invoke$arity$variadic = (function (xorxs,p__28769){
var vec__28772 = p__28769;
var zero = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28772,(0),null);
if(cljs.core.vector_QMARK_(xorxs)){
return xorxs;
} else {
if(cljs.core.set_QMARK_(xorxs)){
return xorxs;
} else {
if(cljs.core.seq_QMARK_(xorxs)){
return xorxs;
} else {
if((xorxs == null)){
return zero;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = zero;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),xorxs);

}
}
}
}
}));

(contrib.data.xorxs.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(contrib.data.xorxs.cljs$lang$applyTo = (function (seq28752){
var G__28759 = cljs.core.first(seq28752);
var seq28752__$1 = cljs.core.next(seq28752);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28759,seq28752__$1);
}));

contrib.data.index_by = (function contrib$data$index_by(kf,xs){
if(cljs.core.truth_(kf)){
} else {
throw (new Error("Assert failed: kf"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kf.cljs$core$IFn$_invoke$arity$2 ? kf.cljs$core$IFn$_invoke$arity$2(x,i) : kf.call(null,x,i)),x], null);
})),xs);
});
/**
 * index a sequential collection into an associative collection with explicit keys. this may not be
 *   useful, as vectors are already associative
 */
contrib.data.index = (function contrib$data$index(xs){
if(cljs.core.sequential_QMARK_(xs)){
} else {
throw (new Error("Assert failed: (sequential? xs)"));
}

return contrib.data.index_by((function (x,i){
return i;
}),xs);
});
contrib.data.group_by_pred = (function contrib$data$group_by_pred(f_QMARK_,xs){
var map__28850 = cljs.core.group_by(f_QMARK_,xs);
var map__28850__$1 = cljs.core.__destructure_map(map__28850);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28850__$1,true);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28850__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});
contrib.data.update_existing = (function contrib$data$update_existing(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29136 = arguments.length;
var i__5770__auto___29137 = (0);
while(true){
if((i__5770__auto___29137 < len__5769__auto___29136)){
args__5775__auto__.push((arguments[i__5770__auto___29137]));

var G__29138 = (i__5770__auto___29137 + (1));
i__5770__auto___29137 = G__29138;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return contrib.data.update_existing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(contrib.data.update_existing.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,args){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,m,k,f,args);
} else {
return m;
}
}));

(contrib.data.update_existing.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(contrib.data.update_existing.cljs$lang$applyTo = (function (seq28878){
var G__28879 = cljs.core.first(seq28878);
var seq28878__$1 = cljs.core.next(seq28878);
var G__28880 = cljs.core.first(seq28878__$1);
var seq28878__$2 = cljs.core.next(seq28878__$1);
var G__28881 = cljs.core.first(seq28878__$2);
var seq28878__$3 = cljs.core.next(seq28878__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28879,G__28880,G__28881,seq28878__$3);
}));

contrib.data.take_upto = (function contrib$data$take_upto(pred){
return (function (rf){
return (function() {
var G__29146 = null;
var G__29146__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29146__1 = (function (ac){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(ac) : rf.call(null,ac));
});
var G__29146__2 = (function (ac,nx){
var G__28908 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(ac,nx) : rf.call(null,ac,nx));
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(nx) : pred.call(null,nx)))){
return cljs.core.ensure_reduced(G__28908);
} else {
return G__28908;
}
});
G__29146 = function(ac,nx){
switch(arguments.length){
case 0:
return G__29146__0.call(this);
case 1:
return G__29146__1.call(this,ac);
case 2:
return G__29146__2.call(this,ac,nx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29146.cljs$core$IFn$_invoke$arity$0 = G__29146__0;
G__29146.cljs$core$IFn$_invoke$arity$1 = G__29146__1;
G__29146.cljs$core$IFn$_invoke$arity$2 = G__29146__2;
return G__29146;
})()
});
});
contrib.data.round_floor = (function contrib$data$round_floor(n,base){
return (base * cljs.math.floor((n / base)));
});
contrib.data.pad = (function contrib$data$pad(var_args){
var G__28939 = arguments.length;
switch (G__28939) {
case 2:
return contrib.data.pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return contrib.data.pad.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(contrib.data.pad.cljs$core$IFn$_invoke$arity$2 = (function (zero,coll){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zero));
}));

(contrib.data.pad.cljs$core$IFn$_invoke$arity$3 = (function (n,zero,coll){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,contrib.data.pad.cljs$core$IFn$_invoke$arity$2(zero,coll));
}));

(contrib.data.pad.cljs$lang$maxFixedArity = 3);

contrib.data.padl = (function contrib$data$padl(n,zero,coll){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - cljs.core.count(coll)),zero),coll);
});
contrib.data.assoc_vec = (function contrib$data$assoc_vec(xs,k,v){
if((k >= cljs.core.count(xs))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(contrib.data.pad.cljs$core$IFn$_invoke$arity$3(k,null,xs)),k,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(xs,k,v);
}
});
contrib.data.padl_str = (function contrib$data$padl_str(n,zero,s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,contrib.data.padl(n,zero,s));
});
contrib.data.with_pad = (function contrib$data$with_pad(reducer,zero){
return (function() { 
var G__29169__delegate = function (f,cols){
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cols));
var cols__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29025_SHARP_){
return contrib.data.pad.cljs$core$IFn$_invoke$arity$3(n,zero,p1__29025_SHARP_);
}),cols);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reducer,f,cols__$1);
};
var G__29169 = function (f,var_args){
var cols = null;
if (arguments.length > 1) {
var G__29170__i = 0, G__29170__a = new Array(arguments.length -  1);
while (G__29170__i < G__29170__a.length) {G__29170__a[G__29170__i] = arguments[G__29170__i + 1]; ++G__29170__i;}
  cols = new cljs.core.IndexedSeq(G__29170__a,0,null);
} 
return G__29169__delegate.call(this,f,cols);};
G__29169.cljs$lang$maxFixedArity = 1;
G__29169.cljs$lang$applyTo = (function (arglist__29171){
var f = cljs.core.first(arglist__29171);
var cols = cljs.core.rest(arglist__29171);
return G__29169__delegate(f,cols);
});
G__29169.cljs$core$IFn$_invoke$arity$variadic = G__29169__delegate;
return G__29169;
})()
;
});
contrib.data.map_pad = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(contrib.data.with_pad,cljs.core.map);
contrib.data.str_last_n = (function contrib$data$str_last_n(n,s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.reverse(s))));
});
contrib.data.nil_or_empty_QMARK_ = (function contrib$data$nil_or_empty_QMARK_(x){
if(cljs.core.seqable_QMARK_(x)){
return cljs.core.empty_QMARK_(x);
} else {
return (x == null);
}
});
contrib.data._tree_list = (function contrib$data$_tree_list(depth,xs,children_fn,keep_QMARK_,input){
return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (x){
var x__$1 = clojure.datafy.datafy(x);
var temp__5802__auto__ = (children_fn.cljs$core$IFn$_invoke$arity$1 ? children_fn.cljs$core$IFn$_invoke$arity$1(x__$1) : children_fn.call(null,x__$1));
if(cljs.core.truth_(temp__5802__auto__)){
var children = temp__5802__auto__;
var temp__5804__auto__ = cljs.core.seq((function (){var G__29073 = (depth + (1));
var G__29074 = children;
var G__29075 = children_fn;
var G__29076 = keep_QMARK_;
var G__29077 = input;
return (contrib.data._tree_list.cljs$core$IFn$_invoke$arity$5 ? contrib.data._tree_list.cljs$core$IFn$_invoke$arity$5(G__29073,G__29074,G__29075,G__29076,G__29077) : contrib.data._tree_list.call(null,G__29073,G__29074,G__29075,G__29076,G__29077));
})());
if(temp__5804__auto__){
var rows = temp__5804__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth,x__$1], null)], null),rows);
} else {
return null;
}
} else {
var G__29079 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_((keep_QMARK_.cljs$core$IFn$_invoke$arity$2 ? keep_QMARK_.cljs$core$IFn$_invoke$arity$2(x__$1,input) : keep_QMARK_.call(null,x__$1,input)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29079,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth,x__$1], null));
} else {
return G__29079;
}
}
})),clojure.datafy.datafy(xs)], 0));
});
contrib.data.treelister = (function contrib$data$treelister(var_args){
var G__29089 = arguments.length;
switch (G__29089) {
case 1:
return contrib.data.treelister.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return contrib.data.treelister.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(contrib.data.treelister.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return contrib.data.treelister.cljs$core$IFn$_invoke$arity$3(xs,(function (_){
return null;
}),(function (_,___$1){
return true;
}));
}));

(contrib.data.treelister.cljs$core$IFn$_invoke$arity$3 = (function (xs,children_fn,keep_QMARK_){
return (function (input){
return contrib.data._tree_list((0),xs,children_fn,keep_QMARK_,input);
});
}));

(contrib.data.treelister.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=contrib.data.js.map
