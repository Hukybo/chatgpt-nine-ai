
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as Q,y as te,ad as ae,A as se,r as m,ae as le,B as ne,C as A,x as oe,M as H,F as h,af as F,o as b,c as C,a as i,l as z,e as n,f as u,b as p,U as ue,j as x,k,t as B,J,N as O,R as G,G as q,_ as re,h as D,m as ce,I as ie,n as fe}from"./index-be23d7e6.js";const de={class:"container"},pe={key:0,class:"tips"},ve={class:"tip"},he={class:"tip"},_e={class:"tip"},ge={class:"tip"},ye=["onClick","onMouseover"],me={class:"info"},be={class:"title"},ke={class:"breadcrumb"},Se={class:"path"},we=Q({name:"Search"}),Re=Q({...we,setup(Ce){const W=ce(),_=te(),X=ae(),Y=se(),g=m(!1),f=m(""),L=m([]),r=m(-1),N=m(),S=m(),w=m([]);function Z(a){return w.value.push(a)}le(()=>{w.value=[]});const R=ne(()=>{let a=[];return a=L.value.filter(e=>{let l=!1;return e.title&&(typeof e.title=="function"?e.title().includes(f.value)&&(l=!0):e.title.includes(f.value)&&(l=!0)),e.path.includes(f.value)&&(l=!0),e.breadcrumb.some(s=>{let t=!1;return s&&(typeof s=="function"?s().includes(f.value)&&(t=!0):s.includes(f.value)&&(t=!0)),t})&&(l=!0),l}),a});A(()=>g.value,a=>{a?(document.body.classList.add("hidden"),S.value.scrollTop=0,h("up",E),h("down",I),h("enter",M),setTimeout(()=>{N.value.focus()},500)):(document.body.classList.remove("hidden"),h.unbind("up",E),h.unbind("down",I),h.unbind("enter",M),setTimeout(()=>{f.value="",r.value=-1},500))}),A(()=>R.value,()=>{r.value=-1,w.value=[],V()}),oe(()=>{H.on("global-search-toggle",()=>{g.value=!g.value}),h("alt+s",a=>{_.settings.navSearch.enable&&_.settings.navSearch.enableHotkeys&&(a.preventDefault(),g.value=!0)}),h("esc",a=>{_.settings.navSearch.enable&&_.settings.navSearch.enableHotkeys&&(a.preventDefault(),g.value=!1)}),_.settings.app.routeBaseOn!=="filesystem"?X.routes.forEach(a=>{a.children&&U(a.children)}):Y.menus.forEach(a=>{$(a.children)})});function P(a){var l;let e=!0;return(l=a.children)!=null&&l.every(s=>{var t;return((t=s.meta)==null?void 0:t.sidebar)===!1})&&(e=!1),e}function U(a,e,l,s){a.forEach(t=>{var c,o,v,d,y,j,K;if(((c=t.meta)==null?void 0:c.sidebar)!==!1){const T=F(s)||[];t.children&&P(t)?(T.push((o=t.meta)==null?void 0:o.title),U(t.children,e?[e,t.path].join("/"):t.path,((v=t.meta)==null?void 0:v.icon)??l,T)):(T.push((d=t.meta)==null?void 0:d.title),L.value.push({path:e?[e,t.path].join("/"):t.path,icon:((y=t.meta)==null?void 0:y.icon)??l,title:(j=t.meta)==null?void 0:j.title,link:(K=t.meta)==null?void 0:K.link,breadcrumb:T}))}})}function $(a,e,l){a.forEach(s=>{var c,o,v,d,y;const t=F(l)||[];s.children&&s.children.length>0?(t.push((c=s.meta)==null?void 0:c.title),$(s.children,((o=s.meta)==null?void 0:o.icon)??e,t)):(t.push((v=s.meta)==null?void 0:v.title),L.value.push({icon:((d=s.meta)==null?void 0:d.icon)??e,title:(y=s.meta)==null?void 0:y.title,path:s.path,breadcrumb:t}))})}function E(){R.value.length&&(r.value-=1,r.value<0&&(r.value=R.value.length-1),V())}function I(){R.value.length&&(r.value+=1,r.value>R.value.length-1&&(r.value=0),V())}function M(){r.value!==-1&&w.value[r.value].click()}function V(){let a=0;if(r.value!==-1){a=S.value.scrollTop;const e=w.value[r.value].offsetTop,l=w.value[r.value].clientHeight,s=S.value.scrollTop,t=S.value.clientHeight;e+l>s+t?a=e+l-t:e<=s&&(a=e)}S.value.scrollTo({top:a})}function ee(a,e){e?window.open(e,"_blank"):W.push(a)}return(a,e)=>{const l=re,s=D("el-icon"),t=D("el-input"),c=D("el-tag");return b(),C("div",{id:"search",class:q({searching:p(g)}),onClick:e[3]||(e[3]=o=>p(g)&&p(H).emit("global-search-toggle"))},[i("div",de,[i("div",{class:"search-box",onClick:e[2]||(e[2]=z(()=>{},["stop"]))},[n(t,{ref_key:"searchInputRef",ref:N,modelValue:p(f),"onUpdate:modelValue":e[0]||(e[0]=o=>ue(f)?f.value=o:null),placeholder:"搜索页面，支持标题、URL模糊查询",clearable:"",onKeydown:[e[1]||(e[1]=x(o=>p(H).emit("global-search-toggle"),["esc"])),x(z(E,["prevent"]),["up"]),x(z(I,["prevent"]),["down"]),x(z(M,["prevent"]),["enter"])]},{prefix:u(()=>[n(s,null,{default:u(()=>[n(l,{name:"ep:search"})]),_:1})]),_:1},8,["modelValue","onKeydown"]),p(_).mode==="pc"?(b(),C("div",pe,[i("div",ve,[n(c,{type:"info",size:"large"},{default:u(()=>[k(B(p(_).os==="mac"?"⌥":"Alt")+" + S ",1)]),_:1}),n(c,{type:"info",size:"large"},{default:u(()=>[k(" 唤醒搜索面板 ")]),_:1})]),i("div",he,[n(c,{type:"info",size:"large"},{default:u(()=>[n(s,null,{default:u(()=>[n(l,{name:"search-up"})]),_:1})]),_:1}),n(c,{type:"info",size:"large"},{default:u(()=>[n(s,null,{default:u(()=>[n(l,{name:"search-down"})]),_:1})]),_:1}),n(c,{type:"info",size:"large"},{default:u(()=>[k(" 切换搜索结果 ")]),_:1})]),i("div",_e,[n(c,{type:"info",size:"large"},{default:u(()=>[n(s,null,{default:u(()=>[n(l,{name:"search-enter"})]),_:1})]),_:1}),n(c,{type:"info",size:"large"},{default:u(()=>[k(" 访问页面 ")]),_:1})]),i("div",ge,[n(c,{type:"info",size:"large"},{default:u(()=>[k(" ESC ")]),_:1}),n(c,{type:"info",size:"large"},{default:u(()=>[k(" 退出 ")]),_:1})])])):J("",!0)]),i("div",{ref_key:"searchResultRef",ref:S,class:"result"},[(b(!0),C(O,null,G(p(R),(o,v)=>(b(),C("a",{key:o.path,ref_for:!0,ref:Z,class:q(["item",{actived:v===p(r)}]),onClick:d=>ee(o.path,o.link),onMouseover:d=>r.value=v},[n(s,{class:"icon"},{default:u(()=>[o.icon?(b(),ie(l,{key:0,name:o.icon},null,8,["name"])):J("",!0)]),_:2},1024),i("div",me,[i("div",be,B(o.title??"[ 无标题 ]"),1),i("div",ke,[(b(!0),C(O,null,G(o.breadcrumb,(d,y)=>(b(),C("span",{key:y},[k(B(d??"[ 无标题 ]")+" ",1),n(s,null,{default:u(()=>[n(l,{name:"ep:arrow-right"})]),_:1})]))),128))]),i("div",Se,B(o.path),1)])],42,ye))),128))],512)])],2)}}});const ze=fe(Re,[["__scopeId","data-v-7119310d"]]);export{ze as default};
