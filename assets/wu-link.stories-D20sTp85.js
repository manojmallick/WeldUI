import{b as l}from"./lit-element-I0QAeI3K.js";import"./index-BlKKMvld.js";import"./directive-helpers-QMk0t2il.js";const x={title:"V3/Typography & Content/Link",component:"wu-link",tags:["autodocs"],argTypes:{href:{control:"text"},external:{control:"boolean"},variant:{control:"radio",options:["default","subtle","danger"]},underline:{control:"radio",options:["hover","always","never"]}}},e={render:()=>l`
    <wu-link href="https://weldui.dev">WeldUI Documentation</wu-link>
  `},n={render:()=>l`
    <wu-link href="https://github.com" external>View on GitHub</wu-link>
  `},r={render:()=>l`
    <div style="display:flex;gap:var(--wu-space-6);flex-wrap:wrap;">
      <wu-link href="#" variant="default">Default</wu-link>
      <wu-link href="#" variant="subtle">Subtle</wu-link>
      <wu-link href="#" variant="danger">Danger</wu-link>
    </div>
  `},a={render:()=>l`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-3);">
      <wu-link href="#" underline="hover">Underline on hover (default)</wu-link>
      <wu-link href="#" underline="always">Always underlined</wu-link>
      <wu-link href="#" underline="never">Never underlined</wu-link>
    </div>
  `};var i,t,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <wu-link href="https://weldui.dev">WeldUI Documentation</wu-link>
  \`
}`,...(u=(t=e.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};var o,s,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <wu-link href="https://github.com" external>View on GitHub</wu-link>
  \`
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var w,p,c;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:var(--wu-space-6);flex-wrap:wrap;">
      <wu-link href="#" variant="default">Default</wu-link>
      <wu-link href="#" variant="subtle">Subtle</wu-link>
      <wu-link href="#" variant="danger">Danger</wu-link>
    </div>
  \`
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var f,k,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-3);">
      <wu-link href="#" underline="hover">Underline on hover (default)</wu-link>
      <wu-link href="#" underline="always">Always underlined</wu-link>
      <wu-link href="#" underline="never">Never underlined</wu-link>
    </div>
  \`
}`,...(h=(k=a.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const y=["Default","External","AllVariants","UnderlineOptions"];export{r as AllVariants,e as Default,n as External,a as UnderlineOptions,y as __namedExportsOrder,x as default};
