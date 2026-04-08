import{b as r}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const u={title:"V3/Charts/Sankey",component:"wu-sankey",tags:["autodocs"]},e={render:()=>r`
    <wu-sankey
      title="Budget Allocation"
      .nodes=${[{id:"a",label:"Revenue"},{id:"b",label:"R&D"},{id:"c",label:"Sales"}]}
      .links=${[{source:"a",target:"b",value:40},{source:"a",target:"c",value:60}]}
    ></wu-sankey>
  `};var a,n,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <wu-sankey
      title="Budget Allocation"
      .nodes=\${[{
    id: 'a',
    label: 'Revenue'
  }, {
    id: 'b',
    label: 'R&D'
  }, {
    id: 'c',
    label: 'Sales'
  }]}
      .links=\${[{
    source: 'a',
    target: 'b',
    value: 40
  }, {
    source: 'a',
    target: 'c',
    value: 60
  }]}
    ></wu-sankey>
  \`
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,u as default};
