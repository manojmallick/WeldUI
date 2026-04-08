import{b as r}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const S={title:"V3/AI-LLM/ChatMessage",component:"wu-chat-message",tags:["autodocs"]},e={render:()=>r`
    <wu-chat-message role="user" author="You" timestamp="12:01">
      Hello, can you help me with TypeScript generics?
    </wu-chat-message>
  `},s={render:()=>r`
    <wu-chat-message role="assistant" author="Assistant" timestamp="12:02">
      Of course! TypeScript generics allow you to write reusable, type-safe code.
    </wu-chat-message>
  `},a={render:()=>r`
    <wu-chat-message role="assistant" author="Assistant" type="code" language="typescript">
      function identity&lt;T&gt;(arg: T): T { return arg; }
    </wu-chat-message>
  `},t={render:()=>r`
    <wu-chat-message role="assistant" tool-name="search_web" type="tool-call">
      { "query": "TypeScript generics tutorial" }
    </wu-chat-message>
  `};var o,c,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <wu-chat-message role="user" author="You" timestamp="12:01">
      Hello, can you help me with TypeScript generics?
    </wu-chat-message>
  \`
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var u,m,i;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <wu-chat-message role="assistant" author="Assistant" timestamp="12:02">
      Of course! TypeScript generics allow you to write reusable, type-safe code.
    </wu-chat-message>
  \`
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var l,p,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <wu-chat-message role="assistant" author="Assistant" type="code" language="typescript">
      function identity&lt;T&gt;(arg: T): T { return arg; }
    </wu-chat-message>
  \`
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,d,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <wu-chat-message role="assistant" tool-name="search_web" type="tool-call">
      { "query": "TypeScript generics tutorial" }
    </wu-chat-message>
  \`
}`,...(w=(d=t.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};const f=["UserMessage","AssistantMessage","CodeMessage","ToolCallMessage"];export{s as AssistantMessage,a as CodeMessage,t as ToolCallMessage,e as UserMessage,f as __namedExportsOrder,S as default};
