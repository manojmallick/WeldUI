import{b as t}from"./lit-element-9a6qN07w.js";const g={title:"Components/Alert",component:"wu-alert",tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","danger","neutral"]},dismissible:{control:"boolean"}}},e={args:{variant:"info",dismissible:!1},render:n=>t`
    <wu-alert variant=${n.variant} ?dismissible=${n.dismissible}>
      <span slot="title">Heads up</span>
      This is an informational message for the user.
    </wu-alert>
  `},a={render:()=>t`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:480px">
      <wu-alert variant="info">
        <span slot="title">Info</span>
        Your changes have been saved to the cloud.
      </wu-alert>
      <wu-alert variant="success">
        <span slot="title">Success</span>
        Your account has been updated successfully.
      </wu-alert>
      <wu-alert variant="warning">
        <span slot="title">Warning</span>
        Your session will expire in 5 minutes.
      </wu-alert>
      <wu-alert variant="danger">
        <span slot="title">Error</span>
        Something went wrong. Please try again.
      </wu-alert>
      <wu-alert variant="neutral">
        No new notifications at this time.
      </wu-alert>
    </div>
  `},s={render:()=>t`
    <wu-alert variant="info" dismissible style="max-width:480px">
      <span slot="title">Dismissible Alert</span>
      Click the × button to dismiss this alert.
    </wu-alert>
  `};var r,i,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    dismissible: false
  },
  render: args => html\`
    <wu-alert variant=\${args.variant} ?dismissible=\${args.dismissible}>
      <span slot="title">Heads up</span>
      This is an informational message for the user.
    </wu-alert>
  \`
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var o,u,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:480px">
      <wu-alert variant="info">
        <span slot="title">Info</span>
        Your changes have been saved to the cloud.
      </wu-alert>
      <wu-alert variant="success">
        <span slot="title">Success</span>
        Your account has been updated successfully.
      </wu-alert>
      <wu-alert variant="warning">
        <span slot="title">Warning</span>
        Your session will expire in 5 minutes.
      </wu-alert>
      <wu-alert variant="danger">
        <span slot="title">Error</span>
        Something went wrong. Please try again.
      </wu-alert>
      <wu-alert variant="neutral">
        No new notifications at this time.
      </wu-alert>
    </div>
  \`
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <wu-alert variant="info" dismissible style="max-width:480px">
      <span slot="title">Dismissible Alert</span>
      Click the × button to dismiss this alert.
    </wu-alert>
  \`
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const f=["Default","AllVariants","Dismissible"];export{a as AllVariants,e as Default,s as Dismissible,f as __namedExportsOrder,g as default};
