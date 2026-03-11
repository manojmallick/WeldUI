import{b as i}from"./lit-element-9a6qN07w.js";const u={title:"Components/Tabs",component:"wu-tabs",tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]}}},t={render:()=>i`
    <wu-tabs style="max-width:600px">
      <wu-tab slot="tabs" panel="overview">Overview</wu-tab>
      <wu-tab slot="tabs" panel="activity">Activity</wu-tab>
      <wu-tab slot="tabs" panel="settings">Settings</wu-tab>
      <wu-tab-panel name="overview">
        <p style="padding:16px 0;color:var(--wu-color-text-secondary)">Overview content</p>
      </wu-tab-panel>
      <wu-tab-panel name="activity">
        <p style="padding:16px 0;color:var(--wu-color-text-secondary)">Activity content</p>
      </wu-tab-panel>
      <wu-tab-panel name="settings">
        <p style="padding:16px 0;color:var(--wu-color-text-secondary)">Settings content</p>
      </wu-tab-panel>
    </wu-tabs>
  `},a={render:()=>i`
    <wu-tabs orientation="vertical" style="max-width:600px">
      <wu-tab slot="tabs" panel="profile">Profile</wu-tab>
      <wu-tab slot="tabs" panel="billing">Billing</wu-tab>
      <wu-tab slot="tabs" panel="security">Security</wu-tab>
      <wu-tab-panel name="profile">
        <p style="color:var(--wu-color-text-secondary)">Profile settings</p>
      </wu-tab-panel>
      <wu-tab-panel name="billing">
        <p style="color:var(--wu-color-text-secondary)">Billing settings</p>
      </wu-tab-panel>
      <wu-tab-panel name="security">
        <p style="color:var(--wu-color-text-secondary)">Security settings</p>
      </wu-tab-panel>
    </wu-tabs>
  `};var e,n,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => html\`
    <wu-tabs style="max-width:600px">
      <wu-tab slot="tabs" panel="overview">Overview</wu-tab>
      <wu-tab slot="tabs" panel="activity">Activity</wu-tab>
      <wu-tab slot="tabs" panel="settings">Settings</wu-tab>
      <wu-tab-panel name="overview">
        <p style="padding:16px 0;color:var(--wu-color-text-secondary)">Overview content</p>
      </wu-tab-panel>
      <wu-tab-panel name="activity">
        <p style="padding:16px 0;color:var(--wu-color-text-secondary)">Activity content</p>
      </wu-tab-panel>
      <wu-tab-panel name="settings">
        <p style="padding:16px 0;color:var(--wu-color-text-secondary)">Settings content</p>
      </wu-tab-panel>
    </wu-tabs>
  \`
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var l,r,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <wu-tabs orientation="vertical" style="max-width:600px">
      <wu-tab slot="tabs" panel="profile">Profile</wu-tab>
      <wu-tab slot="tabs" panel="billing">Billing</wu-tab>
      <wu-tab slot="tabs" panel="security">Security</wu-tab>
      <wu-tab-panel name="profile">
        <p style="color:var(--wu-color-text-secondary)">Profile settings</p>
      </wu-tab-panel>
      <wu-tab-panel name="billing">
        <p style="color:var(--wu-color-text-secondary)">Billing settings</p>
      </wu-tab-panel>
      <wu-tab-panel name="security">
        <p style="color:var(--wu-color-text-secondary)">Security settings</p>
      </wu-tab-panel>
    </wu-tabs>
  \`
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const c=["Default","Vertical"];export{t as Default,a as Vertical,c as __namedExportsOrder,u as default};
