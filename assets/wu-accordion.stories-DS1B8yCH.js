import{b as t}from"./lit-element-I0QAeI3K.js";const W={title:"Components/Accordion",component:"wu-accordion",tags:["autodocs"],argTypes:{single:{control:"boolean",description:"Restrict so only one item can be open at a time.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{single:!1},parameters:{docs:{description:{component:"Collapsible disclosure panels. Add the `single` attribute to restrict to one open item at a time. Compose with `<wu-accordion-item>` elements. Each item supports a `summary` slot (the clickable header) and a default slot (the revealed body content)."}}}},e={args:{single:!1},render:i=>t`
    <wu-accordion ?single=${i.single} style="max-width:560px">
      <wu-accordion-item>
        <span slot="summary">What is WeldUI?</span>
        WeldUI is a framework-agnostic component library built on Lit Web Components.
        It works in React, Vue, Angular, Svelte, or plain HTML with zero dependencies.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">How do I install it?</span>
        Run <code>pnpm add @weldui/core</code> and import the components you need.
        Each component auto-registers its custom element on import.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Is it accessible?</span>
        Yes — all components target WCAG 2.1 AA with full keyboard navigation,
        ARIA attributes, and focus management.
      </wu-accordion-item>
    </wu-accordion>
  `},n={args:{single:!0},render:i=>t`
    <wu-accordion ?single=${i.single} style="max-width:560px">
      <wu-accordion-item open>
        <span slot="summary">First item (open by default)</span>
        This item is open by default. Opening another will close this one.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Second item</span>
        This is the second item's content.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Third item</span>
        This is the third item's content.
      </wu-accordion-item>
    </wu-accordion>
  `},o={render:()=>t`
    <wu-accordion style="max-width:560px">
      <wu-accordion-item>
        <span slot="summary">Active item</span>
        This item is active and can be expanded freely.
      </wu-accordion-item>
      <wu-accordion-item disabled>
        <span slot="summary">Disabled item (cannot expand)</span>
        This content would never be revealed — the item is locked.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Another active item</span>
        This item is also fully interactive.
      </wu-accordion-item>
    </wu-accordion>
  `},a={render:()=>t`
    <wu-accordion style="max-width:560px">
      <wu-accordion-item open>
        <span slot="summary">Getting started</span>
        <p style="margin:0 0 var(--wu-space-3)">Install WeldUI with your package manager:</p>
        <pre style="
          margin:0;
          background:var(--wu-color-surface);
          padding:var(--wu-space-3) var(--wu-space-4);
          border-radius:var(--wu-radius-md);
          font-family:var(--wu-font-mono);
          font-size:var(--wu-text-xs);
          color:var(--wu-color-text);
          overflow-x:auto;
        ">pnpm add @weldui/core</pre>
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Supported frameworks</span>
        <ul style="margin:0;padding-left:var(--wu-space-5);display:flex;flex-direction:column;gap:var(--wu-space-2)">
          <li>React — <code style="font-family:var(--wu-font-mono);font-size:var(--wu-text-xs)">@weldui/react</code></li>
          <li>Vue 3 — <code style="font-family:var(--wu-font-mono);font-size:var(--wu-text-xs)">@weldui/vue</code></li>
          <li>Angular — <code style="font-family:var(--wu-font-mono);font-size:var(--wu-text-xs)">@weldui/angular</code></li>
          <li>Svelte — native Web Components, no wrapper needed</li>
          <li>Plain HTML / JS — zero dependencies</li>
        </ul>
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Browser support</span>
        All evergreen browsers — Chrome, Firefox, Safari, and Edge (latest 2 versions).
        Web Components (Custom Elements v1 + Shadow DOM v1) are required.
      </wu-accordion-item>
    </wu-accordion>
  `};var s,r,c,d,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    single: false
  },
  render: args => html\`
    <wu-accordion ?single=\${args['single']} style="max-width:560px">
      <wu-accordion-item>
        <span slot="summary">What is WeldUI?</span>
        WeldUI is a framework-agnostic component library built on Lit Web Components.
        It works in React, Vue, Angular, Svelte, or plain HTML with zero dependencies.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">How do I install it?</span>
        Run <code>pnpm add @weldui/core</code> and import the components you need.
        Each component auto-registers its custom element on import.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Is it accessible?</span>
        Yes — all components target WCAG 2.1 AA with full keyboard navigation,
        ARIA attributes, and focus management.
      </wu-accordion-item>
    </wu-accordion>
  \`
}`,...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source},description:{story:"Default accordion — multiple items can be open simultaneously.",...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};var m,u,p,w,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    single: true
  },
  render: args => html\`
    <wu-accordion ?single=\${args['single']} style="max-width:560px">
      <wu-accordion-item open>
        <span slot="summary">First item (open by default)</span>
        This item is open by default. Opening another will close this one.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Second item</span>
        This is the second item's content.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Third item</span>
        This is the third item's content.
      </wu-accordion-item>
    </wu-accordion>
  \`
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:"With `single` — opening one item automatically closes the others.",...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var g,f,h,v,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <wu-accordion style="max-width:560px">
      <wu-accordion-item>
        <span slot="summary">Active item</span>
        This item is active and can be expanded freely.
      </wu-accordion-item>
      <wu-accordion-item disabled>
        <span slot="summary">Disabled item (cannot expand)</span>
        This content would never be revealed — the item is locked.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Another active item</span>
        This item is also fully interactive.
      </wu-accordion-item>
    </wu-accordion>
  \`
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"Items can be individually disabled — they cannot be toggled by the user.",...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};var x,A,S,T,I;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <wu-accordion style="max-width:560px">
      <wu-accordion-item open>
        <span slot="summary">Getting started</span>
        <p style="margin:0 0 var(--wu-space-3)">Install WeldUI with your package manager:</p>
        <pre style="
          margin:0;
          background:var(--wu-color-surface);
          padding:var(--wu-space-3) var(--wu-space-4);
          border-radius:var(--wu-radius-md);
          font-family:var(--wu-font-mono);
          font-size:var(--wu-text-xs);
          color:var(--wu-color-text);
          overflow-x:auto;
        ">pnpm add @weldui/core</pre>
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Supported frameworks</span>
        <ul style="margin:0;padding-left:var(--wu-space-5);display:flex;flex-direction:column;gap:var(--wu-space-2)">
          <li>React — <code style="font-family:var(--wu-font-mono);font-size:var(--wu-text-xs)">@weldui/react</code></li>
          <li>Vue 3 — <code style="font-family:var(--wu-font-mono);font-size:var(--wu-text-xs)">@weldui/vue</code></li>
          <li>Angular — <code style="font-family:var(--wu-font-mono);font-size:var(--wu-text-xs)">@weldui/angular</code></li>
          <li>Svelte — native Web Components, no wrapper needed</li>
          <li>Plain HTML / JS — zero dependencies</li>
        </ul>
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Browser support</span>
        All evergreen browsers — Chrome, Firefox, Safari, and Edge (latest 2 versions).
        Web Components (Custom Elements v1 + Shadow DOM v1) are required.
      </wu-accordion-item>
    </wu-accordion>
  \`
}`,...(S=(A=a.parameters)==null?void 0:A.docs)==null?void 0:S.source},description:{story:"Body slots accept any HTML — code blocks, lists, inline elements.",...(I=(T=a.parameters)==null?void 0:T.docs)==null?void 0:I.description}}};const k=["Default","SingleOpen","DisabledItems","RichContent"];export{e as Default,o as DisabledItems,a as RichContent,n as SingleOpen,k as __namedExportsOrder,W as default};
