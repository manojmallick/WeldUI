import{b as o}from"./lit-element-I0QAeI3K.js";import"./index-BlKKMvld.js";import"./directive-helpers-QMk0t2il.js";const d={title:"V3/Layout & Structure/Print Area",component:"wu-print-area",tags:["autodocs"],argTypes:{printOnly:{control:"boolean",name:"print-only"},noPrint:{control:"boolean",name:"no-print"}}},r={render:()=>o`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-4);">
      <wu-print-area>
        <div style="padding:var(--wu-space-4);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
          <strong>Always visible</strong> — shown on screen and when printing.
        </div>
      </wu-print-area>

      <wu-print-area no-print>
        <div style="padding:var(--wu-space-4);background:var(--wu-color-warning-subtle);border:1px solid var(--wu-color-warning);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);">
          <strong>Screen only</strong> — hidden when printing (no-print).
        </div>
      </wu-print-area>

      <wu-print-area print-only>
        <div style="padding:var(--wu-space-4);background:var(--wu-color-success-subtle);border:1px solid var(--wu-color-success);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);">
          <strong>Print only</strong> — this content is hidden on screen but appears when printing.
        </div>
      </wu-print-area>
    </div>
  `};var n,a,e;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-4);">
      <wu-print-area>
        <div style="padding:var(--wu-space-4);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
          <strong>Always visible</strong> — shown on screen and when printing.
        </div>
      </wu-print-area>

      <wu-print-area no-print>
        <div style="padding:var(--wu-space-4);background:var(--wu-color-warning-subtle);border:1px solid var(--wu-color-warning);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);">
          <strong>Screen only</strong> — hidden when printing (no-print).
        </div>
      </wu-print-area>

      <wu-print-area print-only>
        <div style="padding:var(--wu-space-4);background:var(--wu-color-success-subtle);border:1px solid var(--wu-color-success);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);">
          <strong>Print only</strong> — this content is hidden on screen but appears when printing.
        </div>
      </wu-print-area>
    </div>
  \`
}`,...(e=(a=r.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};const u=["Default"];export{r as Default,u as __namedExportsOrder,d as default};
