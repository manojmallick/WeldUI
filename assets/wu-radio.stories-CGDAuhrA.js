import{b as u}from"./lit-element-CWHijwDH.js";const h={title:"Components/Radio",component:"wu-radio-group",tags:["autodocs"]},r={render:()=>u`
    <wu-radio-group name="plan" value="pro" label="Choose plan">
      <wu-radio value="free">Free</wu-radio>
      <wu-radio value="pro">Pro</wu-radio>
      <wu-radio value="enterprise">Enterprise</wu-radio>
    </wu-radio-group>
  `},a={render:()=>u`
    <wu-radio-group name="size" orientation="horizontal" label="Size">
      <wu-radio value="sm">Small</wu-radio>
      <wu-radio value="md">Medium</wu-radio>
      <wu-radio value="lg">Large</wu-radio>
    </wu-radio-group>
  `},e={render:()=>u`
    <wu-radio-group name="agreed" error="You must select an option" label="Do you agree?">
      <wu-radio value="yes">Yes</wu-radio>
      <wu-radio value="no">No</wu-radio>
    </wu-radio-group>
  `},o={render:()=>u`
    <wu-radio-group name="plan" value="pro" disabled label="Plan (disabled)">
      <wu-radio value="free">Free</wu-radio>
      <wu-radio value="pro">Pro</wu-radio>
    </wu-radio-group>
  `};var d,i,n;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <wu-radio-group name="plan" value="pro" label="Choose plan">
      <wu-radio value="free">Free</wu-radio>
      <wu-radio value="pro">Pro</wu-radio>
      <wu-radio value="enterprise">Enterprise</wu-radio>
    </wu-radio-group>
  \`
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var l,s,t;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <wu-radio-group name="size" orientation="horizontal" label="Size">
      <wu-radio value="sm">Small</wu-radio>
      <wu-radio value="md">Medium</wu-radio>
      <wu-radio value="lg">Large</wu-radio>
    </wu-radio-group>
  \`
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var p,w,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <wu-radio-group name="agreed" error="You must select an option" label="Do you agree?">
      <wu-radio value="yes">Yes</wu-radio>
      <wu-radio value="no">No</wu-radio>
    </wu-radio-group>
  \`
}`,...(m=(w=e.parameters)==null?void 0:w.docs)==null?void 0:m.source}}};var c,g,v;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <wu-radio-group name="plan" value="pro" disabled label="Plan (disabled)">
      <wu-radio value="free">Free</wu-radio>
      <wu-radio value="pro">Pro</wu-radio>
    </wu-radio-group>
  \`
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const f=["Default","Horizontal","WithError","Disabled"];export{r as Default,o as Disabled,a as Horizontal,e as WithError,f as __namedExportsOrder,h as default};
