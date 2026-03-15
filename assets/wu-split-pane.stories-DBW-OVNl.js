import{i as x,a as f,b as u}from"./lit-element-CWHijwDH.js";import{n as c,t as z}from"./property-CV4LBOm_.js";import{r as w}from"./state-kdcVxHgv.js";import{o as _}from"./style-map-CRZOmCei.js";const S=x`
  :host {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  :host([orientation="vertical"]) { flex-direction: column; }
  .pane { overflow: auto; }
  .pane-primary { flex: 0 0 auto; }
  .pane-secondary { flex: 1 1 0; min-width: 0; min-height: 0; }
  .divider {
    flex: 0 0 6px;
    background: var(--wu-color-border);
    cursor: col-resize;
    transition: background var(--wu-duration-fast);
    position: relative;
    z-index: 1;
  }
  :host([orientation="vertical"]) .divider { cursor: row-resize; }
  .divider:hover, .divider.active { background: var(--wu-color-primary); }
  .divider::after {
    content: '';
    position: absolute;
    inset: -4px;
  }
`;var P=Object.defineProperty,D=Object.getOwnPropertyDescriptor,n=(i,t,a,o)=>{for(var e=o>1?void 0:o?D(t,a):t,s=i.length-1,d;s>=0;s--)(d=i[s])&&(e=(o?d(t,a,e):d(e))||e);return o&&e&&P(t,a,e),e};let r=class extends f{constructor(){super(...arguments),this.orientation="horizontal",this.initialSize=250,this.minSize=80,this.maxSize=800,this._size=0,this._dragging=!1}connectedCallback(){super.connectedCallback(),this._size=this.initialSize}_onMouseDown(i){i.preventDefault(),this._dragging=!0;const t=this.orientation==="horizontal"?i.clientX:i.clientY,a=this._size,o=s=>{const d=(this.orientation==="horizontal"?s.clientX:s.clientY)-t;this._size=Math.min(this.maxSize,Math.max(this.minSize,a+d)),this.dispatchEvent(new CustomEvent("wu-resize",{bubbles:!0,composed:!0,detail:{position:this._size}}))},e=()=>{this._dragging=!1,document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",e)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",e)}render(){const t=this.orientation==="horizontal"?{width:`${this._size}px`}:{height:`${this._size}px`};return u`
      <div class="pane pane-primary" style=${_(t)}>
        <slot name="primary"></slot>
      </div>
      <div class="divider ${this._dragging?"active":""}" role="separator" aria-orientation=${this.orientation} @mousedown=${this._onMouseDown}></div>
      <div class="pane pane-secondary">
        <slot name="secondary"></slot>
      </div>`}};r.styles=S;n([c({reflect:!0})],r.prototype,"orientation",2);n([c({type:Number})],r.prototype,"initialSize",2);n([c({type:Number})],r.prototype,"minSize",2);n([c({type:Number})],r.prototype,"maxSize",2);n([w()],r.prototype,"_size",2);n([w()],r.prototype,"_dragging",2);r=n([z("wu-split-pane")],r);const L={title:"Layout/SplitPane",component:"wu-split-pane",tags:["autodocs"]},l={render:()=>u`
    <wu-split-pane style="height:300px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <div slot="primary" style="padding:16px;background:var(--wu-color-surface);height:100%">
        <strong>Sidebar</strong><br>Drag the divider →
      </div>
      <div slot="secondary" style="padding:16px;height:100%">
        <strong>Main Content</strong><br>This panel fills remaining space.
      </div>
    </wu-split-pane>`},p={render:()=>u`
    <wu-split-pane orientation="vertical" style="height:400px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <div slot="primary" style="padding:16px;background:var(--wu-color-surface)">
        <strong>Top Panel</strong><br>Drag the divider ↓
      </div>
      <div slot="secondary" style="padding:16px">
        <strong>Bottom Panel</strong>
      </div>
    </wu-split-pane>`};var v,g,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <wu-split-pane style="height:300px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <div slot="primary" style="padding:16px;background:var(--wu-color-surface);height:100%">
        <strong>Sidebar</strong><br>Drag the divider →
      </div>
      <div slot="secondary" style="padding:16px;height:100%">
        <strong>Main Content</strong><br>This panel fills remaining space.
      </div>
    </wu-split-pane>\`
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var m,y,b;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <wu-split-pane orientation="vertical" style="height:400px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <div slot="primary" style="padding:16px;background:var(--wu-color-surface)">
        <strong>Top Panel</strong><br>Drag the divider ↓
      </div>
      <div slot="secondary" style="padding:16px">
        <strong>Bottom Panel</strong>
      </div>
    </wu-split-pane>\`
}`,...(b=(y=p.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const O=["Horizontal","Vertical"];export{l as Horizontal,p as Vertical,O as __namedExportsOrder,L as default};
