import{a1 as t,ds as a}from"./main-BKM2fIwG.js";const o=a`
  from {
opacity: 0;
transform: scaleY(0.8) translateY(-100%);
height: 0;
  }

  to {
   opacity: 1;
   transform: scaleY(1) translateY(0);
   height: auto;
  }
`,e=t.div`
  position: relative;

  display: flex;
  flex-flow: column;

  .ant-card-body {
    flex: 1;
  }

  .ant-card-meta {
    display: block;
  }

  .ant-table-tbody > tr:last-child > td {
    border-bottom: 0;
  }


  .ant-table-tbody > tr {
    overflow: hidden;
    transition: 200ms;
    animation-name: ${o};
    animation-timing-function: linear;
    animation-duration: 300ms;
  }

  .ant-card-actions > li > span {
    cursor: default;
  }

  .lastProjectLink {
    color: var(--ant-primary-5);
    cursor: pointer;
  }

  .projectCardActionsBox {
    display: flex;
    gap: 20px;
  }
`,r=t.div`
  position: absolute;
  left: 2px;
  top: 2px;
  right: 2px;
  height: 5px;
  background-color: gray;
  border-radius: 2px;
`,n=t.div`
  display: grid;
  gap: 1vmax;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 400px)); */
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`,l=t.div`
  position: relative;
  display: flex;
  white-space: nowrap;
  align-items: center;
  gap: 5px;

  .innerBox {
    flex: 1;
    position: relative;

    .ant-input {
      width: '100%';
    }
  }
`,p=t.div`
position: relative;
height: 100%;

display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto 1fr;

.scrollingTable {
position: relative;
}

.ant-table-wrapper {
  position:absolute;
  left:0;
  top:0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

thead {
  position: sticky;
  top:0px;
  z-index: 10;
}

.ant-input-affix-wrapper {

  &:has(input:not(:placeholder-shown)) {
    border-color:var(--ant-primary-5);
    border-width: 2px;
  }



}


`;export{e as C,p as P,n as T,r as a,l as b};
