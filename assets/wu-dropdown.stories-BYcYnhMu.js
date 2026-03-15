import{i as k,a as E,b as t}from"./lit-element-CWHijwDH.js";import{n as w,t as D}from"./property-CV4LBOm_.js";const C=k`
  :host { position: relative; display: inline-block; }
  .trigger-slot { display: inline-flex; }
  .dropdown-menu {
    position: absolute; z-index: 200; top: calc(100% + 4px); left: 0;
    min-width: 180px; background: var(--wu-color-surface-overlay);
    border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-lg);
    box-shadow: var(--wu-shadow-lg); padding: var(--wu-space-1);
  }
  .dropdown-menu[hidden] { display: none; }
  :host([placement="right"]) .dropdown-menu { left: auto; right: 0; }
  :host([placement="top"]) .dropdown-menu { top: auto; bottom: calc(100% + 4px); }
  .item { display: flex; align-items: center; gap: var(--wu-space-2); width: 100%; padding: var(--wu-space-2) var(--wu-space-3); border: none; background: none; border-radius: var(--wu-radius-md); cursor: pointer; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); text-align: left; }
  .item:hover { background: var(--wu-color-surface); }
  .item.danger { color: var(--wu-color-danger); }
  .item:disabled { opacity: 0.5; cursor: not-allowed; }
  .separator { height: 1px; background: var(--wu-color-border); margin: var(--wu-space-1) 0; }
`;var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,l=(e,n,u,a)=>{for(var o=a>1?void 0:a?P(n,u):n,p=e.length-1,c;p>=0;p--)(c=e[p])&&(o=(a?c(n,u,o):c(o))||o);return a&&o&&O(n,u,o),o};let r=class extends E{constructor(){super(...arguments),this.open=!1,this.placement="left",this.items=[],this._outsideClick=e=>{!this.contains(e.target)&&!this.shadowRoot.contains(e.target)&&(this.open=!1)},this._onKey=e=>{e.key==="Escape"&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick),document.removeEventListener("keydown",this._onKey)}_toggle(){this.open=!this.open}_select(e){e.disabled||e.separator||(this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{value:e.value}})),this.open=!1)}render(){return t`
      <div class="trigger-slot" @click=${this._toggle} role="button" aria-haspopup="true" aria-expanded=${this.open}>
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-menu" ?hidden=${!this.open} role="menu">
        ${this.items.length>0?this.items.map(e=>e.separator?t`<div class="separator" role="separator"></div>`:t`<button class="item ${e.danger?"danger":""}" role="menuitem" ?disabled=${e.disabled} @click=${()=>this._select(e)}>${e.icon?t`<span>${e.icon}</span>`:""}${e.label}</button>`):t`<slot></slot>`}
      </div>`}};r.styles=C;l([w({type:Boolean,reflect:!0})],r.prototype,"open",2);l([w({reflect:!0})],r.prototype,"placement",2);l([w({type:Array})],r.prototype,"items",2);r=l([D("wu-dropdown")],r);const K={title:"Navigation/Dropdown",component:"wu-dropdown",tags:["autodocs"]},_=[{label:"Edit",value:"edit",icon:"✏️"},{label:"Duplicate",value:"duplicate"},{separator:!0,label:"",value:""},{label:"Delete",value:"delete",danger:!0}],s={render:()=>t`
    <wu-dropdown .items=${_}>
      <wu-button slot="trigger">Actions ▾</wu-button>
    </wu-dropdown>`},i={render:()=>t`
    <wu-dropdown .items=${[{label:"View",value:"view"},{label:"Edit",value:"edit",disabled:!0}]} .open=${!0}>
      <wu-button slot="trigger">Options</wu-button>
    </wu-dropdown>`},d={render:()=>t`
    <div style="margin-top:200px">
      <wu-dropdown placement="top" .items=${_} .open=${!0}>
        <wu-button slot="trigger">Open Up ▴</wu-button>
      </wu-dropdown>
    </div>`};var m,b,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <wu-dropdown .items=\${items}>
      <wu-button slot="trigger">Actions ▾</wu-button>
    </wu-dropdown>\`
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,h,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <wu-dropdown .items=\${[{
    label: 'View',
    value: 'view'
  }, {
    label: 'Edit',
    value: 'edit',
    disabled: true
  }]} .open=\${true}>
      <wu-button slot="trigger">Options</wu-button>
    </wu-dropdown>\`
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,$,x;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="margin-top:200px">
      <wu-dropdown placement="top" .items=\${items} .open=\${true}>
        <wu-button slot="trigger">Open Up ▴</wu-button>
      </wu-dropdown>
    </div>\`
}`,...(x=($=d.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};const S=["Default","WithDisabled","TopPlacement"];export{s as Default,d as TopPlacement,i as WithDisabled,S as __namedExportsOrder,K as default};
