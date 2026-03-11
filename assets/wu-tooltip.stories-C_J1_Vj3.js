import{b as r}from"./lit-element-9a6qN07w.js";const c={title:"Components/Tooltip",component:"wu-tooltip",tags:["autodocs"],argTypes:{content:{control:"text"},placement:{control:"select",options:["top","bottom","left","right"]},delay:{control:"number"}}},t={args:{content:"This is a tooltip",placement:"top"},render:n=>r`
    <div style="padding:60px;display:flex;justify-content:center">
      <wu-tooltip content=${n.content} placement=${n.placement}>
        <wu-button>Hover me</wu-button>
      </wu-tooltip>
    </div>
  `},o={render:()=>r`
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
  `};var e,p,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(p=t.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var i,l,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const m=["Default","Placements"];export{t as Default,o as Placements,m as __namedExportsOrder,c as default};
