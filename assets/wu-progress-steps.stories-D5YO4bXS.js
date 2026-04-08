import{b as t}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const o=["Account","Profile","Review","Complete"],x={title:"V3/Feedback & Validation/Progress Steps",component:"wu-progress-steps",tags:["autodocs"],argTypes:{current:{control:"number"},orientation:{control:"radio",options:["horizontal","vertical"]}}},e={args:{current:1},render:g=>t`
    <wu-progress-steps .steps=${o} .current=${g.current}></wu-progress-steps>
  `},r={render:()=>t`
    <wu-progress-steps .steps=${o} current="3"></wu-progress-steps>
  `},s={render:()=>t`
    <wu-progress-steps .steps=${o} current="2" orientation="vertical" style="max-width:200px;"></wu-progress-steps>
  `};var p,n,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    current: 1
  },
  render: args => html\`
    <wu-progress-steps .steps=\${steps} .current=\${args.current}></wu-progress-steps>
  \`
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var c,u,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <wu-progress-steps .steps=\${steps} current="3"></wu-progress-steps>
  \`
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,d,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <wu-progress-steps .steps=\${steps} current="2" orientation="vertical" style="max-width:200px;"></wu-progress-steps>
  \`
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const f=["Default","Completed","Vertical"];export{r as Completed,e as Default,s as Vertical,f as __namedExportsOrder,x as default};
