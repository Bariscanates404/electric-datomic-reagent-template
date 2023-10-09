goog.provide('contrib.missionary_contrib');
contrib.missionary_contrib.mix = (function contrib$missionary_contrib$mix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30725 = arguments.length;
var i__5770__auto___30726 = (0);
while(true){
if((i__5770__auto___30726 < len__5769__auto___30725)){
args__5775__auto__.push((arguments[i__5770__auto___30726]));

var G__30728 = (i__5770__auto___30726 + (1));
i__5770__auto___30726 = G__30728;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic = (function (flows){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30238_block_0 = (function contrib$missionary_contrib$cr30238_block_0(cr30238_state){
try{var cr30238_place_0 = (1);
var cr30238_place_1 = cljs.core.count;
var cr30238_place_2 = flows;
var cr30238_place_3 = (function (){var G__30279 = cr30238_place_2;
var fexpr__30278 = cr30238_place_1;
return (fexpr__30278.cljs$core$IFn$_invoke$arity$1 ? fexpr__30278.cljs$core$IFn$_invoke$arity$1(G__30279) : fexpr__30278.call(null,G__30279));
})();
var cr30238_place_4 = missionary.core.seed;
var cr30238_place_5 = flows;
var cr30238_place_6 = (function (){var G__30283 = cr30238_place_5;
var fexpr__30282 = cr30238_place_4;
return (fexpr__30282.cljs$core$IFn$_invoke$arity$1 ? fexpr__30282.cljs$core$IFn$_invoke$arity$1(G__30283) : fexpr__30282.call(null,G__30283));
})();
(cr30238_state[(0)] = cr30238_block_1);

(cr30238_state[(1)] = cr30238_place_0);

return missionary.core.fork(cr30238_place_3,cr30238_place_6);
}catch (e30273){var cr30238_exception = e30273;
(cr30238_state[(0)] = null);

throw cr30238_exception;
}});
var cr30238_block_1 = (function contrib$missionary_contrib$cr30238_block_1(cr30238_state){
try{var cr30238_place_0 = (cr30238_state[(1)]);
var cr30238_place_7 = missionary.core.unpark();
(cr30238_state[(0)] = cr30238_block_2);

(cr30238_state[(1)] = null);

return missionary.core.fork(cr30238_place_0,cr30238_place_7);
}catch (e30289){var cr30238_exception = e30289;
(cr30238_state[(0)] = null);

(cr30238_state[(1)] = null);

throw cr30238_exception;
}});
var cr30238_block_2 = (function contrib$missionary_contrib$cr30238_block_2(cr30238_state){
try{var cr30238_place_8 = missionary.core.unpark();
(cr30238_state[(0)] = null);

return cr30238_place_8;
}catch (e30293){var cr30238_exception = e30293;
(cr30238_state[(0)] = null);

throw cr30238_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30297 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__30297[(0)] = cr30238_block_0);

return G__30297;
})());
})(),missionary.core.ap_run);
}));

(contrib.missionary_contrib.mix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(contrib.missionary_contrib.mix.cljs$lang$applyTo = (function (seq30237){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30237));
}));

/**
 * blocking iterable pattern
 */
