goog.provide('hyperfiddle.electric');
(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (other instanceof hyperfiddle.electric.Pending);
}));
(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.Failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.error,other.error)));
}));
(hyperfiddle.electric.FailureInfo.prototype.__proto__ = cljs.core.ExceptionInfo.prototype);
(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.FailureInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.cause,other.cause)));
}));
/**
 * Takes a resolve map and a program, returns a booting function.
 *   The booting function takes
 *   * as first argument a function Any->Task[Unit] returned task writes the value on the wire.
 *   * as second argument a flow producing the values read on the wire.
 *   and returning a task that runs the local reactor.
 */
hyperfiddle.electric.eval = hyperfiddle.electric.impl.runtime.eval;
hyperfiddle.electric.hook = hyperfiddle.electric.impl.runtime.hook;
hyperfiddle.electric.bind = hyperfiddle.electric.impl.runtime.bind;
hyperfiddle.electric.with$ = hyperfiddle.electric.impl.runtime.with$;
hyperfiddle.electric.pair = (function hyperfiddle$electric$pair(c,s){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr34116_block_0 = (function hyperfiddle$electric$pair_$_cr34116_block_0(cr34116_state){
try{var cr34116_place_0 = missionary.core.dfv;
var cr34116_place_1 = (function (){var fexpr__34180 = cr34116_place_0;
return (fexpr__34180.cljs$core$IFn$_invoke$arity$0 ? fexpr__34180.cljs$core$IFn$_invoke$arity$0() : fexpr__34180.call(null));
})();
var cr34116_place_2 = missionary.core.dfv;
var cr34116_place_3 = (function (){var fexpr__34181 = cr34116_place_2;
return (fexpr__34181.cljs$core$IFn$_invoke$arity$0 ? fexpr__34181.cljs$core$IFn$_invoke$arity$0() : fexpr__34181.call(null));
})();
var cr34116_place_4 = missionary.core.join;
var cr34116_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr34116_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr34119_block_0 = (function (cr34119_state){
try{var cr34119_place_0 = cr34116_place_1;
(cr34119_state[(0)] = cr34119_block_1);

return missionary.core.park(cr34119_place_0);
}catch (e34186){var e34125 = e34186;
var cr34119_exception = e34125;
(cr34119_state[(0)] = null);

throw cr34119_exception;
}});
var cr34119_block_1 = (function (cr34119_state){
try{var cr34119_place_1 = missionary.core.unpark();
var cr34119_place_2 = cr34119_place_1;
var cr34119_place_3 = x;
var cr34119_place_4 = (function (){var G__34128 = cr34119_place_3;
var fexpr__34127 = cr34119_place_2;
var G__34189 = G__34128;
var fexpr__34188 = fexpr__34127;
return (fexpr__34188.cljs$core$IFn$_invoke$arity$1 ? fexpr__34188.cljs$core$IFn$_invoke$arity$1(G__34189) : fexpr__34188.call(null,G__34189));
})();
(cr34119_state[(0)] = null);

return cr34119_place_4;
}catch (e34187){var e34126 = e34187;
var cr34119_exception = e34126;
(cr34119_state[(0)] = null);

throw cr34119_exception;
}});
return cloroutine.impl.coroutine((function (){var G__34129 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__34129[(0)] = cr34119_block_0);

return G__34129;
})());
})(),missionary.core.sp_run);
});
var cr34116_place_7 = (function (_BANG_){
var G__34191_34345 = _BANG_;
var fexpr__34190_34346 = cr34116_place_3;
(fexpr__34190_34346.cljs$core$IFn$_invoke$arity$1 ? fexpr__34190_34346.cljs$core$IFn$_invoke$arity$1(G__34191_34345) : fexpr__34190_34346.call(null,G__34191_34345));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr34116_place_8 = s;
var cr34116_place_9 = cr34116_place_6;
var cr34116_place_10 = cr34116_place_7;
var cr34116_place_11 = (function (){var G__34193 = cr34116_place_9;
var G__34194 = cr34116_place_10;
var fexpr__34192 = cr34116_place_8;
return (fexpr__34192.cljs$core$IFn$_invoke$arity$2 ? fexpr__34192.cljs$core$IFn$_invoke$arity$2(G__34193,G__34194) : fexpr__34192.call(null,G__34193,G__34194));
})();
var cr34116_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr34133_block_0 = (function (cr34133_state){
try{var cr34133_place_0 = cr34116_place_3;
(cr34133_state[(0)] = cr34133_block_1);

return missionary.core.park(cr34133_place_0);
}catch (e34199){var e34139 = e34199;
var cr34133_exception = e34139;
(cr34133_state[(0)] = null);

throw cr34133_exception;
}});
var cr34133_block_1 = (function (cr34133_state){
try{var cr34133_place_1 = missionary.core.unpark();
var cr34133_place_2 = cr34133_place_1;
var cr34133_place_3 = x;
var cr34133_place_4 = (function (){var G__34142 = cr34133_place_3;
var fexpr__34141 = cr34133_place_2;
var G__34202 = G__34142;
var fexpr__34201 = fexpr__34141;
return (fexpr__34201.cljs$core$IFn$_invoke$arity$1 ? fexpr__34201.cljs$core$IFn$_invoke$arity$1(G__34202) : fexpr__34201.call(null,G__34202));
})();
(cr34133_state[(0)] = null);

return cr34133_place_4;
}catch (e34200){var e34140 = e34200;
var cr34133_exception = e34140;
(cr34133_state[(0)] = null);

throw cr34133_exception;
}});
return cloroutine.impl.coroutine((function (){var G__34143 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__34143[(0)] = cr34133_block_0);

return G__34143;
})());
})(),missionary.core.sp_run);
});
var cr34116_place_13 = (function (_BANG_){
var G__34204_34347 = _BANG_;
var fexpr__34203_34348 = cr34116_place_1;
(fexpr__34203_34348.cljs$core$IFn$_invoke$arity$1 ? fexpr__34203_34348.cljs$core$IFn$_invoke$arity$1(G__34204_34347) : fexpr__34203_34348.call(null,G__34204_34347));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr34116_place_14 = (function (p1__34115_SHARP_){
throw p1__34115_SHARP_;
});
var cr34116_place_15 = c;
var cr34116_place_16 = cr34116_place_12;
var cr34116_place_17 = cr34116_place_13;
var cr34116_place_18 = cr34116_place_14;
var cr34116_place_19 = (function (){var G__34206 = cr34116_place_16;
var G__34207 = cr34116_place_17;
var G__34208 = cr34116_place_18;
var fexpr__34205 = cr34116_place_15;
return (fexpr__34205.cljs$core$IFn$_invoke$arity$3 ? fexpr__34205.cljs$core$IFn$_invoke$arity$3(G__34206,G__34207,G__34208) : fexpr__34205.call(null,G__34206,G__34207,G__34208));
})();
var cr34116_place_20 = (function (){var G__34210 = cr34116_place_5;
var G__34211 = cr34116_place_11;
var G__34212 = cr34116_place_19;
var fexpr__34209 = cr34116_place_4;
return (fexpr__34209.cljs$core$IFn$_invoke$arity$3 ? fexpr__34209.cljs$core$IFn$_invoke$arity$3(G__34210,G__34211,G__34212) : fexpr__34209.call(null,G__34210,G__34211,G__34212));
})();
(cr34116_state[(0)] = cr34116_block_1);

return missionary.core.park(cr34116_place_20);
}catch (e34179){var cr34116_exception = e34179;
(cr34116_state[(0)] = null);

throw cr34116_exception;
}});
var cr34116_block_1 = (function hyperfiddle$electric$pair_$_cr34116_block_1(cr34116_state){
try{var cr34116_place_21 = missionary.core.unpark();
(cr34116_state[(0)] = null);

return cr34116_place_21;
}catch (e34213){var cr34116_exception = e34213;
(cr34116_state[(0)] = null);

throw cr34116_exception;
}});
return cloroutine.impl.coroutine((function (){var G__34214 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__34214[(0)] = cr34116_block_0);

return G__34214;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__34218 = arguments.length;
switch (G__34218) {
case 1:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1 = (function (_BANG_x){
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2(_BANG_x,(new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending()))));
}));

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2 = (function (_BANG_x,pending){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr34219_block_0 = (function hyperfiddle$electric$cr34219_block_0(cr34219_state){
try{var cr34219_place_0 = _BANG_x;
(cr34219_state[(0)] = cr34219_block_1);

return missionary.core.park(cr34219_place_0);
}catch (e34222){var cr34219_exception = e34222;
(cr34219_state[(0)] = null);

throw cr34219_exception;
}});
var cr34219_block_1 = (function hyperfiddle$electric$cr34219_block_1(cr34219_state){
try{var cr34219_place_1 = missionary.core.unpark();
(cr34219_state[(0)] = null);

return cr34219_place_1;
}catch (e34223){var cr34219_exception = e34223;
(cr34219_state[(0)] = null);

throw cr34219_exception;
}});
return cloroutine.impl.coroutine((function (){var G__34224 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__34224[(0)] = cr34219_block_0);

return G__34224;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.task__GT_cp.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.Clock = (function (raf,callback,terminator){
this.raf = raf;
this.callback = callback;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.Clock.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__34226 = (arguments.length - (1));
switch (G__34226) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args34225){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args34225)));
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
if((self__.raf === (0))){
return (self__.callback = null);
} else {
window.cancelAnimationFrame(self__.raf);

return (self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
}
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.callback == null)){
(self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
} else {
(self__.raf = window.requestAnimationFrame(self__.callback));
}

return new cljs.core.Keyword("hyperfiddle.electric","tick","hyperfiddle.electric/tick",-1268517293);
}));

