// Compiled by ClojureScript 1.7.122 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__24619_24623 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__24620_24624 = null;
var count__24621_24625 = (0);
var i__24622_24626 = (0);
while(true){
if((i__24622_24626 < count__24621_24625)){
var k_24627 = cljs.core._nth.call(null,chunk__24620_24624,i__24622_24626);
var v_24628 = (b[k_24627]);
(a[k_24627] = v_24628);

var G__24629 = seq__24619_24623;
var G__24630 = chunk__24620_24624;
var G__24631 = count__24621_24625;
var G__24632 = (i__24622_24626 + (1));
seq__24619_24623 = G__24629;
chunk__24620_24624 = G__24630;
count__24621_24625 = G__24631;
i__24622_24626 = G__24632;
continue;
} else {
var temp__4425__auto___24633 = cljs.core.seq.call(null,seq__24619_24623);
if(temp__4425__auto___24633){
var seq__24619_24634__$1 = temp__4425__auto___24633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24619_24634__$1)){
var c__17121__auto___24635 = cljs.core.chunk_first.call(null,seq__24619_24634__$1);
var G__24636 = cljs.core.chunk_rest.call(null,seq__24619_24634__$1);
var G__24637 = c__17121__auto___24635;
var G__24638 = cljs.core.count.call(null,c__17121__auto___24635);
var G__24639 = (0);
seq__24619_24623 = G__24636;
chunk__24620_24624 = G__24637;
count__24621_24625 = G__24638;
i__24622_24626 = G__24639;
continue;
} else {
var k_24640 = cljs.core.first.call(null,seq__24619_24634__$1);
var v_24641 = (b[k_24640]);
(a[k_24640] = v_24641);

var G__24642 = cljs.core.next.call(null,seq__24619_24634__$1);
var G__24643 = null;
var G__24644 = (0);
var G__24645 = (0);
seq__24619_24623 = G__24642;
chunk__24620_24624 = G__24643;
count__24621_24625 = G__24644;
i__24622_24626 = G__24645;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args24646 = [];
var len__17376__auto___24649 = arguments.length;
var i__17377__auto___24650 = (0);
while(true){
if((i__17377__auto___24650 < len__17376__auto___24649)){
args24646.push((arguments[i__17377__auto___24650]));

var G__24651 = (i__17377__auto___24650 + (1));
i__17377__auto___24650 = G__24651;
continue;
} else {
}
break;
}

var G__24648 = args24646.length;
switch (G__24648) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24646.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__24653 = (i + (2));
var G__24654 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__24653;
ret = G__24654;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24655_24659 = cljs.core.seq.call(null,v);
var chunk__24656_24660 = null;
var count__24657_24661 = (0);
var i__24658_24662 = (0);
while(true){
if((i__24658_24662 < count__24657_24661)){
var x_24663 = cljs.core._nth.call(null,chunk__24656_24660,i__24658_24662);
ret.push(x_24663);

var G__24664 = seq__24655_24659;
var G__24665 = chunk__24656_24660;
var G__24666 = count__24657_24661;
var G__24667 = (i__24658_24662 + (1));
seq__24655_24659 = G__24664;
chunk__24656_24660 = G__24665;
count__24657_24661 = G__24666;
i__24658_24662 = G__24667;
continue;
} else {
var temp__4425__auto___24668 = cljs.core.seq.call(null,seq__24655_24659);
if(temp__4425__auto___24668){
var seq__24655_24669__$1 = temp__4425__auto___24668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24655_24669__$1)){
var c__17121__auto___24670 = cljs.core.chunk_first.call(null,seq__24655_24669__$1);
var G__24671 = cljs.core.chunk_rest.call(null,seq__24655_24669__$1);
var G__24672 = c__17121__auto___24670;
var G__24673 = cljs.core.count.call(null,c__17121__auto___24670);
var G__24674 = (0);
seq__24655_24659 = G__24671;
chunk__24656_24660 = G__24672;
count__24657_24661 = G__24673;
i__24658_24662 = G__24674;
continue;
} else {
var x_24675 = cljs.core.first.call(null,seq__24655_24669__$1);
ret.push(x_24675);

var G__24676 = cljs.core.next.call(null,seq__24655_24669__$1);
var G__24677 = null;
var G__24678 = (0);
var G__24679 = (0);
seq__24655_24659 = G__24676;
chunk__24656_24660 = G__24677;
count__24657_24661 = G__24678;
i__24658_24662 = G__24679;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24680_24684 = cljs.core.seq.call(null,v);
var chunk__24681_24685 = null;
var count__24682_24686 = (0);
var i__24683_24687 = (0);
while(true){
if((i__24683_24687 < count__24682_24686)){
var x_24688 = cljs.core._nth.call(null,chunk__24681_24685,i__24683_24687);
ret.push(x_24688);

var G__24689 = seq__24680_24684;
var G__24690 = chunk__24681_24685;
var G__24691 = count__24682_24686;
var G__24692 = (i__24683_24687 + (1));
seq__24680_24684 = G__24689;
chunk__24681_24685 = G__24690;
count__24682_24686 = G__24691;
i__24683_24687 = G__24692;
continue;
} else {
var temp__4425__auto___24693 = cljs.core.seq.call(null,seq__24680_24684);
if(temp__4425__auto___24693){
var seq__24680_24694__$1 = temp__4425__auto___24693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24680_24694__$1)){
var c__17121__auto___24695 = cljs.core.chunk_first.call(null,seq__24680_24694__$1);
var G__24696 = cljs.core.chunk_rest.call(null,seq__24680_24694__$1);
var G__24697 = c__17121__auto___24695;
var G__24698 = cljs.core.count.call(null,c__17121__auto___24695);
var G__24699 = (0);
seq__24680_24684 = G__24696;
chunk__24681_24685 = G__24697;
count__24682_24686 = G__24698;
i__24683_24687 = G__24699;
continue;
} else {
var x_24700 = cljs.core.first.call(null,seq__24680_24694__$1);
ret.push(x_24700);

var G__24701 = cljs.core.next.call(null,seq__24680_24694__$1);
var G__24702 = null;
var G__24703 = (0);
var G__24704 = (0);
seq__24680_24684 = G__24701;
chunk__24681_24685 = G__24702;
count__24682_24686 = G__24703;
i__24683_24687 = G__24704;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24705_24709 = cljs.core.seq.call(null,v);
var chunk__24706_24710 = null;
var count__24707_24711 = (0);
var i__24708_24712 = (0);
while(true){
if((i__24708_24712 < count__24707_24711)){
var x_24713 = cljs.core._nth.call(null,chunk__24706_24710,i__24708_24712);
ret.push(x_24713);

var G__24714 = seq__24705_24709;
var G__24715 = chunk__24706_24710;
var G__24716 = count__24707_24711;
var G__24717 = (i__24708_24712 + (1));
seq__24705_24709 = G__24714;
chunk__24706_24710 = G__24715;
count__24707_24711 = G__24716;
i__24708_24712 = G__24717;
continue;
} else {
var temp__4425__auto___24718 = cljs.core.seq.call(null,seq__24705_24709);
if(temp__4425__auto___24718){
var seq__24705_24719__$1 = temp__4425__auto___24718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24705_24719__$1)){
var c__17121__auto___24720 = cljs.core.chunk_first.call(null,seq__24705_24719__$1);
var G__24721 = cljs.core.chunk_rest.call(null,seq__24705_24719__$1);
var G__24722 = c__17121__auto___24720;
var G__24723 = cljs.core.count.call(null,c__17121__auto___24720);
var G__24724 = (0);
seq__24705_24709 = G__24721;
chunk__24706_24710 = G__24722;
count__24707_24711 = G__24723;
i__24708_24712 = G__24724;
continue;
} else {
var x_24725 = cljs.core.first.call(null,seq__24705_24719__$1);
ret.push(x_24725);

var G__24726 = cljs.core.next.call(null,seq__24705_24719__$1);
var G__24727 = null;
var G__24728 = (0);
var G__24729 = (0);
seq__24705_24709 = G__24726;
chunk__24706_24710 = G__24727;
count__24707_24711 = G__24728;
i__24708_24712 = G__24729;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a JavaScript
 * array of interleaved type constructors and handler instances for those 
 * type constructors.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args24730 = [];
var len__17376__auto___24741 = arguments.length;
var i__17377__auto___24742 = (0);
while(true){
if((i__17377__auto___24742 < len__17376__auto___24741)){
args24730.push((arguments[i__17377__auto___24742]));

var G__24743 = (i__17377__auto___24742 + (1));
i__17377__auto___24742 = G__24743;
continue;
} else {
}
break;
}

var G__24732 = args24730.length;
switch (G__24732) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24730.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__24733 = obj;
G__24733.push(kfn.call(null,k),vfn.call(null,v));

return G__24733;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x24734 = cljs.core.clone.call(null,handlers);
x24734.forEach = ((function (x24734,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__24735 = cljs.core.seq.call(null,coll);
var chunk__24736 = null;
var count__24737 = (0);
var i__24738 = (0);
while(true){
if((i__24738 < count__24737)){
var vec__24739 = cljs.core._nth.call(null,chunk__24736,i__24738);
var k = cljs.core.nth.call(null,vec__24739,(0),null);
var v = cljs.core.nth.call(null,vec__24739,(1),null);
f.call(null,v,k);

var G__24745 = seq__24735;
var G__24746 = chunk__24736;
var G__24747 = count__24737;
var G__24748 = (i__24738 + (1));
seq__24735 = G__24745;
chunk__24736 = G__24746;
count__24737 = G__24747;
i__24738 = G__24748;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24735);
if(temp__4425__auto__){
var seq__24735__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24735__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__24735__$1);
var G__24749 = cljs.core.chunk_rest.call(null,seq__24735__$1);
var G__24750 = c__17121__auto__;
var G__24751 = cljs.core.count.call(null,c__17121__auto__);
var G__24752 = (0);
seq__24735 = G__24749;
chunk__24736 = G__24750;
count__24737 = G__24751;
i__24738 = G__24752;
continue;
} else {
var vec__24740 = cljs.core.first.call(null,seq__24735__$1);
var k = cljs.core.nth.call(null,vec__24740,(0),null);
var v = cljs.core.nth.call(null,vec__24740,(1),null);
f.call(null,v,k);

var G__24753 = cljs.core.next.call(null,seq__24735__$1);
var G__24754 = null;
var G__24755 = (0);
var G__24756 = (0);
seq__24735 = G__24753;
chunk__24736 = G__24754;
count__24737 = G__24755;
i__24738 = G__24756;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24734,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x24734;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args24757 = [];
var len__17376__auto___24763 = arguments.length;
var i__17377__auto___24764 = (0);
while(true){
if((i__17377__auto___24764 < len__17376__auto___24763)){
args24757.push((arguments[i__17377__auto___24764]));

var G__24765 = (i__17377__auto___24764 + (1));
i__17377__auto___24764 = G__24765;
continue;
} else {
}
break;
}

var G__24759 = args24757.length;
switch (G__24759) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24757.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit24760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit24760 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta24761){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta24761 = meta24761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit24760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24762,meta24761__$1){
var self__ = this;
var _24762__$1 = this;
return (new cognitect.transit.t_cognitect$transit24760(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta24761__$1));
});

cognitect.transit.t_cognitect$transit24760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24762){
var self__ = this;
var _24762__$1 = this;
return self__.meta24761;
});

cognitect.transit.t_cognitect$transit24760.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24760.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24760.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24760.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta24761","meta24761",-136724884,null)], null);
});

cognitect.transit.t_cognitect$transit24760.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit24760.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit24760";

cognitect.transit.t_cognitect$transit24760.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cognitect.transit/t_cognitect$transit24760");
});

cognitect.transit.__GT_t_cognitect$transit24760 = (function cognitect$transit$__GT_t_cognitect$transit24760(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24761){
return (new cognitect.transit.t_cognitect$transit24760(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24761));
});

}

return (new cognitect.transit.t_cognitect$transit24760(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1446416614194