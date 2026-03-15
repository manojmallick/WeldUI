import{b as c}from"./lit-element-CWHijwDH.js";import"./index-BM5e8oBU.js";const y={title:"Components/Search",component:"wu-search",tags:["autodocs"],argTypes:{value:{control:"text"},placeholder:{control:"text"},loading:{control:"boolean"},clearable:{control:"boolean"},debounce:{control:"number"}}},r={args:{placeholder:"Search…",debounce:300,clearable:!0},render:e=>c`
    <div style="max-width:320px">
      <wu-search
        placeholder=${e.placeholder}
        ?loading=${e.loading}
        ?clearable=${e.clearable}
        debounce=${e.debounce}
        @wu-search=${g=>console.log("wu-search",g.detail)}
      ></wu-search>
    </div>
  `},a={render:()=>c`
    <div style="max-width:320px">
      <wu-search value="users" loading></wu-search>
    </div>
  `},o={render:()=>c`
    <div style="max-width:320px">
      <wu-search value="hello world" clearable></wu-search>
    </div>
  `},s={render:()=>c`
    <div style="max-width:320px">
      <wu-search placeholder="Search users, teams, or projects…"></wu-search>
    </div>
  `};var l,n,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…',
    debounce: 300,
    clearable: true
  },
  render: args => html\`
    <div style="max-width:320px">
      <wu-search
        placeholder=\${args.placeholder}
        ?loading=\${args.loading}
        ?clearable=\${args.clearable}
        debounce=\${args.debounce}
        @wu-search=\${(e: CustomEvent) => console.log('wu-search', e.detail)}
      ></wu-search>
    </div>
  \`
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var t,u,h;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width:320px">
      <wu-search value="users" loading></wu-search>
    </div>
  \`
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width:320px">
      <wu-search value="hello world" clearable></wu-search>
    </div>
  \`
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var w,v,b;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width:320px">
      <wu-search placeholder="Search users, teams, or projects…"></wu-search>
    </div>
  \`
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const S=["Default","Loading","WithValue","CustomPlaceholder"];export{s as CustomPlaceholder,r as Default,a as Loading,o as WithValue,S as __namedExportsOrder,y as default};
