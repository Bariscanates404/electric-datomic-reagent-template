goog.provide('hyperfiddle.electric.impl.io');
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
hyperfiddle.electric.impl.io.default_write_handler = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((function (x){
hyperfiddle.electric.impl.io._last_unserializable_for_repl = x;

console.log("Unserializable reference transfer:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));

return "_";
}),(function (x){
return null;
}),(function (_){
return "";
}));
/**
 * Builds a minimal, cljc map/bounded-queue cache.
 *   One slot per key (map).
 *   Reaching `size` pops oldest value (bounded-queue).
 */
hyperfiddle.electric.impl.io.__GT_cache = (function hyperfiddle$electric$impl$io$__GT_cache(size){
var G__30244 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr30247_30808 = G__30244;
(arr30247_30808[(size * (2))] = cljs.core.identity((0)));

return G__30244;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr30260_30809 = cache;
(arr30260_30809[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__30810 = (i + (2));
i = G__30810;
continue;
}
} else {
return null;
}
break;
}
})())){
return null;
} else {
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__30251_SHARP_){
return cljs.core.mod((p1__30251_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr30266 = cache;
(arr30266[widx] = cljs.core.identity(k));

return (arr30266[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__30811 = (i + (2));
i = G__30811;
continue;
}
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.io.cache__GT_map = (function hyperfiddle$electric$impl$io$cache__GT_map(cache){
var i = (0);
var ac = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
var G__30812 = (i + (2));
var G__30813 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__30812;
ac = G__30813;
continue;
} else {
return cljs.core.persistent_BANG_(ac);
}
break;
}
});
hyperfiddle.electric.impl.io._BANG_ex_cache = hyperfiddle.electric.impl.io.__GT_cache((16));
hyperfiddle.electric.impl.io.save_original_ex_BANG_ = (function hyperfiddle$electric$impl$io$save_original_ex_BANG_(fi){
var id = hyperfiddle.electric.debug.ex_id(fi);
var temp__5808__auto___30814 = cljs.core.ex_cause(fi);
if((temp__5808__auto___30814 == null)){
} else {
var cause_30815 = temp__5808__auto___30814;
if((cause_30815 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_30815);
}
}

return id;
});
hyperfiddle.electric.impl.io.get_original_ex = (function hyperfiddle$electric$impl$io$get_original_ex(id){
return hyperfiddle.electric.impl.io.cache_get(hyperfiddle.electric.impl.io._BANG_ex_cache,id);
});
hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_writer = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (_){
return "failure";
}),(function (x){
var err = x.error;
if((err instanceof missionary.Cancelled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null);
} else {
if((err instanceof hyperfiddle.electric.Pending)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
} else {
if((err instanceof hyperfiddle.electric.Remote)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.ex_message(err),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err)),hyperfiddle.electric.impl.io.save_original_ex_BANG_(err)], null);

}
}
}
}));
hyperfiddle.electric.impl.io.write_opts = (function hyperfiddle$electric$impl$io$write_opts(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,cljs.core.PersistentArrayMap.createAsIfByAssoc([hyperfiddle.electric.Failure,hyperfiddle.electric.impl.io.failure_writer,new cljs.core.Keyword(null,"default","default",-1987822328),hyperfiddle.electric.impl.io.default_write_handler])], 0)),new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207),hyperfiddle.electric.impl.io.default_write_handler], null);
});
hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__30308){
var vec__30309 = p__30308;
var seq__30310 = cljs.core.seq(vec__30309);
var first__30311 = cljs.core.first(seq__30310);
var seq__30310__$1 = cljs.core.next(seq__30310);
var tag = first__30311;
var args = seq__30310__$1;
var G__30312 = tag;
var G__30312__$1 = (((G__30312 instanceof cljs.core.Keyword))?G__30312.fqn:null);
switch (G__30312__$1) {
case "exception":
var vec__30315 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30315,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30315,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30315,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__30318 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30318,(0),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2("Remote error",(function (){var or__5045__auto__ = data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())));

break;
case "pending":
return (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));

break;
case "cancelled":
return (new hyperfiddle.electric.Failure((new missionary.Cancelled())));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30312__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__30334 = r;
G__30334.setInt32(offset,n);

return G__30334;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__30338 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__30338)),xs);

