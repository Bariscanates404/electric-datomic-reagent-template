goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__31016 = proto;
switch (G__31016) {
case "http:":
return "ws:";

break;
case "https:":
return "wss:";

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected protocol",proto);

}
})());

url.searchParams.set("HYPERFIDDLE_ELECTRIC_CLIENT_VERSION",hyperfiddle.electric_client.VERSION);

(url.hash = "");

return url.toString();
});
hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = hyperfiddle.electric_client.server_url();
hyperfiddle.electric_client.remove_listeners = (function hyperfiddle$electric_client$remove_listeners(ws){
(ws.onopen = null);

return (ws.onclose = null);
});
hyperfiddle.electric_client.connect = (function hyperfiddle$electric_client$connect(url){
return (function (s,f){
try{var ws = (new WebSocket(url));
(ws.binaryType = "arraybuffer");

(ws.onopen = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(ws) : s.call(null,ws));
}));

(ws.onclose = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(WebSocket.CONNECTING,ws.readyState)){
return ws.close();
} else {
return null;
}
});
}catch (e31017){var e = e31017;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr31031_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr31031_block_0(cr31031_state){
try{(cr31031_state[(0)] = cr31031_block_1);

return cr31031_state;
}catch (e31063){var cr31031_exception = e31063;
(cr31031_state[(0)] = null);

throw cr31031_exception;
}});
var cr31031_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr31031_block_1(cr31031_state){
try{var cr31031_place_0 = (4096);
var cr31031_place_1 = ws;
var cr31031_place_2 = cr31031_place_1.bufferedAmount;
var cr31031_place_3 = (cr31031_place_0 < cr31031_place_2);
var cr31031_place_4 = null;
if(cr31031_place_3){
(cr31031_state[(0)] = cr31031_block_3);

return cr31031_state;
} else {
(cr31031_state[(0)] = cr31031_block_2);

(cr31031_state[(1)] = cr31031_place_4);

return cr31031_state;
}
}catch (e31064){var cr31031_exception = e31064;
(cr31031_state[(0)] = null);

throw cr31031_exception;
}});
var cr31031_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr31031_block_2(cr31031_state){
try{var cr31031_place_5 = null;
(cr31031_state[(0)] = cr31031_block_5);

(cr31031_state[(1)] = cr31031_place_5);

return cr31031_state;
}catch (e31070){var cr31031_exception = e31070;
(cr31031_state[(0)] = null);

(cr31031_state[(1)] = null);

throw cr31031_exception;
}});
var cr31031_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr31031_block_3(cr31031_state){
try{var cr31031_place_6 = missionary.core.sleep;
var cr31031_place_7 = (50);
var cr31031_place_8 = (function (){var G__31078 = cr31031_place_7;
var fexpr__31077 = cr31031_place_6;
return (fexpr__31077.cljs$core$IFn$_invoke$arity$1 ? fexpr__31077.cljs$core$IFn$_invoke$arity$1(G__31078) : fexpr__31077.call(null,G__31078));
})();
(cr31031_state[(0)] = cr31031_block_4);

return missionary.core.park(cr31031_place_8);
}catch (e31074){var cr31031_exception = e31074;
(cr31031_state[(0)] = null);

throw cr31031_exception;
}});
var cr31031_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr31031_block_4(cr31031_state){
try{var cr31031_place_9 = missionary.core.unpark();
(cr31031_state[(0)] = cr31031_block_1);

return cr31031_state;
}catch (e31081){var cr31031_exception = e31081;
(cr31031_state[(0)] = null);

throw cr31031_exception;
}});
var cr31031_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr31031_block_5(cr31031_state){
try{var cr31031_place_4 = (cr31031_state[(1)]);
(cr31031_state[(0)] = null);

(cr31031_state[(1)] = null);

return cr31031_place_4;
}catch (e31090){var cr31031_exception = e31090;
(cr31031_state[(0)] = null);

(cr31031_state[(1)] = null);

throw cr31031_exception;
}});
return cloroutine.impl.coroutine((function (){var G__31093 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__31093[(0)] = cr31031_block_0);

return G__31093;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__31097 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__31097) : s.call(null,G__31097));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__31098 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31098) : f.call(null,G__31098));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__31103 = ws;
G__31103.send(msg);

return G__31103;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr31110_block_0 = (function hyperfiddle$electric_client$send_all_$_cr31110_block_0(cr31110_state){
try{var cr31110_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr31110_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr31110_place_2 = ws;
var cr31110_place_3 = hyperfiddle.electric.impl.io.encode;
var cr31110_place_4 = (1);
var cr31110_place_5 = msgs;
(cr31110_state[(0)] = cr31110_block_1);

(cr31110_state[(3)] = cr31110_place_0);

(cr31110_state[(2)] = cr31110_place_1);

(cr31110_state[(1)] = cr31110_place_2);

(cr31110_state[(4)] = cr31110_place_3);

return missionary.core.fork(cr31110_place_4,cr31110_place_5);
}catch (e31147){var cr31110_exception = e31147;
(cr31110_state[(0)] = null);

throw cr31110_exception;
}});
var cr31110_block_1 = (function hyperfiddle$electric_client$send_all_$_cr31110_block_1(cr31110_state){
try{var cr31110_place_2 = (cr31110_state[(1)]);
var cr31110_place_1 = (cr31110_state[(2)]);
var cr31110_place_0 = (cr31110_state[(3)]);
var cr31110_place_3 = (cr31110_state[(4)]);
var cr31110_place_6 = missionary.core.unpark();
var cr31110_place_7 = (function (){var G__31157 = cr31110_place_6;
var fexpr__31156 = cr31110_place_3;
return (fexpr__31156.cljs$core$IFn$_invoke$arity$1 ? fexpr__31156.cljs$core$IFn$_invoke$arity$1(G__31157) : fexpr__31156.call(null,G__31157));
})();
var cr31110_place_8 = (function (){var G__31159 = cr31110_place_2;
var G__31160 = cr31110_place_7;
var fexpr__31158 = cr31110_place_1;
return (fexpr__31158.cljs$core$IFn$_invoke$arity$2 ? fexpr__31158.cljs$core$IFn$_invoke$arity$2(G__31159,G__31160) : fexpr__31158.call(null,G__31159,G__31160));
})();
var cr31110_place_9 = (function (){var G__31162 = cr31110_place_8;
var fexpr__31161 = cr31110_place_0;
return (fexpr__31161.cljs$core$IFn$_invoke$arity$1 ? fexpr__31161.cljs$core$IFn$_invoke$arity$1(G__31162) : fexpr__31161.call(null,G__31162));
})();
(cr31110_state[(0)] = cr31110_block_2);

(cr31110_state[(1)] = null);

(cr31110_state[(2)] = null);

(cr31110_state[(3)] = null);

(cr31110_state[(4)] = null);

return missionary.core.park(cr31110_place_9);
}catch (e31153){var cr31110_exception = e31153;
(cr31110_state[(0)] = null);

(cr31110_state[(1)] = null);

(cr31110_state[(2)] = null);

(cr31110_state[(3)] = null);

(cr31110_state[(4)] = null);

throw cr31110_exception;
}});
var cr31110_block_2 = (function hyperfiddle$electric_client$send_all_$_cr31110_block_2(cr31110_state){
try{var cr31110_place_10 = missionary.core.unpark();
(cr31110_state[(0)] = null);

return cr31110_place_10;
}catch (e31165){var cr31110_exception = e31165;
(cr31110_state[(0)] = null);

throw cr31110_exception;
}});
return cloroutine.impl.coroutine((function (){var G__31166 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__31166[(0)] = cr31110_block_0);

return G__31166;
})());
})(),missionary.core.ap_run));
});
/**
 * 
 * server : the server part of the program
 * cb : the callback for incoming messages.
 * msgs : the discrete flow of messages to send, spawned when websocket is connected, cancelled on websocket close.
 * Returns a task producing nil or failing if the websocket was closed before end of reduction.
 */
