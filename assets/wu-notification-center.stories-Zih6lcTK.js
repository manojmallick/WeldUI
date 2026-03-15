import{i as h,a as g,b as o}from"./lit-element-CWHijwDH.js";import{n as x,t as y}from"./property-CV4LBOm_.js";import{r as k}from"./state-kdcVxHgv.js";const _=h`
  :host {
    display: block;
    position: relative;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
  }
  .trigger {
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    padding: var(--wu-space-2);
    border-radius: var(--wu-radius-full);
    color: var(--wu-color-text);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }
  .trigger:hover { background: var(--wu-color-surface); }
  .badge {
    position: absolute;
    top: 2px;
    right: 2px;
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-danger);
    color: white;
    font-size: 10px;
    font-weight: var(--wu-font-bold);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .panel {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: 360px;
    max-height: 480px;
    overflow-y: auto;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-xl);
    box-shadow: var(--wu-shadow-xl);
    z-index: 200;
  }
  .panel[hidden] { display: none; }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-color-border);
  }
  .header-title { font-weight: var(--wu-font-semibold); color: var(--wu-color-text); }
  .mark-all-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-primary);
    padding: 0;
  }
  .empty {
    padding: var(--wu-space-8) var(--wu-space-4);
    text-align: center;
    color: var(--wu-color-text-secondary);
  }
  .item {
    display: flex;
    gap: var(--wu-space-3);
    padding: var(--wu-space-3) var(--wu-space-4);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
    border-bottom: 1px solid var(--wu-color-border);
  }
  .item:last-child { border-bottom: none; }
  .item:hover { background: var(--wu-color-surface); }
  .item.unread { background: var(--wu-color-primary-subtle); }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-primary);
    margin-top: 6px;
    flex-shrink: 0;
  }
  .item.read .dot { background: transparent; }
  .item-title { font-weight: var(--wu-font-medium); color: var(--wu-color-text); }
  .item-body { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: 2px; }
  .item-time { font-size: var(--wu-text-xs); color: var(--wu-color-text-disabled); margin-top: 4px; }
`;var $=Object.defineProperty,C=Object.getOwnPropertyDescriptor,u=(t,e,c,a)=>{for(var r=a>1?void 0:a?C(e,c):e,d=t.length-1,l;d>=0;d--)(l=t[d])&&(r=(a?l(e,c,r):l(r))||r);return a&&r&&$(e,c,r),r};let i=class extends g{constructor(){super(...arguments),this.notifications=[],this._open=!1,this._outsideClick=t=>{!this.contains(t.target)&&!this.shadowRoot.contains(t.target)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick)}get _unreadCount(){return this.notifications.filter(t=>!t.read).length}_markAllRead(){this.notifications=this.notifications.map(t=>({...t,read:!0})),this.dispatchEvent(new CustomEvent("wu-mark-all-read",{bubbles:!0,composed:!0}))}_clickItem(t){t.read=!0,this.notifications=[...this.notifications],this.dispatchEvent(new CustomEvent("wu-notification-click",{bubbles:!0,composed:!0,detail:{id:t.id}}))}render(){const t=this._unreadCount;return o`
      <button class="trigger" aria-label="Notifications${t?`, ${t} unread`:""}" @click=${()=>{this._open=!this._open}}>
        🔔
        ${t>0?o`<span class="badge" aria-hidden="true">${t>99?"99+":t}</span>`:""}
      </button>
      <div class="panel" ?hidden=${!this._open} role="region" aria-label="Notifications">
        <div class="header">
          <span class="header-title">Notifications</span>
          ${t>0?o`<button class="mark-all-btn" @click=${this._markAllRead}>Mark all read</button>`:""}
        </div>
        ${this.notifications.length===0?o`<div class="empty">No notifications</div>`:this.notifications.map(e=>o`
            <div class="item ${e.read?"read":"unread"}" role="button" tabindex="0" @click=${()=>this._clickItem(e)}>
              <div class="dot"></div>
              <div>
                <div class="item-title">${e.title}</div>
                ${e.body?o`<div class="item-body">${e.body}</div>`:""}
                ${e.time?o`<div class="item-time">${e.time}</div>`:""}
              </div>
            </div>`)}
      </div>`}};i.styles=_;u([x({type:Array})],i.prototype,"notifications",2);u([k()],i.prototype,"_open",2);i=u([y("wu-notification-center")],i);const O={title:"Navigation/NotificationCenter",component:"wu-notification-center",tags:["autodocs"]},E=[{id:"1",title:"New team member",body:"Alice joined your workspace.",time:"2m ago",read:!1},{id:"2",title:"Comment on PR #42",body:"Bob left a review.",time:"15m ago",read:!1},{id:"3",title:"Deployment succeeded",body:"v2.1.0 is live.",time:"1h ago",read:!0}],n={render:()=>{const t=document.createElement("wu-notification-center");return t.notifications=E,t}},s={render:()=>o`<wu-notification-center></wu-notification-center>`};var p,m,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-notification-center') as any;
    el.notifications = notes;
    return el;
  }
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var f,b,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{\n  render: () => html`<wu-notification-center></wu-notification-center>`\n}",...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const P=["WithNotifications","Empty"];export{s as Empty,n as WithNotifications,P as __namedExportsOrder,O as default};
