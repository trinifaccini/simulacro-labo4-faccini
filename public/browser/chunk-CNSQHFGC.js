import{D as m,J as p,K as d,O as u,R as r,W as f,X as l,Z as i,_ as n,aa as g,ba as _,ca as s,da as a,ea as C,ga as b,ia as S,ja as x,ma as y,na as h,pa as v}from"./chunk-ZH3N2TKB.js";var T=t=>({selected:t});function A(t,E){if(t&1){let e=g();i(0,"li",5),_("click",function(){let c=p(e).$implicit,w=s();return d(w.seleccionarActor(c))}),i(1,"div")(2,"h6",6),a(3),n()()()}if(t&2){let e=E.$implicit,o=s();l("ngClass",x(3,T,e===o.actorSeleccionadoLista)),r(3),b("",e.nombre," ",e.apellido,"")}}var V=(()=>{class t{constructor(){this.actores=[],this.actorSeleccionado=new u}seleccionarActor(e){this.actorSeleccionadoLista=e,this.actorSeleccionado.emit(e)}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-tabla-actores"]],inputs:{actores:"actores"},outputs:{actorSeleccionado:"actorSeleccionado"},standalone:!0,features:[S],decls:7,vars:2,consts:[[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"display-5","fw-bold"],[1,"badge","bg-primary","rounded-pill"],[1,"list-group","mb-3"],["class","list-group-item d-flex justify-content-between lh-sm",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","lh-sm",3,"click","ngClass"],[1,"my-0"]],template:function(o,c){o&1&&(i(0,"div",0)(1,"h2",1),a(2,"Listado actores "),n(),i(3,"span",2),a(4),n()(),i(5,"ul",3),f(6,A,4,5,"li",4),n()),o&2&&(r(4),C(c.actores.length),r(2),l("ngForOf",c.actores))},dependencies:[v,y,h],styles:[".selected[_ngcontent-%COMP%]{background-color:#007bff;color:#fff}"]})}}return t})();export{V as a};
