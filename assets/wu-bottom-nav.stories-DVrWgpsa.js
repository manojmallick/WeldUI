import{i as w,a as h,b as m}from"./lit-element-CWHijwDH.js";import{n,t as f}from"./property-CV4LBOm_.js";const y=w`
  :host {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--wu-color-surface-raised);
    border-top: 1px solid var(--wu-color-border);
    z-index: 100;
    padding: var(--wu-space-1) 0;
    box-shadow: var(--wu-shadow-md);
  }
  ::slotted(wu-bottom-nav-item) {
    flex: 1;
  }
`,x=w`
  :host {
    display: block;
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    width: 100%;
    padding: var(--wu-space-2) var(--wu-space-1);
    background: none;
    border: none;
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    cursor: pointer;
    transition: color var(--wu-duration-fast) var(--wu-ease-default);
  }
  button:hover { color: var(--wu-color-primary); }
  :host([active]) button { color: var(--wu-color-primary); }
  .icon { font-size: 1.25rem; line-height: 1; }
  .label { line-height: 1; }
`;var g=Object.defineProperty,_=Object.getOwnPropertyDescriptor,r=(i,t,l,e)=>{for(var o=e>1?void 0:e?_(t,l):t,c=i.length-1,v;c>=0;c--)(v=i[c])&&(o=(e?v(t,l,o):v(o))||o);return e&&o&&g(t,l,o),o};let u=class extends h{constructor(){super(...arguments),this.value=""}_handleSelect(i){const t=i.detail.value;this.querySelectorAll("wu-bottom-nav-item").forEach(e=>{e.active=e.value===t}),this.value=t,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:t}}))}render(){return m`<nav @wu-item-click=${this._handleSelect}><slot></slot></nav>`}};u.styles=y;r([n()],u.prototype,"value",2);u=r([f("wu-bottom-nav")],u);let a=class extends h{constructor(){super(...arguments),this.value="",this.label="",this.icon="",this.active=!1}_click(){this.dispatchEvent(new CustomEvent("wu-item-click",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){return m`
      <button role="tab" aria-selected=${this.active} @click=${this._click}>
        <span class="icon" aria-hidden="true">${this.icon}</span>
        <span class="label">${this.label}</span>
      </button>`}};a.styles=x;r([n({reflect:!0})],a.prototype,"value",2);r([n()],a.prototype,"label",2);r([n()],a.prototype,"icon",2);r([n({type:Boolean,reflect:!0})],a.prototype,"active",2);a=r([f("wu-bottom-nav-item")],a);const E={title:"Navigation/BottomNav",component:"wu-bottom-nav",tags:["autodocs"]},s={render:()=>m`
    <div style="position:relative;height:120px;">
      <wu-bottom-nav>
        <wu-bottom-nav-item value="home" label="Home" icon="🏠" active></wu-bottom-nav-item>
        <wu-bottom-nav-item value="search" label="Search" icon="🔍"></wu-bottom-nav-item>
        <wu-bottom-nav-item value="cart" label="Cart" icon="🛒"></wu-bottom-nav-item>
        <wu-bottom-nav-item value="profile" label="Profile" icon="👤"></wu-bottom-nav-item>
      </wu-bottom-nav>
    </div>`};var b,p,d;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <div style="position:relative;height:120px;">
      <wu-bottom-nav>
        <wu-bottom-nav-item value="home" label="Home" icon="🏠" active></wu-bottom-nav-item>
        <wu-bottom-nav-item value="search" label="Search" icon="🔍"></wu-bottom-nav-item>
        <wu-bottom-nav-item value="cart" label="Cart" icon="🛒"></wu-bottom-nav-item>
        <wu-bottom-nav-item value="profile" label="Profile" icon="👤"></wu-bottom-nav-item>
      </wu-bottom-nav>
    </div>\`
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const P=["Default"];export{s as Default,P as __namedExportsOrder,E as default};
