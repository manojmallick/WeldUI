import{b as i}from"./lit-element-I0QAeI3K.js";import"./index-BlKKMvld.js";import"./directive-helpers-QMk0t2il.js";const f={title:"V3/Typography & Content/Heading",component:"wu-heading",tags:["autodocs"],argTypes:{level:{control:"select",options:[1,2,3,4,5,6]},size:{control:"select",options:["xs","sm","md","lg","xl","2xl","auto"]},truncate:{control:"boolean"}}},e={args:{level:2,size:"auto",truncate:!1},render:d=>i`
    <wu-heading .level=${d.level} size=${d.size} ?truncate=${d.truncate}>
      Section Heading
    </wu-heading>
  `},a={render:()=>i`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-3);">
      <wu-heading level="1">Heading Level 1</wu-heading>
      <wu-heading level="2">Heading Level 2</wu-heading>
      <wu-heading level="3">Heading Level 3</wu-heading>
      <wu-heading level="4">Heading Level 4</wu-heading>
      <wu-heading level="5">Heading Level 5</wu-heading>
      <wu-heading level="6">Heading Level 6</wu-heading>
    </div>
  `},n={render:()=>i`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-3);">
      <wu-heading level="3" size="2xl">h3 displayed as 2xl</wu-heading>
      <wu-heading level="2" size="sm">h2 displayed as sm</wu-heading>
    </div>
  `},l={render:()=>i`
    <div style="max-width:240px;">
      <wu-heading level="2" truncate>This is a very long heading that will be truncated</wu-heading>
    </div>
  `};var r,s,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    level: 2,
    size: 'auto',
    truncate: false
  },
  render: args => html\`
    <wu-heading .level=\${args.level} size=\${args.size} ?truncate=\${args.truncate}>
      Section Heading
    </wu-heading>
  \`
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var u,g,o;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-3);">
      <wu-heading level="1">Heading Level 1</wu-heading>
      <wu-heading level="2">Heading Level 2</wu-heading>
      <wu-heading level="3">Heading Level 3</wu-heading>
      <wu-heading level="4">Heading Level 4</wu-heading>
      <wu-heading level="5">Heading Level 5</wu-heading>
      <wu-heading level="6">Heading Level 6</wu-heading>
    </div>
  \`
}`,...(o=(g=a.parameters)==null?void 0:g.docs)==null?void 0:o.source}}};var c,h,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-3);">
      <wu-heading level="3" size="2xl">h3 displayed as 2xl</wu-heading>
      <wu-heading level="2" size="sm">h2 displayed as sm</wu-heading>
    </div>
  \`
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,p,m;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width:240px;">
      <wu-heading level="2" truncate>This is a very long heading that will be truncated</wu-heading>
    </div>
  \`
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const L=["Default","AllLevels","ExplicitSizes","Truncated"];export{a as AllLevels,e as Default,n as ExplicitSizes,l as Truncated,L as __namedExportsOrder,f as default};
