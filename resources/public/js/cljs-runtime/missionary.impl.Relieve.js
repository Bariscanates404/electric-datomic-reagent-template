goog.provide('missionary.impl.Relieve');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Relieve.Process = (function (reducer,notifier,terminator,iterator,current,busy,done){
this.reducer = reducer;
this.notifier = notifier;
this.terminator = terminator;
this.iterator = iterator;
this.current = current;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Relieve.Process.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__28548 = (arguments.length - (1));
switch (G__28548) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Relieve.Process.prototype.apply = (function (self__,args28544){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28544)));
}));

(missionary.impl.Relieve.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.iterator.cljs$core$IFn$_invoke$arity$0 ? self__.iterator.cljs$core$IFn$_invoke$arity$0() : self__.iterator.call(null));
}));

(missionary.impl.Relieve.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.Relieve.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Relieve.transfer.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.Relieve.transfer.call(null,p__$1));
}));

(missionary.impl.Relieve.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reducer","reducer",-948842876,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"iterator","iterator",-32550441,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.Relieve.Process.cljs$lang$type = true);

(missionary.impl.Relieve.Process.cljs$lang$ctorStr = "missionary.impl.Relieve/Process");

(missionary.impl.Relieve.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Relieve/Process");
}));

/**
 * Positional factory function for missionary.impl.Relieve/Process.
 */
missionary.impl.Relieve.__GT_Process = (function missionary$impl$Relieve$__GT_Process(reducer,notifier,terminator,iterator,current,busy,done){
return (new missionary.impl.Relieve.Process(reducer,notifier,terminator,iterator,current,busy,done));
});

missionary.impl.Relieve.transfer = (function missionary$impl$Relieve$transfer(ps){
var x = ps.current;
(ps.current = ps);

if((ps.reducer == null)){
var fexpr__28550_28609 = ps.terminator;
(fexpr__28550_28609.cljs$core$IFn$_invoke$arity$0 ? fexpr__28550_28609.cljs$core$IFn$_invoke$arity$0() : fexpr__28550_28609.call(null));
} else {
}

if((ps.notifier == null)){
throw x;
} else {
return x;
}
});
missionary.impl.Relieve.ready = (function missionary$impl$Relieve$ready(ps){
var cb = null;
while(true){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
var G__28612 = (cljs.core.truth_(ps.done)?(function (){
(ps.reducer = null);

if((ps === ps.current)){
return ps.terminator;
} else {
return cb;
}
})()
:(function (){var temp__5806__auto__ = ps.notifier;
if((temp__5806__auto__ == null)){
try{cljs.core.deref(ps.iterator);
}catch (e28577){var __28618 = e28577;
}
return cb;
} else {
var n = temp__5806__auto__;
var r = ps.current;
try{var x_28621 = cljs.core.deref(ps.iterator);
(ps.current = (((r === ps))?x_28621:(function (){var fexpr__28585 = ps.reducer;
return (fexpr__28585.cljs$core$IFn$_invoke$arity$2 ? fexpr__28585.cljs$core$IFn$_invoke$arity$2(r,x_28621) : fexpr__28585.call(null,r,x_28621));
})()));
}catch (e28579){var e_28625 = e28579;
(ps.current = e_28625);

(ps.notifier = null);

var fexpr__28581_28626 = ps.iterator;
(fexpr__28581_28626.cljs$core$IFn$_invoke$arity$0 ? fexpr__28581_28626.cljs$core$IFn$_invoke$arity$0() : fexpr__28581_28626.call(null));
}
if((r === ps)){
return n;
} else {
return cb;
}
}
})());
cb = G__28612;
continue;
} else {
return cb;
}
break;
}
});
missionary.impl.Relieve.run = (function missionary$impl$Relieve$run(rf,f,n,t){
var ps = missionary.impl.Relieve.__GT_Process(rf,n,t,null,null,true,false);
(ps.current = ps);

(ps.iterator = (function (){var G__28588 = (function (){
var temp__5808__auto__ = missionary.impl.Relieve.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});
var G__28589 = (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Relieve.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28588,G__28589) : f.call(null,G__28588,G__28589));
})());

var temp__5808__auto___28629 = missionary.impl.Relieve.ready(ps);
if((temp__5808__auto___28629 == null)){
} else {
var cb_28635 = temp__5808__auto___28629;
(cb_28635.cljs$core$IFn$_invoke$arity$0 ? cb_28635.cljs$core$IFn$_invoke$arity$0() : cb_28635.call(null));
}

return ps;
});

//# sourceMappingURL=missionary.impl.Relieve.js.map
