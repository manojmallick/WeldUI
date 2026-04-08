import{b as o}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const g={title:"V3/AI-LLM/ToolCallDisplay",component:"wu-tool-call-display",tags:["autodocs"]},t={render:()=>o`
    <wu-tool-call-display
      tool-name="search_web"
      status="success"
      input='{"query":"TypeScript generics"}'
      output='{"results":[{"title":"TypeScript Handbook","url":"https://www.typescriptlang.org"}]}'
    ></wu-tool-call-display>
  `},r={render:()=>o`
    <wu-tool-call-display
      tool-name="get_weather"
      status="running"
      input='{"city":"Amsterdam"}'
      output=""
    ></wu-tool-call-display>
  `},e={render:()=>o`
    <wu-tool-call-display
      tool-name="run_sql"
      status="error"
      input='{"query":"SELECT * FROM users"}'
      output='{"error":"Connection timeout"}'
    ></wu-tool-call-display>
  `};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <wu-tool-call-display
      tool-name="search_web"
      status="success"
      input='{"query":"TypeScript generics"}'
      output='{"results":[{"title":"TypeScript Handbook","url":"https://www.typescriptlang.org"}]}'
    ></wu-tool-call-display>
  \`
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var u,n,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <wu-tool-call-display
      tool-name="get_weather"
      status="running"
      input='{"city":"Amsterdam"}'
      output=""
    ></wu-tool-call-display>
  \`
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,i,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <wu-tool-call-display
      tool-name="run_sql"
      status="error"
      input='{"query":"SELECT * FROM users"}'
      output='{"error":"Connection timeout"}'
    ></wu-tool-call-display>
  \`
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const S=["Success","Running","Error"];export{e as Error,r as Running,t as Success,S as __namedExportsOrder,g as default};
