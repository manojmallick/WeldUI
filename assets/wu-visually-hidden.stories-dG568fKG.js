import{b as d}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const p={title:"V3/Layout & Structure/Visually Hidden",component:"wu-visually-hidden",tags:["autodocs"]},e={render:()=>d`
    <button
      style="padding:var(--wu-space-2);background:var(--wu-color-primary);color:white;border:none;border-radius:var(--wu-radius-md);cursor:pointer;display:flex;align-items:center;gap:var(--wu-space-2);"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      <wu-visually-hidden>Add new item</wu-visually-hidden>
    </button>
    <p style="margin-top:var(--wu-space-4);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);">
      The button above shows only an icon but announces "Add new item" to screen readers.
    </p>
  `},r={render:()=>d`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <label style="font-size:var(--wu-text-sm);font-weight:var(--wu-font-medium);">
        <wu-visually-hidden>Search</wu-visually-hidden>
        <input type="search" placeholder="Search…" style="padding:var(--wu-space-2) var(--wu-space-3);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);" />
      </label>
    </div>
  `};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <button
      style="padding:var(--wu-space-2);background:var(--wu-color-primary);color:white;border:none;border-radius:var(--wu-radius-md);cursor:pointer;display:flex;align-items:center;gap:var(--wu-space-2);"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      <wu-visually-hidden>Add new item</wu-visually-hidden>
    </button>
    <p style="margin-top:var(--wu-space-4);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);">
      The button above shows only an icon but announces "Add new item" to screen readers.
    </p>
  \`
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <label style="font-size:var(--wu-text-sm);font-weight:var(--wu-font-medium);">
        <wu-visually-hidden>Search</wu-visually-hidden>
        <input type="search" placeholder="Search…" style="padding:var(--wu-space-2) var(--wu-space-3);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);" />
      </label>
    </div>
  \`
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const w=["Default","FormLabel"];export{e as Default,r as FormLabel,w as __namedExportsOrder,p as default};
