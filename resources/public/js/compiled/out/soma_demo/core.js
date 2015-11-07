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
var G__78614_78617 = dir_light;
G__78614_78617.color.setHSL(0.6,(1),0.6);


var G__78615_78618 = dir_light;
G__78615_78618.groundColor.setHSL(0.095,(1),0.8);


var G__78616_78619 = dir_light;
G__78616_78619.position.set((0),(-1000),(0));


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

var curtime_78620 = (new Date()).getTime();
update_animation.call(null,cljs.core.deref.call(null,last_update),((curtime_78620 - cljs.core.deref.call(null,last_update)) / (1000)));

cljs.core.reset_BANG_.call(null,last_update,curtime_78620);

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
return (function (parent,p__78624){
var vec__78625 = p__78624;
var x = cljs.core.nth.call(null,vec__78625,(0),null);
var y = cljs.core.nth.call(null,vec__78625,(1),null);
var z = cljs.core.nth.call(null,vec__78625,(2),null);
var cube_78627 = (new THREE.CubeGeometry(soma_demo.core.cubesize,soma_demo.core.cubesize,soma_demo.core.cubesize));
var cubemesh_78628 = (new THREE.Mesh(cube_78627,material));
var G__78626_78629 = cubemesh_78628;
G__78626_78629.position.set((x * soma_demo.core.cubesize),(y * soma_demo.core.cubesize),(z * soma_demo.core.cubesize));


cubemesh_78628.updateMatrix();

parent.merge(cubemesh_78628.geometry,cubemesh_78628.matrix);

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
var args78630 = [];
var len__17376__auto___78775 = arguments.length;
var i__17377__auto___78776 = (0);
while(true){
if((i__17377__auto___78776 < len__17376__auto___78775)){
args78630.push((arguments[i__17377__auto___78776]));

var G__78777 = (i__17377__auto___78776 + (1));
i__17377__auto___78776 = G__78777;
continue;
} else {
}
break;
}

var G__78632 = args78630.length;
switch (G__78632) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78630.length)].join('')));

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

