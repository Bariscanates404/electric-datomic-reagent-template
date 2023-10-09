goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__28204__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__28204__auto__["add"]).call(o__28204__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__28204__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__28204__auto__["delete"]).call(o__28204__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__28204__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__28204__auto__["has"]).call(o__28204__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__35121 = data;
var target__28224__auto__ = G__35121;
if(cljs.core.truth_(target__28224__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35121)].join(''),"\n","target__28224__auto__"].join('')));
}

(target__28224__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__35121;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_35161 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_35161);
} else {
var seq__35133_35163 = cljs.core.seq(json_ml);
var chunk__35134_35164 = null;
var count__35135_35165 = (0);
var i__35136_35166 = (0);
while(true){
if((i__35136_35166 < count__35135_35165)){
var item_35167 = chunk__35134_35164.cljs$core$IIndexed$_nth$arity$2(null,i__35136_35166);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_35167,new_depth_budget_35161) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_35167,new_depth_budget_35161));


var G__35168 = seq__35133_35163;
var G__35169 = chunk__35134_35164;
var G__35170 = count__35135_35165;
var G__35171 = (i__35136_35166 + (1));
seq__35133_35163 = G__35168;
chunk__35134_35164 = G__35169;
count__35135_35165 = G__35170;
i__35136_35166 = G__35171;
continue;
} else {
var temp__5804__auto___35172 = cljs.core.seq(seq__35133_35163);
if(temp__5804__auto___35172){
var seq__35133_35173__$1 = temp__5804__auto___35172;
if(cljs.core.chunked_seq_QMARK_(seq__35133_35173__$1)){
var c__5568__auto___35174 = cljs.core.chunk_first(seq__35133_35173__$1);
var G__35175 = cljs.core.chunk_rest(seq__35133_35173__$1);
var G__35176 = c__5568__auto___35174;
var G__35177 = cljs.core.count(c__5568__auto___35174);
var G__35178 = (0);
seq__35133_35163 = G__35175;
chunk__35134_35164 = G__35176;
count__35135_35165 = G__35177;
i__35136_35166 = G__35178;
continue;
} else {
var item_35179 = cljs.core.first(seq__35133_35173__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_35179,new_depth_budget_35161) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_35179,new_depth_budget_35161));


var G__35181 = cljs.core.next(seq__35133_35173__$1);
var G__35182 = null;
var G__35183 = (0);
var G__35184 = (0);
seq__35133_35163 = G__35181;
chunk__35134_35164 = G__35182;
count__35135_35165 = G__35183;
i__35136_35166 = G__35184;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5802__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5802__auto__)){
var initial_hierarchy_depth_budget = temp__5802__auto__;
var remaining_depth_budget = (function (){var or__5045__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
