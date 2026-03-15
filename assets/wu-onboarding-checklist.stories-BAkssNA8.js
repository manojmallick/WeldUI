import{b as r}from"./lit-element-I0QAeI3K.js";import"./index-BlKKMvld.js";import"./directive-helpers-QMk0t2il.js";const u=[{id:"1",label:"Create your account",completed:!0},{id:"2",label:"Set up your profile",completed:!1},{id:"3",label:"Invite your first team member",completed:!1},{id:"4",label:"Install the CLI",completed:!1}],w={title:"V3/Feedback & Validation/Onboarding Checklist",component:"wu-onboarding-checklist",tags:["autodocs"]},e={render:()=>r`
    <wu-onboarding-checklist
      title="Getting Started"
      .items=${u}
    ></wu-onboarding-checklist>
  `},t={render:()=>r`
    <wu-onboarding-checklist
      title="Onboarding Complete!"
      .items=${u.map(b=>({...b,completed:!0}))}
    ></wu-onboarding-checklist>
  `},o={render:()=>r`
    <wu-onboarding-checklist title="No Steps Yet" .items=${[]}></wu-onboarding-checklist>
  `};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <wu-onboarding-checklist
      title="Getting Started"
      .items=\${sampleItems}
    ></wu-onboarding-checklist>
  \`
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <wu-onboarding-checklist
      title="Onboarding Complete!"
      .items=\${sampleItems.map(i => ({
    ...i,
    completed: true
  }))}
    ></wu-onboarding-checklist>
  \`
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <wu-onboarding-checklist title="No Steps Yet" .items=\${[]}></wu-onboarding-checklist>
  \`
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const f=["Default","AllComplete","Empty"];export{t as AllComplete,e as Default,o as Empty,f as __namedExportsOrder,w as default};