return G__30338;
});
/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((function (){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342 = (function (b,meta30343){
this.b = b;
this.meta30343 = meta30343;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30344,meta30343__$1){
var self__ = this;
var _30344__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342(self__.b,meta30343__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30344){
var self__ = this;
var _30344__$1 = this;
return self__.meta30343;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__30823 = (function (){var G__30358 = r__$1;
var G__30359 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__30358,G__30359) : rf.call(null,G__30358,G__30359));
})();
var G__30824 = (i + (4));
r__$1 = G__30823;
i = G__30824;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta30343","meta30343",36646886,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io30342");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io30342");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io30342.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io30342 = (function hyperfiddle$electric$impl$io$decode_numbers_$___GT_t_hyperfiddle$electric$impl$io30342(b__$1,meta30343){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342(b__$1,meta30343));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io30342(b,cljs.core.PersistentArrayMap.EMPTY));
})()
);
});
var _BANG_cache_30825 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_30825,(function (p__30379){
var map__30381 = p__30379;
var map__30381__$1 = cljs.core.__destructure_map(map__30381);
var cache = map__30381__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30381__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30381__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(write_handlers,hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_)){
if(cljs.core.truth_(writer)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts())], null);
}
})));
});
/**
 * Encode a data frame to transit json
 */
hyperfiddle.electric.impl.io.encode = (function hyperfiddle$electric$impl$io$encode(x){
return cognitect.transit.write(hyperfiddle.electric.impl.io.transit_writer(),x);
});
var _BANG_cache_30827 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_30827,(function (p__30389){
var map__30390 = p__30389;
var map__30390__$1 = cljs.core.__destructure_map(map__30390);
var cache = map__30390__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30390__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30390__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(read_handlers,hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_)){
if(cljs.core.truth_(reader)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts())], null);
}
})));
});
/**
 * Decode a data frame from transit json
 */
