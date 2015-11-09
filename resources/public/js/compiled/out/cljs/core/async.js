// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async10892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10892 = (function (fn_handler,f,meta10893){
this.fn_handler = fn_handler;
this.f = f;
this.meta10893 = meta10893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10894,meta10893__$1){
var self__ = this;
var _10894__$1 = this;
return (new cljs.core.async.t_cljs$core$async10892(self__.fn_handler,self__.f,meta10893__$1));
});

cljs.core.async.t_cljs$core$async10892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10894){
var self__ = this;
var _10894__$1 = this;
return self__.meta10893;
});

cljs.core.async.t_cljs$core$async10892.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta10893","meta10893",-12355219,null)], null);
});

cljs.core.async.t_cljs$core$async10892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10892";

cljs.core.async.t_cljs$core$async10892.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async10892");
});

cljs.core.async.__GT_t_cljs$core$async10892 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async10892(fn_handler__$1,f__$1,meta10893){
return (new cljs.core.async.t_cljs$core$async10892(fn_handler__$1,f__$1,meta10893));
});

}

return (new cljs.core.async.t_cljs$core$async10892(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args10897 = [];
var len__5621__auto___10900 = arguments.length;
var i__5622__auto___10901 = (0);
while(true){
if((i__5622__auto___10901 < len__5621__auto___10900)){
args10897.push((arguments[i__5622__auto___10901]));

var G__10902 = (i__5622__auto___10901 + (1));
i__5622__auto___10901 = G__10902;
continue;
} else {
}
break;
}

var G__10899 = args10897.length;
switch (G__10899) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10897.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args10904 = [];
var len__5621__auto___10907 = arguments.length;
var i__5622__auto___10908 = (0);
while(true){
if((i__5622__auto___10908 < len__5621__auto___10907)){
args10904.push((arguments[i__5622__auto___10908]));

var G__10909 = (i__5622__auto___10908 + (1));
i__5622__auto___10908 = G__10909;
continue;
} else {
}
break;
}

var G__10906 = args10904.length;
switch (G__10906) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10904.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10911 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10911);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10911,ret){
return (function (){
return fn1.call(null,val_10911);
});})(val_10911,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args10912 = [];
var len__5621__auto___10915 = arguments.length;
var i__5622__auto___10916 = (0);
while(true){
if((i__5622__auto___10916 < len__5621__auto___10915)){
args10912.push((arguments[i__5622__auto___10916]));

var G__10917 = (i__5622__auto___10916 + (1));
i__5622__auto___10916 = G__10917;
continue;
} else {
}
break;
}

var G__10914 = args10912.length;
switch (G__10914) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10912.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5466__auto___10919 = n;
var x_10920 = (0);
while(true){
if((x_10920 < n__5466__auto___10919)){
(a[x_10920] = (0));

var G__10921 = (x_10920 + (1));
x_10920 = G__10921;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10922 = (i + (1));
i = G__10922;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async10926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10926 = (function (alt_flag,flag,meta10927){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta10927 = meta10927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10928,meta10927__$1){
var self__ = this;
var _10928__$1 = this;
return (new cljs.core.async.t_cljs$core$async10926(self__.alt_flag,self__.flag,meta10927__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10928){
var self__ = this;
var _10928__$1 = this;
return self__.meta10927;
});})(flag))
;

cljs.core.async.t_cljs$core$async10926.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10926.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10927","meta10927",1550922804,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10926";

cljs.core.async.t_cljs$core$async10926.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async10926");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10926 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10926(alt_flag__$1,flag__$1,meta10927){
return (new cljs.core.async.t_cljs$core$async10926(alt_flag__$1,flag__$1,meta10927));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10926(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10932 = (function (alt_handler,flag,cb,meta10933){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta10933 = meta10933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10934,meta10933__$1){
var self__ = this;
var _10934__$1 = this;
return (new cljs.core.async.t_cljs$core$async10932(self__.alt_handler,self__.flag,self__.cb,meta10933__$1));
});

cljs.core.async.t_cljs$core$async10932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10934){
var self__ = this;
var _10934__$1 = this;
return self__.meta10933;
});

cljs.core.async.t_cljs$core$async10932.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10933","meta10933",-1428479402,null)], null);
});

cljs.core.async.t_cljs$core$async10932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10932";

cljs.core.async.t_cljs$core$async10932.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async10932");
});

cljs.core.async.__GT_t_cljs$core$async10932 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10932(alt_handler__$1,flag__$1,cb__$1,meta10933){
return (new cljs.core.async.t_cljs$core$async10932(alt_handler__$1,flag__$1,cb__$1,meta10933));
});

}

