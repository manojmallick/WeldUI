import{b as e}from"./lit-element-CBn2YVps.js";const W={title:"Navigation/Dropdown",component:"wu-dropdown",tags:["autodocs"]},D=[{label:"New File",value:"new",icon:"📄",group:"File"},{label:"Open…",value:"open",icon:"📂",group:"File"},{label:"Save",value:"save",icon:"💾",group:"File"},{separator:!0,label:"",value:""},{label:"Cut",value:"cut",icon:"✂️",group:"Edit"},{label:"Copy",value:"copy",icon:"📋",group:"Edit"},{label:"Paste",value:"paste",icon:"📌",group:"Edit",disabled:!0},{separator:!0,label:"",value:""},{label:"Delete",value:"delete",danger:!0,icon:"🗑️"}],t={render:()=>e`
    <div style="padding:60px">
      <wu-dropdown .items=${[{label:"Edit",value:"edit",icon:"✏️"},{label:"Duplicate",value:"duplicate",icon:"📑"},{separator:!0,label:"",value:""},{label:"Delete",value:"delete",danger:!0,icon:"🗑️"}]}>
        <wu-button slot="trigger">Actions ▾</wu-button>
      </wu-dropdown>
    </div>`},o={name:"With Group Headers",render:()=>e`
    <div style="padding:60px">
      <wu-dropdown .items=${D} @wu-select=${f=>console.log(f.detail)}>
        <wu-button slot="trigger">File ▾</wu-button>
      </wu-dropdown>
    </div>`},a={name:"Searchable",render:()=>e`
    <div style="padding:60px">
      <wu-dropdown searchable .items=${[{label:"Dashboard",value:"dashboard",icon:"🏠",description:"Overview & stats"},{label:"Projects",value:"projects",icon:"📁",description:"All active projects"},{label:"Team",value:"team",icon:"👥",description:"Manage members"},{label:"Reports",value:"reports",icon:"📊",description:"Analytics & exports"},{label:"Settings",value:"settings",icon:"⚙️",description:"Account & preferences"},{label:"Help & Docs",value:"help",icon:"❓",description:"Documentation"}]}>
        <wu-button slot="trigger">Navigate ▾</wu-button>
      </wu-dropdown>
      <p style="margin-top:16px; font-size:13px; color:var(--wu-color-text-secondary)">
        Type in the search box to filter menu items.
      </p>
    </div>`},r={name:"With Selection State",render:()=>e`
    <div style="padding:60px">
      <wu-dropdown .items=${[{label:"Compact",value:"compact",checked:!1},{label:"Comfortable",value:"comfortable",checked:!0},{label:"Spacious",value:"spacious",checked:!1}]}>
        <wu-button slot="trigger" variant="secondary">Density ▾</wu-button>
      </wu-dropdown>
    </div>`},l={name:"With Descriptions",render:()=>e`
    <div style="padding:60px">
      <wu-dropdown .items=${[{label:"Personal",value:"personal",icon:"👤",description:"Free — 1 user",checked:!0},{label:"Team",value:"team",icon:"👥",description:"From €49/mo — up to 10 users"},{label:"Enterprise",value:"enterprise",icon:"🏢",description:"Custom pricing — unlimited"}]}>
        <wu-button slot="trigger" variant="secondary">Switch plan ▾</wu-button>
      </wu-dropdown>
    </div>`};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding:60px">
      <wu-dropdown .items=\${[{
    label: 'Edit',
    value: 'edit',
    icon: '✏️'
  }, {
    label: 'Duplicate',
    value: 'duplicate',
    icon: '📑'
  }, {
    separator: true,
    label: '',
    value: ''
  }, {
    label: 'Delete',
    value: 'delete',
    danger: true,
    icon: '🗑️'
  }]}>
        <wu-button slot="trigger">Actions ▾</wu-button>
      </wu-dropdown>
    </div>\`
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'With Group Headers',
  render: () => html\`
    <div style="padding:60px">
      <wu-dropdown .items=\${fileItems} @wu-select=\${(e: CustomEvent) => console.log(e.detail)}>
        <wu-button slot="trigger">File ▾</wu-button>
      </wu-dropdown>
    </div>\`
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,m,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Searchable',
  render: () => html\`
    <div style="padding:60px">
      <wu-dropdown searchable .items=\${[{
    label: 'Dashboard',
    value: 'dashboard',
    icon: '🏠',
    description: 'Overview & stats'
  }, {
    label: 'Projects',
    value: 'projects',
    icon: '📁',
    description: 'All active projects'
  }, {
    label: 'Team',
    value: 'team',
    icon: '👥',
    description: 'Manage members'
  }, {
    label: 'Reports',
    value: 'reports',
    icon: '📊',
    description: 'Analytics & exports'
  }, {
    label: 'Settings',
    value: 'settings',
    icon: '⚙️',
    description: 'Account & preferences'
  }, {
    label: 'Help & Docs',
    value: 'help',
    icon: '❓',
    description: 'Documentation'
  }]}>
        <wu-button slot="trigger">Navigate ▾</wu-button>
      </wu-dropdown>
      <p style="margin-top:16px; font-size:13px; color:var(--wu-color-text-secondary)">
        Type in the search box to filter menu items.
      </p>
    </div>\`
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,w,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With Selection State',
  render: () => html\`
    <div style="padding:60px">
      <wu-dropdown .items=\${[{
    label: 'Compact',
    value: 'compact',
    checked: false
  }, {
    label: 'Comfortable',
    value: 'comfortable',
    checked: true
  }, {
    label: 'Spacious',
    value: 'spacious',
    checked: false
  }]}>
        <wu-button slot="trigger" variant="secondary">Density ▾</wu-button>
      </wu-dropdown>
    </div>\`
}`,...(g=(w=r.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var h,y,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'With Descriptions',
  render: () => html\`
    <div style="padding:60px">
      <wu-dropdown .items=\${[{
    label: 'Personal',
    value: 'personal',
    icon: '👤',
    description: 'Free — 1 user',
    checked: true
  }, {
    label: 'Team',
    value: 'team',
    icon: '👥',
    description: 'From €49/mo — up to 10 users'
  }, {
    label: 'Enterprise',
    value: 'enterprise',
    icon: '🏢',
    description: 'Custom pricing — unlimited'
  }]}>
        <wu-button slot="trigger" variant="secondary">Switch plan ▾</wu-button>
      </wu-dropdown>
    </div>\`
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const $=["Default","WithGroups","Searchable","WithChecked","WithDescriptions"];export{t as Default,a as Searchable,r as WithChecked,l as WithDescriptions,o as WithGroups,$ as __namedExportsOrder,W as default};
