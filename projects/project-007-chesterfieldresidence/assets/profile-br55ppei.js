import{r as w,j as e,ae as N,ac as L,b as S,a as y,q as T,af as B}from"./index-BWO8qd00.js";import{A as D}from"./leftSidebar-AH8kSalj.js";import{m as C,E as b,G as i,B as d,D as h,aD as E,F as l,M,I as j,aE as q,aF as A,e as $,h as K}from"./editorApp-BQHhAWNR.js";import{T as U}from"./index-DQFZSvcF.js";import{R as z,T as O,M as _}from"./index-BPRdgIWZ.js";import"./Styles-BTfwVjr1.js";const{Paragraph:V}=O,g=({title:r,fieldKey:s,fieldvalue:a})=>{const[p,c]=w.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ghostTag",children:r}),e.jsx(V,{editable:{icon:p?e.jsx(S,{}):e.jsx(z,{}),onChange:x=>{c(!0),E({[s]:x}).finally(()=>{c(!1)})}},children:a})]})},G=()=>{const r=C(u=>u.user),[s,a]=w.useState(!1),p=()=>{const[u,P]=w.useState(!1),[v]=l.useForm();function k(t){P(!0),A(t).then(()=>{y.success("Password changed"),a(!1)}).catch(o=>{y.warning("Something went wrong"),console.log(o)}).finally(()=>{P(!1)})}return e.jsx(M,{title:"Change password",open:!0,okText:"Change Password",onOk:()=>{v.submit()},okButtonProps:{loading:u},onCancel:()=>{a(!1)},children:e.jsxs(l,{disabled:u,form:v,layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:k,autoComplete:"off",children:[e.jsx(l.Item,{label:"Current Password",name:"currentPassword",rules:[{required:!0,message:"Please input current password!"}],children:e.jsx(j.Password,{})}),e.jsx(l.Item,{hasFeedback:!0,dependencies:["currentPassword"],label:"New Password",name:"newPassword",rules:[{required:!0,message:"Please input new password!"},({getFieldValue:t})=>({validator(o,f){return t("currentPassword")!==f?Promise.resolve():Promise.reject(new Error("New password should not be the same as current one."))}}),()=>({validator(t,o){return q(o)}})],children:e.jsx(j.Password,{})}),e.jsx(l.Item,{label:"Repeat New Password",name:"repeatNewPassword",dependencies:["newPassword"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},({getFieldValue:t})=>({validator(o,f){return!f||t("newPassword")===f?Promise.resolve():Promise.reject(new Error("The two passwords that you entered do not match!"))}})],children:e.jsx(j.Password,{})})]})})};if(!r)return null;const{email:c,blocked:x,confirmed:m,firstName:I,lastName:F,company:R}=r;return e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsxs(i,{span:8,children:[e.jsx("div",{className:"ghostTag",children:"email"}),c,e.jsx(U,{style:{padding:3,borderRadius:10,lineHeight:"1em",marginBottom:5,marginLeft:5,fontSize:10},icon:m?e.jsx(N,{style:{marginRight:-5}}):e.jsx(L,{style:{marginRight:-5}}),color:m?"success":"warning",children:m?"Confirmed":"Not confirmed"}),!m&&e.jsx("div",{style:{marginTop:10},children:e.jsx(d,{type:"primary",children:"Confirm Email"})})]}),e.jsxs(i,{span:8,children:[e.jsx("div",{className:"ghostTag",children:"account status"}),x?"Blocked":"Active"]}),e.jsxs(i,{span:8,children:[e.jsx("div",{className:"ghostTag",children:"password"}),e.jsx(d,{onClick:()=>{a(!0)},children:"Change password"})]})]}),e.jsx(h,{}),e.jsxs(b,{children:[e.jsx(i,{span:8,children:e.jsx(g,{title:"First name",fieldKey:"firstName",fieldvalue:I})}),e.jsx(i,{span:8,children:e.jsx(g,{title:"Last name",fieldKey:"lastName",fieldvalue:F})}),e.jsx(i,{span:8,children:e.jsx(g,{title:"Company",fieldKey:"company",fieldvalue:R})})]}),s&&e.jsx(p,{})]})},H=T.div`
  position: relative;
  display: flex;
  align-items: stretch;
  height: 100%;

  section {
    flex: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-radius: 3px;
    padding: 1em;

    &.individual {
      background-color: rgb(143 101 255);
      color: #fff;

      .ant-divider {
        border-top-color: #fff;
      }

      .resultButton {
        &,
        * {
          color: #fff !important;
          border-color: #fff !important;
        }
      }
    }

    .title {
      padding: 1em 0;
      font-size: 1.2em;
    }

    .price {
      text-transform: uppercase;
    }

    ul.features {
      flex: 1;
      padding-top: 2em;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      gap: 1em;
      font-size: 0.9em;
    }
  }
`,n=({isIncluded:r=!0,children:s})=>e.jsxs("li",{children:[r?e.jsx(N,{style:{color:"#5cca5c",marginRight:3}}):e.jsx(B,{style:{color:"#ff9c9c",marginRight:3}}),s]}),W=()=>C(s=>s.user)?e.jsxs(H,{children:[e.jsxs("section",{children:[e.jsx("div",{className:"title",children:"Free"}),e.jsx(h,{}),e.jsx("div",{className:"price",children:"free forever"}),e.jsxs("ul",{className:"features",children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet"}),e.jsx(n,{isIncluded:!1,children:"Lorem ipsum dolor"})]}),e.jsx(d,{block:!0,children:"Activate"})]}),e.jsxs("section",{className:"individual",children:[e.jsx("div",{className:"title",children:"Standart"}),e.jsx(h,{}),e.jsx("div",{className:"price",children:"$25 / month"}),e.jsxs("ul",{className:"features",children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet"}),e.jsx(n,{isIncluded:!1,children:"Lorem ipsum dolor"})]}),e.jsx(d,{className:"resultButton",ghost:!0,block:!0,children:"Activate"})]}),e.jsxs("section",{children:[e.jsx("div",{className:"title",children:"Pro"}),e.jsx(h,{}),e.jsx("div",{className:"price",children:"request"}),e.jsxs("ul",{className:"features",children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet"}),e.jsx(n,{isIncluded:!1,children:"Lorem ipsum dolor"})]}),e.jsx(d,{block:!0,children:"Activate"})]})]}):null,se=()=>{let r=$();const{profileSection:s="profileData"}=K();return e.jsxs(e.Fragment,{children:[e.jsx(D,{children:e.jsx(_,{onSelect:a=>r(`/profile/${a.key}`),selectedKeys:[s],mode:"inline",items:[{key:"profileData",label:"Profile Data"}]})}),e.jsx("div",{className:"appLayoutContent",children:e.jsxs("div",{style:{padding:10},className:"scrollable",children:[s==="profileData"&&e.jsx(G,{}),s==="subscriptionPlan"&&e.jsx(W,{})]})})]})};export{se as default};
