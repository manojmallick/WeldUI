import{b as l}from"./lit-element-9a6qN07w.js";const u={title:"Components/Spinner",component:"wu-spinner",tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]},label:{control:"text"}}},e={args:{size:"md",label:"Loading…"},render:n=>l`<wu-spinner size=${n.size} label=${n.label}></wu-spinner>`},s={render:()=>l`
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,t,o;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;align-items:center;gap:24px">
      <wu-spinner size="sm"></wu-spinner>
      <wu-spinner size="md"></wu-spinner>
      <wu-spinner size="lg"></wu-spinner>
    </div>
  \`
}`,...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const m=["Default","Sizes"];export{e as Default,s as Sizes,m as __namedExportsOrder,u as default};
