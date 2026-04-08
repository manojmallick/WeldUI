import{b as r}from"./lit-element-CBn2YVps.js";const k={title:"Layout/SplitPane",component:"wu-split-pane",tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},initialSize:{control:"number"},minSize:{control:"number"},maxSize:{control:"number"},collapsible:{control:"boolean"},snapThreshold:{control:"number"},keyStep:{control:"number"}}},o="padding:16px; height:100%; box-sizing:border-box; font-family:var(--wu-font-sans); font-size:var(--wu-text-sm)",e={render:()=>r`
    <wu-split-pane style="height:320px; border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); overflow:hidden">
      <div slot="primary" style="${o}; background:var(--wu-color-surface)">
        <strong style="color:var(--wu-color-text)">Sidebar</strong>
        <p style="color:var(--wu-color-text-secondary); margin:8px 0 0">Drag the divider → or use arrow keys after clicking it.</p>
      </div>
      <div slot="secondary" style="${o}">
        <strong style="color:var(--wu-color-text)">Main Content</strong>
        <p style="color:var(--wu-color-text-secondary); margin:8px 0 0">This panel expands to fill remaining space.</p>
      </div>
    </wu-split-pane>`},t={render:()=>r`
    <wu-split-pane orientation="vertical" style="height:400px; border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); overflow:hidden">
      <div slot="primary" style="${o}; background:var(--wu-color-surface)">
        <strong style="color:var(--wu-color-text)">Top Panel</strong>
        <p style="color:var(--wu-color-text-secondary); margin:8px 0 0">Drag the divider ↓ or use arrow keys.</p>
      </div>
      <div slot="secondary" style="${o}">
        <strong style="color:var(--wu-color-text)">Bottom Panel</strong>
        <p style="color:var(--wu-color-text-secondary); margin:8px 0 0">This panel fills remaining height.</p>
      </div>
    </wu-split-pane>`},a={name:"Collapsible Sidebar",render:()=>r`
    <wu-split-pane collapsible initial-size="220" min-size="60"
      style="height:340px; border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); overflow:hidden">
      <nav slot="primary" style="${o}; background:var(--wu-color-surface); display:flex; flex-direction:column; gap:8px">
        <strong style="color:var(--wu-color-text); margin-bottom:4px">Navigation</strong>
        ${["Dashboard","Projects","Team","Reports","Settings"].map(i=>r`
          <div style="padding:6px 8px; border-radius:var(--wu-radius-sm); cursor:pointer; color:var(--wu-color-text-secondary);
               transition:background var(--wu-duration-fast)"
            onmouseover="this.style.background='var(--wu-color-primary-subtle)'"
            onmouseout="this.style.background='transparent'">
            ${i}
          </div>`)}
      </nav>
      <div slot="secondary" style="${o}">
        <strong style="color:var(--wu-color-text)">Content Area</strong>
        <p style="color:var(--wu-color-text-secondary); margin:8px 0 0">
          Hover the divider to reveal the collapse button. Click it or press Enter/Space on the divider to toggle.
        </p>
      </div>
    </wu-split-pane>`},s={name:"Code Editor Layout",render:()=>r`
    <wu-split-pane orientation="vertical" collapsible initial-size="200" min-size="60"
      style="height:420px; border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); overflow:hidden">
      <div slot="primary" style="padding:12px; background:#1e293b; height:100%; box-sizing:border-box; font-family:var(--wu-font-mono); font-size:13px; color:#94a3b8; overflow:auto">
        <div style="color:#64748b; margin-bottom:8px; font-size:11px; text-transform:uppercase; letter-spacing:.06em">main.ts</div>
        <div><span style="color:#7dd3fc">import</span> <span style="color:#f8fafc">{ html }</span> <span style="color:#7dd3fc">from</span> <span style="color:#86efac">'lit'</span>;</div>
        <div style="margin-top:8px"><span style="color:#7dd3fc">const</span> <span style="color:#bae6fd">greeting</span> = <span style="color:#86efac">'Hello, WeldUI!'</span>;</div>
        <div style="margin-top:8px"><span style="color:#7dd3fc">export default</span> html<span style="color:#f8fafc">\`&lt;wu-button&gt;\${greeting}&lt;/wu-button&gt;\`</span>;</div>
      </div>
      <div slot="secondary" style="padding:12px; background:#0f172a; font-family:var(--wu-font-mono); font-size:12px; color:#4ade80; overflow:auto">
        <div style="color:#64748b; margin-bottom:8px; font-size:11px; text-transform:uppercase; letter-spacing:.06em">Terminal</div>
        <div>$ pnpm build</div>
        <div style="color:#94a3b8">vite v5.2 building for production...</div>
        <div style="color:#4ade80">✓ built in 320ms</div>
      </div>
    </wu-split-pane>`},l={name:"Triple Pane Layout",render:()=>r`
    <wu-split-pane initial-size="180"
      style="height:360px; border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); overflow:hidden">
      <div slot="primary" style="${o}; background:var(--wu-color-surface)">
        <strong style="color:var(--wu-color-text)">File Tree</strong>
        <div style="margin-top:12px; display:flex; flex-direction:column; gap:4px; font-size:12px; color:var(--wu-color-text-secondary)">
          ${["📁 src","  📄 index.ts","  📄 app.ts","📁 tests","  📄 app.test.ts"].map(i=>r`<div style="font-family:var(--wu-font-mono)">${i}</div>`)}
        </div>
      </div>
      <div slot="secondary" style="display:flex; height:100%; overflow:hidden">
        <wu-split-pane initial-size="1" style="flex:1; height:100%; overflow:hidden">
          <div slot="primary" style="${o}">
            <strong style="color:var(--wu-color-text)">Editor</strong>
            <p style="color:var(--wu-color-text-secondary); margin:8px 0 0; font-size:12px">Nested split-panes create multi-panel layouts.</p>
          </div>
          <div slot="secondary" style="${o}; background:var(--wu-color-surface)">
            <strong style="color:var(--wu-color-text)">Preview</strong>
            <p style="color:var(--wu-color-text-secondary); margin:8px 0 0; font-size:12px">This is a nested secondary pane.</p>
          </div>
        </wu-split-pane>
      </div>
    </wu-split-pane>`};var n,d,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <wu-split-pane style="height:320px; border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); overflow:hidden">
      <div slot="primary" style="\${panelStyle}; background:var(--wu-color-surface)">
        <strong style="color:var(--wu-color-text)">Sidebar</strong>
        <p style="color:var(--wu-color-text-secondary); margin:8px 0 0">Drag the divider → or use arrow keys after clicking it.</p>
      </div>
      <div slot="secondary" style="\${panelStyle}">
        <strong style="color:var(--wu-color-text)">Main Content</strong>
        <p style="color:var(--wu-color-text-secondary); margin:8px 0 0">This panel expands to fill remaining space.</p>
      </div>
    </wu-split-pane>\`
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,u,v;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <wu-split-pane orientation="vertical" style="height:400px; border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); overflow:hidden">
      <div slot="primary" style="\${panelStyle}; background:var(--wu-color-surface)">
        <strong style="color:var(--wu-color-text)">Top Panel</strong>
        <p style="color:var(--wu-color-text-secondary); margin:8px 0 0">Drag the divider ↓ or use arrow keys.</p>
      </div>
      <div slot="secondary" style="\${panelStyle}">
        <strong style="color:var(--wu-color-text)">Bottom Panel</strong>
        <p style="color:var(--wu-color-text-secondary); margin:8px 0 0">This panel fills remaining height.</p>
      </div>
    </wu-split-pane>\`
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var y,g,m;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Collapsible Sidebar',
  render: () => html\`
    <wu-split-pane collapsible initial-size="220" min-size="60"
      style="height:340px; border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); overflow:hidden">
      <nav slot="primary" style="\${panelStyle}; background:var(--wu-color-surface); display:flex; flex-direction:column; gap:8px">
        <strong style="color:var(--wu-color-text); margin-bottom:4px">Navigation</strong>
        \${['Dashboard', 'Projects', 'Team', 'Reports', 'Settings'].map(s => html\`
          <div style="padding:6px 8px; border-radius:var(--wu-radius-sm); cursor:pointer; color:var(--wu-color-text-secondary);
               transition:background var(--wu-duration-fast)"
            onmouseover="this.style.background='var(--wu-color-primary-subtle)'"
            onmouseout="this.style.background='transparent'">
            \${s}
          </div>\`)}
      </nav>
      <div slot="secondary" style="\${panelStyle}">
        <strong style="color:var(--wu-color-text)">Content Area</strong>
        <p style="color:var(--wu-color-text-secondary); margin:8px 0 0">
          Hover the divider to reveal the collapse button. Click it or press Enter/Space on the divider to toggle.
        </p>
      </div>
    </wu-split-pane>\`
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var x,w,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Code Editor Layout',
  render: () => html\`
    <wu-split-pane orientation="vertical" collapsible initial-size="200" min-size="60"
      style="height:420px; border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); overflow:hidden">
      <div slot="primary" style="padding:12px; background:#1e293b; height:100%; box-sizing:border-box; font-family:var(--wu-font-mono); font-size:13px; color:#94a3b8; overflow:auto">
        <div style="color:#64748b; margin-bottom:8px; font-size:11px; text-transform:uppercase; letter-spacing:.06em">main.ts</div>
        <div><span style="color:#7dd3fc">import</span> <span style="color:#f8fafc">{ html }</span> <span style="color:#7dd3fc">from</span> <span style="color:#86efac">'lit'</span>;</div>
        <div style="margin-top:8px"><span style="color:#7dd3fc">const</span> <span style="color:#bae6fd">greeting</span> = <span style="color:#86efac">'Hello, WeldUI!'</span>;</div>
        <div style="margin-top:8px"><span style="color:#7dd3fc">export default</span> html<span style="color:#f8fafc">\\\`&lt;wu-button&gt;\\\${greeting}&lt;/wu-button&gt;\\\`</span>;</div>
      </div>
      <div slot="secondary" style="padding:12px; background:#0f172a; font-family:var(--wu-font-mono); font-size:12px; color:#4ade80; overflow:auto">
        <div style="color:#64748b; margin-bottom:8px; font-size:11px; text-transform:uppercase; letter-spacing:.06em">Terminal</div>
        <div>$ pnpm build</div>
        <div style="color:#94a3b8">vite v5.2 building for production...</div>
        <div style="color:#4ade80">✓ built in 320ms</div>
      </div>
    </wu-split-pane>\`
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var b,h,z;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Triple Pane Layout',
  render: () => html\`
    <wu-split-pane initial-size="180"
      style="height:360px; border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); overflow:hidden">
      <div slot="primary" style="\${panelStyle}; background:var(--wu-color-surface)">
        <strong style="color:var(--wu-color-text)">File Tree</strong>
        <div style="margin-top:12px; display:flex; flex-direction:column; gap:4px; font-size:12px; color:var(--wu-color-text-secondary)">
          \${['📁 src', '  📄 index.ts', '  📄 app.ts', '📁 tests', '  📄 app.test.ts'].map(f => html\`<div style="font-family:var(--wu-font-mono)">\${f}</div>\`)}
        </div>
      </div>
      <div slot="secondary" style="display:flex; height:100%; overflow:hidden">
        <wu-split-pane initial-size="1" style="flex:1; height:100%; overflow:hidden">
          <div slot="primary" style="\${panelStyle}">
            <strong style="color:var(--wu-color-text)">Editor</strong>
            <p style="color:var(--wu-color-text-secondary); margin:8px 0 0; font-size:12px">Nested split-panes create multi-panel layouts.</p>
          </div>
          <div slot="secondary" style="\${panelStyle}; background:var(--wu-color-surface)">
            <strong style="color:var(--wu-color-text)">Preview</strong>
            <p style="color:var(--wu-color-text-secondary); margin:8px 0 0; font-size:12px">This is a nested secondary pane.</p>
          </div>
        </wu-split-pane>
      </div>
    </wu-split-pane>\`
}`,...(z=(h=l.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const S=["Horizontal","Vertical","WithCollapse","CodeEditor","TriplePane"];export{s as CodeEditor,e as Horizontal,l as TriplePane,t as Vertical,a as WithCollapse,S as __namedExportsOrder,k as default};
