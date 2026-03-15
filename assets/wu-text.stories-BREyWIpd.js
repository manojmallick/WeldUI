import{b as n}from"./lit-element-I0QAeI3K.js";import"./index-BlKKMvld.js";import"./directive-helpers-QMk0t2il.js";const v={title:"V3/Typography & Content/Text",component:"wu-text",tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","muted","danger","success","warning","primary"]},size:{control:"select",options:["xs","sm","base","lg","xl"]},weight:{control:"select",options:["normal","medium","semibold","bold"]},italic:{control:"boolean"},mono:{control:"boolean"}}},t={args:{variant:"default",size:"base"},render:r=>n`
    <wu-text variant=${r.variant} size=${r.size}>${r.variant} text</wu-text>
  `},e={render:()=>n`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-text variant="default">Default text</wu-text>
      <wu-text variant="secondary">Secondary text</wu-text>
      <wu-text variant="muted">Muted text</wu-text>
      <wu-text variant="primary">Primary text</wu-text>
      <wu-text variant="success">Success text</wu-text>
      <wu-text variant="warning">Warning text</wu-text>
      <wu-text variant="danger">Danger text</wu-text>
    </div>
  `},a={render:()=>n`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-text weight="normal">Normal weight</wu-text>
      <wu-text weight="medium">Medium weight</wu-text>
      <wu-text weight="semibold">Semibold weight</wu-text>
      <wu-text weight="bold">Bold weight</wu-text>
      <wu-text mono>Monospace text</wu-text>
    </div>
  `};var i,o,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'base'
  },
  render: args => html\`
    <wu-text variant=\${args.variant} size=\${args.size}>\${args.variant} text</wu-text>
  \`
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var u,x,w;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-text variant="default">Default text</wu-text>
      <wu-text variant="secondary">Secondary text</wu-text>
      <wu-text variant="muted">Muted text</wu-text>
      <wu-text variant="primary">Primary text</wu-text>
      <wu-text variant="success">Success text</wu-text>
      <wu-text variant="warning">Warning text</wu-text>
      <wu-text variant="danger">Danger text</wu-text>
    </div>
  \`
}`,...(w=(x=e.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-text weight="normal">Normal weight</wu-text>
      <wu-text weight="medium">Medium weight</wu-text>
      <wu-text weight="semibold">Semibold weight</wu-text>
      <wu-text weight="bold">Bold weight</wu-text>
      <wu-text mono>Monospace text</wu-text>
    </div>
  \`
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const h=["Default","AllVariants","Weights"];export{e as AllVariants,t as Default,a as Weights,h as __namedExportsOrder,v as default};
