import{b as r}from"./lit-element-9a6qN07w.js";const d={title:"Components/Accordion",component:"wu-accordion",tags:["autodocs"]},n={render:()=>r`
    <wu-accordion style="max-width:560px">
      <wu-accordion-item>
        <span slot="summary">What is WeldUI?</span>
        WeldUI is a framework-agnostic component library built with Lit Web Components.
        It works in any framework — React, Vue, Angular, Svelte, or plain HTML.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">How do I install it?</span>
        Run <code>pnpm add @weldui/core</code> and import the components you need.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Is it accessible?</span>
        Yes — all components target WCAG 2.1 AA compliance with full keyboard navigation.
      </wu-accordion-item>
    </wu-accordion>
  `},o={render:()=>r`
    <wu-accordion single style="max-width:560px">
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
  `};var e,t,a;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => html\`
    <wu-accordion style="max-width:560px">
      <wu-accordion-item>
        <span slot="summary">What is WeldUI?</span>
        WeldUI is a framework-agnostic component library built with Lit Web Components.
        It works in any framework — React, Vue, Angular, Svelte, or plain HTML.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">How do I install it?</span>
        Run <code>pnpm add @weldui/core</code> and import the components you need.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Is it accessible?</span>
        Yes — all components target WCAG 2.1 AA compliance with full keyboard navigation.
      </wu-accordion-item>
    </wu-accordion>
  \`
}`,...(a=(t=n.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var i,s,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <wu-accordion single style="max-width:560px">
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
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const u=["Default","SingleOpen"];export{n as Default,o as SingleOpen,u as __namedExportsOrder,d as default};
