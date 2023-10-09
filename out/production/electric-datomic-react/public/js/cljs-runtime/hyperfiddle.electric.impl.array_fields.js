goog.provide('hyperfiddle.electric.impl.array_fields');
hyperfiddle.electric.impl.array_fields.swap = (function hyperfiddle$electric$impl$array_fields$swap(var_args){
var G__29652 = arguments.length;
switch (G__29652) {
case 3:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___29731 = arguments.length;
var i__5770__auto___29732 = (0);
while(true){
if((i__5770__auto___29732 < len__5769__auto___29731)){
args_arr__5794__auto__.push((arguments[i__5770__auto___29732]));

var G__29733 = (i__5770__auto___29732 + (1));
i__5770__auto___29732 = G__29733;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((6)),(0),null));
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3 = (function (a,k,f){
return (a[k] = (function (){var G__29666 = (a[k]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29666) : f.call(null,G__29666));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$4 = (function (a,k,f,x){
return (a[k] = (function (){var G__29668 = (a[k]);
var G__29669 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29668,G__29669) : f.call(null,G__29668,G__29669));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$5 = (function (a,k,f,x,y){
return (a[k] = (function (){var G__29675 = (a[k]);
var G__29676 = x;
var G__29677 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29675,G__29676,G__29677) : f.call(null,G__29675,G__29676,G__29677));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$6 = (function (a,k,f,x,y,z){
return (a[k] = (function (){var G__29683 = (a[k]);
var G__29684 = x;
var G__29685 = y;
var G__29686 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__29683,G__29684,G__29685,G__29686) : f.call(null,G__29683,G__29684,G__29685,G__29686));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$variadic = (function (a,k,f,x,y,z,more){
return (a[k] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(a[k]),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.array_fields.swap.cljs$lang$applyTo = (function (seq29644){
var G__29645 = cljs.core.first(seq29644);
var seq29644__$1 = cljs.core.next(seq29644);
var G__29646 = cljs.core.first(seq29644__$1);
var seq29644__$2 = cljs.core.next(seq29644__$1);
var G__29647 = cljs.core.first(seq29644__$2);
var seq29644__$3 = cljs.core.next(seq29644__$2);
var G__29648 = cljs.core.first(seq29644__$3);
var seq29644__$4 = cljs.core.next(seq29644__$3);
var G__29649 = cljs.core.first(seq29644__$4);
var seq29644__$5 = cljs.core.next(seq29644__$4);
var G__29650 = cljs.core.first(seq29644__$5);
var seq29644__$6 = cljs.core.next(seq29644__$5);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29645,G__29646,G__29647,G__29648,G__29649,G__29650,seq29644__$6);
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.array_fields.get = (function hyperfiddle$electric$impl$array_fields$get(a,k){
return (a[k]);
});
hyperfiddle.electric.impl.array_fields.getset = (function hyperfiddle$electric$impl$array_fields$getset(a,k,v){
var ret = (a[k]);
(a[k] = v);

return ret;
});
hyperfiddle.electric.impl.array_fields.getswap = (function hyperfiddle$electric$impl$array_fields$getswap(a,k,f){
var ret = (a[k]);
hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(a,k,f);

return ret;
});

/**
* @constructor
*/
hyperfiddle.electric.impl.array_fields.P = (function (state_){
this.state_ = state_;
});

(hyperfiddle.electric.impl.array_fields.P.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-","state-",-416998234,null)], null);
}));

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$type = true);

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$ctorStr = "hyperfiddle.electric.impl.array-fields/P");

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.array-fields/P");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.array-fields/P.
 */
hyperfiddle.electric.impl.array_fields.__GT_P = (function hyperfiddle$electric$impl$array_fields$__GT_P(state_){
return (new hyperfiddle.electric.impl.array_fields.P(state_));
});


//# sourceMappingURL=hyperfiddle.electric.impl.array_fields.js.map
