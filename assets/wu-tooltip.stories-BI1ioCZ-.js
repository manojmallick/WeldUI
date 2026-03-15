import{b as s}from"./lit-element-CWHijwDH.js";const c={title:"Components/Tooltip",component:"wu-tooltip",tags:["autodocs"],argTypes:{content:{control:"text"},placement:{control:"select",options:["top","bottom","left","right"]},delay:{control:"number"}},parameters:{docs:{description:{component:"A lightweight hint that appears on hover or focus. Wraps any trigger element in the default slot. Supports `top`, `bottom`, `left` and `right` placements with a configurable show delay."}}}},t={args:{content:"This is a tooltip",placement:"top"},render:e=>s`
    <div style="padding:60px;display:flex;justify-content:center">
      <wu-tooltip content=${e.content} placement=${e.placement}>
        <wu-button>Hover me</wu-button>
      </wu-tooltip>
    </div>
  `},o={render:()=>s`
    <div style="display:flex;gap:24px;padding:80px;justify-content:center;flex-wrap:wrap">
      <wu-tooltip content="Top tooltip" placement="top">
        <wu-button variant="secondary" size="sm">Top</wu-button>
      </wu-tooltip>
      <wu-tooltip content="Bottom tooltip" placement="bottom">
        <wu-button variant="secondary" size="sm">Bottom</wu-button>
      </wu-tooltip>
      <wu-tooltip content="Left tooltip" placement="left">
        <wu-button variant="secondary" size="sm">Left</wu-button>
      </wu-tooltip>
      <wu-tooltip content="Right tooltip" placement="right">
        <wu-button variant="secondary" size="sm">Right</wu-button>
      </wu-tooltip>
    </div>
  `};var n,a,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    placement: 'top'
  },
  render: args => html\`
    <div style="padding:60px;display:flex;justify-content:center">
      <wu-tooltip content=\${args.content} placement=\${args.placement}>
        <wu-button>Hover me</wu-button>
      </wu-tooltip>
    </div>
  \`
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var i,r,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:24px;padding:80px;justify-content:center;flex-wrap:wrap">
      <wu-tooltip content="Top tooltip" placement="top">
        <wu-button variant="secondary" size="sm">Top</wu-button>
      </wu-tooltip>
      <wu-tooltip content="Bottom tooltip" placement="bottom">
        <wu-button variant="secondary" size="sm">Bottom</wu-button>
      </wu-tooltip>
      <wu-tooltip content="Left tooltip" placement="left">
        <wu-button variant="secondary" size="sm">Left</wu-button>
      </wu-tooltip>
      <wu-tooltip content="Right tooltip" placement="right">
        <wu-button variant="secondary" size="sm">Right</wu-button>
      </wu-tooltip>
    </div>
  \`
}`,...(l=(r=o.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const m=["Default","Placements"];export{t as Default,o as Placements,m as __namedExportsOrder,c as default};
