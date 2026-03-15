import{i as x,a as y,b as s}from"./lit-element-CWHijwDH.js";import{n as u,t as _}from"./property-CV4LBOm_.js";const $=x`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }
`,E=x`
  :host {
    display: block;
  }
  .row {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
    padding: var(--wu-space-1) var(--wu-space-2);
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    user-select: none;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }
  .row:hover { background: var(--wu-color-surface); }
  :host([selected]) .row { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); }
  .toggle {
    display: inline-flex;
    width: 16px;
    height: 16px;
    align-items: center;
    justify-content: center;
    font-size: var(--wu-text-xs);
    flex-shrink: 0;
    transition: transform var(--wu-duration-fast) var(--wu-ease-default);
  }
  :host([expanded]) .toggle { transform: rotate(90deg); }
  .spacer { width: 16px; flex-shrink: 0; }
  .label { flex: 1; }
  .children {
    padding-left: var(--wu-space-4);
    overflow: hidden;
  }
  .children[hidden] { display: none; }
`;var D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,a=(r,l,d,i)=>{for(var e=i>1?void 0:i?I(l,d):l,c=r.length-1,p;c>=0;c--)(p=r[c])&&(e=(i?p(l,d,e):p(e))||e);return i&&e&&D(l,d,e),e};let m=class extends y{render(){return s`<div role="tree"><slot></slot></div>`}};m.styles=$;m=a([_("wu-tree")],m);let t=class extends y{constructor(){super(...arguments),this.label="",this.expanded=!1,this.selected=!1,this.disabled=!1,this._hasChildren=!1}firstUpdated(){const r=this.shadowRoot.querySelector("slot");this._hasChildren=r.assignedElements().length>0,this.requestUpdate()}_toggle(r){r.stopPropagation(),this.expanded=!this.expanded}_select(){this.disabled||(this.selected=!0,this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{label:this.label}})))}render(){return s`
      <div class="row" role="treeitem" aria-expanded=${this._hasChildren?this.expanded:"false"} aria-selected=${this.selected} @click=${this._select}>
        ${this._hasChildren?s`<span class="toggle" @click=${this._toggle} aria-hidden="true">▶</span>`:s`<span class="spacer"></span>`}
        <span class="label">${this.label}</span>
      </div>
      <div class="children" ?hidden=${!this.expanded} role="group">
        <slot @slotchange=${()=>{this._hasChildren=this.shadowRoot.querySelector("slot").assignedElements().length>0,this.requestUpdate()}}></slot>
      </div>`}};t.styles=E;a([u({reflect:!0})],t.prototype,"label",2);a([u({type:Boolean,reflect:!0})],t.prototype,"expanded",2);a([u({type:Boolean,reflect:!0})],t.prototype,"selected",2);a([u({type:Boolean,reflect:!0})],t.prototype,"disabled",2);t=a([_("wu-tree-item")],t);const P={title:"Navigation/Tree",component:"wu-tree",tags:["autodocs"]},n={render:()=>s`
    <wu-tree>
      <wu-tree-item label="Documents" expanded>
        <wu-tree-item label="Reports">
          <wu-tree-item label="Q1 2025.pdf"></wu-tree-item>
          <wu-tree-item label="Q2 2025.pdf"></wu-tree-item>
        </wu-tree-item>
        <wu-tree-item label="Invoices">
          <wu-tree-item label="INV-001.pdf"></wu-tree-item>
        </wu-tree-item>
      </wu-tree-item>
      <wu-tree-item label="Images">
        <wu-tree-item label="logo.png"></wu-tree-item>
      </wu-tree-item>
      <wu-tree-item label="README.md"></wu-tree-item>
    </wu-tree>`},o={render:()=>s`
    <wu-tree>
      <wu-tree-item label="src" expanded>
        <wu-tree-item label="index.ts" selected></wu-tree-item>
        <wu-tree-item label="app.ts"></wu-tree-item>
      </wu-tree-item>
    </wu-tree>`};var w,h,b;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <wu-tree>
      <wu-tree-item label="Documents" expanded>
        <wu-tree-item label="Reports">
          <wu-tree-item label="Q1 2025.pdf"></wu-tree-item>
          <wu-tree-item label="Q2 2025.pdf"></wu-tree-item>
        </wu-tree-item>
        <wu-tree-item label="Invoices">
          <wu-tree-item label="INV-001.pdf"></wu-tree-item>
        </wu-tree-item>
      </wu-tree-item>
      <wu-tree-item label="Images">
        <wu-tree-item label="logo.png"></wu-tree-item>
      </wu-tree-item>
      <wu-tree-item label="README.md"></wu-tree-item>
    </wu-tree>\`
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,g,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <wu-tree>
      <wu-tree-item label="src" expanded>
        <wu-tree-item label="index.ts" selected></wu-tree-item>
        <wu-tree-item label="app.ts"></wu-tree-item>
      </wu-tree-item>
    </wu-tree>\`
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const R=["Default","PreSelected"];export{n as Default,o as PreSelected,R as __namedExportsOrder,P as default};
