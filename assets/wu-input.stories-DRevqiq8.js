import{b as l}from"./lit-element-CWHijwDH.js";import"./index-BM5e8oBU.js";const x={title:"Components/Input",component:"wu-input",tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","search"]},size:{control:"radio",options:["sm","md","lg"]}}},e={args:{label:"Email",placeholder:"you@example.com",type:"email"},render:t=>l`<wu-input label=${t.label} placeholder=${t.placeholder} type=${t.type} style="max-width:320px"></wu-input>`},r={render:()=>l`<wu-input label="Username" value="ab" error="Must be at least 3 characters" style="max-width:320px"></wu-input>`},a={render:()=>l`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:320px">
      <wu-input size="sm" placeholder="Small"></wu-input>
      <wu-input size="md" placeholder="Medium"></wu-input>
      <wu-input size="lg" placeholder="Large"></wu-input>
    </div>
  `};var p,s,o;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email'
  },
  render: args => html\`<wu-input label=\${args.label} placeholder=\${args.placeholder} type=\${args.type} style="max-width:320px"></wu-input>\`
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,i,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:'{\n  render: () => html`<wu-input label="Username" value="ab" error="Must be at least 3 characters" style="max-width:320px"></wu-input>`\n}',...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:320px">
      <wu-input size="sm" placeholder="Small"></wu-input>
      <wu-input size="md" placeholder="Medium"></wu-input>
      <wu-input size="lg" placeholder="Large"></wu-input>
    </div>
  \`
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const y=["Default","WithError","AllSizes"];export{a as AllSizes,e as Default,r as WithError,y as __namedExportsOrder,x as default};
