// Compiled by ClojureScript 1.7.122 {}
goog.provide('soma_demo.solver_client');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
soma_demo.solver_client.term_as_str = (function soma_demo$solver_client$term_as_str(term){
if(cljs.core.seqable_QMARK_.call(null,term)){
return [cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,term))),cljs.core.str((function (){var temp__4423__auto__ = cljs.core.seq.call(null,cljs.core.rest.call(null,term));
if(temp__4423__auto__){
var restval = temp__4423__auto__;
return [cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,",",cljs.core.map.call(null,soma_demo$solver_client$term_as_str,restval))),cljs.core.str(")")].join('');
} else {
return "";
}
})())].join('');
} else {
return term;

}
});
soma_demo.solver_client.fetch_answerset = (function soma_demo$solver_client$fetch_answerset(loc){
var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__){
return (function (state_23946){
var state_val_23947 = (state_23946[(1)]);
if((state_val_23947 === (1))){
var inst_23938 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_23939 = [false];
var inst_23940 = cljs.core.PersistentHashMap.fromArrays(inst_23938,inst_23939);
var inst_23941 = cljs_http.client.get.call(null,loc,inst_23940);
var state_23946__$1 = state_23946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23946__$1,(2),inst_23941);
} else {
if((state_val_23947 === (2))){
var inst_23943 = (state_23946[(2)]);
var inst_23944 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23943);
var state_23946__$1 = state_23946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23946__$1,inst_23944);
} else {
return null;
}
}
});})(c__19399__auto__))
;
return ((function (switch__19334__auto__,c__19399__auto__){
return (function() {
var soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto__ = null;
var soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto____0 = (function (){
var statearr_23951 = [null,null,null,null,null,null,null];
(statearr_23951[(0)] = soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto__);

(statearr_23951[(1)] = (1));

return statearr_23951;
});
var soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto____1 = (function (state_23946){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_23946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e23952){if((e23952 instanceof Object)){
var ex__19338__auto__ = e23952;
var statearr_23953_23955 = state_23946;
(statearr_23953_23955[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23956 = state_23946;
state_23946 = G__23956;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto__ = function(state_23946){
switch(arguments.length){
case 0:
return soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto____0.call(this);
case 1:
return soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto____1.call(this,state_23946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto____0;
soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto____1;
return soma_demo$solver_client$fetch_answerset_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__))
})();
var state__19401__auto__ = (function (){var statearr_23954 = f__19400__auto__.call(null);
(statearr_23954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_23954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__))
);

return c__19399__auto__;
});
/**
 * solves a program returns a channel which yeilds the answer sets 
 */
soma_demo.solver_client.solve_programs = (function soma_demo$solver_client$solve_programs(progs){
var c = cljs.core.async.chan.call(null);
var c__19399__auto___24011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___24011,c){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___24011,c){
return (function (state_24001){
var state_val_24002 = (state_24001[(1)]);
if((state_val_24002 === (1))){
var inst_23984 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_23985 = [new cljs.core.Keyword(null,"progs","progs",-362117658)];
var inst_23986 = [progs];
var inst_23987 = cljs.core.PersistentHashMap.fromArrays(inst_23985,inst_23986);
var inst_23988 = ["Content-Type"];
var inst_23989 = ["application/edn"];
var inst_23990 = cljs.core.PersistentHashMap.fromArrays(inst_23988,inst_23989);
var inst_23991 = [inst_23987,inst_23990];
var inst_23992 = cljs.core.PersistentHashMap.fromArrays(inst_23984,inst_23991);
var inst_23993 = cljs_http.client.post.call(null,"/solver",inst_23992);
var state_24001__$1 = state_24001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24001__$1,(2),inst_23993);
} else {
if((state_val_24002 === (2))){
var inst_23995 = (state_24001[(2)]);
var inst_23996 = console.log("got result ",inst_23995);
var inst_23997 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23995);
var state_24001__$1 = (function (){var statearr_24003 = state_24001;
(statearr_24003[(7)] = inst_23996);

return statearr_24003;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24001__$1,(3),c,inst_23997);
} else {
if((state_val_24002 === (3))){
var inst_23999 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24001__$1,inst_23999);
} else {
return null;
}
}
}
});})(c__19399__auto___24011,c))
;
return ((function (switch__19334__auto__,c__19399__auto___24011,c){
return (function() {
var soma_demo$solver_client$solve_programs_$_state_machine__19335__auto__ = null;
var soma_demo$solver_client$solve_programs_$_state_machine__19335__auto____0 = (function (){
var statearr_24007 = [null,null,null,null,null,null,null,null];
(statearr_24007[(0)] = soma_demo$solver_client$solve_programs_$_state_machine__19335__auto__);

(statearr_24007[(1)] = (1));

return statearr_24007;
});
var soma_demo$solver_client$solve_programs_$_state_machine__19335__auto____1 = (function (state_24001){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_24001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e24008){if((e24008 instanceof Object)){
var ex__19338__auto__ = e24008;
var statearr_24009_24012 = state_24001;
(statearr_24009_24012[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24013 = state_24001;
state_24001 = G__24013;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
soma_demo$solver_client$solve_programs_$_state_machine__19335__auto__ = function(state_24001){
switch(arguments.length){
case 0:
return soma_demo$solver_client$solve_programs_$_state_machine__19335__auto____0.call(this);
case 1:
return soma_demo$solver_client$solve_programs_$_state_machine__19335__auto____1.call(this,state_24001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$solver_client$solve_programs_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$solver_client$solve_programs_$_state_machine__19335__auto____0;
soma_demo$solver_client$solve_programs_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$solver_client$solve_programs_$_state_machine__19335__auto____1;
return soma_demo$solver_client$solve_programs_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___24011,c))
})();
var state__19401__auto__ = (function (){var statearr_24010 = f__19400__auto__.call(null);
(statearr_24010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___24011);

return statearr_24010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___24011,c))
);


return c;
});

//# sourceMappingURL=solver_client.js.map?rel=1446416611582