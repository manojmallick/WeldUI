import{b as d}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const p={title:"V3/SaaS & App Shell/Feature Flag Badge",component:"wu-feature-flag-badge",tags:["autodocs"],argTypes:{variant:{control:"select",options:["alpha","beta","new","experimental","deprecated","stable"]},label:{control:"text"}}},a={render:()=>d`
    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
      <wu-feature-flag-badge variant="alpha"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="beta"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="new"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="experimental"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="deprecated"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="stable"></wu-feature-flag-badge>
    </div>
  `},e={args:{variant:"beta",label:""},render:r=>d`<wu-feature-flag-badge variant=${r.variant} label=${r.label}></wu-feature-flag-badge>`};var t,l,g;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
      <wu-feature-flag-badge variant="alpha"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="beta"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="new"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="experimental"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="deprecated"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="stable"></wu-feature-flag-badge>
    </div>
  \`
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,f,n;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'beta',
    label: ''
  },
  render: args => html\`<wu-feature-flag-badge variant=\${args.variant} label=\${args.label}></wu-feature-flag-badge>\`
}`,...(n=(f=e.parameters)==null?void 0:f.docs)==null?void 0:n.source}}};const w=["AllVariants","Default"];export{a as AllVariants,e as Default,w as __namedExportsOrder,p as default};
