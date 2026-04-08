import{b as n}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const w={title:"V3/E-Commerce/Payment Form",component:"wu-payment-form",tags:["autodocs"],argTypes:{heading:{control:"text"},loading:{control:"boolean"},error:{control:"text"}}},r={args:{heading:"Payment details",loading:!1,error:""},render:o=>n`
    <wu-payment-form heading=${o.heading} ?loading=${o.loading} error=${o.error}></wu-payment-form>
  `},e={render:()=>n`<wu-payment-form loading></wu-payment-form>`},a={render:()=>n`
    <wu-payment-form error="Your card was declined. Please try a different card."></wu-payment-form>
  `};var t,m,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    heading: 'Payment details',
    loading: false,
    error: ''
  },
  render: args => html\`
    <wu-payment-form heading=\${args.heading} ?loading=\${args.loading} error=\${args.error}></wu-payment-form>
  \`
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var s,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{\n  render: () => html`<wu-payment-form loading></wu-payment-form>`\n}",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,l,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <wu-payment-form error="Your card was declined. Please try a different card."></wu-payment-form>
  \`
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const h=["Default","Loading","WithError"];export{r as Default,e as Loading,a as WithError,h as __namedExportsOrder,w as default};
