import{b as r}from"./lit-element-CBn2YVps.js";const c={title:"Components/Dashboard",component:"wu-dashboard",tags:["autodocs"],argTypes:{fullWidth:{control:"boolean"}},args:{fullWidth:!1},parameters:{docs:{description:{component:"Application shell layout that composes `<wu-navbar>` + `<wu-sidebar>` + main content. Use the `navbar` slot for the top bar, `sidebar` slot for side nav, and the default slot for page content. Set `full-width` to remove the max-width constraint on the content area."}}}},e=t=>r`
  <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="${t}"/>
  </svg>`,a={render:()=>r`
    <wu-dashboard style="height:600px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg);overflow:hidden">
      <wu-navbar slot="navbar">
        <span slot="logo" style="font-weight:var(--wu-font-bold);color:var(--wu-color-primary)">WeldUI</span>
        <wu-avatar slot="actions" initials="MJ" size="sm"></wu-avatar>
      </wu-navbar>
      <wu-sidebar slot="sidebar" style="height:100%">
        <wu-sidebar-item href="#" active>
          ${e("M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6")}
          Dashboard
        </wu-sidebar-item>
        <wu-sidebar-item href="#">
          ${e("M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z")}
          Analytics
        </wu-sidebar-item>
        <wu-sidebar-item href="#">
          ${e("M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197")}
          Team
        </wu-sidebar-item>
        <wu-sidebar-item href="#">
          ${e("M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z")}
          Settings
        </wu-sidebar-item>
      </wu-sidebar>

      <div style="display:flex;flex-direction:column;gap:var(--wu-space-6)">
        <div>
          <h2 style="margin:0 0 var(--wu-space-1);font-family:var(--wu-font-sans);font-size:var(--wu-text-xl);font-weight:var(--wu-font-bold);color:var(--wu-color-text)">Dashboard</h2>
          <p style="margin:0;font-family:var(--wu-font-sans);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary)">Welcome back, Manoj</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--wu-space-4)">
          ${[["Total Users","12,430","+8.2%"],["Revenue","€84,200","+14.5%"],["Active Sessions","1,024","-2.1%"]].map(([t,v,o])=>r`
            <wu-card>
              <div style="display:flex;flex-direction:column;gap:var(--wu-space-1)">
                <span style="font-size:var(--wu-text-xs);color:var(--wu-color-text-secondary);font-family:var(--wu-font-sans)">${t}</span>
                <span style="font-size:var(--wu-text-2xl);font-weight:var(--wu-font-bold);color:var(--wu-color-text);font-family:var(--wu-font-sans)">${v}</span>
                <span style="font-size:var(--wu-text-xs);color:${o.startsWith("+")?"var(--wu-color-success)":"var(--wu-color-danger)"};font-family:var(--wu-font-sans)">${o} vs last month</span>
              </div>
            </wu-card>
          `)}
        </div>
      </div>
    </wu-dashboard>
  `};var s,i,l,n,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <wu-dashboard style="height:600px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg);overflow:hidden">
      <wu-navbar slot="navbar">
        <span slot="logo" style="font-weight:var(--wu-font-bold);color:var(--wu-color-primary)">WeldUI</span>
        <wu-avatar slot="actions" initials="MJ" size="sm"></wu-avatar>
      </wu-navbar>
      <wu-sidebar slot="sidebar" style="height:100%">
        <wu-sidebar-item href="#" active>
          \${navIcon('M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6')}
          Dashboard
        </wu-sidebar-item>
        <wu-sidebar-item href="#">
          \${navIcon('M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z')}
          Analytics
        </wu-sidebar-item>
        <wu-sidebar-item href="#">
          \${navIcon('M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197')}
          Team
        </wu-sidebar-item>
        <wu-sidebar-item href="#">
          \${navIcon('M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z')}
          Settings
        </wu-sidebar-item>
      </wu-sidebar>

      <div style="display:flex;flex-direction:column;gap:var(--wu-space-6)">
        <div>
          <h2 style="margin:0 0 var(--wu-space-1);font-family:var(--wu-font-sans);font-size:var(--wu-text-xl);font-weight:var(--wu-font-bold);color:var(--wu-color-text)">Dashboard</h2>
          <p style="margin:0;font-family:var(--wu-font-sans);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary)">Welcome back, Manoj</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--wu-space-4)">
          \${[['Total Users', '12,430', '+8.2%'], ['Revenue', '€84,200', '+14.5%'], ['Active Sessions', '1,024', '-2.1%']].map(([label, value, delta]) => html\`
            <wu-card>
              <div style="display:flex;flex-direction:column;gap:var(--wu-space-1)">
                <span style="font-size:var(--wu-text-xs);color:var(--wu-color-text-secondary);font-family:var(--wu-font-sans)">\${label}</span>
                <span style="font-size:var(--wu-text-2xl);font-weight:var(--wu-font-bold);color:var(--wu-color-text);font-family:var(--wu-font-sans)">\${value}</span>
                <span style="font-size:var(--wu-text-xs);color:\${delta.startsWith('+') ? 'var(--wu-color-success)' : 'var(--wu-color-danger)'};font-family:var(--wu-font-sans)">\${delta} vs last month</span>
              </div>
            </wu-card>
          \`)}
        </div>
      </div>
    </wu-dashboard>
  \`
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source},description:{story:"Full application shell — 600px tall preview.",...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.description}}};const w=["Default"];export{a as Default,w as __namedExportsOrder,c as default};
