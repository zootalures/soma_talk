// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28647_28661 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28648_28662 = null;
var count__28649_28663 = (0);
var i__28650_28664 = (0);
while(true){
if((i__28650_28664 < count__28649_28663)){
var f_28665 = cljs.core._nth.call(null,chunk__28648_28662,i__28650_28664);
cljs.core.println.call(null,"  ",f_28665);

var G__28666 = seq__28647_28661;
var G__28667 = chunk__28648_28662;
var G__28668 = count__28649_28663;
var G__28669 = (i__28650_28664 + (1));
seq__28647_28661 = G__28666;
chunk__28648_28662 = G__28667;
count__28649_28663 = G__28668;
i__28650_28664 = G__28669;
continue;
} else {
var temp__4425__auto___28670 = cljs.core.seq.call(null,seq__28647_28661);
if(temp__4425__auto___28670){
var seq__28647_28671__$1 = temp__4425__auto___28670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28647_28671__$1)){
var c__17121__auto___28672 = cljs.core.chunk_first.call(null,seq__28647_28671__$1);
var G__28673 = cljs.core.chunk_rest.call(null,seq__28647_28671__$1);
var G__28674 = c__17121__auto___28672;
var G__28675 = cljs.core.count.call(null,c__17121__auto___28672);
var G__28676 = (0);
seq__28647_28661 = G__28673;
chunk__28648_28662 = G__28674;
count__28649_28663 = G__28675;
i__28650_28664 = G__28676;
continue;
} else {
var f_28677 = cljs.core.first.call(null,seq__28647_28671__$1);
cljs.core.println.call(null,"  ",f_28677);

var G__28678 = cljs.core.next.call(null,seq__28647_28671__$1);
var G__28679 = null;
var G__28680 = (0);
var G__28681 = (0);
seq__28647_28661 = G__28678;
chunk__28648_28662 = G__28679;
count__28649_28663 = G__28680;
i__28650_28664 = G__28681;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28682 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16318__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28682);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28682)))?cljs.core.second.call(null,arglists_28682):arglists_28682));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28651 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28652 = null;
var count__28653 = (0);
var i__28654 = (0);
while(true){
if((i__28654 < count__28653)){
var vec__28655 = cljs.core._nth.call(null,chunk__28652,i__28654);
var name = cljs.core.nth.call(null,vec__28655,(0),null);
var map__28656 = cljs.core.nth.call(null,vec__28655,(1),null);
var map__28656__$1 = ((((!((map__28656 == null)))?((((map__28656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28656):map__28656);
var doc = cljs.core.get.call(null,map__28656__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28656__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28683 = seq__28651;
var G__28684 = chunk__28652;
var G__28685 = count__28653;
var G__28686 = (i__28654 + (1));
seq__28651 = G__28683;
chunk__28652 = G__28684;
count__28653 = G__28685;
i__28654 = G__28686;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28651);
if(temp__4425__auto__){
var seq__28651__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28651__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__28651__$1);
var G__28687 = cljs.core.chunk_rest.call(null,seq__28651__$1);
var G__28688 = c__17121__auto__;
var G__28689 = cljs.core.count.call(null,c__17121__auto__);
var G__28690 = (0);
seq__28651 = G__28687;
chunk__28652 = G__28688;
count__28653 = G__28689;
i__28654 = G__28690;
continue;
} else {
var vec__28658 = cljs.core.first.call(null,seq__28651__$1);
var name = cljs.core.nth.call(null,vec__28658,(0),null);
var map__28659 = cljs.core.nth.call(null,vec__28658,(1),null);
var map__28659__$1 = ((((!((map__28659 == null)))?((((map__28659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28659):map__28659);
var doc = cljs.core.get.call(null,map__28659__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28659__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28691 = cljs.core.next.call(null,seq__28651__$1);
var G__28692 = null;
var G__28693 = (0);
var G__28694 = (0);
seq__28651 = G__28691;
chunk__28652 = G__28692;
count__28653 = G__28693;
i__28654 = G__28694;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1446416618661