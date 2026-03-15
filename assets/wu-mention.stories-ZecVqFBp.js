import{i as b,a as g,b as a}from"./lit-element-CWHijwDH.js";import{n as c,t as $}from"./property-CV4LBOm_.js";import{r as h}from"./state-kdcVxHgv.js";const E=b`
  :host { display: inline-block; position: relative; font-family: var(--wu-font-sans, system-ui); }
  .field {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
  }
  textarea, input {
    width: 100%;
    padding: var(--wu-space-2) var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans, system-ui);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-surface-raised);
    resize: vertical;
  }
  textarea:focus, input:focus {
    outline: none;
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }
  .mention-list {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    min-width: 200px;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    box-shadow: var(--wu-shadow-lg);
    z-index: 200;
    max-height: 240px;
    overflow-y: auto;
  }
  .mention-list[hidden] { display: none; }
  .mention-item {
    padding: var(--wu-space-2) var(--wu-space-3);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    transition: background var(--wu-duration-fast);
  }
  .mention-item:hover, .mention-item.active { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); }
  .avatar { width: 24px; height: 24px; border-radius: 50%; background: var(--wu-color-primary); color: white; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 600; flex-shrink: 0; }
`;var I=Object.defineProperty,D=Object.getOwnPropertyDescriptor,o=(e,t,r,n)=>{for(var i=n>1?void 0:n?D(t,r):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(i=(n?p(t,r,i):p(i))||i);return n&&i&&I(t,r,i),i};let s=class extends g{constructor(){super(...arguments),this.users=[],this.value="",this.placeholder="Type @ to mention someone...",this.multiline=!1,this._query="",this._showList=!1,this._activeIndex=0}get _filtered(){return this._query?this.users.filter(e=>e.name.toLowerCase().includes(this._query.toLowerCase())).slice(0,8):[]}_onInput(e){const t=e.target;this.value=t.value;const r=t.value.slice(0,t.selectionStart??t.value.length).match(/@(\w*)$/);r?(this._query=r[1],this._showList=!0,this._activeIndex=0):(this._showList=!1,this._query=""),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_onKey(e){if(!this._showList)return;const t=this._filtered;e.key==="ArrowDown"?(e.preventDefault(),this._activeIndex=(this._activeIndex+1)%t.length):e.key==="ArrowUp"?(e.preventDefault(),this._activeIndex=(this._activeIndex-1+t.length)%t.length):e.key==="Enter"&&t.length?(e.preventDefault(),this._selectUser(t[this._activeIndex])):e.key==="Escape"&&(this._showList=!1)}_selectUser(e){const t=this.shadowRoot.querySelector("textarea,input").selectionStart??this.value.length,r=this.value.slice(0,t).replace(/@\w*$/,`@${e.name} `);this.value=r+this.value.slice(t),this._showList=!1,this._query="",this.dispatchEvent(new CustomEvent("wu-mention",{bubbles:!0,composed:!0,detail:{user:e}})),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_initials(e){return e.split(" ").map(t=>t[0]).join("").slice(0,2).toUpperCase()}render(){const e=this._filtered,t=this.multiline?a`<textarea .value=${this.value} placeholder=${this.placeholder} rows="3" @input=${this._onInput} @keydown=${this._onKey}></textarea>`:a`<input type="text" .value=${this.value} placeholder=${this.placeholder} @input=${this._onInput} @keydown=${this._onKey}>`;return a`
      <div class="field">
        ${t}
        <div class="mention-list" ?hidden=${!this._showList||e.length===0} role="listbox">
          ${e.map((r,n)=>a`
            <div class="mention-item ${n===this._activeIndex?"active":""}" role="option" @mousedown=${i=>{i.preventDefault(),this._selectUser(r)}}>
              ${r.avatar?a`<img class="avatar" src=${r.avatar} alt="">`:a`<div class="avatar">${this._initials(r.name)}</div>`}
              ${r.name}
            </div>`)}
        </div>
      </div>`}};s.styles=E;o([c({type:Array})],s.prototype,"users",2);o([c()],s.prototype,"value",2);o([c()],s.prototype,"placeholder",2);o([c({type:Boolean})],s.prototype,"multiline",2);o([h()],s.prototype,"_query",2);o([h()],s.prototype,"_showList",2);o([h()],s.prototype,"_activeIndex",2);s=o([$("wu-mention")],s);const C={title:"Media/Mention",component:"wu-mention",tags:["autodocs"]},x=[{id:"1",name:"Alice Smith"},{id:"2",name:"Bob Jones"},{id:"3",name:"Charlie Brown"},{id:"4",name:"Diana Prince"}],l={render:()=>{const e=document.createElement("wu-mention");return e.users=x,e}},u={render:()=>{const e=document.createElement("wu-mention");return e.users=x,e.multiline=!0,e.placeholder="Write a comment, type @ to mention...",e}};var m,v,w;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-mention') as any;
    el.users = users;
    return el;
  }
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var f,y,_;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-mention') as any;
    el.users = users;
    el.multiline = true;
    el.placeholder = 'Write a comment, type @ to mention...';
    return el;
  }
}`,...(_=(y=u.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const S=["Default","Multiline"];export{l as Default,u as Multiline,S as __namedExportsOrder,C as default};
