import{b as o}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const v={title:"V3/E-Commerce/Wishlist Button",component:"wu-wishlist-button",tags:["autodocs"],argTypes:{active:{control:"boolean"},count:{control:"number"}}},t={args:{active:!1,count:0},render:n=>o`
    <wu-wishlist-button ?active=${n.active} count=${n.count}></wu-wishlist-button>
  `},s={render:()=>o`<wu-wishlist-button active></wu-wishlist-button>`},e={render:()=>o`
    <div style="display:flex;gap:12px;align-items:center">
      <wu-wishlist-button count="5"></wu-wishlist-button>
      <wu-wishlist-button active count="12"></wu-wishlist-button>
    </div>
  `};var i,r,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    active: false,
    count: 0
  },
  render: args => html\`
    <wu-wishlist-button ?active=\${args.active} count=\${args.count}></wu-wishlist-button>
  \`
}`,...(u=(r=t.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var a,c,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{\n  render: () => html`<wu-wishlist-button active></wu-wishlist-button>`\n}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var w,m,d;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center">
      <wu-wishlist-button count="5"></wu-wishlist-button>
      <wu-wishlist-button active count="12"></wu-wishlist-button>
    </div>
  \`
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const g=["Default","Active","WithCount"];export{s as Active,t as Default,e as WithCount,g as __namedExportsOrder,v as default};
