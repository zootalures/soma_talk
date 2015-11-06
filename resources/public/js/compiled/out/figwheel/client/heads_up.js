// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17383__auto__ = [];
var len__17376__auto___28399 = arguments.length;
var i__17377__auto___28400 = (0);
while(true){
if((i__17377__auto___28400 < len__17376__auto___28399)){
args__17383__auto__.push((arguments[i__17377__auto___28400]));

var G__28401 = (i__17377__auto___28400 + (1));
i__17377__auto___28400 = G__28401;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((2) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17384__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28391_28402 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28392_28403 = null;
var count__28393_28404 = (0);
var i__28394_28405 = (0);
while(true){
if((i__28394_28405 < count__28393_28404)){
var k_28406 = cljs.core._nth.call(null,chunk__28392_28403,i__28394_28405);
e.setAttribute(cljs.core.name.call(null,k_28406),cljs.core.get.call(null,attrs,k_28406));

var G__28407 = seq__28391_28402;
var G__28408 = chunk__28392_28403;
var G__28409 = count__28393_28404;
var G__28410 = (i__28394_28405 + (1));
seq__28391_28402 = G__28407;
chunk__28392_28403 = G__28408;
count__28393_28404 = G__28409;
i__28394_28405 = G__28410;
continue;
} else {
var temp__4425__auto___28411 = cljs.core.seq.call(null,seq__28391_28402);
if(temp__4425__auto___28411){
var seq__28391_28412__$1 = temp__4425__auto___28411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28391_28412__$1)){
var c__17121__auto___28413 = cljs.core.chunk_first.call(null,seq__28391_28412__$1);
var G__28414 = cljs.core.chunk_rest.call(null,seq__28391_28412__$1);
var G__28415 = c__17121__auto___28413;
var G__28416 = cljs.core.count.call(null,c__17121__auto___28413);
var G__28417 = (0);
seq__28391_28402 = G__28414;
chunk__28392_28403 = G__28415;
count__28393_28404 = G__28416;
i__28394_28405 = G__28417;
continue;
} else {
var k_28418 = cljs.core.first.call(null,seq__28391_28412__$1);
e.setAttribute(cljs.core.name.call(null,k_28418),cljs.core.get.call(null,attrs,k_28418));

var G__28419 = cljs.core.next.call(null,seq__28391_28412__$1);
var G__28420 = null;
var G__28421 = (0);
var G__28422 = (0);
seq__28391_28402 = G__28419;
chunk__28392_28403 = G__28420;
count__28393_28404 = G__28421;
i__28394_28405 = G__28422;
continue;
}
} else {
}
}
break;
}

var seq__28395_28423 = cljs.core.seq.call(null,children);
var chunk__28396_28424 = null;
var count__28397_28425 = (0);
var i__28398_28426 = (0);
while(true){
if((i__28398_28426 < count__28397_28425)){
var ch_28427 = cljs.core._nth.call(null,chunk__28396_28424,i__28398_28426);
e.appendChild(ch_28427);

var G__28428 = seq__28395_28423;
var G__28429 = chunk__28396_28424;
var G__28430 = count__28397_28425;
var G__28431 = (i__28398_28426 + (1));
seq__28395_28423 = G__28428;
chunk__28396_28424 = G__28429;
count__28397_28425 = G__28430;
i__28398_28426 = G__28431;
continue;
} else {
var temp__4425__auto___28432 = cljs.core.seq.call(null,seq__28395_28423);
if(temp__4425__auto___28432){
var seq__28395_28433__$1 = temp__4425__auto___28432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28395_28433__$1)){
var c__17121__auto___28434 = cljs.core.chunk_first.call(null,seq__28395_28433__$1);
var G__28435 = cljs.core.chunk_rest.call(null,seq__28395_28433__$1);
var G__28436 = c__17121__auto___28434;
var G__28437 = cljs.core.count.call(null,c__17121__auto___28434);
var G__28438 = (0);
seq__28395_28423 = G__28435;
chunk__28396_28424 = G__28436;
count__28397_28425 = G__28437;
i__28398_28426 = G__28438;
continue;
} else {
var ch_28439 = cljs.core.first.call(null,seq__28395_28433__$1);
e.appendChild(ch_28439);

var G__28440 = cljs.core.next.call(null,seq__28395_28433__$1);
var G__28441 = null;
var G__28442 = (0);
var G__28443 = (0);
seq__28395_28423 = G__28440;
chunk__28396_28424 = G__28441;
count__28397_28425 = G__28442;
i__28398_28426 = G__28443;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28388){
var G__28389 = cljs.core.first.call(null,seq28388);
var seq28388__$1 = cljs.core.next.call(null,seq28388);
var G__28390 = cljs.core.first.call(null,seq28388__$1);
var seq28388__$2 = cljs.core.next.call(null,seq28388__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28389,G__28390,seq28388__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17231__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17232__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17233__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17234__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17235__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17231__auto__,prefer_table__17232__auto__,method_cache__17233__auto__,cached_hierarchy__17234__auto__,hierarchy__17235__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17231__auto__,prefer_table__17232__auto__,method_cache__17233__auto__,cached_hierarchy__17234__auto__,hierarchy__17235__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17235__auto__,method_table__17231__auto__,prefer_table__17232__auto__,method_cache__17233__auto__,cached_hierarchy__17234__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28444 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28444.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28444.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28444.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28444);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28445,st_map){
var map__28450 = p__28445;
var map__28450__$1 = ((((!((map__28450 == null)))?((((map__28450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28450):map__28450);
var container_el = cljs.core.get.call(null,map__28450__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28450,map__28450__$1,container_el){
return (function (p__28452){
var vec__28453 = p__28452;
var k = cljs.core.nth.call(null,vec__28453,(0),null);
var v = cljs.core.nth.call(null,vec__28453,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28450,map__28450__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28454,dom_str){
var map__28457 = p__28454;
var map__28457__$1 = ((((!((map__28457 == null)))?((((map__28457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28457):map__28457);
var c = map__28457__$1;
var content_area_el = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28459){
var map__28462 = p__28459;
var map__28462__$1 = ((((!((map__28462 == null)))?((((map__28462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28462):map__28462);
var content_area_el = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__){
return (function (state_28505){
var state_val_28506 = (state_28505[(1)]);
if((state_val_28506 === (1))){
var inst_28490 = (state_28505[(7)]);
var inst_28490__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28491 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28492 = ["10px","10px","100%","68px","1.0"];
var inst_28493 = cljs.core.PersistentHashMap.fromArrays(inst_28491,inst_28492);
var inst_28494 = cljs.core.merge.call(null,inst_28493,style);
var inst_28495 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28490__$1,inst_28494);
var inst_28496 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28490__$1,msg);
var inst_28497 = cljs.core.async.timeout.call(null,(300));
var state_28505__$1 = (function (){var statearr_28507 = state_28505;
(statearr_28507[(7)] = inst_28490__$1);

(statearr_28507[(8)] = inst_28495);

(statearr_28507[(9)] = inst_28496);

return statearr_28507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28505__$1,(2),inst_28497);
} else {
if((state_val_28506 === (2))){
var inst_28490 = (state_28505[(7)]);
var inst_28499 = (state_28505[(2)]);
var inst_28500 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28501 = ["auto"];
var inst_28502 = cljs.core.PersistentHashMap.fromArrays(inst_28500,inst_28501);
var inst_28503 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28490,inst_28502);
var state_28505__$1 = (function (){var statearr_28508 = state_28505;
(statearr_28508[(10)] = inst_28499);

return statearr_28508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28505__$1,inst_28503);
} else {
return null;
}
}
});})(c__19399__auto__))
;
return ((function (switch__19334__auto__,c__19399__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto____0 = (function (){
var statearr_28512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28512[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto__);

(statearr_28512[(1)] = (1));

return statearr_28512;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto____1 = (function (state_28505){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_28505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e28513){if((e28513 instanceof Object)){
var ex__19338__auto__ = e28513;
var statearr_28514_28516 = state_28505;
(statearr_28514_28516[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28517 = state_28505;
state_28505 = G__28517;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto__ = function(state_28505){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto____1.call(this,state_28505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__))
})();
var state__19401__auto__ = (function (){var statearr_28515 = f__19400__auto__.call(null);
(statearr_28515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_28515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__))
);

return c__19399__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28519 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28519,(0),null);
var ln = cljs.core.nth.call(null,vec__28519,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28522 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28522,(0),null);
var file_line = cljs.core.nth.call(null,vec__28522,(1),null);
var file_column = cljs.core.nth.call(null,vec__28522,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28522,file_name,file_line,file_column){
return (function (p1__28520_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28520_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28522,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16318__auto__ = file_line;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
var and__16306__auto__ = cause;
if(cljs.core.truth_(and__16306__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16306__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28525 = figwheel.client.heads_up.ensure_container.call(null);
var map__28525__$1 = ((((!((map__28525 == null)))?((((map__28525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28525):map__28525);
var content_area_el = cljs.core.get.call(null,map__28525__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__){
return (function (state_28573){
var state_val_28574 = (state_28573[(1)]);
if((state_val_28574 === (1))){
var inst_28556 = (state_28573[(7)]);
var inst_28556__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28557 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28558 = ["0.0"];
var inst_28559 = cljs.core.PersistentHashMap.fromArrays(inst_28557,inst_28558);
var inst_28560 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28556__$1,inst_28559);
var inst_28561 = cljs.core.async.timeout.call(null,(300));
var state_28573__$1 = (function (){var statearr_28575 = state_28573;
(statearr_28575[(8)] = inst_28560);

(statearr_28575[(7)] = inst_28556__$1);

return statearr_28575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28573__$1,(2),inst_28561);
} else {
if((state_val_28574 === (2))){
var inst_28556 = (state_28573[(7)]);
var inst_28563 = (state_28573[(2)]);
var inst_28564 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28565 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28566 = cljs.core.PersistentHashMap.fromArrays(inst_28564,inst_28565);
var inst_28567 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28556,inst_28566);
var inst_28568 = cljs.core.async.timeout.call(null,(200));
var state_28573__$1 = (function (){var statearr_28576 = state_28573;
(statearr_28576[(9)] = inst_28563);

(statearr_28576[(10)] = inst_28567);

return statearr_28576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28573__$1,(3),inst_28568);
} else {
if((state_val_28574 === (3))){
var inst_28556 = (state_28573[(7)]);
var inst_28570 = (state_28573[(2)]);
var inst_28571 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28556,"");
var state_28573__$1 = (function (){var statearr_28577 = state_28573;
(statearr_28577[(11)] = inst_28570);

return statearr_28577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28573__$1,inst_28571);
} else {
return null;
}
}
}
});})(c__19399__auto__))
;
return ((function (switch__19334__auto__,c__19399__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19335__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19335__auto____0 = (function (){
var statearr_28581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28581[(0)] = figwheel$client$heads_up$clear_$_state_machine__19335__auto__);

(statearr_28581[(1)] = (1));

return statearr_28581;
});
var figwheel$client$heads_up$clear_$_state_machine__19335__auto____1 = (function (state_28573){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_28573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e28582){if((e28582 instanceof Object)){
var ex__19338__auto__ = e28582;
var statearr_28583_28585 = state_28573;
(statearr_28583_28585[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28586 = state_28573;
state_28573 = G__28586;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19335__auto__ = function(state_28573){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19335__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19335__auto____1.call(this,state_28573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19335__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19335__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__))
})();
var state__19401__auto__ = (function (){var statearr_28584 = f__19400__auto__.call(null);
(statearr_28584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_28584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__))
);

return c__19399__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__){
return (function (state_28618){
var state_val_28619 = (state_28618[(1)]);
if((state_val_28619 === (1))){
var inst_28608 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28618__$1 = state_28618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28618__$1,(2),inst_28608);
} else {
if((state_val_28619 === (2))){
var inst_28610 = (state_28618[(2)]);
var inst_28611 = cljs.core.async.timeout.call(null,(400));
var state_28618__$1 = (function (){var statearr_28620 = state_28618;
(statearr_28620[(7)] = inst_28610);

return statearr_28620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28618__$1,(3),inst_28611);
} else {
if((state_val_28619 === (3))){
var inst_28613 = (state_28618[(2)]);
var inst_28614 = figwheel.client.heads_up.clear.call(null);
var state_28618__$1 = (function (){var statearr_28621 = state_28618;
(statearr_28621[(8)] = inst_28613);

return statearr_28621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28618__$1,(4),inst_28614);
} else {
if((state_val_28619 === (4))){
var inst_28616 = (state_28618[(2)]);
var state_28618__$1 = state_28618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28618__$1,inst_28616);
} else {
return null;
}
}
}
}
});})(c__19399__auto__))
;
return ((function (switch__19334__auto__,c__19399__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto____0 = (function (){
var statearr_28625 = [null,null,null,null,null,null,null,null,null];
(statearr_28625[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto__);

(statearr_28625[(1)] = (1));

return statearr_28625;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto____1 = (function (state_28618){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_28618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e28626){if((e28626 instanceof Object)){
var ex__19338__auto__ = e28626;
var statearr_28627_28629 = state_28618;
(statearr_28627_28629[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28630 = state_28618;
state_28618 = G__28630;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto__ = function(state_28618){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto____1.call(this,state_28618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__))
})();
var state__19401__auto__ = (function (){var statearr_28628 = f__19400__auto__.call(null);
(statearr_28628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_28628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__))
);

return c__19399__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1446416618615