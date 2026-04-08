import{b as a}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const y={title:"V3/Layout & Structure/Aspect Ratio",component:"wu-aspect-ratio",tags:["autodocs"],argTypes:{ratio:{control:"text"}}},r={args:{ratio:"16/9"},render:w=>a`
    <wu-aspect-ratio ratio=${w.ratio} style="max-width:480px">
      <div
        style="width:100%;height:100%;background:var(--wu-color-surface);border:1px solid var(--wu-color-border);display:flex;align-items:center;justify-content:center;color:var(--wu-color-text-secondary);font-size:var(--wu-text-sm);"
      >
        16 / 9
      </div>
    </wu-aspect-ratio>
  `},t={render:()=>a`
    <wu-aspect-ratio ratio="1" style="max-width:200px">
      <div
        style="width:100%;height:100%;background:var(--wu-color-primary-subtle);border-radius:var(--wu-radius-md);display:flex;align-items:center;justify-content:center;"
      >
        1 / 1
      </div>
    </wu-aspect-ratio>
  `},e={render:()=>a`
    <wu-aspect-ratio ratio="9/16" style="max-width:160px">
      <div
        style="width:100%;height:100%;background:var(--wu-color-surface);border:1px dashed var(--wu-color-border-strong);display:flex;align-items:center;justify-content:center;color:var(--wu-color-text-secondary);font-size:var(--wu-text-xs);"
      >
        9 / 16
      </div>
    </wu-aspect-ratio>
  `};var o,s,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ratio: '16/9'
  },
  render: args => html\`
    <wu-aspect-ratio ratio=\${args.ratio} style="max-width:480px">
      <div
        style="width:100%;height:100%;background:var(--wu-color-surface);border:1px solid var(--wu-color-border);display:flex;align-items:center;justify-content:center;color:var(--wu-color-text-secondary);font-size:var(--wu-text-sm);"
      >
        16 / 9
      </div>
    </wu-aspect-ratio>
  \`
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <wu-aspect-ratio ratio="1" style="max-width:200px">
      <div
        style="width:100%;height:100%;background:var(--wu-color-primary-subtle);border-radius:var(--wu-radius-md);display:flex;align-items:center;justify-content:center;"
      >
        1 / 1
      </div>
    </wu-aspect-ratio>
  \`
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <wu-aspect-ratio ratio="9/16" style="max-width:160px">
      <div
        style="width:100%;height:100%;background:var(--wu-color-surface);border:1px dashed var(--wu-color-border-strong);display:flex;align-items:center;justify-content:center;color:var(--wu-color-text-secondary);font-size:var(--wu-text-xs);"
      >
        9 / 16
      </div>
    </wu-aspect-ratio>
  \`
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const g=["Default","Square","Portrait"];export{r as Default,e as Portrait,t as Square,g as __namedExportsOrder,y as default};
