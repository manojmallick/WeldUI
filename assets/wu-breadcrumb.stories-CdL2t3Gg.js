import{b as i}from"./lit-element-9a6qN07w.js";const m={title:"Components/Breadcrumb",component:"wu-breadcrumb",tags:["autodocs"],argTypes:{separator:{control:"text"}},parameters:{docs:{description:{component:"Hierarchical navigation trail. Compose `<wu-breadcrumb>` with `<wu-breadcrumb-item>` elements. The last item without an `href` is treated as the current page."}}}},r={render:()=>i`
    <wu-breadcrumb>
      <li><a href="/">Home</a></li>
      <li><a href="/docs">Documentation</a></li>
      <li><span aria-current="page">Components</span></li>
    </wu-breadcrumb>
  `},e={render:()=>i`
    <wu-breadcrumb separator="›">
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><span aria-current="page">WeldUI Pro</span></li>
    </wu-breadcrumb>
  `};var a,o,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <wu-breadcrumb>
      <li><a href="/">Home</a></li>
      <li><a href="/docs">Documentation</a></li>
      <li><span aria-current="page">Components</span></li>
    </wu-breadcrumb>
  \`
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var n,s,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <wu-breadcrumb separator="›">
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><span aria-current="page">WeldUI Pro</span></li>
    </wu-breadcrumb>
  \`
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const p=["Default","ChevronSeparator"];export{e as ChevronSeparator,r as Default,p as __namedExportsOrder,m as default};
