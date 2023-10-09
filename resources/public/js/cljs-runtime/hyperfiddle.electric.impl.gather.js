goog.provide('hyperfiddle.electric.impl.gather');
hyperfiddle.electric.impl.gather.done_BANG_ = (function hyperfiddle$electric$impl$gather$done_BANG_(main,terminator){
if(((main[((6) | (0))] = ((main[((6) | (0))]) - (1))) === (0))){
return (terminator.cljs$core$IFn$_invoke$arity$0 ? terminator.cljs$core$IFn$_invoke$arity$0() : terminator.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.gather.cancel_BANG_ = (function hyperfiddle$electric$impl$gather$cancel_BANG_(main){
var temp__5808__auto__ = (main[((2) | (0))]);
if((temp__5808__auto__ == null)){
return null;
} else {
var item = temp__5808__auto__;
var item_30002__$1 = item;
while(true){
if((item_30002__$1 === main)){
} else {
var n_30003 = (item_30002__$1[((2) | (0))]);
(item_30002__$1[((1) | (0))] = null);

(item_30002__$1[((2) | (0))] = null);

var fexpr__29902_30004 = (item_30002__$1[((0) | (0))]);
(fexpr__29902_30004.cljs$core$IFn$_invoke$arity$0 ? fexpr__29902_30004.cljs$core$IFn$_invoke$arity$0() : fexpr__29902_30004.call(null));

var G__30006 = n_30003;
item_30002__$1 = G__30006;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__29905 = (main[((0) | (0))]);
return (fexpr__29905.cljs$core$IFn$_invoke$arity$0 ? fexpr__29905.cljs$core$IFn$_invoke$arity$0() : fexpr__29905.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__29772__auto__ = item__$1;
var i__29773__auto__ = ((3) | (0));
var x__29774__auto__ = (a__29772__auto__[i__29773__auto__]);
(a__29772__auto__[i__29773__auto__] = null);

return x__29774__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e29915){var __30009 = e29915;
}
var G__30010 = next;
item__$1 = G__30010;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__29772__auto__ = main;
var i__29773__auto__ = ((3) | (0));
var x__29774__auto__ = (a__29772__auto__[i__29773__auto__]);
(a__29772__auto__[i__29773__auto__] = null);

return x__29774__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__29772__auto__ = main;
var i__29773__auto__ = ((5) | (0));
var x__29774__auto__ = (a__29772__auto__[i__29773__auto__]);
(a__29772__auto__[i__29773__auto__] = false);

return x__29774__auto__;
})();
var head = (function (){var a__29772__auto__ = main;
var i__29773__auto__ = ((3) | (0));
var x__29774__auto__ = (a__29772__auto__[i__29773__auto__]);
(a__29772__auto__[i__29773__auto__] = null);

return x__29774__auto__;
})();
var item = (function (){var a__29772__auto__ = head;
var i__29773__auto__ = ((3) | (0));
var x__29774__auto__ = (a__29772__auto__[i__29773__auto__]);
(a__29772__auto__[i__29773__auto__] = null);

return x__29774__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e29925){var e = e29925;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,item,e);
}})();
while(true){
if((item == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
if(idle){
(notifier.cljs$core$IFn$_invoke$arity$0 ? notifier.cljs$core$IFn$_invoke$arity$0() : notifier.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle);
}

return r;
} else {
var next = (function (){var a__29772__auto__ = item;
var i__29773__auto__ = ((3) | (0));
var x__29774__auto__ = (a__29772__auto__[i__29773__auto__]);
(a__29772__auto__[i__29773__auto__] = null);

return x__29774__auto__;
})();
var G__30015 = next;
var G__30016 = (function (){try{var G__29931 = r;
var G__29932 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29931,G__29932) : rf.call(null,G__29931,G__29932));
}catch (e29930){var e = e29930;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__30015;
r = G__30016;
continue;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.gather.It = (function (main,rf,notifier,terminator){
this.main = main;
this.rf = rf;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.gather.It.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__29934 = (arguments.length - (1));
switch (G__29934) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args29933){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29933)));
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var it = this;
return hyperfiddle.electric.impl.gather.cancel_BANG_(self__.main);
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return hyperfiddle.electric.impl.gather.sample_BANG_(self__.main,self__.rf,self__.notifier);
}));

(hyperfiddle.electric.impl.gather.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main","main",-477271134,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.impl.gather.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.gather/It");

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.gather/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.gather/It.
 */
hyperfiddle.electric.impl.gather.__GT_It = (function hyperfiddle$electric$impl$gather$__GT_It(main,rf,notifier,terminator){
return (new hyperfiddle.electric.impl.gather.It(main,rf,notifier,terminator));
});

hyperfiddle.electric.impl.gather.transfer_BANG_ = (function hyperfiddle$electric$impl$gather$transfer_BANG_(it){
var main = it.main;
while(true){
if(cljs.core.truth_((main[((4) | (0))] = cljs.core.not((main[((4) | (0))]))))){
var temp__5806__auto___30021 = (main[((1) | (0))]);
if((temp__5806__auto___30021 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e29954){var __30022 = e29954;
}} else {
var prev_30023 = temp__5806__auto___30021;
var item_30024 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_30025 = (function (){var a__29772__auto__ = main;
var i__29773__auto__ = ((5) | (0));
var x__29774__auto__ = (a__29772__auto__[i__29773__auto__]);
(a__29772__auto__[i__29773__auto__] = false);

return x__29774__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_30024[((1) | (0))] = prev_30023);

(prev_30023[((2) | (0))] = item_30024);

(main[((1) | (0))] = item_30024);

(item_30024[((2) | (0))] = main);

var n_30026 = ((function (item_30024,idle_30025,prev_30023,temp__5806__auto___30021,main){
return (function (){
if(((item_30024[((1) | (0))]) == null)){
try{return cljs.core.deref((item_30024[((0) | (0))]));
}catch (e29971){var _ = e29971;
return null;
}} else {
var temp__5806__auto____$1 = (function (){var a__29772__auto__ = main;
var i__29773__auto__ = ((3) | (0));
var x__29774__auto__ = (a__29772__auto__[i__29773__auto__]);
(a__29772__auto__[i__29773__auto__] = item_30024);

return x__29774__auto__;
})();
if((temp__5806__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__29977 = it.notifier;
return (fexpr__29977.cljs$core$IFn$_invoke$arity$0 ? fexpr__29977.cljs$core$IFn$_invoke$arity$0() : fexpr__29977.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5806__auto____$1;
return (item_30024[((3) | (0))] = curr);
}
}
});})(item_30024,idle_30025,prev_30023,temp__5806__auto___30021,main))
;
var t_30027 = ((function (n_30026,item_30024,idle_30025,prev_30023,temp__5806__auto___30021,main){
return (function (){
var temp__5808__auto___30033 = (item_30024[((1) | (0))]);
if((temp__5808__auto___30033 == null)){
} else {
var prev_30034__$1 = temp__5808__auto___30033;
var next_30035 = (item_30024[((2) | (0))]);
(next_30035[((1) | (0))] = prev_30034__$1);

(prev_30034__$1[((2) | (0))] = next_30035);

(item_30024[((1) | (0))] = null);

(item_30024[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_30026,item_30024,idle_30025,prev_30023,temp__5806__auto___30021,main))
;
(item_30024[((0) | (0))] = (function (){try{var fexpr__29987 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__29987.cljs$core$IFn$_invoke$arity$2 ? fexpr__29987.cljs$core$IFn$_invoke$arity$2(n_30026,t_30027) : fexpr__29987.call(null,n_30026,t_30027));
}catch (e29985){var e = e29985;
return hyperfiddle.electric.impl.failer.run(e,n_30026,t_30027);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_30025){
var fexpr__29988_30039 = it.notifier;
(fexpr__29988_30039.cljs$core$IFn$_invoke$arity$0 ? fexpr__29988_30039.cljs$core$IFn$_invoke$arity$0() : fexpr__29988_30039.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_30025);
}
}

continue;
} else {
return null;
}
break;
}
});
/**
 * 
 * Given a commutative function and a flow of flows, returns a flow concurrently running the flow with flows produced by
 * this flow and producing values produced by nested flows, reduced by the function if more than one can be transferred
 * simultaneously.
 */
hyperfiddle.electric.impl.gather.gather = (function hyperfiddle$electric$impl$gather$gather(rf,_GT__GT_x){
return (function (n,t){
var main = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((7) | (0)));
var it = hyperfiddle.electric.impl.gather.__GT_It(main,rf,n,t);
var G__29991_30042 = main;
(G__29991_30042[((1) | (0))] = main);

(G__29991_30042[((2) | (0))] = main);

(G__29991_30042[((4) | (0))] = true);

(G__29991_30042[((5) | (0))] = true);

(G__29991_30042[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__29993 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__29994 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__29993,G__29994) : _GT__GT_x.call(null,G__29993,G__29994));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
