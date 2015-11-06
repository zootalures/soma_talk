// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16318__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16318__auto__){
return or__16318__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16318__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28699_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28699_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28704 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28705 = null;
var count__28706 = (0);
var i__28707 = (0);
while(true){
if((i__28707 < count__28706)){
var n = cljs.core._nth.call(null,chunk__28705,i__28707);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28708 = seq__28704;
var G__28709 = chunk__28705;
var G__28710 = count__28706;
var G__28711 = (i__28707 + (1));
seq__28704 = G__28708;
chunk__28705 = G__28709;
count__28706 = G__28710;
i__28707 = G__28711;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28704);
if(temp__4425__auto__){
var seq__28704__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28704__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__28704__$1);
var G__28712 = cljs.core.chunk_rest.call(null,seq__28704__$1);
var G__28713 = c__17121__auto__;
var G__28714 = cljs.core.count.call(null,c__17121__auto__);
var G__28715 = (0);
seq__28704 = G__28712;
chunk__28705 = G__28713;
count__28706 = G__28714;
i__28707 = G__28715;
continue;
} else {
var n = cljs.core.first.call(null,seq__28704__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28716 = cljs.core.next.call(null,seq__28704__$1);
var G__28717 = null;
var G__28718 = (0);
var G__28719 = (0);
seq__28704 = G__28716;
chunk__28705 = G__28717;
count__28706 = G__28718;
i__28707 = G__28719;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28758_28765 = cljs.core.seq.call(null,deps);
var chunk__28759_28766 = null;
var count__28760_28767 = (0);
var i__28761_28768 = (0);
while(true){
if((i__28761_28768 < count__28760_28767)){
var dep_28769 = cljs.core._nth.call(null,chunk__28759_28766,i__28761_28768);
topo_sort_helper_STAR_.call(null,dep_28769,(depth + (1)),state);

var G__28770 = seq__28758_28765;
var G__28771 = chunk__28759_28766;
var G__28772 = count__28760_28767;
var G__28773 = (i__28761_28768 + (1));
seq__28758_28765 = G__28770;
chunk__28759_28766 = G__28771;
count__28760_28767 = G__28772;
i__28761_28768 = G__28773;
continue;
} else {
var temp__4425__auto___28774 = cljs.core.seq.call(null,seq__28758_28765);
if(temp__4425__auto___28774){
var seq__28758_28775__$1 = temp__4425__auto___28774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28758_28775__$1)){
var c__17121__auto___28776 = cljs.core.chunk_first.call(null,seq__28758_28775__$1);
var G__28777 = cljs.core.chunk_rest.call(null,seq__28758_28775__$1);
var G__28778 = c__17121__auto___28776;
var G__28779 = cljs.core.count.call(null,c__17121__auto___28776);
var G__28780 = (0);
seq__28758_28765 = G__28777;
chunk__28759_28766 = G__28778;
count__28760_28767 = G__28779;
i__28761_28768 = G__28780;
continue;
} else {
var dep_28781 = cljs.core.first.call(null,seq__28758_28775__$1);
topo_sort_helper_STAR_.call(null,dep_28781,(depth + (1)),state);

var G__28782 = cljs.core.next.call(null,seq__28758_28775__$1);
var G__28783 = null;
var G__28784 = (0);
var G__28785 = (0);
seq__28758_28765 = G__28782;
chunk__28759_28766 = G__28783;
count__28760_28767 = G__28784;
i__28761_28768 = G__28785;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28762){
var vec__28764 = p__28762;
var x = cljs.core.nth.call(null,vec__28764,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28764,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28764,x,xs,get_deps__$1){
return (function (p1__28720_SHARP_){
return clojure.set.difference.call(null,p1__28720_SHARP_,x);
});})(vec__28764,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28798 = cljs.core.seq.call(null,provides);
var chunk__28799 = null;
var count__28800 = (0);
var i__28801 = (0);
while(true){
if((i__28801 < count__28800)){
var prov = cljs.core._nth.call(null,chunk__28799,i__28801);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28802_28810 = cljs.core.seq.call(null,requires);
var chunk__28803_28811 = null;
var count__28804_28812 = (0);
var i__28805_28813 = (0);
while(true){
if((i__28805_28813 < count__28804_28812)){
var req_28814 = cljs.core._nth.call(null,chunk__28803_28811,i__28805_28813);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28814,prov);

var G__28815 = seq__28802_28810;
var G__28816 = chunk__28803_28811;
var G__28817 = count__28804_28812;
var G__28818 = (i__28805_28813 + (1));
seq__28802_28810 = G__28815;
chunk__28803_28811 = G__28816;
count__28804_28812 = G__28817;
i__28805_28813 = G__28818;
continue;
} else {
var temp__4425__auto___28819 = cljs.core.seq.call(null,seq__28802_28810);
if(temp__4425__auto___28819){
var seq__28802_28820__$1 = temp__4425__auto___28819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28802_28820__$1)){
var c__17121__auto___28821 = cljs.core.chunk_first.call(null,seq__28802_28820__$1);
var G__28822 = cljs.core.chunk_rest.call(null,seq__28802_28820__$1);
var G__28823 = c__17121__auto___28821;
var G__28824 = cljs.core.count.call(null,c__17121__auto___28821);
var G__28825 = (0);
seq__28802_28810 = G__28822;
chunk__28803_28811 = G__28823;
count__28804_28812 = G__28824;
i__28805_28813 = G__28825;
continue;
} else {
var req_28826 = cljs.core.first.call(null,seq__28802_28820__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28826,prov);

var G__28827 = cljs.core.next.call(null,seq__28802_28820__$1);
var G__28828 = null;
var G__28829 = (0);
var G__28830 = (0);
seq__28802_28810 = G__28827;
chunk__28803_28811 = G__28828;
count__28804_28812 = G__28829;
i__28805_28813 = G__28830;
continue;
}
} else {
}
}
break;
}

var G__28831 = seq__28798;
var G__28832 = chunk__28799;
var G__28833 = count__28800;
var G__28834 = (i__28801 + (1));
seq__28798 = G__28831;
chunk__28799 = G__28832;
count__28800 = G__28833;
i__28801 = G__28834;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28798);
if(temp__4425__auto__){
var seq__28798__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28798__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__28798__$1);
var G__28835 = cljs.core.chunk_rest.call(null,seq__28798__$1);
var G__28836 = c__17121__auto__;
var G__28837 = cljs.core.count.call(null,c__17121__auto__);
var G__28838 = (0);
seq__28798 = G__28835;
chunk__28799 = G__28836;
count__28800 = G__28837;
i__28801 = G__28838;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28798__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28806_28839 = cljs.core.seq.call(null,requires);
var chunk__28807_28840 = null;
var count__28808_28841 = (0);
var i__28809_28842 = (0);
while(true){
if((i__28809_28842 < count__28808_28841)){
var req_28843 = cljs.core._nth.call(null,chunk__28807_28840,i__28809_28842);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28843,prov);

var G__28844 = seq__28806_28839;
var G__28845 = chunk__28807_28840;
var G__28846 = count__28808_28841;
var G__28847 = (i__28809_28842 + (1));
seq__28806_28839 = G__28844;
chunk__28807_28840 = G__28845;
count__28808_28841 = G__28846;
i__28809_28842 = G__28847;
continue;
} else {
var temp__4425__auto___28848__$1 = cljs.core.seq.call(null,seq__28806_28839);
if(temp__4425__auto___28848__$1){
var seq__28806_28849__$1 = temp__4425__auto___28848__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28806_28849__$1)){
var c__17121__auto___28850 = cljs.core.chunk_first.call(null,seq__28806_28849__$1);
var G__28851 = cljs.core.chunk_rest.call(null,seq__28806_28849__$1);
var G__28852 = c__17121__auto___28850;
var G__28853 = cljs.core.count.call(null,c__17121__auto___28850);
var G__28854 = (0);
seq__28806_28839 = G__28851;
chunk__28807_28840 = G__28852;
count__28808_28841 = G__28853;
i__28809_28842 = G__28854;
continue;
} else {
var req_28855 = cljs.core.first.call(null,seq__28806_28849__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28855,prov);

var G__28856 = cljs.core.next.call(null,seq__28806_28849__$1);
var G__28857 = null;
var G__28858 = (0);
var G__28859 = (0);
seq__28806_28839 = G__28856;
chunk__28807_28840 = G__28857;
count__28808_28841 = G__28858;
i__28809_28842 = G__28859;
continue;
}
} else {
}
}
break;
}

