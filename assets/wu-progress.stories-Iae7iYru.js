import{b as o}from"./lit-element-CWHijwDH.js";const z={title:"Components/Progress",component:"wu-progress",tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},indeterminate:{control:"boolean"},showLabel:{control:"boolean"},size:{control:"radio",options:["sm","md","lg"]}},parameters:{docs:{description:{component:"Tracks completion of a task as a horizontal bar. Set `value` and `max` for determinate mode, or add `indeterminate` for an animated shimmer. Uses `aria-valuenow` / `aria-valuemin` / `aria-valuemax`."}}}},e={args:{value:60,size:"md"},render:n=>o`
    <wu-progress value=${n.value} size=${n.size}></wu-progress>
  `},r={render:()=>o`
    <wu-progress value="72" label="Upload progress" show-label style="max-width:480px"></wu-progress>
  `},s={render:()=>o`
    <wu-progress indeterminate label="Loading…" style="max-width:480px"></wu-progress>
  `},a={render:()=>o`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:480px">
      <wu-progress size="sm" value="40"></wu-progress>
      <wu-progress size="md" value="60"></wu-progress>
      <wu-progress size="lg" value="80"></wu-progress>
    </div>
  `};var t,l,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'md'
  },
  render: args => html\`
    <wu-progress value=\${args.value} size=\${args.size}></wu-progress>
  \`
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <wu-progress value="72" label="Upload progress" show-label style="max-width:480px"></wu-progress>
  \`
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,g,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <wu-progress indeterminate label="Loading…" style="max-width:480px"></wu-progress>
  \`
}`,...(c=(g=s.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var w,v,x;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:480px">
      <wu-progress size="sm" value="40"></wu-progress>
      <wu-progress size="md" value="60"></wu-progress>
      <wu-progress size="lg" value="80"></wu-progress>
    </div>
  \`
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const b=["Default","WithLabel","Indeterminate","Sizes"];export{e as Default,s as Indeterminate,a as Sizes,r as WithLabel,b as __namedExportsOrder,z as default};
