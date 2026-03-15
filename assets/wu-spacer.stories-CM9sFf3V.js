import{b as o}from"./lit-element-I0QAeI3K.js";import"./index-BlKKMvld.js";import"./directive-helpers-QMk0t2il.js";const r=(p,n="var(--wu-color-primary)")=>o`
  <div
    style="padding:var(--wu-space-2) var(--wu-space-3);background:${n};color:white;border-radius:var(--wu-radius-sm);font-size:var(--wu-text-xs);white-space:nowrap;"
  >
    ${p}
  </div>
`,m={title:"V3/Layout & Structure/Spacer",component:"wu-spacer",tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","auto"]}}},e={render:()=>o`
    <div style="display:flex;align-items:center;padding:var(--wu-space-3);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      ${r("Logo")}
      <wu-spacer></wu-spacer>
      ${r("Login","var(--wu-color-text-secondary)")}
      ${r("Sign Up")}
    </div>
  `},a={render:()=>o`
    <div style="display:flex;align-items:center;padding:var(--wu-space-3);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      ${r("A")}
      <wu-spacer size="md"></wu-spacer>
      ${r("B")}
      <wu-spacer size="xl"></wu-spacer>
      ${r("C")}
    </div>
  `};var s,d,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;align-items:center;padding:var(--wu-space-3);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      \${box('Logo')}
      <wu-spacer></wu-spacer>
      \${box('Login', 'var(--wu-color-text-secondary)')}
      \${box('Sign Up')}
    </div>
  \`
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,u,t;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;align-items:center;padding:var(--wu-space-3);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      \${box('A')}
      <wu-spacer size="md"></wu-spacer>
      \${box('B')}
      <wu-spacer size="xl"></wu-spacer>
      \${box('C')}
    </div>
  \`
}`,...(t=(u=a.parameters)==null?void 0:u.docs)==null?void 0:t.source}}};const x=["AutoFill","FixedSizes"];export{e as AutoFill,a as FixedSizes,x as __namedExportsOrder,m as default};
