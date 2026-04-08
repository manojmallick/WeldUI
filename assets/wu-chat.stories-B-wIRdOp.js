import{b as c}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const n={title:"Enterprise/Chat",component:"wu-chat",tags:["autodocs"]},e={render:()=>c`
    <wu-chat max-height="320">
      <wu-chat-bubble side="left" author="Alice" time="10:01" show-avatar>Hello! How can I help?</wu-chat-bubble>
      <wu-chat-bubble side="right" time="10:02">I need help with my order.</wu-chat-bubble>
      <wu-chat-bubble side="left" author="Alice" time="10:03" show-avatar>Sure! What's the order number?</wu-chat-bubble>
      <wu-chat-bubble side="right" time="10:03">#1038291</wu-chat-bubble>
    </wu-chat>
  `},t={render:()=>c`
    <div style="display:flex;flex-direction:column;gap:8px;max-width:400px">
      <wu-chat-bubble side="left" author="Support">How can we help?</wu-chat-bubble>
      <wu-chat-bubble side="right">I have a question.</wu-chat-bubble>
    </div>
  `};var a,u,b;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <wu-chat max-height="320">
      <wu-chat-bubble side="left" author="Alice" time="10:01" show-avatar>Hello! How can I help?</wu-chat-bubble>
      <wu-chat-bubble side="right" time="10:02">I need help with my order.</wu-chat-bubble>
      <wu-chat-bubble side="left" author="Alice" time="10:03" show-avatar>Sure! What's the order number?</wu-chat-bubble>
      <wu-chat-bubble side="right" time="10:03">#1038291</wu-chat-bubble>
    </wu-chat>
  \`
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var r,h,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:8px;max-width:400px">
      <wu-chat-bubble side="left" author="Support">How can we help?</wu-chat-bubble>
      <wu-chat-bubble side="right">I have a question.</wu-chat-bubble>
    </div>
  \`
}`,...(l=(h=t.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};const w=["Default","BubbleOnly"];export{t as BubbleOnly,e as Default,w as __namedExportsOrder,n as default};
