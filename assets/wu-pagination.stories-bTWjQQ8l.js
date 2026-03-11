import{b as a}from"./lit-element-9a6qN07w.js";const $={title:"Components/Pagination",component:"wu-pagination",tags:["autodocs"],argTypes:{page:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},showInfo:{control:"boolean"},totalItems:{control:"number"},pageSize:{control:"number"}}},e={args:{page:1,totalPages:10},render:p=>a`<wu-pagination .page=${p.page} .totalPages=${p.totalPages}></wu-pagination>`},t={render:()=>a`<wu-pagination page="5" total-pages="10"></wu-pagination>`},n={render:()=>a`
    <div style="display:flex;flex-direction:column;gap:16px">
      <wu-pagination page="1" total-pages="100"></wu-pagination>
      <wu-pagination page="50" total-pages="100"></wu-pagination>
      <wu-pagination page="100" total-pages="100"></wu-pagination>
    </div>
  `},o={render:()=>a`
    <wu-pagination page="3" total-pages="10" show-info total-items="98" page-size="10"></wu-pagination>
  `},r={render:()=>a`<wu-pagination page="2" total-pages="3"></wu-pagination>`};var s,i,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 10
  },
  render: args => html\`<wu-pagination .page=\${args.page} .totalPages=\${args.totalPages}></wu-pagination>\`
}`,...(g=(i=e.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var u,l,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:'{\n  render: () => html`<wu-pagination page="5" total-pages="10"></wu-pagination>`\n}',...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,w;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px">
      <wu-pagination page="1" total-pages="100"></wu-pagination>
      <wu-pagination page="50" total-pages="100"></wu-pagination>
      <wu-pagination page="100" total-pages="100"></wu-pagination>
    </div>
  \`
}`,...(w=(d=n.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};var P,f,h;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <wu-pagination page="3" total-pages="10" show-info total-items="98" page-size="10"></wu-pagination>
  \`
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,b,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:'{\n  render: () => html`<wu-pagination page="2" total-pages="3"></wu-pagination>`\n}',...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const v=["Default","MiddlePage","LargePageCount","WithInfo","FewPages"];export{e as Default,r as FewPages,n as LargePageCount,t as MiddlePage,o as WithInfo,v as __namedExportsOrder,$ as default};
