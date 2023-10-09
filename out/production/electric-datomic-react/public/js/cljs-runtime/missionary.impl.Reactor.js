goog.provide('missionary.impl.Reactor');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Reactor.Failer = (function (t,e){
this.t = t;
this.e = e;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Failer.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__28708 = (arguments.length - (1));
switch (G__28708) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reactor.Failer.prototype.apply = (function (self__,args28704){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28704)));
}));

(missionary.impl.Reactor.Failer.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return null;
}));

(missionary.impl.Reactor.Failer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.t.cljs$core$IFn$_invoke$arity$0 ? self__.t.cljs$core$IFn$_invoke$arity$0() : self__.t.call(null));

throw self__.e;
}));

(missionary.impl.Reactor.Failer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null);
}));

(missionary.impl.Reactor.Failer.cljs$lang$type = true);

(missionary.impl.Reactor.Failer.cljs$lang$ctorStr = "missionary.impl.Reactor/Failer");

(missionary.impl.Reactor.Failer.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Failer");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Failer.
 */
missionary.impl.Reactor.__GT_Failer = (function missionary$impl$Reactor$__GT_Failer(t,e){
return (new missionary.impl.Reactor.Failer(t,e));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Reactor.Subscription = (function (notifier,terminator,subscriber,subscribed,prev,next){
this.notifier = notifier;
this.terminator = terminator;
this.subscriber = subscriber;
this.subscribed = subscribed;
this.prev = prev;
this.next = next;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Subscription.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__28716 = (arguments.length - (1));
switch (G__28716) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reactor.Subscription.prototype.apply = (function (self__,args28715){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28715)));
}));

(missionary.impl.Reactor.Subscription.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
(missionary.impl.Reactor.unsubscribe.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.unsubscribe.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Reactor.unsubscribe.call(null,this$));

return null;
}));

(missionary.impl.Reactor.Subscription.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Reactor.push.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.push.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Reactor.push.call(null,this$__$1));
}));

(missionary.impl.Reactor.Subscription.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"subscriber","subscriber",-423806886,null),new cljs.core.Symbol(null,"subscribed","subscribed",-1642347512,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null);
}));

(missionary.impl.Reactor.Subscription.cljs$lang$type = true);

(missionary.impl.Reactor.Subscription.cljs$lang$ctorStr = "missionary.impl.Reactor/Subscription");

(missionary.impl.Reactor.Subscription.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Subscription");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Subscription.
 */
missionary.impl.Reactor.__GT_Subscription = (function missionary$impl$Reactor$__GT_Subscription(notifier,terminator,subscriber,subscribed,prev,next){
return (new missionary.impl.Reactor.Subscription(notifier,terminator,subscriber,subscribed,prev,next));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Reactor.Publisher = (function (process,iterator,ranks,pending,children,live,busy,done,value,prev,next,child,sibling,active,subs){
this.process = process;
this.iterator = iterator;
this.ranks = ranks;
this.pending = pending;
this.children = children;
this.live = live;
this.busy = busy;
this.done = done;
this.value = value;
this.prev = prev;
this.next = next;
this.child = child;
this.sibling = sibling;
this.active = active;
this.subs = subs;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Publisher.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__28733 = (arguments.length - (1));
switch (G__28733) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reactor.Publisher.prototype.apply = (function (self__,args28731){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28731)));
}));

(missionary.impl.Reactor.Publisher.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
(missionary.impl.Reactor.free.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.free.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Reactor.free.call(null,this$));

return null;
}));

(missionary.impl.Reactor.Publisher.prototype.cljs$core$IFn$_invoke$arity$2 = (function (n,t){
var self__ = this;
var this$ = this;
return (missionary.impl.Reactor.subscribe.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.Reactor.subscribe.cljs$core$IFn$_invoke$arity$3(this$,n,t) : missionary.impl.Reactor.subscribe.call(null,this$,n,t));
}));

(missionary.impl.Reactor.Publisher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"iterator","iterator",-32550441,null),new cljs.core.Symbol(null,"ranks","ranks",-162053339,null),cljs.core.with_meta(new cljs.core.Symbol(null,"pending","pending",1420494800,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"live","live",30383488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.Symbol(null,"sibling","sibling",456666527,null),new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null)], null);
}));