return (new cljs.core.async.t_cljs$core$async10932(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10935_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10935_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10936_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10936_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4563__auto__ = wport;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10937 = (i + (1));
i = G__10937;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4563__auto__ = ret;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4551__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4551__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4551__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5628__auto__ = [];
var len__5621__auto___10943 = arguments.length;
var i__5622__auto___10944 = (0);
while(true){
if((i__5622__auto___10944 < len__5621__auto___10943)){
args__5628__auto__.push((arguments[i__5622__auto___10944]));

var G__10945 = (i__5622__auto___10944 + (1));
i__5622__auto___10944 = G__10945;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10940){
var map__10941 = p__10940;
var map__10941__$1 = ((((!((map__10941 == null)))?((((map__10941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10941):map__10941);
var opts = map__10941__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10938){
var G__10939 = cljs.core.first.call(null,seq10938);
var seq10938__$1 = cljs.core.next.call(null,seq10938);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10939,seq10938__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args10946 = [];
var len__5621__auto___10996 = arguments.length;
var i__5622__auto___10997 = (0);
while(true){
if((i__5622__auto___10997 < len__5621__auto___10996)){
args10946.push((arguments[i__5622__auto___10997]));

var G__10998 = (i__5622__auto___10997 + (1));
i__5622__auto___10997 = G__10998;
continue;
} else {
}
break;
}

var G__10948 = args10946.length;
switch (G__10948) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10946.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7080__auto___11000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___11000){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___11000){
return (function (state_10972){
var state_val_10973 = (state_10972[(1)]);
if((state_val_10973 === (7))){
var inst_10968 = (state_10972[(2)]);
var state_10972__$1 = state_10972;
var statearr_10974_11001 = state_10972__$1;
(statearr_10974_11001[(2)] = inst_10968);

(statearr_10974_11001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (1))){
var state_10972__$1 = state_10972;
var statearr_10975_11002 = state_10972__$1;
(statearr_10975_11002[(2)] = null);

(statearr_10975_11002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (4))){
var inst_10951 = (state_10972[(7)]);
var inst_10951__$1 = (state_10972[(2)]);
var inst_10952 = (inst_10951__$1 == null);
var state_10972__$1 = (function (){var statearr_10976 = state_10972;
(statearr_10976[(7)] = inst_10951__$1);

return statearr_10976;
})();
if(cljs.core.truth_(inst_10952)){
var statearr_10977_11003 = state_10972__$1;
(statearr_10977_11003[(1)] = (5));

} else {
var statearr_10978_11004 = state_10972__$1;
(statearr_10978_11004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (13))){
var state_10972__$1 = state_10972;
var statearr_10979_11005 = state_10972__$1;
(statearr_10979_11005[(2)] = null);

(statearr_10979_11005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (6))){
var inst_10951 = (state_10972[(7)]);
var state_10972__$1 = state_10972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10972__$1,(11),to,inst_10951);
} else {
if((state_val_10973 === (3))){
var inst_10970 = (state_10972[(2)]);
var state_10972__$1 = state_10972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10972__$1,inst_10970);
} else {
if((state_val_10973 === (12))){
var state_10972__$1 = state_10972;
var statearr_10980_11006 = state_10972__$1;
(statearr_10980_11006[(2)] = null);

(statearr_10980_11006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (2))){
var state_10972__$1 = state_10972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10972__$1,(4),from);
} else {
if((state_val_10973 === (11))){
var inst_10961 = (state_10972[(2)]);
var state_10972__$1 = state_10972;
if(cljs.core.truth_(inst_10961)){
var statearr_10981_11007 = state_10972__$1;
(statearr_10981_11007[(1)] = (12));

} else {
var statearr_10982_11008 = state_10972__$1;
(statearr_10982_11008[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (9))){
var state_10972__$1 = state_10972;
var statearr_10983_11009 = state_10972__$1;
(statearr_10983_11009[(2)] = null);

(statearr_10983_11009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (5))){
var state_10972__$1 = state_10972;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10984_11010 = state_10972__$1;
(statearr_10984_11010[(1)] = (8));

} else {
var statearr_10985_11011 = state_10972__$1;
(statearr_10985_11011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (14))){
var inst_10966 = (state_10972[(2)]);
var state_10972__$1 = state_10972;
var statearr_10986_11012 = state_10972__$1;
(statearr_10986_11012[(2)] = inst_10966);

(statearr_10986_11012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (10))){
var inst_10958 = (state_10972[(2)]);
var state_10972__$1 = state_10972;
var statearr_10987_11013 = state_10972__$1;
(statearr_10987_11013[(2)] = inst_10958);

(statearr_10987_11013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (8))){
var inst_10955 = cljs.core.async.close_BANG_.call(null,to);
var state_10972__$1 = state_10972;
var statearr_10988_11014 = state_10972__$1;
(statearr_10988_11014[(2)] = inst_10955);

(statearr_10988_11014[(1)] = (10));


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
});})(c__7080__auto___11000))
;
return ((function (switch__7015__auto__,c__7080__auto___11000){
return (function() {
var cljs$core$async$state_machine__7016__auto__ = null;
var cljs$core$async$state_machine__7016__auto____0 = (function (){
var statearr_10992 = [null,null,null,null,null,null,null,null];
(statearr_10992[(0)] = cljs$core$async$state_machine__7016__auto__);

(statearr_10992[(1)] = (1));

return statearr_10992;
});
var cljs$core$async$state_machine__7016__auto____1 = (function (state_10972){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_10972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e10993){if((e10993 instanceof Object)){
var ex__7019__auto__ = e10993;
var statearr_10994_11015 = state_10972;
(statearr_10994_11015[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11016 = state_10972;
state_10972 = G__11016;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$state_machine__7016__auto__ = function(state_10972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7016__auto____1.call(this,state_10972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7016__auto____0;
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7016__auto____1;
return cljs$core$async$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___11000))
})();
var state__7082__auto__ = (function (){var statearr_10995 = f__7081__auto__.call(null);
(statearr_10995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___11000);

return statearr_10995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___11000))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11200){
var vec__11201 = p__11200;
var v = cljs.core.nth.call(null,vec__11201,(0),null);
var p = cljs.core.nth.call(null,vec__11201,(1),null);
var job = vec__11201;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7080__auto___11383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___11383,res,vec__11201,v,p,job,jobs,results){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___11383,res,vec__11201,v,p,job,jobs,results){
return (function (state_11206){
var state_val_11207 = (state_11206[(1)]);
if((state_val_11207 === (1))){
var state_11206__$1 = state_11206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11206__$1,(2),res,v);
} else {
if((state_val_11207 === (2))){
var inst_11203 = (state_11206[(2)]);
var inst_11204 = cljs.core.async.close_BANG_.call(null,res);
var state_11206__$1 = (function (){var statearr_11208 = state_11206;
(statearr_11208[(7)] = inst_11203);

return statearr_11208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11206__$1,inst_11204);
} else {
return null;
}
}
});})(c__7080__auto___11383,res,vec__11201,v,p,job,jobs,results))
;
return ((function (switch__7015__auto__,c__7080__auto___11383,res,vec__11201,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0 = (function (){
var statearr_11212 = [null,null,null,null,null,null,null,null];
(statearr_11212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__);

(statearr_11212[(1)] = (1));

return statearr_11212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1 = (function (state_11206){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_11206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e11213){if((e11213 instanceof Object)){
var ex__7019__auto__ = e11213;
var statearr_11214_11384 = state_11206;
(statearr_11214_11384[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11385 = state_11206;
state_11206 = G__11385;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__ = function(state_11206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1.call(this,state_11206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___11383,res,vec__11201,v,p,job,jobs,results))
})();
var state__7082__auto__ = (function (){var statearr_11215 = f__7081__auto__.call(null);
(statearr_11215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___11383);

return statearr_11215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___11383,res,vec__11201,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11216){
var vec__11217 = p__11216;
var v = cljs.core.nth.call(null,vec__11217,(0),null);
var p = cljs.core.nth.call(null,vec__11217,(1),null);
var job = vec__11217;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5466__auto___11386 = n;
var __11387 = (0);
while(true){
if((__11387 < n__5466__auto___11386)){
var G__11218_11388 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11218_11388) {
case "compute":
var c__7080__auto___11390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11387,c__7080__auto___11390,G__11218_11388,n__5466__auto___11386,jobs,results,process,async){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (__11387,c__7080__auto___11390,G__11218_11388,n__5466__auto___11386,jobs,results,process,async){
return (function (state_11231){
var state_val_11232 = (state_11231[(1)]);
if((state_val_11232 === (1))){
var state_11231__$1 = state_11231;
var statearr_11233_11391 = state_11231__$1;
(statearr_11233_11391[(2)] = null);

(statearr_11233_11391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11232 === (2))){
var state_11231__$1 = state_11231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11231__$1,(4),jobs);
} else {
if((state_val_11232 === (3))){
var inst_11229 = (state_11231[(2)]);
var state_11231__$1 = state_11231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11231__$1,inst_11229);
} else {
if((state_val_11232 === (4))){
var inst_11221 = (state_11231[(2)]);
var inst_11222 = process.call(null,inst_11221);
var state_11231__$1 = state_11231;
if(cljs.core.truth_(inst_11222)){
var statearr_11234_11392 = state_11231__$1;
(statearr_11234_11392[(1)] = (5));

} else {
var statearr_11235_11393 = state_11231__$1;
(statearr_11235_11393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11232 === (5))){
var state_11231__$1 = state_11231;
var statearr_11236_11394 = state_11231__$1;
(statearr_11236_11394[(2)] = null);

(statearr_11236_11394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11232 === (6))){
var state_11231__$1 = state_11231;
var statearr_11237_11395 = state_11231__$1;
(statearr_11237_11395[(2)] = null);

(statearr_11237_11395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11232 === (7))){
var inst_11227 = (state_11231[(2)]);
var state_11231__$1 = state_11231;
var statearr_11238_11396 = state_11231__$1;
(statearr_11238_11396[(2)] = inst_11227);

(statearr_11238_11396[(1)] = (3));


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
});})(__11387,c__7080__auto___11390,G__11218_11388,n__5466__auto___11386,jobs,results,process,async))
;
return ((function (__11387,switch__7015__auto__,c__7080__auto___11390,G__11218_11388,n__5466__auto___11386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0 = (function (){
var statearr_11242 = [null,null,null,null,null,null,null];
(statearr_11242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__);

(statearr_11242[(1)] = (1));

return statearr_11242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1 = (function (state_11231){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_11231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e11243){if((e11243 instanceof Object)){
var ex__7019__auto__ = e11243;
var statearr_11244_11397 = state_11231;
(statearr_11244_11397[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11398 = state_11231;
state_11231 = G__11398;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__ = function(state_11231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1.call(this,state_11231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__;
})()
;})(__11387,switch__7015__auto__,c__7080__auto___11390,G__11218_11388,n__5466__auto___11386,jobs,results,process,async))
})();
var state__7082__auto__ = (function (){var statearr_11245 = f__7081__auto__.call(null);
(statearr_11245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___11390);

return statearr_11245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(__11387,c__7080__auto___11390,G__11218_11388,n__5466__auto___11386,jobs,results,process,async))
);


break;
case "async":
var c__7080__auto___11399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11387,c__7080__auto___11399,G__11218_11388,n__5466__auto___11386,jobs,results,process,async){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (__11387,c__7080__auto___11399,G__11218_11388,n__5466__auto___11386,jobs,results,process,async){
return (function (state_11258){
var state_val_11259 = (state_11258[(1)]);
if((state_val_11259 === (1))){
var state_11258__$1 = state_11258;
var statearr_11260_11400 = state_11258__$1;
(statearr_11260_11400[(2)] = null);

(statearr_11260_11400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (2))){
var state_11258__$1 = state_11258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11258__$1,(4),jobs);
} else {
if((state_val_11259 === (3))){
var inst_11256 = (state_11258[(2)]);
var state_11258__$1 = state_11258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11258__$1,inst_11256);
} else {
if((state_val_11259 === (4))){
var inst_11248 = (state_11258[(2)]);
var inst_11249 = async.call(null,inst_11248);
var state_11258__$1 = state_11258;
if(cljs.core.truth_(inst_11249)){
var statearr_11261_11401 = state_11258__$1;
(statearr_11261_11401[(1)] = (5));

} else {
var statearr_11262_11402 = state_11258__$1;
(statearr_11262_11402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (5))){
var state_11258__$1 = state_11258;
var statearr_11263_11403 = state_11258__$1;
(statearr_11263_11403[(2)] = null);

(statearr_11263_11403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (6))){
var state_11258__$1 = state_11258;
var statearr_11264_11404 = state_11258__$1;
(statearr_11264_11404[(2)] = null);

(statearr_11264_11404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (7))){
var inst_11254 = (state_11258[(2)]);
var state_11258__$1 = state_11258;
var statearr_11265_11405 = state_11258__$1;
(statearr_11265_11405[(2)] = inst_11254);

(statearr_11265_11405[(1)] = (3));


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
});})(__11387,c__7080__auto___11399,G__11218_11388,n__5466__auto___11386,jobs,results,process,async))
;
return ((function (__11387,switch__7015__auto__,c__7080__auto___11399,G__11218_11388,n__5466__auto___11386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0 = (function (){
var statearr_11269 = [null,null,null,null,null,null,null];
(statearr_11269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__);

(statearr_11269[(1)] = (1));

return statearr_11269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1 = (function (state_11258){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_11258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e11270){if((e11270 instanceof Object)){
var ex__7019__auto__ = e11270;
var statearr_11271_11406 = state_11258;
(statearr_11271_11406[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11407 = state_11258;
state_11258 = G__11407;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__ = function(state_11258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1.call(this,state_11258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__;
})()
;})(__11387,switch__7015__auto__,c__7080__auto___11399,G__11218_11388,n__5466__auto___11386,jobs,results,process,async))
})();
var state__7082__auto__ = (function (){var statearr_11272 = f__7081__auto__.call(null);
(statearr_11272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___11399);

return statearr_11272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(__11387,c__7080__auto___11399,G__11218_11388,n__5466__auto___11386,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11408 = (__11387 + (1));
__11387 = G__11408;
continue;
} else {
}
break;
}

var c__7080__auto___11409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___11409,jobs,results,process,async){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___11409,jobs,results,process,async){
return (function (state_11294){
var state_val_11295 = (state_11294[(1)]);
if((state_val_11295 === (1))){
var state_11294__$1 = state_11294;
var statearr_11296_11410 = state_11294__$1;
(statearr_11296_11410[(2)] = null);

(statearr_11296_11410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (2))){
var state_11294__$1 = state_11294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11294__$1,(4),from);
} else {
if((state_val_11295 === (3))){
var inst_11292 = (state_11294[(2)]);
var state_11294__$1 = state_11294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11294__$1,inst_11292);
} else {
if((state_val_11295 === (4))){
var inst_11275 = (state_11294[(7)]);
var inst_11275__$1 = (state_11294[(2)]);
var inst_11276 = (inst_11275__$1 == null);
var state_11294__$1 = (function (){var statearr_11297 = state_11294;
(statearr_11297[(7)] = inst_11275__$1);

return statearr_11297;
})();
if(cljs.core.truth_(inst_11276)){
var statearr_11298_11411 = state_11294__$1;
(statearr_11298_11411[(1)] = (5));

} else {
var statearr_11299_11412 = state_11294__$1;
(statearr_11299_11412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (5))){
var inst_11278 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11294__$1 = state_11294;
var statearr_11300_11413 = state_11294__$1;
(statearr_11300_11413[(2)] = inst_11278);

(statearr_11300_11413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (6))){
var inst_11275 = (state_11294[(7)]);
var inst_11280 = (state_11294[(8)]);
var inst_11280__$1 = cljs.core.async.chan.call(null,(1));
var inst_11281 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11282 = [inst_11275,inst_11280__$1];
var inst_11283 = (new cljs.core.PersistentVector(null,2,(5),inst_11281,inst_11282,null));
var state_11294__$1 = (function (){var statearr_11301 = state_11294;
(statearr_11301[(8)] = inst_11280__$1);

return statearr_11301;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11294__$1,(8),jobs,inst_11283);
} else {
if((state_val_11295 === (7))){
var inst_11290 = (state_11294[(2)]);
var state_11294__$1 = state_11294;
var statearr_11302_11414 = state_11294__$1;
(statearr_11302_11414[(2)] = inst_11290);

(statearr_11302_11414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (8))){
var inst_11280 = (state_11294[(8)]);
var inst_11285 = (state_11294[(2)]);
var state_11294__$1 = (function (){var statearr_11303 = state_11294;
(statearr_11303[(9)] = inst_11285);

return statearr_11303;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11294__$1,(9),results,inst_11280);
} else {
if((state_val_11295 === (9))){
var inst_11287 = (state_11294[(2)]);
var state_11294__$1 = (function (){var statearr_11304 = state_11294;
(statearr_11304[(10)] = inst_11287);

return statearr_11304;
})();
var statearr_11305_11415 = state_11294__$1;
(statearr_11305_11415[(2)] = null);

(statearr_11305_11415[(1)] = (2));


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
});})(c__7080__auto___11409,jobs,results,process,async))
;
return ((function (switch__7015__auto__,c__7080__auto___11409,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0 = (function (){
var statearr_11309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__);

(statearr_11309[(1)] = (1));

return statearr_11309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1 = (function (state_11294){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_11294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e11310){if((e11310 instanceof Object)){
var ex__7019__auto__ = e11310;
var statearr_11311_11416 = state_11294;
(statearr_11311_11416[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11417 = state_11294;
state_11294 = G__11417;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__ = function(state_11294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1.call(this,state_11294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___11409,jobs,results,process,async))
})();
var state__7082__auto__ = (function (){var statearr_11312 = f__7081__auto__.call(null);
(statearr_11312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___11409);

return statearr_11312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___11409,jobs,results,process,async))
);


var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__,jobs,results,process,async){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto__,jobs,results,process,async){
return (function (state_11350){
var state_val_11351 = (state_11350[(1)]);
if((state_val_11351 === (7))){
var inst_11346 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11352_11418 = state_11350__$1;
(statearr_11352_11418[(2)] = inst_11346);

(statearr_11352_11418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (20))){
var state_11350__$1 = state_11350;
var statearr_11353_11419 = state_11350__$1;
(statearr_11353_11419[(2)] = null);

(statearr_11353_11419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (1))){
var state_11350__$1 = state_11350;
var statearr_11354_11420 = state_11350__$1;
(statearr_11354_11420[(2)] = null);

(statearr_11354_11420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (4))){
var inst_11315 = (state_11350[(7)]);
var inst_11315__$1 = (state_11350[(2)]);
var inst_11316 = (inst_11315__$1 == null);
var state_11350__$1 = (function (){var statearr_11355 = state_11350;
(statearr_11355[(7)] = inst_11315__$1);

return statearr_11355;
})();
if(cljs.core.truth_(inst_11316)){
var statearr_11356_11421 = state_11350__$1;
(statearr_11356_11421[(1)] = (5));

} else {
var statearr_11357_11422 = state_11350__$1;
(statearr_11357_11422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (15))){
var inst_11328 = (state_11350[(8)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11350__$1,(18),to,inst_11328);
} else {
if((state_val_11351 === (21))){
var inst_11341 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11358_11423 = state_11350__$1;
(statearr_11358_11423[(2)] = inst_11341);

(statearr_11358_11423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (13))){
var inst_11343 = (state_11350[(2)]);
var state_11350__$1 = (function (){var statearr_11359 = state_11350;
(statearr_11359[(9)] = inst_11343);

return statearr_11359;
})();
var statearr_11360_11424 = state_11350__$1;
(statearr_11360_11424[(2)] = null);

(statearr_11360_11424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (6))){
var inst_11315 = (state_11350[(7)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11350__$1,(11),inst_11315);
} else {
if((state_val_11351 === (17))){
var inst_11336 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
if(cljs.core.truth_(inst_11336)){
var statearr_11361_11425 = state_11350__$1;
(statearr_11361_11425[(1)] = (19));

} else {
var statearr_11362_11426 = state_11350__$1;
(statearr_11362_11426[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (3))){
var inst_11348 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11350__$1,inst_11348);
} else {
if((state_val_11351 === (12))){
var inst_11325 = (state_11350[(10)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11350__$1,(14),inst_11325);
} else {
if((state_val_11351 === (2))){
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11350__$1,(4),results);
} else {
if((state_val_11351 === (19))){
var state_11350__$1 = state_11350;
var statearr_11363_11427 = state_11350__$1;
(statearr_11363_11427[(2)] = null);

(statearr_11363_11427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (11))){
var inst_11325 = (state_11350[(2)]);
var state_11350__$1 = (function (){var statearr_11364 = state_11350;
(statearr_11364[(10)] = inst_11325);

return statearr_11364;
})();
var statearr_11365_11428 = state_11350__$1;
(statearr_11365_11428[(2)] = null);

(statearr_11365_11428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (9))){
var state_11350__$1 = state_11350;
var statearr_11366_11429 = state_11350__$1;
(statearr_11366_11429[(2)] = null);

(statearr_11366_11429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (5))){
var state_11350__$1 = state_11350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11367_11430 = state_11350__$1;
(statearr_11367_11430[(1)] = (8));

} else {
var statearr_11368_11431 = state_11350__$1;
(statearr_11368_11431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (14))){
var inst_11328 = (state_11350[(8)]);
var inst_11330 = (state_11350[(11)]);
var inst_11328__$1 = (state_11350[(2)]);
var inst_11329 = (inst_11328__$1 == null);
var inst_11330__$1 = cljs.core.not.call(null,inst_11329);
var state_11350__$1 = (function (){var statearr_11369 = state_11350;
(statearr_11369[(8)] = inst_11328__$1);

(statearr_11369[(11)] = inst_11330__$1);

return statearr_11369;
})();
if(inst_11330__$1){
var statearr_11370_11432 = state_11350__$1;
(statearr_11370_11432[(1)] = (15));

} else {
var statearr_11371_11433 = state_11350__$1;
(statearr_11371_11433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (16))){
var inst_11330 = (state_11350[(11)]);
var state_11350__$1 = state_11350;
var statearr_11372_11434 = state_11350__$1;
(statearr_11372_11434[(2)] = inst_11330);

(statearr_11372_11434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (10))){
var inst_11322 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11373_11435 = state_11350__$1;
(statearr_11373_11435[(2)] = inst_11322);

(statearr_11373_11435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (18))){
var inst_11333 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11374_11436 = state_11350__$1;
(statearr_11374_11436[(2)] = inst_11333);

(statearr_11374_11436[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (8))){
var inst_11319 = cljs.core.async.close_BANG_.call(null,to);
var state_11350__$1 = state_11350;
var statearr_11375_11437 = state_11350__$1;
(statearr_11375_11437[(2)] = inst_11319);

(statearr_11375_11437[(1)] = (10));


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
});})(c__7080__auto__,jobs,results,process,async))
;
return ((function (switch__7015__auto__,c__7080__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0 = (function (){
var statearr_11379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__);

(statearr_11379[(1)] = (1));

return statearr_11379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1 = (function (state_11350){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_11350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e11380){if((e11380 instanceof Object)){
var ex__7019__auto__ = e11380;
var statearr_11381_11438 = state_11350;
(statearr_11381_11438[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11439 = state_11350;
state_11350 = G__11439;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__ = function(state_11350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1.call(this,state_11350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto__,jobs,results,process,async))
})();
var state__7082__auto__ = (function (){var statearr_11382 = f__7081__auto__.call(null);
(statearr_11382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_11382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__,jobs,results,process,async))
);

return c__7080__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args11440 = [];
var len__5621__auto___11443 = arguments.length;
var i__5622__auto___11444 = (0);
while(true){
if((i__5622__auto___11444 < len__5621__auto___11443)){
args11440.push((arguments[i__5622__auto___11444]));

var G__11445 = (i__5622__auto___11444 + (1));
i__5622__auto___11444 = G__11445;
continue;
} else {
}
break;
}

var G__11442 = args11440.length;
switch (G__11442) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11440.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args11447 = [];
var len__5621__auto___11450 = arguments.length;
var i__5622__auto___11451 = (0);
while(true){
if((i__5622__auto___11451 < len__5621__auto___11450)){
args11447.push((arguments[i__5622__auto___11451]));

var G__11452 = (i__5622__auto___11451 + (1));
i__5622__auto___11451 = G__11452;
continue;
} else {
}
break;
}

var G__11449 = args11447.length;
switch (G__11449) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11447.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args11454 = [];
var len__5621__auto___11507 = arguments.length;
var i__5622__auto___11508 = (0);
while(true){
if((i__5622__auto___11508 < len__5621__auto___11507)){
args11454.push((arguments[i__5622__auto___11508]));

var G__11509 = (i__5622__auto___11508 + (1));
i__5622__auto___11508 = G__11509;
continue;
} else {
}
break;
}

var G__11456 = args11454.length;
switch (G__11456) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11454.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7080__auto___11511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___11511,tc,fc){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___11511,tc,fc){
return (function (state_11482){
var state_val_11483 = (state_11482[(1)]);
if((state_val_11483 === (7))){
var inst_11478 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
var statearr_11484_11512 = state_11482__$1;
(statearr_11484_11512[(2)] = inst_11478);

(statearr_11484_11512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (1))){
var state_11482__$1 = state_11482;
var statearr_11485_11513 = state_11482__$1;
(statearr_11485_11513[(2)] = null);

(statearr_11485_11513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (4))){
var inst_11459 = (state_11482[(7)]);
var inst_11459__$1 = (state_11482[(2)]);
var inst_11460 = (inst_11459__$1 == null);
var state_11482__$1 = (function (){var statearr_11486 = state_11482;
(statearr_11486[(7)] = inst_11459__$1);

return statearr_11486;
})();
if(cljs.core.truth_(inst_11460)){
var statearr_11487_11514 = state_11482__$1;
(statearr_11487_11514[(1)] = (5));

} else {
var statearr_11488_11515 = state_11482__$1;
(statearr_11488_11515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (13))){
var state_11482__$1 = state_11482;
var statearr_11489_11516 = state_11482__$1;
(statearr_11489_11516[(2)] = null);

(statearr_11489_11516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (6))){
var inst_11459 = (state_11482[(7)]);
var inst_11465 = p.call(null,inst_11459);
var state_11482__$1 = state_11482;
if(cljs.core.truth_(inst_11465)){
var statearr_11490_11517 = state_11482__$1;
(statearr_11490_11517[(1)] = (9));

} else {
var statearr_11491_11518 = state_11482__$1;
(statearr_11491_11518[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (3))){
var inst_11480 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11482__$1,inst_11480);
} else {
if((state_val_11483 === (12))){
var state_11482__$1 = state_11482;
var statearr_11492_11519 = state_11482__$1;
(statearr_11492_11519[(2)] = null);

(statearr_11492_11519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (2))){
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11482__$1,(4),ch);
} else {
if((state_val_11483 === (11))){
var inst_11459 = (state_11482[(7)]);
var inst_11469 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11482__$1,(8),inst_11469,inst_11459);
} else {
if((state_val_11483 === (9))){
var state_11482__$1 = state_11482;
var statearr_11493_11520 = state_11482__$1;
(statearr_11493_11520[(2)] = tc);

(statearr_11493_11520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (5))){
var inst_11462 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11463 = cljs.core.async.close_BANG_.call(null,fc);
var state_11482__$1 = (function (){var statearr_11494 = state_11482;
(statearr_11494[(8)] = inst_11462);

return statearr_11494;
})();
var statearr_11495_11521 = state_11482__$1;
(statearr_11495_11521[(2)] = inst_11463);

(statearr_11495_11521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (14))){
var inst_11476 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
var statearr_11496_11522 = state_11482__$1;
(statearr_11496_11522[(2)] = inst_11476);

(statearr_11496_11522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (10))){
var state_11482__$1 = state_11482;
var statearr_11497_11523 = state_11482__$1;
(statearr_11497_11523[(2)] = fc);

(statearr_11497_11523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (8))){
var inst_11471 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
if(cljs.core.truth_(inst_11471)){
var statearr_11498_11524 = state_11482__$1;
(statearr_11498_11524[(1)] = (12));

} else {
var statearr_11499_11525 = state_11482__$1;
(statearr_11499_11525[(1)] = (13));

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
});})(c__7080__auto___11511,tc,fc))
;
return ((function (switch__7015__auto__,c__7080__auto___11511,tc,fc){
return (function() {
var cljs$core$async$state_machine__7016__auto__ = null;
var cljs$core$async$state_machine__7016__auto____0 = (function (){
var statearr_11503 = [null,null,null,null,null,null,null,null,null];
(statearr_11503[(0)] = cljs$core$async$state_machine__7016__auto__);

(statearr_11503[(1)] = (1));

return statearr_11503;
});
var cljs$core$async$state_machine__7016__auto____1 = (function (state_11482){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_11482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e11504){if((e11504 instanceof Object)){
var ex__7019__auto__ = e11504;
var statearr_11505_11526 = state_11482;
(statearr_11505_11526[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11527 = state_11482;
state_11482 = G__11527;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$state_machine__7016__auto__ = function(state_11482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7016__auto____1.call(this,state_11482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7016__auto____0;
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7016__auto____1;
return cljs$core$async$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___11511,tc,fc))
})();
var state__7082__auto__ = (function (){var statearr_11506 = f__7081__auto__.call(null);
(statearr_11506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___11511);

return statearr_11506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___11511,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto__){
return (function (state_11574){
var state_val_11575 = (state_11574[(1)]);
if((state_val_11575 === (1))){
var inst_11560 = init;
var state_11574__$1 = (function (){var statearr_11576 = state_11574;
(statearr_11576[(7)] = inst_11560);

return statearr_11576;
})();
var statearr_11577_11592 = state_11574__$1;
(statearr_11577_11592[(2)] = null);

(statearr_11577_11592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (2))){
var state_11574__$1 = state_11574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11574__$1,(4),ch);
} else {
if((state_val_11575 === (3))){
var inst_11572 = (state_11574[(2)]);
var state_11574__$1 = state_11574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11574__$1,inst_11572);
} else {
if((state_val_11575 === (4))){
var inst_11563 = (state_11574[(8)]);
var inst_11563__$1 = (state_11574[(2)]);
var inst_11564 = (inst_11563__$1 == null);
var state_11574__$1 = (function (){var statearr_11578 = state_11574;
(statearr_11578[(8)] = inst_11563__$1);

return statearr_11578;
})();
if(cljs.core.truth_(inst_11564)){
var statearr_11579_11593 = state_11574__$1;
(statearr_11579_11593[(1)] = (5));

} else {
var statearr_11580_11594 = state_11574__$1;
(statearr_11580_11594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (5))){
var inst_11560 = (state_11574[(7)]);
var state_11574__$1 = state_11574;
var statearr_11581_11595 = state_11574__$1;
(statearr_11581_11595[(2)] = inst_11560);

(statearr_11581_11595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (6))){
var inst_11560 = (state_11574[(7)]);
var inst_11563 = (state_11574[(8)]);
var inst_11567 = f.call(null,inst_11560,inst_11563);
var inst_11560__$1 = inst_11567;
var state_11574__$1 = (function (){var statearr_11582 = state_11574;
(statearr_11582[(7)] = inst_11560__$1);

return statearr_11582;
})();
var statearr_11583_11596 = state_11574__$1;
(statearr_11583_11596[(2)] = null);

(statearr_11583_11596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (7))){
var inst_11570 = (state_11574[(2)]);
var state_11574__$1 = state_11574;
var statearr_11584_11597 = state_11574__$1;
(statearr_11584_11597[(2)] = inst_11570);

(statearr_11584_11597[(1)] = (3));


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
});})(c__7080__auto__))
;
return ((function (switch__7015__auto__,c__7080__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7016__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7016__auto____0 = (function (){
var statearr_11588 = [null,null,null,null,null,null,null,null,null];
(statearr_11588[(0)] = cljs$core$async$reduce_$_state_machine__7016__auto__);

(statearr_11588[(1)] = (1));

return statearr_11588;
});
var cljs$core$async$reduce_$_state_machine__7016__auto____1 = (function (state_11574){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_11574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e11589){if((e11589 instanceof Object)){
var ex__7019__auto__ = e11589;
var statearr_11590_11598 = state_11574;
(statearr_11590_11598[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11599 = state_11574;
state_11574 = G__11599;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7016__auto__ = function(state_11574){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7016__auto____1.call(this,state_11574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7016__auto____0;
cljs$core$async$reduce_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7016__auto____1;
return cljs$core$async$reduce_$_state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto__))
})();
var state__7082__auto__ = (function (){var statearr_11591 = f__7081__auto__.call(null);
(statearr_11591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_11591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__))
);

return c__7080__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args11600 = [];
var len__5621__auto___11652 = arguments.length;
var i__5622__auto___11653 = (0);
while(true){
if((i__5622__auto___11653 < len__5621__auto___11652)){
args11600.push((arguments[i__5622__auto___11653]));

var G__11654 = (i__5622__auto___11653 + (1));
i__5622__auto___11653 = G__11654;
continue;
} else {
}
break;
}

var G__11602 = args11600.length;
switch (G__11602) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11600.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto__){
return (function (state_11627){
var state_val_11628 = (state_11627[(1)]);
if((state_val_11628 === (7))){
var inst_11609 = (state_11627[(2)]);
var state_11627__$1 = state_11627;
var statearr_11629_11656 = state_11627__$1;
(statearr_11629_11656[(2)] = inst_11609);

(statearr_11629_11656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11628 === (1))){
var inst_11603 = cljs.core.seq.call(null,coll);
var inst_11604 = inst_11603;
var state_11627__$1 = (function (){var statearr_11630 = state_11627;
(statearr_11630[(7)] = inst_11604);

return statearr_11630;
})();
var statearr_11631_11657 = state_11627__$1;
(statearr_11631_11657[(2)] = null);

(statearr_11631_11657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11628 === (4))){
var inst_11604 = (state_11627[(7)]);
var inst_11607 = cljs.core.first.call(null,inst_11604);
var state_11627__$1 = state_11627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11627__$1,(7),ch,inst_11607);
} else {
if((state_val_11628 === (13))){
var inst_11621 = (state_11627[(2)]);
var state_11627__$1 = state_11627;
var statearr_11632_11658 = state_11627__$1;
(statearr_11632_11658[(2)] = inst_11621);

(statearr_11632_11658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11628 === (6))){
var inst_11612 = (state_11627[(2)]);
var state_11627__$1 = state_11627;
if(cljs.core.truth_(inst_11612)){
var statearr_11633_11659 = state_11627__$1;
(statearr_11633_11659[(1)] = (8));

} else {
var statearr_11634_11660 = state_11627__$1;
(statearr_11634_11660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11628 === (3))){
var inst_11625 = (state_11627[(2)]);
var state_11627__$1 = state_11627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11627__$1,inst_11625);
} else {
if((state_val_11628 === (12))){
var state_11627__$1 = state_11627;
var statearr_11635_11661 = state_11627__$1;
(statearr_11635_11661[(2)] = null);

(statearr_11635_11661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11628 === (2))){
var inst_11604 = (state_11627[(7)]);
var state_11627__$1 = state_11627;
if(cljs.core.truth_(inst_11604)){
var statearr_11636_11662 = state_11627__$1;
(statearr_11636_11662[(1)] = (4));

} else {
var statearr_11637_11663 = state_11627__$1;
(statearr_11637_11663[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11628 === (11))){
var inst_11618 = cljs.core.async.close_BANG_.call(null,ch);
var state_11627__$1 = state_11627;
var statearr_11638_11664 = state_11627__$1;
(statearr_11638_11664[(2)] = inst_11618);

(statearr_11638_11664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11628 === (9))){
var state_11627__$1 = state_11627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11639_11665 = state_11627__$1;
(statearr_11639_11665[(1)] = (11));

} else {
var statearr_11640_11666 = state_11627__$1;
(statearr_11640_11666[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11628 === (5))){
var inst_11604 = (state_11627[(7)]);
var state_11627__$1 = state_11627;
var statearr_11641_11667 = state_11627__$1;
(statearr_11641_11667[(2)] = inst_11604);

(statearr_11641_11667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11628 === (10))){
var inst_11623 = (state_11627[(2)]);
var state_11627__$1 = state_11627;
var statearr_11642_11668 = state_11627__$1;
(statearr_11642_11668[(2)] = inst_11623);

(statearr_11642_11668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11628 === (8))){
var inst_11604 = (state_11627[(7)]);
var inst_11614 = cljs.core.next.call(null,inst_11604);
var inst_11604__$1 = inst_11614;
var state_11627__$1 = (function (){var statearr_11643 = state_11627;
(statearr_11643[(7)] = inst_11604__$1);

return statearr_11643;
})();
var statearr_11644_11669 = state_11627__$1;
(statearr_11644_11669[(2)] = null);

(statearr_11644_11669[(1)] = (2));


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
});})(c__7080__auto__))
;
return ((function (switch__7015__auto__,c__7080__auto__){
return (function() {
var cljs$core$async$state_machine__7016__auto__ = null;
var cljs$core$async$state_machine__7016__auto____0 = (function (){
var statearr_11648 = [null,null,null,null,null,null,null,null];
(statearr_11648[(0)] = cljs$core$async$state_machine__7016__auto__);

(statearr_11648[(1)] = (1));

return statearr_11648;
});
var cljs$core$async$state_machine__7016__auto____1 = (function (state_11627){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_11627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e11649){if((e11649 instanceof Object)){
var ex__7019__auto__ = e11649;
var statearr_11650_11670 = state_11627;
(statearr_11650_11670[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11671 = state_11627;
state_11627 = G__11671;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$state_machine__7016__auto__ = function(state_11627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7016__auto____1.call(this,state_11627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7016__auto____0;
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7016__auto____1;
return cljs$core$async$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto__))
})();
var state__7082__auto__ = (function (){var statearr_11651 = f__7081__auto__.call(null);
(statearr_11651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_11651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__))
);

return c__7080__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5218__auto__ = (((_ == null))?null:_);
var m__5219__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,_);
} else {
var m__5219__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5219__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,ch);
} else {
var m__5219__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m);
} else {
var m__5219__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11893 = (function (mult,ch,cs,meta11894){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta11894 = meta11894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11895,meta11894__$1){
var self__ = this;
var _11895__$1 = this;
return (new cljs.core.async.t_cljs$core$async11893(self__.mult,self__.ch,self__.cs,meta11894__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11895){
var self__ = this;
var _11895__$1 = this;
return self__.meta11894;
});})(cs))
;

cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11893.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11894","meta11894",-1011378705,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11893";

cljs.core.async.t_cljs$core$async11893.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async11893");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11893 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11893(mult__$1,ch__$1,cs__$1,meta11894){
return (new cljs.core.async.t_cljs$core$async11893(mult__$1,ch__$1,cs__$1,meta11894));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11893(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7080__auto___12114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___12114,cs,m,dchan,dctr,done){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___12114,cs,m,dchan,dctr,done){
return (function (state_12026){
var state_val_12027 = (state_12026[(1)]);
if((state_val_12027 === (7))){
var inst_12022 = (state_12026[(2)]);
var state_12026__$1 = state_12026;
var statearr_12028_12115 = state_12026__$1;
(statearr_12028_12115[(2)] = inst_12022);

(statearr_12028_12115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (20))){
var inst_11927 = (state_12026[(7)]);
var inst_11937 = cljs.core.first.call(null,inst_11927);
var inst_11938 = cljs.core.nth.call(null,inst_11937,(0),null);
var inst_11939 = cljs.core.nth.call(null,inst_11937,(1),null);
var state_12026__$1 = (function (){var statearr_12029 = state_12026;
(statearr_12029[(8)] = inst_11938);

return statearr_12029;
})();
if(cljs.core.truth_(inst_11939)){
var statearr_12030_12116 = state_12026__$1;
(statearr_12030_12116[(1)] = (22));

} else {
var statearr_12031_12117 = state_12026__$1;
(statearr_12031_12117[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (27))){
var inst_11898 = (state_12026[(9)]);
var inst_11969 = (state_12026[(10)]);
var inst_11967 = (state_12026[(11)]);
var inst_11974 = (state_12026[(12)]);
var inst_11974__$1 = cljs.core._nth.call(null,inst_11967,inst_11969);
var inst_11975 = cljs.core.async.put_BANG_.call(null,inst_11974__$1,inst_11898,done);
var state_12026__$1 = (function (){var statearr_12032 = state_12026;
(statearr_12032[(12)] = inst_11974__$1);

return statearr_12032;
})();
if(cljs.core.truth_(inst_11975)){
var statearr_12033_12118 = state_12026__$1;
(statearr_12033_12118[(1)] = (30));

} else {
var statearr_12034_12119 = state_12026__$1;
(statearr_12034_12119[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (1))){
var state_12026__$1 = state_12026;
var statearr_12035_12120 = state_12026__$1;
(statearr_12035_12120[(2)] = null);

(statearr_12035_12120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (24))){
var inst_11927 = (state_12026[(7)]);
var inst_11944 = (state_12026[(2)]);
var inst_11945 = cljs.core.next.call(null,inst_11927);
var inst_11907 = inst_11945;
var inst_11908 = null;
var inst_11909 = (0);
var inst_11910 = (0);
var state_12026__$1 = (function (){var statearr_12036 = state_12026;
(statearr_12036[(13)] = inst_11944);

(statearr_12036[(14)] = inst_11909);

(statearr_12036[(15)] = inst_11907);

(statearr_12036[(16)] = inst_11908);

(statearr_12036[(17)] = inst_11910);

return statearr_12036;
})();
var statearr_12037_12121 = state_12026__$1;
(statearr_12037_12121[(2)] = null);

(statearr_12037_12121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (39))){
var state_12026__$1 = state_12026;
var statearr_12041_12122 = state_12026__$1;
(statearr_12041_12122[(2)] = null);

(statearr_12041_12122[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (4))){
var inst_11898 = (state_12026[(9)]);
var inst_11898__$1 = (state_12026[(2)]);
var inst_11899 = (inst_11898__$1 == null);
var state_12026__$1 = (function (){var statearr_12042 = state_12026;
(statearr_12042[(9)] = inst_11898__$1);

return statearr_12042;
})();
if(cljs.core.truth_(inst_11899)){
var statearr_12043_12123 = state_12026__$1;
(statearr_12043_12123[(1)] = (5));

} else {
var statearr_12044_12124 = state_12026__$1;
(statearr_12044_12124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (15))){
var inst_11909 = (state_12026[(14)]);
var inst_11907 = (state_12026[(15)]);
var inst_11908 = (state_12026[(16)]);
var inst_11910 = (state_12026[(17)]);
var inst_11923 = (state_12026[(2)]);
var inst_11924 = (inst_11910 + (1));
var tmp12038 = inst_11909;
var tmp12039 = inst_11907;
var tmp12040 = inst_11908;
var inst_11907__$1 = tmp12039;
var inst_11908__$1 = tmp12040;
var inst_11909__$1 = tmp12038;
var inst_11910__$1 = inst_11924;
var state_12026__$1 = (function (){var statearr_12045 = state_12026;
(statearr_12045[(14)] = inst_11909__$1);

(statearr_12045[(15)] = inst_11907__$1);

(statearr_12045[(16)] = inst_11908__$1);

(statearr_12045[(18)] = inst_11923);

(statearr_12045[(17)] = inst_11910__$1);

return statearr_12045;
})();
var statearr_12046_12125 = state_12026__$1;
(statearr_12046_12125[(2)] = null);

(statearr_12046_12125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (21))){
var inst_11948 = (state_12026[(2)]);
var state_12026__$1 = state_12026;
var statearr_12050_12126 = state_12026__$1;
(statearr_12050_12126[(2)] = inst_11948);

(statearr_12050_12126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (31))){
var inst_11974 = (state_12026[(12)]);
var inst_11978 = done.call(null,null);
var inst_11979 = cljs.core.async.untap_STAR_.call(null,m,inst_11974);
var state_12026__$1 = (function (){var statearr_12051 = state_12026;
(statearr_12051[(19)] = inst_11978);

return statearr_12051;
})();
var statearr_12052_12127 = state_12026__$1;
(statearr_12052_12127[(2)] = inst_11979);

(statearr_12052_12127[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (32))){
var inst_11968 = (state_12026[(20)]);
var inst_11969 = (state_12026[(10)]);
var inst_11967 = (state_12026[(11)]);
var inst_11966 = (state_12026[(21)]);
var inst_11981 = (state_12026[(2)]);
var inst_11982 = (inst_11969 + (1));
var tmp12047 = inst_11968;
var tmp12048 = inst_11967;
var tmp12049 = inst_11966;
var inst_11966__$1 = tmp12049;
var inst_11967__$1 = tmp12048;
var inst_11968__$1 = tmp12047;
var inst_11969__$1 = inst_11982;
var state_12026__$1 = (function (){var statearr_12053 = state_12026;
(statearr_12053[(20)] = inst_11968__$1);

(statearr_12053[(10)] = inst_11969__$1);

(statearr_12053[(22)] = inst_11981);

(statearr_12053[(11)] = inst_11967__$1);

(statearr_12053[(21)] = inst_11966__$1);

return statearr_12053;
})();
var statearr_12054_12128 = state_12026__$1;
(statearr_12054_12128[(2)] = null);

(statearr_12054_12128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (40))){
var inst_11994 = (state_12026[(23)]);
var inst_11998 = done.call(null,null);
var inst_11999 = cljs.core.async.untap_STAR_.call(null,m,inst_11994);
var state_12026__$1 = (function (){var statearr_12055 = state_12026;
(statearr_12055[(24)] = inst_11998);

return statearr_12055;
})();
var statearr_12056_12129 = state_12026__$1;
(statearr_12056_12129[(2)] = inst_11999);

(statearr_12056_12129[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (33))){
var inst_11985 = (state_12026[(25)]);
var inst_11987 = cljs.core.chunked_seq_QMARK_.call(null,inst_11985);
var state_12026__$1 = state_12026;
if(inst_11987){
var statearr_12057_12130 = state_12026__$1;
(statearr_12057_12130[(1)] = (36));

} else {
var statearr_12058_12131 = state_12026__$1;
(statearr_12058_12131[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (13))){
var inst_11917 = (state_12026[(26)]);
var inst_11920 = cljs.core.async.close_BANG_.call(null,inst_11917);
var state_12026__$1 = state_12026;
var statearr_12059_12132 = state_12026__$1;
(statearr_12059_12132[(2)] = inst_11920);

(statearr_12059_12132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (22))){
var inst_11938 = (state_12026[(8)]);
var inst_11941 = cljs.core.async.close_BANG_.call(null,inst_11938);
var state_12026__$1 = state_12026;
var statearr_12060_12133 = state_12026__$1;
(statearr_12060_12133[(2)] = inst_11941);

(statearr_12060_12133[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (36))){
var inst_11985 = (state_12026[(25)]);
var inst_11989 = cljs.core.chunk_first.call(null,inst_11985);
var inst_11990 = cljs.core.chunk_rest.call(null,inst_11985);
var inst_11991 = cljs.core.count.call(null,inst_11989);
var inst_11966 = inst_11990;
var inst_11967 = inst_11989;
var inst_11968 = inst_11991;
var inst_11969 = (0);
var state_12026__$1 = (function (){var statearr_12061 = state_12026;
(statearr_12061[(20)] = inst_11968);

(statearr_12061[(10)] = inst_11969);

(statearr_12061[(11)] = inst_11967);

(statearr_12061[(21)] = inst_11966);

return statearr_12061;
})();
var statearr_12062_12134 = state_12026__$1;
(statearr_12062_12134[(2)] = null);

(statearr_12062_12134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (41))){
var inst_11985 = (state_12026[(25)]);
var inst_12001 = (state_12026[(2)]);
var inst_12002 = cljs.core.next.call(null,inst_11985);
var inst_11966 = inst_12002;
var inst_11967 = null;
var inst_11968 = (0);
var inst_11969 = (0);
var state_12026__$1 = (function (){var statearr_12063 = state_12026;
(statearr_12063[(20)] = inst_11968);

(statearr_12063[(10)] = inst_11969);

(statearr_12063[(27)] = inst_12001);

(statearr_12063[(11)] = inst_11967);

(statearr_12063[(21)] = inst_11966);

return statearr_12063;
})();
var statearr_12064_12135 = state_12026__$1;
(statearr_12064_12135[(2)] = null);

(statearr_12064_12135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (43))){
var state_12026__$1 = state_12026;
var statearr_12065_12136 = state_12026__$1;
(statearr_12065_12136[(2)] = null);

(statearr_12065_12136[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (29))){
var inst_12010 = (state_12026[(2)]);
var state_12026__$1 = state_12026;
var statearr_12066_12137 = state_12026__$1;
(statearr_12066_12137[(2)] = inst_12010);

(statearr_12066_12137[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (44))){
var inst_12019 = (state_12026[(2)]);
var state_12026__$1 = (function (){var statearr_12067 = state_12026;
(statearr_12067[(28)] = inst_12019);

return statearr_12067;
})();
var statearr_12068_12138 = state_12026__$1;
(statearr_12068_12138[(2)] = null);

(statearr_12068_12138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (6))){
var inst_11958 = (state_12026[(29)]);
var inst_11957 = cljs.core.deref.call(null,cs);
var inst_11958__$1 = cljs.core.keys.call(null,inst_11957);
var inst_11959 = cljs.core.count.call(null,inst_11958__$1);
var inst_11960 = cljs.core.reset_BANG_.call(null,dctr,inst_11959);
var inst_11965 = cljs.core.seq.call(null,inst_11958__$1);
var inst_11966 = inst_11965;
var inst_11967 = null;
var inst_11968 = (0);
var inst_11969 = (0);
var state_12026__$1 = (function (){var statearr_12069 = state_12026;
(statearr_12069[(20)] = inst_11968);

(statearr_12069[(10)] = inst_11969);

(statearr_12069[(30)] = inst_11960);

(statearr_12069[(11)] = inst_11967);

(statearr_12069[(21)] = inst_11966);

(statearr_12069[(29)] = inst_11958__$1);

return statearr_12069;
})();
var statearr_12070_12139 = state_12026__$1;
(statearr_12070_12139[(2)] = null);

(statearr_12070_12139[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (28))){
var inst_11985 = (state_12026[(25)]);
var inst_11966 = (state_12026[(21)]);
var inst_11985__$1 = cljs.core.seq.call(null,inst_11966);
var state_12026__$1 = (function (){var statearr_12071 = state_12026;
(statearr_12071[(25)] = inst_11985__$1);

return statearr_12071;
})();
if(inst_11985__$1){
var statearr_12072_12140 = state_12026__$1;
(statearr_12072_12140[(1)] = (33));

} else {
var statearr_12073_12141 = state_12026__$1;
(statearr_12073_12141[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (25))){
var inst_11968 = (state_12026[(20)]);
var inst_11969 = (state_12026[(10)]);
var inst_11971 = (inst_11969 < inst_11968);
var inst_11972 = inst_11971;
var state_12026__$1 = state_12026;
if(cljs.core.truth_(inst_11972)){
var statearr_12074_12142 = state_12026__$1;
(statearr_12074_12142[(1)] = (27));

} else {
var statearr_12075_12143 = state_12026__$1;
(statearr_12075_12143[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (34))){
var state_12026__$1 = state_12026;
var statearr_12076_12144 = state_12026__$1;
(statearr_12076_12144[(2)] = null);

(statearr_12076_12144[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (17))){
var state_12026__$1 = state_12026;
var statearr_12077_12145 = state_12026__$1;
(statearr_12077_12145[(2)] = null);

(statearr_12077_12145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (3))){
var inst_12024 = (state_12026[(2)]);
var state_12026__$1 = state_12026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12026__$1,inst_12024);
} else {
if((state_val_12027 === (12))){
var inst_11953 = (state_12026[(2)]);
var state_12026__$1 = state_12026;
var statearr_12078_12146 = state_12026__$1;
(statearr_12078_12146[(2)] = inst_11953);

(statearr_12078_12146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (2))){
var state_12026__$1 = state_12026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12026__$1,(4),ch);
} else {
if((state_val_12027 === (23))){
var state_12026__$1 = state_12026;
var statearr_12079_12147 = state_12026__$1;
(statearr_12079_12147[(2)] = null);

(statearr_12079_12147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (35))){
var inst_12008 = (state_12026[(2)]);
var state_12026__$1 = state_12026;
var statearr_12080_12148 = state_12026__$1;
(statearr_12080_12148[(2)] = inst_12008);

(statearr_12080_12148[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (19))){
var inst_11927 = (state_12026[(7)]);
var inst_11931 = cljs.core.chunk_first.call(null,inst_11927);
var inst_11932 = cljs.core.chunk_rest.call(null,inst_11927);
var inst_11933 = cljs.core.count.call(null,inst_11931);
var inst_11907 = inst_11932;
var inst_11908 = inst_11931;
var inst_11909 = inst_11933;
var inst_11910 = (0);
var state_12026__$1 = (function (){var statearr_12081 = state_12026;
(statearr_12081[(14)] = inst_11909);

(statearr_12081[(15)] = inst_11907);

(statearr_12081[(16)] = inst_11908);

(statearr_12081[(17)] = inst_11910);

return statearr_12081;
})();
var statearr_12082_12149 = state_12026__$1;
(statearr_12082_12149[(2)] = null);

(statearr_12082_12149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (11))){
var inst_11907 = (state_12026[(15)]);
var inst_11927 = (state_12026[(7)]);
var inst_11927__$1 = cljs.core.seq.call(null,inst_11907);
var state_12026__$1 = (function (){var statearr_12083 = state_12026;
(statearr_12083[(7)] = inst_11927__$1);

return statearr_12083;
})();
if(inst_11927__$1){
var statearr_12084_12150 = state_12026__$1;
(statearr_12084_12150[(1)] = (16));

} else {
var statearr_12085_12151 = state_12026__$1;
(statearr_12085_12151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (9))){
var inst_11955 = (state_12026[(2)]);
var state_12026__$1 = state_12026;
var statearr_12086_12152 = state_12026__$1;
(statearr_12086_12152[(2)] = inst_11955);

(statearr_12086_12152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (5))){
var inst_11905 = cljs.core.deref.call(null,cs);
var inst_11906 = cljs.core.seq.call(null,inst_11905);
var inst_11907 = inst_11906;
var inst_11908 = null;
var inst_11909 = (0);
var inst_11910 = (0);
var state_12026__$1 = (function (){var statearr_12087 = state_12026;
(statearr_12087[(14)] = inst_11909);

(statearr_12087[(15)] = inst_11907);

(statearr_12087[(16)] = inst_11908);

(statearr_12087[(17)] = inst_11910);

return statearr_12087;
})();
var statearr_12088_12153 = state_12026__$1;
(statearr_12088_12153[(2)] = null);

(statearr_12088_12153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (14))){
var state_12026__$1 = state_12026;
var statearr_12089_12154 = state_12026__$1;
(statearr_12089_12154[(2)] = null);

(statearr_12089_12154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (45))){
var inst_12016 = (state_12026[(2)]);
var state_12026__$1 = state_12026;
var statearr_12090_12155 = state_12026__$1;
(statearr_12090_12155[(2)] = inst_12016);

(statearr_12090_12155[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (26))){
var inst_11958 = (state_12026[(29)]);
var inst_12012 = (state_12026[(2)]);
var inst_12013 = cljs.core.seq.call(null,inst_11958);
var state_12026__$1 = (function (){var statearr_12091 = state_12026;
(statearr_12091[(31)] = inst_12012);

return statearr_12091;
})();
if(inst_12013){
var statearr_12092_12156 = state_12026__$1;
(statearr_12092_12156[(1)] = (42));

} else {
var statearr_12093_12157 = state_12026__$1;
(statearr_12093_12157[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (16))){
var inst_11927 = (state_12026[(7)]);
var inst_11929 = cljs.core.chunked_seq_QMARK_.call(null,inst_11927);
var state_12026__$1 = state_12026;
if(inst_11929){
var statearr_12094_12158 = state_12026__$1;
(statearr_12094_12158[(1)] = (19));

} else {
var statearr_12095_12159 = state_12026__$1;
(statearr_12095_12159[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (38))){
var inst_12005 = (state_12026[(2)]);
var state_12026__$1 = state_12026;
var statearr_12096_12160 = state_12026__$1;
(statearr_12096_12160[(2)] = inst_12005);

(statearr_12096_12160[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (30))){
var state_12026__$1 = state_12026;
var statearr_12097_12161 = state_12026__$1;
(statearr_12097_12161[(2)] = null);

(statearr_12097_12161[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (10))){
var inst_11908 = (state_12026[(16)]);
var inst_11910 = (state_12026[(17)]);
var inst_11916 = cljs.core._nth.call(null,inst_11908,inst_11910);
var inst_11917 = cljs.core.nth.call(null,inst_11916,(0),null);
var inst_11918 = cljs.core.nth.call(null,inst_11916,(1),null);
var state_12026__$1 = (function (){var statearr_12098 = state_12026;
(statearr_12098[(26)] = inst_11917);

return statearr_12098;
})();
if(cljs.core.truth_(inst_11918)){
var statearr_12099_12162 = state_12026__$1;
(statearr_12099_12162[(1)] = (13));

} else {
var statearr_12100_12163 = state_12026__$1;
(statearr_12100_12163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (18))){
var inst_11951 = (state_12026[(2)]);
var state_12026__$1 = state_12026;
var statearr_12101_12164 = state_12026__$1;
(statearr_12101_12164[(2)] = inst_11951);

(statearr_12101_12164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (42))){
var state_12026__$1 = state_12026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12026__$1,(45),dchan);
} else {
if((state_val_12027 === (37))){
var inst_11985 = (state_12026[(25)]);
var inst_11898 = (state_12026[(9)]);
var inst_11994 = (state_12026[(23)]);
var inst_11994__$1 = cljs.core.first.call(null,inst_11985);
var inst_11995 = cljs.core.async.put_BANG_.call(null,inst_11994__$1,inst_11898,done);
var state_12026__$1 = (function (){var statearr_12102 = state_12026;
(statearr_12102[(23)] = inst_11994__$1);

return statearr_12102;
})();
if(cljs.core.truth_(inst_11995)){
var statearr_12103_12165 = state_12026__$1;
(statearr_12103_12165[(1)] = (39));

} else {
var statearr_12104_12166 = state_12026__$1;
(statearr_12104_12166[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (8))){
var inst_11909 = (state_12026[(14)]);
var inst_11910 = (state_12026[(17)]);
var inst_11912 = (inst_11910 < inst_11909);
var inst_11913 = inst_11912;
var state_12026__$1 = state_12026;
if(cljs.core.truth_(inst_11913)){
var statearr_12105_12167 = state_12026__$1;
(statearr_12105_12167[(1)] = (10));

} else {
var statearr_12106_12168 = state_12026__$1;
(statearr_12106_12168[(1)] = (11));

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
});})(c__7080__auto___12114,cs,m,dchan,dctr,done))
;
return ((function (switch__7015__auto__,c__7080__auto___12114,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7016__auto__ = null;
var cljs$core$async$mult_$_state_machine__7016__auto____0 = (function (){
var statearr_12110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12110[(0)] = cljs$core$async$mult_$_state_machine__7016__auto__);

(statearr_12110[(1)] = (1));

return statearr_12110;
});
var cljs$core$async$mult_$_state_machine__7016__auto____1 = (function (state_12026){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_12026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e12111){if((e12111 instanceof Object)){
var ex__7019__auto__ = e12111;
var statearr_12112_12169 = state_12026;
(statearr_12112_12169[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12170 = state_12026;
state_12026 = G__12170;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7016__auto__ = function(state_12026){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7016__auto____1.call(this,state_12026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7016__auto____0;
cljs$core$async$mult_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7016__auto____1;
return cljs$core$async$mult_$_state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___12114,cs,m,dchan,dctr,done))
})();
var state__7082__auto__ = (function (){var statearr_12113 = f__7081__auto__.call(null);
(statearr_12113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___12114);

return statearr_12113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___12114,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args12171 = [];
var len__5621__auto___12174 = arguments.length;
var i__5622__auto___12175 = (0);
while(true){
if((i__5622__auto___12175 < len__5621__auto___12174)){
args12171.push((arguments[i__5622__auto___12175]));

var G__12176 = (i__5622__auto___12175 + (1));
i__5622__auto___12175 = G__12176;
continue;
} else {
}
break;
}

var G__12173 = args12171.length;
switch (G__12173) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12171.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,ch);
} else {
var m__5219__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,ch);
} else {
var m__5219__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m);
} else {
var m__5219__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,state_map);
} else {
var m__5219__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,mode);
} else {
var m__5219__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12188 = arguments.length;
var i__5622__auto___12189 = (0);
while(true){
if((i__5622__auto___12189 < len__5621__auto___12188)){
args__5628__auto__.push((arguments[i__5622__auto___12189]));

var G__12190 = (i__5622__auto___12189 + (1));
i__5622__auto___12189 = G__12190;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((3) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5629__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12182){
var map__12183 = p__12182;
var map__12183__$1 = ((((!((map__12183 == null)))?((((map__12183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12183):map__12183);
var opts = map__12183__$1;
var statearr_12185_12191 = state;
(statearr_12185_12191[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__12183,map__12183__$1,opts){
return (function (val){
var statearr_12186_12192 = state;
(statearr_12186_12192[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12183,map__12183__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_12187_12193 = state;
(statearr_12187_12193[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12178){
var G__12179 = cljs.core.first.call(null,seq12178);
var seq12178__$1 = cljs.core.next.call(null,seq12178);
var G__12180 = cljs.core.first.call(null,seq12178__$1);
var seq12178__$2 = cljs.core.next.call(null,seq12178__$1);
var G__12181 = cljs.core.first.call(null,seq12178__$2);
var seq12178__$3 = cljs.core.next.call(null,seq12178__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12179,G__12180,G__12181,seq12178__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12357 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12358){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12358 = meta12358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12359,meta12358__$1){
var self__ = this;
var _12359__$1 = this;
return (new cljs.core.async.t_cljs$core$async12357(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12358__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12359){
var self__ = this;
var _12359__$1 = this;
return self__.meta12358;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12357.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12358","meta12358",-80545155,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12357";

cljs.core.async.t_cljs$core$async12357.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async12357");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12357 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12357(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12358){
return (new cljs.core.async.t_cljs$core$async12357(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12358));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12357(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7080__auto___12520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___12520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___12520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12457){
var state_val_12458 = (state_12457[(1)]);
if((state_val_12458 === (7))){
var inst_12375 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
var statearr_12459_12521 = state_12457__$1;
(statearr_12459_12521[(2)] = inst_12375);

(statearr_12459_12521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (20))){
var inst_12387 = (state_12457[(7)]);
var state_12457__$1 = state_12457;
var statearr_12460_12522 = state_12457__$1;
(statearr_12460_12522[(2)] = inst_12387);

(statearr_12460_12522[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (27))){
var state_12457__$1 = state_12457;
var statearr_12461_12523 = state_12457__$1;
(statearr_12461_12523[(2)] = null);

(statearr_12461_12523[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (1))){
var inst_12363 = (state_12457[(8)]);
var inst_12363__$1 = calc_state.call(null);
var inst_12365 = (inst_12363__$1 == null);
var inst_12366 = cljs.core.not.call(null,inst_12365);
var state_12457__$1 = (function (){var statearr_12462 = state_12457;
(statearr_12462[(8)] = inst_12363__$1);

return statearr_12462;
})();
if(inst_12366){
var statearr_12463_12524 = state_12457__$1;
(statearr_12463_12524[(1)] = (2));

} else {
var statearr_12464_12525 = state_12457__$1;
(statearr_12464_12525[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (24))){
var inst_12417 = (state_12457[(9)]);
var inst_12431 = (state_12457[(10)]);
var inst_12410 = (state_12457[(11)]);
var inst_12431__$1 = inst_12410.call(null,inst_12417);
var state_12457__$1 = (function (){var statearr_12465 = state_12457;
(statearr_12465[(10)] = inst_12431__$1);

return statearr_12465;
})();
if(cljs.core.truth_(inst_12431__$1)){
var statearr_12466_12526 = state_12457__$1;
(statearr_12466_12526[(1)] = (29));

} else {
var statearr_12467_12527 = state_12457__$1;
(statearr_12467_12527[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (4))){
var inst_12378 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12378)){
var statearr_12468_12528 = state_12457__$1;
(statearr_12468_12528[(1)] = (8));

} else {
var statearr_12469_12529 = state_12457__$1;
(statearr_12469_12529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (15))){
var inst_12404 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12404)){
var statearr_12470_12530 = state_12457__$1;
(statearr_12470_12530[(1)] = (19));

} else {
var statearr_12471_12531 = state_12457__$1;
(statearr_12471_12531[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (21))){
var inst_12409 = (state_12457[(12)]);
var inst_12409__$1 = (state_12457[(2)]);
var inst_12410 = cljs.core.get.call(null,inst_12409__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12411 = cljs.core.get.call(null,inst_12409__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12412 = cljs.core.get.call(null,inst_12409__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12457__$1 = (function (){var statearr_12472 = state_12457;
(statearr_12472[(11)] = inst_12410);

(statearr_12472[(13)] = inst_12411);

(statearr_12472[(12)] = inst_12409__$1);

return statearr_12472;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12457__$1,(22),inst_12412);
} else {
if((state_val_12458 === (31))){
var inst_12439 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12439)){
var statearr_12473_12532 = state_12457__$1;
(statearr_12473_12532[(1)] = (32));

} else {
var statearr_12474_12533 = state_12457__$1;
(statearr_12474_12533[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (32))){
var inst_12416 = (state_12457[(14)]);
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12457__$1,(35),out,inst_12416);
} else {
if((state_val_12458 === (33))){
var inst_12409 = (state_12457[(12)]);
var inst_12387 = inst_12409;
var state_12457__$1 = (function (){var statearr_12475 = state_12457;
(statearr_12475[(7)] = inst_12387);

return statearr_12475;
})();
var statearr_12476_12534 = state_12457__$1;
(statearr_12476_12534[(2)] = null);

(statearr_12476_12534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (13))){
var inst_12387 = (state_12457[(7)]);
var inst_12394 = inst_12387.cljs$lang$protocol_mask$partition0$;
var inst_12395 = (inst_12394 & (64));
var inst_12396 = inst_12387.cljs$core$ISeq$;
var inst_12397 = (inst_12395) || (inst_12396);
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12397)){
var statearr_12477_12535 = state_12457__$1;
(statearr_12477_12535[(1)] = (16));

} else {
var statearr_12478_12536 = state_12457__$1;
(statearr_12478_12536[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (22))){
var inst_12417 = (state_12457[(9)]);
var inst_12416 = (state_12457[(14)]);
var inst_12415 = (state_12457[(2)]);
var inst_12416__$1 = cljs.core.nth.call(null,inst_12415,(0),null);
var inst_12417__$1 = cljs.core.nth.call(null,inst_12415,(1),null);
var inst_12418 = (inst_12416__$1 == null);
var inst_12419 = cljs.core._EQ_.call(null,inst_12417__$1,change);
var inst_12420 = (inst_12418) || (inst_12419);
var state_12457__$1 = (function (){var statearr_12479 = state_12457;
(statearr_12479[(9)] = inst_12417__$1);

(statearr_12479[(14)] = inst_12416__$1);

return statearr_12479;
})();
if(cljs.core.truth_(inst_12420)){
var statearr_12480_12537 = state_12457__$1;
(statearr_12480_12537[(1)] = (23));

} else {
var statearr_12481_12538 = state_12457__$1;
(statearr_12481_12538[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (36))){
var inst_12409 = (state_12457[(12)]);
var inst_12387 = inst_12409;
var state_12457__$1 = (function (){var statearr_12482 = state_12457;
(statearr_12482[(7)] = inst_12387);

return statearr_12482;
})();
var statearr_12483_12539 = state_12457__$1;
(statearr_12483_12539[(2)] = null);

(statearr_12483_12539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (29))){
var inst_12431 = (state_12457[(10)]);
var state_12457__$1 = state_12457;
var statearr_12484_12540 = state_12457__$1;
(statearr_12484_12540[(2)] = inst_12431);

(statearr_12484_12540[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (6))){
var state_12457__$1 = state_12457;
var statearr_12485_12541 = state_12457__$1;
(statearr_12485_12541[(2)] = false);

(statearr_12485_12541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (28))){
var inst_12427 = (state_12457[(2)]);
var inst_12428 = calc_state.call(null);
var inst_12387 = inst_12428;
var state_12457__$1 = (function (){var statearr_12486 = state_12457;
(statearr_12486[(15)] = inst_12427);

(statearr_12486[(7)] = inst_12387);

return statearr_12486;
})();
var statearr_12487_12542 = state_12457__$1;
(statearr_12487_12542[(2)] = null);

(statearr_12487_12542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (25))){
var inst_12453 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
var statearr_12488_12543 = state_12457__$1;
(statearr_12488_12543[(2)] = inst_12453);

(statearr_12488_12543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (34))){
var inst_12451 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
var statearr_12489_12544 = state_12457__$1;
(statearr_12489_12544[(2)] = inst_12451);

(statearr_12489_12544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (17))){
var state_12457__$1 = state_12457;
var statearr_12490_12545 = state_12457__$1;
(statearr_12490_12545[(2)] = false);

(statearr_12490_12545[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (3))){
var state_12457__$1 = state_12457;
var statearr_12491_12546 = state_12457__$1;
(statearr_12491_12546[(2)] = false);

(statearr_12491_12546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (12))){
var inst_12455 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12457__$1,inst_12455);
} else {
if((state_val_12458 === (2))){
var inst_12363 = (state_12457[(8)]);
var inst_12368 = inst_12363.cljs$lang$protocol_mask$partition0$;
var inst_12369 = (inst_12368 & (64));
var inst_12370 = inst_12363.cljs$core$ISeq$;
var inst_12371 = (inst_12369) || (inst_12370);
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12371)){
var statearr_12492_12547 = state_12457__$1;
(statearr_12492_12547[(1)] = (5));

} else {
var statearr_12493_12548 = state_12457__$1;
(statearr_12493_12548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (23))){
var inst_12416 = (state_12457[(14)]);
var inst_12422 = (inst_12416 == null);
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12422)){
var statearr_12494_12549 = state_12457__$1;
(statearr_12494_12549[(1)] = (26));

} else {
var statearr_12495_12550 = state_12457__$1;
(statearr_12495_12550[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (35))){
var inst_12442 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12442)){
var statearr_12496_12551 = state_12457__$1;
(statearr_12496_12551[(1)] = (36));

} else {
var statearr_12497_12552 = state_12457__$1;
(statearr_12497_12552[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (19))){
var inst_12387 = (state_12457[(7)]);
var inst_12406 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12387);
var state_12457__$1 = state_12457;
var statearr_12498_12553 = state_12457__$1;
(statearr_12498_12553[(2)] = inst_12406);

(statearr_12498_12553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (11))){
var inst_12387 = (state_12457[(7)]);
var inst_12391 = (inst_12387 == null);
var inst_12392 = cljs.core.not.call(null,inst_12391);
var state_12457__$1 = state_12457;
if(inst_12392){
var statearr_12499_12554 = state_12457__$1;
(statearr_12499_12554[(1)] = (13));

} else {
var statearr_12500_12555 = state_12457__$1;
(statearr_12500_12555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (9))){
var inst_12363 = (state_12457[(8)]);
var state_12457__$1 = state_12457;
var statearr_12501_12556 = state_12457__$1;
(statearr_12501_12556[(2)] = inst_12363);

(statearr_12501_12556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (5))){
var state_12457__$1 = state_12457;
var statearr_12502_12557 = state_12457__$1;
(statearr_12502_12557[(2)] = true);

(statearr_12502_12557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (14))){
var state_12457__$1 = state_12457;
var statearr_12503_12558 = state_12457__$1;
(statearr_12503_12558[(2)] = false);

(statearr_12503_12558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (26))){
var inst_12417 = (state_12457[(9)]);
var inst_12424 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12417);
var state_12457__$1 = state_12457;
var statearr_12504_12559 = state_12457__$1;
(statearr_12504_12559[(2)] = inst_12424);

(statearr_12504_12559[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (16))){
var state_12457__$1 = state_12457;
var statearr_12505_12560 = state_12457__$1;
(statearr_12505_12560[(2)] = true);

(statearr_12505_12560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (38))){
var inst_12447 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
var statearr_12506_12561 = state_12457__$1;
(statearr_12506_12561[(2)] = inst_12447);

(statearr_12506_12561[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (30))){
var inst_12417 = (state_12457[(9)]);
var inst_12410 = (state_12457[(11)]);
var inst_12411 = (state_12457[(13)]);
var inst_12434 = cljs.core.empty_QMARK_.call(null,inst_12410);
var inst_12435 = inst_12411.call(null,inst_12417);
var inst_12436 = cljs.core.not.call(null,inst_12435);
var inst_12437 = (inst_12434) && (inst_12436);
var state_12457__$1 = state_12457;
var statearr_12507_12562 = state_12457__$1;
(statearr_12507_12562[(2)] = inst_12437);

(statearr_12507_12562[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (10))){
var inst_12363 = (state_12457[(8)]);
var inst_12383 = (state_12457[(2)]);
var inst_12384 = cljs.core.get.call(null,inst_12383,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12385 = cljs.core.get.call(null,inst_12383,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12386 = cljs.core.get.call(null,inst_12383,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12387 = inst_12363;
var state_12457__$1 = (function (){var statearr_12508 = state_12457;
(statearr_12508[(16)] = inst_12386);

(statearr_12508[(17)] = inst_12385);

(statearr_12508[(7)] = inst_12387);

(statearr_12508[(18)] = inst_12384);

return statearr_12508;
})();
var statearr_12509_12563 = state_12457__$1;
(statearr_12509_12563[(2)] = null);

(statearr_12509_12563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (18))){
var inst_12401 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
var statearr_12510_12564 = state_12457__$1;
(statearr_12510_12564[(2)] = inst_12401);

(statearr_12510_12564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (37))){
var state_12457__$1 = state_12457;
var statearr_12511_12565 = state_12457__$1;
(statearr_12511_12565[(2)] = null);

(statearr_12511_12565[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (8))){
var inst_12363 = (state_12457[(8)]);
var inst_12380 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12363);
var state_12457__$1 = state_12457;
var statearr_12512_12566 = state_12457__$1;
(statearr_12512_12566[(2)] = inst_12380);

(statearr_12512_12566[(1)] = (10));


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
});})(c__7080__auto___12520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7015__auto__,c__7080__auto___12520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7016__auto__ = null;
var cljs$core$async$mix_$_state_machine__7016__auto____0 = (function (){
var statearr_12516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12516[(0)] = cljs$core$async$mix_$_state_machine__7016__auto__);

(statearr_12516[(1)] = (1));

return statearr_12516;
});
var cljs$core$async$mix_$_state_machine__7016__auto____1 = (function (state_12457){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_12457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e12517){if((e12517 instanceof Object)){
var ex__7019__auto__ = e12517;
var statearr_12518_12567 = state_12457;
(statearr_12518_12567[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12568 = state_12457;
state_12457 = G__12568;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7016__auto__ = function(state_12457){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7016__auto____1.call(this,state_12457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7016__auto____0;
cljs$core$async$mix_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7016__auto____1;
return cljs$core$async$mix_$_state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___12520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7082__auto__ = (function (){var statearr_12519 = f__7081__auto__.call(null);
(statearr_12519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___12520);

return statearr_12519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___12520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5218__auto__ = (((p == null))?null:p);
var m__5219__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5219__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5218__auto__ = (((p == null))?null:p);
var m__5219__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,p,v,ch);
} else {
var m__5219__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args12569 = [];
var len__5621__auto___12572 = arguments.length;
var i__5622__auto___12573 = (0);
while(true){
if((i__5622__auto___12573 < len__5621__auto___12572)){
args12569.push((arguments[i__5622__auto___12573]));

var G__12574 = (i__5622__auto___12573 + (1));
i__5622__auto___12573 = G__12574;
continue;
} else {
}
break;
}

var G__12571 = args12569.length;
switch (G__12571) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12569.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5218__auto__ = (((p == null))?null:p);
var m__5219__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,p);
} else {
var m__5219__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5218__auto__ = (((p == null))?null:p);
var m__5219__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,p,v);
} else {
var m__5219__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args12577 = [];
var len__5621__auto___12702 = arguments.length;
var i__5622__auto___12703 = (0);
while(true){
if((i__5622__auto___12703 < len__5621__auto___12702)){
args12577.push((arguments[i__5622__auto___12703]));

var G__12704 = (i__5622__auto___12703 + (1));
i__5622__auto___12703 = G__12704;
continue;
} else {
}
break;
}

var G__12579 = args12577.length;
switch (G__12579) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12577.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4563__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4563__auto__,mults){
return (function (p1__12576_SHARP_){
if(cljs.core.truth_(p1__12576_SHARP_.call(null,topic))){
return p1__12576_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12576_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4563__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12580 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12581){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12581 = meta12581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12582,meta12581__$1){
var self__ = this;
var _12582__$1 = this;
return (new cljs.core.async.t_cljs$core$async12580(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12581__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12582){
var self__ = this;
var _12582__$1 = this;
return self__.meta12581;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12580.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12581","meta12581",107656655,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12580";

cljs.core.async.t_cljs$core$async12580.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async12580");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12580 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12580(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12581){
return (new cljs.core.async.t_cljs$core$async12580(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12581));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12580(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7080__auto___12706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___12706,mults,ensure_mult,p){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___12706,mults,ensure_mult,p){
return (function (state_12654){
var state_val_12655 = (state_12654[(1)]);
if((state_val_12655 === (7))){
var inst_12650 = (state_12654[(2)]);
var state_12654__$1 = state_12654;
var statearr_12656_12707 = state_12654__$1;
(statearr_12656_12707[(2)] = inst_12650);

(statearr_12656_12707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (20))){
var state_12654__$1 = state_12654;
var statearr_12657_12708 = state_12654__$1;
(statearr_12657_12708[(2)] = null);

(statearr_12657_12708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (1))){
var state_12654__$1 = state_12654;
var statearr_12658_12709 = state_12654__$1;
(statearr_12658_12709[(2)] = null);

(statearr_12658_12709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (24))){
var inst_12633 = (state_12654[(7)]);
var inst_12642 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12633);
var state_12654__$1 = state_12654;
var statearr_12659_12710 = state_12654__$1;
(statearr_12659_12710[(2)] = inst_12642);

(statearr_12659_12710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (4))){
var inst_12585 = (state_12654[(8)]);
var inst_12585__$1 = (state_12654[(2)]);
var inst_12586 = (inst_12585__$1 == null);
var state_12654__$1 = (function (){var statearr_12660 = state_12654;
(statearr_12660[(8)] = inst_12585__$1);

return statearr_12660;
})();
if(cljs.core.truth_(inst_12586)){
var statearr_12661_12711 = state_12654__$1;
(statearr_12661_12711[(1)] = (5));

} else {
var statearr_12662_12712 = state_12654__$1;
(statearr_12662_12712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (15))){
var inst_12627 = (state_12654[(2)]);
var state_12654__$1 = state_12654;
var statearr_12663_12713 = state_12654__$1;
(statearr_12663_12713[(2)] = inst_12627);

(statearr_12663_12713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (21))){
var inst_12647 = (state_12654[(2)]);
var state_12654__$1 = (function (){var statearr_12664 = state_12654;
(statearr_12664[(9)] = inst_12647);

return statearr_12664;
})();
var statearr_12665_12714 = state_12654__$1;
(statearr_12665_12714[(2)] = null);

(statearr_12665_12714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (13))){
var inst_12609 = (state_12654[(10)]);
var inst_12611 = cljs.core.chunked_seq_QMARK_.call(null,inst_12609);
var state_12654__$1 = state_12654;
if(inst_12611){
var statearr_12666_12715 = state_12654__$1;
(statearr_12666_12715[(1)] = (16));

} else {
var statearr_12667_12716 = state_12654__$1;
(statearr_12667_12716[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (22))){
var inst_12639 = (state_12654[(2)]);
var state_12654__$1 = state_12654;
if(cljs.core.truth_(inst_12639)){
var statearr_12668_12717 = state_12654__$1;
(statearr_12668_12717[(1)] = (23));

} else {
var statearr_12669_12718 = state_12654__$1;
(statearr_12669_12718[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (6))){
var inst_12633 = (state_12654[(7)]);
var inst_12635 = (state_12654[(11)]);
var inst_12585 = (state_12654[(8)]);
var inst_12633__$1 = topic_fn.call(null,inst_12585);
var inst_12634 = cljs.core.deref.call(null,mults);
var inst_12635__$1 = cljs.core.get.call(null,inst_12634,inst_12633__$1);
var state_12654__$1 = (function (){var statearr_12670 = state_12654;
(statearr_12670[(7)] = inst_12633__$1);

(statearr_12670[(11)] = inst_12635__$1);

return statearr_12670;
})();
if(cljs.core.truth_(inst_12635__$1)){
var statearr_12671_12719 = state_12654__$1;
(statearr_12671_12719[(1)] = (19));

} else {
var statearr_12672_12720 = state_12654__$1;
(statearr_12672_12720[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (25))){
var inst_12644 = (state_12654[(2)]);
var state_12654__$1 = state_12654;
var statearr_12673_12721 = state_12654__$1;
(statearr_12673_12721[(2)] = inst_12644);

(statearr_12673_12721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (17))){
var inst_12609 = (state_12654[(10)]);
var inst_12618 = cljs.core.first.call(null,inst_12609);
var inst_12619 = cljs.core.async.muxch_STAR_.call(null,inst_12618);
var inst_12620 = cljs.core.async.close_BANG_.call(null,inst_12619);
var inst_12621 = cljs.core.next.call(null,inst_12609);
var inst_12595 = inst_12621;
var inst_12596 = null;
var inst_12597 = (0);
var inst_12598 = (0);
var state_12654__$1 = (function (){var statearr_12674 = state_12654;
(statearr_12674[(12)] = inst_12597);

(statearr_12674[(13)] = inst_12595);

(statearr_12674[(14)] = inst_12598);

(statearr_12674[(15)] = inst_12596);

(statearr_12674[(16)] = inst_12620);

return statearr_12674;
})();
var statearr_12675_12722 = state_12654__$1;
(statearr_12675_12722[(2)] = null);

(statearr_12675_12722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (3))){
var inst_12652 = (state_12654[(2)]);
var state_12654__$1 = state_12654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12654__$1,inst_12652);
} else {
if((state_val_12655 === (12))){
var inst_12629 = (state_12654[(2)]);
var state_12654__$1 = state_12654;
var statearr_12676_12723 = state_12654__$1;
(statearr_12676_12723[(2)] = inst_12629);

(statearr_12676_12723[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (2))){
var state_12654__$1 = state_12654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12654__$1,(4),ch);
} else {
if((state_val_12655 === (23))){
var state_12654__$1 = state_12654;
var statearr_12677_12724 = state_12654__$1;
(statearr_12677_12724[(2)] = null);

(statearr_12677_12724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (19))){
var inst_12635 = (state_12654[(11)]);
var inst_12585 = (state_12654[(8)]);
var inst_12637 = cljs.core.async.muxch_STAR_.call(null,inst_12635);
var state_12654__$1 = state_12654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12654__$1,(22),inst_12637,inst_12585);
} else {
if((state_val_12655 === (11))){
var inst_12595 = (state_12654[(13)]);
var inst_12609 = (state_12654[(10)]);
var inst_12609__$1 = cljs.core.seq.call(null,inst_12595);
var state_12654__$1 = (function (){var statearr_12678 = state_12654;
(statearr_12678[(10)] = inst_12609__$1);

return statearr_12678;
})();
if(inst_12609__$1){
var statearr_12679_12725 = state_12654__$1;
(statearr_12679_12725[(1)] = (13));

} else {
var statearr_12680_12726 = state_12654__$1;
(statearr_12680_12726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (9))){
var inst_12631 = (state_12654[(2)]);
var state_12654__$1 = state_12654;
var statearr_12681_12727 = state_12654__$1;
(statearr_12681_12727[(2)] = inst_12631);

(statearr_12681_12727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (5))){
var inst_12592 = cljs.core.deref.call(null,mults);
var inst_12593 = cljs.core.vals.call(null,inst_12592);
var inst_12594 = cljs.core.seq.call(null,inst_12593);
var inst_12595 = inst_12594;
var inst_12596 = null;
var inst_12597 = (0);
var inst_12598 = (0);
var state_12654__$1 = (function (){var statearr_12682 = state_12654;
(statearr_12682[(12)] = inst_12597);

(statearr_12682[(13)] = inst_12595);

(statearr_12682[(14)] = inst_12598);

(statearr_12682[(15)] = inst_12596);

return statearr_12682;
})();
var statearr_12683_12728 = state_12654__$1;
(statearr_12683_12728[(2)] = null);

(statearr_12683_12728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (14))){
var state_12654__$1 = state_12654;
var statearr_12687_12729 = state_12654__$1;
(statearr_12687_12729[(2)] = null);

(statearr_12687_12729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (16))){
var inst_12609 = (state_12654[(10)]);
var inst_12613 = cljs.core.chunk_first.call(null,inst_12609);
var inst_12614 = cljs.core.chunk_rest.call(null,inst_12609);
var inst_12615 = cljs.core.count.call(null,inst_12613);
var inst_12595 = inst_12614;
var inst_12596 = inst_12613;
var inst_12597 = inst_12615;
var inst_12598 = (0);
var state_12654__$1 = (function (){var statearr_12688 = state_12654;
(statearr_12688[(12)] = inst_12597);

(statearr_12688[(13)] = inst_12595);

(statearr_12688[(14)] = inst_12598);

(statearr_12688[(15)] = inst_12596);

return statearr_12688;
})();
var statearr_12689_12730 = state_12654__$1;
(statearr_12689_12730[(2)] = null);

(statearr_12689_12730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (10))){
var inst_12597 = (state_12654[(12)]);
var inst_12595 = (state_12654[(13)]);
var inst_12598 = (state_12654[(14)]);
var inst_12596 = (state_12654[(15)]);
var inst_12603 = cljs.core._nth.call(null,inst_12596,inst_12598);
var inst_12604 = cljs.core.async.muxch_STAR_.call(null,inst_12603);
var inst_12605 = cljs.core.async.close_BANG_.call(null,inst_12604);
var inst_12606 = (inst_12598 + (1));
var tmp12684 = inst_12597;
var tmp12685 = inst_12595;
var tmp12686 = inst_12596;
var inst_12595__$1 = tmp12685;
var inst_12596__$1 = tmp12686;
var inst_12597__$1 = tmp12684;
var inst_12598__$1 = inst_12606;
var state_12654__$1 = (function (){var statearr_12690 = state_12654;
(statearr_12690[(12)] = inst_12597__$1);

(statearr_12690[(13)] = inst_12595__$1);

(statearr_12690[(14)] = inst_12598__$1);

(statearr_12690[(15)] = inst_12596__$1);

(statearr_12690[(17)] = inst_12605);

return statearr_12690;
})();
var statearr_12691_12731 = state_12654__$1;
(statearr_12691_12731[(2)] = null);

(statearr_12691_12731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (18))){
var inst_12624 = (state_12654[(2)]);
var state_12654__$1 = state_12654;
var statearr_12692_12732 = state_12654__$1;
(statearr_12692_12732[(2)] = inst_12624);

(statearr_12692_12732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12655 === (8))){
var inst_12597 = (state_12654[(12)]);
var inst_12598 = (state_12654[(14)]);
var inst_12600 = (inst_12598 < inst_12597);
var inst_12601 = inst_12600;
var state_12654__$1 = state_12654;
if(cljs.core.truth_(inst_12601)){
var statearr_12693_12733 = state_12654__$1;
(statearr_12693_12733[(1)] = (10));

} else {
var statearr_12694_12734 = state_12654__$1;
(statearr_12694_12734[(1)] = (11));

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
});})(c__7080__auto___12706,mults,ensure_mult,p))
;
return ((function (switch__7015__auto__,c__7080__auto___12706,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7016__auto__ = null;
var cljs$core$async$state_machine__7016__auto____0 = (function (){
var statearr_12698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12698[(0)] = cljs$core$async$state_machine__7016__auto__);

(statearr_12698[(1)] = (1));

return statearr_12698;
});
var cljs$core$async$state_machine__7016__auto____1 = (function (state_12654){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_12654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e12699){if((e12699 instanceof Object)){
var ex__7019__auto__ = e12699;
var statearr_12700_12735 = state_12654;
(statearr_12700_12735[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12736 = state_12654;
state_12654 = G__12736;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$state_machine__7016__auto__ = function(state_12654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7016__auto____1.call(this,state_12654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7016__auto____0;
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7016__auto____1;
return cljs$core$async$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___12706,mults,ensure_mult,p))
})();
var state__7082__auto__ = (function (){var statearr_12701 = f__7081__auto__.call(null);
(statearr_12701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___12706);

return statearr_12701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___12706,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args12737 = [];
var len__5621__auto___12740 = arguments.length;
var i__5622__auto___12741 = (0);
while(true){
if((i__5622__auto___12741 < len__5621__auto___12740)){
args12737.push((arguments[i__5622__auto___12741]));

var G__12742 = (i__5622__auto___12741 + (1));
i__5622__auto___12741 = G__12742;
continue;
} else {
}
break;
}

var G__12739 = args12737.length;
switch (G__12739) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12737.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args12744 = [];
var len__5621__auto___12747 = arguments.length;
var i__5622__auto___12748 = (0);
while(true){
if((i__5622__auto___12748 < len__5621__auto___12747)){
args12744.push((arguments[i__5622__auto___12748]));

var G__12749 = (i__5622__auto___12748 + (1));
i__5622__auto___12748 = G__12749;
continue;
} else {
}
break;
}

var G__12746 = args12744.length;
switch (G__12746) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12744.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args12751 = [];
var len__5621__auto___12822 = arguments.length;
var i__5622__auto___12823 = (0);
while(true){
if((i__5622__auto___12823 < len__5621__auto___12822)){
args12751.push((arguments[i__5622__auto___12823]));

var G__12824 = (i__5622__auto___12823 + (1));
i__5622__auto___12823 = G__12824;
continue;
} else {
}
break;
}

var G__12753 = args12751.length;
switch (G__12753) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12751.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7080__auto___12826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___12826,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___12826,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12792){
var state_val_12793 = (state_12792[(1)]);
if((state_val_12793 === (7))){
var state_12792__$1 = state_12792;
var statearr_12794_12827 = state_12792__$1;
(statearr_12794_12827[(2)] = null);

(statearr_12794_12827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (1))){
var state_12792__$1 = state_12792;
var statearr_12795_12828 = state_12792__$1;
(statearr_12795_12828[(2)] = null);

(statearr_12795_12828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (4))){
var inst_12756 = (state_12792[(7)]);
var inst_12758 = (inst_12756 < cnt);
var state_12792__$1 = state_12792;
if(cljs.core.truth_(inst_12758)){
var statearr_12796_12829 = state_12792__$1;
(statearr_12796_12829[(1)] = (6));

} else {
var statearr_12797_12830 = state_12792__$1;
(statearr_12797_12830[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (15))){
var inst_12788 = (state_12792[(2)]);
var state_12792__$1 = state_12792;
var statearr_12798_12831 = state_12792__$1;
(statearr_12798_12831[(2)] = inst_12788);

(statearr_12798_12831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (13))){
var inst_12781 = cljs.core.async.close_BANG_.call(null,out);
var state_12792__$1 = state_12792;
var statearr_12799_12832 = state_12792__$1;
(statearr_12799_12832[(2)] = inst_12781);

(statearr_12799_12832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (6))){
var state_12792__$1 = state_12792;
var statearr_12800_12833 = state_12792__$1;
(statearr_12800_12833[(2)] = null);

(statearr_12800_12833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (3))){
var inst_12790 = (state_12792[(2)]);
var state_12792__$1 = state_12792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12792__$1,inst_12790);
} else {
if((state_val_12793 === (12))){
var inst_12778 = (state_12792[(8)]);
var inst_12778__$1 = (state_12792[(2)]);
var inst_12779 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12778__$1);
var state_12792__$1 = (function (){var statearr_12801 = state_12792;
(statearr_12801[(8)] = inst_12778__$1);

return statearr_12801;
})();
if(cljs.core.truth_(inst_12779)){
var statearr_12802_12834 = state_12792__$1;
(statearr_12802_12834[(1)] = (13));

} else {
var statearr_12803_12835 = state_12792__$1;
(statearr_12803_12835[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (2))){
var inst_12755 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12756 = (0);
var state_12792__$1 = (function (){var statearr_12804 = state_12792;
(statearr_12804[(9)] = inst_12755);

(statearr_12804[(7)] = inst_12756);

return statearr_12804;
})();
var statearr_12805_12836 = state_12792__$1;
(statearr_12805_12836[(2)] = null);

(statearr_12805_12836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (11))){
var inst_12756 = (state_12792[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12792,(10),Object,null,(9));
var inst_12765 = chs__$1.call(null,inst_12756);
var inst_12766 = done.call(null,inst_12756);
var inst_12767 = cljs.core.async.take_BANG_.call(null,inst_12765,inst_12766);
var state_12792__$1 = state_12792;
var statearr_12806_12837 = state_12792__$1;
(statearr_12806_12837[(2)] = inst_12767);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12792__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (9))){
var inst_12756 = (state_12792[(7)]);
var inst_12769 = (state_12792[(2)]);
var inst_12770 = (inst_12756 + (1));
var inst_12756__$1 = inst_12770;
var state_12792__$1 = (function (){var statearr_12807 = state_12792;
(statearr_12807[(10)] = inst_12769);

(statearr_12807[(7)] = inst_12756__$1);

return statearr_12807;
})();
var statearr_12808_12838 = state_12792__$1;
(statearr_12808_12838[(2)] = null);

(statearr_12808_12838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (5))){
var inst_12776 = (state_12792[(2)]);
var state_12792__$1 = (function (){var statearr_12809 = state_12792;
(statearr_12809[(11)] = inst_12776);

return statearr_12809;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12792__$1,(12),dchan);
} else {
if((state_val_12793 === (14))){
var inst_12778 = (state_12792[(8)]);
var inst_12783 = cljs.core.apply.call(null,f,inst_12778);
var state_12792__$1 = state_12792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12792__$1,(16),out,inst_12783);
} else {
if((state_val_12793 === (16))){
var inst_12785 = (state_12792[(2)]);
var state_12792__$1 = (function (){var statearr_12810 = state_12792;
(statearr_12810[(12)] = inst_12785);

return statearr_12810;
})();
var statearr_12811_12839 = state_12792__$1;
(statearr_12811_12839[(2)] = null);

(statearr_12811_12839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (10))){
var inst_12760 = (state_12792[(2)]);
var inst_12761 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12792__$1 = (function (){var statearr_12812 = state_12792;
(statearr_12812[(13)] = inst_12760);

return statearr_12812;
})();
var statearr_12813_12840 = state_12792__$1;
(statearr_12813_12840[(2)] = inst_12761);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12792__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12793 === (8))){
var inst_12774 = (state_12792[(2)]);
var state_12792__$1 = state_12792;
var statearr_12814_12841 = state_12792__$1;
(statearr_12814_12841[(2)] = inst_12774);

(statearr_12814_12841[(1)] = (5));


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
});})(c__7080__auto___12826,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7015__auto__,c__7080__auto___12826,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7016__auto__ = null;
var cljs$core$async$state_machine__7016__auto____0 = (function (){
var statearr_12818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12818[(0)] = cljs$core$async$state_machine__7016__auto__);

(statearr_12818[(1)] = (1));

return statearr_12818;
});
var cljs$core$async$state_machine__7016__auto____1 = (function (state_12792){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_12792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e12819){if((e12819 instanceof Object)){
var ex__7019__auto__ = e12819;
var statearr_12820_12842 = state_12792;
(statearr_12820_12842[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12843 = state_12792;
state_12792 = G__12843;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$state_machine__7016__auto__ = function(state_12792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7016__auto____1.call(this,state_12792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7016__auto____0;
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7016__auto____1;
return cljs$core$async$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___12826,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7082__auto__ = (function (){var statearr_12821 = f__7081__auto__.call(null);
(statearr_12821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___12826);

return statearr_12821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___12826,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args12845 = [];
var len__5621__auto___12901 = arguments.length;
var i__5622__auto___12902 = (0);
while(true){
if((i__5622__auto___12902 < len__5621__auto___12901)){
args12845.push((arguments[i__5622__auto___12902]));

var G__12903 = (i__5622__auto___12902 + (1));
i__5622__auto___12902 = G__12903;
continue;
} else {
}
break;
}

var G__12847 = args12845.length;
switch (G__12847) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12845.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7080__auto___12905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___12905,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___12905,out){
return (function (state_12877){
var state_val_12878 = (state_12877[(1)]);
if((state_val_12878 === (7))){
var inst_12856 = (state_12877[(7)]);
var inst_12857 = (state_12877[(8)]);
var inst_12856__$1 = (state_12877[(2)]);
var inst_12857__$1 = cljs.core.nth.call(null,inst_12856__$1,(0),null);
var inst_12858 = cljs.core.nth.call(null,inst_12856__$1,(1),null);
var inst_12859 = (inst_12857__$1 == null);
var state_12877__$1 = (function (){var statearr_12879 = state_12877;
(statearr_12879[(7)] = inst_12856__$1);

(statearr_12879[(8)] = inst_12857__$1);

(statearr_12879[(9)] = inst_12858);

return statearr_12879;
})();
if(cljs.core.truth_(inst_12859)){
var statearr_12880_12906 = state_12877__$1;
(statearr_12880_12906[(1)] = (8));

} else {
var statearr_12881_12907 = state_12877__$1;
(statearr_12881_12907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (1))){
var inst_12848 = cljs.core.vec.call(null,chs);
var inst_12849 = inst_12848;
var state_12877__$1 = (function (){var statearr_12882 = state_12877;
(statearr_12882[(10)] = inst_12849);

return statearr_12882;
})();
var statearr_12883_12908 = state_12877__$1;
(statearr_12883_12908[(2)] = null);

(statearr_12883_12908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (4))){
var inst_12849 = (state_12877[(10)]);
var state_12877__$1 = state_12877;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12877__$1,(7),inst_12849);
} else {
if((state_val_12878 === (6))){
var inst_12873 = (state_12877[(2)]);
var state_12877__$1 = state_12877;
var statearr_12884_12909 = state_12877__$1;
(statearr_12884_12909[(2)] = inst_12873);

(statearr_12884_12909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (3))){
var inst_12875 = (state_12877[(2)]);
var state_12877__$1 = state_12877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12877__$1,inst_12875);
} else {
if((state_val_12878 === (2))){
var inst_12849 = (state_12877[(10)]);
var inst_12851 = cljs.core.count.call(null,inst_12849);
var inst_12852 = (inst_12851 > (0));
var state_12877__$1 = state_12877;
if(cljs.core.truth_(inst_12852)){
var statearr_12886_12910 = state_12877__$1;
(statearr_12886_12910[(1)] = (4));

} else {
var statearr_12887_12911 = state_12877__$1;
(statearr_12887_12911[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (11))){
var inst_12849 = (state_12877[(10)]);
var inst_12866 = (state_12877[(2)]);
var tmp12885 = inst_12849;
var inst_12849__$1 = tmp12885;
var state_12877__$1 = (function (){var statearr_12888 = state_12877;
(statearr_12888[(10)] = inst_12849__$1);

(statearr_12888[(11)] = inst_12866);

return statearr_12888;
})();
var statearr_12889_12912 = state_12877__$1;
(statearr_12889_12912[(2)] = null);

(statearr_12889_12912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (9))){
var inst_12857 = (state_12877[(8)]);
var state_12877__$1 = state_12877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12877__$1,(11),out,inst_12857);
} else {
if((state_val_12878 === (5))){
var inst_12871 = cljs.core.async.close_BANG_.call(null,out);
var state_12877__$1 = state_12877;
var statearr_12890_12913 = state_12877__$1;
(statearr_12890_12913[(2)] = inst_12871);

(statearr_12890_12913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (10))){
var inst_12869 = (state_12877[(2)]);
var state_12877__$1 = state_12877;
var statearr_12891_12914 = state_12877__$1;
(statearr_12891_12914[(2)] = inst_12869);

(statearr_12891_12914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (8))){
var inst_12856 = (state_12877[(7)]);
var inst_12849 = (state_12877[(10)]);
var inst_12857 = (state_12877[(8)]);
var inst_12858 = (state_12877[(9)]);
var inst_12861 = (function (){var cs = inst_12849;
var vec__12854 = inst_12856;
var v = inst_12857;
var c = inst_12858;
return ((function (cs,vec__12854,v,c,inst_12856,inst_12849,inst_12857,inst_12858,state_val_12878,c__7080__auto___12905,out){
return (function (p1__12844_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12844_SHARP_);
});
;})(cs,vec__12854,v,c,inst_12856,inst_12849,inst_12857,inst_12858,state_val_12878,c__7080__auto___12905,out))
})();
var inst_12862 = cljs.core.filterv.call(null,inst_12861,inst_12849);
var inst_12849__$1 = inst_12862;
var state_12877__$1 = (function (){var statearr_12892 = state_12877;
(statearr_12892[(10)] = inst_12849__$1);

return statearr_12892;
})();
var statearr_12893_12915 = state_12877__$1;
(statearr_12893_12915[(2)] = null);

(statearr_12893_12915[(1)] = (2));


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
});})(c__7080__auto___12905,out))
;
return ((function (switch__7015__auto__,c__7080__auto___12905,out){
return (function() {
var cljs$core$async$state_machine__7016__auto__ = null;
var cljs$core$async$state_machine__7016__auto____0 = (function (){
var statearr_12897 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12897[(0)] = cljs$core$async$state_machine__7016__auto__);

(statearr_12897[(1)] = (1));

return statearr_12897;
});
var cljs$core$async$state_machine__7016__auto____1 = (function (state_12877){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_12877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e12898){if((e12898 instanceof Object)){
var ex__7019__auto__ = e12898;
var statearr_12899_12916 = state_12877;
(statearr_12899_12916[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12917 = state_12877;
state_12877 = G__12917;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$state_machine__7016__auto__ = function(state_12877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7016__auto____1.call(this,state_12877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7016__auto____0;
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7016__auto____1;
return cljs$core$async$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___12905,out))
})();
var state__7082__auto__ = (function (){var statearr_12900 = f__7081__auto__.call(null);
(statearr_12900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___12905);

return statearr_12900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___12905,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args12918 = [];
var len__5621__auto___12967 = arguments.length;
var i__5622__auto___12968 = (0);
while(true){
if((i__5622__auto___12968 < len__5621__auto___12967)){
args12918.push((arguments[i__5622__auto___12968]));

var G__12969 = (i__5622__auto___12968 + (1));
i__5622__auto___12968 = G__12969;
continue;
} else {
}
break;
}

var G__12920 = args12918.length;
switch (G__12920) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12918.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7080__auto___12971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___12971,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___12971,out){
return (function (state_12944){
var state_val_12945 = (state_12944[(1)]);
if((state_val_12945 === (7))){
var inst_12926 = (state_12944[(7)]);
var inst_12926__$1 = (state_12944[(2)]);
var inst_12927 = (inst_12926__$1 == null);
var inst_12928 = cljs.core.not.call(null,inst_12927);
var state_12944__$1 = (function (){var statearr_12946 = state_12944;
(statearr_12946[(7)] = inst_12926__$1);

return statearr_12946;
})();
if(inst_12928){
var statearr_12947_12972 = state_12944__$1;
(statearr_12947_12972[(1)] = (8));

} else {
var statearr_12948_12973 = state_12944__$1;
(statearr_12948_12973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12945 === (1))){
var inst_12921 = (0);
var state_12944__$1 = (function (){var statearr_12949 = state_12944;
(statearr_12949[(8)] = inst_12921);

return statearr_12949;
})();
var statearr_12950_12974 = state_12944__$1;
(statearr_12950_12974[(2)] = null);

(statearr_12950_12974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12945 === (4))){
var state_12944__$1 = state_12944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12944__$1,(7),ch);
} else {
if((state_val_12945 === (6))){
var inst_12939 = (state_12944[(2)]);
var state_12944__$1 = state_12944;
var statearr_12951_12975 = state_12944__$1;
(statearr_12951_12975[(2)] = inst_12939);

(statearr_12951_12975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12945 === (3))){
var inst_12941 = (state_12944[(2)]);
var inst_12942 = cljs.core.async.close_BANG_.call(null,out);
var state_12944__$1 = (function (){var statearr_12952 = state_12944;
(statearr_12952[(9)] = inst_12941);

return statearr_12952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12944__$1,inst_12942);
} else {
if((state_val_12945 === (2))){
var inst_12921 = (state_12944[(8)]);
var inst_12923 = (inst_12921 < n);
var state_12944__$1 = state_12944;
if(cljs.core.truth_(inst_12923)){
var statearr_12953_12976 = state_12944__$1;
(statearr_12953_12976[(1)] = (4));

} else {
var statearr_12954_12977 = state_12944__$1;
(statearr_12954_12977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12945 === (11))){
var inst_12921 = (state_12944[(8)]);
var inst_12931 = (state_12944[(2)]);
var inst_12932 = (inst_12921 + (1));
var inst_12921__$1 = inst_12932;
var state_12944__$1 = (function (){var statearr_12955 = state_12944;
(statearr_12955[(10)] = inst_12931);

(statearr_12955[(8)] = inst_12921__$1);

return statearr_12955;
})();
var statearr_12956_12978 = state_12944__$1;
(statearr_12956_12978[(2)] = null);

(statearr_12956_12978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12945 === (9))){
var state_12944__$1 = state_12944;
var statearr_12957_12979 = state_12944__$1;
(statearr_12957_12979[(2)] = null);

(statearr_12957_12979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12945 === (5))){
var state_12944__$1 = state_12944;
var statearr_12958_12980 = state_12944__$1;
(statearr_12958_12980[(2)] = null);

(statearr_12958_12980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12945 === (10))){
var inst_12936 = (state_12944[(2)]);
var state_12944__$1 = state_12944;
var statearr_12959_12981 = state_12944__$1;
(statearr_12959_12981[(2)] = inst_12936);

(statearr_12959_12981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12945 === (8))){
var inst_12926 = (state_12944[(7)]);
var state_12944__$1 = state_12944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12944__$1,(11),out,inst_12926);
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
});})(c__7080__auto___12971,out))
;
return ((function (switch__7015__auto__,c__7080__auto___12971,out){
return (function() {
var cljs$core$async$state_machine__7016__auto__ = null;
var cljs$core$async$state_machine__7016__auto____0 = (function (){
var statearr_12963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12963[(0)] = cljs$core$async$state_machine__7016__auto__);

(statearr_12963[(1)] = (1));

return statearr_12963;
});
var cljs$core$async$state_machine__7016__auto____1 = (function (state_12944){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_12944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e12964){if((e12964 instanceof Object)){
var ex__7019__auto__ = e12964;
var statearr_12965_12982 = state_12944;
(statearr_12965_12982[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12983 = state_12944;
state_12944 = G__12983;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$state_machine__7016__auto__ = function(state_12944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7016__auto____1.call(this,state_12944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7016__auto____0;
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7016__auto____1;
return cljs$core$async$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___12971,out))
})();
var state__7082__auto__ = (function (){var statearr_12966 = f__7081__auto__.call(null);
(statearr_12966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___12971);

return statearr_12966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___12971,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12991 = (function (map_LT_,f,ch,meta12992){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12992 = meta12992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12993,meta12992__$1){
var self__ = this;
var _12993__$1 = this;
return (new cljs.core.async.t_cljs$core$async12991(self__.map_LT_,self__.f,self__.ch,meta12992__$1));
});

cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12993){
var self__ = this;
var _12993__$1 = this;
return self__.meta12992;
});

cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12994 = (function (map_LT_,f,ch,meta12992,_,fn1,meta12995){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12992 = meta12992;
this._ = _;
this.fn1 = fn1;
this.meta12995 = meta12995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12996,meta12995__$1){
var self__ = this;
var _12996__$1 = this;
return (new cljs.core.async.t_cljs$core$async12994(self__.map_LT_,self__.f,self__.ch,self__.meta12992,self__._,self__.fn1,meta12995__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12996){
var self__ = this;
var _12996__$1 = this;
return self__.meta12995;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12994.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12984_SHARP_){
return f1.call(null,(((p1__12984_SHARP_ == null))?null:self__.f.call(null,p1__12984_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12994.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12992","meta12992",-829734649,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12991","cljs.core.async/t_cljs$core$async12991",2093545910,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12995","meta12995",-326401199,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12994";

cljs.core.async.t_cljs$core$async12994.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async12994");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12994 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12994(map_LT___$1,f__$1,ch__$1,meta12992__$1,___$2,fn1__$1,meta12995){
return (new cljs.core.async.t_cljs$core$async12994(map_LT___$1,f__$1,ch__$1,meta12992__$1,___$2,fn1__$1,meta12995));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12994(self__.map_LT_,self__.f,self__.ch,self__.meta12992,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4551__auto__ = ret;
if(cljs.core.truth_(and__4551__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4551__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12992","meta12992",-829734649,null)], null);
});

cljs.core.async.t_cljs$core$async12991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12991";

cljs.core.async.t_cljs$core$async12991.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async12991");
});

cljs.core.async.__GT_t_cljs$core$async12991 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12991(map_LT___$1,f__$1,ch__$1,meta12992){
return (new cljs.core.async.t_cljs$core$async12991(map_LT___$1,f__$1,ch__$1,meta12992));
});

}

return (new cljs.core.async.t_cljs$core$async12991(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13000 = (function (map_GT_,f,ch,meta13001){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13001 = meta13001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13002,meta13001__$1){
var self__ = this;
var _13002__$1 = this;
return (new cljs.core.async.t_cljs$core$async13000(self__.map_GT_,self__.f,self__.ch,meta13001__$1));
});

cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13002){
var self__ = this;
var _13002__$1 = this;
return self__.meta13001;
});

cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13001","meta13001",-1878891923,null)], null);
});

cljs.core.async.t_cljs$core$async13000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13000";

cljs.core.async.t_cljs$core$async13000.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async13000");
});

cljs.core.async.__GT_t_cljs$core$async13000 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13000(map_GT___$1,f__$1,ch__$1,meta13001){
return (new cljs.core.async.t_cljs$core$async13000(map_GT___$1,f__$1,ch__$1,meta13001));
});

}

return (new cljs.core.async.t_cljs$core$async13000(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13006 = (function (filter_GT_,p,ch,meta13007){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13007 = meta13007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13008,meta13007__$1){
var self__ = this;
var _13008__$1 = this;
return (new cljs.core.async.t_cljs$core$async13006(self__.filter_GT_,self__.p,self__.ch,meta13007__$1));
});

cljs.core.async.t_cljs$core$async13006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13008){
var self__ = this;
var _13008__$1 = this;
return self__.meta13007;
});

cljs.core.async.t_cljs$core$async13006.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13006.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13006.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13006.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13006.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13006.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13006.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13007","meta13007",1965677787,null)], null);
});

cljs.core.async.t_cljs$core$async13006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13006";

cljs.core.async.t_cljs$core$async13006.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async13006");
});

cljs.core.async.__GT_t_cljs$core$async13006 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13006(filter_GT___$1,p__$1,ch__$1,meta13007){
return (new cljs.core.async.t_cljs$core$async13006(filter_GT___$1,p__$1,ch__$1,meta13007));
});

}

return (new cljs.core.async.t_cljs$core$async13006(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args13009 = [];
var len__5621__auto___13053 = arguments.length;
var i__5622__auto___13054 = (0);
while(true){
if((i__5622__auto___13054 < len__5621__auto___13053)){
args13009.push((arguments[i__5622__auto___13054]));

var G__13055 = (i__5622__auto___13054 + (1));
i__5622__auto___13054 = G__13055;
continue;
} else {
}
break;
}

var G__13011 = args13009.length;
switch (G__13011) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13009.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7080__auto___13057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___13057,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___13057,out){
return (function (state_13032){
var state_val_13033 = (state_13032[(1)]);
if((state_val_13033 === (7))){
var inst_13028 = (state_13032[(2)]);
var state_13032__$1 = state_13032;
var statearr_13034_13058 = state_13032__$1;
(statearr_13034_13058[(2)] = inst_13028);

(statearr_13034_13058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13033 === (1))){
var state_13032__$1 = state_13032;
var statearr_13035_13059 = state_13032__$1;
(statearr_13035_13059[(2)] = null);

(statearr_13035_13059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13033 === (4))){
var inst_13014 = (state_13032[(7)]);
var inst_13014__$1 = (state_13032[(2)]);
var inst_13015 = (inst_13014__$1 == null);
var state_13032__$1 = (function (){var statearr_13036 = state_13032;
(statearr_13036[(7)] = inst_13014__$1);

return statearr_13036;
})();
if(cljs.core.truth_(inst_13015)){
var statearr_13037_13060 = state_13032__$1;
(statearr_13037_13060[(1)] = (5));

} else {
var statearr_13038_13061 = state_13032__$1;
(statearr_13038_13061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13033 === (6))){
var inst_13014 = (state_13032[(7)]);
var inst_13019 = p.call(null,inst_13014);
var state_13032__$1 = state_13032;
if(cljs.core.truth_(inst_13019)){
var statearr_13039_13062 = state_13032__$1;
(statearr_13039_13062[(1)] = (8));

} else {
var statearr_13040_13063 = state_13032__$1;
(statearr_13040_13063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13033 === (3))){
var inst_13030 = (state_13032[(2)]);
var state_13032__$1 = state_13032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13032__$1,inst_13030);
} else {
if((state_val_13033 === (2))){
var state_13032__$1 = state_13032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13032__$1,(4),ch);
} else {
if((state_val_13033 === (11))){
var inst_13022 = (state_13032[(2)]);
var state_13032__$1 = state_13032;
var statearr_13041_13064 = state_13032__$1;
(statearr_13041_13064[(2)] = inst_13022);

(statearr_13041_13064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13033 === (9))){
var state_13032__$1 = state_13032;
var statearr_13042_13065 = state_13032__$1;
(statearr_13042_13065[(2)] = null);

(statearr_13042_13065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13033 === (5))){
var inst_13017 = cljs.core.async.close_BANG_.call(null,out);
var state_13032__$1 = state_13032;
var statearr_13043_13066 = state_13032__$1;
(statearr_13043_13066[(2)] = inst_13017);

(statearr_13043_13066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13033 === (10))){
var inst_13025 = (state_13032[(2)]);
var state_13032__$1 = (function (){var statearr_13044 = state_13032;
(statearr_13044[(8)] = inst_13025);

return statearr_13044;
})();
var statearr_13045_13067 = state_13032__$1;
(statearr_13045_13067[(2)] = null);

(statearr_13045_13067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13033 === (8))){
var inst_13014 = (state_13032[(7)]);
var state_13032__$1 = state_13032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13032__$1,(11),out,inst_13014);
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
});})(c__7080__auto___13057,out))
;
return ((function (switch__7015__auto__,c__7080__auto___13057,out){
return (function() {
var cljs$core$async$state_machine__7016__auto__ = null;
var cljs$core$async$state_machine__7016__auto____0 = (function (){
var statearr_13049 = [null,null,null,null,null,null,null,null,null];
(statearr_13049[(0)] = cljs$core$async$state_machine__7016__auto__);

(statearr_13049[(1)] = (1));

return statearr_13049;
});
var cljs$core$async$state_machine__7016__auto____1 = (function (state_13032){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_13032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e13050){if((e13050 instanceof Object)){
var ex__7019__auto__ = e13050;
var statearr_13051_13068 = state_13032;
(statearr_13051_13068[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13069 = state_13032;
state_13032 = G__13069;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$state_machine__7016__auto__ = function(state_13032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7016__auto____1.call(this,state_13032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7016__auto____0;
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7016__auto____1;
return cljs$core$async$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___13057,out))
})();
var state__7082__auto__ = (function (){var statearr_13052 = f__7081__auto__.call(null);
(statearr_13052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___13057);

return statearr_13052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___13057,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13070 = [];
var len__5621__auto___13073 = arguments.length;
var i__5622__auto___13074 = (0);
while(true){
if((i__5622__auto___13074 < len__5621__auto___13073)){
args13070.push((arguments[i__5622__auto___13074]));

var G__13075 = (i__5622__auto___13074 + (1));
i__5622__auto___13074 = G__13075;
continue;
} else {
}
break;
}

var G__13072 = args13070.length;
switch (G__13072) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13070.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto__){
return (function (state_13242){
var state_val_13243 = (state_13242[(1)]);
if((state_val_13243 === (7))){
var inst_13238 = (state_13242[(2)]);
var state_13242__$1 = state_13242;
var statearr_13244_13285 = state_13242__$1;
(statearr_13244_13285[(2)] = inst_13238);

(statearr_13244_13285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (20))){
var inst_13208 = (state_13242[(7)]);
var inst_13219 = (state_13242[(2)]);
var inst_13220 = cljs.core.next.call(null,inst_13208);
var inst_13194 = inst_13220;
var inst_13195 = null;
var inst_13196 = (0);
var inst_13197 = (0);
var state_13242__$1 = (function (){var statearr_13245 = state_13242;
(statearr_13245[(8)] = inst_13219);

(statearr_13245[(9)] = inst_13194);

(statearr_13245[(10)] = inst_13195);

(statearr_13245[(11)] = inst_13196);

(statearr_13245[(12)] = inst_13197);

return statearr_13245;
})();
var statearr_13246_13286 = state_13242__$1;
(statearr_13246_13286[(2)] = null);

(statearr_13246_13286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (1))){
var state_13242__$1 = state_13242;
var statearr_13247_13287 = state_13242__$1;
(statearr_13247_13287[(2)] = null);

(statearr_13247_13287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (4))){
var inst_13183 = (state_13242[(13)]);
var inst_13183__$1 = (state_13242[(2)]);
var inst_13184 = (inst_13183__$1 == null);
var state_13242__$1 = (function (){var statearr_13248 = state_13242;
(statearr_13248[(13)] = inst_13183__$1);

return statearr_13248;
})();
if(cljs.core.truth_(inst_13184)){
var statearr_13249_13288 = state_13242__$1;
(statearr_13249_13288[(1)] = (5));

} else {
var statearr_13250_13289 = state_13242__$1;
(statearr_13250_13289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (15))){
var state_13242__$1 = state_13242;
var statearr_13254_13290 = state_13242__$1;
(statearr_13254_13290[(2)] = null);

(statearr_13254_13290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (21))){
var state_13242__$1 = state_13242;
var statearr_13255_13291 = state_13242__$1;
(statearr_13255_13291[(2)] = null);

(statearr_13255_13291[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (13))){
var inst_13194 = (state_13242[(9)]);
var inst_13195 = (state_13242[(10)]);
var inst_13196 = (state_13242[(11)]);
var inst_13197 = (state_13242[(12)]);
var inst_13204 = (state_13242[(2)]);
var inst_13205 = (inst_13197 + (1));
var tmp13251 = inst_13194;
var tmp13252 = inst_13195;
var tmp13253 = inst_13196;
var inst_13194__$1 = tmp13251;
var inst_13195__$1 = tmp13252;
var inst_13196__$1 = tmp13253;
var inst_13197__$1 = inst_13205;
var state_13242__$1 = (function (){var statearr_13256 = state_13242;
(statearr_13256[(14)] = inst_13204);

(statearr_13256[(9)] = inst_13194__$1);

(statearr_13256[(10)] = inst_13195__$1);

(statearr_13256[(11)] = inst_13196__$1);

(statearr_13256[(12)] = inst_13197__$1);

return statearr_13256;
})();
var statearr_13257_13292 = state_13242__$1;
(statearr_13257_13292[(2)] = null);

(statearr_13257_13292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (22))){
var state_13242__$1 = state_13242;
var statearr_13258_13293 = state_13242__$1;
(statearr_13258_13293[(2)] = null);

(statearr_13258_13293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (6))){
var inst_13183 = (state_13242[(13)]);
var inst_13192 = f.call(null,inst_13183);
var inst_13193 = cljs.core.seq.call(null,inst_13192);
var inst_13194 = inst_13193;
var inst_13195 = null;
var inst_13196 = (0);
var inst_13197 = (0);
var state_13242__$1 = (function (){var statearr_13259 = state_13242;
(statearr_13259[(9)] = inst_13194);

(statearr_13259[(10)] = inst_13195);

(statearr_13259[(11)] = inst_13196);

(statearr_13259[(12)] = inst_13197);

return statearr_13259;
})();
var statearr_13260_13294 = state_13242__$1;
(statearr_13260_13294[(2)] = null);

(statearr_13260_13294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (17))){
var inst_13208 = (state_13242[(7)]);
var inst_13212 = cljs.core.chunk_first.call(null,inst_13208);
var inst_13213 = cljs.core.chunk_rest.call(null,inst_13208);
var inst_13214 = cljs.core.count.call(null,inst_13212);
var inst_13194 = inst_13213;
var inst_13195 = inst_13212;
var inst_13196 = inst_13214;
var inst_13197 = (0);
var state_13242__$1 = (function (){var statearr_13261 = state_13242;
(statearr_13261[(9)] = inst_13194);

(statearr_13261[(10)] = inst_13195);

(statearr_13261[(11)] = inst_13196);

(statearr_13261[(12)] = inst_13197);

return statearr_13261;
})();
var statearr_13262_13295 = state_13242__$1;
(statearr_13262_13295[(2)] = null);

(statearr_13262_13295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (3))){
var inst_13240 = (state_13242[(2)]);
var state_13242__$1 = state_13242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13242__$1,inst_13240);
} else {
if((state_val_13243 === (12))){
var inst_13228 = (state_13242[(2)]);
var state_13242__$1 = state_13242;
var statearr_13263_13296 = state_13242__$1;
(statearr_13263_13296[(2)] = inst_13228);

(statearr_13263_13296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (2))){
var state_13242__$1 = state_13242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13242__$1,(4),in$);
} else {
if((state_val_13243 === (23))){
var inst_13236 = (state_13242[(2)]);
var state_13242__$1 = state_13242;
var statearr_13264_13297 = state_13242__$1;
(statearr_13264_13297[(2)] = inst_13236);

(statearr_13264_13297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (19))){
var inst_13223 = (state_13242[(2)]);
var state_13242__$1 = state_13242;
var statearr_13265_13298 = state_13242__$1;
(statearr_13265_13298[(2)] = inst_13223);

(statearr_13265_13298[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (11))){
var inst_13208 = (state_13242[(7)]);
var inst_13194 = (state_13242[(9)]);
var inst_13208__$1 = cljs.core.seq.call(null,inst_13194);
var state_13242__$1 = (function (){var statearr_13266 = state_13242;
(statearr_13266[(7)] = inst_13208__$1);

return statearr_13266;
})();
if(inst_13208__$1){
var statearr_13267_13299 = state_13242__$1;
(statearr_13267_13299[(1)] = (14));

} else {
var statearr_13268_13300 = state_13242__$1;
(statearr_13268_13300[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (9))){
var inst_13230 = (state_13242[(2)]);
var inst_13231 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13242__$1 = (function (){var statearr_13269 = state_13242;
(statearr_13269[(15)] = inst_13230);

return statearr_13269;
})();
if(cljs.core.truth_(inst_13231)){
var statearr_13270_13301 = state_13242__$1;
(statearr_13270_13301[(1)] = (21));

} else {
var statearr_13271_13302 = state_13242__$1;
(statearr_13271_13302[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (5))){
var inst_13186 = cljs.core.async.close_BANG_.call(null,out);
var state_13242__$1 = state_13242;
var statearr_13272_13303 = state_13242__$1;
(statearr_13272_13303[(2)] = inst_13186);

(statearr_13272_13303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (14))){
var inst_13208 = (state_13242[(7)]);
var inst_13210 = cljs.core.chunked_seq_QMARK_.call(null,inst_13208);
var state_13242__$1 = state_13242;
if(inst_13210){
var statearr_13273_13304 = state_13242__$1;
(statearr_13273_13304[(1)] = (17));

} else {
var statearr_13274_13305 = state_13242__$1;
(statearr_13274_13305[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (16))){
var inst_13226 = (state_13242[(2)]);
var state_13242__$1 = state_13242;
var statearr_13275_13306 = state_13242__$1;
(statearr_13275_13306[(2)] = inst_13226);

(statearr_13275_13306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (10))){
var inst_13195 = (state_13242[(10)]);
var inst_13197 = (state_13242[(12)]);
var inst_13202 = cljs.core._nth.call(null,inst_13195,inst_13197);
var state_13242__$1 = state_13242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13242__$1,(13),out,inst_13202);
} else {
if((state_val_13243 === (18))){
var inst_13208 = (state_13242[(7)]);
var inst_13217 = cljs.core.first.call(null,inst_13208);
var state_13242__$1 = state_13242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13242__$1,(20),out,inst_13217);
} else {
if((state_val_13243 === (8))){
var inst_13196 = (state_13242[(11)]);
var inst_13197 = (state_13242[(12)]);
var inst_13199 = (inst_13197 < inst_13196);
var inst_13200 = inst_13199;
var state_13242__$1 = state_13242;
if(cljs.core.truth_(inst_13200)){
var statearr_13276_13307 = state_13242__$1;
(statearr_13276_13307[(1)] = (10));

} else {
var statearr_13277_13308 = state_13242__$1;
(statearr_13277_13308[(1)] = (11));

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
});})(c__7080__auto__))
;
return ((function (switch__7015__auto__,c__7080__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7016__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7016__auto____0 = (function (){
var statearr_13281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13281[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7016__auto__);

(statearr_13281[(1)] = (1));

return statearr_13281;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7016__auto____1 = (function (state_13242){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_13242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e13282){if((e13282 instanceof Object)){
var ex__7019__auto__ = e13282;
var statearr_13283_13309 = state_13242;
(statearr_13283_13309[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13310 = state_13242;
state_13242 = G__13310;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7016__auto__ = function(state_13242){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7016__auto____1.call(this,state_13242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7016__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7016__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto__))
})();
var state__7082__auto__ = (function (){var statearr_13284 = f__7081__auto__.call(null);
(statearr_13284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_13284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__))
);

return c__7080__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args13311 = [];
var len__5621__auto___13314 = arguments.length;
var i__5622__auto___13315 = (0);
while(true){
if((i__5622__auto___13315 < len__5621__auto___13314)){
args13311.push((arguments[i__5622__auto___13315]));

var G__13316 = (i__5622__auto___13315 + (1));
i__5622__auto___13315 = G__13316;
continue;
} else {
}
break;
}

var G__13313 = args13311.length;
switch (G__13313) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13311.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args13318 = [];
var len__5621__auto___13321 = arguments.length;
var i__5622__auto___13322 = (0);
while(true){
if((i__5622__auto___13322 < len__5621__auto___13321)){
args13318.push((arguments[i__5622__auto___13322]));

var G__13323 = (i__5622__auto___13322 + (1));
i__5622__auto___13322 = G__13323;
continue;
} else {
}
break;
}

var G__13320 = args13318.length;
switch (G__13320) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13318.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args13325 = [];
var len__5621__auto___13376 = arguments.length;
var i__5622__auto___13377 = (0);
while(true){
if((i__5622__auto___13377 < len__5621__auto___13376)){
args13325.push((arguments[i__5622__auto___13377]));

var G__13378 = (i__5622__auto___13377 + (1));
i__5622__auto___13377 = G__13378;
continue;
} else {
}
break;
}

var G__13327 = args13325.length;
switch (G__13327) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13325.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7080__auto___13380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___13380,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___13380,out){
return (function (state_13351){
var state_val_13352 = (state_13351[(1)]);
if((state_val_13352 === (7))){
var inst_13346 = (state_13351[(2)]);
var state_13351__$1 = state_13351;
var statearr_13353_13381 = state_13351__$1;
(statearr_13353_13381[(2)] = inst_13346);

(statearr_13353_13381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13352 === (1))){
var inst_13328 = null;
var state_13351__$1 = (function (){var statearr_13354 = state_13351;
(statearr_13354[(7)] = inst_13328);

return statearr_13354;
})();
var statearr_13355_13382 = state_13351__$1;
(statearr_13355_13382[(2)] = null);

(statearr_13355_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13352 === (4))){
var inst_13331 = (state_13351[(8)]);
var inst_13331__$1 = (state_13351[(2)]);
var inst_13332 = (inst_13331__$1 == null);
var inst_13333 = cljs.core.not.call(null,inst_13332);
var state_13351__$1 = (function (){var statearr_13356 = state_13351;
(statearr_13356[(8)] = inst_13331__$1);

return statearr_13356;
})();
if(inst_13333){
var statearr_13357_13383 = state_13351__$1;
(statearr_13357_13383[(1)] = (5));

} else {
var statearr_13358_13384 = state_13351__$1;
(statearr_13358_13384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13352 === (6))){
var state_13351__$1 = state_13351;
var statearr_13359_13385 = state_13351__$1;
(statearr_13359_13385[(2)] = null);

(statearr_13359_13385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13352 === (3))){
var inst_13348 = (state_13351[(2)]);
var inst_13349 = cljs.core.async.close_BANG_.call(null,out);
var state_13351__$1 = (function (){var statearr_13360 = state_13351;
(statearr_13360[(9)] = inst_13348);

return statearr_13360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13351__$1,inst_13349);
} else {
if((state_val_13352 === (2))){
var state_13351__$1 = state_13351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13351__$1,(4),ch);
} else {
if((state_val_13352 === (11))){
var inst_13331 = (state_13351[(8)]);
var inst_13340 = (state_13351[(2)]);
var inst_13328 = inst_13331;
var state_13351__$1 = (function (){var statearr_13361 = state_13351;
(statearr_13361[(10)] = inst_13340);

(statearr_13361[(7)] = inst_13328);

return statearr_13361;
})();
var statearr_13362_13386 = state_13351__$1;
(statearr_13362_13386[(2)] = null);

(statearr_13362_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13352 === (9))){
var inst_13331 = (state_13351[(8)]);
var state_13351__$1 = state_13351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13351__$1,(11),out,inst_13331);
} else {
if((state_val_13352 === (5))){
var inst_13328 = (state_13351[(7)]);
var inst_13331 = (state_13351[(8)]);
var inst_13335 = cljs.core._EQ_.call(null,inst_13331,inst_13328);
var state_13351__$1 = state_13351;
if(inst_13335){
var statearr_13364_13387 = state_13351__$1;
(statearr_13364_13387[(1)] = (8));

} else {
var statearr_13365_13388 = state_13351__$1;
(statearr_13365_13388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13352 === (10))){
var inst_13343 = (state_13351[(2)]);
var state_13351__$1 = state_13351;
var statearr_13366_13389 = state_13351__$1;
(statearr_13366_13389[(2)] = inst_13343);

(statearr_13366_13389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13352 === (8))){
var inst_13328 = (state_13351[(7)]);
var tmp13363 = inst_13328;
var inst_13328__$1 = tmp13363;
var state_13351__$1 = (function (){var statearr_13367 = state_13351;
(statearr_13367[(7)] = inst_13328__$1);

return statearr_13367;
})();
var statearr_13368_13390 = state_13351__$1;
(statearr_13368_13390[(2)] = null);

(statearr_13368_13390[(1)] = (2));


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
});})(c__7080__auto___13380,out))
;
return ((function (switch__7015__auto__,c__7080__auto___13380,out){
return (function() {
var cljs$core$async$state_machine__7016__auto__ = null;
var cljs$core$async$state_machine__7016__auto____0 = (function (){
var statearr_13372 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13372[(0)] = cljs$core$async$state_machine__7016__auto__);

(statearr_13372[(1)] = (1));

return statearr_13372;
});
var cljs$core$async$state_machine__7016__auto____1 = (function (state_13351){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_13351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e13373){if((e13373 instanceof Object)){
var ex__7019__auto__ = e13373;
var statearr_13374_13391 = state_13351;
(statearr_13374_13391[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_13351;
state_13351 = G__13392;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$state_machine__7016__auto__ = function(state_13351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7016__auto____1.call(this,state_13351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7016__auto____0;
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7016__auto____1;
return cljs$core$async$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___13380,out))
})();
var state__7082__auto__ = (function (){var statearr_13375 = f__7081__auto__.call(null);
(statearr_13375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___13380);

return statearr_13375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___13380,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13393 = [];
var len__5621__auto___13463 = arguments.length;
var i__5622__auto___13464 = (0);
while(true){
if((i__5622__auto___13464 < len__5621__auto___13463)){
args13393.push((arguments[i__5622__auto___13464]));

var G__13465 = (i__5622__auto___13464 + (1));
i__5622__auto___13464 = G__13465;
continue;
} else {
}
break;
}

var G__13395 = args13393.length;
switch (G__13395) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13393.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7080__auto___13467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___13467,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___13467,out){
return (function (state_13433){
var state_val_13434 = (state_13433[(1)]);
if((state_val_13434 === (7))){
var inst_13429 = (state_13433[(2)]);
var state_13433__$1 = state_13433;
var statearr_13435_13468 = state_13433__$1;
(statearr_13435_13468[(2)] = inst_13429);

(statearr_13435_13468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13434 === (1))){
var inst_13396 = (new Array(n));
var inst_13397 = inst_13396;
var inst_13398 = (0);
var state_13433__$1 = (function (){var statearr_13436 = state_13433;
(statearr_13436[(7)] = inst_13398);

(statearr_13436[(8)] = inst_13397);

return statearr_13436;
})();
var statearr_13437_13469 = state_13433__$1;
(statearr_13437_13469[(2)] = null);

(statearr_13437_13469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13434 === (4))){
var inst_13401 = (state_13433[(9)]);
var inst_13401__$1 = (state_13433[(2)]);
var inst_13402 = (inst_13401__$1 == null);
var inst_13403 = cljs.core.not.call(null,inst_13402);
var state_13433__$1 = (function (){var statearr_13438 = state_13433;
(statearr_13438[(9)] = inst_13401__$1);

return statearr_13438;
})();
if(inst_13403){
var statearr_13439_13470 = state_13433__$1;
(statearr_13439_13470[(1)] = (5));

} else {
var statearr_13440_13471 = state_13433__$1;
(statearr_13440_13471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13434 === (15))){
var inst_13423 = (state_13433[(2)]);
var state_13433__$1 = state_13433;
var statearr_13441_13472 = state_13433__$1;
(statearr_13441_13472[(2)] = inst_13423);

(statearr_13441_13472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13434 === (13))){
var state_13433__$1 = state_13433;
var statearr_13442_13473 = state_13433__$1;
(statearr_13442_13473[(2)] = null);

(statearr_13442_13473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13434 === (6))){
var inst_13398 = (state_13433[(7)]);
var inst_13419 = (inst_13398 > (0));
var state_13433__$1 = state_13433;
if(cljs.core.truth_(inst_13419)){
var statearr_13443_13474 = state_13433__$1;
(statearr_13443_13474[(1)] = (12));

} else {
var statearr_13444_13475 = state_13433__$1;
(statearr_13444_13475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13434 === (3))){
var inst_13431 = (state_13433[(2)]);
var state_13433__$1 = state_13433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13433__$1,inst_13431);
} else {
if((state_val_13434 === (12))){
var inst_13397 = (state_13433[(8)]);
var inst_13421 = cljs.core.vec.call(null,inst_13397);
var state_13433__$1 = state_13433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13433__$1,(15),out,inst_13421);
} else {
if((state_val_13434 === (2))){
var state_13433__$1 = state_13433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13433__$1,(4),ch);
} else {
if((state_val_13434 === (11))){
var inst_13413 = (state_13433[(2)]);
var inst_13414 = (new Array(n));
var inst_13397 = inst_13414;
var inst_13398 = (0);
var state_13433__$1 = (function (){var statearr_13445 = state_13433;
(statearr_13445[(7)] = inst_13398);

(statearr_13445[(8)] = inst_13397);

(statearr_13445[(10)] = inst_13413);

return statearr_13445;
})();
var statearr_13446_13476 = state_13433__$1;
(statearr_13446_13476[(2)] = null);

(statearr_13446_13476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13434 === (9))){
var inst_13397 = (state_13433[(8)]);
var inst_13411 = cljs.core.vec.call(null,inst_13397);
var state_13433__$1 = state_13433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13433__$1,(11),out,inst_13411);
} else {
if((state_val_13434 === (5))){
var inst_13398 = (state_13433[(7)]);
var inst_13397 = (state_13433[(8)]);
var inst_13406 = (state_13433[(11)]);
var inst_13401 = (state_13433[(9)]);
var inst_13405 = (inst_13397[inst_13398] = inst_13401);
var inst_13406__$1 = (inst_13398 + (1));
var inst_13407 = (inst_13406__$1 < n);
var state_13433__$1 = (function (){var statearr_13447 = state_13433;
(statearr_13447[(11)] = inst_13406__$1);

(statearr_13447[(12)] = inst_13405);

return statearr_13447;
})();
if(cljs.core.truth_(inst_13407)){
var statearr_13448_13477 = state_13433__$1;
(statearr_13448_13477[(1)] = (8));

} else {
var statearr_13449_13478 = state_13433__$1;
(statearr_13449_13478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13434 === (14))){
var inst_13426 = (state_13433[(2)]);
var inst_13427 = cljs.core.async.close_BANG_.call(null,out);
var state_13433__$1 = (function (){var statearr_13451 = state_13433;
(statearr_13451[(13)] = inst_13426);

return statearr_13451;
})();
var statearr_13452_13479 = state_13433__$1;
(statearr_13452_13479[(2)] = inst_13427);

(statearr_13452_13479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13434 === (10))){
var inst_13417 = (state_13433[(2)]);
var state_13433__$1 = state_13433;
var statearr_13453_13480 = state_13433__$1;
(statearr_13453_13480[(2)] = inst_13417);

(statearr_13453_13480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13434 === (8))){
var inst_13397 = (state_13433[(8)]);
var inst_13406 = (state_13433[(11)]);
var tmp13450 = inst_13397;
var inst_13397__$1 = tmp13450;
var inst_13398 = inst_13406;
var state_13433__$1 = (function (){var statearr_13454 = state_13433;
(statearr_13454[(7)] = inst_13398);

(statearr_13454[(8)] = inst_13397__$1);

return statearr_13454;
})();
var statearr_13455_13481 = state_13433__$1;
(statearr_13455_13481[(2)] = null);

(statearr_13455_13481[(1)] = (2));


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
});})(c__7080__auto___13467,out))
;
return ((function (switch__7015__auto__,c__7080__auto___13467,out){
return (function() {
var cljs$core$async$state_machine__7016__auto__ = null;
var cljs$core$async$state_machine__7016__auto____0 = (function (){
var statearr_13459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13459[(0)] = cljs$core$async$state_machine__7016__auto__);

(statearr_13459[(1)] = (1));

return statearr_13459;
});
var cljs$core$async$state_machine__7016__auto____1 = (function (state_13433){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_13433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e13460){if((e13460 instanceof Object)){
var ex__7019__auto__ = e13460;
var statearr_13461_13482 = state_13433;
(statearr_13461_13482[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13483 = state_13433;
state_13433 = G__13483;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$state_machine__7016__auto__ = function(state_13433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7016__auto____1.call(this,state_13433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7016__auto____0;
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7016__auto____1;
return cljs$core$async$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___13467,out))
})();
var state__7082__auto__ = (function (){var statearr_13462 = f__7081__auto__.call(null);
(statearr_13462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___13467);

return statearr_13462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___13467,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13484 = [];
var len__5621__auto___13558 = arguments.length;
var i__5622__auto___13559 = (0);
while(true){
if((i__5622__auto___13559 < len__5621__auto___13558)){
args13484.push((arguments[i__5622__auto___13559]));

var G__13560 = (i__5622__auto___13559 + (1));
i__5622__auto___13559 = G__13560;
continue;
} else {
}
break;
}

var G__13486 = args13484.length;
switch (G__13486) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13484.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7080__auto___13562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto___13562,out){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto___13562,out){
return (function (state_13528){
var state_val_13529 = (state_13528[(1)]);
if((state_val_13529 === (7))){
var inst_13524 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
var statearr_13530_13563 = state_13528__$1;
(statearr_13530_13563[(2)] = inst_13524);

(statearr_13530_13563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (1))){
var inst_13487 = [];
var inst_13488 = inst_13487;
var inst_13489 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13528__$1 = (function (){var statearr_13531 = state_13528;
(statearr_13531[(7)] = inst_13489);

(statearr_13531[(8)] = inst_13488);

return statearr_13531;
})();
var statearr_13532_13564 = state_13528__$1;
(statearr_13532_13564[(2)] = null);

(statearr_13532_13564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (4))){
var inst_13492 = (state_13528[(9)]);
var inst_13492__$1 = (state_13528[(2)]);
var inst_13493 = (inst_13492__$1 == null);
var inst_13494 = cljs.core.not.call(null,inst_13493);
var state_13528__$1 = (function (){var statearr_13533 = state_13528;
(statearr_13533[(9)] = inst_13492__$1);

return statearr_13533;
})();
if(inst_13494){
var statearr_13534_13565 = state_13528__$1;
(statearr_13534_13565[(1)] = (5));

} else {
var statearr_13535_13566 = state_13528__$1;
(statearr_13535_13566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (15))){
var inst_13518 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
var statearr_13536_13567 = state_13528__$1;
(statearr_13536_13567[(2)] = inst_13518);

(statearr_13536_13567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (13))){
var state_13528__$1 = state_13528;
var statearr_13537_13568 = state_13528__$1;
(statearr_13537_13568[(2)] = null);

(statearr_13537_13568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (6))){
var inst_13488 = (state_13528[(8)]);
var inst_13513 = inst_13488.length;
var inst_13514 = (inst_13513 > (0));
var state_13528__$1 = state_13528;
if(cljs.core.truth_(inst_13514)){
var statearr_13538_13569 = state_13528__$1;
(statearr_13538_13569[(1)] = (12));

} else {
var statearr_13539_13570 = state_13528__$1;
(statearr_13539_13570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (3))){
var inst_13526 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13528__$1,inst_13526);
} else {
if((state_val_13529 === (12))){
var inst_13488 = (state_13528[(8)]);
var inst_13516 = cljs.core.vec.call(null,inst_13488);
var state_13528__$1 = state_13528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13528__$1,(15),out,inst_13516);
} else {
if((state_val_13529 === (2))){
var state_13528__$1 = state_13528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13528__$1,(4),ch);
} else {
if((state_val_13529 === (11))){
var inst_13492 = (state_13528[(9)]);
var inst_13496 = (state_13528[(10)]);
var inst_13506 = (state_13528[(2)]);
var inst_13507 = [];
var inst_13508 = inst_13507.push(inst_13492);
var inst_13488 = inst_13507;
var inst_13489 = inst_13496;
var state_13528__$1 = (function (){var statearr_13540 = state_13528;
(statearr_13540[(11)] = inst_13508);

(statearr_13540[(12)] = inst_13506);

(statearr_13540[(7)] = inst_13489);

(statearr_13540[(8)] = inst_13488);

return statearr_13540;
})();
var statearr_13541_13571 = state_13528__$1;
(statearr_13541_13571[(2)] = null);

(statearr_13541_13571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (9))){
var inst_13488 = (state_13528[(8)]);
var inst_13504 = cljs.core.vec.call(null,inst_13488);
var state_13528__$1 = state_13528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13528__$1,(11),out,inst_13504);
} else {
if((state_val_13529 === (5))){
var inst_13492 = (state_13528[(9)]);
var inst_13489 = (state_13528[(7)]);
var inst_13496 = (state_13528[(10)]);
var inst_13496__$1 = f.call(null,inst_13492);
var inst_13497 = cljs.core._EQ_.call(null,inst_13496__$1,inst_13489);
var inst_13498 = cljs.core.keyword_identical_QMARK_.call(null,inst_13489,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13499 = (inst_13497) || (inst_13498);
var state_13528__$1 = (function (){var statearr_13542 = state_13528;
(statearr_13542[(10)] = inst_13496__$1);

return statearr_13542;
})();
if(cljs.core.truth_(inst_13499)){
var statearr_13543_13572 = state_13528__$1;
(statearr_13543_13572[(1)] = (8));

} else {
var statearr_13544_13573 = state_13528__$1;
(statearr_13544_13573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (14))){
var inst_13521 = (state_13528[(2)]);
var inst_13522 = cljs.core.async.close_BANG_.call(null,out);
var state_13528__$1 = (function (){var statearr_13546 = state_13528;
(statearr_13546[(13)] = inst_13521);

return statearr_13546;
})();
var statearr_13547_13574 = state_13528__$1;
(statearr_13547_13574[(2)] = inst_13522);

(statearr_13547_13574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (10))){
var inst_13511 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
var statearr_13548_13575 = state_13528__$1;
(statearr_13548_13575[(2)] = inst_13511);

(statearr_13548_13575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (8))){
var inst_13492 = (state_13528[(9)]);
var inst_13488 = (state_13528[(8)]);
var inst_13496 = (state_13528[(10)]);
var inst_13501 = inst_13488.push(inst_13492);
var tmp13545 = inst_13488;
var inst_13488__$1 = tmp13545;
var inst_13489 = inst_13496;
var state_13528__$1 = (function (){var statearr_13549 = state_13528;
(statearr_13549[(7)] = inst_13489);

(statearr_13549[(8)] = inst_13488__$1);

(statearr_13549[(14)] = inst_13501);

return statearr_13549;
})();
var statearr_13550_13576 = state_13528__$1;
(statearr_13550_13576[(2)] = null);

(statearr_13550_13576[(1)] = (2));


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
});})(c__7080__auto___13562,out))
;
return ((function (switch__7015__auto__,c__7080__auto___13562,out){
return (function() {
var cljs$core$async$state_machine__7016__auto__ = null;
var cljs$core$async$state_machine__7016__auto____0 = (function (){
var statearr_13554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13554[(0)] = cljs$core$async$state_machine__7016__auto__);

(statearr_13554[(1)] = (1));

return statearr_13554;
});
var cljs$core$async$state_machine__7016__auto____1 = (function (state_13528){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_13528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e13555){if((e13555 instanceof Object)){
var ex__7019__auto__ = e13555;
var statearr_13556_13577 = state_13528;
(statearr_13556_13577[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13578 = state_13528;
state_13528 = G__13578;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
cljs$core$async$state_machine__7016__auto__ = function(state_13528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7016__auto____1.call(this,state_13528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7016__auto____0;
cljs$core$async$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7016__auto____1;
return cljs$core$async$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto___13562,out))
})();
var state__7082__auto__ = (function (){var statearr_13557 = f__7081__auto__.call(null);
(statearr_13557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto___13562);

return statearr_13557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto___13562,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1447010680121