// Compiled by ClojureScript 1.7.122 {}
goog.provide('soma_demo.core');
goog.require('cljs.core');
goog.require('soma_demo.solver_client');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
soma_demo.core.init_camera = (function soma_demo$core$init_camera(scene,width,height){
var camera = (new THREE.PerspectiveCamera((45),(width / height),(1),(10000)));
camera.position.z = (3000);

scene.add(camera);

return camera;
});
soma_demo.core.init_lighting = (function soma_demo$core$init_lighting(scene){
var dir_light = (new THREE.HemisphereLight((16724787),(16777215),0.8));
var G__33063_33066 = dir_light;
G__33063_33066.color.setHSL(0.6,(1),0.6);


var G__33064_33067 = dir_light;
G__33064_33067.groundColor.setHSL(0.095,(1),0.8);


var G__33065_33068 = dir_light;
G__33065_33068.position.set((0),(-1000),(0));


return scene.add(dir_light);
});
soma_demo.core.init_renderer = (function soma_demo$core$init_renderer(canvas_element){
var renderer = (new THREE.WebGLRenderer(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["canvas",canvas_element], null))));
renderer.setClearColor((2236962));

return renderer;
});
soma_demo.core.animate_spin = (function soma_demo$core$animate_spin(piece,ts,increment){
piece.rotation.x = (piece.rotation.x + (increment * 0.3));

return piece.rotation.y = (piece.rotation.y + (increment * 0.4));
});
soma_demo.core.animators = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * register an animator by ID - call (start/stop-enimation id 
 */
soma_demo.core.register_animator = (function soma_demo$core$register_animator(element_id,update_animation,renderer,scene,camera){
var last_update = cljs.core.atom.call(null,(new Date()).getTime());
var animation_fn = ((function (last_update){
return (function (){
var curtime_33069 = (new Date()).getTime();
update_animation.call(null,cljs.core.deref.call(null,last_update),((curtime_33069 - cljs.core.deref.call(null,last_update)) / (1000)));

cljs.core.reset_BANG_.call(null,last_update,curtime_33069);

return renderer.render(scene,camera);
});})(last_update))
;
cljs.core.reset_BANG_.call(null,soma_demo.core.animators,cljs.core.assoc.call(null,cljs.core.deref.call(null,soma_demo.core.animators),element_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,animation_fn], null)));

return animation_fn.call(null);
});
soma_demo.core.global_anim_fn = cljs.core.atom.call(null,null);
/**
 * Main animation interation entry point - called when at least one animation is enabled
 */
soma_demo.core.main_animator = (function soma_demo$core$main_animator(){
var seq__33076_33082 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,soma_demo.core.animators)));
var chunk__33077_33083 = null;
var count__33078_33084 = (0);
var i__33079_33085 = (0);
while(true){
if((i__33079_33085 < count__33078_33084)){
var vec__33080_33086 = cljs.core._nth.call(null,chunk__33077_33083,i__33079_33085);
var enabled_QMARK__33087 = cljs.core.nth.call(null,vec__33080_33086,(0),null);
var anim_fn_33088 = cljs.core.nth.call(null,vec__33080_33086,(1),null);
if(cljs.core.truth_(enabled_QMARK__33087)){
anim_fn_33088.call(null);
} else {
}

var G__33089 = seq__33076_33082;
var G__33090 = chunk__33077_33083;
var G__33091 = count__33078_33084;
var G__33092 = (i__33079_33085 + (1));
seq__33076_33082 = G__33089;
chunk__33077_33083 = G__33090;
count__33078_33084 = G__33091;
i__33079_33085 = G__33092;
continue;
} else {
var temp__4425__auto___33093 = cljs.core.seq.call(null,seq__33076_33082);
if(temp__4425__auto___33093){
var seq__33076_33094__$1 = temp__4425__auto___33093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33076_33094__$1)){
var c__17121__auto___33095 = cljs.core.chunk_first.call(null,seq__33076_33094__$1);
var G__33096 = cljs.core.chunk_rest.call(null,seq__33076_33094__$1);
var G__33097 = c__17121__auto___33095;
var G__33098 = cljs.core.count.call(null,c__17121__auto___33095);
var G__33099 = (0);
seq__33076_33082 = G__33096;
chunk__33077_33083 = G__33097;
count__33078_33084 = G__33098;
i__33079_33085 = G__33099;
continue;
} else {
var vec__33081_33100 = cljs.core.first.call(null,seq__33076_33094__$1);
var enabled_QMARK__33101 = cljs.core.nth.call(null,vec__33081_33100,(0),null);
var anim_fn_33102 = cljs.core.nth.call(null,vec__33081_33100,(1),null);
if(cljs.core.truth_(enabled_QMARK__33101)){
anim_fn_33102.call(null);
} else {
}

var G__33103 = cljs.core.next.call(null,seq__33076_33094__$1);
var G__33104 = null;
var G__33105 = (0);
var G__33106 = (0);
seq__33076_33082 = G__33103;
chunk__33077_33083 = G__33104;
count__33078_33084 = G__33105;
i__33079_33085 = G__33106;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref.call(null,soma_demo.core.global_anim_fn))){
return window.requestAnimationFrame(cljs.core.deref.call(null,soma_demo.core.global_anim_fn));
} else {
return null;
}
});
/**
 * start an animation will start the main anim loop if none are running 
 */
soma_demo.core.start_animation = (function soma_demo$core$start_animation(element_id){
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,soma_demo.core.animators),element_id);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__33108 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__33108,(0),null);
var anim_fn = cljs.core.nth.call(null,vec__33108,(1),null);
cljs.core.println.call(null,"starting  ",element_id);

cljs.core.reset_BANG_.call(null,soma_demo.core.animators,cljs.core.assoc.call(null,cljs.core.deref.call(null,soma_demo.core.animators),element_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,anim_fn], null)));

if(cljs.core.truth_(cljs.core.deref.call(null,soma_demo.core.global_anim_fn))){
return null;
} else {
cljs.core.reset_BANG_.call(null,soma_demo.core.global_anim_fn,soma_demo.core.main_animator);

return soma_demo.core.main_animator.call(null);
}
} else {
return null;
}
});
/**
 * start an animation will start the main anim loop if none are running 
 */
soma_demo.core.stop_animation = (function soma_demo$core$stop_animation(element_id){
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,soma_demo.core.animators),element_id);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__33110 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__33110,(0),null);
var anim_fn = cljs.core.nth.call(null,vec__33110,(1),null);
cljs.core.reset_BANG_.call(null,soma_demo.core.animators,cljs.core.assoc.call(null,cljs.core.deref.call(null,soma_demo.core.animators),element_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,anim_fn], null)));

if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core.first),cljs.core.keys.call(null,cljs.core.deref.call(null,soma_demo.core.animators))))){
return cljs.core.reset_BANG_.call(null,soma_demo.core.global_anim_fn,null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * stop all animations 
 */
soma_demo.core.stop_all_animations = (function soma_demo$core$stop_all_animations(element_id){
var seq__33115 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,soma_demo.core.animators)));
var chunk__33116 = null;
var count__33117 = (0);
var i__33118 = (0);
while(true){
if((i__33118 < count__33117)){
var anim_id = cljs.core._nth.call(null,chunk__33116,i__33118);
soma_demo.core.stop_animation.call(null,anim_id);

var G__33119 = seq__33115;
var G__33120 = chunk__33116;
var G__33121 = count__33117;
var G__33122 = (i__33118 + (1));
seq__33115 = G__33119;
chunk__33116 = G__33120;
count__33117 = G__33121;
i__33118 = G__33122;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33115);
if(temp__4425__auto__){
var seq__33115__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33115__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__33115__$1);
var G__33123 = cljs.core.chunk_rest.call(null,seq__33115__$1);
var G__33124 = c__17121__auto__;
var G__33125 = cljs.core.count.call(null,c__17121__auto__);
var G__33126 = (0);
seq__33115 = G__33123;
chunk__33116 = G__33124;
count__33117 = G__33125;
i__33118 = G__33126;
continue;
} else {
var anim_id = cljs.core.first.call(null,seq__33115__$1);
soma_demo.core.stop_animation.call(null,anim_id);

var G__33127 = cljs.core.next.call(null,seq__33115__$1);
var G__33128 = null;
var G__33129 = (0);
var G__33130 = (0);
seq__33115 = G__33127;
chunk__33116 = G__33128;
count__33117 = G__33129;
i__33118 = G__33130;
continue;
}
} else {
return null;
}
}
break;
}
});
soma_demo.core.colors = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16732976),(3073625),(15132195),(4888806),(16753920),(6416093),(13328102),(10471831)], null);
soma_demo.core.color_pallette = (function soma_demo$core$color_pallette(n){
return cljs.core.nth.call(null,soma_demo.core.colors,cljs.core.mod.call(null,n,cljs.core.count.call(null,soma_demo.core.colors)));
});
soma_demo.core.cubesize = (100);
/**
 * Create a mesh for a single piece - takes a piece index and  list of coords 
 */