hyperfiddle.electric_client.connector = (function hyperfiddle$electric_client$connector(server){
return (function (cb,msgs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr31172_block_8 = (function hyperfiddle$electric_client$connector_$_cr31172_block_8(cr31172_state){
try{var cr31172_place_48 = missionary.core.unpark();
(cr31172_state[(0)] = cr31172_block_10);

(cr31172_state[(5)] = cr31172_place_48);

return cr31172_state;
}catch (e31281){var cr31172_exception = e31281;
(cr31172_state[(0)] = null);

(cr31172_state[(1)] = null);

(cr31172_state[(5)] = null);

(cr31172_state[(4)] = null);

(cr31172_state[(2)] = null);

throw cr31172_exception;
}});
var cr31172_block_5 = (function hyperfiddle$electric_client$connector_$_cr31172_block_5(cr31172_state){
try{var cr31172_place_9 = (cr31172_state[(4)]);
var cr31172_place_34 = cr31172_place_9;
var cr31172_place_35 = (function(){throw cr31172_place_34})();
(cr31172_state[(0)] = null);

(cr31172_state[(1)] = null);

(cr31172_state[(3)] = null);

(cr31172_state[(4)] = null);

(cr31172_state[(2)] = null);

return null;
}catch (e31286){var cr31172_exception = e31286;
(cr31172_state[(0)] = cr31172_block_6);

(cr31172_state[(1)] = true);

(cr31172_state[(4)] = cr31172_exception);

return cr31172_state;
}});
var cr31172_block_9 = (function hyperfiddle$electric_client$connector_$_cr31172_block_9(cr31172_state){
try{var cr31172_place_49 = null;
(cr31172_state[(0)] = cr31172_block_10);

(cr31172_state[(5)] = cr31172_place_49);

return cr31172_state;
}catch (e31289){var cr31172_exception = e31289;
(cr31172_state[(0)] = null);

(cr31172_state[(1)] = null);

(cr31172_state[(5)] = null);

(cr31172_state[(4)] = null);

(cr31172_state[(2)] = null);

throw cr31172_exception;
}});
var cr31172_block_3 = (function hyperfiddle$electric_client$connector_$_cr31172_block_3(cr31172_state){
try{var cr31172_place_8 = (cr31172_state[(3)]);
var cr31172_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr31172_place_12 = cr31172_place_8;
var cr31172_place_13 = hyperfiddle.electric.impl.io.encode;
var cr31172_place_14 = server;
var cr31172_place_15 = (function (){var G__31294 = cr31172_place_14;
var fexpr__31293 = cr31172_place_13;
return (fexpr__31293.cljs$core$IFn$_invoke$arity$1 ? fexpr__31293.cljs$core$IFn$_invoke$arity$1(G__31294) : fexpr__31293.call(null,G__31294));
})();
var cr31172_place_16 = (function (){var G__31296 = cr31172_place_12;
var G__31297 = cr31172_place_15;
var fexpr__31295 = cr31172_place_11;
return (fexpr__31295.cljs$core$IFn$_invoke$arity$2 ? fexpr__31295.cljs$core$IFn$_invoke$arity$2(G__31296,G__31297) : fexpr__31295.call(null,G__31296,G__31297));
})();
var cr31172_place_17 = cr31172_place_8;
var cr31172_place_18 = cljs.core.comp;
var cr31172_place_19 = cb;
var cr31172_place_20 = hyperfiddle.electric.impl.io.decode;
var cr31172_place_21 = hyperfiddle.electric_client.payload;
var cr31172_place_22 = (function (){var G__31299 = cr31172_place_19;
var G__31300 = cr31172_place_20;
var G__31301 = cr31172_place_21;
var fexpr__31298 = cr31172_place_18;
return (fexpr__31298.cljs$core$IFn$_invoke$arity$3 ? fexpr__31298.cljs$core$IFn$_invoke$arity$3(G__31299,G__31300,G__31301) : fexpr__31298.call(null,G__31299,G__31300,G__31301));
})();
var cr31172_place_23 = (cr31172_place_17.onmessage = cr31172_place_22);
var cr31172_place_24 = missionary.core.race;
var cr31172_place_25 = hyperfiddle.electric_client.send_all;
var cr31172_place_26 = cr31172_place_8;
var cr31172_place_27 = msgs;
var cr31172_place_28 = (function (){var G__31303 = cr31172_place_26;
var G__31304 = cr31172_place_27;
var fexpr__31302 = cr31172_place_25;
return (fexpr__31302.cljs$core$IFn$_invoke$arity$2 ? fexpr__31302.cljs$core$IFn$_invoke$arity$2(G__31303,G__31304) : fexpr__31302.call(null,G__31303,G__31304));
})();
var cr31172_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr31172_place_30 = cr31172_place_8;
var cr31172_place_31 = (function (){var G__31306 = cr31172_place_30;
var fexpr__31305 = cr31172_place_29;
return (fexpr__31305.cljs$core$IFn$_invoke$arity$1 ? fexpr__31305.cljs$core$IFn$_invoke$arity$1(G__31306) : fexpr__31305.call(null,G__31306));
})();
var cr31172_place_32 = (function (){var G__31308 = cr31172_place_28;
var G__31309 = cr31172_place_31;
var fexpr__31307 = cr31172_place_24;
return (fexpr__31307.cljs$core$IFn$_invoke$arity$2 ? fexpr__31307.cljs$core$IFn$_invoke$arity$2(G__31308,G__31309) : fexpr__31307.call(null,G__31308,G__31309));
})();
(cr31172_state[(0)] = cr31172_block_4);

return missionary.core.park(cr31172_place_32);
}catch (e31292){var cr31172_exception = e31292;
(cr31172_state[(0)] = cr31172_block_5);

(cr31172_state[(4)] = cr31172_exception);

return cr31172_state;
}});
var cr31172_block_11 = (function hyperfiddle$electric_client$connector_$_cr31172_block_11(cr31172_state){
try{var cr31172_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr31172_state[(0)] = cr31172_block_12);

(cr31172_state[(2)] = cr31172_place_51);

return cr31172_state;
}catch (e31311){var cr31172_exception = e31311;
(cr31172_state[(0)] = null);

(cr31172_state[(2)] = null);

throw cr31172_exception;
}});
var cr31172_block_0 = (function hyperfiddle$electric_client$connector_$_cr31172_block_0(cr31172_state){
try{var cr31172_place_0 = hyperfiddle.electric_client.connect;
var cr31172_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr31172_place_2 = (function (){var G__31314 = cr31172_place_1;
var fexpr__31313 = cr31172_place_0;
return (fexpr__31313.cljs$core$IFn$_invoke$arity$1 ? fexpr__31313.cljs$core$IFn$_invoke$arity$1(G__31314) : fexpr__31313.call(null,G__31314));
})();
(cr31172_state[(0)] = cr31172_block_1);

return missionary.core.park(cr31172_place_2);
}catch (e31312){var cr31172_exception = e31312;
(cr31172_state[(0)] = null);

throw cr31172_exception;
}});
var cr31172_block_6 = (function hyperfiddle$electric_client$connector_$_cr31172_block_6(cr31172_state){
try{var cr31172_place_8 = (cr31172_state[(3)]);
var cr31172_place_36 = cljs.core._EQ_;
var cr31172_place_37 = WebSocket;
var cr31172_place_38 = cr31172_place_37.CLOSED;
var cr31172_place_39 = cr31172_place_8;
var cr31172_place_40 = cr31172_place_39.readyState;
var cr31172_place_41 = (function (){var G__31317 = cr31172_place_38;
var G__31318 = cr31172_place_40;
var fexpr__31316 = cr31172_place_36;
return (fexpr__31316.cljs$core$IFn$_invoke$arity$2 ? fexpr__31316.cljs$core$IFn$_invoke$arity$2(G__31317,G__31318) : fexpr__31316.call(null,G__31317,G__31318));
})();
var cr31172_place_42 = null;
if(cljs.core.truth_(cr31172_place_41)){
(cr31172_state[(0)] = cr31172_block_9);

(cr31172_state[(3)] = null);

(cr31172_state[(5)] = cr31172_place_42);

return cr31172_state;
} else {
(cr31172_state[(0)] = cr31172_block_7);

(cr31172_state[(5)] = cr31172_place_42);

return cr31172_state;
}
}catch (e31315){var cr31172_exception = e31315;
(cr31172_state[(0)] = null);

(cr31172_state[(1)] = null);

(cr31172_state[(3)] = null);

(cr31172_state[(4)] = null);

(cr31172_state[(2)] = null);

throw cr31172_exception;
}});
var cr31172_block_4 = (function hyperfiddle$electric_client$connector_$_cr31172_block_4(cr31172_state){
try{var cr31172_place_33 = missionary.core.unpark();
(cr31172_state[(0)] = cr31172_block_6);

(cr31172_state[(4)] = cr31172_place_33);

return cr31172_state;
}catch (e31320){var cr31172_exception = e31320;
(cr31172_state[(0)] = cr31172_block_5);

(cr31172_state[(4)] = cr31172_exception);

return cr31172_state;
}});
var cr31172_block_12 = (function hyperfiddle$electric_client$connector_$_cr31172_block_12(cr31172_state){
try{var cr31172_place_7 = (cr31172_state[(2)]);
(cr31172_state[(0)] = null);

(cr31172_state[(2)] = null);

return cr31172_place_7;
}catch (e31321){var cr31172_exception = e31321;
(cr31172_state[(0)] = null);

(cr31172_state[(2)] = null);

throw cr31172_exception;
}});
var cr31172_block_7 = (function hyperfiddle$electric_client$connector_$_cr31172_block_7(cr31172_state){
try{var cr31172_place_8 = (cr31172_state[(3)]);
var cr31172_place_43 = cr31172_place_8;
var cr31172_place_44 = cr31172_place_43.close();
var cr31172_place_45 = missionary.core.compel;
var cr31172_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr31172_place_47 = (function (){var G__31325 = cr31172_place_46;
var fexpr__31324 = cr31172_place_45;
return (fexpr__31324.cljs$core$IFn$_invoke$arity$1 ? fexpr__31324.cljs$core$IFn$_invoke$arity$1(G__31325) : fexpr__31324.call(null,G__31325));
})();
(cr31172_state[(0)] = cr31172_block_8);

(cr31172_state[(3)] = null);

return missionary.core.park(cr31172_place_47);
}catch (e31323){var cr31172_exception = e31323;
(cr31172_state[(0)] = null);

(cr31172_state[(1)] = null);

(cr31172_state[(5)] = null);

(cr31172_state[(3)] = null);

(cr31172_state[(4)] = null);

(cr31172_state[(2)] = null);

throw cr31172_exception;
}});
var cr31172_block_1 = (function hyperfiddle$electric_client$connector_$_cr31172_block_1(cr31172_state){
try{var cr31172_place_3 = missionary.core.unpark();
var cr31172_place_4 = cr31172_place_3;
var cr31172_place_5 = null;
var cr31172_place_6 = (cr31172_place_4 == cr31172_place_5);
var cr31172_place_7 = null;
if(cr31172_place_6){
(cr31172_state[(0)] = cr31172_block_11);

(cr31172_state[(2)] = cr31172_place_7);

return cr31172_state;
} else {
(cr31172_state[(0)] = cr31172_block_2);

(cr31172_state[(1)] = cr31172_place_3);

(cr31172_state[(2)] = cr31172_place_7);

return cr31172_state;
}
}catch (e31326){var cr31172_exception = e31326;
(cr31172_state[(0)] = null);

throw cr31172_exception;
}});
var cr31172_block_2 = (function hyperfiddle$electric_client$connector_$_cr31172_block_2(cr31172_state){
try{var cr31172_place_3 = (cr31172_state[(1)]);
var cr31172_place_8 = cr31172_place_3;
var cr31172_place_9 = null;
var cr31172_place_10 = false;
(cr31172_state[(0)] = cr31172_block_3);

(cr31172_state[(1)] = null);

(cr31172_state[(3)] = cr31172_place_8);

(cr31172_state[(4)] = cr31172_place_9);

(cr31172_state[(1)] = cr31172_place_10);

return cr31172_state;
}catch (e31327){var cr31172_exception = e31327;
(cr31172_state[(0)] = null);

(cr31172_state[(1)] = null);

(cr31172_state[(2)] = null);

throw cr31172_exception;
}});
var cr31172_block_10 = (function hyperfiddle$electric_client$connector_$_cr31172_block_10(cr31172_state){
try{var cr31172_place_10 = (cr31172_state[(1)]);
var cr31172_place_42 = (cr31172_state[(5)]);
var cr31172_place_9 = (cr31172_state[(4)]);
var cr31172_place_50 = (cljs.core.truth_(cr31172_place_10)?(function(){throw cr31172_place_9})():cr31172_place_9);
(cr31172_state[(0)] = cr31172_block_12);

(cr31172_state[(1)] = null);

(cr31172_state[(5)] = null);

(cr31172_state[(4)] = null);

(cr31172_state[(2)] = cr31172_place_50);

return cr31172_state;
}catch (e31328){var cr31172_exception = e31328;
(cr31172_state[(0)] = null);

(cr31172_state[(1)] = null);

(cr31172_state[(5)] = null);

(cr31172_state[(4)] = null);

(cr31172_state[(2)] = null);

throw cr31172_exception;
}});
return cloroutine.impl.coroutine((function (){var G__31332 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__31332[(0)] = cr31172_block_0);

return G__31332;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__31333){
var vec__31334 = p__31333;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31334,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31334,(1),null);
var G__31337 = b;
switch (G__31337) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,(a + b)], null);

}
});
hyperfiddle.electric_client.fib = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.iterate(hyperfiddle.electric_client.fib_iter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
hyperfiddle.electric_client.retry_delays = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(100)),hyperfiddle.electric_client.fib);
hyperfiddle.electric_client.boot_with_retry = (function hyperfiddle$electric_client$boot_with_retry(client,conn){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr31338_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_3(cr31338_state){
try{var cr31338_place_51 = missionary.core.unpark();
(cr31338_state[(0)] = cr31338_block_5);

(cr31338_state[(4)] = cr31338_place_51);

return cr31338_state;
}catch (e31683){var cr31338_exception = e31683;
(cr31338_state[(0)] = cr31338_block_4);

(cr31338_state[(4)] = cr31338_exception);

return cr31338_state;
}});
var cr31338_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_1(cr31338_state){
try{var cr31338_place_0 = (cr31338_state[(2)]);
var cr31338_place_2 = cljs.core.object_array;
var cr31338_place_3 = (1);
var cr31338_place_4 = (function (){var G__31686 = cr31338_place_3;
var fexpr__31685 = cr31338_place_2;
return (fexpr__31685.cljs$core$IFn$_invoke$arity$1 ? fexpr__31685.cljs$core$IFn$_invoke$arity$1(G__31686) : fexpr__31685.call(null,G__31686));
})();
var cr31338_place_5 = console;
var cr31338_place_6 = "Connecting...";
var cr31338_place_7 = cr31338_place_5.log(cr31338_place_6);
var cr31338_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr31338_place_9 = cr31338_place_0;
var cr31338_place_10 = cr31338_place_9;
var cr31338_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr31338_place_10);
var cr31338_place_12 = null;
var cr31338_place_13 = false;
(cr31338_state[(0)] = cr31338_block_2);

(cr31338_state[(3)] = cr31338_place_8);

(cr31338_state[(4)] = cr31338_place_12);

(cr31338_state[(5)] = cr31338_place_13);

(cr31338_state[(6)] = cr31338_place_4);

return cr31338_state;
}catch (e31684){var cr31338_exception = e31684;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

throw cr31338_exception;
}});
var cr31338_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_4(cr31338_state){
try{var cr31338_place_12 = (cr31338_state[(4)]);
var cr31338_place_52 = cr31338_place_12;
var cr31338_place_53 = (function(){throw cr31338_place_52})();
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(3)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(4)] = null);

