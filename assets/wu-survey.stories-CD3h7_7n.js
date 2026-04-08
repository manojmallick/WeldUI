import{b as t}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const g={title:"V3/Feedback & Validation/Survey",component:"wu-survey",tags:["autodocs"],argTypes:{question:{control:"text"},withComment:{control:"boolean"}}},e={args:{question:"How likely are you to recommend us to a colleague?"},render:y=>t`
    <wu-survey .question=${y.question}></wu-survey>
  `},o={render:()=>t`
    <wu-survey with-comment question="How satisfied are you with our product?"></wu-survey>
  `},r={render:()=>t`
    <wu-survey question="How would you rate your onboarding experience?"></wu-survey>
  `};var s,u,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    question: 'How likely are you to recommend us to a colleague?'
  },
  render: args => html\`
    <wu-survey .question=\${args.question}></wu-survey>
  \`
}`,...(n=(u=e.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};var a,i,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <wu-survey with-comment question="How satisfied are you with our product?"></wu-survey>
  \`
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,w;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <wu-survey question="How would you rate your onboarding experience?"></wu-survey>
  \`
}`,...(w=(d=r.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};const q=["Default","WithComment","CustomQuestion"];export{r as CustomQuestion,e as Default,o as WithComment,q as __namedExportsOrder,g as default};
