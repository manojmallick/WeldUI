import{b as o}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const v={title:"V3/SaaS & App Shell/Rich Text Viewer",component:"wu-rich-text-viewer",tags:["autodocs"]},u=`
<h2>Release Notes</h2>
<p>This release includes several <strong>performance improvements</strong> and bug fixes.</p>
<ul>
  <li>Reduced bundle size by 12%</li>
  <li>Fixed focus trap in <code>wu-modal</code></li>
  <li>Added <em>dark mode</em> support to all themes</li>
</ul>
<blockquote><p>Upgrade today to take advantage of these improvements.</p></blockquote>
`,e={render:()=>o`<wu-rich-text-viewer .content=${u}></wu-rich-text-viewer>`},t={render:()=>o`<wu-rich-text-viewer compact .content=${u}></wu-rich-text-viewer>`},r={render:()=>o`
    <wu-rich-text-viewer>
      <p>Slotted content as a fallback.</p>
    </wu-rich-text-viewer>
  `};var a,c,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{\n  render: () => html`<wu-rich-text-viewer .content=${sampleHtml}></wu-rich-text-viewer>`\n}",...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var i,n,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{\n  render: () => html`<wu-rich-text-viewer compact .content=${sampleHtml}></wu-rich-text-viewer>`\n}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <wu-rich-text-viewer>
      <p>Slotted content as a fallback.</p>
    </wu-rich-text-viewer>
  \`
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const f=["Default","Compact","WithSlot"];export{t as Compact,e as Default,r as WithSlot,f as __namedExportsOrder,v as default};
