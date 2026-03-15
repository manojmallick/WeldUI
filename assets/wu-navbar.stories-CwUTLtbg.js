import{b as t}from"./lit-element-CWHijwDH.js";const k={title:"Components/NavBar",component:"wu-navbar",tags:["autodocs"],argTypes:{sticky:{control:"boolean"},fixed:{control:"boolean"}},args:{sticky:!1,fixed:!1},parameters:{docs:{description:{component:"Top navigation bar with `logo`, default nav, and `actions` slots. Collapses nav into a burger-menu drawer on screens ≤ 768px wide. Use `sticky` to keep it in view while scrolling, or `fixed` to overlay content."}}}},e=t`
  <a href="#" style="padding:var(--wu-space-2) var(--wu-space-3);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);text-decoration:none;border-radius:var(--wu-radius-md)">Docs</a>
  <a href="#" style="padding:var(--wu-space-2) var(--wu-space-3);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);text-decoration:none;border-radius:var(--wu-radius-md)">Components</a>
  <a href="#" style="padding:var(--wu-space-2) var(--wu-space-3);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);text-decoration:none;border-radius:var(--wu-radius-md)">Themes</a>
  <a href="#" style="padding:var(--wu-space-2) var(--wu-space-3);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);text-decoration:none;border-radius:var(--wu-radius-md)">Pricing</a>
`,a={render:()=>t`
    <wu-navbar>
      <span slot="logo" style="font-size:var(--wu-text-base);font-weight:var(--wu-font-bold);color:var(--wu-color-primary)">WeldUI</span>
      ${e}
      <wu-button slot="actions" size="sm" variant="secondary">Log in</wu-button>
      <wu-button slot="actions" size="sm">Get started</wu-button>
    </wu-navbar>
  `},r={render:()=>t`
    <wu-navbar>
      <span slot="logo" style="display:flex;align-items:center;gap:var(--wu-space-2)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--wu-color-primary)">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span style="font-weight:var(--wu-font-bold)">WeldUI</span>
      </span>
      ${e}
      <wu-avatar slot="actions" initials="MJ" size="sm"></wu-avatar>
    </wu-navbar>
  `},o={render:()=>t`
    <div style="height:300px;overflow-y:auto;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <wu-navbar sticky>
        <span slot="logo" style="font-weight:var(--wu-font-bold)">WeldUI</span>
        ${e}
        <wu-button slot="actions" size="sm">Sign in</wu-button>
      </wu-navbar>
      <div style="padding:var(--wu-space-8);display:flex;flex-direction:column;gap:var(--wu-space-4)">
        ${Array.from({length:8},(x,h)=>t`
          <div style="height:48px;background:var(--wu-color-surface);border-radius:var(--wu-radius-md);display:flex;align-items:center;padding:0 var(--wu-space-4);color:var(--wu-color-text-secondary);font-size:var(--wu-text-sm)">
            Scroll content row ${h+1}
          </div>
        `)}
      </div>
    </div>
  `};var n,s,i,l,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <wu-navbar>
      <span slot="logo" style="font-size:var(--wu-text-base);font-weight:var(--wu-font-bold);color:var(--wu-color-primary)">WeldUI</span>
      \${navLinks}
      <wu-button slot="actions" size="sm" variant="secondary">Log in</wu-button>
      <wu-button slot="actions" size="sm">Get started</wu-button>
    </wu-navbar>
  \`
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:"Standard navbar with logo, navigation links, and action button.",...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var u,c,v,w,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <wu-navbar>
      <span slot="logo" style="display:flex;align-items:center;gap:var(--wu-space-2)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--wu-color-primary)">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span style="font-weight:var(--wu-font-bold)">WeldUI</span>
      </span>
      \${navLinks}
      <wu-avatar slot="actions" initials="MJ" size="sm"></wu-avatar>
    </wu-navbar>
  \`
}`,...(v=(c=r.parameters)==null?void 0:c.docs)==null?void 0:v.source},description:{story:"With a logo image and avatar in actions.",...(p=(w=r.parameters)==null?void 0:w.docs)==null?void 0:p.description}}};var g,m,b,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height:300px;overflow-y:auto;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <wu-navbar sticky>
        <span slot="logo" style="font-weight:var(--wu-font-bold)">WeldUI</span>
        \${navLinks}
        <wu-button slot="actions" size="sm">Sign in</wu-button>
      </wu-navbar>
      <div style="padding:var(--wu-space-8);display:flex;flex-direction:column;gap:var(--wu-space-4)">
        \${Array.from({
    length: 8
  }, (_, i) => html\`
          <div style="height:48px;background:var(--wu-color-surface);border-radius:var(--wu-radius-md);display:flex;align-items:center;padding:0 var(--wu-space-4);color:var(--wu-color-text-secondary);font-size:var(--wu-text-sm)">
            Scroll content row \${i + 1}
          </div>
        \`)}
      </div>
    </div>
  \`
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source},description:{story:"Sticky navbar stays visible while page content scrolls.",...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};const S=["Default","WithAvatar","Sticky"];export{a as Default,o as Sticky,r as WithAvatar,S as __namedExportsOrder,k as default};
