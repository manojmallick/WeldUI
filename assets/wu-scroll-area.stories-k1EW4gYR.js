import{i as f,a as g,b as l}from"./lit-element-CWHijwDH.js";import{n as p,t as y}from"./property-CV4LBOm_.js";import{o as _}from"./style-map-CRZOmCei.js";const z=f`
  :host {
    display: block;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--wu-color-border-strong) transparent;
  }
  :host::-webkit-scrollbar { width: 6px; height: 6px; }
  :host::-webkit-scrollbar-track { background: transparent; }
  :host::-webkit-scrollbar-thumb {
    background: var(--wu-color-border-strong);
    border-radius: var(--wu-radius-full);
  }
  :host::-webkit-scrollbar-thumb:hover { background: var(--wu-color-text-disabled); }
  :host([orientation="vertical"]) { overflow-x: hidden; overflow-y: auto; }
  :host([orientation="horizontal"]) { overflow-x: auto; overflow-y: hidden; }
`;var H=Object.defineProperty,k=Object.getOwnPropertyDescriptor,n=(r,t,c,a)=>{for(var o=a>1?void 0:a?k(t,c):t,d=r.length-1,h;d>=0;d--)(h=r[d])&&(o=(a?h(t,c,o):h(o))||o);return a&&o&&H(t,c,o),o};let e=class extends g{constructor(){super(...arguments),this.orientation="both",this.maxHeight="",this.maxWidth=""}render(){const r={};return this.maxHeight&&(r.maxHeight=this.maxHeight),this.maxWidth&&(r.maxWidth=this.maxWidth),l`<div style=${_(r)}><slot></slot></div>`}};e.styles=z;n([p({reflect:!0})],e.prototype,"orientation",2);n([p({attribute:"max-height"})],e.prototype,"maxHeight",2);n([p({attribute:"max-width"})],e.prototype,"maxWidth",2);e=n([y("wu-scroll-area")],e);const P={title:"Layout/ScrollArea",component:"wu-scroll-area",tags:["autodocs"]},W=Array.from({length:20},(r,t)=>l`<p>Line ${t+1} — Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>`),s={render:()=>l`<wu-scroll-area max-height="200px" orientation="vertical">${W}</wu-scroll-area>`},i={render:()=>l`
    <wu-scroll-area max-width="300px" orientation="horizontal">
      <div style="width:800px;white-space:nowrap;padding:16px;background:var(--wu-color-surface);">
        A very wide piece of content that overflows horizontally for demonstration purposes.
      </div>
    </wu-scroll-area>`};var u,m,w;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:'{\n  render: () => html`<wu-scroll-area max-height="200px" orientation="vertical">${lorem}</wu-scroll-area>`\n}',...(w=(m=s.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var x,v,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <wu-scroll-area max-width="300px" orientation="horizontal">
      <div style="width:800px;white-space:nowrap;padding:16px;background:var(--wu-color-surface);">
        A very wide piece of content that overflows horizontally for demonstration purposes.
      </div>
    </wu-scroll-area>\`
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const S=["Vertical","Horizontal"];export{i as Horizontal,s as Vertical,S as __namedExportsOrder,P as default};
