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
var G__69369_69372 = dir_light;
G__69369_69372.color.setHSL(0.6,(1),0.6);


var G__69370_69373 = dir_light;
G__69370_69373.groundColor.setHSL(0.095,(1),0.8);


var G__69371_69374 = dir_light;
G__69371_69374.position.set((0),(-1000),(0));


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
soma_demo.core.start_animation = (function soma_demo$core$start_animation(update_animation,renderer,scene,camera){
var last_update = cljs.core.atom.call(null,(new Date()).getTime());
return ((function (last_update){
return (function soma_demo$core$start_animation_$_animation_loop(){
window.requestAnimationFrame(soma_demo$core$start_animation_$_animation_loop);

var curtime_69375 = (new Date()).getTime();
update_animation.call(null,cljs.core.deref.call(null,last_update),((curtime_69375 - cljs.core.deref.call(null,last_update)) / (1000)));

cljs.core.reset_BANG_.call(null,last_update,curtime_69375);

return renderer.render(scene,camera);
});})(last_update))
.call(null);
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
return (function (parent,p__69379){
var vec__69380 = p__69379;
var x = cljs.core.nth.call(null,vec__69380,(0),null);
var y = cljs.core.nth.call(null,vec__69380,(1),null);
var z = cljs.core.nth.call(null,vec__69380,(2),null);
var cube_69382 = (new THREE.CubeGeometry(soma_demo.core.cubesize,soma_demo.core.cubesize,soma_demo.core.cubesize));
var cubemesh_69383 = (new THREE.Mesh(cube_69382,material));
var G__69381_69384 = cubemesh_69383;
G__69381_69384.position.set((x * soma_demo.core.cubesize),(y * soma_demo.core.cubesize),(z * soma_demo.core.cubesize));


cubemesh_69383.updateMatrix();

parent.merge(cubemesh_69383.geometry,cubemesh_69383.matrix);

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
soma_demo.core.display_pieces_from_url = (function soma_demo$core$display_pieces_from_url(var_args){
var args69385 = [];
var len__17376__auto___69550 = arguments.length;
var i__17377__auto___69551 = (0);
while(true){
if((i__17377__auto___69551 < len__17376__auto___69550)){
args69385.push((arguments[i__17377__auto___69551]));

var G__69552 = (i__17377__auto___69551 + (1));
i__17377__auto___69551 = G__69552;
continue;
} else {
}
break;
}

var G__69387 = args69385.length;
switch (G__69387) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69385.length)].join('')));

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
cljs.core.println.call(null,"showing in ",width,":",height);

soma_demo.core.init_lighting.call(null,scene);

soma_demo.core.start_animation.call(null,(cljs.core.truth_(spin)?((function (canvas_element,width,height,scene,camera,renderer,pieces){
return (function (abs,rel){
var seq__69388 = cljs.core.seq.call(null,cljs.core.deref.call(null,pieces));
var chunk__69389 = null;
var count__69390 = (0);
var i__69391 = (0);
while(true){
if((i__69391 < count__69390)){
var piece = cljs.core._nth.call(null,chunk__69389,i__69391);
soma_demo.core.animate_spin.call(null,piece,abs,rel);

var G__69554 = seq__69388;
var G__69555 = chunk__69389;
var G__69556 = count__69390;
var G__69557 = (i__69391 + (1));
seq__69388 = G__69554;
chunk__69389 = G__69555;
count__69390 = G__69556;
i__69391 = G__69557;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__69388);
if(temp__4425__auto__){
var seq__69388__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69388__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__69388__$1);
var G__69558 = cljs.core.chunk_rest.call(null,seq__69388__$1);
var G__69559 = c__17121__auto__;
var G__69560 = cljs.core.count.call(null,c__17121__auto__);
var G__69561 = (0);
seq__69388 = G__69558;
chunk__69389 = G__69559;
count__69390 = G__69560;
i__69391 = G__69561;
continue;
} else {
var piece = cljs.core.first.call(null,seq__69388__$1);
soma_demo.core.animate_spin.call(null,piece,abs,rel);

var G__69562 = cljs.core.next.call(null,seq__69388__$1);
var G__69563 = null;
var G__69564 = (0);
var G__69565 = (0);
seq__69388 = G__69562;
chunk__69389 = G__69563;
count__69390 = G__69564;
i__69391 = G__69565;
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

var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (state_69515){
var state_val_69516 = (state_69515[(1)]);
if((state_val_69516 === (7))){
var inst_69507 = (state_69515[(2)]);
var state_69515__$1 = state_69515;
var statearr_69517_69566 = state_69515__$1;
(statearr_69517_69566[(2)] = inst_69507);

(statearr_69517_69566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69516 === (1))){
var inst_69392 = (state_69515[(7)]);
var inst_69392__$1 = soma_demo.solver_client.fetch_answerset.call(null,url);
var state_69515__$1 = (function (){var statearr_69518 = state_69515;
(statearr_69518[(7)] = inst_69392__$1);

return statearr_69518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69515__$1,(2),inst_69392__$1);
} else {
if((state_val_69516 === (4))){
var inst_69405 = (state_69515[(8)]);
var inst_69509 = (state_69515[(2)]);
var inst_69511 = inst_69405.scale;
var inst_69512 = inst_69511.set(ws_scale,ws_scale,ws_scale);
var inst_69513 = scene.add(inst_69405);
var state_69515__$1 = (function (){var statearr_69519 = state_69515;
(statearr_69519[(9)] = inst_69509);

(statearr_69519[(10)] = inst_69512);

return statearr_69519;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69515__$1,inst_69513);
} else {
if((state_val_69516 === (13))){
var inst_69502 = (state_69515[(2)]);
var state_69515__$1 = state_69515;
var statearr_69520_69567 = state_69515__$1;
(statearr_69520_69567[(2)] = inst_69502);

(statearr_69520_69567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69516 === (6))){
var inst_69411 = (state_69515[(11)]);
var inst_69456 = (state_69515[(12)]);
var inst_69456__$1 = cljs.core.seq.call(null,inst_69411);
var state_69515__$1 = (function (){var statearr_69521 = state_69515;
(statearr_69521[(12)] = inst_69456__$1);

return statearr_69521;
})();
if(inst_69456__$1){
var statearr_69522_69568 = state_69515__$1;
(statearr_69522_69568[(1)] = (8));

} else {
var statearr_69523_69569 = state_69515__$1;
(statearr_69523_69569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69516 === (3))){
var inst_69414 = (state_69515[(13)]);
var inst_69413 = (state_69515[(14)]);
var inst_69416 = (inst_69414 < inst_69413);
var inst_69417 = inst_69416;
var state_69515__$1 = state_69515;
if(cljs.core.truth_(inst_69417)){
var statearr_69524_69570 = state_69515__$1;
(statearr_69524_69570[(1)] = (5));

} else {
var statearr_69525_69571 = state_69515__$1;
(statearr_69525_69571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69516 === (12))){
var inst_69404 = (state_69515[(15)]);
var inst_69405 = (state_69515[(8)]);
var inst_69456 = (state_69515[(12)]);
var inst_69466 = cljs.core.first.call(null,inst_69456);
var inst_69467 = cljs.core.nth.call(null,inst_69466,(0),null);
var inst_69468 = cljs.core.nth.call(null,inst_69466,(1),null);
var inst_69470 = soma_demo.core.create_piece_mesh.call(null,inst_69467,inst_69468);
var inst_69471 = (inst_69467 / cols);
var inst_69472 = Math.floor(inst_69471);
var inst_69473 = cljs.core.mod.call(null,inst_69467,cols);
var inst_69474 = ((3) * soma_demo.core.cubesize);
var inst_69475 = ((2) * soma_demo.core.cubesize);
var inst_69476 = soma_demo.core.place_piece.call(null,inst_69404,cols,inst_69474,inst_69475,inst_69473,inst_69472);
var inst_69477 = cljs.core.nth.call(null,inst_69476,(0),null);
var inst_69478 = cljs.core.nth.call(null,inst_69476,(1),null);
var inst_69479 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69480 = [inst_69404,cols];
var inst_69481 = (new cljs.core.PersistentVector(null,2,(5),inst_69479,inst_69480,null));
var inst_69482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69483 = [inst_69473,inst_69472];
var inst_69484 = (new cljs.core.PersistentVector(null,2,(5),inst_69482,inst_69483,null));
var inst_69485 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69486 = [inst_69477,inst_69478];
var inst_69487 = (new cljs.core.PersistentVector(null,2,(5),inst_69485,inst_69486,null));
var inst_69488 = cljs.core.println.call(null,inst_69481,"placing piece ",inst_69467," at grid ",inst_69484," in pos ",inst_69487);
var inst_69490 = inst_69470.position;
var inst_69491 = inst_69490.set(inst_69477,inst_69478,(0));
var inst_69493 = inst_69470.scale;
var inst_69494 = inst_69493.set((1),(1),(1));
var inst_69495 = inst_69405.add(inst_69470);
var inst_69496 = cljs.core.deref.call(null,pieces);
var inst_69497 = cljs.core.conj.call(null,inst_69496,inst_69470);
var inst_69498 = cljs.core.reset_BANG_.call(null,pieces,inst_69497);
var inst_69499 = cljs.core.next.call(null,inst_69456);
var inst_69411 = inst_69499;
var inst_69412 = null;
var inst_69413 = (0);
var inst_69414 = (0);
var state_69515__$1 = (function (){var statearr_69526 = state_69515;
(statearr_69526[(13)] = inst_69414);

(statearr_69526[(16)] = inst_69498);

(statearr_69526[(11)] = inst_69411);

(statearr_69526[(17)] = inst_69491);

(statearr_69526[(14)] = inst_69413);

(statearr_69526[(18)] = inst_69494);

(statearr_69526[(19)] = inst_69488);

(statearr_69526[(20)] = inst_69412);

(statearr_69526[(21)] = inst_69495);

return statearr_69526;
})();
var statearr_69527_69572 = state_69515__$1;
(statearr_69527_69572[(2)] = null);

(statearr_69527_69572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69516 === (2))){
var inst_69392 = (state_69515[(7)]);
var inst_69394 = (state_69515[(2)]);
var inst_69395 = (function (){var c = inst_69392;
var $ = inst_69394;
return ((function (c,$,inst_69392,inst_69394,state_val_69516,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (t){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,t),new cljs.core.Keyword(null,"part","part",77757738));
});
;})(c,$,inst_69392,inst_69394,state_val_69516,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var inst_69396 = cljs.core.filter.call(null,inst_69395,inst_69394);
var inst_69398 = (function (){var c = inst_69392;
var $ = inst_69396;
return ((function (c,$,inst_69392,inst_69394,inst_69395,inst_69396,state_val_69516,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (mv,p__69397){
var vec__69528 = p__69397;
var _ = cljs.core.nth.call(null,vec__69528,(0),null);
var idv = cljs.core.nth.call(null,vec__69528,(1),null);
var vec__69529 = cljs.core.nth.call(null,vec__69528,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__69529,(0),null);
var coords = cljs.core.nthnext.call(null,vec__69529,(1));
return cljs.core.assoc.call(null,mv,idv,cljs.core.conj.call(null,cljs.core.get.call(null,mv,idv,cljs.core.PersistentVector.EMPTY),coords));
});
;})(c,$,inst_69392,inst_69394,inst_69395,inst_69396,state_val_69516,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var inst_69399 = cljs.core.PersistentHashMap.EMPTY;
var inst_69400 = cljs.core.reduce.call(null,inst_69398,inst_69399,inst_69396);
var inst_69401 = cljs.core.sort.call(null,inst_69400);
var inst_69402 = cljs.core.count.call(null,inst_69401);
var inst_69403 = (inst_69402 / cols);
var inst_69404 = Math.ceil(inst_69403);
var inst_69405 = (new THREE.Object3D());
var inst_69410 = cljs.core.seq.call(null,inst_69401);
var inst_69411 = inst_69410;
var inst_69412 = null;
var inst_69413 = (0);
var inst_69414 = (0);
var state_69515__$1 = (function (){var statearr_69530 = state_69515;
(statearr_69530[(13)] = inst_69414);

(statearr_69530[(11)] = inst_69411);

(statearr_69530[(15)] = inst_69404);

(statearr_69530[(14)] = inst_69413);

(statearr_69530[(8)] = inst_69405);

(statearr_69530[(20)] = inst_69412);

return statearr_69530;
})();
var statearr_69531_69573 = state_69515__$1;
(statearr_69531_69573[(2)] = null);

(statearr_69531_69573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69516 === (11))){
var inst_69456 = (state_69515[(12)]);
var inst_69460 = cljs.core.chunk_first.call(null,inst_69456);
var inst_69461 = cljs.core.chunk_rest.call(null,inst_69456);
var inst_69462 = cljs.core.count.call(null,inst_69460);
var inst_69411 = inst_69461;
var inst_69412 = inst_69460;
var inst_69413 = inst_69462;
var inst_69414 = (0);
var state_69515__$1 = (function (){var statearr_69535 = state_69515;
(statearr_69535[(13)] = inst_69414);

(statearr_69535[(11)] = inst_69411);

(statearr_69535[(14)] = inst_69413);

(statearr_69535[(20)] = inst_69412);

return statearr_69535;
})();
var statearr_69536_69574 = state_69515__$1;
(statearr_69536_69574[(2)] = null);

(statearr_69536_69574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69516 === (9))){
var state_69515__$1 = state_69515;
var statearr_69537_69575 = state_69515__$1;
(statearr_69537_69575[(2)] = null);

(statearr_69537_69575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69516 === (5))){
var inst_69414 = (state_69515[(13)]);
var inst_69411 = (state_69515[(11)]);
var inst_69404 = (state_69515[(15)]);
var inst_69413 = (state_69515[(14)]);
var inst_69405 = (state_69515[(8)]);
var inst_69412 = (state_69515[(20)]);
var inst_69420 = cljs.core._nth.call(null,inst_69412,inst_69414);
var inst_69421 = cljs.core.nth.call(null,inst_69420,(0),null);
var inst_69422 = cljs.core.nth.call(null,inst_69420,(1),null);
var inst_69424 = soma_demo.core.create_piece_mesh.call(null,inst_69421,inst_69422);
var inst_69425 = (inst_69421 / cols);
var inst_69426 = Math.floor(inst_69425);
var inst_69427 = cljs.core.mod.call(null,inst_69421,cols);
var inst_69428 = ((3) * soma_demo.core.cubesize);
var inst_69429 = ((2) * soma_demo.core.cubesize);
var inst_69430 = soma_demo.core.place_piece.call(null,inst_69404,cols,inst_69428,inst_69429,inst_69427,inst_69426);
var inst_69431 = cljs.core.nth.call(null,inst_69430,(0),null);
var inst_69432 = cljs.core.nth.call(null,inst_69430,(1),null);
var inst_69433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69434 = [inst_69404,cols];
var inst_69435 = (new cljs.core.PersistentVector(null,2,(5),inst_69433,inst_69434,null));
var inst_69436 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69437 = [inst_69427,inst_69426];
var inst_69438 = (new cljs.core.PersistentVector(null,2,(5),inst_69436,inst_69437,null));
var inst_69439 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69440 = [inst_69431,inst_69432];
var inst_69441 = (new cljs.core.PersistentVector(null,2,(5),inst_69439,inst_69440,null));
var inst_69442 = cljs.core.println.call(null,inst_69435,"placing piece ",inst_69421," at grid ",inst_69438," in pos ",inst_69441);
var inst_69444 = inst_69424.position;
var inst_69445 = inst_69444.set(inst_69431,inst_69432,(0));
var inst_69447 = inst_69424.scale;
var inst_69448 = inst_69447.set((1),(1),(1));
var inst_69449 = inst_69405.add(inst_69424);
var inst_69450 = cljs.core.deref.call(null,pieces);
var inst_69451 = cljs.core.conj.call(null,inst_69450,inst_69424);
var inst_69452 = cljs.core.reset_BANG_.call(null,pieces,inst_69451);
var inst_69453 = (inst_69414 + (1));
var tmp69532 = inst_69411;
var tmp69533 = inst_69413;
var tmp69534 = inst_69412;
var inst_69411__$1 = tmp69532;
var inst_69412__$1 = tmp69534;
var inst_69413__$1 = tmp69533;
var inst_69414__$1 = inst_69453;
var state_69515__$1 = (function (){var statearr_69538 = state_69515;
(statearr_69538[(22)] = inst_69445);

(statearr_69538[(13)] = inst_69414__$1);

(statearr_69538[(11)] = inst_69411__$1);

(statearr_69538[(23)] = inst_69442);

(statearr_69538[(14)] = inst_69413__$1);

(statearr_69538[(24)] = inst_69452);

(statearr_69538[(25)] = inst_69448);

(statearr_69538[(26)] = inst_69449);

(statearr_69538[(20)] = inst_69412__$1);

return statearr_69538;
})();
var statearr_69539_69576 = state_69515__$1;
(statearr_69539_69576[(2)] = null);

(statearr_69539_69576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69516 === (10))){
var inst_69505 = (state_69515[(2)]);
var state_69515__$1 = state_69515;
var statearr_69540_69577 = state_69515__$1;
(statearr_69540_69577[(2)] = inst_69505);

(statearr_69540_69577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69516 === (8))){
var inst_69456 = (state_69515[(12)]);
var inst_69458 = cljs.core.chunked_seq_QMARK_.call(null,inst_69456);
var state_69515__$1 = state_69515;
if(inst_69458){
var statearr_69541_69578 = state_69515__$1;
(statearr_69541_69578[(1)] = (11));

} else {
var statearr_69542_69579 = state_69515__$1;
(statearr_69542_69579[(1)] = (12));

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
});})(c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
;
return ((function (switch__19321__auto__,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function() {
var soma_demo$core$state_machine__19322__auto__ = null;
var soma_demo$core$state_machine__19322__auto____0 = (function (){
var statearr_69546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69546[(0)] = soma_demo$core$state_machine__19322__auto__);

(statearr_69546[(1)] = (1));

return statearr_69546;
});
var soma_demo$core$state_machine__19322__auto____1 = (function (state_69515){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_69515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e69547){if((e69547 instanceof Object)){
var ex__19325__auto__ = e69547;
var statearr_69548_69580 = state_69515;
(statearr_69548_69580[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69581 = state_69515;
state_69515 = G__69581;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
soma_demo$core$state_machine__19322__auto__ = function(state_69515){
switch(arguments.length){
case 0:
return soma_demo$core$state_machine__19322__auto____0.call(this);
case 1:
return soma_demo$core$state_machine__19322__auto____1.call(this,state_69515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$core$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$core$state_machine__19322__auto____0;
soma_demo$core$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$core$state_machine__19322__auto____1;
return soma_demo$core$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var state__19344__auto__ = (function (){var statearr_69549 = f__19343__auto__.call(null);
(statearr_69549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_69549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
);

return c__19342__auto__;
});

soma_demo.core.display_pieces_from_url.cljs$lang$maxFixedArity = 5;
soma_demo.core.move_piece = (function soma_demo$core$move_piece(part,p__69582){
var vec__69592 = p__69582;
var dx = cljs.core.nth.call(null,vec__69592,(0),null);
var dy = cljs.core.nth.call(null,vec__69592,(1),null);
var dz = cljs.core.nth.call(null,vec__69592,(2),null);
var iter__17090__auto__ = ((function (vec__69592,dx,dy,dz){
return (function soma_demo$core$move_piece_$_iter__69593(s__69594){
return (new cljs.core.LazySeq(null,((function (vec__69592,dx,dy,dz){
return (function (){
var s__69594__$1 = s__69594;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__69594__$1);
if(temp__4425__auto__){
var s__69594__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69594__$2)){
var c__17088__auto__ = cljs.core.chunk_first.call(null,s__69594__$2);
var size__17089__auto__ = cljs.core.count.call(null,c__17088__auto__);
var b__69596 = cljs.core.chunk_buffer.call(null,size__17089__auto__);
if((function (){var i__69595 = (0);
while(true){
if((i__69595 < size__17089__auto__)){
var vec__69599 = cljs.core._nth.call(null,c__17088__auto__,i__69595);
var x = cljs.core.nth.call(null,vec__69599,(0),null);
var y = cljs.core.nth.call(null,vec__69599,(1),null);
var z = cljs.core.nth.call(null,vec__69599,(2),null);
cljs.core.chunk_append.call(null,b__69596,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy),(z + dz)], null));

var G__69601 = (i__69595 + (1));
i__69595 = G__69601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69596),soma_demo$core$move_piece_$_iter__69593.call(null,cljs.core.chunk_rest.call(null,s__69594__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69596),null);
}
} else {
var vec__69600 = cljs.core.first.call(null,s__69594__$2);
var x = cljs.core.nth.call(null,vec__69600,(0),null);
var y = cljs.core.nth.call(null,vec__69600,(1),null);
var z = cljs.core.nth.call(null,vec__69600,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy),(z + dz)], null),soma_demo$core$move_piece_$_iter__69593.call(null,cljs.core.rest.call(null,s__69594__$2)));
}
} else {
return null;
}
break;
}
});})(vec__69592,dx,dy,dz))
,null,null));
});})(vec__69592,dx,dy,dz))
;
return iter__17090__auto__.call(null,part);
});
/**
 * returns a point at the center of a piece's coordinates 
 */
soma_demo.core.center_of_piece = (function soma_demo$core$center_of_piece(p){
var vec__69607 = cljs.core.reduce.call(null,(function (p__69608,p__69609){
var vec__69610 = p__69608;
var ax = cljs.core.nth.call(null,vec__69610,(0),null);
var ay = cljs.core.nth.call(null,vec__69610,(1),null);
var az = cljs.core.nth.call(null,vec__69610,(2),null);
var vec__69611 = p__69609;
var px = cljs.core.nth.call(null,vec__69611,(0),null);
var py = cljs.core.nth.call(null,vec__69611,(1),null);
var pz = cljs.core.nth.call(null,vec__69611,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ax + px),(ay + py),(az + pz)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),p);
var tx = cljs.core.nth.call(null,vec__69607,(0),null);
var ty = cljs.core.nth.call(null,vec__69607,(1),null);
var tz = cljs.core.nth.call(null,vec__69607,(2),null);
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
return (function (mv,p__69628){
var vec__69629 = p__69628;
var _ = cljs.core.nth.call(null,vec__69629,(0),null);
var idv = cljs.core.nth.call(null,vec__69629,(1),null);
var vec__69630 = cljs.core.nth.call(null,vec__69629,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__69630,(0),null);
var coords = cljs.core.nthnext.call(null,vec__69630,(1));
return cljs.core.assoc.call(null,mv,idv,cljs.core.conj.call(null,cljs.core.get.call(null,mv,idv,cljs.core.PersistentVector.EMPTY),coords));
});})($,$__$1))
,cljs.core.PersistentArrayMap.EMPTY,$__$1);
return $__$2;
})();
var sln_geom = (new THREE.Object3D());
var pieces = (function (){var iter__17090__auto__ = ((function (sln_geom,resmap){
return (function soma_demo$core$create_cube_sln_$_iter__69631(s__69632){
return (new cljs.core.LazySeq(null,((function (sln_geom,resmap){
return (function (){
var s__69632__$1 = s__69632;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__69632__$1);
if(temp__4425__auto__){
var s__69632__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69632__$2)){
var c__17088__auto__ = cljs.core.chunk_first.call(null,s__69632__$2);
var size__17089__auto__ = cljs.core.count.call(null,c__17088__auto__);
var b__69634 = cljs.core.chunk_buffer.call(null,size__17089__auto__);
if((function (){var i__69633 = (0);
while(true){
if((i__69633 < size__17089__auto__)){
var vec__69639 = cljs.core._nth.call(null,c__17088__auto__,i__69633);
var idx = cljs.core.nth.call(null,vec__69639,(0),null);
var v = cljs.core.nth.call(null,vec__69639,(1),null);
cljs.core.chunk_append.call(null,b__69634,(function (){var piece_geom = soma_demo.core.create_piece_mesh.call(null,idx,v);
var G__69640_69644 = piece_geom;
G__69640_69644.position.set((0),(0),(0));


piece_geom.updateMatrix();

sln_geom.add(piece_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),piece_geom,new cljs.core.Keyword(null,"parts","parts",849007691),v], null);
})());

var G__69645 = (i__69633 + (1));
i__69633 = G__69645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69634),soma_demo$core$create_cube_sln_$_iter__69631.call(null,cljs.core.chunk_rest.call(null,s__69632__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69634),null);
}
} else {
var vec__69641 = cljs.core.first.call(null,s__69632__$2);
var idx = cljs.core.nth.call(null,vec__69641,(0),null);
var v = cljs.core.nth.call(null,vec__69641,(1),null);
return cljs.core.cons.call(null,(function (){var piece_geom = soma_demo.core.create_piece_mesh.call(null,idx,v);
var G__69642_69646 = piece_geom;
G__69642_69646.position.set((0),(0),(0));


piece_geom.updateMatrix();

sln_geom.add(piece_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),piece_geom,new cljs.core.Keyword(null,"parts","parts",849007691),v], null);
})(),soma_demo$core$create_cube_sln_$_iter__69631.call(null,cljs.core.rest.call(null,s__69632__$2)));
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
var G__69643_69647 = sln_geom;
G__69643_69647.position.set((- (soma_demo.core.cubesize * 1.5)),(- (soma_demo.core.cubesize * 1.5)),(- (soma_demo.core.cubesize * 1.5)));


outer_cube.add(sln_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),outer_cube,new cljs.core.Keyword(null,"pieces","pieces",-1436634023),pieces], null);
});
soma_demo.core.animate_explode_part = (function soma_demo$core$animate_explode_part(geom,parts,v){
var vec__69650 = soma_demo.core.explode_translation.call(null,parts,v);
var x = cljs.core.nth.call(null,vec__69650,(0),null);
var y = cljs.core.nth.call(null,vec__69650,(1),null);
var z = cljs.core.nth.call(null,vec__69650,(2),null);
var G__69651 = geom;
G__69651.position.set(x,y,z);

return G__69651;
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

soma_demo.core.start_animation.call(null,((function (canvas_element,width,height,scene,camera,renderer,cubes){
return (function (abs,rel){
var seq__69886 = cljs.core.seq.call(null,cljs.core.deref.call(null,cubes));
var chunk__69887 = null;
var count__69888 = (0);
var i__69889 = (0);
while(true){
if((i__69889 < count__69888)){
var map__69890 = cljs.core._nth.call(null,chunk__69887,i__69889);
var map__69890__$1 = ((((!((map__69890 == null)))?((((map__69890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69890):map__69890);
var cube_geom = cljs.core.get.call(null,map__69890__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var cube_pieces = cljs.core.get.call(null,map__69890__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
soma_demo.core.animate_spin.call(null,cube_geom,abs,rel);

var seq__69892_70120 = cljs.core.seq.call(null,cube_pieces);
var chunk__69893_70121 = null;
var count__69894_70122 = (0);
var i__69895_70123 = (0);
while(true){
if((i__69895_70123 < count__69894_70122)){
var map__69896_70124 = cljs.core._nth.call(null,chunk__69893_70121,i__69895_70123);
var map__69896_70125__$1 = ((((!((map__69896_70124 == null)))?((((map__69896_70124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69896_70124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69896_70124):map__69896_70124);
var piece_geom_70126 = cljs.core.get.call(null,map__69896_70125__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_70127 = cljs.core.get.call(null,map__69896_70125__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
soma_demo.core.animate_explode_part.call(null,piece_geom_70126,parts_70127,Math.max((0),((200) * Math.sin((abs / (2000))))));

var G__70128 = seq__69892_70120;
var G__70129 = chunk__69893_70121;
var G__70130 = count__69894_70122;
var G__70131 = (i__69895_70123 + (1));
seq__69892_70120 = G__70128;
chunk__69893_70121 = G__70129;
count__69894_70122 = G__70130;
i__69895_70123 = G__70131;
continue;
} else {
var temp__4425__auto___70132 = cljs.core.seq.call(null,seq__69892_70120);
if(temp__4425__auto___70132){
var seq__69892_70133__$1 = temp__4425__auto___70132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69892_70133__$1)){
var c__17121__auto___70134 = cljs.core.chunk_first.call(null,seq__69892_70133__$1);
var G__70135 = cljs.core.chunk_rest.call(null,seq__69892_70133__$1);
var G__70136 = c__17121__auto___70134;
var G__70137 = cljs.core.count.call(null,c__17121__auto___70134);
var G__70138 = (0);
seq__69892_70120 = G__70135;
chunk__69893_70121 = G__70136;
count__69894_70122 = G__70137;
i__69895_70123 = G__70138;
continue;
} else {
var map__69898_70139 = cljs.core.first.call(null,seq__69892_70133__$1);
var map__69898_70140__$1 = ((((!((map__69898_70139 == null)))?((((map__69898_70139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69898_70139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69898_70139):map__69898_70139);
var piece_geom_70141 = cljs.core.get.call(null,map__69898_70140__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_70142 = cljs.core.get.call(null,map__69898_70140__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
soma_demo.core.animate_explode_part.call(null,piece_geom_70141,parts_70142,Math.max((0),((200) * Math.sin((abs / (2000))))));

var G__70143 = cljs.core.next.call(null,seq__69892_70133__$1);
var G__70144 = null;
var G__70145 = (0);
var G__70146 = (0);
seq__69892_70120 = G__70143;
chunk__69893_70121 = G__70144;
count__69894_70122 = G__70145;
i__69895_70123 = G__70146;
continue;
}
} else {
}
}
break;
}

var G__70147 = seq__69886;
var G__70148 = chunk__69887;
var G__70149 = count__69888;
var G__70150 = (i__69889 + (1));
seq__69886 = G__70147;
chunk__69887 = G__70148;
count__69888 = G__70149;
i__69889 = G__70150;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__69886);
if(temp__4425__auto__){
var seq__69886__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69886__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__69886__$1);
var G__70151 = cljs.core.chunk_rest.call(null,seq__69886__$1);
var G__70152 = c__17121__auto__;
var G__70153 = cljs.core.count.call(null,c__17121__auto__);
var G__70154 = (0);
seq__69886 = G__70151;
chunk__69887 = G__70152;
count__69888 = G__70153;
i__69889 = G__70154;
continue;
} else {
var map__69900 = cljs.core.first.call(null,seq__69886__$1);
var map__69900__$1 = ((((!((map__69900 == null)))?((((map__69900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69900):map__69900);
var cube_geom = cljs.core.get.call(null,map__69900__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var cube_pieces = cljs.core.get.call(null,map__69900__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
soma_demo.core.animate_spin.call(null,cube_geom,abs,rel);

var seq__69902_70155 = cljs.core.seq.call(null,cube_pieces);
var chunk__69903_70156 = null;
var count__69904_70157 = (0);
var i__69905_70158 = (0);
while(true){
if((i__69905_70158 < count__69904_70157)){
var map__69906_70159 = cljs.core._nth.call(null,chunk__69903_70156,i__69905_70158);
var map__69906_70160__$1 = ((((!((map__69906_70159 == null)))?((((map__69906_70159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69906_70159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69906_70159):map__69906_70159);
var piece_geom_70161 = cljs.core.get.call(null,map__69906_70160__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_70162 = cljs.core.get.call(null,map__69906_70160__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
soma_demo.core.animate_explode_part.call(null,piece_geom_70161,parts_70162,Math.max((0),((200) * Math.sin((abs / (2000))))));

var G__70163 = seq__69902_70155;
var G__70164 = chunk__69903_70156;
var G__70165 = count__69904_70157;
var G__70166 = (i__69905_70158 + (1));
seq__69902_70155 = G__70163;
chunk__69903_70156 = G__70164;
count__69904_70157 = G__70165;
i__69905_70158 = G__70166;
continue;
} else {
var temp__4425__auto___70167__$1 = cljs.core.seq.call(null,seq__69902_70155);
if(temp__4425__auto___70167__$1){
var seq__69902_70168__$1 = temp__4425__auto___70167__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69902_70168__$1)){
var c__17121__auto___70169 = cljs.core.chunk_first.call(null,seq__69902_70168__$1);
var G__70170 = cljs.core.chunk_rest.call(null,seq__69902_70168__$1);
var G__70171 = c__17121__auto___70169;
var G__70172 = cljs.core.count.call(null,c__17121__auto___70169);
var G__70173 = (0);
seq__69902_70155 = G__70170;
chunk__69903_70156 = G__70171;
count__69904_70157 = G__70172;
i__69905_70158 = G__70173;
continue;
} else {
var map__69908_70174 = cljs.core.first.call(null,seq__69902_70168__$1);
var map__69908_70175__$1 = ((((!((map__69908_70174 == null)))?((((map__69908_70174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69908_70174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69908_70174):map__69908_70174);
var piece_geom_70176 = cljs.core.get.call(null,map__69908_70175__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_70177 = cljs.core.get.call(null,map__69908_70175__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
soma_demo.core.animate_explode_part.call(null,piece_geom_70176,parts_70177,Math.max((0),((200) * Math.sin((abs / (2000))))));

var G__70178 = cljs.core.next.call(null,seq__69902_70168__$1);
var G__70179 = null;
var G__70180 = (0);
var G__70181 = (0);
seq__69902_70155 = G__70178;
chunk__69903_70156 = G__70179;
count__69904_70157 = G__70180;
i__69905_70158 = G__70181;
continue;
}
} else {
}
}
break;
}

var G__70182 = cljs.core.next.call(null,seq__69886__$1);
var G__70183 = null;
var G__70184 = (0);
var G__70185 = (0);
seq__69886 = G__70182;
chunk__69887 = G__70183;
count__69888 = G__70184;
i__69889 = G__70185;
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

var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__,canvas_element,width,height,scene,camera,renderer,cubes){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto__,canvas_element,width,height,scene,camera,renderer,cubes){
return (function (state_70063){
var state_val_70064 = (state_70063[(1)]);
if((state_val_70064 === (7))){
var inst_70059 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
var statearr_70065_70186 = state_70063__$1;
(statearr_70065_70186[(2)] = inst_70059);

(statearr_70065_70186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (20))){
var inst_69989 = (state_70063[(7)]);
var inst_69993 = cljs.core.chunk_first.call(null,inst_69989);
var inst_69994 = cljs.core.chunk_rest.call(null,inst_69989);
var inst_69995 = cljs.core.count.call(null,inst_69993);
var inst_69925 = inst_69994;
var inst_69926 = inst_69993;
var inst_69927 = inst_69995;
var inst_69928 = (0);
var state_70063__$1 = (function (){var statearr_70066 = state_70063;
(statearr_70066[(8)] = inst_69925);

(statearr_70066[(9)] = inst_69926);

(statearr_70066[(10)] = inst_69927);

(statearr_70066[(11)] = inst_69928);

return statearr_70066;
})();
var statearr_70067_70187 = state_70063__$1;
(statearr_70067_70187[(2)] = null);

(statearr_70067_70187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (27))){
var state_70063__$1 = state_70063;
var statearr_70068_70188 = state_70063__$1;
(statearr_70068_70188[(2)] = false);

(statearr_70068_70188[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (1))){
var inst_69910 = soma_demo.solver_client.fetch_answerset.call(null,url);
var state_70063__$1 = state_70063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70063__$1,(2),inst_69910);
} else {
if((state_val_70064 === (24))){
var state_70063__$1 = state_70063;
var statearr_70069_70189 = state_70063__$1;
(statearr_70069_70189[(2)] = false);

(statearr_70069_70189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (4))){
var inst_70061 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70063__$1,inst_70061);
} else {
if((state_val_70064 === (15))){
var inst_69940 = (state_70063[(12)]);
var state_70063__$1 = state_70063;
var statearr_70070_70190 = state_70063__$1;
(statearr_70070_70190[(2)] = inst_69940);

(statearr_70070_70190[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (21))){
var inst_70005 = (state_70063[(13)]);
var inst_70000 = (state_70063[(14)]);
var inst_69989 = (state_70063[(7)]);
var inst_69999 = cljs.core.first.call(null,inst_69989);
var inst_70000__$1 = cljs.core.nth.call(null,inst_69999,(0),null);
var inst_70001 = cljs.core.nth.call(null,inst_69999,(1),null);
var inst_70002 = cljs.core.println.call(null,"creating",inst_70000__$1," for solution ",inst_70001);
var inst_70005__$1 = soma_demo.core.create_cube_sln.call(null,inst_70001);
var inst_70007 = (inst_70005__$1 == null);
var inst_70008 = cljs.core.not.call(null,inst_70007);
var state_70063__$1 = (function (){var statearr_70071 = state_70063;
(statearr_70071[(13)] = inst_70005__$1);

(statearr_70071[(15)] = inst_70002);

(statearr_70071[(14)] = inst_70000__$1);

return statearr_70071;
})();
if(inst_70008){
var statearr_70072_70191 = state_70063__$1;
(statearr_70072_70191[(1)] = (23));

} else {
var statearr_70073_70192 = state_70063__$1;
(statearr_70073_70192[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (31))){
var inst_69917 = (state_70063[(16)]);
var inst_70000 = (state_70063[(14)]);
var inst_69915 = (state_70063[(17)]);
var inst_69989 = (state_70063[(7)]);
var inst_69918 = (state_70063[(18)]);
var inst_70025 = (state_70063[(2)]);
var inst_70026 = cljs.core.get.call(null,inst_70025,new cljs.core.Keyword(null,"geom","geom",1207084371));
var inst_70027 = cljs.core.get.call(null,inst_70025,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var inst_70028 = (inst_70000 / cols);
var inst_70029 = Math.floor(inst_70028);
var inst_70030 = cljs.core.mod.call(null,inst_70000,cols);
var inst_70031 = ((2) * soma_demo.core.cubesize);
var inst_70032 = ((2) * soma_demo.core.cubesize);
var inst_70033 = soma_demo.core.place_piece.call(null,inst_69915,cols,inst_70031,inst_70032,inst_70030,inst_70029);
var inst_70034 = cljs.core.nth.call(null,inst_70033,(0),null);
var inst_70035 = cljs.core.nth.call(null,inst_70033,(1),null);
var inst_70036 = cljs.core.println.call(null," creating ",inst_70025);
var inst_70038 = inst_70026.position;
var inst_70039 = inst_70038.set(inst_70034,inst_70035,(0));
var inst_70041 = inst_70026.scale;
var inst_70042 = inst_70041.set(inst_69917,inst_69917,inst_69917);
var inst_70043 = inst_69918.add(inst_70026);
var inst_70044 = cljs.core.deref.call(null,cubes);
var inst_70045 = cljs.core.conj.call(null,inst_70044,inst_70025);
var inst_70046 = cljs.core.reset_BANG_.call(null,cubes,inst_70045);
var inst_70048 = inst_69918.scale;
var inst_70049 = inst_70048.set(ws_scale,ws_scale,ws_scale);
var inst_70050 = scene.add(inst_69918);
var inst_70051 = cljs.core.next.call(null,inst_69989);
var inst_69925 = inst_70051;
var inst_69926 = null;
var inst_69927 = (0);
var inst_69928 = (0);
var state_70063__$1 = (function (){var statearr_70074 = state_70063;
(statearr_70074[(8)] = inst_69925);

(statearr_70074[(19)] = inst_70043);

(statearr_70074[(20)] = inst_70046);

(statearr_70074[(21)] = inst_70050);

(statearr_70074[(22)] = inst_70036);

(statearr_70074[(9)] = inst_69926);

(statearr_70074[(10)] = inst_69927);

(statearr_70074[(11)] = inst_69928);

(statearr_70074[(23)] = inst_70049);

(statearr_70074[(24)] = inst_70027);

(statearr_70074[(25)] = inst_70042);

(statearr_70074[(26)] = inst_70039);

return statearr_70074;
})();
var statearr_70075_70193 = state_70063__$1;
(statearr_70075_70193[(2)] = null);

(statearr_70075_70193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (13))){
var inst_69952 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
var statearr_70076_70194 = state_70063__$1;
(statearr_70076_70194[(2)] = inst_69952);

(statearr_70076_70194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (22))){
var inst_70054 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
var statearr_70077_70195 = state_70063__$1;
(statearr_70077_70195[(2)] = inst_70054);

(statearr_70077_70195[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (29))){
var inst_70005 = (state_70063[(13)]);
var inst_70022 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70005);
var state_70063__$1 = state_70063;
var statearr_70078_70196 = state_70063__$1;
(statearr_70078_70196[(2)] = inst_70022);

(statearr_70078_70196[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (6))){
var inst_69925 = (state_70063[(8)]);
var inst_69989 = (state_70063[(7)]);
var inst_69989__$1 = cljs.core.seq.call(null,inst_69925);
var state_70063__$1 = (function (){var statearr_70079 = state_70063;
(statearr_70079[(7)] = inst_69989__$1);

return statearr_70079;
})();
if(inst_69989__$1){
var statearr_70080_70197 = state_70063__$1;
(statearr_70080_70197[(1)] = (17));

} else {
var statearr_70081_70198 = state_70063__$1;
(statearr_70081_70198[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (28))){
var inst_70017 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
var statearr_70082_70199 = state_70063__$1;
(statearr_70082_70199[(2)] = inst_70017);

(statearr_70082_70199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (25))){
var inst_70020 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
if(cljs.core.truth_(inst_70020)){
var statearr_70083_70200 = state_70063__$1;
(statearr_70083_70200[(1)] = (29));

} else {
var statearr_70084_70201 = state_70063__$1;
(statearr_70084_70201[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (17))){
var inst_69989 = (state_70063[(7)]);
var inst_69991 = cljs.core.chunked_seq_QMARK_.call(null,inst_69989);
var state_70063__$1 = state_70063;
if(inst_69991){
var statearr_70085_70202 = state_70063__$1;
(statearr_70085_70202[(1)] = (20));

} else {
var statearr_70086_70203 = state_70063__$1;
(statearr_70086_70203[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (3))){
var inst_69927 = (state_70063[(10)]);
var inst_69928 = (state_70063[(11)]);
var inst_69930 = (inst_69928 < inst_69927);
var inst_69931 = inst_69930;
var state_70063__$1 = state_70063;
if(cljs.core.truth_(inst_69931)){
var statearr_70087_70204 = state_70063__$1;
(statearr_70087_70204[(1)] = (5));

} else {
var statearr_70088_70205 = state_70063__$1;
(statearr_70088_70205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (12))){
var state_70063__$1 = state_70063;
var statearr_70089_70206 = state_70063__$1;
(statearr_70089_70206[(2)] = false);

(statearr_70089_70206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (2))){
var inst_69915 = (state_70063[(17)]);
var inst_69912 = (state_70063[(2)]);
var inst_69913 = cljs.core.count.call(null,inst_69912);
var inst_69914 = (inst_69913 / cols);
var inst_69915__$1 = Math.ceil(inst_69914);
var inst_69916 = ((1) / inst_69915__$1);
var inst_69917 = ((5) * inst_69916);
var inst_69918 = (new THREE.Object3D());
var inst_69923 = cljs.core.map_indexed.call(null,cljs.core.vector,inst_69912);
var inst_69924 = cljs.core.seq.call(null,inst_69923);
var inst_69925 = inst_69924;
var inst_69926 = null;
var inst_69927 = (0);
var inst_69928 = (0);
var state_70063__$1 = (function (){var statearr_70090 = state_70063;
(statearr_70090[(8)] = inst_69925);

(statearr_70090[(16)] = inst_69917);

(statearr_70090[(9)] = inst_69926);

(statearr_70090[(10)] = inst_69927);

(statearr_70090[(11)] = inst_69928);

(statearr_70090[(17)] = inst_69915__$1);

(statearr_70090[(18)] = inst_69918);

return statearr_70090;
})();
var statearr_70091_70207 = state_70063__$1;
(statearr_70091_70207[(2)] = null);

(statearr_70091_70207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (23))){
var inst_70005 = (state_70063[(13)]);
var inst_70010 = inst_70005.cljs$lang$protocol_mask$partition0$;
var inst_70011 = (inst_70010 & (64));
var inst_70012 = inst_70005.cljs$core$ISeq$;
var inst_70013 = (inst_70011) || (inst_70012);
var state_70063__$1 = state_70063;
if(cljs.core.truth_(inst_70013)){
var statearr_70092_70208 = state_70063__$1;
(statearr_70092_70208[(1)] = (26));

} else {
var statearr_70093_70209 = state_70063__$1;
(statearr_70093_70209[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (19))){
var inst_70057 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
var statearr_70094_70210 = state_70063__$1;
(statearr_70094_70210[(2)] = inst_70057);

(statearr_70094_70210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (11))){
var state_70063__$1 = state_70063;
var statearr_70095_70211 = state_70063__$1;
(statearr_70095_70211[(2)] = true);

(statearr_70095_70211[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (9))){
var state_70063__$1 = state_70063;
var statearr_70096_70212 = state_70063__$1;
(statearr_70096_70212[(2)] = false);

(statearr_70096_70212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (5))){
var inst_69926 = (state_70063[(9)]);
var inst_69928 = (state_70063[(11)]);
var inst_69935 = (state_70063[(27)]);
var inst_69940 = (state_70063[(12)]);
var inst_69934 = cljs.core._nth.call(null,inst_69926,inst_69928);
var inst_69935__$1 = cljs.core.nth.call(null,inst_69934,(0),null);
var inst_69936 = cljs.core.nth.call(null,inst_69934,(1),null);
var inst_69937 = cljs.core.println.call(null,"creating",inst_69935__$1," for solution ",inst_69936);
var inst_69940__$1 = soma_demo.core.create_cube_sln.call(null,inst_69936);
var inst_69942 = (inst_69940__$1 == null);
var inst_69943 = cljs.core.not.call(null,inst_69942);
var state_70063__$1 = (function (){var statearr_70097 = state_70063;
(statearr_70097[(28)] = inst_69937);

(statearr_70097[(27)] = inst_69935__$1);

(statearr_70097[(12)] = inst_69940__$1);

return statearr_70097;
})();
if(inst_69943){
var statearr_70098_70213 = state_70063__$1;
(statearr_70098_70213[(1)] = (8));

} else {
var statearr_70099_70214 = state_70063__$1;
(statearr_70099_70214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (14))){
var inst_69940 = (state_70063[(12)]);
var inst_69957 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69940);
var state_70063__$1 = state_70063;
var statearr_70103_70215 = state_70063__$1;
(statearr_70103_70215[(2)] = inst_69957);

(statearr_70103_70215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (26))){
var state_70063__$1 = state_70063;
var statearr_70104_70216 = state_70063__$1;
(statearr_70104_70216[(2)] = true);

(statearr_70104_70216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (16))){
var inst_69925 = (state_70063[(8)]);
var inst_69917 = (state_70063[(16)]);
var inst_69926 = (state_70063[(9)]);
var inst_69927 = (state_70063[(10)]);
var inst_69928 = (state_70063[(11)]);
var inst_69915 = (state_70063[(17)]);
var inst_69935 = (state_70063[(27)]);
var inst_69918 = (state_70063[(18)]);
var inst_69960 = (state_70063[(2)]);
var inst_69961 = cljs.core.get.call(null,inst_69960,new cljs.core.Keyword(null,"geom","geom",1207084371));
var inst_69962 = cljs.core.get.call(null,inst_69960,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var inst_69963 = (inst_69935 / cols);
var inst_69964 = Math.floor(inst_69963);
var inst_69965 = cljs.core.mod.call(null,inst_69935,cols);
var inst_69966 = ((2) * soma_demo.core.cubesize);
var inst_69967 = ((2) * soma_demo.core.cubesize);
var inst_69968 = soma_demo.core.place_piece.call(null,inst_69915,cols,inst_69966,inst_69967,inst_69965,inst_69964);
var inst_69969 = cljs.core.nth.call(null,inst_69968,(0),null);
var inst_69970 = cljs.core.nth.call(null,inst_69968,(1),null);
var inst_69971 = cljs.core.println.call(null," creating ",inst_69960);
var inst_69973 = inst_69961.position;
var inst_69974 = inst_69973.set(inst_69969,inst_69970,(0));
var inst_69976 = inst_69961.scale;
var inst_69977 = inst_69976.set(inst_69917,inst_69917,inst_69917);
var inst_69978 = inst_69918.add(inst_69961);
var inst_69979 = cljs.core.deref.call(null,cubes);
var inst_69980 = cljs.core.conj.call(null,inst_69979,inst_69960);
var inst_69981 = cljs.core.reset_BANG_.call(null,cubes,inst_69980);
var inst_69983 = inst_69918.scale;
var inst_69984 = inst_69983.set(ws_scale,ws_scale,ws_scale);
var inst_69985 = scene.add(inst_69918);
var inst_69986 = (inst_69928 + (1));
var tmp70100 = inst_69925;
var tmp70101 = inst_69926;
var tmp70102 = inst_69927;
var inst_69925__$1 = tmp70100;
var inst_69926__$1 = tmp70101;
var inst_69927__$1 = tmp70102;
var inst_69928__$1 = inst_69986;
var state_70063__$1 = (function (){var statearr_70105 = state_70063;
(statearr_70105[(8)] = inst_69925__$1);

(statearr_70105[(29)] = inst_69981);

(statearr_70105[(30)] = inst_69971);

(statearr_70105[(31)] = inst_69985);

(statearr_70105[(9)] = inst_69926__$1);

(statearr_70105[(10)] = inst_69927__$1);

(statearr_70105[(11)] = inst_69928__$1);

(statearr_70105[(32)] = inst_69962);

(statearr_70105[(33)] = inst_69977);

(statearr_70105[(34)] = inst_69984);

(statearr_70105[(35)] = inst_69978);

(statearr_70105[(36)] = inst_69974);

return statearr_70105;
})();
var statearr_70106_70217 = state_70063__$1;
(statearr_70106_70217[(2)] = null);

(statearr_70106_70217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (30))){
var inst_70005 = (state_70063[(13)]);
var state_70063__$1 = state_70063;
var statearr_70107_70218 = state_70063__$1;
(statearr_70107_70218[(2)] = inst_70005);

(statearr_70107_70218[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (10))){
var inst_69955 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
if(cljs.core.truth_(inst_69955)){
var statearr_70108_70219 = state_70063__$1;
(statearr_70108_70219[(1)] = (14));

} else {
var statearr_70109_70220 = state_70063__$1;
(statearr_70109_70220[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (18))){
var state_70063__$1 = state_70063;
var statearr_70110_70221 = state_70063__$1;
(statearr_70110_70221[(2)] = null);

(statearr_70110_70221[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (8))){
var inst_69940 = (state_70063[(12)]);
var inst_69945 = inst_69940.cljs$lang$protocol_mask$partition0$;
var inst_69946 = (inst_69945 & (64));
var inst_69947 = inst_69940.cljs$core$ISeq$;
var inst_69948 = (inst_69946) || (inst_69947);
var state_70063__$1 = state_70063;
if(cljs.core.truth_(inst_69948)){
var statearr_70111_70222 = state_70063__$1;
(statearr_70111_70222[(1)] = (11));

} else {
var statearr_70112_70223 = state_70063__$1;
(statearr_70112_70223[(1)] = (12));

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
});})(c__19342__auto__,canvas_element,width,height,scene,camera,renderer,cubes))
;
return ((function (switch__19321__auto__,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,cubes){
return (function() {
var soma_demo$core$display_sln_from_url_$_state_machine__19322__auto__ = null;
var soma_demo$core$display_sln_from_url_$_state_machine__19322__auto____0 = (function (){
var statearr_70116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70116[(0)] = soma_demo$core$display_sln_from_url_$_state_machine__19322__auto__);

(statearr_70116[(1)] = (1));

return statearr_70116;
});
var soma_demo$core$display_sln_from_url_$_state_machine__19322__auto____1 = (function (state_70063){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_70063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e70117){if((e70117 instanceof Object)){
var ex__19325__auto__ = e70117;
var statearr_70118_70224 = state_70063;
(statearr_70118_70224[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70225 = state_70063;
state_70063 = G__70225;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
soma_demo$core$display_sln_from_url_$_state_machine__19322__auto__ = function(state_70063){
switch(arguments.length){
case 0:
return soma_demo$core$display_sln_from_url_$_state_machine__19322__auto____0.call(this);
case 1:
return soma_demo$core$display_sln_from_url_$_state_machine__19322__auto____1.call(this,state_70063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$core$display_sln_from_url_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$core$display_sln_from_url_$_state_machine__19322__auto____0;
soma_demo$core$display_sln_from_url_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$core$display_sln_from_url_$_state_machine__19322__auto____1;
return soma_demo$core$display_sln_from_url_$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,cubes))
})();
var state__19344__auto__ = (function (){var statearr_70119 = f__19343__auto__.call(null);
(statearr_70119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_70119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__,canvas_element,width,height,scene,camera,renderer,cubes))
);

return c__19342__auto__;
});
soma_demo.core.on_js_reload = (function soma_demo$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1446827513856