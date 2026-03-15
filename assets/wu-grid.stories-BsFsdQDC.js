import{b as a}from"./lit-element-I0QAeI3K.js";import"./index-BlKKMvld.js";import"./directive-helpers-QMk0t2il.js";const r=t=>a`
  <div
    style="min-height:96px;padding:16px;border-radius:var(--wu-radius-lg);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);display:flex;align-items:end;"
  >
    ${t}
  </div>
`,f={title:"V3/Layout & Structure/Grid",component:"wu-grid",tags:["autodocs"],argTypes:{columns:{control:"number"},gap:{control:"select",options:["xs","sm","md","lg","xl"]},minItemWidth:{control:"text",name:"min-item-width"},autoFit:{control:"boolean",name:"auto-fit"}}},o={args:{columns:3,gap:"md",minItemWidth:"16rem",autoFit:!1},render:t=>a`
    <wu-grid
      .columns=${t.columns}
      gap=${t.gap}
      min-item-width=${t.minItemWidth}
      ?auto-fit=${t.autoFit}
    >
      ${r("One")}
      ${r("Two")}
      ${r("Three")}
      ${r("Four")}
      ${r("Five")}
      ${r("Six")}
    </wu-grid>
  `},e={render:()=>a`
    <wu-grid auto-fit min-item-width="12rem" gap="lg">
      ${r("Product")}
      ${r("Analytics")}
      ${r("Operations")}
      ${r("Support")}
      ${r("Security")}
    </wu-grid>
  `},n={render:()=>a`
    <wu-grid .columns=${2} gap="lg">
      ${r("Left Column")}
      ${r("Right Column")}
      ${r("Row Two Left")}
      ${r("Row Two Right")}
    </wu-grid>
  `};var i,d,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 'md',
    minItemWidth: '16rem',
    autoFit: false
  },
  render: args => html\`
    <wu-grid
      .columns=\${args.columns}
      gap=\${args.gap}
      min-item-width=\${args.minItemWidth}
      ?auto-fit=\${args.autoFit}
    >
      \${card('One')}
      \${card('Two')}
      \${card('Three')}
      \${card('Four')}
      \${card('Five')}
      \${card('Six')}
    </wu-grid>
  \`
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,s,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <wu-grid auto-fit min-item-width="12rem" gap="lg">
      \${card('Product')}
      \${card('Analytics')}
      \${card('Operations')}
      \${card('Support')}
      \${card('Security')}
    </wu-grid>
  \`
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,g,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <wu-grid .columns=\${2} gap="lg">
      \${card('Left Column')}
      \${card('Right Column')}
      \${card('Row Two Left')}
      \${card('Row Two Right')}
    </wu-grid>
  \`
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const x=["Default","AutoFit","TwoColumns"];export{e as AutoFit,o as Default,n as TwoColumns,x as __namedExportsOrder,f as default};
