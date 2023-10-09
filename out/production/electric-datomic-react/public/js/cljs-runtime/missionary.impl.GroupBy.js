goog.provide('missionary.impl.GroupBy');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Process = (function (keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
this.keyfn = keyfn;
this.notifier = notifier;
this.terminator = terminator;
this.key = key;
this.value = value;
this.input = input;
this.table = table;
this.load = load;
this.live = live;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__28709 = (arguments.length - (1));
switch (G__28709) {
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

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args28705){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28705)));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var p = this;
(missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1(p) : missionary.impl.GroupBy.kill.call(null,p));

return null;
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$2 = (function (n,t){
var self__ = this;
var p = this;
return (missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3(p,n,t) : missionary.impl.GroupBy.group.call(null,p,n,t));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.GroupBy.sample.call(null,p__$1));
}));

(missionary.impl.GroupBy.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.with_meta(new cljs.core.Symbol(null,"load","load",321890343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"live","live",30383488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.GroupBy.Process.cljs$lang$type = true);

(missionary.impl.GroupBy.Process.cljs$lang$ctorStr = "missionary.impl.GroupBy/Process");

(missionary.impl.GroupBy.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Process");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Process.
 */
missionary.impl.GroupBy.__GT_Process = (function missionary$impl$GroupBy$__GT_Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
return (new missionary.impl.GroupBy.Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Group = (function (process,key,notifier,terminator){
this.process = process;
this.key = key;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__28720 = (arguments.length - (1));
switch (G__28720) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args28718){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28718)));
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var g = this;
(missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1(g) : missionary.impl.GroupBy.cancel.call(null,g));

return null;
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IDeref$_deref$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return (missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1(g__$1) : missionary.impl.GroupBy.consume.call(null,g__$1));
}));

(missionary.impl.GroupBy.Group.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(missionary.impl.GroupBy.Group.cljs$lang$type = true);

(missionary.impl.GroupBy.Group.cljs$lang$ctorStr = "missionary.impl.GroupBy/Group");

(missionary.impl.GroupBy.Group.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Group");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Group.
 */
missionary.impl.GroupBy.__GT_Group = (function missionary$impl$GroupBy$__GT_Group(process,key,notifier,terminator){
return (new missionary.impl.GroupBy.Group(process,key,notifier,terminator));
});

missionary.impl.GroupBy.kill = (function missionary$impl$GroupBy$kill(p){
if(cljs.core.truth_(p.live)){
(p.live = false);

var fexpr__28737 = p.input;
return (fexpr__28737.cljs$core$IFn$_invoke$arity$0 ? fexpr__28737.cljs$core$IFn$_invoke$arity$0() : fexpr__28737.call(null));
} else {
return null;
}
});
missionary.impl.GroupBy.step = (function missionary$impl$GroupBy$step(i,m){
return ((i + (1)) & m);
});
missionary.impl.GroupBy.group = (function missionary$impl$GroupBy$group(p,n,t){
var k = p.key;
var g = missionary.impl.GroupBy.__GT_Group(p,k,n,t);
var table = p.table;
if((k === p)){
} else {
(p.key = p);

var s_28921 = table.length;
var m_28922 = (s_28921 - (1));
var i_28923 = (cljs.core.hash(k) & m_28922);
while(true){
var G__28745_28930 = (table[i_28923]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28745_28930)){
(table[i_28923] = g);
} else {
var G__28931 = missionary.impl.GroupBy.step(i_28923,m_28922);
i_28923 = G__28931;
continue;

}
break;
}

var ss_28933 = (s_28921 << (1));
if((ss_28933 <= ((3) * (p.load = (p.load + (1)))))){
var mm_28934 = (ss_28933 - (1));
var larger_28935 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ss_28933);
(p.table = larger_28935);

var n__5636__auto___28936 = s_28921;
var i_28937 = (0);
while(true){
if((i_28937 < n__5636__auto___28936)){
var temp__5808__auto___28938 = (table[i_28937]);
if((temp__5808__auto___28938 == null)){
} else {
var h_28940 = temp__5808__auto___28938;
var j_28941 = (cljs.core.hash(h_28940.key) & mm_28934);
while(true){
var G__28757_28942 = (larger_28935[j_28941]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28757_28942)){
(larger_28935[j_28941] = h_28940);
} else {
var G__28943 = missionary.impl.GroupBy.step(j_28941,mm_28934);
j_28941 = G__28943;
continue;

}
break;
}
}

var G__28944 = (i_28937 + (1));
i_28937 = G__28944;
continue;
} else {
}
break;
}
} else {
}
}

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return g;
});
missionary.impl.GroupBy.cancel = (function missionary$impl$GroupBy$cancel(g){
var p = g.process;
var k = g.key;
if(cljs.core.truth_(p.live)){
if((k === p)){
return null;
} else {
(g.key = p);

var table = p.table;
var m = (table.length - (1));
var i = (function (){var i = (cljs.core.hash(k) & m);
while(true){
if((g === (table[i]))){
return i;
} else {
var G__28945 = missionary.impl.GroupBy.step(i,m);
i = G__28945;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_28946__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5808__auto___28947 = (table[i_28946__$1]);
if((temp__5808__auto___28947 == null)){
} else {
var h_28948 = temp__5808__auto___28947;
var j_28949 = (cljs.core.hash(h_28948.key) & m);
if((i_28946__$1 === j_28949)){
} else {
(table[i_28946__$1] = null);

var j_28950__$1 = j_28949;
while(true){
if(((table[j_28950__$1]) == null)){
(table[j_28950__$1] = h_28948);
} else {
var G__28951 = missionary.impl.GroupBy.step(j_28950__$1,m);
j_28950__$1 = G__28951;
continue;
}
break;
}
}

var G__28952 = missionary.impl.GroupBy.step(i_28946__$1,m);
i_28946__$1 = G__28952;
continue;
}
break;
}

var fexpr__28781 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__28781.cljs$core$IFn$_invoke$arity$0 ? fexpr__28781.cljs$core$IFn$_invoke$arity$0() : fexpr__28781.call(null));
}
} else {
return null;
}
});
missionary.impl.GroupBy.transfer = (function missionary$impl$GroupBy$transfer(p){
while(true){
if(cljs.core.truth_((p.busy = cljs.core.not(p.busy)))){
if(cljs.core.truth_(p.done)){
(p.live = false);

var temp__5808__auto___28956 = p.table;
if((temp__5808__auto___28956 == null)){
} else {
var table_28957 = temp__5808__auto___28956;
(p.table = null);

var n__5636__auto___28960 = table_28957.length;
var i_28965 = (0);
while(true){
if((i_28965 < n__5636__auto___28960)){
var temp__5808__auto___28968__$1 = (table_28957[i_28965]);
if((temp__5808__auto___28968__$1 == null)){
} else {
var g_28972 = temp__5808__auto___28968__$1;
var fexpr__28811_28974 = g_28972.terminator;
(fexpr__28811_28974.cljs$core$IFn$_invoke$arity$0 ? fexpr__28811_28974.cljs$core$IFn$_invoke$arity$0() : fexpr__28811_28974.call(null));
}

var G__28975 = (i_28965 + (1));
i_28965 = G__28975;
continue;
} else {
}
break;
}
}

var fexpr__28818 = p.terminator;
return (fexpr__28818.cljs$core$IFn$_invoke$arity$0 ? fexpr__28818.cljs$core$IFn$_invoke$arity$0() : fexpr__28818.call(null));
} else {
if((p === p.value)){
var table = p.table;
try{var k = (p.key = (function (){var G__28853 = (p.value = cljs.core.deref(p.input));
var fexpr__28852 = p.keyfn;
return (fexpr__28852.cljs$core$IFn$_invoke$arity$1 ? fexpr__28852.cljs$core$IFn$_invoke$arity$1(G__28853) : fexpr__28852.call(null,G__28853));
})());
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5806__auto__ = (table[i]);
if((temp__5806__auto__ == null)){
var fexpr__28860 = p.notifier;
return (fexpr__28860.cljs$core$IFn$_invoke$arity$0 ? fexpr__28860.cljs$core$IFn$_invoke$arity$0() : fexpr__28860.call(null));
} else {
var h = temp__5806__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
var fexpr__28861 = h.notifier;
return (fexpr__28861.cljs$core$IFn$_invoke$arity$0 ? fexpr__28861.cljs$core$IFn$_invoke$arity$0() : fexpr__28861.call(null));
} else {
var G__28989 = missionary.impl.GroupBy.step(i,m);
i = G__28989;
continue;
}
}
break;
}
}catch (e28824){var e = e28824;
(p.value = e);

(p.table = null);

missionary.impl.GroupBy.kill(p);

var n__5636__auto___28991 = table.length;
var i_28992 = (0);
while(true){
if((i_28992 < n__5636__auto___28991)){
var temp__5808__auto___28993 = (table[i_28992]);
if((temp__5808__auto___28993 == null)){
} else {
var g_28996 = temp__5808__auto___28993;
var fexpr__28840_28997 = g_28996.terminator;
(fexpr__28840_28997.cljs$core$IFn$_invoke$arity$0 ? fexpr__28840_28997.cljs$core$IFn$_invoke$arity$0() : fexpr__28840_28997.call(null));
}

var G__28998 = (i_28992 + (1));
i_28992 = G__28998;
continue;
} else {
}
break;
}

var fexpr__28848 = p.notifier;
return (fexpr__28848.cljs$core$IFn$_invoke$arity$0 ? fexpr__28848.cljs$core$IFn$_invoke$arity$0() : fexpr__28848.call(null));
}} else {
try{cljs.core.deref(p.input);
}catch (e28865){var __29005 = e28865;
}
continue;
}
}
} else {
return null;
}
break;
}
});
missionary.impl.GroupBy.sample = (function missionary$impl$GroupBy$sample(p){
var k = p.key;
if((k === p)){
missionary.impl.GroupBy.transfer(p);

throw p.value;
} else {
return cljs.core.__GT_MapEntry(k,p,null);
}
});
missionary.impl.GroupBy.consume = (function missionary$impl$GroupBy$consume(g){
var p = g.process;
if((p === g.key)){
var fexpr__28875_29013 = g.terminator;
(fexpr__28875_29013.cljs$core$IFn$_invoke$arity$0 ? fexpr__28875_29013.cljs$core$IFn$_invoke$arity$0() : fexpr__28875_29013.call(null));

throw (new missionary.Cancelled("Group consumer cancelled."));
} else {
var x = p.value;
(p.value = p);

(p.key = p);

missionary.impl.GroupBy.transfer(p);

return x;
}
});
missionary.impl.GroupBy.run = (function missionary$impl$GroupBy$run(k,f,n,t){
var p = missionary.impl.GroupBy.__GT_Process(k,n,t,null,null,null,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)),(0),true,true,false);
(p.key = p);

(p.value = p);

(p.input = (function (){var G__28884 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__28885 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28884,G__28885) : f.call(null,G__28884,G__28885));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
