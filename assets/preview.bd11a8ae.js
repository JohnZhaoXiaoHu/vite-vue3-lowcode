var e=Object.defineProperty,n=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,r=(n,o,t)=>o in n?e(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,l=(e,l)=>{for(var a in l||(l={}))n.call(l,a)&&r(e,a,l[a]);if(o)for(var a of o(l))t.call(l,a)&&r(e,a,l[a]);return e};import{v as a}from"./visual.config.453702f9.js";import{d as s,f as p,o as i,c as m,b as c,ad as f,B as u,a as d,F as g,r as b,t as v}from"./json.worker.facf0d2f.js";var y={name:"SlotItem",components:{CompRender:s({name:"CompRender",props:{element:{type:Object,default:()=>({})},config:{type:Object,default:()=>({})}},setup:e=>()=>e.config.componentMap[e.element.componentKey].render({size:{},props:e.element.props||{},model:{},block:e.element,custom:{}})})},props:{element:{type:[Object,Array],default:()=>({})},config:{type:Object,default:()=>({})}}};y.render=function(e,n,o,t,r,l){var a;const s=p("slot-item",!0),b=p("comp-render");return i(),m("div",null,[c(b,{element:o.element,config:o.config},f({_:2},[u(null==(a=o.element.props)?void 0:a.slots,((e,n)=>({name:n,fn:d((()=>[(i(!0),m(g,null,u(null==e?void 0:e.children,(e=>(i(),m(s,{key:e._vid,element:e,config:o.config},null,8,["element","config"])))),128))]))})))]),1032,["element","config"])])};var j=s({name:"Preview",components:{SlotItem:y},emits:["update:visible"],setup(e){const n=b({jsonData:JSON.parse(sessionStorage.getItem("blocks")||"{}")}),o=n=>{if(Array.isArray(n))return n.map((e=>o(e)));return e.config.componentMap[n.componentKey].render({size:{},props:n.props||{},block:n,model:{},custom:{}})};return l(l({},v(n)),{visualConfig:a,renderCom:o})}});j.render=function(e,n){const o=p("slot-item");return i(!0),m(g,null,u(e.jsonData,(n=>(i(),m(o,{key:n._vid,element:n,config:e.visualConfig},null,8,["element","config"])))),128)};export default j;