soma_demo.core.start_animation.call(null,(cljs.core.truth_(spin)?((function (canvas_element,width,height,scene,camera,renderer,pieces){
return (function (abs,rel){
var seq__78633 = cljs.core.seq.call(null,cljs.core.deref.call(null,pieces));
var chunk__78634 = null;
var count__78635 = (0);
var i__78636 = (0);
while(true){
if((i__78636 < count__78635)){
var piece = cljs.core._nth.call(null,chunk__78634,i__78636);
soma_demo.core.animate_spin.call(null,piece,abs,rel);

var G__78779 = seq__78633;
var G__78780 = chunk__78634;
var G__78781 = count__78635;
var G__78782 = (i__78636 + (1));
seq__78633 = G__78779;
chunk__78634 = G__78780;
count__78635 = G__78781;
i__78636 = G__78782;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__78633);
if(temp__4425__auto__){
var seq__78633__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78633__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__78633__$1);
var G__78783 = cljs.core.chunk_rest.call(null,seq__78633__$1);
var G__78784 = c__17121__auto__;
var G__78785 = cljs.core.count.call(null,c__17121__auto__);
var G__78786 = (0);
seq__78633 = G__78783;
chunk__78634 = G__78784;
count__78635 = G__78785;
i__78636 = G__78786;
continue;
} else {
var piece = cljs.core.first.call(null,seq__78633__$1);
soma_demo.core.animate_spin.call(null,piece,abs,rel);

var G__78787 = cljs.core.next.call(null,seq__78633__$1);
var G__78788 = null;
var G__78789 = (0);
var G__78790 = (0);
seq__78633 = G__78787;
chunk__78634 = G__78788;
count__78635 = G__78789;
i__78636 = G__78790;
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
return (function (state_78740){
var state_val_78741 = (state_78740[(1)]);
if((state_val_78741 === (7))){
var inst_78732 = (state_78740[(2)]);
var state_78740__$1 = state_78740;
var statearr_78742_78791 = state_78740__$1;
(statearr_78742_78791[(2)] = inst_78732);

(statearr_78742_78791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78741 === (1))){
var inst_78637 = (state_78740[(7)]);
var inst_78637__$1 = soma_demo.solver_client.fetch_answerset.call(null,url);
var state_78740__$1 = (function (){var statearr_78743 = state_78740;
(statearr_78743[(7)] = inst_78637__$1);

return statearr_78743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78740__$1,(2),inst_78637__$1);
} else {
if((state_val_78741 === (4))){
var inst_78650 = (state_78740[(8)]);
var inst_78734 = (state_78740[(2)]);
var inst_78736 = inst_78650.scale;
var inst_78737 = inst_78736.set(ws_scale,ws_scale,ws_scale);
var inst_78738 = scene.add(inst_78650);
var state_78740__$1 = (function (){var statearr_78744 = state_78740;
(statearr_78744[(9)] = inst_78734);

(statearr_78744[(10)] = inst_78737);

return statearr_78744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78740__$1,inst_78738);
} else {
if((state_val_78741 === (13))){
var inst_78727 = (state_78740[(2)]);
var state_78740__$1 = state_78740;
var statearr_78745_78792 = state_78740__$1;
(statearr_78745_78792[(2)] = inst_78727);

(statearr_78745_78792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78741 === (6))){
var inst_78691 = (state_78740[(11)]);
var inst_78656 = (state_78740[(12)]);
var inst_78691__$1 = cljs.core.seq.call(null,inst_78656);
var state_78740__$1 = (function (){var statearr_78746 = state_78740;
(statearr_78746[(11)] = inst_78691__$1);

return statearr_78746;
})();
if(inst_78691__$1){
var statearr_78747_78793 = state_78740__$1;
(statearr_78747_78793[(1)] = (8));

} else {
var statearr_78748_78794 = state_78740__$1;
(statearr_78748_78794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78741 === (3))){
var inst_78659 = (state_78740[(13)]);
var inst_78658 = (state_78740[(14)]);
var inst_78661 = (inst_78659 < inst_78658);
var inst_78662 = inst_78661;
var state_78740__$1 = state_78740;
if(cljs.core.truth_(inst_78662)){
var statearr_78749_78795 = state_78740__$1;
(statearr_78749_78795[(1)] = (5));

} else {
var statearr_78750_78796 = state_78740__$1;
(statearr_78750_78796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78741 === (12))){
var inst_78691 = (state_78740[(11)]);
var inst_78650 = (state_78740[(8)]);
var inst_78649 = (state_78740[(15)]);
var inst_78701 = cljs.core.first.call(null,inst_78691);
var inst_78702 = cljs.core.nth.call(null,inst_78701,(0),null);
var inst_78703 = cljs.core.nth.call(null,inst_78701,(1),null);
var inst_78705 = soma_demo.core.create_piece_mesh.call(null,inst_78702,inst_78703);
var inst_78706 = (inst_78702 / cols);
var inst_78707 = Math.floor(inst_78706);
var inst_78708 = cljs.core.mod.call(null,inst_78702,cols);
var inst_78709 = ((3) * soma_demo.core.cubesize);
var inst_78710 = ((2) * soma_demo.core.cubesize);
var inst_78711 = soma_demo.core.place_piece.call(null,inst_78649,cols,inst_78709,inst_78710,inst_78708,inst_78707);
var inst_78712 = cljs.core.nth.call(null,inst_78711,(0),null);
var inst_78713 = cljs.core.nth.call(null,inst_78711,(1),null);
var inst_78715 = inst_78705.position;
var inst_78716 = inst_78715.set(inst_78712,inst_78713,(0));
var inst_78718 = inst_78705.scale;
var inst_78719 = inst_78718.set((1),(1),(1));
var inst_78720 = inst_78650.add(inst_78705);
var inst_78721 = cljs.core.deref.call(null,pieces);
var inst_78722 = cljs.core.conj.call(null,inst_78721,inst_78705);
var inst_78723 = cljs.core.reset_BANG_.call(null,pieces,inst_78722);
var inst_78724 = cljs.core.next.call(null,inst_78691);
var inst_78656 = inst_78724;
var inst_78657 = null;
var inst_78658 = (0);
var inst_78659 = (0);
var state_78740__$1 = (function (){var statearr_78751 = state_78740;
(statearr_78751[(16)] = inst_78720);

(statearr_78751[(17)] = inst_78723);

(statearr_78751[(13)] = inst_78659);

(statearr_78751[(12)] = inst_78656);

(statearr_78751[(14)] = inst_78658);

(statearr_78751[(18)] = inst_78657);

(statearr_78751[(19)] = inst_78716);

(statearr_78751[(20)] = inst_78719);

return statearr_78751;
})();
var statearr_78752_78797 = state_78740__$1;
(statearr_78752_78797[(2)] = null);

(statearr_78752_78797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78741 === (2))){
var inst_78637 = (state_78740[(7)]);
var inst_78639 = (state_78740[(2)]);
var inst_78640 = (function (){var c = inst_78637;
var $ = inst_78639;
return ((function (c,$,inst_78637,inst_78639,state_val_78741,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (t){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,t),new cljs.core.Keyword(null,"part","part",77757738));
});
;})(c,$,inst_78637,inst_78639,state_val_78741,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var inst_78641 = cljs.core.filter.call(null,inst_78640,inst_78639);
var inst_78643 = (function (){var c = inst_78637;
var $ = inst_78641;
return ((function (c,$,inst_78637,inst_78639,inst_78640,inst_78641,state_val_78741,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (mv,p__78642){
var vec__78753 = p__78642;
var _ = cljs.core.nth.call(null,vec__78753,(0),null);
var idv = cljs.core.nth.call(null,vec__78753,(1),null);
var vec__78754 = cljs.core.nth.call(null,vec__78753,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__78754,(0),null);
var coords = cljs.core.nthnext.call(null,vec__78754,(1));
return cljs.core.assoc.call(null,mv,idv,cljs.core.conj.call(null,cljs.core.get.call(null,mv,idv,cljs.core.PersistentVector.EMPTY),coords));
});
;})(c,$,inst_78637,inst_78639,inst_78640,inst_78641,state_val_78741,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var inst_78644 = cljs.core.PersistentHashMap.EMPTY;
var inst_78645 = cljs.core.reduce.call(null,inst_78643,inst_78644,inst_78641);
var inst_78646 = cljs.core.sort.call(null,inst_78645);
var inst_78647 = cljs.core.count.call(null,inst_78646);
var inst_78648 = (inst_78647 / cols);
var inst_78649 = Math.ceil(inst_78648);
var inst_78650 = (new THREE.Object3D());
var inst_78655 = cljs.core.seq.call(null,inst_78646);
var inst_78656 = inst_78655;
var inst_78657 = null;
var inst_78658 = (0);
var inst_78659 = (0);
var state_78740__$1 = (function (){var statearr_78755 = state_78740;
(statearr_78755[(13)] = inst_78659);

(statearr_78755[(8)] = inst_78650);

(statearr_78755[(12)] = inst_78656);

(statearr_78755[(15)] = inst_78649);

(statearr_78755[(14)] = inst_78658);

(statearr_78755[(18)] = inst_78657);

return statearr_78755;
})();
var statearr_78756_78798 = state_78740__$1;
(statearr_78756_78798[(2)] = null);

(statearr_78756_78798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78741 === (11))){
var inst_78691 = (state_78740[(11)]);
var inst_78695 = cljs.core.chunk_first.call(null,inst_78691);
var inst_78696 = cljs.core.chunk_rest.call(null,inst_78691);
var inst_78697 = cljs.core.count.call(null,inst_78695);
var inst_78656 = inst_78696;
var inst_78657 = inst_78695;
var inst_78658 = inst_78697;
var inst_78659 = (0);
var state_78740__$1 = (function (){var statearr_78760 = state_78740;
(statearr_78760[(13)] = inst_78659);

(statearr_78760[(12)] = inst_78656);

(statearr_78760[(14)] = inst_78658);

(statearr_78760[(18)] = inst_78657);

return statearr_78760;
})();
var statearr_78761_78799 = state_78740__$1;
(statearr_78761_78799[(2)] = null);

(statearr_78761_78799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78741 === (9))){
var state_78740__$1 = state_78740;
var statearr_78762_78800 = state_78740__$1;
(statearr_78762_78800[(2)] = null);

(statearr_78762_78800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78741 === (5))){
var inst_78659 = (state_78740[(13)]);
var inst_78650 = (state_78740[(8)]);
var inst_78656 = (state_78740[(12)]);
var inst_78649 = (state_78740[(15)]);
var inst_78658 = (state_78740[(14)]);
var inst_78657 = (state_78740[(18)]);
var inst_78665 = cljs.core._nth.call(null,inst_78657,inst_78659);
var inst_78666 = cljs.core.nth.call(null,inst_78665,(0),null);
var inst_78667 = cljs.core.nth.call(null,inst_78665,(1),null);
var inst_78669 = soma_demo.core.create_piece_mesh.call(null,inst_78666,inst_78667);
var inst_78670 = (inst_78666 / cols);
var inst_78671 = Math.floor(inst_78670);
var inst_78672 = cljs.core.mod.call(null,inst_78666,cols);
var inst_78673 = ((3) * soma_demo.core.cubesize);
var inst_78674 = ((2) * soma_demo.core.cubesize);
var inst_78675 = soma_demo.core.place_piece.call(null,inst_78649,cols,inst_78673,inst_78674,inst_78672,inst_78671);
var inst_78676 = cljs.core.nth.call(null,inst_78675,(0),null);
var inst_78677 = cljs.core.nth.call(null,inst_78675,(1),null);
var inst_78679 = inst_78669.position;
var inst_78680 = inst_78679.set(inst_78676,inst_78677,(0));
var inst_78682 = inst_78669.scale;
var inst_78683 = inst_78682.set((1),(1),(1));
var inst_78684 = inst_78650.add(inst_78669);
var inst_78685 = cljs.core.deref.call(null,pieces);
var inst_78686 = cljs.core.conj.call(null,inst_78685,inst_78669);
var inst_78687 = cljs.core.reset_BANG_.call(null,pieces,inst_78686);
var inst_78688 = (inst_78659 + (1));
var tmp78757 = inst_78656;
var tmp78758 = inst_78658;
var tmp78759 = inst_78657;
var inst_78656__$1 = tmp78757;
var inst_78657__$1 = tmp78759;
var inst_78658__$1 = tmp78758;
var inst_78659__$1 = inst_78688;
var state_78740__$1 = (function (){var statearr_78763 = state_78740;
(statearr_78763[(21)] = inst_78683);

(statearr_78763[(13)] = inst_78659__$1);

(statearr_78763[(12)] = inst_78656__$1);

(statearr_78763[(14)] = inst_78658__$1);

(statearr_78763[(18)] = inst_78657__$1);

(statearr_78763[(22)] = inst_78680);

(statearr_78763[(23)] = inst_78684);

(statearr_78763[(24)] = inst_78687);

return statearr_78763;
})();
var statearr_78764_78801 = state_78740__$1;
(statearr_78764_78801[(2)] = null);

(statearr_78764_78801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78741 === (10))){
var inst_78730 = (state_78740[(2)]);
var state_78740__$1 = state_78740;
var statearr_78765_78802 = state_78740__$1;
(statearr_78765_78802[(2)] = inst_78730);

(statearr_78765_78802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78741 === (8))){
var inst_78691 = (state_78740[(11)]);
var inst_78693 = cljs.core.chunked_seq_QMARK_.call(null,inst_78691);
var state_78740__$1 = state_78740;
if(inst_78693){
var statearr_78766_78803 = state_78740__$1;
(statearr_78766_78803[(1)] = (11));

} else {
var statearr_78767_78804 = state_78740__$1;
(statearr_78767_78804[(1)] = (12));

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
var statearr_78771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78771[(0)] = soma_demo$core$state_machine__19322__auto__);

(statearr_78771[(1)] = (1));

return statearr_78771;
});
var soma_demo$core$state_machine__19322__auto____1 = (function (state_78740){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_78740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e78772){if((e78772 instanceof Object)){
var ex__19325__auto__ = e78772;
var statearr_78773_78805 = state_78740;
(statearr_78773_78805[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78806 = state_78740;
state_78740 = G__78806;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
soma_demo$core$state_machine__19322__auto__ = function(state_78740){
switch(arguments.length){
case 0:
return soma_demo$core$state_machine__19322__auto____0.call(this);
case 1:
return soma_demo$core$state_machine__19322__auto____1.call(this,state_78740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$core$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$core$state_machine__19322__auto____0;
soma_demo$core$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$core$state_machine__19322__auto____1;
return soma_demo$core$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var state__19344__auto__ = (function (){var statearr_78774 = f__19343__auto__.call(null);
(statearr_78774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_78774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
);

return c__19342__auto__;
});

soma_demo.core.display_pieces_from_url.cljs$lang$maxFixedArity = 5;
soma_demo.core.move_piece = (function soma_demo$core$move_piece(part,p__78807){
var vec__78817 = p__78807;
var dx = cljs.core.nth.call(null,vec__78817,(0),null);
var dy = cljs.core.nth.call(null,vec__78817,(1),null);
var dz = cljs.core.nth.call(null,vec__78817,(2),null);
var iter__17090__auto__ = ((function (vec__78817,dx,dy,dz){
return (function soma_demo$core$move_piece_$_iter__78818(s__78819){
return (new cljs.core.LazySeq(null,((function (vec__78817,dx,dy,dz){
return (function (){
var s__78819__$1 = s__78819;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__78819__$1);
if(temp__4425__auto__){
var s__78819__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78819__$2)){
var c__17088__auto__ = cljs.core.chunk_first.call(null,s__78819__$2);
var size__17089__auto__ = cljs.core.count.call(null,c__17088__auto__);
var b__78821 = cljs.core.chunk_buffer.call(null,size__17089__auto__);
if((function (){var i__78820 = (0);
while(true){
if((i__78820 < size__17089__auto__)){
var vec__78824 = cljs.core._nth.call(null,c__17088__auto__,i__78820);
var x = cljs.core.nth.call(null,vec__78824,(0),null);
var y = cljs.core.nth.call(null,vec__78824,(1),null);
var z = cljs.core.nth.call(null,vec__78824,(2),null);
cljs.core.chunk_append.call(null,b__78821,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy),(z + dz)], null));

var G__78826 = (i__78820 + (1));
i__78820 = G__78826;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78821),soma_demo$core$move_piece_$_iter__78818.call(null,cljs.core.chunk_rest.call(null,s__78819__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78821),null);
}
} else {
var vec__78825 = cljs.core.first.call(null,s__78819__$2);
var x = cljs.core.nth.call(null,vec__78825,(0),null);
var y = cljs.core.nth.call(null,vec__78825,(1),null);
var z = cljs.core.nth.call(null,vec__78825,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy),(z + dz)], null),soma_demo$core$move_piece_$_iter__78818.call(null,cljs.core.rest.call(null,s__78819__$2)));
}
} else {
return null;
}
break;
}
});})(vec__78817,dx,dy,dz))
,null,null));
});})(vec__78817,dx,dy,dz))
;
return iter__17090__auto__.call(null,part);
});
/**
 * returns a point at the center of a piece's coordinates 
 */
soma_demo.core.center_of_piece = (function soma_demo$core$center_of_piece(p){
var vec__78832 = cljs.core.reduce.call(null,(function (p__78833,p__78834){
var vec__78835 = p__78833;
var ax = cljs.core.nth.call(null,vec__78835,(0),null);
var ay = cljs.core.nth.call(null,vec__78835,(1),null);
var az = cljs.core.nth.call(null,vec__78835,(2),null);
var vec__78836 = p__78834;
var px = cljs.core.nth.call(null,vec__78836,(0),null);
var py = cljs.core.nth.call(null,vec__78836,(1),null);
var pz = cljs.core.nth.call(null,vec__78836,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ax + px),(ay + py),(az + pz)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),p);
var tx = cljs.core.nth.call(null,vec__78832,(0),null);
var ty = cljs.core.nth.call(null,vec__78832,(1),null);
var tz = cljs.core.nth.call(null,vec__78832,(2),null);
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
return (function (mv,p__78853){
var vec__78854 = p__78853;
var _ = cljs.core.nth.call(null,vec__78854,(0),null);
var idv = cljs.core.nth.call(null,vec__78854,(1),null);
var vec__78855 = cljs.core.nth.call(null,vec__78854,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__78855,(0),null);
var coords = cljs.core.nthnext.call(null,vec__78855,(1));
return cljs.core.assoc.call(null,mv,idv,cljs.core.conj.call(null,cljs.core.get.call(null,mv,idv,cljs.core.PersistentVector.EMPTY),coords));
});})($,$__$1))
,cljs.core.PersistentArrayMap.EMPTY,$__$1);
return $__$2;
})();
var sln_geom = (new THREE.Object3D());
var pieces = (function (){var iter__17090__auto__ = ((function (sln_geom,resmap){
return (function soma_demo$core$create_cube_sln_$_iter__78856(s__78857){
return (new cljs.core.LazySeq(null,((function (sln_geom,resmap){
return (function (){
var s__78857__$1 = s__78857;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__78857__$1);
if(temp__4425__auto__){
var s__78857__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78857__$2)){
var c__17088__auto__ = cljs.core.chunk_first.call(null,s__78857__$2);
var size__17089__auto__ = cljs.core.count.call(null,c__17088__auto__);
var b__78859 = cljs.core.chunk_buffer.call(null,size__17089__auto__);
if((function (){var i__78858 = (0);
while(true){
if((i__78858 < size__17089__auto__)){
var vec__78864 = cljs.core._nth.call(null,c__17088__auto__,i__78858);
var idx = cljs.core.nth.call(null,vec__78864,(0),null);
var v = cljs.core.nth.call(null,vec__78864,(1),null);
cljs.core.chunk_append.call(null,b__78859,(function (){var piece_geom = soma_demo.core.create_piece_mesh.call(null,idx,v);
var G__78865_78869 = piece_geom;
G__78865_78869.position.set((0),(0),(0));


piece_geom.updateMatrix();

sln_geom.add(piece_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),piece_geom,new cljs.core.Keyword(null,"parts","parts",849007691),v], null);
})());

var G__78870 = (i__78858 + (1));
i__78858 = G__78870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78859),soma_demo$core$create_cube_sln_$_iter__78856.call(null,cljs.core.chunk_rest.call(null,s__78857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78859),null);
}
} else {
var vec__78866 = cljs.core.first.call(null,s__78857__$2);
var idx = cljs.core.nth.call(null,vec__78866,(0),null);
var v = cljs.core.nth.call(null,vec__78866,(1),null);
return cljs.core.cons.call(null,(function (){var piece_geom = soma_demo.core.create_piece_mesh.call(null,idx,v);
var G__78867_78871 = piece_geom;
G__78867_78871.position.set((0),(0),(0));


piece_geom.updateMatrix();

sln_geom.add(piece_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),piece_geom,new cljs.core.Keyword(null,"parts","parts",849007691),v], null);
})(),soma_demo$core$create_cube_sln_$_iter__78856.call(null,cljs.core.rest.call(null,s__78857__$2)));
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
var G__78868_78872 = sln_geom;
G__78868_78872.position.set((- (soma_demo.core.cubesize * 1.5)),(- (soma_demo.core.cubesize * 1.5)),(- (soma_demo.core.cubesize * 1.5)));


outer_cube.add(sln_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),outer_cube,new cljs.core.Keyword(null,"pieces","pieces",-1436634023),pieces], null);
});
soma_demo.core.animate_explode_part = (function soma_demo$core$animate_explode_part(geom,parts,v){
var vec__78875 = soma_demo.core.explode_translation.call(null,parts,v);
var x = cljs.core.nth.call(null,vec__78875,(0),null);
var y = cljs.core.nth.call(null,vec__78875,(1),null);
var z = cljs.core.nth.call(null,vec__78875,(2),null);
var G__78876 = geom;
G__78876.position.set(x,y,z);

return G__78876;
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
var seq__79107 = cljs.core.seq.call(null,cljs.core.deref.call(null,cubes));
var chunk__79108 = null;
var count__79109 = (0);
var i__79110 = (0);
while(true){
if((i__79110 < count__79109)){
var map__79111 = cljs.core._nth.call(null,chunk__79108,i__79110);
var map__79111__$1 = ((((!((map__79111 == null)))?((((map__79111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79111):map__79111);
var cube_geom = cljs.core.get.call(null,map__79111__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var cube_pieces = cljs.core.get.call(null,map__79111__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
soma_demo.core.animate_spin.call(null,cube_geom,abs,rel);

var seq__79113_79337 = cljs.core.seq.call(null,cube_pieces);
var chunk__79114_79338 = null;
var count__79115_79339 = (0);
var i__79116_79340 = (0);
while(true){
if((i__79116_79340 < count__79115_79339)){
var map__79117_79341 = cljs.core._nth.call(null,chunk__79114_79338,i__79116_79340);
var map__79117_79342__$1 = ((((!((map__79117_79341 == null)))?((((map__79117_79341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79117_79341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79117_79341):map__79117_79341);
var piece_geom_79343 = cljs.core.get.call(null,map__79117_79342__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_79344 = cljs.core.get.call(null,map__79117_79342__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_79345 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_79343,parts_79344,Math.max((0),((150) * ((1) + v_79345))));

var G__79346 = seq__79113_79337;
var G__79347 = chunk__79114_79338;
var G__79348 = count__79115_79339;
var G__79349 = (i__79116_79340 + (1));
seq__79113_79337 = G__79346;
chunk__79114_79338 = G__79347;
count__79115_79339 = G__79348;
i__79116_79340 = G__79349;
continue;
} else {
var temp__4425__auto___79350 = cljs.core.seq.call(null,seq__79113_79337);
if(temp__4425__auto___79350){
var seq__79113_79351__$1 = temp__4425__auto___79350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79113_79351__$1)){
var c__17121__auto___79352 = cljs.core.chunk_first.call(null,seq__79113_79351__$1);
var G__79353 = cljs.core.chunk_rest.call(null,seq__79113_79351__$1);
var G__79354 = c__17121__auto___79352;
var G__79355 = cljs.core.count.call(null,c__17121__auto___79352);
var G__79356 = (0);
seq__79113_79337 = G__79353;
chunk__79114_79338 = G__79354;
count__79115_79339 = G__79355;
i__79116_79340 = G__79356;
continue;
} else {
var map__79119_79357 = cljs.core.first.call(null,seq__79113_79351__$1);
var map__79119_79358__$1 = ((((!((map__79119_79357 == null)))?((((map__79119_79357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79119_79357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79119_79357):map__79119_79357);
var piece_geom_79359 = cljs.core.get.call(null,map__79119_79358__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_79360 = cljs.core.get.call(null,map__79119_79358__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_79361 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_79359,parts_79360,Math.max((0),((150) * ((1) + v_79361))));

var G__79362 = cljs.core.next.call(null,seq__79113_79351__$1);
var G__79363 = null;
var G__79364 = (0);
var G__79365 = (0);
seq__79113_79337 = G__79362;
chunk__79114_79338 = G__79363;
count__79115_79339 = G__79364;
i__79116_79340 = G__79365;
continue;
}
} else {
}
}
break;
}

var G__79366 = seq__79107;
var G__79367 = chunk__79108;
var G__79368 = count__79109;
var G__79369 = (i__79110 + (1));
seq__79107 = G__79366;
chunk__79108 = G__79367;
count__79109 = G__79368;
i__79110 = G__79369;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__79107);
if(temp__4425__auto__){
var seq__79107__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79107__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__79107__$1);
var G__79370 = cljs.core.chunk_rest.call(null,seq__79107__$1);
var G__79371 = c__17121__auto__;
var G__79372 = cljs.core.count.call(null,c__17121__auto__);
var G__79373 = (0);
seq__79107 = G__79370;
chunk__79108 = G__79371;
count__79109 = G__79372;
i__79110 = G__79373;
continue;
} else {
var map__79121 = cljs.core.first.call(null,seq__79107__$1);
var map__79121__$1 = ((((!((map__79121 == null)))?((((map__79121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79121):map__79121);
var cube_geom = cljs.core.get.call(null,map__79121__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var cube_pieces = cljs.core.get.call(null,map__79121__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
soma_demo.core.animate_spin.call(null,cube_geom,abs,rel);

var seq__79123_79374 = cljs.core.seq.call(null,cube_pieces);
var chunk__79124_79375 = null;
var count__79125_79376 = (0);
var i__79126_79377 = (0);
while(true){
if((i__79126_79377 < count__79125_79376)){
var map__79127_79378 = cljs.core._nth.call(null,chunk__79124_79375,i__79126_79377);
var map__79127_79379__$1 = ((((!((map__79127_79378 == null)))?((((map__79127_79378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79127_79378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79127_79378):map__79127_79378);
var piece_geom_79380 = cljs.core.get.call(null,map__79127_79379__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_79381 = cljs.core.get.call(null,map__79127_79379__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_79382 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_79380,parts_79381,Math.max((0),((150) * ((1) + v_79382))));

var G__79383 = seq__79123_79374;
var G__79384 = chunk__79124_79375;
var G__79385 = count__79125_79376;
var G__79386 = (i__79126_79377 + (1));
seq__79123_79374 = G__79383;
chunk__79124_79375 = G__79384;
count__79125_79376 = G__79385;
i__79126_79377 = G__79386;
continue;
} else {
var temp__4425__auto___79387__$1 = cljs.core.seq.call(null,seq__79123_79374);
if(temp__4425__auto___79387__$1){
var seq__79123_79388__$1 = temp__4425__auto___79387__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79123_79388__$1)){
var c__17121__auto___79389 = cljs.core.chunk_first.call(null,seq__79123_79388__$1);
var G__79390 = cljs.core.chunk_rest.call(null,seq__79123_79388__$1);
var G__79391 = c__17121__auto___79389;
var G__79392 = cljs.core.count.call(null,c__17121__auto___79389);
var G__79393 = (0);
seq__79123_79374 = G__79390;
chunk__79124_79375 = G__79391;
count__79125_79376 = G__79392;
i__79126_79377 = G__79393;
continue;
} else {
var map__79129_79394 = cljs.core.first.call(null,seq__79123_79388__$1);
var map__79129_79395__$1 = ((((!((map__79129_79394 == null)))?((((map__79129_79394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79129_79394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79129_79394):map__79129_79394);
var piece_geom_79396 = cljs.core.get.call(null,map__79129_79395__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_79397 = cljs.core.get.call(null,map__79129_79395__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_79398 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_79396,parts_79397,Math.max((0),((150) * ((1) + v_79398))));

var G__79399 = cljs.core.next.call(null,seq__79123_79388__$1);
var G__79400 = null;
var G__79401 = (0);
var G__79402 = (0);
seq__79123_79374 = G__79399;
chunk__79124_79375 = G__79400;
count__79125_79376 = G__79401;
i__79126_79377 = G__79402;
continue;
}
} else {
}
}
break;
}

var G__79403 = cljs.core.next.call(null,seq__79107__$1);
var G__79404 = null;
var G__79405 = (0);
var G__79406 = (0);
seq__79107 = G__79403;
chunk__79108 = G__79404;
count__79109 = G__79405;
i__79110 = G__79406;
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
return (function (state_79280){
var state_val_79281 = (state_79280[(1)]);
if((state_val_79281 === (7))){
var inst_79276 = (state_79280[(2)]);
var state_79280__$1 = state_79280;
var statearr_79282_79407 = state_79280__$1;
(statearr_79282_79407[(2)] = inst_79276);

(statearr_79282_79407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (20))){
var inst_79208 = (state_79280[(7)]);
var inst_79212 = cljs.core.chunk_first.call(null,inst_79208);
var inst_79213 = cljs.core.chunk_rest.call(null,inst_79208);
var inst_79214 = cljs.core.count.call(null,inst_79212);
var inst_79146 = inst_79213;
var inst_79147 = inst_79212;
var inst_79148 = inst_79214;
var inst_79149 = (0);
var state_79280__$1 = (function (){var statearr_79283 = state_79280;
(statearr_79283[(8)] = inst_79146);

(statearr_79283[(9)] = inst_79147);

(statearr_79283[(10)] = inst_79149);

(statearr_79283[(11)] = inst_79148);

return statearr_79283;
})();
var statearr_79284_79408 = state_79280__$1;
(statearr_79284_79408[(2)] = null);

(statearr_79284_79408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (27))){
var state_79280__$1 = state_79280;
var statearr_79285_79409 = state_79280__$1;
(statearr_79285_79409[(2)] = false);

(statearr_79285_79409[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (1))){
var inst_79131 = soma_demo.solver_client.fetch_answerset.call(null,url);
var state_79280__$1 = state_79280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79280__$1,(2),inst_79131);
} else {
if((state_val_79281 === (24))){
var state_79280__$1 = state_79280;
var statearr_79286_79410 = state_79280__$1;
(statearr_79286_79410[(2)] = false);

(statearr_79286_79410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (4))){
var inst_79278 = (state_79280[(2)]);
var state_79280__$1 = state_79280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79280__$1,inst_79278);
} else {
if((state_val_79281 === (15))){
var inst_79160 = (state_79280[(12)]);
var state_79280__$1 = state_79280;
var statearr_79287_79411 = state_79280__$1;
(statearr_79287_79411[(2)] = inst_79160);

(statearr_79287_79411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (21))){
var inst_79223 = (state_79280[(13)]);
var inst_79208 = (state_79280[(7)]);
var inst_79218 = cljs.core.first.call(null,inst_79208);
var inst_79219 = cljs.core.nth.call(null,inst_79218,(0),null);
var inst_79220 = cljs.core.nth.call(null,inst_79218,(1),null);
var inst_79223__$1 = soma_demo.core.create_cube_sln.call(null,inst_79220);
var inst_79225 = (inst_79223__$1 == null);
var inst_79226 = cljs.core.not.call(null,inst_79225);
var state_79280__$1 = (function (){var statearr_79288 = state_79280;
(statearr_79288[(14)] = inst_79219);

(statearr_79288[(13)] = inst_79223__$1);

return statearr_79288;
})();
if(inst_79226){
var statearr_79289_79412 = state_79280__$1;
(statearr_79289_79412[(1)] = (23));

} else {
var statearr_79290_79413 = state_79280__$1;
(statearr_79290_79413[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (31))){
var inst_79219 = (state_79280[(14)]);
var inst_79136 = (state_79280[(15)]);
var inst_79139 = (state_79280[(16)]);
var inst_79138 = (state_79280[(17)]);
var inst_79208 = (state_79280[(7)]);
var inst_79243 = (state_79280[(2)]);
var inst_79244 = cljs.core.get.call(null,inst_79243,new cljs.core.Keyword(null,"geom","geom",1207084371));
var inst_79245 = cljs.core.get.call(null,inst_79243,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var inst_79246 = (inst_79219 / cols);
var inst_79247 = Math.floor(inst_79246);
var inst_79248 = cljs.core.mod.call(null,inst_79219,cols);
var inst_79249 = ((2) * soma_demo.core.cubesize);
var inst_79250 = ((2) * soma_demo.core.cubesize);
var inst_79251 = soma_demo.core.place_piece.call(null,inst_79136,cols,inst_79249,inst_79250,inst_79248,inst_79247);
var inst_79252 = cljs.core.nth.call(null,inst_79251,(0),null);
var inst_79253 = cljs.core.nth.call(null,inst_79251,(1),null);
var inst_79255 = inst_79244.position;
var inst_79256 = inst_79255.set(inst_79252,inst_79253,(0));
var inst_79258 = inst_79244.scale;
var inst_79259 = inst_79258.set(inst_79138,inst_79138,inst_79138);
var inst_79260 = inst_79139.add(inst_79244);
var inst_79261 = cljs.core.deref.call(null,cubes);
var inst_79262 = cljs.core.conj.call(null,inst_79261,inst_79243);
var inst_79263 = cljs.core.reset_BANG_.call(null,cubes,inst_79262);
var inst_79265 = inst_79139.scale;
var inst_79266 = inst_79265.set(ws_scale,ws_scale,ws_scale);
var inst_79267 = scene.add(inst_79139);
var inst_79268 = cljs.core.next.call(null,inst_79208);
var inst_79146 = inst_79268;
var inst_79147 = null;
var inst_79148 = (0);
var inst_79149 = (0);
var state_79280__$1 = (function (){var statearr_79291 = state_79280;
(statearr_79291[(18)] = inst_79256);

(statearr_79291[(8)] = inst_79146);

(statearr_79291[(19)] = inst_79260);

(statearr_79291[(9)] = inst_79147);

(statearr_79291[(20)] = inst_79263);

(statearr_79291[(10)] = inst_79149);

(statearr_79291[(21)] = inst_79267);

(statearr_79291[(22)] = inst_79245);

(statearr_79291[(11)] = inst_79148);

(statearr_79291[(23)] = inst_79259);

(statearr_79291[(24)] = inst_79266);

return statearr_79291;
})();
var statearr_79292_79414 = state_79280__$1;
(statearr_79292_79414[(2)] = null);

(statearr_79292_79414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (13))){
var inst_79172 = (state_79280[(2)]);
var state_79280__$1 = state_79280;
var statearr_79293_79415 = state_79280__$1;
(statearr_79293_79415[(2)] = inst_79172);

(statearr_79293_79415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (22))){
var inst_79271 = (state_79280[(2)]);
var state_79280__$1 = state_79280;
var statearr_79294_79416 = state_79280__$1;
(statearr_79294_79416[(2)] = inst_79271);

(statearr_79294_79416[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (29))){
var inst_79223 = (state_79280[(13)]);
var inst_79240 = cljs.core.apply.call(null,cljs.core.hash_map,inst_79223);
var state_79280__$1 = state_79280;
var statearr_79295_79417 = state_79280__$1;
(statearr_79295_79417[(2)] = inst_79240);

(statearr_79295_79417[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (6))){
var inst_79146 = (state_79280[(8)]);
var inst_79208 = (state_79280[(7)]);
var inst_79208__$1 = cljs.core.seq.call(null,inst_79146);
var state_79280__$1 = (function (){var statearr_79296 = state_79280;
(statearr_79296[(7)] = inst_79208__$1);

return statearr_79296;
})();
if(inst_79208__$1){
var statearr_79297_79418 = state_79280__$1;
(statearr_79297_79418[(1)] = (17));

} else {
var statearr_79298_79419 = state_79280__$1;
(statearr_79298_79419[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (28))){
var inst_79235 = (state_79280[(2)]);
var state_79280__$1 = state_79280;
var statearr_79299_79420 = state_79280__$1;
(statearr_79299_79420[(2)] = inst_79235);

(statearr_79299_79420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (25))){
var inst_79238 = (state_79280[(2)]);
var state_79280__$1 = state_79280;
if(cljs.core.truth_(inst_79238)){
var statearr_79300_79421 = state_79280__$1;
(statearr_79300_79421[(1)] = (29));

} else {
var statearr_79301_79422 = state_79280__$1;
(statearr_79301_79422[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (17))){
var inst_79208 = (state_79280[(7)]);
var inst_79210 = cljs.core.chunked_seq_QMARK_.call(null,inst_79208);
var state_79280__$1 = state_79280;
if(inst_79210){
var statearr_79302_79423 = state_79280__$1;
(statearr_79302_79423[(1)] = (20));

} else {
var statearr_79303_79424 = state_79280__$1;
(statearr_79303_79424[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (3))){
var inst_79149 = (state_79280[(10)]);
var inst_79148 = (state_79280[(11)]);
var inst_79151 = (inst_79149 < inst_79148);
var inst_79152 = inst_79151;
var state_79280__$1 = state_79280;
if(cljs.core.truth_(inst_79152)){
var statearr_79304_79425 = state_79280__$1;
(statearr_79304_79425[(1)] = (5));

} else {
var statearr_79305_79426 = state_79280__$1;
(statearr_79305_79426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (12))){
var state_79280__$1 = state_79280;
var statearr_79306_79427 = state_79280__$1;
(statearr_79306_79427[(2)] = false);

(statearr_79306_79427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (2))){
var inst_79136 = (state_79280[(15)]);
var inst_79133 = (state_79280[(2)]);
var inst_79134 = cljs.core.count.call(null,inst_79133);
var inst_79135 = (inst_79134 / cols);
var inst_79136__$1 = Math.ceil(inst_79135);
var inst_79137 = ((1) / inst_79136__$1);
var inst_79138 = ((5) * inst_79137);
var inst_79139 = (new THREE.Object3D());
var inst_79144 = cljs.core.map_indexed.call(null,cljs.core.vector,inst_79133);
var inst_79145 = cljs.core.seq.call(null,inst_79144);
var inst_79146 = inst_79145;
var inst_79147 = null;
var inst_79148 = (0);
var inst_79149 = (0);
var state_79280__$1 = (function (){var statearr_79307 = state_79280;
(statearr_79307[(15)] = inst_79136__$1);

(statearr_79307[(8)] = inst_79146);

(statearr_79307[(16)] = inst_79139);

(statearr_79307[(9)] = inst_79147);

(statearr_79307[(17)] = inst_79138);

(statearr_79307[(10)] = inst_79149);

(statearr_79307[(11)] = inst_79148);

return statearr_79307;
})();
var statearr_79308_79428 = state_79280__$1;
(statearr_79308_79428[(2)] = null);

(statearr_79308_79428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (23))){
var inst_79223 = (state_79280[(13)]);
var inst_79228 = inst_79223.cljs$lang$protocol_mask$partition0$;
var inst_79229 = (inst_79228 & (64));
var inst_79230 = inst_79223.cljs$core$ISeq$;
var inst_79231 = (inst_79229) || (inst_79230);
var state_79280__$1 = state_79280;
if(cljs.core.truth_(inst_79231)){
var statearr_79309_79429 = state_79280__$1;
(statearr_79309_79429[(1)] = (26));

} else {
var statearr_79310_79430 = state_79280__$1;
(statearr_79310_79430[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (19))){
var inst_79274 = (state_79280[(2)]);
var state_79280__$1 = state_79280;
var statearr_79311_79431 = state_79280__$1;
(statearr_79311_79431[(2)] = inst_79274);

(statearr_79311_79431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (11))){
var state_79280__$1 = state_79280;
var statearr_79312_79432 = state_79280__$1;
(statearr_79312_79432[(2)] = true);

(statearr_79312_79432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (9))){
var state_79280__$1 = state_79280;
var statearr_79313_79433 = state_79280__$1;
(statearr_79313_79433[(2)] = false);

(statearr_79313_79433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (5))){
var inst_79147 = (state_79280[(9)]);
var inst_79160 = (state_79280[(12)]);
var inst_79149 = (state_79280[(10)]);
var inst_79155 = cljs.core._nth.call(null,inst_79147,inst_79149);
var inst_79156 = cljs.core.nth.call(null,inst_79155,(0),null);
var inst_79157 = cljs.core.nth.call(null,inst_79155,(1),null);
var inst_79160__$1 = soma_demo.core.create_cube_sln.call(null,inst_79157);
var inst_79162 = (inst_79160__$1 == null);
var inst_79163 = cljs.core.not.call(null,inst_79162);
var state_79280__$1 = (function (){var statearr_79314 = state_79280;
(statearr_79314[(25)] = inst_79156);

(statearr_79314[(12)] = inst_79160__$1);

return statearr_79314;
})();
if(inst_79163){
var statearr_79315_79434 = state_79280__$1;
(statearr_79315_79434[(1)] = (8));

} else {
var statearr_79316_79435 = state_79280__$1;
(statearr_79316_79435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (14))){
var inst_79160 = (state_79280[(12)]);
var inst_79177 = cljs.core.apply.call(null,cljs.core.hash_map,inst_79160);
var state_79280__$1 = state_79280;
var statearr_79320_79436 = state_79280__$1;
(statearr_79320_79436[(2)] = inst_79177);

(statearr_79320_79436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (26))){
var state_79280__$1 = state_79280;
var statearr_79321_79437 = state_79280__$1;
(statearr_79321_79437[(2)] = true);

(statearr_79321_79437[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (16))){
var inst_79156 = (state_79280[(25)]);
var inst_79136 = (state_79280[(15)]);
var inst_79146 = (state_79280[(8)]);
var inst_79139 = (state_79280[(16)]);
var inst_79147 = (state_79280[(9)]);
var inst_79138 = (state_79280[(17)]);
var inst_79149 = (state_79280[(10)]);
var inst_79148 = (state_79280[(11)]);
var inst_79180 = (state_79280[(2)]);
var inst_79181 = cljs.core.get.call(null,inst_79180,new cljs.core.Keyword(null,"geom","geom",1207084371));
var inst_79182 = cljs.core.get.call(null,inst_79180,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var inst_79183 = (inst_79156 / cols);
var inst_79184 = Math.floor(inst_79183);
var inst_79185 = cljs.core.mod.call(null,inst_79156,cols);
var inst_79186 = ((2) * soma_demo.core.cubesize);
var inst_79187 = ((2) * soma_demo.core.cubesize);
var inst_79188 = soma_demo.core.place_piece.call(null,inst_79136,cols,inst_79186,inst_79187,inst_79185,inst_79184);
var inst_79189 = cljs.core.nth.call(null,inst_79188,(0),null);
var inst_79190 = cljs.core.nth.call(null,inst_79188,(1),null);
var inst_79192 = inst_79181.position;
var inst_79193 = inst_79192.set(inst_79189,inst_79190,(0));
var inst_79195 = inst_79181.scale;
var inst_79196 = inst_79195.set(inst_79138,inst_79138,inst_79138);
var inst_79197 = inst_79139.add(inst_79181);
var inst_79198 = cljs.core.deref.call(null,cubes);
var inst_79199 = cljs.core.conj.call(null,inst_79198,inst_79180);
var inst_79200 = cljs.core.reset_BANG_.call(null,cubes,inst_79199);
var inst_79202 = inst_79139.scale;
var inst_79203 = inst_79202.set(ws_scale,ws_scale,ws_scale);
var inst_79204 = scene.add(inst_79139);
var inst_79205 = (inst_79149 + (1));
var tmp79317 = inst_79146;
var tmp79318 = inst_79147;
var tmp79319 = inst_79148;
var inst_79146__$1 = tmp79317;
var inst_79147__$1 = tmp79318;
var inst_79148__$1 = tmp79319;
var inst_79149__$1 = inst_79205;
var state_79280__$1 = (function (){var statearr_79322 = state_79280;
(statearr_79322[(26)] = inst_79200);

(statearr_79322[(27)] = inst_79196);

(statearr_79322[(28)] = inst_79182);

(statearr_79322[(8)] = inst_79146__$1);

(statearr_79322[(9)] = inst_79147__$1);

(statearr_79322[(10)] = inst_79149__$1);

(statearr_79322[(29)] = inst_79204);

(statearr_79322[(30)] = inst_79193);

(statearr_79322[(11)] = inst_79148__$1);

(statearr_79322[(31)] = inst_79203);

(statearr_79322[(32)] = inst_79197);

return statearr_79322;
})();
var statearr_79323_79438 = state_79280__$1;
(statearr_79323_79438[(2)] = null);

(statearr_79323_79438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (30))){
var inst_79223 = (state_79280[(13)]);
var state_79280__$1 = state_79280;
var statearr_79324_79439 = state_79280__$1;
(statearr_79324_79439[(2)] = inst_79223);

(statearr_79324_79439[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (10))){
var inst_79175 = (state_79280[(2)]);
var state_79280__$1 = state_79280;
if(cljs.core.truth_(inst_79175)){
var statearr_79325_79440 = state_79280__$1;
(statearr_79325_79440[(1)] = (14));

} else {
var statearr_79326_79441 = state_79280__$1;
(statearr_79326_79441[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (18))){
var state_79280__$1 = state_79280;
var statearr_79327_79442 = state_79280__$1;
(statearr_79327_79442[(2)] = null);

(statearr_79327_79442[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79281 === (8))){
var inst_79160 = (state_79280[(12)]);
var inst_79165 = inst_79160.cljs$lang$protocol_mask$partition0$;
var inst_79166 = (inst_79165 & (64));
var inst_79167 = inst_79160.cljs$core$ISeq$;
var inst_79168 = (inst_79166) || (inst_79167);
var state_79280__$1 = state_79280;
if(cljs.core.truth_(inst_79168)){
var statearr_79328_79443 = state_79280__$1;
(statearr_79328_79443[(1)] = (11));

} else {
var statearr_79329_79444 = state_79280__$1;
(statearr_79329_79444[(1)] = (12));

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
var statearr_79333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79333[(0)] = soma_demo$core$display_sln_from_url_$_state_machine__19322__auto__);

(statearr_79333[(1)] = (1));

return statearr_79333;
});
var soma_demo$core$display_sln_from_url_$_state_machine__19322__auto____1 = (function (state_79280){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_79280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e79334){if((e79334 instanceof Object)){
var ex__19325__auto__ = e79334;
var statearr_79335_79445 = state_79280;
(statearr_79335_79445[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79446 = state_79280;
state_79280 = G__79446;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
soma_demo$core$display_sln_from_url_$_state_machine__19322__auto__ = function(state_79280){
switch(arguments.length){
case 0:
return soma_demo$core$display_sln_from_url_$_state_machine__19322__auto____0.call(this);
case 1:
return soma_demo$core$display_sln_from_url_$_state_machine__19322__auto____1.call(this,state_79280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$core$display_sln_from_url_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$core$display_sln_from_url_$_state_machine__19322__auto____0;
soma_demo$core$display_sln_from_url_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$core$display_sln_from_url_$_state_machine__19322__auto____1;
return soma_demo$core$display_sln_from_url_$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__,canvas_element,width,height,scene,camera,renderer,cubes))
})();
var state__19344__auto__ = (function (){var statearr_79336 = f__19343__auto__.call(null);
(statearr_79336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_79336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__,canvas_element,width,height,scene,camera,renderer,cubes))
);

return c__19342__auto__;
});
soma_demo.core.on_js_reload = (function soma_demo$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1446912347354