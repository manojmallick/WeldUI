import{i as x,a as y,b as a}from"./lit-element-CWHijwDH.js";import{n as l,t as $}from"./property-CV4LBOm_.js";const k=x`
  :host {
    display: block;
    position: fixed;
    bottom: var(--wu-space-6);
    right: var(--wu-space-6);
    z-index: 300;
    font-family: var(--wu-font-sans);
  }
  .container { position: relative; display: flex; flex-direction: column; align-items: center; gap: var(--wu-space-2); }
  :host([direction="up"]) .container { flex-direction: column-reverse; }
  :host([direction="left"]) .container { flex-direction: row-reverse; align-items: center; }
  .fab {
    width: 56px;
    height: 56px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--wu-shadow-lg);
    transition: transform var(--wu-duration-normal) var(--wu-ease-default), background var(--wu-duration-fast);
    flex-shrink: 0;
  }
  .fab:hover { background: var(--wu-color-primary-hover); }
  :host([open]) .fab { transform: rotate(45deg); }
  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--wu-space-2);
    transition: opacity var(--wu-duration-normal), transform var(--wu-duration-normal) var(--wu-ease-default);
  }
  :host([direction="left"]) .actions { flex-direction: row; }
  .actions[hidden] { display: none; }
  .action-btn {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    padding: var(--wu-space-2) var(--wu-space-3);
    cursor: pointer;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    box-shadow: var(--wu-shadow-md);
    white-space: nowrap;
    transition: background var(--wu-duration-fast);
  }
  .action-btn:hover { background: var(--wu-color-surface); }
  .action-icon { font-size: 1rem; }
`;var _=Object.defineProperty,C=Object.getOwnPropertyDescriptor,i=(e,r,d,n)=>{for(var t=n>1?void 0:n?C(r,d):r,u=e.length-1,p;u>=0;u--)(p=e[u])&&(t=(n?p(r,d,t):p(t))||t);return n&&t&&_(r,d,t),t};let o=class extends y{constructor(){super(...arguments),this.open=!1,this.direction="up",this.icon="+",this.actions=[],this._outsideClick=e=>{!this.contains(e.target)&&!this.shadowRoot.contains(e.target)&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick)}_clickAction(e){this.open=!1,this.dispatchEvent(new CustomEvent("wu-action-click",{bubbles:!0,composed:!0,detail:{value:e.value}}))}render(){return a`
      <div class="container">
        <button class="fab" aria-label="Open actions" aria-expanded=${this.open} @click=${()=>{this.open=!this.open}}>
          ${this.icon}
        </button>
        <div class="actions" ?hidden=${!this.open} role="menu">
          ${this.actions.map(e=>a`
            <button class="action-btn" role="menuitem" @click=${()=>this._clickAction(e)}>
              ${e.icon?a`<span class="action-icon" aria-hidden="true">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>`)}
        </div>
      </div>`}};o.styles=k;i([l({type:Boolean,reflect:!0})],o.prototype,"open",2);i([l({reflect:!0})],o.prototype,"direction",2);i([l()],o.prototype,"icon",2);i([l({type:Array})],o.prototype,"actions",2);o=i([$("wu-speed-dial")],o);const E={title:"Navigation/SpeedDial",component:"wu-speed-dial",tags:["autodocs"]},g=[{label:"New Document",value:"doc",icon:"📄"},{label:"Upload File",value:"upload",icon:"📤"},{label:"New Folder",value:"folder",icon:"📁"}],s={render:()=>a`
    <div style="position:relative;height:250px">
      <wu-speed-dial .actions=${g} .open=${!0}></wu-speed-dial>
    </div>`},c={render:()=>a`
    <div style="position:relative;height:120px;">
      <wu-speed-dial direction="left" .actions=${g} .open=${!0}></wu-speed-dial>
    </div>`};var v,f,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <div style="position:relative;height:250px">
      <wu-speed-dial .actions=\${actions} .open=\${true}></wu-speed-dial>
    </div>\`
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,m,b;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="position:relative;height:120px;">
      <wu-speed-dial direction="left" .actions=\${actions} .open=\${true}></wu-speed-dial>
    </div>\`
}`,...(b=(m=c.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const z=["Default","LeftDirection"];export{s as Default,c as LeftDirection,z as __namedExportsOrder,E as default};