hyperfiddle.electric.impl.io.decode = (function hyperfiddle$electric$impl$io$decode(s){
return cognitect.transit.read(hyperfiddle.electric.impl.io.transit_reader(),s);
});
hyperfiddle.electric.impl.io.decode_str = (function hyperfiddle$electric$impl$io$decode_str(x){
try{var G__30397 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__30397);

return G__30397;
}catch (e30395){var t = e30395;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30399_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr30399_block_9(cr30399_state){
try{var cr30399_place_4 = (cr30399_state[(3)]);
var cr30399_place_2 = (cr30399_state[(1)]);
var cr30399_place_37 = cljs.core.conj_BANG_;
var cr30399_place_38 = cr30399_place_2;
var cr30399_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr30399_place_40 = cr30399_place_4;
var cr30399_place_41 = (function (){var G__30495 = cr30399_place_40;
var fexpr__30494 = cr30399_place_39;
return (fexpr__30494.cljs$core$IFn$_invoke$arity$1 ? fexpr__30494.cljs$core$IFn$_invoke$arity$1(G__30495) : fexpr__30494.call(null,G__30495));
})();
var cr30399_place_42 = (function (){var G__30498 = cr30399_place_38;
var G__30499 = cr30399_place_41;
var fexpr__30497 = cr30399_place_37;
return (fexpr__30497.cljs$core$IFn$_invoke$arity$2 ? fexpr__30497.cljs$core$IFn$_invoke$arity$2(G__30498,G__30499) : fexpr__30497.call(null,G__30498,G__30499));
})();
(cr30399_state[(0)] = cr30399_block_1);

(cr30399_state[(3)] = null);

(cr30399_state[(1)] = cr30399_place_42);

return cr30399_state;
}catch (e30490){var cr30399_exception = e30490;
(cr30399_state[(0)] = null);

(cr30399_state[(3)] = null);

(cr30399_state[(1)] = null);

throw cr30399_exception;
}});
var cr30399_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr30399_block_4(cr30399_state){
try{var cr30399_place_11 = (cr30399_state[(5)]);
var cr30399_place_14 = (cr30399_state[(6)]);
var cr30399_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr30399_place_16 = cr30399_place_11;
var cr30399_place_17 = (function (){var G__30507 = cr30399_place_16;
var fexpr__30506 = cr30399_place_15;
return (fexpr__30506.cljs$core$IFn$_invoke$arity$1 ? fexpr__30506.cljs$core$IFn$_invoke$arity$1(G__30507) : fexpr__30506.call(null,G__30507));
})();
var cr30399_place_18 = cljs.core.reduce;
var cr30399_place_19 = cljs.core.conj_BANG_;
var cr30399_place_20 = cr30399_place_14;
var cr30399_place_21 = cr30399_place_17;
var cr30399_place_22 = (function (){var G__30510 = cr30399_place_19;
var G__30511 = cr30399_place_20;
var G__30512 = cr30399_place_21;
var fexpr__30509 = cr30399_place_18;
return (fexpr__30509.cljs$core$IFn$_invoke$arity$3 ? fexpr__30509.cljs$core$IFn$_invoke$arity$3(G__30510,G__30511,G__30512) : fexpr__30509.call(null,G__30510,G__30511,G__30512));
})();
var cr30399_place_23 = cljs.core.count;
var cr30399_place_24 = cr30399_place_17;
var cr30399_place_25 = (function (){var G__30514 = cr30399_place_24;
var fexpr__30513 = cr30399_place_23;
return (fexpr__30513.cljs$core$IFn$_invoke$arity$1 ? fexpr__30513.cljs$core$IFn$_invoke$arity$1(G__30514) : fexpr__30513.call(null,G__30514));
})();
var cr30399_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr30399_place_27 = (cr30399_place_25 < cr30399_place_26);
var cr30399_place_28 = null;
if(cr30399_place_27){
(cr30399_state[(0)] = cr30399_block_7);

(cr30399_state[(5)] = null);

(cr30399_state[(6)] = null);

(cr30399_state[(5)] = cr30399_place_28);

(cr30399_state[(7)] = cr30399_place_22);

return cr30399_state;
} else {
(cr30399_state[(0)] = cr30399_block_5);

(cr30399_state[(7)] = cr30399_place_22);

return cr30399_state;
}
}catch (e30503){var cr30399_exception = e30503;
(cr30399_state[(0)] = null);

(cr30399_state[(1)] = null);

(cr30399_state[(2)] = null);

(cr30399_state[(3)] = null);

(cr30399_state[(4)] = null);

(cr30399_state[(5)] = null);

(cr30399_state[(6)] = null);

throw cr30399_exception;
}});
var cr30399_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr30399_block_8(cr30399_state){
try{var cr30399_place_8 = (cr30399_state[(1)]);
var cr30399_place_9 = (cr30399_state[(3)]);
var cr30399_place_28 = (cr30399_state[(5)]);
var cr30399_place_10 = (cr30399_state[(4)]);
var cr30399_place_35 = (function (){var G__30522 = cr30399_place_10;
var G__30523 = cr30399_place_28;
var fexpr__30521 = cr30399_place_9;
return (fexpr__30521.cljs$core$IFn$_invoke$arity$2 ? fexpr__30521.cljs$core$IFn$_invoke$arity$2(G__30522,G__30523) : fexpr__30521.call(null,G__30522,G__30523));
})();
var cr30399_place_36 = (function (){var G__30526 = cr30399_place_35;
var fexpr__30525 = cr30399_place_8;
return (fexpr__30525.cljs$core$IFn$_invoke$arity$1 ? fexpr__30525.cljs$core$IFn$_invoke$arity$1(G__30526) : fexpr__30525.call(null,G__30526));
})();
(cr30399_state[(0)] = cr30399_block_10);

(cr30399_state[(1)] = null);

(cr30399_state[(3)] = null);

(cr30399_state[(5)] = null);

(cr30399_state[(4)] = null);

(cr30399_state[(2)] = cr30399_place_36);

return cr30399_state;
}catch (e30516){var cr30399_exception = e30516;
(cr30399_state[(0)] = null);

(cr30399_state[(1)] = null);

(cr30399_state[(2)] = null);

(cr30399_state[(3)] = null);

(cr30399_state[(5)] = null);

(cr30399_state[(4)] = null);

throw cr30399_exception;
}});
var cr30399_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr30399_block_7(cr30399_state){
try{var cr30399_place_22 = (cr30399_state[(7)]);
var cr30399_place_32 = cljs.core.persistent_BANG_;
var cr30399_place_33 = cr30399_place_22;
var cr30399_place_34 = (function (){var G__30530 = cr30399_place_33;
var fexpr__30529 = cr30399_place_32;
return (fexpr__30529.cljs$core$IFn$_invoke$arity$1 ? fexpr__30529.cljs$core$IFn$_invoke$arity$1(G__30530) : fexpr__30529.call(null,G__30530));
})();
(cr30399_state[(0)] = cr30399_block_8);

(cr30399_state[(7)] = null);

(cr30399_state[(5)] = cr30399_place_34);

return cr30399_state;
}catch (e30527){var cr30399_exception = e30527;
(cr30399_state[(0)] = null);

(cr30399_state[(1)] = null);

(cr30399_state[(2)] = null);

(cr30399_state[(3)] = null);

(cr30399_state[(5)] = null);

(cr30399_state[(4)] = null);

(cr30399_state[(7)] = null);

throw cr30399_exception;
}});
var cr30399_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr30399_block_3(cr30399_state){
try{var cr30399_place_4 = (cr30399_state[(3)]);
var cr30399_place_2 = (cr30399_state[(1)]);
var cr30399_place_8 = cljs.core.persistent_BANG_;
var cr30399_place_9 = cljs.core.conj_BANG_;
var cr30399_place_10 = cr30399_place_2;
var cr30399_place_11 = cr30399_place_4;
var cr30399_place_12 = cljs.core.transient$;
var cr30399_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr30399_place_14 = (function (){var G__30539 = cr30399_place_13;
var fexpr__30538 = cr30399_place_12;
return (fexpr__30538.cljs$core$IFn$_invoke$arity$1 ? fexpr__30538.cljs$core$IFn$_invoke$arity$1(G__30539) : fexpr__30538.call(null,G__30539));
})();
(cr30399_state[(0)] = cr30399_block_4);

(cr30399_state[(3)] = null);

(cr30399_state[(1)] = null);

(cr30399_state[(1)] = cr30399_place_8);

(cr30399_state[(3)] = cr30399_place_9);

(cr30399_state[(4)] = cr30399_place_10);

(cr30399_state[(5)] = cr30399_place_11);

(cr30399_state[(6)] = cr30399_place_14);

return cr30399_state;
}catch (e30532){var cr30399_exception = e30532;
(cr30399_state[(0)] = null);

(cr30399_state[(2)] = null);

(cr30399_state[(3)] = null);

(cr30399_state[(1)] = null);

throw cr30399_exception;
}});
var cr30399_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr30399_block_1(cr30399_state){
try{var cr30399_place_3 = _QMARK_read;
(cr30399_state[(0)] = cr30399_block_2);

return missionary.core.park(cr30399_place_3);
}catch (e30541){var cr30399_exception = e30541;
(cr30399_state[(0)] = null);

(cr30399_state[(1)] = null);

throw cr30399_exception;
}});
var cr30399_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr30399_block_5(cr30399_state){
try{var cr30399_place_29 = _QMARK_read;
(cr30399_state[(0)] = cr30399_block_6);

return missionary.core.park(cr30399_place_29);
}catch (e30543){var cr30399_exception = e30543;
(cr30399_state[(0)] = null);

(cr30399_state[(1)] = null);

(cr30399_state[(2)] = null);

(cr30399_state[(3)] = null);

(cr30399_state[(4)] = null);

(cr30399_state[(5)] = null);

(cr30399_state[(7)] = null);

(cr30399_state[(6)] = null);

throw cr30399_exception;
}});
var cr30399_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr30399_block_10(cr30399_state){
try{var cr30399_place_7 = (cr30399_state[(2)]);
(cr30399_state[(0)] = null);

(cr30399_state[(2)] = null);

return cr30399_place_7;
}catch (e30546){var cr30399_exception = e30546;
(cr30399_state[(0)] = null);

(cr30399_state[(2)] = null);

throw cr30399_exception;
}});
var cr30399_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr30399_block_2(cr30399_state){
try{var cr30399_place_4 = missionary.core.unpark();
var cr30399_place_5 = cr30399_place_4;
var cr30399_place_6 = typeof cr30399_place_5 === 'string';
var cr30399_place_7 = null;
if(cr30399_place_6){
(cr30399_state[(0)] = cr30399_block_9);

(cr30399_state[(3)] = cr30399_place_4);

return cr30399_state;
} else {
(cr30399_state[(0)] = cr30399_block_3);

(cr30399_state[(3)] = cr30399_place_4);

(cr30399_state[(2)] = cr30399_place_7);

return cr30399_state;
}
}catch (e30550){var cr30399_exception = e30550;
(cr30399_state[(0)] = null);

(cr30399_state[(1)] = null);

throw cr30399_exception;
}});
var cr30399_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr30399_block_0(cr30399_state){
try{var cr30399_place_0 = cljs.core.transient$;
var cr30399_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr30399_place_2 = (function (){var G__30561 = cr30399_place_1;
var fexpr__30560 = cr30399_place_0;
return (fexpr__30560.cljs$core$IFn$_invoke$arity$1 ? fexpr__30560.cljs$core$IFn$_invoke$arity$1(G__30561) : fexpr__30560.call(null,G__30561));
})();
(cr30399_state[(0)] = cr30399_block_1);

(cr30399_state[(1)] = cr30399_place_2);

return cr30399_state;
}catch (e30555){var cr30399_exception = e30555;
(cr30399_state[(0)] = null);

throw cr30399_exception;
}});
var cr30399_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr30399_block_6(cr30399_state){
try{var cr30399_place_22 = (cr30399_state[(7)]);
var cr30399_place_30 = missionary.core.unpark();
var cr30399_place_31 = cr30399_place_22;
(cr30399_state[(0)] = cr30399_block_4);

(cr30399_state[(7)] = null);

(cr30399_state[(5)] = cr30399_place_30);

(cr30399_state[(6)] = cr30399_place_31);

return cr30399_state;
}catch (e30563){var cr30399_exception = e30563;
(cr30399_state[(0)] = null);

(cr30399_state[(1)] = null);

(cr30399_state[(2)] = null);

(cr30399_state[(3)] = null);

(cr30399_state[(4)] = null);

(cr30399_state[(5)] = null);

(cr30399_state[(7)] = null);

(cr30399_state[(6)] = null);

throw cr30399_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30569 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__30569[(0)] = cr30399_block_0);

return G__30569;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__30574_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30577_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_2(cr30577_state){
try{var cr30577_place_5 = (cr30577_state[(2)]);
var cr30577_place_10 = cr30577_place_5;
var cr30577_place_11 = cljs.core.seq;
var cr30577_place_12 = cr30577_place_10;
var cr30577_place_13 = (function (){var G__30708 = cr30577_place_12;
var fexpr__30707 = cr30577_place_11;
return (fexpr__30707.cljs$core$IFn$_invoke$arity$1 ? fexpr__30707.cljs$core$IFn$_invoke$arity$1(G__30708) : fexpr__30707.call(null,G__30708));
})();
var cr30577_place_14 = cljs.core.first;
var cr30577_place_15 = cr30577_place_13;
var cr30577_place_16 = (function (){var G__30710 = cr30577_place_15;
var fexpr__30709 = cr30577_place_14;
return (fexpr__30709.cljs$core$IFn$_invoke$arity$1 ? fexpr__30709.cljs$core$IFn$_invoke$arity$1(G__30710) : fexpr__30709.call(null,G__30710));
})();
var cr30577_place_17 = cljs.core.next;
var cr30577_place_18 = cr30577_place_13;
var cr30577_place_19 = (function (){var G__30712 = cr30577_place_18;
var fexpr__30711 = cr30577_place_17;
return (fexpr__30711.cljs$core$IFn$_invoke$arity$1 ? fexpr__30711.cljs$core$IFn$_invoke$arity$1(G__30712) : fexpr__30711.call(null,G__30712));
})();
var cr30577_place_20 = cr30577_place_16;
var cr30577_place_21 = cr30577_place_19;
var cr30577_place_22 = console.debug;
var cr30577_place_23 = "\uD83D\uDD3C";
var cr30577_place_24 = cr30577_place_20;
var cr30577_place_25 = (function (){var G__30714 = cr30577_place_23;
var G__30715 = cr30577_place_24;
var fexpr__30713 = cr30577_place_22;
return (fexpr__30713.cljs$core$IFn$_invoke$arity$2 ? fexpr__30713.cljs$core$IFn$_invoke$arity$2(G__30714,G__30715) : fexpr__30713.call(null,G__30714,G__30715));
})();
var cr30577_place_26 = null;
var cr30577_place_27 = false;
(cr30577_state[(0)] = cr30577_block_3);

(cr30577_state[(2)] = null);

(cr30577_state[(2)] = cr30577_place_27);

(cr30577_state[(3)] = cr30577_place_21);

(cr30577_state[(4)] = cr30577_place_26);

(cr30577_state[(5)] = cr30577_place_20);

return cr30577_state;
}catch (e30705){var cr30577_exception = e30705;
(cr30577_state[(0)] = null);

(cr30577_state[(1)] = null);

(cr30577_state[(2)] = null);

throw cr30577_exception;
}});
var cr30577_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_6(cr30577_state){
try{var cr30577_place_21 = (cr30577_state[(3)]);
var cr30577_place_44 = missionary.core.unpark();
var cr30577_place_45 = cr30577_place_21;
(cr30577_state[(0)] = cr30577_block_1);

(cr30577_state[(3)] = null);

(cr30577_state[(1)] = cr30577_place_45);

return cr30577_state;
}catch (e30721){var cr30577_exception = e30721;
(cr30577_state[(0)] = null);

(cr30577_state[(1)] = null);

(cr30577_state[(3)] = null);

throw cr30577_exception;
}});
var cr30577_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_3(cr30577_state){
try{var cr30577_place_20 = (cr30577_state[(5)]);
var cr30577_place_28 = hyperfiddle.electric.impl.io.encode;
var cr30577_place_29 = cr30577_place_20;
var cr30577_place_30 = (function (){var G__30724 = cr30577_place_29;
var fexpr__30723 = cr30577_place_28;
return (fexpr__30723.cljs$core$IFn$_invoke$arity$1 ? fexpr__30723.cljs$core$IFn$_invoke$arity$1(G__30724) : fexpr__30723.call(null,G__30724));
})();
(cr30577_state[(0)] = cr30577_block_5);

(cr30577_state[(5)] = null);

(cr30577_state[(4)] = cr30577_place_30);

return cr30577_state;
}catch (e30722){var cr30577_exception = e30722;
(cr30577_state[(0)] = cr30577_block_4);

(cr30577_state[(4)] = cr30577_exception);

return cr30577_state;
}});
var cr30577_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_5(cr30577_state){
try{var cr30577_place_27 = (cr30577_state[(2)]);
var cr30577_place_26 = (cr30577_state[(4)]);
var cr30577_place_40 = (cljs.core.truth_(cr30577_place_27)?(function(){throw cr30577_place_26})():cr30577_place_26);
var cr30577_place_41 = write;
var cr30577_place_42 = cr30577_place_40;
var cr30577_place_43 = (function (){var G__30730 = cr30577_place_42;
var fexpr__30729 = cr30577_place_41;
return (fexpr__30729.cljs$core$IFn$_invoke$arity$1 ? fexpr__30729.cljs$core$IFn$_invoke$arity$1(G__30730) : fexpr__30729.call(null,G__30730));
})();
(cr30577_state[(0)] = cr30577_block_6);

(cr30577_state[(2)] = null);

(cr30577_state[(4)] = null);

return missionary.core.park(cr30577_place_43);
}catch (e30727){var cr30577_exception = e30727;
(cr30577_state[(0)] = null);

(cr30577_state[(1)] = null);

(cr30577_state[(2)] = null);

(cr30577_state[(3)] = null);

(cr30577_state[(4)] = null);

throw cr30577_exception;
}});
var cr30577_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_7(cr30577_state){
try{var cr30577_place_46 = cljs.core.peek;
var cr30577_place_47 = p1__30574_SHARP_;
var cr30577_place_48 = (function (){var G__30733 = cr30577_place_47;
var fexpr__30732 = cr30577_place_46;
return (fexpr__30732.cljs$core$IFn$_invoke$arity$1 ? fexpr__30732.cljs$core$IFn$_invoke$arity$1(G__30733) : fexpr__30732.call(null,G__30733));
})();
(cr30577_state[(0)] = cr30577_block_8);

(cr30577_state[(2)] = cr30577_place_48);

return cr30577_state;
}catch (e30731){var cr30577_exception = e30731;
(cr30577_state[(0)] = null);

(cr30577_state[(1)] = null);

throw cr30577_exception;
}});
var cr30577_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_12(cr30577_state){
try{var cr30577_place_48 = (cr30577_state[(2)]);
var cr30577_place_72 = missionary.core.unpark();
var cr30577_place_73 = cljs.core.subvec;
var cr30577_place_74 = cr30577_place_48;
var cr30577_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr30577_place_76 = (function (){var G__30736 = cr30577_place_74;
var G__30737 = cr30577_place_75;
var fexpr__30735 = cr30577_place_73;
return (fexpr__30735.cljs$core$IFn$_invoke$arity$2 ? fexpr__30735.cljs$core$IFn$_invoke$arity$2(G__30736,G__30737) : fexpr__30735.call(null,G__30736,G__30737));
})();
(cr30577_state[(0)] = cr30577_block_8);

(cr30577_state[(2)] = cr30577_place_76);

return cr30577_state;
}catch (e30734){var cr30577_exception = e30734;
(cr30577_state[(0)] = null);

(cr30577_state[(2)] = null);

(cr30577_state[(1)] = null);

throw cr30577_exception;
}});
var cr30577_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_9(cr30577_state){
try{var cr30577_place_48 = (cr30577_state[(2)]);
var cr30577_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr30577_place_56 = cr30577_place_48;
var cr30577_place_57 = (function (){var G__30748 = cr30577_place_56;
var fexpr__30747 = cr30577_place_55;
return (fexpr__30747.cljs$core$IFn$_invoke$arity$1 ? fexpr__30747.cljs$core$IFn$_invoke$arity$1(G__30748) : fexpr__30747.call(null,G__30748));
})();
var cr30577_place_58 = write;
var cr30577_place_59 = cr30577_place_57;
var cr30577_place_60 = (function (){var G__30751 = cr30577_place_59;
var fexpr__30750 = cr30577_place_58;
return (fexpr__30750.cljs$core$IFn$_invoke$arity$1 ? fexpr__30750.cljs$core$IFn$_invoke$arity$1(G__30751) : fexpr__30750.call(null,G__30751));
})();
(cr30577_state[(0)] = cr30577_block_10);

(cr30577_state[(2)] = null);

return missionary.core.park(cr30577_place_60);
}catch (e30738){var cr30577_exception = e30738;
(cr30577_state[(0)] = null);

(cr30577_state[(2)] = null);

(cr30577_state[(3)] = null);

(cr30577_state[(1)] = null);

throw cr30577_exception;
}});
var cr30577_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_13(cr30577_state){
try{var cr30577_place_54 = (cr30577_state[(3)]);
(cr30577_state[(0)] = cr30577_block_14);

(cr30577_state[(3)] = null);

(cr30577_state[(1)] = cr30577_place_54);

return cr30577_state;
}catch (e30752){var cr30577_exception = e30752;
(cr30577_state[(0)] = null);

(cr30577_state[(3)] = null);

(cr30577_state[(1)] = null);

throw cr30577_exception;
}});
var cr30577_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_11(cr30577_state){
try{var cr30577_place_48 = (cr30577_state[(2)]);
var cr30577_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr30577_place_63 = cljs.core.subvec;
var cr30577_place_64 = cr30577_place_48;
var cr30577_place_65 = (0);
var cr30577_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr30577_place_67 = (function (){var G__30756 = cr30577_place_64;
var G__30757 = cr30577_place_65;
var G__30758 = cr30577_place_66;
var fexpr__30755 = cr30577_place_63;
return (fexpr__30755.cljs$core$IFn$_invoke$arity$3 ? fexpr__30755.cljs$core$IFn$_invoke$arity$3(G__30756,G__30757,G__30758) : fexpr__30755.call(null,G__30756,G__30757,G__30758));
})();
var cr30577_place_68 = (function (){var G__30761 = cr30577_place_67;
var fexpr__30760 = cr30577_place_62;
return (fexpr__30760.cljs$core$IFn$_invoke$arity$1 ? fexpr__30760.cljs$core$IFn$_invoke$arity$1(G__30761) : fexpr__30760.call(null,G__30761));
})();
var cr30577_place_69 = write;
var cr30577_place_70 = cr30577_place_68;
var cr30577_place_71 = (function (){var G__30763 = cr30577_place_70;
var fexpr__30762 = cr30577_place_69;
return (fexpr__30762.cljs$core$IFn$_invoke$arity$1 ? fexpr__30762.cljs$core$IFn$_invoke$arity$1(G__30763) : fexpr__30762.call(null,G__30763));
})();
(cr30577_state[(0)] = cr30577_block_12);

return missionary.core.park(cr30577_place_71);
}catch (e30754){var cr30577_exception = e30754;
(cr30577_state[(0)] = null);

(cr30577_state[(2)] = null);

(cr30577_state[(1)] = null);

throw cr30577_exception;
}});
var cr30577_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_1(cr30577_state){
try{var cr30577_place_4 = (cr30577_state[(1)]);
var cr30577_place_5 = cr30577_place_4;
var cr30577_place_6 = cr30577_place_5;
var cr30577_place_7 = null;
var cr30577_place_8 = (cr30577_place_6 == cr30577_place_7);
var cr30577_place_9 = null;
if(cr30577_place_8){
(cr30577_state[(0)] = cr30577_block_7);

(cr30577_state[(1)] = null);

(cr30577_state[(1)] = cr30577_place_9);

return cr30577_state;
} else {
(cr30577_state[(0)] = cr30577_block_2);

(cr30577_state[(2)] = cr30577_place_5);

return cr30577_state;
}
}catch (e30766){var cr30577_exception = e30766;
(cr30577_state[(0)] = null);

(cr30577_state[(1)] = null);

throw cr30577_exception;
}});
var cr30577_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_4(cr30577_state){
try{var cr30577_place_26 = (cr30577_state[(4)]);
var cr30577_place_20 = (cr30577_state[(5)]);
var cr30577_place_31 = cr30577_place_26;
var cr30577_place_32 = cljs.core.ex_info;
var cr30577_place_33 = "Failed to encode";
var cr30577_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr30577_place_35 = cr30577_place_20;
var cr30577_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr30577_place_34,cr30577_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr30577_place_37 = cr30577_place_31;
var cr30577_place_38 = (function (){var G__30776 = cr30577_place_33;
var G__30777 = cr30577_place_36;
var G__30778 = cr30577_place_37;
var fexpr__30775 = cr30577_place_32;
return (fexpr__30775.cljs$core$IFn$_invoke$arity$3 ? fexpr__30775.cljs$core$IFn$_invoke$arity$3(G__30776,G__30777,G__30778) : fexpr__30775.call(null,G__30776,G__30777,G__30778));
})();
var cr30577_place_39 = (function(){throw cr30577_place_38})();
(cr30577_state[(0)] = null);

(cr30577_state[(1)] = null);

(cr30577_state[(2)] = null);

(cr30577_state[(3)] = null);

(cr30577_state[(4)] = null);

(cr30577_state[(5)] = null);

return null;
}catch (e30774){var cr30577_exception = e30774;
(cr30577_state[(0)] = cr30577_block_5);

(cr30577_state[(5)] = null);

(cr30577_state[(2)] = true);

(cr30577_state[(4)] = cr30577_exception);

return cr30577_state;
}});
var cr30577_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_10(cr30577_state){
try{var cr30577_place_61 = missionary.core.unpark();
(cr30577_state[(0)] = cr30577_block_13);

(cr30577_state[(3)] = cr30577_place_61);

return cr30577_state;
}catch (e30779){var cr30577_exception = e30779;
(cr30577_state[(0)] = null);

(cr30577_state[(3)] = null);

(cr30577_state[(1)] = null);

throw cr30577_exception;
}});
var cr30577_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_0(cr30577_state){
try{var cr30577_place_0 = cljs.core.seq;
var cr30577_place_1 = cljs.core.pop;
var cr30577_place_2 = p1__30574_SHARP_;
var cr30577_place_3 = (function (){var G__30784 = cr30577_place_2;
var fexpr__30783 = cr30577_place_1;
return (fexpr__30783.cljs$core$IFn$_invoke$arity$1 ? fexpr__30783.cljs$core$IFn$_invoke$arity$1(G__30784) : fexpr__30783.call(null,G__30784));
})();
var cr30577_place_4 = (function (){var G__30787 = cr30577_place_3;
var fexpr__30786 = cr30577_place_0;
return (fexpr__30786.cljs$core$IFn$_invoke$arity$1 ? fexpr__30786.cljs$core$IFn$_invoke$arity$1(G__30787) : fexpr__30786.call(null,G__30787));
})();
(cr30577_state[(0)] = cr30577_block_1);

(cr30577_state[(1)] = cr30577_place_4);

return cr30577_state;
}catch (e30782){var cr30577_exception = e30782;
(cr30577_state[(0)] = null);

throw cr30577_exception;
}});
var cr30577_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_14(cr30577_state){
try{var cr30577_place_9 = (cr30577_state[(1)]);
(cr30577_state[(0)] = null);

(cr30577_state[(1)] = null);

return cr30577_place_9;
}catch (e30788){var cr30577_exception = e30788;
(cr30577_state[(0)] = null);

(cr30577_state[(1)] = null);

throw cr30577_exception;
}});
var cr30577_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr30577_block_8(cr30577_state){
try{var cr30577_place_48 = (cr30577_state[(2)]);
var cr30577_place_49 = cljs.core.count;
var cr30577_place_50 = cr30577_place_48;
var cr30577_place_51 = (function (){var G__30793 = cr30577_place_50;
var fexpr__30792 = cr30577_place_49;
return (fexpr__30792.cljs$core$IFn$_invoke$arity$1 ? fexpr__30792.cljs$core$IFn$_invoke$arity$1(G__30793) : fexpr__30792.call(null,G__30793));
})();
var cr30577_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr30577_place_53 = (cr30577_place_51 >= cr30577_place_52);
var cr30577_place_54 = null;
if(cr30577_place_53){
(cr30577_state[(0)] = cr30577_block_11);

return cr30577_state;
} else {
(cr30577_state[(0)] = cr30577_block_9);

(cr30577_state[(3)] = cr30577_place_54);

return cr30577_state;
}
}catch (e30789){var cr30577_exception = e30789;
(cr30577_state[(0)] = null);

(cr30577_state[(2)] = null);

(cr30577_state[(1)] = null);

throw cr30577_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30794 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__30794[(0)] = cr30577_block_0);

return G__30794;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__30796 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__30796[(0)] = cljs.core.PersistentVector.EMPTY);

