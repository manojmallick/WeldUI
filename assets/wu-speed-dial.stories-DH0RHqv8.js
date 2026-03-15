import{b as n}from"./lit-element-CWHijwDH.js";const c={title:"Navigation/SpeedDial",component:"wu-speed-dial",tags:["autodocs"]},l=[{label:"New Document",value:"doc",icon:"📄"},{label:"Upload File",value:"upload",icon:"📤"},{label:"New Folder",value:"folder",icon:"📁"}],e={render:()=>n`
    <div style="position:relative;height:250px">
      <wu-speed-dial .actions=${l} .open=${!0}></wu-speed-dial>
    </div>`},t={render:()=>n`
    <div style="position:relative;height:120px;">
      <wu-speed-dial direction="left" .actions=${l} .open=${!0}></wu-speed-dial>
    </div>`};var i,o,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <div style="position:relative;height:250px">
      <wu-speed-dial .actions=\${actions} .open=\${true}></wu-speed-dial>
    </div>\`
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var r,s,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <div style="position:relative;height:120px;">
      <wu-speed-dial direction="left" .actions=\${actions} .open=\${true}></wu-speed-dial>
    </div>\`
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const u=["Default","LeftDirection"];export{e as Default,t as LeftDirection,u as __namedExportsOrder,c as default};
