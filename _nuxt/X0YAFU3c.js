import m from"./Db0JGh20.js";import f from"./Demsv74h.js";import y from"./D2qm6cRf.js";import{r as n}from"./DTkIsJBo.js";import{d as _,c as o,e as a,f as s,g as r,F as h,X as c,w as k,k as i,t as l,Z as v,l as $}from"./wNidKai9.js";import"./2ETV-d1z.js";import"./BylBga0z.js";const w={class:"block-hero"},B={class:"layout"},g={class:"content"},S={key:0,class:"announce"},q={class:"title"},H={class:"description"},V={key:1,class:"extra"},b={class:"actions"},A=["href"],C={class:"support"},N=_({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,T)=>{const d=m,u=f,p=y;return o(),a("section",w,[s("div",B,[s("div",g,[t.$slots.announce?(o(),a("p",S,[n(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):r("",!0),s("h1",q,[n(t.$slots,"title",{unwrap:"p"},()=>[i(" Hero Title ")],!0)]),s("p",H,[n(t.$slots,"description",{unwrap:"p"},()=>[i(" Hero default description. ")],!0)]),t.$slots.extra?(o(),a("div",V,[n(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):r("",!0),s("div",b,[t.$slots.actions?n(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),a(h,{key:1},[e.cta?(o(),c(d,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:k(()=>[i(l(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(o(),a("a",{key:1,href:e.secondary[1],class:"secondary"},l(e.secondary[0]),9,A)):r("",!0)],64))])]),s("div",C,[v(t.$slots,"support",{},()=>[e.snippet?(o(),c(u,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),c(p,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}}),P=$(N,[["__scopeId","data-v-56a0be1c"]]);export{P as default};
