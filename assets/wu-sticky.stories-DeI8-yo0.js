import{b as e}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const m={title:"V3/Layout & Structure/Sticky",component:"wu-sticky",tags:["autodocs"],argTypes:{top:{control:"text"},bottom:{control:"text"},zIndex:{control:"number",name:"z-index"}}},r={args:{top:"0",zIndex:10},render:a=>e`
    <div style="height:300px;overflow-y:scroll;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      <wu-sticky top=${a.top} z-index=${a.zIndex}>
        <div
          style="padding:var(--wu-space-3) var(--wu-space-4);background:var(--wu-color-surface-raised);border-bottom:1px solid var(--wu-color-border);font-weight:var(--wu-font-semibold);font-size:var(--wu-text-sm);"
        >
          Sticky Header
        </div>
      </wu-sticky>
      <div style="padding:var(--wu-space-4);">
        ${Array.from({length:20},(t,c)=>e`<p style="margin:0 0 var(--wu-space-3);">Content line ${c+1}</p>`)}
      </div>
    </div>
  `},o={render:()=>e`
    <div style="height:300px;overflow-y:scroll;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      <wu-sticky top="0" z-index="20">
        <nav
          style="padding:var(--wu-space-3) var(--wu-space-6);background:var(--wu-color-background);border-bottom:1px solid var(--wu-color-border);display:flex;gap:var(--wu-space-4);font-size:var(--wu-text-sm);"
        >
          <span style="font-weight:var(--wu-font-bold);">Brand</span>
          <a href="#" style="color:var(--wu-color-text);">Home</a>
          <a href="#" style="color:var(--wu-color-text);">About</a>
        </nav>
      </wu-sticky>
      <div style="padding:var(--wu-space-6);">
        ${Array.from({length:20},(a,t)=>e`<p style="margin:0 0 var(--wu-space-3);">Scroll me ${t+1}</p>`)}
      </div>
    </div>
  `};var s,d,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    top: '0',
    zIndex: 10
  },
  render: args => html\`
    <div style="height:300px;overflow-y:scroll;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      <wu-sticky top=\${args.top} z-index=\${args.zIndex}>
        <div
          style="padding:var(--wu-space-3) var(--wu-space-4);background:var(--wu-color-surface-raised);border-bottom:1px solid var(--wu-color-border);font-weight:var(--wu-font-semibold);font-size:var(--wu-text-sm);"
        >
          Sticky Header
        </div>
      </wu-sticky>
      <div style="padding:var(--wu-space-4);">
        \${Array.from({
    length: 20
  }, (_, i) => html\`<p style="margin:0 0 var(--wu-space-3);">Content line \${i + 1}</p>\`)}
      </div>
    </div>
  \`
}`,...(n=(d=r.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height:300px;overflow-y:scroll;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      <wu-sticky top="0" z-index="20">
        <nav
          style="padding:var(--wu-space-3) var(--wu-space-6);background:var(--wu-color-background);border-bottom:1px solid var(--wu-color-border);display:flex;gap:var(--wu-space-4);font-size:var(--wu-text-sm);"
        >
          <span style="font-weight:var(--wu-font-bold);">Brand</span>
          <a href="#" style="color:var(--wu-color-text);">Home</a>
          <a href="#" style="color:var(--wu-color-text);">About</a>
        </nav>
      </wu-sticky>
      <div style="padding:var(--wu-space-6);">
        \${Array.from({
    length: 20
  }, (_, i) => html\`<p style="margin:0 0 var(--wu-space-3);">Scroll me \${i + 1}</p>\`)}
      </div>
    </div>
  \`
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const y=["Default","NavBar"];export{r as Default,o as NavBar,y as __namedExportsOrder,m as default};
