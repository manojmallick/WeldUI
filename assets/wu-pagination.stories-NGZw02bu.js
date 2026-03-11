import{b as a}from"./lit-element-9a6qN07w.js";const v={title:"Components/Pagination",component:"wu-pagination",tags:["autodocs"],argTypes:{page:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},showInfo:{control:"boolean"},totalItems:{control:"number"},pageSize:{control:"number"}},parameters:{docs:{description:{component:"Page navigation for large data sets. Emits `wu-page-change` with the selected page number. Configure sibling page count and optional item-count display."}}}},e={args:{page:1,totalPages:10},render:i=>a`<wu-pagination .page=${i.page} .totalPages=${i.totalPages}></wu-pagination>`},t={render:()=>a`<wu-pagination page="5" total-pages="10"></wu-pagination>`},n={render:()=>a`
    <div style="display:flex;flex-direction:column;gap:16px">
      <wu-pagination page="1" total-pages="100"></wu-pagination>
      <wu-pagination page="50" total-pages="100"></wu-pagination>
      <wu-pagination page="100" total-pages="100"></wu-pagination>
    </div>
  `},o={render:()=>a`
    <wu-pagination page="3" total-pages="10" show-info total-items="98" page-size="10"></wu-pagination>
  `},r={render:()=>a`<wu-pagination page="2" total-pages="3"></wu-pagination>`};var p,s,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 10
  },
  render: args => html\`<wu-pagination .page=\${args.page} .totalPages=\${args.totalPages}></wu-pagination>\`
}`,...(g=(s=e.parameters)==null?void 0:s.docs)==null?void 0:g.source}}};var u,l,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:'{\n  render: () => html`<wu-pagination page="5" total-pages="10"></wu-pagination>`\n}',...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,w;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px">
      <wu-pagination page="1" total-pages="100"></wu-pagination>
      <wu-pagination page="50" total-pages="100"></wu-pagination>
      <wu-pagination page="100" total-pages="100"></wu-pagination>
    </div>
  \`
}`,...(w=(m=n.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var f,P,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <wu-pagination page="3" total-pages="10" show-info total-items="98" page-size="10"></wu-pagination>
  \`
}`,...(h=(P=o.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var b,x,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:'{\n  render: () => html`<wu-pagination page="2" total-pages="3"></wu-pagination>`\n}',...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const $=["Default","MiddlePage","LargePageCount","WithInfo","FewPages"];export{e as Default,r as FewPages,n as LargePageCount,t as MiddlePage,o as WithInfo,$ as __namedExportsOrder,v as default};
