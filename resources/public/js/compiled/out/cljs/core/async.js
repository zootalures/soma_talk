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
if(typeof cljs.core.async.t_cljs$core$async24821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24821 = (function (fn_handler,f,meta24822){
this.fn_handler = fn_handler;
this.f = f;
this.meta24822 = meta24822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24823,meta24822__$1){
var self__ = this;
var _24823__$1 = this;
return (new cljs.core.async.t_cljs$core$async24821(self__.fn_handler,self__.f,meta24822__$1));
});

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24823){
var self__ = this;
var _24823__$1 = this;
return self__.meta24822;
});

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24822","meta24822",1737580847,null)], null);
});

cljs.core.async.t_cljs$core$async24821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24821";

cljs.core.async.t_cljs$core$async24821.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async24821");
});

cljs.core.async.__GT_t_cljs$core$async24821 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async24821(fn_handler__$1,f__$1,meta24822){
return (new cljs.core.async.t_cljs$core$async24821(fn_handler__$1,f__$1,meta24822));
});

}

return (new cljs.core.async.t_cljs$core$async24821(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args24826 = [];
var len__17376__auto___24829 = arguments.length;
var i__17377__auto___24830 = (0);
while(true){
if((i__17377__auto___24830 < len__17376__auto___24829)){
args24826.push((arguments[i__17377__auto___24830]));

var G__24831 = (i__17377__auto___24830 + (1));
i__17377__auto___24830 = G__24831;
continue;
} else {
}
break;
}

var G__24828 = args24826.length;
switch (G__24828) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24826.length)].join('')));

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
var args24833 = [];
var len__17376__auto___24836 = arguments.length;
var i__17377__auto___24837 = (0);
while(true){
if((i__17377__auto___24837 < len__17376__auto___24836)){
args24833.push((arguments[i__17377__auto___24837]));

var G__24838 = (i__17377__auto___24837 + (1));
i__17377__auto___24837 = G__24838;
continue;
} else {
}
break;
}

var G__24835 = args24833.length;
switch (G__24835) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24833.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24840 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24840);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24840,ret){
return (function (){
return fn1.call(null,val_24840);
});})(val_24840,ret))
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
var args24841 = [];
var len__17376__auto___24844 = arguments.length;
var i__17377__auto___24845 = (0);
while(true){
if((i__17377__auto___24845 < len__17376__auto___24844)){
args24841.push((arguments[i__17377__auto___24845]));

var G__24846 = (i__17377__auto___24845 + (1));
i__17377__auto___24845 = G__24846;
continue;
} else {
}
break;
}

var G__24843 = args24841.length;
switch (G__24843) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24841.length)].join('')));

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
var n__17221__auto___24848 = n;
var x_24849 = (0);
while(true){
if((x_24849 < n__17221__auto___24848)){
(a[x_24849] = (0));

var G__24850 = (x_24849 + (1));
x_24849 = G__24850;
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

var G__24851 = (i + (1));
i = G__24851;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24855 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24855 = (function (alt_flag,flag,meta24856){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24856 = meta24856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24857,meta24856__$1){
var self__ = this;
var _24857__$1 = this;
return (new cljs.core.async.t_cljs$core$async24855(self__.alt_flag,self__.flag,meta24856__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24857){
var self__ = this;
var _24857__$1 = this;
return self__.meta24856;
});})(flag))
;

cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24855.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24856","meta24856",877353177,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24855";

cljs.core.async.t_cljs$core$async24855.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async24855");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24855 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24855(alt_flag__$1,flag__$1,meta24856){
return (new cljs.core.async.t_cljs$core$async24855(alt_flag__$1,flag__$1,meta24856));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24855(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24861 = (function (alt_handler,flag,cb,meta24862){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24862 = meta24862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24863,meta24862__$1){
var self__ = this;
var _24863__$1 = this;
return (new cljs.core.async.t_cljs$core$async24861(self__.alt_handler,self__.flag,self__.cb,meta24862__$1));
});

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24863){
var self__ = this;
var _24863__$1 = this;
return self__.meta24862;
});

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24862","meta24862",-1916451830,null)], null);
});

cljs.core.async.t_cljs$core$async24861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24861";

cljs.core.async.t_cljs$core$async24861.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async24861");
});

cljs.core.async.__GT_t_cljs$core$async24861 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24861(alt_handler__$1,flag__$1,cb__$1,meta24862){
return (new cljs.core.async.t_cljs$core$async24861(alt_handler__$1,flag__$1,cb__$1,meta24862));
});

}

