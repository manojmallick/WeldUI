import{b as r}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const g={title:"V3/Feedback & Validation/Banner",component:"wu-banner",tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","danger"]},dismissible:{control:"boolean"},sticky:{control:"boolean"}}},e={args:{variant:"info",dismissible:!1},render:s=>r`
    <wu-banner variant=${s.variant} ?dismissible=${s.dismissible}>
      📢 New feature available: try the theme switcher in the toolbar above.
    </wu-banner>
  `},a={render:()=>r`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-banner variant="info" dismissible>Info: System maintenance scheduled for Sunday 02:00 UTC.</wu-banner>
      <wu-banner variant="success" dismissible>Success: Your changes have been saved.</wu-banner>
      <wu-banner variant="warning" dismissible>Warning: Your trial expires in 3 days.</wu-banner>
      <wu-banner variant="danger" dismissible>Critical: Upgrade required to maintain service.</wu-banner>
    </div>
  `},n={render:()=>r`
    <wu-banner variant="info" dismissible>
      We use cookies to improve your experience.
      <span slot="actions">
        <button style="margin-left:var(--wu-space-3);padding:var(--wu-space-1) var(--wu-space-3);background:var(--wu-color-primary);color:white;border:none;border-radius:var(--wu-radius-sm);font-size:var(--wu-text-xs);cursor:pointer;">Accept</button>
      </span>
    </wu-banner>
  `};var i,t,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    dismissible: false
  },
  render: args => html\`
    <wu-banner variant=\${args.variant} ?dismissible=\${args.dismissible}>
      📢 New feature available: try the theme switcher in the toolbar above.
    </wu-banner>
  \`
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-banner variant="info" dismissible>Info: System maintenance scheduled for Sunday 02:00 UTC.</wu-banner>
      <wu-banner variant="success" dismissible>Success: Your changes have been saved.</wu-banner>
      <wu-banner variant="warning" dismissible>Warning: Your trial expires in 3 days.</wu-banner>
      <wu-banner variant="danger" dismissible>Critical: Upgrade required to maintain service.</wu-banner>
    </div>
  \`
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,b,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <wu-banner variant="info" dismissible>
      We use cookies to improve your experience.
      <span slot="actions">
        <button style="margin-left:var(--wu-space-3);padding:var(--wu-space-1) var(--wu-space-3);background:var(--wu-color-primary);color:white;border:none;border-radius:var(--wu-radius-sm);font-size:var(--wu-text-xs);cursor:pointer;">Accept</button>
      </span>
    </wu-banner>
  \`
}`,...(m=(b=n.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const f=["Default","AllVariants","WithAction"];export{a as AllVariants,e as Default,n as WithAction,f as __namedExportsOrder,g as default};
