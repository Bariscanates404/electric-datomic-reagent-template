goog.provide('missionary.impl.Latest');


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Latest.Process = (function (combinator,notifier,terminator,value,args,inputs,dirty,alive){
this.combinator = combinator;
this.notifier = notifier;
this.terminator = terminator;
this.value = value;
this.args = args;
this.inputs = inputs;
this.dirty = dirty;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Latest.Process.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__28706 = (arguments.length - (1));
switch (G__28706) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Latest.Process.prototype.apply = (function (self__,args28702){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28702)));
}));

(missionary.impl.Latest.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var ps = this;
return (missionary.impl.Latest.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Latest.kill.cljs$core$IFn$_invoke$arity$1(ps) : missionary.impl.Latest.kill.call(null,ps));
}));

(missionary.impl.Latest.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (ps){
var self__ = this;
var ps__$1 = this;
return (missionary.impl.Latest.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Latest.transfer.cljs$core$IFn$_invoke$arity$1(ps__$1) : missionary.impl.Latest.transfer.call(null,ps__$1));
}));

(missionary.impl.Latest.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"dirty","dirty",-1924882488,null),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Latest.Process.cljs$lang$type = true);

(missionary.impl.Latest.Process.cljs$lang$ctorStr = "missionary.impl.Latest/Process");

(missionary.impl.Latest.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Latest/Process");
}));

/**
 * Positional factory function for missionary.impl.Latest/Process.
 */
missionary.impl.Latest.__GT_Process = (function missionary$impl$Latest$__GT_Process(combinator,notifier,terminator,value,args,inputs,dirty,alive){
return (new missionary.impl.Latest.Process(combinator,notifier,terminator,value,args,inputs,dirty,alive));
});

missionary.impl.Latest.kill = (function missionary$impl$Latest$kill(ps){
var inputs = ps.inputs;
var n__5636__auto__ = inputs.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var fexpr__28717_28777 = (inputs[i]);
(fexpr__28717_28777.cljs$core$IFn$_invoke$arity$0 ? fexpr__28717_28777.cljs$core$IFn$_invoke$arity$0() : fexpr__28717_28777.call(null));

var G__28780 = (i + (1));
i = G__28780;
continue;
} else {
return null;
}
break;
}
});
missionary.impl.Latest.transfer = (function missionary$impl$Latest$transfer(ps){
var c = ps.combinator;
var args = ps.args;
var inputs = ps.inputs;
var dirty = ps.dirty;
var x = ps.value;
var x__$1 = (function (){try{(ps.value = ps);

if((args == null)){
throw (new Error("Undefined continuous flow."));
} else {
}

var x__$1 = x;
while(true){
var i = missionary.impl.Heap.dequeue(dirty);
var p = (args[i]);
(args[i] = cljs.core.deref((inputs[i])));

var x__$2 = (((x__$1 === ps))?x__$1:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,(args[i])))?x__$1:ps));
if((missionary.impl.Heap.size(dirty) === (0))){
if((x__$2 === ps)){
var x__$3 = c.apply(null,args);
if((missionary.impl.Heap.size(dirty) === (0))){
return x__$3;
} else {
var G__28786 = x__$3;
x__$1 = G__28786;
continue;
}
} else {
return x__$2;
}
} else {
var G__28787 = x__$2;
x__$1 = G__28787;
continue;
}
break;
}
}catch (e28724){var e = e28724;
missionary.impl.Latest.kill(ps);

while(true){
if((missionary.impl.Heap.size(dirty) > (0))){
try{cljs.core.deref((inputs[missionary.impl.Heap.dequeue(dirty)]));
}catch (e28725){var __28791 = e28725;
}
continue;
} else {
}
break;
}

(ps.notifier = null);

return e;
}})();
(ps.value = x__$1);

if((ps.alive === (0))){
var fexpr__28738_28793 = ps.terminator;
(fexpr__28738_28793.cljs$core$IFn$_invoke$arity$0 ? fexpr__28738_28793.cljs$core$IFn$_invoke$arity$0() : fexpr__28738_28793.call(null));
} else {
}

if((ps.notifier == null)){
throw x__$1;
} else {
return x__$1;
}
});
missionary.impl.Latest.run = (function missionary$impl$Latest$run(c,fs,n,t){
var it = cljs.core.iter(fs);
var arity = cljs.core.count(fs);
var args = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var inputs = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var dirty = missionary.impl.Heap.create(arity);
var ps = missionary.impl.Latest.__GT_Process(c,n,t,null,null,inputs,dirty,arity);
var done = (function (){
if(((ps.alive = (ps.alive - (1))) === (0))){
if((ps.value === ps)){
return null;
} else {
var fexpr__28747 = ps.terminator;
return (fexpr__28747.cljs$core$IFn$_invoke$arity$0 ? fexpr__28747.cljs$core$IFn$_invoke$arity$0() : fexpr__28747.call(null));
}
} else {
return null;
}
});
(ps.value = ps);

var n__5636__auto___28806 = arity;
var index_28807 = (0);
while(true){
if((index_28807 < n__5636__auto___28806)){
(inputs[index_28807] = (function (){var G__28750 = ((function (index_28807,n__5636__auto___28806,it,arity,args,inputs,dirty,ps,done){
return (function (){
missionary.impl.Heap.enqueue(dirty,index_28807);

if(((1) === missionary.impl.Heap.size(dirty))){
if((ps.value === ps)){
return null;
} else {
var temp__5806__auto__ = ps.notifier;
if((temp__5806__auto__ == null)){
while(true){
try{cljs.core.deref((inputs[missionary.impl.Heap.dequeue(dirty)]));
}catch (e28755){var __28816 = e28755;
}
if((missionary.impl.Heap.size(dirty) > (0))){
continue;
} else {
return null;
}
break;
}
} else {
var n__$1 = temp__5806__auto__;
return (n__$1.cljs$core$IFn$_invoke$arity$0 ? n__$1.cljs$core$IFn$_invoke$arity$0() : n__$1.call(null));
}
}
} else {
return null;
}
});})(index_28807,n__5636__auto___28806,it,arity,args,inputs,dirty,ps,done))
;
var G__28751 = done;
var fexpr__28749 = it.next();
return (fexpr__28749.cljs$core$IFn$_invoke$arity$2 ? fexpr__28749.cljs$core$IFn$_invoke$arity$2(G__28750,G__28751) : fexpr__28749.call(null,G__28750,G__28751));
})());

var G__28831 = (index_28807 + (1));
index_28807 = G__28831;
continue;
} else {
}
break;
}

if((missionary.impl.Heap.size(dirty) === arity)){
(ps.args = args);
} else {
}

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return ps;
});

//# sourceMappingURL=missionary.impl.Latest.js.map
