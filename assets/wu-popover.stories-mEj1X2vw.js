import{b as r}from"./lit-element-9a6qN07w.js";const a={title:"Components/Popover",component:"wu-popover",tags:["autodocs"],argTypes:{placement:{control:"radio",options:["top","bottom"]}},parameters:{docs:{description:{component:"An anchored overlay panel built on the CSS Popover API. Use the `trigger` slot for the activator and the default slot for panel content. Supports arrow and placement options."}}}},t={render:()=>r`
    <div style="padding:80px;display:flex;justify-content:center">
      <wu-popover>
        <wu-button slot="trigger" variant="secondary">Options ▾</wu-button>
        <div style="display:flex;flex-direction:column;gap:4px">
          <wu-button variant="ghost" size="sm" style="justify-content:flex-start">Edit</wu-button>
          <wu-button variant="ghost" size="sm" style="justify-content:flex-start">Duplicate</wu-button>
          <wu-divider></wu-divider>
          <wu-button variant="ghost" size="sm" style="justify-content:flex-start;color:var(--wu-color-danger)">Delete</wu-button>
        </div>
      </wu-popover>
    </div>
  `};var e,o,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding:80px;display:flex;justify-content:center">
      <wu-popover>
        <wu-button slot="trigger" variant="secondary">Options ▾</wu-button>
        <div style="display:flex;flex-direction:column;gap:4px">
          <wu-button variant="ghost" size="sm" style="justify-content:flex-start">Edit</wu-button>
          <wu-button variant="ghost" size="sm" style="justify-content:flex-start">Duplicate</wu-button>
          <wu-divider></wu-divider>
          <wu-button variant="ghost" size="sm" style="justify-content:flex-start;color:var(--wu-color-danger)">Delete</wu-button>
        </div>
      </wu-popover>
    </div>
  \`
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,a as default};