(hyperfiddle.electric.Clock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"raf","raf",345121375,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.Clock.cljs$lang$type = true);

(hyperfiddle.electric.Clock.cljs$lang$ctorStr = "hyperfiddle.electric/Clock");

(hyperfiddle.electric.Clock.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric/Clock");
}));

/**
 * Positional factory function for hyperfiddle.electric/Clock.
 */
hyperfiddle.electric.__GT_Clock = (function hyperfiddle$electric$__GT_Clock(raf,callback,terminator){
return (new hyperfiddle.electric.Clock(raf,callback,terminator));
});

/**
 * lazy & efficient logical clock that schedules no work unless sampled
 */
hyperfiddle.electric._LT_clock = (function hyperfiddle$electric$_LT_clock(n,t){
var cancel = hyperfiddle.electric.__GT_Clock((0),null,t);
(cancel.callback = (function (_){
(cancel.raf = (0));

return (n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}));

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return cancel;
});
hyperfiddle.electric._get_system_time_ms = (function hyperfiddle$electric$_get_system_time_ms(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34351 = arguments.length;
var i__5770__auto___34352 = (0);
while(true){
if((i__5770__auto___34352 < len__5769__auto___34351)){
args__5775__auto__.push((arguments[i__5770__auto___34352]));

var G__34353 = (i__5770__auto___34352 + (1));
i__5770__auto___34352 = G__34353;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__34228){
var vec__34229 = p__34228;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34229,(0),null);
return Date.now();
}));

(hyperfiddle.electric._get_system_time_ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric._get_system_time_ms.cljs$lang$applyTo = (function (seq34227){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34227));
}));

