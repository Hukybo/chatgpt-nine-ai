
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as E}from"./index-56b33bff.js";import{d as H,r as d,Q as k,B as T,x as Z,o as g,c as D,e as a,f as l,k as m,w as ee,I as U,b as o,t as C,S as te,a as ae,N as le,R as oe,J as se,j as ne,Y as re,W as ue,E as I,h as n,X as ie,l as de,q as M}from"./index-be23d7e6.js";import{A as V}from"./chatgpt-9ae62d42.js";import{d as pe,Q as ce}from"./index-68385382.js";const me={class:"flex justify-end mr-5"},_e=H({__name:"whiteList",setup(fe){const v=d(),u=d(0),b=d(!1),p=d(!1),h=d([]),z=d(0),_=k({page:1,size:10}),P=T(()=>u.value?"更新用户":"新增用户"),q=T(()=>u.value?"确认更新":"确认新增"),x=d([]),r=k({userId:"",status:1,count:10}),B=k({userId:[{required:!0,message:"请选择白名单用户",trigger:"change"}],status:[{required:!0,message:"请选择当前用户状态",trigger:"change"}],count:[{required:!0,message:"请填写限制使用次数",trigger:"blur"}]});async function L(s){const e=await re.queryAllUser({size:30,username:s});x.value=e.data.rows}async function y(){try{b.value=!0;const s=await V.queryWhiteUserList(_);b.value=!1;const{rows:e,count:f}=s.data;h.value=e,z.value=f}catch{b.value=!1}}function N(s){u.value=0,s==null||s.resetFields()}function W(s){u.value=s.id;const{userId:e,count:f,status:c}=s;ue(()=>{Object.assign(r,{userId:e,count:f,status:c})}),p.value=!0}function A(s){s==null||s.validate(async e=>{e&&(u.value?(await V.updateWhiteUser({id:u.value,...r}),I.success("修改白名单用户成功")):(await V.addWhiteUser(r),I.success("添加白名单用户成功")),p.value=!1,y())})}return Z(()=>{y()}),(s,e)=>{const f=n("el-alert"),c=n("el-button"),S=E,i=n("el-table-column"),Y=n("el-tag"),$=n("el-table"),j=n("el-pagination"),G=n("el-row"),Q=n("el-option"),R=n("el-select"),w=n("el-form-item"),F=n("el-input"),K=n("el-switch"),O=n("el-form"),J=n("el-dialog"),X=ie("loading");return g(),D("div",null,[a(S,null,{default:l(()=>[a(f,{closable:!1,"show-icon":"",title:"Gpt4白名单说明",description:"当前版本用户端无法手动修改区分模型,当前设置的白名单用户将自动使用GPT4模型，如果您的卡池中没有设置支持gpt-4的key，我们将自动降级为使用3.5模型！更细致的配置和收费形式正在开发中！",type:"warning"}),a(c,{class:"mt-5",type:"primary",onClick:e[0]||(e[0]=t=>p.value=!0)},{default:l(()=>[m(" 添加白名单用户[添加用户可以使用GPT4模型] ")]),_:1})]),_:1}),a(S,null,{default:l(()=>[ee((g(),U($,{border:"",data:h.value,style:{width:"100%"},size:"large"},{default:l(()=>[a(i,{prop:"username",label:"用户昵称"}),a(i,{prop:"email",label:"用户邮箱"}),a(i,{prop:"useCount",label:"调用次数"}),a(i,{prop:"count",label:"剩余额度"}),a(i,{prop:"status",align:"center",label:"启用状态"},{default:l(t=>[a(Y,{type:o(pe)[t.row.status]},{default:l(()=>[m(C(o(ce)[t.row.status]),1)]),_:2},1032,["type"])]),_:1}),a(i,{prop:"createdAt",align:"center",label:"添加时间"},{default:l(t=>[m(C(o(te)(new Date(t.row.createdAt),"YYYY-MM-DD")),1)]),_:1}),a(i,{label:"操作"},{default:l(t=>[a(c,{link:"",type:"primary",size:"small",onClick:ge=>W(t.row)},{default:l(()=>[m(" 变更 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[X,b.value]]),a(G,{class:"flex justify-end mt-5"},{default:l(()=>[a(j,{"current-page":o(_).page,"onUpdate:currentPage":e[1]||(e[1]=t=>o(_).page=t),"page-size":o(_).size,"onUpdate:pageSize":e[2]||(e[2]=t=>o(_).size=t),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:z.value,onSizeChange:y,onCurrentChange:y},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),a(J,{modelValue:p.value,"onUpdate:modelValue":e[9]||(e[9]=t=>p.value=t),"close-on-click-modal":!1,title:o(P),width:"400",onClose:e[10]||(e[10]=t=>N(v.value))},{footer:l(()=>[ae("span",me,[a(c,{onClick:e[7]||(e[7]=t=>p.value=!1)},{default:l(()=>[m("取消")]),_:1}),a(c,{type:"primary",onClick:e[8]||(e[8]=t=>A(v.value))},{default:l(()=>[m(C(o(q)),1)]),_:1})])]),default:l(()=>[a(O,{ref_key:"formPackageRef",ref:v,"label-position":"right","label-width":"100px",model:o(r),rules:o(B)},{default:l(()=>[u.value?se("",!0):(g(),U(w,{key:0,label:"用户昵称",prop:"userId"},{default:l(()=>[a(R,{modelValue:o(r).userId,"onUpdate:modelValue":e[3]||(e[3]=t=>o(r).userId=t),filterable:"",clearable:"",style:{width:"100%"},remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":L},{default:l(()=>[(g(!0),D(le,null,oe(x.value,t=>(g(),U(Q,{key:t.id,label:t.username,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})),a(w,{label:"限制次数",prop:"count"},{default:l(()=>[a(F,{modelValue:o(r).count,"onUpdate:modelValue":e[4]||(e[4]=t=>o(r).count=t),modelModifiers:{number:!0},placeholder:"请填写限制用户的访问次数！",onKeydown:e[5]||(e[5]=ne(de(t=>A(v.value),["prevent"]),["enter"]))},null,8,["modelValue"])]),_:1}),a(w,{label:"启用状态",prop:"status"},{default:l(()=>[a(K,{modelValue:o(r).status,"onUpdate:modelValue":e[6]||(e[6]=t=>o(r).status=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof M=="function"&&M(_e);export{_e as default};
