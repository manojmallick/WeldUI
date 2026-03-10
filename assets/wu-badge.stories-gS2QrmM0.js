import{b as g}from"./lit-element-CTfEKIed.js";import"./index-B0i-QSD2.js";const w={title:"Components/Badge",component:"wu-badge",tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","success","warning","danger","outline"]}}},a={args:{variant:"default"},render:i=>g`<wu-badge variant=${i.variant}>Badge</wu-badge>`},e={render:()=>g`
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <wu-badge variant="default">Default</wu-badge>
      <wu-badge variant="primary">Primary</wu-badge>
      <wu-badge variant="success">Success</wu-badge>
      <wu-badge variant="warning">Warning</wu-badge>
      <wu-badge variant="danger">Danger</wu-badge>
      <wu-badge variant="outline">Outline</wu-badge>
    </div>
  `};var r,n,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: args => html\`<wu-badge variant=\${args.variant}>Badge</wu-badge>\`
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var d,u,s;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <wu-badge variant="default">Default</wu-badge>
      <wu-badge variant="primary">Primary</wu-badge>
      <wu-badge variant="success">Success</wu-badge>
      <wu-badge variant="warning">Warning</wu-badge>
      <wu-badge variant="danger">Danger</wu-badge>
      <wu-badge variant="outline">Outline</wu-badge>
    </div>
  \`
}`,...(s=(u=e.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};const c=["Default","AllVariants"];export{e as AllVariants,a as Default,c as __namedExportsOrder,w as default};
