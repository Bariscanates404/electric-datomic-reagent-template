goog.provide('hyperfiddle.electric.impl.for$');
hyperfiddle.electric.impl.for$.seq_diff = (function hyperfiddle$electric$impl$for$seq_diff(kf){
return (function (rf){
var state = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
var append = (function (o,k){
var next_index = (state[((2) | (0))]);
(state[((2) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_index,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(next_index,k,cljs.core.PersistentVector.EMPTY),o)));

var temp__5806__auto__ = (state[((3) | (0))]);
if((temp__5806__auto__ == null)){
(o[((0) | (0))] = o);

(o[((1) | (0))] = o);

return (state[((3) | (0))] = o);
} else {
var next_head = temp__5806__auto__;
var next_tail = (next_head[((0) | (0))]);
(o[((0) | (0))] = next_tail);

(o[((1) | (0))] = next_head);

(next_head[((0) | (0))] = o);

return (next_tail[((1) | (0))] = o);
}
});
var scan = (function (r,x){
var k = (kf.cljs$core$IFn$_invoke$arity$1 ? kf.cljs$core$IFn$_invoke$arity$1(x) : kf.call(null,x));
var prev_index = (state[((0) | (0))]);
var prev_head = (state[((1) | (0))]);
var temp__5806__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_index,k);
if((temp__5806__auto__ == null)){
var o = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
append(o,k);

var G__31018 = (function (){var G__31021 = r;
var G__31022 = o;
var G__31023 = (o[((2) | (0))] = x);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__31021,G__31022,G__31023) : rf.call(null,G__31021,G__31022,G__31023));
})();
var G__31019 = null;
var G__31020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,prev_head], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__31018,G__31019,G__31020) : rf.call(null,G__31018,G__31019,G__31020));
} else {
var vec__31025 = temp__5806__auto__;
var seq__31026 = cljs.core.seq(vec__31025);
var first__31027 = cljs.core.first(seq__31026);
var seq__31026__$1 = cljs.core.next(seq__31026);
var o = first__31027;
var os = seq__31026__$1;
var prev = (o[((0) | (0))]);
var next = (((o === prev))?null:(prev[((1) | (0))] = (function (){var G__31032 = (o[((1) | (0))]);
(G__31032[((0) | (0))] = prev);

return G__31032;
})()));
var r__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(o[((2) | (0))])))?r:(function (){var G__31033 = r;
var G__31034 = o;
var G__31035 = (o[((2) | (0))] = x);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__31033,G__31034,G__31035) : rf.call(null,G__31033,G__31034,G__31035));
})());
var r__$2 = (((o === prev_head))?(function (){
(state[((1) | (0))] = next);

return r__$1;
})()
:(function (){var G__31036 = r__$1;
var G__31037 = null;
var G__31038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,prev_head], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__31036,G__31037,G__31038) : rf.call(null,G__31036,G__31037,G__31038));
})());
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev_index,k,os));

append(o,k);

return r__$2;
}
});
return (function() {
var G__31224 = null;
var G__31224__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__31224__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__31224__2 = (function (r,xs){
if((xs instanceof hyperfiddle.electric.Failure)){
var temp__5806__auto__ = (state[((1) | (0))]);
if((temp__5806__auto__ == null)){
return r;
} else {
var prev_head = temp__5806__auto__;
var o = prev_head;
var r__$1 = r;
while(true){
var o__$1 = (o[((0) | (0))]);
var r__$2 = (function (){var G__31041 = r__$1;
var G__31042 = o__$1;
var G__31043 = (o__$1[((2) | (0))] = xs);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__31041,G__31042,G__31043) : rf.call(null,G__31041,G__31042,G__31043));
})();
if((o__$1 === prev_head)){
return r__$2;
} else {
var G__31234 = o__$1;
var G__31235 = r__$2;
o = G__31234;
r__$1 = G__31235;
continue;
}
break;
}
}
} else {
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(scan,r,xs);
var r__$2 = (function (){var temp__5806__auto__ = (state[((1) | (0))]);
if((temp__5806__auto__ == null)){
return r__$1;
} else {
var prev_head = temp__5806__auto__;
var o = prev_head;
var r__$2 = r__$1;
while(true){
var o__$1 = (o[((0) | (0))]);
var r__$3 = (function (){var G__31048 = r__$2;
var G__31049 = null;
var G__31050 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o__$1,o__$1], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__31048,G__31049,G__31050) : rf.call(null,G__31048,G__31049,G__31050));
})();
if((o__$1 === prev_head)){
return r__$3;
} else {
var G__31240 = o__$1;
var G__31241 = r__$3;
o = G__31240;
r__$2 = G__31241;
continue;
}
break;
}
}
})();
(state[((0) | (0))] = (state[((2) | (0))]));

