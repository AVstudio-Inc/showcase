const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.esm-_6dBI1yT.js","./iconBase-CPrCH_XR.js","./index-CR7MAnCp.js","./index-D8FflOyX.css","./index.esm-B9lZxoJq.js","./index.esm-BeKO5FPR.js","./index.esm-C8rbSTqJ.js","./index.esm-DUgoWg58.js","./index.esm-BYEEFQf8.js","./index.esm-BsNM4tMW.js","./index.esm-CKrr55eb.js","./index.esm-DiL9F9KB.js","./index.esm-D9k73O9o.js","./index.esm-CiygglM8.js","./index.esm-CZtiJpB1.js"])))=>i.map(i=>d[i]);
import{q as pe,r as m,aj as Me,R as Y,j as u,w as Ie,an as T,g as je}from"./index-CR7MAnCp.js";import{i as ce,m as ke,d as ue,c as Fe,p as He,e as Be,g as ve,u as Ze}from"./getLocalUrlFromString-DptiwCQQ.js";import{u as $e}from"./confirm-D0g1-wZ1.js";import{u as se,a as ee,t as ge}from"./editorApp-DLWlunXz.js";import{i as Ue,d as Ne}from"./datasourceTools-eZTvAFyf.js";import{u as ze}from"./variablesAPI-BLoTBpai.js";import{c as We}from"./calcMediaUrl-BdU63MXS.js";const qe=({imgId:r,useExternalUrl:n,externalUrl:t})=>{if(n)return{fullImageUrl:t,localImageAttributes:null};{const e=se.getState().workingProject?.attributes.media.data?.find(l=>String(l.id)===String(r))?.attributes;if(!e)return{fullImageUrl:"no_image",localImageAttributes:null};const{url:o}=e;return{fullImageUrl:We(o),localImageAttributes:e}}},Te=pe.div`
  position: relative;
  border-style: solid;
  max-width: 100%;
  max-height: 100%;
  user-select: none;
  order: ${({index:r})=>r};
  content-visibility: auto;

  &[data-static] {
  position: absolute;
	min-width: 0;
	min-height: 0;
	max-width: "auto";
	max-height: "auto";
}


  --elementTranslateLeft: 0px;
  --elementTranslateTop: 0px;
  --elementDeltaCenterX: 0px;
  --elementDeltaCenterY: 0px;

  transform:  translate(var(--elementDeltaCenterX),var(--elementDeltaCenterY)) translate(var(--elementTranslateLeft),var(--elementTranslateTop));


  & > * {
    transition: 300ms;
  }

  &.isActiveOverlayTrigger {
    z-index: 10;
  }





  &[data-isdevmode='true'] {
    transition: none !important;
    scale: 1 !important;
    cursor: inherit;
    & * {
      pointer-events: none !important;
    }
  }


  &[data-iseditednow='true'] {
    /* outline: 5px red solid; */
    z-index: 1000;
    filter: blur(0px);
    will-change: 'left, top, width, height';
  }


 
`,St=pe(Te)`
  position: relative;
  /* min-width: 100px;
  min-height: 100px; */
  width: auto;
  height: auto;
  container-name: ElementListContainer;
  /* container-type: inline-size; */

  .listScroller {
    margin: 0;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  .grid {
    position: relative;
    display: grid;
    width: min-content;
    height: min-content;
    min-width: 100%;
    min-height: 100%;
    justify-content: center;
    align-content: center;

    &:empty {
      &::after {
        content: attr(data-list-empty-text);
        white-space: nowrap;
      }
    }


  }

  .element_subpage {
    content-visibility: auto;
  }

  &.listForceFillWidth {
    .grid > * {
      width: 100% !important;
    }
  }

  &.listForceFillHeight {
    .grid > * {
      height: 100% !important;
    }
  }


`,Ge="data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%200H40V40H0V0ZM40%2040H80V80H40V40ZM40%200H42L40%202V0ZM40%204L44%200H46L40%206V4ZM40%208L48%200H50L40%2010V8ZM40%2012L52%200H54L40%2014V12ZM40%2016L56%200H58L40%2018V16ZM40%2020L60%200H62L40%2022V20ZM40%2024L64%200H66L40%2026V24ZM40%2028L68%200H70L40%2030V28ZM40%2032L72%200H74L40%2034V32ZM40%2036L76%200H78L40%2038V36ZM40%2040L80%200V2L42%2040H40ZM44%2040L80%204V6L46%2040H44ZM48%2040L80%208V10L50%2040H48ZM52%2040L80%2012V14L54%2040H52ZM56%2040L80%2016V18L58%2040H56ZM60%2040L80%2020V22L62%2040H60ZM64%2040L80%2024V26L66%2040H64ZM68%2040L80%2028V30L70%2040H68ZM72%2040L80%2032V34L74%2040H72ZM76%2040L80%2036V38L78%2040H76Z'%20fill='%23B0B0B0'%20fill-opacity='0.28'/%3e%3c/svg%3e",Ye=pe(Te)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 14px;
  overflow: hidden;

  &.size-large input {
    font-size: 1.2em;
  }

  &.size-small input {
    font-size: 0.7em;
  }

  & > .image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.isEditor {
    background-image: url(${Ge});
    background-repeat: repeat;
    background-position: 50% 50%;
    background-size: 15px auto;
  }
