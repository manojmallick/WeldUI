import{b as a}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const M={title:"V3/E-Commerce/Order Status",component:"wu-order-status",tags:["autodocs"]},o=e=>[{label:"Order placed",date:"Jun 1, 2025 10:00 AM",done:e>0},{label:"Processing",date:"Jun 1, 2025 11:00 AM",done:e>1},{label:"Shipped",date:"Jun 2, 2025 08:30 AM",done:e>2},{label:"Delivered",date:"Jun 3, 2025 02:15 PM",done:e>3}],r={render:()=>a`
    <wu-order-status order-id="1038291" status="pending" .steps=${o(0)}></wu-order-status>
  `},s={render:()=>a`
    <wu-order-status order-id="1038291" status="shipped" .steps=${o(2)}></wu-order-status>
  `},t={render:()=>a`
    <wu-order-status order-id="1038291" status="delivered" .steps=${o(4)}></wu-order-status>
  `},d={render:()=>a`
    <wu-order-status order-id="1038291" status="cancelled" .steps=${o(1)}></wu-order-status>
  `};var n,u,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <wu-order-status order-id="1038291" status="pending" .steps=\${doneSteps(0)}></wu-order-status>
  \`
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,i,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <wu-order-status order-id="1038291" status="shipped" .steps=\${doneSteps(2)}></wu-order-status>
  \`
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,w,S;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <wu-order-status order-id="1038291" status="delivered" .steps=\${doneSteps(4)}></wu-order-status>
  \`
}`,...(S=(w=t.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var g,h,$;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <wu-order-status order-id="1038291" status="cancelled" .steps=\${doneSteps(1)}></wu-order-status>
  \`
}`,...($=(h=d.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};const P=["Pending","Shipped","Delivered","Cancelled"];export{d as Cancelled,t as Delivered,r as Pending,s as Shipped,P as __namedExportsOrder,M as default};
