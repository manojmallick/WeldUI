import{b as i}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const v={title:"V3/SaaS & App Shell/App Shell",component:"wu-app-shell",tags:["autodocs"]},o={render:()=>i`
    <wu-app-shell style="height:400px">
      <div slot="sidebar" style="padding:16px;font-family:var(--wu-font-sans);font-size:14px;color:var(--wu-color-text-secondary)">
        <strong>Navigation</strong>
        <nav style="margin-top:16px;display:flex;flex-direction:column;gap:8px">
          <a href="#" style="color:var(--wu-color-primary);text-decoration:none">Dashboard</a>
          <a href="#" style="color:var(--wu-color-text);text-decoration:none">Analytics</a>
          <a href="#" style="color:var(--wu-color-text);text-decoration:none">Settings</a>
        </nav>
      </div>
      <div slot="header" style="padding:16px;font-family:var(--wu-font-sans);font-weight:600;color:var(--wu-color-text)">App Header</div>
      <div style="font-family:var(--wu-font-sans);color:var(--wu-color-text)">Main content area</div>
    </wu-app-shell>
  `},e={render:()=>i`
    <wu-app-shell sidebar-collapsed style="height:400px">
      <div slot="sidebar"></div>
      <div slot="header" style="padding:16px;font-family:var(--wu-font-sans);font-weight:600;color:var(--wu-color-text)">Collapsed</div>
      <div style="font-family:var(--wu-font-sans);color:var(--wu-color-text)">Content</div>
    </wu-app-shell>
  `};var t,a,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <wu-app-shell style="height:400px">
      <div slot="sidebar" style="padding:16px;font-family:var(--wu-font-sans);font-size:14px;color:var(--wu-color-text-secondary)">
        <strong>Navigation</strong>
        <nav style="margin-top:16px;display:flex;flex-direction:column;gap:8px">
          <a href="#" style="color:var(--wu-color-primary);text-decoration:none">Dashboard</a>
          <a href="#" style="color:var(--wu-color-text);text-decoration:none">Analytics</a>
          <a href="#" style="color:var(--wu-color-text);text-decoration:none">Settings</a>
        </nav>
      </div>
      <div slot="header" style="padding:16px;font-family:var(--wu-font-sans);font-weight:600;color:var(--wu-color-text)">App Header</div>
      <div style="font-family:var(--wu-font-sans);color:var(--wu-color-text)">Main content area</div>
    </wu-app-shell>
  \`
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var n,l,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <wu-app-shell sidebar-collapsed style="height:400px">
      <div slot="sidebar"></div>
      <div slot="header" style="padding:16px;font-family:var(--wu-font-sans);font-weight:600;color:var(--wu-color-text)">Collapsed</div>
      <div style="font-family:var(--wu-font-sans);color:var(--wu-color-text)">Content</div>
    </wu-app-shell>
  \`
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const f=["Default","CollapsedSidebar"];export{e as CollapsedSidebar,o as Default,f as __namedExportsOrder,v as default};
