import{b as a}from"./lit-element-CWHijwDH.js";import"./index-SgSA6QNV.js";import"./property-CV4LBOm_.js";import"./state-kdcVxHgv.js";import"./query-BApjzB0v.js";import"./style-map-CRZOmCei.js";const z={title:"Components/Toggle",component:"wu-toggle",tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},size:{control:"radio",options:["sm","md","lg"]}}},e={args:{label:"Enable notifications",checked:!1},render:t=>a`<wu-toggle label=${t.label} ?checked=${t.checked}></wu-toggle>`},l={render:()=>a`
    <div style="display:flex;flex-direction:column;gap:16px">
      <wu-toggle size="sm" label="Small" checked></wu-toggle>
      <wu-toggle size="md" label="Medium" checked></wu-toggle>
      <wu-toggle size="lg" label="Large" checked></wu-toggle>
    </div>
  `},o={render:()=>a`<wu-toggle label="Dark mode" label-position="start" checked></wu-toggle>`};var r,s,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    checked: false
  },
  render: args => html\`<wu-toggle label=\${args.label} ?checked=\${args.checked}></wu-toggle>\`
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var g,n,d;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px">
      <wu-toggle size="sm" label="Small" checked></wu-toggle>
      <wu-toggle size="md" label="Medium" checked></wu-toggle>
      <wu-toggle size="lg" label="Large" checked></wu-toggle>
    </div>
  \`
}`,...(d=(n=l.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,m,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:'{\n  render: () => html`<wu-toggle label="Dark mode" label-position="start" checked></wu-toggle>`\n}',...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const S=["Default","AllSizes","LabelStart"];export{l as AllSizes,e as Default,o as LabelStart,S as __namedExportsOrder,z as default};
