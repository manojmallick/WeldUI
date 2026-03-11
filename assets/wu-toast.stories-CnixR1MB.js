import{b as r}from"./lit-element-9a6qN07w.js";const w={title:"Components/Toast",component:"wu-toast",tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","info","success","warning","danger"]},heading:{control:"text"},duration:{control:"number"}},parameters:{docs:{description:{component:"Non-blocking notification messages. Place `<wu-toast-provider>` once in your app shell; toast items are appended to it programmatically or declaratively. Supports auto-dismiss, action slots and five severity variants."}}}},t={render:()=>r`
    <wu-toast heading="File saved" variant="success" duration="0">
      Your changes have been saved successfully.
    </wu-toast>
  `},a={render:()=>r`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:360px">
      <wu-toast variant="default" duration="0">Default notification message</wu-toast>
      <wu-toast variant="info" heading="Info" duration="0">Here is some useful information.</wu-toast>
      <wu-toast variant="success" heading="Success" duration="0">Operation completed.</wu-toast>
      <wu-toast variant="warning" heading="Warning" duration="0">Approaching API rate limit.</wu-toast>
      <wu-toast variant="danger" heading="Error" duration="0">Failed to save changes.</wu-toast>
    </div>
  `},e={render:()=>r`
    <wu-toast-provider id="provider" position="top-right"></wu-toast-provider>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <wu-button size="sm" @wu-click=${()=>{document.querySelector("#provider").toast({heading:"Success!",message:"Item created.",variant:"success"})}}>Add Success</wu-button>
      <wu-button size="sm" variant="danger" @wu-click=${()=>{document.querySelector("#provider").toast({heading:"Error",message:"Something went wrong.",variant:"danger"})}}>Add Error</wu-button>
    </div>
  `};var o,s,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <wu-toast heading="File saved" variant="success" duration="0">
      Your changes have been saved successfully.
    </wu-toast>
  \`
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,u,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:360px">
      <wu-toast variant="default" duration="0">Default notification message</wu-toast>
      <wu-toast variant="info" heading="Info" duration="0">Here is some useful information.</wu-toast>
      <wu-toast variant="success" heading="Success" duration="0">Operation completed.</wu-toast>
      <wu-toast variant="warning" heading="Warning" duration="0">Approaching API rate limit.</wu-toast>
      <wu-toast variant="danger" heading="Error" duration="0">Failed to save changes.</wu-toast>
    </div>
  \`
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,p,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <wu-toast-provider id="provider" position="top-right"></wu-toast-provider>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <wu-button size="sm" @wu-click=\${() => {
    const p = document.querySelector<any>('#provider');
    p.toast({
      heading: 'Success!',
      message: 'Item created.',
      variant: 'success'
    });
  }}>Add Success</wu-button>
      <wu-button size="sm" variant="danger" @wu-click=\${() => {
    const p = document.querySelector<any>('#provider');
    p.toast({
      heading: 'Error',
      message: 'Something went wrong.',
      variant: 'danger'
    });
  }}>Add Error</wu-button>
    </div>
  \`
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const v=["Default","AllVariants","WithProvider"];export{a as AllVariants,t as Default,e as WithProvider,v as __namedExportsOrder,w as default};
