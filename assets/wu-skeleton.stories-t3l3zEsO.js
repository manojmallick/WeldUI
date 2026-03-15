import{b as r}from"./lit-element-CWHijwDH.js";const h={title:"Components/Skeleton",component:"wu-skeleton",tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circle","rect"]},width:{control:"text"},height:{control:"text"}},parameters:{docs:{description:{component:"Content placeholder shapes that reduce perceived load time — text line, rectangle, or circle variants. Add shimmer animation via the `animated` prop."}}}},e={args:{variant:"text",width:"200px"},render:a=>r`<wu-skeleton variant=${a.variant} width=${a.width}></wu-skeleton>`},t={render:()=>r`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:320px;padding:16px;border:1px solid var(--wu-color-border);border-radius:8px">
      <wu-skeleton variant="rect" width="100%" height="160px"></wu-skeleton>
      <wu-skeleton variant="text" width="60%"></wu-skeleton>
      <wu-skeleton variant="text" width="100%"></wu-skeleton>
      <wu-skeleton variant="text" width="80%"></wu-skeleton>
    </div>
  `},n={render:()=>r`
    <div style="display:flex;align-items:center;gap:12px">
      <wu-skeleton variant="circle" width="40px" height="40px"></wu-skeleton>
      <div style="display:flex;flex-direction:column;gap:6px;flex:1">
        <wu-skeleton variant="text" width="140px"></wu-skeleton>
        <wu-skeleton variant="text" width="80px"></wu-skeleton>
      </div>
    </div>
  `};var o,i,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '200px'
  },
  render: args => html\`<wu-skeleton variant=\${args.variant} width=\${args.width}></wu-skeleton>\`
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:320px;padding:16px;border:1px solid var(--wu-color-border);border-radius:8px">
      <wu-skeleton variant="rect" width="100%" height="160px"></wu-skeleton>
      <wu-skeleton variant="text" width="60%"></wu-skeleton>
      <wu-skeleton variant="text" width="100%"></wu-skeleton>
      <wu-skeleton variant="text" width="80%"></wu-skeleton>
    </div>
  \`
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var w,c,x;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;align-items:center;gap:12px">
      <wu-skeleton variant="circle" width="40px" height="40px"></wu-skeleton>
      <div style="display:flex;flex-direction:column;gap:6px;flex:1">
        <wu-skeleton variant="text" width="140px"></wu-skeleton>
        <wu-skeleton variant="text" width="80px"></wu-skeleton>
      </div>
    </div>
  \`
}`,...(x=(c=n.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const v=["Default","CardSkeleton","AvatarRow"];export{n as AvatarRow,t as CardSkeleton,e as Default,v as __namedExportsOrder,h as default};
