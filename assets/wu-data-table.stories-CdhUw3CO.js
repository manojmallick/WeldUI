import{b as l}from"./lit-element-9a6qN07w.js";import"./index-3bhES6li.js";const o=[{key:"name",label:"Name",sortable:!0,width:"200px"},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!1,width:"120px"},{key:"status",label:"Status",sortable:!1,width:"100px"}],t=Array.from({length:10},(e,a)=>({name:`User ${a+1}`,email:`user${a+1}@example.com`,role:a%3===0?"Admin":a%3===1?"Editor":"Viewer",status:a%4===0?"Inactive":"Active"})),v={title:"Components/DataTable",component:"wu-data-table",tags:["autodocs"],argTypes:{loading:{control:"boolean"},selectable:{control:"boolean"},searchable:{control:"boolean"},page:{control:"number"},pageSize:{control:"number"},total:{control:"number"}}},n={args:{loading:!1,selectable:!1,searchable:!1,page:1,pageSize:10,total:10},render:e=>l`
    <wu-data-table
      .columns=${o}
      .rows=${t}
      total=${e.total}
      page=${e.page}
      page-size=${e.pageSize}
      ?loading=${e.loading}
      ?selectable=${e.selectable}
      ?searchable=${e.searchable}
      @wu-sort-change=${a=>console.log("sort",a.detail)}
      @wu-page-change=${a=>console.log("page",a.detail)}
    ></wu-data-table>
  `},s={render:()=>l`
    <wu-data-table
      .columns=${o}
      .rows=${t}
      total=${t.length}
      page="1"
      page-size="10"
      selectable
      @wu-selection-change=${e=>console.log("selected",e.detail.selected.length)}
    ></wu-data-table>
  `},r={render:()=>l`
    <wu-data-table
      .columns=${o}
      .rows=${t}
      total=${t.length}
      page="1"
      page-size="10"
      searchable
      @wu-search-change=${e=>console.log("search",e.detail)}
    ></wu-data-table>
  `},c={render:()=>l`
    <wu-data-table
      .columns=${o}
      .rows=${[]}
      total="0"
      loading
    ></wu-data-table>
  `},d={render:()=>l`
    <wu-data-table
      .columns=${o}
      .rows=${[]}
      total="0"
      empty-message="No users found. Try adjusting your filters."
    ></wu-data-table>
  `},u={render:()=>l`
    <wu-data-table
      .columns=${o}
      .rows=${t}
      total="150"
      page="3"
      page-size="10"
      @wu-page-change=${e=>console.log("page",e.detail)}
    ></wu-data-table>
  `};var g,m,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    loading: false,
    selectable: false,
    searchable: false,
    page: 1,
    pageSize: 10,
    total: 10
  },
  render: args => html\`
    <wu-data-table
      .columns=\${COLUMNS}
      .rows=\${ROWS}
      total=\${args.total}
      page=\${args.page}
      page-size=\${args.pageSize}
      ?loading=\${args.loading}
      ?selectable=\${args.selectable}
      ?searchable=\${args.searchable}
      @wu-sort-change=\${(e: CustomEvent) => console.log('sort', e.detail)}
      @wu-page-change=\${(e: CustomEvent) => console.log('page', e.detail)}
    ></wu-data-table>
  \`
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,b,$;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <wu-data-table
      .columns=\${COLUMNS}
      .rows=\${ROWS}
      total=\${ROWS.length}
      page="1"
      page-size="10"
      selectable
      @wu-selection-change=\${(e: CustomEvent) => console.log('selected', e.detail.selected.length)}
    ></wu-data-table>
  \`
}`,...($=(b=s.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var w,h,S;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <wu-data-table
      .columns=\${COLUMNS}
      .rows=\${ROWS}
      total=\${ROWS.length}
      page="1"
      page-size="10"
      searchable
      @wu-search-change=\${(e: CustomEvent) => console.log('search', e.detail)}
    ></wu-data-table>
  \`
}`,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,O,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <wu-data-table
      .columns=\${COLUMNS}
      .rows=\${[]}
      total="0"
      loading
    ></wu-data-table>
  \`
}`,...(y=(O=c.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var z,C,E;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <wu-data-table
      .columns=\${COLUMNS}
      .rows=\${[]}
      total="0"
      empty-message="No users found. Try adjusting your filters."
    ></wu-data-table>
  \`
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var N,L,W;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <wu-data-table
      .columns=\${COLUMNS}
      .rows=\${ROWS}
      total="150"
      page="3"
      page-size="10"
      @wu-page-change=\${(e: CustomEvent) => console.log('page', e.detail)}
    ></wu-data-table>
  \`
}`,...(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const M=["Default","Selectable","Searchable","Loading","Empty","WithPagination"];export{n as Default,d as Empty,c as Loading,r as Searchable,s as Selectable,u as WithPagination,M as __namedExportsOrder,v as default};
