import{b as r}from"./lit-element-CWHijwDH.js";const b={title:"Navigation/Dropdown",component:"wu-dropdown",tags:["autodocs"]},c=[{label:"Edit",value:"edit",icon:"✏️"},{label:"Duplicate",value:"duplicate"},{separator:!0,label:"",value:""},{label:"Delete",value:"delete",danger:!0}],e={render:()=>r`
    <wu-dropdown .items=${c}>
      <wu-button slot="trigger">Actions ▾</wu-button>
    </wu-dropdown>`},t={render:()=>r`
    <wu-dropdown .items=${[{label:"View",value:"view"},{label:"Edit",value:"edit",disabled:!0}]} .open=${!0}>
      <wu-button slot="trigger">Options</wu-button>
    </wu-dropdown>`},o={render:()=>r`
    <div style="margin-top:200px">
      <wu-dropdown placement="top" .items=${c} .open=${!0}>
        <wu-button slot="trigger">Open Up ▴</wu-button>
      </wu-dropdown>
    </div>`};var n,a,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <wu-dropdown .items=\${items}>
      <wu-button slot="trigger">Actions ▾</wu-button>
    </wu-dropdown>\`
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var d,s,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <wu-dropdown .items=\${[{
    label: 'View',
    value: 'view'
  }, {
    label: 'Edit',
    value: 'edit',
    disabled: true
  }]} .open=\${true}>
      <wu-button slot="trigger">Options</wu-button>
    </wu-dropdown>\`
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,p,w;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <div style="margin-top:200px">
      <wu-dropdown placement="top" .items=\${items} .open=\${true}>
        <wu-button slot="trigger">Open Up ▴</wu-button>
      </wu-dropdown>
    </div>\`
}`,...(w=(p=o.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};const g=["Default","WithDisabled","TopPlacement"];export{e as Default,o as TopPlacement,t as WithDisabled,g as __namedExportsOrder,b as default};
