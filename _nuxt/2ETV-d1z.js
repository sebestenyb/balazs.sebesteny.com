const y=["p","h1","h2","h3","h4","h5","h6","li"];function f(r,t){return r.type===t||typeof r.type=="object"&&r.type.tag===t||r.tag===t}function n(r){return f(r,"text")||f(r,Symbol.for("v-txt"))}function l(r){var t;return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof((t=r.children)==null?void 0:t.default)=="function"?r.children.default():[]}function u(r){if(!r)return"";if(Array.isArray(r))return r.map(u).join("");if(n(r))return r.children||r.value||"";const t=l(r);return Array.isArray(t)?t.map(u).filter(Boolean).join(""):""}function h(r,t=[]){if(Array.isArray(r))return r.flatMap(e=>h(e,t));let i=r;return t.some(e=>e==="*"||f(r,e))&&(i=l(r)||r,!Array.isArray(i)&&y.some(e=>f(r,e))&&(i=[i])),i}function p(r,t=[]){return r=Array.isArray(r)?r:[r],t.length?r.flatMap(i=>p(h(i,[t[0]]),t.slice(1))).filter(i=>!(n(i)&&u(i).trim()==="")):r}function a(r,t=[]){return typeof t=="string"&&(t=t.split(",").map(i=>i.trim()).filter(Boolean)),t.length?p(r,t).reduce((i,e)=>(n(e)?typeof i[i.length-1]=="string"?i[i.length-1]+=e.children:i.push(e.children):i.push(e),i),[]):r}export{a as f,h as u};
//# sourceMappingURL=2ETV-d1z.js.map
