import{b as w}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const g={title:"V3/Auth & Security/Password Strength",component:"wu-password-strength",tags:["autodocs"]},s={render:()=>w`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:200px">
      <wu-password-strength .score=${1}></wu-password-strength>
      <wu-password-strength .score=${2}></wu-password-strength>
      <wu-password-strength .score=${3}></wu-password-strength>
      <wu-password-strength .score=${4}></wu-password-strength>
    </div>
  `},r={render:()=>w`
    <wu-password-strength password="Abc123!@#"></wu-password-strength>
  `};var e,t,o;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:200px">
      <wu-password-strength .score=\${1}></wu-password-strength>
      <wu-password-strength .score=\${2}></wu-password-strength>
      <wu-password-strength .score=\${3}></wu-password-strength>
      <wu-password-strength .score=\${4}></wu-password-strength>
    </div>
  \`
}`,...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var a,n,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <wu-password-strength password="Abc123!@#"></wu-password-strength>
  \`
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const h=["AllLevels","FromPassword"];export{s as AllLevels,r as FromPassword,h as __namedExportsOrder,g as default};
