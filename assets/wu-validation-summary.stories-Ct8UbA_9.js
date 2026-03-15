import{b as s}from"./lit-element-I0QAeI3K.js";import"./index-BlKKMvld.js";import"./directive-helpers-QMk0t2il.js";const w={title:"V3/Feedback & Validation/Validation Summary",component:"wu-validation-summary",tags:["autodocs"]},r={render:()=>s`
    <wu-validation-summary
      .errors=${["Email address is required.","Password must be at least 8 characters.","You must accept the terms of service."]}
    ></wu-validation-summary>
  `},a={render:()=>s`
    <wu-validation-summary .errors=${["Email address is invalid."]}></wu-validation-summary>
  `},e={render:()=>s`
    <wu-validation-summary .errors=${[]}></wu-validation-summary>
    <p style="font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);">Nothing rendered when errors array is empty.</p>
  `};var t,o,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <wu-validation-summary
      .errors=\${['Email address is required.', 'Password must be at least 8 characters.', 'You must accept the terms of service.']}
    ></wu-validation-summary>
  \`
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var i,n,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <wu-validation-summary .errors=\${['Email address is invalid.']}></wu-validation-summary>
  \`
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var u,c,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <wu-validation-summary .errors=\${[]}></wu-validation-summary>
    <p style="font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);">Nothing rendered when errors array is empty.</p>
  \`
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const h=["Default","SingleError","Empty"];export{r as Default,e as Empty,a as SingleError,h as __namedExportsOrder,w as default};
