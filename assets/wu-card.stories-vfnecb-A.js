import{b as a}from"./lit-element-9a6qN07w.js";const x={title:"Components/Card",component:"wu-card",tags:["autodocs"],argTypes:{interactive:{control:"boolean"}}},e={args:{interactive:!1},render:v=>a`
    <wu-card ?interactive=${v.interactive} style="max-width:360px">
      <span slot="header" style="font-weight:600;font-size:1rem">Card Title</span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        This is the card body. It can contain any content.
      </p>
      <div slot="footer">
        <wu-button size="sm">Action</wu-button>
      </div>
    </wu-card>
  `},t={render:()=>a`
    <wu-card style="max-width:360px">
      <p style="margin:0">A simple card with only body content.</p>
    </wu-card>
  `},r={render:()=>a`
    <wu-card interactive style="max-width:360px">
      <span slot="header" style="font-weight:600">Clickable Card</span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        Hover or click this card to see the elevation change.
      </p>
    </wu-card>
  `},n={render:()=>a`
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
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,l,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <wu-card style="max-width:360px">
      <p style="margin:0">A simple card with only body content.</p>
    </wu-card>
  \`
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <wu-card interactive style="max-width:360px">
      <span slot="header" style="font-weight:600">Clickable Card</span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        Hover or click this card to see the elevation change.
      </p>
    </wu-card>
  \`
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var w,y,h;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const g=["Default","SimpleBody","Interactive","AllSlots"];export{n as AllSlots,e as Default,r as Interactive,t as SimpleBody,g as __namedExportsOrder,x as default};
