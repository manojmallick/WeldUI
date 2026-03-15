import{i as w,a as $,b as m}from"./lit-element-CWHijwDH.js";import{n as b,t as _}from"./property-CV4LBOm_.js";import{o as E}from"./style-map-CRZOmCei.js";const C=w`
  :host { display: block; }
  .grid {
    display: grid;
    gap: var(--wu-space-2);
    grid-template-columns: repeat(var(--wu-gallery-cols, 3), 1fr);
  }
  .thumb {
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    position: relative;
  }
  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--wu-duration-normal) var(--wu-ease-default);
  }
  .thumb:hover img { transform: scale(1.05); }
  .thumb:focus-visible { outline: 2px solid var(--wu-color-border-focus); }
`;var x=Object.defineProperty,O=Object.getOwnPropertyDescriptor,u=(e,r,s,a)=>{for(var t=a>1?void 0:a?O(r,s):r,c=e.length-1,i;c>=0;c--)(i=e[c])&&(t=(a?i(r,s,t):i(t))||t);return a&&t&&x(r,s,t),t};let o=class extends ${constructor(){super(...arguments),this.images=[],this.cols=3}_click(e){this.dispatchEvent(new CustomEvent("wu-image-click",{bubbles:!0,composed:!0,detail:{index:e}}))}render(){return m`
      <div class="grid" style=${E({"--wu-gallery-cols":String(this.cols)})}>
        ${this.images.map((e,r)=>m`
          <div class="thumb" tabindex="0" role="button" aria-label=${e.alt??`Image ${r+1}`} @click=${()=>this._click(r)} @keydown=${s=>{s.key==="Enter"&&this._click(r)}}>
            <img src=${e.src} alt=${e.alt??""} loading="lazy">
          </div>`)}
      </div>`}};o.styles=C;u([b({type:Array})],o.prototype,"images",2);u([b({type:Number})],o.prototype,"cols",2);o=u([_("wu-gallery")],o);const S={title:"Media/Gallery",component:"wu-gallery",tags:["autodocs"]},f=Array.from({length:9},(e,r)=>({src:`https://picsum.photos/seed/${r+10}/400/400`,alt:`Photo ${r+1}`,caption:`Caption for photo ${r+1}`})),l={render:()=>{const e=document.createElement("wu-gallery");return e.images=f,e.cols=3,e}},n={render:()=>{const e=document.createElement("wu-gallery");return e.images=f,e.cols=4,e}};var d,p,g;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-gallery') as any;
    el.images = images;
    el.cols = 3;
    return el;
  }
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,y,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-gallery') as any;
    el.images = images;
    el.cols = 4;
    return el;
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const A=["ThreeColumns","FourColumns"];export{n as FourColumns,l as ThreeColumns,A as __namedExportsOrder,S as default};
