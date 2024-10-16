import{a as T}from"./chunk-CNSQHFGC.js";import{a as F}from"./chunk-CPZ5TQFA.js";import{a as N}from"./chunk-JFMVKKMC.js";import{m as w,o as O}from"./chunk-BTJ4JXKR.js";import{$ as v,A as S,D as p,I as b,Q as _,R as r,S as h,W as f,X as s,Z as n,_ as i,a as u,ba as A,ca as g,da as l,ea as y,fa as c,ia as m,na as I,oa as C,pa as d,ra as D,sa as P,va as M}from"./chunk-ZH3N2TKB.js";import"./chunk-GABUHZQP.js";import"./chunk-5AFINJGR.js";function q(t,x){if(t&1&&(n(0,"div")(1,"p"),l(2),i(),n(3,"p"),l(4),i(),n(5,"p"),l(6),i(),n(7,"p"),l(8),i(),n(9,"p"),l(10),i()()),t&2){let e=g();r(2),c("Nombre: ",e.actor.nombre,""),r(2),c("Apellido: ",e.actor.apellido,""),r(2),c("Edad: ",e.actor.edad,""),r(2),c("DNI: ",e.actor.dni,""),r(2),c("Pais: ",e.actor.pais,"")}}var R=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-detalle-actor"]],inputs:{actor:"actor"},standalone:!0,features:[m],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(o,a){o&1&&f(0,q,11,5,"div",0),o&2&&s("ngIf",a.actor)},dependencies:[d,C]})}}return t})();function z(t,x){if(t&1&&(n(0,"div")(1,"p"),l(2),i(),n(3,"p"),l(4),i(),n(5,"p"),l(6),i(),n(7,"p"),l(8),i(),n(9,"p"),v(10,"img",1),i()()),t&2){let e=g();r(2),c("Nombre comun: ",e.pais.name.common,""),r(2),c("Capital: ",e.pais.capital,""),r(2),c("Region: ",e.pais.region,""),r(2),c("Poblacion: ",e.pais.population,""),r(2),s("src",e.pais.flags.png,_)}}var V=(()=>{class t{constructor(e){this.paisService=e,this.paisesSubscription=new u}ngOnChanges(e){if(console.log("aca detalle pais"),e.nombrePais&&e.nombrePais.currentValue){let o=e.nombrePais.currentValue;this.paisesSubscription=this.paisService.obtenerPaisPorNombre(o).subscribe(a=>{a?this.pais=a[0]:console.log("El pais no fue encontrado la API.")})}}ngOnDestroy(){this.paisesSubscription&&this.paisesSubscription.unsubscribe()}static{this.\u0275fac=function(o){return new(o||t)(h(N))}}static{this.\u0275cmp=p({type:t,selectors:[["app-detalle-pais"]],inputs:{nombrePais:"nombrePais"},standalone:!0,features:[b,m],decls:1,vars:1,consts:[[4,"ngIf"],["alt","Bandera del pais","width","100",3,"src"]],template:function(o,a){o&1&&f(0,z,11,5,"div",0),o&2&&s("ngIf",a.pais)},dependencies:[d,C]})}}return t})();function B(t,x){if(t&1&&(n(0,"li",5)(1,"div")(2,"h6",6),l(3),i()()()),t&2){let e=x.$implicit;r(3),y(e.nombre)}}var H=(()=>{class t{constructor(e){this.peliculaService=e,this.peliculasActor=[],this.peliculasSubscription=new u}ngOnChanges(e){if(console.log("aca peliculas actor"),console.log(this.actor_uid),e.actor_uid&&e.actor_uid.currentValue){let o=e.actor_uid.currentValue;this.peliculasSubscription=this.peliculaService.obtenerPeliculasPorProtagonista(o).subscribe(a=>{a?this.peliculasActor=a:console.log("El actor no actua en ninguna pelocula.")})}}ngOnDestroy(){this.peliculasSubscription&&this.peliculasSubscription.unsubscribe()}static{this.\u0275fac=function(o){return new(o||t)(h(F))}}static{this.\u0275cmp=p({type:t,selectors:[["app-peliculas-actor"]],inputs:{actor_uid:"actor_uid"},standalone:!0,features:[b,m],decls:8,vars:2,consts:[[1,"container-fluid","py-5"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"badge","bg-primary","rounded-pill"],[1,"list-group","mb-3"],["class","list-group-item d-flex justify-content-between lh-sm",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","lh-sm"],[1,"my-0"]],template:function(o,a){o&1&&(n(0,"div",0)(1,"div",1)(2,"h2"),l(3,"Pel\xEDculas del actor"),i(),n(4,"span",2),l(5),i()(),n(6,"ul",3),f(7,B,4,1,"li",4),i()()),o&2&&(r(5),y(a.peliculasActor.length),r(2),s("ngForOf",a.peliculasActor))},dependencies:[d,I]})}}return t})();var ue=(()=>{class t{constructor(){this.listaActores=[],this.actoresSubscription=new u,this.router=S(M),this.http=S(D),this.actorService=S(O),this.errorMessage=null,this.actorSeleccionado=null}ngOnInit(){this.obtenerActores()}ngOnDestroy(){this.actoresSubscription&&this.actoresSubscription.unsubscribe()}obtenerActores(){this.actoresSubscription=this.actorService.obtenerActores().subscribe(e=>{this.listaActores=e})}mostrarDetalle(e){this.actorSeleccionado=e}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-actores"]],standalone:!0,features:[m],decls:27,vars:5,consts:[[1,"container","py-3"],[1,"pricing-header","p-3","pb-md-4","mx-auto","text-center"],[1,"display-4","fw-normal"],[1,"row"],[1,"container-fluid","py-5"],[1,"col-md-5","col-lg-4","order-md-last"],[3,"actorSeleccionado","actores"],[1,"col"],[1,"card","mb-4","rounded-3","shadow-sm"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[3,"actor"],[3,"nombrePais"],[3,"actor_uid"]],template:function(o,a){o&1&&(n(0,"div",0)(1,"header")(2,"div",1)(3,"h1",2),l(4,"Actores"),i()()(),n(5,"main")(6,"div",3)(7,"div",4)(8,"div",5)(9,"app-tabla-actores",6),A("actorSeleccionado",function(U){return a.mostrarDetalle(U)}),i()()(),n(10,"div",7)(11,"div",8)(12,"div",4)(13,"div",9)(14,"h2"),l(15,"Detalle actor seleccionado"),i()(),v(16,"app-detalle-actor",10),i()()(),n(17,"div",7)(18,"div",8)(19,"div",4)(20,"div",9)(21,"h2"),l(22),i()(),v(23,"app-detalle-pais",11),i()()(),n(24,"div",7)(25,"div",8),v(26,"app-peliculas-actor",12),i()()()()()),o&2&&(r(9),s("actores",a.listaActores),r(7),s("actor",a.actorSeleccionado),r(6),c("Detalle del pais: ",a.actorSeleccionado==null?null:a.actorSeleccionado.pais,""),r(),s("nombrePais",a.actorSeleccionado==null?null:a.actorSeleccionado.pais),r(3),s("actor_uid",a.actorSeleccionado==null?null:a.actorSeleccionado.uid))},dependencies:[d,w,P,T,R,V,H]})}}return t})();export{ue as ActoresComponent};
