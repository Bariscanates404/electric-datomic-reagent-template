goog.provide('missionary.impl.Sample');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Sample.Process = (function (combinator,notifier,terminator,args,inputs,busy,done,alive){
this.combinator = combinator;
this.notifier = notifier;
this.terminator = terminator;
this.args = args;
this.inputs = inputs;
this.busy = busy;
this.done = done;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Sample.Process.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__28707 = (arguments.length - (1));
switch (G__28707) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args28703){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28703)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__28713 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__28713.cljs$core$IFn$_invoke$arity$0 ? fexpr__28713.cljs$core$IFn$_invoke$arity$0() : fexpr__28713.call(null));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.Sample.transfer.call(null,p__$1));
}));

(missionary.impl.Sample.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Sample.Process.cljs$lang$type = true);

(missionary.impl.Sample.Process.cljs$lang$ctorStr = "missionary.impl.Sample/Process");

(missionary.impl.Sample.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Sample/Process");
}));

/**
 * Positional factory function for missionary.impl.Sample/Process.
 */
missionary.impl.Sample.__GT_Process = (function missionary$impl$Sample$__GT_Process(combinator,notifier,terminator,args,inputs,busy,done,alive){
return (new missionary.impl.Sample.Process(combinator,notifier,terminator,args,inputs,busy,done,alive));
});

missionary.impl.Sample.ready = (function missionary$impl$Sample$ready(ps){
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var cb = null;
while(true){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
if(cljs.core.truth_(ps.done)){
var n__5636__auto___28808 = sampled;
var i_28809 = (0);
while(true){
if((i_28809 < n__5636__auto___28808)){
var input_28810 = (inputs[i_28809]);
(input_28810.cljs$core$IFn$_invoke$arity$0 ? input_28810.cljs$core$IFn$_invoke$arity$0() : input_28810.call(null));

if(((args[i_28809]) === args)){
try{cljs.core.deref(input_28810);
}catch (e28729){var __28812 = e28729;
}} else {
(args[i_28809] = args);
}

var G__28813 = (i_28809 + (1));
i_28809 = G__28813;
continue;
} else {
}
break;
}

if(((ps.alive = (ps.alive - (1))) === (0))){
return ps.terminator;
} else {
return null;
}
} else {
if(((args[sampled]) === args)){
try{cljs.core.deref((inputs[sampled]));
}catch (e28730){var __28820 = e28730;
}
var G__28821 = cb;
cb = G__28821;
continue;
} else {
return ps.notifier;
}
}
} else {
return cb;
}
break;
}
});
missionary.impl.Sample.transfer = (function missionary$impl$Sample$transfer(ps){
var c = ps.combinator;
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var sampler = (inputs[sampled]);
var x = (function (){try{try{if((c == null)){
throw (new Error("Undefined continuous flow."));
} else {
}

var n__5636__auto___28832 = sampled;
var i_28833 = (0);
while(true){
if((i_28833 < n__5636__auto___28832)){
if(((args[i_28833]) === args)){
var input_28834 = (inputs[i_28833]);
while(true){
(args[i_28833] = null);

var x_28836 = cljs.core.deref(input_28834);
if(((args[i_28833]) === args)){
continue;
} else {
(args[i_28833] = x_28836);
}
break;
}
} else {
}

var G__28841 = (i_28833 + (1));
i_28833 = G__28841;
continue;
} else {
}
break;
}
}catch (e28742){var e_28843 = e28742;
try{cljs.core.deref(sampler);
}catch (e28743){var __28847 = e28743;
}
throw e_28843;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e28741){var e = e28741;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___28849 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___28849 == null)){
} else {
var cb_28851 = temp__5808__auto___28849;
(cb_28851.cljs$core$IFn$_invoke$arity$0 ? cb_28851.cljs$core$IFn$_invoke$arity$0() : cb_28851.call(null));
}

if((ps.notifier == null)){
throw x;
} else {
return x;
}
});
missionary.impl.Sample.dirty = (function missionary$impl$Sample$dirty(p,i){
var args = p.args;
if(((args[i]) === args)){
try{return cljs.core.deref((p.inputs[i]));
}catch (e28756){var _ = e28756;
return null;
}} else {
return (args[i] = args);
}
});
missionary.impl.Sample.run = (function missionary$impl$Sample$run(c,f,fs,n,t){
var it = cljs.core.iter(fs);
var arity = (cljs.core.count(fs) + (1));
var args = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var inputs = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var ps = missionary.impl.Sample.__GT_Process(c,n,t,args,inputs,false,false,arity);
var done = (function (){
if(((ps.alive = (ps.alive - (1))) === (0))){
var fexpr__28767 = ps.terminator;
return (fexpr__28767.cljs$core$IFn$_invoke$arity$0 ? fexpr__28767.cljs$core$IFn$_invoke$arity$0() : fexpr__28767.call(null));
} else {
return null;
}
});
var index_28863 = (0);
var flow_28864 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_28863] = (function (){var G__28770 = ((function (index_28863,flow_28864,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_28863);
});})(index_28863,flow_28864,it,arity,args,inputs,ps,done))
;
var G__28771 = done;
return (flow_28864.cljs$core$IFn$_invoke$arity$2 ? flow_28864.cljs$core$IFn$_invoke$arity$2(G__28770,G__28771) : flow_28864.call(null,G__28770,G__28771));
})());

if(((args[index_28863]) == null)){
(ps.combinator = null);
} else {
}

var G__28870 = (index_28863 + (1));
var G__28871 = it.next();
index_28863 = G__28870;
flow_28864 = G__28871;
continue;
} else {
(inputs[index_28863] = (function (){var G__28775 = ((function (index_28863,flow_28864,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_28863,flow_28864,it,arity,args,inputs,ps,done))
;
var G__28776 = ((function (index_28863,flow_28864,G__28775,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_28863,flow_28864,G__28775,it,arity,args,inputs,ps,done))
;
return (flow_28864.cljs$core$IFn$_invoke$arity$2 ? flow_28864.cljs$core$IFn$_invoke$arity$2(G__28775,G__28776) : flow_28864.call(null,G__28775,G__28776));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
