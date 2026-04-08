import{b as u}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const p={title:"Components/Avatar",component:"wu-avatar",tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg","xl"]}}},a={args:{initials:"MM",size:"md"},render:s=>u`<wu-avatar initials=${s.initials} size=${s.size}></wu-avatar>`},i={render:()=>u`
    <div style="display:flex;gap:12px;align-items:center">
      <wu-avatar initials="SM" size="sm"></wu-avatar>
      <wu-avatar initials="MD" size="md"></wu-avatar>
      <wu-avatar initials="LG" size="lg"></wu-avatar>
      <wu-avatar initials="XL" size="xl"></wu-avatar>
    </div>
  `};var t,r,e;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    initials: 'MM',
    size: 'md'
  },
  render: args => html\`<wu-avatar initials=\${args.initials} size=\${args.size}></wu-avatar>\`
}`,...(e=(r=a.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};var n,l,o;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center">
      <wu-avatar initials="SM" size="sm"></wu-avatar>
      <wu-avatar initials="MD" size="md"></wu-avatar>
      <wu-avatar initials="LG" size="lg"></wu-avatar>
      <wu-avatar initials="XL" size="xl"></wu-avatar>
    </div>
  \`
}`,...(o=(l=i.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const c=["WithInitials","AllSizes"];export{i as AllSizes,a as WithInitials,c as __namedExportsOrder,p as default};
