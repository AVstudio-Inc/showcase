import{r as a,$ as f,G as L,j as e,B as d,w,T as u,D as _,au as h}from"./main-DkRMjw9y.js";import{u as g,D as j,R as C}from"./varsion-DlDGQRjz.js";const b=l=>a.createElement("svg",{viewBox:"0 0 301 57",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...l},a.createElement("defs",null),a.createElement("path",{id:"path",d:"M32.2 38.8L16.7 38.8L9.9 57L0 45.2L17.79 1L31.29 1L49.1 46.8L34.9 46.8L32.2 38.8ZM28.4 27.7L24.5 16.2L20.5 27.7L28.4 27.7ZM86.9 1L69.6 46.8L56.1 46.8L38.9 1L53.7 1L63.4 27.7L73.4 1L86.9 1ZM114 22.6L125.9 22.6L125.9 42C121 45.8 114.2 47.8 108.2 47.8C95 47.8 85.4 37.9 85.4 23.9C85.4 9.8 95 0 108.5 0C116.5 0 123 3.1 127.1 8.8L118.3 17.5C115.8 14.2 112.8 12.5 109.2 12.5C103.1 12.5 99.29 16.79 99.29 23.9C99.29 30.8 103.1 35.3 109 35.3C110.7 35.3 112.3 35 114 34.2L114 22.6ZM160.5 38.8L145 38.8L142.3 46.7L128.3 46.7L146.1 1L159.6 1L177.4 46.7L163.2 46.7L160.5 38.8ZM156.8 27.7L152.8 16.2L148.8 27.7L156.8 27.7ZM183.8 13L171.9 13L171.9 1.1L209.5 1.1L209.5 13L197.6 13L197.6 46.8L183.8 46.8L183.8 13ZM211.4 23.9C211.4 10.1 221.2 0 234.4 0C247.7 0 257.4 10.1 257.4 23.9C257.4 37.8 247.7 47.8 234.4 47.8C221.2 47.8 211.4 37.8 211.4 23.9ZM243.6 23.9C243.6 16.79 239.5 12.5 234.4 12.5C229.4 12.5 225.3 16.79 225.3 23.9C225.3 31 229.4 35.4 234.4 35.4C239.5 35.4 243.6 31 243.6 23.9ZM279 35.3L275.2 35.3L275.2 46.8L261.5 46.8L261.5 1L281.1 1C292.5 1 299.7 7.7 299.7 18.29C299.7 24.9 296.9 29.9 292 32.7L300.6 46.8L292 57L279 35.3ZM280.29 12.9L275.29 12.9L275.29 23.6L280.29 23.6C284.1 23.6 285.9 21.6 285.9 18.29C285.9 14.9 284.1 12.9 280.29 12.9Z",fill:"#313D46",fillOpacity:1,fillRule:"evenodd"})),B=f.div`
  position: relative;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 10px;
  color: gray;
  background-color: #fff;

  a {
    color: gray;
    display: flex;
    align-items: center;
    cursor: pointer;

    &.social {
      margin-left: 5px;
      svg {
        height: 2em;
      }
      &:hover {
        color: #6200ee;
      }
    }
  }

  svg {
    display: inline-block;
    height: 2.5em;
    width: auto !important;
    margin-left: 0.3em;
  }

  & > span {
    color: red;
    display: inline-block;
    margin: 0 0.3em;
  }
  .divider {
    font-size: 1em;
    padding: 0 5px;
    position: relative;
    transform: translateY(-0.06em);
  }
  .version {
    position: absolute;
    left: 15px;
    right: 15px;
    top: -1.5em;
    white-space: nowrap;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1em;
      height: 1em;
    }
  }
`;var y="sidebarBrandLinks_versionsList__temp550",S="sidebarBrandLinks_versionItemText__temp551",M="sidebarBrandLinks_versionItemTag__temp552";const k=w.memo(()=>{const s=g(r=>r.versions).map(r=>{const{version:t,text:i}=r.attributes;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(u,{className:M,color:"var(--ant-primary-5)",children:t}),e.jsx("div",{className:S,children:i})]},t),e.jsx(_,{})]})});return e.jsx("div",{className:y,children:s})}),N=()=>{const l="3.9.1",[s,r]=a.useState(!1),t=()=>{r(!1)},i=()=>{r(!0)},[x,c]=a.useState(!1),n=a.useCallback(()=>{const m=g.getState().fetchVersions;c(!0);const v=o=>new Promise(p=>setTimeout(p,o));Promise.all([m(),v(1e3)]).catch(o=>{L.error("Error fetching versions"),console.error(o)}).finally(()=>{c(!1)})},[]);return a.useLayoutEffect(()=>{n()},[n]),e.jsxs(e.Fragment,{children:[e.jsxs(d,{onClick:i,type:"dashed",size:"small",className:"version",children:["App version: ",l,e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:512,height:512,viewBox:"0 0 512 512",children:e.jsx("path",{fill:"currentColor",d:"M48 399.26C48 335.19 62.44 284 90.91 247c34.38-44.67 88.68-68.77 161.56-71.75V72L464 252L252.47 432V329.35c-44.25 1.19-77.66 7.58-104.27 19.84c-28.75 13.25-49.6 33.05-72.08 58.7L48 440Z"})})]}),e.jsx(j,{extra:e.jsx(d,{loading:x,icon:e.jsx(C,{}),type:"dashed",size:"small",onClick:n,children:"Check"}),title:"Release notes",placement:"right",onClose:t,open:s,children:e.jsx(k,{})})]})},T=()=>e.jsxs(B,{children:[e.jsx(N,{}),e.jsxs("a",{target:"_blank",href:"https://avgator.com",rel:"noreferrer",children:["Made by"," ",e.jsx(b,{style:{width:"auto",height:"1em",marginRight:".4em"}})," ","with ",e.jsx("span",{children:"♥️"})]}),e.jsx("div",{className:"divider",children:"|"}),e.jsx("a",{className:"social",rel:"noreferrer",target:"_blank",href:"https://discord.gg/NTRqWV4Yda",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"})})}),e.jsx("a",{className:"social",rel:"noreferrer",target:"_blank",href:"https://www.facebook.com/AVgatorINC",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"})})}),e.jsx("a",{className:"social",rel:"noreferrer",target:"_blank",href:"https://twitter.com/avgator_inc",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"})})}),e.jsx("a",{className:"social",rel:"noreferrer",target:"_blank",href:"https://www.youtube.com/channel/UCo5Gx-s6xG8y3q3dojDKGoQ",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:e.jsxs("g",{fill:"none",fillRule:"evenodd",children:[e.jsx("path",{d:"M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),e.jsx("path",{fill:"currentColor",d:"M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.802 3.802 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954c0 .983-.052 2.011-.122 2.954l-.075.91c-.013.146-.026.287-.04.425a3.802 3.802 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A61.59 61.59 0 0 1 12 20a61.59 61.59 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.802 3.802 0 0 1-3.494-3.423l-.04-.425l-.075-.91A40.662 40.662 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91c.013-.146.026-.287.04-.425A3.802 3.802 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A61.676 61.676 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"})]})})})]});var V="leftSidebar_appLayoutLeftSidebar__19w81cu0",H={autohide:"leftSidebar_fluidContainer_autohide__19w81cu2 leftSidebar_fluidContainerBase__19w81cu1",pin:"leftSidebar_fluidContainer_pin__19w81cu3 leftSidebar_fluidContainerBase__19w81cu1"},Z={left:"sidebarToggleHeader_headerBox_left__11dgs51 sidebarToggleHeader_headerBase__11dgs50",right:"sidebarToggleHeader_headerBox_right__11dgs52 sidebarToggleHeader_headerBase__11dgs50"},R={autohide:"sidebarToggleHeader_svgBox_autohide__11dgs54 sidebarToggleHeader_svgBoxBase__11dgs53",pin:"sidebarToggleHeader_svgBox_pin__11dgs55 sidebarToggleHeader_svgBoxBase__11dgs53"};const A=({isPinned:l,side:s})=>{const r=h.getState().toggleSidebarPin;return e.jsxs("div",{onClick:()=>r(s),className:Z[s],children:[e.jsx("div",{children:l?"Pinned":"Auto"}),e.jsx("div",{className:R[l?"pin":"autohide"],children:e.jsx("svg",{style:{transform:s==="left"?"scaleX(-1)":""},xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",children:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{fillRule:"evenodd",d:"M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6zM7.793 9.293a1 1 0 0 1 0 1.414L6.5 12l1.293 1.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0",clipRule:"evenodd"}),e.jsx("path",{d:"M12 20h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8z"})]})})})]})},D=({children:l})=>{const s=h(r=>r.pinSidebar.left);return e.jsx("div",{className:H[s?"pin":"autohide"],children:e.jsxs("div",{className:V,children:[e.jsx(A,{side:"left",isPinned:s}),e.jsx("div",{className:"expandSidebarSection",children:e.jsx("div",{className:"scrollable",children:l})}),e.jsx(T,{})]})})};export{D as A,A as S};
