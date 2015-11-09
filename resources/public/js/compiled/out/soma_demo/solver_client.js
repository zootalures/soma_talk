// Compiled by ClojureScript 1.7.122 {}
goog.provide('soma_demo.solver_client');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.reader');
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
/**
 * Coalesces a response into edn even if its a string 
 */
soma_demo.solver_client.force_edn = (function soma_demo$solver_client$force_edn(resp){
if(typeof new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(resp) === 'string'){
return cljs.core.update_in.call(null,resp,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.reader.read_string);
} else {
return resp;
}
});
soma_demo.solver_client.fetch_answerset = (function soma_demo$solver_client$fetch_answerset(loc){
var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto__){
return (function (state_23537){
var state_val_23538 = (state_23537[(1)]);
if((state_val_23538 === (1))){
var inst_23528 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_23529 = [false];
var inst_23530 = cljs.core.PersistentHashMap.fromArrays(inst_23528,inst_23529);
var inst_23531 = cljs_http.client.get.call(null,loc,inst_23530);
var state_23537__$1 = state_23537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23537__$1,(2),inst_23531);
} else {
if((state_val_23538 === (2))){
var inst_23533 = (state_23537[(2)]);
var inst_23534 = soma_demo.solver_client.force_edn.call(null,inst_23533);
var inst_23535 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23534);
var state_23537__$1 = state_23537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23537__$1,inst_23535);
} else {
return null;
}
}
});})(c__7080__auto__))
;
return ((function (switch__7015__auto__,c__7080__auto__){
return (function() {
var soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto__ = null;
var soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto____0 = (function (){
var statearr_23542 = [null,null,null,null,null,null,null];
(statearr_23542[(0)] = soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto__);

(statearr_23542[(1)] = (1));

return statearr_23542;
});
var soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto____1 = (function (state_23537){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_23537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e23543){if((e23543 instanceof Object)){
var ex__7019__auto__ = e23543;
var statearr_23544_23546 = state_23537;
(statearr_23544_23546[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23547 = state_23537;
state_23537 = G__23547;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto__ = function(state_23537){
switch(arguments.length){
case 0:
return soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto____0.call(this);
case 1:
return soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto____1.call(this,state_23537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto____0;
soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto____1;
return soma_demo$solver_client$fetch_answerset_$_state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto__))
})();
var state__7082__auto__ = (function (){var statearr_23545 = f__7081__auto__.call(null);
(statearr_23545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_23545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__))
);

return c__7080__auto__;
});
/**
 * solves a program returns a channel which yeilds the answer sets 
 */
soma_demo.solver_client.solve_programs = (function soma_demo$solver_client$solve_programs(progs){
var c = cljs.core.async.chan.call(null);
var c__7080__auto___23602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___23602,c){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___23602,c){
return (function (state_23592){
var state_val_23593 = (state_23592[(1)]);
if((state_val_23593 === (1))){
var inst_23575 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_23576 = [new cljs.core.Keyword(null,"progs","progs",-362117658)];
var inst_23577 = [progs];
var inst_23578 = cljs.core.PersistentHashMap.fromArrays(inst_23576,inst_23577);
var inst_23579 = ["Content-Type"];
var inst_23580 = ["application/edn"];
var inst_23581 = cljs.core.PersistentHashMap.fromArrays(inst_23579,inst_23580);
var inst_23582 = [inst_23578,inst_23581];
var inst_23583 = cljs.core.PersistentHashMap.fromArrays(inst_23575,inst_23582);
var inst_23584 = cljs_http.client.post.call(null,"/solver",inst_23583);
var state_23592__$1 = state_23592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23592__$1,(2),inst_23584);
} else {
if((state_val_23593 === (2))){
var inst_23586 = (state_23592[(2)]);
var inst_23587 = console.log("got result ",inst_23586);
var inst_23588 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23586);
var state_23592__$1 = (function (){var statearr_23594 = state_23592;
(statearr_23594[(7)] = inst_23587);

return statearr_23594;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23592__$1,(3),c,inst_23588);
} else {
if((state_val_23593 === (3))){
var inst_23590 = (state_23592[(2)]);
var state_23592__$1 = state_23592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23592__$1,inst_23590);
} else {
return null;
}
}
}
});})(c__7080__auto___23602,c))
;
return ((function (switch__7015__auto__,c__7080__auto___23602,c){
return (function() {
var soma_demo$solver_client$solve_programs_$_state_machine__7016__auto__ = null;
var soma_demo$solver_client$solve_programs_$_state_machine__7016__auto____0 = (function (){
var statearr_23598 = [null,null,null,null,null,null,null,null];
(statearr_23598[(0)] = soma_demo$solver_client$solve_programs_$_state_machine__7016__auto__);

(statearr_23598[(1)] = (1));

return statearr_23598;
});
var soma_demo$solver_client$solve_programs_$_state_machine__7016__auto____1 = (function (state_23592){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_23592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e23599){if((e23599 instanceof Object)){
var ex__7019__auto__ = e23599;
var statearr_23600_23603 = state_23592;
(statearr_23600_23603[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23604 = state_23592;
state_23592 = G__23604;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
soma_demo$solver_client$solve_programs_$_state_machine__7016__auto__ = function(state_23592){
switch(arguments.length){
case 0:
return soma_demo$solver_client$solve_programs_$_state_machine__7016__auto____0.call(this);
case 1:
return soma_demo$solver_client$solve_programs_$_state_machine__7016__auto____1.call(this,state_23592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$solver_client$solve_programs_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$solver_client$solve_programs_$_state_machine__7016__auto____0;
soma_demo$solver_client$solve_programs_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$solver_client$solve_programs_$_state_machine__7016__auto____1;
return soma_demo$solver_client$solve_programs_$_state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___23602,c))
})();
var state__7082__auto__ = (function (){var statearr_23601 = f__7081__auto__.call(null);
(statearr_23601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___23602);

return statearr_23601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___23602,c))
);


return c;
});

//# sourceMappingURL=solver_client.js.map?rel=1447059443938