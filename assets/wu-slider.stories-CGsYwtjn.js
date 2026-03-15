import{b as l}from"./lit-element-CWHijwDH.js";const g={title:"Components/Slider",component:"wu-slider",tags:["autodocs"]},e={render:()=>l`<wu-slider label="Volume" value="50" show-value></wu-slider>`},s={render:()=>l`
    <wu-slider
      label="Quantity"
      min="0"
      max="100"
      step="25"
      value="50"
      show-value
      .ticks=${[0,25,50,75,100]}
    ></wu-slider>
  `},r={render:()=>l`<wu-slider label="Disabled" value="30" disabled></wu-slider>`},a={render:()=>l`
    <wu-slider
      label="Brightness"
      value="70"
      hint="Adjust screen brightness (0–100)"
      show-value
    ></wu-slider>
  `};var n,t,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:'{\n  render: () => html`<wu-slider label="Volume" value="50" show-value></wu-slider>`\n}',...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var u,d,o;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <wu-slider
      label="Quantity"
      min="0"
      max="100"
      step="25"
      value="50"
      show-value
      .ticks=\${[0, 25, 50, 75, 100]}
    ></wu-slider>
  \`
}`,...(o=(d=s.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:'{\n  render: () => html`<wu-slider label="Disabled" value="30" disabled></wu-slider>`\n}',...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var w,h,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <wu-slider
      label="Brightness"
      value="70"
      hint="Adjust screen brightness (0–100)"
      show-value
    ></wu-slider>
  \`
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const D=["Default","WithTicks","Disabled","WithHint"];export{e as Default,r as Disabled,a as WithHint,s as WithTicks,D as __namedExportsOrder,g as default};
