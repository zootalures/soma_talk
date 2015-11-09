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
var G__23610_23613 = dir_light;
G__23610_23613.color.setHSL(0.6,(1),0.6);


var G__23611_23614 = dir_light;
G__23611_23614.groundColor.setHSL(0.095,(1),0.8);


var G__23612_23615 = dir_light;
G__23612_23615.position.set((0),(-1000),(0));


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
var curtime_23616 = (new Date()).getTime();
update_animation.call(null,cljs.core.deref.call(null,last_update),((curtime_23616 - cljs.core.deref.call(null,last_update)) / (1000)));

cljs.core.reset_BANG_.call(null,last_update,curtime_23616);

return renderer.render(scene,camera);
});})(last_update))
;
return cljs.core.reset_BANG_.call(null,soma_demo.core.animators,cljs.core.assoc.call(null,cljs.core.deref.call(null,soma_demo.core.animators),element_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,animation_fn], null)));
});
soma_demo.core.global_anim_fn = cljs.core.atom.call(null,null);
/**
 * Main animation interation entry point - called when at least one animation is enabled
 */
soma_demo.core.main_animator = (function soma_demo$core$main_animator(){
var seq__23625_23633 = cljs.core.seq.call(null,cljs.core.deref.call(null,soma_demo.core.animators));
var chunk__23626_23634 = null;
var count__23627_23635 = (0);
var i__23628_23636 = (0);
while(true){
if((i__23628_23636 < count__23627_23635)){
var vec__23629_23637 = cljs.core._nth.call(null,chunk__23626_23634,i__23628_23636);
var id_23638 = cljs.core.nth.call(null,vec__23629_23637,(0),null);
var vec__23630_23639 = cljs.core.nth.call(null,vec__23629_23637,(1),null);
var enabled_QMARK__23640 = cljs.core.nth.call(null,vec__23630_23639,(0),null);
var anim_fn_23641 = cljs.core.nth.call(null,vec__23630_23639,(1),null);
if(cljs.core.truth_(enabled_QMARK__23640)){
anim_fn_23641.call(null);
} else {
}

var G__23642 = seq__23625_23633;
var G__23643 = chunk__23626_23634;
var G__23644 = count__23627_23635;
var G__23645 = (i__23628_23636 + (1));
seq__23625_23633 = G__23642;
chunk__23626_23634 = G__23643;
count__23627_23635 = G__23644;
i__23628_23636 = G__23645;
continue;
} else {
var temp__4425__auto___23646 = cljs.core.seq.call(null,seq__23625_23633);
if(temp__4425__auto___23646){
var seq__23625_23647__$1 = temp__4425__auto___23646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23625_23647__$1)){
var c__5366__auto___23648 = cljs.core.chunk_first.call(null,seq__23625_23647__$1);
var G__23649 = cljs.core.chunk_rest.call(null,seq__23625_23647__$1);
var G__23650 = c__5366__auto___23648;
var G__23651 = cljs.core.count.call(null,c__5366__auto___23648);
var G__23652 = (0);
seq__23625_23633 = G__23649;
chunk__23626_23634 = G__23650;
count__23627_23635 = G__23651;
i__23628_23636 = G__23652;
continue;
} else {
var vec__23631_23653 = cljs.core.first.call(null,seq__23625_23647__$1);
var id_23654 = cljs.core.nth.call(null,vec__23631_23653,(0),null);
var vec__23632_23655 = cljs.core.nth.call(null,vec__23631_23653,(1),null);
var enabled_QMARK__23656 = cljs.core.nth.call(null,vec__23632_23655,(0),null);
var anim_fn_23657 = cljs.core.nth.call(null,vec__23632_23655,(1),null);
if(cljs.core.truth_(enabled_QMARK__23656)){
anim_fn_23657.call(null);
} else {
}

var G__23658 = cljs.core.next.call(null,seq__23625_23647__$1);
var G__23659 = null;
var G__23660 = (0);
var G__23661 = (0);
seq__23625_23633 = G__23658;
chunk__23626_23634 = G__23659;
count__23627_23635 = G__23660;
i__23628_23636 = G__23661;
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
var vec__23663 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__23663,(0),null);
var anim_fn = cljs.core.nth.call(null,vec__23663,(1),null);
cljs.core.reset_BANG_.call(null,soma_demo.core.animators,cljs.core.assoc.call(null,cljs.core.deref.call(null,soma_demo.core.animators),element_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,anim_fn], null)));

cljs.core.println.call(null,"starting animation ",element_id,cljs.core.deref.call(null,soma_demo.core.animators));

if(cljs.core.truth_(cljs.core.deref.call(null,soma_demo.core.global_anim_fn))){
return null;
} else {
cljs.core.println.call(null,"starting anim loop");

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
var vec__23665 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__23665,(0),null);
var anim_fn = cljs.core.nth.call(null,vec__23665,(1),null);
cljs.core.println.call(null,"stopping animation ",element_id,cljs.core.deref.call(null,soma_demo.core.animators));

cljs.core.reset_BANG_.call(null,soma_demo.core.animators,cljs.core.assoc.call(null,cljs.core.deref.call(null,soma_demo.core.animators),element_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,anim_fn], null)));

