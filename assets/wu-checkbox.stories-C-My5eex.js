import{b as s}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const u={title:"Components/Checkbox",component:"wu-checkbox",tags:["autodocs"],argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}}},e={args:{label:"Accept terms",checked:!1},render:o=>s`<wu-checkbox label=${o.label} ?checked=${o.checked}></wu-checkbox>`},c={render:()=>s`
    <div style="display:flex;flex-direction:column;gap:12px">
      <wu-checkbox label="Unchecked"></wu-checkbox>
      <wu-checkbox label="Checked" checked></wu-checkbox>
      <wu-checkbox label="Indeterminate" indeterminate></wu-checkbox>
      <wu-checkbox label="Disabled" disabled></wu-checkbox>
    </div>
  `};var a,l,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms',
    checked: false
  },
  render: args => html\`<wu-checkbox label=\${args.label} ?checked=\${args.checked}></wu-checkbox>\`
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var t,n,d;c.parameters={...c.parameters,docs:{...(t=c.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px">
      <wu-checkbox label="Unchecked"></wu-checkbox>
      <wu-checkbox label="Checked" checked></wu-checkbox>
      <wu-checkbox label="Indeterminate" indeterminate></wu-checkbox>
      <wu-checkbox label="Disabled" disabled></wu-checkbox>
    </div>
  \`
}`,...(d=(n=c.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const i=["Default","AllStates"];export{c as AllStates,e as Default,i as __namedExportsOrder,u as default};
