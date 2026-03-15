import{i as g,a as w,b as c}from"./lit-element-CWHijwDH.js";import{n,t as f}from"./property-CV4LBOm_.js";import{r as y}from"./state-kdcVxHgv.js";import{e as _}from"./query-BApjzB0v.js";import{o as m}from"./style-map-CRZOmCei.js";const b=g`
  :host { display: block; overflow: hidden; position: relative; }
  .viewport {
    height: var(--wu-virtual-list-height, 400px);
    overflow-y: auto;
    position: relative;
  }
  .total { position: relative; }
  .window {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
`;var H=Object.defineProperty,$=Object.getOwnPropertyDescriptor,o=(t,e,l,s)=>{for(var i=s>1?void 0:s?$(e,l):e,a=t.length-1,p;a>=0;a--)(p=t[a])&&(i=(s?p(e,l,i):p(i))||i);return s&&i&&H(e,l,i),i};let r=class extends w{constructor(){super(...arguments),this.items=[],this.itemHeight=48,this.viewportHeight=400,this.renderItem=t=>c`<div style="height:${this.itemHeight}px;display:flex;align-items:center;padding:0 16px;border-bottom:1px solid var(--wu-color-border)">${String(t)}</div>`,this._scrollTop=0}_onScroll(){this._scrollTop=this._viewport.scrollTop;const t=Math.floor(this._scrollTop/this.itemHeight),e=Math.min(this.items.length,t+Math.ceil(this.viewportHeight/this.itemHeight)+2);this.dispatchEvent(new CustomEvent("wu-visible-change",{bubbles:!0,composed:!0,detail:{start:t,end:e}}))}render(){const t=this.items.length*this.itemHeight,e=Math.max(0,Math.floor(this._scrollTop/this.itemHeight)-2),l=Math.min(this.items.length,e+Math.ceil(this.viewportHeight/this.itemHeight)+4),s=e*this.itemHeight;return c`
      <div class="viewport" style=${m({height:`${this.viewportHeight}px`})} @scroll=${this._onScroll}>
        <div class="total" style=${m({height:`${t}px`})}>
          <div class="window" style=${m({transform:`translateY(${s}px)`})}>
            ${this.items.slice(e,l).map((i,a)=>this.renderItem(i,e+a))}
          </div>
        </div>
      </div>`}};r.styles=b;o([n({type:Array})],r.prototype,"items",2);o([n({type:Number,attribute:"item-height"})],r.prototype,"itemHeight",2);o([n({type:Number,attribute:"viewport-height"})],r.prototype,"viewportHeight",2);o([n()],r.prototype,"renderItem",2);o([y()],r.prototype,"_scrollTop",2);o([_(".viewport")],r.prototype,"_viewport",2);r=o([f("wu-virtual-list")],r);const I={title:"Media/VirtualList",component:"wu-virtual-list",tags:["autodocs"]},x=Array.from({length:1e4},(t,e)=>`Item ${e+1} — Data row`),h={render:()=>{const t=document.createElement("wu-virtual-list");return t.items=x,t.viewportHeight=400,t}};var u,v,d;h.parameters={...h.parameters,docs:{...(u=h.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-virtual-list') as any;
    el.items = items;
    el.viewportHeight = 400;
    return el;
  }
}`,...(d=(v=h.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};const P=["Default"];export{h as Default,P as __namedExportsOrder,I as default};