soma_demo.core.create_piece_mesh = (function soma_demo$core$create_piece_mesh(idx,parts){
var color = soma_demo.core.color_pallette.call(null,idx);
var material = (new THREE.MeshPhongMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(new THREE.Color(color))], null))));
var geometry = cljs.core.reduce.call(null,((function (color,material){
return (function (parent,p__33134){
var vec__33135 = p__33134;
var x = cljs.core.nth.call(null,vec__33135,(0),null);
var y = cljs.core.nth.call(null,vec__33135,(1),null);
var z = cljs.core.nth.call(null,vec__33135,(2),null);
var cube_33137 = (new THREE.CubeGeometry(soma_demo.core.cubesize,soma_demo.core.cubesize,soma_demo.core.cubesize));
var cubemesh_33138 = (new THREE.Mesh(cube_33137,material));
var G__33136_33139 = cubemesh_33138;
G__33136_33139.position.set((x * soma_demo.core.cubesize),(y * soma_demo.core.cubesize),(z * soma_demo.core.cubesize));


cubemesh_33138.updateMatrix();

parent.merge(cubemesh_33138.geometry,cubemesh_33138.matrix);

return parent;
});})(color,material))
,(new THREE.Geometry()),parts);
return (new THREE.Mesh(geometry,material));
});
/**
 * convert unit coords to xy coords 
 */
soma_demo.core.place_piece = (function soma_demo$core$place_piece(rows,cols,size,spacing,x,y){
var grid_unit = (spacing + size);
var totalwidth = (cols * grid_unit);
var totalheight = (rows * grid_unit);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * grid_unit) - (totalwidth / 2.0)),((-1) * ((y * grid_unit) - (totalheight / 2.0)))], null);
});
/**
 * Display a grid of soma pieces in a canvas 
 */
soma_demo.core.display_pieces_from_url = (function soma_demo$core$display_pieces_from_url(var_args){
var args33140 = [];
var len__17376__auto___33285 = arguments.length;
var i__17377__auto___33286 = (0);
while(true){
if((i__17377__auto___33286 < len__17376__auto___33285)){
args33140.push((arguments[i__17377__auto___33286]));

var G__33287 = (i__17377__auto___33286 + (1));
i__17377__auto___33286 = G__33287;
continue;
} else {
}
break;
}

var G__33142 = args33140.length;
switch (G__33142) {
case 2:
return soma_demo.core.display_pieces_from_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return soma_demo.core.display_pieces_from_url.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return soma_demo.core.display_pieces_from_url.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33140.length)].join('')));

}
});

soma_demo.core.display_pieces_from_url.cljs$core$IFn$_invoke$arity$2 = (function (canvas_element_id,url){
return soma_demo.core.display_pieces_from_url.call(null,canvas_element_id,url,(5),true,(1));
});

soma_demo.core.display_pieces_from_url.cljs$core$IFn$_invoke$arity$4 = (function (canvas_element_id,url,cols,spin){
return soma_demo.core.display_pieces_from_url.call(null,canvas_element_id,url,cols,spin,(1));
});

soma_demo.core.display_pieces_from_url.cljs$core$IFn$_invoke$arity$5 = (function (canvas_element_id,url,cols,spin,ws_scale){
var canvas_element = document.getElementById(canvas_element_id);
var width = canvas_element.width;
var height = canvas_element.height;
var scene = (new THREE.Scene());
var camera = soma_demo.core.init_camera.call(null,scene,width,height);
var renderer = soma_demo.core.init_renderer.call(null,canvas_element);
var pieces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
soma_demo.core.init_lighting.call(null,scene);

soma_demo.core.register_animator.call(null,canvas_element_id,(cljs.core.truth_(spin)?((function (canvas_element,width,height,scene,camera,renderer,pieces){
return (function (abs,rel){
var seq__33143 = cljs.core.seq.call(null,cljs.core.deref.call(null,pieces));
var chunk__33144 = null;
var count__33145 = (0);
var i__33146 = (0);
while(true){
if((i__33146 < count__33145)){
var piece = cljs.core._nth.call(null,chunk__33144,i__33146);
soma_demo.core.animate_spin.call(null,piece,abs,rel);

var G__33289 = seq__33143;
var G__33290 = chunk__33144;
var G__33291 = count__33145;
var G__33292 = (i__33146 + (1));
seq__33143 = G__33289;
chunk__33144 = G__33290;
count__33145 = G__33291;
i__33146 = G__33292;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33143);
if(temp__4425__auto__){
var seq__33143__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33143__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__33143__$1);
var G__33293 = cljs.core.chunk_rest.call(null,seq__33143__$1);
var G__33294 = c__17121__auto__;
var G__33295 = cljs.core.count.call(null,c__17121__auto__);
var G__33296 = (0);
seq__33143 = G__33293;
chunk__33144 = G__33294;
count__33145 = G__33295;
i__33146 = G__33296;
continue;
} else {
var piece = cljs.core.first.call(null,seq__33143__$1);
soma_demo.core.animate_spin.call(null,piece,abs,rel);

var G__33297 = cljs.core.next.call(null,seq__33143__$1);
var G__33298 = null;
var G__33299 = (0);
var G__33300 = (0);
seq__33143 = G__33297;
chunk__33144 = G__33298;
count__33145 = G__33299;
i__33146 = G__33300;
continue;
}
} else {
return null;
}
}
break;
}
});})(canvas_element,width,height,scene,camera,renderer,pieces))
:cljs.core.identity),renderer,scene,camera);

