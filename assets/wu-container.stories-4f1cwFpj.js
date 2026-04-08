import{b as s}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const r=e=>s`
  <div
    style="padding:16px;border:1px solid var(--wu-color-border);background:var(--wu-color-surface);border-radius:var(--wu-radius-md);"
  >
    ${e}
  </div>
`,x={title:"V3/Layout & Structure/Container",component:"wu-container",tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"]},flush:{control:"boolean"}}},a={args:{size:"lg",flush:!1},render:e=>s`
    <div style="background:var(--wu-color-surface);padding:16px 0;">
      <wu-container size=${e.size} ?flush=${e.flush}>
        ${r("Centered content constrained by max width")}
      </wu-container>
    </div>
  `},n={render:()=>s`
    <div style="display:grid;gap:12px;background:var(--wu-color-surface);padding:16px 0;">
      <wu-container size="sm">${r("Small")}</wu-container>
      <wu-container size="md">${r("Medium")}</wu-container>
      <wu-container size="lg">${r("Large")}</wu-container>
      <wu-container size="xl">${r("Extra Large")}</wu-container>
    </div>
  `},o={render:()=>s`
    <div style="background:var(--wu-color-surface);padding:16px 0;">
      <wu-container size="lg" flush>
        <div style="padding:16px;background:var(--wu-color-primary-subtle);color:var(--wu-color-text);">
          Flush mode removes the built-in inline gutter.
        </div>
      </wu-container>
    </div>
  `};var i,t,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    flush: false
  },
  render: args => html\`
    <div style="background:var(--wu-color-surface);padding:16px 0;">
      <wu-container size=\${args.size} ?flush=\${args.flush}>
        \${demoCard('Centered content constrained by max width')}
      </wu-container>
    </div>
  \`
}`,...(d=(t=a.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var u,c,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:grid;gap:12px;background:var(--wu-color-surface);padding:16px 0;">
      <wu-container size="sm">\${demoCard('Small')}</wu-container>
      <wu-container size="md">\${demoCard('Medium')}</wu-container>
      <wu-container size="lg">\${demoCard('Large')}</wu-container>
      <wu-container size="xl">\${demoCard('Extra Large')}</wu-container>
    </div>
  \`
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <div style="background:var(--wu-color-surface);padding:16px 0;">
      <wu-container size="lg" flush>
        <div style="padding:16px;background:var(--wu-color-primary-subtle);color:var(--wu-color-text);">
          Flush mode removes the built-in inline gutter.
        </div>
      </wu-container>
    </div>
  \`
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const b=["Default","Sizes","Flush"];export{a as Default,o as Flush,n as Sizes,b as __namedExportsOrder,x as default};
