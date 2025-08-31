import{w as N,r as w,j as e,J as y,K as i,T as L,aD as C,y as S,B as d,D as f,c3 as T,i as B,F as l,M as D,H as j,c4 as A,c5 as E,z as b,a1 as M,ay as $,u as q,g as K,au as z}from"./main-BKM2fIwG.js";import{A as U}from"./leftSidebar-ChCja5sr.js";import{T as O}from"./index-DxXoshz8.js";import{R as _}from"./EditOutlined-_GB9OZ1y.js";import"./Styles-BqtYWpHV.js";const{Paragraph:H}=O,g=({title:r,fieldKey:s,fieldvalue:a})=>{const[x,c]=w.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ghostTag",children:r}),e.jsx(H,{editable:{icon:x?e.jsx(B,{}):e.jsx(_,{}),onChange:p=>{c(!0),T({[s]:p}).finally(()=>{c(!1)})}},children:a})]})},V=()=>{const r=N(u=>u.user),[s,a]=w.useState(!1),x=()=>{const[u,P]=w.useState(!1),[v]=l.useForm();function k(t){P(!0),E(t).then(()=>{b.success("Password changed"),a(!1)}).catch(o=>{b.warning("Something went wrong"),console.log(o)}).finally(()=>{P(!1)})}return e.jsx(D,{title:"Change password",open:!0,okText:"Change Password",onOk:()=>{v.submit()},okButtonProps:{loading:u},onCancel:()=>{a(!1)},children:e.jsxs(l,{disabled:u,form:v,layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:k,autoComplete:"off",children:[e.jsx(l.Item,{label:"Current Password",name:"currentPassword",rules:[{required:!0,message:"Please input current password!"}],children:e.jsx(j.Password,{})}),e.jsx(l.Item,{hasFeedback:!0,dependencies:["currentPassword"],label:"New Password",name:"newPassword",rules:[{required:!0,message:"Please input new password!"},({getFieldValue:t})=>({validator(o,h){return t("currentPassword")!==h?Promise.resolve():Promise.reject(new Error("New password should not be the same as current one."))}}),()=>({validator(t,o){return A(o)}})],children:e.jsx(j.Password,{})}),e.jsx(l.Item,{label:"Repeat New Password",name:"repeatNewPassword",dependencies:["newPassword"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},({getFieldValue:t})=>({validator(o,h){return!h||t("newPassword")===h?Promise.resolve():Promise.reject(new Error("The two passwords that you entered do not match!"))}})],children:e.jsx(j.Password,{})})]})})};if(!r)return null;const{email:c,blocked:p,confirmed:m,firstName:I,lastName:F,company:R}=r;return e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsxs(i,{span:8,children:[e.jsx("div",{className:"ghostTag",children:"email"}),c,e.jsx(L,{style:{padding:3,borderRadius:10,lineHeight:"1em",marginBottom:5,marginLeft:5,fontSize:10},icon:m?e.jsx(C,{style:{marginRight:-5}}):e.jsx(S,{style:{marginRight:-5}}),color:m?"success":"warning",children:m?"Confirmed":"Not confirmed"}),!m&&e.jsx("div",{style:{marginTop:10},children:e.jsx(d,{type:"primary",children:"Confirm Email"})})]}),e.jsxs(i,{span:8,children:[e.jsx("div",{className:"ghostTag",children:"account status"}),p?"Blocked":"Active"]}),e.jsxs(i,{span:8,children:[e.jsx("div",{className:"ghostTag",children:"password"}),e.jsx(d,{onClick:()=>{a(!0)},children:"Change password"})]})]}),e.jsx(f,{}),e.jsxs(y,{children:[e.jsx(i,{span:8,children:e.jsx(g,{title:"First name",fieldKey:"firstName",fieldvalue:I})}),e.jsx(i,{span:8,children:e.jsx(g,{title:"Last name",fieldKey:"lastName",fieldvalue:F})}),e.jsx(i,{span:8,children:e.jsx(g,{title:"Company",fieldKey:"company",fieldvalue:R})})]}),s&&e.jsx(x,{})]})},J=M.div`
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
`,n=({isIncluded:r=!0,children:s})=>e.jsxs("li",{children:[r?e.jsx(C,{style:{color:"#5cca5c",marginRight:3}}):e.jsx($,{style:{color:"#ff9c9c",marginRight:3}}),s]}),W=()=>N(s=>s.user)?e.jsxs(J,{children:[e.jsxs("section",{children:[e.jsx("div",{className:"title",children:"Free"}),e.jsx(f,{}),e.jsx("div",{className:"price",children:"free forever"}),e.jsxs("ul",{className:"features",children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet"}),e.jsx(n,{isIncluded:!1,children:"Lorem ipsum dolor"})]}),e.jsx(d,{block:!0,children:"Activate"})]}),e.jsxs("section",{className:"individual",children:[e.jsx("div",{className:"title",children:"Standart"}),e.jsx(f,{}),e.jsx("div",{className:"price",children:"$25 / month"}),e.jsxs("ul",{className:"features",children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet"}),e.jsx(n,{isIncluded:!1,children:"Lorem ipsum dolor"})]}),e.jsx(d,{className:"resultButton",ghost:!0,block:!0,children:"Activate"})]}),e.jsxs("section",{children:[e.jsx("div",{className:"title",children:"Pro"}),e.jsx(f,{}),e.jsx("div",{className:"price",children:"request"}),e.jsxs("ul",{className:"features",children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet"}),e.jsx(n,{isIncluded:!1,children:"Lorem ipsum dolor"})]}),e.jsx(d,{block:!0,children:"Activate"})]})]}):null,ee=()=>{let r=q();const{profileSection:s="profileData"}=K();return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx(z,{onSelect:a=>r(`/profile/${a.key}`),selectedKeys:[s],mode:"inline",items:[{key:"profileData",label:"Profile Data"}]})}),e.jsx("div",{className:"appLayoutContent",children:e.jsxs("div",{style:{padding:10},className:"scrollable",children:[s==="profileData"&&e.jsx(V,{}),s==="subscriptionPlan"&&e.jsx(W,{})]})})]})};export{ee as default};