(cr31338_state[(5)] = null);

return null;
}catch (e31687){var cr31338_exception = e31687;
(cr31338_state[(0)] = cr31338_block_5);

(cr31338_state[(5)] = true);

(cr31338_state[(4)] = cr31338_exception);

return cr31338_state;
}});
var cr31338_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_11(cr31338_state){
try{var cr31338_place_72 = (cr31338_state[(4)]);
(cr31338_state[(0)] = cr31338_block_13);

(cr31338_state[(4)] = null);

(cr31338_state[(6)] = cr31338_place_72);

return cr31338_state;
}catch (e31688){var cr31338_exception = e31688;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

(cr31338_state[(4)] = null);

(cr31338_state[(6)] = null);

throw cr31338_exception;
}});
var cr31338_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_2(cr31338_state){
try{var cr31338_place_4 = (cr31338_state[(6)]);
var cr31338_place_14 = (function (x){
var fexpr__31476 = (cr31338_place_4[(0)]);
var G__31691 = x;
var fexpr__31690 = fexpr__31476;
return (fexpr__31690.cljs$core$IFn$_invoke$arity$1 ? fexpr__31690.cljs$core$IFn$_invoke$arity$1(G__31691) : fexpr__31690.call(null,G__31691));
});
var cr31338_place_15 = cljs.core.partial;
var cr31338_place_32 = (function (cr31477_state){
try{var cr31477_place_4 = (cr31477_state[(1)]);
var cr31477_place_14 = cr31477_place_4;
var cr31477_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr31477_place_16 = cr31338_place_4;
var cr31477_place_17 = (0);
var cr31477_place_18 = (function (){var G__31547 = cr31477_place_16;
var G__31548 = cr31477_place_17;
var fexpr__31546 = cr31477_place_15;
var G__31730 = G__31547;
var G__31731 = G__31548;
var fexpr__31729 = fexpr__31546;
return (fexpr__31729.cljs$core$IFn$_invoke$arity$2 ? fexpr__31729.cljs$core$IFn$_invoke$arity$2(G__31730,G__31731) : fexpr__31729.call(null,G__31730,G__31731));
})();
var cr31477_place_19 = client;
var cr31477_place_20 = cr31477_place_14;
var cr31477_place_21 = cr31477_place_18;
var cr31477_place_22 = (function (){var G__31550 = cr31477_place_20;
var G__31551 = cr31477_place_21;
var fexpr__31549 = cr31477_place_19;
var G__31733 = G__31550;
var G__31734 = G__31551;
var fexpr__31732 = fexpr__31549;
return (fexpr__31732.cljs$core$IFn$_invoke$arity$2 ? fexpr__31732.cljs$core$IFn$_invoke$arity$2(G__31733,G__31734) : fexpr__31732.call(null,G__31733,G__31734));
})();
(cr31477_state[(0)] = cr31338_place_20);

(cr31477_state[(1)] = null);

return missionary.core.park(cr31477_place_22);
}catch (e31728){var e31545 = e31728;
var cr31477_exception = e31545;
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_24 = (function (cr31477_state){
try{var cr31477_place_28 = (cr31477_state[(4)]);
var cr31477_place_33 = cr31477_place_28;
var cr31477_place_34 = (1);
var cr31477_place_35 = missionary.core.seed;
var cr31477_place_36 = cljs.core.range;
var cr31477_place_37 = (2);
var cr31477_place_38 = (function (){var G__31530 = cr31477_place_37;
var fexpr__31529 = cr31477_place_36;
var G__31737 = G__31530;
var fexpr__31736 = fexpr__31529;
return (fexpr__31736.cljs$core$IFn$_invoke$arity$1 ? fexpr__31736.cljs$core$IFn$_invoke$arity$1(G__31737) : fexpr__31736.call(null,G__31737));
})();
var cr31477_place_39 = (function (){var G__31532 = cr31477_place_38;
var fexpr__31531 = cr31477_place_35;
var G__31739 = G__31532;
var fexpr__31738 = fexpr__31531;
return (fexpr__31738.cljs$core$IFn$_invoke$arity$1 ? fexpr__31738.cljs$core$IFn$_invoke$arity$1(G__31739) : fexpr__31738.call(null,G__31739));
})();
(cr31477_state[(0)] = cr31338_place_16);

(cr31477_state[(4)] = null);

(cr31477_state[(4)] = cr31477_place_33);

return missionary.core.fork(cr31477_place_34,cr31477_place_39);
}catch (e31735){var e31528 = e31735;
var cr31477_exception = e31528;
(cr31477_state[(0)] = null);

(cr31477_state[(3)] = null);

(cr31477_state[(1)] = null);

(cr31477_state[(4)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_33 = (function (cr31477_state){
try{var cr31477_place_33 = (cr31477_state[(4)]);
var cr31477_place_43 = cr31477_place_33;
(cr31477_state[(0)] = cr31338_place_27);

(cr31477_state[(4)] = null);

(cr31477_state[(1)] = cr31477_place_43);

return cr31477_state;
}catch (e31740){var e31552 = e31740;
var cr31477_exception = e31552;
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

(cr31477_state[(3)] = null);

(cr31477_state[(4)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_28 = (function (cr31477_state){
try{var cr31477_place_0 = console;
var cr31477_place_1 = "Connected.";
var cr31477_place_2 = cr31477_place_0.log(cr31477_place_1);
var cr31477_place_3 = missionary.core.rdv;
var cr31477_place_4 = (function (){var fexpr__31537 = cr31477_place_3;
var fexpr__31742 = fexpr__31537;
return (fexpr__31742.cljs$core$IFn$_invoke$arity$0 ? fexpr__31742.cljs$core$IFn$_invoke$arity$0() : fexpr__31742.call(null));
})();
var cr31477_place_5 = (2);
var cr31477_place_6 = missionary.core.seed;
var cr31477_place_7 = cljs.core.range;
var cr31477_place_8 = (2);
var cr31477_place_9 = (function (){var G__31539 = cr31477_place_8;
var fexpr__31538 = cr31477_place_7;
var G__31744 = G__31539;
var fexpr__31743 = fexpr__31538;
return (fexpr__31743.cljs$core$IFn$_invoke$arity$1 ? fexpr__31743.cljs$core$IFn$_invoke$arity$1(G__31744) : fexpr__31743.call(null,G__31744));
})();
var cr31477_place_10 = (function (){var G__31541 = cr31477_place_9;
var fexpr__31540 = cr31477_place_6;
var G__31746 = G__31541;
var fexpr__31745 = fexpr__31540;
return (fexpr__31745.cljs$core$IFn$_invoke$arity$1 ? fexpr__31745.cljs$core$IFn$_invoke$arity$1(G__31746) : fexpr__31745.call(null,G__31746));
})();
(cr31477_state[(0)] = cr31338_place_23);

(cr31477_state[(1)] = cr31477_place_4);

return missionary.core.fork(cr31477_place_5,cr31477_place_10);
}catch (e31741){var e31536 = e31741;
var cr31477_exception = e31536;
(cr31477_state[(0)] = null);

throw cr31477_exception;
}});
var cr31338_place_23 = (function (cr31477_state){
try{var cr31477_place_11 = missionary.core.unpark();
var cr31477_place_12 = cr31477_place_11;
var cr31477_place_13 = null;
var G__31527 = cr31477_place_12;
var G__31748 = G__31527;
switch (G__31748) {
case (0):
(cr31477_state[(0)] = cr31338_place_32);

(cr31477_state[(2)] = cr31477_place_13);

return cr31477_state;

break;
case (1):
(cr31477_state[(0)] = cr31338_place_18);

(cr31477_state[(2)] = cr31477_place_13);

return cr31477_state;

break;
default:
(cr31477_state[(0)] = cr31338_place_25);

(cr31477_state[(1)] = null);

(cr31477_state[(1)] = cr31477_place_11);

return cr31477_state;

}
}catch (e31747){var e31526 = e31747;
var cr31477_exception = e31526;
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

throw cr31477_exception;
}});
var cr31338_place_29 = (function (cr31477_state){
try{var cr31477_place_40 = (cr31477_state[(1)]);
var cr31477_place_44 = "No matching clause: ";
var cr31477_place_45 = cr31477_place_40;
var cr31477_place_46 = [cr31477_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr31477_place_45)].join('');
var cr31477_place_47 = (new Error(cr31477_place_46));
var cr31477_place_48 = (function(){throw cr31477_place_47})();
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

return null;
}catch (e31749){var e31542 = e31749;
var cr31477_exception = e31542;
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

throw cr31477_exception;
}});
var cr31338_place_26 = (function (cr31477_state){
try{var cr31477_place_32 = (cr31477_state[(3)]);
(cr31477_state[(0)] = cr31338_place_21);

(cr31477_state[(3)] = null);

(cr31477_state[(2)] = cr31477_place_32);

return cr31477_state;
}catch (e31750){var e31534 = e31750;
var cr31477_exception = e31534;
(cr31477_state[(0)] = null);

(cr31477_state[(3)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_27 = (function (cr31477_state){
try{var cr31477_place_42 = (cr31477_state[(1)]);
(cr31477_state[(0)] = cr31338_place_26);

(cr31477_state[(1)] = null);

(cr31477_state[(3)] = cr31477_place_42);

return cr31477_state;
}catch (e31751){var e31535 = e31751;
var cr31477_exception = e31535;
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

(cr31477_state[(3)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_34 = (function (cr31477_state){
try{var cr31477_place_28 = missionary.core.unpark();
var cr31477_place_29 = cr31477_place_28;
var cr31477_place_30 = null;
var cr31477_place_31 = (cr31477_place_29 == cr31477_place_30);
var cr31477_place_32 = null;
if(cr31477_place_31){
(cr31477_state[(0)] = cr31338_place_31);

(cr31477_state[(1)] = null);

(cr31477_state[(3)] = cr31477_place_32);

return cr31477_state;
} else {
(cr31477_state[(0)] = cr31338_place_24);

(cr31477_state[(4)] = cr31477_place_28);

(cr31477_state[(3)] = cr31477_place_32);

return cr31477_state;
}
}catch (e31752){var e31553 = e31752;
var cr31477_exception = e31553;
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_21 = (function (cr31477_state){
try{var cr31477_place_13 = (cr31477_state[(2)]);
(cr31477_state[(0)] = null);

(cr31477_state[(2)] = null);

return cr31477_place_13;
}catch (e31753){var e31524 = e31753;
var cr31477_exception = e31524;
(cr31477_state[(0)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_17 = (function (cr31477_state){
try{(cr31477_state[(0)] = cr31338_place_22);

return cr31477_state;
}catch (e31754){var e31520 = e31754;
var cr31477_exception = e31520;
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_30 = (function (cr31477_state){
try{var cr31477_place_51 = missionary.core.unpark();
(cr31477_state[(0)] = cr31338_place_26);

(cr31477_state[(3)] = cr31477_place_51);

return cr31477_state;
}catch (e31755){var e31543 = e31755;
var cr31477_exception = e31543;
(cr31477_state[(0)] = null);

(cr31477_state[(3)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_22 = (function (cr31477_state){
try{var cr31477_place_4 = (cr31477_state[(1)]);
var cr31477_place_27 = cr31477_place_4;
(cr31477_state[(0)] = cr31338_place_34);

return missionary.core.park(cr31477_place_27);
}catch (e31756){var e31525 = e31756;
var cr31477_exception = e31525;
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_16 = (function (cr31477_state){
try{var cr31477_place_40 = missionary.core.unpark();
var cr31477_place_41 = cr31477_place_40;
var cr31477_place_42 = null;
var G__31519 = cr31477_place_41;
var G__31758 = G__31519;
switch (G__31758) {
case (0):
(cr31477_state[(0)] = cr31338_place_33);

(cr31477_state[(1)] = null);

(cr31477_state[(1)] = cr31477_place_42);

return cr31477_state;

break;
case (1):
(cr31477_state[(0)] = cr31338_place_17);

(cr31477_state[(3)] = null);

(cr31477_state[(4)] = null);

return cr31477_state;

break;
default:
(cr31477_state[(0)] = cr31338_place_29);

(cr31477_state[(3)] = null);

(cr31477_state[(4)] = null);

(cr31477_state[(1)] = null);

(cr31477_state[(2)] = null);

(cr31477_state[(1)] = cr31477_place_40);

return cr31477_state;

}
}catch (e31757){var e31518 = e31757;
var cr31477_exception = e31518;
(cr31477_state[(0)] = null);

(cr31477_state[(3)] = null);

(cr31477_state[(4)] = null);

(cr31477_state[(1)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_20 = (function (cr31477_state){
try{var cr31477_place_23 = missionary.core.unpark();
var cr31477_place_24 = (1);
var cr31477_place_25 = missionary.core.none;
(cr31477_state[(0)] = cr31338_place_19);

return missionary.core.fork(cr31477_place_24,cr31477_place_25);
}catch (e31759){var e31523 = e31759;
var cr31477_exception = e31523;
(cr31477_state[(0)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_19 = (function (cr31477_state){
try{var cr31477_place_26 = missionary.core.unpark();
(cr31477_state[(0)] = cr31338_place_21);

(cr31477_state[(2)] = cr31477_place_26);

return cr31477_state;
}catch (e31760){var e31522 = e31760;
var cr31477_exception = e31522;
(cr31477_state[(0)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_31 = (function (cr31477_state){
try{var cr31477_place_49 = (1);
var cr31477_place_50 = missionary.core.none;
(cr31477_state[(0)] = cr31338_place_30);

return missionary.core.fork(cr31477_place_49,cr31477_place_50);
}catch (e31761){var e31544 = e31761;
var cr31477_exception = e31544;
(cr31477_state[(0)] = null);

(cr31477_state[(3)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_25 = (function (cr31477_state){
try{var cr31477_place_11 = (cr31477_state[(1)]);
var cr31477_place_52 = "No matching clause: ";
var cr31477_place_53 = cr31477_place_11;
var cr31477_place_54 = [cr31477_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr31477_place_53)].join('');
var cr31477_place_55 = (new Error(cr31477_place_54));
var cr31477_place_56 = (function(){throw cr31477_place_55})();
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

return null;
}catch (e31762){var e31533 = e31762;
var cr31477_exception = e31533;
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

throw cr31477_exception;
}});
var cr31338_place_18 = (function (cr31477_state){
try{(cr31477_state[(0)] = cr31338_place_22);

return cr31477_state;
}catch (e31763){var e31521 = e31763;
var cr31477_exception = e31521;
(cr31477_state[(0)] = null);

(cr31477_state[(1)] = null);

(cr31477_state[(2)] = null);

throw cr31477_exception;
}});
var cr31338_place_35 = cloroutine.impl.coroutine;
var cr31338_place_36 = cljs.core.object_array;
var cr31338_place_37 = (5);
var cr31338_place_38 = (function (){var G__31765 = cr31338_place_37;
var fexpr__31764 = cr31338_place_36;
return (fexpr__31764.cljs$core$IFn$_invoke$arity$1 ? fexpr__31764.cljs$core$IFn$_invoke$arity$1(G__31765) : fexpr__31764.call(null,G__31765));
})();
var cr31338_place_39 = cr31338_place_38;
var cr31338_place_40 = (0);
var cr31338_place_41 = cr31338_place_28;
var cr31338_place_42 = (cr31338_place_39[cr31338_place_40] = cr31338_place_41);
var cr31338_place_43 = cr31338_place_38;
var cr31338_place_44 = (function (){var G__31767 = cr31338_place_43;
var fexpr__31766 = cr31338_place_35;
return (fexpr__31766.cljs$core$IFn$_invoke$arity$1 ? fexpr__31766.cljs$core$IFn$_invoke$arity$1(G__31767) : fexpr__31766.call(null,G__31767));
})();
var cr31338_place_45 = missionary.core.ap_run;
var cr31338_place_46 = (function (){var G__31769 = cr31338_place_44;
var G__31770 = cr31338_place_45;
var fexpr__31768 = cr31338_place_15;
return (fexpr__31768.cljs$core$IFn$_invoke$arity$2 ? fexpr__31768.cljs$core$IFn$_invoke$arity$2(G__31769,G__31770) : fexpr__31768.call(null,G__31769,G__31770));
})();
var cr31338_place_47 = conn;
var cr31338_place_48 = cr31338_place_14;
var cr31338_place_49 = cr31338_place_46;
var cr31338_place_50 = (function (){var G__31772 = cr31338_place_48;
var G__31773 = cr31338_place_49;
var fexpr__31771 = cr31338_place_47;
return (fexpr__31771.cljs$core$IFn$_invoke$arity$2 ? fexpr__31771.cljs$core$IFn$_invoke$arity$2(G__31772,G__31773) : fexpr__31771.call(null,G__31772,G__31773));
})();
(cr31338_state[(0)] = cr31338_block_3);

(cr31338_state[(6)] = null);

return missionary.core.park(cr31338_place_50);
}catch (e31689){var cr31338_exception = e31689;
(cr31338_state[(0)] = cr31338_block_4);

(cr31338_state[(6)] = null);

(cr31338_state[(4)] = cr31338_exception);

return cr31338_state;
}});
var cr31338_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_9(cr31338_state){
try{var cr31338_place_79 = cljs.core.ex_info;
var cr31338_place_80 = "Stale client";
var cr31338_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr31338_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr31338_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr31338_place_81,cr31338_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr31338_place_84 = (function (){var G__31776 = cr31338_place_80;
var G__31777 = cr31338_place_83;
var fexpr__31775 = cr31338_place_79;
return (fexpr__31775.cljs$core$IFn$_invoke$arity$2 ? fexpr__31775.cljs$core$IFn$_invoke$arity$2(G__31776,G__31777) : fexpr__31775.call(null,G__31776,G__31777));
})();
var cr31338_place_85 = (function(){throw cr31338_place_84})();
(cr31338_state[(0)] = null);

return null;
}catch (e31774){var cr31338_exception = e31774;
(cr31338_state[(0)] = null);

throw cr31338_exception;
}});
var cr31338_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_12(cr31338_state){
try{var cr31338_place_1 = (cr31338_state[(1)]);
var cr31338_place_97 = console;
var cr31338_place_98 = "Failed to connect.";
var cr31338_place_99 = cr31338_place_97.log(cr31338_place_98);
var cr31338_place_100 = cr31338_place_1;
(cr31338_state[(0)] = cr31338_block_13);

(cr31338_state[(6)] = cr31338_place_100);

return cr31338_state;
}catch (e31778){var cr31338_exception = e31778;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

(cr31338_state[(6)] = null);

throw cr31338_exception;
}});
var cr31338_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_15(cr31338_state){
try{var cr31338_place_60 = (cr31338_state[(3)]);
var cr31338_place_102 = cr31338_place_60;
var cr31338_place_103 = null;
var cr31338_place_104 = (cr31338_place_102 == cr31338_place_103);
var cr31338_place_105 = null;
if(cr31338_place_104){
(cr31338_state[(0)] = cr31338_block_18);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

(cr31338_state[(1)] = cr31338_place_105);

return cr31338_state;
} else {
(cr31338_state[(0)] = cr31338_block_16);

return cr31338_state;
}
}catch (e31779){var cr31338_exception = e31779;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

throw cr31338_exception;
}});
var cr31338_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_10(cr31338_state){
try{var cr31338_place_69 = (cr31338_state[(1)]);
var cr31338_place_61 = (cr31338_state[(5)]);
var cr31338_place_86 = cljs.core.ex_info;
var cr31338_place_87 = "Remote error - ";
var cr31338_place_88 = cr31338_place_69;
var cr31338_place_89 = " ";
var cr31338_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr31338_place_91 = cr31338_place_61;
var cr31338_place_92 = cr31338_place_90.cljs$core$IFn$_invoke$arity$1(cr31338_place_91);
var cr31338_place_93 = [cr31338_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr31338_place_88),cr31338_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr31338_place_92)].join('');
var cr31338_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr31338_place_95 = (function (){var G__31782 = cr31338_place_93;
var G__31783 = cr31338_place_94;
var fexpr__31781 = cr31338_place_86;
return (fexpr__31781.cljs$core$IFn$_invoke$arity$2 ? fexpr__31781.cljs$core$IFn$_invoke$arity$2(G__31782,G__31783) : fexpr__31781.call(null,G__31782,G__31783));
})();
var cr31338_place_96 = (function(){throw cr31338_place_95})();
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(5)] = null);

return null;
}catch (e31780){var cr31338_exception = e31780;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(5)] = null);

throw cr31338_exception;
}});
var cr31338_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_19(cr31338_state){
try{var cr31338_place_105 = (cr31338_state[(1)]);
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

return cr31338_place_105;
}catch (e31784){var cr31338_exception = e31784;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

throw cr31338_exception;
}});
var cr31338_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_5(cr31338_state){
try{var cr31338_place_8 = (cr31338_state[(3)]);
var cr31338_place_12 = (cr31338_state[(4)]);
var cr31338_place_13 = (cr31338_state[(5)]);
var cr31338_place_54 = cr31338_place_8;
var cr31338_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr31338_place_54);
var cr31338_place_56 = (cljs.core.truth_(cr31338_place_13)?(function(){throw cr31338_place_12})():cr31338_place_12);
var cr31338_place_57 = cr31338_place_56;
var cr31338_place_58 = null;
var cr31338_place_59 = (cr31338_place_57 == cr31338_place_58);
var cr31338_place_60 = null;
if(cr31338_place_59){
(cr31338_state[(0)] = cr31338_block_14);

(cr31338_state[(3)] = null);

(cr31338_state[(4)] = null);

(cr31338_state[(5)] = null);

(cr31338_state[(3)] = cr31338_place_60);

return cr31338_state;
} else {
(cr31338_state[(0)] = cr31338_block_6);

(cr31338_state[(3)] = null);

(cr31338_state[(4)] = null);

(cr31338_state[(5)] = null);

(cr31338_state[(4)] = cr31338_place_56);

(cr31338_state[(3)] = cr31338_place_60);

return cr31338_state;
}
}catch (e31785){var cr31338_exception = e31785;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(3)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(4)] = null);

(cr31338_state[(5)] = null);

throw cr31338_exception;
}});
var cr31338_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_0(cr31338_state){
try{var cr31338_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr31338_place_1 = hyperfiddle.electric_client.retry_delays;
(cr31338_state[(0)] = cr31338_block_1);

(cr31338_state[(2)] = cr31338_place_0);

(cr31338_state[(1)] = cr31338_place_1);

return cr31338_state;
}catch (e31786){var cr31338_exception = e31786;
(cr31338_state[(0)] = null);

throw cr31338_exception;
}});
var cr31338_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_13(cr31338_state){
try{var cr31338_place_68 = (cr31338_state[(6)]);
(cr31338_state[(0)] = cr31338_block_15);

(cr31338_state[(6)] = null);

(cr31338_state[(3)] = cr31338_place_68);

return cr31338_state;
}catch (e31787){var cr31338_exception = e31787;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

(cr31338_state[(6)] = null);

throw cr31338_exception;
}});
var cr31338_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_14(cr31338_state){
try{var cr31338_place_101 = null;
(cr31338_state[(0)] = cr31338_block_15);

(cr31338_state[(3)] = cr31338_place_101);

return cr31338_state;
}catch (e31788){var cr31338_exception = e31788;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

throw cr31338_exception;
}});
var cr31338_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_16(cr31338_state){
try{var cr31338_place_60 = (cr31338_state[(3)]);
var cr31338_place_106 = cr31338_place_60;
var cr31338_place_107 = cljs.core.seq;
var cr31338_place_108 = cr31338_place_106;
var cr31338_place_109 = (function (){var G__31791 = cr31338_place_108;
var fexpr__31790 = cr31338_place_107;
return (fexpr__31790.cljs$core$IFn$_invoke$arity$1 ? fexpr__31790.cljs$core$IFn$_invoke$arity$1(G__31791) : fexpr__31790.call(null,G__31791));
})();
var cr31338_place_110 = cljs.core.first;
var cr31338_place_111 = cr31338_place_109;
var cr31338_place_112 = (function (){var G__31793 = cr31338_place_111;
var fexpr__31792 = cr31338_place_110;
return (fexpr__31792.cljs$core$IFn$_invoke$arity$1 ? fexpr__31792.cljs$core$IFn$_invoke$arity$1(G__31793) : fexpr__31792.call(null,G__31793));
})();
var cr31338_place_113 = cljs.core.next;
var cr31338_place_114 = cr31338_place_109;
var cr31338_place_115 = (function (){var G__31795 = cr31338_place_114;
var fexpr__31794 = cr31338_place_113;
return (fexpr__31794.cljs$core$IFn$_invoke$arity$1 ? fexpr__31794.cljs$core$IFn$_invoke$arity$1(G__31795) : fexpr__31794.call(null,G__31795));
})();
var cr31338_place_116 = cr31338_place_112;
var cr31338_place_117 = cr31338_place_115;
var cr31338_place_118 = console;
var cr31338_place_119 = "Next attempt in ";
var cr31338_place_120 = cr31338_place_116;
var cr31338_place_121 = (1000);
var cr31338_place_122 = (cr31338_place_120 / cr31338_place_121);
var cr31338_place_123 = " seconds.";
var cr31338_place_124 = [cr31338_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr31338_place_122),cr31338_place_123].join('');
var cr31338_place_125 = cr31338_place_118.log(cr31338_place_124);
var cr31338_place_126 = missionary.core.sleep;
var cr31338_place_127 = cr31338_place_116;
var cr31338_place_128 = cr31338_place_117;
var cr31338_place_129 = (function (){var G__31797 = cr31338_place_127;
var G__31798 = cr31338_place_128;
var fexpr__31796 = cr31338_place_126;
return (fexpr__31796.cljs$core$IFn$_invoke$arity$2 ? fexpr__31796.cljs$core$IFn$_invoke$arity$2(G__31797,G__31798) : fexpr__31796.call(null,G__31797,G__31798));
})();
(cr31338_state[(0)] = cr31338_block_17);

(cr31338_state[(3)] = null);

return missionary.core.park(cr31338_place_129);
}catch (e31789){var cr31338_exception = e31789;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

throw cr31338_exception;
}});
var cr31338_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_8(cr31338_state){
try{var cr31338_place_73 = console;
var cr31338_place_74 = "Connection lost.";
var cr31338_place_75 = cr31338_place_73.log(cr31338_place_74);
var cr31338_place_76 = cljs.core.seq;
var cr31338_place_77 = hyperfiddle.electric_client.retry_delays;
var cr31338_place_78 = (function (){var G__31801 = cr31338_place_77;
var fexpr__31800 = cr31338_place_76;
return (fexpr__31800.cljs$core$IFn$_invoke$arity$1 ? fexpr__31800.cljs$core$IFn$_invoke$arity$1(G__31801) : fexpr__31800.call(null,G__31801));
})();
(cr31338_state[(0)] = cr31338_block_11);

(cr31338_state[(4)] = cr31338_place_78);

return cr31338_state;
}catch (e31799){var cr31338_exception = e31799;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

(cr31338_state[(4)] = null);

(cr31338_state[(6)] = null);

throw cr31338_exception;
}});
var cr31338_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_6(cr31338_state){
try{var cr31338_place_56 = (cr31338_state[(4)]);
var cr31338_place_61 = cr31338_place_56;
var cr31338_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr31338_place_63 = cr31338_place_61;
var cr31338_place_64 = cr31338_place_62.cljs$core$IFn$_invoke$arity$1(cr31338_place_63);
var cr31338_place_65 = cr31338_place_64;
var cr31338_place_66 = null;
var cr31338_place_67 = (cr31338_place_65 == cr31338_place_66);
var cr31338_place_68 = null;
if(cr31338_place_67){
(cr31338_state[(0)] = cr31338_block_12);

(cr31338_state[(4)] = null);

(cr31338_state[(6)] = cr31338_place_68);

return cr31338_state;
} else {
(cr31338_state[(0)] = cr31338_block_7);

(cr31338_state[(4)] = null);

(cr31338_state[(5)] = cr31338_place_61);

(cr31338_state[(4)] = cr31338_place_64);

(cr31338_state[(6)] = cr31338_place_68);

return cr31338_state;
}
}catch (e31802){var cr31338_exception = e31802;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

(cr31338_state[(4)] = null);

throw cr31338_exception;
}});
var cr31338_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_17(cr31338_state){
try{var cr31338_place_130 = missionary.core.unpark();
(cr31338_state[(0)] = cr31338_block_1);

(cr31338_state[(1)] = cr31338_place_130);

return cr31338_state;
}catch (e31803){var cr31338_exception = e31803;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

throw cr31338_exception;
}});
var cr31338_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_7(cr31338_state){
try{var cr31338_place_64 = (cr31338_state[(4)]);
var cr31338_place_69 = cr31338_place_64;
var cr31338_place_70 = cr31338_place_69;
var cr31338_place_71 = cr31338_place_70;
var cr31338_place_72 = null;
var G__31805 = cr31338_place_71;
switch (G__31805) {
case (1005):
case (1006):
(cr31338_state[(0)] = cr31338_block_8);

(cr31338_state[(4)] = null);

(cr31338_state[(5)] = null);

(cr31338_state[(4)] = cr31338_place_72);

return cr31338_state;

break;
case (1008):
(cr31338_state[(0)] = cr31338_block_9);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

(cr31338_state[(4)] = null);

(cr31338_state[(5)] = null);

(cr31338_state[(6)] = null);

return cr31338_state;

break;
default:
(cr31338_state[(0)] = cr31338_block_10);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

(cr31338_state[(4)] = null);

(cr31338_state[(6)] = null);

(cr31338_state[(1)] = cr31338_place_69);

return cr31338_state;

}
}catch (e31804){var cr31338_exception = e31804;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

(cr31338_state[(2)] = null);

(cr31338_state[(3)] = null);

(cr31338_state[(4)] = null);

(cr31338_state[(5)] = null);

(cr31338_state[(6)] = null);

throw cr31338_exception;
}});
var cr31338_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr31338_block_18(cr31338_state){
try{var cr31338_place_131 = null;
(cr31338_state[(0)] = cr31338_block_19);

(cr31338_state[(1)] = cr31338_place_131);

return cr31338_state;
}catch (e31806){var cr31338_exception = e31806;
(cr31338_state[(0)] = null);

(cr31338_state[(1)] = null);

throw cr31338_exception;
}});
return cloroutine.impl.coroutine((function (){var G__31807 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__31807[(0)] = cr31338_block_0);

return G__31807;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.reload_when_stale = (function hyperfiddle$electric_client$reload_when_stale(task){
return (function (s,f){
var G__31808 = s;
var G__31809 = (function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)))){
console.log("Server and client version mismatch. Refreshing page.");

window.location.reload();
} else {
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null,error));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__31808,G__31809) : task.call(null,G__31808,G__31809));
});
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
