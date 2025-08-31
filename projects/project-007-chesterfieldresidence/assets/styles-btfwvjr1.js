import{q as t}from"./index-BWO8qd00.js";const o=t.div`
  --appLeftSidebar-width: 300px;
  --appContent-width: 1fr;
  --appRightSidebar-width: 350px;
  --appConsoleSidebar-width: auto;

  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;

  .scrollable {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    overflow: auto;
    z-index: 10;
    min-height: 100%;
    height: 100%;
  }
`,e=t.div`
  position: relative;
  background-color: hsla(217, 81%, 36%, 0.06);
  border-bottom: 1px solid hsla(217, 81%, 36%, 0.08);
  display: flex;
  align-items: center;
  gap: 5px;
`,r=t.div`
  position: relative;
  display: flex;

  .appLayoutContent {
    position: relative;
    overflow: hidden;
    flex: 1;
    background-color: rgb(246, 246, 249);
  }
`,a=t.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  gap: 0px 0px;

  width: var(--appLeftSidebar-width);
  border-right-width: 0.5px;
  border-right-style: solid;
  border-right-color: rgba(197, 197, 211, 0.5);

  .expandSidebarSection {
    position: relative;
    min-height: 0;
  }
`,p=t.div`
  position: relative;
  width: var(--appRightSidebar-width);
  border-left-width: 0.5px;
  border-left-style: solid;
  border-left-color: rgba(197, 197, 211, 0.5);
`,d=t.div`
  position: relative;
  background-color: #151414;
  display: flex;
  flex-flow: column;

  .consoleClearArea {
    padding: 5px;
    button {
      border-width: 0.5px;
    }
  }

  .feedScroller {
    flex: 1;
    position: relative;
    width: 300px;

    .inner {
      position: absolute;
      left: 0;
      top: 10px;
      right: 0;
      bottom: 10px;
      overflow-y: scroll;
    }
  }
`;export{o as A,e as a,r as b,p as c,d,a as e};
