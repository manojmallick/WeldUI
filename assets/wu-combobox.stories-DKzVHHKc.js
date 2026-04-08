import{b as s}from"./lit-element-CBn2YVps.js";const S={title:"Components/Combobox",component:"wu-combobox",tags:["autodocs"]},l=[{value:"ts",label:"TypeScript"},{value:"js",label:"JavaScript"},{value:"py",label:"Python"},{value:"rs",label:"Rust"},{value:"go",label:"Go"}],o={render:()=>s`
    <wu-combobox label="Language" placeholder="Search languages…" .options=${l}></wu-combobox>
  `},e={render:()=>s`
    <wu-combobox
      label="Language"
      .options=${l}
      error="Please select a language"
    ></wu-combobox>
  `},a={render:()=>s`
    <wu-combobox label="Country" placeholder="Search…" loading></wu-combobox>
  `},r={render:()=>s`
    <wu-combobox label="Language" .options=${l} value="ts" disabled></wu-combobox>
  `};var n,c,t;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <wu-combobox label="Language" placeholder="Search languages…" .options=\${LANGS}></wu-combobox>
  \`
}`,...(t=(c=o.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var b,u,m;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <wu-combobox
      label="Language"
      .options=\${LANGS}
      error="Please select a language"
    ></wu-combobox>
  \`
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <wu-combobox label="Country" placeholder="Search…" loading></wu-combobox>
  \`
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var i,x,w;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <wu-combobox label="Language" .options=\${LANGS} value="ts" disabled></wu-combobox>
  \`
}`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const L=["Default","WithError","Loading","Disabled"];export{o as Default,r as Disabled,a as Loading,e as WithError,L as __namedExportsOrder,S as default};
