import{b as o}from"./lit-element-CWHijwDH.js";const m={title:"Components/MultiSelect",component:"wu-multi-select",tags:["autodocs"]},c=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],e={render:()=>o`
    <wu-multi-select label="Fruits" .options=${c} show-select-all></wu-multi-select>
  `},l={render:()=>o`
    <wu-multi-select
      label="Technologies"
      .options=${[{value:"ts",label:"TypeScript"},{value:"lit",label:"Lit"},{value:"vite",label:"Vite"}]}
      .values=${["ts","lit"]}
    ></wu-multi-select>
  `};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <wu-multi-select label="Fruits" .options=\${FRUITS} show-select-all></wu-multi-select>
  \`
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var r,n,u;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <wu-multi-select
      label="Technologies"
      .options=\${[{
    value: 'ts',
    label: 'TypeScript'
  }, {
    value: 'lit',
    label: 'Lit'
  }, {
    value: 'vite',
    label: 'Vite'
  }]}
      .values=\${['ts', 'lit']}
    ></wu-multi-select>
  \`
}`,...(u=(n=l.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};const p=["Default","PreSelected"];export{e as Default,l as PreSelected,p as __namedExportsOrder,m as default};
