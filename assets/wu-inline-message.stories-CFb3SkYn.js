import{b as i}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const f={title:"V3/Feedback & Validation/Inline Message",component:"wu-inline-message",tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},e={args:{variant:"info"},render:w=>i`<wu-inline-message variant=${w.variant}>This field is required.</wu-inline-message>`},a={render:()=>i`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-inline-message variant="info">Use your work email address.</wu-inline-message>
      <wu-inline-message variant="success">Email confirmed successfully.</wu-inline-message>
      <wu-inline-message variant="warning">This email is associated with another account.</wu-inline-message>
      <wu-inline-message variant="error">Email address is invalid.</wu-inline-message>
    </div>
  `},s={render:()=>i`
    <div style="max-width:320px;display:flex;flex-direction:column;gap:var(--wu-space-1);">
      <label style="font-size:var(--wu-text-sm);font-weight:var(--wu-font-medium);">Email</label>
      <input
        type="email"
        value="not-an-email"
        style="padding:var(--wu-space-2) var(--wu-space-3);border:1px solid var(--wu-color-danger);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);"
      />
      <wu-inline-message variant="error">Please enter a valid email address.</wu-inline-message>
    </div>
  `};var n,r,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  },
  render: args => html\`<wu-inline-message variant=\${args.variant}>This field is required.</wu-inline-message>\`
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var t,o,u;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-inline-message variant="info">Use your work email address.</wu-inline-message>
      <wu-inline-message variant="success">Email confirmed successfully.</wu-inline-message>
      <wu-inline-message variant="warning">This email is associated with another account.</wu-inline-message>
      <wu-inline-message variant="error">Email address is invalid.</wu-inline-message>
    </div>
  \`
}`,...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var d,m,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width:320px;display:flex;flex-direction:column;gap:var(--wu-space-1);">
      <label style="font-size:var(--wu-text-sm);font-weight:var(--wu-font-medium);">Email</label>
      <input
        type="email"
        value="not-an-email"
        style="padding:var(--wu-space-2) var(--wu-space-3);border:1px solid var(--wu-color-danger);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);"
      />
      <wu-inline-message variant="error">Please enter a valid email address.</wu-inline-message>
    </div>
  \`
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const x=["Default","AllVariants","BelowInput"];export{a as AllVariants,s as BelowInput,e as Default,x as __namedExportsOrder,f as default};
