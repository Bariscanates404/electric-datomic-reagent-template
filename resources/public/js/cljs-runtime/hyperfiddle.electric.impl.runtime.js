goog.provide('hyperfiddle.electric.impl.runtime');
hyperfiddle.electric.impl.runtime.fail = (function hyperfiddle$electric$impl$runtime$fail(x){
throw x;
});
hyperfiddle.electric.impl.runtime.failure = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$1((function (p1__30596_SHARP_){
if((p1__30596_SHARP_ instanceof hyperfiddle.electric.Failure)){
return p1__30596_SHARP_;
} else {
return null;
}
}));
hyperfiddle.electric.impl.runtime.pending = (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));
hyperfiddle.electric.impl.runtime.error = (function hyperfiddle$electric$impl$runtime$error(msg){
return (new Error(msg));
});
hyperfiddle.electric.impl.runtime.pst = (function hyperfiddle$electric$impl$runtime$pst(e){
return console.error(e);
});
hyperfiddle.electric.impl.runtime.select_debug_info = (function hyperfiddle$electric$impl$runtime$select_debug_info(debug_info){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(debug_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425)], null)),contrib.data.select_ns(new cljs.core.Keyword(null,"hyperfiddle.electric.debug","hyperfiddle.electric.debug",-987645572),debug_info)], 0));
});
hyperfiddle.electric.impl.runtime.check_failure = (function hyperfiddle$electric$impl$runtime$check_failure(debug_info,_LT_x){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
return hyperfiddle.electric.debug.error(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),x);
} else {
return x;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_x], 0));
});
hyperfiddle.electric.impl.runtime.latest_apply = (function hyperfiddle$electric$impl$runtime$latest_apply(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31008 = arguments.length;
var i__5770__auto___31009 = (0);
while(true){
if((i__5770__auto___31009 < len__5769__auto___31008)){
args__5775__auto__.push((arguments[i__5770__auto___31009]));

var G__31010 = (i__5770__auto___31009 + (1));
i__5770__auto___31009 = G__31010;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.latest_apply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$core$IFn$_invoke$arity$variadic = (function (debug_info,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(missionary.core.latest,(function() { 
var G__31011__delegate = function (f,args__$1){
var temp__5802__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.failure,f,args__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var err = temp__5802__auto__;
return hyperfiddle.electric.debug.error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),err);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}catch (e30621){var e = e30621;
return hyperfiddle.electric.debug.error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),(new hyperfiddle.electric.Failure(e)));
}}
};
var G__31011 = function (f,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__31012__i = 0, G__31012__a = new Array(arguments.length -  1);
while (G__31012__i < G__31012__a.length) {G__31012__a[G__31012__i] = arguments[G__31012__i + 1]; ++G__31012__i;}
  args__$1 = new cljs.core.IndexedSeq(G__31012__a,0,null);
} 
return G__31011__delegate.call(this,f,args__$1);};
G__31011.cljs$lang$maxFixedArity = 1;
G__31011.cljs$lang$applyTo = (function (arglist__31013){
var f = cljs.core.first(arglist__31013);
var args__$1 = cljs.core.rest(arglist__31013);
return G__31011__delegate(f,args__$1);
});
G__31011.cljs$core$IFn$_invoke$arity$variadic = G__31011__delegate;
return G__31011;
})()
,args);
}));

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$applyTo = (function (seq30612){
var G__30613 = cljs.core.first(seq30612);
var seq30612__$1 = cljs.core.next(seq30612);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30613,seq30612__$1);
}));

hyperfiddle.electric.impl.runtime.latest_first = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(missionary.core.latest,(function (x,y){
if((y instanceof hyperfiddle.electric.Failure)){
return y;
} else {
return x;
}
}));
hyperfiddle.electric.impl.runtime.pure = (function hyperfiddle$electric$impl$runtime$pure(x){
return missionary.core.cp_STAR_((function (){var cr30630_block_0 = (function hyperfiddle$electric$impl$runtime$pure_$_cr30630_block_0(cr30630_state){
try{var cr30630_place_0 = x;
(cr30630_state[(0)] = null);

return cr30630_place_0;
}catch (e30636){var cr30630_exception = e30636;
(cr30630_state[(0)] = null);

throw cr30630_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30642 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__30642[(0)] = cr30630_block_0);

return G__30642;
})());
})());
});
hyperfiddle.electric.impl.runtime.empty_event = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(0),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null);

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.runtime.It = (function (state,cancel,transfer){
this.state = state;
this.cancel = cancel;
this.transfer = transfer;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.It.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__30650 = (arguments.length - (1));
switch (G__30650) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.It.prototype.apply = (function (self__,args30649){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30649)));
}));

(hyperfiddle.electric.impl.runtime.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.cancel.cljs$core$IFn$_invoke$arity$1 ? self__.cancel.cljs$core$IFn$_invoke$arity$1(self__.state) : self__.cancel.call(null,self__.state));
}));

(hyperfiddle.electric.impl.runtime.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.transfer.cljs$core$IFn$_invoke$arity$1 ? self__.transfer.cljs$core$IFn$_invoke$arity$1(self__.state) : self__.transfer.call(null,self__.state));
}));

(hyperfiddle.electric.impl.runtime.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"cancel","cancel",-323556833,null),new cljs.core.Symbol(null,"transfer","transfer",1967954927,null)], null);
}));

