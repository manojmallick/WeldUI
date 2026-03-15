import{b as n}from"./lit-element-CWHijwDH.js";const x={title:"Components/Card",component:"wu-card",tags:["autodocs"],argTypes:{interactive:{control:"boolean"}},parameters:{docs:{description:{component:"A surface container with `header`, `body` and `footer` slots. Set `interactive` for a hover elevation effect."}}}},e={args:{interactive:!1},render:f=>n`
    <wu-card ?interactive=${f.interactive} style="max-width:360px">
      <span slot="header" style="font-weight:600;font-size:1rem">Card Title</span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        This is the card body. It can contain any content.
      </p>
      <div slot="footer">
        <wu-button size="sm">Action</wu-button>
      </div>
    </wu-card>
  `},t={render:()=>n`
    <wu-card style="max-width:360px">
      <p style="margin:0">A simple card with only body content.</p>
    </wu-card>
  `},r={render:()=>n`
    <wu-card interactive style="max-width:360px">
      <span slot="header" style="font-weight:600">Clickable Card</span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        Hover or click this card to see the elevation change.
      </p>
    </wu-card>
  `},a={render:()=>n`
    <wu-card style="max-width:360px">
      <span slot="header" style="font-weight:600;font-size:1rem;color:var(--wu-color-text)">
        Header Title
      </span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        Card body content with full header and footer.
      </p>
      <div slot="footer" style="display:flex;gap:8px;justify-content:flex-end">
        <wu-button variant="ghost" size="sm">Cancel</wu-button>
        <wu-button size="sm">Confirm</wu-button>
      </div>
    </wu-card>
  `};var o,s,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    interactive: false
  },
  render: args => html\`
    <wu-card ?interactive=\${args.interactive} style="max-width:360px">
      <span slot="header" style="font-weight:600;font-size:1rem">Card Title</span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        This is the card body. It can contain any content.
      </p>
      <div slot="footer">
        <wu-button size="sm">Action</wu-button>
      </div>
    </wu-card>
  \`
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,d,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <wu-card style="max-width:360px">
      <p style="margin:0">A simple card with only body content.</p>
    </wu-card>
  \`
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <wu-card interactive style="max-width:360px">
      <span slot="header" style="font-weight:600">Clickable Card</span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        Hover or click this card to see the elevation change.
      </p>
    </wu-card>
  \`
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var w,y,h;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <wu-card style="max-width:360px">
      <span slot="header" style="font-weight:600;font-size:1rem;color:var(--wu-color-text)">
        Header Title
      </span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        Card body content with full header and footer.
      </p>
      <div slot="footer" style="display:flex;gap:8px;justify-content:flex-end">
        <wu-button variant="ghost" size="sm">Cancel</wu-button>
        <wu-button size="sm">Confirm</wu-button>
      </div>
    </wu-card>
  \`
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const g=["Default","SimpleBody","Interactive","AllSlots"];export{a as AllSlots,e as Default,r as Interactive,t as SimpleBody,g as __namedExportsOrder,x as default};
