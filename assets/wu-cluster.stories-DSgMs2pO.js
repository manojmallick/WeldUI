import{b as l}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const e=r=>l`
  <span
    style="display:inline-flex;align-items:center;padding:6px 12px;border-radius:var(--wu-radius-full);background:var(--wu-color-primary-subtle);color:var(--wu-color-text);border:1px solid var(--wu-color-border);"
  >
    ${r}
  </span>
`,f={title:"V3/Layout & Structure/Cluster",component:"wu-cluster",tags:["autodocs"],argTypes:{gap:{control:"select",options:["xs","sm","md","lg","xl"]},align:{control:"select",options:["start","center","end","stretch"]},justify:{control:"select",options:["start","center","end","between","around"]}}},t={args:{gap:"sm",align:"center",justify:"start"},render:r=>l`
    <wu-cluster gap=${r.gap} align=${r.align} justify=${r.justify}>
      ${e("Accessibility")}
      ${e("Design Tokens")}
      ${e("Web Components")}
      ${e("Lit")}
      ${e("TypeScript")}
    </wu-cluster>
  `},s={render:()=>l`
    <wu-cluster gap="md" justify="between">
      ${e("Filters")}
      ${e("Sort")}
      ${e("Export")}
    </wu-cluster>
  `},n={render:()=>l`
    <wu-cluster gap="xs">
      ${e("One")}
      ${e("Two")}
      ${e("Three")}
      ${e("Four")}
      ${e("Five")}
      ${e("Six")}
    </wu-cluster>
  `};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    gap: 'sm',
    align: 'center',
    justify: 'start'
  },
  render: args => html\`
    <wu-cluster gap=\${args.gap} align=\${args.align} justify=\${args.justify}>
      \${pill('Accessibility')}
      \${pill('Design Tokens')}
      \${pill('Web Components')}
      \${pill('Lit')}
      \${pill('TypeScript')}
    </wu-cluster>
  \`
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var u,p,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <wu-cluster gap="md" justify="between">
      \${pill('Filters')}
      \${pill('Sort')}
      \${pill('Export')}
    </wu-cluster>
  \`
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,$,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <wu-cluster gap="xs">
      \${pill('One')}
      \${pill('Two')}
      \${pill('Three')}
      \${pill('Four')}
      \${pill('Five')}
      \${pill('Six')}
    </wu-cluster>
  \`
}`,...(g=($=n.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};const x=["Default","Justified","Dense"];export{t as Default,n as Dense,s as Justified,x as __namedExportsOrder,f as default};
