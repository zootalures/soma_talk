// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27652 = cljs.core._EQ_;
var expr__27653 = (function (){var or__16318__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27652.call(null,"true",expr__27653))){
return true;
} else {
if(cljs.core.truth_(pred__27652.call(null,"false",expr__27653))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27653)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27655__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27656__i = 0, G__27656__a = new Array(arguments.length -  0);
while (G__27656__i < G__27656__a.length) {G__27656__a[G__27656__i] = arguments[G__27656__i + 0]; ++G__27656__i;}
  args = new cljs.core.IndexedSeq(G__27656__a,0);
} 
return G__27655__delegate.call(this,args);};
G__27655.cljs$lang$maxFixedArity = 0;
G__27655.cljs$lang$applyTo = (function (arglist__27657){
var args = cljs.core.seq(arglist__27657);
return G__27655__delegate(args);
});
G__27655.cljs$core$IFn$_invoke$arity$variadic = G__27655__delegate;
return G__27655;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27658){
var map__27661 = p__27658;
var map__27661__$1 = ((((!((map__27661 == null)))?((((map__27661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27661):map__27661);
var message = cljs.core.get.call(null,map__27661__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27661__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16318__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16306__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16306__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16306__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19399__auto___27823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___27823,ch){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___27823,ch){
return (function (state_27792){
var state_val_27793 = (state_27792[(1)]);
if((state_val_27793 === (7))){
var inst_27788 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27794_27824 = state_27792__$1;
(statearr_27794_27824[(2)] = inst_27788);

(statearr_27794_27824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (1))){
var state_27792__$1 = state_27792;
var statearr_27795_27825 = state_27792__$1;
(statearr_27795_27825[(2)] = null);

(statearr_27795_27825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (4))){
var inst_27745 = (state_27792[(7)]);
var inst_27745__$1 = (state_27792[(2)]);
var state_27792__$1 = (function (){var statearr_27796 = state_27792;
(statearr_27796[(7)] = inst_27745__$1);

return statearr_27796;
})();
if(cljs.core.truth_(inst_27745__$1)){
var statearr_27797_27826 = state_27792__$1;
(statearr_27797_27826[(1)] = (5));

} else {
var statearr_27798_27827 = state_27792__$1;
(statearr_27798_27827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (15))){
var inst_27752 = (state_27792[(8)]);
var inst_27767 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27752);
var inst_27768 = cljs.core.first.call(null,inst_27767);
var inst_27769 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27768);
var inst_27770 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27769)].join('');
var inst_27771 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27770);
var state_27792__$1 = state_27792;
var statearr_27799_27828 = state_27792__$1;
(statearr_27799_27828[(2)] = inst_27771);

(statearr_27799_27828[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (13))){
var inst_27776 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27800_27829 = state_27792__$1;
(statearr_27800_27829[(2)] = inst_27776);

(statearr_27800_27829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (6))){
var state_27792__$1 = state_27792;
var statearr_27801_27830 = state_27792__$1;
(statearr_27801_27830[(2)] = null);

(statearr_27801_27830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (17))){
var inst_27774 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27802_27831 = state_27792__$1;
(statearr_27802_27831[(2)] = inst_27774);

(statearr_27802_27831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (3))){
var inst_27790 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27792__$1,inst_27790);
} else {
if((state_val_27793 === (12))){
var inst_27751 = (state_27792[(9)]);
var inst_27765 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27751,opts);
var state_27792__$1 = state_27792;
if(cljs.core.truth_(inst_27765)){
var statearr_27803_27832 = state_27792__$1;
(statearr_27803_27832[(1)] = (15));

} else {
var statearr_27804_27833 = state_27792__$1;
(statearr_27804_27833[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (2))){
var state_27792__$1 = state_27792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27792__$1,(4),ch);
} else {
if((state_val_27793 === (11))){
var inst_27752 = (state_27792[(8)]);
var inst_27757 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27758 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27752);
var inst_27759 = cljs.core.async.timeout.call(null,(1000));
var inst_27760 = [inst_27758,inst_27759];
var inst_27761 = (new cljs.core.PersistentVector(null,2,(5),inst_27757,inst_27760,null));
var state_27792__$1 = state_27792;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27792__$1,(14),inst_27761);
} else {
if((state_val_27793 === (9))){
var inst_27752 = (state_27792[(8)]);
var inst_27778 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27779 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27752);
var inst_27780 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27779);
var inst_27781 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27780)].join('');
var inst_27782 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27781);
var state_27792__$1 = (function (){var statearr_27805 = state_27792;
(statearr_27805[(10)] = inst_27778);

return statearr_27805;
})();
var statearr_27806_27834 = state_27792__$1;
(statearr_27806_27834[(2)] = inst_27782);

(statearr_27806_27834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (5))){
var inst_27745 = (state_27792[(7)]);
var inst_27747 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27748 = (new cljs.core.PersistentArrayMap(null,2,inst_27747,null));
var inst_27749 = (new cljs.core.PersistentHashSet(null,inst_27748,null));
var inst_27750 = figwheel.client.focus_msgs.call(null,inst_27749,inst_27745);
var inst_27751 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27750);
var inst_27752 = cljs.core.first.call(null,inst_27750);
var inst_27753 = figwheel.client.autoload_QMARK_.call(null);
var state_27792__$1 = (function (){var statearr_27807 = state_27792;
(statearr_27807[(9)] = inst_27751);

(statearr_27807[(8)] = inst_27752);

return statearr_27807;
})();
if(cljs.core.truth_(inst_27753)){
var statearr_27808_27835 = state_27792__$1;
(statearr_27808_27835[(1)] = (8));

} else {
var statearr_27809_27836 = state_27792__$1;
(statearr_27809_27836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (14))){
var inst_27763 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27810_27837 = state_27792__$1;
(statearr_27810_27837[(2)] = inst_27763);

(statearr_27810_27837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (16))){
var state_27792__$1 = state_27792;
var statearr_27811_27838 = state_27792__$1;
(statearr_27811_27838[(2)] = null);

(statearr_27811_27838[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (10))){
var inst_27784 = (state_27792[(2)]);
var state_27792__$1 = (function (){var statearr_27812 = state_27792;
(statearr_27812[(11)] = inst_27784);

return statearr_27812;
})();
var statearr_27813_27839 = state_27792__$1;
(statearr_27813_27839[(2)] = null);

(statearr_27813_27839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (8))){
var inst_27751 = (state_27792[(9)]);
var inst_27755 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27751,opts);
var state_27792__$1 = state_27792;
if(cljs.core.truth_(inst_27755)){
var statearr_27814_27840 = state_27792__$1;
(statearr_27814_27840[(1)] = (11));

} else {
var statearr_27815_27841 = state_27792__$1;
(statearr_27815_27841[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19399__auto___27823,ch))
;
return ((function (switch__19334__auto__,c__19399__auto___27823,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19335__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19335__auto____0 = (function (){
var statearr_27819 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27819[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19335__auto__);

(statearr_27819[(1)] = (1));

return statearr_27819;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19335__auto____1 = (function (state_27792){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_27792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e27820){if((e27820 instanceof Object)){
var ex__19338__auto__ = e27820;
var statearr_27821_27842 = state_27792;
(statearr_27821_27842[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27843 = state_27792;
state_27792 = G__27843;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19335__auto__ = function(state_27792){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19335__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19335__auto____1.call(this,state_27792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19335__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19335__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___27823,ch))
})();
var state__19401__auto__ = (function (){var statearr_27822 = f__19400__auto__.call(null);
(statearr_27822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___27823);

return statearr_27822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___27823,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27844_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27844_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27851 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27851){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27849 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27850 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27849,_STAR_print_newline_STAR_27850,base_path_27851){
return (function() { 
var G__27852__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27853__i = 0, G__27853__a = new Array(arguments.length -  0);
while (G__27853__i < G__27853__a.length) {G__27853__a[G__27853__i] = arguments[G__27853__i + 0]; ++G__27853__i;}
  args = new cljs.core.IndexedSeq(G__27853__a,0);
} 
return G__27852__delegate.call(this,args);};
G__27852.cljs$lang$maxFixedArity = 0;
G__27852.cljs$lang$applyTo = (function (arglist__27854){
var args = cljs.core.seq(arglist__27854);
return G__27852__delegate(args);
});
G__27852.cljs$core$IFn$_invoke$arity$variadic = G__27852__delegate;
return G__27852;
})()
;})(_STAR_print_fn_STAR_27849,_STAR_print_newline_STAR_27850,base_path_27851))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27850;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27849;
}}catch (e27848){if((e27848 instanceof Error)){
var e = e27848;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27851], null));
} else {
var e = e27848;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27851))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27855){
var map__27862 = p__27855;
var map__27862__$1 = ((((!((map__27862 == null)))?((((map__27862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27862):map__27862);
var opts = map__27862__$1;
var build_id = cljs.core.get.call(null,map__27862__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27862,map__27862__$1,opts,build_id){
return (function (p__27864){
var vec__27865 = p__27864;
var map__27866 = cljs.core.nth.call(null,vec__27865,(0),null);
var map__27866__$1 = ((((!((map__27866 == null)))?((((map__27866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27866):map__27866);
var msg = map__27866__$1;
var msg_name = cljs.core.get.call(null,map__27866__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27865,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27865,map__27866,map__27866__$1,msg,msg_name,_,map__27862,map__27862__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27865,map__27866,map__27866__$1,msg,msg_name,_,map__27862,map__27862__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27862,map__27862__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27872){
var vec__27873 = p__27872;
var map__27874 = cljs.core.nth.call(null,vec__27873,(0),null);
var map__27874__$1 = ((((!((map__27874 == null)))?((((map__27874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27874):map__27874);
var msg = map__27874__$1;
var msg_name = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27873,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27876){
var map__27886 = p__27876;
var map__27886__$1 = ((((!((map__27886 == null)))?((((map__27886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27886):map__27886);
var on_compile_warning = cljs.core.get.call(null,map__27886__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27886__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27886,map__27886__$1,on_compile_warning,on_compile_fail){
return (function (p__27888){
var vec__27889 = p__27888;
var map__27890 = cljs.core.nth.call(null,vec__27889,(0),null);
var map__27890__$1 = ((((!((map__27890 == null)))?((((map__27890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27890):map__27890);
var msg = map__27890__$1;
var msg_name = cljs.core.get.call(null,map__27890__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27889,(1));
var pred__27892 = cljs.core._EQ_;
var expr__27893 = msg_name;
if(cljs.core.truth_(pred__27892.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27893))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27892.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27893))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27886,map__27886__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__,msg_hist,msg_names,msg){
return (function (state_28109){
var state_val_28110 = (state_28109[(1)]);
if((state_val_28110 === (7))){
var inst_28033 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
if(cljs.core.truth_(inst_28033)){
var statearr_28111_28157 = state_28109__$1;
(statearr_28111_28157[(1)] = (8));

} else {
var statearr_28112_28158 = state_28109__$1;
(statearr_28112_28158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (20))){
var inst_28103 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28113_28159 = state_28109__$1;
(statearr_28113_28159[(2)] = inst_28103);

(statearr_28113_28159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (27))){
var inst_28099 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28114_28160 = state_28109__$1;
(statearr_28114_28160[(2)] = inst_28099);

(statearr_28114_28160[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (1))){
var inst_28026 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28109__$1 = state_28109;
if(cljs.core.truth_(inst_28026)){
var statearr_28115_28161 = state_28109__$1;
(statearr_28115_28161[(1)] = (2));

} else {
var statearr_28116_28162 = state_28109__$1;
(statearr_28116_28162[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (24))){
var inst_28101 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28117_28163 = state_28109__$1;
(statearr_28117_28163[(2)] = inst_28101);

(statearr_28117_28163[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (4))){
var inst_28107 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28109__$1,inst_28107);
} else {
if((state_val_28110 === (15))){
var inst_28105 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28118_28164 = state_28109__$1;
(statearr_28118_28164[(2)] = inst_28105);

(statearr_28118_28164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (21))){
var inst_28064 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28119_28165 = state_28109__$1;
(statearr_28119_28165[(2)] = inst_28064);

(statearr_28119_28165[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (31))){
var inst_28088 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28109__$1 = state_28109;
if(cljs.core.truth_(inst_28088)){
var statearr_28120_28166 = state_28109__$1;
(statearr_28120_28166[(1)] = (34));

} else {
var statearr_28121_28167 = state_28109__$1;
(statearr_28121_28167[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (32))){
var inst_28097 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28122_28168 = state_28109__$1;
(statearr_28122_28168[(2)] = inst_28097);

(statearr_28122_28168[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (33))){
var inst_28086 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28123_28169 = state_28109__$1;
(statearr_28123_28169[(2)] = inst_28086);

(statearr_28123_28169[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (13))){
var inst_28047 = figwheel.client.heads_up.clear.call(null);
var state_28109__$1 = state_28109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28109__$1,(16),inst_28047);
} else {
if((state_val_28110 === (22))){
var inst_28068 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28069 = figwheel.client.heads_up.append_message.call(null,inst_28068);
var state_28109__$1 = state_28109;
var statearr_28124_28170 = state_28109__$1;
(statearr_28124_28170[(2)] = inst_28069);

(statearr_28124_28170[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (36))){
var inst_28095 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28125_28171 = state_28109__$1;
(statearr_28125_28171[(2)] = inst_28095);

(statearr_28125_28171[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (29))){
var inst_28079 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28126_28172 = state_28109__$1;
(statearr_28126_28172[(2)] = inst_28079);

(statearr_28126_28172[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (6))){
var inst_28028 = (state_28109[(7)]);
var state_28109__$1 = state_28109;
var statearr_28127_28173 = state_28109__$1;
(statearr_28127_28173[(2)] = inst_28028);

(statearr_28127_28173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (28))){
var inst_28075 = (state_28109[(2)]);
var inst_28076 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28077 = figwheel.client.heads_up.display_warning.call(null,inst_28076);
var state_28109__$1 = (function (){var statearr_28128 = state_28109;
(statearr_28128[(8)] = inst_28075);

return statearr_28128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28109__$1,(29),inst_28077);
} else {
if((state_val_28110 === (25))){
var inst_28073 = figwheel.client.heads_up.clear.call(null);
var state_28109__$1 = state_28109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28109__$1,(28),inst_28073);
} else {
if((state_val_28110 === (34))){
var inst_28090 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28109__$1 = state_28109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28109__$1,(37),inst_28090);
} else {
if((state_val_28110 === (17))){
var inst_28055 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28129_28174 = state_28109__$1;
(statearr_28129_28174[(2)] = inst_28055);

(statearr_28129_28174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (3))){
var inst_28045 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28109__$1 = state_28109;
if(cljs.core.truth_(inst_28045)){
var statearr_28130_28175 = state_28109__$1;
(statearr_28130_28175[(1)] = (13));

} else {
var statearr_28131_28176 = state_28109__$1;
(statearr_28131_28176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (12))){
var inst_28041 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28132_28177 = state_28109__$1;
(statearr_28132_28177[(2)] = inst_28041);

(statearr_28132_28177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (2))){
var inst_28028 = (state_28109[(7)]);
var inst_28028__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28109__$1 = (function (){var statearr_28133 = state_28109;
(statearr_28133[(7)] = inst_28028__$1);

return statearr_28133;
})();
if(cljs.core.truth_(inst_28028__$1)){
var statearr_28134_28178 = state_28109__$1;
(statearr_28134_28178[(1)] = (5));

} else {
var statearr_28135_28179 = state_28109__$1;
(statearr_28135_28179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (23))){
var inst_28071 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28109__$1 = state_28109;
if(cljs.core.truth_(inst_28071)){
var statearr_28136_28180 = state_28109__$1;
(statearr_28136_28180[(1)] = (25));

} else {
var statearr_28137_28181 = state_28109__$1;
(statearr_28137_28181[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (35))){
var state_28109__$1 = state_28109;
var statearr_28138_28182 = state_28109__$1;
(statearr_28138_28182[(2)] = null);

(statearr_28138_28182[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (19))){
var inst_28066 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28109__$1 = state_28109;
if(cljs.core.truth_(inst_28066)){
var statearr_28139_28183 = state_28109__$1;
(statearr_28139_28183[(1)] = (22));

} else {
var statearr_28140_28184 = state_28109__$1;
(statearr_28140_28184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (11))){
var inst_28037 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28141_28185 = state_28109__$1;
(statearr_28141_28185[(2)] = inst_28037);

(statearr_28141_28185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (9))){
var inst_28039 = figwheel.client.heads_up.clear.call(null);
var state_28109__$1 = state_28109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28109__$1,(12),inst_28039);
} else {
if((state_val_28110 === (5))){
var inst_28030 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28109__$1 = state_28109;
var statearr_28142_28186 = state_28109__$1;
(statearr_28142_28186[(2)] = inst_28030);

(statearr_28142_28186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (14))){
var inst_28057 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28109__$1 = state_28109;
if(cljs.core.truth_(inst_28057)){
var statearr_28143_28187 = state_28109__$1;
(statearr_28143_28187[(1)] = (18));

} else {
var statearr_28144_28188 = state_28109__$1;
(statearr_28144_28188[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (26))){
var inst_28081 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28109__$1 = state_28109;
if(cljs.core.truth_(inst_28081)){
var statearr_28145_28189 = state_28109__$1;
(statearr_28145_28189[(1)] = (30));

} else {
var statearr_28146_28190 = state_28109__$1;
(statearr_28146_28190[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (16))){
var inst_28049 = (state_28109[(2)]);
var inst_28050 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28051 = figwheel.client.format_messages.call(null,inst_28050);
var inst_28052 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28053 = figwheel.client.heads_up.display_error.call(null,inst_28051,inst_28052);
var state_28109__$1 = (function (){var statearr_28147 = state_28109;
(statearr_28147[(9)] = inst_28049);

return statearr_28147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28109__$1,(17),inst_28053);
} else {
if((state_val_28110 === (30))){
var inst_28083 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28084 = figwheel.client.heads_up.display_warning.call(null,inst_28083);
var state_28109__$1 = state_28109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28109__$1,(33),inst_28084);
} else {
if((state_val_28110 === (10))){
var inst_28043 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28148_28191 = state_28109__$1;
(statearr_28148_28191[(2)] = inst_28043);

(statearr_28148_28191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (18))){
var inst_28059 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28060 = figwheel.client.format_messages.call(null,inst_28059);
var inst_28061 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28062 = figwheel.client.heads_up.display_error.call(null,inst_28060,inst_28061);
var state_28109__$1 = state_28109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28109__$1,(21),inst_28062);
} else {
if((state_val_28110 === (37))){
var inst_28092 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
var statearr_28149_28192 = state_28109__$1;
(statearr_28149_28192[(2)] = inst_28092);

(statearr_28149_28192[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28110 === (8))){
var inst_28035 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28109__$1 = state_28109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28109__$1,(11),inst_28035);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19399__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19334__auto__,c__19399__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto____0 = (function (){
var statearr_28153 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28153[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto__);

(statearr_28153[(1)] = (1));

return statearr_28153;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto____1 = (function (state_28109){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_28109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e28154){if((e28154 instanceof Object)){
var ex__19338__auto__ = e28154;
var statearr_28155_28193 = state_28109;
(statearr_28155_28193[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28194 = state_28109;
state_28109 = G__28194;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto__ = function(state_28109){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto____1.call(this,state_28109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__,msg_hist,msg_names,msg))
})();
var state__19401__auto__ = (function (){var statearr_28156 = f__19400__auto__.call(null);
(statearr_28156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_28156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__,msg_hist,msg_names,msg))
);

return c__19399__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19399__auto___28257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___28257,ch){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___28257,ch){
return (function (state_28240){
var state_val_28241 = (state_28240[(1)]);
if((state_val_28241 === (1))){
var state_28240__$1 = state_28240;
var statearr_28242_28258 = state_28240__$1;
(statearr_28242_28258[(2)] = null);

(statearr_28242_28258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (2))){
var state_28240__$1 = state_28240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28240__$1,(4),ch);
} else {
if((state_val_28241 === (3))){
var inst_28238 = (state_28240[(2)]);
var state_28240__$1 = state_28240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28240__$1,inst_28238);
} else {
if((state_val_28241 === (4))){
var inst_28228 = (state_28240[(7)]);
var inst_28228__$1 = (state_28240[(2)]);
var state_28240__$1 = (function (){var statearr_28243 = state_28240;
(statearr_28243[(7)] = inst_28228__$1);

return statearr_28243;
})();
if(cljs.core.truth_(inst_28228__$1)){
var statearr_28244_28259 = state_28240__$1;
(statearr_28244_28259[(1)] = (5));

} else {
var statearr_28245_28260 = state_28240__$1;
(statearr_28245_28260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (5))){
var inst_28228 = (state_28240[(7)]);
var inst_28230 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28228);
var state_28240__$1 = state_28240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28240__$1,(8),inst_28230);
} else {
if((state_val_28241 === (6))){
var state_28240__$1 = state_28240;
var statearr_28246_28261 = state_28240__$1;
(statearr_28246_28261[(2)] = null);

(statearr_28246_28261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (7))){
var inst_28236 = (state_28240[(2)]);
var state_28240__$1 = state_28240;
var statearr_28247_28262 = state_28240__$1;
(statearr_28247_28262[(2)] = inst_28236);

(statearr_28247_28262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (8))){
var inst_28232 = (state_28240[(2)]);
var state_28240__$1 = (function (){var statearr_28248 = state_28240;
(statearr_28248[(8)] = inst_28232);

return statearr_28248;
})();
var statearr_28249_28263 = state_28240__$1;
(statearr_28249_28263[(2)] = null);

(statearr_28249_28263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19399__auto___28257,ch))
;
return ((function (switch__19334__auto__,c__19399__auto___28257,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19335__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19335__auto____0 = (function (){
var statearr_28253 = [null,null,null,null,null,null,null,null,null];
(statearr_28253[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19335__auto__);

(statearr_28253[(1)] = (1));

return statearr_28253;
});
var figwheel$client$heads_up_plugin_$_state_machine__19335__auto____1 = (function (state_28240){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_28240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e28254){if((e28254 instanceof Object)){
var ex__19338__auto__ = e28254;
var statearr_28255_28264 = state_28240;
(statearr_28255_28264[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28265 = state_28240;
state_28240 = G__28265;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19335__auto__ = function(state_28240){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19335__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19335__auto____1.call(this,state_28240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19335__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19335__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___28257,ch))
})();
var state__19401__auto__ = (function (){var statearr_28256 = f__19400__auto__.call(null);
(statearr_28256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___28257);

return statearr_28256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___28257,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__){
return (function (state_28286){
var state_val_28287 = (state_28286[(1)]);
if((state_val_28287 === (1))){
var inst_28281 = cljs.core.async.timeout.call(null,(3000));
var state_28286__$1 = state_28286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28286__$1,(2),inst_28281);
} else {
if((state_val_28287 === (2))){
var inst_28283 = (state_28286[(2)]);
var inst_28284 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28286__$1 = (function (){var statearr_28288 = state_28286;
(statearr_28288[(7)] = inst_28283);

return statearr_28288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28286__$1,inst_28284);
} else {
return null;
}
}
});})(c__19399__auto__))
;
return ((function (switch__19334__auto__,c__19399__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19335__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19335__auto____0 = (function (){
var statearr_28292 = [null,null,null,null,null,null,null,null];
(statearr_28292[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19335__auto__);

(statearr_28292[(1)] = (1));

return statearr_28292;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19335__auto____1 = (function (state_28286){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_28286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e28293){if((e28293 instanceof Object)){
var ex__19338__auto__ = e28293;
var statearr_28294_28296 = state_28286;
(statearr_28294_28296[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28297 = state_28286;
state_28286 = G__28297;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19335__auto__ = function(state_28286){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19335__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19335__auto____1.call(this,state_28286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19335__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19335__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__))
})();
var state__19401__auto__ = (function (){var statearr_28295 = f__19400__auto__.call(null);
(statearr_28295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_28295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__))
);

return c__19399__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28298){
var map__28305 = p__28298;
var map__28305__$1 = ((((!((map__28305 == null)))?((((map__28305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28305):map__28305);
var ed = map__28305__$1;
var formatted_exception = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28307_28311 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28308_28312 = null;
var count__28309_28313 = (0);
var i__28310_28314 = (0);
while(true){
if((i__28310_28314 < count__28309_28313)){
var msg_28315 = cljs.core._nth.call(null,chunk__28308_28312,i__28310_28314);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28315);

var G__28316 = seq__28307_28311;
var G__28317 = chunk__28308_28312;
var G__28318 = count__28309_28313;
var G__28319 = (i__28310_28314 + (1));
seq__28307_28311 = G__28316;
chunk__28308_28312 = G__28317;
count__28309_28313 = G__28318;
i__28310_28314 = G__28319;
continue;
} else {
var temp__4425__auto___28320 = cljs.core.seq.call(null,seq__28307_28311);
if(temp__4425__auto___28320){
var seq__28307_28321__$1 = temp__4425__auto___28320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28307_28321__$1)){
var c__17121__auto___28322 = cljs.core.chunk_first.call(null,seq__28307_28321__$1);
var G__28323 = cljs.core.chunk_rest.call(null,seq__28307_28321__$1);
var G__28324 = c__17121__auto___28322;
var G__28325 = cljs.core.count.call(null,c__17121__auto___28322);
var G__28326 = (0);
seq__28307_28311 = G__28323;
chunk__28308_28312 = G__28324;
count__28309_28313 = G__28325;
i__28310_28314 = G__28326;
continue;
} else {
var msg_28327 = cljs.core.first.call(null,seq__28307_28321__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28327);

var G__28328 = cljs.core.next.call(null,seq__28307_28321__$1);
var G__28329 = null;
var G__28330 = (0);
var G__28331 = (0);
seq__28307_28311 = G__28328;
chunk__28308_28312 = G__28329;
count__28309_28313 = G__28330;
i__28310_28314 = G__28331;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28332){
var map__28335 = p__28332;
var map__28335__$1 = ((((!((map__28335 == null)))?((((map__28335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28335):map__28335);
var w = map__28335__$1;
var message = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16306__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16306__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16306__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28343 = cljs.core.seq.call(null,plugins);
var chunk__28344 = null;
var count__28345 = (0);
var i__28346 = (0);
while(true){
if((i__28346 < count__28345)){
var vec__28347 = cljs.core._nth.call(null,chunk__28344,i__28346);
var k = cljs.core.nth.call(null,vec__28347,(0),null);
var plugin = cljs.core.nth.call(null,vec__28347,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28349 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28343,chunk__28344,count__28345,i__28346,pl_28349,vec__28347,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28349.call(null,msg_hist);
});})(seq__28343,chunk__28344,count__28345,i__28346,pl_28349,vec__28347,k,plugin))
);
} else {
}

var G__28350 = seq__28343;
var G__28351 = chunk__28344;
var G__28352 = count__28345;
var G__28353 = (i__28346 + (1));
seq__28343 = G__28350;
chunk__28344 = G__28351;
count__28345 = G__28352;
i__28346 = G__28353;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28343);
if(temp__4425__auto__){
var seq__28343__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28343__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__28343__$1);
var G__28354 = cljs.core.chunk_rest.call(null,seq__28343__$1);
var G__28355 = c__17121__auto__;
var G__28356 = cljs.core.count.call(null,c__17121__auto__);
var G__28357 = (0);
seq__28343 = G__28354;
chunk__28344 = G__28355;
count__28345 = G__28356;
i__28346 = G__28357;
continue;
} else {
var vec__28348 = cljs.core.first.call(null,seq__28343__$1);
var k = cljs.core.nth.call(null,vec__28348,(0),null);
var plugin = cljs.core.nth.call(null,vec__28348,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28358 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28343,chunk__28344,count__28345,i__28346,pl_28358,vec__28348,k,plugin,seq__28343__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28358.call(null,msg_hist);
});})(seq__28343,chunk__28344,count__28345,i__28346,pl_28358,vec__28348,k,plugin,seq__28343__$1,temp__4425__auto__))
);
} else {
}

var G__28359 = cljs.core.next.call(null,seq__28343__$1);
var G__28360 = null;
var G__28361 = (0);
var G__28362 = (0);
seq__28343 = G__28359;
chunk__28344 = G__28360;
count__28345 = G__28361;
i__28346 = G__28362;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28363 = [];
var len__17376__auto___28366 = arguments.length;
var i__17377__auto___28367 = (0);
while(true){
if((i__17377__auto___28367 < len__17376__auto___28366)){
args28363.push((arguments[i__17377__auto___28367]));

var G__28368 = (i__17377__auto___28367 + (1));
i__17377__auto___28367 = G__28368;
continue;
} else {
}
break;
}

var G__28365 = args28363.length;
switch (G__28365) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28363.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17383__auto__ = [];
var len__17376__auto___28374 = arguments.length;
var i__17377__auto___28375 = (0);
while(true){
if((i__17377__auto___28375 < len__17376__auto___28374)){
args__17383__auto__.push((arguments[i__17377__auto___28375]));

var G__28376 = (i__17377__auto___28375 + (1));
i__17377__auto___28375 = G__28376;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((0) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17384__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28371){
var map__28372 = p__28371;
var map__28372__$1 = ((((!((map__28372 == null)))?((((map__28372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28372):map__28372);
var opts = map__28372__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28370){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28370));
});

//# sourceMappingURL=client.js.map?rel=1446416618394