return (new cljs.core.async.t_cljs$core$async24861(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24864_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24864_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24865_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24865_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16318__auto__ = wport;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24866 = (i + (1));
i = G__24866;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16318__auto__ = ret;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16306__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16306__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16306__auto__;
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
var args__17383__auto__ = [];
var len__17376__auto___24872 = arguments.length;
var i__17377__auto___24873 = (0);
while(true){
if((i__17377__auto___24873 < len__17376__auto___24872)){
args__17383__auto__.push((arguments[i__17377__auto___24873]));

var G__24874 = (i__17377__auto___24873 + (1));
i__17377__auto___24873 = G__24874;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24869){
var map__24870 = p__24869;
var map__24870__$1 = ((((!((map__24870 == null)))?((((map__24870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24870):map__24870);
var opts = map__24870__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24867){
var G__24868 = cljs.core.first.call(null,seq24867);
var seq24867__$1 = cljs.core.next.call(null,seq24867);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24868,seq24867__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24875 = [];
var len__17376__auto___24925 = arguments.length;
var i__17377__auto___24926 = (0);
while(true){
if((i__17377__auto___24926 < len__17376__auto___24925)){
args24875.push((arguments[i__17377__auto___24926]));

var G__24927 = (i__17377__auto___24926 + (1));
i__17377__auto___24926 = G__24927;
continue;
} else {
}
break;
}

var G__24877 = args24875.length;
switch (G__24877) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24875.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19399__auto___24929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___24929){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___24929){
return (function (state_24901){
var state_val_24902 = (state_24901[(1)]);
if((state_val_24902 === (7))){
var inst_24897 = (state_24901[(2)]);
var state_24901__$1 = state_24901;
var statearr_24903_24930 = state_24901__$1;
(statearr_24903_24930[(2)] = inst_24897);

(statearr_24903_24930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (1))){
var state_24901__$1 = state_24901;
var statearr_24904_24931 = state_24901__$1;
(statearr_24904_24931[(2)] = null);

(statearr_24904_24931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (4))){
var inst_24880 = (state_24901[(7)]);
var inst_24880__$1 = (state_24901[(2)]);
var inst_24881 = (inst_24880__$1 == null);
var state_24901__$1 = (function (){var statearr_24905 = state_24901;
(statearr_24905[(7)] = inst_24880__$1);

return statearr_24905;
})();
if(cljs.core.truth_(inst_24881)){
var statearr_24906_24932 = state_24901__$1;
(statearr_24906_24932[(1)] = (5));

} else {
var statearr_24907_24933 = state_24901__$1;
(statearr_24907_24933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (13))){
var state_24901__$1 = state_24901;
var statearr_24908_24934 = state_24901__$1;
(statearr_24908_24934[(2)] = null);

(statearr_24908_24934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (6))){
var inst_24880 = (state_24901[(7)]);
var state_24901__$1 = state_24901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24901__$1,(11),to,inst_24880);
} else {
if((state_val_24902 === (3))){
var inst_24899 = (state_24901[(2)]);
var state_24901__$1 = state_24901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24901__$1,inst_24899);
} else {
if((state_val_24902 === (12))){
var state_24901__$1 = state_24901;
var statearr_24909_24935 = state_24901__$1;
(statearr_24909_24935[(2)] = null);

(statearr_24909_24935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (2))){
var state_24901__$1 = state_24901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24901__$1,(4),from);
} else {
if((state_val_24902 === (11))){
var inst_24890 = (state_24901[(2)]);
var state_24901__$1 = state_24901;
if(cljs.core.truth_(inst_24890)){
var statearr_24910_24936 = state_24901__$1;
(statearr_24910_24936[(1)] = (12));

} else {
var statearr_24911_24937 = state_24901__$1;
(statearr_24911_24937[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (9))){
var state_24901__$1 = state_24901;
var statearr_24912_24938 = state_24901__$1;
(statearr_24912_24938[(2)] = null);

(statearr_24912_24938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (5))){
var state_24901__$1 = state_24901;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24913_24939 = state_24901__$1;
(statearr_24913_24939[(1)] = (8));

} else {
var statearr_24914_24940 = state_24901__$1;
(statearr_24914_24940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (14))){
var inst_24895 = (state_24901[(2)]);
var state_24901__$1 = state_24901;
var statearr_24915_24941 = state_24901__$1;
(statearr_24915_24941[(2)] = inst_24895);

(statearr_24915_24941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (10))){
var inst_24887 = (state_24901[(2)]);
var state_24901__$1 = state_24901;
var statearr_24916_24942 = state_24901__$1;
(statearr_24916_24942[(2)] = inst_24887);

(statearr_24916_24942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (8))){
var inst_24884 = cljs.core.async.close_BANG_.call(null,to);
var state_24901__$1 = state_24901;
var statearr_24917_24943 = state_24901__$1;
(statearr_24917_24943[(2)] = inst_24884);

(statearr_24917_24943[(1)] = (10));


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
});})(c__19399__auto___24929))
;
return ((function (switch__19334__auto__,c__19399__auto___24929){
return (function() {
var cljs$core$async$state_machine__19335__auto__ = null;
var cljs$core$async$state_machine__19335__auto____0 = (function (){
var statearr_24921 = [null,null,null,null,null,null,null,null];
(statearr_24921[(0)] = cljs$core$async$state_machine__19335__auto__);

(statearr_24921[(1)] = (1));

return statearr_24921;
});
var cljs$core$async$state_machine__19335__auto____1 = (function (state_24901){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_24901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e24922){if((e24922 instanceof Object)){
var ex__19338__auto__ = e24922;
var statearr_24923_24944 = state_24901;
(statearr_24923_24944[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24945 = state_24901;
state_24901 = G__24945;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$state_machine__19335__auto__ = function(state_24901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19335__auto____1.call(this,state_24901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19335__auto____0;
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19335__auto____1;
return cljs$core$async$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___24929))
})();
var state__19401__auto__ = (function (){var statearr_24924 = f__19400__auto__.call(null);
(statearr_24924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___24929);

return statearr_24924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___24929))
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
return (function (p__25129){
var vec__25130 = p__25129;
var v = cljs.core.nth.call(null,vec__25130,(0),null);
var p = cljs.core.nth.call(null,vec__25130,(1),null);
var job = vec__25130;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19399__auto___25312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___25312,res,vec__25130,v,p,job,jobs,results){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___25312,res,vec__25130,v,p,job,jobs,results){
return (function (state_25135){
var state_val_25136 = (state_25135[(1)]);
if((state_val_25136 === (1))){
var state_25135__$1 = state_25135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25135__$1,(2),res,v);
} else {
if((state_val_25136 === (2))){
var inst_25132 = (state_25135[(2)]);
var inst_25133 = cljs.core.async.close_BANG_.call(null,res);
var state_25135__$1 = (function (){var statearr_25137 = state_25135;
(statearr_25137[(7)] = inst_25132);

return statearr_25137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25135__$1,inst_25133);
} else {
return null;
}
}
});})(c__19399__auto___25312,res,vec__25130,v,p,job,jobs,results))
;
return ((function (switch__19334__auto__,c__19399__auto___25312,res,vec__25130,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0 = (function (){
var statearr_25141 = [null,null,null,null,null,null,null,null];
(statearr_25141[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__);

(statearr_25141[(1)] = (1));

return statearr_25141;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1 = (function (state_25135){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_25135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e25142){if((e25142 instanceof Object)){
var ex__19338__auto__ = e25142;
var statearr_25143_25313 = state_25135;
(statearr_25143_25313[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25314 = state_25135;
state_25135 = G__25314;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__ = function(state_25135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1.call(this,state_25135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___25312,res,vec__25130,v,p,job,jobs,results))
})();
var state__19401__auto__ = (function (){var statearr_25144 = f__19400__auto__.call(null);
(statearr_25144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___25312);

return statearr_25144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___25312,res,vec__25130,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25145){
var vec__25146 = p__25145;
var v = cljs.core.nth.call(null,vec__25146,(0),null);
var p = cljs.core.nth.call(null,vec__25146,(1),null);
var job = vec__25146;
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
var n__17221__auto___25315 = n;
var __25316 = (0);
while(true){
if((__25316 < n__17221__auto___25315)){
var G__25147_25317 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25147_25317) {
case "compute":
var c__19399__auto___25319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25316,c__19399__auto___25319,G__25147_25317,n__17221__auto___25315,jobs,results,process,async){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (__25316,c__19399__auto___25319,G__25147_25317,n__17221__auto___25315,jobs,results,process,async){
return (function (state_25160){
var state_val_25161 = (state_25160[(1)]);
if((state_val_25161 === (1))){
var state_25160__$1 = state_25160;
var statearr_25162_25320 = state_25160__$1;
(statearr_25162_25320[(2)] = null);

(statearr_25162_25320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (2))){
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25160__$1,(4),jobs);
} else {
if((state_val_25161 === (3))){
var inst_25158 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25160__$1,inst_25158);
} else {
if((state_val_25161 === (4))){
var inst_25150 = (state_25160[(2)]);
var inst_25151 = process.call(null,inst_25150);
var state_25160__$1 = state_25160;
if(cljs.core.truth_(inst_25151)){
var statearr_25163_25321 = state_25160__$1;
(statearr_25163_25321[(1)] = (5));

} else {
var statearr_25164_25322 = state_25160__$1;
(statearr_25164_25322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (5))){
var state_25160__$1 = state_25160;
var statearr_25165_25323 = state_25160__$1;
(statearr_25165_25323[(2)] = null);

(statearr_25165_25323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (6))){
var state_25160__$1 = state_25160;
var statearr_25166_25324 = state_25160__$1;
(statearr_25166_25324[(2)] = null);

(statearr_25166_25324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (7))){
var inst_25156 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25167_25325 = state_25160__$1;
(statearr_25167_25325[(2)] = inst_25156);

(statearr_25167_25325[(1)] = (3));


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
});})(__25316,c__19399__auto___25319,G__25147_25317,n__17221__auto___25315,jobs,results,process,async))
;
return ((function (__25316,switch__19334__auto__,c__19399__auto___25319,G__25147_25317,n__17221__auto___25315,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0 = (function (){
var statearr_25171 = [null,null,null,null,null,null,null];
(statearr_25171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__);

(statearr_25171[(1)] = (1));

return statearr_25171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1 = (function (state_25160){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_25160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e25172){if((e25172 instanceof Object)){
var ex__19338__auto__ = e25172;
var statearr_25173_25326 = state_25160;
(statearr_25173_25326[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25327 = state_25160;
state_25160 = G__25327;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__ = function(state_25160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1.call(this,state_25160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__;
})()
;})(__25316,switch__19334__auto__,c__19399__auto___25319,G__25147_25317,n__17221__auto___25315,jobs,results,process,async))
})();
var state__19401__auto__ = (function (){var statearr_25174 = f__19400__auto__.call(null);
(statearr_25174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___25319);

return statearr_25174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(__25316,c__19399__auto___25319,G__25147_25317,n__17221__auto___25315,jobs,results,process,async))
);


break;
case "async":
var c__19399__auto___25328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25316,c__19399__auto___25328,G__25147_25317,n__17221__auto___25315,jobs,results,process,async){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (__25316,c__19399__auto___25328,G__25147_25317,n__17221__auto___25315,jobs,results,process,async){
return (function (state_25187){
var state_val_25188 = (state_25187[(1)]);
if((state_val_25188 === (1))){
var state_25187__$1 = state_25187;
var statearr_25189_25329 = state_25187__$1;
(statearr_25189_25329[(2)] = null);

(statearr_25189_25329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (2))){
var state_25187__$1 = state_25187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25187__$1,(4),jobs);
} else {
if((state_val_25188 === (3))){
var inst_25185 = (state_25187[(2)]);
var state_25187__$1 = state_25187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25187__$1,inst_25185);
} else {
if((state_val_25188 === (4))){
var inst_25177 = (state_25187[(2)]);
var inst_25178 = async.call(null,inst_25177);
var state_25187__$1 = state_25187;
if(cljs.core.truth_(inst_25178)){
var statearr_25190_25330 = state_25187__$1;
(statearr_25190_25330[(1)] = (5));

} else {
var statearr_25191_25331 = state_25187__$1;
(statearr_25191_25331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (5))){
var state_25187__$1 = state_25187;
var statearr_25192_25332 = state_25187__$1;
(statearr_25192_25332[(2)] = null);

(statearr_25192_25332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (6))){
var state_25187__$1 = state_25187;
var statearr_25193_25333 = state_25187__$1;
(statearr_25193_25333[(2)] = null);

(statearr_25193_25333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25188 === (7))){
var inst_25183 = (state_25187[(2)]);
var state_25187__$1 = state_25187;
var statearr_25194_25334 = state_25187__$1;
(statearr_25194_25334[(2)] = inst_25183);

(statearr_25194_25334[(1)] = (3));


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
});})(__25316,c__19399__auto___25328,G__25147_25317,n__17221__auto___25315,jobs,results,process,async))
;
return ((function (__25316,switch__19334__auto__,c__19399__auto___25328,G__25147_25317,n__17221__auto___25315,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0 = (function (){
var statearr_25198 = [null,null,null,null,null,null,null];
(statearr_25198[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__);

(statearr_25198[(1)] = (1));

return statearr_25198;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1 = (function (state_25187){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_25187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e25199){if((e25199 instanceof Object)){
var ex__19338__auto__ = e25199;
var statearr_25200_25335 = state_25187;
(statearr_25200_25335[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25336 = state_25187;
state_25187 = G__25336;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__ = function(state_25187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1.call(this,state_25187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__;
})()
;})(__25316,switch__19334__auto__,c__19399__auto___25328,G__25147_25317,n__17221__auto___25315,jobs,results,process,async))
})();
var state__19401__auto__ = (function (){var statearr_25201 = f__19400__auto__.call(null);
(statearr_25201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___25328);

return statearr_25201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(__25316,c__19399__auto___25328,G__25147_25317,n__17221__auto___25315,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25337 = (__25316 + (1));
__25316 = G__25337;
continue;
} else {
}
break;
}

var c__19399__auto___25338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___25338,jobs,results,process,async){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___25338,jobs,results,process,async){
return (function (state_25223){
var state_val_25224 = (state_25223[(1)]);
if((state_val_25224 === (1))){
var state_25223__$1 = state_25223;
var statearr_25225_25339 = state_25223__$1;
(statearr_25225_25339[(2)] = null);

(statearr_25225_25339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (2))){
var state_25223__$1 = state_25223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25223__$1,(4),from);
} else {
if((state_val_25224 === (3))){
var inst_25221 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25223__$1,inst_25221);
} else {
if((state_val_25224 === (4))){
var inst_25204 = (state_25223[(7)]);
var inst_25204__$1 = (state_25223[(2)]);
var inst_25205 = (inst_25204__$1 == null);
var state_25223__$1 = (function (){var statearr_25226 = state_25223;
(statearr_25226[(7)] = inst_25204__$1);

return statearr_25226;
})();
if(cljs.core.truth_(inst_25205)){
var statearr_25227_25340 = state_25223__$1;
(statearr_25227_25340[(1)] = (5));

} else {
var statearr_25228_25341 = state_25223__$1;
(statearr_25228_25341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (5))){
var inst_25207 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25223__$1 = state_25223;
var statearr_25229_25342 = state_25223__$1;
(statearr_25229_25342[(2)] = inst_25207);

(statearr_25229_25342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (6))){
var inst_25204 = (state_25223[(7)]);
var inst_25209 = (state_25223[(8)]);
var inst_25209__$1 = cljs.core.async.chan.call(null,(1));
var inst_25210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25211 = [inst_25204,inst_25209__$1];
var inst_25212 = (new cljs.core.PersistentVector(null,2,(5),inst_25210,inst_25211,null));
var state_25223__$1 = (function (){var statearr_25230 = state_25223;
(statearr_25230[(8)] = inst_25209__$1);

return statearr_25230;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25223__$1,(8),jobs,inst_25212);
} else {
if((state_val_25224 === (7))){
var inst_25219 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
var statearr_25231_25343 = state_25223__$1;
(statearr_25231_25343[(2)] = inst_25219);

(statearr_25231_25343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (8))){
var inst_25209 = (state_25223[(8)]);
var inst_25214 = (state_25223[(2)]);
var state_25223__$1 = (function (){var statearr_25232 = state_25223;
(statearr_25232[(9)] = inst_25214);

return statearr_25232;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25223__$1,(9),results,inst_25209);
} else {
if((state_val_25224 === (9))){
var inst_25216 = (state_25223[(2)]);
var state_25223__$1 = (function (){var statearr_25233 = state_25223;
(statearr_25233[(10)] = inst_25216);

return statearr_25233;
})();
var statearr_25234_25344 = state_25223__$1;
(statearr_25234_25344[(2)] = null);

(statearr_25234_25344[(1)] = (2));


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
});})(c__19399__auto___25338,jobs,results,process,async))
;
return ((function (switch__19334__auto__,c__19399__auto___25338,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0 = (function (){
var statearr_25238 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__);

(statearr_25238[(1)] = (1));

return statearr_25238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1 = (function (state_25223){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_25223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e25239){if((e25239 instanceof Object)){
var ex__19338__auto__ = e25239;
var statearr_25240_25345 = state_25223;
(statearr_25240_25345[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25346 = state_25223;
state_25223 = G__25346;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__ = function(state_25223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1.call(this,state_25223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___25338,jobs,results,process,async))
})();
var state__19401__auto__ = (function (){var statearr_25241 = f__19400__auto__.call(null);
(statearr_25241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___25338);

return statearr_25241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___25338,jobs,results,process,async))
);


var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__,jobs,results,process,async){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__,jobs,results,process,async){
return (function (state_25279){
var state_val_25280 = (state_25279[(1)]);
if((state_val_25280 === (7))){
var inst_25275 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
var statearr_25281_25347 = state_25279__$1;
(statearr_25281_25347[(2)] = inst_25275);

(statearr_25281_25347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (20))){
var state_25279__$1 = state_25279;
var statearr_25282_25348 = state_25279__$1;
(statearr_25282_25348[(2)] = null);

(statearr_25282_25348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (1))){
var state_25279__$1 = state_25279;
var statearr_25283_25349 = state_25279__$1;
(statearr_25283_25349[(2)] = null);

(statearr_25283_25349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (4))){
var inst_25244 = (state_25279[(7)]);
var inst_25244__$1 = (state_25279[(2)]);
var inst_25245 = (inst_25244__$1 == null);
var state_25279__$1 = (function (){var statearr_25284 = state_25279;
(statearr_25284[(7)] = inst_25244__$1);

return statearr_25284;
})();
if(cljs.core.truth_(inst_25245)){
var statearr_25285_25350 = state_25279__$1;
(statearr_25285_25350[(1)] = (5));

} else {
var statearr_25286_25351 = state_25279__$1;
(statearr_25286_25351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (15))){
var inst_25257 = (state_25279[(8)]);
var state_25279__$1 = state_25279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25279__$1,(18),to,inst_25257);
} else {
if((state_val_25280 === (21))){
var inst_25270 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
var statearr_25287_25352 = state_25279__$1;
(statearr_25287_25352[(2)] = inst_25270);

(statearr_25287_25352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (13))){
var inst_25272 = (state_25279[(2)]);
var state_25279__$1 = (function (){var statearr_25288 = state_25279;
(statearr_25288[(9)] = inst_25272);

return statearr_25288;
})();
var statearr_25289_25353 = state_25279__$1;
(statearr_25289_25353[(2)] = null);

(statearr_25289_25353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (6))){
var inst_25244 = (state_25279[(7)]);
var state_25279__$1 = state_25279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25279__$1,(11),inst_25244);
} else {
if((state_val_25280 === (17))){
var inst_25265 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
if(cljs.core.truth_(inst_25265)){
var statearr_25290_25354 = state_25279__$1;
(statearr_25290_25354[(1)] = (19));

} else {
var statearr_25291_25355 = state_25279__$1;
(statearr_25291_25355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (3))){
var inst_25277 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25279__$1,inst_25277);
} else {
if((state_val_25280 === (12))){
var inst_25254 = (state_25279[(10)]);
var state_25279__$1 = state_25279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25279__$1,(14),inst_25254);
} else {
if((state_val_25280 === (2))){
var state_25279__$1 = state_25279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25279__$1,(4),results);
} else {
if((state_val_25280 === (19))){
var state_25279__$1 = state_25279;
var statearr_25292_25356 = state_25279__$1;
(statearr_25292_25356[(2)] = null);

(statearr_25292_25356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (11))){
var inst_25254 = (state_25279[(2)]);
var state_25279__$1 = (function (){var statearr_25293 = state_25279;
(statearr_25293[(10)] = inst_25254);

return statearr_25293;
})();
var statearr_25294_25357 = state_25279__$1;
(statearr_25294_25357[(2)] = null);

(statearr_25294_25357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (9))){
var state_25279__$1 = state_25279;
var statearr_25295_25358 = state_25279__$1;
(statearr_25295_25358[(2)] = null);

(statearr_25295_25358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (5))){
var state_25279__$1 = state_25279;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25296_25359 = state_25279__$1;
(statearr_25296_25359[(1)] = (8));

} else {
var statearr_25297_25360 = state_25279__$1;
(statearr_25297_25360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (14))){
var inst_25257 = (state_25279[(8)]);
var inst_25259 = (state_25279[(11)]);
var inst_25257__$1 = (state_25279[(2)]);
var inst_25258 = (inst_25257__$1 == null);
var inst_25259__$1 = cljs.core.not.call(null,inst_25258);
var state_25279__$1 = (function (){var statearr_25298 = state_25279;
(statearr_25298[(8)] = inst_25257__$1);

(statearr_25298[(11)] = inst_25259__$1);

return statearr_25298;
})();
if(inst_25259__$1){
var statearr_25299_25361 = state_25279__$1;
(statearr_25299_25361[(1)] = (15));

} else {
var statearr_25300_25362 = state_25279__$1;
(statearr_25300_25362[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (16))){
var inst_25259 = (state_25279[(11)]);
var state_25279__$1 = state_25279;
var statearr_25301_25363 = state_25279__$1;
(statearr_25301_25363[(2)] = inst_25259);

(statearr_25301_25363[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (10))){
var inst_25251 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
var statearr_25302_25364 = state_25279__$1;
(statearr_25302_25364[(2)] = inst_25251);

(statearr_25302_25364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (18))){
var inst_25262 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
var statearr_25303_25365 = state_25279__$1;
(statearr_25303_25365[(2)] = inst_25262);

(statearr_25303_25365[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (8))){
var inst_25248 = cljs.core.async.close_BANG_.call(null,to);
var state_25279__$1 = state_25279;
var statearr_25304_25366 = state_25279__$1;
(statearr_25304_25366[(2)] = inst_25248);

(statearr_25304_25366[(1)] = (10));


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
});})(c__19399__auto__,jobs,results,process,async))
;
return ((function (switch__19334__auto__,c__19399__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0 = (function (){
var statearr_25308 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__);

(statearr_25308[(1)] = (1));

return statearr_25308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1 = (function (state_25279){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_25279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e25309){if((e25309 instanceof Object)){
var ex__19338__auto__ = e25309;
var statearr_25310_25367 = state_25279;
(statearr_25310_25367[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25368 = state_25279;
state_25279 = G__25368;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__ = function(state_25279){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1.call(this,state_25279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__,jobs,results,process,async))
})();
var state__19401__auto__ = (function (){var statearr_25311 = f__19400__auto__.call(null);
(statearr_25311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_25311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__,jobs,results,process,async))
);

return c__19399__auto__;
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
var args25369 = [];
var len__17376__auto___25372 = arguments.length;
var i__17377__auto___25373 = (0);
while(true){
if((i__17377__auto___25373 < len__17376__auto___25372)){
args25369.push((arguments[i__17377__auto___25373]));

var G__25374 = (i__17377__auto___25373 + (1));
i__17377__auto___25373 = G__25374;
continue;
} else {
}
break;
}

var G__25371 = args25369.length;
switch (G__25371) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25369.length)].join('')));

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
var args25376 = [];
var len__17376__auto___25379 = arguments.length;
var i__17377__auto___25380 = (0);
while(true){
if((i__17377__auto___25380 < len__17376__auto___25379)){
args25376.push((arguments[i__17377__auto___25380]));

var G__25381 = (i__17377__auto___25380 + (1));
i__17377__auto___25380 = G__25381;
continue;
} else {
}
break;
}

var G__25378 = args25376.length;
switch (G__25378) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25376.length)].join('')));

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
var args25383 = [];
var len__17376__auto___25436 = arguments.length;
var i__17377__auto___25437 = (0);
while(true){
if((i__17377__auto___25437 < len__17376__auto___25436)){
args25383.push((arguments[i__17377__auto___25437]));

var G__25438 = (i__17377__auto___25437 + (1));
i__17377__auto___25437 = G__25438;
continue;
} else {
}
break;
}

var G__25385 = args25383.length;
switch (G__25385) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25383.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19399__auto___25440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___25440,tc,fc){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___25440,tc,fc){
return (function (state_25411){
var state_val_25412 = (state_25411[(1)]);
if((state_val_25412 === (7))){
var inst_25407 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25413_25441 = state_25411__$1;
(statearr_25413_25441[(2)] = inst_25407);

(statearr_25413_25441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (1))){
var state_25411__$1 = state_25411;
var statearr_25414_25442 = state_25411__$1;
(statearr_25414_25442[(2)] = null);

(statearr_25414_25442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (4))){
var inst_25388 = (state_25411[(7)]);
var inst_25388__$1 = (state_25411[(2)]);
var inst_25389 = (inst_25388__$1 == null);
var state_25411__$1 = (function (){var statearr_25415 = state_25411;
(statearr_25415[(7)] = inst_25388__$1);

return statearr_25415;
})();
if(cljs.core.truth_(inst_25389)){
var statearr_25416_25443 = state_25411__$1;
(statearr_25416_25443[(1)] = (5));

} else {
var statearr_25417_25444 = state_25411__$1;
(statearr_25417_25444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (13))){
var state_25411__$1 = state_25411;
var statearr_25418_25445 = state_25411__$1;
(statearr_25418_25445[(2)] = null);

(statearr_25418_25445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (6))){
var inst_25388 = (state_25411[(7)]);
var inst_25394 = p.call(null,inst_25388);
var state_25411__$1 = state_25411;
if(cljs.core.truth_(inst_25394)){
var statearr_25419_25446 = state_25411__$1;
(statearr_25419_25446[(1)] = (9));

} else {
var statearr_25420_25447 = state_25411__$1;
(statearr_25420_25447[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (3))){
var inst_25409 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25411__$1,inst_25409);
} else {
if((state_val_25412 === (12))){
var state_25411__$1 = state_25411;
var statearr_25421_25448 = state_25411__$1;
(statearr_25421_25448[(2)] = null);

(statearr_25421_25448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (2))){
var state_25411__$1 = state_25411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25411__$1,(4),ch);
} else {
if((state_val_25412 === (11))){
var inst_25388 = (state_25411[(7)]);
var inst_25398 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25411__$1,(8),inst_25398,inst_25388);
} else {
if((state_val_25412 === (9))){
var state_25411__$1 = state_25411;
var statearr_25422_25449 = state_25411__$1;
(statearr_25422_25449[(2)] = tc);

(statearr_25422_25449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (5))){
var inst_25391 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25392 = cljs.core.async.close_BANG_.call(null,fc);
var state_25411__$1 = (function (){var statearr_25423 = state_25411;
(statearr_25423[(8)] = inst_25391);

return statearr_25423;
})();
var statearr_25424_25450 = state_25411__$1;
(statearr_25424_25450[(2)] = inst_25392);

(statearr_25424_25450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (14))){
var inst_25405 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25425_25451 = state_25411__$1;
(statearr_25425_25451[(2)] = inst_25405);

(statearr_25425_25451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (10))){
var state_25411__$1 = state_25411;
var statearr_25426_25452 = state_25411__$1;
(statearr_25426_25452[(2)] = fc);

(statearr_25426_25452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (8))){
var inst_25400 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
if(cljs.core.truth_(inst_25400)){
var statearr_25427_25453 = state_25411__$1;
(statearr_25427_25453[(1)] = (12));

} else {
var statearr_25428_25454 = state_25411__$1;
(statearr_25428_25454[(1)] = (13));

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
});})(c__19399__auto___25440,tc,fc))
;
return ((function (switch__19334__auto__,c__19399__auto___25440,tc,fc){
return (function() {
var cljs$core$async$state_machine__19335__auto__ = null;
var cljs$core$async$state_machine__19335__auto____0 = (function (){
var statearr_25432 = [null,null,null,null,null,null,null,null,null];
(statearr_25432[(0)] = cljs$core$async$state_machine__19335__auto__);

(statearr_25432[(1)] = (1));

return statearr_25432;
});
var cljs$core$async$state_machine__19335__auto____1 = (function (state_25411){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_25411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e25433){if((e25433 instanceof Object)){
var ex__19338__auto__ = e25433;
var statearr_25434_25455 = state_25411;
(statearr_25434_25455[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25456 = state_25411;
state_25411 = G__25456;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$state_machine__19335__auto__ = function(state_25411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19335__auto____1.call(this,state_25411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19335__auto____0;
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19335__auto____1;
return cljs$core$async$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___25440,tc,fc))
})();
var state__19401__auto__ = (function (){var statearr_25435 = f__19400__auto__.call(null);
(statearr_25435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___25440);

return statearr_25435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___25440,tc,fc))
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
var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__){
return (function (state_25503){
var state_val_25504 = (state_25503[(1)]);
if((state_val_25504 === (1))){
var inst_25489 = init;
var state_25503__$1 = (function (){var statearr_25505 = state_25503;
(statearr_25505[(7)] = inst_25489);

return statearr_25505;
})();
var statearr_25506_25521 = state_25503__$1;
(statearr_25506_25521[(2)] = null);

(statearr_25506_25521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (2))){
var state_25503__$1 = state_25503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25503__$1,(4),ch);
} else {
if((state_val_25504 === (3))){
var inst_25501 = (state_25503[(2)]);
var state_25503__$1 = state_25503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25503__$1,inst_25501);
} else {
if((state_val_25504 === (4))){
var inst_25492 = (state_25503[(8)]);
var inst_25492__$1 = (state_25503[(2)]);
var inst_25493 = (inst_25492__$1 == null);
var state_25503__$1 = (function (){var statearr_25507 = state_25503;
(statearr_25507[(8)] = inst_25492__$1);

return statearr_25507;
})();
if(cljs.core.truth_(inst_25493)){
var statearr_25508_25522 = state_25503__$1;
(statearr_25508_25522[(1)] = (5));

} else {
var statearr_25509_25523 = state_25503__$1;
(statearr_25509_25523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (5))){
var inst_25489 = (state_25503[(7)]);
var state_25503__$1 = state_25503;
var statearr_25510_25524 = state_25503__$1;
(statearr_25510_25524[(2)] = inst_25489);

(statearr_25510_25524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (6))){
var inst_25489 = (state_25503[(7)]);
var inst_25492 = (state_25503[(8)]);
var inst_25496 = f.call(null,inst_25489,inst_25492);
var inst_25489__$1 = inst_25496;
var state_25503__$1 = (function (){var statearr_25511 = state_25503;
(statearr_25511[(7)] = inst_25489__$1);

return statearr_25511;
})();
var statearr_25512_25525 = state_25503__$1;
(statearr_25512_25525[(2)] = null);

(statearr_25512_25525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (7))){
var inst_25499 = (state_25503[(2)]);
var state_25503__$1 = state_25503;
var statearr_25513_25526 = state_25503__$1;
(statearr_25513_25526[(2)] = inst_25499);

(statearr_25513_25526[(1)] = (3));


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
});})(c__19399__auto__))
;
return ((function (switch__19334__auto__,c__19399__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19335__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19335__auto____0 = (function (){
var statearr_25517 = [null,null,null,null,null,null,null,null,null];
(statearr_25517[(0)] = cljs$core$async$reduce_$_state_machine__19335__auto__);

(statearr_25517[(1)] = (1));

return statearr_25517;
});
var cljs$core$async$reduce_$_state_machine__19335__auto____1 = (function (state_25503){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_25503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e25518){if((e25518 instanceof Object)){
var ex__19338__auto__ = e25518;
var statearr_25519_25527 = state_25503;
(statearr_25519_25527[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25528 = state_25503;
state_25503 = G__25528;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19335__auto__ = function(state_25503){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19335__auto____1.call(this,state_25503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19335__auto____0;
cljs$core$async$reduce_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19335__auto____1;
return cljs$core$async$reduce_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__))
})();
var state__19401__auto__ = (function (){var statearr_25520 = f__19400__auto__.call(null);
(statearr_25520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_25520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__))
);

return c__19399__auto__;
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
var args25529 = [];
var len__17376__auto___25581 = arguments.length;
var i__17377__auto___25582 = (0);
while(true){
if((i__17377__auto___25582 < len__17376__auto___25581)){
args25529.push((arguments[i__17377__auto___25582]));

var G__25583 = (i__17377__auto___25582 + (1));
i__17377__auto___25582 = G__25583;
continue;
} else {
}
break;
}

var G__25531 = args25529.length;
switch (G__25531) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25529.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__){
return (function (state_25556){
var state_val_25557 = (state_25556[(1)]);
if((state_val_25557 === (7))){
var inst_25538 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25558_25585 = state_25556__$1;
(statearr_25558_25585[(2)] = inst_25538);

(statearr_25558_25585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (1))){
var inst_25532 = cljs.core.seq.call(null,coll);
var inst_25533 = inst_25532;
var state_25556__$1 = (function (){var statearr_25559 = state_25556;
(statearr_25559[(7)] = inst_25533);

return statearr_25559;
})();
var statearr_25560_25586 = state_25556__$1;
(statearr_25560_25586[(2)] = null);

(statearr_25560_25586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (4))){
var inst_25533 = (state_25556[(7)]);
var inst_25536 = cljs.core.first.call(null,inst_25533);
var state_25556__$1 = state_25556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25556__$1,(7),ch,inst_25536);
} else {
if((state_val_25557 === (13))){
var inst_25550 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25561_25587 = state_25556__$1;
(statearr_25561_25587[(2)] = inst_25550);

(statearr_25561_25587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (6))){
var inst_25541 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
if(cljs.core.truth_(inst_25541)){
var statearr_25562_25588 = state_25556__$1;
(statearr_25562_25588[(1)] = (8));

} else {
var statearr_25563_25589 = state_25556__$1;
(statearr_25563_25589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (3))){
var inst_25554 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25556__$1,inst_25554);
} else {
if((state_val_25557 === (12))){
var state_25556__$1 = state_25556;
var statearr_25564_25590 = state_25556__$1;
(statearr_25564_25590[(2)] = null);

(statearr_25564_25590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (2))){
var inst_25533 = (state_25556[(7)]);
var state_25556__$1 = state_25556;
if(cljs.core.truth_(inst_25533)){
var statearr_25565_25591 = state_25556__$1;
(statearr_25565_25591[(1)] = (4));

} else {
var statearr_25566_25592 = state_25556__$1;
(statearr_25566_25592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (11))){
var inst_25547 = cljs.core.async.close_BANG_.call(null,ch);
var state_25556__$1 = state_25556;
var statearr_25567_25593 = state_25556__$1;
(statearr_25567_25593[(2)] = inst_25547);

(statearr_25567_25593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (9))){
var state_25556__$1 = state_25556;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25568_25594 = state_25556__$1;
(statearr_25568_25594[(1)] = (11));

} else {
var statearr_25569_25595 = state_25556__$1;
(statearr_25569_25595[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (5))){
var inst_25533 = (state_25556[(7)]);
var state_25556__$1 = state_25556;
var statearr_25570_25596 = state_25556__$1;
(statearr_25570_25596[(2)] = inst_25533);

(statearr_25570_25596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (10))){
var inst_25552 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25571_25597 = state_25556__$1;
(statearr_25571_25597[(2)] = inst_25552);

(statearr_25571_25597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (8))){
var inst_25533 = (state_25556[(7)]);
var inst_25543 = cljs.core.next.call(null,inst_25533);
var inst_25533__$1 = inst_25543;
var state_25556__$1 = (function (){var statearr_25572 = state_25556;
(statearr_25572[(7)] = inst_25533__$1);

return statearr_25572;
})();
var statearr_25573_25598 = state_25556__$1;
(statearr_25573_25598[(2)] = null);

(statearr_25573_25598[(1)] = (2));


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
});})(c__19399__auto__))
;
return ((function (switch__19334__auto__,c__19399__auto__){
return (function() {
var cljs$core$async$state_machine__19335__auto__ = null;
var cljs$core$async$state_machine__19335__auto____0 = (function (){
var statearr_25577 = [null,null,null,null,null,null,null,null];
(statearr_25577[(0)] = cljs$core$async$state_machine__19335__auto__);

(statearr_25577[(1)] = (1));

return statearr_25577;
});
var cljs$core$async$state_machine__19335__auto____1 = (function (state_25556){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_25556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e25578){if((e25578 instanceof Object)){
var ex__19338__auto__ = e25578;
var statearr_25579_25599 = state_25556;
(statearr_25579_25599[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25600 = state_25556;
state_25556 = G__25600;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$state_machine__19335__auto__ = function(state_25556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19335__auto____1.call(this,state_25556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19335__auto____0;
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19335__auto____1;
return cljs$core$async$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__))
})();
var state__19401__auto__ = (function (){var statearr_25580 = f__19400__auto__.call(null);
(statearr_25580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_25580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__))
);

return c__19399__auto__;
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
var x__16973__auto__ = (((_ == null))?null:_);
var m__16974__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,_);
} else {
var m__16974__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,_);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16974__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m);
} else {
var m__16974__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async25822 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25822 = (function (mult,ch,cs,meta25823){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25823 = meta25823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25824,meta25823__$1){
var self__ = this;
var _25824__$1 = this;
return (new cljs.core.async.t_cljs$core$async25822(self__.mult,self__.ch,self__.cs,meta25823__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25822.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25824){
var self__ = this;
var _25824__$1 = this;
return self__.meta25823;
});})(cs))
;

cljs.core.async.t_cljs$core$async25822.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25822.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25822.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25822.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25822.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25822.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25823","meta25823",1034714563,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25822.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25822";

cljs.core.async.t_cljs$core$async25822.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async25822");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25822 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25822(mult__$1,ch__$1,cs__$1,meta25823){
return (new cljs.core.async.t_cljs$core$async25822(mult__$1,ch__$1,cs__$1,meta25823));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25822(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19399__auto___26043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___26043,cs,m,dchan,dctr,done){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___26043,cs,m,dchan,dctr,done){
return (function (state_25955){
var state_val_25956 = (state_25955[(1)]);
if((state_val_25956 === (7))){
var inst_25951 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_25957_26044 = state_25955__$1;
(statearr_25957_26044[(2)] = inst_25951);

(statearr_25957_26044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (20))){
var inst_25856 = (state_25955[(7)]);
var inst_25866 = cljs.core.first.call(null,inst_25856);
var inst_25867 = cljs.core.nth.call(null,inst_25866,(0),null);
var inst_25868 = cljs.core.nth.call(null,inst_25866,(1),null);
var state_25955__$1 = (function (){var statearr_25958 = state_25955;
(statearr_25958[(8)] = inst_25867);

return statearr_25958;
})();
if(cljs.core.truth_(inst_25868)){
var statearr_25959_26045 = state_25955__$1;
(statearr_25959_26045[(1)] = (22));

} else {
var statearr_25960_26046 = state_25955__$1;
(statearr_25960_26046[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (27))){
var inst_25898 = (state_25955[(9)]);
var inst_25827 = (state_25955[(10)]);
var inst_25896 = (state_25955[(11)]);
var inst_25903 = (state_25955[(12)]);
var inst_25903__$1 = cljs.core._nth.call(null,inst_25896,inst_25898);
var inst_25904 = cljs.core.async.put_BANG_.call(null,inst_25903__$1,inst_25827,done);
var state_25955__$1 = (function (){var statearr_25961 = state_25955;
(statearr_25961[(12)] = inst_25903__$1);

return statearr_25961;
})();
if(cljs.core.truth_(inst_25904)){
var statearr_25962_26047 = state_25955__$1;
(statearr_25962_26047[(1)] = (30));

} else {
var statearr_25963_26048 = state_25955__$1;
(statearr_25963_26048[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (1))){
var state_25955__$1 = state_25955;
var statearr_25964_26049 = state_25955__$1;
(statearr_25964_26049[(2)] = null);

(statearr_25964_26049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (24))){
var inst_25856 = (state_25955[(7)]);
var inst_25873 = (state_25955[(2)]);
var inst_25874 = cljs.core.next.call(null,inst_25856);
var inst_25836 = inst_25874;
var inst_25837 = null;
var inst_25838 = (0);
var inst_25839 = (0);
var state_25955__$1 = (function (){var statearr_25965 = state_25955;
(statearr_25965[(13)] = inst_25839);

(statearr_25965[(14)] = inst_25838);

(statearr_25965[(15)] = inst_25836);

(statearr_25965[(16)] = inst_25873);

(statearr_25965[(17)] = inst_25837);

return statearr_25965;
})();
var statearr_25966_26050 = state_25955__$1;
(statearr_25966_26050[(2)] = null);

(statearr_25966_26050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (39))){
var state_25955__$1 = state_25955;
var statearr_25970_26051 = state_25955__$1;
(statearr_25970_26051[(2)] = null);

(statearr_25970_26051[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (4))){
var inst_25827 = (state_25955[(10)]);
var inst_25827__$1 = (state_25955[(2)]);
var inst_25828 = (inst_25827__$1 == null);
var state_25955__$1 = (function (){var statearr_25971 = state_25955;
(statearr_25971[(10)] = inst_25827__$1);

return statearr_25971;
})();
if(cljs.core.truth_(inst_25828)){
var statearr_25972_26052 = state_25955__$1;
(statearr_25972_26052[(1)] = (5));

} else {
var statearr_25973_26053 = state_25955__$1;
(statearr_25973_26053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (15))){
var inst_25839 = (state_25955[(13)]);
var inst_25838 = (state_25955[(14)]);
var inst_25836 = (state_25955[(15)]);
var inst_25837 = (state_25955[(17)]);
var inst_25852 = (state_25955[(2)]);
var inst_25853 = (inst_25839 + (1));
var tmp25967 = inst_25838;
var tmp25968 = inst_25836;
var tmp25969 = inst_25837;
var inst_25836__$1 = tmp25968;
var inst_25837__$1 = tmp25969;
var inst_25838__$1 = tmp25967;
var inst_25839__$1 = inst_25853;
var state_25955__$1 = (function (){var statearr_25974 = state_25955;
(statearr_25974[(13)] = inst_25839__$1);

(statearr_25974[(14)] = inst_25838__$1);

(statearr_25974[(18)] = inst_25852);

(statearr_25974[(15)] = inst_25836__$1);

(statearr_25974[(17)] = inst_25837__$1);

return statearr_25974;
})();
var statearr_25975_26054 = state_25955__$1;
(statearr_25975_26054[(2)] = null);

(statearr_25975_26054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (21))){
var inst_25877 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_25979_26055 = state_25955__$1;
(statearr_25979_26055[(2)] = inst_25877);

(statearr_25979_26055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (31))){
var inst_25903 = (state_25955[(12)]);
var inst_25907 = done.call(null,null);
var inst_25908 = cljs.core.async.untap_STAR_.call(null,m,inst_25903);
var state_25955__$1 = (function (){var statearr_25980 = state_25955;
(statearr_25980[(19)] = inst_25907);

return statearr_25980;
})();
var statearr_25981_26056 = state_25955__$1;
(statearr_25981_26056[(2)] = inst_25908);

(statearr_25981_26056[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (32))){
var inst_25898 = (state_25955[(9)]);
var inst_25897 = (state_25955[(20)]);
var inst_25896 = (state_25955[(11)]);
var inst_25895 = (state_25955[(21)]);
var inst_25910 = (state_25955[(2)]);
var inst_25911 = (inst_25898 + (1));
var tmp25976 = inst_25897;
var tmp25977 = inst_25896;
var tmp25978 = inst_25895;
var inst_25895__$1 = tmp25978;
var inst_25896__$1 = tmp25977;
var inst_25897__$1 = tmp25976;
var inst_25898__$1 = inst_25911;
var state_25955__$1 = (function (){var statearr_25982 = state_25955;
(statearr_25982[(9)] = inst_25898__$1);

(statearr_25982[(20)] = inst_25897__$1);

(statearr_25982[(22)] = inst_25910);

(statearr_25982[(11)] = inst_25896__$1);

(statearr_25982[(21)] = inst_25895__$1);

return statearr_25982;
})();
var statearr_25983_26057 = state_25955__$1;
(statearr_25983_26057[(2)] = null);

(statearr_25983_26057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (40))){
var inst_25923 = (state_25955[(23)]);
var inst_25927 = done.call(null,null);
var inst_25928 = cljs.core.async.untap_STAR_.call(null,m,inst_25923);
var state_25955__$1 = (function (){var statearr_25984 = state_25955;
(statearr_25984[(24)] = inst_25927);

return statearr_25984;
})();
var statearr_25985_26058 = state_25955__$1;
(statearr_25985_26058[(2)] = inst_25928);

(statearr_25985_26058[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (33))){
var inst_25914 = (state_25955[(25)]);
var inst_25916 = cljs.core.chunked_seq_QMARK_.call(null,inst_25914);
var state_25955__$1 = state_25955;
if(inst_25916){
var statearr_25986_26059 = state_25955__$1;
(statearr_25986_26059[(1)] = (36));

} else {
var statearr_25987_26060 = state_25955__$1;
(statearr_25987_26060[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (13))){
var inst_25846 = (state_25955[(26)]);
var inst_25849 = cljs.core.async.close_BANG_.call(null,inst_25846);
var state_25955__$1 = state_25955;
var statearr_25988_26061 = state_25955__$1;
(statearr_25988_26061[(2)] = inst_25849);

(statearr_25988_26061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (22))){
var inst_25867 = (state_25955[(8)]);
var inst_25870 = cljs.core.async.close_BANG_.call(null,inst_25867);
var state_25955__$1 = state_25955;
var statearr_25989_26062 = state_25955__$1;
(statearr_25989_26062[(2)] = inst_25870);

(statearr_25989_26062[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (36))){
var inst_25914 = (state_25955[(25)]);
var inst_25918 = cljs.core.chunk_first.call(null,inst_25914);
var inst_25919 = cljs.core.chunk_rest.call(null,inst_25914);
var inst_25920 = cljs.core.count.call(null,inst_25918);
var inst_25895 = inst_25919;
var inst_25896 = inst_25918;
var inst_25897 = inst_25920;
var inst_25898 = (0);
var state_25955__$1 = (function (){var statearr_25990 = state_25955;
(statearr_25990[(9)] = inst_25898);

(statearr_25990[(20)] = inst_25897);

(statearr_25990[(11)] = inst_25896);

(statearr_25990[(21)] = inst_25895);

return statearr_25990;
})();
var statearr_25991_26063 = state_25955__$1;
(statearr_25991_26063[(2)] = null);

(statearr_25991_26063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (41))){
var inst_25914 = (state_25955[(25)]);
var inst_25930 = (state_25955[(2)]);
var inst_25931 = cljs.core.next.call(null,inst_25914);
var inst_25895 = inst_25931;
var inst_25896 = null;
var inst_25897 = (0);
var inst_25898 = (0);
var state_25955__$1 = (function (){var statearr_25992 = state_25955;
(statearr_25992[(9)] = inst_25898);

(statearr_25992[(20)] = inst_25897);

(statearr_25992[(27)] = inst_25930);

(statearr_25992[(11)] = inst_25896);

(statearr_25992[(21)] = inst_25895);

return statearr_25992;
})();
var statearr_25993_26064 = state_25955__$1;
(statearr_25993_26064[(2)] = null);

(statearr_25993_26064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (43))){
var state_25955__$1 = state_25955;
var statearr_25994_26065 = state_25955__$1;
(statearr_25994_26065[(2)] = null);

(statearr_25994_26065[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (29))){
var inst_25939 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_25995_26066 = state_25955__$1;
(statearr_25995_26066[(2)] = inst_25939);

(statearr_25995_26066[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (44))){
var inst_25948 = (state_25955[(2)]);
var state_25955__$1 = (function (){var statearr_25996 = state_25955;
(statearr_25996[(28)] = inst_25948);

return statearr_25996;
})();
var statearr_25997_26067 = state_25955__$1;
(statearr_25997_26067[(2)] = null);

(statearr_25997_26067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (6))){
var inst_25887 = (state_25955[(29)]);
var inst_25886 = cljs.core.deref.call(null,cs);
var inst_25887__$1 = cljs.core.keys.call(null,inst_25886);
var inst_25888 = cljs.core.count.call(null,inst_25887__$1);
var inst_25889 = cljs.core.reset_BANG_.call(null,dctr,inst_25888);
var inst_25894 = cljs.core.seq.call(null,inst_25887__$1);
var inst_25895 = inst_25894;
var inst_25896 = null;
var inst_25897 = (0);
var inst_25898 = (0);
var state_25955__$1 = (function (){var statearr_25998 = state_25955;
(statearr_25998[(29)] = inst_25887__$1);

(statearr_25998[(9)] = inst_25898);

(statearr_25998[(20)] = inst_25897);

(statearr_25998[(30)] = inst_25889);

(statearr_25998[(11)] = inst_25896);

(statearr_25998[(21)] = inst_25895);

return statearr_25998;
})();
var statearr_25999_26068 = state_25955__$1;
(statearr_25999_26068[(2)] = null);

(statearr_25999_26068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (28))){
var inst_25914 = (state_25955[(25)]);
var inst_25895 = (state_25955[(21)]);
var inst_25914__$1 = cljs.core.seq.call(null,inst_25895);
var state_25955__$1 = (function (){var statearr_26000 = state_25955;
(statearr_26000[(25)] = inst_25914__$1);

return statearr_26000;
})();
if(inst_25914__$1){
var statearr_26001_26069 = state_25955__$1;
(statearr_26001_26069[(1)] = (33));

} else {
var statearr_26002_26070 = state_25955__$1;
(statearr_26002_26070[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (25))){
var inst_25898 = (state_25955[(9)]);
var inst_25897 = (state_25955[(20)]);
var inst_25900 = (inst_25898 < inst_25897);
var inst_25901 = inst_25900;
var state_25955__$1 = state_25955;
if(cljs.core.truth_(inst_25901)){
var statearr_26003_26071 = state_25955__$1;
(statearr_26003_26071[(1)] = (27));

} else {
var statearr_26004_26072 = state_25955__$1;
(statearr_26004_26072[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (34))){
var state_25955__$1 = state_25955;
var statearr_26005_26073 = state_25955__$1;
(statearr_26005_26073[(2)] = null);

(statearr_26005_26073[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (17))){
var state_25955__$1 = state_25955;
var statearr_26006_26074 = state_25955__$1;
(statearr_26006_26074[(2)] = null);

(statearr_26006_26074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (3))){
var inst_25953 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25955__$1,inst_25953);
} else {
if((state_val_25956 === (12))){
var inst_25882 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26007_26075 = state_25955__$1;
(statearr_26007_26075[(2)] = inst_25882);

(statearr_26007_26075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (2))){
var state_25955__$1 = state_25955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25955__$1,(4),ch);
} else {
if((state_val_25956 === (23))){
var state_25955__$1 = state_25955;
var statearr_26008_26076 = state_25955__$1;
(statearr_26008_26076[(2)] = null);

(statearr_26008_26076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (35))){
var inst_25937 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26009_26077 = state_25955__$1;
(statearr_26009_26077[(2)] = inst_25937);

(statearr_26009_26077[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (19))){
var inst_25856 = (state_25955[(7)]);
var inst_25860 = cljs.core.chunk_first.call(null,inst_25856);
var inst_25861 = cljs.core.chunk_rest.call(null,inst_25856);
var inst_25862 = cljs.core.count.call(null,inst_25860);
var inst_25836 = inst_25861;
var inst_25837 = inst_25860;
var inst_25838 = inst_25862;
var inst_25839 = (0);
var state_25955__$1 = (function (){var statearr_26010 = state_25955;
(statearr_26010[(13)] = inst_25839);

(statearr_26010[(14)] = inst_25838);

(statearr_26010[(15)] = inst_25836);

(statearr_26010[(17)] = inst_25837);

return statearr_26010;
})();
var statearr_26011_26078 = state_25955__$1;
(statearr_26011_26078[(2)] = null);

(statearr_26011_26078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (11))){
var inst_25836 = (state_25955[(15)]);
var inst_25856 = (state_25955[(7)]);
var inst_25856__$1 = cljs.core.seq.call(null,inst_25836);
var state_25955__$1 = (function (){var statearr_26012 = state_25955;
(statearr_26012[(7)] = inst_25856__$1);

return statearr_26012;
})();
if(inst_25856__$1){
var statearr_26013_26079 = state_25955__$1;
(statearr_26013_26079[(1)] = (16));

} else {
var statearr_26014_26080 = state_25955__$1;
(statearr_26014_26080[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (9))){
var inst_25884 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26015_26081 = state_25955__$1;
(statearr_26015_26081[(2)] = inst_25884);

(statearr_26015_26081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (5))){
var inst_25834 = cljs.core.deref.call(null,cs);
var inst_25835 = cljs.core.seq.call(null,inst_25834);
var inst_25836 = inst_25835;
var inst_25837 = null;
var inst_25838 = (0);
var inst_25839 = (0);
var state_25955__$1 = (function (){var statearr_26016 = state_25955;
(statearr_26016[(13)] = inst_25839);

(statearr_26016[(14)] = inst_25838);

(statearr_26016[(15)] = inst_25836);

(statearr_26016[(17)] = inst_25837);

return statearr_26016;
})();
var statearr_26017_26082 = state_25955__$1;
(statearr_26017_26082[(2)] = null);

(statearr_26017_26082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (14))){
var state_25955__$1 = state_25955;
var statearr_26018_26083 = state_25955__$1;
(statearr_26018_26083[(2)] = null);

(statearr_26018_26083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (45))){
var inst_25945 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26019_26084 = state_25955__$1;
(statearr_26019_26084[(2)] = inst_25945);

(statearr_26019_26084[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (26))){
var inst_25887 = (state_25955[(29)]);
var inst_25941 = (state_25955[(2)]);
var inst_25942 = cljs.core.seq.call(null,inst_25887);
var state_25955__$1 = (function (){var statearr_26020 = state_25955;
(statearr_26020[(31)] = inst_25941);

return statearr_26020;
})();
if(inst_25942){
var statearr_26021_26085 = state_25955__$1;
(statearr_26021_26085[(1)] = (42));

} else {
var statearr_26022_26086 = state_25955__$1;
(statearr_26022_26086[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (16))){
var inst_25856 = (state_25955[(7)]);
var inst_25858 = cljs.core.chunked_seq_QMARK_.call(null,inst_25856);
var state_25955__$1 = state_25955;
if(inst_25858){
var statearr_26023_26087 = state_25955__$1;
(statearr_26023_26087[(1)] = (19));

} else {
var statearr_26024_26088 = state_25955__$1;
(statearr_26024_26088[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (38))){
var inst_25934 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26025_26089 = state_25955__$1;
(statearr_26025_26089[(2)] = inst_25934);

(statearr_26025_26089[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (30))){
var state_25955__$1 = state_25955;
var statearr_26026_26090 = state_25955__$1;
(statearr_26026_26090[(2)] = null);

(statearr_26026_26090[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (10))){
var inst_25839 = (state_25955[(13)]);
var inst_25837 = (state_25955[(17)]);
var inst_25845 = cljs.core._nth.call(null,inst_25837,inst_25839);
var inst_25846 = cljs.core.nth.call(null,inst_25845,(0),null);
var inst_25847 = cljs.core.nth.call(null,inst_25845,(1),null);
var state_25955__$1 = (function (){var statearr_26027 = state_25955;
(statearr_26027[(26)] = inst_25846);

return statearr_26027;
})();
if(cljs.core.truth_(inst_25847)){
var statearr_26028_26091 = state_25955__$1;
(statearr_26028_26091[(1)] = (13));

} else {
var statearr_26029_26092 = state_25955__$1;
(statearr_26029_26092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (18))){
var inst_25880 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26030_26093 = state_25955__$1;
(statearr_26030_26093[(2)] = inst_25880);

(statearr_26030_26093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (42))){
var state_25955__$1 = state_25955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25955__$1,(45),dchan);
} else {
if((state_val_25956 === (37))){
var inst_25827 = (state_25955[(10)]);
var inst_25914 = (state_25955[(25)]);
var inst_25923 = (state_25955[(23)]);
var inst_25923__$1 = cljs.core.first.call(null,inst_25914);
var inst_25924 = cljs.core.async.put_BANG_.call(null,inst_25923__$1,inst_25827,done);
var state_25955__$1 = (function (){var statearr_26031 = state_25955;
(statearr_26031[(23)] = inst_25923__$1);

return statearr_26031;
})();
if(cljs.core.truth_(inst_25924)){
var statearr_26032_26094 = state_25955__$1;
(statearr_26032_26094[(1)] = (39));

} else {
var statearr_26033_26095 = state_25955__$1;
(statearr_26033_26095[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (8))){
var inst_25839 = (state_25955[(13)]);
var inst_25838 = (state_25955[(14)]);
var inst_25841 = (inst_25839 < inst_25838);
var inst_25842 = inst_25841;
var state_25955__$1 = state_25955;
if(cljs.core.truth_(inst_25842)){
var statearr_26034_26096 = state_25955__$1;
(statearr_26034_26096[(1)] = (10));

} else {
var statearr_26035_26097 = state_25955__$1;
(statearr_26035_26097[(1)] = (11));

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
});})(c__19399__auto___26043,cs,m,dchan,dctr,done))
;
return ((function (switch__19334__auto__,c__19399__auto___26043,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19335__auto__ = null;
var cljs$core$async$mult_$_state_machine__19335__auto____0 = (function (){
var statearr_26039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26039[(0)] = cljs$core$async$mult_$_state_machine__19335__auto__);

(statearr_26039[(1)] = (1));

return statearr_26039;
});
var cljs$core$async$mult_$_state_machine__19335__auto____1 = (function (state_25955){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_25955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e26040){if((e26040 instanceof Object)){
var ex__19338__auto__ = e26040;
var statearr_26041_26098 = state_25955;
(statearr_26041_26098[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26099 = state_25955;
state_25955 = G__26099;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19335__auto__ = function(state_25955){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19335__auto____1.call(this,state_25955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19335__auto____0;
cljs$core$async$mult_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19335__auto____1;
return cljs$core$async$mult_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___26043,cs,m,dchan,dctr,done))
})();
var state__19401__auto__ = (function (){var statearr_26042 = f__19400__auto__.call(null);
(statearr_26042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___26043);

return statearr_26042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___26043,cs,m,dchan,dctr,done))
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
var args26100 = [];
var len__17376__auto___26103 = arguments.length;
var i__17377__auto___26104 = (0);
while(true){
if((i__17377__auto___26104 < len__17376__auto___26103)){
args26100.push((arguments[i__17377__auto___26104]));

var G__26105 = (i__17377__auto___26104 + (1));
i__17377__auto___26104 = G__26105;
continue;
} else {
}
break;
}

var G__26102 = args26100.length;
switch (G__26102) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26100.length)].join('')));

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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m);
} else {
var m__16974__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,state_map);
} else {
var m__16974__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,state_map);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,mode);
} else {
var m__16974__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17383__auto__ = [];
var len__17376__auto___26117 = arguments.length;
var i__17377__auto___26118 = (0);
while(true){
if((i__17377__auto___26118 < len__17376__auto___26117)){
args__17383__auto__.push((arguments[i__17377__auto___26118]));

var G__26119 = (i__17377__auto___26118 + (1));
i__17377__auto___26118 = G__26119;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((3) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17384__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26111){
var map__26112 = p__26111;
var map__26112__$1 = ((((!((map__26112 == null)))?((((map__26112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26112):map__26112);
var opts = map__26112__$1;
var statearr_26114_26120 = state;
(statearr_26114_26120[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26112,map__26112__$1,opts){
return (function (val){
var statearr_26115_26121 = state;
(statearr_26115_26121[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26112,map__26112__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26116_26122 = state;
(statearr_26116_26122[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26107){
var G__26108 = cljs.core.first.call(null,seq26107);
var seq26107__$1 = cljs.core.next.call(null,seq26107);
var G__26109 = cljs.core.first.call(null,seq26107__$1);
var seq26107__$2 = cljs.core.next.call(null,seq26107__$1);
var G__26110 = cljs.core.first.call(null,seq26107__$2);
var seq26107__$3 = cljs.core.next.call(null,seq26107__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26108,G__26109,G__26110,seq26107__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26286 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26287){
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
this.meta26287 = meta26287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26288,meta26287__$1){
var self__ = this;
var _26288__$1 = this;
return (new cljs.core.async.t_cljs$core$async26286(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26287__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26288){
var self__ = this;
var _26288__$1 = this;
return self__.meta26287;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26286.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26286.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26286.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26286.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26286.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26286.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26286.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26286.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26286.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26287","meta26287",-1106699808,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26286";

cljs.core.async.t_cljs$core$async26286.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26286");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26286 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26286(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26287){
return (new cljs.core.async.t_cljs$core$async26286(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26287));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26286(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19399__auto___26449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___26449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___26449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26386){
var state_val_26387 = (state_26386[(1)]);
if((state_val_26387 === (7))){
var inst_26304 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26388_26450 = state_26386__$1;
(statearr_26388_26450[(2)] = inst_26304);

(statearr_26388_26450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (20))){
var inst_26316 = (state_26386[(7)]);
var state_26386__$1 = state_26386;
var statearr_26389_26451 = state_26386__$1;
(statearr_26389_26451[(2)] = inst_26316);

(statearr_26389_26451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (27))){
var state_26386__$1 = state_26386;
var statearr_26390_26452 = state_26386__$1;
(statearr_26390_26452[(2)] = null);

(statearr_26390_26452[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (1))){
var inst_26292 = (state_26386[(8)]);
var inst_26292__$1 = calc_state.call(null);
var inst_26294 = (inst_26292__$1 == null);
var inst_26295 = cljs.core.not.call(null,inst_26294);
var state_26386__$1 = (function (){var statearr_26391 = state_26386;
(statearr_26391[(8)] = inst_26292__$1);

return statearr_26391;
})();
if(inst_26295){
var statearr_26392_26453 = state_26386__$1;
(statearr_26392_26453[(1)] = (2));

} else {
var statearr_26393_26454 = state_26386__$1;
(statearr_26393_26454[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (24))){
var inst_26346 = (state_26386[(9)]);
var inst_26360 = (state_26386[(10)]);
var inst_26339 = (state_26386[(11)]);
var inst_26360__$1 = inst_26339.call(null,inst_26346);
var state_26386__$1 = (function (){var statearr_26394 = state_26386;
(statearr_26394[(10)] = inst_26360__$1);

return statearr_26394;
})();
if(cljs.core.truth_(inst_26360__$1)){
var statearr_26395_26455 = state_26386__$1;
(statearr_26395_26455[(1)] = (29));

} else {
var statearr_26396_26456 = state_26386__$1;
(statearr_26396_26456[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (4))){
var inst_26307 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26307)){
var statearr_26397_26457 = state_26386__$1;
(statearr_26397_26457[(1)] = (8));

} else {
var statearr_26398_26458 = state_26386__$1;
(statearr_26398_26458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (15))){
var inst_26333 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26333)){
var statearr_26399_26459 = state_26386__$1;
(statearr_26399_26459[(1)] = (19));

} else {
var statearr_26400_26460 = state_26386__$1;
(statearr_26400_26460[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (21))){
var inst_26338 = (state_26386[(12)]);
var inst_26338__$1 = (state_26386[(2)]);
var inst_26339 = cljs.core.get.call(null,inst_26338__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26340 = cljs.core.get.call(null,inst_26338__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26341 = cljs.core.get.call(null,inst_26338__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26386__$1 = (function (){var statearr_26401 = state_26386;
(statearr_26401[(11)] = inst_26339);

(statearr_26401[(13)] = inst_26340);

(statearr_26401[(12)] = inst_26338__$1);

return statearr_26401;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26386__$1,(22),inst_26341);
} else {
if((state_val_26387 === (31))){
var inst_26368 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26368)){
var statearr_26402_26461 = state_26386__$1;
(statearr_26402_26461[(1)] = (32));

} else {
var statearr_26403_26462 = state_26386__$1;
(statearr_26403_26462[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (32))){
var inst_26345 = (state_26386[(14)]);
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26386__$1,(35),out,inst_26345);
} else {
if((state_val_26387 === (33))){
var inst_26338 = (state_26386[(12)]);
var inst_26316 = inst_26338;
var state_26386__$1 = (function (){var statearr_26404 = state_26386;
(statearr_26404[(7)] = inst_26316);

return statearr_26404;
})();
var statearr_26405_26463 = state_26386__$1;
(statearr_26405_26463[(2)] = null);

(statearr_26405_26463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (13))){
var inst_26316 = (state_26386[(7)]);
var inst_26323 = inst_26316.cljs$lang$protocol_mask$partition0$;
var inst_26324 = (inst_26323 & (64));
var inst_26325 = inst_26316.cljs$core$ISeq$;
var inst_26326 = (inst_26324) || (inst_26325);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26326)){
var statearr_26406_26464 = state_26386__$1;
(statearr_26406_26464[(1)] = (16));

} else {
var statearr_26407_26465 = state_26386__$1;
(statearr_26407_26465[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (22))){
var inst_26346 = (state_26386[(9)]);
var inst_26345 = (state_26386[(14)]);
var inst_26344 = (state_26386[(2)]);
var inst_26345__$1 = cljs.core.nth.call(null,inst_26344,(0),null);
var inst_26346__$1 = cljs.core.nth.call(null,inst_26344,(1),null);
var inst_26347 = (inst_26345__$1 == null);
var inst_26348 = cljs.core._EQ_.call(null,inst_26346__$1,change);
var inst_26349 = (inst_26347) || (inst_26348);
var state_26386__$1 = (function (){var statearr_26408 = state_26386;
(statearr_26408[(9)] = inst_26346__$1);

(statearr_26408[(14)] = inst_26345__$1);

return statearr_26408;
})();
if(cljs.core.truth_(inst_26349)){
var statearr_26409_26466 = state_26386__$1;
(statearr_26409_26466[(1)] = (23));

} else {
var statearr_26410_26467 = state_26386__$1;
(statearr_26410_26467[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (36))){
var inst_26338 = (state_26386[(12)]);
var inst_26316 = inst_26338;
var state_26386__$1 = (function (){var statearr_26411 = state_26386;
(statearr_26411[(7)] = inst_26316);

return statearr_26411;
})();
var statearr_26412_26468 = state_26386__$1;
(statearr_26412_26468[(2)] = null);

(statearr_26412_26468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (29))){
var inst_26360 = (state_26386[(10)]);
var state_26386__$1 = state_26386;
var statearr_26413_26469 = state_26386__$1;
(statearr_26413_26469[(2)] = inst_26360);

(statearr_26413_26469[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (6))){
var state_26386__$1 = state_26386;
var statearr_26414_26470 = state_26386__$1;
(statearr_26414_26470[(2)] = false);

(statearr_26414_26470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (28))){
var inst_26356 = (state_26386[(2)]);
var inst_26357 = calc_state.call(null);
var inst_26316 = inst_26357;
var state_26386__$1 = (function (){var statearr_26415 = state_26386;
(statearr_26415[(7)] = inst_26316);

(statearr_26415[(15)] = inst_26356);

return statearr_26415;
})();
var statearr_26416_26471 = state_26386__$1;
(statearr_26416_26471[(2)] = null);

(statearr_26416_26471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (25))){
var inst_26382 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26417_26472 = state_26386__$1;
(statearr_26417_26472[(2)] = inst_26382);

(statearr_26417_26472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (34))){
var inst_26380 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26418_26473 = state_26386__$1;
(statearr_26418_26473[(2)] = inst_26380);

(statearr_26418_26473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (17))){
var state_26386__$1 = state_26386;
var statearr_26419_26474 = state_26386__$1;
(statearr_26419_26474[(2)] = false);

(statearr_26419_26474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (3))){
var state_26386__$1 = state_26386;
var statearr_26420_26475 = state_26386__$1;
(statearr_26420_26475[(2)] = false);

(statearr_26420_26475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (12))){
var inst_26384 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26386__$1,inst_26384);
} else {
if((state_val_26387 === (2))){
var inst_26292 = (state_26386[(8)]);
var inst_26297 = inst_26292.cljs$lang$protocol_mask$partition0$;
var inst_26298 = (inst_26297 & (64));
var inst_26299 = inst_26292.cljs$core$ISeq$;
var inst_26300 = (inst_26298) || (inst_26299);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26300)){
var statearr_26421_26476 = state_26386__$1;
(statearr_26421_26476[(1)] = (5));

} else {
var statearr_26422_26477 = state_26386__$1;
(statearr_26422_26477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (23))){
var inst_26345 = (state_26386[(14)]);
var inst_26351 = (inst_26345 == null);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26351)){
var statearr_26423_26478 = state_26386__$1;
(statearr_26423_26478[(1)] = (26));

} else {
var statearr_26424_26479 = state_26386__$1;
(statearr_26424_26479[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (35))){
var inst_26371 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26371)){
var statearr_26425_26480 = state_26386__$1;
(statearr_26425_26480[(1)] = (36));

} else {
var statearr_26426_26481 = state_26386__$1;
(statearr_26426_26481[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (19))){
var inst_26316 = (state_26386[(7)]);
var inst_26335 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26316);
var state_26386__$1 = state_26386;
var statearr_26427_26482 = state_26386__$1;
(statearr_26427_26482[(2)] = inst_26335);

(statearr_26427_26482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (11))){
var inst_26316 = (state_26386[(7)]);
var inst_26320 = (inst_26316 == null);
var inst_26321 = cljs.core.not.call(null,inst_26320);
var state_26386__$1 = state_26386;
if(inst_26321){
var statearr_26428_26483 = state_26386__$1;
(statearr_26428_26483[(1)] = (13));

} else {
var statearr_26429_26484 = state_26386__$1;
(statearr_26429_26484[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (9))){
var inst_26292 = (state_26386[(8)]);
var state_26386__$1 = state_26386;
var statearr_26430_26485 = state_26386__$1;
(statearr_26430_26485[(2)] = inst_26292);

(statearr_26430_26485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (5))){
var state_26386__$1 = state_26386;
var statearr_26431_26486 = state_26386__$1;
(statearr_26431_26486[(2)] = true);

(statearr_26431_26486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (14))){
var state_26386__$1 = state_26386;
var statearr_26432_26487 = state_26386__$1;
(statearr_26432_26487[(2)] = false);

(statearr_26432_26487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (26))){
var inst_26346 = (state_26386[(9)]);
var inst_26353 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26346);
var state_26386__$1 = state_26386;
var statearr_26433_26488 = state_26386__$1;
(statearr_26433_26488[(2)] = inst_26353);

(statearr_26433_26488[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (16))){
var state_26386__$1 = state_26386;
var statearr_26434_26489 = state_26386__$1;
(statearr_26434_26489[(2)] = true);

(statearr_26434_26489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (38))){
var inst_26376 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26435_26490 = state_26386__$1;
(statearr_26435_26490[(2)] = inst_26376);

(statearr_26435_26490[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (30))){
var inst_26346 = (state_26386[(9)]);
var inst_26339 = (state_26386[(11)]);
var inst_26340 = (state_26386[(13)]);
var inst_26363 = cljs.core.empty_QMARK_.call(null,inst_26339);
var inst_26364 = inst_26340.call(null,inst_26346);
var inst_26365 = cljs.core.not.call(null,inst_26364);
var inst_26366 = (inst_26363) && (inst_26365);
var state_26386__$1 = state_26386;
var statearr_26436_26491 = state_26386__$1;
(statearr_26436_26491[(2)] = inst_26366);

(statearr_26436_26491[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (10))){
var inst_26292 = (state_26386[(8)]);
var inst_26312 = (state_26386[(2)]);
var inst_26313 = cljs.core.get.call(null,inst_26312,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26314 = cljs.core.get.call(null,inst_26312,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26315 = cljs.core.get.call(null,inst_26312,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26316 = inst_26292;
var state_26386__$1 = (function (){var statearr_26437 = state_26386;
(statearr_26437[(16)] = inst_26314);

(statearr_26437[(17)] = inst_26315);

(statearr_26437[(18)] = inst_26313);

(statearr_26437[(7)] = inst_26316);

return statearr_26437;
})();
var statearr_26438_26492 = state_26386__$1;
(statearr_26438_26492[(2)] = null);

(statearr_26438_26492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (18))){
var inst_26330 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26439_26493 = state_26386__$1;
(statearr_26439_26493[(2)] = inst_26330);

(statearr_26439_26493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (37))){
var state_26386__$1 = state_26386;
var statearr_26440_26494 = state_26386__$1;
(statearr_26440_26494[(2)] = null);

(statearr_26440_26494[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (8))){
var inst_26292 = (state_26386[(8)]);
var inst_26309 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26292);
var state_26386__$1 = state_26386;
var statearr_26441_26495 = state_26386__$1;
(statearr_26441_26495[(2)] = inst_26309);

(statearr_26441_26495[(1)] = (10));


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
});})(c__19399__auto___26449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19334__auto__,c__19399__auto___26449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19335__auto__ = null;
var cljs$core$async$mix_$_state_machine__19335__auto____0 = (function (){
var statearr_26445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26445[(0)] = cljs$core$async$mix_$_state_machine__19335__auto__);

(statearr_26445[(1)] = (1));

return statearr_26445;
});
var cljs$core$async$mix_$_state_machine__19335__auto____1 = (function (state_26386){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_26386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e26446){if((e26446 instanceof Object)){
var ex__19338__auto__ = e26446;
var statearr_26447_26496 = state_26386;
(statearr_26447_26496[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26497 = state_26386;
state_26386 = G__26497;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19335__auto__ = function(state_26386){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19335__auto____1.call(this,state_26386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19335__auto____0;
cljs$core$async$mix_$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19335__auto____1;
return cljs$core$async$mix_$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___26449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19401__auto__ = (function (){var statearr_26448 = f__19400__auto__.call(null);
(statearr_26448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___26449);

return statearr_26448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___26449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16974__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26498 = [];
var len__17376__auto___26501 = arguments.length;
var i__17377__auto___26502 = (0);
while(true){
if((i__17377__auto___26502 < len__17376__auto___26501)){
args26498.push((arguments[i__17377__auto___26502]));

var G__26503 = (i__17377__auto___26502 + (1));
i__17377__auto___26502 = G__26503;
continue;
} else {
}
break;
}

var G__26500 = args26498.length;
switch (G__26500) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26498.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p);
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
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v);
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
var args26506 = [];
var len__17376__auto___26631 = arguments.length;
var i__17377__auto___26632 = (0);
while(true){
if((i__17377__auto___26632 < len__17376__auto___26631)){
args26506.push((arguments[i__17377__auto___26632]));

var G__26633 = (i__17377__auto___26632 + (1));
i__17377__auto___26632 = G__26633;
continue;
} else {
}
break;
}

var G__26508 = args26506.length;
switch (G__26508) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26506.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16318__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16318__auto__,mults){
return (function (p1__26505_SHARP_){
if(cljs.core.truth_(p1__26505_SHARP_.call(null,topic))){
return p1__26505_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26505_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16318__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26509 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26510){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26510 = meta26510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26511,meta26510__$1){
var self__ = this;
var _26511__$1 = this;
return (new cljs.core.async.t_cljs$core$async26509(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26510__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26511){
var self__ = this;
var _26511__$1 = this;
return self__.meta26510;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26509.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26509.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26509.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26509.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26509.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26510","meta26510",204173783,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26509";

cljs.core.async.t_cljs$core$async26509.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26509");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26509 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26509(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26510){
return (new cljs.core.async.t_cljs$core$async26509(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26510));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26509(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19399__auto___26635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___26635,mults,ensure_mult,p){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___26635,mults,ensure_mult,p){
return (function (state_26583){
var state_val_26584 = (state_26583[(1)]);
if((state_val_26584 === (7))){
var inst_26579 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
var statearr_26585_26636 = state_26583__$1;
(statearr_26585_26636[(2)] = inst_26579);

(statearr_26585_26636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (20))){
var state_26583__$1 = state_26583;
var statearr_26586_26637 = state_26583__$1;
(statearr_26586_26637[(2)] = null);

(statearr_26586_26637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (1))){
var state_26583__$1 = state_26583;
var statearr_26587_26638 = state_26583__$1;
(statearr_26587_26638[(2)] = null);

(statearr_26587_26638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (24))){
var inst_26562 = (state_26583[(7)]);
var inst_26571 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26562);
var state_26583__$1 = state_26583;
var statearr_26588_26639 = state_26583__$1;
(statearr_26588_26639[(2)] = inst_26571);

(statearr_26588_26639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (4))){
var inst_26514 = (state_26583[(8)]);
var inst_26514__$1 = (state_26583[(2)]);
var inst_26515 = (inst_26514__$1 == null);
var state_26583__$1 = (function (){var statearr_26589 = state_26583;
(statearr_26589[(8)] = inst_26514__$1);

return statearr_26589;
})();
if(cljs.core.truth_(inst_26515)){
var statearr_26590_26640 = state_26583__$1;
(statearr_26590_26640[(1)] = (5));

} else {
var statearr_26591_26641 = state_26583__$1;
(statearr_26591_26641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (15))){
var inst_26556 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
var statearr_26592_26642 = state_26583__$1;
(statearr_26592_26642[(2)] = inst_26556);

(statearr_26592_26642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (21))){
var inst_26576 = (state_26583[(2)]);
var state_26583__$1 = (function (){var statearr_26593 = state_26583;
(statearr_26593[(9)] = inst_26576);

return statearr_26593;
})();
var statearr_26594_26643 = state_26583__$1;
(statearr_26594_26643[(2)] = null);

(statearr_26594_26643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (13))){
var inst_26538 = (state_26583[(10)]);
var inst_26540 = cljs.core.chunked_seq_QMARK_.call(null,inst_26538);
var state_26583__$1 = state_26583;
if(inst_26540){
var statearr_26595_26644 = state_26583__$1;
(statearr_26595_26644[(1)] = (16));

} else {
var statearr_26596_26645 = state_26583__$1;
(statearr_26596_26645[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (22))){
var inst_26568 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
if(cljs.core.truth_(inst_26568)){
var statearr_26597_26646 = state_26583__$1;
(statearr_26597_26646[(1)] = (23));

} else {
var statearr_26598_26647 = state_26583__$1;
(statearr_26598_26647[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (6))){
var inst_26564 = (state_26583[(11)]);
var inst_26514 = (state_26583[(8)]);
var inst_26562 = (state_26583[(7)]);
var inst_26562__$1 = topic_fn.call(null,inst_26514);
var inst_26563 = cljs.core.deref.call(null,mults);
var inst_26564__$1 = cljs.core.get.call(null,inst_26563,inst_26562__$1);
var state_26583__$1 = (function (){var statearr_26599 = state_26583;
(statearr_26599[(11)] = inst_26564__$1);

(statearr_26599[(7)] = inst_26562__$1);

return statearr_26599;
})();
if(cljs.core.truth_(inst_26564__$1)){
var statearr_26600_26648 = state_26583__$1;
(statearr_26600_26648[(1)] = (19));

} else {
var statearr_26601_26649 = state_26583__$1;
(statearr_26601_26649[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (25))){
var inst_26573 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
var statearr_26602_26650 = state_26583__$1;
(statearr_26602_26650[(2)] = inst_26573);

(statearr_26602_26650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (17))){
var inst_26538 = (state_26583[(10)]);
var inst_26547 = cljs.core.first.call(null,inst_26538);
var inst_26548 = cljs.core.async.muxch_STAR_.call(null,inst_26547);
var inst_26549 = cljs.core.async.close_BANG_.call(null,inst_26548);
var inst_26550 = cljs.core.next.call(null,inst_26538);
var inst_26524 = inst_26550;
var inst_26525 = null;
var inst_26526 = (0);
var inst_26527 = (0);
var state_26583__$1 = (function (){var statearr_26603 = state_26583;
(statearr_26603[(12)] = inst_26527);

(statearr_26603[(13)] = inst_26525);

(statearr_26603[(14)] = inst_26526);

(statearr_26603[(15)] = inst_26524);

(statearr_26603[(16)] = inst_26549);

return statearr_26603;
})();
var statearr_26604_26651 = state_26583__$1;
(statearr_26604_26651[(2)] = null);

(statearr_26604_26651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (3))){
var inst_26581 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26583__$1,inst_26581);
} else {
if((state_val_26584 === (12))){
var inst_26558 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
var statearr_26605_26652 = state_26583__$1;
(statearr_26605_26652[(2)] = inst_26558);

(statearr_26605_26652[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (2))){
var state_26583__$1 = state_26583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26583__$1,(4),ch);
} else {
if((state_val_26584 === (23))){
var state_26583__$1 = state_26583;
var statearr_26606_26653 = state_26583__$1;
(statearr_26606_26653[(2)] = null);

(statearr_26606_26653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (19))){
var inst_26564 = (state_26583[(11)]);
var inst_26514 = (state_26583[(8)]);
var inst_26566 = cljs.core.async.muxch_STAR_.call(null,inst_26564);
var state_26583__$1 = state_26583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26583__$1,(22),inst_26566,inst_26514);
} else {
if((state_val_26584 === (11))){
var inst_26538 = (state_26583[(10)]);
var inst_26524 = (state_26583[(15)]);
var inst_26538__$1 = cljs.core.seq.call(null,inst_26524);
var state_26583__$1 = (function (){var statearr_26607 = state_26583;
(statearr_26607[(10)] = inst_26538__$1);

return statearr_26607;
})();
if(inst_26538__$1){
var statearr_26608_26654 = state_26583__$1;
(statearr_26608_26654[(1)] = (13));

} else {
var statearr_26609_26655 = state_26583__$1;
(statearr_26609_26655[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (9))){
var inst_26560 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
var statearr_26610_26656 = state_26583__$1;
(statearr_26610_26656[(2)] = inst_26560);

(statearr_26610_26656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (5))){
var inst_26521 = cljs.core.deref.call(null,mults);
var inst_26522 = cljs.core.vals.call(null,inst_26521);
var inst_26523 = cljs.core.seq.call(null,inst_26522);
var inst_26524 = inst_26523;
var inst_26525 = null;
var inst_26526 = (0);
var inst_26527 = (0);
var state_26583__$1 = (function (){var statearr_26611 = state_26583;
(statearr_26611[(12)] = inst_26527);

(statearr_26611[(13)] = inst_26525);

(statearr_26611[(14)] = inst_26526);

(statearr_26611[(15)] = inst_26524);

return statearr_26611;
})();
var statearr_26612_26657 = state_26583__$1;
(statearr_26612_26657[(2)] = null);

(statearr_26612_26657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (14))){
var state_26583__$1 = state_26583;
var statearr_26616_26658 = state_26583__$1;
(statearr_26616_26658[(2)] = null);

(statearr_26616_26658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (16))){
var inst_26538 = (state_26583[(10)]);
var inst_26542 = cljs.core.chunk_first.call(null,inst_26538);
var inst_26543 = cljs.core.chunk_rest.call(null,inst_26538);
var inst_26544 = cljs.core.count.call(null,inst_26542);
var inst_26524 = inst_26543;
var inst_26525 = inst_26542;
var inst_26526 = inst_26544;
var inst_26527 = (0);
var state_26583__$1 = (function (){var statearr_26617 = state_26583;
(statearr_26617[(12)] = inst_26527);

(statearr_26617[(13)] = inst_26525);

(statearr_26617[(14)] = inst_26526);

(statearr_26617[(15)] = inst_26524);

return statearr_26617;
})();
var statearr_26618_26659 = state_26583__$1;
(statearr_26618_26659[(2)] = null);

(statearr_26618_26659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (10))){
var inst_26527 = (state_26583[(12)]);
var inst_26525 = (state_26583[(13)]);
var inst_26526 = (state_26583[(14)]);
var inst_26524 = (state_26583[(15)]);
var inst_26532 = cljs.core._nth.call(null,inst_26525,inst_26527);
var inst_26533 = cljs.core.async.muxch_STAR_.call(null,inst_26532);
var inst_26534 = cljs.core.async.close_BANG_.call(null,inst_26533);
var inst_26535 = (inst_26527 + (1));
var tmp26613 = inst_26525;
var tmp26614 = inst_26526;
var tmp26615 = inst_26524;
var inst_26524__$1 = tmp26615;
var inst_26525__$1 = tmp26613;
var inst_26526__$1 = tmp26614;
var inst_26527__$1 = inst_26535;
var state_26583__$1 = (function (){var statearr_26619 = state_26583;
(statearr_26619[(12)] = inst_26527__$1);

(statearr_26619[(13)] = inst_26525__$1);

(statearr_26619[(14)] = inst_26526__$1);

(statearr_26619[(17)] = inst_26534);

(statearr_26619[(15)] = inst_26524__$1);

return statearr_26619;
})();
var statearr_26620_26660 = state_26583__$1;
(statearr_26620_26660[(2)] = null);

(statearr_26620_26660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (18))){
var inst_26553 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
var statearr_26621_26661 = state_26583__$1;
(statearr_26621_26661[(2)] = inst_26553);

(statearr_26621_26661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (8))){
var inst_26527 = (state_26583[(12)]);
var inst_26526 = (state_26583[(14)]);
var inst_26529 = (inst_26527 < inst_26526);
var inst_26530 = inst_26529;
var state_26583__$1 = state_26583;
if(cljs.core.truth_(inst_26530)){
var statearr_26622_26662 = state_26583__$1;
(statearr_26622_26662[(1)] = (10));

} else {
var statearr_26623_26663 = state_26583__$1;
(statearr_26623_26663[(1)] = (11));

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
});})(c__19399__auto___26635,mults,ensure_mult,p))
;
return ((function (switch__19334__auto__,c__19399__auto___26635,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19335__auto__ = null;
var cljs$core$async$state_machine__19335__auto____0 = (function (){
var statearr_26627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26627[(0)] = cljs$core$async$state_machine__19335__auto__);

(statearr_26627[(1)] = (1));

return statearr_26627;
});
var cljs$core$async$state_machine__19335__auto____1 = (function (state_26583){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_26583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e26628){if((e26628 instanceof Object)){
var ex__19338__auto__ = e26628;
var statearr_26629_26664 = state_26583;
(statearr_26629_26664[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26665 = state_26583;
state_26583 = G__26665;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$state_machine__19335__auto__ = function(state_26583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19335__auto____1.call(this,state_26583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19335__auto____0;
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19335__auto____1;
return cljs$core$async$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___26635,mults,ensure_mult,p))
})();
var state__19401__auto__ = (function (){var statearr_26630 = f__19400__auto__.call(null);
(statearr_26630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___26635);

return statearr_26630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___26635,mults,ensure_mult,p))
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
var args26666 = [];
var len__17376__auto___26669 = arguments.length;
var i__17377__auto___26670 = (0);
while(true){
if((i__17377__auto___26670 < len__17376__auto___26669)){
args26666.push((arguments[i__17377__auto___26670]));

var G__26671 = (i__17377__auto___26670 + (1));
i__17377__auto___26670 = G__26671;
continue;
} else {
}
break;
}

var G__26668 = args26666.length;
switch (G__26668) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26666.length)].join('')));

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
var args26673 = [];
var len__17376__auto___26676 = arguments.length;
var i__17377__auto___26677 = (0);
while(true){
if((i__17377__auto___26677 < len__17376__auto___26676)){
args26673.push((arguments[i__17377__auto___26677]));

var G__26678 = (i__17377__auto___26677 + (1));
i__17377__auto___26677 = G__26678;
continue;
} else {
}
break;
}

var G__26675 = args26673.length;
switch (G__26675) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26673.length)].join('')));

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
var args26680 = [];
var len__17376__auto___26751 = arguments.length;
var i__17377__auto___26752 = (0);
while(true){
if((i__17377__auto___26752 < len__17376__auto___26751)){
args26680.push((arguments[i__17377__auto___26752]));

var G__26753 = (i__17377__auto___26752 + (1));
i__17377__auto___26752 = G__26753;
continue;
} else {
}
break;
}

var G__26682 = args26680.length;
switch (G__26682) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26680.length)].join('')));

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
var c__19399__auto___26755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___26755,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___26755,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26721){
var state_val_26722 = (state_26721[(1)]);
if((state_val_26722 === (7))){
var state_26721__$1 = state_26721;
var statearr_26723_26756 = state_26721__$1;
(statearr_26723_26756[(2)] = null);

(statearr_26723_26756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (1))){
var state_26721__$1 = state_26721;
var statearr_26724_26757 = state_26721__$1;
(statearr_26724_26757[(2)] = null);

(statearr_26724_26757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (4))){
var inst_26685 = (state_26721[(7)]);
var inst_26687 = (inst_26685 < cnt);
var state_26721__$1 = state_26721;
if(cljs.core.truth_(inst_26687)){
var statearr_26725_26758 = state_26721__$1;
(statearr_26725_26758[(1)] = (6));

} else {
var statearr_26726_26759 = state_26721__$1;
(statearr_26726_26759[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (15))){
var inst_26717 = (state_26721[(2)]);
var state_26721__$1 = state_26721;
var statearr_26727_26760 = state_26721__$1;
(statearr_26727_26760[(2)] = inst_26717);

(statearr_26727_26760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (13))){
var inst_26710 = cljs.core.async.close_BANG_.call(null,out);
var state_26721__$1 = state_26721;
var statearr_26728_26761 = state_26721__$1;
(statearr_26728_26761[(2)] = inst_26710);

(statearr_26728_26761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (6))){
var state_26721__$1 = state_26721;
var statearr_26729_26762 = state_26721__$1;
(statearr_26729_26762[(2)] = null);

(statearr_26729_26762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (3))){
var inst_26719 = (state_26721[(2)]);
var state_26721__$1 = state_26721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26721__$1,inst_26719);
} else {
if((state_val_26722 === (12))){
var inst_26707 = (state_26721[(8)]);
var inst_26707__$1 = (state_26721[(2)]);
var inst_26708 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26707__$1);
var state_26721__$1 = (function (){var statearr_26730 = state_26721;
(statearr_26730[(8)] = inst_26707__$1);

return statearr_26730;
})();
if(cljs.core.truth_(inst_26708)){
var statearr_26731_26763 = state_26721__$1;
(statearr_26731_26763[(1)] = (13));

} else {
var statearr_26732_26764 = state_26721__$1;
(statearr_26732_26764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (2))){
var inst_26684 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26685 = (0);
var state_26721__$1 = (function (){var statearr_26733 = state_26721;
(statearr_26733[(9)] = inst_26684);

(statearr_26733[(7)] = inst_26685);

return statearr_26733;
})();
var statearr_26734_26765 = state_26721__$1;
(statearr_26734_26765[(2)] = null);

(statearr_26734_26765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (11))){
var inst_26685 = (state_26721[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26721,(10),Object,null,(9));
var inst_26694 = chs__$1.call(null,inst_26685);
var inst_26695 = done.call(null,inst_26685);
var inst_26696 = cljs.core.async.take_BANG_.call(null,inst_26694,inst_26695);
var state_26721__$1 = state_26721;
var statearr_26735_26766 = state_26721__$1;
(statearr_26735_26766[(2)] = inst_26696);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26721__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (9))){
var inst_26685 = (state_26721[(7)]);
var inst_26698 = (state_26721[(2)]);
var inst_26699 = (inst_26685 + (1));
var inst_26685__$1 = inst_26699;
var state_26721__$1 = (function (){var statearr_26736 = state_26721;
(statearr_26736[(10)] = inst_26698);

(statearr_26736[(7)] = inst_26685__$1);

return statearr_26736;
})();
var statearr_26737_26767 = state_26721__$1;
(statearr_26737_26767[(2)] = null);

(statearr_26737_26767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (5))){
var inst_26705 = (state_26721[(2)]);
var state_26721__$1 = (function (){var statearr_26738 = state_26721;
(statearr_26738[(11)] = inst_26705);

return statearr_26738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26721__$1,(12),dchan);
} else {
if((state_val_26722 === (14))){
var inst_26707 = (state_26721[(8)]);
var inst_26712 = cljs.core.apply.call(null,f,inst_26707);
var state_26721__$1 = state_26721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26721__$1,(16),out,inst_26712);
} else {
if((state_val_26722 === (16))){
var inst_26714 = (state_26721[(2)]);
var state_26721__$1 = (function (){var statearr_26739 = state_26721;
(statearr_26739[(12)] = inst_26714);

return statearr_26739;
})();
var statearr_26740_26768 = state_26721__$1;
(statearr_26740_26768[(2)] = null);

(statearr_26740_26768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (10))){
var inst_26689 = (state_26721[(2)]);
var inst_26690 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26721__$1 = (function (){var statearr_26741 = state_26721;
(statearr_26741[(13)] = inst_26689);

return statearr_26741;
})();
var statearr_26742_26769 = state_26721__$1;
(statearr_26742_26769[(2)] = inst_26690);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26721__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (8))){
var inst_26703 = (state_26721[(2)]);
var state_26721__$1 = state_26721;
var statearr_26743_26770 = state_26721__$1;
(statearr_26743_26770[(2)] = inst_26703);

(statearr_26743_26770[(1)] = (5));


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
});})(c__19399__auto___26755,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19334__auto__,c__19399__auto___26755,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19335__auto__ = null;
var cljs$core$async$state_machine__19335__auto____0 = (function (){
var statearr_26747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26747[(0)] = cljs$core$async$state_machine__19335__auto__);

(statearr_26747[(1)] = (1));

return statearr_26747;
});
var cljs$core$async$state_machine__19335__auto____1 = (function (state_26721){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_26721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e26748){if((e26748 instanceof Object)){
var ex__19338__auto__ = e26748;
var statearr_26749_26771 = state_26721;
(statearr_26749_26771[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26772 = state_26721;
state_26721 = G__26772;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$state_machine__19335__auto__ = function(state_26721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19335__auto____1.call(this,state_26721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19335__auto____0;
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19335__auto____1;
return cljs$core$async$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___26755,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19401__auto__ = (function (){var statearr_26750 = f__19400__auto__.call(null);
(statearr_26750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___26755);

return statearr_26750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___26755,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26774 = [];
var len__17376__auto___26830 = arguments.length;
var i__17377__auto___26831 = (0);
while(true){
if((i__17377__auto___26831 < len__17376__auto___26830)){
args26774.push((arguments[i__17377__auto___26831]));

var G__26832 = (i__17377__auto___26831 + (1));
i__17377__auto___26831 = G__26832;
continue;
} else {
}
break;
}

var G__26776 = args26774.length;
switch (G__26776) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26774.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19399__auto___26834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___26834,out){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___26834,out){
return (function (state_26806){
var state_val_26807 = (state_26806[(1)]);
if((state_val_26807 === (7))){
var inst_26786 = (state_26806[(7)]);
var inst_26785 = (state_26806[(8)]);
var inst_26785__$1 = (state_26806[(2)]);
var inst_26786__$1 = cljs.core.nth.call(null,inst_26785__$1,(0),null);
var inst_26787 = cljs.core.nth.call(null,inst_26785__$1,(1),null);
var inst_26788 = (inst_26786__$1 == null);
var state_26806__$1 = (function (){var statearr_26808 = state_26806;
(statearr_26808[(9)] = inst_26787);

(statearr_26808[(7)] = inst_26786__$1);

(statearr_26808[(8)] = inst_26785__$1);

return statearr_26808;
})();
if(cljs.core.truth_(inst_26788)){
var statearr_26809_26835 = state_26806__$1;
(statearr_26809_26835[(1)] = (8));

} else {
var statearr_26810_26836 = state_26806__$1;
(statearr_26810_26836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (1))){
var inst_26777 = cljs.core.vec.call(null,chs);
var inst_26778 = inst_26777;
var state_26806__$1 = (function (){var statearr_26811 = state_26806;
(statearr_26811[(10)] = inst_26778);

return statearr_26811;
})();
var statearr_26812_26837 = state_26806__$1;
(statearr_26812_26837[(2)] = null);

(statearr_26812_26837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (4))){
var inst_26778 = (state_26806[(10)]);
var state_26806__$1 = state_26806;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26806__$1,(7),inst_26778);
} else {
if((state_val_26807 === (6))){
var inst_26802 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
var statearr_26813_26838 = state_26806__$1;
(statearr_26813_26838[(2)] = inst_26802);

(statearr_26813_26838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (3))){
var inst_26804 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26806__$1,inst_26804);
} else {
if((state_val_26807 === (2))){
var inst_26778 = (state_26806[(10)]);
var inst_26780 = cljs.core.count.call(null,inst_26778);
var inst_26781 = (inst_26780 > (0));
var state_26806__$1 = state_26806;
if(cljs.core.truth_(inst_26781)){
var statearr_26815_26839 = state_26806__$1;
(statearr_26815_26839[(1)] = (4));

} else {
var statearr_26816_26840 = state_26806__$1;
(statearr_26816_26840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (11))){
var inst_26778 = (state_26806[(10)]);
var inst_26795 = (state_26806[(2)]);
var tmp26814 = inst_26778;
var inst_26778__$1 = tmp26814;
var state_26806__$1 = (function (){var statearr_26817 = state_26806;
(statearr_26817[(11)] = inst_26795);

(statearr_26817[(10)] = inst_26778__$1);

return statearr_26817;
})();
var statearr_26818_26841 = state_26806__$1;
(statearr_26818_26841[(2)] = null);

(statearr_26818_26841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (9))){
var inst_26786 = (state_26806[(7)]);
var state_26806__$1 = state_26806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26806__$1,(11),out,inst_26786);
} else {
if((state_val_26807 === (5))){
var inst_26800 = cljs.core.async.close_BANG_.call(null,out);
var state_26806__$1 = state_26806;
var statearr_26819_26842 = state_26806__$1;
(statearr_26819_26842[(2)] = inst_26800);

(statearr_26819_26842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (10))){
var inst_26798 = (state_26806[(2)]);
var state_26806__$1 = state_26806;
var statearr_26820_26843 = state_26806__$1;
(statearr_26820_26843[(2)] = inst_26798);

(statearr_26820_26843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26807 === (8))){
var inst_26787 = (state_26806[(9)]);
var inst_26786 = (state_26806[(7)]);
var inst_26778 = (state_26806[(10)]);
var inst_26785 = (state_26806[(8)]);
var inst_26790 = (function (){var cs = inst_26778;
var vec__26783 = inst_26785;
var v = inst_26786;
var c = inst_26787;
return ((function (cs,vec__26783,v,c,inst_26787,inst_26786,inst_26778,inst_26785,state_val_26807,c__19399__auto___26834,out){
return (function (p1__26773_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26773_SHARP_);
});
;})(cs,vec__26783,v,c,inst_26787,inst_26786,inst_26778,inst_26785,state_val_26807,c__19399__auto___26834,out))
})();
var inst_26791 = cljs.core.filterv.call(null,inst_26790,inst_26778);
var inst_26778__$1 = inst_26791;
var state_26806__$1 = (function (){var statearr_26821 = state_26806;
(statearr_26821[(10)] = inst_26778__$1);

return statearr_26821;
})();
var statearr_26822_26844 = state_26806__$1;
(statearr_26822_26844[(2)] = null);

(statearr_26822_26844[(1)] = (2));


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
});})(c__19399__auto___26834,out))
;
return ((function (switch__19334__auto__,c__19399__auto___26834,out){
return (function() {
var cljs$core$async$state_machine__19335__auto__ = null;
var cljs$core$async$state_machine__19335__auto____0 = (function (){
var statearr_26826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26826[(0)] = cljs$core$async$state_machine__19335__auto__);

(statearr_26826[(1)] = (1));

return statearr_26826;
});
var cljs$core$async$state_machine__19335__auto____1 = (function (state_26806){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_26806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e26827){if((e26827 instanceof Object)){
var ex__19338__auto__ = e26827;
var statearr_26828_26845 = state_26806;
(statearr_26828_26845[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26846 = state_26806;
state_26806 = G__26846;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$state_machine__19335__auto__ = function(state_26806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19335__auto____1.call(this,state_26806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19335__auto____0;
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19335__auto____1;
return cljs$core$async$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___26834,out))
})();
var state__19401__auto__ = (function (){var statearr_26829 = f__19400__auto__.call(null);
(statearr_26829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___26834);

return statearr_26829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___26834,out))
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
var args26847 = [];
var len__17376__auto___26896 = arguments.length;
var i__17377__auto___26897 = (0);
while(true){
if((i__17377__auto___26897 < len__17376__auto___26896)){
args26847.push((arguments[i__17377__auto___26897]));

var G__26898 = (i__17377__auto___26897 + (1));
i__17377__auto___26897 = G__26898;
continue;
} else {
}
break;
}

var G__26849 = args26847.length;
switch (G__26849) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26847.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19399__auto___26900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___26900,out){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___26900,out){
return (function (state_26873){
var state_val_26874 = (state_26873[(1)]);
if((state_val_26874 === (7))){
var inst_26855 = (state_26873[(7)]);
var inst_26855__$1 = (state_26873[(2)]);
var inst_26856 = (inst_26855__$1 == null);
var inst_26857 = cljs.core.not.call(null,inst_26856);
var state_26873__$1 = (function (){var statearr_26875 = state_26873;
(statearr_26875[(7)] = inst_26855__$1);

return statearr_26875;
})();
if(inst_26857){
var statearr_26876_26901 = state_26873__$1;
(statearr_26876_26901[(1)] = (8));

} else {
var statearr_26877_26902 = state_26873__$1;
(statearr_26877_26902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (1))){
var inst_26850 = (0);
var state_26873__$1 = (function (){var statearr_26878 = state_26873;
(statearr_26878[(8)] = inst_26850);

return statearr_26878;
})();
var statearr_26879_26903 = state_26873__$1;
(statearr_26879_26903[(2)] = null);

(statearr_26879_26903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (4))){
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26873__$1,(7),ch);
} else {
if((state_val_26874 === (6))){
var inst_26868 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26880_26904 = state_26873__$1;
(statearr_26880_26904[(2)] = inst_26868);

(statearr_26880_26904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (3))){
var inst_26870 = (state_26873[(2)]);
var inst_26871 = cljs.core.async.close_BANG_.call(null,out);
var state_26873__$1 = (function (){var statearr_26881 = state_26873;
(statearr_26881[(9)] = inst_26870);

return statearr_26881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26873__$1,inst_26871);
} else {
if((state_val_26874 === (2))){
var inst_26850 = (state_26873[(8)]);
var inst_26852 = (inst_26850 < n);
var state_26873__$1 = state_26873;
if(cljs.core.truth_(inst_26852)){
var statearr_26882_26905 = state_26873__$1;
(statearr_26882_26905[(1)] = (4));

} else {
var statearr_26883_26906 = state_26873__$1;
(statearr_26883_26906[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (11))){
var inst_26850 = (state_26873[(8)]);
var inst_26860 = (state_26873[(2)]);
var inst_26861 = (inst_26850 + (1));
var inst_26850__$1 = inst_26861;
var state_26873__$1 = (function (){var statearr_26884 = state_26873;
(statearr_26884[(8)] = inst_26850__$1);

(statearr_26884[(10)] = inst_26860);

return statearr_26884;
})();
var statearr_26885_26907 = state_26873__$1;
(statearr_26885_26907[(2)] = null);

(statearr_26885_26907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (9))){
var state_26873__$1 = state_26873;
var statearr_26886_26908 = state_26873__$1;
(statearr_26886_26908[(2)] = null);

(statearr_26886_26908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (5))){
var state_26873__$1 = state_26873;
var statearr_26887_26909 = state_26873__$1;
(statearr_26887_26909[(2)] = null);

(statearr_26887_26909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (10))){
var inst_26865 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26888_26910 = state_26873__$1;
(statearr_26888_26910[(2)] = inst_26865);

(statearr_26888_26910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (8))){
var inst_26855 = (state_26873[(7)]);
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26873__$1,(11),out,inst_26855);
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
});})(c__19399__auto___26900,out))
;
return ((function (switch__19334__auto__,c__19399__auto___26900,out){
return (function() {
var cljs$core$async$state_machine__19335__auto__ = null;
var cljs$core$async$state_machine__19335__auto____0 = (function (){
var statearr_26892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26892[(0)] = cljs$core$async$state_machine__19335__auto__);

(statearr_26892[(1)] = (1));

return statearr_26892;
});
var cljs$core$async$state_machine__19335__auto____1 = (function (state_26873){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_26873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e26893){if((e26893 instanceof Object)){
var ex__19338__auto__ = e26893;
var statearr_26894_26911 = state_26873;
(statearr_26894_26911[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26912 = state_26873;
state_26873 = G__26912;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$state_machine__19335__auto__ = function(state_26873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19335__auto____1.call(this,state_26873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19335__auto____0;
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19335__auto____1;
return cljs$core$async$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___26900,out))
})();
var state__19401__auto__ = (function (){var statearr_26895 = f__19400__auto__.call(null);
(statearr_26895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___26900);

return statearr_26895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___26900,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26920 = (function (map_LT_,f,ch,meta26921){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26921 = meta26921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26922,meta26921__$1){
var self__ = this;
var _26922__$1 = this;
return (new cljs.core.async.t_cljs$core$async26920(self__.map_LT_,self__.f,self__.ch,meta26921__$1));
});

cljs.core.async.t_cljs$core$async26920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26922){
var self__ = this;
var _26922__$1 = this;
return self__.meta26921;
});

cljs.core.async.t_cljs$core$async26920.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26920.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26923 = (function (map_LT_,f,ch,meta26921,_,fn1,meta26924){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26921 = meta26921;
this._ = _;
this.fn1 = fn1;
this.meta26924 = meta26924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26925,meta26924__$1){
var self__ = this;
var _26925__$1 = this;
return (new cljs.core.async.t_cljs$core$async26923(self__.map_LT_,self__.f,self__.ch,self__.meta26921,self__._,self__.fn1,meta26924__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26925){
var self__ = this;
var _26925__$1 = this;
return self__.meta26924;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26923.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26913_SHARP_){
return f1.call(null,(((p1__26913_SHARP_ == null))?null:self__.f.call(null,p1__26913_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26923.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26921","meta26921",-245324729,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26920","cljs.core.async/t_cljs$core$async26920",509341096,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26924","meta26924",-1654195339,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26923";

cljs.core.async.t_cljs$core$async26923.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26923");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26923 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26923(map_LT___$1,f__$1,ch__$1,meta26921__$1,___$2,fn1__$1,meta26924){
return (new cljs.core.async.t_cljs$core$async26923(map_LT___$1,f__$1,ch__$1,meta26921__$1,___$2,fn1__$1,meta26924));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26923(self__.map_LT_,self__.f,self__.ch,self__.meta26921,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16306__auto__ = ret;
if(cljs.core.truth_(and__16306__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16306__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26920.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26921","meta26921",-245324729,null)], null);
});

cljs.core.async.t_cljs$core$async26920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26920";

cljs.core.async.t_cljs$core$async26920.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26920");
});

cljs.core.async.__GT_t_cljs$core$async26920 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26920(map_LT___$1,f__$1,ch__$1,meta26921){
return (new cljs.core.async.t_cljs$core$async26920(map_LT___$1,f__$1,ch__$1,meta26921));
});

}

return (new cljs.core.async.t_cljs$core$async26920(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26929 = (function (map_GT_,f,ch,meta26930){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26930 = meta26930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26931,meta26930__$1){
var self__ = this;
var _26931__$1 = this;
return (new cljs.core.async.t_cljs$core$async26929(self__.map_GT_,self__.f,self__.ch,meta26930__$1));
});

cljs.core.async.t_cljs$core$async26929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26931){
var self__ = this;
var _26931__$1 = this;
return self__.meta26930;
});

cljs.core.async.t_cljs$core$async26929.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26929.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26929.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26929.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26929.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26929.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26930","meta26930",-507720049,null)], null);
});

cljs.core.async.t_cljs$core$async26929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26929";

cljs.core.async.t_cljs$core$async26929.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26929");
});

cljs.core.async.__GT_t_cljs$core$async26929 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26929(map_GT___$1,f__$1,ch__$1,meta26930){
return (new cljs.core.async.t_cljs$core$async26929(map_GT___$1,f__$1,ch__$1,meta26930));
});

}

return (new cljs.core.async.t_cljs$core$async26929(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26935 = (function (filter_GT_,p,ch,meta26936){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26936 = meta26936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26937,meta26936__$1){
var self__ = this;
var _26937__$1 = this;
return (new cljs.core.async.t_cljs$core$async26935(self__.filter_GT_,self__.p,self__.ch,meta26936__$1));
});

cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26937){
var self__ = this;
var _26937__$1 = this;
return self__.meta26936;
});

cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26936","meta26936",408651524,null)], null);
});

cljs.core.async.t_cljs$core$async26935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26935";

cljs.core.async.t_cljs$core$async26935.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26935");
});

cljs.core.async.__GT_t_cljs$core$async26935 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26935(filter_GT___$1,p__$1,ch__$1,meta26936){
return (new cljs.core.async.t_cljs$core$async26935(filter_GT___$1,p__$1,ch__$1,meta26936));
});

}

return (new cljs.core.async.t_cljs$core$async26935(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26938 = [];
var len__17376__auto___26982 = arguments.length;
var i__17377__auto___26983 = (0);
while(true){
if((i__17377__auto___26983 < len__17376__auto___26982)){
args26938.push((arguments[i__17377__auto___26983]));

var G__26984 = (i__17377__auto___26983 + (1));
i__17377__auto___26983 = G__26984;
continue;
} else {
}
break;
}

var G__26940 = args26938.length;
switch (G__26940) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26938.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19399__auto___26986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___26986,out){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___26986,out){
return (function (state_26961){
var state_val_26962 = (state_26961[(1)]);
if((state_val_26962 === (7))){
var inst_26957 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
var statearr_26963_26987 = state_26961__$1;
(statearr_26963_26987[(2)] = inst_26957);

(statearr_26963_26987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (1))){
var state_26961__$1 = state_26961;
var statearr_26964_26988 = state_26961__$1;
(statearr_26964_26988[(2)] = null);

(statearr_26964_26988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (4))){
var inst_26943 = (state_26961[(7)]);
var inst_26943__$1 = (state_26961[(2)]);
var inst_26944 = (inst_26943__$1 == null);
var state_26961__$1 = (function (){var statearr_26965 = state_26961;
(statearr_26965[(7)] = inst_26943__$1);

return statearr_26965;
})();
if(cljs.core.truth_(inst_26944)){
var statearr_26966_26989 = state_26961__$1;
(statearr_26966_26989[(1)] = (5));

} else {
var statearr_26967_26990 = state_26961__$1;
(statearr_26967_26990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (6))){
var inst_26943 = (state_26961[(7)]);
var inst_26948 = p.call(null,inst_26943);
var state_26961__$1 = state_26961;
if(cljs.core.truth_(inst_26948)){
var statearr_26968_26991 = state_26961__$1;
(statearr_26968_26991[(1)] = (8));

} else {
var statearr_26969_26992 = state_26961__$1;
(statearr_26969_26992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (3))){
var inst_26959 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26961__$1,inst_26959);
} else {
if((state_val_26962 === (2))){
var state_26961__$1 = state_26961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26961__$1,(4),ch);
} else {
if((state_val_26962 === (11))){
var inst_26951 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
var statearr_26970_26993 = state_26961__$1;
(statearr_26970_26993[(2)] = inst_26951);

(statearr_26970_26993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (9))){
var state_26961__$1 = state_26961;
var statearr_26971_26994 = state_26961__$1;
(statearr_26971_26994[(2)] = null);

(statearr_26971_26994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (5))){
var inst_26946 = cljs.core.async.close_BANG_.call(null,out);
var state_26961__$1 = state_26961;
var statearr_26972_26995 = state_26961__$1;
(statearr_26972_26995[(2)] = inst_26946);

(statearr_26972_26995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (10))){
var inst_26954 = (state_26961[(2)]);
var state_26961__$1 = (function (){var statearr_26973 = state_26961;
(statearr_26973[(8)] = inst_26954);

return statearr_26973;
})();
var statearr_26974_26996 = state_26961__$1;
(statearr_26974_26996[(2)] = null);

(statearr_26974_26996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (8))){
var inst_26943 = (state_26961[(7)]);
var state_26961__$1 = state_26961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26961__$1,(11),out,inst_26943);
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
});})(c__19399__auto___26986,out))
;
return ((function (switch__19334__auto__,c__19399__auto___26986,out){
return (function() {
var cljs$core$async$state_machine__19335__auto__ = null;
var cljs$core$async$state_machine__19335__auto____0 = (function (){
var statearr_26978 = [null,null,null,null,null,null,null,null,null];
(statearr_26978[(0)] = cljs$core$async$state_machine__19335__auto__);

(statearr_26978[(1)] = (1));

return statearr_26978;
});
var cljs$core$async$state_machine__19335__auto____1 = (function (state_26961){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_26961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e26979){if((e26979 instanceof Object)){
var ex__19338__auto__ = e26979;
var statearr_26980_26997 = state_26961;
(statearr_26980_26997[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26998 = state_26961;
state_26961 = G__26998;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$state_machine__19335__auto__ = function(state_26961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19335__auto____1.call(this,state_26961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19335__auto____0;
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19335__auto____1;
return cljs$core$async$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___26986,out))
})();
var state__19401__auto__ = (function (){var statearr_26981 = f__19400__auto__.call(null);
(statearr_26981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___26986);

return statearr_26981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___26986,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26999 = [];
var len__17376__auto___27002 = arguments.length;
var i__17377__auto___27003 = (0);
while(true){
if((i__17377__auto___27003 < len__17376__auto___27002)){
args26999.push((arguments[i__17377__auto___27003]));

var G__27004 = (i__17377__auto___27003 + (1));
i__17377__auto___27003 = G__27004;
continue;
} else {
}
break;
}

var G__27001 = args26999.length;
switch (G__27001) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26999.length)].join('')));

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
var c__19399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto__){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto__){
return (function (state_27171){
var state_val_27172 = (state_27171[(1)]);
if((state_val_27172 === (7))){
var inst_27167 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27173_27214 = state_27171__$1;
(statearr_27173_27214[(2)] = inst_27167);

(statearr_27173_27214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (20))){
var inst_27137 = (state_27171[(7)]);
var inst_27148 = (state_27171[(2)]);
var inst_27149 = cljs.core.next.call(null,inst_27137);
var inst_27123 = inst_27149;
var inst_27124 = null;
var inst_27125 = (0);
var inst_27126 = (0);
var state_27171__$1 = (function (){var statearr_27174 = state_27171;
(statearr_27174[(8)] = inst_27124);

(statearr_27174[(9)] = inst_27148);

(statearr_27174[(10)] = inst_27125);

(statearr_27174[(11)] = inst_27123);

(statearr_27174[(12)] = inst_27126);

return statearr_27174;
})();
var statearr_27175_27215 = state_27171__$1;
(statearr_27175_27215[(2)] = null);

(statearr_27175_27215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (1))){
var state_27171__$1 = state_27171;
var statearr_27176_27216 = state_27171__$1;
(statearr_27176_27216[(2)] = null);

(statearr_27176_27216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (4))){
var inst_27112 = (state_27171[(13)]);
var inst_27112__$1 = (state_27171[(2)]);
var inst_27113 = (inst_27112__$1 == null);
var state_27171__$1 = (function (){var statearr_27177 = state_27171;
(statearr_27177[(13)] = inst_27112__$1);

return statearr_27177;
})();
if(cljs.core.truth_(inst_27113)){
var statearr_27178_27217 = state_27171__$1;
(statearr_27178_27217[(1)] = (5));

} else {
var statearr_27179_27218 = state_27171__$1;
(statearr_27179_27218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (15))){
var state_27171__$1 = state_27171;
var statearr_27183_27219 = state_27171__$1;
(statearr_27183_27219[(2)] = null);

(statearr_27183_27219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (21))){
var state_27171__$1 = state_27171;
var statearr_27184_27220 = state_27171__$1;
(statearr_27184_27220[(2)] = null);

(statearr_27184_27220[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (13))){
var inst_27124 = (state_27171[(8)]);
var inst_27125 = (state_27171[(10)]);
var inst_27123 = (state_27171[(11)]);
var inst_27126 = (state_27171[(12)]);
var inst_27133 = (state_27171[(2)]);
var inst_27134 = (inst_27126 + (1));
var tmp27180 = inst_27124;
var tmp27181 = inst_27125;
var tmp27182 = inst_27123;
var inst_27123__$1 = tmp27182;
var inst_27124__$1 = tmp27180;
var inst_27125__$1 = tmp27181;
var inst_27126__$1 = inst_27134;
var state_27171__$1 = (function (){var statearr_27185 = state_27171;
(statearr_27185[(8)] = inst_27124__$1);

(statearr_27185[(10)] = inst_27125__$1);

(statearr_27185[(14)] = inst_27133);

(statearr_27185[(11)] = inst_27123__$1);

(statearr_27185[(12)] = inst_27126__$1);

return statearr_27185;
})();
var statearr_27186_27221 = state_27171__$1;
(statearr_27186_27221[(2)] = null);

(statearr_27186_27221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (22))){
var state_27171__$1 = state_27171;
var statearr_27187_27222 = state_27171__$1;
(statearr_27187_27222[(2)] = null);

(statearr_27187_27222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (6))){
var inst_27112 = (state_27171[(13)]);
var inst_27121 = f.call(null,inst_27112);
var inst_27122 = cljs.core.seq.call(null,inst_27121);
var inst_27123 = inst_27122;
var inst_27124 = null;
var inst_27125 = (0);
var inst_27126 = (0);
var state_27171__$1 = (function (){var statearr_27188 = state_27171;
(statearr_27188[(8)] = inst_27124);

(statearr_27188[(10)] = inst_27125);

(statearr_27188[(11)] = inst_27123);

(statearr_27188[(12)] = inst_27126);

return statearr_27188;
})();
var statearr_27189_27223 = state_27171__$1;
(statearr_27189_27223[(2)] = null);

(statearr_27189_27223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (17))){
var inst_27137 = (state_27171[(7)]);
var inst_27141 = cljs.core.chunk_first.call(null,inst_27137);
var inst_27142 = cljs.core.chunk_rest.call(null,inst_27137);
var inst_27143 = cljs.core.count.call(null,inst_27141);
var inst_27123 = inst_27142;
var inst_27124 = inst_27141;
var inst_27125 = inst_27143;
var inst_27126 = (0);
var state_27171__$1 = (function (){var statearr_27190 = state_27171;
(statearr_27190[(8)] = inst_27124);

(statearr_27190[(10)] = inst_27125);

(statearr_27190[(11)] = inst_27123);

(statearr_27190[(12)] = inst_27126);

return statearr_27190;
})();
var statearr_27191_27224 = state_27171__$1;
(statearr_27191_27224[(2)] = null);

(statearr_27191_27224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (3))){
var inst_27169 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27171__$1,inst_27169);
} else {
if((state_val_27172 === (12))){
var inst_27157 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27192_27225 = state_27171__$1;
(statearr_27192_27225[(2)] = inst_27157);

(statearr_27192_27225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (2))){
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27171__$1,(4),in$);
} else {
if((state_val_27172 === (23))){
var inst_27165 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27193_27226 = state_27171__$1;
(statearr_27193_27226[(2)] = inst_27165);

(statearr_27193_27226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (19))){
var inst_27152 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27194_27227 = state_27171__$1;
(statearr_27194_27227[(2)] = inst_27152);

(statearr_27194_27227[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (11))){
var inst_27123 = (state_27171[(11)]);
var inst_27137 = (state_27171[(7)]);
var inst_27137__$1 = cljs.core.seq.call(null,inst_27123);
var state_27171__$1 = (function (){var statearr_27195 = state_27171;
(statearr_27195[(7)] = inst_27137__$1);

return statearr_27195;
})();
if(inst_27137__$1){
var statearr_27196_27228 = state_27171__$1;
(statearr_27196_27228[(1)] = (14));

} else {
var statearr_27197_27229 = state_27171__$1;
(statearr_27197_27229[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (9))){
var inst_27159 = (state_27171[(2)]);
var inst_27160 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27171__$1 = (function (){var statearr_27198 = state_27171;
(statearr_27198[(15)] = inst_27159);

return statearr_27198;
})();
if(cljs.core.truth_(inst_27160)){
var statearr_27199_27230 = state_27171__$1;
(statearr_27199_27230[(1)] = (21));

} else {
var statearr_27200_27231 = state_27171__$1;
(statearr_27200_27231[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (5))){
var inst_27115 = cljs.core.async.close_BANG_.call(null,out);
var state_27171__$1 = state_27171;
var statearr_27201_27232 = state_27171__$1;
(statearr_27201_27232[(2)] = inst_27115);

(statearr_27201_27232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (14))){
var inst_27137 = (state_27171[(7)]);
var inst_27139 = cljs.core.chunked_seq_QMARK_.call(null,inst_27137);
var state_27171__$1 = state_27171;
if(inst_27139){
var statearr_27202_27233 = state_27171__$1;
(statearr_27202_27233[(1)] = (17));

} else {
var statearr_27203_27234 = state_27171__$1;
(statearr_27203_27234[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (16))){
var inst_27155 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27204_27235 = state_27171__$1;
(statearr_27204_27235[(2)] = inst_27155);

(statearr_27204_27235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (10))){
var inst_27124 = (state_27171[(8)]);
var inst_27126 = (state_27171[(12)]);
var inst_27131 = cljs.core._nth.call(null,inst_27124,inst_27126);
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27171__$1,(13),out,inst_27131);
} else {
if((state_val_27172 === (18))){
var inst_27137 = (state_27171[(7)]);
var inst_27146 = cljs.core.first.call(null,inst_27137);
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27171__$1,(20),out,inst_27146);
} else {
if((state_val_27172 === (8))){
var inst_27125 = (state_27171[(10)]);
var inst_27126 = (state_27171[(12)]);
var inst_27128 = (inst_27126 < inst_27125);
var inst_27129 = inst_27128;
var state_27171__$1 = state_27171;
if(cljs.core.truth_(inst_27129)){
var statearr_27205_27236 = state_27171__$1;
(statearr_27205_27236[(1)] = (10));

} else {
var statearr_27206_27237 = state_27171__$1;
(statearr_27206_27237[(1)] = (11));

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
});})(c__19399__auto__))
;
return ((function (switch__19334__auto__,c__19399__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19335__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19335__auto____0 = (function (){
var statearr_27210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27210[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19335__auto__);

(statearr_27210[(1)] = (1));

return statearr_27210;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19335__auto____1 = (function (state_27171){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_27171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e27211){if((e27211 instanceof Object)){
var ex__19338__auto__ = e27211;
var statearr_27212_27238 = state_27171;
(statearr_27212_27238[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27239 = state_27171;
state_27171 = G__27239;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19335__auto__ = function(state_27171){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19335__auto____1.call(this,state_27171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19335__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19335__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto__))
})();
var state__19401__auto__ = (function (){var statearr_27213 = f__19400__auto__.call(null);
(statearr_27213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto__);

return statearr_27213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto__))
);

return c__19399__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27240 = [];
var len__17376__auto___27243 = arguments.length;
var i__17377__auto___27244 = (0);
while(true){
if((i__17377__auto___27244 < len__17376__auto___27243)){
args27240.push((arguments[i__17377__auto___27244]));

var G__27245 = (i__17377__auto___27244 + (1));
i__17377__auto___27244 = G__27245;
continue;
} else {
}
break;
}

var G__27242 = args27240.length;
switch (G__27242) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27240.length)].join('')));

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
var args27247 = [];
var len__17376__auto___27250 = arguments.length;
var i__17377__auto___27251 = (0);
while(true){
if((i__17377__auto___27251 < len__17376__auto___27250)){
args27247.push((arguments[i__17377__auto___27251]));

var G__27252 = (i__17377__auto___27251 + (1));
i__17377__auto___27251 = G__27252;
continue;
} else {
}
break;
}

var G__27249 = args27247.length;
switch (G__27249) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27247.length)].join('')));

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
var args27254 = [];
var len__17376__auto___27305 = arguments.length;
var i__17377__auto___27306 = (0);
while(true){
if((i__17377__auto___27306 < len__17376__auto___27305)){
args27254.push((arguments[i__17377__auto___27306]));

var G__27307 = (i__17377__auto___27306 + (1));
i__17377__auto___27306 = G__27307;
continue;
} else {
}
break;
}

var G__27256 = args27254.length;
switch (G__27256) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27254.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19399__auto___27309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___27309,out){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___27309,out){
return (function (state_27280){
var state_val_27281 = (state_27280[(1)]);
if((state_val_27281 === (7))){
var inst_27275 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27282_27310 = state_27280__$1;
(statearr_27282_27310[(2)] = inst_27275);

(statearr_27282_27310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (1))){
var inst_27257 = null;
var state_27280__$1 = (function (){var statearr_27283 = state_27280;
(statearr_27283[(7)] = inst_27257);

return statearr_27283;
})();
var statearr_27284_27311 = state_27280__$1;
(statearr_27284_27311[(2)] = null);

(statearr_27284_27311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (4))){
var inst_27260 = (state_27280[(8)]);
var inst_27260__$1 = (state_27280[(2)]);
var inst_27261 = (inst_27260__$1 == null);
var inst_27262 = cljs.core.not.call(null,inst_27261);
var state_27280__$1 = (function (){var statearr_27285 = state_27280;
(statearr_27285[(8)] = inst_27260__$1);

return statearr_27285;
})();
if(inst_27262){
var statearr_27286_27312 = state_27280__$1;
(statearr_27286_27312[(1)] = (5));

} else {
var statearr_27287_27313 = state_27280__$1;
(statearr_27287_27313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (6))){
var state_27280__$1 = state_27280;
var statearr_27288_27314 = state_27280__$1;
(statearr_27288_27314[(2)] = null);

(statearr_27288_27314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (3))){
var inst_27277 = (state_27280[(2)]);
var inst_27278 = cljs.core.async.close_BANG_.call(null,out);
var state_27280__$1 = (function (){var statearr_27289 = state_27280;
(statearr_27289[(9)] = inst_27277);

return statearr_27289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27280__$1,inst_27278);
} else {
if((state_val_27281 === (2))){
var state_27280__$1 = state_27280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27280__$1,(4),ch);
} else {
if((state_val_27281 === (11))){
var inst_27260 = (state_27280[(8)]);
var inst_27269 = (state_27280[(2)]);
var inst_27257 = inst_27260;
var state_27280__$1 = (function (){var statearr_27290 = state_27280;
(statearr_27290[(7)] = inst_27257);

(statearr_27290[(10)] = inst_27269);

return statearr_27290;
})();
var statearr_27291_27315 = state_27280__$1;
(statearr_27291_27315[(2)] = null);

(statearr_27291_27315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (9))){
var inst_27260 = (state_27280[(8)]);
var state_27280__$1 = state_27280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27280__$1,(11),out,inst_27260);
} else {
if((state_val_27281 === (5))){
var inst_27257 = (state_27280[(7)]);
var inst_27260 = (state_27280[(8)]);
var inst_27264 = cljs.core._EQ_.call(null,inst_27260,inst_27257);
var state_27280__$1 = state_27280;
if(inst_27264){
var statearr_27293_27316 = state_27280__$1;
(statearr_27293_27316[(1)] = (8));

} else {
var statearr_27294_27317 = state_27280__$1;
(statearr_27294_27317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (10))){
var inst_27272 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27295_27318 = state_27280__$1;
(statearr_27295_27318[(2)] = inst_27272);

(statearr_27295_27318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (8))){
var inst_27257 = (state_27280[(7)]);
var tmp27292 = inst_27257;
var inst_27257__$1 = tmp27292;
var state_27280__$1 = (function (){var statearr_27296 = state_27280;
(statearr_27296[(7)] = inst_27257__$1);

return statearr_27296;
})();
var statearr_27297_27319 = state_27280__$1;
(statearr_27297_27319[(2)] = null);

(statearr_27297_27319[(1)] = (2));


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
});})(c__19399__auto___27309,out))
;
return ((function (switch__19334__auto__,c__19399__auto___27309,out){
return (function() {
var cljs$core$async$state_machine__19335__auto__ = null;
var cljs$core$async$state_machine__19335__auto____0 = (function (){
var statearr_27301 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27301[(0)] = cljs$core$async$state_machine__19335__auto__);

(statearr_27301[(1)] = (1));

return statearr_27301;
});
var cljs$core$async$state_machine__19335__auto____1 = (function (state_27280){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_27280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e27302){if((e27302 instanceof Object)){
var ex__19338__auto__ = e27302;
var statearr_27303_27320 = state_27280;
(statearr_27303_27320[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27321 = state_27280;
state_27280 = G__27321;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$state_machine__19335__auto__ = function(state_27280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19335__auto____1.call(this,state_27280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19335__auto____0;
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19335__auto____1;
return cljs$core$async$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___27309,out))
})();
var state__19401__auto__ = (function (){var statearr_27304 = f__19400__auto__.call(null);
(statearr_27304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___27309);

return statearr_27304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___27309,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27322 = [];
var len__17376__auto___27392 = arguments.length;
var i__17377__auto___27393 = (0);
while(true){
if((i__17377__auto___27393 < len__17376__auto___27392)){
args27322.push((arguments[i__17377__auto___27393]));

var G__27394 = (i__17377__auto___27393 + (1));
i__17377__auto___27393 = G__27394;
continue;
} else {
}
break;
}

var G__27324 = args27322.length;
switch (G__27324) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27322.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19399__auto___27396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___27396,out){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___27396,out){
return (function (state_27362){
var state_val_27363 = (state_27362[(1)]);
if((state_val_27363 === (7))){
var inst_27358 = (state_27362[(2)]);
var state_27362__$1 = state_27362;
var statearr_27364_27397 = state_27362__$1;
(statearr_27364_27397[(2)] = inst_27358);

(statearr_27364_27397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27363 === (1))){
var inst_27325 = (new Array(n));
var inst_27326 = inst_27325;
var inst_27327 = (0);
var state_27362__$1 = (function (){var statearr_27365 = state_27362;
(statearr_27365[(7)] = inst_27327);

(statearr_27365[(8)] = inst_27326);

return statearr_27365;
})();
var statearr_27366_27398 = state_27362__$1;
(statearr_27366_27398[(2)] = null);

(statearr_27366_27398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27363 === (4))){
var inst_27330 = (state_27362[(9)]);
var inst_27330__$1 = (state_27362[(2)]);
var inst_27331 = (inst_27330__$1 == null);
var inst_27332 = cljs.core.not.call(null,inst_27331);
var state_27362__$1 = (function (){var statearr_27367 = state_27362;
(statearr_27367[(9)] = inst_27330__$1);

return statearr_27367;
})();
if(inst_27332){
var statearr_27368_27399 = state_27362__$1;
(statearr_27368_27399[(1)] = (5));

} else {
var statearr_27369_27400 = state_27362__$1;
(statearr_27369_27400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27363 === (15))){
var inst_27352 = (state_27362[(2)]);
var state_27362__$1 = state_27362;
var statearr_27370_27401 = state_27362__$1;
(statearr_27370_27401[(2)] = inst_27352);

(statearr_27370_27401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27363 === (13))){
var state_27362__$1 = state_27362;
var statearr_27371_27402 = state_27362__$1;
(statearr_27371_27402[(2)] = null);

(statearr_27371_27402[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27363 === (6))){
var inst_27327 = (state_27362[(7)]);
var inst_27348 = (inst_27327 > (0));
var state_27362__$1 = state_27362;
if(cljs.core.truth_(inst_27348)){
var statearr_27372_27403 = state_27362__$1;
(statearr_27372_27403[(1)] = (12));

} else {
var statearr_27373_27404 = state_27362__$1;
(statearr_27373_27404[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27363 === (3))){
var inst_27360 = (state_27362[(2)]);
var state_27362__$1 = state_27362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27362__$1,inst_27360);
} else {
if((state_val_27363 === (12))){
var inst_27326 = (state_27362[(8)]);
var inst_27350 = cljs.core.vec.call(null,inst_27326);
var state_27362__$1 = state_27362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27362__$1,(15),out,inst_27350);
} else {
if((state_val_27363 === (2))){
var state_27362__$1 = state_27362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27362__$1,(4),ch);
} else {
if((state_val_27363 === (11))){
var inst_27342 = (state_27362[(2)]);
var inst_27343 = (new Array(n));
var inst_27326 = inst_27343;
var inst_27327 = (0);
var state_27362__$1 = (function (){var statearr_27374 = state_27362;
(statearr_27374[(7)] = inst_27327);

(statearr_27374[(8)] = inst_27326);

(statearr_27374[(10)] = inst_27342);

return statearr_27374;
})();
var statearr_27375_27405 = state_27362__$1;
(statearr_27375_27405[(2)] = null);

(statearr_27375_27405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27363 === (9))){
var inst_27326 = (state_27362[(8)]);
var inst_27340 = cljs.core.vec.call(null,inst_27326);
var state_27362__$1 = state_27362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27362__$1,(11),out,inst_27340);
} else {
if((state_val_27363 === (5))){
var inst_27335 = (state_27362[(11)]);
var inst_27327 = (state_27362[(7)]);
var inst_27330 = (state_27362[(9)]);
var inst_27326 = (state_27362[(8)]);
var inst_27334 = (inst_27326[inst_27327] = inst_27330);
var inst_27335__$1 = (inst_27327 + (1));
var inst_27336 = (inst_27335__$1 < n);
var state_27362__$1 = (function (){var statearr_27376 = state_27362;
(statearr_27376[(11)] = inst_27335__$1);

(statearr_27376[(12)] = inst_27334);

return statearr_27376;
})();
if(cljs.core.truth_(inst_27336)){
var statearr_27377_27406 = state_27362__$1;
(statearr_27377_27406[(1)] = (8));

} else {
var statearr_27378_27407 = state_27362__$1;
(statearr_27378_27407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27363 === (14))){
var inst_27355 = (state_27362[(2)]);
var inst_27356 = cljs.core.async.close_BANG_.call(null,out);
var state_27362__$1 = (function (){var statearr_27380 = state_27362;
(statearr_27380[(13)] = inst_27355);

return statearr_27380;
})();
var statearr_27381_27408 = state_27362__$1;
(statearr_27381_27408[(2)] = inst_27356);

(statearr_27381_27408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27363 === (10))){
var inst_27346 = (state_27362[(2)]);
var state_27362__$1 = state_27362;
var statearr_27382_27409 = state_27362__$1;
(statearr_27382_27409[(2)] = inst_27346);

(statearr_27382_27409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27363 === (8))){
var inst_27335 = (state_27362[(11)]);
var inst_27326 = (state_27362[(8)]);
var tmp27379 = inst_27326;
var inst_27326__$1 = tmp27379;
var inst_27327 = inst_27335;
var state_27362__$1 = (function (){var statearr_27383 = state_27362;
(statearr_27383[(7)] = inst_27327);

(statearr_27383[(8)] = inst_27326__$1);

return statearr_27383;
})();
var statearr_27384_27410 = state_27362__$1;
(statearr_27384_27410[(2)] = null);

(statearr_27384_27410[(1)] = (2));


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
});})(c__19399__auto___27396,out))
;
return ((function (switch__19334__auto__,c__19399__auto___27396,out){
return (function() {
var cljs$core$async$state_machine__19335__auto__ = null;
var cljs$core$async$state_machine__19335__auto____0 = (function (){
var statearr_27388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27388[(0)] = cljs$core$async$state_machine__19335__auto__);

(statearr_27388[(1)] = (1));

return statearr_27388;
});
var cljs$core$async$state_machine__19335__auto____1 = (function (state_27362){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_27362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e27389){if((e27389 instanceof Object)){
var ex__19338__auto__ = e27389;
var statearr_27390_27411 = state_27362;
(statearr_27390_27411[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27412 = state_27362;
state_27362 = G__27412;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$state_machine__19335__auto__ = function(state_27362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19335__auto____1.call(this,state_27362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19335__auto____0;
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19335__auto____1;
return cljs$core$async$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___27396,out))
})();
var state__19401__auto__ = (function (){var statearr_27391 = f__19400__auto__.call(null);
(statearr_27391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___27396);

return statearr_27391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___27396,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27413 = [];
var len__17376__auto___27487 = arguments.length;
var i__17377__auto___27488 = (0);
while(true){
if((i__17377__auto___27488 < len__17376__auto___27487)){
args27413.push((arguments[i__17377__auto___27488]));

var G__27489 = (i__17377__auto___27488 + (1));
i__17377__auto___27488 = G__27489;
continue;
} else {
}
break;
}

var G__27415 = args27413.length;
switch (G__27415) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27413.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19399__auto___27491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19399__auto___27491,out){
return (function (){
var f__19400__auto__ = (function (){var switch__19334__auto__ = ((function (c__19399__auto___27491,out){
return (function (state_27457){
var state_val_27458 = (state_27457[(1)]);
if((state_val_27458 === (7))){
var inst_27453 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27459_27492 = state_27457__$1;
(statearr_27459_27492[(2)] = inst_27453);

(statearr_27459_27492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (1))){
var inst_27416 = [];
var inst_27417 = inst_27416;
var inst_27418 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27457__$1 = (function (){var statearr_27460 = state_27457;
(statearr_27460[(7)] = inst_27418);

(statearr_27460[(8)] = inst_27417);

return statearr_27460;
})();
var statearr_27461_27493 = state_27457__$1;
(statearr_27461_27493[(2)] = null);

(statearr_27461_27493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (4))){
var inst_27421 = (state_27457[(9)]);
var inst_27421__$1 = (state_27457[(2)]);
var inst_27422 = (inst_27421__$1 == null);
var inst_27423 = cljs.core.not.call(null,inst_27422);
var state_27457__$1 = (function (){var statearr_27462 = state_27457;
(statearr_27462[(9)] = inst_27421__$1);

return statearr_27462;
})();
if(inst_27423){
var statearr_27463_27494 = state_27457__$1;
(statearr_27463_27494[(1)] = (5));

} else {
var statearr_27464_27495 = state_27457__$1;
(statearr_27464_27495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (15))){
var inst_27447 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27465_27496 = state_27457__$1;
(statearr_27465_27496[(2)] = inst_27447);

(statearr_27465_27496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (13))){
var state_27457__$1 = state_27457;
var statearr_27466_27497 = state_27457__$1;
(statearr_27466_27497[(2)] = null);

(statearr_27466_27497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (6))){
var inst_27417 = (state_27457[(8)]);
var inst_27442 = inst_27417.length;
var inst_27443 = (inst_27442 > (0));
var state_27457__$1 = state_27457;
if(cljs.core.truth_(inst_27443)){
var statearr_27467_27498 = state_27457__$1;
(statearr_27467_27498[(1)] = (12));

} else {
var statearr_27468_27499 = state_27457__$1;
(statearr_27468_27499[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (3))){
var inst_27455 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27457__$1,inst_27455);
} else {
if((state_val_27458 === (12))){
var inst_27417 = (state_27457[(8)]);
var inst_27445 = cljs.core.vec.call(null,inst_27417);
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27457__$1,(15),out,inst_27445);
} else {
if((state_val_27458 === (2))){
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27457__$1,(4),ch);
} else {
if((state_val_27458 === (11))){
var inst_27425 = (state_27457[(10)]);
var inst_27421 = (state_27457[(9)]);
var inst_27435 = (state_27457[(2)]);
var inst_27436 = [];
var inst_27437 = inst_27436.push(inst_27421);
var inst_27417 = inst_27436;
var inst_27418 = inst_27425;
var state_27457__$1 = (function (){var statearr_27469 = state_27457;
(statearr_27469[(11)] = inst_27437);

(statearr_27469[(7)] = inst_27418);

(statearr_27469[(12)] = inst_27435);

(statearr_27469[(8)] = inst_27417);

return statearr_27469;
})();
var statearr_27470_27500 = state_27457__$1;
(statearr_27470_27500[(2)] = null);

(statearr_27470_27500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (9))){
var inst_27417 = (state_27457[(8)]);
var inst_27433 = cljs.core.vec.call(null,inst_27417);
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27457__$1,(11),out,inst_27433);
} else {
if((state_val_27458 === (5))){
var inst_27418 = (state_27457[(7)]);
var inst_27425 = (state_27457[(10)]);
var inst_27421 = (state_27457[(9)]);
var inst_27425__$1 = f.call(null,inst_27421);
var inst_27426 = cljs.core._EQ_.call(null,inst_27425__$1,inst_27418);
var inst_27427 = cljs.core.keyword_identical_QMARK_.call(null,inst_27418,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27428 = (inst_27426) || (inst_27427);
var state_27457__$1 = (function (){var statearr_27471 = state_27457;
(statearr_27471[(10)] = inst_27425__$1);

return statearr_27471;
})();
if(cljs.core.truth_(inst_27428)){
var statearr_27472_27501 = state_27457__$1;
(statearr_27472_27501[(1)] = (8));

} else {
var statearr_27473_27502 = state_27457__$1;
(statearr_27473_27502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (14))){
var inst_27450 = (state_27457[(2)]);
var inst_27451 = cljs.core.async.close_BANG_.call(null,out);
var state_27457__$1 = (function (){var statearr_27475 = state_27457;
(statearr_27475[(13)] = inst_27450);

return statearr_27475;
})();
var statearr_27476_27503 = state_27457__$1;
(statearr_27476_27503[(2)] = inst_27451);

(statearr_27476_27503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (10))){
var inst_27440 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27477_27504 = state_27457__$1;
(statearr_27477_27504[(2)] = inst_27440);

(statearr_27477_27504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (8))){
var inst_27425 = (state_27457[(10)]);
var inst_27421 = (state_27457[(9)]);
var inst_27417 = (state_27457[(8)]);
var inst_27430 = inst_27417.push(inst_27421);
var tmp27474 = inst_27417;
var inst_27417__$1 = tmp27474;
var inst_27418 = inst_27425;
var state_27457__$1 = (function (){var statearr_27478 = state_27457;
(statearr_27478[(7)] = inst_27418);

(statearr_27478[(14)] = inst_27430);

(statearr_27478[(8)] = inst_27417__$1);

return statearr_27478;
})();
var statearr_27479_27505 = state_27457__$1;
(statearr_27479_27505[(2)] = null);

(statearr_27479_27505[(1)] = (2));


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
});})(c__19399__auto___27491,out))
;
return ((function (switch__19334__auto__,c__19399__auto___27491,out){
return (function() {
var cljs$core$async$state_machine__19335__auto__ = null;
var cljs$core$async$state_machine__19335__auto____0 = (function (){
var statearr_27483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27483[(0)] = cljs$core$async$state_machine__19335__auto__);

(statearr_27483[(1)] = (1));

return statearr_27483;
});
var cljs$core$async$state_machine__19335__auto____1 = (function (state_27457){
while(true){
var ret_value__19336__auto__ = (function (){try{while(true){
var result__19337__auto__ = switch__19334__auto__.call(null,state_27457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19337__auto__;
}
break;
}
}catch (e27484){if((e27484 instanceof Object)){
var ex__19338__auto__ = e27484;
var statearr_27485_27506 = state_27457;
(statearr_27485_27506[(5)] = ex__19338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27507 = state_27457;
state_27457 = G__27507;
continue;
} else {
return ret_value__19336__auto__;
}
break;
}
});
cljs$core$async$state_machine__19335__auto__ = function(state_27457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19335__auto____1.call(this,state_27457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19335__auto____0;
cljs$core$async$state_machine__19335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19335__auto____1;
return cljs$core$async$state_machine__19335__auto__;
})()
;})(switch__19334__auto__,c__19399__auto___27491,out))
})();
var state__19401__auto__ = (function (){var statearr_27486 = f__19400__auto__.call(null);
(statearr_27486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19399__auto___27491);

return statearr_27486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19401__auto__);
});})(c__19399__auto___27491,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1446416616876