if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core.first),cljs.core.keys.call(null,cljs.core.deref.call(null,soma_demo.core.animators))))){
cljs.core.println.call(null,"turning off anim loop");

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
var seq__23670 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,soma_demo.core.animators)));
var chunk__23671 = null;
var count__23672 = (0);
var i__23673 = (0);
while(true){
if((i__23673 < count__23672)){
var anim_id = cljs.core._nth.call(null,chunk__23671,i__23673);
soma_demo.core.stop_animation.call(null,anim_id);

var G__23674 = seq__23670;
var G__23675 = chunk__23671;
var G__23676 = count__23672;
var G__23677 = (i__23673 + (1));
seq__23670 = G__23674;
chunk__23671 = G__23675;
count__23672 = G__23676;
i__23673 = G__23677;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23670);
if(temp__4425__auto__){
var seq__23670__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23670__$1)){
var c__5366__auto__ = cljs.core.chunk_first.call(null,seq__23670__$1);
var G__23678 = cljs.core.chunk_rest.call(null,seq__23670__$1);
var G__23679 = c__5366__auto__;
var G__23680 = cljs.core.count.call(null,c__5366__auto__);
var G__23681 = (0);
seq__23670 = G__23678;
chunk__23671 = G__23679;
count__23672 = G__23680;
i__23673 = G__23681;
continue;
} else {
var anim_id = cljs.core.first.call(null,seq__23670__$1);
soma_demo.core.stop_animation.call(null,anim_id);

var G__23682 = cljs.core.next.call(null,seq__23670__$1);
var G__23683 = null;
var G__23684 = (0);
var G__23685 = (0);
seq__23670 = G__23682;
chunk__23671 = G__23683;
count__23672 = G__23684;
i__23673 = G__23685;
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
return (function (parent,p__23689){
var vec__23690 = p__23689;
var x = cljs.core.nth.call(null,vec__23690,(0),null);
var y = cljs.core.nth.call(null,vec__23690,(1),null);
var z = cljs.core.nth.call(null,vec__23690,(2),null);
cljs.core.println.call(null,"creating cube ",x,y,z);

var cube_23692 = (new THREE.CubeGeometry(soma_demo.core.cubesize,soma_demo.core.cubesize,soma_demo.core.cubesize));
var cubemesh_23693 = (new THREE.Mesh(cube_23692,material));
var G__23691_23694 = cubemesh_23693;
G__23691_23694.position.set((x * soma_demo.core.cubesize),(y * soma_demo.core.cubesize),(z * soma_demo.core.cubesize));


cubemesh_23693.updateMatrix();

parent.merge(cubemesh_23693.geometry,cubemesh_23693.matrix);

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
var args23695 = [];
var len__5621__auto___23840 = arguments.length;
var i__5622__auto___23841 = (0);
while(true){
if((i__5622__auto___23841 < len__5621__auto___23840)){
args23695.push((arguments[i__5622__auto___23841]));

var G__23842 = (i__5622__auto___23841 + (1));
i__5622__auto___23841 = G__23842;
continue;
} else {
}
break;
}

var G__23697 = args23695.length;
switch (G__23697) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23695.length)].join('')));

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
var seq__23698 = cljs.core.seq.call(null,cljs.core.deref.call(null,pieces));
var chunk__23699 = null;
var count__23700 = (0);
var i__23701 = (0);
while(true){
if((i__23701 < count__23700)){
var piece = cljs.core._nth.call(null,chunk__23699,i__23701);
soma_demo.core.animate_spin.call(null,piece,abs,rel);

var G__23844 = seq__23698;
var G__23845 = chunk__23699;
var G__23846 = count__23700;
var G__23847 = (i__23701 + (1));
seq__23698 = G__23844;
chunk__23699 = G__23845;
count__23700 = G__23846;
i__23701 = G__23847;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23698);
if(temp__4425__auto__){
var seq__23698__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23698__$1)){
var c__5366__auto__ = cljs.core.chunk_first.call(null,seq__23698__$1);
var G__23848 = cljs.core.chunk_rest.call(null,seq__23698__$1);
var G__23849 = c__5366__auto__;
var G__23850 = cljs.core.count.call(null,c__5366__auto__);
var G__23851 = (0);
seq__23698 = G__23848;
chunk__23699 = G__23849;
count__23700 = G__23850;
i__23701 = G__23851;
continue;
} else {
var piece = cljs.core.first.call(null,seq__23698__$1);
soma_demo.core.animate_spin.call(null,piece,abs,rel);

var G__23852 = cljs.core.next.call(null,seq__23698__$1);
var G__23853 = null;
var G__23854 = (0);
var G__23855 = (0);
seq__23698 = G__23852;
chunk__23699 = G__23853;
count__23700 = G__23854;
i__23701 = G__23855;
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

var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (state_23805){
var state_val_23806 = (state_23805[(1)]);
if((state_val_23806 === (7))){
var inst_23797 = (state_23805[(2)]);
var state_23805__$1 = state_23805;
var statearr_23807_23856 = state_23805__$1;
(statearr_23807_23856[(2)] = inst_23797);

(statearr_23807_23856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (1))){
var inst_23702 = (state_23805[(7)]);
var inst_23702__$1 = soma_demo.solver_client.fetch_answerset.call(null,url);
var state_23805__$1 = (function (){var statearr_23808 = state_23805;
(statearr_23808[(7)] = inst_23702__$1);

return statearr_23808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23805__$1,(2),inst_23702__$1);
} else {
if((state_val_23806 === (4))){
var inst_23715 = (state_23805[(8)]);
var inst_23799 = (state_23805[(2)]);
var inst_23801 = inst_23715.scale;
var inst_23802 = inst_23801.set(ws_scale,ws_scale,ws_scale);
var inst_23803 = scene.add(inst_23715);
var state_23805__$1 = (function (){var statearr_23809 = state_23805;
(statearr_23809[(9)] = inst_23799);

(statearr_23809[(10)] = inst_23802);

return statearr_23809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23805__$1,inst_23803);
} else {
if((state_val_23806 === (13))){
var inst_23792 = (state_23805[(2)]);
var state_23805__$1 = state_23805;
var statearr_23810_23857 = state_23805__$1;
(statearr_23810_23857[(2)] = inst_23792);

(statearr_23810_23857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (6))){
var inst_23756 = (state_23805[(11)]);
var inst_23721 = (state_23805[(12)]);
var inst_23756__$1 = cljs.core.seq.call(null,inst_23721);
var state_23805__$1 = (function (){var statearr_23811 = state_23805;
(statearr_23811[(11)] = inst_23756__$1);

return statearr_23811;
})();
if(inst_23756__$1){
var statearr_23812_23858 = state_23805__$1;
(statearr_23812_23858[(1)] = (8));

} else {
var statearr_23813_23859 = state_23805__$1;
(statearr_23813_23859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (3))){
var inst_23724 = (state_23805[(13)]);
var inst_23723 = (state_23805[(14)]);
var inst_23726 = (inst_23724 < inst_23723);
var inst_23727 = inst_23726;
var state_23805__$1 = state_23805;
if(cljs.core.truth_(inst_23727)){
var statearr_23814_23860 = state_23805__$1;
(statearr_23814_23860[(1)] = (5));

} else {
var statearr_23815_23861 = state_23805__$1;
(statearr_23815_23861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (12))){
var inst_23756 = (state_23805[(11)]);
var inst_23715 = (state_23805[(8)]);
var inst_23714 = (state_23805[(15)]);
var inst_23766 = cljs.core.first.call(null,inst_23756);
var inst_23767 = cljs.core.nth.call(null,inst_23766,(0),null);
var inst_23768 = cljs.core.nth.call(null,inst_23766,(1),null);
var inst_23770 = soma_demo.core.create_piece_mesh.call(null,inst_23767,inst_23768);
var inst_23771 = (inst_23767 / cols);
var inst_23772 = Math.floor(inst_23771);
var inst_23773 = cljs.core.mod.call(null,inst_23767,cols);
var inst_23774 = ((3) * soma_demo.core.cubesize);
var inst_23775 = ((2) * soma_demo.core.cubesize);
var inst_23776 = soma_demo.core.place_piece.call(null,inst_23714,cols,inst_23774,inst_23775,inst_23773,inst_23772);
var inst_23777 = cljs.core.nth.call(null,inst_23776,(0),null);
var inst_23778 = cljs.core.nth.call(null,inst_23776,(1),null);
var inst_23780 = inst_23770.position;
var inst_23781 = inst_23780.set(inst_23777,inst_23778,(0));
var inst_23783 = inst_23770.scale;
var inst_23784 = inst_23783.set((1),(1),(1));
var inst_23785 = inst_23715.add(inst_23770);
var inst_23786 = cljs.core.deref.call(null,pieces);
var inst_23787 = cljs.core.conj.call(null,inst_23786,inst_23770);
var inst_23788 = cljs.core.reset_BANG_.call(null,pieces,inst_23787);
var inst_23789 = cljs.core.next.call(null,inst_23756);
var inst_23721 = inst_23789;
var inst_23722 = null;
var inst_23723 = (0);
var inst_23724 = (0);
var state_23805__$1 = (function (){var statearr_23816 = state_23805;
(statearr_23816[(16)] = inst_23722);

(statearr_23816[(17)] = inst_23785);

(statearr_23816[(18)] = inst_23781);

(statearr_23816[(12)] = inst_23721);

(statearr_23816[(19)] = inst_23784);

(statearr_23816[(13)] = inst_23724);

(statearr_23816[(20)] = inst_23788);

(statearr_23816[(14)] = inst_23723);

return statearr_23816;
})();
var statearr_23817_23862 = state_23805__$1;
(statearr_23817_23862[(2)] = null);

(statearr_23817_23862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (2))){
var inst_23702 = (state_23805[(7)]);
var inst_23704 = (state_23805[(2)]);
var inst_23705 = (function (){var c = inst_23702;
var $ = inst_23704;
return ((function (c,$,inst_23702,inst_23704,state_val_23806,c__7080__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (t){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,t),new cljs.core.Keyword(null,"part","part",77757738));
});
;})(c,$,inst_23702,inst_23704,state_val_23806,c__7080__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var inst_23706 = cljs.core.filter.call(null,inst_23705,inst_23704);
var inst_23708 = (function (){var c = inst_23702;
var $ = inst_23706;
return ((function (c,$,inst_23702,inst_23704,inst_23705,inst_23706,state_val_23806,c__7080__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function (mv,p__23707){
var vec__23818 = p__23707;
var _ = cljs.core.nth.call(null,vec__23818,(0),null);
var idv = cljs.core.nth.call(null,vec__23818,(1),null);
var vec__23819 = cljs.core.nth.call(null,vec__23818,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__23819,(0),null);
var coords = cljs.core.nthnext.call(null,vec__23819,(1));
return cljs.core.assoc.call(null,mv,idv,cljs.core.conj.call(null,cljs.core.get.call(null,mv,idv,cljs.core.PersistentVector.EMPTY),coords));
});
;})(c,$,inst_23702,inst_23704,inst_23705,inst_23706,state_val_23806,c__7080__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var inst_23709 = cljs.core.PersistentHashMap.EMPTY;
var inst_23710 = cljs.core.reduce.call(null,inst_23708,inst_23709,inst_23706);
var inst_23711 = cljs.core.sort.call(null,inst_23710);
var inst_23712 = cljs.core.count.call(null,inst_23711);
var inst_23713 = (inst_23712 / cols);
var inst_23714 = Math.ceil(inst_23713);
var inst_23715 = (new THREE.Object3D());
var inst_23720 = cljs.core.seq.call(null,inst_23711);
var inst_23721 = inst_23720;
var inst_23722 = null;
var inst_23723 = (0);
var inst_23724 = (0);
var state_23805__$1 = (function (){var statearr_23820 = state_23805;
(statearr_23820[(16)] = inst_23722);

(statearr_23820[(12)] = inst_23721);

(statearr_23820[(13)] = inst_23724);

(statearr_23820[(8)] = inst_23715);

(statearr_23820[(15)] = inst_23714);

(statearr_23820[(14)] = inst_23723);

return statearr_23820;
})();
var statearr_23821_23863 = state_23805__$1;
(statearr_23821_23863[(2)] = null);

(statearr_23821_23863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (11))){
var inst_23756 = (state_23805[(11)]);
var inst_23760 = cljs.core.chunk_first.call(null,inst_23756);
var inst_23761 = cljs.core.chunk_rest.call(null,inst_23756);
var inst_23762 = cljs.core.count.call(null,inst_23760);
var inst_23721 = inst_23761;
var inst_23722 = inst_23760;
var inst_23723 = inst_23762;
var inst_23724 = (0);
var state_23805__$1 = (function (){var statearr_23825 = state_23805;
(statearr_23825[(16)] = inst_23722);

(statearr_23825[(12)] = inst_23721);

(statearr_23825[(13)] = inst_23724);

(statearr_23825[(14)] = inst_23723);

return statearr_23825;
})();
var statearr_23826_23864 = state_23805__$1;
(statearr_23826_23864[(2)] = null);

(statearr_23826_23864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (9))){
var state_23805__$1 = state_23805;
var statearr_23827_23865 = state_23805__$1;
(statearr_23827_23865[(2)] = null);

(statearr_23827_23865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (5))){
var inst_23722 = (state_23805[(16)]);
var inst_23721 = (state_23805[(12)]);
var inst_23724 = (state_23805[(13)]);
var inst_23715 = (state_23805[(8)]);
var inst_23714 = (state_23805[(15)]);
var inst_23723 = (state_23805[(14)]);
var inst_23730 = cljs.core._nth.call(null,inst_23722,inst_23724);
var inst_23731 = cljs.core.nth.call(null,inst_23730,(0),null);
var inst_23732 = cljs.core.nth.call(null,inst_23730,(1),null);
var inst_23734 = soma_demo.core.create_piece_mesh.call(null,inst_23731,inst_23732);
var inst_23735 = (inst_23731 / cols);
var inst_23736 = Math.floor(inst_23735);
var inst_23737 = cljs.core.mod.call(null,inst_23731,cols);
var inst_23738 = ((3) * soma_demo.core.cubesize);
var inst_23739 = ((2) * soma_demo.core.cubesize);
var inst_23740 = soma_demo.core.place_piece.call(null,inst_23714,cols,inst_23738,inst_23739,inst_23737,inst_23736);
var inst_23741 = cljs.core.nth.call(null,inst_23740,(0),null);
var inst_23742 = cljs.core.nth.call(null,inst_23740,(1),null);
var inst_23744 = inst_23734.position;
var inst_23745 = inst_23744.set(inst_23741,inst_23742,(0));
var inst_23747 = inst_23734.scale;
var inst_23748 = inst_23747.set((1),(1),(1));
var inst_23749 = inst_23715.add(inst_23734);
var inst_23750 = cljs.core.deref.call(null,pieces);
var inst_23751 = cljs.core.conj.call(null,inst_23750,inst_23734);
var inst_23752 = cljs.core.reset_BANG_.call(null,pieces,inst_23751);
var inst_23753 = (inst_23724 + (1));
var tmp23822 = inst_23722;
var tmp23823 = inst_23721;
var tmp23824 = inst_23723;
var inst_23721__$1 = tmp23823;
var inst_23722__$1 = tmp23822;
var inst_23723__$1 = tmp23824;
var inst_23724__$1 = inst_23753;
var state_23805__$1 = (function (){var statearr_23828 = state_23805;
(statearr_23828[(16)] = inst_23722__$1);

(statearr_23828[(21)] = inst_23749);

(statearr_23828[(12)] = inst_23721__$1);

(statearr_23828[(13)] = inst_23724__$1);

(statearr_23828[(22)] = inst_23752);

(statearr_23828[(23)] = inst_23745);

(statearr_23828[(24)] = inst_23748);

(statearr_23828[(14)] = inst_23723__$1);

return statearr_23828;
})();
var statearr_23829_23866 = state_23805__$1;
(statearr_23829_23866[(2)] = null);

(statearr_23829_23866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (10))){
var inst_23795 = (state_23805[(2)]);
var state_23805__$1 = state_23805;
var statearr_23830_23867 = state_23805__$1;
(statearr_23830_23867[(2)] = inst_23795);

(statearr_23830_23867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (8))){
var inst_23756 = (state_23805[(11)]);
var inst_23758 = cljs.core.chunked_seq_QMARK_.call(null,inst_23756);
var state_23805__$1 = state_23805;
if(inst_23758){
var statearr_23831_23868 = state_23805__$1;
(statearr_23831_23868[(1)] = (11));

} else {
var statearr_23832_23869 = state_23805__$1;
(statearr_23832_23869[(1)] = (12));

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
});})(c__7080__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
;
return ((function (switch__7015__auto__,c__7080__auto__,canvas_element,width,height,scene,camera,renderer,pieces){
return (function() {
var soma_demo$core$state_machine__7016__auto__ = null;
var soma_demo$core$state_machine__7016__auto____0 = (function (){
var statearr_23836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23836[(0)] = soma_demo$core$state_machine__7016__auto__);

(statearr_23836[(1)] = (1));

return statearr_23836;
});
var soma_demo$core$state_machine__7016__auto____1 = (function (state_23805){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_23805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e23837){if((e23837 instanceof Object)){
var ex__7019__auto__ = e23837;
var statearr_23838_23870 = state_23805;
(statearr_23838_23870[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23871 = state_23805;
state_23805 = G__23871;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
soma_demo$core$state_machine__7016__auto__ = function(state_23805){
switch(arguments.length){
case 0:
return soma_demo$core$state_machine__7016__auto____0.call(this);
case 1:
return soma_demo$core$state_machine__7016__auto____1.call(this,state_23805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$core$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$core$state_machine__7016__auto____0;
soma_demo$core$state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$core$state_machine__7016__auto____1;
return soma_demo$core$state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
})();
var state__7082__auto__ = (function (){var statearr_23839 = f__7081__auto__.call(null);
(statearr_23839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_23839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__,canvas_element,width,height,scene,camera,renderer,pieces))
);

return c__7080__auto__;
});

soma_demo.core.display_pieces_from_url.cljs$lang$maxFixedArity = 5;
/**
 * returns  the mean of the pieces coordinates used as center of gravity for explosions 
 */
soma_demo.core.center_of_piece = (function soma_demo$core$center_of_piece(p){
var vec__23877 = cljs.core.reduce.call(null,(function (p__23878,p__23879){
var vec__23880 = p__23878;
var ax = cljs.core.nth.call(null,vec__23880,(0),null);
var ay = cljs.core.nth.call(null,vec__23880,(1),null);
var az = cljs.core.nth.call(null,vec__23880,(2),null);
var vec__23881 = p__23879;
var px = cljs.core.nth.call(null,vec__23881,(0),null);
var py = cljs.core.nth.call(null,vec__23881,(1),null);
var pz = cljs.core.nth.call(null,vec__23881,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ax + px),(ay + py),(az + pz)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),p);
var tx = cljs.core.nth.call(null,vec__23877,(0),null);
var ty = cljs.core.nth.call(null,vec__23877,(1),null);
var tz = cljs.core.nth.call(null,vec__23877,(2),null);
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
return (function (mv,p__23898){
var vec__23899 = p__23898;
var _ = cljs.core.nth.call(null,vec__23899,(0),null);
var idv = cljs.core.nth.call(null,vec__23899,(1),null);
var vec__23900 = cljs.core.nth.call(null,vec__23899,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__23900,(0),null);
var coords = cljs.core.nthnext.call(null,vec__23900,(1));
return cljs.core.assoc.call(null,mv,idv,cljs.core.conj.call(null,cljs.core.get.call(null,mv,idv,cljs.core.PersistentVector.EMPTY),coords));
});})($,$__$1))
,cljs.core.PersistentArrayMap.EMPTY,$__$1);
return $__$2;
})();
var sln_geom = (new THREE.Object3D());
var pieces = (function (){var iter__5335__auto__ = ((function (sln_geom,resmap){
return (function soma_demo$core$create_cube_sln_$_iter__23901(s__23902){
return (new cljs.core.LazySeq(null,((function (sln_geom,resmap){
return (function (){
var s__23902__$1 = s__23902;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23902__$1);
if(temp__4425__auto__){
var s__23902__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23902__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__23902__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__23904 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__23903 = (0);
while(true){
if((i__23903 < size__5334__auto__)){
var vec__23909 = cljs.core._nth.call(null,c__5333__auto__,i__23903);
var idx = cljs.core.nth.call(null,vec__23909,(0),null);
var v = cljs.core.nth.call(null,vec__23909,(1),null);
cljs.core.chunk_append.call(null,b__23904,(function (){var piece_geom = soma_demo.core.create_piece_mesh.call(null,idx,v);
var G__23910_23914 = piece_geom;
G__23910_23914.position.set((0),(0),(0));


piece_geom.updateMatrix();

sln_geom.add(piece_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),piece_geom,new cljs.core.Keyword(null,"parts","parts",849007691),v], null);
})());

var G__23915 = (i__23903 + (1));
i__23903 = G__23915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23904),soma_demo$core$create_cube_sln_$_iter__23901.call(null,cljs.core.chunk_rest.call(null,s__23902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23904),null);
}
} else {
var vec__23911 = cljs.core.first.call(null,s__23902__$2);
var idx = cljs.core.nth.call(null,vec__23911,(0),null);
var v = cljs.core.nth.call(null,vec__23911,(1),null);
return cljs.core.cons.call(null,(function (){var piece_geom = soma_demo.core.create_piece_mesh.call(null,idx,v);
var G__23912_23916 = piece_geom;
G__23912_23916.position.set((0),(0),(0));


piece_geom.updateMatrix();

sln_geom.add(piece_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),piece_geom,new cljs.core.Keyword(null,"parts","parts",849007691),v], null);
})(),soma_demo$core$create_cube_sln_$_iter__23901.call(null,cljs.core.rest.call(null,s__23902__$2)));
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
return iter__5335__auto__.call(null,resmap);
})();
var outer_cube = (new THREE.Object3D());
var G__23913_23917 = sln_geom;
G__23913_23917.position.set((- (soma_demo.core.cubesize * 1.5)),(- (soma_demo.core.cubesize * 1.5)),(- (soma_demo.core.cubesize * 1.5)));


outer_cube.add(sln_geom);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geom","geom",1207084371),outer_cube,new cljs.core.Keyword(null,"pieces","pieces",-1436634023),pieces], null);
});
/**
 * Animator function which displaces a list of parts away from the origin by a given amount 
 */
soma_demo.core.animate_explode_part = (function soma_demo$core$animate_explode_part(geom,parts,v){
var vec__23920 = soma_demo.core.explode_translation.call(null,parts,v);
var x = cljs.core.nth.call(null,vec__23920,(0),null);
var y = cljs.core.nth.call(null,vec__23920,(1),null);
var z = cljs.core.nth.call(null,vec__23920,(2),null);
var G__23921 = geom;
G__23921.position.set(x,y,z);

return G__23921;
});
/**
 * Display a soma cube solution from a source answer set (edn) 
 */
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
var seq__24154 = cljs.core.seq.call(null,cljs.core.deref.call(null,cubes));
var chunk__24155 = null;
var count__24156 = (0);
var i__24157 = (0);
while(true){
if((i__24157 < count__24156)){
var map__24158 = cljs.core._nth.call(null,chunk__24155,i__24157);
var map__24158__$1 = ((((!((map__24158 == null)))?((((map__24158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24158):map__24158);
var cube_geom = cljs.core.get.call(null,map__24158__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var cube_pieces = cljs.core.get.call(null,map__24158__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
soma_demo.core.animate_spin.call(null,cube_geom,abs,rel);

var seq__24160_24386 = cljs.core.seq.call(null,cube_pieces);
var chunk__24161_24387 = null;
var count__24162_24388 = (0);
var i__24163_24389 = (0);
while(true){
if((i__24163_24389 < count__24162_24388)){
var map__24164_24390 = cljs.core._nth.call(null,chunk__24161_24387,i__24163_24389);
var map__24164_24391__$1 = ((((!((map__24164_24390 == null)))?((((map__24164_24390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24164_24390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24164_24390):map__24164_24390);
var piece_geom_24392 = cljs.core.get.call(null,map__24164_24391__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_24393 = cljs.core.get.call(null,map__24164_24391__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_24394 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_24392,parts_24393,Math.max((0),((150) * ((1) + v_24394))));

var G__24395 = seq__24160_24386;
var G__24396 = chunk__24161_24387;
var G__24397 = count__24162_24388;
var G__24398 = (i__24163_24389 + (1));
seq__24160_24386 = G__24395;
chunk__24161_24387 = G__24396;
count__24162_24388 = G__24397;
i__24163_24389 = G__24398;
continue;
} else {
var temp__4425__auto___24399 = cljs.core.seq.call(null,seq__24160_24386);
if(temp__4425__auto___24399){
var seq__24160_24400__$1 = temp__4425__auto___24399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24160_24400__$1)){
var c__5366__auto___24401 = cljs.core.chunk_first.call(null,seq__24160_24400__$1);
var G__24402 = cljs.core.chunk_rest.call(null,seq__24160_24400__$1);
var G__24403 = c__5366__auto___24401;
var G__24404 = cljs.core.count.call(null,c__5366__auto___24401);
var G__24405 = (0);
seq__24160_24386 = G__24402;
chunk__24161_24387 = G__24403;
count__24162_24388 = G__24404;
i__24163_24389 = G__24405;
continue;
} else {
var map__24166_24406 = cljs.core.first.call(null,seq__24160_24400__$1);
var map__24166_24407__$1 = ((((!((map__24166_24406 == null)))?((((map__24166_24406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24166_24406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24166_24406):map__24166_24406);
var piece_geom_24408 = cljs.core.get.call(null,map__24166_24407__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_24409 = cljs.core.get.call(null,map__24166_24407__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_24410 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_24408,parts_24409,Math.max((0),((150) * ((1) + v_24410))));

var G__24411 = cljs.core.next.call(null,seq__24160_24400__$1);
var G__24412 = null;
var G__24413 = (0);
var G__24414 = (0);
seq__24160_24386 = G__24411;
chunk__24161_24387 = G__24412;
count__24162_24388 = G__24413;
i__24163_24389 = G__24414;
continue;
}
} else {
}
}
break;
}

var G__24415 = seq__24154;
var G__24416 = chunk__24155;
var G__24417 = count__24156;
var G__24418 = (i__24157 + (1));
seq__24154 = G__24415;
chunk__24155 = G__24416;
count__24156 = G__24417;
i__24157 = G__24418;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24154);
if(temp__4425__auto__){
var seq__24154__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24154__$1)){
var c__5366__auto__ = cljs.core.chunk_first.call(null,seq__24154__$1);
var G__24419 = cljs.core.chunk_rest.call(null,seq__24154__$1);
var G__24420 = c__5366__auto__;
var G__24421 = cljs.core.count.call(null,c__5366__auto__);
var G__24422 = (0);
seq__24154 = G__24419;
chunk__24155 = G__24420;
count__24156 = G__24421;
i__24157 = G__24422;
continue;
} else {
var map__24168 = cljs.core.first.call(null,seq__24154__$1);
var map__24168__$1 = ((((!((map__24168 == null)))?((((map__24168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24168):map__24168);
var cube_geom = cljs.core.get.call(null,map__24168__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var cube_pieces = cljs.core.get.call(null,map__24168__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
soma_demo.core.animate_spin.call(null,cube_geom,abs,rel);

var seq__24170_24423 = cljs.core.seq.call(null,cube_pieces);
var chunk__24171_24424 = null;
var count__24172_24425 = (0);
var i__24173_24426 = (0);
while(true){
if((i__24173_24426 < count__24172_24425)){
var map__24174_24427 = cljs.core._nth.call(null,chunk__24171_24424,i__24173_24426);
var map__24174_24428__$1 = ((((!((map__24174_24427 == null)))?((((map__24174_24427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24174_24427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24174_24427):map__24174_24427);
var piece_geom_24429 = cljs.core.get.call(null,map__24174_24428__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_24430 = cljs.core.get.call(null,map__24174_24428__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_24431 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_24429,parts_24430,Math.max((0),((150) * ((1) + v_24431))));

var G__24432 = seq__24170_24423;
var G__24433 = chunk__24171_24424;
var G__24434 = count__24172_24425;
var G__24435 = (i__24173_24426 + (1));
seq__24170_24423 = G__24432;
chunk__24171_24424 = G__24433;
count__24172_24425 = G__24434;
i__24173_24426 = G__24435;
continue;
} else {
var temp__4425__auto___24436__$1 = cljs.core.seq.call(null,seq__24170_24423);
if(temp__4425__auto___24436__$1){
var seq__24170_24437__$1 = temp__4425__auto___24436__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24170_24437__$1)){
var c__5366__auto___24438 = cljs.core.chunk_first.call(null,seq__24170_24437__$1);
var G__24439 = cljs.core.chunk_rest.call(null,seq__24170_24437__$1);
var G__24440 = c__5366__auto___24438;
var G__24441 = cljs.core.count.call(null,c__5366__auto___24438);
var G__24442 = (0);
seq__24170_24423 = G__24439;
chunk__24171_24424 = G__24440;
count__24172_24425 = G__24441;
i__24173_24426 = G__24442;
continue;
} else {
var map__24176_24443 = cljs.core.first.call(null,seq__24170_24437__$1);
var map__24176_24444__$1 = ((((!((map__24176_24443 == null)))?((((map__24176_24443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24176_24443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24176_24443):map__24176_24443);
var piece_geom_24445 = cljs.core.get.call(null,map__24176_24444__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var parts_24446 = cljs.core.get.call(null,map__24176_24444__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var v_24447 = Math.sin((abs / (2000)));
soma_demo.core.animate_explode_part.call(null,piece_geom_24445,parts_24446,Math.max((0),((150) * ((1) + v_24447))));

var G__24448 = cljs.core.next.call(null,seq__24170_24437__$1);
var G__24449 = null;
var G__24450 = (0);
var G__24451 = (0);
seq__24170_24423 = G__24448;
chunk__24171_24424 = G__24449;
count__24172_24425 = G__24450;
i__24173_24426 = G__24451;
continue;
}
} else {
}
}
break;
}

var G__24452 = cljs.core.next.call(null,seq__24154__$1);
var G__24453 = null;
var G__24454 = (0);
var G__24455 = (0);
seq__24154 = G__24452;
chunk__24155 = G__24453;
count__24156 = G__24454;
i__24157 = G__24455;
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

var c__7080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7080__auto__,canvas_element,width,height,scene,camera,renderer,cubes){
return (function (){
var f__7081__auto__ = (function (){var switch__7015__auto__ = ((function (c__7080__auto__,canvas_element,width,height,scene,camera,renderer,cubes){
return (function (state_24329){
var state_val_24330 = (state_24329[(1)]);
if((state_val_24330 === (7))){
var inst_24325 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
var statearr_24331_24456 = state_24329__$1;
(statearr_24331_24456[(2)] = inst_24325);

(statearr_24331_24456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (20))){
var inst_24256 = (state_24329[(7)]);
var inst_24260 = cljs.core.chunk_first.call(null,inst_24256);
var inst_24261 = cljs.core.chunk_rest.call(null,inst_24256);
var inst_24262 = cljs.core.count.call(null,inst_24260);
var inst_24193 = inst_24261;
var inst_24194 = inst_24260;
var inst_24195 = inst_24262;
var inst_24196 = (0);
var state_24329__$1 = (function (){var statearr_24332 = state_24329;
(statearr_24332[(8)] = inst_24195);

(statearr_24332[(9)] = inst_24194);

(statearr_24332[(10)] = inst_24196);

(statearr_24332[(11)] = inst_24193);

return statearr_24332;
})();
var statearr_24333_24457 = state_24329__$1;
(statearr_24333_24457[(2)] = null);

(statearr_24333_24457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (27))){
var state_24329__$1 = state_24329;
var statearr_24334_24458 = state_24329__$1;
(statearr_24334_24458[(2)] = false);

(statearr_24334_24458[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (1))){
var inst_24178 = soma_demo.solver_client.fetch_answerset.call(null,url);
var state_24329__$1 = state_24329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24329__$1,(2),inst_24178);
} else {
if((state_val_24330 === (24))){
var state_24329__$1 = state_24329;
var statearr_24335_24459 = state_24329__$1;
(statearr_24335_24459[(2)] = false);

(statearr_24335_24459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (4))){
var inst_24327 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24329__$1,inst_24327);
} else {
if((state_val_24330 === (15))){
var inst_24208 = (state_24329[(12)]);
var state_24329__$1 = state_24329;
var statearr_24336_24460 = state_24329__$1;
(statearr_24336_24460[(2)] = inst_24208);

(statearr_24336_24460[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (21))){
var inst_24267 = (state_24329[(13)]);
var inst_24272 = (state_24329[(14)]);
var inst_24256 = (state_24329[(7)]);
var inst_24266 = cljs.core.first.call(null,inst_24256);
var inst_24267__$1 = cljs.core.nth.call(null,inst_24266,(0),null);
var inst_24268 = cljs.core.nth.call(null,inst_24266,(1),null);
var inst_24269 = cljs.core.println.call(null,"creating",inst_24267__$1," for solution ",inst_24268);
var inst_24272__$1 = soma_demo.core.create_cube_sln.call(null,inst_24268);
var inst_24274 = (inst_24272__$1 == null);
var inst_24275 = cljs.core.not.call(null,inst_24274);
var state_24329__$1 = (function (){var statearr_24337 = state_24329;
(statearr_24337[(15)] = inst_24269);

(statearr_24337[(13)] = inst_24267__$1);

(statearr_24337[(14)] = inst_24272__$1);

return statearr_24337;
})();
if(inst_24275){
var statearr_24338_24461 = state_24329__$1;
(statearr_24338_24461[(1)] = (23));

} else {
var statearr_24339_24462 = state_24329__$1;
(statearr_24339_24462[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (31))){
var inst_24183 = (state_24329[(16)]);
var inst_24185 = (state_24329[(17)]);
var inst_24267 = (state_24329[(13)]);
var inst_24186 = (state_24329[(18)]);
var inst_24256 = (state_24329[(7)]);
var inst_24292 = (state_24329[(2)]);
var inst_24293 = cljs.core.get.call(null,inst_24292,new cljs.core.Keyword(null,"geom","geom",1207084371));
var inst_24294 = cljs.core.get.call(null,inst_24292,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var inst_24295 = (inst_24267 / cols);
var inst_24296 = Math.floor(inst_24295);
var inst_24297 = cljs.core.mod.call(null,inst_24267,cols);
var inst_24298 = ((2) * soma_demo.core.cubesize);
var inst_24299 = ((2) * soma_demo.core.cubesize);
var inst_24300 = soma_demo.core.place_piece.call(null,inst_24183,cols,inst_24298,inst_24299,inst_24297,inst_24296);
var inst_24301 = cljs.core.nth.call(null,inst_24300,(0),null);
var inst_24302 = cljs.core.nth.call(null,inst_24300,(1),null);
var inst_24304 = inst_24293.position;
var inst_24305 = inst_24304.set(inst_24301,inst_24302,(0));
var inst_24307 = inst_24293.scale;
var inst_24308 = inst_24307.set(inst_24185,inst_24185,inst_24185);
var inst_24309 = inst_24186.add(inst_24293);
var inst_24310 = cljs.core.deref.call(null,cubes);
var inst_24311 = cljs.core.conj.call(null,inst_24310,inst_24292);
var inst_24312 = cljs.core.reset_BANG_.call(null,cubes,inst_24311);
var inst_24314 = inst_24186.scale;
var inst_24315 = inst_24314.set(ws_scale,ws_scale,ws_scale);
var inst_24316 = scene.add(inst_24186);
var inst_24317 = cljs.core.next.call(null,inst_24256);
var inst_24193 = inst_24317;
var inst_24194 = null;
var inst_24195 = (0);
var inst_24196 = (0);
var state_24329__$1 = (function (){var statearr_24340 = state_24329;
(statearr_24340[(8)] = inst_24195);

(statearr_24340[(19)] = inst_24305);

(statearr_24340[(9)] = inst_24194);

(statearr_24340[(20)] = inst_24308);

(statearr_24340[(10)] = inst_24196);

(statearr_24340[(21)] = inst_24294);

(statearr_24340[(22)] = inst_24312);

(statearr_24340[(23)] = inst_24316);

(statearr_24340[(24)] = inst_24315);

(statearr_24340[(25)] = inst_24309);

(statearr_24340[(11)] = inst_24193);

return statearr_24340;
})();
var statearr_24341_24463 = state_24329__$1;
(statearr_24341_24463[(2)] = null);

(statearr_24341_24463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (13))){
var inst_24220 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
var statearr_24342_24464 = state_24329__$1;
(statearr_24342_24464[(2)] = inst_24220);

(statearr_24342_24464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (22))){
var inst_24320 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
var statearr_24343_24465 = state_24329__$1;
(statearr_24343_24465[(2)] = inst_24320);

(statearr_24343_24465[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (29))){
var inst_24272 = (state_24329[(14)]);
var inst_24289 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24272);
var state_24329__$1 = state_24329;
var statearr_24344_24466 = state_24329__$1;
(statearr_24344_24466[(2)] = inst_24289);

(statearr_24344_24466[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (6))){
var inst_24256 = (state_24329[(7)]);
var inst_24193 = (state_24329[(11)]);
var inst_24256__$1 = cljs.core.seq.call(null,inst_24193);
var state_24329__$1 = (function (){var statearr_24345 = state_24329;
(statearr_24345[(7)] = inst_24256__$1);

return statearr_24345;
})();
if(inst_24256__$1){
var statearr_24346_24467 = state_24329__$1;
(statearr_24346_24467[(1)] = (17));

} else {
var statearr_24347_24468 = state_24329__$1;
(statearr_24347_24468[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (28))){
var inst_24284 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
var statearr_24348_24469 = state_24329__$1;
(statearr_24348_24469[(2)] = inst_24284);

(statearr_24348_24469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (25))){
var inst_24287 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
if(cljs.core.truth_(inst_24287)){
var statearr_24349_24470 = state_24329__$1;
(statearr_24349_24470[(1)] = (29));

} else {
var statearr_24350_24471 = state_24329__$1;
(statearr_24350_24471[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (17))){
var inst_24256 = (state_24329[(7)]);
var inst_24258 = cljs.core.chunked_seq_QMARK_.call(null,inst_24256);
var state_24329__$1 = state_24329;
if(inst_24258){
var statearr_24351_24472 = state_24329__$1;
(statearr_24351_24472[(1)] = (20));

} else {
var statearr_24352_24473 = state_24329__$1;
(statearr_24352_24473[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (3))){
var inst_24195 = (state_24329[(8)]);
var inst_24196 = (state_24329[(10)]);
var inst_24198 = (inst_24196 < inst_24195);
var inst_24199 = inst_24198;
var state_24329__$1 = state_24329;
if(cljs.core.truth_(inst_24199)){
var statearr_24353_24474 = state_24329__$1;
(statearr_24353_24474[(1)] = (5));

} else {
var statearr_24354_24475 = state_24329__$1;
(statearr_24354_24475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (12))){
var state_24329__$1 = state_24329;
var statearr_24355_24476 = state_24329__$1;
(statearr_24355_24476[(2)] = false);

(statearr_24355_24476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (2))){
var inst_24183 = (state_24329[(16)]);
var inst_24180 = (state_24329[(2)]);
var inst_24181 = cljs.core.count.call(null,inst_24180);
var inst_24182 = (inst_24181 / cols);
var inst_24183__$1 = Math.ceil(inst_24182);
var inst_24184 = ((1) / inst_24183__$1);
var inst_24185 = ((5) * inst_24184);
var inst_24186 = (new THREE.Object3D());
var inst_24191 = cljs.core.map_indexed.call(null,cljs.core.vector,inst_24180);
var inst_24192 = cljs.core.seq.call(null,inst_24191);
var inst_24193 = inst_24192;
var inst_24194 = null;
var inst_24195 = (0);
var inst_24196 = (0);
var state_24329__$1 = (function (){var statearr_24356 = state_24329;
(statearr_24356[(16)] = inst_24183__$1);

(statearr_24356[(17)] = inst_24185);

(statearr_24356[(8)] = inst_24195);

(statearr_24356[(9)] = inst_24194);

(statearr_24356[(10)] = inst_24196);

(statearr_24356[(18)] = inst_24186);

(statearr_24356[(11)] = inst_24193);

return statearr_24356;
})();
var statearr_24357_24477 = state_24329__$1;
(statearr_24357_24477[(2)] = null);

(statearr_24357_24477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (23))){
var inst_24272 = (state_24329[(14)]);
var inst_24277 = inst_24272.cljs$lang$protocol_mask$partition0$;
var inst_24278 = (inst_24277 & (64));
var inst_24279 = inst_24272.cljs$core$ISeq$;
var inst_24280 = (inst_24278) || (inst_24279);
var state_24329__$1 = state_24329;
if(cljs.core.truth_(inst_24280)){
var statearr_24358_24478 = state_24329__$1;
(statearr_24358_24478[(1)] = (26));

} else {
var statearr_24359_24479 = state_24329__$1;
(statearr_24359_24479[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (19))){
var inst_24323 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
var statearr_24360_24480 = state_24329__$1;
(statearr_24360_24480[(2)] = inst_24323);

(statearr_24360_24480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (11))){
var state_24329__$1 = state_24329;
var statearr_24361_24481 = state_24329__$1;
(statearr_24361_24481[(2)] = true);

(statearr_24361_24481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (9))){
var state_24329__$1 = state_24329;
var statearr_24362_24482 = state_24329__$1;
(statearr_24362_24482[(2)] = false);

(statearr_24362_24482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (5))){
var inst_24203 = (state_24329[(26)]);
var inst_24208 = (state_24329[(12)]);
var inst_24194 = (state_24329[(9)]);
var inst_24196 = (state_24329[(10)]);
var inst_24202 = cljs.core._nth.call(null,inst_24194,inst_24196);
var inst_24203__$1 = cljs.core.nth.call(null,inst_24202,(0),null);
var inst_24204 = cljs.core.nth.call(null,inst_24202,(1),null);
var inst_24205 = cljs.core.println.call(null,"creating",inst_24203__$1," for solution ",inst_24204);
var inst_24208__$1 = soma_demo.core.create_cube_sln.call(null,inst_24204);
var inst_24210 = (inst_24208__$1 == null);
var inst_24211 = cljs.core.not.call(null,inst_24210);
var state_24329__$1 = (function (){var statearr_24363 = state_24329;
(statearr_24363[(26)] = inst_24203__$1);

(statearr_24363[(12)] = inst_24208__$1);

(statearr_24363[(27)] = inst_24205);

return statearr_24363;
})();
if(inst_24211){
var statearr_24364_24483 = state_24329__$1;
(statearr_24364_24483[(1)] = (8));

} else {
var statearr_24365_24484 = state_24329__$1;
(statearr_24365_24484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (14))){
var inst_24208 = (state_24329[(12)]);
var inst_24225 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24208);
var state_24329__$1 = state_24329;
var statearr_24369_24485 = state_24329__$1;
(statearr_24369_24485[(2)] = inst_24225);

(statearr_24369_24485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (26))){
var state_24329__$1 = state_24329;
var statearr_24370_24486 = state_24329__$1;
(statearr_24370_24486[(2)] = true);

(statearr_24370_24486[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (16))){
var inst_24183 = (state_24329[(16)]);
var inst_24203 = (state_24329[(26)]);
var inst_24185 = (state_24329[(17)]);
var inst_24195 = (state_24329[(8)]);
var inst_24194 = (state_24329[(9)]);
var inst_24196 = (state_24329[(10)]);
var inst_24186 = (state_24329[(18)]);
var inst_24193 = (state_24329[(11)]);
var inst_24228 = (state_24329[(2)]);
var inst_24229 = cljs.core.get.call(null,inst_24228,new cljs.core.Keyword(null,"geom","geom",1207084371));
var inst_24230 = cljs.core.get.call(null,inst_24228,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var inst_24231 = (inst_24203 / cols);
var inst_24232 = Math.floor(inst_24231);
var inst_24233 = cljs.core.mod.call(null,inst_24203,cols);
var inst_24234 = ((2) * soma_demo.core.cubesize);
var inst_24235 = ((2) * soma_demo.core.cubesize);
var inst_24236 = soma_demo.core.place_piece.call(null,inst_24183,cols,inst_24234,inst_24235,inst_24233,inst_24232);
var inst_24237 = cljs.core.nth.call(null,inst_24236,(0),null);
var inst_24238 = cljs.core.nth.call(null,inst_24236,(1),null);
var inst_24240 = inst_24229.position;
var inst_24241 = inst_24240.set(inst_24237,inst_24238,(0));
var inst_24243 = inst_24229.scale;
var inst_24244 = inst_24243.set(inst_24185,inst_24185,inst_24185);
var inst_24245 = inst_24186.add(inst_24229);
var inst_24246 = cljs.core.deref.call(null,cubes);
var inst_24247 = cljs.core.conj.call(null,inst_24246,inst_24228);
var inst_24248 = cljs.core.reset_BANG_.call(null,cubes,inst_24247);
var inst_24250 = inst_24186.scale;
var inst_24251 = inst_24250.set(ws_scale,ws_scale,ws_scale);
var inst_24252 = scene.add(inst_24186);
var inst_24253 = (inst_24196 + (1));
var tmp24366 = inst_24195;
var tmp24367 = inst_24194;
var tmp24368 = inst_24193;
var inst_24193__$1 = tmp24368;
var inst_24194__$1 = tmp24367;
var inst_24195__$1 = tmp24366;
var inst_24196__$1 = inst_24253;
var state_24329__$1 = (function (){var statearr_24371 = state_24329;
(statearr_24371[(28)] = inst_24252);

(statearr_24371[(29)] = inst_24248);

(statearr_24371[(8)] = inst_24195__$1);

(statearr_24371[(30)] = inst_24245);

(statearr_24371[(9)] = inst_24194__$1);

(statearr_24371[(10)] = inst_24196__$1);

(statearr_24371[(31)] = inst_24244);

(statearr_24371[(32)] = inst_24241);

(statearr_24371[(33)] = inst_24230);

(statearr_24371[(11)] = inst_24193__$1);

(statearr_24371[(34)] = inst_24251);

return statearr_24371;
})();
var statearr_24372_24487 = state_24329__$1;
(statearr_24372_24487[(2)] = null);

(statearr_24372_24487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (30))){
var inst_24272 = (state_24329[(14)]);
var state_24329__$1 = state_24329;
var statearr_24373_24488 = state_24329__$1;
(statearr_24373_24488[(2)] = inst_24272);

(statearr_24373_24488[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (10))){
var inst_24223 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
if(cljs.core.truth_(inst_24223)){
var statearr_24374_24489 = state_24329__$1;
(statearr_24374_24489[(1)] = (14));

} else {
var statearr_24375_24490 = state_24329__$1;
(statearr_24375_24490[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (18))){
var state_24329__$1 = state_24329;
var statearr_24376_24491 = state_24329__$1;
(statearr_24376_24491[(2)] = null);

(statearr_24376_24491[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (8))){
var inst_24208 = (state_24329[(12)]);
var inst_24213 = inst_24208.cljs$lang$protocol_mask$partition0$;
var inst_24214 = (inst_24213 & (64));
var inst_24215 = inst_24208.cljs$core$ISeq$;
var inst_24216 = (inst_24214) || (inst_24215);
var state_24329__$1 = state_24329;
if(cljs.core.truth_(inst_24216)){
var statearr_24377_24492 = state_24329__$1;
(statearr_24377_24492[(1)] = (11));

} else {
var statearr_24378_24493 = state_24329__$1;
(statearr_24378_24493[(1)] = (12));

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
});})(c__7080__auto__,canvas_element,width,height,scene,camera,renderer,cubes))
;
return ((function (switch__7015__auto__,c__7080__auto__,canvas_element,width,height,scene,camera,renderer,cubes){
return (function() {
var soma_demo$core$display_sln_from_url_$_state_machine__7016__auto__ = null;
var soma_demo$core$display_sln_from_url_$_state_machine__7016__auto____0 = (function (){
var statearr_24382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24382[(0)] = soma_demo$core$display_sln_from_url_$_state_machine__7016__auto__);

(statearr_24382[(1)] = (1));

return statearr_24382;
});
var soma_demo$core$display_sln_from_url_$_state_machine__7016__auto____1 = (function (state_24329){
while(true){
var ret_value__7017__auto__ = (function (){try{while(true){
var result__7018__auto__ = switch__7015__auto__.call(null,state_24329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7018__auto__;
}
break;
}
}catch (e24383){if((e24383 instanceof Object)){
var ex__7019__auto__ = e24383;
var statearr_24384_24494 = state_24329;
(statearr_24384_24494[(5)] = ex__7019__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24495 = state_24329;
state_24329 = G__24495;
continue;
} else {
return ret_value__7017__auto__;
}
break;
}
});
soma_demo$core$display_sln_from_url_$_state_machine__7016__auto__ = function(state_24329){
switch(arguments.length){
case 0:
return soma_demo$core$display_sln_from_url_$_state_machine__7016__auto____0.call(this);
case 1:
return soma_demo$core$display_sln_from_url_$_state_machine__7016__auto____1.call(this,state_24329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soma_demo$core$display_sln_from_url_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$0 = soma_demo$core$display_sln_from_url_$_state_machine__7016__auto____0;
soma_demo$core$display_sln_from_url_$_state_machine__7016__auto__.cljs$core$IFn$_invoke$arity$1 = soma_demo$core$display_sln_from_url_$_state_machine__7016__auto____1;
return soma_demo$core$display_sln_from_url_$_state_machine__7016__auto__;
})()
;})(switch__7015__auto__,c__7080__auto__,canvas_element,width,height,scene,camera,renderer,cubes))
})();
var state__7082__auto__ = (function (){var statearr_24385 = f__7081__auto__.call(null);
(statearr_24385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7080__auto__);

return statearr_24385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7082__auto__);
});})(c__7080__auto__,canvas_element,width,height,scene,camera,renderer,cubes))
);

return c__7080__auto__;
});
soma_demo.core.on_js_reload = (function soma_demo$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1447059444242