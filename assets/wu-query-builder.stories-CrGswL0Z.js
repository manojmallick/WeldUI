import{b as u}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const p={title:"Enterprise/Query Builder",component:"wu-query-builder",tags:["autodocs"]},n=[{id:"name",label:"Name",type:"string"},{id:"age",label:"Age",type:"number"},{id:"active",label:"Active",type:"boolean"},{id:"created",label:"Created At",type:"date"}],e={render:()=>u`<wu-query-builder .fields=${n} style="max-width:600px"></wu-query-builder>`},r={render:()=>u`
    <wu-query-builder
      .fields=${n}
      .rules=${[{id:"1",field:"name",operator:"contains",value:"Alice"}]}
      style="max-width:600px"
    ></wu-query-builder>
  `};var t,a,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'{\n  render: () => html`<wu-query-builder .fields=${fields} style="max-width:600px"></wu-query-builder>`\n}',...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var i,d,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <wu-query-builder
      .fields=\${fields}
      .rules=\${[{
    id: '1',
    field: 'name',
    operator: 'contains',
    value: 'Alice'
  }]}
      style="max-width:600px"
    ></wu-query-builder>
  \`
}`,...(s=(d=r.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const y=["Default","WithRules"];export{e as Default,r as WithRules,y as __namedExportsOrder,p as default};
