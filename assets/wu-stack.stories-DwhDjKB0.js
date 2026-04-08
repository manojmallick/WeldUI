import{b as i}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const t=e=>i`
  <div
    style="padding:16px;border-radius:var(--wu-radius-md);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);min-width:96px;text-align:center;"
  >
    ${e}
  </div>
`,f={title:"V3/Layout & Structure/Stack",component:"wu-stack",tags:["autodocs"],argTypes:{direction:{control:"radio",options:["vertical","horizontal"]},gap:{control:"select",options:["xs","sm","md","lg","xl"]},align:{control:"select",options:["start","center","end","stretch"]},justify:{control:"select",options:["start","center","end","between","around"]}}},r={args:{direction:"vertical",gap:"md",align:"stretch",justify:"start"},render:e=>i`
    <wu-stack
      direction=${e.direction}
      gap=${e.gap}
      align=${e.align}
      justify=${e.justify}
    >
      ${t("Alpha")}
      ${t("Beta")}
      ${t("Gamma")}
    </wu-stack>
  `},a={render:()=>i`
    <wu-stack direction="horizontal" gap="lg" align="center">
      ${t("Nav")}
      ${t("Search")}
      ${t("Actions")}
    </wu-stack>
  `},n={render:()=>i`
    <wu-stack direction="horizontal" justify="between" align="center">
      ${t("Left")}
      ${t("Center")}
      ${t("Right")}
    </wu-stack>
  `};var o,s,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    gap: 'md',
    align: 'stretch',
    justify: 'start'
  },
  render: args => html\`
    <wu-stack
      direction=\${args.direction}
      gap=\${args.gap}
      align=\${args.align}
      justify=\${args.justify}
    >
      \${tile('Alpha')}
      \${tile('Beta')}
      \${tile('Gamma')}
    </wu-stack>
  \`
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <wu-stack direction="horizontal" gap="lg" align="center">
      \${tile('Nav')}
      \${tile('Search')}
      \${tile('Actions')}
    </wu-stack>
  \`
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <wu-stack direction="horizontal" justify="between" align="center">
      \${tile('Left')}
      \${tile('Center')}
      \${tile('Right')}
    </wu-stack>
  \`
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const k=["Default","Horizontal","Distributed"];export{r as Default,n as Distributed,a as Horizontal,k as __namedExportsOrder,f as default};