hyperfiddle.electric.dom_listener = (function hyperfiddle$electric$dom_listener(node,typ,f,opts){
node.addEventListener(typ,f,cljs.core.clj__GT_js(opts));

return (function (){
return node.removeEventListener(typ,f);
});
});
hyperfiddle.electric.listen_GT_ = (function hyperfiddle$electric$listen_GT_(var_args){
var G__34234 = arguments.length;
switch (G__34234) {
case 2:
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$2 = (function (node,event_type){
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4(node,event_type,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$3 = (function (node,event_type,keep_fn_BANG_){
return hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4(node,event_type,keep_fn_BANG_,cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$4 = (function (node,event_type,keep_fn_BANG_,opts){
return missionary.core.relieve(cljs.core.PersistentArrayMap.EMPTY,missionary.core.observe((function (_BANG_){
return hyperfiddle.electric.dom_listener(node,event_type,(function (p1__34232_SHARP_){
var temp__5808__auto__ = (keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? keep_fn_BANG_.cljs$core$IFn$_invoke$arity$1(p1__34232_SHARP_) : keep_fn_BANG_.call(null,p1__34232_SHARP_));
if((temp__5808__auto__ == null)){
return null;
} else {
var v = temp__5808__auto__;
return (_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(v) : _BANG_.call(null,v));
}
}),opts);
})));
}));

(hyperfiddle.electric.listen_GT_.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric._LT_dom_visibility_state = missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (_){
return document.visibilityState;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,document.visibilityState,hyperfiddle.electric.listen_GT_.cljs$core$IFn$_invoke$arity$2(document,"visibilitychange"))], 0));
hyperfiddle.electric._check_fn_arity_BANG_ = (function hyperfiddle$electric$_check_fn_arity_BANG_(name,expected,actual){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["You called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric","unnamed-efn","hyperfiddle.electric/unnamed-efn",1016396331)], 0));
}
})()),", a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),"-arg e/fn with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)," arguments."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
return null;
}
});
hyperfiddle.electric.watchable_QMARK_ = (function hyperfiddle$electric$watchable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
hyperfiddle.electric.checked_watch = (function hyperfiddle$electric$checked_watch(_BANG_x){
if(hyperfiddle.electric.watchable_QMARK_(_BANG_x)){
} else {
throw (new Error(["Assert failed: ","Provided argument is not Watchable.","\n","(watchable? !x)"].join('')));
}

return missionary.core.watch(_BANG_x);
});
hyperfiddle.electric._invalid_watch_usage_message = "Invalid e/watch (use from Electric code only, maybe you forgot a e/def?)";
hyperfiddle.electric.debounce_discreet = (function hyperfiddle$electric$debounce_discreet(var_args){
var G__34238 = arguments.length;
switch (G__34238) {
case 2:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2 = (function (delay,flow){
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3(delay,null,flow);
}));

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3 = (function (delay,init,flow){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr34239_block_10 = (function hyperfiddle$electric$cr34239_block_10(cr34239_state){
try{var cr34239_place_21 = missionary.core.unpark();
(cr34239_state[(0)] = cr34239_block_11);

(cr34239_state[(3)] = cr34239_place_21);

return cr34239_state;
}catch (e34257){var cr34239_exception = e34257;
(cr34239_state[(0)] = cr34239_block_12);

(cr34239_state[(3)] = null);

(cr34239_state[(2)] = true);

(cr34239_state[(1)] = cr34239_exception);

return cr34239_state;
}});
var cr34239_block_5 = (function hyperfiddle$electric$cr34239_block_5(cr34239_state){
try{var cr34239_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr34239_place_14 = null;
if(cljs.core.truth_(cr34239_place_13)){
(cr34239_state[(0)] = cr34239_block_7);

(cr34239_state[(3)] = null);

return cr34239_state;
} else {
(cr34239_state[(0)] = cr34239_block_6);

(cr34239_state[(4)] = cr34239_place_14);

return cr34239_state;
}
}catch (e34258){var cr34239_exception = e34258;
(cr34239_state[(0)] = cr34239_block_12);

(cr34239_state[(3)] = null);

(cr34239_state[(2)] = true);

(cr34239_state[(1)] = cr34239_exception);

return cr34239_state;
}});
var cr34239_block_12 = (function hyperfiddle$electric$cr34239_block_12(cr34239_state){
try{var cr34239_place_2 = (cr34239_state[(1)]);
var cr34239_place_3 = (cr34239_state[(2)]);
var cr34239_place_22 = (cljs.core.truth_(cr34239_place_3)?(function(){throw cr34239_place_2})():cr34239_place_2);
(cr34239_state[(0)] = null);

(cr34239_state[(1)] = null);

(cr34239_state[(2)] = null);

return cr34239_place_22;
}catch (e34259){var cr34239_exception = e34259;
(cr34239_state[(0)] = null);

(cr34239_state[(1)] = null);

(cr34239_state[(2)] = null);

throw cr34239_exception;
}});
var cr34239_block_4 = (function hyperfiddle$electric$cr34239_block_4(cr34239_state){
try{var cr34239_place_2 = (cr34239_state[(1)]);
var cr34239_place_9 = cr34239_place_2;
var cr34239_place_10 = missionary.Cancelled;
var cr34239_place_11 = (cr34239_place_9 instanceof cr34239_place_10);
var cr34239_place_12 = null;
if(cr34239_place_11){
(cr34239_state[(0)] = cr34239_block_9);

(cr34239_state[(3)] = cr34239_place_12);

return cr34239_state;
} else {
(cr34239_state[(0)] = cr34239_block_5);

(cr34239_state[(3)] = cr34239_place_12);

return cr34239_state;
}
}catch (e34260){var cr34239_exception = e34260;
(cr34239_state[(0)] = cr34239_block_12);

(cr34239_state[(2)] = true);

(cr34239_state[(1)] = cr34239_exception);

return cr34239_state;
}});
var cr34239_block_3 = (function hyperfiddle$electric$cr34239_block_3(cr34239_state){
try{var cr34239_place_8 = missionary.core.unpark();
(cr34239_state[(0)] = cr34239_block_12);

(cr34239_state[(1)] = cr34239_place_8);

return cr34239_state;
}catch (e34261){var cr34239_exception = e34261;
(cr34239_state[(0)] = cr34239_block_4);

(cr34239_state[(1)] = cr34239_exception);

return cr34239_state;
}});
var cr34239_block_9 = (function hyperfiddle$electric$cr34239_block_9(cr34239_state){
try{var cr34239_place_2 = (cr34239_state[(1)]);
var cr34239_place_18 = cr34239_place_2;
var cr34239_place_19 = (1);
var cr34239_place_20 = missionary.core.none;
(cr34239_state[(0)] = cr34239_block_10);

return missionary.core.fork(cr34239_place_19,cr34239_place_20);
}catch (e34262){var cr34239_exception = e34262;
(cr34239_state[(0)] = cr34239_block_12);

(cr34239_state[(3)] = null);

(cr34239_state[(2)] = true);

(cr34239_state[(1)] = cr34239_exception);

return cr34239_state;
}});
var cr34239_block_7 = (function hyperfiddle$electric$cr34239_block_7(cr34239_state){
try{var cr34239_place_2 = (cr34239_state[(1)]);
var cr34239_place_16 = cr34239_place_2;
var cr34239_place_17 = (function(){throw cr34239_place_16})();
(cr34239_state[(0)] = null);

(cr34239_state[(1)] = null);

(cr34239_state[(2)] = null);

return null;
}catch (e34263){var cr34239_exception = e34263;
(cr34239_state[(0)] = cr34239_block_12);

(cr34239_state[(2)] = true);

(cr34239_state[(1)] = cr34239_exception);

return cr34239_state;
}});
var cr34239_block_0 = (function hyperfiddle$electric$cr34239_block_0(cr34239_state){
try{var cr34239_place_0 = flow;
(cr34239_state[(0)] = cr34239_block_1);

return missionary.core.switch$(cr34239_place_0);
}catch (e34264){var cr34239_exception = e34264;
(cr34239_state[(0)] = null);

throw cr34239_exception;
}});
var cr34239_block_2 = (function hyperfiddle$electric$cr34239_block_2(cr34239_state){
try{var cr34239_place_1 = (cr34239_state[(3)]);
var cr34239_place_4 = missionary.core.sleep;
var cr34239_place_5 = delay;
var cr34239_place_6 = cr34239_place_1;
var cr34239_place_7 = (function (){var G__34267 = cr34239_place_5;
var G__34268 = cr34239_place_6;
var fexpr__34266 = cr34239_place_4;
return (fexpr__34266.cljs$core$IFn$_invoke$arity$2 ? fexpr__34266.cljs$core$IFn$_invoke$arity$2(G__34267,G__34268) : fexpr__34266.call(null,G__34267,G__34268));
})();
(cr34239_state[(0)] = cr34239_block_3);

(cr34239_state[(3)] = null);

return missionary.core.park(cr34239_place_7);
}catch (e34265){var cr34239_exception = e34265;
(cr34239_state[(0)] = cr34239_block_4);

(cr34239_state[(3)] = null);

(cr34239_state[(1)] = cr34239_exception);

return cr34239_state;
}});
var cr34239_block_1 = (function hyperfiddle$electric$cr34239_block_1(cr34239_state){
try{var cr34239_place_1 = missionary.core.unpark();
var cr34239_place_2 = null;
var cr34239_place_3 = false;
(cr34239_state[(0)] = cr34239_block_2);

(cr34239_state[(3)] = cr34239_place_1);

(cr34239_state[(1)] = cr34239_place_2);

(cr34239_state[(2)] = cr34239_place_3);

return cr34239_state;
}catch (e34269){var cr34239_exception = e34269;
(cr34239_state[(0)] = null);

throw cr34239_exception;
}});
var cr34239_block_11 = (function hyperfiddle$electric$cr34239_block_11(cr34239_state){
try{var cr34239_place_12 = (cr34239_state[(3)]);
(cr34239_state[(0)] = cr34239_block_12);

(cr34239_state[(3)] = null);

(cr34239_state[(1)] = cr34239_place_12);

return cr34239_state;
}catch (e34270){var cr34239_exception = e34270;
(cr34239_state[(0)] = cr34239_block_12);

(cr34239_state[(3)] = null);

(cr34239_state[(2)] = true);

(cr34239_state[(1)] = cr34239_exception);

return cr34239_state;
}});
var cr34239_block_6 = (function hyperfiddle$electric$cr34239_block_6(cr34239_state){
try{var cr34239_place_15 = null;
(cr34239_state[(0)] = cr34239_block_8);

(cr34239_state[(4)] = cr34239_place_15);

return cr34239_state;
}catch (e34271){var cr34239_exception = e34271;
(cr34239_state[(0)] = cr34239_block_12);

(cr34239_state[(4)] = null);

(cr34239_state[(3)] = null);

(cr34239_state[(2)] = true);

(cr34239_state[(1)] = cr34239_exception);

return cr34239_state;
}});
var cr34239_block_8 = (function hyperfiddle$electric$cr34239_block_8(cr34239_state){
try{var cr34239_place_14 = (cr34239_state[(4)]);
(cr34239_state[(0)] = cr34239_block_11);

(cr34239_state[(4)] = null);

(cr34239_state[(3)] = cr34239_place_14);

return cr34239_state;
}catch (e34272){var cr34239_exception = e34272;
(cr34239_state[(0)] = cr34239_block_12);

(cr34239_state[(4)] = null);

(cr34239_state[(3)] = null);

(cr34239_state[(2)] = true);

(cr34239_state[(1)] = cr34239_exception);

return cr34239_state;
}});
return cloroutine.impl.coroutine((function (){var G__34273 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__34273[(0)] = cr34239_block_0);

return G__34273;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr34274_block_0 = (function hyperfiddle$electric$throttle_$_cr34274_block_0(cr34274_state){
try{var cr34274_place_0 = (1);
var cr34274_place_1 = missionary.core.relieve;
var cr34274_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr34274_place_3 = _GT_in;
var cr34274_place_4 = (function (){var G__34297 = cr34274_place_2;
var G__34298 = cr34274_place_3;
var fexpr__34296 = cr34274_place_1;
return (fexpr__34296.cljs$core$IFn$_invoke$arity$2 ? fexpr__34296.cljs$core$IFn$_invoke$arity$2(G__34297,G__34298) : fexpr__34296.call(null,G__34297,G__34298));
})();
(cr34274_state[(0)] = cr34274_block_1);

return missionary.core.fork(cr34274_place_0,cr34274_place_4);
}catch (e34295){var cr34274_exception = e34295;
(cr34274_state[(0)] = null);

throw cr34274_exception;
}});
var cr34274_block_5 = (function hyperfiddle$electric$throttle_$_cr34274_block_5(cr34274_state){
try{var cr34274_place_19 = missionary.core.unpark();
var cr34274_place_20 = (1);
var cr34274_place_21 = missionary.core.none;
(cr34274_state[(0)] = cr34274_block_6);

return missionary.core.fork(cr34274_place_20,cr34274_place_21);
}catch (e34299){var cr34274_exception = e34299;
(cr34274_state[(0)] = null);

(cr34274_state[(2)] = null);

throw cr34274_exception;
}});
var cr34274_block_7 = (function hyperfiddle$electric$throttle_$_cr34274_block_7(cr34274_state){
try{var cr34274_place_12 = (cr34274_state[(1)]);
var cr34274_place_23 = "No matching clause: ";
var cr34274_place_24 = cr34274_place_12;
var cr34274_place_25 = [cr34274_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr34274_place_24)].join('');
var cr34274_place_26 = (new Error(cr34274_place_25));
var cr34274_place_27 = (function(){throw cr34274_place_26})();
(cr34274_state[(0)] = null);

(cr34274_state[(1)] = null);

return null;
}catch (e34300){var cr34274_exception = e34300;
(cr34274_state[(0)] = null);

(cr34274_state[(1)] = null);

throw cr34274_exception;
}});
var cr34274_block_2 = (function hyperfiddle$electric$throttle_$_cr34274_block_2(cr34274_state){
try{var cr34274_place_12 = missionary.core.unpark();
var cr34274_place_13 = cr34274_place_12;
var cr34274_place_14 = null;
var G__34302 = cr34274_place_13;
switch (G__34302) {
case (0):
(cr34274_state[(0)] = cr34274_block_3);

(cr34274_state[(2)] = cr34274_place_14);

return cr34274_state;

break;
case (1):
(cr34274_state[(0)] = cr34274_block_4);

(cr34274_state[(1)] = null);

(cr34274_state[(2)] = cr34274_place_14);

return cr34274_state;

break;
default:
(cr34274_state[(0)] = cr34274_block_7);

(cr34274_state[(1)] = null);

(cr34274_state[(1)] = cr34274_place_12);

return cr34274_state;

}
}catch (e34301){var cr34274_exception = e34301;
(cr34274_state[(0)] = null);

(cr34274_state[(1)] = null);

throw cr34274_exception;
}});
var cr34274_block_1 = (function hyperfiddle$electric$throttle_$_cr34274_block_1(cr34274_state){
try{var cr34274_place_5 = missionary.core.unpark();
var cr34274_place_6 = (1);
var cr34274_place_7 = missionary.core.seed;
var cr34274_place_8 = cljs.core.range;
var cr34274_place_9 = (2);
var cr34274_place_10 = (function (){var G__34305 = cr34274_place_9;
var fexpr__34304 = cr34274_place_8;
return (fexpr__34304.cljs$core$IFn$_invoke$arity$1 ? fexpr__34304.cljs$core$IFn$_invoke$arity$1(G__34305) : fexpr__34304.call(null,G__34305));
})();
var cr34274_place_11 = (function (){var G__34307 = cr34274_place_10;
var fexpr__34306 = cr34274_place_7;
return (fexpr__34306.cljs$core$IFn$_invoke$arity$1 ? fexpr__34306.cljs$core$IFn$_invoke$arity$1(G__34307) : fexpr__34306.call(null,G__34307));
})();
(cr34274_state[(0)] = cr34274_block_2);

(cr34274_state[(1)] = cr34274_place_5);

return missionary.core.fork(cr34274_place_6,cr34274_place_11);
}catch (e34303){var cr34274_exception = e34303;
(cr34274_state[(0)] = null);

throw cr34274_exception;
}});
var cr34274_block_3 = (function hyperfiddle$electric$throttle_$_cr34274_block_3(cr34274_state){
try{var cr34274_place_5 = (cr34274_state[(1)]);
var cr34274_place_15 = cr34274_place_5;
(cr34274_state[(0)] = cr34274_block_8);

(cr34274_state[(1)] = null);

(cr34274_state[(2)] = cr34274_place_15);

return cr34274_state;
}catch (e34308){var cr34274_exception = e34308;
(cr34274_state[(0)] = null);

(cr34274_state[(1)] = null);

(cr34274_state[(2)] = null);

throw cr34274_exception;
}});
var cr34274_block_6 = (function hyperfiddle$electric$throttle_$_cr34274_block_6(cr34274_state){
try{var cr34274_place_22 = missionary.core.unpark();
(cr34274_state[(0)] = cr34274_block_8);

(cr34274_state[(2)] = cr34274_place_22);

return cr34274_state;
}catch (e34309){var cr34274_exception = e34309;
(cr34274_state[(0)] = null);

(cr34274_state[(2)] = null);

throw cr34274_exception;
}});
var cr34274_block_8 = (function hyperfiddle$electric$throttle_$_cr34274_block_8(cr34274_state){
try{var cr34274_place_14 = (cr34274_state[(2)]);
(cr34274_state[(0)] = null);

(cr34274_state[(2)] = null);

return cr34274_place_14;
}catch (e34310){var cr34274_exception = e34310;
(cr34274_state[(0)] = null);

(cr34274_state[(2)] = null);

throw cr34274_exception;
}});
var cr34274_block_4 = (function hyperfiddle$electric$throttle_$_cr34274_block_4(cr34274_state){
try{var cr34274_place_16 = missionary.core.sleep;
var cr34274_place_17 = dur;
var cr34274_place_18 = (function (){var G__34313 = cr34274_place_17;
var fexpr__34312 = cr34274_place_16;
return (fexpr__34312.cljs$core$IFn$_invoke$arity$1 ? fexpr__34312.cljs$core$IFn$_invoke$arity$1(G__34313) : fexpr__34312.call(null,G__34313));
})();
(cr34274_state[(0)] = cr34274_block_5);

return missionary.core.park(cr34274_place_18);
}catch (e34311){var cr34274_exception = e34311;
(cr34274_state[(0)] = null);

(cr34274_state[(2)] = null);

throw cr34274_exception;
}});
return cloroutine.impl.coroutine((function (){var G__34314 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__34314[(0)] = cr34274_block_0);

return G__34314;
})());
})(),missionary.core.ap_run);
});
/**
 * Bound to the HTTP request of the page in which the current Electric program is running.
 */
hyperfiddle.electric._STAR_http_request_STAR_ = null;
hyperfiddle.electric._snapshot = (function hyperfiddle$electric$_snapshot(flow){
return missionary.core.eduction.cljs$core$IFn$_invoke$arity$2(contrib.data.take_upto(cljs.core.complement(cljs.core.PersistentHashSet.createAsIfByAssoc([hyperfiddle.electric.impl.runtime.pending]))),flow);
});
hyperfiddle.electric.__GT_Object = (function hyperfiddle$electric$__GT_Object(){
return (new Object());
});
hyperfiddle.electric.pending = (new hyperfiddle.electric.Pending());

//# sourceMappingURL=hyperfiddle.electric.js.map
