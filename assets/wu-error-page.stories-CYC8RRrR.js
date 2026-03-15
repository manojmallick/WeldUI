import{b as e}from"./lit-element-CWHijwDH.js";import"./index-BM5e8oBU.js";const $={title:"Components/ErrorPage",component:"wu-error-page",tags:["autodocs"],argTypes:{code:{control:"text"},title:{control:"text"},description:{control:"text"}}},o={args:{code:"404"},render:r=>e`
    <wu-error-page code=${r.code}>
      <wu-button slot="actions" variant="primary">Go home</wu-button>
      <wu-button slot="actions" variant="secondary">Go back</wu-button>
    </wu-error-page>
  `},t={args:{code:"500"},render:r=>e`
    <wu-error-page code=${r.code}>
      <wu-button slot="actions" variant="primary">Retry</wu-button>
      <wu-button slot="actions" variant="ghost">Report issue</wu-button>
    </wu-error-page>
  `},n={args:{code:"503"},render:r=>e`
    <wu-error-page code=${r.code}>
      <wu-button slot="actions" variant="primary">Try again</wu-button>
    </wu-error-page>
  `},a={args:{code:"403"},render:r=>e`
    <wu-error-page code=${r.code}>
      <wu-button slot="actions" variant="primary">Sign in</wu-button>
      <wu-button slot="actions" variant="ghost">Contact support</wu-button>
    </wu-error-page>
  `},s={render:()=>e`
    <wu-error-page
      code="418"
      title="I'm a teapot"
      description="This server refuses to brew coffee because it is a teapot."
    >
      <svg slot="icon" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="36" stroke="currentColor" stroke-width="3"/>
        <text x="40" y="52" text-anchor="middle" font-size="32" fill="currentColor">🫖</text>
      </svg>
      <wu-button slot="actions" variant="primary">Go home</wu-button>
    </wu-error-page>
  `};var c,u,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    code: '404'
  },
  render: args => html\`
    <wu-error-page code=\${args.code}>
      <wu-button slot="actions" variant="primary">Go home</wu-button>
      <wu-button slot="actions" variant="secondary">Go back</wu-button>
    </wu-error-page>
  \`
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var d,p,w;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    code: '500'
  },
  render: args => html\`
    <wu-error-page code=\${args.code}>
      <wu-button slot="actions" variant="primary">Retry</wu-button>
      <wu-button slot="actions" variant="ghost">Report issue</wu-button>
    </wu-error-page>
  \`
}`,...(w=(p=t.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var g,l,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    code: '503'
  },
  render: args => html\`
    <wu-error-page code=\${args.code}>
      <wu-button slot="actions" variant="primary">Try again</wu-button>
    </wu-error-page>
  \`
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var b,v,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    code: '403'
  },
  render: args => html\`
    <wu-error-page code=\${args.code}>
      <wu-button slot="actions" variant="primary">Sign in</wu-button>
      <wu-button slot="actions" variant="ghost">Contact support</wu-button>
    </wu-error-page>
  \`
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,x,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <wu-error-page
      code="418"
      title="I'm a teapot"
      description="This server refuses to brew coffee because it is a teapot."
    >
      <svg slot="icon" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="36" stroke="currentColor" stroke-width="3"/>
        <text x="40" y="52" text-anchor="middle" font-size="32" fill="currentColor">🫖</text>
      </svg>
      <wu-button slot="actions" variant="primary">Go home</wu-button>
    </wu-error-page>
  \`
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const k=["NotFound","ServerError","ServiceUnavailable","AccessDenied","CustomError"];export{a as AccessDenied,s as CustomError,o as NotFound,t as ServerError,n as ServiceUnavailable,k as __namedExportsOrder,$ as default};
