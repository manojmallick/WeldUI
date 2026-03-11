import{b as o}from"./lit-element-9a6qN07w.js";const v={title:"Components/Divider",component:"wu-divider",tags:["autodocs"],argTypes:{vertical:{control:"boolean"}}},e={render:()=>o`
    <p style="margin:0;color:var(--wu-color-text-secondary)">Above content</p>
    <wu-divider></wu-divider>
    <p style="margin:0;color:var(--wu-color-text-secondary)">Below content</p>
  `},r={render:()=>o`
    <wu-divider>OR</wu-divider>
  `},t={render:()=>o`
    <div style="display:flex;align-items:center;height:40px;gap:0">
      <wu-button variant="ghost" size="sm">Edit</wu-button>
      <wu-divider vertical></wu-divider>
      <wu-button variant="ghost" size="sm">Delete</wu-button>
    </div>
  `};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <p style="margin:0;color:var(--wu-color-text-secondary)">Above content</p>
    <wu-divider></wu-divider>
    <p style="margin:0;color:var(--wu-color-text-secondary)">Below content</p>
  \`
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var s,d,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <wu-divider>OR</wu-divider>
  \`
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,l,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;align-items:center;height:40px;gap:0">
      <wu-button variant="ghost" size="sm">Edit</wu-button>
      <wu-divider vertical></wu-divider>
      <wu-button variant="ghost" size="sm">Delete</wu-button>
    </div>
  \`
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const w=["Default","WithLabel","Vertical"];export{e as Default,t as Vertical,r as WithLabel,w as __namedExportsOrder,v as default};