contrib.missionary_contrib.iterator_consumer = (function contrib$missionary_contrib$iterator_consumer(it){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30301_block_12 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_12(cr30301_state){
try{var cr30301_place_5 = (cr30301_state[(1)]);
(cr30301_state[(0)] = null);

(cr30301_state[(1)] = null);

return cr30301_place_5;
}catch (e30398){var cr30301_exception = e30398;
(cr30301_state[(0)] = null);

(cr30301_state[(1)] = null);

throw cr30301_exception;
}});
var cr30301_block_8 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_8(cr30301_state){
try{var cr30301_place_22 = missionary.core.unpark();
(cr30301_state[(0)] = cr30301_block_11);

(cr30301_state[(2)] = cr30301_place_22);

return cr30301_state;
}catch (e30400){var cr30301_exception = e30400;
(cr30301_state[(0)] = null);

(cr30301_state[(1)] = null);

(cr30301_state[(2)] = null);

throw cr30301_exception;
}});
var cr30301_block_1 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_1(cr30301_state){
try{var cr30301_place_0 = missionary.core.via_call;
var cr30301_place_1 = missionary.core.blk;
var cr30301_place_2 = (function (){
return it.hasNext();
});
var cr30301_place_3 = (function (){var G__30404 = cr30301_place_1;
var G__30405 = cr30301_place_2;
var fexpr__30403 = cr30301_place_0;
return (fexpr__30403.cljs$core$IFn$_invoke$arity$2 ? fexpr__30403.cljs$core$IFn$_invoke$arity$2(G__30404,G__30405) : fexpr__30403.call(null,G__30404,G__30405));
})();
(cr30301_state[(0)] = cr30301_block_2);

return missionary.core.park(cr30301_place_3);
}catch (e30401){var cr30301_exception = e30401;
(cr30301_state[(0)] = null);

throw cr30301_exception;
}});
var cr30301_block_9 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_9(cr30301_state){
try{(cr30301_state[(0)] = cr30301_block_1);

return cr30301_state;
}catch (e30407){var cr30301_exception = e30407;
(cr30301_state[(0)] = null);

throw cr30301_exception;
}});
var cr30301_block_0 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_0(cr30301_state){
try{(cr30301_state[(0)] = cr30301_block_1);

return cr30301_state;
}catch (e30408){var cr30301_exception = e30408;
(cr30301_state[(0)] = null);

throw cr30301_exception;
}});
var cr30301_block_11 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_11(cr30301_state){
try{var cr30301_place_17 = (cr30301_state[(2)]);
(cr30301_state[(0)] = cr30301_block_12);

(cr30301_state[(2)] = null);

(cr30301_state[(1)] = cr30301_place_17);

return cr30301_state;
}catch (e30410){var cr30301_exception = e30410;
(cr30301_state[(0)] = null);

(cr30301_state[(1)] = null);

(cr30301_state[(2)] = null);

throw cr30301_exception;
}});
var cr30301_block_3 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_3(cr30301_state){
try{var cr30301_place_6 = (1);
var cr30301_place_7 = missionary.core.none;
(cr30301_state[(0)] = cr30301_block_4);

return missionary.core.fork(cr30301_place_6,cr30301_place_7);
}catch (e30412){var cr30301_exception = e30412;
(cr30301_state[(0)] = null);

(cr30301_state[(1)] = null);

throw cr30301_exception;
}});
var cr30301_block_7 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_7(cr30301_state){
try{var cr30301_place_18 = missionary.core.via_call;
var cr30301_place_19 = missionary.core.blk;
var cr30301_place_20 = (function (){
return it.next();
});
var cr30301_place_21 = (function (){var G__30422 = cr30301_place_19;
var G__30423 = cr30301_place_20;
var fexpr__30421 = cr30301_place_18;
return (fexpr__30421.cljs$core$IFn$_invoke$arity$2 ? fexpr__30421.cljs$core$IFn$_invoke$arity$2(G__30422,G__30423) : fexpr__30421.call(null,G__30422,G__30423));
})();
(cr30301_state[(0)] = cr30301_block_8);

return missionary.core.park(cr30301_place_21);
}catch (e30414){var cr30301_exception = e30414;
(cr30301_state[(0)] = null);

(cr30301_state[(1)] = null);

(cr30301_state[(2)] = null);

throw cr30301_exception;
}});
var cr30301_block_5 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_5(cr30301_state){
try{var cr30301_place_9 = (1);
var cr30301_place_10 = missionary.core.seed;
var cr30301_place_11 = cljs.core.range;
var cr30301_place_12 = (2);
var cr30301_place_13 = (function (){var G__30429 = cr30301_place_12;
var fexpr__30428 = cr30301_place_11;
return (fexpr__30428.cljs$core$IFn$_invoke$arity$1 ? fexpr__30428.cljs$core$IFn$_invoke$arity$1(G__30429) : fexpr__30428.call(null,G__30429));
})();
var cr30301_place_14 = (function (){var G__30431 = cr30301_place_13;
var fexpr__30430 = cr30301_place_10;
return (fexpr__30430.cljs$core$IFn$_invoke$arity$1 ? fexpr__30430.cljs$core$IFn$_invoke$arity$1(G__30431) : fexpr__30430.call(null,G__30431));
})();
(cr30301_state[(0)] = cr30301_block_6);

return missionary.core.fork(cr30301_place_9,cr30301_place_14);
}catch (e30427){var cr30301_exception = e30427;
(cr30301_state[(0)] = null);

(cr30301_state[(1)] = null);

throw cr30301_exception;
}});
var cr30301_block_10 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_10(cr30301_state){
try{var cr30301_place_15 = (cr30301_state[(1)]);
var cr30301_place_23 = "No matching clause: ";
var cr30301_place_24 = cr30301_place_15;
var cr30301_place_25 = [cr30301_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30301_place_24)].join('');
var cr30301_place_26 = (new Error(cr30301_place_25));
var cr30301_place_27 = (function(){throw cr30301_place_26})();
(cr30301_state[(0)] = null);

(cr30301_state[(1)] = null);

return null;
}catch (e30439){var cr30301_exception = e30439;
(cr30301_state[(0)] = null);

(cr30301_state[(1)] = null);

throw cr30301_exception;
}});
var cr30301_block_4 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_4(cr30301_state){
try{var cr30301_place_8 = missionary.core.unpark();
(cr30301_state[(0)] = cr30301_block_12);

(cr30301_state[(1)] = cr30301_place_8);

return cr30301_state;
}catch (e30442){var cr30301_exception = e30442;
(cr30301_state[(0)] = null);

(cr30301_state[(1)] = null);

throw cr30301_exception;
}});
var cr30301_block_2 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_2(cr30301_state){
try{var cr30301_place_4 = missionary.core.unpark();
var cr30301_place_5 = null;
if(cljs.core.truth_(cr30301_place_4)){
(cr30301_state[(0)] = cr30301_block_5);

(cr30301_state[(1)] = cr30301_place_5);

return cr30301_state;
} else {
(cr30301_state[(0)] = cr30301_block_3);

(cr30301_state[(1)] = cr30301_place_5);

return cr30301_state;
}
}catch (e30444){var cr30301_exception = e30444;
(cr30301_state[(0)] = null);

throw cr30301_exception;
}});
var cr30301_block_6 = (function contrib$missionary_contrib$iterator_consumer_$_cr30301_block_6(cr30301_state){
try{var cr30301_place_15 = missionary.core.unpark();
var cr30301_place_16 = cr30301_place_15;
var cr30301_place_17 = null;
var G__30457 = cr30301_place_16;
switch (G__30457) {
case (0):
(cr30301_state[(0)] = cr30301_block_7);

(cr30301_state[(2)] = cr30301_place_17);

return cr30301_state;

break;
case (1):
(cr30301_state[(0)] = cr30301_block_9);

(cr30301_state[(1)] = null);

return cr30301_state;

break;
default:
(cr30301_state[(0)] = cr30301_block_10);

(cr30301_state[(1)] = null);

(cr30301_state[(1)] = cr30301_place_15);

return cr30301_state;

}
}catch (e30453){var cr30301_exception = e30453;
(cr30301_state[(0)] = null);

(cr30301_state[(1)] = null);

throw cr30301_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30459 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__30459[(0)] = cr30301_block_0);

return G__30459;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.seq_consumer = (function contrib$missionary_contrib$seq_consumer(xs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30464_block_11 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_11(cr30464_state){
try{var cr30464_place_18 = (cr30464_state[(3)]);
(cr30464_state[(0)] = cr30464_block_12);

(cr30464_state[(3)] = null);

(cr30464_state[(2)] = cr30464_place_18);

return cr30464_state;
}catch (e30548){var cr30464_exception = e30548;
(cr30464_state[(0)] = null);

(cr30464_state[(3)] = null);

(cr30464_state[(2)] = null);

throw cr30464_exception;
}});
var cr30464_block_1 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_1(cr30464_state){
try{var cr30464_place_0 = (cr30464_state[(1)]);
var cr30464_place_1 = missionary.core.via_call;
var cr30464_place_2 = missionary.core.blk;
var cr30464_place_3 = (function (){
return cljs.core.seq(cr30464_place_0);
});
var cr30464_place_4 = (function (){var G__30557 = cr30464_place_2;
var G__30558 = cr30464_place_3;
var fexpr__30556 = cr30464_place_1;
return (fexpr__30556.cljs$core$IFn$_invoke$arity$2 ? fexpr__30556.cljs$core$IFn$_invoke$arity$2(G__30557,G__30558) : fexpr__30556.call(null,G__30557,G__30558));
})();
(cr30464_state[(0)] = cr30464_block_2);

return missionary.core.park(cr30464_place_4);
}catch (e30553){var cr30464_exception = e30553;
(cr30464_state[(0)] = null);

(cr30464_state[(1)] = null);

throw cr30464_exception;
}});
var cr30464_block_10 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_10(cr30464_state){
try{var cr30464_place_16 = (cr30464_state[(1)]);
var cr30464_place_27 = "No matching clause: ";
var cr30464_place_28 = cr30464_place_16;
var cr30464_place_29 = [cr30464_place_27,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30464_place_28)].join('');
var cr30464_place_30 = (new Error(cr30464_place_29));
var cr30464_place_31 = (function(){throw cr30464_place_30})();
(cr30464_state[(0)] = null);

(cr30464_state[(1)] = null);

return null;
}catch (e30562){var cr30464_exception = e30562;
(cr30464_state[(0)] = null);

(cr30464_state[(1)] = null);

throw cr30464_exception;
}});
var cr30464_block_9 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_9(cr30464_state){
try{var cr30464_place_0 = (cr30464_state[(1)]);
var cr30464_place_24 = cljs.core.rest;
var cr30464_place_25 = cr30464_place_0;
var cr30464_place_26 = (function (){var G__30571 = cr30464_place_25;
var fexpr__30570 = cr30464_place_24;
return (fexpr__30570.cljs$core$IFn$_invoke$arity$1 ? fexpr__30570.cljs$core$IFn$_invoke$arity$1(G__30571) : fexpr__30570.call(null,G__30571));
})();
(cr30464_state[(0)] = cr30464_block_1);

(cr30464_state[(1)] = cr30464_place_26);

return cr30464_state;
}catch (e30568){var cr30464_exception = e30568;
(cr30464_state[(0)] = null);

(cr30464_state[(1)] = null);

throw cr30464_exception;
}});
var cr30464_block_8 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_8(cr30464_state){
try{var cr30464_place_23 = missionary.core.unpark();
(cr30464_state[(0)] = cr30464_block_11);

(cr30464_state[(3)] = cr30464_place_23);

return cr30464_state;
}catch (e30575){var cr30464_exception = e30575;
(cr30464_state[(0)] = null);

(cr30464_state[(3)] = null);

(cr30464_state[(2)] = null);

throw cr30464_exception;
}});
var cr30464_block_12 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_12(cr30464_state){
try{var cr30464_place_6 = (cr30464_state[(2)]);
(cr30464_state[(0)] = null);

(cr30464_state[(2)] = null);

return cr30464_place_6;
}catch (e30578){var cr30464_exception = e30578;
(cr30464_state[(0)] = null);

(cr30464_state[(2)] = null);

throw cr30464_exception;
}});
var cr30464_block_3 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_3(cr30464_state){
try{var cr30464_place_7 = (1);
var cr30464_place_8 = missionary.core.none;
(cr30464_state[(0)] = cr30464_block_4);

return missionary.core.fork(cr30464_place_7,cr30464_place_8);
}catch (e30580){var cr30464_exception = e30580;
(cr30464_state[(0)] = null);

(cr30464_state[(2)] = null);

throw cr30464_exception;
}});
var cr30464_block_7 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_7(cr30464_state){
try{var cr30464_place_0 = (cr30464_state[(1)]);
var cr30464_place_19 = missionary.core.via_call;
var cr30464_place_20 = missionary.core.blk;
var cr30464_place_21 = (function (){
return cljs.core.first(cr30464_place_0);
});
var cr30464_place_22 = (function (){var G__30589 = cr30464_place_20;
var G__30590 = cr30464_place_21;
var fexpr__30588 = cr30464_place_19;
return (fexpr__30588.cljs$core$IFn$_invoke$arity$2 ? fexpr__30588.cljs$core$IFn$_invoke$arity$2(G__30589,G__30590) : fexpr__30588.call(null,G__30589,G__30590));
})();
(cr30464_state[(0)] = cr30464_block_8);

(cr30464_state[(1)] = null);

return missionary.core.park(cr30464_place_22);
}catch (e30583){var cr30464_exception = e30583;
(cr30464_state[(0)] = null);

(cr30464_state[(3)] = null);

(cr30464_state[(1)] = null);

(cr30464_state[(2)] = null);

throw cr30464_exception;
}});
var cr30464_block_2 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_2(cr30464_state){
try{var cr30464_place_5 = missionary.core.unpark();
var cr30464_place_6 = null;
if(cljs.core.truth_(cr30464_place_5)){
(cr30464_state[(0)] = cr30464_block_5);

(cr30464_state[(2)] = cr30464_place_6);

return cr30464_state;
} else {
(cr30464_state[(0)] = cr30464_block_3);

(cr30464_state[(1)] = null);

(cr30464_state[(2)] = cr30464_place_6);

return cr30464_state;
}
}catch (e30593){var cr30464_exception = e30593;
(cr30464_state[(0)] = null);

(cr30464_state[(1)] = null);

throw cr30464_exception;
}});
var cr30464_block_4 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_4(cr30464_state){
try{var cr30464_place_9 = missionary.core.unpark();
(cr30464_state[(0)] = cr30464_block_12);

(cr30464_state[(2)] = cr30464_place_9);

return cr30464_state;
}catch (e30594){var cr30464_exception = e30594;
(cr30464_state[(0)] = null);

(cr30464_state[(2)] = null);

throw cr30464_exception;
}});
var cr30464_block_5 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_5(cr30464_state){
try{var cr30464_place_10 = (1);
var cr30464_place_11 = missionary.core.seed;
var cr30464_place_12 = cljs.core.range;
var cr30464_place_13 = (2);
var cr30464_place_14 = (function (){var G__30598 = cr30464_place_13;
var fexpr__30597 = cr30464_place_12;
return (fexpr__30597.cljs$core$IFn$_invoke$arity$1 ? fexpr__30597.cljs$core$IFn$_invoke$arity$1(G__30598) : fexpr__30597.call(null,G__30598));
})();
var cr30464_place_15 = (function (){var G__30600 = cr30464_place_14;
var fexpr__30599 = cr30464_place_11;
return (fexpr__30599.cljs$core$IFn$_invoke$arity$1 ? fexpr__30599.cljs$core$IFn$_invoke$arity$1(G__30600) : fexpr__30599.call(null,G__30600));
})();
(cr30464_state[(0)] = cr30464_block_6);

return missionary.core.fork(cr30464_place_10,cr30464_place_15);
}catch (e30595){var cr30464_exception = e30595;
(cr30464_state[(0)] = null);

(cr30464_state[(1)] = null);

(cr30464_state[(2)] = null);

throw cr30464_exception;
}});
var cr30464_block_0 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_0(cr30464_state){
try{var cr30464_place_0 = xs;
(cr30464_state[(0)] = cr30464_block_1);

(cr30464_state[(1)] = cr30464_place_0);

return cr30464_state;
}catch (e30601){var cr30464_exception = e30601;
(cr30464_state[(0)] = null);

throw cr30464_exception;
}});
var cr30464_block_6 = (function contrib$missionary_contrib$seq_consumer_$_cr30464_block_6(cr30464_state){
try{var cr30464_place_16 = missionary.core.unpark();
var cr30464_place_17 = cr30464_place_16;
var cr30464_place_18 = null;
var G__30604 = cr30464_place_17;
switch (G__30604) {
case (0):
(cr30464_state[(0)] = cr30464_block_7);

(cr30464_state[(3)] = cr30464_place_18);

return cr30464_state;

break;
case (1):
(cr30464_state[(0)] = cr30464_block_9);

(cr30464_state[(2)] = null);

return cr30464_state;

break;
default:
(cr30464_state[(0)] = cr30464_block_10);

(cr30464_state[(1)] = null);

(cr30464_state[(2)] = null);

(cr30464_state[(1)] = cr30464_place_16);

return cr30464_state;

}
}catch (e30602){var cr30464_exception = e30602;
(cr30464_state[(0)] = null);

(cr30464_state[(1)] = null);

(cr30464_state[(2)] = null);

throw cr30464_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30605 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__30605[(0)] = cr30464_block_0);

return G__30605;
})());
})(),missionary.core.ap_run);
});
/**
 * derive discrete flow from succession of polled values from a task (or mbox)
 */
