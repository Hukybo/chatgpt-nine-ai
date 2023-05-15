
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as w}from"./index-56b33bff.js";import{a as _}from"./config-5d6224e3.js";import{d as U,Q as I,r as c,x as S,o as T,c as D,e,f as l,a as g,k as Q,E as x,h as s,q as V}from"./index-be23d7e6.js";const j={class:"flex justify-between"},B=g("b",null,"系统基础设置",-1),E=U({__name:"base",setup(M){const o=I({siteName:"",qqNumber:"",vxNumber:"",robotAvatar:"",userDefautlAvatar:"",baiduCode:"",baiduSiteId:"",baiduToken:"",buyCramiAddress:""}),v=c({siteName:[{required:!0,trigger:"blur",message:"请填写网站名称"}]}),i=c();async function f(){const m=await _.queryConfig({keys:["siteName","qqNumber","vxNumber","baiduCode","robotAvatar","userDefautlAvatar","baiduSiteId","baiduToken","buyCramiAddress"]});Object.assign(o,m.data)}function N(){var m;(m=i.value)==null||m.validate(async a=>{if(a){try{await _.setConfig({settings:y(o)}),x.success("变更配置信息成功")}catch{}f()}else x.error("请填写完整信息")})}function y(m){return Object.keys(m).map(a=>({configKey:a,configVal:m[a]}))}return S(()=>{f()}),(m,a)=>{const p=s("el-alert"),C=w,A=s("el-button"),d=s("el-input"),u=s("el-form-item"),r=s("el-col"),n=s("el-row"),b=s("el-divider"),k=s("el-form"),q=s("el-card");return T(),D("div",null,[e(C,null,{default:l(()=>[e(p,{closable:!1,"show-icon":"",title:"基础设置说明",description:"网站类型设置是实时生效的、百度统计默认使用的是作者的数据、用于demo展示、最终数据在首页程呈现、请查看部署文档或前往百度统计申请自己的专属key与token、这是免费的服务。",type:"warning"})]),_:1}),e(q,{style:{margin:"20px"}},{header:l(()=>[g("div",j,[B,e(A,{class:"button",text:"",onClick:N},{default:l(()=>[Q(" 保存设置 ")]),_:1})])]),default:l(()=>[e(k,{ref_key:"formRef",ref:i,rules:v.value,model:o,"label-width":"120px"},{default:l(()=>[e(n,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"网站名称",prop:"siteName"},{default:l(()=>[e(d,{modelValue:o.siteName,"onUpdate:modelValue":a[0]||(a[0]=t=>o.siteName=t),placeholder:"网站名称【Nine Ai】",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"网站QQ客服",prop:"qqNumber"},{default:l(()=>[e(d,{modelValue:o.qqNumber,"onUpdate:modelValue":a[1]||(a[1]=t=>o.qqNumber=t),placeholder:"网站客服QQ号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"网站VX客服",prop:"vxNumber"},{default:l(()=>[e(d,{modelValue:o.vxNumber,"onUpdate:modelValue":a[2]||(a[2]=t=>o.vxNumber=t),placeholder:"网站客服VX号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"机器人头像",prop:"robotAvatar"},{default:l(()=>[e(d,{modelValue:o.robotAvatar,"onUpdate:modelValue":a[3]||(a[3]=t=>o.robotAvatar=t),placeholder:"填写机器人默认头像地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"用户默认头像",prop:"userDefautlAvatar"},{default:l(()=>[e(d,{modelValue:o.userDefautlAvatar,"onUpdate:modelValue":a[4]||(a[4]=t=>o.userDefautlAvatar=t),placeholder:"填写用户注册时默认头像头像地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(b),e(n,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"百度统计siteId",prop:"baiduSiteId"},{default:l(()=>[e(d,{modelValue:o.baiduSiteId,"onUpdate:modelValue":a[5]||(a[5]=t=>o.baiduSiteId=t),placeholder:"请填写百度site_id、不会请查看部署文档！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"百度统计token",prop:"baiduToken"},{default:l(()=>[e(d,{modelValue:o.baiduToken,"onUpdate:modelValue":a[6]||(a[6]=t=>o.baiduToken=t),placeholder:"请填写百度access_token、不会请查看部署文档！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"百度统计代码",prop:"baiduCode"},{default:l(()=>[e(d,{modelValue:o.baiduCode,"onUpdate:modelValue":a[7]||(a[7]=t=>o.baiduCode=t),placeholder:"填写百度统计代码可统计每日访问量详情，如果没有使用用请查看详细文档！",type:"textarea",rows:6,clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(b),e(n,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"网站购卡地址",prop:"buyCramiAddress"},{default:l(()=>[e(d,{modelValue:o.buyCramiAddress,"onUpdate:modelValue":a[8]||(a[8]=t=>o.buyCramiAddress=t),placeholder:"【临时过渡功能】您的网站发卡地址，用户点击购买卡密的跳转地址！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof V=="function"&&V(E);export{E as default};
