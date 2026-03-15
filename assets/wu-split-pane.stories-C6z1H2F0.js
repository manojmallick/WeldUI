import{b as d}from"./lit-element-CWHijwDH.js";const p={title:"Layout/SplitPane",component:"wu-split-pane",tags:["autodocs"]},r={render:()=>d`
    <wu-split-pane style="height:300px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <div slot="primary" style="padding:16px;background:var(--wu-color-surface);height:100%">
        <strong>Sidebar</strong><br>Drag the divider →
      </div>
      <div slot="secondary" style="padding:16px;height:100%">
        <strong>Main Content</strong><br>This panel fills remaining space.
      </div>
    </wu-split-pane>`},e={render:()=>d`
    <wu-split-pane orientation="vertical" style="height:400px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <div slot="primary" style="padding:16px;background:var(--wu-color-surface)">
        <strong>Top Panel</strong><br>Drag the divider ↓
      </div>
      <div slot="secondary" style="padding:16px">
        <strong>Bottom Panel</strong>
      </div>
    </wu-split-pane>`};var o,a,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <wu-split-pane style="height:300px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <div slot="primary" style="padding:16px;background:var(--wu-color-surface);height:100%">
        <strong>Sidebar</strong><br>Drag the divider →
      </div>
      <div slot="secondary" style="padding:16px;height:100%">
        <strong>Main Content</strong><br>This panel fills remaining space.
      </div>
    </wu-split-pane>\`
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <wu-split-pane orientation="vertical" style="height:400px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <div slot="primary" style="padding:16px;background:var(--wu-color-surface)">
        <strong>Top Panel</strong><br>Drag the divider ↓
      </div>
      <div slot="secondary" style="padding:16px">
        <strong>Bottom Panel</strong>
      </div>
    </wu-split-pane>\`
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const g=["Horizontal","Vertical"];export{r as Horizontal,e as Vertical,g as __namedExportsOrder,p as default};
