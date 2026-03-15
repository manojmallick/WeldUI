import{b}from"./lit-element-I0QAeI3K.js";import"./index-BlKKMvld.js";import"./directive-helpers-QMk0t2il.js";const m={title:"V3/Feedback & Validation/Support Bubble",component:"wu-support-bubble",tags:["autodocs"],argTypes:{position:{control:"radio",options:["bottom-right","bottom-left"]},label:{control:"text"}}},t={args:{position:"bottom-right",label:"Help"},render:e=>b`
    <div style="position:relative;height:120px">
      <wu-support-bubble style="position:absolute" position=${e.position} label=${e.label}></wu-support-bubble>
    </div>
  `},o={render:()=>b`
    <div style="position:relative;height:120px">
      <wu-support-bubble style="position:absolute;left:24px;right:auto;bottom:24px" label="Support"></wu-support-bubble>
    </div>
  `};var r,s,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    position: 'bottom-right',
    label: 'Help'
  },
  render: args => html\`
    <div style="position:relative;height:120px">
      <wu-support-bubble style="position:absolute" position=\${args.position} label=\${args.label}></wu-support-bubble>
    </div>
  \`
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var i,l,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <div style="position:relative;height:120px">
      <wu-support-bubble style="position:absolute;left:24px;right:auto;bottom:24px" label="Support"></wu-support-bubble>
    </div>
  \`
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const c=["Default","BottomLeft"];export{o as BottomLeft,t as Default,c as __namedExportsOrder,m as default};
