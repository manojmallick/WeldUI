import{b as o}from"./lit-element-I0QAeI3K.js";const m={title:"Layout/ScrollArea",component:"wu-scroll-area",tags:["autodocs"]},p=Array.from({length:20},(d,c)=>o`<p>Line ${c+1} — Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>`),r={render:()=>o`<wu-scroll-area max-height="200px" orientation="vertical">${p}</wu-scroll-area>`},e={render:()=>o`
    <wu-scroll-area max-width="300px" orientation="horizontal">
      <div style="width:800px;white-space:nowrap;padding:16px;background:var(--wu-color-surface);">
        A very wide piece of content that overflows horizontally for demonstration purposes.
      </div>
    </wu-scroll-area>`};var a,t,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:'{\n  render: () => html`<wu-scroll-area max-height="200px" orientation="vertical">${lorem}</wu-scroll-area>`\n}',...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var s,i,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <wu-scroll-area max-width="300px" orientation="horizontal">
      <div style="width:800px;white-space:nowrap;padding:16px;background:var(--wu-color-surface);">
        A very wide piece of content that overflows horizontally for demonstration purposes.
      </div>
    </wu-scroll-area>\`
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const w=["Vertical","Horizontal"];export{e as Horizontal,r as Vertical,w as __namedExportsOrder,m as default};
