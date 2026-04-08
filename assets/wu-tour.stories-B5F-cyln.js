import{b as c}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const m={title:"Enterprise/Tour",component:"wu-tour",tags:["autodocs"]},u=[{title:"Welcome to the dashboard",content:"This is your central hub for all activity. Let's take a quick tour."},{title:"Create your first project",content:'Click the "New project" button to get started.'},{title:"Invite your team",content:"Add teammates via the Settings → Team page."}],t={render:()=>c`
    <wu-tour .steps=${u} active></wu-tour>
    <p style="font-family:var(--wu-font-sans);font-size:14px;color:var(--wu-color-text-secondary)">
      Tour overlay is visible above.
    </p>
  `},e={render:()=>c`
    <wu-tour .steps=${u}></wu-tour>
    <p style="font-family:var(--wu-font-sans);font-size:14px;color:var(--wu-color-text-secondary)">
      Tour is inactive — nothing rendered.
    </p>
  `};var o,r,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <wu-tour .steps=\${steps} active></wu-tour>
    <p style="font-family:var(--wu-font-sans);font-size:14px;color:var(--wu-color-text-secondary)">
      Tour overlay is visible above.
    </p>
  \`
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <wu-tour .steps=\${steps}></wu-tour>
    <p style="font-family:var(--wu-font-sans);font-size:14px;color:var(--wu-color-text-secondary)">
      Tour is inactive — nothing rendered.
    </p>
  \`
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const v=["Active","Inactive"];export{t as Active,e as Inactive,v as __namedExportsOrder,m as default};
