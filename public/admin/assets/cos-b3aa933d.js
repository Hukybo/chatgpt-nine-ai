
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as w}from"./index-56b33bff.js";import{a as f}from"./config-5d6224e3.js";import{d as B,Q as R,r as p,x as h,o as j,c as q,e,f as o,a as b,k as v,E as g,h as r,q as S}from"./index-be23d7e6.js";const O={class:"flex justify-between"},U=b("b",null,"COS参数设置",-1),A=B({__name:"cos",setup(E){const t=R({cosSecretId:"",cosSecretKey:"",cosBucket:"",cosRegion:""}),y=p({cosSecretKey:[{required:!0,trigger:"blur",message:"请填写SecretKey"}],cosBucket:[{required:!0,trigger:"blur",message:"请填写存储桶名称"}],cosRegion:[{required:!0,trigger:"blur",message:"请填写存储桶所属地域"}],cosSecretId:[{required:!0,trigger:"blur",message:"请填写SecretId"}]}),i=p();async function m(){const n=await f.queryConfig({keys:["cosSecretKey","cosBucket","cosRegion","cosSecretId","mjSessionId","mjVersion","mjAuthorization","mjRateLimit"]});Object.assign(t,n.data)}function x(){var n;(n=i.value)==null||n.validate(async l=>{if(l){try{await f.setConfig({settings:V(t)}),g.success("变更配置信息成功")}catch{}m()}else g.error("请填写完整信息")})}function V(n){return Object.keys(n).map(l=>({configKey:l,configVal:n[l]}))}return h(()=>{m()}),(n,l)=>{const _=r("el-alert"),k=w,I=r("el-button"),s=r("el-input"),c=r("el-form-item"),u=r("el-col"),d=r("el-row"),C=r("el-form"),K=r("el-card");return j(),q("div",null,[e(k,null,{default:o(()=>[e(_,{closable:!1,"show-icon":"",title:"COS参数说明",description:"当前默认使用腾讯云COS对象存储、如果您有特殊的对接通道、将为您开放API对接！！",type:"warning"})]),_:1}),e(K,{style:{margin:"20px"}},{header:o(()=>[b("div",O,[U,e(I,{class:"button",text:"",onClick:x},{default:o(()=>[v(" 保存设置 ")]),_:1})])]),default:o(()=>[e(C,{ref_key:"formRef",ref:i,rules:y.value,model:t,"label-width":"120px"},{default:o(()=>[e(d,null,{default:o(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(c,{label:"SecretId",prop:"cosSecretId"},{default:o(()=>[e(s,{modelValue:t.cosSecretId,"onUpdate:modelValue":l[0]||(l[0]=a=>t.cosSecretId=a),placeholder:"请填写SecretId",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:o(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(c,{label:"SecretKey",prop:"cosSecretKey"},{default:o(()=>[e(s,{modelValue:t.cosSecretKey,"onUpdate:modelValue":l[1]||(l[1]=a=>t.cosSecretKey=a),placeholder:"请填写SecretKey",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:o(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(c,{label:"存储桶名称",prop:"cosBucket"},{default:o(()=>[e(s,{modelValue:t.cosBucket,"onUpdate:modelValue":l[2]||(l[2]=a=>t.cosBucket=a),placeholder:"请填写存储桶名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:o(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(c,{label:"所属地域",prop:"cosRegion"},{default:o(()=>[e(s,{modelValue:t.cosRegion,"onUpdate:modelValue":l[3]||(l[3]=a=>t.cosRegion=a),placeholder:"请填写所属地域(ap-guangzhou)",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof S=="function"&&S(A);export{A as default};
