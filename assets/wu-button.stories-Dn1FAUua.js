import{b as o}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const z={title:"Components/Button",component:"wu-button",tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger","success"],description:"Visual style variant"},size:{control:"radio",options:["sm","md","lg"],description:"Size variant"},disabled:{control:"boolean",description:"Disables the button"},loading:{control:"boolean",description:"Shows loading spinner"},type:{control:"select",options:["button","submit","reset"],description:"Native button type"}},parameters:{docs:{description:{component:"A versatile button component supporting multiple variants, sizes, and states."}}}},n={args:{variant:"primary",size:"md",disabled:!1,loading:!1},render:t=>o`
    <wu-button
      variant=${t.variant}
      size=${t.size}
      ?disabled=${t.disabled}
      ?loading=${t.loading}
    >
      Button Label
    </wu-button>
  `},e={render:()=>o`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
      <wu-button variant="primary">Primary</wu-button>
      <wu-button variant="secondary">Secondary</wu-button>
      <wu-button variant="ghost">Ghost</wu-button>
      <wu-button variant="danger">Danger</wu-button>
      <wu-button variant="success">Success</wu-button>
      <wu-button disabled>Disabled</wu-button>
      <wu-button loading>Loading</wu-button>
    </div>
  `},a={render:()=>o`
    <div style="display:flex;gap:12px;align-items:center">
      <wu-button size="sm">Small</wu-button>
      <wu-button size="md">Medium</wu-button>
      <wu-button size="lg">Large</wu-button>
    </div>
  `},s={render:()=>o`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
      <wu-button>
        <span slot="prefix">⬅</span>
        Back
      </wu-button>
      <wu-button>
        Next
        <span slot="suffix">➡</span>
      </wu-button>
    </div>
  `};var r,i,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false
  },
  render: args => html\`
    <wu-button
      variant=\${args.variant}
      size=\${args.size}
      ?disabled=\${args.disabled}
      ?loading=\${args.loading}
    >
      Button Label
    </wu-button>
  \`
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
      <wu-button variant="primary">Primary</wu-button>
      <wu-button variant="secondary">Secondary</wu-button>
      <wu-button variant="ghost">Ghost</wu-button>
      <wu-button variant="danger">Danger</wu-button>
      <wu-button variant="success">Success</wu-button>
      <wu-button disabled>Disabled</wu-button>
      <wu-button loading>Loading</wu-button>
    </div>
  \`
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,c,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center">
      <wu-button size="sm">Small</wu-button>
      <wu-button size="md">Medium</wu-button>
      <wu-button size="lg">Large</wu-button>
    </div>
  \`
}`,...(w=(c=a.parameters)==null?void 0:c.docs)==null?void 0:w.source}}};var m,g,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
      <wu-button>
        <span slot="prefix">⬅</span>
        Back
      </wu-button>
      <wu-button>
        Next
        <span slot="suffix">➡</span>
      </wu-button>
    </div>
  \`
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const S=["Default","AllVariants","Sizes","WithSlots"];export{e as AllVariants,n as Default,a as Sizes,s as WithSlots,S as __namedExportsOrder,z as default};
