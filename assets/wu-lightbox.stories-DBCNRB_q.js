import{i as m,a as g,b as d}from"./lit-element-CWHijwDH.js";import{n as p,t as v}from"./property-CV4LBOm_.js";const x=m`
  :host { display: contents; }
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .backdrop[hidden] { display: none; }
  .box {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: var(--wu-radius-lg);
  }
  .close {
    position: absolute;
    top: -48px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: var(--wu-space-2);
    border-radius: var(--wu-radius-full);
  }
  .close:hover { background: rgba(255,255,255,0.15); }
  .nav {
    display: flex;
    align-items: center;
    gap: var(--wu-space-4);
    margin-top: var(--wu-space-4);
  }
  .nav-btn {
    background: rgba(255,255,255,0.15);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-btn:hover { background: rgba(255,255,255,0.25); }
  .nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }
  .caption { color: rgba(255,255,255,0.7); font-family: var(--wu-font-sans, system-ui); font-size: var(--wu-text-sm); margin-top: var(--wu-space-2); }
  .counter { color: rgba(255,255,255,0.5); font-family: var(--wu-font-sans, system-ui); font-size: var(--wu-text-xs); }
`;var f=Object.defineProperty,w=Object.getOwnPropertyDescriptor,o=(e,t,r,i)=>{for(var s=i>1?void 0:i?w(t,r):t,c=e.length-1,l;c>=0;c--)(l=e[c])&&(s=(i?l(t,r,s):l(s))||s);return i&&s&&f(t,r,s),s};let n=class extends g{constructor(){super(...arguments),this.open=!1,this.images=[],this.index=0,this._onKey=e=>{this.open&&(e.key==="Escape"&&this.close(),e.key==="ArrowRight"&&this._next(),e.key==="ArrowLeft"&&this._prev())}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKey)}close(){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}))}_prev(){this.index>0&&this.index--}_next(){this.index<this.images.length-1&&this.index++}render(){const e=this.images[this.index];return d`
      <div class="backdrop" ?hidden=${!this.open} @click=${t=>{t.target===t.currentTarget&&this.close()}} role="dialog" aria-modal="true" aria-label="Image preview">
        <div class="box">
          <button class="close" aria-label="Close lightbox" @click=${this.close}>✕</button>
          ${e?d`<img src=${e.src} alt=${e.alt??""}>`:""}
          ${e!=null&&e.caption?d`<div class="caption">${e.caption}</div>`:""}
          <div class="nav">
            <button class="nav-btn" ?disabled=${this.index===0} aria-label="Previous image" @click=${this._prev}>‹</button>
            <span class="counter">${this.index+1} / ${this.images.length}</span>
            <button class="nav-btn" ?disabled=${this.index===this.images.length-1} aria-label="Next image" @click=${this._next}>›</button>
          </div>
        </div>
      </div>`}};n.styles=x;o([p({type:Boolean,reflect:!0})],n.prototype,"open",2);o([p({type:Array})],n.prototype,"images",2);o([p({type:Number})],n.prototype,"index",2);n=o([v("wu-lightbox")],n);const $={title:"Media/Lightbox",component:"wu-lightbox",tags:["autodocs"]},y=[{src:"https://picsum.photos/seed/a/800/600",alt:"Mountain",caption:"Mountain at dawn"},{src:"https://picsum.photos/seed/b/800/600",alt:"Ocean",caption:"Ocean sunset"},{src:"https://picsum.photos/seed/c/800/600",alt:"Forest",caption:"Forest path"}],a={render:()=>{const e=document.createElement("wu-lightbox");return e.images=y,e.open=!0,e}};var u,h,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-lightbox') as any;
    el.images = images;
    el.open = true;
    return el;
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const O=["Open"];export{a as Open,O as __namedExportsOrder,$ as default};