var G__28860 = cljs.core.next.call(null,seq__28798__$1);
var G__28861 = null;
var G__28862 = (0);
var G__28863 = (0);
seq__28798 = G__28860;
chunk__28799 = G__28861;
count__28800 = G__28862;
i__28801 = G__28863;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28868_28872 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28869_28873 = null;
var count__28870_28874 = (0);
var i__28871_28875 = (0);
while(true){
if((i__28871_28875 < count__28870_28874)){
var ns_28876 = cljs.core._nth.call(null,chunk__28869_28873,i__28871_28875);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28876);

var G__28877 = seq__28868_28872;
var G__28878 = chunk__28869_28873;
var G__28879 = count__28870_28874;
var G__28880 = (i__28871_28875 + (1));
seq__28868_28872 = G__28877;
chunk__28869_28873 = G__28878;
count__28870_28874 = G__28879;
i__28871_28875 = G__28880;
continue;
} else {
var temp__4425__auto___28881 = cljs.core.seq.call(null,seq__28868_28872);
if(temp__4425__auto___28881){
var seq__28868_28882__$1 = temp__4425__auto___28881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28868_28882__$1)){
var c__17121__auto___28883 = cljs.core.chunk_first.call(null,seq__28868_28882__$1);
var G__28884 = cljs.core.chunk_rest.call(null,seq__28868_28882__$1);
var G__28885 = c__17121__auto___28883;
var G__28886 = cljs.core.count.call(null,c__17121__auto___28883);
var G__28887 = (0);
seq__28868_28872 = G__28884;
chunk__28869_28873 = G__28885;
count__28870_28874 = G__28886;
i__28871_28875 = G__28887;
continue;
} else {
var ns_28888 = cljs.core.first.call(null,seq__28868_28882__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28888);

var G__28889 = cljs.core.next.call(null,seq__28868_28882__$1);
var G__28890 = null;
var G__28891 = (0);
var G__28892 = (0);
seq__28868_28872 = G__28889;
chunk__28869_28873 = G__28890;
count__28870_28874 = G__28891;
i__28871_28875 = G__28892;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16318__auto__ = goog.require__;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28893__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28894__i = 0, G__28894__a = new Array(arguments.length -  0);
while (G__28894__i < G__28894__a.length) {G__28894__a[G__28894__i] = arguments[G__28894__i + 0]; ++G__28894__i;}
  args = new cljs.core.IndexedSeq(G__28894__a,0);
} 
return G__28893__delegate.call(this,args);};
G__28893.cljs$lang$maxFixedArity = 0;
G__28893.cljs$lang$applyTo = (function (arglist__28895){
var args = cljs.core.seq(arglist__28895);
return G__28893__delegate(args);
});
G__28893.cljs$core$IFn$_invoke$arity$variadic = G__28893__delegate;
return G__28893;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28897 = cljs.core._EQ_;
var expr__28898 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28897.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28898))){
var path_parts = ((function (pred__28897,expr__28898){
return (function (p1__28896_SHARP_){
return clojure.string.split.call(null,p1__28896_SHARP_,/[\/\\]/);
});})(pred__28897,expr__28898))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28897,expr__28898){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e28900){if((e28900 instanceof Error)){
var e = e28900;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28900;

}
}})());
});
;})(path_parts,sep,root,pred__28897,expr__28898))
} else {
if(cljs.core.truth_(pred__28897.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28898))){
return ((function (pred__28897,expr__28898){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28897,expr__28898){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28897,expr__28898))
);

return deferred.addErrback(((function (deferred,pred__28897,expr__28898){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28897,expr__28898))
);
});
;})(pred__28897,expr__28898))
} else {
return ((function (pred__28897,expr__28898){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28897,expr__28898))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28901,callback){
var map__28904 = p__28901;
var map__28904__$1 = ((((!((map__28904 == null)))?((((map__28904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28904):map__28904);
var file_msg = map__28904__$1;
var request_url = cljs.core.get.call(null,map__28904__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28904,map__28904__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28904,map__28904__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__){
return (function (state_28928){
var state_val_28929 = (state_28928[(1)]);
if((state_val_28929 === (7))){
var inst_28924 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28930_28950 = state_28928__$1;
(statearr_28930_28950[(2)] = inst_28924);

(statearr_28930_28950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (1))){
var state_28928__$1 = state_28928;
var statearr_28931_28951 = state_28928__$1;
(statearr_28931_28951[(2)] = null);

(statearr_28931_28951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (4))){
var inst_28908 = (state_28928[(7)]);
var inst_28908__$1 = (state_28928[(2)]);
var state_28928__$1 = (function (){var statearr_28932 = state_28928;
(statearr_28932[(7)] = inst_28908__$1);

return statearr_28932;
})();
if(cljs.core.truth_(inst_28908__$1)){
var statearr_28933_28952 = state_28928__$1;
(statearr_28933_28952[(1)] = (5));

} else {
var statearr_28934_28953 = state_28928__$1;
(statearr_28934_28953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (6))){
var state_28928__$1 = state_28928;
var statearr_28935_28954 = state_28928__$1;
(statearr_28935_28954[(2)] = null);

(statearr_28935_28954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (3))){
var inst_28926 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28928__$1,inst_28926);
} else {
if((state_val_28929 === (2))){
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28928__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28929 === (11))){
var inst_28920 = (state_28928[(2)]);
var state_28928__$1 = (function (){var statearr_28936 = state_28928;
(statearr_28936[(8)] = inst_28920);

return statearr_28936;
})();
var statearr_28937_28955 = state_28928__$1;
(statearr_28937_28955[(2)] = null);

(statearr_28937_28955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (9))){
var inst_28914 = (state_28928[(9)]);
var inst_28912 = (state_28928[(10)]);
var inst_28916 = inst_28914.call(null,inst_28912);
var state_28928__$1 = state_28928;
var statearr_28938_28956 = state_28928__$1;
(statearr_28938_28956[(2)] = inst_28916);

(statearr_28938_28956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (5))){
var inst_28908 = (state_28928[(7)]);
var inst_28910 = figwheel.client.file_reloading.blocking_load.call(null,inst_28908);
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28928__$1,(8),inst_28910);
} else {
if((state_val_28929 === (10))){
var inst_28912 = (state_28928[(10)]);
var inst_28918 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28912);
var state_28928__$1 = state_28928;
var statearr_28939_28957 = state_28928__$1;
(statearr_28939_28957[(2)] = inst_28918);

(statearr_28939_28957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (8))){
var inst_28908 = (state_28928[(7)]);
var inst_28914 = (state_28928[(9)]);
var inst_28912 = (state_28928[(2)]);
var inst_28913 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28914__$1 = cljs.core.get.call(null,inst_28913,inst_28908);
var state_28928__$1 = (function (){var statearr_28940 = state_28928;
(statearr_28940[(9)] = inst_28914__$1);

(statearr_28940[(10)] = inst_28912);

return statearr_28940;
})();
if(cljs.core.truth_(inst_28914__$1)){
var statearr_28941_28958 = state_28928__$1;
(statearr_28941_28958[(1)] = (9));

} else {
var statearr_28942_28959 = state_28928__$1;
(statearr_28942_28959[(1)] = (10));

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
});})(c__19399__auto__))
;
return ((function (switch__19334__auto__,c__19399__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19335__auto__ = null;
var figwheel$client$file_reloading$state_machine__19335__auto____0 = (function (){
var statearr_28946 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28946[(0)] = figwheel$client$file_reloading$state_machine__19335__auto__);

(statearr_28946[(1)] = (1));

return statearr_28946;
});
var figwheel$client$file_reloading$state_machine__19335__auto____1 = (function (state_28928){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_28928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e28947){if((e28947 instanceof Object)){
var ex__19338__auto__ = e28947;
var statearr_28948_28960 = state_28928;
(statearr_28948_28960[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28961 = state_28928;
state_28928 = G__28961;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19335__auto__ = function(state_28928){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19335__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19335__auto____1.call(this,state_28928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19335__auto____0;
figwheel$client$file_reloading$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19335__auto____1;
return figwheel$client$file_reloading$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__))
})();
var state__19401__auto__ = (function (){var statearr_28949 = f__19400__auto__.call(null);
(statearr_28949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_28949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__))
);

return c__19399__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28962,callback){
var map__28965 = p__28962;
var map__28965__$1 = ((((!((map__28965 == null)))?((((map__28965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28965):map__28965);
var file_msg = map__28965__$1;
var namespace = cljs.core.get.call(null,map__28965__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28965,map__28965__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28965,map__28965__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28967){
var map__28970 = p__28967;
var map__28970__$1 = ((((!((map__28970 == null)))?((((map__28970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28970):map__28970);
var file_msg = map__28970__$1;
var namespace = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16306__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16306__auto__){
var or__16318__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
var or__16318__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16318__auto____$1)){
return or__16318__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16306__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28972,callback){
var map__28975 = p__28972;
var map__28975__$1 = ((((!((map__28975 == null)))?((((map__28975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28975):map__28975);
var file_msg = map__28975__$1;
var request_url = cljs.core.get.call(null,map__28975__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28975__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19399__auto___29063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___29063,out){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___29063,out){
return (function (state_29045){
var state_val_29046 = (state_29045[(1)]);
if((state_val_29046 === (1))){
var inst_29023 = cljs.core.nth.call(null,files,(0),null);
var inst_29024 = cljs.core.nthnext.call(null,files,(1));
var inst_29025 = files;
var state_29045__$1 = (function (){var statearr_29047 = state_29045;
(statearr_29047[(7)] = inst_29024);

(statearr_29047[(8)] = inst_29025);

(statearr_29047[(9)] = inst_29023);

return statearr_29047;
})();
var statearr_29048_29064 = state_29045__$1;
(statearr_29048_29064[(2)] = null);

(statearr_29048_29064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (2))){
var inst_29025 = (state_29045[(8)]);
var inst_29028 = (state_29045[(10)]);
var inst_29028__$1 = cljs.core.nth.call(null,inst_29025,(0),null);
var inst_29029 = cljs.core.nthnext.call(null,inst_29025,(1));
var inst_29030 = (inst_29028__$1 == null);
var inst_29031 = cljs.core.not.call(null,inst_29030);
var state_29045__$1 = (function (){var statearr_29049 = state_29045;
(statearr_29049[(11)] = inst_29029);

(statearr_29049[(10)] = inst_29028__$1);

return statearr_29049;
})();
if(inst_29031){
var statearr_29050_29065 = state_29045__$1;
(statearr_29050_29065[(1)] = (4));

} else {
var statearr_29051_29066 = state_29045__$1;
(statearr_29051_29066[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (3))){
var inst_29043 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29045__$1,inst_29043);
} else {
if((state_val_29046 === (4))){
var inst_29028 = (state_29045[(10)]);
var inst_29033 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29028);
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29045__$1,(7),inst_29033);
} else {
if((state_val_29046 === (5))){
var inst_29039 = cljs.core.async.close_BANG_.call(null,out);
var state_29045__$1 = state_29045;
var statearr_29052_29067 = state_29045__$1;
(statearr_29052_29067[(2)] = inst_29039);

(statearr_29052_29067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (6))){
var inst_29041 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
var statearr_29053_29068 = state_29045__$1;
(statearr_29053_29068[(2)] = inst_29041);

(statearr_29053_29068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (7))){
var inst_29029 = (state_29045[(11)]);
var inst_29035 = (state_29045[(2)]);
var inst_29036 = cljs.core.async.put_BANG_.call(null,out,inst_29035);
var inst_29025 = inst_29029;
var state_29045__$1 = (function (){var statearr_29054 = state_29045;
(statearr_29054[(8)] = inst_29025);

(statearr_29054[(12)] = inst_29036);

return statearr_29054;
})();
var statearr_29055_29069 = state_29045__$1;
(statearr_29055_29069[(2)] = null);

(statearr_29055_29069[(1)] = (2));


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
});})(c__19399__auto___29063,out))
;
return ((function (switch__19334__auto__,c__19399__auto___29063,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto____0 = (function (){
var statearr_29059 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29059[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto__);

(statearr_29059[(1)] = (1));

return statearr_29059;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto____1 = (function (state_29045){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_29045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e29060){if((e29060 instanceof Object)){
var ex__19338__auto__ = e29060;
var statearr_29061_29070 = state_29045;
(statearr_29061_29070[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29071 = state_29045;
state_29045 = G__29071;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto__ = function(state_29045){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto____1.call(this,state_29045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___29063,out))
})();
var state__19401__auto__ = (function (){var statearr_29062 = f__19400__auto__.call(null);
(statearr_29062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___29063);

return statearr_29062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___29063,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29072,opts){
var map__29076 = p__29072;
var map__29076__$1 = ((((!((map__29076 == null)))?((((map__29076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29076):map__29076);
var eval_body__$1 = cljs.core.get.call(null,map__29076__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29076__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16306__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16306__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16306__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29078){var e = e29078;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29079_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29079_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29084){
var vec__29085 = p__29084;
var k = cljs.core.nth.call(null,vec__29085,(0),null);
var v = cljs.core.nth.call(null,vec__29085,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29086){
var vec__29087 = p__29086;
var k = cljs.core.nth.call(null,vec__29087,(0),null);
var v = cljs.core.nth.call(null,vec__29087,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29091,p__29092){
var map__29339 = p__29091;
var map__29339__$1 = ((((!((map__29339 == null)))?((((map__29339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29339):map__29339);
var opts = map__29339__$1;
var before_jsload = cljs.core.get.call(null,map__29339__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29339__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29339__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29340 = p__29092;
var map__29340__$1 = ((((!((map__29340 == null)))?((((map__29340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29340):map__29340);
var msg = map__29340__$1;
var files = cljs.core.get.call(null,map__29340__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29340__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29340__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29493){
var state_val_29494 = (state_29493[(1)]);
if((state_val_29494 === (7))){
var inst_29354 = (state_29493[(7)]);
var inst_29357 = (state_29493[(8)]);
var inst_29356 = (state_29493[(9)]);
var inst_29355 = (state_29493[(10)]);
var inst_29362 = cljs.core._nth.call(null,inst_29355,inst_29357);
var inst_29363 = figwheel.client.file_reloading.eval_body.call(null,inst_29362,opts);
var inst_29364 = (inst_29357 + (1));
var tmp29495 = inst_29354;
var tmp29496 = inst_29356;
var tmp29497 = inst_29355;
var inst_29354__$1 = tmp29495;
var inst_29355__$1 = tmp29497;
var inst_29356__$1 = tmp29496;
var inst_29357__$1 = inst_29364;
var state_29493__$1 = (function (){var statearr_29498 = state_29493;
(statearr_29498[(7)] = inst_29354__$1);

(statearr_29498[(8)] = inst_29357__$1);

(statearr_29498[(9)] = inst_29356__$1);

(statearr_29498[(10)] = inst_29355__$1);

(statearr_29498[(11)] = inst_29363);

return statearr_29498;
})();
var statearr_29499_29585 = state_29493__$1;
(statearr_29499_29585[(2)] = null);

(statearr_29499_29585[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (20))){
var inst_29397 = (state_29493[(12)]);
var inst_29405 = figwheel.client.file_reloading.sort_files.call(null,inst_29397);
var state_29493__$1 = state_29493;
var statearr_29500_29586 = state_29493__$1;
(statearr_29500_29586[(2)] = inst_29405);

(statearr_29500_29586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (27))){
var state_29493__$1 = state_29493;
var statearr_29501_29587 = state_29493__$1;
(statearr_29501_29587[(2)] = null);

(statearr_29501_29587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (1))){
var inst_29346 = (state_29493[(13)]);
var inst_29343 = before_jsload.call(null,files);
var inst_29344 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29345 = (function (){return ((function (inst_29346,inst_29343,inst_29344,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29088_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29088_SHARP_);
});
;})(inst_29346,inst_29343,inst_29344,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29346__$1 = cljs.core.filter.call(null,inst_29345,files);
var inst_29347 = cljs.core.not_empty.call(null,inst_29346__$1);
var state_29493__$1 = (function (){var statearr_29502 = state_29493;
(statearr_29502[(13)] = inst_29346__$1);

(statearr_29502[(14)] = inst_29344);

(statearr_29502[(15)] = inst_29343);

return statearr_29502;
})();
if(cljs.core.truth_(inst_29347)){
var statearr_29503_29588 = state_29493__$1;
(statearr_29503_29588[(1)] = (2));

} else {
var statearr_29504_29589 = state_29493__$1;
(statearr_29504_29589[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (24))){
var state_29493__$1 = state_29493;
var statearr_29505_29590 = state_29493__$1;
(statearr_29505_29590[(2)] = null);

(statearr_29505_29590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (39))){
var inst_29447 = (state_29493[(16)]);
var state_29493__$1 = state_29493;
var statearr_29506_29591 = state_29493__$1;
(statearr_29506_29591[(2)] = inst_29447);

(statearr_29506_29591[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (46))){
var inst_29488 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29507_29592 = state_29493__$1;
(statearr_29507_29592[(2)] = inst_29488);

(statearr_29507_29592[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (4))){
var inst_29391 = (state_29493[(2)]);
var inst_29392 = cljs.core.List.EMPTY;
var inst_29393 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29392);
var inst_29394 = (function (){return ((function (inst_29391,inst_29392,inst_29393,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29089_SHARP_){
var and__16306__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29089_SHARP_);
if(cljs.core.truth_(and__16306__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29089_SHARP_));
} else {
return and__16306__auto__;
}
});
;})(inst_29391,inst_29392,inst_29393,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29395 = cljs.core.filter.call(null,inst_29394,files);
var inst_29396 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29397 = cljs.core.concat.call(null,inst_29395,inst_29396);
var state_29493__$1 = (function (){var statearr_29508 = state_29493;
(statearr_29508[(12)] = inst_29397);

(statearr_29508[(17)] = inst_29393);

(statearr_29508[(18)] = inst_29391);

return statearr_29508;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29509_29593 = state_29493__$1;
(statearr_29509_29593[(1)] = (16));

} else {
var statearr_29510_29594 = state_29493__$1;
(statearr_29510_29594[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (15))){
var inst_29381 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29511_29595 = state_29493__$1;
(statearr_29511_29595[(2)] = inst_29381);

(statearr_29511_29595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (21))){
var inst_29407 = (state_29493[(19)]);
var inst_29407__$1 = (state_29493[(2)]);
var inst_29408 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29407__$1);
var state_29493__$1 = (function (){var statearr_29512 = state_29493;
(statearr_29512[(19)] = inst_29407__$1);

return statearr_29512;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29493__$1,(22),inst_29408);
} else {
if((state_val_29494 === (31))){
var inst_29491 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29493__$1,inst_29491);
} else {
if((state_val_29494 === (32))){
var inst_29447 = (state_29493[(16)]);
var inst_29452 = inst_29447.cljs$lang$protocol_mask$partition0$;
var inst_29453 = (inst_29452 & (64));
var inst_29454 = inst_29447.cljs$core$ISeq$;
var inst_29455 = (inst_29453) || (inst_29454);
var state_29493__$1 = state_29493;
if(cljs.core.truth_(inst_29455)){
var statearr_29513_29596 = state_29493__$1;
(statearr_29513_29596[(1)] = (35));

} else {
var statearr_29514_29597 = state_29493__$1;
(statearr_29514_29597[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (40))){
var inst_29468 = (state_29493[(20)]);
var inst_29467 = (state_29493[(2)]);
var inst_29468__$1 = cljs.core.get.call(null,inst_29467,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29469 = cljs.core.get.call(null,inst_29467,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29470 = cljs.core.not_empty.call(null,inst_29468__$1);
var state_29493__$1 = (function (){var statearr_29515 = state_29493;
(statearr_29515[(20)] = inst_29468__$1);

(statearr_29515[(21)] = inst_29469);

return statearr_29515;
})();
if(cljs.core.truth_(inst_29470)){
var statearr_29516_29598 = state_29493__$1;
(statearr_29516_29598[(1)] = (41));

} else {
var statearr_29517_29599 = state_29493__$1;
(statearr_29517_29599[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (33))){
var state_29493__$1 = state_29493;
var statearr_29518_29600 = state_29493__$1;
(statearr_29518_29600[(2)] = false);

(statearr_29518_29600[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (13))){
var inst_29367 = (state_29493[(22)]);
var inst_29371 = cljs.core.chunk_first.call(null,inst_29367);
var inst_29372 = cljs.core.chunk_rest.call(null,inst_29367);
var inst_29373 = cljs.core.count.call(null,inst_29371);
var inst_29354 = inst_29372;
var inst_29355 = inst_29371;
var inst_29356 = inst_29373;
var inst_29357 = (0);
var state_29493__$1 = (function (){var statearr_29519 = state_29493;
(statearr_29519[(7)] = inst_29354);

(statearr_29519[(8)] = inst_29357);

(statearr_29519[(9)] = inst_29356);

(statearr_29519[(10)] = inst_29355);

return statearr_29519;
})();
var statearr_29520_29601 = state_29493__$1;
(statearr_29520_29601[(2)] = null);

(statearr_29520_29601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (22))){
var inst_29407 = (state_29493[(19)]);
var inst_29410 = (state_29493[(23)]);
var inst_29411 = (state_29493[(24)]);
var inst_29415 = (state_29493[(25)]);
var inst_29410__$1 = (state_29493[(2)]);
var inst_29411__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29410__$1);
var inst_29412 = (function (){var all_files = inst_29407;
var res_SINGLEQUOTE_ = inst_29410__$1;
var res = inst_29411__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29407,inst_29410,inst_29411,inst_29415,inst_29410__$1,inst_29411__$1,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29090_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29090_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29407,inst_29410,inst_29411,inst_29415,inst_29410__$1,inst_29411__$1,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29413 = cljs.core.filter.call(null,inst_29412,inst_29410__$1);
var inst_29414 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29415__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29414);
var inst_29416 = cljs.core.not_empty.call(null,inst_29415__$1);
var state_29493__$1 = (function (){var statearr_29521 = state_29493;
(statearr_29521[(23)] = inst_29410__$1);

(statearr_29521[(26)] = inst_29413);

(statearr_29521[(24)] = inst_29411__$1);

(statearr_29521[(25)] = inst_29415__$1);

return statearr_29521;
})();
if(cljs.core.truth_(inst_29416)){
var statearr_29522_29602 = state_29493__$1;
(statearr_29522_29602[(1)] = (23));

} else {
var statearr_29523_29603 = state_29493__$1;
(statearr_29523_29603[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (36))){
var state_29493__$1 = state_29493;
var statearr_29524_29604 = state_29493__$1;
(statearr_29524_29604[(2)] = false);

(statearr_29524_29604[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (41))){
var inst_29468 = (state_29493[(20)]);
var inst_29472 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29473 = cljs.core.map.call(null,inst_29472,inst_29468);
var inst_29474 = cljs.core.pr_str.call(null,inst_29473);
var inst_29475 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29474)].join('');
var inst_29476 = figwheel.client.utils.log.call(null,inst_29475);
var state_29493__$1 = state_29493;
var statearr_29525_29605 = state_29493__$1;
(statearr_29525_29605[(2)] = inst_29476);

(statearr_29525_29605[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (43))){
var inst_29469 = (state_29493[(21)]);
var inst_29479 = (state_29493[(2)]);
var inst_29480 = cljs.core.not_empty.call(null,inst_29469);
var state_29493__$1 = (function (){var statearr_29526 = state_29493;
(statearr_29526[(27)] = inst_29479);

return statearr_29526;
})();
if(cljs.core.truth_(inst_29480)){
var statearr_29527_29606 = state_29493__$1;
(statearr_29527_29606[(1)] = (44));

} else {
var statearr_29528_29607 = state_29493__$1;
(statearr_29528_29607[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (29))){
var inst_29407 = (state_29493[(19)]);
var inst_29410 = (state_29493[(23)]);
var inst_29413 = (state_29493[(26)]);
var inst_29411 = (state_29493[(24)]);
var inst_29447 = (state_29493[(16)]);
var inst_29415 = (state_29493[(25)]);
var inst_29443 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29446 = (function (){var all_files = inst_29407;
var res_SINGLEQUOTE_ = inst_29410;
var res = inst_29411;
var files_not_loaded = inst_29413;
var dependencies_that_loaded = inst_29415;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29410,inst_29413,inst_29411,inst_29447,inst_29415,inst_29443,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29445){
var map__29529 = p__29445;
var map__29529__$1 = ((((!((map__29529 == null)))?((((map__29529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29529):map__29529);
var namespace = cljs.core.get.call(null,map__29529__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29410,inst_29413,inst_29411,inst_29447,inst_29415,inst_29443,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29447__$1 = cljs.core.group_by.call(null,inst_29446,inst_29413);
var inst_29449 = (inst_29447__$1 == null);
var inst_29450 = cljs.core.not.call(null,inst_29449);
var state_29493__$1 = (function (){var statearr_29531 = state_29493;
(statearr_29531[(28)] = inst_29443);

(statearr_29531[(16)] = inst_29447__$1);

return statearr_29531;
})();
if(inst_29450){
var statearr_29532_29608 = state_29493__$1;
(statearr_29532_29608[(1)] = (32));

} else {
var statearr_29533_29609 = state_29493__$1;
(statearr_29533_29609[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (44))){
var inst_29469 = (state_29493[(21)]);
var inst_29482 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29469);
var inst_29483 = cljs.core.pr_str.call(null,inst_29482);
var inst_29484 = [cljs.core.str("not required: "),cljs.core.str(inst_29483)].join('');
var inst_29485 = figwheel.client.utils.log.call(null,inst_29484);
var state_29493__$1 = state_29493;
var statearr_29534_29610 = state_29493__$1;
(statearr_29534_29610[(2)] = inst_29485);

(statearr_29534_29610[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (6))){
var inst_29388 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29535_29611 = state_29493__$1;
(statearr_29535_29611[(2)] = inst_29388);

(statearr_29535_29611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (28))){
var inst_29413 = (state_29493[(26)]);
var inst_29440 = (state_29493[(2)]);
var inst_29441 = cljs.core.not_empty.call(null,inst_29413);
var state_29493__$1 = (function (){var statearr_29536 = state_29493;
(statearr_29536[(29)] = inst_29440);

return statearr_29536;
})();
if(cljs.core.truth_(inst_29441)){
var statearr_29537_29612 = state_29493__$1;
(statearr_29537_29612[(1)] = (29));

} else {
var statearr_29538_29613 = state_29493__$1;
(statearr_29538_29613[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (25))){
var inst_29411 = (state_29493[(24)]);
var inst_29427 = (state_29493[(2)]);
var inst_29428 = cljs.core.not_empty.call(null,inst_29411);
var state_29493__$1 = (function (){var statearr_29539 = state_29493;
(statearr_29539[(30)] = inst_29427);

return statearr_29539;
})();
if(cljs.core.truth_(inst_29428)){
var statearr_29540_29614 = state_29493__$1;
(statearr_29540_29614[(1)] = (26));

} else {
var statearr_29541_29615 = state_29493__$1;
(statearr_29541_29615[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (34))){
var inst_29462 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
if(cljs.core.truth_(inst_29462)){
var statearr_29542_29616 = state_29493__$1;
(statearr_29542_29616[(1)] = (38));

} else {
var statearr_29543_29617 = state_29493__$1;
(statearr_29543_29617[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (17))){
var state_29493__$1 = state_29493;
var statearr_29544_29618 = state_29493__$1;
(statearr_29544_29618[(2)] = recompile_dependents);

(statearr_29544_29618[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (3))){
var state_29493__$1 = state_29493;
var statearr_29545_29619 = state_29493__$1;
(statearr_29545_29619[(2)] = null);

(statearr_29545_29619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (12))){
var inst_29384 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29546_29620 = state_29493__$1;
(statearr_29546_29620[(2)] = inst_29384);

(statearr_29546_29620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (2))){
var inst_29346 = (state_29493[(13)]);
var inst_29353 = cljs.core.seq.call(null,inst_29346);
var inst_29354 = inst_29353;
var inst_29355 = null;
var inst_29356 = (0);
var inst_29357 = (0);
var state_29493__$1 = (function (){var statearr_29547 = state_29493;
(statearr_29547[(7)] = inst_29354);

(statearr_29547[(8)] = inst_29357);

(statearr_29547[(9)] = inst_29356);

(statearr_29547[(10)] = inst_29355);

return statearr_29547;
})();
var statearr_29548_29621 = state_29493__$1;
(statearr_29548_29621[(2)] = null);

(statearr_29548_29621[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (23))){
var inst_29407 = (state_29493[(19)]);
var inst_29410 = (state_29493[(23)]);
var inst_29413 = (state_29493[(26)]);
var inst_29411 = (state_29493[(24)]);
var inst_29415 = (state_29493[(25)]);
var inst_29418 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29420 = (function (){var all_files = inst_29407;
var res_SINGLEQUOTE_ = inst_29410;
var res = inst_29411;
var files_not_loaded = inst_29413;
var dependencies_that_loaded = inst_29415;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29410,inst_29413,inst_29411,inst_29415,inst_29418,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29419){
var map__29549 = p__29419;
var map__29549__$1 = ((((!((map__29549 == null)))?((((map__29549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29549):map__29549);
var request_url = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29410,inst_29413,inst_29411,inst_29415,inst_29418,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29421 = cljs.core.reverse.call(null,inst_29415);
var inst_29422 = cljs.core.map.call(null,inst_29420,inst_29421);
var inst_29423 = cljs.core.pr_str.call(null,inst_29422);
var inst_29424 = figwheel.client.utils.log.call(null,inst_29423);
var state_29493__$1 = (function (){var statearr_29551 = state_29493;
(statearr_29551[(31)] = inst_29418);

return statearr_29551;
})();
var statearr_29552_29622 = state_29493__$1;
(statearr_29552_29622[(2)] = inst_29424);

(statearr_29552_29622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (35))){
var state_29493__$1 = state_29493;
var statearr_29553_29623 = state_29493__$1;
(statearr_29553_29623[(2)] = true);

(statearr_29553_29623[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (19))){
var inst_29397 = (state_29493[(12)]);
var inst_29403 = figwheel.client.file_reloading.expand_files.call(null,inst_29397);
var state_29493__$1 = state_29493;
var statearr_29554_29624 = state_29493__$1;
(statearr_29554_29624[(2)] = inst_29403);

(statearr_29554_29624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (11))){
var state_29493__$1 = state_29493;
var statearr_29555_29625 = state_29493__$1;
(statearr_29555_29625[(2)] = null);

(statearr_29555_29625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (9))){
var inst_29386 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29556_29626 = state_29493__$1;
(statearr_29556_29626[(2)] = inst_29386);

(statearr_29556_29626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (5))){
var inst_29357 = (state_29493[(8)]);
var inst_29356 = (state_29493[(9)]);
var inst_29359 = (inst_29357 < inst_29356);
var inst_29360 = inst_29359;
var state_29493__$1 = state_29493;
if(cljs.core.truth_(inst_29360)){
var statearr_29557_29627 = state_29493__$1;
(statearr_29557_29627[(1)] = (7));

} else {
var statearr_29558_29628 = state_29493__$1;
(statearr_29558_29628[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (14))){
var inst_29367 = (state_29493[(22)]);
var inst_29376 = cljs.core.first.call(null,inst_29367);
var inst_29377 = figwheel.client.file_reloading.eval_body.call(null,inst_29376,opts);
var inst_29378 = cljs.core.next.call(null,inst_29367);
var inst_29354 = inst_29378;
var inst_29355 = null;
var inst_29356 = (0);
var inst_29357 = (0);
var state_29493__$1 = (function (){var statearr_29559 = state_29493;
(statearr_29559[(7)] = inst_29354);

(statearr_29559[(8)] = inst_29357);

(statearr_29559[(32)] = inst_29377);

(statearr_29559[(9)] = inst_29356);

(statearr_29559[(10)] = inst_29355);

return statearr_29559;
})();
var statearr_29560_29629 = state_29493__$1;
(statearr_29560_29629[(2)] = null);

(statearr_29560_29629[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (45))){
var state_29493__$1 = state_29493;
var statearr_29561_29630 = state_29493__$1;
(statearr_29561_29630[(2)] = null);

(statearr_29561_29630[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (26))){
var inst_29407 = (state_29493[(19)]);
var inst_29410 = (state_29493[(23)]);
var inst_29413 = (state_29493[(26)]);
var inst_29411 = (state_29493[(24)]);
var inst_29415 = (state_29493[(25)]);
var inst_29430 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29432 = (function (){var all_files = inst_29407;
var res_SINGLEQUOTE_ = inst_29410;
var res = inst_29411;
var files_not_loaded = inst_29413;
var dependencies_that_loaded = inst_29415;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29410,inst_29413,inst_29411,inst_29415,inst_29430,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29431){
var map__29562 = p__29431;
var map__29562__$1 = ((((!((map__29562 == null)))?((((map__29562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29562):map__29562);
var namespace = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29410,inst_29413,inst_29411,inst_29415,inst_29430,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29433 = cljs.core.map.call(null,inst_29432,inst_29411);
var inst_29434 = cljs.core.pr_str.call(null,inst_29433);
var inst_29435 = figwheel.client.utils.log.call(null,inst_29434);
var inst_29436 = (function (){var all_files = inst_29407;
var res_SINGLEQUOTE_ = inst_29410;
var res = inst_29411;
var files_not_loaded = inst_29413;
var dependencies_that_loaded = inst_29415;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29410,inst_29413,inst_29411,inst_29415,inst_29430,inst_29432,inst_29433,inst_29434,inst_29435,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29410,inst_29413,inst_29411,inst_29415,inst_29430,inst_29432,inst_29433,inst_29434,inst_29435,state_val_29494,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29437 = setTimeout(inst_29436,(10));
var state_29493__$1 = (function (){var statearr_29564 = state_29493;
(statearr_29564[(33)] = inst_29430);

(statearr_29564[(34)] = inst_29435);

return statearr_29564;
})();
var statearr_29565_29631 = state_29493__$1;
(statearr_29565_29631[(2)] = inst_29437);

(statearr_29565_29631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (16))){
var state_29493__$1 = state_29493;
var statearr_29566_29632 = state_29493__$1;
(statearr_29566_29632[(2)] = reload_dependents);

(statearr_29566_29632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (38))){
var inst_29447 = (state_29493[(16)]);
var inst_29464 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29447);
var state_29493__$1 = state_29493;
var statearr_29567_29633 = state_29493__$1;
(statearr_29567_29633[(2)] = inst_29464);

(statearr_29567_29633[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (30))){
var state_29493__$1 = state_29493;
var statearr_29568_29634 = state_29493__$1;
(statearr_29568_29634[(2)] = null);

(statearr_29568_29634[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (10))){
var inst_29367 = (state_29493[(22)]);
var inst_29369 = cljs.core.chunked_seq_QMARK_.call(null,inst_29367);
var state_29493__$1 = state_29493;
if(inst_29369){
var statearr_29569_29635 = state_29493__$1;
(statearr_29569_29635[(1)] = (13));

} else {
var statearr_29570_29636 = state_29493__$1;
(statearr_29570_29636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (18))){
var inst_29401 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
if(cljs.core.truth_(inst_29401)){
var statearr_29571_29637 = state_29493__$1;
(statearr_29571_29637[(1)] = (19));

} else {
var statearr_29572_29638 = state_29493__$1;
(statearr_29572_29638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (42))){
var state_29493__$1 = state_29493;
var statearr_29573_29639 = state_29493__$1;
(statearr_29573_29639[(2)] = null);

(statearr_29573_29639[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (37))){
var inst_29459 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29574_29640 = state_29493__$1;
(statearr_29574_29640[(2)] = inst_29459);

(statearr_29574_29640[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (8))){
var inst_29354 = (state_29493[(7)]);
var inst_29367 = (state_29493[(22)]);
var inst_29367__$1 = cljs.core.seq.call(null,inst_29354);
var state_29493__$1 = (function (){var statearr_29575 = state_29493;
(statearr_29575[(22)] = inst_29367__$1);

return statearr_29575;
})();
if(inst_29367__$1){
var statearr_29576_29641 = state_29493__$1;
(statearr_29576_29641[(1)] = (10));

} else {
var statearr_29577_29642 = state_29493__$1;
(statearr_29577_29642[(1)] = (11));

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
});})(c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19334__auto__,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto____0 = (function (){
var statearr_29581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29581[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto__);

(statearr_29581[(1)] = (1));

return statearr_29581;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto____1 = (function (state_29493){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_29493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e29582){if((e29582 instanceof Object)){
var ex__19338__auto__ = e29582;
var statearr_29583_29643 = state_29493;
(statearr_29583_29643[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29644 = state_29493;
state_29493 = G__29644;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto__ = function(state_29493){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto____1.call(this,state_29493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19401__auto__ = (function (){var statearr_29584 = f__19400__auto__.call(null);
(statearr_29584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_29584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__,map__29339,map__29339__$1,opts,before_jsload,on_jsload,reload_dependents,map__29340,map__29340__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19399__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29647,link){
var map__29650 = p__29647;
var map__29650__$1 = ((((!((map__29650 == null)))?((((map__29650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29650):map__29650);
var file = cljs.core.get.call(null,map__29650__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29650,map__29650__$1,file){
return (function (p1__29645_SHARP_,p2__29646_SHARP_){
if(cljs.core._EQ_.call(null,p1__29645_SHARP_,p2__29646_SHARP_)){
return p1__29645_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29650,map__29650__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29656){
var map__29657 = p__29656;
var map__29657__$1 = ((((!((map__29657 == null)))?((((map__29657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29657):map__29657);
var match_length = cljs.core.get.call(null,map__29657__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29657__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29652_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29652_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29659 = [];
var len__17376__auto___29662 = arguments.length;
var i__17377__auto___29663 = (0);
while(true){
if((i__17377__auto___29663 < len__17376__auto___29662)){
args29659.push((arguments[i__17377__auto___29663]));

var G__29664 = (i__17377__auto___29663 + (1));
i__17377__auto___29663 = G__29664;
continue;
} else {
}
break;
}

var G__29661 = args29659.length;
switch (G__29661) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29659.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29666_SHARP_,p2__29667_SHARP_){
return cljs.core.assoc.call(null,p1__29666_SHARP_,cljs.core.get.call(null,p2__29667_SHARP_,key),p2__29667_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29668){
var map__29671 = p__29668;
var map__29671__$1 = ((((!((map__29671 == null)))?((((map__29671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29671):map__29671);
var f_data = map__29671__$1;
var file = cljs.core.get.call(null,map__29671__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29673,files_msg){
var map__29680 = p__29673;
var map__29680__$1 = ((((!((map__29680 == null)))?((((map__29680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29680):map__29680);
var opts = map__29680__$1;
var on_cssload = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29682_29686 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29683_29687 = null;
var count__29684_29688 = (0);
var i__29685_29689 = (0);
while(true){
if((i__29685_29689 < count__29684_29688)){
var f_29690 = cljs.core._nth.call(null,chunk__29683_29687,i__29685_29689);
figwheel.client.file_reloading.reload_css_file.call(null,f_29690);

var G__29691 = seq__29682_29686;
var G__29692 = chunk__29683_29687;
var G__29693 = count__29684_29688;
var G__29694 = (i__29685_29689 + (1));
seq__29682_29686 = G__29691;
chunk__29683_29687 = G__29692;
count__29684_29688 = G__29693;
i__29685_29689 = G__29694;
continue;
} else {
var temp__4425__auto___29695 = cljs.core.seq.call(null,seq__29682_29686);
if(temp__4425__auto___29695){
var seq__29682_29696__$1 = temp__4425__auto___29695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29682_29696__$1)){
var c__17121__auto___29697 = cljs.core.chunk_first.call(null,seq__29682_29696__$1);
var G__29698 = cljs.core.chunk_rest.call(null,seq__29682_29696__$1);
var G__29699 = c__17121__auto___29697;
var G__29700 = cljs.core.count.call(null,c__17121__auto___29697);
var G__29701 = (0);
seq__29682_29686 = G__29698;
chunk__29683_29687 = G__29699;
count__29684_29688 = G__29700;
i__29685_29689 = G__29701;
continue;
} else {
var f_29702 = cljs.core.first.call(null,seq__29682_29696__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29702);

var G__29703 = cljs.core.next.call(null,seq__29682_29696__$1);
var G__29704 = null;
var G__29705 = (0);
var G__29706 = (0);
seq__29682_29686 = G__29703;
chunk__29683_29687 = G__29704;
count__29684_29688 = G__29705;
i__29685_29689 = G__29706;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29680,map__29680__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29680,map__29680__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1446416619067