(G__30796[(1)] = cljs.core.PersistentVector.EMPTY);

return G__30796;
})();
return (function() {
var G__30835 = null;
var G__30835__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30835__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__30835__2 = (function (r,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(data[(1)]))){
} else {
throw (new Error("Assert failed: (= [] (aget data 1))"));
}

(data[(0)] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),hyperfiddle.electric.impl.io.decode_str(x)));

return r;
} else {
var xs = hyperfiddle.electric.impl.io.decode_numbers(x);
(data[(1)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2((data[(1)]),xs));

if((cljs.core.count(xs) < hyperfiddle.electric.impl.io.chunk_size)){
var x__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),(data[(1)]));
(data[(0)] = cljs.core.PersistentVector.EMPTY);

(data[(1)] = cljs.core.PersistentVector.EMPTY);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x__$1) : rf.call(null,r,x__$1));
} else {
return r;
}
}
});
G__30835 = function(r,x){
switch(arguments.length){
case 0:
return G__30835__0.call(this);
case 1:
return G__30835__1.call(this,r);
case 2:
return G__30835__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30835.cljs$core$IFn$_invoke$arity$0 = G__30835__0;
G__30835.cljs$core$IFn$_invoke$arity$1 = G__30835__1;
G__30835.cljs$core$IFn$_invoke$arity$2 = G__30835__2;
return G__30835;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__30836 = null;
var G__30836__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30836__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__30836__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__30798 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__30798) {
case (0):
var G__30799 = r__$2;
var G__30800 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__30799,G__30800) : rf.call(null,G__30799,G__30800));

break;
default:
return r__$2;

}
});
G__30836 = function(r,x){
switch(arguments.length){
case 0:
return G__30836__0.call(this);
case 1:
return G__30836__1.call(this,r);
case 2:
return G__30836__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30836.cljs$core$IFn$_invoke$arity$0 = G__30836__0;
G__30836.cljs$core$IFn$_invoke$arity$1 = G__30836__1;
G__30836.cljs$core$IFn$_invoke$arity$2 = G__30836__2;
return G__30836;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__30802 = arguments.length;
switch (G__30802) {
case 1:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2 = (function (r,x){
(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(x) : r.call(null,x));

return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=hyperfiddle.electric.impl.io.js.map
