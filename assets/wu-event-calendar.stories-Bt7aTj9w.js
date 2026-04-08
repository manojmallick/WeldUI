import{b as m}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const $={title:"Enterprise/Event Calendar",component:"wu-event-calendar",tags:["autodocs"]},p=new Date,e=p.getFullYear(),t=String(p.getMonth()+1).padStart(2,"0"),u=[{id:"1",title:"Team standup",date:`${e}-${t}-05`},{id:"2",title:"Product demo",date:`${e}-${t}-12`},{id:"3",title:"Sprint planning",date:`${e}-${t}-15`,color:"#7c3aed"},{id:"4",title:"All hands",date:`${e}-${t}-20`}],a={render:()=>m`
    <wu-event-calendar .events=${u}></wu-event-calendar>
  `},n={render:()=>m`<wu-event-calendar></wu-event-calendar>`};var r,s,d;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <wu-event-calendar .events=\${sampleEvents}></wu-event-calendar>
  \`
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var o,c,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:"{\n  render: () => html`<wu-event-calendar></wu-event-calendar>`\n}",...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const g=["Default","Empty"];export{a as Default,n as Empty,g as __namedExportsOrder,$ as default};
