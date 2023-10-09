goog.provide('contrib.str');
contrib.str.pprint_str = (function contrib$str$pprint_str(x){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29372_29484 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29373_29485 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29378_29486 = true;
var _STAR_print_fn_STAR__temp_val__29379_29487 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29378_29486);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29379_29487);

try{var _STAR_print_right_margin_STAR__orig_val__29392_29488 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_right_margin_STAR__temp_val__29393_29489 = (100);
(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__29393_29489);

try{var _STAR_print_pprint_dispatch_STAR__orig_val__29395_29490 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__29396_29491 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__29396_29491);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__29395_29490);
}}finally {(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__29392_29488);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29373_29485);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29372_29484);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
});
contrib.str.includes_str_QMARK_ = (function contrib$str$includes_str_QMARK_(v,needle){
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)),clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(needle)));
});
contrib.str.any_matches_QMARK_ = (function contrib$str$any_matches_QMARK_(coll,needle){
var substr = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(needle));
return cljs.core.some((function (p1__29412_SHARP_){
if(cljs.core.truth_(p1__29412_SHARP_)){
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29412_SHARP_)),substr);
} else {
return null;
}
}),coll);
});
contrib.str.empty_QMARK_ = (function contrib$str$empty_QMARK_(s){
return ((((typeof s === 'string') && ((cljs.core.count(s) === (0))))) || ((s == null)));
});
contrib.str.empty__GT_nil = (function contrib$str$empty__GT_nil(s){
if(contrib.str.empty_QMARK_(s)){
return null;
} else {
return s;
}
});
/**
 * Nullify empty strings, identity on all other values.
 */
contrib.str.blank__GT_nil = (function contrib$str$blank__GT_nil(s){
if((!(typeof s === 'string'))){
return s;
} else {
if((!(clojure.string.blank_QMARK_(s)))){
return s;
} else {
return null;
}
}
});
contrib.str.or_str = (function contrib$str$or_str(var_args){
var G__29453 = arguments.length;
switch (G__29453) {
case 2:
return contrib.str.or_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return contrib.str.or_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(contrib.str.or_str.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var or__28681__auto__ = a;
if(cljs.core.seq(or__28681__auto__)){
return or__28681__auto__;
} else {
var or__28680__auto__ = b;
if(cljs.core.seq(or__28680__auto__)){
return or__28680__auto__;
} else {
return null;
}
}
}));

(contrib.str.or_str.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var or__28681__auto__ = a;
if(cljs.core.seq(or__28681__auto__)){
return or__28681__auto__;
} else {
var or__28681__auto____$1 = b;
if(cljs.core.seq(or__28681__auto____$1)){
return or__28681__auto____$1;
} else {
var or__28680__auto__ = c;
if(cljs.core.seq(or__28680__auto__)){
return or__28680__auto__;
} else {
return null;
}
}
}
}));

(contrib.str.or_str.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=contrib.str.js.map
