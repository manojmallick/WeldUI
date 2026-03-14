import{b as s}from"./lit-element-9a6qN07w.js";import"./index-3bhES6li.js";const k={title:"Components/Checkbox",component:"wu-checkbox",tags:["autodocs"],argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}}},e={args:{label:"Accept terms",checked:!1},render:a=>s`<wu-checkbox label=${a.label} ?checked=${a.checked}></wu-checkbox>`},c={render:()=>s`
    <div style="display:flex;flex-direction:column;gap:12px">
      <wu-checkbox label="Unchecked"></wu-checkbox>
      <wu-checkbox label="Checked" checked></wu-checkbox>
      <wu-checkbox label="Indeterminate" indeterminate></wu-checkbox>
      <wu-checkbox label="Disabled" disabled></wu-checkbox>
    </div>
  `};var o,l,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(n=c.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const u=["Default","AllStates"];export{c as AllStates,e as Default,u as __namedExportsOrder,k as default};
