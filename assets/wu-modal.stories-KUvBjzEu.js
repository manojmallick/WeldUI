import{b as d}from"./lit-element-I0QAeI3K.js";const m={title:"Components/Modal",component:"wu-modal",tags:["autodocs"],argTypes:{open:{control:"boolean"},label:{control:"text"},hideClose:{control:"boolean"},closeOnBackdrop:{control:"boolean"}},parameters:{docs:{description:{component:"A dialog overlay built on the native `<dialog>` element. Implements a focus trap, scroll lock and Escape-to-close. Declare content with `header`, default and `footer` slots."}}}},o={render:()=>d`
    <wu-button id="open-btn" @wu-click=${()=>{document.querySelector("#demo-modal").open=!0}}>Open Modal</wu-button>
    <wu-modal id="demo-modal" label="Confirm Action">
      <p style="margin:0">Are you sure you want to delete this item? This action cannot be undone.</p>
      <div slot="footer">
        <wu-button variant="ghost" size="sm" @wu-click=${()=>{document.querySelector("#demo-modal").open=!1}}>Cancel</wu-button>
        <wu-button variant="danger" size="sm" @wu-click=${()=>{document.querySelector("#demo-modal").open=!1}}>Delete</wu-button>
      </div>
    </wu-modal>
  `},e={render:()=>d`
    <wu-button @wu-click=${()=>{document.querySelector("#info-modal").open=!0}}>Show Info</wu-button>
    <wu-modal id="info-modal" label="About WeldUI">
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        WeldUI is a framework-agnostic component library built on Web Components and Lit.
      </p>
    </wu-modal>
  `};var t,n,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <wu-button id="open-btn" @wu-click=\${() => {
    document.querySelector<any>('#demo-modal')!.open = true;
  }}>Open Modal</wu-button>
    <wu-modal id="demo-modal" label="Confirm Action">
      <p style="margin:0">Are you sure you want to delete this item? This action cannot be undone.</p>
      <div slot="footer">
        <wu-button variant="ghost" size="sm" @wu-click=\${() => {
    document.querySelector<any>('#demo-modal')!.open = false;
  }}>Cancel</wu-button>
        <wu-button variant="danger" size="sm" @wu-click=\${() => {
    document.querySelector<any>('#demo-modal')!.open = false;
  }}>Delete</wu-button>
      </div>
    </wu-modal>
  \`
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var r,l,u;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <wu-button @wu-click=\${() => {
    document.querySelector<any>('#info-modal')!.open = true;
  }}>Show Info</wu-button>
    <wu-modal id="info-modal" label="About WeldUI">
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        WeldUI is a framework-agnostic component library built on Web Components and Lit.
      </p>
    </wu-modal>
  \`
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const s=["Default","NoFooter"];export{o as Default,e as NoFooter,s as __namedExportsOrder,m as default};