(missionary.impl.Reactor.Publisher.cljs$lang$type = true);

(missionary.impl.Reactor.Publisher.cljs$lang$ctorStr = "missionary.impl.Reactor/Publisher");

(missionary.impl.Reactor.Publisher.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Publisher");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Publisher.
 */
missionary.impl.Reactor.__GT_Publisher = (function missionary$impl$Reactor$__GT_Publisher(process,iterator,ranks,pending,children,live,busy,done,value,prev,next,child,sibling,active,subs){
return (new missionary.impl.Reactor.Publisher(process,iterator,ranks,pending,children,live,busy,done,value,prev,next,child,sibling,active,subs));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Reactor.Process = (function (success,failure,result,kill,boot,alive,active,current,reaction,schedule,subscriber,delayed){
this.success = success;
this.failure = failure;
this.result = result;
this.kill = kill;
this.boot = boot;
this.alive = alive;
this.active = active;
this.current = current;
this.reaction = reaction;
this.schedule = schedule;
this.subscriber = subscriber;
this.delayed = delayed;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Process.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__28764 = (arguments.length - (1));
switch (G__28764) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reactor.Process.prototype.apply = (function (self__,args28763){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28763)));
}));

(missionary.impl.Reactor.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
(missionary.impl.Reactor.event.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.event.cljs$core$IFn$_invoke$arity$1(self__.kill) : missionary.impl.Reactor.event.call(null,self__.kill));

return null;
}));

(missionary.impl.Reactor.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"success","success",-763789863,null),new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"kill","kill",1628195952,null),new cljs.core.Symbol(null,"boot","boot",-646575184,null),new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.Symbol(null,"schedule","schedule",1989806793,null),new cljs.core.Symbol(null,"subscriber","subscriber",-423806886,null),new cljs.core.Symbol(null,"delayed","delayed",1892523756,null)], null);
}));

(missionary.impl.Reactor.Process.cljs$lang$type = true);

(missionary.impl.Reactor.Process.cljs$lang$ctorStr = "missionary.impl.Reactor/Process");