`,Xe=(r,n)=>{const{isDisabled_signal_d_fb:t,isVisible_signal_d_fb:e,isVisible_directValue:o,isPressed_signal_d_fb:a,isVisible_reserve_space:l,orientationVisibility:i}=r||{},c=ee(y=>y.isLandscape),f=$e(y=>y.showBoundingBox),g=ee(y=>y.envState),h=!ce(e),_=ce(t),I=ce(a),D=m.useMemo(()=>{if(e)return h;if(o==null||o==="")return!1;if(typeof o=="string"){const y=o.trim(),E=Number(y);return isNaN(E)?!(y.length>0):!E}return!o},[h,e,o]),w=m.useMemo(()=>!!(i==="landscape"&&!c||i==="portrait"&&c),[c,i]),R=m.useMemo(()=>({isDisabled:t?!_:!1,isHidden:D,isHiddenByOrientation:w,isReserveSpace:l,isPressed:a?I:!1}),[t,_,D,w,l,a,I]),O=m.useMemo(()=>({isHiddenByOrientation:w,[`container-0-element-${n}`]:n!==null}),[w,n]);return g==="editor"&&f?O:R};function Je({navigate:r,url:n}){const t=ee.getState().envState;console.info(`%cPage flip to: ${n}`,"color:#000; background-color:#09eab2"),t==="live"||t==="build"?r(n==="-1"?-1:"/"+n):console.info("%cPage flip works only in LIVE Project Preview or after build","color:#000; background-color:#09eab2")}const oe=Me((r,n)=>({visibleOverlayData:null,setVisibleOverlayData:t=>{const e=n().visibleOverlayData;if(e?.triggerElementRef&&e?.triggerElementRef===t?.triggerElementRef){r(()=>({visibleOverlayData:null})),console.log("Overlay closed: same trigger element ");return}else r(()=>({visibleOverlayData:t}))},updateActionData:t=>{const e=n(),o={...e.visibleOverlayData,actionData:t};e.visibleOverlayData&&r(()=>({visibleOverlayData:o}))}})),G=({behaviour:r,onChangeActionUseCustomValue:n,value:t,passedOnChangeValue:e})=>(r?.toLowerCase()?.includes("change")||r==="manual")&&!n?e:t,Ke=({parameters:r,updateParameterCustomValue:n})=>{const t=m.useMemo(()=>r.filter(e=>e.joinValueSetter_signal_fb),[r]);m.useEffect(()=>{const e=[];if(t?.length){for(const o of t){let a;const{type:l,joinValueSetter_signal_fb:i,name:c}=o,f=String(i);e.push({subscribe:function(){a=CrComLib.subscribeState(l,f,g=>{n({name:c,customValue:g})})},unsubscribe:function(){CrComLib.unsubscribeState(l,f,a)}})}return e.map(o=>o.subscribe()),()=>{e.map(o=>o.unsubscribe())}}},[t,n])},Qe=Y.createContext({calculatedParameters:[]}),he=Y.createContext({updateParameterCustomValue:()=>{}}),xt=({children:r,parameters:n})=>{const[t,e]=m.useState(()=>{const l=new Map;for(const i of n)l.set(i.name,i);return l}),o=m.useCallback(({name:l,customValue:i})=>{e(c=>{const f=new Map(c),g=f.get(l);return g?(f.set(l,{...g,customValue:i}),f):c})},[]);m.useEffect(()=>{e(l=>{const i=new Map;for(const c of n){const f=l.get(c.name);if(!f)i.set(c.name,c);else{const{customValue:g,...h}=f;i.set(c.name,ge.isEqual(c,h)?f:c)}}return i})},[n]),Ke({parameters:n,updateParameterCustomValue:o});const a=m.useMemo(()=>{const l=[];for(const i of t.values())if("customValue"in i){const{customValue:c,...f}=i;l.push({...f,currentValue:c})}else l.push(i);return l},[t]);return u.jsx(he.Provider,{value:{updateParameterCustomValue:o},children:u.jsx(Qe.Provider,{value:{calculatedParameters:a},children:r})})};function et(r,n){return(...t)=>{setTimeout(()=>{r(...t)},n)}}const ae=async({returnSimpleArray:r,actions:n,indexInList:t,parentData:e,parentIndex:o,elementRef:a,dataset:l,datasetPath:i,filter:c,pages:f,navigate:g,updateParameterCustomValue:h})=>{const{addValueToStore:_}=Ue.getState(),{setVariableNewValue:I}=ze.getState();function D(v){let s;return v==="/"?s="":v==="-1"?s="-1":(s=f?.find(d=>String(d.id)===String(v))?.attributes.name||"no_name",s=ve(s)),s}const w=({newActionData:v})=>{const{setVisibleOverlayData:s}=oe.getState();s(v===null?null:{actionData:v,triggerElementRef:a})},R=[];let O=[],y=[],E=[],H=[],A=[],B=[],j=[],k=[],Z=[],$=[],U=[];if(n?.length)for(const v of n){let s;const{type:d,behaviour:P,onChangeActionUseCustomValue:V,signalName_signal:S,digitalPushData:x,pulseDelay:X=50,value:p,attachedVariableName:C,attachedParameterName:L,attachedFunctionToRun:z,pageFlipTarget:te,pageFlipTargetByName:ne,requestUrl:ie,attachedStateType:W,stateId:J,stateValue:F,delay:be,forceExecution:Le,onResponseOk:we=[],onResponseError:Pe=[]}=v;if(d==="d"&&(x===void 0||x==="pulse"?s=()=>{ke(S,X)}:x===!0||x===!1?s=()=>ue({signalName:S,value:x}):x==="momentarily"?s=b=>ue({signalName:S,value:b}):x==="toggle"&&(s=()=>{const b=!Fe({signalName:S});return ue({signalName:S,value:b})})),d==="v"&&(s=b=>{const N=G({value:p,passedOnChangeValue:b,behaviour:P,onChangeActionUseCustomValue:V});I({name:C,currentValue:N})}),d==="p"&&(s=b=>{const N=G({value:p,passedOnChangeValue:b,behaviour:P,onChangeActionUseCustomValue:V});if(!L){console.log("No parameter name passed in action");return}h({name:L,customValue:N})}),d==="s"&&(s=b=>He({signalName:S,value:String(G({value:p,passedOnChangeValue:b,behaviour:P,onChangeActionUseCustomValue:V}))})),d==="a"&&(s=b=>Be({signalName:S,value:Number(G({value:p,passedOnChangeValue:b,behaviour:P,onChangeActionUseCustomValue:V}))})),d==="o"&&(s=()=>{console.log("Overlay action fired"),w({newActionData:v})}),d==="co"&&(s=()=>{console.log("Close any active overlay"),w({newActionData:null})}),d==="f"&&(s=b=>{const N=se.getState().workingProject?.attributes?.modificators.data,le=G({value:p,passedOnChangeValue:b,behaviour:P,onChangeActionUseCustomValue:V});Ne([le],String(z),N)}),d==="r"&&(s=()=>{let b="";te||S?b=D(te||S):ne&&(b=ve(ne)),Je({navigate:g,url:b})}),d==="post"||d==="get"||d==="put"||d==="delete"){const b=n.filter(M=>we.includes(M.uid)),N=n.filter(M=>Pe.includes(M.uid)),le=await ae({actions:b,indexInList:t,parentData:e,parentIndex:o,elementRef:a,dataset:l,datasetPath:i,filter:c,pages:f,navigate:g,updateParameterCustomValue:h,returnSimpleArray:!0}),Ve=await ae({actions:N,indexInList:t,parentData:e,parentIndex:o,elementRef:a,dataset:l,datasetPath:i,filter:c,pages:f,navigate:g,updateParameterCustomValue:h,returnSimpleArray:!0}),Re=M=>le.map(K=>K(M)),ye=M=>Ve.map(K=>K(M));s=M=>{const K=d.toUpperCase(),Ce=ie??"no_url_set_up",De=G({value:p,passedOnChangeValue:M,behaviour:P,onChangeActionUseCustomValue:V});fetch(Ce,{method:K,...d==="post"||d==="put"?{body:De}:{}}).then(async q=>{const{status:re}=q;if(re===200){let Q;try{Q=await q.json(),typeof Q=="object"&&(Q=JSON.stringify(Q))}catch(Oe){console.log("Error parsing response",Oe)}Re(Q)}else console.info(`%cHTTP action error: ${re}`,"color: #fff; background-color: #982424",q),ye()}).catch(q=>{const{status:re}=q;console.info(`%cHTTP action error: ${re}`,"color: #fff; background-color: #982424",q),ye()})}}if(d==="st"&&(s=()=>{console.log("Store action fired",v),W&&J!==void 0&&F&&(["s","d","a"].includes(W)?_({name:J,type:W,joinNumber:F}):_({name:J,type:W,value:F}))}),s)switch(be&&(s=et(s,be)),r&&R.push(s),P){case"tap":d==="d"&&x==="momentarily"?E=[...E,s]:Le?y=[...y,s]:O=[...O,s];break;case"hold":d==="d"&&x==="momentarily"?H=[...H,s]:A=[...A,s];break;case"dbTap":B=[...B,s];break;case"onload":j=[...j,s];break;case"onexit":k=[...k,s];break;case"beforeChange":Z=[...Z,s];break;case"afterChange":$=[...$,s];break;case"onChange":U=[...U,s];break}}return r?R:{tapActions:O,tapForcedActions:y,tapActionsMomentarily:E,holdActionsMomentarily:H,doubleTapActions:B,holdActions:A,onLoadActions:j,onExitActions:k,onBeforeChangeActions:Z,onAfterChangeActions:$,onChangeActions:U}},_e={tapActions:[],tapForcedActions:[],tapActionsMomentarily:[],doubleTapActions:[],holdActions:[],holdActionsMomentarily:[],onLoadActions:[],onExitActions:[],onBeforeChangeActions:[],onAfterChangeActions:[],onChangeActions:[]},tt=({indexInList:r,actions:n,dataset:t,datasetPath:e,filter:o,elementRef:a,parentData:l,parentIndex:i})=>{const c=ee(p=>p.envState),f=se(p=>p.workingProject?.attributes.pages.data),g=window?.avgatorStudio?.navigate,{updateParameterCustomValue:h}=m.useContext(he),[_,I]=m.useState(_e),{tapActions:D,tapForcedActions:w,tapActionsMomentarily:R,doubleTapActions:O,holdActions:y,holdActionsMomentarily:E}=_;m.useEffect(()=>{const p=oe.getState().visibleOverlayData;if(c!=="preview"||!n?.length||!p||a?.current!==p.triggerElementRef?.current)return;const C=n.find(L=>L.type==="o"&&L.behaviour===p.actionData.behaviour);if(C&&!ge.isEqual(C,p.actionData)){const L=oe.getState().updateActionData;L(C)}},[n,a,c]),m.useEffect(()=>{n?.length&&ae({actions:n,indexInList:r,parentData:l,parentIndex:i,elementRef:a,dataset:t,datasetPath:e,filter:o,pages:f,navigate:g,updateParameterCustomValue:h}).then(p=>{I(p)})},[n,t,e,a,c,o,r,g,f,l,i,h]);const H=500,A=m.useCallback(({functions:p,message:C,tapPulseValue:L})=>{if(p?.length)for(const z of p)L===void 0?z():z(L),C&&console.info(C)},[]),B=O?.length>0,j=y?.length>0,k=E?.length>0,Z=D?.length>0,$=R?.length>0,U=Z||$||j||k||B,v=m.useRef(!1),s=m.useRef(),d=m.useRef(!1);m.useEffect(()=>{clearTimeout(s.current)},[]);function P(){d.current||(d.current=!0,A({functions:w,message:"Tap forced action run"}),A({functions:R,message:"Tap momentarily actions START",tapPulseValue:!0}),(k||j)&&(s.current=setTimeout(()=>{clearTimeout(s.current),v.current=!0,A({functions:y,message:"Hold actions fired"}),A({functions:E,message:"Hold momentarily actions START",tapPulseValue:!0})},H)))}function V(p){d.current&&(!p&&!v.current&&A({functions:D,message:"Tap actions fired"}),v.current&&A({functions:E,message:"Hold momentarily actions END",tapPulseValue:!1}),A({functions:R,message:"Tap momentarily actions END",tapPulseValue:!1})),d.current=!1,v.current=!1,clearTimeout(s.current)}function S(){d.current&&(console.warn("onClickCancel"),V(!0))}const x=U?{onPointerDown:()=>{P()},onPointerUp:()=>{V()},onPointerCancel:()=>{S()},onMouseLeave:()=>{S()}}:{},X=m.useMemo(()=>{const p=oe.getState().visibleOverlayData;return p?.triggerElementRef===a&&p?.actionData?.overlayPlacement!=="fullscreen"},[a]);return c==="editor"||!n?.length?{..._e,tapActionsArr:[],isActiveOverlayTrigger:!1}:{..._,tapActionsArr:x,isActiveOverlayTrigger:X}},At=({actions:r})=>{const n=se(l=>l.workingProject?.attributes.pages.data),t=window?.avgatorStudio?.navigate,[e,o]=m.useState(new Map([])),{updateParameterCustomValue:a}=m.useContext(he);return m.useEffect(()=>{if(!r.size)return;const l=[],i=new Map([]);r.forEach((c,f)=>{if(!c)i.set(f,void 0);else{const g=ae({actions:c,pages:n,navigate:t,updateParameterCustomValue:a}).then(h=>{i.set(f,h)});l.push(g)}}),Promise.all(l).then(()=>{o(c=>ge.isEqual(c,i)?c:i)}).catch(c=>{console.error("Error in compose bulc actions",c)})},[r,t,n,a]),r.size?e:null};function nt(r){const{useBorder:n,borderRadius:t,borderTopLeftRadius:e,borderTopRightRadius:o,borderBottomRightRadius:a,borderBottomLeftRadius:l,...i}=r??{};return n?{borderTopLeftRadius:e??t,borderTopRightRadius:o??t,borderBottomRightRadius:a??t,borderBottomLeftRadius:l??t,...i}:{}}const rt=r=>{const{isEnabled:n=!1,xOffset:t,yOffset:e,blur:o=50,spread:a,color:l="black",inset:i=!1}=r??{};return n?{boxShadow:`${l} ${t||0}px ${e||0}px ${o||0}px ${a||0}px ${i?"inset":""}`}:{boxShadow:"none"}},ot=r=>{let{isEnabled:n=!1,offset:t,position:e="bottom",startOpacity:o,endOpacity:a}=r??{};o=o??100,a=a??0;const i={top:"above",right:"right",bottom:"below",left:"left"}[e];return n?{WebkitBoxReflect:`${i} ${t}px linear-gradient(to ${e}, rgba(0,0,0,${a/100}), rgba(0,0,0,${o/100}))`}:{WebkitBoxReflect:"unset"}};var at="image_svgHolder__9476460";const Ee=Y.memo(({imgId:r,useExternalUrl:n=!1,externalUrl:t,fillType:e,fillAlignX:o,fillAlignY:a,passedStyle:l,isLazyLoad:i=!1})=>{const{fullImageUrl:c,localImageAttributes:f}=m.useMemo(()=>qe({imgId:r,useExternalUrl:n,externalUrl:t})??{},[t,r,n]),g=m.useMemo(()=>({objectFit:e||"cover",objectPosition:`${o||"center"} ${a||"center"}`,width:"100%",height:"100%",...l}),[o,a,e,l]),h=u.jsx("img",{style:g,loading:i?"lazy":"eager",className:"image",src:c,alt:"image",draggable:!1}),_=f?.svgContent;return _?u.jsx("div",{className:at,style:{...g},dangerouslySetInnerHTML:{__html:_}}):h}),st=Y.memo(r=>{const{size:n,cssClass:t,width:e,height:o,actions:a,state:l,imgId:i,useExternalUrl:c,externalUrl:f,fillType:g,fillAlignX:h,fillAlignY:_,border:I,dataset:D,datasetPath:w,filter:R,parentData:O,parentArrayIndex:y,isLazyLoad:E=!1,boxShadow:H,boxReflect:A,constraintsVertical:B,constraintsHorizontal:j,isStaticElement:k,left:Z,top:$,right:U,bottom:v,staticDevMoveableRef:s,index:d,deltaCenterX:P,deltaCenterY:V}=r,S=y,x=m.useRef(null),X=Xe(l,d),p=ee(F=>F.envState),C=Ze({width:e,height:o,constraintsVertical:B,constraintsHorizontal:j,isStaticElement:k,left:Z,top:$,right:U,bottom:v,fallbackWidth:"100px",fallbackHeight:"100px",deltaCenterX:P,deltaCenterY:V}),{tapActionsArr:L,isActiveOverlayTrigger:z}=tt({actions:a,dataset:D,datasetPath:w,filter:R,elementRef:x,parentData:O,parentIndex:S}),te=Ie({[`element_${r.type}`]:!0,[`${t}`]:t,[`size-${n}`]:n,hasActions:!!a?.length,isActiveOverlayTrigger:!!z,isEditor:p==="editor",...X}),ne={...L},ie=nt(I),W=rt(H),J=ot(A);return u.jsx(Ye,{ref:F=>{s&&(s.current=F),x.current=F},...r,style:{...C,...ie,...W,...J},...ne,className:te,children:u.jsx(Ee,{imgId:i,useExternalUrl:c,externalUrl:f,renderEnvtype:p,fillType:g,fillAlignX:h,fillAlignY:_,isLazyLoad:E})})});st.displayName="ImageElement";const it=(r,n)=>m.lazy(()=>{switch(r){case"fa":return T(()=>import("./index.esm-_6dBI1yT.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});case"bs":return T(()=>import("./index.esm-B9lZxoJq.js"),__vite__mapDeps([4,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});case"md":return T(()=>import("./index.esm-BeKO5FPR.js"),__vite__mapDeps([5,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});case"hi":return T(()=>import("./index.esm-C8rbSTqJ.js"),__vite__mapDeps([6,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});case"wi":return T(()=>import("./index.esm-DUgoWg58.js"),__vite__mapDeps([7,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});case"fc":return T(()=>import("./index.esm-BYEEFQf8.js"),__vite__mapDeps([8,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});case"ci":return T(()=>import("./index.esm-BsNM4tMW.js"),__vite__mapDeps([9,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});case"fi":return T(()=>import("./index.esm-CKrr55eb.js"),__vite__mapDeps([10,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});case"io":return T(()=>import("./index.esm-DiL9F9KB.js"),__vite__mapDeps([11,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});case"ri":return T(()=>import("./index.esm-D9k73O9o.js"),__vite__mapDeps([12,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});case"tb":return T(()=>import("./index.esm-CiygglM8.js"),__vite__mapDeps([13,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});case"ai":return T(()=>import("./index.esm-CZtiJpB1.js"),__vite__mapDeps([14,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}});default:return T(()=>import("./index.esm-_6dBI1yT.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>{const e=t[n];return typeof e=="function"?{default:e}:{default:()=>u.jsx(u.Fragment,{children:"n/a"})}})}}),lt=Y.memo(({iconSet:r,iconName:n,passedProps:t})=>{const e=m.useMemo(()=>it(r,n),[r,n]),{style:o}=t,a={...o,width:"1em",height:"1em",minWidth:"1em",minHeight:"1em"};return u.jsx(m.Suspense,{fallback:u.jsx("div",{style:a}),children:u.jsx(e,{...t})})}),Tt=Y.memo(({icon:r,style:n,className:t,onClick:e,iconImageData:o,useImageAsIcon:a,...l})=>{let i=u.jsx("div",{children:"n/a"});if(!a&&r){const c=r.slice(0,2).toLowerCase();i=u.jsx(lt,{passedProps:{className:t,onClick:e,style:n,...l},iconSet:c,iconName:r})}return a&&o&&(i=u.jsx(Ee,{passedStyle:{width:"1em",height:"1em",minWidth:"1em",minHeight:"1em",...n},...o,isLazyLoad:!1})),u.jsx(u.Fragment,{children:i})});var fe={exports:{}},de,Se;function ct(){if(Se)return de;Se=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return de=r,de}var me,xe;function ut(){if(xe)return me;xe=1;var r=ct();function n(){}function t(){}return t.resetWarningCache=n,me=function(){function e(l,i,c,f,g,h){if(h!==r){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}e.isRequired=e;function o(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:n};return a.PropTypes=a,a},me}var Ae;function ft(){return Ae||(Ae=1,fe.exports=ut()()),fe.exports}var dt=ft();const Et=je(dt);export{Te as B,St as E,st as I,Et as P,Tt as R,Qe as a,rt as b,nt as c,ot as d,tt as e,Ee as f,qe as g,xt as h,oe as i,At as j,Je as k,ft as r,Xe as u};
