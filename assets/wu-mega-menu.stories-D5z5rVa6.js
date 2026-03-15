import{i as v,a as f,b as c}from"./lit-element-CWHijwDH.js";import{n as g,t as h}from"./property-CV4LBOm_.js";const w=v`
  :host {
    display: block;
    position: relative;
  }
  .trigger-slot { display: inline-block; cursor: pointer; }
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 99;
  }
  .overlay {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    box-shadow: var(--wu-shadow-xl);
    z-index: 100;
    display: flex;
    gap: var(--wu-space-6);
    padding: var(--wu-space-6);
  }
  .overlay[hidden] { display: none; }
  .column {
    flex: 1;
    min-width: 160px;
  }
  .column-title {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--wu-color-text-secondary);
    margin-bottom: var(--wu-space-2);
  }
  ::slotted([slot^="col-"]) {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }
`;var b=Object.defineProperty,x=Object.getOwnPropertyDescriptor,m=(t,o,s,r)=>{for(var e=r>1?void 0:r?x(o,s):o,i=t.length-1,l;i>=0;i--)(l=t[i])&&(e=(r?l(o,s,e):l(e))||e);return r&&e&&b(o,s,e),e};let n=class extends f{constructor(){super(...arguments),this.open=!1,this._onKey=t=>{t.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKey)}_open(){this.open=!0,this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0}))}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}))}render(){return c`
      <div class="trigger-slot" @click=${()=>this.open?this._close():this._open()}>
        <slot name="trigger"></slot>
      </div>
      ${this.open?c`<div class="backdrop" @click=${this._close}></div>`:""}
      <div class="overlay" ?hidden=${!this.open} role="dialog" aria-label="Navigation menu">
        <slot></slot>
      </div>`}};n.styles=w;m([g({type:Boolean,reflect:!0})],n.prototype,"open",2);n=m([h("wu-mega-menu")],n);const E={title:"Navigation/MegaMenu",component:"wu-mega-menu",tags:["autodocs"]},a={render:()=>c`
    <wu-mega-menu .open=${!0}>
      <wu-button slot="trigger">Products ▾</wu-button>
      <div>
        <div class="column-title" style="font-size:0.75rem;font-weight:600;text-transform:uppercase;color:var(--wu-color-text-secondary);margin-bottom:8px;">Platform</div>
        <a href="#">Analytics</a>
        <a href="#">Automation</a>
        <a href="#">Integrations</a>
      </div>
      <div>
        <div class="column-title" style="font-size:0.75rem;font-weight:600;text-transform:uppercase;color:var(--wu-color-text-secondary);margin-bottom:8px;">Solutions</div>
        <a href="#">Enterprise</a>
        <a href="#">Startups</a>
        <a href="#">Developers</a>
      </div>
      <div>
        <div class="column-title" style="font-size:0.75rem;font-weight:600;text-transform:uppercase;color:var(--wu-color-text-secondary);margin-bottom:8px;">Resources</div>
        <a href="#">Documentation</a>
        <a href="#">Blog</a>
        <a href="#">Changelog</a>
      </div>
    </wu-mega-menu>`};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <wu-mega-menu .open=\${true}>
      <wu-button slot="trigger">Products ▾</wu-button>
      <div>
        <div class="column-title" style="font-size:0.75rem;font-weight:600;text-transform:uppercase;color:var(--wu-color-text-secondary);margin-bottom:8px;">Platform</div>
        <a href="#">Analytics</a>
        <a href="#">Automation</a>
        <a href="#">Integrations</a>
      </div>
      <div>
        <div class="column-title" style="font-size:0.75rem;font-weight:600;text-transform:uppercase;color:var(--wu-color-text-secondary);margin-bottom:8px;">Solutions</div>
        <a href="#">Enterprise</a>
        <a href="#">Startups</a>
        <a href="#">Developers</a>
      </div>
      <div>
        <div class="column-title" style="font-size:0.75rem;font-weight:600;text-transform:uppercase;color:var(--wu-color-text-secondary);margin-bottom:8px;">Resources</div>
        <a href="#">Documentation</a>
        <a href="#">Blog</a>
        <a href="#">Changelog</a>
      </div>
    </wu-mega-menu>\`
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,E as default};