(missionary.impl.Reactor.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Process");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Process.
 */
missionary.impl.Reactor.__GT_Process = (function missionary$impl$Reactor$__GT_Process(success,failure,result,kill,boot,alive,active,current,reaction,schedule,subscriber,delayed){
return (new missionary.impl.Reactor.Process(success,failure,result,kill,boot,alive,active,current,reaction,schedule,subscriber,delayed));
});

missionary.impl.Reactor.stale = ({});
missionary.impl.Reactor.error = ({});
missionary.impl.Reactor.current = null;
missionary.impl.Reactor.delayed = null;
missionary.impl.Reactor.lt = (function missionary$impl$Reactor$lt(x,y){
if((x == null)){
return true;
} else {
if((y == null)){
return false;
} else {
var xl = x.length;
var yl = y.length;
var ml = (function (){var x__5133__auto__ = xl;
var y__5134__auto__ = yl;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var i = (0);
while(true){
if((i < ml)){
var xi = (x[i]);
var yi = (y[i]);
if((xi === yi)){
var G__29271 = (i + (1));
i = G__29271;
continue;
} else {
return (xi < yi);
}
} else {
return (xl > yl);
}
break;
}
}
}
});
missionary.impl.Reactor.link = (function missionary$impl$Reactor$link(x,y){
if(missionary.impl.Reactor.lt(x.ranks,y.ranks)){
(y.sibling = x.child);

(x.child = y);

return x;
} else {
(x.sibling = y.child);

(y.child = x);

return y;
}
});
missionary.impl.Reactor.dequeue = (function missionary$impl$Reactor$dequeue(pub){
var head = pub.child;
(pub.child = null);

var heap = null;
var prev = null;
var head__$1 = head;
while(true){
if((head__$1 == null)){
if((prev == null)){
return heap;
} else {
if((heap == null)){
return prev;
} else {
return missionary.impl.Reactor.link(heap,prev);
}
}
} else {
var next = head__$1.sibling;
(head__$1.sibling = null);

if((prev == null)){
var G__29281 = heap;
var G__29282 = head__$1;
var G__29283 = next;
heap = G__29281;
prev = G__29282;
head__$1 = G__29283;
continue;
} else {
var head__$2 = missionary.impl.Reactor.link(prev,head__$1);
var G__29284 = (((heap == null))?head__$2:missionary.impl.Reactor.link(heap,head__$2));
var G__29285 = null;
var G__29286 = next;
heap = G__29284;
prev = G__29285;
head__$1 = G__29286;
continue;
}
}
break;
}
});
missionary.impl.Reactor.schedule = (function missionary$impl$Reactor$schedule(pub){
var ps = pub.process;
var temp__5806__auto__ = ps.schedule;
if((temp__5806__auto__ == null)){
(ps.schedule = pub);

(ps.delayed = missionary.impl.Reactor.delayed);

return (missionary.impl.Reactor.delayed = ps);
} else {
var sch = temp__5806__auto__;
return (ps.schedule = missionary.impl.Reactor.link(pub,sch));
}
});
missionary.impl.Reactor.pull = (function missionary$impl$Reactor$pull(pub){
var ps = pub.process;
var cur = ps.subscriber;
(ps.subscriber = pub);

(pub.value = missionary.impl.Reactor.error);

try{(pub.value = cljs.core.deref(pub.iterator));
}catch (e28899){var e_29289 = e28899;
if((ps === ps.result)){
(ps.result = e_29289);

var k_29290 = ps.kill;
if(cljs.core.truth_((k_29290.busy = cljs.core.not(k_29290.busy)))){
missionary.impl.Reactor.schedule(k_29290);
} else {
}
} else {
}
}
return (ps.subscriber = cur);
});
missionary.impl.Reactor.sample = (function missionary$impl$Reactor$sample(pub){
while(true){
missionary.impl.Reactor.pull(pub);

if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
if(cljs.core.truth_(pub.done)){
return missionary.impl.Reactor.schedule(pub);
} else {
continue;
}
} else {
return null;
}
break;
}
});
missionary.impl.Reactor.touch = (function missionary$impl$Reactor$touch(pub){
var ps = pub.process;
if(cljs.core.truth_(pub.done)){
var prv = pub.prev;
(pub.prev = null);

if((pub === prv)){
return (ps.alive = null);
} else {
var nxt = pub.next;
(nxt.prev = prv);

(prv.next = nxt);

if((pub === ps.alive)){
return (ps.alive = prv);
} else {
return null;
}
}
} else {
if((pub === pub.active)){
(pub.active = ps.active);

(ps.active = pub);

(pub.pending = (1));

return missionary.impl.Reactor.pull(pub);
} else {
if(cljs.core.truth_(pub.live)){
return (pub.value = missionary.impl.Reactor.stale);
} else {
return missionary.impl.Reactor.sample(pub);
}
}
}
});
missionary.impl.Reactor.ack = (function missionary$impl$Reactor$ack(pub){
if(((pub.pending = (pub.pending - (1))) === (0))){
(pub.value = null);

if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
return missionary.impl.Reactor.schedule(pub);
} else {
return null;
}
} else {
return null;
}
});
missionary.impl.Reactor.propagate = (function missionary$impl$Reactor$propagate(pub){
var ps = pub.process;
(missionary.impl.Reactor.current = ps);

var pub_29306__$1 = pub;
while(true){
(ps.reaction = missionary.impl.Reactor.dequeue(pub_29306__$1));

(ps.current = pub_29306__$1);

missionary.impl.Reactor.touch(pub_29306__$1);

var temp__5808__auto___29308 = pub_29306__$1.subs;
if((temp__5808__auto___29308 == null)){
} else {
var t_29309 = temp__5808__auto___29308;
(pub_29306__$1.subs = null);

var s_29311 = t_29309;
while(true){
var s_29312__$1 = s_29311.next;
(s_29312__$1.prev = null);

if((s_29312__$1 === t_29309)){
} else {
var G__29313 = s_29312__$1;
s_29311 = G__29313;
continue;
}
break;
}

var n_29314 = t_29309.next;
while(true){
var s_29315 = n_29314;
var n_29316__$1 = s_29315.next;
(s_29315.next = null);

if((pub_29306__$1.pending > (0))){
(pub_29306__$1.pending = (pub_29306__$1.pending + (1)));
} else {
}

(ps.subscriber = s_29315.subscriber);

var fexpr__29035_29320 = (((pub_29306__$1.prev == null))?s_29315.terminator:s_29315.notifier);
(fexpr__29035_29320.cljs$core$IFn$_invoke$arity$0 ? fexpr__29035_29320.cljs$core$IFn$_invoke$arity$0() : fexpr__29035_29320.call(null));

(ps.subscriber = null);

if((s_29315 === t_29309)){
} else {
var G__29322 = n_29316__$1;
n_29314 = G__29322;
continue;
}
break;
}
}

var temp__5808__auto___29323 = ps.reaction;
if((temp__5808__auto___29323 == null)){
} else {
var r_29324 = temp__5808__auto___29323;
var G__29325 = r_29324;
pub_29306__$1 = G__29325;
continue;
}
break;
}

(ps.current = null);

(missionary.impl.Reactor.current = null);

while(true){
var temp__5808__auto___29326 = ps.active;
if((temp__5808__auto___29326 == null)){
} else {
var pub_29328__$1 = temp__5808__auto___29326;
(ps.active = pub_29328__$1.active);

(pub_29328__$1.active = (((missionary.impl.Reactor.error === pub_29328__$1.value))?null:pub_29328__$1));

missionary.impl.Reactor.ack(pub_29328__$1);

continue;
}
break;
}

if((ps.alive == null)){
var temp__5808__auto__ = ps.boot;
if((temp__5808__auto__ == null)){
return null;
} else {
var pub__$1 = temp__5808__auto__;
(ps.boot = null);

if((ps.result === ps)){
(ps.result = pub__$1.value);

return ps.success;
} else {
return ps.failure;
}
}
} else {
return null;
}
});
missionary.impl.Reactor.hook = (function missionary$impl$Reactor$hook(s){
var pub = s.subscribed;
if((pub.prev == null)){
var fexpr__29064 = s.terminator;
return (fexpr__29064.cljs$core$IFn$_invoke$arity$0 ? fexpr__29064.cljs$core$IFn$_invoke$arity$0() : fexpr__29064.call(null));
} else {
var p = pub.subs;
(pub.subs = s);

if((p == null)){
return (s.next = (s.prev = s));
} else {
var n = p.next;
(p.next = s);

(n.prev = s);

(s.prev = p);

return (s.next = n);
}
}
});
missionary.impl.Reactor.cancel = (function missionary$impl$Reactor$cancel(pub){
if(cljs.core.truth_(pub.live)){
(pub.live = false);

var ps = pub.process;
var cur = ps.subscriber;
(ps.subscriber = pub);

var fexpr__29078_29337 = pub.iterator;
(fexpr__29078_29337.cljs$core$IFn$_invoke$arity$0 ? fexpr__29078_29337.cljs$core$IFn$_invoke$arity$0() : fexpr__29078_29337.call(null));

(ps.subscriber = cur);

if((missionary.impl.Reactor.stale === pub.value)){
return missionary.impl.Reactor.sample(pub);
} else {
return null;
}
} else {
return null;
}
});
missionary.impl.Reactor.failer = (function missionary$impl$Reactor$failer(n,t,e){
(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return missionary.impl.Reactor.__GT_Failer(t,e);
});
missionary.impl.Reactor.free = (function missionary$impl$Reactor$free(pub){
if((pub.process === missionary.impl.Reactor.current)){
} else {
throw (new Error("Cancellation failure : not in reactor context."));
}

return missionary.impl.Reactor.cancel(pub);
});
missionary.impl.Reactor.subscribe = (function missionary$impl$Reactor$subscribe(pub,n,t){
var ps = pub.process;
var sub = ps.subscriber;
if((!((ps === missionary.impl.Reactor.current)))){
return missionary.impl.Reactor.failer(n,t,(new Error("Subscription failure : not in reactor context.")));
} else {
if((sub === ps.boot)){
return missionary.impl.Reactor.failer(n,t,(new Error("Subscription failure : not a subscriber.")));
} else {
var s = missionary.impl.Reactor.__GT_Subscription(n,t,sub,pub,null,null);
if((pub.active === pub)){
missionary.impl.Reactor.hook(s);
} else {
if((pub.pending > (0))){
(pub.pending = (pub.pending + (1)));
} else {
}

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}

return s;
}
}
});
missionary.impl.Reactor.unsubscribe = (function missionary$impl$Reactor$unsubscribe(s){
var sub = s.subscriber;
var ps = sub.process;
if((ps === missionary.impl.Reactor.current)){
} else {
throw (new Error("Unsubscription failure : not in reactor context."));
}

var temp__5808__auto__ = s.subscribed;
if((temp__5808__auto__ == null)){
return null;
} else {
var pub = temp__5808__auto__;
(s.subscribed = null);

var temp__5806__auto__ = s.prev;
if((temp__5806__auto__ == null)){
if((pub.pending > (0))){
return missionary.impl.Reactor.ack(pub);
} else {
return null;
}
} else {
var p = temp__5806__auto__;
var n = s.next;
(s.prev = null);

(s.next = null);

if((p === s)){
(pub.subs = null);
} else {
(n.prev = p);

(p.next = n);

if((s === pub.subs)){
(pub.subs = p);
} else {
}
}

var cur = ps.subscriber;
(ps.subscriber = sub);

var fexpr__29120_29347 = s.notifier;
(fexpr__29120_29347.cljs$core$IFn$_invoke$arity$0 ? fexpr__29120_29347.cljs$core$IFn$_invoke$arity$0() : fexpr__29120_29347.call(null));

return (ps.subscriber = cur);
}
}
});
missionary.impl.Reactor.push = (function missionary$impl$Reactor$push(s){
var sub = s.subscriber;
var ps = sub.process;
if((ps === missionary.impl.Reactor.current)){
} else {
throw (new Error("Transfer failure : not in reactor context."));
}

var value = (function (){var temp__5806__auto__ = s.subscribed;
if((temp__5806__auto__ == null)){
return missionary.impl.Reactor.error;
} else {
var pub = temp__5806__auto__;
var value = pub.value;
if((pub.pending > (0))){
missionary.impl.Reactor.ack(pub);

return value;
} else {
if((value === missionary.impl.Reactor.stale)){
missionary.impl.Reactor.sample(pub);

return pub.value;
} else {
return value;
}
}
}
})();
var cur = ps.subscriber;
(ps.subscriber = sub);

if((value === missionary.impl.Reactor.error)){
var fexpr__29129_29349 = s.terminator;
(fexpr__29129_29349.cljs$core$IFn$_invoke$arity$0 ? fexpr__29129_29349.cljs$core$IFn$_invoke$arity$0() : fexpr__29129_29349.call(null));

(ps.subscriber = cur);

throw (new missionary.Cancelled("Subscription cancelled."));
} else {
missionary.impl.Reactor.hook(s);

(ps.subscriber = cur);

return value;
}
});
missionary.impl.Reactor.event = (function missionary$impl$Reactor$event(pub){
var temp__5806__auto__ = missionary.impl.Reactor.current;
if((temp__5806__auto__ == null)){
if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
var temp__5808__auto___29350 = missionary.impl.Reactor.propagate(pub);
if((temp__5808__auto___29350 == null)){
} else {
var cb_29351 = temp__5808__auto___29350;
var G__29144_29352 = pub.process.result;
(cb_29351.cljs$core$IFn$_invoke$arity$1 ? cb_29351.cljs$core$IFn$_invoke$arity$1(G__29144_29352) : cb_29351.call(null,G__29144_29352));
}
} else {
}

while(true){
var temp__5808__auto__ = missionary.impl.Reactor.delayed;
if((temp__5808__auto__ == null)){
return null;
} else {
var ps = temp__5808__auto__;
(missionary.impl.Reactor.delayed = ps.delayed);

(ps.delayed = null);

var pub__$1 = ps.schedule;
(ps.schedule = null);

var temp__5808__auto___29353__$1 = missionary.impl.Reactor.propagate(pub__$1);
if((temp__5808__auto___29353__$1 == null)){
} else {
var cb_29354 = temp__5808__auto___29353__$1;
var G__29157_29355 = ps.result;
(cb_29354.cljs$core$IFn$_invoke$arity$1 ? cb_29354.cljs$core$IFn$_invoke$arity$1(G__29157_29355) : cb_29354.call(null,G__29157_29355));
}

continue;
}
break;
}
} else {
var ps = temp__5806__auto__;
if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
if((ps === pub.process)){
if(missionary.impl.Reactor.lt(ps.current.ranks,pub.ranks)){
return (ps.reaction = (function (){var temp__5806__auto____$1 = ps.reaction;
if((temp__5806__auto____$1 == null)){
return pub;
} else {
var r = temp__5806__auto____$1;
return missionary.impl.Reactor.link(pub,r);
}
})());
} else {
return missionary.impl.Reactor.schedule(pub);
}
} else {
return missionary.impl.Reactor.schedule(pub);
}
} else {
return null;
}
}
});
missionary.impl.Reactor.kill = (function (){
if((typeof missionary !== 'undefined') && (typeof missionary.impl !== 'undefined') && (typeof missionary.impl.Reactor !== 'undefined') && (typeof missionary.impl.Reactor.t_missionary$impl$Reactor29172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
missionary.impl.Reactor.t_missionary$impl$Reactor29172 = (function (meta29173){
this.meta29173 = meta29173;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.t_missionary$impl$Reactor29172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29174,meta29173__$1){
var self__ = this;
var _29174__$1 = this;
return (new missionary.impl.Reactor.t_missionary$impl$Reactor29172(meta29173__$1));
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor29172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29174){
var self__ = this;
var _29174__$1 = this;
return self__.meta29173;
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor29172.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var ps = missionary.impl.Reactor.current;
var temp__5808__auto___29357 = ps.alive;
if((temp__5808__auto___29357 == null)){
} else {
var t_29358 = temp__5808__auto___29357;
var pub_29359 = t_29358.next;
while(true){
missionary.impl.Reactor.cancel(pub_29359);

var temp__5808__auto___29360__$1 = ps.alive;
if((temp__5808__auto___29360__$1 == null)){
} else {
var t_29361__$1 = temp__5808__auto___29360__$1;
var pub_29362__$1 = (function (){var pub_29362__$1 = pub_29359;
while(true){
var pub__$2 = pub_29362__$1.next;
if((pub__$2.prev == null)){
var G__29364 = pub__$2;
pub_29362__$1 = G__29364;
continue;
} else {
return pub__$2;
}
break;
}
})();
if((pub_29362__$1 === t_29361__$1.next)){
} else {
var G__29366 = pub_29362__$1;
pub_29359 = G__29366;
continue;
}
}
break;
}
}

return true;
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor29172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29173","meta29173",-475214031,null)], null);
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor29172.cljs$lang$type = true);

(missionary.impl.Reactor.t_missionary$impl$Reactor29172.cljs$lang$ctorStr = "missionary.impl.Reactor/t_missionary$impl$Reactor29172");

(missionary.impl.Reactor.t_missionary$impl$Reactor29172.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/t_missionary$impl$Reactor29172");
}));

/**
 * Positional factory function for missionary.impl.Reactor/t_missionary$impl$Reactor29172.
 */
missionary.impl.Reactor.__GT_t_missionary$impl$Reactor29172 = (function missionary$impl$Reactor$__GT_t_missionary$impl$Reactor29172(meta29173){
return (new missionary.impl.Reactor.t_missionary$impl$Reactor29172(meta29173));
});

}

return (new missionary.impl.Reactor.t_missionary$impl$Reactor29172(cljs.core.PersistentArrayMap.EMPTY));
})()
;
missionary.impl.Reactor.zero = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
missionary.impl.Reactor.run = (function missionary$impl$Reactor$run(init,s,f){
var ps = missionary.impl.Reactor.__GT_Process(s,f,null,null,null,null,null,null,null,null,null,null);
var k = missionary.impl.Reactor.__GT_Publisher(ps,missionary.impl.Reactor.kill,null,(0),(0),false,false,false,false,null,null,null,null,null,null);
var b = missionary.impl.Reactor.__GT_Publisher(ps,(function (){
if((typeof missionary !== 'undefined') && (typeof missionary.impl !== 'undefined') && (typeof missionary.impl.Reactor !== 'undefined') && (typeof missionary.impl.Reactor.t_missionary$impl$Reactor29207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
missionary.impl.Reactor.t_missionary$impl$Reactor29207 = (function (init,s,f,ps,k,meta29208){
this.init = init;
this.s = s;
this.f = f;
this.ps = ps;
this.k = k;
this.meta29208 = meta29208;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.t_missionary$impl$Reactor29207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29209,meta29208__$1){
var self__ = this;
var _29209__$1 = this;
return (new missionary.impl.Reactor.t_missionary$impl$Reactor29207(self__.init,self__.s,self__.f,self__.ps,self__.k,meta29208__$1));
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor29207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29209){
var self__ = this;
var _29209__$1 = this;
return self__.meta29208;
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor29207.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.init.cljs$core$IFn$_invoke$arity$0 ? self__.init.cljs$core$IFn$_invoke$arity$0() : self__.init.call(null));
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor29207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"init","init",-234949907,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ps","ps",1932889573,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta29208","meta29208",1816158732,null)], null);
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor29207.cljs$lang$type = true);

(missionary.impl.Reactor.t_missionary$impl$Reactor29207.cljs$lang$ctorStr = "missionary.impl.Reactor/t_missionary$impl$Reactor29207");

(missionary.impl.Reactor.t_missionary$impl$Reactor29207.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/t_missionary$impl$Reactor29207");
}));

/**
 * Positional factory function for missionary.impl.Reactor/t_missionary$impl$Reactor29207.
 */
missionary.impl.Reactor.__GT_t_missionary$impl$Reactor29207 = (function missionary$impl$Reactor$run_$___GT_t_missionary$impl$Reactor29207(init__$1,s__$1,f__$1,ps__$1,k__$1,meta29208){
return (new missionary.impl.Reactor.t_missionary$impl$Reactor29207(init__$1,s__$1,f__$1,ps__$1,k__$1,meta29208));
});

}

return (new missionary.impl.Reactor.t_missionary$impl$Reactor29207(init,s,f,ps,k,cljs.core.PersistentArrayMap.EMPTY));
})()
,missionary.impl.Reactor.zero,(0),(0),false,false,false,null,null,null,null,null,null,null);
(ps.kill = k);