(hyperfiddle.electric.impl.runtime.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/It");

(hyperfiddle.electric.impl.runtime.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/It.
 */
hyperfiddle.electric.impl.runtime.__GT_It = (function hyperfiddle$electric$impl$runtime$__GT_It(state,cancel,transfer){
return (new hyperfiddle.electric.impl.runtime.It(state,cancel,transfer));
});

hyperfiddle.electric.impl.runtime.lift_cancelled = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,(function (it){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669 = (function (it,meta30670){
this.it = it;
this.meta30670 = meta30670;
this.cljs$lang$protocol_mask$partition0$ = 425985;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30671,meta30670__$1){
var self__ = this;
var _30671__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669(self__.it,meta30670__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30671){
var self__ = this;
var _30671__$1 = this;
return self__.meta30670;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__30678 = (arguments.length - (1));
switch (G__30678) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669.prototype.apply = (function (self__,args30674){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30674)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.it.cljs$core$IFn$_invoke$arity$0 ? self__.it.cljs$core$IFn$_invoke$arity$0() : self__.it.call(null));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return cljs.core.deref(self__.it);
}catch (e30690){if((e30690 instanceof missionary.Cancelled)){
var e = e30690;
return (new hyperfiddle.electric.Failure(e));
} else {
throw e30690;

}
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),new cljs.core.Symbol(null,"meta30670","meta30670",871783994,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime30669");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime30669");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime30669.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime30669 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime30669(it__$1,meta30670){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669(it__$1,meta30670));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime30669(it,cljs.core.PersistentArrayMap.EMPTY));
}));
hyperfiddle.electric.impl.runtime.signal = (function hyperfiddle$electric$impl$runtime$signal(_LT_x){
return missionary.core.signal_BANG_(hyperfiddle.electric.impl.runtime.lift_cancelled(_LT_x));
});
hyperfiddle.electric.impl.runtime.this$ = cljs.core.volatile_BANG_(null);
hyperfiddle.electric.impl.runtime.context_slot_root = ((0) | (0));
hyperfiddle.electric.impl.runtime.context_slot_local_id = ((1) | (0));
hyperfiddle.electric.impl.runtime.context_slot_remote_id = ((2) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_rpos = ((3) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_wpos = ((4) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_buffer = ((5) | (0));
hyperfiddle.electric.impl.runtime.context_slot_frame_store = ((6) | (0));
hyperfiddle.electric.impl.runtime.context_slot_event = ((7) | (0));
hyperfiddle.electric.impl.runtime.context_slot_check = ((8) | (0));
hyperfiddle.electric.impl.runtime.context_slot_notifier = ((9) | (0));
hyperfiddle.electric.impl.runtime.context_slot_terminator = ((10) | (0));
hyperfiddle.electric.impl.runtime.context_slot_incoming = ((11) | (0));
hyperfiddle.electric.impl.runtime.context_slots = ((12) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_parent = ((0) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_position = ((1) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_buffer = ((2) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_size = ((3) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_foreigns = ((4) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_hooks = ((5) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_vars = ((6) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_remote = ((7) | (0));
hyperfiddle.electric.impl.runtime.tier_slots = ((8) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_context = ((0) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_parent = ((1) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_id = ((2) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_position = ((3) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_foreign = ((4) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_static = ((5) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_dynamic = ((6) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_variables = ((7) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_sources = ((8) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_targets = ((9) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_inputs = ((10) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_tiers = ((11) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_constants = ((12) | (0));
hyperfiddle.electric.impl.runtime.frame_slots = ((13) | (0));
hyperfiddle.electric.impl.runtime.input_slot_frame = ((0) | (0));
hyperfiddle.electric.impl.runtime.input_slot_notifier = ((1) | (0));
hyperfiddle.electric.impl.runtime.input_slot_terminator = ((2) | (0));
hyperfiddle.electric.impl.runtime.input_slot_current = ((3) | (0));
hyperfiddle.electric.impl.runtime.input_slot_dirty = ((4) | (0));
hyperfiddle.electric.impl.runtime.input_slot_check = ((5) | (0));
hyperfiddle.electric.impl.runtime.input_slot_pending = ((6) | (0));
hyperfiddle.electric.impl.runtime.input_slot_cancel = ((7) | (0));
hyperfiddle.electric.impl.runtime.input_slots = ((8) | (0));
hyperfiddle.electric.impl.runtime.output_slot_input = ((0) | (0));
hyperfiddle.electric.impl.runtime.output_slot_id = ((1) | (0));
hyperfiddle.electric.impl.runtime.output_slot_iterator = ((2) | (0));
hyperfiddle.electric.impl.runtime.output_slot_current = ((3) | (0));
hyperfiddle.electric.impl.runtime.output_slot_dirty = ((4) | (0));
hyperfiddle.electric.impl.runtime.output_slot_done = ((5) | (0));
hyperfiddle.electric.impl.runtime.output_slot_prev = ((6) | (0));
hyperfiddle.electric.impl.runtime.output_slot_next = ((7) | (0));
hyperfiddle.electric.impl.runtime.output_slot_time = ((8) | (0));
hyperfiddle.electric.impl.runtime.output_slots = ((9) | (0));
hyperfiddle.electric.impl.runtime.aswap = (function hyperfiddle$electric$impl$runtime$aswap(var_args){
var G__30749 = arguments.length;
switch (G__30749) {
case 3:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___31028 = arguments.length;
var i__5770__auto___31029 = (0);
while(true){
if((i__5770__auto___31029 < len__5769__auto___31028)){
args_arr__5794__auto__.push((arguments[i__5770__auto___31029]));

var G__31030 = (i__5770__auto___31029 + (1));
i__5770__auto___31029 = G__31030;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((6)),(0),null));
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3 = (function (arr,slot,f){
return (arr[slot] = (function (){var G__30759 = (arr[slot]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30759) : f.call(null,G__30759));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4 = (function (arr,slot,f,a){
return (arr[slot] = (function (){var G__30764 = (arr[slot]);
var G__30765 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30764,G__30765) : f.call(null,G__30764,G__30765));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5 = (function (arr,slot,f,a,b){
return (arr[slot] = (function (){var G__30767 = (arr[slot]);
var G__30768 = a;
var G__30769 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30767,G__30768,G__30769) : f.call(null,G__30767,G__30768,G__30769));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6 = (function (arr,slot,f,a,b,c){
return (arr[slot] = (function (){var G__30770 = (arr[slot]);
var G__30771 = a;
var G__30772 = b;
var G__30773 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__30770,G__30771,G__30772,G__30773) : f.call(null,G__30770,G__30771,G__30772,G__30773));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic = (function (arr,slot,f,a,b,c,ds){
return (arr[slot] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(arr[slot]),a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ds], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$applyTo = (function (seq30740){
var G__30741 = cljs.core.first(seq30740);
var seq30740__$1 = cljs.core.next(seq30740);
var G__30742 = cljs.core.first(seq30740__$1);
var seq30740__$2 = cljs.core.next(seq30740__$1);
var G__30743 = cljs.core.first(seq30740__$2);
var seq30740__$3 = cljs.core.next(seq30740__$2);
var G__30744 = cljs.core.first(seq30740__$3);
var seq30740__$4 = cljs.core.next(seq30740__$3);
var G__30745 = cljs.core.first(seq30740__$4);
var seq30740__$5 = cljs.core.next(seq30740__$4);
var G__30746 = cljs.core.first(seq30740__$5);
var seq30740__$6 = cljs.core.next(seq30740__$5);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30741,G__30742,G__30743,G__30744,G__30745,G__30746,seq30740__$6);
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.runtime.doto_aset = (function hyperfiddle$electric$impl$runtime$doto_aset(arr,k,v){
var G__30781 = arr;
(G__30781[(k | (0))] = v);

return G__30781;
});
hyperfiddle.electric.impl.runtime.make_context = (function hyperfiddle$electric$impl$runtime$make_context(){
var G__30785 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.context_slots);
(G__30785[hyperfiddle.electric.impl.runtime.context_slot_local_id] = cljs.core.identity((0)));

(G__30785[hyperfiddle.electric.impl.runtime.context_slot_remote_id] = cljs.core.identity((0)));

(G__30785[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = cljs.core.identity((0)));

(G__30785[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = cljs.core.identity((0)));

(G__30785[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2)));

(G__30785[hyperfiddle.electric.impl.runtime.context_slot_frame_store] = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return G__30785;
});
hyperfiddle.electric.impl.runtime.make_tier = (function hyperfiddle$electric$impl$runtime$make_tier(parent,position){
return ((parent[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))] = (function (){var G__30791 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.tier_slots);
(G__30791[hyperfiddle.electric.impl.runtime.tier_slot_parent] = parent);

(G__30791[hyperfiddle.electric.impl.runtime.tier_slot_position] = position);

(G__30791[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)));

(G__30791[hyperfiddle.electric.impl.runtime.tier_slot_size] = cljs.core.identity(((0) | (0))));

(G__30791[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.PersistentArrayMap.EMPTY);

(G__30791[hyperfiddle.electric.impl.runtime.tier_slot_hooks] = cljs.core.PersistentArrayMap.EMPTY);

return G__30791;
})());
});
hyperfiddle.electric.impl.runtime.make_frame = (function hyperfiddle$electric$impl$runtime$make_frame(context,parent,id,position,foreign,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buffer,vars,boot){
var tier_count = (variable_count + source_count);
var frame = (function (){var G__30797 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.frame_slots);
(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_context] = context);

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_parent] = parent);

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_id] = id);

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_position] = position);

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_foreign] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(foreign)));

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_static] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(static$)));

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_dynamic] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(dynamic)));

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_variables] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(variable_count));

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_sources] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(source_count));

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_targets] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(target_count));

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_inputs] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(input_count));

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_tiers] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(tier_count));

(G__30797[hyperfiddle.electric.impl.runtime.frame_slot_constants] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(constant_count));

return G__30797;
})();
var n__5636__auto___31052 = tier_count;
var i_31053 = (0);
while(true){
if((i_31053 < n__5636__auto___31052)){
hyperfiddle.electric.impl.runtime.make_tier(frame,i_31053);

var G__31054 = (i_31053 + (1));
i_31053 = G__31054;
continue;
} else {
}
break;
}

(buffer[(position | (0))] = frame);

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.assoc_BANG_,id,frame);

var prevs = cljs.core.reduce_kv((function (m,v,_LT_x){
var prev = (vars[(v | (0))]);
var proc = hyperfiddle.electric.impl.runtime.signal(_LT_x);
((frame[hyperfiddle.electric.impl.runtime.frame_slot_foreign])[cljs.core.count(m)] = proc);

(vars[(v | (0))] = proc);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,prev);
}),cljs.core.PersistentArrayMap.EMPTY,foreign);
cljs.core.reduce_kv((function (arr,i,_LT_x){
(arr[(i | (0))] = hyperfiddle.electric.impl.runtime.signal(_LT_x));

return arr;
}),(frame[hyperfiddle.electric.impl.runtime.frame_slot_static]),static$);

cljs.core.reduce_kv((function (arr,i,v){
(arr[(i | (0))] = hyperfiddle.electric.impl.runtime.signal((vars[(v | (0))])));

return arr;
}),(frame[hyperfiddle.electric.impl.runtime.frame_slot_dynamic]),dynamic);

var result = (boot.cljs$core$IFn$_invoke$arity$2 ? boot.cljs$core$IFn$_invoke$arity$2(frame,vars) : boot.call(null,frame,vars));
cljs.core.reduce_kv(hyperfiddle.electric.impl.runtime.doto_aset,vars,prevs);

return result;
});
hyperfiddle.electric.impl.runtime.input_ready = (function hyperfiddle$electric$impl$runtime$input_ready(input){
if(((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]) == null)){
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

var fexpr__30803 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__30803.cljs$core$IFn$_invoke$arity$0 ? fexpr__30803.cljs$core$IFn$_invoke$arity$0() : fexpr__30803.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.output_dirty = (function hyperfiddle$electric$impl$runtime$output_dirty(output){
var input = (output[hyperfiddle.electric.impl.runtime.output_slot_input]);
var dirty = (input[hyperfiddle.electric.impl.runtime.input_slot_dirty]);
(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = dirty);

(input[hyperfiddle.electric.impl.runtime.input_slot_dirty] = output);

if((dirty == null)){
if((input === (input[hyperfiddle.electric.impl.runtime.input_slot_check]))){
var frame_31058 = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context_31059 = (frame_31058[hyperfiddle.electric.impl.runtime.frame_slot_context]);
var check_31061 = (context_31059[hyperfiddle.electric.impl.runtime.context_slot_check]);
(context_31059[hyperfiddle.electric.impl.runtime.context_slot_check] = input);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = check_31061);

if(((context_31059[hyperfiddle.electric.impl.runtime.context_slot_event]) == null)){
(context_31059[hyperfiddle.electric.impl.runtime.context_slot_event] = hyperfiddle.electric.impl.runtime.empty_event);

var fexpr__30804_31062 = (context_31059[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
(fexpr__30804_31062.cljs$core$IFn$_invoke$arity$0 ? fexpr__30804_31062.cljs$core$IFn$_invoke$arity$0() : fexpr__30804_31062.call(null));
} else {
}
} else {
}
} else {
}

return hyperfiddle.electric.impl.runtime.input_ready(input);
});
hyperfiddle.electric.impl.runtime.output_spawn = (function hyperfiddle$electric$impl$runtime$output_spawn(input,output){
if((output == null)){
} else {
(output[hyperfiddle.electric.impl.runtime.output_slot_input] = input);

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = (function (){var G__30806 = (function (){
return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var G__30807 = (function (){
(output[hyperfiddle.electric.impl.runtime.output_slot_done] = true);

return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var fexpr__30805 = (output[hyperfiddle.electric.impl.runtime.output_slot_iterator]);
return (fexpr__30805.cljs$core$IFn$_invoke$arity$2 ? fexpr__30805.cljs$core$IFn$_invoke$arity$2(G__30806,G__30807) : fexpr__30805.call(null,G__30806,G__30807));
})());
}

return input;
});
hyperfiddle.electric.impl.runtime.make_output = (function hyperfiddle$electric$impl$runtime$make_output(id,_LT_x){
var output = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.output_slots);
(output[hyperfiddle.electric.impl.runtime.output_slot_id] = id);

(output[hyperfiddle.electric.impl.runtime.output_slot_done] = false);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_current] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = _LT_x);

return output;
});
hyperfiddle.electric.impl.runtime.input_cancel = (function hyperfiddle$electric$impl$runtime$input_cancel(input){
var c = (input[hyperfiddle.electric.impl.runtime.input_slot_cancel]);
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = true);

if((c == null)){
var fexpr__30816 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__30816.cljs$core$IFn$_invoke$arity$0 ? fexpr__30816.cljs$core$IFn$_invoke$arity$0() : fexpr__30816.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.input_change = (function hyperfiddle$electric$impl$runtime$input_change(input,x){
(input[hyperfiddle.electric.impl.runtime.input_slot_current] = x);

return hyperfiddle.electric.impl.runtime.input_ready(input);
});
hyperfiddle.electric.impl.runtime.input_freeze = (function hyperfiddle$electric$impl$runtime$input_freeze(input){
(input[hyperfiddle.electric.impl.runtime.input_slot_pending] = (-1));

if(((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]) == null)){
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

var fexpr__30818 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
return (fexpr__30818.cljs$core$IFn$_invoke$arity$0 ? fexpr__30818.cljs$core$IFn$_invoke$arity$0() : fexpr__30818.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.update_event = (function hyperfiddle$electric$impl$runtime$update_event(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31066 = arguments.length;
var i__5770__auto___31067 = (0);
while(true){
if((i__5770__auto___31067 < len__5769__auto___31066)){
args__5775__auto__.push((arguments[i__5770__auto___31067]));

var G__31069 = (i__5770__auto___31067 + (1));
i__5770__auto___31067 = G__31069;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic = (function (context,k,f,args){
var temp__5806__auto__ = (context[hyperfiddle.electric.impl.runtime.context_slot_event]);
if((temp__5806__auto__ == null)){
(context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,hyperfiddle.electric.impl.runtime.empty_event,k,f,args));

var fexpr__30826 = (context[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
return (fexpr__30826.cljs$core$IFn$_invoke$arity$0 ? fexpr__30826.cljs$core$IFn$_invoke$arity$0() : fexpr__30826.call(null));
} else {
var event = temp__5806__auto__;
return (context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,event,k,f,args));
}
}));

(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$applyTo = (function (seq30819){
var G__30820 = cljs.core.first(seq30819);
var seq30819__$1 = cljs.core.next(seq30819);
var G__30821 = cljs.core.first(seq30819__$1);
var seq30819__$2 = cljs.core.next(seq30819__$1);
var G__30822 = cljs.core.first(seq30819__$2);
var seq30819__$3 = cljs.core.next(seq30819__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30820,G__30821,G__30822,seq30819__$3);
}));

hyperfiddle.electric.impl.runtime.input_check = (function hyperfiddle$electric$impl$runtime$input_check(input){
var frame = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context = (frame[hyperfiddle.electric.impl.runtime.frame_slot_context]);
while(true){
var temp__5806__auto__ = (input[hyperfiddle.electric.impl.runtime.input_slot_dirty]);
if((temp__5806__auto__ == null)){
return null;
} else {
var output = temp__5806__auto__;
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (frame[hyperfiddle.electric.impl.runtime.frame_slot_id])),(output[hyperfiddle.electric.impl.runtime.output_slot_id])], null);
(input[hyperfiddle.electric.impl.runtime.input_slot_dirty] = (output[hyperfiddle.electric.impl.runtime.output_slot_dirty]));

(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = output);

if(cljs.core.truth_((output[hyperfiddle.electric.impl.runtime.output_slot_done]))){
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
} else {
var x_31080 = cljs.core.deref((output[hyperfiddle.electric.impl.runtime.output_slot_iterator]));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((output[hyperfiddle.electric.impl.runtime.output_slot_current]),(output[hyperfiddle.electric.impl.runtime.output_slot_current] = x_31080))){
} else {
var buffer_31082 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var wpos_31083 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
var temp__5806__auto___31084__$1 = (output[hyperfiddle.electric.impl.runtime.output_slot_time]);
if((temp__5806__auto___31084__$1 == null)){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.inc);
} else {
var t_31085 = temp__5806__auto___31084__$1;
var p_31086 = (output[hyperfiddle.electric.impl.runtime.output_slot_prev]);
var n_31087 = (output[hyperfiddle.electric.impl.runtime.output_slot_next]);
(buffer_31082[t_31085] = (((p_31086 === output))?null:(function (){
(p_31086[hyperfiddle.electric.impl.runtime.output_slot_next] = n_31087);

return (n_31087[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_31086);
})()
));
}

(output[hyperfiddle.electric.impl.runtime.output_slot_time] = wpos_31083);

var temp__5806__auto___31089__$1 = (buffer_31082[wpos_31083]);
if((temp__5806__auto___31089__$1 == null)){
(buffer_31082[wpos_31083] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);
} else {
var p_31091 = temp__5806__auto___31089__$1;
var n_31092 = (p_31091[hyperfiddle.electric.impl.runtime.output_slot_next]);
(p_31091[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(n_31092[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_31091);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = n_31092);
}

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,x_31080], 0));
}
}

continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.input_transfer = (function hyperfiddle$electric$impl$runtime$input_transfer(input){
hyperfiddle.electric.impl.runtime.input_check(input);

if(cljs.core.truth_((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]))){
var fexpr__30828_31094 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__30828_31094.cljs$core$IFn$_invoke$arity$0 ? fexpr__30828_31094.cljs$core$IFn$_invoke$arity$0() : fexpr__30828_31094.call(null));

throw (new missionary.Cancelled());
} else {
var G__30829 = (input[hyperfiddle.electric.impl.runtime.input_slot_pending]);
switch (G__30829) {
case (-1):
var fexpr__30830_31096 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__30830_31096.cljs$core$IFn$_invoke$arity$0 ? fexpr__30830_31096.cljs$core$IFn$_invoke$arity$0() : fexpr__30830_31096.call(null));

return (input[hyperfiddle.electric.impl.runtime.input_slot_current]);

break;
case (0):
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = null);

return (input[hyperfiddle.electric.impl.runtime.input_slot_current]);

break;
default:
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = null);

return hyperfiddle.electric.impl.runtime.pending;

}
}
});
hyperfiddle.electric.impl.runtime.make_input = (function hyperfiddle$electric$impl$runtime$make_input(frame,deps){
var input = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.input_slots);
(input[hyperfiddle.electric.impl.runtime.input_slot_frame] = frame);

(input[hyperfiddle.electric.impl.runtime.input_slot_pending] = (0));

(input[hyperfiddle.electric.impl.runtime.input_slot_current] = hyperfiddle.electric.impl.runtime.pending);

(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = input);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.output_spawn,input,deps);
});
hyperfiddle.electric.impl.runtime.input_spawn = (function hyperfiddle$electric$impl$runtime$input_spawn(frame,slot,deps){
return missionary.core.signal_BANG_((function (n,t){
var input = hyperfiddle.electric.impl.runtime.make_input(frame,deps);
(input[hyperfiddle.electric.impl.runtime.input_slot_notifier] = n);

(input[hyperfiddle.electric.impl.runtime.input_slot_terminator] = t);

((frame[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[(slot | (0))] = input);

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return hyperfiddle.electric.impl.runtime.__GT_It(input,hyperfiddle.electric.impl.runtime.input_cancel,hyperfiddle.electric.impl.runtime.input_transfer);
}));
});
hyperfiddle.electric.impl.runtime.check_unbound_var = (function hyperfiddle$electric$impl$runtime$check_unbound_var(debug_info,_LT_x){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","unbound","hyperfiddle.electric.impl.runtime/unbound",63043117),x)){
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.impl.runtime.error(["Unbound var `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215).cljs$core$IFn$_invoke$arity$1(debug_info)),"`"].join(''))));
} else {
return x;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_x], 0));
});
hyperfiddle.electric.impl.runtime.static$ = (function hyperfiddle$electric$impl$runtime$static(frame,slot){
return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_static])[(slot | (0))]);
});
hyperfiddle.electric.impl.runtime.dynamic = (function hyperfiddle$electric$impl$runtime$dynamic(frame,slot,debug_info){
return hyperfiddle.electric.impl.runtime.check_unbound_var(debug_info,((frame[hyperfiddle.electric.impl.runtime.frame_slot_dynamic])[(slot | (0))]));
});
/**
 * A snapshot of the tree below given frame, as nested vectors. Frame vectors start with their id.
 */
hyperfiddle.electric.impl.runtime.tree = (function hyperfiddle$electric$impl$runtime$tree(f){
var tiers = (f[hyperfiddle.electric.impl.runtime.frame_slot_tiers]);
var v = cljs.core.PersistentVector.EMPTY;
var i = ((0) | (0));
while(true){
if((i === tiers.length)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(f[hyperfiddle.electric.impl.runtime.frame_slot_id]),new cljs.core.Keyword(null,"inputs","inputs",865803858),(f[hyperfiddle.electric.impl.runtime.frame_slot_inputs]).length,new cljs.core.Keyword(null,"targets","targets",2014963406),(f[hyperfiddle.electric.impl.runtime.frame_slot_targets]).length,new cljs.core.Keyword(null,"sources","sources",-321166424),(f[hyperfiddle.electric.impl.runtime.frame_slot_sources]).length,new cljs.core.Keyword(null,"tiers","tiers",-46242789),v], null);
} else {
var G__31101 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(function (){var tier = (tiers[i]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var v__$1 = cljs.core.PersistentVector.EMPTY;
var i__$1 = ((0) | (0));
while(true){
if((i__$1 === (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]))){
return v__$1;
} else {
var G__31104 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v__$1,(function (){var G__30834 = (buf[i__$1]);
return (hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1(G__30834) : hyperfiddle.electric.impl.runtime.tree.call(null,G__30834));
})());
var G__31105 = (i__$1 + (1));
v__$1 = G__31104;
i__$1 = G__31105;
continue;
}
break;
}
})());
var G__31102 = (i + (1));
v = G__31101;
i = G__31102;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.find_scope = (function hyperfiddle$electric$impl$runtime$find_scope(f){
var f__$1 = f;
var s = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__5806__auto__ = (f__$1[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5806__auto__ == null)){
return s;
} else {
var tier = temp__5806__auto__;
var G__31106 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var G__31107 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,cljs.core.keys((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks])));
f__$1 = G__31106;
s = G__31107;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.frame_walk_tiers = (function hyperfiddle$electric$impl$runtime$frame_walk_tiers(frame,step,k,cb,start){
var tiers = (frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers]);
var size = tiers.length;
var back = (((1) - step) >> (1));
var back_inc_size = (back * (size + (1)));
var stop = (size - back_inc_size);
var i = (((start == null))?(back_inc_size - (1)):start);
while(true){
var i__$1 = (i + step);
if((i__$1 === stop)){
return null;
} else {
var temp__5806__auto__ = (function (){var tier = (tiers[i__$1]);
var temp__5806__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k);
if((temp__5806__auto__ == null)){
return (hyperfiddle.electric.impl.runtime.tier_walk_frames.cljs$core$IFn$_invoke$arity$5 ? hyperfiddle.electric.impl.runtime.tier_walk_frames.cljs$core$IFn$_invoke$arity$5(tier,step,k,cb,null) : hyperfiddle.electric.impl.runtime.tier_walk_frames.call(null,tier,step,k,cb,null));
} else {
var v = temp__5806__auto__;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(v) : cb.call(null,v));
}
})();
if((temp__5806__auto__ == null)){
var G__31115 = i__$1;
i = G__31115;
continue;
} else {
var x = temp__5806__auto__;
return x;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.tier_walk_frames = (function hyperfiddle$electric$impl$runtime$tier_walk_frames(tier,step,k,cb,start){
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var size = (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]);
var back = (((1) - step) >> (1));
var back_inc_size = (back * (size + (1)));
var stop = (size - back_inc_size);
var i = (((start == null))?(back_inc_size - (1)):start);
while(true){
var i__$1 = (i + step);
if((i__$1 === stop)){
return null;
} else {
var temp__5806__auto__ = hyperfiddle.electric.impl.runtime.frame_walk_tiers((buf[i__$1]),step,k,cb,null);
if((temp__5806__auto__ == null)){
var G__31117 = i__$1;
i = G__31117;
continue;
} else {
var x = temp__5806__auto__;
return x;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.notify_rotate = (function hyperfiddle$electric$impl$runtime$notify_rotate(f,k){
var anchor = (function (){var f__$1 = f;
while(true){
var tier = (f__$1[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if(cljs.core.contains_QMARK_((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
return null;
} else {
var temp__5806__auto__ = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier,(1),k,cljs.core.identity,(f__$1[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5806__auto__ == null)){
var G__31118 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
f__$1 = G__31118;
continue;
} else {
var a = temp__5806__auto__;
return a;
}
}
break;
}
})();
hyperfiddle.electric.impl.runtime.frame_walk_tiers(f,(1),k,(function (target){
return (k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(target,anchor) : k.call(null,target,anchor));
}),null);

return f;
});
hyperfiddle.electric.impl.runtime.array_call = (function hyperfiddle$electric$impl$runtime$array_call(arr){
var n__5636__auto__ = arr.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var fexpr__30839_31122 = (arr[i]);
(fexpr__30839_31122.cljs$core$IFn$_invoke$arity$0 ? fexpr__30839_31122.cljs$core$IFn$_invoke$arity$0() : fexpr__30839_31122.call(null));

var G__31124 = (i + (1));
i = G__31124;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.runtime.frame_dispose = (function hyperfiddle$electric$impl$runtime$frame_dispose(f){
(f[hyperfiddle.electric.impl.runtime.frame_slot_position] = null);

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_static]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_dynamic]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_foreign]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_variables]));

return hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_constants]));
});
hyperfiddle.electric.impl.runtime.frame_rotate = (function hyperfiddle$electric$impl$runtime$frame_rotate(f,to){
var from = (f[hyperfiddle.electric.impl.runtime.frame_slot_position]);
var step = cljs.core.compare(to,from);
var tier = (f[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
if((to === from)){
var size = ((tier[hyperfiddle.electric.impl.runtime.tier_slot_size]) - (1));
var i_31125 = to;
while(true){
if((i_31125 === size)){
} else {
var j_31128 = (i_31125 + (1));
var y_31129 = (buf[(j_31128 | (0))]);
(y_31129[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_31125);

(buf[(i_31125 | (0))] = y_31129);

var G__31136 = j_31128;
i_31125 = G__31136;
continue;
}
break;
}

(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = size);

(buf[(size | (0))] = null);

return hyperfiddle.electric.impl.runtime.frame_dispose(f);
} else {
var i_31137 = from;
while(true){
var j_31140 = (i_31137 + step);
var y_31141 = (buf[(j_31140 | (0))]);
(y_31141[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_31137);

(buf[(i_31137 | (0))] = y_31141);

if((to === j_31140)){
} else {
var G__31142 = j_31140;
i_31137 = G__31142;
continue;
}
break;
}

(f[hyperfiddle.electric.impl.runtime.frame_slot_position] = to);

(buf[(to | (0))] = f);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.notify_rotate,f,hyperfiddle.electric.impl.runtime.find_scope(f));
}
});
/**
 * Move a frame. If origin position is equal to target position, frame is removed. Will search and call `hook`.
 */
hyperfiddle.electric.impl.runtime.move = (function hyperfiddle$electric$impl$runtime$move(tier,from,to){
var f = ((tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer])[(from | (0))]);
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((f[hyperfiddle.electric.impl.runtime.frame_slot_context]),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- (f[hyperfiddle.electric.impl.runtime.frame_slot_id])),new cljs.core.Keyword(null,"position","position",-2011731912),to], null)], 0));

return hyperfiddle.electric.impl.runtime.frame_rotate(f,to);
});
hyperfiddle.electric.impl.runtime.frame_cancel = (function hyperfiddle$electric$impl$runtime$frame_cancel(f){
var temp__5808__auto__ = (f[hyperfiddle.electric.impl.runtime.frame_slot_position]);
if((temp__5808__auto__ == null)){
return null;
} else {
var pos = temp__5808__auto__;
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((f[hyperfiddle.electric.impl.runtime.frame_slot_context]),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- (f[hyperfiddle.electric.impl.runtime.frame_slot_id])),new cljs.core.Keyword(null,"position","position",-2011731912),pos], null)], 0));

return hyperfiddle.electric.impl.runtime.frame_rotate(f,pos);
}
});
hyperfiddle.electric.impl.runtime.acopy = (function hyperfiddle$electric$impl$runtime$acopy(src,src_off,dest,dest_off,size){
var n__5636__auto___31148 = size;
var i_31149 = (0);
while(true){
if((i_31149 < n__5636__auto___31148)){
(dest[(dest_off + i_31149)] = (src[(src_off + i_31149)]));

var G__31150 = (i_31149 + (1));
i_31149 = G__31150;
continue;
} else {
}
break;
}

return dest;
});
hyperfiddle.electric.impl.runtime.constructor$ = (function hyperfiddle$electric$impl$runtime$constructor(static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,boot){
return (function (tier,id){
var par = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var pos = (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]);
var cap = buf.length;
var buf__$1 = (((pos < cap))?buf:(tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = hyperfiddle.electric.impl.runtime.acopy(buf,(0),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((cap << (1))),(0),cap)));
(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = (pos + (1)));

return hyperfiddle.electric.impl.runtime.make_frame((par[hyperfiddle.electric.impl.runtime.frame_slot_context]),tier,id,pos,(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns]),static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buf__$1,(tier[hyperfiddle.electric.impl.runtime.tier_slot_vars]),boot);
});
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.runtime.FrameIterator = (function (f,it){
this.f = f;
this.it = it;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__30841 = (arguments.length - (1));
switch (G__30841) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.apply = (function (self__,args30840){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30840)));
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return hyperfiddle.electric.impl.runtime.frame_cancel(self__.f);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.it);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)], null);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/FrameIterator");

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/FrameIterator");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/FrameIterator.
 */
hyperfiddle.electric.impl.runtime.__GT_FrameIterator = (function hyperfiddle$electric$impl$runtime$__GT_FrameIterator(f,it){
return (new hyperfiddle.electric.impl.runtime.FrameIterator(f,it));
});

hyperfiddle.electric.impl.runtime.constant = (function hyperfiddle$electric$impl$runtime$constant(frame,slot,ctor){
var consts = (frame[hyperfiddle.electric.impl.runtime.frame_slot_constants]);
var context = (frame[hyperfiddle.electric.impl.runtime.frame_slot_context]);
return (consts[slot] = hyperfiddle.electric.impl.runtime.signal(missionary.core.watch(cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to build frame - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var parent = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var id = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_local_id,cljs.core.inc);
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (frame[hyperfiddle.electric.impl.runtime.frame_slot_id])),slot], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (parent[hyperfiddle.electric.impl.runtime.frame_slot_id])),(tier[hyperfiddle.electric.impl.runtime.tier_slot_remote])], null)], null)], 0));

var _LT_x = (ctor.cljs$core$IFn$_invoke$arity$2 ? ctor.cljs$core$IFn$_invoke$arity$2(tier,id) : ctor.call(null,tier,id));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id);
return hyperfiddle.electric.impl.runtime.__GT_FrameIterator(f,(function (){var G__30842 = n;
var G__30843 = (function (){
hyperfiddle.electric.impl.runtime.frame_cancel(f);

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- id)], null)], 0));

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,(f[hyperfiddle.electric.impl.runtime.frame_slot_id]));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__30842,G__30843) : _LT_x.call(null,G__30842,G__30843));
})());
}
})))));
});
hyperfiddle.electric.impl.runtime.inject = (function hyperfiddle$electric$impl$runtime$inject(v){
return (function (_LT_x,_LT_y){
return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to inject - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var foreigns = (tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns]);
(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(foreigns,v,_LT_y));

try{return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(n,t) : _LT_x.call(null,n,t));
}finally {(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = foreigns);
}}
});
});
});
hyperfiddle.electric.impl.runtime.bind = (function hyperfiddle$electric$impl$runtime$bind(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31173 = arguments.length;
var i__5770__auto___31174 = (0);
while(true){
if((i__5770__auto___31174 < len__5769__auto___31173)){
args__5775__auto__.push((arguments[i__5770__auto___31174]));

var G__31175 = (i__5770__auto___31174 + (1));
i__5770__auto___31174 = G__31175;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.bind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.bind.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to bind - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
try{var fexpr__30847 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,tier,args);
return (fexpr__30847.cljs$core$IFn$_invoke$arity$2 ? fexpr__30847.cljs$core$IFn$_invoke$arity$2(n,t) : fexpr__30847.call(null,n,t));
}catch (e30846){var e = e30846;
return hyperfiddle.electric.impl.failer.run(e,n,t);
}}
});
}));

(hyperfiddle.electric.impl.runtime.bind.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.bind.cljs$lang$applyTo = (function (seq30844){
var G__30845 = cljs.core.first(seq30844);
var seq30844__$1 = cljs.core.next(seq30844);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30845,seq30844__$1);
}));

hyperfiddle.electric.impl.runtime.with$ = (function hyperfiddle$electric$impl$runtime$with(tier,_LT_x){
return (function (n,t){
var prev = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
cljs.core.vreset_BANG_(hyperfiddle.electric.impl.runtime.this$,tier);

try{return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(n,t) : _LT_x.call(null,n,t));
}finally {cljs.core.vreset_BANG_(hyperfiddle.electric.impl.runtime.this$,prev);
}});
});
hyperfiddle.electric.impl.runtime.clause = (function hyperfiddle$electric$impl$runtime$clause(var_args){
var G__30849 = arguments.length;
switch (G__30849) {
case 1:
return hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (e){
var G__30850 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30850) : f.call(null,G__30850));
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2 = (function (f,c){
return (function (e){
if((hyperfiddle.electric.debug.unwrap(e) instanceof c)){
var G__30851 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30851) : f.call(null,G__30851));
} else {
return null;
}
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.recover = (function hyperfiddle$electric$impl$runtime$recover(tier,catch$,_LT_x){
return hyperfiddle.electric.impl.yield2.yield$((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var temp__5808__auto__ = (function (){var G__30852 = x.error;
return (catch$.cljs$core$IFn$_invoke$arity$1 ? catch$.cljs$core$IFn$_invoke$arity$1(G__30852) : catch$.call(null,G__30852));
})();
if((temp__5808__auto__ == null)){
return null;
} else {
var _LT_c = temp__5808__auto__;
return hyperfiddle.electric.impl.runtime.with$(tier,_LT_c);
}
} else {
return null;
}
}),_LT_x);
});
hyperfiddle.electric.impl.runtime.variable = (function hyperfiddle$electric$impl$runtime$variable(frame,vars,position,slot,_LT__LT_x){
var tier = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))]);
(tier[hyperfiddle.electric.impl.runtime.tier_slot_remote] = slot);

(tier[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.aclone(vars));

return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_variables])[(slot | (0))] = missionary.core.signal_BANG_(missionary.core.cp_STAR_((function (){var cr30853_block_2 = (function hyperfiddle$electric$impl$runtime$variable_$_cr30853_block_2(cr30853_state){
try{var cr30853_place_3 = missionary.core.unpark();
var cr30853_place_4 = hyperfiddle.electric.impl.runtime.failure;
var cr30853_place_5 = cr30853_place_3;
var cr30853_place_6 = cr30853_place_4(cr30853_place_5);
var cr30853_place_7 = null;
if(cljs.core.truth_(cr30853_place_6)){
(cr30853_state[(0)] = cr30853_block_5);

(cr30853_state[(4)] = cr30853_place_3);

(cr30853_state[(3)] = cr30853_place_7);

return cr30853_state;
} else {
(cr30853_state[(0)] = cr30853_block_3);

(cr30853_state[(4)] = cr30853_place_3);

(cr30853_state[(3)] = cr30853_place_7);

return cr30853_state;
}
}catch (e30867){var cr30853_exception = e30867;
(cr30853_state[(0)] = cr30853_block_7);

(cr30853_state[(2)] = cr30853_exception);

return cr30853_state;
}});
var cr30853_block_0 = (function hyperfiddle$electric$impl$runtime$variable_$_cr30853_block_0(cr30853_state){
try{var cr30853_place_0 = null;
var cr30853_place_1 = false;
(cr30853_state[(0)] = cr30853_block_1);

(cr30853_state[(2)] = cr30853_place_0);

(cr30853_state[(1)] = cr30853_place_1);

return cr30853_state;
}catch (e30868){var cr30853_exception = e30868;
(cr30853_state[(0)] = null);

throw cr30853_exception;
}});
var cr30853_block_5 = (function hyperfiddle$electric$impl$runtime$variable_$_cr30853_block_5(cr30853_state){
try{var cr30853_place_3 = (cr30853_state[(4)]);
var cr30853_place_13 = cr30853_place_3;
(cr30853_state[(0)] = cr30853_block_6);

(cr30853_state[(4)] = null);

(cr30853_state[(3)] = cr30853_place_13);

return cr30853_state;
}catch (e30869){var cr30853_exception = e30869;
(cr30853_state[(0)] = cr30853_block_7);

(cr30853_state[(3)] = null);

(cr30853_state[(4)] = null);

(cr30853_state[(2)] = cr30853_exception);

return cr30853_state;
}});
var cr30853_block_7 = (function hyperfiddle$electric$impl$runtime$variable_$_cr30853_block_7(cr30853_state){
try{var cr30853_place_0 = (cr30853_state[(2)]);
var cr30853_place_14 = cr30853_place_0;
var cr30853_place_15 = cr30853_place_14;
var cr30853_place_16 = (new hyperfiddle.electric.Failure(cr30853_place_15));
(cr30853_state[(0)] = cr30853_block_8);

(cr30853_state[(2)] = cr30853_place_16);

return cr30853_state;
}catch (e30870){var cr30853_exception = e30870;
(cr30853_state[(0)] = cr30853_block_8);

(cr30853_state[(1)] = true);

(cr30853_state[(2)] = cr30853_exception);

return cr30853_state;
}});
var cr30853_block_1 = (function hyperfiddle$electric$impl$runtime$variable_$_cr30853_block_1(cr30853_state){
try{var cr30853_place_2 = _LT__LT_x;
(cr30853_state[(0)] = cr30853_block_2);

return missionary.core.switch$(cr30853_place_2);
}catch (e30871){var cr30853_exception = e30871;
(cr30853_state[(0)] = cr30853_block_7);

(cr30853_state[(2)] = cr30853_exception);

return cr30853_state;
}});
var cr30853_block_4 = (function hyperfiddle$electric$impl$runtime$variable_$_cr30853_block_4(cr30853_state){
try{var cr30853_place_12 = missionary.core.unpark();
(cr30853_state[(0)] = cr30853_block_6);

(cr30853_state[(3)] = cr30853_place_12);

return cr30853_state;
}catch (e30872){var cr30853_exception = e30872;
(cr30853_state[(0)] = cr30853_block_7);

(cr30853_state[(3)] = null);

(cr30853_state[(2)] = cr30853_exception);

return cr30853_state;
}});
var cr30853_block_3 = (function hyperfiddle$electric$impl$runtime$variable_$_cr30853_block_3(cr30853_state){
try{var cr30853_place_3 = (cr30853_state[(4)]);
var cr30853_place_8 = hyperfiddle.electric.impl.runtime.with$;
var cr30853_place_9 = tier;
var cr30853_place_10 = cr30853_place_3;
var cr30853_place_11 = (function (){var G__30875 = cr30853_place_9;
var G__30876 = cr30853_place_10;
var fexpr__30874 = cr30853_place_8;
return (fexpr__30874.cljs$core$IFn$_invoke$arity$2 ? fexpr__30874.cljs$core$IFn$_invoke$arity$2(G__30875,G__30876) : fexpr__30874.call(null,G__30875,G__30876));
})();
(cr30853_state[(0)] = cr30853_block_4);

(cr30853_state[(4)] = null);

return missionary.core.switch$(cr30853_place_11);
}catch (e30873){var cr30853_exception = e30873;
(cr30853_state[(0)] = cr30853_block_7);

(cr30853_state[(3)] = null);

(cr30853_state[(4)] = null);

(cr30853_state[(2)] = cr30853_exception);

return cr30853_state;
}});
var cr30853_block_8 = (function hyperfiddle$electric$impl$runtime$variable_$_cr30853_block_8(cr30853_state){
try{var cr30853_place_1 = (cr30853_state[(1)]);
var cr30853_place_0 = (cr30853_state[(2)]);
var cr30853_place_17 = (cljs.core.truth_(cr30853_place_1)?(function(){throw cr30853_place_0})():cr30853_place_0);
(cr30853_state[(0)] = null);

(cr30853_state[(1)] = null);

(cr30853_state[(2)] = null);

return cr30853_place_17;
}catch (e30877){var cr30853_exception = e30877;
(cr30853_state[(0)] = null);

(cr30853_state[(1)] = null);

(cr30853_state[(2)] = null);

throw cr30853_exception;
}});
var cr30853_block_6 = (function hyperfiddle$electric$impl$runtime$variable_$_cr30853_block_6(cr30853_state){
try{var cr30853_place_7 = (cr30853_state[(3)]);
(cr30853_state[(0)] = cr30853_block_8);

(cr30853_state[(3)] = null);

(cr30853_state[(2)] = cr30853_place_7);

return cr30853_state;
}catch (e30878){var cr30853_exception = e30878;
(cr30853_state[(0)] = cr30853_block_7);

(cr30853_state[(3)] = null);

(cr30853_state[(2)] = cr30853_exception);

return cr30853_state;
}});
return cloroutine.impl.coroutine((function (){var G__30879 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__30879[(0)] = cr30853_block_0);

return G__30879;
})());
})())));
});
hyperfiddle.electric.impl.runtime.source = (function hyperfiddle$electric$impl$runtime$source(frame,vars,position,slot){
((frame[hyperfiddle.electric.impl.runtime.frame_slot_sources])[(slot | (0))] = (function (){var G__30880 = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))]);
(G__30880[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.aclone(vars));

return G__30880;
})());

return null;
});
hyperfiddle.electric.impl.runtime.target = (function hyperfiddle$electric$impl$runtime$target(frame,slot,ctor){
((frame[hyperfiddle.electric.impl.runtime.frame_slot_targets])[(slot | (0))] = ctor);

return null;
});
hyperfiddle.electric.impl.runtime.hook = (function hyperfiddle$electric$impl$runtime$hook(k,v,_LT_x){
if((!((v == null)))){
} else {
throw (new Error(["Assert failed: ","hook value must be non-nil.","\n","(some? v)"].join('')));
}

return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to hook - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var tier_31191__$1 = tier;
while(true){
var f_31192 = (tier_31191__$1[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var temp__5806__auto___31193__$1 = hyperfiddle.electric.impl.runtime.frame_walk_tiers(f_31192,(1),k,cljs.core.identity,(tier_31191__$1[hyperfiddle.electric.impl.runtime.tier_slot_position]));
if((temp__5806__auto___31193__$1 == null)){
var temp__5808__auto___31197 = (f_31192[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5808__auto___31197 == null)){
} else {
var tier_31198__$2 = temp__5808__auto___31197;
var temp__5806__auto___31199__$2 = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier_31198__$2,(1),k,cljs.core.identity,(f_31192[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5806__auto___31199__$2 == null)){
if(cljs.core.contains_QMARK_((tier_31198__$2[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,null) : k.call(null,v,null));
} else {
var G__31204 = tier_31198__$2;
tier_31191__$1 = G__31204;
continue;
}
} else {
var a_31205 = temp__5806__auto___31199__$2;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_31205) : k.call(null,v,a_31205));
}
}
} else {
var a_31206 = temp__5806__auto___31193__$1;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_31206) : k.call(null,v,a_31206));
}
break;
}

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.assoc,k,v);

var G__30881 = n;
var G__30882 = (function (){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.dissoc,k);

(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(v) : k.call(null,v));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__30881,G__30882) : _LT_x.call(null,G__30881,G__30882));
}
});
});
hyperfiddle.electric.impl.runtime.unbound = hyperfiddle.electric.impl.runtime.pure(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","unbound","hyperfiddle.electric.impl.runtime/unbound",63043117));
hyperfiddle.electric.impl.runtime.subject_at = (function hyperfiddle$electric$impl$runtime$subject_at(arr,slot){
return (function (_BANG_){
(arr[slot] = _BANG_);

return (function (){
return (arr[slot] = null);
});
});
});
hyperfiddle.electric.impl.runtime.context_ack = (function hyperfiddle$electric$impl$runtime$context_ack(context){
var rpos = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var buffer = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var output = (buffer[rpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]))){
throw hyperfiddle.electric.impl.runtime.error("Unexpected ack.");
} else {
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = ((rpos + (1)) & (buffer.length - (1))));

(buffer[rpos] = null);

var output__$1 = output;
while(true){
if((output__$1 == null)){
return null;
} else {
((output__$1[hyperfiddle.electric.impl.runtime.output_slot_prev])[hyperfiddle.electric.impl.runtime.output_slot_next] = null);

(output__$1[hyperfiddle.electric.impl.runtime.output_slot_prev] = null);

(output__$1[hyperfiddle.electric.impl.runtime.output_slot_time] = null);

var input_31215 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_input]);
if((hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input_31215,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.dec) === (0))){
hyperfiddle.electric.impl.runtime.input_ready(input_31215);
} else {
}

var G__31217 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_next]);
output__$1 = G__31217;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.context_cancel = (function hyperfiddle$electric$impl$runtime$context_cancel(context){
return hyperfiddle.electric.impl.runtime.update_event(context,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),cljs.core.identity);
});
hyperfiddle.electric.impl.runtime.context_transfer = (function hyperfiddle$electric$impl$runtime$context_transfer(context){
while(true){
var temp__5806__auto__ = (context[hyperfiddle.electric.impl.runtime.context_slot_check]);
if((temp__5806__auto__ == null)){
var event = (context[hyperfiddle.electric.impl.runtime.context_slot_event]);
if(cljs.core.contains_QMARK_(event,new cljs.core.Keyword(null,"cancel","cancel",-1964088360))){
var fexpr__30883_31218 = (context[hyperfiddle.electric.impl.runtime.context_slot_terminator]);
(fexpr__30883_31218.cljs$core$IFn$_invoke$arity$0 ? fexpr__30883_31218.cljs$core$IFn$_invoke$arity$0() : fexpr__30883_31218.call(null));

throw (new missionary.Cancelled());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502).cljs$core$IFn$_invoke$arity$1(event))){
} else {
var buffer_31219 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var size_31220 = buffer_31219.length;
var rpos_31221 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var wpos_31222 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos_31221,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = ((wpos_31222 + (1)) & (size_31220 - (1)))))){
var larger_31225 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((size_31220 << (1)));
var split_31226 = (size_31220 - rpos_31221);
hyperfiddle.electric.impl.runtime.acopy(buffer_31219,rpos_31221,larger_31225,(0),split_31226);

hyperfiddle.electric.impl.runtime.acopy(buffer_31219,(0),larger_31225,split_31226,rpos_31221);

var n__5636__auto___31229 = size_31220;
var t_31230 = (0);
while(true){
if((t_31230 < n__5636__auto___31229)){
var temp__5808__auto___31231 = (larger_31225[t_31230]);
if((temp__5808__auto___31231 == null)){
} else {
var output_31232 = temp__5808__auto___31231;
var o_31233 = output_31232;
while(true){
(o_31233[hyperfiddle.electric.impl.runtime.output_slot_time] = t_31230);

var n_31236 = (o_31233[hyperfiddle.electric.impl.runtime.output_slot_next]);
if((n_31236 === output_31232)){
} else {
var G__31237 = n_31236;
o_31233 = G__31237;
continue;
}
break;
}
}

var G__31238 = (t_31230 + (1));
t_31230 = G__31238;
continue;
} else {
}
break;
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = larger_31225);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = size_31220);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = (0));
} else {
}
}

(context[hyperfiddle.electric.impl.runtime.context_slot_event] = null);

return event;
} else {
var input = temp__5806__auto__;
(context[hyperfiddle.electric.impl.runtime.context_slot_check] = (input[hyperfiddle.electric.impl.runtime.input_slot_check]));

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = input);

hyperfiddle.electric.impl.runtime.input_check(input);

continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.eval_tree_inst = (function hyperfiddle$electric$impl$runtime$eval_tree_inst(context,inst){
var G__30884_31242 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(inst);
var G__30884_31243__$1 = (((G__30884_31242 instanceof cljs.core.Keyword))?G__30884_31242.fqn:null);
switch (G__30884_31243__$1) {
case "create":
var map__30885_31245 = inst;
var map__30885_31246__$1 = cljs.core.__destructure_map(map__30885_31245);
var vec__30886_31247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30885_31246__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target_frame_31248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30886_31247,(0),null);
var target_slot_31249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30886_31247,(1),null);
var vec__30889_31250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30885_31246__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var source_frame_31251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30889_31250,(0),null);
var source_slot_31252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30889_31250,(1),null);
var G__30893_31256 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),source_frame_31251)[hyperfiddle.electric.impl.runtime.frame_slot_sources])[source_slot_31252]);
var G__30894_31257 = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_remote_id,cljs.core.dec);
var fexpr__30892_31258 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),target_frame_31248)[hyperfiddle.electric.impl.runtime.frame_slot_targets])[target_slot_31249]);
(fexpr__30892_31258.cljs$core$IFn$_invoke$arity$2 ? fexpr__30892_31258.cljs$core$IFn$_invoke$arity$2(G__30893_31256,G__30894_31257) : fexpr__30892_31258.call(null,G__30893_31256,G__30894_31257));

break;
case "rotate":
hyperfiddle.electric.impl.runtime.frame_rotate(cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst)),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(inst));

break;
case "remove":
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30884_31243__$1)].join('')));

}

return context;
});
hyperfiddle.electric.impl.runtime.eval_change_inst = (function hyperfiddle$electric$impl$runtime$eval_change_inst(context,p__30895,value){
var vec__30896 = p__30895;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30896,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30896,(1),null);
hyperfiddle.electric.impl.runtime.input_change(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]),value);

return context;
});
hyperfiddle.electric.impl.runtime.eval_freeze_inst = (function hyperfiddle$electric$impl$runtime$eval_freeze_inst(context,p__30899){
var vec__30900 = p__30899;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30900,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30900,(1),null);
hyperfiddle.electric.impl.runtime.input_freeze(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]));

return context;
});
hyperfiddle.electric.impl.runtime.parse_event = (function hyperfiddle$electric$impl$runtime$parse_event(context,p__30903){
var map__30904 = p__30903;
var map__30904__$1 = cljs.core.__destructure_map(map__30904);
var acks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30904__$1,new cljs.core.Keyword(null,"acks","acks",707064729));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30904__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30904__$1,new cljs.core.Keyword(null,"change","change",-1163046502));
var freeze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30904__$1,new cljs.core.Keyword(null,"freeze","freeze",2043466309));
var n__5636__auto___31263 = acks;
var __31264 = (0);
while(true){
if((__31264 < n__5636__auto___31263)){
hyperfiddle.electric.impl.runtime.context_ack(context);

var G__31265 = (__31264 + (1));
__31264 = G__31265;
continue;
} else {
}
break;
}

cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.eval_tree_inst,context,tree);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,change)){
} else {
hyperfiddle.electric.impl.runtime.update_event(context,new cljs.core.Keyword(null,"acks","acks",707064729),cljs.core.inc);

cljs.core.reduce_kv(hyperfiddle.electric.impl.runtime.eval_change_inst,context,change);
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.eval_freeze_inst,context,freeze);
});
hyperfiddle.electric.impl.runtime.process_incoming_events = (function hyperfiddle$electric$impl$runtime$process_incoming_events(context,_GT_incoming){
return missionary.core.sample(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce,hyperfiddle.electric.impl.runtime.parse_event,context),_GT_incoming);
});
hyperfiddle.electric.impl.runtime.write_outgoing_events = (function hyperfiddle$electric$impl$runtime$write_outgoing_events(write,_GT_events){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30905_block_0 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr30905_block_0(cr30905_state){
try{var cr30905_place_0 = (1);
var cr30905_place_1 = _GT_events;
(cr30905_state[(0)] = cr30905_block_1);

return missionary.core.fork(cr30905_place_0,cr30905_place_1);
}catch (e30917){var cr30905_exception = e30917;
(cr30905_state[(0)] = null);

throw cr30905_exception;
}});
var cr30905_block_1 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr30905_block_1(cr30905_state){
try{var cr30905_place_2 = missionary.core.unpark();
var cr30905_place_3 = cljs.core._EQ_;
var cr30905_place_4 = cr30905_place_2;
var cr30905_place_5 = hyperfiddle.electric.impl.runtime.empty_event;
var cr30905_place_6 = (function (){var G__30920 = cr30905_place_4;
var G__30921 = cr30905_place_5;
var fexpr__30919 = cr30905_place_3;
return (fexpr__30919.cljs$core$IFn$_invoke$arity$2 ? fexpr__30919.cljs$core$IFn$_invoke$arity$2(G__30920,G__30921) : fexpr__30919.call(null,G__30920,G__30921));
})();
var cr30905_place_7 = null;
if(cljs.core.truth_(cr30905_place_6)){
(cr30905_state[(0)] = cr30905_block_4);

(cr30905_state[(1)] = cr30905_place_7);

return cr30905_state;
} else {
(cr30905_state[(0)] = cr30905_block_2);

(cr30905_state[(2)] = cr30905_place_2);

(cr30905_state[(1)] = cr30905_place_7);

return cr30905_state;
}
}catch (e30918){var cr30905_exception = e30918;
(cr30905_state[(0)] = null);

throw cr30905_exception;
}});
var cr30905_block_2 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr30905_block_2(cr30905_state){
try{var cr30905_place_2 = (cr30905_state[(2)]);
var cr30905_place_8 = write;
var cr30905_place_9 = cr30905_place_2;
var cr30905_place_10 = (function (){var G__30924 = cr30905_place_9;
var fexpr__30923 = cr30905_place_8;
return (fexpr__30923.cljs$core$IFn$_invoke$arity$1 ? fexpr__30923.cljs$core$IFn$_invoke$arity$1(G__30924) : fexpr__30923.call(null,G__30924));
})();
(cr30905_state[(0)] = cr30905_block_3);

(cr30905_state[(2)] = null);

return missionary.core.park(cr30905_place_10);
}catch (e30922){var cr30905_exception = e30922;
(cr30905_state[(0)] = null);

(cr30905_state[(1)] = null);

(cr30905_state[(2)] = null);

throw cr30905_exception;
}});
var cr30905_block_3 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr30905_block_3(cr30905_state){
try{var cr30905_place_11 = missionary.core.unpark();
(cr30905_state[(0)] = cr30905_block_5);

(cr30905_state[(1)] = cr30905_place_11);

return cr30905_state;
}catch (e30925){var cr30905_exception = e30925;
(cr30905_state[(0)] = null);

(cr30905_state[(1)] = null);

throw cr30905_exception;
}});
var cr30905_block_4 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr30905_block_4(cr30905_state){
try{var cr30905_place_12 = null;
(cr30905_state[(0)] = cr30905_block_5);

(cr30905_state[(1)] = cr30905_place_12);

return cr30905_state;
}catch (e30926){var cr30905_exception = e30926;
(cr30905_state[(0)] = null);

(cr30905_state[(1)] = null);

throw cr30905_exception;
}});
var cr30905_block_5 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr30905_block_5(cr30905_state){
try{var cr30905_place_7 = (cr30905_state[(1)]);
(cr30905_state[(0)] = null);

(cr30905_state[(1)] = null);

return cr30905_place_7;
}catch (e30927){var cr30905_exception = e30927;
(cr30905_state[(0)] = null);

(cr30905_state[(1)] = null);

throw cr30905_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30928 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__30928[(0)] = cr30905_block_0);

return G__30928;
})());
})(),missionary.core.ap_run);
});
hyperfiddle.electric.impl.runtime.peer = (function hyperfiddle$electric$impl$runtime$peer(var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,ctor){
return (function() {
var hyperfiddle$electric$impl$runtime$peer_$_rec = null;
var hyperfiddle$electric$impl$runtime$peer_$_rec__2 = (function (write,_QMARK_read){
return hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$3(write,_QMARK_read,hyperfiddle.electric.impl.runtime.pst);
});
var hyperfiddle$electric$impl$runtime$peer_$_rec__3 = (function (write,_QMARK_read,on_error){
return missionary.core.reactor_call((function (){
var context = hyperfiddle.electric.impl.runtime.make_context();
missionary.core.stream_BANG_(hyperfiddle.electric.impl.runtime.write_outgoing_events(write,missionary.core.stream_BANG_((function (n,t){
(context[hyperfiddle.electric.impl.runtime.context_slot_notifier] = n);

(context[hyperfiddle.electric.impl.runtime.context_slot_terminator] = t);

var temp__5808__auto___31279 = hyperfiddle.electric.impl.runtime.make_frame(context,null,(0),(0),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,context,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(var_count,hyperfiddle.electric.impl.runtime.unbound)),ctor);
if((temp__5808__auto___31279 == null)){
} else {
var _LT_main_31280 = temp__5808__auto___31279;
missionary.core.stream_BANG_(missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var G__30929 = x.error;
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__30929) : on_error.call(null,G__30929));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_main_31280], 0)));
}

return hyperfiddle.electric.impl.runtime.__GT_It(context,hyperfiddle.electric.impl.runtime.context_cancel,hyperfiddle.electric.impl.runtime.context_transfer);
}))));

return missionary.core.stream_BANG_(hyperfiddle.electric.impl.runtime.process_incoming_events(context,missionary.core.stream_BANG_(missionary.core.relieve(cljs.core.into,missionary.core.sample(cljs.core.vector,missionary.core.observe(_QMARK_read))))));
}));
});
hyperfiddle$electric$impl$runtime$peer_$_rec = function(write,_QMARK_read,on_error){
switch(arguments.length){
case 2:
return hyperfiddle$electric$impl$runtime$peer_$_rec__2.call(this,write,_QMARK_read);
case 3:
return hyperfiddle$electric$impl$runtime$peer_$_rec__3.call(this,write,_QMARK_read,on_error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$2 = hyperfiddle$electric$impl$runtime$peer_$_rec__2;
hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$3 = hyperfiddle$electric$impl$runtime$peer_$_rec__3;
return hyperfiddle$electric$impl$runtime$peer_$_rec;
})()
});
hyperfiddle.electric.impl.runtime.collapse = (function hyperfiddle$electric$impl$runtime$collapse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31282 = arguments.length;
var i__5770__auto___31283 = (0);
while(true){
if((i__5770__auto___31283 < len__5769__auto___31282)){
args__5775__auto__.push((arguments[i__5770__auto___31283]));

var G__31285 = (i__5770__auto___31283 + (1));
i__5770__auto___31283 = G__31285;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.collapse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.collapse.cljs$core$IFn$_invoke$arity$variadic = (function (s,n,f,args){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(cljs.core.pop,s),n),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.peek),cljs.core.take.cljs$core$IFn$_invoke$arity$1(n)),cljs.core.conj,args,cljs.core.iterate(cljs.core.pop,s))));
}));

(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$applyTo = (function (seq30930){
var G__30931 = cljs.core.first(seq30930);
var seq30930__$1 = cljs.core.next(seq30930);
var G__30932 = cljs.core.first(seq30930__$1);
var seq30930__$2 = cljs.core.next(seq30930__$1);
var G__30933 = cljs.core.first(seq30930__$2);
var seq30930__$3 = cljs.core.next(seq30930__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30931,G__30932,G__30933,seq30930__$3);
}));

hyperfiddle.electric.impl.runtime.snapshot = (function hyperfiddle$electric$impl$runtime$snapshot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31287 = arguments.length;
var i__5770__auto___31288 = (0);
while(true){
if((i__5770__auto___31288 < len__5769__auto___31287)){
args__5775__auto__.push((arguments[i__5770__auto___31288]));

var G__31290 = (i__5770__auto___31288 + (1));
i__5770__auto___31288 = G__31290;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.snapshot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.snapshot.cljs$core$IFn$_invoke$arity$variadic = (function (env,f,args){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,env,args));
}));

(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$applyTo = (function (seq30934){
var G__30935 = cljs.core.first(seq30934);
var seq30934__$1 = cljs.core.next(seq30934);
var G__30936 = cljs.core.first(seq30934__$1);
var seq30934__$2 = cljs.core.next(seq30934__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30935,G__30936,seq30934__$2);
}));

hyperfiddle.electric.impl.runtime.reverse_index = (function hyperfiddle$electric$impl$runtime$reverse_index(m){
return cljs.core.reduce_kv((function (v,x,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,x);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null)),m);
});
hyperfiddle.electric.impl.runtime.empty_frame = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"variable","variable",-281346492),(0),new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"constant","constant",-379609303),(0),new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"output","output",-1105869043),(0),new cljs.core.Keyword(null,"input","input",556931961),(0),new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.PersistentArrayMap.EMPTY], null);
hyperfiddle.electric.impl.runtime.compile = (function hyperfiddle$electric$impl$runtime$compile(inst,p__30937){
var map__30938 = p__30937;
var map__30938__$1 = cljs.core.__destructure_map(map__30938);
var fns = map__30938__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"input","input",556931961));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"target","target",253001721));
var main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"main","main",-2117802661));
var pub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"pub","pub",-1189143908));
var bind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"bind","bind",-113428417));
var lift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"lift","lift",903632035));
var variable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));
var do$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"do","do",46310725));
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var global__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"global","global",93595047));
var constant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"constant","constant",-379609303));
var static$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var nop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"nop","nop",-1754075182));
var inject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"inject","inject",-1882635533));
var dynamic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var literal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"literal","literal",1664775605));
var invoke = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"invoke","invoke",1145927159));
var vget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"vget","vget",1720343287));
return cljs.core.peek(hyperfiddle.electric.impl.runtime.collapse(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot((function hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,inst__$1){
var G__30939 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__30939__$1 = (((G__30939 instanceof cljs.core.Keyword))?G__30939.fqn:null);
switch (G__30939__$1) {
case "hyperfiddle.electric.impl.ir/nop":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,nop);

break;
case "hyperfiddle.electric.impl.ir/sub":
var p = (idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$1));
if((p < off)){
var f = new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(env);
var i = (function (){var G__30940 = p;
var G__30941 = cljs.core.count(f);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30940,G__30941) : f.call(null,G__30940,G__30941));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,p,i)),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(static$.cljs$core$IFn$_invoke$arity$1 ? static$.cljs$core$IFn$_invoke$arity$1(i) : static$.call(null,i)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(sub.cljs$core$IFn$_invoke$arity$1 ? sub.cljs$core$IFn$_invoke$arity$1(p) : sub.call(null,p)));
}

break;
case "hyperfiddle.electric.impl.ir/pub":
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(hyperfiddle$electric$impl$runtime$compile_$_walk(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),off,(idx + (1)),dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),pub,idx);

break;
case "hyperfiddle.electric.impl.ir/do":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,arg){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,arg);
}),env,deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),do$);

break;
case "hyperfiddle.electric.impl.ir/def":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(inject.cljs$core$IFn$_invoke$arity$1 ? inject.cljs$core$IFn$_invoke$arity$1(v) : inject.call(null,v)));

break;
case "hyperfiddle.electric.impl.ir/lift":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),lift);

break;
case "hyperfiddle.electric.impl.ir/eval":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__30943 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","form","hyperfiddle.electric.impl.ir/form",-534651915).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__30944 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","ns","hyperfiddle.electric.impl.ir/ns",1363348916).cljs$core$IFn$_invoke$arity$1(inst__$1);
var fexpr__30942 = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(fns);
return (fexpr__30942.cljs$core$IFn$_invoke$arity$2 ? fexpr__30942.cljs$core$IFn$_invoke$arity$2(G__30943,G__30944) : fexpr__30942.call(null,G__30943,G__30944));
})());

break;
case "hyperfiddle.electric.impl.ir/node":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
var env__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v);
if(cljs.core.truth_((dyn.cljs$core$IFn$_invoke$arity$1 ? dyn.cljs$core$IFn$_invoke$arity$1(v) : dyn.call(null,v)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(vget.cljs$core$IFn$_invoke$arity$1 ? vget.cljs$core$IFn$_invoke$arity$1(v) : vget.call(null,v)));
} else {
var d = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(env__$1);
var i = (function (){var G__30945 = v;
var G__30946 = cljs.core.count(d);
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(G__30945,G__30946) : d.call(null,G__30945,G__30946));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,v,i)),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(dynamic.cljs$core$IFn$_invoke$arity$2 ? dynamic.cljs$core$IFn$_invoke$arity$2(i,inst__$1) : dynamic.call(null,i,inst__$1)));
}

break;
case "hyperfiddle.electric.impl.ir/bind":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v),off,idx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dyn,v),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),bind,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$1))], 0));

break;
case "hyperfiddle.electric.impl.ir/apply":
var f = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(inst__$1);
var args = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","args","hyperfiddle.electric.impl.ir/args",291275628).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,inst__$2){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,inst__$2);
}),env,cljs.core.cons(f,args)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(cljs.core.count(args) + (1)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(invoke,(function (){var f__$1 = f;
while(true){
var G__30947 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(f__$1);
var G__30947__$1 = (((G__30947 instanceof cljs.core.Keyword))?G__30947.fqn:null);
switch (G__30947__$1) {
case "hyperfiddle.electric.impl.ir/global":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(f__$1))], 0));

break;
case "hyperfiddle.electric.impl.ir/node":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/literal":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","value","hyperfiddle.electric.impl.ir/value",-750005275).cljs$core$IFn$_invoke$arity$1(f__$1)], null);

break;
case "hyperfiddle.electric.impl.ir/eval":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"eval","eval",-1103567905));

break;
case "hyperfiddle.electric.impl.ir/sub":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/input":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/apply":
var G__31322 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(f__$1);
f__$1 = G__31322;
continue;

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"unknown-apply","unknown-apply",-1407042085),new cljs.core.Keyword(null,"op","op",-1882987955),f__$1], null);

}
break;
}
})()));

break;
case "hyperfiddle.electric.impl.ir/input":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,arg){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,arg);
}),env,deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),input);

break;
case "hyperfiddle.electric.impl.ir/output":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(output,inst__$1));

break;
case "hyperfiddle.electric.impl.ir/global":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__30948 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (global__$1.cljs$core$IFn$_invoke$arity$1 ? global__$1.cljs$core$IFn$_invoke$arity$1(G__30948) : global__$1.call(null,G__30948));
})());

break;
case "hyperfiddle.electric.impl.ir/literal":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__30949 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","value","hyperfiddle.electric.impl.ir/value",-750005275).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (literal.cljs$core$IFn$_invoke$arity$1 ? literal.cljs$core$IFn$_invoke$arity$1(G__30949) : literal.call(null,G__30949));
})());

break;
case "hyperfiddle.electric.impl.ir/variable":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"variable","variable",-281346492),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(3),variable);

break;
case "hyperfiddle.electric.impl.ir/source":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(env,new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),source);

break;
case "hyperfiddle.electric.impl.ir/constant":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,hyperfiddle.electric.impl.runtime.empty_frame], 0)),idx,idx,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"static","static",1214358571))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961)),cljs.core.select_keys(env,cljs.core.keys(hyperfiddle.electric.impl.runtime.empty_frame))], 0)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(10),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(constant,inst__$1));

break;
case "hyperfiddle.electric.impl.ir/target":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,inst__$2){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,idx,idx,cljs.core.PersistentHashSet.EMPTY,inst__$2);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,hyperfiddle.electric.impl.runtime.empty_frame], 0)),deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"static","static",1214358571))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961)),cljs.core.select_keys(env,cljs.core.keys(hyperfiddle.electric.impl.runtime.empty_frame))], 0)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(10),target);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30939__$1)].join('')));

}
})(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_frame,new cljs.core.Keyword(null,"vars","vars",-2046957217),(-1)),(0),(0),cljs.core.PersistentHashSet.EMPTY,inst),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,new cljs.core.Keyword(null,"vars","vars",-2046957217))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961))),(9),main));
});
hyperfiddle.electric.impl.runtime.sym = (function hyperfiddle$electric$impl$runtime$sym(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31329 = arguments.length;
var i__5770__auto___31330 = (0);
while(true){
if((i__5770__auto___31330 < len__5769__auto___31329)){
args__5775__auto__.push((arguments[i__5770__auto___31330]));

var G__31331 = (i__5770__auto___31330 + (1));
i__5770__auto___31330 = G__31331;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",args));
}));

(hyperfiddle.electric.impl.runtime.sym.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.sym.cljs$lang$applyTo = (function (seq30950){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30950));
}));

hyperfiddle.electric.impl.runtime.emit = (function hyperfiddle$electric$impl$runtime$emit(prefix,inst){
return hyperfiddle.electric.impl.runtime.compile(inst,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lift","lift",903632035),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"nop","nop",-1754075182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"inject","inject",-1882635533),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"vget","vget",1720343287),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"pub","pub",-1189143908),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"eval","eval",-1103567905)],[(function (f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))));
}),(function (form,remote,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),(new cljs.core.List(null,(remote + slot),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0))));
}),(function (deps,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-input","hyperfiddle.electric.impl.runtime/make-input",566179856,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,deps,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0))));
}),(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x),null,(1),null)))));
}),(function (idx){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0));
}),(function (debug_info,form,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),p], 0));
}),static$),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (i){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null))], 0))));
}),(function (remote,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","source","hyperfiddle.electric.impl.runtime/source",-2004538047,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),(new cljs.core.List(null,(remote + slot),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))], 0))));
}),(function (debug_info,form,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-output","hyperfiddle.electric.impl.runtime/make-output",1149148798,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0))));
}),null,(function (i,debug_info){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","dynamic","hyperfiddle.electric.impl.runtime/dynamic",1076292141,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null))], 0))));
}),(function (v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)))));
}),(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
}),(function() { 
var G__31349__delegate = function (debug_info,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0))));
};
var G__31349 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__31350__i = 0, G__31350__a = new Array(arguments.length -  1);
while (G__31350__i < G__31350__a.length) {G__31350__a[G__31350__i] = arguments[G__31350__i + 1]; ++G__31350__i;}
  forms = new cljs.core.IndexedSeq(G__31350__a,0,null);
} 
return G__31349__delegate.call(this,debug_info,forms);};
G__31349.cljs$lang$maxFixedArity = 1;
G__31349.cljs$lang$applyTo = (function (arglist__31351){
var debug_info = cljs.core.first(arglist__31351);
var forms = cljs.core.rest(arglist__31351);
return G__31349__delegate(debug_info,forms);
});
G__31349.cljs$core$IFn$_invoke$arity$variadic = G__31349__delegate;
return G__31349;
})()
,(function (v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))], 0))));
}),(function (deps,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,deps,null,(1),null))], 0))));
}),(function (deps,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","target","hyperfiddle.electric.impl.runtime/target",1172525771,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),p], 0));
}),static$),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-input","hyperfiddle.electric.impl.runtime/make-input",566179856,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,deps,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,var_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,cont,idx){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cont,null,(1),null))], 0))));
}),(function (form,slot,idx){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"prev","prev",43462301,null)], 0)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"res","res",245523648,null)], 0)),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"prev","prev",43462301,null)], 0)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"res","res",245523648,null)], 0)),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,_ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
})]));
});
hyperfiddle.electric.impl.runtime.juxt_with = (function hyperfiddle$electric$impl$runtime$juxt_with(var_args){
var G__30962 = arguments.length;
switch (G__30962) {
case 1:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___31357 = arguments.length;
var i__5770__auto___31358 = (0);
while(true){
if((i__5770__auto___31358 < len__5769__auto___31357)){
args_arr__5794__auto__.push((arguments[i__5770__auto___31358]));

var G__31360 = (i__5770__auto___31358 + (1));
i__5770__auto___31358 = G__31360;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((4)),(0),null));
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function() {
var G__31363 = null;
var G__31363__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__31363__1 = (function (a){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__31363__2 = (function (a,b){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__31363__3 = (function (a,b,c){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__31363__4 = (function() { 
var G__31366__delegate = function (a,b,c,ds){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
};
var G__31366 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__31367__i = 0, G__31367__a = new Array(arguments.length -  3);
while (G__31367__i < G__31367__a.length) {G__31367__a[G__31367__i] = arguments[G__31367__i + 3]; ++G__31367__i;}
  ds = new cljs.core.IndexedSeq(G__31367__a,0,null);
} 
return G__31366__delegate.call(this,a,b,c,ds);};
G__31366.cljs$lang$maxFixedArity = 3;
G__31366.cljs$lang$applyTo = (function (arglist__31368){
var a = cljs.core.first(arglist__31368);
arglist__31368 = cljs.core.next(arglist__31368);
var b = cljs.core.first(arglist__31368);
arglist__31368 = cljs.core.next(arglist__31368);
var c = cljs.core.first(arglist__31368);
var ds = cljs.core.rest(arglist__31368);
return G__31366__delegate(a,b,c,ds);
});
G__31366.cljs$core$IFn$_invoke$arity$variadic = G__31366__delegate;
return G__31366;
})()
;
G__31363 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__31363__0.call(this);
case 1:
return G__31363__1.call(this,a);
case 2:
return G__31363__2.call(this,a,b);
case 3:
return G__31363__3.call(this,a,b,c);
default:
var G__31369 = null;
if (arguments.length > 3) {
var G__31370__i = 0, G__31370__a = new Array(arguments.length -  3);
while (G__31370__i < G__31370__a.length) {G__31370__a[G__31370__i] = arguments[G__31370__i + 3]; ++G__31370__i;}
G__31369 = new cljs.core.IndexedSeq(G__31370__a,0,null);
}
return G__31363__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__31369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31363.cljs$lang$maxFixedArity = 3;
G__31363.cljs$lang$applyTo = G__31363__4.cljs$lang$applyTo;
G__31363.cljs$core$IFn$_invoke$arity$0 = G__31363__0;
G__31363.cljs$core$IFn$_invoke$arity$1 = G__31363__1;
G__31363.cljs$core$IFn$_invoke$arity$2 = G__31363__2;
G__31363.cljs$core$IFn$_invoke$arity$3 = G__31363__3;
G__31363.cljs$core$IFn$_invoke$arity$variadic = G__31363__4.cljs$core$IFn$_invoke$arity$variadic;
return G__31363;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function() {
var G__31371 = null;
var G__31371__0 = (function (){
var G__30963 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30963) : f.call(null,G__30963));
});
var G__31371__1 = (function (a){
var G__30964 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30964) : f.call(null,G__30964));
});
var G__31371__2 = (function (a,b){
var G__30965 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30965) : f.call(null,G__30965));
});
var G__31371__3 = (function (a,b,c){
var G__30966 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30966) : f.call(null,G__30966));
});
var G__31371__4 = (function() { 
var G__31373__delegate = function (a,b,c,ds){
var G__30967 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30967) : f.call(null,G__30967));
};
var G__31373 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__31374__i = 0, G__31374__a = new Array(arguments.length -  3);
while (G__31374__i < G__31374__a.length) {G__31374__a[G__31374__i] = arguments[G__31374__i + 3]; ++G__31374__i;}
  ds = new cljs.core.IndexedSeq(G__31374__a,0,null);
} 
return G__31373__delegate.call(this,a,b,c,ds);};
G__31373.cljs$lang$maxFixedArity = 3;
G__31373.cljs$lang$applyTo = (function (arglist__31375){
var a = cljs.core.first(arglist__31375);
arglist__31375 = cljs.core.next(arglist__31375);
var b = cljs.core.first(arglist__31375);
arglist__31375 = cljs.core.next(arglist__31375);
var c = cljs.core.first(arglist__31375);
var ds = cljs.core.rest(arglist__31375);
return G__31373__delegate(a,b,c,ds);
});
G__31373.cljs$core$IFn$_invoke$arity$variadic = G__31373__delegate;
return G__31373;
})()
;
G__31371 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__31371__0.call(this);
case 1:
return G__31371__1.call(this,a);
case 2:
return G__31371__2.call(this,a,b);
case 3:
return G__31371__3.call(this,a,b,c);
default:
var G__31377 = null;
if (arguments.length > 3) {
var G__31378__i = 0, G__31378__a = new Array(arguments.length -  3);
while (G__31378__i < G__31378__a.length) {G__31378__a[G__31378__i] = arguments[G__31378__i + 3]; ++G__31378__i;}
G__31377 = new cljs.core.IndexedSeq(G__31378__a,0,null);
}
return G__31371__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__31377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31371.cljs$lang$maxFixedArity = 3;
G__31371.cljs$lang$applyTo = G__31371__4.cljs$lang$applyTo;
G__31371.cljs$core$IFn$_invoke$arity$0 = G__31371__0;
G__31371.cljs$core$IFn$_invoke$arity$1 = G__31371__1;
G__31371.cljs$core$IFn$_invoke$arity$2 = G__31371__2;
G__31371.cljs$core$IFn$_invoke$arity$3 = G__31371__3;
G__31371.cljs$core$IFn$_invoke$arity$variadic = G__31371__4.cljs$core$IFn$_invoke$arity$variadic;
return G__31371;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$3 = (function (f,g,h){
return (function() {
var G__31379 = null;
var G__31379__0 = (function (){
var G__30968 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__30969 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30968,G__30969) : f.call(null,G__30968,G__30969));
});
var G__31379__1 = (function (a){
var G__30970 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__30971 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30970,G__30971) : f.call(null,G__30970,G__30971));
});
var G__31379__2 = (function (a,b){
var G__30972 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__30973 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30972,G__30973) : f.call(null,G__30972,G__30973));
});
var G__31379__3 = (function (a,b,c){
var G__30974 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__30975 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30974,G__30975) : f.call(null,G__30974,G__30975));
});
var G__31379__4 = (function() { 
var G__31381__delegate = function (a,b,c,ds){
var G__30976 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__30977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30976,G__30977) : f.call(null,G__30976,G__30977));
};
var G__31381 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__31382__i = 0, G__31382__a = new Array(arguments.length -  3);
while (G__31382__i < G__31382__a.length) {G__31382__a[G__31382__i] = arguments[G__31382__i + 3]; ++G__31382__i;}
  ds = new cljs.core.IndexedSeq(G__31382__a,0,null);
} 
return G__31381__delegate.call(this,a,b,c,ds);};
G__31381.cljs$lang$maxFixedArity = 3;
G__31381.cljs$lang$applyTo = (function (arglist__31383){
var a = cljs.core.first(arglist__31383);
arglist__31383 = cljs.core.next(arglist__31383);
var b = cljs.core.first(arglist__31383);
arglist__31383 = cljs.core.next(arglist__31383);
var c = cljs.core.first(arglist__31383);
var ds = cljs.core.rest(arglist__31383);
return G__31381__delegate(a,b,c,ds);
});
G__31381.cljs$core$IFn$_invoke$arity$variadic = G__31381__delegate;
return G__31381;
})()
;
G__31379 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__31379__0.call(this);
case 1:
return G__31379__1.call(this,a);
case 2:
return G__31379__2.call(this,a,b);
case 3:
return G__31379__3.call(this,a,b,c);
default:
var G__31384 = null;
if (arguments.length > 3) {
var G__31385__i = 0, G__31385__a = new Array(arguments.length -  3);
while (G__31385__i < G__31385__a.length) {G__31385__a[G__31385__i] = arguments[G__31385__i + 3]; ++G__31385__i;}
G__31384 = new cljs.core.IndexedSeq(G__31385__a,0,null);
}
return G__31379__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__31384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31379.cljs$lang$maxFixedArity = 3;
G__31379.cljs$lang$applyTo = G__31379__4.cljs$lang$applyTo;
G__31379.cljs$core$IFn$_invoke$arity$0 = G__31379__0;
G__31379.cljs$core$IFn$_invoke$arity$1 = G__31379__1;
G__31379.cljs$core$IFn$_invoke$arity$2 = G__31379__2;
G__31379.cljs$core$IFn$_invoke$arity$3 = G__31379__3;
G__31379.cljs$core$IFn$_invoke$arity$variadic = G__31379__4.cljs$core$IFn$_invoke$arity$variadic;
return G__31379;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$4 = (function (f,g,h,i){
return (function() {
var G__31386 = null;
var G__31386__0 = (function (){
var G__30978 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__30979 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
var G__30980 = (i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30978,G__30979,G__30980) : f.call(null,G__30978,G__30979,G__30980));
});
var G__31386__1 = (function (a){
var G__30981 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__30982 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
var G__30983 = (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30981,G__30982,G__30983) : f.call(null,G__30981,G__30982,G__30983));
});
var G__31386__2 = (function (a,b){
var G__30984 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__30985 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
var G__30986 = (i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30984,G__30985,G__30986) : f.call(null,G__30984,G__30985,G__30986));
});
var G__31386__3 = (function (a,b,c){
var G__30987 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__30988 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
var G__30989 = (i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30987,G__30988,G__30989) : f.call(null,G__30987,G__30988,G__30989));
});
var G__31386__4 = (function() { 
var G__31394__delegate = function (a,b,c,ds){
var G__30990 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__30991 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
var G__30992 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30990,G__30991,G__30992) : f.call(null,G__30990,G__30991,G__30992));
};
var G__31394 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__31395__i = 0, G__31395__a = new Array(arguments.length -  3);
while (G__31395__i < G__31395__a.length) {G__31395__a[G__31395__i] = arguments[G__31395__i + 3]; ++G__31395__i;}
  ds = new cljs.core.IndexedSeq(G__31395__a,0,null);
} 
return G__31394__delegate.call(this,a,b,c,ds);};
G__31394.cljs$lang$maxFixedArity = 3;
G__31394.cljs$lang$applyTo = (function (arglist__31397){
var a = cljs.core.first(arglist__31397);
arglist__31397 = cljs.core.next(arglist__31397);
var b = cljs.core.first(arglist__31397);
arglist__31397 = cljs.core.next(arglist__31397);
var c = cljs.core.first(arglist__31397);
var ds = cljs.core.rest(arglist__31397);
return G__31394__delegate(a,b,c,ds);
});
G__31394.cljs$core$IFn$_invoke$arity$variadic = G__31394__delegate;
return G__31394;
})()
;
G__31386 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__31386__0.call(this);
case 1:
return G__31386__1.call(this,a);
case 2:
return G__31386__2.call(this,a,b);
case 3:
return G__31386__3.call(this,a,b,c);
default:
var G__31398 = null;
if (arguments.length > 3) {
var G__31399__i = 0, G__31399__a = new Array(arguments.length -  3);
while (G__31399__i < G__31399__a.length) {G__31399__a[G__31399__i] = arguments[G__31399__i + 3]; ++G__31399__i;}
G__31398 = new cljs.core.IndexedSeq(G__31399__a,0,null);
}
return G__31386__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__31398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31386.cljs$lang$maxFixedArity = 3;
G__31386.cljs$lang$applyTo = G__31386__4.cljs$lang$applyTo;
G__31386.cljs$core$IFn$_invoke$arity$0 = G__31386__0;
G__31386.cljs$core$IFn$_invoke$arity$1 = G__31386__1;
G__31386.cljs$core$IFn$_invoke$arity$2 = G__31386__2;
G__31386.cljs$core$IFn$_invoke$arity$3 = G__31386__3;
G__31386.cljs$core$IFn$_invoke$arity$variadic = G__31386__4.cljs$core$IFn$_invoke$arity$variadic;
return G__31386;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,g,h,i,js){
return (function() {
var G__31400 = null;
var G__31400__0 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null)),(h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null)),(i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30951_SHARP_){
return (p1__30951_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__30951_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__30951_SHARP_.call(null));
}),js));
});
var G__31400__1 = (function (a){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a)),(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a)),(i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30952_SHARP_){
return (p1__30952_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30952_SHARP_.cljs$core$IFn$_invoke$arity$1(a) : p1__30952_SHARP_.call(null,a));
}),js));
});
var G__31400__2 = (function (a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b)),(h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b)),(i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30953_SHARP_){
return (p1__30953_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__30953_SHARP_.cljs$core$IFn$_invoke$arity$2(a,b) : p1__30953_SHARP_.call(null,a,b));
}),js));
});
var G__31400__3 = (function (a,b,c){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c)),(h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c)),(i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30954_SHARP_){
return (p1__30954_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__30954_SHARP_.cljs$core$IFn$_invoke$arity$3(a,b,c) : p1__30954_SHARP_.call(null,a,b,c));
}),js));
});
var G__31400__4 = (function() { 
var G__31403__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30955_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p1__30955_SHARP_,a,b,c,ds);
}),js));
};
var G__31403 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__31404__i = 0, G__31404__a = new Array(arguments.length -  3);
while (G__31404__i < G__31404__a.length) {G__31404__a[G__31404__i] = arguments[G__31404__i + 3]; ++G__31404__i;}
  ds = new cljs.core.IndexedSeq(G__31404__a,0,null);
} 
return G__31403__delegate.call(this,a,b,c,ds);};
G__31403.cljs$lang$maxFixedArity = 3;
G__31403.cljs$lang$applyTo = (function (arglist__31405){
var a = cljs.core.first(arglist__31405);
arglist__31405 = cljs.core.next(arglist__31405);
var b = cljs.core.first(arglist__31405);
arglist__31405 = cljs.core.next(arglist__31405);
var c = cljs.core.first(arglist__31405);
var ds = cljs.core.rest(arglist__31405);
return G__31403__delegate(a,b,c,ds);
});
G__31403.cljs$core$IFn$_invoke$arity$variadic = G__31403__delegate;
return G__31403;
})()
;
G__31400 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__31400__0.call(this);
case 1:
return G__31400__1.call(this,a);
case 2:
return G__31400__2.call(this,a,b);
case 3:
return G__31400__3.call(this,a,b,c);
default:
var G__31406 = null;
if (arguments.length > 3) {
var G__31407__i = 0, G__31407__a = new Array(arguments.length -  3);
while (G__31407__i < G__31407__a.length) {G__31407__a[G__31407__i] = arguments[G__31407__i + 3]; ++G__31407__i;}
G__31406 = new cljs.core.IndexedSeq(G__31407__a,0,null);
}
return G__31400__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__31406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31400.cljs$lang$maxFixedArity = 3;
G__31400.cljs$lang$applyTo = G__31400__4.cljs$lang$applyTo;
G__31400.cljs$core$IFn$_invoke$arity$0 = G__31400__0;
G__31400.cljs$core$IFn$_invoke$arity$1 = G__31400__1;
G__31400.cljs$core$IFn$_invoke$arity$2 = G__31400__2;
G__31400.cljs$core$IFn$_invoke$arity$3 = G__31400__3;
G__31400.cljs$core$IFn$_invoke$arity$variadic = G__31400__4.cljs$core$IFn$_invoke$arity$variadic;
return G__31400;
})()
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$applyTo = (function (seq30957){
var G__30958 = cljs.core.first(seq30957);
var seq30957__$1 = cljs.core.next(seq30957);
var G__30959 = cljs.core.first(seq30957__$1);
var seq30957__$2 = cljs.core.next(seq30957__$1);
var G__30960 = cljs.core.first(seq30957__$2);
var seq30957__$3 = cljs.core.next(seq30957__$2);
var G__30961 = cljs.core.first(seq30957__$3);
var seq30957__$4 = cljs.core.next(seq30957__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30958,G__30959,G__30960,G__30961,seq30957__$4);
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$maxFixedArity = (4));

hyperfiddle.electric.impl.runtime.globals = (function hyperfiddle$electric$impl$runtime$globals(program){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name),cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.vector_QMARK_),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__30993){
var vec__30994 = p__30993;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30994,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30994,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"global","global",93595047),a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()], 0)),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,program)], 0)));
});
hyperfiddle.electric.impl.runtime.missing_exports = (function hyperfiddle$electric$impl$runtime$missing_exports(resolvef,program){
return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(resolvef,new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095)),cljs.core.identity)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__30997_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),cljs.core.first(p1__30997_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol),hyperfiddle.electric.impl.runtime.globals(program)], 0));
});
hyperfiddle.electric.impl.runtime.dynamic_resolve = (function hyperfiddle$electric$impl$runtime$dynamic_resolve(nf,x){
return nf;
});
hyperfiddle.electric.impl.runtime.eval = (function hyperfiddle$electric$impl$runtime$eval(var_args){
var G__30999 = arguments.length;
switch (G__30999) {
case 1:
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1 = (function (inst){
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.dynamic_resolve,inst);
}));

(hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2 = (function (resolvef,inst){
return hyperfiddle.electric.impl.runtime.compile(inst,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lift","lift",903632035),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"nop","nop",-1754075182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"inject","inject",-1882635533),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"vget","vget",1720343287),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"pub","pub",-1189143908),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"eval","eval",-1103567905)],[(function (form){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.pure((form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars)));
});
}),(function (form,remote,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.variable(frame,vars,(remote + slot),slot,(form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars)));
});
}),(function (deps,inst__$1){
return (function (pubs,frame,vars){
hyperfiddle.electric.impl.runtime.make_input(frame,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$2){
return (inst__$2.cljs$core$IFn$_invoke$arity$3 ? inst__$2.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$2.call(null,pubs,frame,vars));
}),deps));

return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$1.call(null,pubs,frame,vars));
});
}),(function (x){
var r = (resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),x) : resolvef.call(null,new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),x));
var G__31000 = r;
var G__31000__$1 = (((G__31000 instanceof cljs.core.Keyword))?G__31000.fqn:null);
switch (G__31000__$1) {
case "hyperfiddle.electric.impl.runtime/not-found":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unable to resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x))].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
default:
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(r));

}
}),(function (idx){
return (function (pubs,frame,vars){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pubs,idx);
});
}),(function (debug_info,form,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.constant(frame,slot,hyperfiddle.electric.impl.runtime.constructor$(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pubs,static$),dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,(function() { 
var G__31416__delegate = function (args){
return hyperfiddle.electric.impl.runtime.check_failure(debug_info,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(form,pubs,args));
};
var G__31416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31417__i = 0, G__31417__a = new Array(arguments.length -  0);
while (G__31417__i < G__31417__a.length) {G__31417__a[G__31417__i] = arguments[G__31417__i + 0]; ++G__31417__i;}
  args = new cljs.core.IndexedSeq(G__31417__a,0,null);
} 
return G__31416__delegate.call(this,args);};
G__31416.cljs$lang$maxFixedArity = 0;
G__31416.cljs$lang$applyTo = (function (arglist__31418){
var args = cljs.core.seq(arglist__31418);
return G__31416__delegate(args);
});
G__31416.cljs$core$IFn$_invoke$arity$variadic = G__31416__delegate;
return G__31416;
})()
));
});
}),(function (slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.static$(frame,slot);
});
}),(function (remote,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.source(frame,vars,(remote + slot),slot);
});
}),(function (debug_info,form,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.make_output(slot,hyperfiddle.electric.impl.runtime.check_failure(debug_info,(form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars))));
});
}),cljs.core.constantly(null),(function (slot,debug_info){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.dynamic(frame,slot,debug_info);
});
}),(function (slot){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(hyperfiddle.electric.impl.runtime.inject(slot)));
}),(function (x){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(x));
}),(function() { 
var G__31421__delegate = function (debug_info,forms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.juxt_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.latest_apply,debug_info),forms);
};
var G__31421 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__31422__i = 0, G__31422__a = new Array(arguments.length -  1);
while (G__31422__i < G__31422__a.length) {G__31422__a[G__31422__i] = arguments[G__31422__i + 1]; ++G__31422__i;}
  forms = new cljs.core.IndexedSeq(G__31422__a,0,null);
} 
return G__31421__delegate.call(this,debug_info,forms);};
G__31421.cljs$lang$maxFixedArity = 1;
G__31421.cljs$lang$applyTo = (function (arglist__31423){
var debug_info = cljs.core.first(arglist__31423);
var forms = cljs.core.rest(arglist__31423);
return G__31421__delegate(debug_info,forms);
});
G__31421.cljs$core$IFn$_invoke$arity$variadic = G__31421__delegate;
return G__31421;
})()
,(function (slot){
return (function (pubs,frame,vars){
return (vars[(slot | (0))]);
});
}),(function (deps,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.input_spawn(frame,slot,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$1){
return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$1.call(null,pubs,frame,vars));
}),deps));
});
}),(function (deps,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.target(frame,slot,hyperfiddle.electric.impl.runtime.constructor$(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pubs,static$),dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,(function (frame__$1,vars__$1){
return hyperfiddle.electric.impl.runtime.make_input(frame__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$1){
return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame__$1,vars__$1) : inst__$1.call(null,pubs,frame__$1,vars__$1));
}),deps));
})));
});
}),(function (form,var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count){
return hyperfiddle.electric.impl.runtime.peer(var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(form,cljs.core.PersistentVector.EMPTY));
}),(function (form,cont,_){
return (function (pubs,frame,vars){
var G__31001 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pubs,hyperfiddle.electric.impl.runtime.signal((form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars))));
var G__31002 = frame;
var G__31003 = vars;
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(G__31001,G__31002,G__31003) : cont.call(null,G__31001,G__31002,G__31003));
});
}),(function (form,slot,s){
return (function (pubs,frame,vars){
var prev = (vars[(slot | (0))]);
(vars[(slot | (0))] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pubs,s));

var res = (form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars));
(vars[(slot | (0))] = prev);

return res;
});
}),(function (form,ns){
var temp__5806__auto__ = (function (){var G__31004 = ns;
if((G__31004 == null)){
return null;
} else {
return cljs.core.find_ns(G__31004);
}
})();
if((temp__5806__auto__ == null)){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(cljs.core.eval(form)));
} else {
var ns__$1 = temp__5806__auto__;
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure((function (){var _STAR_ns_STAR__orig_val__31005 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__31006 = ns__$1;
(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__31006);

try{return cljs.core.eval(form);
}finally {(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__31005);
}})()));
}
})]));
}));

(hyperfiddle.electric.impl.runtime.eval.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.queue = (function hyperfiddle$electric$impl$runtime$queue(){
var q = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
return (function() {
var G__31430 = null;
var G__31430__0 = (function (){
if((q.length === (0))){
throw (new Error("No such element."));
} else {
}

return q.shift();
});
var G__31430__1 = (function (x){
q.push(x);

return x;
});
G__31430 = function(x){
switch(arguments.length){
case 0:
return G__31430__0.call(this);
case 1:
return G__31430__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31430.cljs$core$IFn$_invoke$arity$0 = G__31430__0;
G__31430.cljs$core$IFn$_invoke$arity$1 = G__31430__1;
return G__31430;
})()
});

//# sourceMappingURL=hyperfiddle.electric.impl.runtime.js.map
