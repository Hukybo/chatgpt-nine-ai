
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as ae}from"./index-56b33bff.js";import{d as oe,r as g,Q as I,B as P,x as ne,o as V,c as A,e,f as a,j as se,N as re,R as ue,b as r,k as i,w as de,I as T,t as U,S as ie,a as pe,U as me,V as k,W as ce,E as D,h as n,X as fe,l as _e,q}from"./index-be23d7e6.js";import{E as ge,Q as ve}from"./index-68385382.js";const be={class:"flex justify-end mr-5"},ye=oe({__name:"classify",setup(we){const x=g(),z=g(0),c=g(!1),w=g(!1),u=I({name:"",status:"",page:1,size:10}),C=g(),v=g(0),s=I({name:"",des:"",coverImg:"",order:100,status:0}),B=I({name:[{required:!0,message:"请填写分类名称",trigger:"blur"}],des:[{required:!0,message:"请填写分类描述",trigger:"blur"}],coverImg:[{required:!1,message:"请填写分类封面图片地址",trigger:"blur"}],order:[{required:!1,message:"请填写排序ID",trigger:"blur"}],status:[{required:!0,message:"请选择分类状态",trigger:"change"}]}),S=g([]),M=P(()=>v.value?"更新套餐":"新增套餐"),N=P(()=>v.value?"确认更新":"确认新增");async function p(){try{w.value=!0;const o=await k.queryCats(u),{rows:t,count:b}=o.data;w.value=!1,z.value=b,S.value=t}catch{w.value=!1}}function R(o){v.value=o.id;const{name:t,status:b,des:y,order:f,coverImg:d}=o;ce(()=>{Object.assign(s,{name:t,status:b,des:y,order:f,coverImg:d})}),c.value=!0}function $(o){v.value=0,o==null||o.resetFields()}async function j(o){await k.deleteCats({id:o.id}),D.success("删除分类成功"),p()}function O(o){o==null||o.resetFields(),p()}function Y(o){o==null||o.validate(async t=>{t&&(v.value?(await k.updateCats({id:v.value,...s}),D({type:"success",message:"更新套餐成功！"})):(await k.createCats(s),D({type:"success",message:"创建新的套餐成功！"})),c.value=!1,p())})}return ne(()=>{p()}),(o,t)=>{const b=n("el-alert"),y=ae,f=n("el-input"),d=n("el-form-item"),F=n("el-option"),K=n("el-select"),_=n("el-button"),L=n("Plus"),Q=n("el-icon"),h=n("el-form"),W=n("el-image"),m=n("el-table-column"),X=n("el-tag"),G=n("el-popconfirm"),H=n("el-table"),J=n("el-pagination"),Z=n("el-row"),E=n("el-switch"),ee=n("el-dialog"),le=fe("loading");return V(),A("div",null,[e(y,null,{default:a(()=>[e(b,{closable:!1,"show-icon":"",title:"应用说明",description:"当前版本应用管理暂未对用户端接入、待用户端接入中。",type:"warning"})]),_:1}),e(y,null,{default:a(()=>[e(h,{ref_key:"formRef",ref:x,inline:!0,model:u},{default:a(()=>[e(d,{label:"分类名称",prop:"name"},{default:a(()=>[e(f,{modelValue:u.name,"onUpdate:modelValue":t[0]||(t[0]=l=>u.name=l),placeholder:"分类名称[模糊搜索]",onKeydown:se(_e(p,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])]),_:1}),e(d,{label:"分类状态",prop:"status"},{default:a(()=>[e(K,{modelValue:u.status,"onUpdate:modelValue":t[1]||(t[1]=l=>u.status=l),placeholder:"请选择分类状态",clearable:""},{default:a(()=>[(V(!0),A(re,null,ue(r(ge),l=>(V(),T(F,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:a(()=>[e(_,{type:"primary",onClick:p},{default:a(()=>[i(" 查询 ")]),_:1}),e(_,{onClick:t[2]||(t[2]=l=>O(r(x)))},{default:a(()=>[i(" 重置 ")]),_:1})]),_:1}),e(_,{type:"success",style:{float:"right"},onClick:t[3]||(t[3]=l=>c.value=!0)},{default:a(()=>[i(" 创建分类 "),e(Q,{class:"ml-3"},{default:a(()=>[e(L)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(y,{style:{width:"100%"}},{default:a(()=>[de((V(),T(H,{border:"",data:r(S),style:{width:"100%"},size:"large"},{default:a(()=>[e(m,{prop:"coverImg",label:"套餐封面",width:"200"},{default:a(l=>[e(W,{style:{height:"50px"},src:l.row.coverImg,fit:"fill"},null,8,["src"])]),_:1}),e(m,{prop:"name",label:"分类名称"}),e(m,{prop:"appCount",label:"app数量"}),e(m,{prop:"order",label:"排序ID"}),e(m,{prop:"status",label:"分类状态"},{default:a(l=>[e(X,{type:l.row.status===1?"success":"danger"},{default:a(()=>[i(U(r(ve)[l.row.status]),1)]),_:2},1032,["type"])]),_:1}),e(m,{prop:"des",label:"描述信息",width:"300"}),e(m,{prop:"createdAt",label:"创建时间",width:"200"},{default:a(l=>[i(U(r(ie)(new Date(l.row.createdAt),"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),e(m,{label:"操作",width:"200"},{default:a(l=>[e(_,{link:"",type:"primary",size:"small",onClick:te=>R(l.row)},{default:a(()=>[i(" 编辑 ")]),_:2},1032,["onClick"]),e(G,{title:"确认删除此分类么?",width:"200","icon-color":"red",onConfirm:te=>j(l.row)},{reference:a(()=>[e(_,{link:"",type:"danger",size:"small"},{default:a(()=>[i(" 删除分类 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[le,r(w)]]),e(Z,{class:"flex justify-end mt-5"},{default:a(()=>[e(J,{"current-page":u.page,"onUpdate:currentPage":t[4]||(t[4]=l=>u.page=l),"page-size":u.size,"onUpdate:pageSize":t[5]||(t[5]=l=>u.size=l),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:r(z),onSizeChange:p,onCurrentChange:p},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),e(ee,{modelValue:r(c),"onUpdate:modelValue":t[13]||(t[13]=l=>me(c)?c.value=l:null),"close-on-click-modal":!1,title:r(M),width:"570",onClose:t[14]||(t[14]=l=>$(r(C)))},{footer:a(()=>[pe("span",be,[e(_,{onClick:t[11]||(t[11]=l=>c.value=!1)},{default:a(()=>[i("取消")]),_:1}),e(_,{type:"primary",onClick:t[12]||(t[12]=l=>Y(r(C)))},{default:a(()=>[i(U(r(N)),1)]),_:1})])]),default:a(()=>[e(h,{ref_key:"formPackageRef",ref:C,"label-position":"right","label-width":"100px",model:s,rules:B},{default:a(()=>[e(d,{label:"分类名称",prop:"name"},{default:a(()=>[e(f,{modelValue:s.name,"onUpdate:modelValue":t[6]||(t[6]=l=>s.name=l),placeholder:"请填写分类名称"},null,8,["modelValue"])]),_:1}),e(d,{label:"分类状态",prop:"status"},{default:a(()=>[e(E,{modelValue:s.status,"onUpdate:modelValue":t[7]||(t[7]=l=>s.status=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),e(d,{label:"背景地址",prop:"coverImg"},{default:a(()=>[e(f,{modelValue:s.coverImg,"onUpdate:modelValue":t[8]||(t[8]=l=>s.coverImg=l),placeholder:"请填写封面图地址"},null,8,["modelValue"])]),_:1}),e(d,{label:"排序ID",prop:"order"},{default:a(()=>[e(f,{modelValue:s.order,"onUpdate:modelValue":t[9]||(t[9]=l=>s.order=l),modelModifiers:{number:!0},placeholder:"请填写排序ID[数字越大越靠前]"},null,8,["modelValue"])]),_:1}),e(d,{label:"套餐描述",prop:"des"},{default:a(()=>[e(f,{modelValue:s.des,"onUpdate:modelValue":t[10]||(t[10]=l=>s.des=l),type:"textarea",placeholder:"请填写分类介绍信息、用于对外展示...",rows:4},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof q=="function"&&q(ye);export{ye as default};
