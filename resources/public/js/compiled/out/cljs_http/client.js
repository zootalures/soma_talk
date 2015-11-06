// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__16306__auto__ = v;
if(cljs.core.truth_(and__16306__auto__)){
return (v > (0));
} else {
return and__16306__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__24366_SHARP_,p2__24365_SHARP_){
var vec__24368 = clojure.string.split.call(null,p2__24365_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__24368,(0),null);
var v = cljs.core.nth.call(null,vec__24368,(1),null);
return cljs.core.assoc.call(null,p1__24366_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__24369_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__24369_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__24370){
var vec__24372 = p__24370;
var k = cljs.core.nth.call(null,vec__24372,(0),null);
var v = cljs.core.nth.call(null,vec__24372,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__24373_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__24373_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__16306__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__16306__auto__){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__16306__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__24374_SHARP_){
return cljs_http.client.decode_body.call(null,p1__24374_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__17383__auto__ = [];
var len__17376__auto___24379 = arguments.length;
var i__17377__auto___24380 = (0);
while(true){
if((i__17377__auto___24380 < len__17376__auto___24379)){
args__17383__auto__.push((arguments[i__17377__auto___24380]));

var G__24381 = (i__17377__auto___24380 + (1));
i__17377__auto___24380 = G__24381;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24377){
var vec__24378 = p__24377;
var accept = cljs.core.nth.call(null,vec__24378,(0),null);
return ((function (vec__24378,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__16318__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__24378,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq24375){
var G__24376 = cljs.core.first.call(null,seq24375);
var seq24375__$1 = cljs.core.next.call(null,seq24375);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__24376,seq24375__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__17383__auto__ = [];
var len__17376__auto___24386 = arguments.length;
var i__17377__auto___24387 = (0);
while(true){
if((i__17377__auto___24387 < len__17376__auto___24386)){
args__17383__auto__.push((arguments[i__17377__auto___24387]));

var G__24388 = (i__17377__auto___24387 + (1));
i__17377__auto___24387 = G__24388;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24384){
var vec__24385 = p__24384;
var content_type = cljs.core.nth.call(null,vec__24385,(0),null);
return ((function (vec__24385,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__16318__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__24385,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq24382){
var G__24383 = cljs.core.first.call(null,seq24382);
var seq24382__$1 = cljs.core.next.call(null,seq24382);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__24383,seq24382__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__24391 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__24391__$1 = ((((!((map__24391 == null)))?((((map__24391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24391):map__24391);
var encoding = cljs.core.get.call(null,map__24391__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__24391__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__24397 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__24397__$1 = ((((!((map__24397 == null)))?((((map__24397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24397):map__24397);
var decoding = cljs.core.get.call(null,map__24397__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__24397__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__24397,map__24397__$1,decoding,decoding_opts){
return (function (p1__24393_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__24393_SHARP_,decoding,decoding_opts);
});})(map__24397,map__24397__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__24397,map__24397__$1,decoding,decoding_opts,transit_decode){
return (function (p1__24394_SHARP_){
return cljs_http.client.decode_body.call(null,p1__24394_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__24397,map__24397__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__24399_SHARP_){
return cljs_http.client.decode_body.call(null,p1__24399_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__24403){
var map__24404 = p__24403;
var map__24404__$1 = ((((!((map__24404 == null)))?((((map__24404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24404):map__24404);
var req = map__24404__$1;
var query_params = cljs.core.get.call(null,map__24404__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__24409){
var map__24410 = p__24409;
var map__24410__$1 = ((((!((map__24410 == null)))?((((map__24410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24410):map__24410);
var request = map__24410__$1;
var form_params = cljs.core.get.call(null,map__24410__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__24410__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__16306__auto__ = form_params;
if(cljs.core.truth_(and__16306__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__16306__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__24412_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__24412_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__24417){
var map__24418 = p__24417;
var map__24418__$1 = ((((!((map__24418 == null)))?((((map__24418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24418):map__24418);
var req = map__24418__$1;
var query_params = cljs.core.get.call(null,map__24418__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__24418,map__24418__$1,req,query_params){
return (function (p1__24413_SHARP_){
return cljs.core.merge.call(null,p1__24413_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__24418,map__24418__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__17383__auto__ = [];
var len__17376__auto___24424 = arguments.length;
var i__17377__auto___24425 = (0);
while(true){
if((i__17377__auto___24425 < len__17376__auto___24424)){
args__17383__auto__.push((arguments[i__17377__auto___24425]));

var G__24426 = (i__17377__auto___24425 + (1));
i__17377__auto___24425 = G__24426;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24422){
var vec__24423 = p__24422;
var credentials = cljs.core.nth.call(null,vec__24423,(0),null);
return ((function (vec__24423,credentials){
return (function (req){
var credentials__$1 = (function (){var or__16318__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__24423,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq24420){
var G__24421 = cljs.core.first.call(null,seq24420);
var seq24420__$1 = cljs.core.next.call(null,seq24420);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__24421,seq24420__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/client.
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__17383__auto__ = [];
var len__17376__auto___24431 = arguments.length;
var i__17377__auto___24432 = (0);
while(true){
if((i__17377__auto___24432 < len__17376__auto___24431)){
args__17383__auto__.push((arguments[i__17377__auto___24432]));

var G__24433 = (i__17377__auto___24432 + (1));
i__17377__auto___24432 = G__24433;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24429){
var vec__24430 = p__24429;
var req = cljs.core.nth.call(null,vec__24430,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq24427){
var G__24428 = cljs.core.first.call(null,seq24427);
var seq24427__$1 = cljs.core.next.call(null,seq24427);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__24428,seq24427__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__17383__auto__ = [];
var len__17376__auto___24438 = arguments.length;
var i__17377__auto___24439 = (0);
while(true){
if((i__17377__auto___24439 < len__17376__auto___24438)){
args__17383__auto__.push((arguments[i__17377__auto___24439]));

var G__24440 = (i__17377__auto___24439 + (1));
i__17377__auto___24439 = G__24440;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24436){
var vec__24437 = p__24436;
var req = cljs.core.nth.call(null,vec__24437,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq24434){
var G__24435 = cljs.core.first.call(null,seq24434);
var seq24434__$1 = cljs.core.next.call(null,seq24434);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__24435,seq24434__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__17383__auto__ = [];
var len__17376__auto___24445 = arguments.length;
var i__17377__auto___24446 = (0);
while(true){
if((i__17377__auto___24446 < len__17376__auto___24445)){
args__17383__auto__.push((arguments[i__17377__auto___24446]));

var G__24447 = (i__17377__auto___24446 + (1));
i__17377__auto___24446 = G__24447;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24443){
var vec__24444 = p__24443;
var req = cljs.core.nth.call(null,vec__24444,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq24441){
var G__24442 = cljs.core.first.call(null,seq24441);
var seq24441__$1 = cljs.core.next.call(null,seq24441);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__24442,seq24441__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__17383__auto__ = [];
var len__17376__auto___24452 = arguments.length;
var i__17377__auto___24453 = (0);
while(true){
if((i__17377__auto___24453 < len__17376__auto___24452)){
args__17383__auto__.push((arguments[i__17377__auto___24453]));

var G__24454 = (i__17377__auto___24453 + (1));
i__17377__auto___24453 = G__24454;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24450){
var vec__24451 = p__24450;
var req = cljs.core.nth.call(null,vec__24451,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq24448){
var G__24449 = cljs.core.first.call(null,seq24448);
var seq24448__$1 = cljs.core.next.call(null,seq24448);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__24449,seq24448__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__17383__auto__ = [];
var len__17376__auto___24459 = arguments.length;
var i__17377__auto___24460 = (0);
while(true){
if((i__17377__auto___24460 < len__17376__auto___24459)){
args__17383__auto__.push((arguments[i__17377__auto___24460]));

var G__24461 = (i__17377__auto___24460 + (1));
i__17377__auto___24460 = G__24461;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24457){
var vec__24458 = p__24457;
var req = cljs.core.nth.call(null,vec__24458,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq24455){
var G__24456 = cljs.core.first.call(null,seq24455);
var seq24455__$1 = cljs.core.next.call(null,seq24455);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__24456,seq24455__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__17383__auto__ = [];
var len__17376__auto___24466 = arguments.length;
var i__17377__auto___24467 = (0);
while(true){
if((i__17377__auto___24467 < len__17376__auto___24466)){
args__17383__auto__.push((arguments[i__17377__auto___24467]));

var G__24468 = (i__17377__auto___24467 + (1));
i__17377__auto___24467 = G__24468;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24464){
var vec__24465 = p__24464;
var req = cljs.core.nth.call(null,vec__24465,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq24462){
var G__24463 = cljs.core.first.call(null,seq24462);
var seq24462__$1 = cljs.core.next.call(null,seq24462);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__24463,seq24462__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__17383__auto__ = [];
var len__17376__auto___24473 = arguments.length;
var i__17377__auto___24474 = (0);
while(true){
if((i__17377__auto___24474 < len__17376__auto___24473)){
args__17383__auto__.push((arguments[i__17377__auto___24474]));

var G__24475 = (i__17377__auto___24474 + (1));
i__17377__auto___24474 = G__24475;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24471){
var vec__24472 = p__24471;
var req = cljs.core.nth.call(null,vec__24472,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq24469){
var G__24470 = cljs.core.first.call(null,seq24469);
var seq24469__$1 = cljs.core.next.call(null,seq24469);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__24470,seq24469__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__17383__auto__ = [];
var len__17376__auto___24480 = arguments.length;
var i__17377__auto___24481 = (0);
while(true){
if((i__17377__auto___24481 < len__17376__auto___24480)){
args__17383__auto__.push((arguments[i__17377__auto___24481]));

var G__24482 = (i__17377__auto___24481 + (1));
i__17377__auto___24481 = G__24482;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24478){
var vec__24479 = p__24478;
var req = cljs.core.nth.call(null,vec__24479,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq24476){
var G__24477 = cljs.core.first.call(null,seq24476);
var seq24476__$1 = cljs.core.next.call(null,seq24476);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__24477,seq24476__$1);
});

//# sourceMappingURL=client.js.map?rel=1446416613175