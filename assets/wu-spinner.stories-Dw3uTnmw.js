import{b as p}from"./lit-element-I0QAeI3K.js";const c={title:"Components/Spinner",component:"wu-spinner",tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]},label:{control:"text"}},parameters:{docs:{description:{component:"An animated circular loading indicator available in `sm`, `md` and `lg` sizes. Set `label` for an accessible screen-reader announcement."}}}},e={args:{size:"md",label:"Loading…"},render:s=>p`<wu-spinner size=${s.size} label=${s.label}></wu-spinner>`},n={render:()=>p`
    <div style="display:flex;align-items:center;gap:24px">
      <wu-spinner size="sm"></wu-spinner>
      <wu-spinner size="md"></wu-spinner>
      <wu-spinner size="lg"></wu-spinner>
    </div>
  `};var r,i,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading…'
  },
  render: args => html\`<wu-spinner size=\${args.size} label=\${args.label}></wu-spinner>\`
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var o,t,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;align-items:center;gap:24px">
      <wu-spinner size="sm"></wu-spinner>
      <wu-spinner size="md"></wu-spinner>
      <wu-spinner size="lg"></wu-spinner>
    </div>
  \`
}`,...(l=(t=n.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const m=["Default","Sizes"];export{e as Default,n as Sizes,m as __namedExportsOrder,c as default};