var c__19340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (state_33250){
var state_val_33251 = (state_33250[(1)]);
if((state_val_33251 === (7))){
var inst_33242 = (state_33250[(2)]);
var state_33250__$1 = state_33250;
var statearr_33252_33301 = state_33250__$1;
(statearr_33252_33301[(2)] = inst_33242);

(statearr_33252_33301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33251 === (1))){
var inst_33147 = (state_33250[(7)]);
var inst_33147__$1 = soma_demo.solver_client.fetch_answerset.call(null,url);
var state_33250__$1 = (function (){var statearr_33253 = state_33250;
(statearr_33253[(7)] = inst_33147__$1);

return statearr_33253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33250__$1,(2),inst_33147__$1);
} else {
if((state_val_33251 === (4))){
var inst_33160 = (state_33250[(8)]);
var inst_33244 = (state_33250[(2)]);
var inst_33246 = inst_33160.scale;
var inst_33247 = inst_33246.set(ws_scale,ws_scale,ws_scale);
var inst_33248 = scene.add(inst_33160);
var state_33250__$1 = (function (){var statearr_33254 = state_33250;
(statearr_33254[(9)] = inst_33247);

(statearr_33254[(10)] = inst_33244);

return statearr_33254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33250__$1,inst_33248);
} else {
if((state_val_33251 === (13))){
var inst_33237 = (state_33250[(2)]);
var state_33250__$1 = state_33250;
var statearr_33255_33302 = state_33250__$1;
(statearr_33255_33302[(2)] = inst_33237);

(statearr_33255_33302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33251 === (6))){
var inst_33201 = (state_33250[(11)]);
var inst_33166 = (state_33250[(12)]);
var inst_33201__$1 = cljs.core.seq.call(null,inst_33166);
var state_33250__$1 = (function (){var statearr_33256 = state_33250;
(statearr_33256[(11)] = inst_33201__$1);

return statearr_33256;
})();
if(inst_33201__$1){
var statearr_33257_33303 = state_33250__$1;
(statearr_33257_33303[(1)] = (8));

} else {
var statearr_33258_33304 = state_33250__$1;
(statearr_33258_33304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33251 === (3))){
var inst_33169 = (state_33250[(13)]);
var inst_33168 = (state_33250[(14)]);
var inst_33171 = (inst_33169 < inst_33168);
var inst_33172 = inst_33171;
var state_33250__$1 = state_33250;
if(cljs.core.truth_(inst_33172)){
var statearr_33259_33305 = state_33250__$1;
(statearr_33259_33305[(1)] = (5));

} else {
var statearr_33260_33306 = state_33250__$1;
(statearr_33260_33306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33251 === (12))){
var inst_33201 = (state_33250[(11)]);
var inst_33160 = (state_33250[(8)]);
var inst_33159 = (state_33250[(15)]);
var inst_33211 = cljs.core.first.call(null,inst_33201);
var inst_33212 = cljs.core.nth.call(null,inst_33211,(0),null);
var inst_33213 = cljs.core.nth.call(null,inst_33211,(1),null);
var inst_33215 = soma_demo.core.create_piece_mesh.call(null,inst_33212,inst_33213);
var inst_33216 = (inst_33212 / cols);
var inst_33217 = Math.floor(inst_33216);
var inst_33218 = cljs.core.mod.call(null,inst_33212,cols);
var inst_33219 = ((3) * soma_demo.core.cubesize);
var inst_33220 = ((2) * soma_demo.core.cubesize);
var inst_33221 = soma_demo.core.place_piece.call(null,inst_33159,cols,inst_33219,inst_33220,inst_33218,inst_33217);
var inst_33222 = cljs.core.nth.call(null,inst_33221,(0),null);
var inst_33223 = cljs.core.nth.call(null,inst_33221,(1),null);
var inst_33225 = inst_33215.position;
var inst_33226 = inst_33225.set(inst_33222,inst_33223,(0));
var inst_33228 = inst_33215.scale;
var inst_33229 = inst_33228.set((1),(1),(1));
var inst_33230 = inst_33160.add(inst_33215);
var inst_33231 = cljs.core.deref.call(null,pieces);
var inst_33232 = cljs.core.conj.call(null,inst_33231,inst_33215);
var inst_33233 = cljs.core.reset_BANG_.call(null,pieces,inst_33232);
var inst_33234 = cljs.core.next.call(null,inst_33201);
var inst_33166 = inst_33234;
var inst_33167 = null;
var inst_33168 = (0);
var inst_33169 = (0);
var state_33250__$1 = (function (){var statearr_33261 = state_33250;
(statearr_33261[(16)] = inst_33229);

(statearr_33261[(13)] = inst_33169);

(statearr_33261[(17)] = inst_33230);

(statearr_33261[(18)] = inst_33226);

(statearr_33261[(19)] = inst_33167);

(statearr_33261[(20)] = inst_33233);

(statearr_33261[(14)] = inst_33168);

(statearr_33261[(12)] = inst_33166);

return statearr_33261;
})();
var statearr_33262_33307 = state_33250__$1;
(statearr_33262_33307[(2)] = null);

(statearr_33262_33307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33251 === (2))){
var inst_33147 = (state_33250[(7)]);
var inst_33149 = (state_33250[(2)]);
var inst_33150 = (function (){var c = inst_33147;
var $ = inst_33149;
return ((function (c,$,inst_33147,inst_33149,state_val_33251,c__19340__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (t){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,t),new cljs.core.Keyword(null,"part","part",77757738));
});
;})(c,$,inst_33147,inst_33149,state_val_33251,c__19340__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var inst_33151 = cljs.core.filter.call(null,inst_33150,inst_33149);
var inst_33153 = (function (){var c = inst_33147;
var $ = inst_33151;
return ((function (c,$,inst_33147,inst_33149,inst_33150,inst_33151,state_val_33251,c__19340__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (mv,p__33152){
var vec__33263 = p__33152;
var _ = cljs.core.nth.call(null,vec__33263,(0),null);
var idv = cljs.core.nth.call(null,vec__33263,(1),null);
var vec__33264 = cljs.core.nth.call(null,vec__33263,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__33264,(0),null);
var coords = cljs.core.nthnext.call(null,vec__33264,(1));
return cljs.core.assoc.call(null,mv,idv,cljs.core.conj.call(null,cljs.core.get.call(null,mv,idv,cljs.core.PersistentVector.EMPTY),coords));
});
;})(c,$,inst_33147,inst_33149,inst_33150,inst_33151,state_val_33251,c__19340__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var inst_33154 = cljs.core.PersistentHashMap.EMPTY;
var inst_33155 = cljs.core.reduce.call(null,inst_33153,inst_33154,inst_33151);
var inst_33156 = cljs.core.sort.call(null,inst_33155);
var inst_33157 = cljs.core.count.call(null,inst_33156);
var inst_33158 = (inst_33157 / cols);
var inst_33159 = Math.ceil(inst_33158);
var inst_33160 = (new THREE.Object3D());
var inst_33165 = cljs.core.seq.call(null,inst_33156);
var inst_33166 = inst_33165;
var inst_33167 = null;
var inst_33168 = (0);
var inst_33169 = (0);
var state_33250__$1 = (function (){var statearr_33265 = state_33250;
(statearr_33265[(13)] = inst_33169);

(statearr_33265[(19)] = inst_33167);

(statearr_33265[(8)] = inst_33160);

(statearr_33265[(14)] = inst_33168);

(statearr_33265[(12)] = inst_33166);

(statearr_33265[(15)] = inst_33159);

return statearr_33265;
})();
var statearr_33266_33308 = state_33250__$1;
(statearr_33266_33308[(2)] = null);

(statearr_33266_33308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33251 === (11))){
var inst_33201 = (state_33250[(11)]);
var inst_33205 = cljs.core.chunk_first.call(null,inst_33201);
var inst_33206 = cljs.core.chunk_rest.call(null,inst_33201);
var inst_33207 = cljs.core.count.call(null,inst_33205);
var inst_33166 = inst_33206;
var inst_33167 = inst_33205;
var inst_33168 = inst_33207;
var inst_33169 = (0);
var state_33250__$1 = (function (){var statearr_33270 = state_33250;
(statearr_33270[(13)] = inst_33169);

(statearr_33270[(19)] = inst_33167);

(statearr_33270[(14)] = inst_33168);

(statearr_33270[(12)] = inst_33166);

return statearr_33270;
})();
var statearr_33271_33309 = state_33250__$1;
(statearr_33271_33309[(2)] = null);

(statearr_33271_33309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33251 === (9))){
var state_33250__$1 = state_33250;
var statearr_33272_33310 = state_33250__$1;
(statearr_33272_33310[(2)] = null);

(statearr_33272_33310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33251 === (5))){
var inst_33169 = (state_33250[(13)]);
var inst_33167 = (state_33250[(19)]);
var inst_33160 = (state_33250[(8)]);
var inst_33168 = (state_33250[(14)]);
var inst_33166 = (state_33250[(12)]);
var inst_33159 = (state_33250[(15)]);
var inst_33175 = cljs.core._nth.call(null,inst_33167,inst_33169);
var inst_33176 = cljs.core.nth.call(null,inst_33175,(0),null);
var inst_33177 = cljs.core.nth.call(null,inst_33175,(1),null);
var inst_33179 = soma_demo.core.create_piece_mesh.call(null,inst_33176,inst_33177);
var inst_33180 = (inst_33176 / cols);
var inst_33181 = Math.floor(inst_33180);
var inst_33182 = cljs.core.mod.call(null,inst_33176,cols);
var inst_33183 = ((3) * soma_demo.core.cubesize);
var inst_33184 = ((2) * soma_demo.core.cubesize);
var inst_33185 = soma_demo.core.place_piece.call(null,inst_33159,cols,inst_33183,inst_33184,inst_33182,inst_33181);
var inst_33186 = cljs.core.nth.call(null,inst_33185,(0),null);
var inst_33187 = cljs.core.nth.call(null,inst_33185,(1),null);
var inst_33189 = inst_33179.position;
var inst_33190 = inst_33189.set(inst_33186,inst_33187,(0));
var inst_33192 = inst_33179.scale;
var inst_33193 = inst_33192.set((1),(1),(1));
var inst_33194 = inst_33160.add(inst_33179);
var inst_33195 = cljs.core.deref.call(null,pieces);
var inst_33196 = cljs.core.conj.call(null,inst_33195,inst_33179);
var inst_33197 = cljs.core.reset_BANG_.call(null,pieces,inst_33196);
var inst_33198 = (inst_33169 + (1));
var tmp33267 = inst_33167;
var tmp33268 = inst_33168;
var tmp33269 = inst_33166;
var inst_33166__$1 = tmp33269;
var inst_33167__$1 = tmp33267;
var inst_33168__$1 = tmp33268;
var inst_33169__$1 = inst_33198;
var state_33250__$1 = (function (){var statearr_33273 = state_33250;
(statearr_33273[(21)] = inst_33197);

(statearr_33273[(13)] = inst_33169__$1);

(statearr_33273[(19)] = inst_33167__$1);

(statearr_33273[(22)] = inst_33193);

(statearr_33273[(14)] = inst_33168__$1);

(statearr_33273[(12)] = inst_33166__$1);

(statearr_33273[(23)] = inst_33190);

(statearr_33273[(24)] = inst_33194);

return statearr_33273;
})();
var statearr_33274_33311 = state_33250__$1;
(statearr_33274_33311[(2)] = null);

(statearr_33274_33311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33251 === (10))){
var inst_33240 = (state_33250[(2)]);
var state_33250__$1 = state_33250;
var statearr_33275_33312 = state_33250__$1;
(statearr_33275_33312[(2)] = inst_33240);

(statearr_33275_33312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33251 === (8))){
var inst_33201 = (state_33250[(11)]);
var inst_33203 = cljs.core.chunked_seq_QMARK_.call(null,inst_33201);
var state_33250__$1 = state_33250;
if(inst_33203){
var statearr_33276_33313 = state_33250__$1;
(statearr_33276_33313[(1)] = (11));

} else {
var statearr_33277_33314 = state_33250__$1;
(statearr_33277_33314[(1)] = (12));

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
});})(c__19340__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
;
return ((function (switch__19319__auto__,c__19340__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function() {
var soma_demo$core$state_machine__19320__auto__ = null;
var soma_demo$core$state_machine__19320__auto____0 = (function (){
var statearr_33281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33281[(0)] = soma_demo$core$state_machine__19320__auto__);

(statearr_33281[(1)] = (1));

return statearr_33281;
});
var soma_demo$core$state_machine__19320__auto____1 = (function (state_33250){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_33250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e33282){if((e33282 instanceof Object)){
var ex__19323__auto__ = e33282;
var statearr_33283_33315 = state_33250;
(statearr_33283_33315[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33316 = state_33250;
state_33250 = G__33316;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
soma_demo$core$state_machine__19320__auto__ = function(state_33250){
switch(arguments.length){
case 0:
return soma_demo$core$state_machine__19320__auto____0.call(this);
case 1:
return soma_demo$core$state_machine__19320__auto____1.call(this,state_33250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$core$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$core$state_machine__19320__auto____0;
soma_demo$core$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$core$state_machine__19320__auto____1;
return soma_demo$core$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var state__19342__auto__ = (function (){var statearr_33284 = f__19341__auto__.call(null);
(statearr_33284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto__);

return statearr_33284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
);

return c__19340__auto__;
});

soma_demo.core.display_pieces_from_url.cljs$lang$maxFixedArity = 5;
soma_demo.core.move_piece = (function soma_demo$core$move_piece(part,p__33317){
var vec__33327 = p__33317;
var dx = cljs.core.nth.call(null,vec__33327,(0),null);
var dy = cljs.core.nth.call(null,vec__33327,(1),null);
var dz = cljs.core.nth.call(null,vec__33327,(2),null);
var iter__17090__auto__ = ((function (vec__33327,dx,dy,dz){
return (function soma_demo$core$move_piece_$_iter__33328(s__33329){
return (new cljs.core.LazySeq(null,((function (vec__33327,dx,dy,dz){
return (function (){
var s__33329__$1 = s__33329;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33329__$1);
if(temp__4425__auto__){
var s__33329__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33329__$2)){
var c__17088__auto__ = cljs.core.chunk_first.call(null,s__33329__$2);
var size__17089__auto__ = cljs.core.count.call(null,c__17088__auto__);
var b__33331 = cljs.core.chunk_buffer.call(null,size__17089__auto__);
if((function (){var i__33330 = (0);
while(true){
if((i__33330 < size__17089__auto__)){
var vec__33334 = cljs.core._nth.call(null,c__17088__auto__,i__33330);
var x = cljs.core.nth.call(null,vec__33334,(0),null);
var y = cljs.core.nth.call(null,vec__33334,(1),null);
var z = cljs.core.nth.call(null,vec__33334,(2),null);
cljs.core.chunk_append.call(null,b__33331,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy),(z + dz)], null));

var G__33336 = (i__33330 + (1));
i__33330 = G__33336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33331),soma_demo$core$move_piece_$_iter__33328.call(null,cljs.core.chunk_rest.call(null,s__33329__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33331),null);
}
} else {
var vec__33335 = cljs.core.first.call(null,s__33329__$2);
var x = cljs.core.nth.call(null,vec__33335,(0),null);
var y = cljs.core.nth.call(null,vec__33335,(1),null);
var z = cljs.core.nth.call(null,vec__33335,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy),(z + dz)], null),soma_demo$core$move_piece_$_iter__33328.call(null,cljs.core.rest.call(null,s__33329__$2)));
}
} else {
return null;
}
break;
}
});})(vec__33327,dx,dy,dz))
,null,null));
});})(vec__33327,dx,dy,dz))
;
return iter__17090__auto__.call(null,part);
});
/**
 * returns a point at the center of a piece's coordinates 
 */
soma_demo.core.center_of_piece = (function soma_demo$core$center_of_piece(p){
var vec__33342 = cljs.core.reduce.call(null,(function (p__33343,p__33344){
var vec__33345 = p__33343;
var ax = cljs.core.nth.call(null,vec__33345,(0),null);
var ay = cljs.core.nth.call(null,vec__33345,(1),null);
var az = cljs.core.nth.call(null,vec__33345,(2),null);
var vec__33346 = p__33344;
var px = cljs.core.nth.call(null,vec__33346,(0),null);
var py = cljs.core.nth.call(null,vec__33346,(1),null);
var pz = cljs.core.nth.call(null,vec__33346,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ax + px),(ay + py),(az + pz)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),p);
var tx = cljs.core.nth.call(null,vec__33342,(0),null);
var ty = cljs.core.nth.call(null,vec__33342,(1),null);
var tz = cljs.core.nth.call(null,vec__33342,(2),null);
var num = cljs.core.count.call(null,p);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tx / num),(ty / num),(tz / num)], null);
});
/**
 * Moves a piece  away from the origin by a given distance 
 */
soma_demo.core.explode_translation = (function soma_demo$core$explode_translation(piece,v){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) + v)),soma_demo.core.center_of_piece.call(null,piece)));
});
/**
 * Create a cube returns the geometry 
 */
soma_demo.core.create_cube_sln = (function soma_demo$core$create_cube_sln(ansset){
var resmap = (function (){var $ = ansset;
var $__$1 = cljs.core.filter.call(null,((function ($){
return (function (t){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,t),new cljs.core.Keyword(null,"part","part",77757738));
});})($))
,$);
var $__$2 = cljs.core.reduce.call(null,((function ($,$__$1){
return (function (mv,p__33363){
var vec__33364 = p__33363;
var _ = cljs.core.nth.call(null,vec__33364,(0),null);
var idv = cljs.core.nth.call(null,vec__33364,(1),null);
var vec__33365 = cljs.core.nth.call(null,vec__33364,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__33365,(0),null);
var coords = cljs.core.nthnext.call(null,vec__33365,(1));
return cljs.core.assoc.call(null,mv,idv,cljs.core.conj.call(null,cljs.core.get.call(null,mv,idv,cljs.core.PersistentVector.EMPTY),coords));
});})($,$__$1))
,cljs.core.PersistentArrayMap.EMPTY,$__$1);
return $__$2;
})();
var sln_geom = (new THREE.Object3D());
var pieces = (function (){var iter__17090__auto__ = ((function (sln_geom,resmap){
return (function soma_demo$core$create_cube_sln_$_iter__33366(s__33367){
return (new cljs.core.LazySeq(null,((function (sln_geom,resmap){
return (function (){
var s__33367__$1 = s__33367;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33367__$1);
if(temp__4425__auto__){
var s__33367__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33367__$2)){
var c__17088__auto__ = cljs.core.chunk_first.call(null,s__33367__$2);
var size__17089__auto__ = cljs.core.count.call(null,c__17088__auto__);
var b__33369 = cljs.core.chunk_buffer.call(null,size__17089__auto__);
if((function (){var i__33368 = (0);
while(true){
if((i__33368 < size__17089__auto__)){
var vec__33374 = cljs.core._nth.call(null,c__17088__auto__,i__33368);
var idx = cljs.core.nth.call(null,vec__33374,(0),null);
var v = cljs.core.nth.call(null,vec__33374,(1),null);
cljs.core.chunk_append.call(null,b__33369,(function (){var piece_geom = soma_demo.core.create_piece_mesh.call(null,idx,v);
var G__33375_33379 = piece_geom;
G__33375_33379.position.set((0),(0),(0));


piece_geom.updateMatrix();

sln_geom.add(piece_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),piece_geom,new cljs.core.Keyword(null,"parts","parts",849007691),v], null);
})());

var G__33380 = (i__33368 + (1));
i__33368 = G__33380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33369),soma_demo$core$create_cube_sln_$_iter__33366.call(null,cljs.core.chunk_rest.call(null,s__33367__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33369),null);
}
} else {
var vec__33376 = cljs.core.first.call(null,s__33367__$2);
var idx = cljs.core.nth.call(null,vec__33376,(0),null);
var v = cljs.core.nth.call(null,vec__33376,(1),null);
return cljs.core.cons.call(null,(function (){var piece_geom = soma_demo.core.create_piece_mesh.call(null,idx,v);
var G__33377_33381 = piece_geom;
G__33377_33381.position.set((0),(0),(0));


piece_geom.updateMatrix();

sln_geom.add(piece_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),piece_geom,new cljs.core.Keyword(null,"parts","parts",849007691),v], null);
})(),soma_demo$core$create_cube_sln_$_iter__33366.call(null,cljs.core.rest.call(null,s__33367__$2)));
}
} else {
return null;
}
break;
}
});})(sln_geom,resmap))
,null,null));
});})(sln_geom,resmap))
;
return iter__17090__auto__.call(null,resmap);
})();
var outer_cube = (new THREE.Object3D());
var G__33378_33382 = sln_geom;
G__33378_33382.position.set((- (soma_demo.core.cubesize * 1.5)),(- (soma_demo.core.cubesize * 1.5)),(- (soma_demo.core.cubesize * 1.5)));


outer_cube.add(sln_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),outer_cube,new cljs.core.Keyword(null,"pieces","pieces",-1436634023),pieces], null);
});
soma_demo.core.animate_explode_part = (function soma_demo$core$animate_explode_part(geom,parts,v){
var vec__33385 = soma_demo.core.explode_translation.call(null,parts,v);
var x = cljs.core.nth.call(null,vec__33385,(0),null);
var y = cljs.core.nth.call(null,vec__33385,(1),null);
var z = cljs.core.nth.call(null,vec__33385,(2),null);
var G__33386 = geom;
G__33386.position.set(x,y,z);

return G__33386;
});
soma_demo.core.display_sln_from_url = (function soma_demo$core$display_sln_from_url(canvas_element_id,url,cols,ws_scale){
var canvas_element = document.getElementById(canvas_element_id);
var width = canvas_element.width;
var height = canvas_element.height;
var scene = (new THREE.Scene());
var camera = soma_demo.core.init_camera.call(null,scene,width,height);
var renderer = soma_demo.core.init_renderer.call(null,canvas_element);
var cubes = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
soma_demo.core.init_lighting.call(null,scene);

soma_demo.core.register_animator.call(null,canvas_element_id,((function (canvas_element,width,height,scene,camera,renderer,cubes){
return (function (abs,rel){
var seq__33617 = cljs.core.seq.call(null,cljs.core.deref.call(null,cubes));
var chunk__33618 = null;
var count__33619 = (0);
var i__33620 = (0);
while(true){
if((i__33620 < count__33619)){
var map__33621 = cljs.core._nth.call(null,chunk__33618,i__33620);
var map__33621__$1 = ((((!((map__33621 == null)))?((((map__33621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33621):map__33621);
var cube_geom = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var cube_pieces = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
soma_demo.core.animate_spin.call(null,cube_geom,abs,rel);

var seq__33623_33847 = cljs.core.seq.call(null,cube_pieces);
var chunk__33624_33848 = null;
var count__33625_33849 = (0);
var i__33626_33850 = (0);
while(true){
if((i__33626_33850 < count__33625_33849)){
var map__33627_33851 = cljs.core._nth.call(null,chunk__33624_33848,i__33626_33850);
var map__33627_33852__$1 = ((((!((map__33627_33851 == null)))?((((map__33627_33851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33627_33851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33627_33851):map__33627_33851);
var piece_geom_33853 = cljs.core.get.call(null,map__33627_33852__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_33854 = cljs.core.get.call(null,map__33627_33852__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_33855 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_33853,parts_33854,Math.max((0),((150) * ((1) + v_33855))));

var G__33856 = seq__33623_33847;
var G__33857 = chunk__33624_33848;
var G__33858 = count__33625_33849;
var G__33859 = (i__33626_33850 + (1));
seq__33623_33847 = G__33856;
chunk__33624_33848 = G__33857;
count__33625_33849 = G__33858;
i__33626_33850 = G__33859;
continue;
} else {
var temp__4425__auto___33860 = cljs.core.seq.call(null,seq__33623_33847);
if(temp__4425__auto___33860){
var seq__33623_33861__$1 = temp__4425__auto___33860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33623_33861__$1)){
var c__17121__auto___33862 = cljs.core.chunk_first.call(null,seq__33623_33861__$1);
var G__33863 = cljs.core.chunk_rest.call(null,seq__33623_33861__$1);
var G__33864 = c__17121__auto___33862;
var G__33865 = cljs.core.count.call(null,c__17121__auto___33862);
var G__33866 = (0);
seq__33623_33847 = G__33863;
chunk__33624_33848 = G__33864;
count__33625_33849 = G__33865;
i__33626_33850 = G__33866;
continue;
} else {
var map__33629_33867 = cljs.core.first.call(null,seq__33623_33861__$1);
var map__33629_33868__$1 = ((((!((map__33629_33867 == null)))?((((map__33629_33867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33629_33867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33629_33867):map__33629_33867);
var piece_geom_33869 = cljs.core.get.call(null,map__33629_33868__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_33870 = cljs.core.get.call(null,map__33629_33868__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_33871 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_33869,parts_33870,Math.max((0),((150) * ((1) + v_33871))));

var G__33872 = cljs.core.next.call(null,seq__33623_33861__$1);
var G__33873 = null;
var G__33874 = (0);
var G__33875 = (0);
seq__33623_33847 = G__33872;
chunk__33624_33848 = G__33873;
count__33625_33849 = G__33874;
i__33626_33850 = G__33875;
continue;
}
} else {
}
}
break;
}

var G__33876 = seq__33617;
var G__33877 = chunk__33618;
var G__33878 = count__33619;
var G__33879 = (i__33620 + (1));
seq__33617 = G__33876;
chunk__33618 = G__33877;
count__33619 = G__33878;
i__33620 = G__33879;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33617);
if(temp__4425__auto__){
var seq__33617__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33617__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__33617__$1);
var G__33880 = cljs.core.chunk_rest.call(null,seq__33617__$1);
var G__33881 = c__17121__auto__;
var G__33882 = cljs.core.count.call(null,c__17121__auto__);
var G__33883 = (0);
seq__33617 = G__33880;
chunk__33618 = G__33881;
count__33619 = G__33882;
i__33620 = G__33883;
continue;
} else {
var map__33631 = cljs.core.first.call(null,seq__33617__$1);
var map__33631__$1 = ((((!((map__33631 == null)))?((((map__33631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33631):map__33631);
var cube_geom = cljs.core.get.call(null,map__33631__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var cube_pieces = cljs.core.get.call(null,map__33631__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
soma_demo.core.animate_spin.call(null,cube_geom,abs,rel);

var seq__33633_33884 = cljs.core.seq.call(null,cube_pieces);
var chunk__33634_33885 = null;
var count__33635_33886 = (0);
var i__33636_33887 = (0);
while(true){
if((i__33636_33887 < count__33635_33886)){
var map__33637_33888 = cljs.core._nth.call(null,chunk__33634_33885,i__33636_33887);
var map__33637_33889__$1 = ((((!((map__33637_33888 == null)))?((((map__33637_33888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33637_33888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33637_33888):map__33637_33888);
var piece_geom_33890 = cljs.core.get.call(null,map__33637_33889__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_33891 = cljs.core.get.call(null,map__33637_33889__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_33892 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_33890,parts_33891,Math.max((0),((150) * ((1) + v_33892))));

var G__33893 = seq__33633_33884;
var G__33894 = chunk__33634_33885;
var G__33895 = count__33635_33886;
var G__33896 = (i__33636_33887 + (1));
seq__33633_33884 = G__33893;
chunk__33634_33885 = G__33894;
count__33635_33886 = G__33895;
i__33636_33887 = G__33896;
continue;
} else {
var temp__4425__auto___33897__$1 = cljs.core.seq.call(null,seq__33633_33884);
if(temp__4425__auto___33897__$1){
var seq__33633_33898__$1 = temp__4425__auto___33897__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33633_33898__$1)){
var c__17121__auto___33899 = cljs.core.chunk_first.call(null,seq__33633_33898__$1);
var G__33900 = cljs.core.chunk_rest.call(null,seq__33633_33898__$1);
var G__33901 = c__17121__auto___33899;
var G__33902 = cljs.core.count.call(null,c__17121__auto___33899);
var G__33903 = (0);
seq__33633_33884 = G__33900;
chunk__33634_33885 = G__33901;
count__33635_33886 = G__33902;
i__33636_33887 = G__33903;
continue;
} else {
var map__33639_33904 = cljs.core.first.call(null,seq__33633_33898__$1);
var map__33639_33905__$1 = ((((!((map__33639_33904 == null)))?((((map__33639_33904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33639_33904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33639_33904):map__33639_33904);
var piece_geom_33906 = cljs.core.get.call(null,map__33639_33905__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_33907 = cljs.core.get.call(null,map__33639_33905__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_33908 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_33906,parts_33907,Math.max((0),((150) * ((1) + v_33908))));

var G__33909 = cljs.core.next.call(null,seq__33633_33898__$1);
var G__33910 = null;
var G__33911 = (0);
var G__33912 = (0);
seq__33633_33884 = G__33909;
chunk__33634_33885 = G__33910;
count__33635_33886 = G__33911;
i__33636_33887 = G__33912;
continue;
}
} else {
}
}
break;
}

var G__33913 = cljs.core.next.call(null,seq__33617__$1);
var G__33914 = null;
var G__33915 = (0);
var G__33916 = (0);
seq__33617 = G__33913;
chunk__33618 = G__33914;
count__33619 = G__33915;
i__33620 = G__33916;
continue;
}
} else {
return null;
}
}
break;
}
});})(canvas_element,width,height,scene,camera,renderer,cubes))
,renderer,scene,camera);

var c__19340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto__,canvas_element,width,height,scene,camera,renderer,cubes){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto__,canvas_element,width,height,scene,camera,renderer,cubes){
return (function (state_33790){
var state_val_33791 = (state_33790[(1)]);
if((state_val_33791 === (7))){
var inst_33786 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
var statearr_33792_33917 = state_33790__$1;
(statearr_33792_33917[(2)] = inst_33786);

(statearr_33792_33917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (20))){
var inst_33718 = (state_33790[(7)]);
var inst_33722 = cljs.core.chunk_first.call(null,inst_33718);
var inst_33723 = cljs.core.chunk_rest.call(null,inst_33718);
var inst_33724 = cljs.core.count.call(null,inst_33722);
var inst_33656 = inst_33723;
var inst_33657 = inst_33722;
var inst_33658 = inst_33724;
var inst_33659 = (0);
var state_33790__$1 = (function (){var statearr_33793 = state_33790;
(statearr_33793[(8)] = inst_33656);

(statearr_33793[(9)] = inst_33658);

(statearr_33793[(10)] = inst_33659);

(statearr_33793[(11)] = inst_33657);

return statearr_33793;
})();
var statearr_33794_33918 = state_33790__$1;
(statearr_33794_33918[(2)] = null);

(statearr_33794_33918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (27))){
var state_33790__$1 = state_33790;
var statearr_33795_33919 = state_33790__$1;
(statearr_33795_33919[(2)] = false);

(statearr_33795_33919[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (1))){
var inst_33641 = soma_demo.solver_client.fetch_answerset.call(null,url);
var state_33790__$1 = state_33790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33790__$1,(2),inst_33641);
} else {
if((state_val_33791 === (24))){
var state_33790__$1 = state_33790;
var statearr_33796_33920 = state_33790__$1;
(statearr_33796_33920[(2)] = false);

(statearr_33796_33920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (4))){
var inst_33788 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33790__$1,inst_33788);
} else {
if((state_val_33791 === (15))){
var inst_33670 = (state_33790[(12)]);
var state_33790__$1 = state_33790;
var statearr_33797_33921 = state_33790__$1;
(statearr_33797_33921[(2)] = inst_33670);

(statearr_33797_33921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (21))){
var inst_33733 = (state_33790[(13)]);
var inst_33718 = (state_33790[(7)]);
var inst_33728 = cljs.core.first.call(null,inst_33718);
var inst_33729 = cljs.core.nth.call(null,inst_33728,(0),null);
var inst_33730 = cljs.core.nth.call(null,inst_33728,(1),null);
var inst_33733__$1 = soma_demo.core.create_cube_sln.call(null,inst_33730);
var inst_33735 = (inst_33733__$1 == null);
var inst_33736 = cljs.core.not.call(null,inst_33735);
var state_33790__$1 = (function (){var statearr_33798 = state_33790;
(statearr_33798[(13)] = inst_33733__$1);

(statearr_33798[(14)] = inst_33729);

return statearr_33798;
})();
if(inst_33736){
var statearr_33799_33922 = state_33790__$1;
(statearr_33799_33922[(1)] = (23));

} else {
var statearr_33800_33923 = state_33790__$1;
(statearr_33800_33923[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (31))){
var inst_33646 = (state_33790[(15)]);
var inst_33649 = (state_33790[(16)]);
var inst_33729 = (state_33790[(14)]);
var inst_33648 = (state_33790[(17)]);
var inst_33718 = (state_33790[(7)]);
var inst_33753 = (state_33790[(2)]);
var inst_33754 = cljs.core.get.call(null,inst_33753,new cljs.core.Keyword(null,"geom","geom",1207084371));
var inst_33755 = cljs.core.get.call(null,inst_33753,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var inst_33756 = (inst_33729 / cols);
var inst_33757 = Math.floor(inst_33756);
var inst_33758 = cljs.core.mod.call(null,inst_33729,cols);
var inst_33759 = ((2) * soma_demo.core.cubesize);
var inst_33760 = ((2) * soma_demo.core.cubesize);
var inst_33761 = soma_demo.core.place_piece.call(null,inst_33646,cols,inst_33759,inst_33760,inst_33758,inst_33757);
var inst_33762 = cljs.core.nth.call(null,inst_33761,(0),null);
var inst_33763 = cljs.core.nth.call(null,inst_33761,(1),null);
var inst_33765 = inst_33754.position;
var inst_33766 = inst_33765.set(inst_33762,inst_33763,(0));
var inst_33768 = inst_33754.scale;
var inst_33769 = inst_33768.set(inst_33648,inst_33648,inst_33648);
var inst_33770 = inst_33649.add(inst_33754);
var inst_33771 = cljs.core.deref.call(null,cubes);
var inst_33772 = cljs.core.conj.call(null,inst_33771,inst_33753);
var inst_33773 = cljs.core.reset_BANG_.call(null,cubes,inst_33772);
var inst_33775 = inst_33649.scale;
var inst_33776 = inst_33775.set(ws_scale,ws_scale,ws_scale);
var inst_33777 = scene.add(inst_33649);
var inst_33778 = cljs.core.next.call(null,inst_33718);
var inst_33656 = inst_33778;
var inst_33657 = null;
var inst_33658 = (0);
var inst_33659 = (0);
var state_33790__$1 = (function (){var statearr_33801 = state_33790;
(statearr_33801[(8)] = inst_33656);

(statearr_33801[(18)] = inst_33770);

(statearr_33801[(19)] = inst_33773);

(statearr_33801[(9)] = inst_33658);

(statearr_33801[(10)] = inst_33659);

(statearr_33801[(20)] = inst_33769);

(statearr_33801[(11)] = inst_33657);

(statearr_33801[(21)] = inst_33766);

(statearr_33801[(22)] = inst_33777);

(statearr_33801[(23)] = inst_33776);

(statearr_33801[(24)] = inst_33755);

return statearr_33801;
})();
var statearr_33802_33924 = state_33790__$1;
(statearr_33802_33924[(2)] = null);

(statearr_33802_33924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (13))){
var inst_33682 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
var statearr_33803_33925 = state_33790__$1;
(statearr_33803_33925[(2)] = inst_33682);

(statearr_33803_33925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (22))){
var inst_33781 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
var statearr_33804_33926 = state_33790__$1;
(statearr_33804_33926[(2)] = inst_33781);

(statearr_33804_33926[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (29))){
var inst_33733 = (state_33790[(13)]);
var inst_33750 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33733);
var state_33790__$1 = state_33790;
var statearr_33805_33927 = state_33790__$1;
(statearr_33805_33927[(2)] = inst_33750);

(statearr_33805_33927[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (6))){
var inst_33656 = (state_33790[(8)]);
var inst_33718 = (state_33790[(7)]);
var inst_33718__$1 = cljs.core.seq.call(null,inst_33656);
var state_33790__$1 = (function (){var statearr_33806 = state_33790;
(statearr_33806[(7)] = inst_33718__$1);

return statearr_33806;
})();
if(inst_33718__$1){
var statearr_33807_33928 = state_33790__$1;
(statearr_33807_33928[(1)] = (17));

} else {
var statearr_33808_33929 = state_33790__$1;
(statearr_33808_33929[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (28))){
var inst_33745 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
var statearr_33809_33930 = state_33790__$1;
(statearr_33809_33930[(2)] = inst_33745);

(statearr_33809_33930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (25))){
var inst_33748 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
if(cljs.core.truth_(inst_33748)){
var statearr_33810_33931 = state_33790__$1;
(statearr_33810_33931[(1)] = (29));

} else {
var statearr_33811_33932 = state_33790__$1;
(statearr_33811_33932[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (17))){
var inst_33718 = (state_33790[(7)]);
var inst_33720 = cljs.core.chunked_seq_QMARK_.call(null,inst_33718);
var state_33790__$1 = state_33790;
if(inst_33720){
var statearr_33812_33933 = state_33790__$1;
(statearr_33812_33933[(1)] = (20));

} else {
var statearr_33813_33934 = state_33790__$1;
(statearr_33813_33934[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (3))){
var inst_33658 = (state_33790[(9)]);
var inst_33659 = (state_33790[(10)]);
var inst_33661 = (inst_33659 < inst_33658);
var inst_33662 = inst_33661;
var state_33790__$1 = state_33790;
if(cljs.core.truth_(inst_33662)){
var statearr_33814_33935 = state_33790__$1;
(statearr_33814_33935[(1)] = (5));

} else {
var statearr_33815_33936 = state_33790__$1;
(statearr_33815_33936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (12))){
var state_33790__$1 = state_33790;
var statearr_33816_33937 = state_33790__$1;
(statearr_33816_33937[(2)] = false);

(statearr_33816_33937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (2))){
var inst_33646 = (state_33790[(15)]);
var inst_33643 = (state_33790[(2)]);
var inst_33644 = cljs.core.count.call(null,inst_33643);
var inst_33645 = (inst_33644 / cols);
var inst_33646__$1 = Math.ceil(inst_33645);
var inst_33647 = ((1) / inst_33646__$1);
var inst_33648 = ((5) * inst_33647);
var inst_33649 = (new THREE.Object3D());
var inst_33654 = cljs.core.map_indexed.call(null,cljs.core.vector,inst_33643);
var inst_33655 = cljs.core.seq.call(null,inst_33654);
var inst_33656 = inst_33655;
var inst_33657 = null;
var inst_33658 = (0);
var inst_33659 = (0);
var state_33790__$1 = (function (){var statearr_33817 = state_33790;
(statearr_33817[(8)] = inst_33656);

(statearr_33817[(15)] = inst_33646__$1);

(statearr_33817[(9)] = inst_33658);

(statearr_33817[(16)] = inst_33649);

(statearr_33817[(10)] = inst_33659);

(statearr_33817[(11)] = inst_33657);

(statearr_33817[(17)] = inst_33648);

return statearr_33817;
})();
var statearr_33818_33938 = state_33790__$1;
(statearr_33818_33938[(2)] = null);

(statearr_33818_33938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (23))){
var inst_33733 = (state_33790[(13)]);
var inst_33738 = inst_33733.cljs$lang$protocol_mask$partition0$;
var inst_33739 = (inst_33738 & (64));
var inst_33740 = inst_33733.cljs$core$ISeq$;
var inst_33741 = (inst_33739) || (inst_33740);
var state_33790__$1 = state_33790;
if(cljs.core.truth_(inst_33741)){
var statearr_33819_33939 = state_33790__$1;
(statearr_33819_33939[(1)] = (26));

} else {
var statearr_33820_33940 = state_33790__$1;
(statearr_33820_33940[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (19))){
var inst_33784 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
var statearr_33821_33941 = state_33790__$1;
(statearr_33821_33941[(2)] = inst_33784);

(statearr_33821_33941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (11))){
var state_33790__$1 = state_33790;
var statearr_33822_33942 = state_33790__$1;
(statearr_33822_33942[(2)] = true);

(statearr_33822_33942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (9))){
var state_33790__$1 = state_33790;
var statearr_33823_33943 = state_33790__$1;
(statearr_33823_33943[(2)] = false);

(statearr_33823_33943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (5))){
var inst_33670 = (state_33790[(12)]);
var inst_33659 = (state_33790[(10)]);
var inst_33657 = (state_33790[(11)]);
var inst_33665 = cljs.core._nth.call(null,inst_33657,inst_33659);
var inst_33666 = cljs.core.nth.call(null,inst_33665,(0),null);
var inst_33667 = cljs.core.nth.call(null,inst_33665,(1),null);
var inst_33670__$1 = soma_demo.core.create_cube_sln.call(null,inst_33667);
var inst_33672 = (inst_33670__$1 == null);
var inst_33673 = cljs.core.not.call(null,inst_33672);
var state_33790__$1 = (function (){var statearr_33824 = state_33790;
(statearr_33824[(12)] = inst_33670__$1);

(statearr_33824[(25)] = inst_33666);

return statearr_33824;
})();
if(inst_33673){
var statearr_33825_33944 = state_33790__$1;
(statearr_33825_33944[(1)] = (8));

} else {
var statearr_33826_33945 = state_33790__$1;
(statearr_33826_33945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (14))){
var inst_33670 = (state_33790[(12)]);
var inst_33687 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33670);
var state_33790__$1 = state_33790;
var statearr_33830_33946 = state_33790__$1;
(statearr_33830_33946[(2)] = inst_33687);

(statearr_33830_33946[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (26))){
var state_33790__$1 = state_33790;
var statearr_33831_33947 = state_33790__$1;
(statearr_33831_33947[(2)] = true);

(statearr_33831_33947[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (16))){
var inst_33656 = (state_33790[(8)]);
var inst_33646 = (state_33790[(15)]);
var inst_33666 = (state_33790[(25)]);
var inst_33658 = (state_33790[(9)]);
var inst_33649 = (state_33790[(16)]);
var inst_33659 = (state_33790[(10)]);
var inst_33657 = (state_33790[(11)]);
var inst_33648 = (state_33790[(17)]);
var inst_33690 = (state_33790[(2)]);
var inst_33691 = cljs.core.get.call(null,inst_33690,new cljs.core.Keyword(null,"geom","geom",1207084371));
var inst_33692 = cljs.core.get.call(null,inst_33690,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var inst_33693 = (inst_33666 / cols);
var inst_33694 = Math.floor(inst_33693);
var inst_33695 = cljs.core.mod.call(null,inst_33666,cols);
var inst_33696 = ((2) * soma_demo.core.cubesize);
var inst_33697 = ((2) * soma_demo.core.cubesize);
var inst_33698 = soma_demo.core.place_piece.call(null,inst_33646,cols,inst_33696,inst_33697,inst_33695,inst_33694);
var inst_33699 = cljs.core.nth.call(null,inst_33698,(0),null);
var inst_33700 = cljs.core.nth.call(null,inst_33698,(1),null);
var inst_33702 = inst_33691.position;
var inst_33703 = inst_33702.set(inst_33699,inst_33700,(0));
var inst_33705 = inst_33691.scale;
var inst_33706 = inst_33705.set(inst_33648,inst_33648,inst_33648);
var inst_33707 = inst_33649.add(inst_33691);
var inst_33708 = cljs.core.deref.call(null,cubes);
var inst_33709 = cljs.core.conj.call(null,inst_33708,inst_33690);
var inst_33710 = cljs.core.reset_BANG_.call(null,cubes,inst_33709);
var inst_33712 = inst_33649.scale;
var inst_33713 = inst_33712.set(ws_scale,ws_scale,ws_scale);
var inst_33714 = scene.add(inst_33649);
var inst_33715 = (inst_33659 + (1));
var tmp33827 = inst_33656;
var tmp33828 = inst_33658;
var tmp33829 = inst_33657;
var inst_33656__$1 = tmp33827;
var inst_33657__$1 = tmp33829;
var inst_33658__$1 = tmp33828;
var inst_33659__$1 = inst_33715;
var state_33790__$1 = (function (){var statearr_33832 = state_33790;
(statearr_33832[(8)] = inst_33656__$1);

(statearr_33832[(9)] = inst_33658__$1);

(statearr_33832[(26)] = inst_33714);

(statearr_33832[(10)] = inst_33659__$1);

(statearr_33832[(27)] = inst_33706);

(statearr_33832[(28)] = inst_33713);

(statearr_33832[(29)] = inst_33710);

(statearr_33832[(11)] = inst_33657__$1);

(statearr_33832[(30)] = inst_33707);

(statearr_33832[(31)] = inst_33692);

(statearr_33832[(32)] = inst_33703);

return statearr_33832;
})();
var statearr_33833_33948 = state_33790__$1;
(statearr_33833_33948[(2)] = null);

(statearr_33833_33948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (30))){
var inst_33733 = (state_33790[(13)]);
var state_33790__$1 = state_33790;
var statearr_33834_33949 = state_33790__$1;
(statearr_33834_33949[(2)] = inst_33733);

(statearr_33834_33949[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (10))){
var inst_33685 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
if(cljs.core.truth_(inst_33685)){
var statearr_33835_33950 = state_33790__$1;
(statearr_33835_33950[(1)] = (14));

} else {
var statearr_33836_33951 = state_33790__$1;
(statearr_33836_33951[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (18))){
var state_33790__$1 = state_33790;
var statearr_33837_33952 = state_33790__$1;
(statearr_33837_33952[(2)] = null);

(statearr_33837_33952[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (8))){
var inst_33670 = (state_33790[(12)]);
var inst_33675 = inst_33670.cljs$lang$protocol_mask$partition0$;
var inst_33676 = (inst_33675 & (64));
var inst_33677 = inst_33670.cljs$core$ISeq$;
var inst_33678 = (inst_33676) || (inst_33677);
var state_33790__$1 = state_33790;
if(cljs.core.truth_(inst_33678)){
var statearr_33838_33953 = state_33790__$1;
(statearr_33838_33953[(1)] = (11));

} else {
var statearr_33839_33954 = state_33790__$1;
(statearr_33839_33954[(1)] = (12));

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
});})(c__19340__auto__,canvas_element,width,height,scene,camera,renderer,cubes))
;
return ((function (switch__19319__auto__,c__19340__auto__,canvas_element,width,height,scene,camera,renderer,cubes){
return (function() {
var soma_demo$core$display_sln_from_url_$_state_machine__19320__auto__ = null;
var soma_demo$core$display_sln_from_url_$_state_machine__19320__auto____0 = (function (){
var statearr_33843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33843[(0)] = soma_demo$core$display_sln_from_url_$_state_machine__19320__auto__);

(statearr_33843[(1)] = (1));

return statearr_33843;
});
var soma_demo$core$display_sln_from_url_$_state_machine__19320__auto____1 = (function (state_33790){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_33790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e33844){if((e33844 instanceof Object)){
var ex__19323__auto__ = e33844;
var statearr_33845_33955 = state_33790;
(statearr_33845_33955[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33956 = state_33790;
state_33790 = G__33956;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
soma_demo$core$display_sln_from_url_$_state_machine__19320__auto__ = function(state_33790){
switch(arguments.length){
case 0:
return soma_demo$core$display_sln_from_url_$_state_machine__19320__auto____0.call(this);
case 1:
return soma_demo$core$display_sln_from_url_$_state_machine__19320__auto____1.call(this,state_33790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$core$display_sln_from_url_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$core$display_sln_from_url_$_state_machine__19320__auto____0;
soma_demo$core$display_sln_from_url_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$core$display_sln_from_url_$_state_machine__19320__auto____1;
return soma_demo$core$display_sln_from_url_$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto__,canvas_element,width,height,scene,camera,renderer,cubes))
})();
var state__19342__auto__ = (function (){var statearr_33846 = f__19341__auto__.call(null);
(statearr_33846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto__);

return statearr_33846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto__,canvas_element,width,height,scene,camera,renderer,cubes))
);

return c__19340__auto__;
});
soma_demo.core.on_js_reload = (function soma_demo$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1447005686583