(ps.boot = b);

(ps.result = ps);

missionary.impl.Reactor.event(b);

return ps;
});
missionary.impl.Reactor.publish = (function missionary$impl$Reactor$publish(flow,continuous){
var ps = (function (){var G__29227 = missionary.impl.Reactor.current;
if((G__29227 == null)){
throw (new Error("Publication failure : not in reactor context."));
} else {
}

return G__29227;
})();
var cur = ps.subscriber;
var pub = missionary.impl.Reactor.__GT_Publisher(ps,null,(function (){var n = cur.ranks.length;
var a = (new Array((n + (1))));
var n__5636__auto___29410 = n;
var i_29411 = (0);
while(true){
if((i_29411 < n__5636__auto___29410)){
(a[i_29411] = (cur.ranks[i_29411]));

var G__29413 = (i_29411 + (1));
i_29411 = G__29413;
continue;
} else {
}
break;
}

var G__29229 = a;
(G__29229[n] = (function (){var G__29231 = cur.children;
(cur.children = (G__29231 + (1)));

return G__29231;
})());

return G__29229;
})(),(0),(0),true,true,false,null,null,null,null,null,null,null);
if(cljs.core.truth_(continuous)){
} else {
(pub.active = pub);
}

var temp__5806__auto___29430 = ps.alive;
if((temp__5806__auto___29430 == null)){
(pub.next = (pub.prev = pub));
} else {
var p_29431 = temp__5806__auto___29430;
var n_29432 = p_29431.next;
(p_29431.next = pub);

(n_29432.prev = pub);

(pub.prev = p_29431);

(pub.next = n_29432);
}

(ps.alive = pub);

(ps.subscriber = pub);

(pub.iterator = (function (){var G__29236 = (function (){
return missionary.impl.Reactor.event(pub);
});
var G__29237 = (function (){
(pub.done = true);

return missionary.impl.Reactor.event(pub);
});
return (flow.cljs$core$IFn$_invoke$arity$2 ? flow.cljs$core$IFn$_invoke$arity$2(G__29236,G__29237) : flow.call(null,G__29236,G__29237));
})());

(ps.subscriber = cur);

if(cljs.core.truth_(ps.kill.value)){
missionary.impl.Reactor.cancel(pub);
} else {
}

if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
missionary.impl.Reactor.touch(pub);
} else {
if(cljs.core.truth_(continuous)){
missionary.impl.Reactor.cancel(pub);

throw (new Error("Publication failure : undefined continuous flow."));
} else {
}
}

return pub;
});

//# sourceMappingURL=missionary.impl.Reactor.js.map