(state[((1) | (0))] = (state[((3) | (0))]));

(state[((2) | (0))] = null);

(state[((3) | (0))] = null);

return r__$2;
}
});
G__31224 = function(r,xs){
switch(arguments.length){
case 0:
return G__31224__0.call(this);
case 1:
return G__31224__1.call(this,r);
case 2:
return G__31224__2.call(this,r,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31224.cljs$core$IFn$_invoke$arity$0 = G__31224__0;
G__31224.cljs$core$IFn$_invoke$arity$1 = G__31224__1;
G__31224.cljs$core$IFn$_invoke$arity$2 = G__31224__2;
return G__31224;
})()
});
});
hyperfiddle.electric.impl.for$.entry = (function hyperfiddle$electric$impl$for$entry(k,v){
return cljs.core.__GT_MapEntry(k,v,null);
});
hyperfiddle.electric.impl.for$.insert_before = (function hyperfiddle$electric$impl$for$insert_before(tier){
return (function (rf){
var state = (function (){var G__31065 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__31065[((0) | (0))] = cljs.core.PersistentArrayMap.EMPTY);

(G__31065[((1) | (0))] = cljs.core.PersistentVector.EMPTY);

return G__31065;
})();
return (function() {
var G__31259 = null;
var G__31259__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__31259__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__31259__2 = (function (r,p__31068){
var vec__31071 = p__31068;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31071,(0),null);
var anchor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31071,(1),null);
var r__$1 = (function (){var k__GT_p = (state[((0) | (0))]);
if(cljs.core.contains_QMARK_(k__GT_p,target)){
return r;
} else {
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(k__GT_p,target,cljs.core.count(k__GT_p)));

(state[((1) | (0))] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state[((1) | (0))]),target));

var G__31075 = r;
var G__31076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__31075,G__31076) : rf.call(null,G__31075,G__31076));
}
})();
var k__GT_p = (state[((0) | (0))]);
var start_position = (k__GT_p.cljs$core$IFn$_invoke$arity$1 ? k__GT_p.cljs$core$IFn$_invoke$arity$1(target) : k__GT_p.call(null,target));
var anchor_position = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anchor,target))?cljs.core.count(k__GT_p):(function (){var G__31079 = anchor;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__31079)){
return cljs.core.count(k__GT_p);
} else {
return (k__GT_p.cljs$core$IFn$_invoke$arity$1 ? k__GT_p.cljs$core$IFn$_invoke$arity$1(anchor) : k__GT_p.call(null,anchor));

}
})());
var final_position = (((start_position < anchor_position))?(anchor_position - (1)):anchor_position);
var step = cljs.core.compare(final_position,start_position);
var r__$2 = (function (){var G__31088 = step;
switch (G__31088) {
case (0):
return r__$1;

break;
default:
var ks = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
var i = start_position;
while(true){
var j = (i + step);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((state[((1) | (0))]),j);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((0) | (0))]),k,i));

(state[((1) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((1) | (0))]),i,k));

if((j === final_position)){
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((0) | (0))]),target,j));