contrib.missionary_contrib.poll_task = (function contrib$missionary_contrib$poll_task(task){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30617_block_5 = (function contrib$missionary_contrib$poll_task_$_cr30617_block_5(cr30617_state){
try{var cr30617_place_12 = task;
(cr30617_state[(0)] = cr30617_block_6);

return missionary.core.park(cr30617_place_12);
}catch (e30672){var cr30617_exception = e30672;
(cr30617_state[(0)] = null);

(cr30617_state[(1)] = null);

throw cr30617_exception;
}});
var cr30617_block_1 = (function contrib$missionary_contrib$poll_task_$_cr30617_block_1(cr30617_state){
try{var cr30617_place_1 = missionary.core.unpark();
(cr30617_state[(0)] = cr30617_block_2);

(cr30617_state[(1)] = cr30617_place_1);

return cr30617_state;
}catch (e30675){var cr30617_exception = e30675;
(cr30617_state[(0)] = null);

throw cr30617_exception;
}});
var cr30617_block_6 = (function contrib$missionary_contrib$poll_task_$_cr30617_block_6(cr30617_state){
try{var cr30617_place_13 = missionary.core.unpark();
(cr30617_state[(0)] = cr30617_block_2);

(cr30617_state[(1)] = cr30617_place_13);

return cr30617_state;
}catch (e30677){var cr30617_exception = e30677;
(cr30617_state[(0)] = null);

(cr30617_state[(1)] = null);

throw cr30617_exception;
}});
var cr30617_block_2 = (function contrib$missionary_contrib$poll_task_$_cr30617_block_2(cr30617_state){
try{var cr30617_place_2 = (1);
var cr30617_place_3 = missionary.core.seed;
var cr30617_place_4 = cljs.core.range;
var cr30617_place_5 = (2);
var cr30617_place_6 = (function (){var G__30685 = cr30617_place_5;
var fexpr__30684 = cr30617_place_4;
return (fexpr__30684.cljs$core$IFn$_invoke$arity$1 ? fexpr__30684.cljs$core$IFn$_invoke$arity$1(G__30685) : fexpr__30684.call(null,G__30685));
})();
var cr30617_place_7 = (function (){var G__30687 = cr30617_place_6;
var fexpr__30686 = cr30617_place_3;
return (fexpr__30686.cljs$core$IFn$_invoke$arity$1 ? fexpr__30686.cljs$core$IFn$_invoke$arity$1(G__30687) : fexpr__30686.call(null,G__30687));
})();
(cr30617_state[(0)] = cr30617_block_3);

return missionary.core.fork(cr30617_place_2,cr30617_place_7);
}catch (e30679){var cr30617_exception = e30679;
(cr30617_state[(0)] = null);

(cr30617_state[(1)] = null);

throw cr30617_exception;
}});
var cr30617_block_8 = (function contrib$missionary_contrib$poll_task_$_cr30617_block_8(cr30617_state){
try{var cr30617_place_10 = (cr30617_state[(2)]);
(cr30617_state[(0)] = null);

(cr30617_state[(2)] = null);

return cr30617_place_10;
}catch (e30689){var cr30617_exception = e30689;
(cr30617_state[(0)] = null);

(cr30617_state[(2)] = null);

throw cr30617_exception;
}});
var cr30617_block_7 = (function contrib$missionary_contrib$poll_task_$_cr30617_block_7(cr30617_state){
try{var cr30617_place_8 = (cr30617_state[(1)]);
var cr30617_place_14 = "No matching clause: ";
var cr30617_place_15 = cr30617_place_8;
var cr30617_place_16 = [cr30617_place_14,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30617_place_15)].join('');
var cr30617_place_17 = (new Error(cr30617_place_16));
var cr30617_place_18 = (function(){throw cr30617_place_17})();
(cr30617_state[(0)] = null);

(cr30617_state[(1)] = null);

return null;
}catch (e30692){var cr30617_exception = e30692;
(cr30617_state[(0)] = null);

(cr30617_state[(1)] = null);

throw cr30617_exception;
}});
var cr30617_block_3 = (function contrib$missionary_contrib$poll_task_$_cr30617_block_3(cr30617_state){
try{var cr30617_place_8 = missionary.core.unpark();
var cr30617_place_9 = cr30617_place_8;
var cr30617_place_10 = null;
var G__30699 = cr30617_place_9;
switch (G__30699) {
case (0):
(cr30617_state[(0)] = cr30617_block_4);

(cr30617_state[(2)] = cr30617_place_10);

return cr30617_state;

break;
case (1):
(cr30617_state[(0)] = cr30617_block_5);

return cr30617_state;

break;
default:
(cr30617_state[(0)] = cr30617_block_7);

(cr30617_state[(1)] = null);

(cr30617_state[(1)] = cr30617_place_8);

return cr30617_state;

}
}catch (e30697){var cr30617_exception = e30697;
(cr30617_state[(0)] = null);

(cr30617_state[(1)] = null);

throw cr30617_exception;
}});
var cr30617_block_0 = (function contrib$missionary_contrib$poll_task_$_cr30617_block_0(cr30617_state){
try{var cr30617_place_0 = task;
(cr30617_state[(0)] = cr30617_block_1);

return missionary.core.park(cr30617_place_0);
}catch (e30701){var cr30617_exception = e30701;
(cr30617_state[(0)] = null);

throw cr30617_exception;
}});
var cr30617_block_4 = (function contrib$missionary_contrib$poll_task_$_cr30617_block_4(cr30617_state){
try{var cr30617_place_1 = (cr30617_state[(1)]);
var cr30617_place_11 = cr30617_place_1;
(cr30617_state[(0)] = cr30617_block_8);

(cr30617_state[(1)] = null);

(cr30617_state[(2)] = cr30617_place_11);

return cr30617_state;
}catch (e30704){var cr30617_exception = e30704;
(cr30617_state[(0)] = null);

(cr30617_state[(1)] = null);

(cr30617_state[(2)] = null);

throw cr30617_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30706 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__30706[(0)] = cr30617_block_0);

return G__30706;
})());
})(),missionary.core.ap_run);
});
/**
 * compare (document log) to (d/entity db eid). if a datomic txn is [op eid a v], 
 * log here is [op a v], or in other words, there is only one entity (the `eid` is 
 * constant) so we are left with not an entity but a document.
 */
contrib.missionary_contrib.document = (function contrib$missionary_contrib$document(_GT_txs){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3((function (m,p__30716){
var vec__30717 = p__30716;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30717,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30717,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30717,(2),null);
var G__30720 = op;
var G__30720__$1 = (((G__30720 instanceof cljs.core.Keyword))?G__30720.fqn:null);
switch (G__30720__$1) {
case "contrib.missionary-contrib/add":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,a,v);

break;
case "contrib.missionary-contrib/retract":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,a);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30720__$1)].join('')));

}
}),cljs.core.PersistentArrayMap.EMPTY,_GT_txs);
});

//# sourceMappingURL=contrib.missionary_contrib.js.map
