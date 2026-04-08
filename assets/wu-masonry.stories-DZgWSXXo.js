import{b as m}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const r=(o,g)=>m`
  <div
    style="height:${o}px;padding:var(--wu-space-3);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);box-sizing:border-box;font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);"
  >
    ${g}
  </div>
`,T={title:"V3/Layout & Structure/Masonry",component:"wu-masonry",tags:["autodocs"],argTypes:{columns:{control:"number"},gap:{control:"select",options:["xs","sm","md","lg","xl"]}}},e={args:{columns:3,gap:"md"},render:o=>m`
    <wu-masonry .columns=${o.columns} gap=${o.gap}>
      ${r(80,"Short")} ${r(140,"Medium")} ${r(100,"Short-ish")}
      ${r(200,"Tall")} ${r(60,"Tiny")} ${r(160,"Medium tall")}
      ${r(120,"Normal")} ${r(90,"Short")} ${r(180,"Tall-ish")}
    </wu-masonry>
  `},s={render:()=>m`
    <wu-masonry columns="2" gap="lg">
      ${r(100,"One")} ${r(200,"Two")} ${r(150,"Three")} ${r(80,"Four")}
    </wu-masonry>
  `},a={render:()=>m`
    <wu-masonry columns="4" gap="sm">
      ${r(90,"A")} ${r(130,"B")} ${r(70,"C")} ${r(160,"D")}
      ${r(110,"E")} ${r(85,"F")} ${r(140,"G")} ${r(95,"H")}
    </wu-masonry>
  `};var n,t,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{\n  args: {\n    columns: 3,\n    gap: 'md'\n  },\n  render: args => html`\n    <wu-masonry .columns=${args.columns} gap=${args.gap}>\n      ${item(80, 'Short')} ${item(140, 'Medium')} ${item(100, 'Short-ish')}\n      ${item(200, 'Tall')} ${item(60, 'Tiny')} ${item(160, 'Medium tall')}\n      ${item(120, 'Normal')} ${item(90, 'Short')} ${item(180, 'Tall-ish')}\n    </wu-masonry>\n  `\n}",...(u=(t=e.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <wu-masonry columns="2" gap="lg">
      \${item(100, 'One')} \${item(200, 'Two')} \${item(150, 'Three')} \${item(80, 'Four')}
    </wu-masonry>
  \`
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var $,d,p;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <wu-masonry columns="4" gap="sm">
      \${item(90, 'A')} \${item(130, 'B')} \${item(70, 'C')} \${item(160, 'D')}
      \${item(110, 'E')} \${item(85, 'F')} \${item(140, 'G')} \${item(95, 'H')}
    </wu-masonry>
  \`
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Default","TwoColumns","FourColumns"];export{e as Default,a as FourColumns,s as TwoColumns,x as __namedExportsOrder,T as default};