(state[((1) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((1) | (0))]),j,target));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r__$1,ks__$1) : rf.call(null,r__$1,ks__$1));
} else {
var G__31266 = ks__$1;
var G__31267 = j;
ks = G__31266;
i = G__31267;
continue;
}
break;
}

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anchor,target)){
(state[((0) | (0))] = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((state[((0) | (0))]),target));

(state[((1) | (0))] = cljs.core.pop((state[((1) | (0))])));

hyperfiddle.electric.impl.runtime.move(tier,start_position,start_position);

var G__31099 = r__$2;
var G__31100 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__31099,G__31100) : rf.call(null,G__31099,G__31100));
} else {
if((start_position === final_position)){
} else {
hyperfiddle.electric.impl.runtime.move(tier,start_position,final_position);
}

return r__$2;
}
});
G__31259 = function(r,p__31068){
switch(arguments.length){
case 0:
return G__31259__0.call(this);
case 1:
return G__31259__1.call(this,r);
case 2:
return G__31259__2.call(this,r,p__31068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31259.cljs$core$IFn$_invoke$arity$0 = G__31259__0;
G__31259.cljs$core$IFn$_invoke$arity$1 = G__31259__1;
G__31259.cljs$core$IFn$_invoke$arity$2 = G__31259__2;
return G__31259;
})()
});
});
hyperfiddle.electric.impl.for$.apply_cycle = (function hyperfiddle$electric$impl$for$apply_cycle(p__31108,p__31109){
var map__31111 = p__31108;
var map__31111__$1 = cljs.core.__destructure_map(map__31111);
var r = map__31111__$1;
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31111__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31111__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31111__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var vec__31112 = p__31109;
var seq__31113 = cljs.core.seq(vec__31112);
var first__31114 = cljs.core.first(seq__31113);
var seq__31113__$1 = cljs.core.next(seq__31113);
var x = first__31114;
var ys = seq__31113__$1;
var temp__5806__auto__ = ys;
if((temp__5806__auto__ == null)){
var temp__5806__auto____$1 = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(x) : index.call(null,x));
if((temp__5806__auto____$1 == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,x,cljs.core.count(index)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals,null)], 0));
} else {
var i = temp__5806__auto____$1;
if(((i + (1)) === cljs.core.count(index))){
} else {
throw (new Error("Assert failed: (== (inc i) (count index))"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(failed,x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(index,x),new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.pop(vals)], 0));
}
} else {
var vec__31119 = temp__5806__auto__;
var seq__31120 = cljs.core.seq(vec__31119);
var first__31121 = cljs.core.first(seq__31120);
var seq__31120__$1 = cljs.core.next(seq__31120);
var y = first__31121;
var ys__$1 = seq__31120__$1;
var i = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(x) : index.call(null,x));
var v = (vals.cljs$core$IFn$_invoke$arity$1 ? vals.cljs$core$IFn$_invoke$arity$1(i) : vals.call(null,i));
var index__$1 = index;
var vals__$1 = vals;
var i__$1 = i;
var y__$1 = y;
var ys__$2 = ys__$1;
while(true){
var j = (index__$1.cljs$core$IFn$_invoke$arity$1 ? index__$1.cljs$core$IFn$_invoke$arity$1(y__$1) : index__$1.call(null,y__$1));
var index__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index__$1,y__$1,i__$1);
var vals__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals__$1,i__$1,(vals__$1.cljs$core$IFn$_invoke$arity$1 ? vals__$1.cljs$core$IFn$_invoke$arity$1(j) : vals__$1.call(null,j)));
var temp__5806__auto____$1 = ys__$2;
if((temp__5806__auto____$1 == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index__$2,x,j),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals__$2,j,v)], 0));
} else {
var vec__31144 = temp__5806__auto____$1;
var seq__31145 = cljs.core.seq(vec__31144);
var first__31146 = cljs.core.first(seq__31145);
var seq__31145__$1 = cljs.core.next(seq__31145);
var y__$2 = first__31146;
var ys__$3 = seq__31145__$1;
var G__31273 = index__$2;
var G__31274 = vals__$2;
var G__31275 = j;
var G__31276 = y__$2;
var G__31277 = ys__$3;
index__$1 = G__31273;
vals__$1 = G__31274;
i__$1 = G__31275;
y__$1 = G__31276;
ys__$2 = G__31277;
continue;
}
break;
}
}
});
hyperfiddle.electric.impl.for$.apply_change = (function hyperfiddle$electric$impl$for$apply_change(p__31151,k,v){
var map__31152 = p__31151;
var map__31152__$1 = cljs.core.__destructure_map(map__31152);
var r = map__31152__$1;
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31152__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31152__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31152__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var temp__5806__auto__ = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(k) : index.call(null,k));
if((temp__5806__auto__ == null)){
return r;
} else {
var i = temp__5806__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals,i,v),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"failed","failed",-1397425762),(function (){var fexpr__31155 = (((v instanceof hyperfiddle.electric.Failure))?cljs.core.conj:cljs.core.disj);
return (fexpr__31155.cljs$core$IFn$_invoke$arity$2 ? fexpr__31155.cljs$core$IFn$_invoke$arity$2(failed,k) : fexpr__31155.call(null,failed,k));
})()], 0));
}
});
hyperfiddle.electric.impl.for$.values = (function hyperfiddle$electric$impl$for$values(p__31163){
var map__31164 = p__31163;
var map__31164__$1 = cljs.core.__destructure_map(map__31164);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31164__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31164__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31164__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var temp__5806__auto__ = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(index,failed)));
if((temp__5806__auto__ == null)){
return vals;
} else {
var vec__31167 = temp__5806__auto__;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31167,(0),null);
return (vals.cljs$core$IFn$_invoke$arity$1 ? vals.cljs$core$IFn$_invoke$arity$1(i) : vals.call(null,i));
}
});
hyperfiddle.electric.impl.for$.seq_patch = (function hyperfiddle$electric$impl$for$seq_patch(var_args){
var G__31171 = arguments.length;
switch (G__31171) {
case 0:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.PersistentHashSet.EMPTY], null);
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$2 = (function (r,diff){
return cljs.core.reduce_kv(hyperfiddle.electric.impl.for$.apply_change,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.for$.apply_cycle,r,cljs.core.get.cljs$core$IFn$_invoke$arity$2(diff,null)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(diff,null));
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$lang$maxFixedArity = 2);

/**
 * 
 * Given a function and a continuous flow of collections, returns a continuous flow of vectors of the same size as input
 * collection, where values are produced by the continuous flow returned by the function when called with the continuous
 * flow of values matching the identity provided by key function, defaulting to identity.
 */
hyperfiddle.electric.impl.for$.map_by = (function hyperfiddle$electric$impl$for$map_by(var_args){
var G__31178 = arguments.length;
switch (G__31178) {
case 3:
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$3 = (function (tier,f,_GT_xs){
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4(tier,cljs.core.identity,f,_GT_xs);
}));

(hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4 = (function (tier,k,f,_GT_xs){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.for$.values,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missionary.core.reductions.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.for$.seq_patch,hyperfiddle.electric.impl.gather.gather(cljs.core.merge,missionary.core.sample((function (p__31181){
var vec__31182 = p__31181;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31182,(0),null);
var _GT_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31182,(1),null);
var G__31185 = id;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__31185)){
return missionary.core.sample(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,id),missionary.core.relieve(cljs.core.into,missionary.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val),hyperfiddle.electric.impl.for$.insert_before(tier),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vector),_GT_x], 0))));
} else {
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.with$(tier,(function (){var G__31187 = missionary.core.relieve(cljs.core.PersistentArrayMap.EMPTY,missionary.core.eduction.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val),_GT_x));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31187) : f.call(null,G__31187));
})())], 0));

}
}),missionary.core.group_by(cljs.core.key,missionary.core.eduction.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.for$.seq_diff(k),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.for$.entry),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_GT_xs], 0))))))], 0));
}));

(hyperfiddle.electric.impl.for$.map_by.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=hyperfiddle.electric.impl.for.js.map
