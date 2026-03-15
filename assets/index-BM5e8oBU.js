import{f as $r,u as zr,A as v,E as Cr,i as c,a as d,b as l,w as Er}from"./lit-element-CWHijwDH.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or={attribute:!0,type:String,converter:zr,reflect:!1,hasChanged:$r},Pr=(e=Or,t,a)=>{const{kind:o,metadata:r}=a;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(a.name,e),o==="accessor"){const{name:i}=a;return{set(h){const f=t.get.call(this);t.set.call(this,h),this.requestUpdate(i,f,e,!0,h)},init(h){return h!==void 0&&this.C(i,void 0,e,h),h}}}if(o==="setter"){const{name:i}=a;return function(h){const f=this[i];t.call(this,h),this.requestUpdate(i,f,e,!0,h)}}throw Error("Unsupported decorator location: "+o)};function n(e){return(t,a)=>typeof a=="object"?Pr(e,t,a):((o,r,s)=>{const i=r.hasOwnProperty(s);return r.constructor.createProperty(s,o),i?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(e){return n({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jr=(e,t,a)=>(a.configurable=!0,a.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,a),a);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Se(e,t){return(a,o,r)=>{const s=i=>{var h;return((h=i.renderRoot)==null?void 0:h.querySelector(e))??null};return jr(a,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=e=>e??v;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dr={ATTRIBUTE:1},Sr=e=>(...t)=>({_$litDirective$:e,values:t});let Mr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,o){this._$Ct=t,this._$AM=a,this._$Ci=o}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr="important",Br=" !"+yr,ue=Sr(class extends Mr{constructor(e){var t;if(super(e),e.type!==Dr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const o=e[a];return o==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?a.removeProperty(o):a[o]=null);for(const o in t){const r=t[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(Br);o.includes("-")||s?a.setProperty(o,s?r.slice(0,-11):r,s?yr:""):a[o]=r}}return Cr}}),Ir=c`
  :host {
    display: inline-flex;

    /* ── Component Tokens ── */
    --wu-btn-bg:           var(--wu-color-primary);
    --wu-btn-bg-hover:     var(--wu-color-primary-hover);
    --wu-btn-color:        var(--wu-color-primary-fg);
    --wu-btn-border:       transparent;
    --wu-btn-radius:       var(--wu-radius-md);
    --wu-btn-font-size:    var(--wu-text-sm);
    --wu-btn-font-weight:  var(--wu-font-semibold);
    --wu-btn-padding-x:    var(--wu-space-4);
    --wu-btn-padding-y:    var(--wu-space-2);
    --wu-btn-height:       36px;
    --wu-btn-gap:          var(--wu-space-2);
    --wu-btn-transition:   all var(--wu-duration-normal) var(--wu-ease-default);
  }

  /* ── Sizes ── */
  :host([size="sm"]) {
    --wu-btn-height:      28px;
    --wu-btn-font-size:   var(--wu-text-xs);
    --wu-btn-padding-x:   var(--wu-space-3);
  }
  :host([size="lg"]) {
    --wu-btn-height:      44px;
    --wu-btn-font-size:   var(--wu-text-base);
    --wu-btn-padding-x:   var(--wu-space-6);
  }

  /* ── Variants ── */
  :host([variant="secondary"]) {
    --wu-btn-bg:        var(--wu-color-surface);
    --wu-btn-bg-hover:  var(--wu-color-surface-raised);
    --wu-btn-color:     var(--wu-color-text);
    --wu-btn-border:    var(--wu-color-border);
  }

  :host([variant="ghost"]) {
    --wu-btn-bg:        transparent;
    --wu-btn-bg-hover:  var(--wu-color-surface);
    --wu-btn-color:     var(--wu-color-text);
    --wu-btn-border:    transparent;
  }

  :host([variant="danger"]) {
    --wu-btn-bg:        var(--wu-color-danger);
    --wu-btn-bg-hover:  color-mix(in srgb, var(--wu-color-danger) 85%, black);
    --wu-btn-color:     white;
    --wu-btn-border:    transparent;
  }

  :host([variant="success"]) {
    --wu-btn-bg:        var(--wu-color-success);
    --wu-btn-bg-hover:  color-mix(in srgb, var(--wu-color-success) 85%, black);
    --wu-btn-color:     white;
    --wu-btn-border:    transparent;
  }

  /* ── Base button element ── */
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--wu-btn-gap);
    height: var(--wu-btn-height);
    padding: var(--wu-btn-padding-y) var(--wu-btn-padding-x);
    background: var(--wu-btn-bg);
    color: var(--wu-btn-color);
    border: 1px solid var(--wu-btn-border);
    border-radius: var(--wu-btn-radius);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-btn-font-size);
    font-weight: var(--wu-btn-font-weight);
    line-height: 1;
    cursor: pointer;
    transition: var(--wu-btn-transition);
    outline: none;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    box-sizing: border-box;
  }

  button:hover:not(:disabled) {
    background: var(--wu-btn-bg-hover);
  }

  button:focus-visible {
    box-shadow: var(--wu-focus-ring);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .spinner {
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    flex-shrink: 0;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;var Lr=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,Me=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ar(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Lr(t,a,r),r};let J=class extends d{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this.ariaLabel=null}_handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}render(){return l`
      <button
        part="base"
        type=${this.type}
        ?disabled=${this.disabled||this.loading}
        aria-disabled=${this.disabled||this.loading?"true":"false"}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${w(this.ariaLabel??void 0)}
        @click=${this._handleClick}
      >
        ${this.loading?l`<span class="spinner" aria-hidden="true"></span>`:""}
        <slot name="prefix"></slot>
        <span part="label" class="label"><slot></slot></span>
        <slot name="suffix"></slot>
      </button>
    `}};J.styles=Ir;Me([n({reflect:!0})],J.prototype,"variant",2);Me([n({reflect:!0})],J.prototype,"size",2);Me([n({type:Boolean,reflect:!0})],J.prototype,"disabled",2);Me([n({type:Boolean,reflect:!0})],J.prototype,"loading",2);Me([n()],J.prototype,"type",2);Me([n({attribute:"aria-label"})],J.prototype,"ariaLabel",2);J=Me([u("wu-button")],J);const Tr=c`
  :host {
    display: inline-flex;
    --wu-badge-bg:          var(--wu-color-surface);
    --wu-badge-color:       var(--wu-color-text);
    --wu-badge-border:      var(--wu-color-border);
    --wu-badge-font-size:   var(--wu-text-xs);
    --wu-badge-font-weight: var(--wu-font-semibold);
    --wu-badge-radius:      var(--wu-radius-full);
    --wu-badge-padding-x:   var(--wu-space-2);
    --wu-badge-padding-y:   2px;
  }

  :host([variant='primary']) {
    --wu-badge-bg:     var(--wu-color-primary);
    --wu-badge-color:  var(--wu-color-primary-fg);
    --wu-badge-border: transparent;
  }

  :host([variant='success']) {
    --wu-badge-bg:     var(--wu-color-success-subtle);
    --wu-badge-color:  var(--wu-color-success);
    --wu-badge-border: transparent;
  }

  :host([variant='warning']) {
    --wu-badge-bg:     var(--wu-color-warning-subtle);
    --wu-badge-color:  var(--wu-color-warning);
    --wu-badge-border: transparent;
  }

  :host([variant='danger']) {
    --wu-badge-bg:     var(--wu-color-danger-subtle);
    --wu-badge-color:  var(--wu-color-danger);
    --wu-badge-border: transparent;
  }

  :host([variant='outline']) {
    --wu-badge-bg:     transparent;
    --wu-badge-color:  var(--wu-color-text);
    --wu-badge-border: var(--wu-color-border-strong);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    background: var(--wu-badge-bg);
    color: var(--wu-badge-color);
    border: 1px solid var(--wu-badge-border);
    border-radius: var(--wu-badge-radius);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-badge-font-size);
    font-weight: var(--wu-badge-font-weight);
    line-height: 1;
    padding: var(--wu-badge-padding-y) var(--wu-badge-padding-x);
    white-space: nowrap;
  }
`;var Nr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,xr=(e,t,a,o)=>{for(var r=o>1?void 0:o?qr(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Nr(t,a,r),r};let Mt=class extends d{constructor(){super(...arguments),this.variant="default"}render(){return l`<span part="base" class="badge"><slot></slot></span>`}};Mt.styles=Tr;xr([n({reflect:!0})],Mt.prototype,"variant",2);Mt=xr([u("wu-badge")],Mt);const Kr=c`
  :host {
    display: inline-flex;
    --wu-avatar-size:    40px;
    --wu-avatar-radius:  var(--wu-radius-full);
    --wu-avatar-bg:      var(--wu-color-primary-subtle);
    --wu-avatar-color:   var(--wu-color-primary);
    --wu-avatar-font:    var(--wu-font-semibold);
  }

  :host([size='sm']) { --wu-avatar-size: 28px; }
  :host([size='lg']) { --wu-avatar-size: 56px; }
  :host([size='xl']) { --wu-avatar-size: 80px; }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--wu-avatar-size);
    height: var(--wu-avatar-size);
    border-radius: var(--wu-avatar-radius);
    background: var(--wu-avatar-bg);
    color: var(--wu-avatar-color);
    font-family: var(--wu-font-sans);
    font-weight: var(--wu-avatar-font);
    font-size: calc(var(--wu-avatar-size) * 0.38);
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
    flex-shrink: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;var Rr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,nt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Hr(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Rr(t,a,r),r};let ce=class extends d{constructor(){super(...arguments),this.size="md",this._imgError=!1}_handleImgError(){this._imgError=!0}render(){const e=this.src&&!this._imgError;return l`
      <div part="base" class="avatar" role="img" aria-label=${w(this.alt??this.initials)}>
        ${e?l`<img src=${this.src} alt=${w(this.alt)} @error=${this._handleImgError} />`:l`${this.initials??""}`}
      </div>
    `}};ce.styles=Kr;nt([n()],ce.prototype,"src",2);nt([n()],ce.prototype,"alt",2);nt([n()],ce.prototype,"initials",2);nt([n({reflect:!0})],ce.prototype,"size",2);nt([p()],ce.prototype,"_imgError",2);ce=nt([u("wu-avatar")],ce);const Fr=c`
  :host {
    display: block;
    --wu-input-bg:          var(--wu-color-surface-raised);
    --wu-input-color:       var(--wu-color-text);
    --wu-input-border:      var(--wu-color-border);
    --wu-input-border-focus:var(--wu-color-border-focus);
    --wu-input-placeholder: var(--wu-color-text-disabled);
    --wu-input-radius:      var(--wu-radius-md);
    --wu-input-font-size:   var(--wu-text-sm);
    --wu-input-height:      36px;
    --wu-input-padding-x:   var(--wu-space-3);
    --wu-input-padding-y:   var(--wu-space-2);
  }

  :host([size='sm']) { --wu-input-height: 28px; --wu-input-font-size: var(--wu-text-xs); }
  :host([size='lg']) { --wu-input-height: 44px; --wu-input-font-size: var(--wu-text-base); }

  :host([disabled]) { opacity: 0.5; }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .input-row {
    display: flex;
    align-items: center;
    background: var(--wu-input-bg);
    border: 1px solid var(--wu-input-border);
    border-radius: var(--wu-input-radius);
    height: var(--wu-input-height);
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default),
                box-shadow var(--wu-duration-fast) var(--wu-ease-default);
    overflow: hidden;
  }

  .input-row:focus-within {
    border-color: var(--wu-input-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    padding: var(--wu-input-padding-y) var(--wu-input-padding-x);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-input-font-size);
    color: var(--wu-input-color);
    height: 100%;
    width: 100%;
  }

  input::placeholder {
    color: var(--wu-input-placeholder);
  }

  .hint, .error {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .error {
    color: var(--wu-color-danger);
  }

  :host([invalid]) .input-row {
    border-color: var(--wu-color-danger);
  }
`;var Yr=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,L=(e,t,a,o)=>{for(var r=o>1?void 0:o?Vr(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Yr(t,a,r),r};let k=class extends d{constructor(){super(...arguments),this.type="text",this.value="",this.disabled=!1,this.required=!1,this.size="md"}_handleInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const e="input-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="input-row">
          <input
            part="input"
            id=${e}
            type=${this.type}
            .value=${this.value}
            placeholder=${w(this.placeholder)}
            name=${w(this.name)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-invalid=${this.error?"true":"false"}
            @input=${this._handleInput}
            @blur=${this._handleBlur}
          />
        </div>
        ${this.error?l`<span class="error" role="alert">${this.error}</span>`:""}
        ${this.hint&&!this.error?l`<span class="hint">${this.hint}</span>`:""}
      </div>
    `}};k.styles=Fr;L([n()],k.prototype,"type",2);L([n()],k.prototype,"value",2);L([n()],k.prototype,"placeholder",2);L([n()],k.prototype,"label",2);L([n()],k.prototype,"hint",2);L([n()],k.prototype,"error",2);L([n({type:Boolean,reflect:!0})],k.prototype,"disabled",2);L([n({type:Boolean})],k.prototype,"required",2);L([n({reflect:!0})],k.prototype,"size",2);L([n()],k.prototype,"name",2);k=L([u("wu-input")],k);const Ur=c`
  :host {
    display: block;
    --wu-textarea-bg:          var(--wu-color-surface-raised);
    --wu-textarea-color:       var(--wu-color-text);
    --wu-textarea-border:      var(--wu-color-border);
    --wu-textarea-border-focus:var(--wu-color-border-focus);
    --wu-textarea-placeholder: var(--wu-color-text-disabled);
    --wu-textarea-radius:      var(--wu-radius-md);
    --wu-textarea-font-size:   var(--wu-text-sm);
    --wu-textarea-padding:     var(--wu-space-3);
    --wu-textarea-min-height:  80px;
  }

  :host([disabled]) { opacity: 0.5; }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  textarea {
    background: var(--wu-textarea-bg);
    color: var(--wu-textarea-color);
    border: 1px solid var(--wu-textarea-border);
    border-radius: var(--wu-textarea-radius);
    padding: var(--wu-textarea-padding);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-textarea-font-size);
    min-height: var(--wu-textarea-min-height);
    width: 100%;
    box-sizing: border-box;
    outline: none;
    resize: vertical;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default),
                box-shadow var(--wu-duration-fast) var(--wu-ease-default);
    line-height: var(--wu-leading-normal);
  }

  textarea:focus {
    border-color: var(--wu-textarea-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  textarea::placeholder {
    color: var(--wu-textarea-placeholder);
  }

  .hint, .error {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .error { color: var(--wu-color-danger); }

  .char-count {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    text-align: right;
  }

  :host([invalid]) textarea {
    border-color: var(--wu-color-danger);
  }
`;var Xr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,j=(e,t,a,o)=>{for(var r=o>1?void 0:o?Wr(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Xr(t,a,r),r};let m=class extends d{constructor(){super(...arguments),this.value="",this.disabled=!1,this.required=!1,this.rows=4,this._charCount=0}connectedCallback(){super.connectedCallback(),this._charCount=this.value.length}_handleInput(e){this.value=e.target.value,this._charCount=this.value.length,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const e="textarea-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <textarea
          part="textarea"
          id=${e}
          rows=${this.rows}
          name=${w(this.name)}
          placeholder=${w(this.placeholder)}
          maxlength=${w(this.maxlength)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${this.error?"true":"false"}
          .value=${this.value}
          @input=${this._handleInput}
          @blur=${this._handleBlur}
        ></textarea>
        ${this.maxlength?l`<span class="char-count">${this._charCount} / ${this.maxlength}</span>`:""}
        ${this.error?l`<span class="error" role="alert">${this.error}</span>`:""}
        ${this.hint&&!this.error?l`<span class="hint">${this.hint}</span>`:""}
      </div>
    `}};m.styles=Ur;j([n()],m.prototype,"value",2);j([n()],m.prototype,"placeholder",2);j([n()],m.prototype,"label",2);j([n()],m.prototype,"hint",2);j([n()],m.prototype,"error",2);j([n({type:Boolean,reflect:!0})],m.prototype,"disabled",2);j([n({type:Boolean})],m.prototype,"required",2);j([n({type:Number})],m.prototype,"maxlength",2);j([n({type:Number})],m.prototype,"rows",2);j([n()],m.prototype,"name",2);j([p()],m.prototype,"_charCount",2);m=j([u("wu-textarea")],m);const Gr=c`
  :host {
    display: block;
    --wu-select-bg:          var(--wu-color-surface-raised);
    --wu-select-color:       var(--wu-color-text);
    --wu-select-border:      var(--wu-color-border);
    --wu-select-border-focus:var(--wu-color-border-focus);
    --wu-select-radius:      var(--wu-radius-md);
    --wu-select-font-size:   var(--wu-text-sm);
    --wu-select-height:      36px;
    --wu-select-padding-x:   var(--wu-space-3);
  }

  :host([size='sm']) { --wu-select-height: 28px; --wu-select-font-size: var(--wu-text-xs); }
  :host([size='lg']) { --wu-select-height: 44px; --wu-select-font-size: var(--wu-text-base); }
  :host([disabled]) { opacity: 0.5; }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .select-row {
    position: relative;
    display: flex;
    align-items: center;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: var(--wu-select-height);
    padding: 0 calc(var(--wu-select-padding-x) * 2.5) 0 var(--wu-select-padding-x);
    background: var(--wu-select-bg);
    color: var(--wu-select-color);
    border: 1px solid var(--wu-select-border);
    border-radius: var(--wu-select-radius);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-select-font-size);
    outline: none;
    cursor: pointer;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default),
                box-shadow var(--wu-duration-fast) var(--wu-ease-default);
  }

  select:focus {
    border-color: var(--wu-select-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .chevron {
    position: absolute;
    right: var(--wu-space-3);
    pointer-events: none;
    color: var(--wu-color-text-secondary);
    width: 16px;
    height: 16px;
  }

  .hint, .error {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .error { color: var(--wu-color-danger); }
`;var Jr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,A=(e,t,a,o)=>{for(var r=o>1?void 0:o?Zr(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Jr(t,a,r),r};let _=class extends d{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.required=!1,this.size="md"}_handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){const e="select-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="select-row">
          <select
            part="select"
            id=${e}
            name=${w(this.name)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-invalid=${this.error?"true":"false"}
            @change=${this._handleChange}
          >
            ${this.placeholder?l`<option value="" ?selected=${!this.value} disabled>${this.placeholder}</option>`:""}
            ${this.options.map(t=>l`
              <option value=${t.value} ?selected=${this.value===t.value} ?disabled=${t.disabled??!1}>
                ${t.label}
              </option>
            `)}
          </select>
          <svg class="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M4 6l4 4 4-4"/>
          </svg>
        </div>
        ${this.error?l`<span class="error" role="alert">${this.error}</span>`:""}
        ${this.hint&&!this.error?l`<span class="hint">${this.hint}</span>`:""}
      </div>
    `}};_.styles=Gr;A([n()],_.prototype,"value",2);A([n({type:Array})],_.prototype,"options",2);A([n()],_.prototype,"placeholder",2);A([n()],_.prototype,"label",2);A([n()],_.prototype,"hint",2);A([n()],_.prototype,"error",2);A([n({type:Boolean,reflect:!0})],_.prototype,"disabled",2);A([n({type:Boolean})],_.prototype,"required",2);A([n({reflect:!0})],_.prototype,"size",2);A([n()],_.prototype,"name",2);_=A([u("wu-select")],_);const Qr=c`
  :host {
    display: inline-flex;
    align-items: center;
    --wu-checkbox-size:         18px;
    --wu-checkbox-border:       var(--wu-color-border-strong);
    --wu-checkbox-bg:           var(--wu-color-surface-raised);
    --wu-checkbox-checked-bg:   var(--wu-color-primary);
    --wu-checkbox-checked-border: var(--wu-color-primary);
    --wu-checkbox-radius:       var(--wu-radius-sm);
    --wu-checkbox-gap:          var(--wu-space-2);
  }

  :host([disabled]) { opacity: 0.5; cursor: not-allowed; }

  .wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-checkbox-gap);
    cursor: pointer;
  }

  :host([disabled]) .wrapper { cursor: not-allowed; pointer-events: none; }

  input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    width: var(--wu-checkbox-size);
    height: var(--wu-checkbox-size);
    border: 2px solid var(--wu-checkbox-border);
    border-radius: var(--wu-checkbox-radius);
    background: var(--wu-checkbox-bg);
    cursor: pointer;
    flex-shrink: 0;
    position: relative;
    transition: background var(--wu-duration-fast) var(--wu-ease-default),
                border-color var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
  }

  input[type='checkbox']:checked,
  input[type='checkbox']:indeterminate {
    background: var(--wu-checkbox-checked-bg);
    border-color: var(--wu-checkbox-checked-border);
  }

  input[type='checkbox']:checked::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 5px;
    height: 9px;
    border: 2px solid white;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
  }

  input[type='checkbox']:indeterminate::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 5px;
    width: 8px;
    height: 2px;
    background: white;
    border-radius: 1px;
  }

  input[type='checkbox']:focus-visible {
    box-shadow: var(--wu-focus-ring);
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }
`;var ea=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,Be=(e,t,a,o)=>{for(var r=o>1?void 0:o?ta(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ea(t,a,r),r};let Z=class extends d{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on"}_handleChange(e){const t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.value}}))}updated(e){var t;if(e.has("indeterminate")){const a=(t=this.shadowRoot)==null?void 0:t.querySelector("input");a&&(a.indeterminate=this.indeterminate)}}render(){const e="checkbox-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        <input
          part="input"
          type="checkbox"
          id=${e}
          name=${this.name??""}
          value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          aria-checked=${this.indeterminate?"mixed":this.checked?"true":"false"}
          @change=${this._handleChange}
        />
        ${this.label?l`<label part="label" for=${e}>${this.label}</label>`:""}
      </div>
    `}};Z.styles=Qr;Be([n({type:Boolean,reflect:!0})],Z.prototype,"checked",2);Be([n({type:Boolean,reflect:!0})],Z.prototype,"indeterminate",2);Be([n({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);Be([n()],Z.prototype,"label",2);Be([n()],Z.prototype,"name",2);Be([n()],Z.prototype,"value",2);Z=Be([u("wu-checkbox")],Z);const ra=c`
  :host {
    display: inline-flex;
    align-items: center;
    --wu-toggle-width:        44px;
    --wu-toggle-height:       24px;
    --wu-toggle-thumb-size:   18px;
    --wu-toggle-off-bg:       var(--wu-color-border-strong);
    --wu-toggle-on-bg:        var(--wu-color-primary);
    --wu-toggle-thumb-color:  white;
    --wu-toggle-gap:          var(--wu-space-2);
    --wu-toggle-radius:       var(--wu-radius-full);
  }

  :host([size='sm']) {
    --wu-toggle-width: 32px;
    --wu-toggle-height: 18px;
    --wu-toggle-thumb-size: 13px;
  }

  :host([size='lg']) {
    --wu-toggle-width: 56px;
    --wu-toggle-height: 30px;
    --wu-toggle-thumb-size: 23px;
  }

  :host([disabled]) { opacity: 0.5; }

  .wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-toggle-gap);
    cursor: pointer;
  }

  :host([disabled]) .wrapper { cursor: not-allowed; pointer-events: none; }

  /* visually hidden native input for accessibility */
  input[type='checkbox'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .track {
    position: relative;
    width: var(--wu-toggle-width);
    height: var(--wu-toggle-height);
    background: var(--wu-toggle-off-bg);
    border-radius: var(--wu-toggle-radius);
    transition: background var(--wu-duration-normal) var(--wu-ease-default);
    flex-shrink: 0;
  }

  .track.on {
    background: var(--wu-toggle-on-bg);
  }

  .thumb {
    position: absolute;
    top: calc((var(--wu-toggle-height) - var(--wu-toggle-thumb-size)) / 2);
    left: calc((var(--wu-toggle-height) - var(--wu-toggle-thumb-size)) / 2);
    width: var(--wu-toggle-thumb-size);
    height: var(--wu-toggle-thumb-size);
    background: var(--wu-toggle-thumb-color);
    border-radius: 50%;
    transition: transform var(--wu-duration-normal) var(--wu-ease-default);
    box-shadow: var(--wu-shadow-sm);
  }

  .track.on .thumb {
    transform: translateX(calc(var(--wu-toggle-width) - var(--wu-toggle-thumb-size) - (var(--wu-toggle-height) - var(--wu-toggle-thumb-size))));
  }

  input[type='checkbox']:focus-visible ~ .track {
    box-shadow: var(--wu-focus-ring);
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }
`;var aa=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,Ie=(e,t,a,o)=>{for(var r=o>1?void 0:o?oa(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&aa(t,a,r),r};let Q=class extends d{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.labelPosition="end",this.size="md"}_handleChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked}}))}render(){const e="toggle-"+(this.name??Math.random().toString(36).slice(2)),t=this.label?l`<label part="label" for=${e}>${this.label}</label>`:"";return l`
      <div part="base" class="wrapper">
        ${this.labelPosition==="start"?t:""}
        <input
          type="checkbox"
          id=${e}
          name=${this.name??""}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @change=${this._handleChange}
        />
        <div part="track" class="track ${this.checked?"on":""}">
          <div part="thumb" class="thumb"></div>
        </div>
        ${this.labelPosition==="end"?t:""}
      </div>
    `}};Q.styles=ra;Ie([n({type:Boolean,reflect:!0})],Q.prototype,"checked",2);Ie([n({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);Ie([n()],Q.prototype,"label",2);Ie([n({attribute:"label-position"})],Q.prototype,"labelPosition",2);Ie([n({reflect:!0})],Q.prototype,"size",2);Ie([n()],Q.prototype,"name",2);Q=Ie([u("wu-toggle")],Q);const sa=c`
  :host {
    display: block;

    --wu-card-bg:          var(--wu-color-surface-raised);
    --wu-card-border:      var(--wu-color-border);
    --wu-card-radius:      var(--wu-radius-lg);
    --wu-card-shadow:      var(--wu-shadow-sm);
    --wu-card-shadow-hover:var(--wu-shadow-md);
    --wu-card-padding:     var(--wu-space-6);
    --wu-card-gap:         var(--wu-space-4);
    --wu-card-transition:  box-shadow var(--wu-duration-normal) var(--wu-ease-default);
  }

  .card {
    display: flex;
    flex-direction: column;
    background: var(--wu-card-bg);
    border: 1px solid var(--wu-card-border);
    border-radius: var(--wu-card-radius);
    box-shadow: var(--wu-card-shadow);
    overflow: hidden;
    transition: var(--wu-card-transition);
  }

  :host([interactive]) .card {
    cursor: pointer;
  }

  :host([interactive]) .card:hover {
    box-shadow: var(--wu-card-shadow-hover);
  }

  :host([interactive]) .card:focus-visible {
    outline: none;
    box-shadow: var(--wu-card-shadow-hover), var(--wu-focus-ring);
  }

  .header {
    padding: var(--wu-card-padding);
    padding-bottom: var(--wu-space-4);
    border-bottom: 1px solid var(--wu-card-border);
  }

  .header:not(:has(slot[name="header"] > *)) {
    display: none;
  }

  ::slotted([slot="header"]:empty) {
    display: none;
  }

  .body {
    padding: var(--wu-card-padding);
    flex: 1;
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    line-height: var(--wu-leading-normal);
  }

  .footer {
    padding: var(--wu-card-padding);
    padding-top: var(--wu-space-4);
    border-top: 1px solid var(--wu-card-border);
  }

  .footer:not(:has(slot[name="footer"] > *)) {
    display: none;
  }

  /* When no header slot content — remove header border */
  .no-header .header {
    display: none;
  }

  /* When no footer slot content — remove footer border */
  .no-footer .footer {
    display: none;
  }
`;var ia=Object.defineProperty,na=Object.getOwnPropertyDescriptor,Kt=(e,t,a,o)=>{for(var r=o>1?void 0:o?na(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ia(t,a,r),r};let Fe=class extends d{constructor(){super(...arguments),this.interactive=!1,this._hasHeader=!1,this._hasFooter=!1}_handleClick(e){this.interactive&&this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}_onHeaderSlotChange(e){const t=e.target;this._hasHeader=t.assignedNodes({flatten:!0}).length>0}_onFooterSlotChange(e){const t=e.target;this._hasFooter=t.assignedNodes({flatten:!0}).length>0}render(){return l`
      <div
        part="base"
        class="card ${this._hasHeader?"":"no-header"} ${this._hasFooter?"":"no-footer"}"
        tabindex=${this.interactive?"0":"-1"}
        role=${this.interactive?"button":"article"}
        @click=${this._handleClick}
        @keydown=${e=>{this.interactive&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleClick(e))}}
      >
        <div part="header" class="header">
          <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        </div>
        <div part="body" class="body">
          <slot></slot>
        </div>
        <div part="footer" class="footer">
          <slot name="footer" @slotchange=${this._onFooterSlotChange}></slot>
        </div>
      </div>
    `}};Fe.styles=sa;Kt([n({type:Boolean,reflect:!0})],Fe.prototype,"interactive",2);Kt([p()],Fe.prototype,"_hasHeader",2);Kt([p()],Fe.prototype,"_hasFooter",2);Fe=Kt([u("wu-card")],Fe);const la=c`
  :host {
    display: contents;

    --wu-modal-bg:          var(--wu-color-surface-overlay);
    --wu-modal-border:      var(--wu-color-border);
    --wu-modal-radius:      var(--wu-radius-xl);
    --wu-modal-shadow:      var(--wu-shadow-xl);
    --wu-modal-padding:     var(--wu-space-6);
    --wu-modal-width:       560px;
    --wu-modal-backdrop:    rgba(0, 0, 0, 0.5);
  }

  dialog {
    padding: 0;
    border: none;
    border-radius: var(--wu-modal-radius);
    background: var(--wu-modal-bg);
    box-shadow: var(--wu-modal-shadow);
    width: min(var(--wu-modal-width), calc(100vw - 2rem));
    max-height: calc(100dvh - 2rem);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  dialog::backdrop {
    background: var(--wu-modal-backdrop);
    backdrop-filter: blur(2px);
    animation: fade-in var(--wu-duration-normal) var(--wu-ease-default);
  }

  dialog[open] {
    animation: slide-up var(--wu-duration-normal) var(--wu-ease-default);
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes slide-up {
    from { opacity: 0; transform: translateY(8px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-modal-padding);
    padding-bottom: var(--wu-space-4);
    border-bottom: 1px solid var(--wu-modal-border);
    gap: var(--wu-space-4);
  }

  .modal-title {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-tight);
    flex: 1;
    margin: 0;
  }

  .close-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: var(--wu-radius-md);
    background: transparent;
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    font-size: 1.25rem;
    transition: background var(--wu-duration-fast) var(--wu-ease-default),
                color var(--wu-duration-fast) var(--wu-ease-default);
    flex-shrink: 0;
  }

  .close-btn:hover {
    background: var(--wu-color-surface);
    color: var(--wu-color-text);
  }

  .close-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .modal-body {
    padding: var(--wu-modal-padding);
    overflow-y: auto;
    flex: 1;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }

  .modal-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--wu-space-3);
    padding: var(--wu-space-4) var(--wu-modal-padding);
    border-top: 1px solid var(--wu-modal-border);
  }

  .modal-footer:not(:has(slot[name="footer"] > *)) {
    display: none;
  }

  .no-footer .modal-footer {
    display: none;
  }
`;var da=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,Le=(e,t,a,o)=>{for(var r=o>1?void 0:o?ua(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&da(t,a,r),r};let ee=class extends d{constructor(){super(...arguments),this.open=!1,this.label="",this.closeOnBackdrop=!0,this.hideClose=!1,this._hasFooter=!1,this._previouslyFocused=null}updated(e){e.has("open")&&(this.open?this._openDialog():this._closeDialog("api"))}_openDialog(){this._dialog&&(this._previouslyFocused=document.activeElement,this._dialog.showModal(),document.body.style.overflow="hidden",this._dialog.focus(),this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0})))}_closeDialog(e){var t,a;(t=this._dialog)!=null&&t.open&&(this._dialog.close(),document.body.style.overflow="",(a=this._previouslyFocused)==null||a.focus(),this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0,detail:{reason:e}})))}_onBackdropClick(e){this.closeOnBackdrop&&e.target===this._dialog&&this._closeDialog("backdrop")}_onKeydown(e){e.key==="Escape"&&(e.preventDefault(),this._closeDialog("escape")),e.key==="Tab"&&this._trapFocus(e)}_trapFocus(e){const t=Array.from(this._dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(r=>!r.hasAttribute("disabled")),a=t[0],o=t[t.length-1];a&&(e.shiftKey&&document.activeElement===a?(e.preventDefault(),o.focus()):!e.shiftKey&&document.activeElement===o&&(e.preventDefault(),a.focus()))}_onFooterSlotChange(e){const t=e.target;this._hasFooter=t.assignedNodes({flatten:!0}).length>0}render(){return l`
      <dialog
        part="base"
        aria-labelledby="modal-title"
        aria-modal="true"
        @click=${this._onBackdropClick}
        @keydown=${this._onKeydown}
      >
        <div part="header" class="modal-header">
          <h2 id="modal-title" class="modal-title">${this.label}</h2>
          ${this.hideClose?"":l`
            <button
              class="close-btn"
              aria-label="Close modal"
              @click=${()=>this._closeDialog("button")}
            >✕</button>
          `}
        </div>
        <div part="body" class="modal-body">
          <slot></slot>
        </div>
        <div part="footer" class="${this._hasFooter?"modal-footer":"modal-footer no-footer"}">
          <slot name="footer" @slotchange=${this._onFooterSlotChange}></slot>
        </div>
      </dialog>
    `}};ee.styles=la;Le([n({type:Boolean,reflect:!0})],ee.prototype,"open",2);Le([n()],ee.prototype,"label",2);Le([n({type:Boolean,attribute:"close-on-backdrop"})],ee.prototype,"closeOnBackdrop",2);Le([n({type:Boolean,attribute:"hide-close"})],ee.prototype,"hideClose",2);Le([p()],ee.prototype,"_hasFooter",2);Le([Se("dialog")],ee.prototype,"_dialog",2);ee=Le([u("wu-modal")],ee);const ca=c`
  :host {
    display: block;

    --wu-alert-bg:          var(--wu-color-info-subtle);
    --wu-alert-border:      var(--wu-color-info);
    --wu-alert-color:       var(--wu-color-info);
    --wu-alert-radius:      var(--wu-radius-md);
    --wu-alert-padding-x:   var(--wu-space-4);
    --wu-alert-padding-y:   var(--wu-space-3);
    --wu-alert-font-size:   var(--wu-text-sm);
  }

  :host([variant="success"]) {
    --wu-alert-bg:     var(--wu-color-success-subtle);
    --wu-alert-border: var(--wu-color-success);
    --wu-alert-color:  var(--wu-color-success);
  }

  :host([variant="warning"]) {
    --wu-alert-bg:     var(--wu-color-warning-subtle);
    --wu-alert-border: var(--wu-color-warning);
    --wu-alert-color:  var(--wu-color-warning);
  }

  :host([variant="danger"]) {
    --wu-alert-bg:     var(--wu-color-danger-subtle);
    --wu-alert-border: var(--wu-color-danger);
    --wu-alert-color:  var(--wu-color-danger);
  }

  :host([variant="neutral"]) {
    --wu-alert-bg:     var(--wu-color-surface);
    --wu-alert-border: var(--wu-color-border);
    --wu-alert-color:  var(--wu-color-text-secondary);
  }

  .alert {
    display: flex;
    align-items: flex-start;
    gap: var(--wu-space-3);
    padding: var(--wu-alert-padding-y) var(--wu-alert-padding-x);
    background: var(--wu-alert-bg);
    border: 1px solid var(--wu-alert-border);
    border-left-width: 4px;
    border-radius: var(--wu-alert-radius);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-alert-font-size);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    color: var(--wu-alert-color);
    margin-top: 1px;
    font-size: 1rem;
  }

  .content {
    flex: 1;
  }

  ::slotted([slot="title"]) {
    display: block;
    font-weight: var(--wu-font-semibold);
    color: var(--wu-alert-color);
    margin-bottom: var(--wu-space-1);
  }

  .dismiss-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    border-radius: var(--wu-radius-sm);
    background: transparent;
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    font-size: 1rem;
    flex-shrink: 0;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
    margin-left: auto;
  }

  .dismiss-btn:hover {
    background: color-mix(in srgb, var(--wu-alert-border) 15%, transparent);
  }

  .dismiss-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }
`;var pa=Object.defineProperty,ha=Object.getOwnPropertyDescriptor,lr=(e,t,a,o)=>{for(var r=o>1?void 0:o?ha(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&pa(t,a,r),r};const va={info:"ℹ",success:"✓",warning:"⚠",danger:"✕",neutral:"•"};let bt=class extends d{constructor(){super(...arguments),this.variant="info",this.dismissible=!1}_handleDismiss(){this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0})),this.remove()}render(){return l`
      <div part="base" class="alert" role="alert" aria-live="polite">
        <span part="icon" class="icon" aria-hidden="true">
          <slot name="icon">${va[this.variant]}</slot>
        </span>
        <div part="content" class="content">
          <slot name="title"></slot>
          <slot></slot>
        </div>
        ${this.dismissible?l`
          <button class="dismiss-btn" aria-label="Dismiss" @click=${this._handleDismiss}>✕</button>
        `:""}
      </div>
    `}};bt.styles=ca;lr([n({reflect:!0})],bt.prototype,"variant",2);lr([n({type:Boolean})],bt.prototype,"dismissible",2);bt=lr([u("wu-alert")],bt);const wa=c`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    --wu-spinner-size:   24px;
    --wu-spinner-color:  var(--wu-color-primary);
    --wu-spinner-track:  var(--wu-color-border);
    --wu-spinner-thickness: 2px;
    --wu-spinner-speed:  0.7s;
  }

  :host([size="sm"]) { --wu-spinner-size: 16px; }
  :host([size="md"]) { --wu-spinner-size: 24px; }
  :host([size="lg"]) { --wu-spinner-size: 40px; }

  .spinner {
    width: var(--wu-spinner-size);
    height: var(--wu-spinner-size);
    border: var(--wu-spinner-thickness) solid var(--wu-spinner-track);
    border-top-color: var(--wu-spinner-color);
    border-radius: 50%;
    animation: spin var(--wu-spinner-speed) linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
`;var ba=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,dr=(e,t,a,o)=>{for(var r=o>1?void 0:o?ga(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ba(t,a,r),r};let gt=class extends d{constructor(){super(...arguments),this.size="md",this.label="Loading…"}render(){return l`
      <span role="status" aria-label=${this.label}>
        <span class="spinner" aria-hidden="true"></span>
        <span class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">${this.label}</span>
      </span>
    `}};gt.styles=wa;dr([n({reflect:!0})],gt.prototype,"size",2);dr([n()],gt.prototype,"label",2);gt=dr([u("wu-spinner")],gt);const fa=c`
  :host {
    display: block;

    --wu-progress-height:     8px;
    --wu-progress-radius:     var(--wu-radius-full);
    --wu-progress-track:      var(--wu-color-border);
    --wu-progress-fill:       var(--wu-color-primary);
    --wu-progress-transition: width var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([size="sm"]) { --wu-progress-height: 4px; }
  :host([size="lg"]) { --wu-progress-height: 12px; }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
    font-family: var(--wu-font-sans);
  }

  .labels {
    display: flex;
    justify-content: space-between;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .track {
    width: 100%;
    height: var(--wu-progress-height);
    background: var(--wu-progress-track);
    border-radius: var(--wu-progress-radius);
    overflow: hidden;
  }

  .fill {
    height: 100%;
    background: var(--wu-progress-fill);
    border-radius: var(--wu-progress-radius);
    transition: var(--wu-progress-transition);
    transform-origin: left;
  }

  /* Indeterminate */
  :host([indeterminate]) .fill {
    width: 40% !important;
    animation: indeterminate 1.4s ease-in-out infinite;
  }

  @keyframes indeterminate {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(300%); }
  }
`;var ma=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,ge=(e,t,a,o)=>{for(var r=o>1?void 0:o?ya(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ma(t,a,r),r};let K=class extends d{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.indeterminate=!1,this.showLabel=!1,this.size="md",this.label=""}get _pct(){if(this.indeterminate)return 0;const e=Math.min(Math.max(this.value,this.min),this.max);return Math.round((e-this.min)/(this.max-this.min)*100)}render(){return l`
      <div class="wrapper">
        ${this.label||this.showLabel?l`
          <div class="labels">
            <span>${this.label}</span>
            ${this.showLabel&&!this.indeterminate?l`<span>${this._pct}%</span>`:""}
          </div>
        `:""}
        <div
          class="track"
          role="progressbar"
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this.indeterminate?"undefined":this._pct}
          aria-label=${this.label||"Progress"}
        >
          <div class="fill" style="width:${this._pct}%"></div>
        </div>
      </div>
    `}};K.styles=fa;ge([n({type:Number})],K.prototype,"value",2);ge([n({type:Number})],K.prototype,"min",2);ge([n({type:Number})],K.prototype,"max",2);ge([n({type:Boolean,reflect:!0})],K.prototype,"indeterminate",2);ge([n({type:Boolean})],K.prototype,"showLabel",2);ge([n({reflect:!0})],K.prototype,"size",2);ge([n()],K.prototype,"label",2);K=ge([u("wu-progress")],K);const xa=c`
  :host {
    display: block;

    --wu-skeleton-color:    var(--wu-color-surface);
    --wu-skeleton-shimmer:  var(--wu-color-border);
    --wu-skeleton-radius:   var(--wu-radius-md);
    --wu-skeleton-speed:    1.5s;
  }

  .skeleton {
    background: linear-gradient(
      90deg,
      var(--wu-skeleton-color) 25%,
      var(--wu-skeleton-shimmer) 50%,
      var(--wu-skeleton-color) 75%
    );
    background-size: 200% 100%;
    animation: shimmer var(--wu-skeleton-speed) ease-in-out infinite;
    border-radius: var(--wu-skeleton-radius);
  }

  :host([variant="text"]) .skeleton {
    height: 1em;
    border-radius: var(--wu-radius-sm);
  }

  :host([variant="circle"]) .skeleton {
    border-radius: 50%;
    aspect-ratio: 1;
  }

  :host([variant="rect"]) .skeleton {
    border-radius: var(--wu-skeleton-radius);
  }

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;var ka=Object.defineProperty,_a=Object.getOwnPropertyDescriptor,Rt=(e,t,a,o)=>{for(var r=o>1?void 0:o?_a(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ka(t,a,r),r};let Ye=class extends d{constructor(){super(...arguments),this.variant="text",this.width="100%",this.height=""}render(){const e={width:this.width};return this.height&&(e.height=this.height),l`
      <div
        class="skeleton"
        style=${ue(e)}
        role="status"
        aria-label="Loading…"
        aria-busy="true"
      ></div>
    `}};Ye.styles=xa;Rt([n({reflect:!0})],Ye.prototype,"variant",2);Rt([n()],Ye.prototype,"width",2);Rt([n()],Ye.prototype,"height",2);Ye=Rt([u("wu-skeleton")],Ye);const $a=c`
  :host {
    display: block;

    --wu-divider-color:   var(--wu-color-border);
    --wu-divider-thickness: 1px;
    --wu-divider-spacing: var(--wu-space-4);
  }

  /* ── Horizontal (default) ── */
  :host {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    margin: var(--wu-divider-spacing) 0;
  }

  :host([vertical]) {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    gap: var(--wu-space-3);
    margin: 0 var(--wu-divider-spacing);
  }

  .line {
    flex: 1;
    background: var(--wu-divider-color);
  }

  :host(:not([vertical])) .line {
    height: var(--wu-divider-thickness);
  }

  :host([vertical]) .line {
    width: var(--wu-divider-thickness);
    min-height: var(--wu-space-4);
  }

  .label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
    flex-shrink: 0;
  }
`;var za=Object.defineProperty,Ca=Object.getOwnPropertyDescriptor,ur=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ca(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&za(t,a,r),r};let ft=class extends d{constructor(){super(...arguments),this.vertical=!1,this._hasLabel=!1}_onSlotChange(e){const t=e.target;this._hasLabel=t.assignedNodes({flatten:!0}).some(a=>a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE&&a.textContent.trim())}render(){return l`
      <div class="line" role="separator" aria-orientation=${this.vertical?"vertical":"horizontal"}></div>
      ${this._hasLabel?l`<span class="label"><slot @slotchange=${this._onSlotChange}></slot></span>`:l`<slot @slotchange=${this._onSlotChange} style="display:none"></slot>`}
      ${this._hasLabel?l`<div class="line"></div>`:""}
    `}};ft.styles=$a;ur([n({type:Boolean,reflect:!0})],ft.prototype,"vertical",2);ur([p()],ft.prototype,"_hasLabel",2);ft=ur([u("wu-divider")],ft);const Ea=c`
  :host {
    display: inline-flex;
    position: relative;

    --wu-tooltip-bg:      var(--wu-color-gray-900);
    --wu-tooltip-color:   var(--wu-color-white);
    --wu-tooltip-radius:  var(--wu-radius-sm);
    --wu-tooltip-font:    var(--wu-text-xs);
    --wu-tooltip-padding: var(--wu-space-1) var(--wu-space-2);
    --wu-tooltip-max-width: 240px;
    --wu-tooltip-delay:   var(--wu-duration-slow);
  }

  .trigger {
    display: inline-flex;
    align-items: center;
  }

  .tooltip {
    position: absolute;
    z-index: 1000;
    pointer-events: none;
    background: var(--wu-tooltip-bg);
    color: var(--wu-tooltip-color);
    border-radius: var(--wu-tooltip-radius);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-tooltip-font);
    padding: var(--wu-tooltip-padding);
    white-space: nowrap;
    max-width: var(--wu-tooltip-max-width);
    white-space: normal;
    line-height: var(--wu-leading-tight);
    box-shadow: var(--wu-shadow-md);
    opacity: 0;
    transition: opacity var(--wu-duration-fast) var(--wu-ease-default);
  }

  .tooltip.visible {
    opacity: 1;
  }

  /* Placement */
  :host([placement="top"]) .tooltip,
  :host(:not([placement])) .tooltip {
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
  }

  :host([placement="bottom"]) .tooltip {
    top: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
  }

  :host([placement="left"]) .tooltip {
    right: calc(100% + 6px);
    top: 50%;
    transform: translateY(-50%);
  }

  :host([placement="right"]) .tooltip {
    left: calc(100% + 6px);
    top: 50%;
    transform: translateY(-50%);
  }
`;var Oa=Object.defineProperty,Pa=Object.getOwnPropertyDescriptor,Ot=(e,t,a,o)=>{for(var r=o>1?void 0:o?Pa(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Oa(t,a,r),r};let $e=class extends d{constructor(){super(...arguments),this.content="",this.placement="top",this.delay=300,this._visible=!1,this._showTimer=null}_show(){this._showTimer=setTimeout(()=>{this._visible=!0},this.delay)}_hide(){this._showTimer&&(clearTimeout(this._showTimer),this._showTimer=null),this._visible=!1}disconnectedCallback(){super.disconnectedCallback(),this._hide()}render(){const e="tooltip-content";return l`
      <span
        class="trigger"
        aria-describedby=${this._visible?e:""}
        @mouseenter=${this._show}
        @mouseleave=${this._hide}
        @focusin=${this._show}
        @focusout=${this._hide}
      >
        <slot></slot>
      </span>
      <span
        id=${e}
        role="tooltip"
        class="tooltip ${this._visible?"visible":""}"
        aria-hidden=${!this._visible}
      >${this.content}</span>
    `}};$e.styles=Ea;Ot([n()],$e.prototype,"content",2);Ot([n({reflect:!0})],$e.prototype,"placement",2);Ot([n({type:Number})],$e.prototype,"delay",2);Ot([p()],$e.prototype,"_visible",2);$e=Ot([u("wu-tooltip")],$e);const ja=c`
  :host {
    display: inline-flex;
    position: relative;

    --wu-popover-bg:      var(--wu-color-surface-overlay);
    --wu-popover-border:  var(--wu-color-border);
    --wu-popover-radius:  var(--wu-radius-lg);
    --wu-popover-shadow:  var(--wu-shadow-lg);
    --wu-popover-padding: var(--wu-space-4);
    --wu-popover-width:   280px;
  }

  .trigger {
    display: inline-flex;
  }

  .popover {
    position: absolute;
    z-index: 1000;
    background: var(--wu-popover-bg);
    border: 1px solid var(--wu-popover-border);
    border-radius: var(--wu-popover-radius);
    box-shadow: var(--wu-popover-shadow);
    padding: var(--wu-popover-padding);
    width: var(--wu-popover-width);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--wu-duration-fast) var(--wu-ease-default),
                transform var(--wu-duration-fast) var(--wu-ease-default);
  }

  .popover.open {
    opacity: 1;
    pointer-events: auto;
  }

  /* Placement */
  :host([placement="bottom"]) .popover,
  :host(:not([placement])) .popover {
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(-4px);
  }

  :host([placement="bottom"]) .popover.open,
  :host(:not([placement])) .popover.open {
    transform: translateX(-50%) translateY(0);
  }

  :host([placement="top"]) .popover {
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
  }

  :host([placement="top"]) .popover.open {
    transform: translateX(-50%) translateY(0);
  }
`;var Da=Object.defineProperty,Sa=Object.getOwnPropertyDescriptor,Ht=(e,t,a,o)=>{for(var r=o>1?void 0:o?Sa(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Da(t,a,r),r};let Ve=class extends d{constructor(){super(...arguments),this.open=!1,this.placement="bottom",this._isOpen=!1,this._onDocClick=e=>{this.contains(e.target)||(this._isOpen=!1,this.open=!1)}}updated(e){e.has("open")&&(this._isOpen=this.open)}_toggle(){this._isOpen=!this._isOpen,this.open=this._isOpen,this.dispatchEvent(new CustomEvent(this._isOpen?"wu-open":"wu-close",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDocClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDocClick)}render(){return l`
      <span class="trigger" @click=${e=>{e.stopPropagation(),this._toggle()}}>
        <slot name="trigger"></slot>
      </span>
      <div
        class="popover ${this._isOpen?"open":""}"
        role="dialog"
        aria-modal="false"
        aria-hidden=${!this._isOpen}
      >
        <slot></slot>
      </div>
    `}};Ve.styles=ja;Ht([n({type:Boolean,reflect:!0})],Ve.prototype,"open",2);Ht([n({reflect:!0})],Ve.prototype,"placement",2);Ht([p()],Ve.prototype,"_isOpen",2);Ve=Ht([u("wu-popover")],Ve);const Ma=c`
  :host {
    display: block;

    --wu-toast-bg:         var(--wu-color-surface-overlay);
    --wu-toast-border:     var(--wu-color-border);
    --wu-toast-radius:     var(--wu-radius-lg);
    --wu-toast-shadow:     var(--wu-shadow-lg);
    --wu-toast-min-width:  280px;
    --wu-toast-max-width:  400px;
    --wu-toast-padding:    var(--wu-space-4);
  }

  .toast {
    display: flex;
    align-items: flex-start;
    gap: var(--wu-space-3);
    min-width: var(--wu-toast-min-width);
    max-width: var(--wu-toast-max-width);
    background: var(--wu-toast-bg);
    border: 1px solid var(--wu-toast-border);
    border-radius: var(--wu-toast-radius);
    box-shadow: var(--wu-toast-shadow);
    padding: var(--wu-toast-padding);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    animation: slide-in 0.2s var(--wu-ease-default);
  }

  @keyframes slide-in {
    from { opacity: 0; transform: translateX(100%); }
    to   { opacity: 1; transform: translateX(0); }
  }

  :host([variant="success"]) .toast { border-left: 4px solid var(--wu-color-success); }
  :host([variant="warning"]) .toast { border-left: 4px solid var(--wu-color-warning); }
  :host([variant="danger"])  .toast { border-left: 4px solid var(--wu-color-danger);  }
  :host([variant="info"])    .toast { border-left: 4px solid var(--wu-color-info);    }

  .icon {
    flex-shrink: 0;
    font-size: 1rem;
    line-height: 1.4;
  }

  :host([variant="success"]) .icon { color: var(--wu-color-success); }
  :host([variant="warning"]) .icon { color: var(--wu-color-warning); }
  :host([variant="danger"])  .icon { color: var(--wu-color-danger);  }
  :host([variant="info"])    .icon { color: var(--wu-color-info);    }

  .content { flex: 1; }

  .title {
    font-weight: var(--wu-font-semibold);
    line-height: var(--wu-leading-tight);
    margin-bottom: var(--wu-space-1);
  }

  .close-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    border-radius: var(--wu-radius-sm);
    background: transparent;
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    font-size: 1rem;
    flex-shrink: 0;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .close-btn:hover { background: var(--wu-color-surface); }
  .close-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`,Ba=c`
  :host {
    position: fixed;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-3);
    padding: var(--wu-space-4);
    max-width: calc(400px + 2 * var(--wu-space-4));
  }

  :host([position="top-right"])    { top: 0; right: 0; align-items: flex-end; }
  :host([position="top-left"])     { top: 0; left: 0;  align-items: flex-start; }
  :host([position="top-center"])   { top: 0; left: 50%; transform: translateX(-50%); align-items: center; }
  :host([position="bottom-right"]) { bottom: 0; right: 0; align-items: flex-end; flex-direction: column-reverse; }
  :host([position="bottom-left"])  { bottom: 0; left: 0;  align-items: flex-start; flex-direction: column-reverse; }
  :host([position="bottom-center"]){ bottom: 0; left: 50%; transform: translateX(-50%); align-items: center; flex-direction: column-reverse; }
`;var Ia=Object.defineProperty,La=Object.getOwnPropertyDescriptor,lt=(e,t,a,o)=>{for(var r=o>1?void 0:o?La(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ia(t,a,r),r};const Aa={info:"ℹ",success:"✓",warning:"⚠",danger:"✕",default:"•"};let Ue=class extends d{constructor(){super(...arguments),this.variant="default",this.heading="",this.duration=5e3}connectedCallback(){super.connectedCallback(),this.duration>0&&setTimeout(()=>this._dismiss("auto"),this.duration)}_dismiss(e){this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0,detail:{reason:e}})),this.remove()}render(){return l`
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <span class="icon" aria-hidden="true">${Aa[this.variant]}</span>
        <div class="content">
          ${this.heading?l`<div class="title">${this.heading}</div>`:""}
          <slot></slot>
          <slot name="action"></slot>
        </div>
        <button class="close-btn" aria-label="Dismiss notification" @click=${()=>this._dismiss("button")}>✕</button>
      </div>
    `}};Ue.styles=Ma;lt([n({reflect:!0})],Ue.prototype,"variant",2);lt([n()],Ue.prototype,"heading",2);lt([n({type:Number})],Ue.prototype,"duration",2);Ue=lt([u("wu-toast")],Ue);let Bt=class extends d{constructor(){super(...arguments),this.position="top-right"}toast(e){const t=Object.assign(document.createElement("wu-toast"),{heading:e.heading??"",variant:e.variant??"default",duration:e.duration??5e3});return e.message&&(t.textContent=e.message),this.shadowRoot.querySelector("slot").parentElement.appendChild(t),t}render(){return l`<slot></slot>`}};Bt.styles=Ba;lt([n({reflect:!0})],Bt.prototype,"position",2);Bt=lt([u("wu-toast-provider")],Bt);const Ta=c`
  :host {
    display: block;

    --wu-tabs-border:        var(--wu-color-border);
    --wu-tab-color:          var(--wu-color-text-secondary);
    --wu-tab-color-active:   var(--wu-color-primary);
    --wu-tab-bg-hover:       var(--wu-color-surface);
    --wu-tab-indicator:      var(--wu-color-primary);
    --wu-tab-font-size:      var(--wu-text-sm);
    --wu-tab-font-weight:    var(--wu-font-medium);
    --wu-tab-padding-x:      var(--wu-space-4);
    --wu-tab-padding-y:      var(--wu-space-3);
    --wu-tab-radius:         var(--wu-radius-md);
  }

  .tablist {
    display: flex;
    border-bottom: 1px solid var(--wu-tabs-border);
    gap: var(--wu-space-1);
    overflow-x: auto;
    scrollbar-width: none;
  }

  .tablist::-webkit-scrollbar { display: none; }

  :host([orientation="vertical"]) {
    display: flex;
    gap: var(--wu-space-6);
    align-items: flex-start;
  }

  :host([orientation="vertical"]) .tablist {
    flex-direction: column;
    border-bottom: none;
    border-right: 1px solid var(--wu-tabs-border);
    min-width: 180px;
    padding-right: var(--wu-space-2);
  }

  :host([orientation="vertical"]) .panels {
    flex: 1;
  }
`,Na=c`
  :host {
    display: contents;
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-tab-padding-y) var(--wu-tab-padding-x);
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    border-radius: var(--wu-tab-radius) var(--wu-tab-radius) 0 0;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-tab-font-size);
    font-weight: var(--wu-tab-font-weight);
    color: var(--wu-tab-color);
    cursor: pointer;
    white-space: nowrap;
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    margin-bottom: -1px;
  }

  button:hover:not([disabled]) {
    background: var(--wu-tab-bg-hover);
    color: var(--wu-color-text);
  }

  :host([active]) button {
    color: var(--wu-tab-color-active);
    border-bottom-color: var(--wu-tab-indicator);
  }

  :host([disabled]) button {
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }
`,qa=c`
  :host {
    display: none;
  }

  :host([active]) {
    display: block;
  }
`;var Ka=Object.defineProperty,Ra=Object.getOwnPropertyDescriptor,W=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ra(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ka(t,a,r),r};let Xe=class extends d{constructor(){super(...arguments),this.panel="",this.active=!1,this.disabled=!1}_handleClick(){this.disabled||this.dispatchEvent(new CustomEvent("wu-tab-click",{bubbles:!0,composed:!0,detail:{panel:this.panel}}))}render(){return l`
      <button
        role="tab"
        aria-selected=${this.active}
        aria-controls=${this.panel}
        ?disabled=${this.disabled}
        tabindex=${this.active?"0":"-1"}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `}};Xe.styles=Na;W([n()],Xe.prototype,"panel",2);W([n({type:Boolean,reflect:!0})],Xe.prototype,"active",2);W([n({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2);Xe=W([u("wu-tab")],Xe);let mt=class extends d{constructor(){super(...arguments),this.name="",this.active=!1}render(){return l`
      <div role="tabpanel" id=${this.name} aria-hidden=${!this.active}>
        <slot></slot>
      </div>
    `}};mt.styles=qa;W([n({reflect:!0})],mt.prototype,"name",2);W([n({type:Boolean,reflect:!0})],mt.prototype,"active",2);mt=W([u("wu-tab-panel")],mt);let yt=class extends d{constructor(){super(...arguments),this.orientation="horizontal",this.activePanel=""}firstUpdated(){this._setup(),this.addEventListener("wu-tab-click",e=>{const t=e,a=this._tabs(),o=this._panels(),r=a.find(s=>s.panel===t.detail.panel);!r||r.disabled||r.active||(this._activate(t.detail.panel,a,o),this.dispatchEvent(new CustomEvent("wu-tab-change",{bubbles:!0,composed:!0,detail:{panel:t.detail.panel}})))})}_setup(){const e=this._tabs(),t=this._panels();if(!e.length)return;const a=e.find(o=>o.panel===this.activePanel)??e.find(o=>!o.disabled)??e[0];this._activate(a.panel,e,t),this._attachKeyboardListeners(e,t)}_tabs(){return Array.from(this.querySelectorAll("wu-tab"))}_panels(){return Array.from(this.querySelectorAll("wu-tab-panel"))}_activate(e,t,a){t.forEach(o=>{o.active=o.panel===e}),a.forEach(o=>{o.active=o.name===e}),this.activePanel=e}_attachKeyboardListeners(e,t){var a;const o=(a=this.shadowRoot)==null?void 0:a.querySelector(".tablist");o==null||o.addEventListener("keydown",r=>this._onKeydown(r,e,t))}_onKeydown(e,t,a){var o,r;const s=t.findIndex(f=>f.active),i=this.orientation==="horizontal";let h=-1;i&&e.key==="ArrowRight"||!i&&e.key==="ArrowDown"?h=(s+1)%t.length:i&&e.key==="ArrowLeft"||!i&&e.key==="ArrowUp"?h=(s-1+t.length)%t.length:e.key==="Home"?h=0:e.key==="End"&&(h=t.length-1),h>=0&&!t[h].disabled&&(e.preventDefault(),this._activate(t[h].panel,t,a),(r=(o=t[h].shadowRoot)==null?void 0:o.querySelector("button"))==null||r.focus())}render(){return l`
      <div class="tablist" role="tablist" aria-orientation=${this.orientation}>
        <slot name="tabs"></slot>
      </div>
      <div class="panels">
        <slot></slot>
      </div>
    `}};yt.styles=Ta;W([n({reflect:!0})],yt.prototype,"orientation",2);W([n({attribute:"active-panel"})],yt.prototype,"activePanel",2);yt=W([u("wu-tabs")],yt);const Ha=c`
  :host {
    display: block;

    --wu-accordion-border: var(--wu-color-border);
    --wu-accordion-radius: var(--wu-radius-lg);
  }

  .accordion {
    border: 1px solid var(--wu-accordion-border);
    border-radius: var(--wu-accordion-radius);
    overflow: hidden;
  }

  ::slotted(wu-accordion-item:not(:last-child)) {
    border-bottom: 1px solid var(--wu-accordion-border);
  }
`,Fa=c`
  :host {
    display: block;

    --wu-accordion-header-bg:       transparent;
    --wu-accordion-header-bg-hover: var(--wu-color-surface);
    --wu-accordion-header-color:    var(--wu-color-text);
    --wu-accordion-padding-x:       var(--wu-space-5);
    --wu-accordion-padding-y:       var(--wu-space-4);
    --wu-accordion-font-weight:     var(--wu-font-medium);
    --wu-accordion-content-color:   var(--wu-color-text-secondary);
  }

  /* ── Trigger button ─────────────────────────────────── */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--wu-accordion-padding-y) var(--wu-accordion-padding-x);
    background: var(--wu-accordion-header-bg);
    border: none;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-accordion-font-weight);
    color: var(--wu-accordion-header-color);
    cursor: pointer;
    text-align: left;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
    gap: var(--wu-space-4);
  }

  .header:hover:not(:disabled) { background: var(--wu-accordion-header-bg-hover); }

  .header:focus-visible {
    outline: none;
    box-shadow: inset var(--wu-focus-ring);
  }

  .header:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  /* ── Chevron SVG ────────────────────────────────────── */
  .chevron {
    display: inline-flex;
    flex-shrink: 0;
    color: var(--wu-color-text-secondary);
    transition: transform var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([open]) .chevron {
    transform: rotate(180deg);
  }

  :host([disabled]) .chevron {
    opacity: 0.45;
  }

  /* ── Panel — CSS grid height animation ──────────────── */
  /*
   * Using the grid 0fr → 1fr trick:
   * - .body transitions grid-template-rows for a smooth height animation
   * - .content has overflow:hidden so it clips while .body "grows"
   * - No fixed max-height needed — works for any content length
   */
  .body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([open]) .body {
    grid-template-rows: 1fr;
  }

  .content {
    overflow: hidden;
    padding: 0 var(--wu-accordion-padding-x);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-accordion-content-color);
    line-height: var(--wu-leading-normal);
    /* Animate padding so content doesn't jump at the end of the transition */
    transition: padding var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([open]) .content {
    padding: 0 var(--wu-accordion-padding-x) var(--wu-accordion-padding-y);
  }
`;var Ya=Object.defineProperty,Va=Object.getOwnPropertyDescriptor,Pt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Va(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ya(t,a,r),r};let Ua=0,xt=class extends d{constructor(){super(...arguments),this._uid=++Ua,this.open=!1,this.disabled=!1}_toggle(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent("wu-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}})))}render(){const e=`wu-acc-header-${this._uid}`,t=`wu-acc-panel-${this._uid}`;return l`
      <button
        part="header"
        class="header"
        id="${e}"
        aria-expanded="${this.open?"true":"false"}"
        aria-controls="${t}"
        ?disabled=${this.disabled}
        @click=${this._toggle}
      >
        <slot name="summary">Accordion Item</slot>
        <svg class="chevron" aria-hidden="true" width="16" height="16"
             viewBox="0 0 16 16" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6l4 4 4-4"/>
        </svg>
      </button>
      <div
        part="panel"
        class="body"
        id="${t}"
        role="region"
        aria-labelledby="${e}"
        aria-hidden="${w(this.open?void 0:"true")}"
      >
        <div class="content"><slot></slot></div>
      </div>
    `}};xt.styles=Fa;Pt([n({type:Boolean,reflect:!0})],xt.prototype,"open",2);Pt([n({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);xt=Pt([u("wu-accordion-item")],xt);let It=class extends d{constructor(){super(...arguments),this.single=!1,this._onToggle=e=>{const t=e.target;t.open&&this.querySelectorAll("wu-accordion-item").forEach(a=>{a!==t&&(a.open=!1)})}}updated(e){e.has("single")&&(this.single?this.addEventListener("wu-toggle",this._onToggle):this.removeEventListener("wu-toggle",this._onToggle))}render(){return l`<div class="accordion"><slot></slot></div>`}};It.styles=Ha;Pt([n({type:Boolean,reflect:!0})],It.prototype,"single",2);It=Pt([u("wu-accordion")],It);const Xa=c`
  :host {
    display: block;

    --wu-breadcrumb-color:          var(--wu-color-text-secondary);
    --wu-breadcrumb-color-active:   var(--wu-color-text);
    --wu-breadcrumb-color-hover:    var(--wu-color-primary);
    --wu-breadcrumb-separator:      var(--wu-color-text-disabled);
    --wu-breadcrumb-font-size:      var(--wu-text-sm);
  }

  nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wu-space-1);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-breadcrumb-font-size);
  }

  ol {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wu-space-1);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  li + li::before {
    content: var(--wu-breadcrumb-separator-char, '/');
    color: var(--wu-breadcrumb-separator);
    flex-shrink: 0;
  }

  ::slotted(a) {
    color: var(--wu-breadcrumb-color);
    text-decoration: none;
    transition: color var(--wu-duration-fast) var(--wu-ease-default);
  }

  ::slotted(a:hover) {
    color: var(--wu-breadcrumb-color-hover);
    text-decoration: underline;
  }

  ::slotted([aria-current="page"]),
  ::slotted(span) {
    color: var(--wu-breadcrumb-color-active);
    font-weight: var(--wu-font-medium);
  }
`;var Wa=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,cr=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ga(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Wa(t,a,r),r};let kt=class extends d{constructor(){super(...arguments),this.separator="/",this.label="Breadcrumb"}firstUpdated(){this.style.setProperty("--wu-breadcrumb-separator-char",`"${this.separator}"`)}render(){return l`
      <nav aria-label=${this.label}>
        <ol>
          <slot></slot>
        </ol>
      </nav>
    `}};kt.styles=Xa;cr([n()],kt.prototype,"separator",2);cr([n()],kt.prototype,"label",2);kt=cr([u("wu-breadcrumb")],kt);const Ja=c`
  :host {
    display: flex;
    align-items: center;
    gap: var(--wu-space-4);
    font-family: var(--wu-font-sans);

    --wu-pagination-btn-size:    32px;
    --wu-pagination-radius:      var(--wu-radius-md);
    --wu-pagination-color:       var(--wu-color-text-secondary);
    --wu-pagination-color-active:var(--wu-color-primary-fg);
    --wu-pagination-bg-active:   var(--wu-color-primary);
    --wu-pagination-bg-hover:    var(--wu-color-surface);
    --wu-pagination-font-size:   var(--wu-text-sm);
  }

  .pages {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  .page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--wu-pagination-btn-size);
    height: var(--wu-pagination-btn-size);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-pagination-radius);
    background: transparent;
    color: var(--wu-pagination-color);
    font-size: var(--wu-pagination-font-size);
    font-family: var(--wu-font-sans);
    cursor: pointer;
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
  }

  .page-btn:hover:not(:disabled):not([aria-current]) {
    background: var(--wu-pagination-bg-hover);
    color: var(--wu-color-text);
  }

  .page-btn[aria-current="page"] {
    background: var(--wu-pagination-bg-active);
    color: var(--wu-pagination-color-active);
    border-color: var(--wu-pagination-bg-active);
    font-weight: var(--wu-font-semibold);
  }

  .page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .page-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .dots {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--wu-pagination-btn-size);
    color: var(--wu-color-text-disabled);
    font-size: var(--wu-pagination-font-size);
  }

  .nav-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    padding: 0 var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-pagination-radius);
    background: transparent;
    color: var(--wu-color-text);
    font-size: var(--wu-pagination-font-size);
    font-family: var(--wu-font-sans);
    cursor: pointer;
    gap: var(--wu-space-1);
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    white-space: nowrap;
  }

  .nav-btn:hover:not(:disabled) { background: var(--wu-pagination-bg-hover); }
  .nav-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .nav-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .info {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
  }
`;var Za=Object.defineProperty,Qa=Object.getOwnPropertyDescriptor,dt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Qa(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Za(t,a,r),r};let pe=class extends d{constructor(){super(...arguments),this.page=1,this.totalPages=1,this.showInfo=!1,this.totalItems=0,this.pageSize=10}_go(e){e<1||e>this.totalPages||e===this.page||(this.page=e,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:e}})))}_pages(){const e=this.totalPages,t=this.page;if(e<=7)return Array.from({length:e},(s,i)=>i+1);const a=[1];t>3&&a.push("dots");const o=Math.max(2,t-1),r=Math.min(e-1,t+1);for(let s=o;s<=r;s++)a.push(s);return t<e-2&&a.push("dots"),a.push(e),a}render(){const e=this._pages(),t=(this.page-1)*this.pageSize+1,a=Math.min(this.page*this.pageSize,this.totalItems);return l`
      <button
        class="nav-btn"
        ?disabled=${this.page<=1}
        aria-label="Previous page"
        @click=${()=>this._go(this.page-1)}
      >← Prev</button>

      <div class="pages" role="group" aria-label="Pages">
        ${e.map(o=>o==="dots"?l`<span class="dots" aria-hidden="true">…</span>`:l`
              <button
                class="page-btn"
                aria-label="Page ${o}"
                aria-current=${o===this.page?"page":"false"}
                @click=${()=>this._go(o)}
              >${o}</button>
            `)}
      </div>

      <button
        class="nav-btn"
        ?disabled=${this.page>=this.totalPages}
        aria-label="Next page"
        @click=${()=>this._go(this.page+1)}
      >Next →</button>

      ${this.showInfo&&this.totalItems?l`
        <span class="info">${t}–${a} of ${this.totalItems}</span>
      `:""}
    `}};pe.styles=Ja;dt([n({type:Number})],pe.prototype,"page",2);dt([n({type:Number,attribute:"total-pages"})],pe.prototype,"totalPages",2);dt([n({type:Boolean,attribute:"show-info"})],pe.prototype,"showInfo",2);dt([n({type:Number,attribute:"total-items"})],pe.prototype,"totalItems",2);dt([n({type:Number,attribute:"page-size"})],pe.prototype,"pageSize",2);pe=dt([u("wu-pagination")],pe);const eo=c`
  :host {
    display: block;
    --wu-table-border: var(--wu-color-border);
    --wu-table-header-bg: var(--wu-color-surface);
    --wu-table-header-color: var(--wu-color-text-secondary);
    --wu-table-row-hover-bg: var(--wu-color-primary-subtle, var(--wu-color-surface));
    --wu-table-row-selected-bg: var(--wu-color-primary-subtle);
    --wu-table-font-size: var(--wu-text-sm);
    --wu-table-cell-padding: var(--wu-space-3) var(--wu-space-4);
  }

  .wrapper {
    overflow-x: auto;
    border: 1px solid var(--wu-table-border);
    border-radius: var(--wu-radius-lg);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--wu-table-font-size);
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
  }

  thead {
    background: var(--wu-table-header-bg);
    position: sticky;
    top: 0;
    z-index: 1;
  }

  th {
    padding: var(--wu-table-cell-padding);
    text-align: left;
    font-weight: var(--wu-font-semibold);
    color: var(--wu-table-header-color);
    white-space: nowrap;
    border-bottom: 1px solid var(--wu-table-border);
  }

  th.sortable {
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  th.sortable:hover {
    color: var(--wu-color-text);
  }

  .th-inner {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  .sort-icon {
    width: 14px;
    height: 14px;
    opacity: 0.4;
    transition: opacity 100ms;
  }

  th.sorted .sort-icon {
    opacity: 1;
  }

  .sort-icon svg {
    display: block;
  }

  td {
    padding: var(--wu-table-cell-padding);
    border-bottom: 1px solid var(--wu-table-border);
    vertical-align: middle;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover {
    background: var(--wu-table-row-hover-bg);
  }

  tbody tr.selected {
    background: var(--wu-table-row-selected-bg);
  }

  td.select-cell,
  th.select-cell {
    width: 40px;
    padding: var(--wu-space-2) var(--wu-space-3);
  }

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: var(--wu-color-primary);
  }

  .empty {
    text-align: center;
    padding: var(--wu-space-10);
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-sm);
  }
`;var to=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,fe=(e,t,a,o)=>{for(var r=o>1?void 0:o?ro(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&to(t,a,r),r};let R=class extends d{constructor(){super(...arguments),this.columns=[],this.data=[],this.selectable=!1,this.sortKey="",this.sortDirection="asc",this.emptyMessage="No data available.",this._selected=new Set}_sort(e){this.sortKey===e?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortKey=e,this.sortDirection="asc"),this.dispatchEvent(new CustomEvent("wu-sort",{bubbles:!0,composed:!0,detail:{key:this.sortKey,direction:this.sortDirection}}))}_toggleRow(e){const t=new Set(this._selected);t.has(e)?t.delete(e):t.add(e),this._selected=t,this._emitSelect()}_toggleAll(e){this._selected=e?new Set(this.data.map(t=>String(t.id??""))):new Set,this._emitSelect()}_emitSelect(){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{selected:[...this._selected]}}))}_sortIcon(e){const t=this.sortKey===e,a=this.sortDirection;return l`
      <span class="sort-icon">
        <svg viewBox="0 0 10 14" fill="currentColor" aria-hidden="true">
          <path d="M5 0L9 5H1L5 0Z" opacity="${t&&a==="asc"?1:.3}"/>
          <path d="M5 14L1 9H9L5 14Z" opacity="${t&&a==="desc"?1:.3}"/>
        </svg>
      </span>
    `}render(){const e=this.data.length>0&&this._selected.size===this.data.length;return l`
      <div class="wrapper" part="base">
        <table part="table">
          <thead>
            <tr>
              ${this.selectable?l`
                <th class="select-cell">
                  <input
                    type="checkbox"
                    .checked=${e}
                    @change=${t=>this._toggleAll(t.target.checked)}
                    aria-label="Select all rows"
                  />
                </th>
              `:v}
              ${this.columns.map(t=>l`
                <th
                  class=${["",t.sortable?"sortable":"",this.sortKey===t.key?"sorted":""].join(" ").trim()}
                  style=${t.width?`width:${t.width}`:""}
                  @click=${t.sortable?()=>this._sort(t.key):void 0}
                  aria-sort=${this.sortKey===t.key?this.sortDirection==="asc"?"ascending":"descending":"none"}
                >
                  <span class="th-inner">
                    ${t.label}
                    ${t.sortable?this._sortIcon(t.key):v}
                  </span>
                </th>
              `)}
            </tr>
          </thead>
          <tbody>
            ${this.data.length===0?l`
              <tr>
                <td class="empty" colspan=${this.columns.length+(this.selectable?1:0)}>
                  ${this.emptyMessage}
                </td>
              </tr>
            `:this.data.map(t=>{const a=String(t.id??""),o=this._selected.has(a);return l`
                <tr class=${o?"selected":""}>
                  ${this.selectable?l`
                    <td class="select-cell">
                      <input
                        type="checkbox"
                        .checked=${o}
                        @change=${()=>this._toggleRow(a)}
                        aria-label="Select row"
                      />
                    </td>
                  `:v}
                  ${this.columns.map(r=>l`
                    <td>${t[r.key]??""}</td>
                  `)}
                </tr>
              `})}
          </tbody>
        </table>
      </div>
    `}};R.styles=eo;fe([n({type:Array})],R.prototype,"columns",2);fe([n({type:Array})],R.prototype,"data",2);fe([n({type:Boolean,attribute:"selectable"})],R.prototype,"selectable",2);fe([n({attribute:"sort-key"})],R.prototype,"sortKey",2);fe([n({attribute:"sort-direction"})],R.prototype,"sortDirection",2);fe([n({attribute:"empty-message"})],R.prototype,"emptyMessage",2);fe([p()],R.prototype,"_selected",2);R=fe([u("wu-table")],R);const ao=c`
  :host {
    display: inline-block;
    position: relative;
    --wu-dp-border: var(--wu-color-border);
    --wu-dp-bg: var(--wu-color-surface-raised, var(--wu-color-white));
    --wu-dp-radius: var(--wu-radius-lg);
    --wu-dp-shadow: var(--wu-shadow-lg);
    --wu-dp-cell-size: 36px;
  }

  .trigger {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    border: 1px solid var(--wu-dp-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    min-width: 160px;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .trigger:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
    border-color: var(--wu-color-border-focus);
  }

  .trigger .icon {
    margin-left: auto;
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .calendar {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 100;
    background: var(--wu-dp-bg);
    border: 1px solid var(--wu-dp-border);
    border-radius: var(--wu-dp-radius);
    box-shadow: var(--wu-dp-shadow);
    padding: var(--wu-space-3);
    min-width: 280px;
    display: none;
  }

  :host([open]) .calendar {
    display: block;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--wu-space-3);
  }

  .nav-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    background: transparent;
    border-radius: var(--wu-radius-sm);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    transition: background var(--wu-duration-fast);
  }

  .nav-btn:hover {
    background: var(--wu-color-surface);
    color: var(--wu-color-text);
  }

  .month-year {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(7, var(--wu-dp-cell-size));
    gap: 2px;
  }

  .day-name {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--wu-dp-cell-size);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
  }

  .day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--wu-dp-cell-size);
    height: var(--wu-dp-cell-size);
    border: none;
    border-radius: var(--wu-radius-full);
    background: transparent;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    transition: background var(--wu-duration-fast);
  }

  .day:hover:not(:disabled):not(.selected) {
    background: var(--wu-color-surface);
  }

  .day.other-month {
    color: var(--wu-color-text-disabled);
  }

  .day.today:not(.selected) {
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-primary);
  }

  .day.selected {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    font-weight: var(--wu-font-semibold);
  }

  .day:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;var oo=Object.defineProperty,so=Object.getOwnPropertyDescriptor,ne=(e,t,a,o)=>{for(var r=o>1?void 0:o?so(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&oo(t,a,r),r};const io=["Su","Mo","Tu","We","Th","Fr","Sa"],gr=["January","February","March","April","May","June","July","August","September","October","November","December"];function fr(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}let M=class extends d{constructor(){super(),this.value="",this.placeholder="Select date",this.min="",this.max="",this.open=!1,this.label="Date";const e=new Date;this._viewYear=e.getFullYear(),this._viewMonth=e.getMonth()}_toggle(){if(this.open=!this.open,this.open&&this.value){const e=new Date(this.value+"T00:00:00");this._viewYear=e.getFullYear(),this._viewMonth=e.getMonth()}}_prevMonth(){this._viewMonth===0?(this._viewYear--,this._viewMonth=11):this._viewMonth--}_nextMonth(){this._viewMonth===11?(this._viewYear++,this._viewMonth=0):this._viewMonth++}_select(e){this.value=e,this.open=!1,this.dispatchEvent(new CustomEvent("wu-date-change",{bubbles:!0,composed:!0,detail:{value:e}}))}_isDisabled(e){return!!(this.min&&e<this.min||this.max&&e>this.max)}_getDays(){const e=new Date(this._viewYear,this._viewMonth,1),t=new Date(this._viewYear,this._viewMonth+1,0),a=[];for(let r=0;r<e.getDay();r++){const s=new Date(this._viewYear,this._viewMonth,1-(e.getDay()-r));a.push({date:s,current:!1})}for(let r=1;r<=t.getDate();r++)a.push({date:new Date(this._viewYear,this._viewMonth,r),current:!0});const o=42-a.length;for(let r=1;r<=o;r++)a.push({date:new Date(this._viewYear,this._viewMonth+1,r),current:!1});return a}_onKeydown(e){e.key==="Escape"&&(this.open=!1)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){const e=fr(new Date),t=this._getDays(),a=this.value?new Date(this.value+"T00:00:00").toLocaleDateString():this.placeholder;return l`
      <button
        part="trigger"
        class="trigger"
        type="button"
        aria-label="${this.label}: ${this.value||"not selected"}"
        aria-expanded=${this.open}
        aria-haspopup="dialog"
        @click=${this._toggle}
      >
        <span>${a}</span>
        <span class="icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 1v1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2V1h-1v1H5V1H4zm8 2h2v2H2V3h2v1h1V3h6v1h1V3zM2 6h12v8H2V6z"/>
          </svg>
        </span>
      </button>

      <div
        part="calendar"
        class="calendar"
        role="dialog"
        aria-label="Date picker"
        aria-modal="false"
      >
        <div class="header">
          <button class="nav-btn" type="button" aria-label="Previous month" @click=${this._prevMonth}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <span class="month-year">${gr[this._viewMonth]} ${this._viewYear}</span>
          <button class="nav-btn" type="button" aria-label="Next month" @click=${this._nextMonth}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="grid" role="grid" aria-label="${gr[this._viewMonth]} ${this._viewYear}">
          ${io.map(o=>l`<div class="day-name" role="columnheader" aria-label=${o}>${o}</div>`)}
          ${t.map(({date:o,current:r})=>{const s=fr(o),i=this._isDisabled(s),h=s===this.value,f=s===e;return l`
              <button
                type="button"
                class=${["day",r?"":"other-month",f?"today":"",h?"selected":""].join(" ").trim()}
                role="gridcell"
                aria-label=${o.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}
                aria-selected=${h}
                aria-current=${f?"date":v}
                ?disabled=${i}
                @click=${()=>!i&&this._select(s)}
              >${o.getDate()}</button>
            `})}
        </div>
      </div>
    `}};M.styles=ao;ne([n()],M.prototype,"value",2);ne([n()],M.prototype,"placeholder",2);ne([n()],M.prototype,"min",2);ne([n()],M.prototype,"max",2);ne([n({type:Boolean,reflect:!0})],M.prototype,"open",2);ne([n()],M.prototype,"label",2);ne([p()],M.prototype,"_viewYear",2);ne([p()],M.prototype,"_viewMonth",2);M=ne([u("wu-date-picker")],M);const no=c`
  :host {
    display: block;
    --wu-fu-border: var(--wu-color-border);
    --wu-fu-border-active: var(--wu-color-primary);
    --wu-fu-bg: var(--wu-color-surface);
    --wu-fu-radius: var(--wu-radius-lg);
  }

  .drop-zone {
    border: 2px dashed var(--wu-fu-border);
    border-radius: var(--wu-fu-radius);
    background: var(--wu-fu-bg);
    padding: var(--wu-space-8) var(--wu-space-6);
    text-align: center;
    cursor: pointer;
    transition: border-color var(--wu-duration-fast), background var(--wu-duration-fast);
    outline: none;
  }

  .drop-zone.drag-over {
    border-color: var(--wu-fu-border-active);
    background: var(--wu-color-primary-subtle);
  }

  .drop-zone:focus-visible {
    box-shadow: var(--wu-focus-ring);
    border-color: var(--wu-fu-border-active);
  }

  .drop-icon {
    color: var(--wu-color-text-secondary);
    margin-bottom: var(--wu-space-3);
  }

  .drop-text {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    margin: 0 0 var(--wu-space-2);
  }

  .drop-text strong {
    color: var(--wu-color-primary);
    cursor: pointer;
  }

  .hint {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-disabled);
    margin: 0;
  }

  input[type='file'] {
    display: none;
  }

  .file-list {
    margin-top: var(--wu-space-3);
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-2);
  }

  .file-item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
  }

  .file-icon {
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .file-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--wu-color-text);
  }

  .file-size {
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-xs);
    flex-shrink: 0;
  }

  .remove-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: var(--wu-radius-sm);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
    transition: background var(--wu-duration-fast);
  }

  .remove-btn:hover {
    background: var(--wu-color-danger-subtle);
    color: var(--wu-color-danger);
  }

  :host([disabled]) .drop-zone {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;var lo=Object.defineProperty,uo=Object.getOwnPropertyDescriptor,me=(e,t,a,o)=>{for(var r=o>1?void 0:o?uo(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&lo(t,a,r),r};function co(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}let H=class extends d{constructor(){super(...arguments),this.accept="",this.multiple=!1,this.disabled=!1,this.hint="",this._files=[],this._dragOver=!1}_onInputChange(e){const t=e.target;t.files&&this._addFiles(t.files),t.value=""}_addFiles(e){const t=Array.from(e),a=this.multiple?t:t.slice(0,1);this._files=this.multiple?[...this._files,...a]:a,this.dispatchEvent(new CustomEvent("wu-file-select",{bubbles:!0,composed:!0,detail:{files:[...this._files]}}))}_remove(e){this._files=this._files.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("wu-file-remove",{bubbles:!0,composed:!0,detail:{file:e}}))}_onDragOver(e){e.preventDefault(),this._dragOver=!0}_onDragLeave(){this._dragOver=!1}_onDrop(e){var t;e.preventDefault(),this._dragOver=!1,(t=e.dataTransfer)!=null&&t.files&&this._addFiles(e.dataTransfer.files)}_onKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._input.click())}get files(){return this._files}_renderFile(e){return l`
      <li class="file-item">
        <span class="file-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </span>
        <span class="file-name">${e.name}</span>
        <span class="file-size">${co(e.size)}</span>
        <button
          type="button"
          class="remove-btn"
          aria-label="Remove ${e.name}"
          @click=${()=>this._remove(e)}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </li>
    `}render(){return l`
      <input
        type="file"
        accept=${this.accept}
        ?multiple=${this.multiple}
        ?disabled=${this.disabled}
        @change=${this._onInputChange}
        aria-hidden="true"
        tabindex="-1"
      />
      <div
        part="drop-zone"
        class=${`drop-zone${this._dragOver?" drag-over":""}`}
        role="button"
        tabindex=${this.disabled?-1:0}
        aria-label="Upload files. Drag and drop or click to browse"
        @click=${()=>!this.disabled&&this._input.click()}
        @keydown=${this._onKeydown}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div class="drop-icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
        </div>
        <p class="drop-text">
          Drag and drop, or <strong @click=${e=>{e.stopPropagation(),this._input.click()}}>browse</strong>
        </p>
        ${this.hint?l`<p class="hint">${this.hint}</p>`:""}
      </div>

      <ul
        class="file-list"
        part="file-list"
        aria-label="Selected files"
        ?hidden=${this._files.length===0}
      >
        ${this._files.map(e=>this._renderFile(e))}
      </ul>
    `}};H.styles=no;me([n()],H.prototype,"accept",2);me([n({type:Boolean})],H.prototype,"multiple",2);me([n({type:Boolean,reflect:!0})],H.prototype,"disabled",2);me([n()],H.prototype,"hint",2);me([p()],H.prototype,"_files",2);me([p()],H.prototype,"_dragOver",2);me([Se("input")],H.prototype,"_input",2);H=me([u("wu-file-upload")],H);const po=c`
  :host {
    display: block;
    --wu-stepper-connector-color: var(--wu-color-border);
    --wu-stepper-connector-active: var(--wu-color-primary);
    --wu-stepper-indicator-size: 32px;
  }

  .stepper {
    display: flex;
    align-items: flex-start;
    gap: 0;
  }

  :host([vertical]) .stepper {
    flex-direction: column;
  }
`,ho=c`
  :host {
    display: flex;
    align-items: flex-start;
    flex: 1;
    min-width: 0;
  }

  :host(:last-child) .connector {
    display: none;
  }

  .step-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 0;
  }

  .top-row {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .indicator {
    flex-shrink: 0;
    width: var(--wu-stepper-indicator-size);
    height: var(--wu-stepper-indicator-size);
    border-radius: var(--wu-radius-full);
    border: 2px solid var(--wu-color-border);
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    transition: all var(--wu-duration-normal);
    position: relative;
    z-index: 1;
  }

  :host([status='active']) .indicator {
    border-color: var(--wu-color-primary);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
  }

  :host([status='complete']) .indicator {
    border-color: var(--wu-color-success);
    background: var(--wu-color-success);
    color: white;
  }

  :host([status='error']) .indicator {
    border-color: var(--wu-color-danger);
    background: var(--wu-color-danger);
    color: white;
  }

  .connector {
    flex: 1;
    height: 2px;
    background: var(--wu-stepper-connector-color);
    margin-top: calc(var(--wu-stepper-indicator-size) / 2);
    transition: background var(--wu-duration-normal);
  }

  :host([status='complete']) + wu-step .connector,
  :host([status='complete']) .connector {
    background: var(--wu-stepper-connector-active);
  }

  .content {
    padding: var(--wu-space-2) 0 0 0;
    text-align: center;
    font-family: var(--wu-font-sans);
    min-width: 0;
    padding-bottom: var(--wu-space-2);
  }

  .label {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host([status='active']) .label {
    color: var(--wu-color-text);
    font-weight: var(--wu-font-semibold);
  }

  .description {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-disabled);
    margin-top: 2px;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  .check-icon, .error-icon {
    display: block;
  }
`;var vo=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,T=(e,t,a,o)=>{for(var r=o>1?void 0:o?wo(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&vo(t,a,r),r};let te=class extends d{constructor(){super(...arguments),this.label="",this.description="",this.status="pending",this.index=0,this.disabled=!1}_renderIndicator(){return this.status==="complete"?l`
        <svg class="check-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="2 7 6 11 12 3"/>
        </svg>
      `:this.status==="error"?l`
        <svg class="error-icon" width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
          <path d="M7 1L1 12h12L7 1zm0 8v2m0-5v2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </svg>
      `:l`${this.index+1}`}render(){return l`
      <div
        class="step-wrapper"
        role="listitem"
        aria-label="Step ${this.index+1}: ${this.label}${this.status==="active"?" (current)":this.status==="complete"?" (complete)":""}"
      >
        <div class="top-row">
          <div class="indicator">${this._renderIndicator()}</div>
          <div class="connector"></div>
        </div>
        <div class="content">
          <div class="label">${this.label}</div>
          ${this.description?l`<div class="description">${this.description}</div>`:v}
        </div>
      </div>
    `}};te.styles=ho;T([n()],te.prototype,"label",2);T([n()],te.prototype,"description",2);T([n({reflect:!0})],te.prototype,"status",2);T([n({type:Number})],te.prototype,"index",2);T([n({type:Boolean,reflect:!0})],te.prototype,"disabled",2);te=T([u("wu-step")],te);let ze=class extends d{constructor(){super(...arguments),this.activeStep=0,this.linear=!1,this.vertical=!1,this._steps=[]}_setup(){const e=this.shadowRoot.querySelector("slot");e&&(this._steps=e.assignedNodes({flatten:!0}).filter(t=>t instanceof te),this._updateSteps())}_updateSteps(){this._steps.forEach((e,t)=>{t<this.activeStep?e.status="complete":t===this.activeStep?e.status="active":e.status="pending",e.index=t})}firstUpdated(){this._setup()}next(){this.activeStep<this._steps.length-1&&(this.activeStep++,this._updateSteps(),this._emit())}prev(){this.activeStep>0&&(this.activeStep--,this._updateSteps(),this._emit())}_emit(){this.dispatchEvent(new CustomEvent("wu-step-change",{bubbles:!0,composed:!0,detail:{step:this.activeStep}}))}updated(e){e.has("activeStep")&&this._updateSteps()}render(){return l`
      <div class="stepper" role="list" aria-label="Progress steps">
        <slot @slotchange=${this._setup}></slot>
      </div>
    `}};ze.styles=po;T([n({type:Number,attribute:"active-step"})],ze.prototype,"activeStep",2);T([n({type:Boolean})],ze.prototype,"linear",2);T([n({type:Boolean,reflect:!0})],ze.prototype,"vertical",2);T([p()],ze.prototype,"_steps",2);ze=T([u("wu-stepper")],ze);const bo=c`
  :host {
    display: contents;
    --wu-cmd-bg: var(--wu-color-surface-overlay, var(--wu-color-white));
    --wu-cmd-border: var(--wu-color-border);
    --wu-cmd-shadow: var(--wu-shadow-xl);
    --wu-cmd-radius: var(--wu-radius-xl);
    --wu-cmd-max-height: 480px;
  }

  .backdrop {
    display: none;
    position: fixed;
    inset: 0;
    background: rgb(0 0 0 / 0.4);
    z-index: 200;
    align-items: flex-start;
    justify-content: center;
    padding-top: 10vh;
  }

  :host([open]) .backdrop {
    display: flex;
  }

  .panel {
    width: 100%;
    max-width: 560px;
    background: var(--wu-cmd-bg);
    border: 1px solid var(--wu-cmd-border);
    border-radius: var(--wu-cmd-radius);
    box-shadow: var(--wu-cmd-shadow);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: var(--wu-cmd-max-height);
  }

  .search-row {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-cmd-border);
  }

  .search-icon {
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .search-input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    color: var(--wu-color-text);
    padding: 0;
  }

  .search-input::placeholder {
    color: var(--wu-color-text-disabled);
  }

  .list {
    overflow-y: auto;
    flex: 1;
    padding: var(--wu-space-2);
  }

  .group-label {
    padding: var(--wu-space-1) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: var(--wu-space-1);
  }

  .item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-2) var(--wu-space-3);
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    transition: background var(--wu-duration-fast);
    list-style: none;
  }

  .item:hover,
  .item[aria-selected='true'] {
    background: var(--wu-color-surface);
  }

  .item[aria-selected='true'] {
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
  }

  .item-icon {
    flex-shrink: 0;
    color: var(--wu-color-text-secondary);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-label {
    flex: 1;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: inherit;
  }

  .item-shortcut {
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-disabled);
    background: var(--wu-color-surface);
    padding: 1px 5px;
    border-radius: var(--wu-radius-sm);
    border: 1px solid var(--wu-color-border);
  }

  .empty {
    padding: var(--wu-space-8) var(--wu-space-4);
    text-align: center;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
  }

  .footer {
    border-top: 1px solid var(--wu-cmd-border);
    padding: var(--wu-space-2) var(--wu-space-4);
    display: flex;
    gap: var(--wu-space-4);
  }

  .kbd-hint {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-disabled);
  }

  kbd {
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: 3px;
    padding: 1px 4px;
  }
`;var go=Object.defineProperty,fo=Object.getOwnPropertyDescriptor,ye=(e,t,a,o)=>{for(var r=o>1?void 0:o?fo(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&go(t,a,r),r};let F=class extends d{constructor(){super(...arguments),this.open=!1,this.items=[],this.placeholder="Search commands…",this.emptyMessage="No results found.",this._query="",this._selectedIndex=0}get _filtered(){if(!this._query.trim())return this.items;const e=this._query.toLowerCase();return this.items.filter(t=>{var a,o;return t.label.toLowerCase().includes(e)||((a=t.group)==null?void 0:a.toLowerCase().includes(e))||((o=t.keywords)==null?void 0:o.some(r=>r.toLowerCase().includes(e)))})}get _grouped(){const e=new Map;for(const t of this._filtered){const a=t.group??"";e.has(a)||e.set(a,[]),e.get(a).push(t)}return e}updated(e){e.has("open")&&this.open&&(this._query="",this._selectedIndex=0,requestAnimationFrame(()=>{var t;return(t=this._input)==null?void 0:t.focus()}))}_onKeydown(e){const t=this._filtered;if(e.key==="Escape"){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}));return}if(e.key==="ArrowDown")e.preventDefault(),this._selectedIndex=Math.min(this._selectedIndex+1,t.length-1);else if(e.key==="ArrowUp")e.preventDefault(),this._selectedIndex=Math.max(this._selectedIndex-1,0);else if(e.key==="Enter"){e.preventDefault();const a=t[this._selectedIndex];a&&this._select(a)}}_select(e){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{item:e}})),this.open=!1}_onBackdropClick(e){e.target.classList.contains("backdrop")&&(this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0})))}_flatIndex(e){return this._filtered.indexOf(e)}render(){const e=this._grouped,t=this._filtered,a=[];for(const[o,r]of e.entries()){o&&a.push({type:"group",label:o});for(const s of r)a.push({type:"item",item:s,idx:this._flatIndex(s)})}return l`
      <div
        class="backdrop"
        part="backdrop"
        role="dialog"
        aria-label="Command palette"
        aria-modal="true"
        @click=${this._onBackdropClick}
        @keydown=${this._onKeydown}
      >
        <div class="panel" part="panel">
          <div class="search-row">
            <span class="search-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <circle cx="6.5" cy="6.5" r="4.5"/>
                <path d="M10 10l3 3"/>
              </svg>
            </span>
            <input
              class="search-input"
              type="text"
              role="combobox"
              aria-expanded="true"
              aria-autocomplete="list"
              aria-label="${this.placeholder}"
              placeholder=${this.placeholder}
              .value=${this._query}
              @input=${o=>{this._query=o.target.value,this._selectedIndex=0}}
            />
          </div>

          <div
            class="list"
            role="listbox"
            aria-label="Commands"
          >
            ${t.length===0?l`<div class="empty">${this.emptyMessage}</div>`:v}
            ${a.map(o=>o.type==="group"?l`<div class="group-label">${o.label}</div>`:l`
                  <div
                    class="item"
                    role="option"
                    aria-selected=${this._selectedIndex===o.idx}
                    @click=${()=>this._select(o.item)}
                    @mouseenter=${()=>{this._selectedIndex=o.idx}}
                  >
                    ${o.item.icon?l`<span class="item-icon" aria-hidden="true">${o.item.icon}</span>`:v}
                    <span class="item-label">${o.item.label}</span>
                    ${o.item.shortcut?l`<kbd class="item-shortcut">${o.item.shortcut}</kbd>`:v}
                  </div>
                `)}
          </div>

          <div class="footer">
            <span class="kbd-hint">
              <kbd>↑↓</kbd> Navigate
            </span>
            <span class="kbd-hint">
              <kbd>↵</kbd> Select
            </span>
            <span class="kbd-hint">
              <kbd>Esc</kbd> Close
            </span>
          </div>
        </div>
      </div>
    `}};F.styles=bo;ye([n({type:Boolean,reflect:!0})],F.prototype,"open",2);ye([n({type:Array})],F.prototype,"items",2);ye([n()],F.prototype,"placeholder",2);ye([n({attribute:"empty-message"})],F.prototype,"emptyMessage",2);ye([p()],F.prototype,"_query",2);ye([p()],F.prototype,"_selectedIndex",2);ye([Se(".search-input")],F.prototype,"_input",2);F=ye([u("wu-command")],F);const mo=c`
  :host {
    display: block;
    --wu-dg-border: var(--wu-color-border);
    --wu-dg-header-bg: var(--wu-color-surface);
    --wu-dg-row-hover: var(--wu-color-surface);
    --wu-dg-row-height: 40px;
    --wu-dg-font: var(--wu-font-sans);
    --wu-dg-font-size: var(--wu-text-sm);
  }

  .grid {
    border: 1px solid var(--wu-dg-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-family: var(--wu-dg-font);
    font-size: var(--wu-dg-font-size);
  }

  .toolbar {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    border-bottom: 1px solid var(--wu-dg-border);
    background: var(--wu-dg-header-bg);
  }

  .search-wrap {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
    flex: 1;
    max-width: 240px;
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    border: 1px solid var(--wu-dg-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-1) var(--wu-space-2);
  }

  .search-wrap svg {
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .search-input {
    border: none;
    outline: none;
    background: transparent;
    font-family: var(--wu-dg-font);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    width: 100%;
  }

  .search-input::placeholder {
    color: var(--wu-color-text-disabled);
  }

  .row-count {
    margin-left: auto;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .header-row {
    display: flex;
    background: var(--wu-dg-header-bg);
    border-bottom: 1px solid var(--wu-dg-border);
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .header-cell {
    flex: 1;
    min-width: 80px;
    padding: var(--wu-space-2) var(--wu-space-3);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
    -webkit-user-select: none;
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  .header-cell.sortable {
    cursor: pointer;
  }

  .header-cell.sortable:hover {
    color: var(--wu-color-text);
  }

  .sort-indicator {
    font-size: 10px;
    color: var(--wu-color-primary);
  }

  .body {
    overflow-y: auto;
    flex: 1;
  }

  .data-row {
    display: flex;
    border-bottom: 1px solid var(--wu-dg-border);
    min-height: var(--wu-dg-row-height);
  }

  .data-row:last-child {
    border-bottom: none;
  }

  .data-row:hover {
    background: var(--wu-dg-row-hover);
  }

  .cell {
    flex: 1;
    min-width: 80px;
    padding: var(--wu-space-2) var(--wu-space-3);
    color: var(--wu-color-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  .empty {
    padding: var(--wu-space-12) var(--wu-space-4);
    text-align: center;
    color: var(--wu-color-text-secondary);
  }

  .pagination-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-2) var(--wu-space-3);
    border-top: 1px solid var(--wu-dg-border);
    background: var(--wu-dg-header-bg);
    gap: var(--wu-space-2);
    flex-wrap: wrap;
  }

  .page-info {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .page-controls {
    display: flex;
    gap: var(--wu-space-1);
  }

  .page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 28px;
    height: 28px;
    padding: 0 var(--wu-space-1);
    border: 1px solid var(--wu-dg-border);
    border-radius: var(--wu-radius-sm);
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    font-family: var(--wu-dg-font);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text);
    cursor: pointer;
    transition: background var(--wu-duration-fast);
  }

  .page-btn:hover:not(:disabled) {
    background: var(--wu-color-surface);
  }

  .page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .page-btn.active {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border-color: var(--wu-color-primary);
  }

  .page-size-select {
    font-family: var(--wu-dg-font);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text);
    border: 1px solid var(--wu-dg-border);
    border-radius: var(--wu-radius-sm);
    padding: 2px var(--wu-space-1);
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    cursor: pointer;
  }
`;var yo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,N=(e,t,a,o)=>{for(var r=o>1?void 0:o?xo(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&yo(t,a,r),r};let $=class extends d{constructor(){super(...arguments),this.columns=[],this.data=[],this.totalRows=0,this.page=1,this.pageSize=10,this.showToolbar=!0,this.emptyMessage="No data to display.",this._sortKey="",this._sortDir="asc",this._filter=""}get _filteredData(){if(!this._filter.trim())return this.data;const e=this._filter.toLowerCase();return this.data.filter(t=>this.columns.some(a=>String(t[a.key]??"").toLowerCase().includes(e)))}get _sortedData(){return this._sortKey?[...this._filteredData].sort((e,t)=>{const a=String(e[this._sortKey]??""),o=String(t[this._sortKey]??""),r=a.localeCompare(o);return this._sortDir==="asc"?r:-r}):this._filteredData}get _pageData(){if(this.totalRows>this.data.length)return this._sortedData;const e=(this.page-1)*this.pageSize;return this._sortedData.slice(e,e+this.pageSize)}get _totalPages(){const e=this.totalRows||this._filteredData.length;return Math.max(1,Math.ceil(e/this.pageSize))}_sort(e,t){t&&(this._sortKey===e?this._sortDir=this._sortDir==="asc"?"desc":"asc":(this._sortKey=e,this._sortDir="asc"),this.dispatchEvent(new CustomEvent("wu-sort-change",{bubbles:!0,composed:!0,detail:{key:this._sortKey,direction:this._sortDir}})))}_onFilter(e){this._filter=e.target.value,this.page=1,this.dispatchEvent(new CustomEvent("wu-filter-change",{bubbles:!0,composed:!0,detail:{query:this._filter}}))}_goPage(e){e<1||e>this._totalPages||(this.page=e,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:this.page,pageSize:this.pageSize}})))}_onPageSize(e){this.pageSize=Number(e.target.value),this.page=1,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:this.page,pageSize:this.pageSize}}))}_pageButtons(){const e=this._totalPages,t=this.page,a=[];if(e<=7)for(let o=1;o<=e;o++)a.push(o);else{a.push(1),t>3&&a.push("dots");for(let o=Math.max(2,t-1);o<=Math.min(e-1,t+1);o++)a.push(o);t<e-2&&a.push("dots"),a.push(e)}return a}render(){const e=this._pageData,t=this.totalRows||this._filteredData.length;return l`
      <div class="grid" part="grid">
        ${this.showToolbar?l`
          <div class="toolbar">
            <div class="search-wrap">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                <circle cx="6.5" cy="6.5" r="4.5"/>
                <path d="M10 10l3 3"/>
              </svg>
              <input
                class="search-input"
                type="text"
                placeholder="Filter…"
                aria-label="Filter rows"
                .value=${this._filter}
                @input=${this._onFilter}
              />
            </div>
            <span class="row-count" aria-live="polite">${t} row${t!==1?"s":""}</span>
          </div>
        `:v}

        <div class="header-row" role="row">
          ${this.columns.map(a=>l`
            <div
              class=${`header-cell${a.sortable?" sortable":""}${this._sortKey===a.key?" sorted":""}`}
              style=${a.width?`flex: 0 0 ${a.width}`:""}
              role="columnheader"
              aria-sort=${this._sortKey===a.key?this._sortDir==="asc"?"ascending":"descending":"none"}
              @click=${()=>this._sort(a.key,a.sortable)}
            >
              ${a.label}
              ${a.sortable&&this._sortKey===a.key?l`<span class="sort-indicator">${this._sortDir==="asc"?"▲":"▼"}</span>`:v}
            </div>
          `)}
        </div>

        <div class="body" role="rowgroup">
          ${e.length===0?l`<div class="empty">${this.emptyMessage}</div>`:v}
          ${e.map((a,o)=>l`
            <div class="data-row" role="row" aria-rowindex=${(this.page-1)*this.pageSize+o+2}>
              ${this.columns.map(r=>l`
                <div
                  class="cell"
                  role="gridcell"
                  style=${r.width?`flex: 0 0 ${r.width}`:""}
                >${a[r.key]??""}</div>
              `)}
            </div>
          `)}
        </div>

        ${this._totalPages>1?l`
          <div class="pagination-bar" role="navigation" aria-label="Pagination">
            <div style="display:flex;align-items:center;gap:8px">
              <span class="page-info">
                Rows per page:
              </span>
              <select class="page-size-select" aria-label="Rows per page" @change=${this._onPageSize}>
                ${[10,25,50,100].map(a=>l`
                  <option value=${a} ?selected=${this.pageSize===a}>${a}</option>
                `)}
              </select>
              <span class="page-info">
                ${Math.min((this.page-1)*this.pageSize+1,t)}–${Math.min(this.page*this.pageSize,t)} of ${t}
              </span>
            </div>
            <div class="page-controls">
              <button class="page-btn" ?disabled=${this.page===1} @click=${()=>this._goPage(this.page-1)} aria-label="Previous page">‹</button>
              ${this._pageButtons().map(a=>a==="dots"?l`<span class="page-btn" aria-hidden="true" style="border:none;background:none;cursor:default">…</span>`:l`<button class="page-btn ${this.page===a?"active":""}" aria-label="Page ${a}" aria-current=${this.page===a?"page":v} @click=${()=>this._goPage(a)}>${a}</button>`)}
              <button class="page-btn" ?disabled=${this.page===this._totalPages} @click=${()=>this._goPage(this.page+1)} aria-label="Next page">›</button>
            </div>
          </div>
        `:v}
      </div>
    `}};$.styles=mo;N([n({type:Array})],$.prototype,"columns",2);N([n({type:Array})],$.prototype,"data",2);N([n({type:Number,attribute:"total-rows"})],$.prototype,"totalRows",2);N([n({type:Number})],$.prototype,"page",2);N([n({type:Number,attribute:"page-size"})],$.prototype,"pageSize",2);N([n({type:Boolean,attribute:"show-toolbar"})],$.prototype,"showToolbar",2);N([n({attribute:"empty-message"})],$.prototype,"emptyMessage",2);N([p()],$.prototype,"_sortKey",2);N([p()],$.prototype,"_sortDir",2);N([p()],$.prototype,"_filter",2);$=N([u("wu-data-grid")],$);const ko=c`
  :host {
    display: block;

    --wu-navbar-height:   60px;
    --wu-navbar-bg:      var(--wu-color-background);
    --wu-navbar-border:  var(--wu-color-border);
    --wu-navbar-padding: var(--wu-space-4);
    --wu-navbar-gap:     var(--wu-space-4);
    --wu-navbar-z:       100;
  }

  :host([sticky]) .bar {
    position: sticky;
    top: 0;
    z-index: var(--wu-navbar-z);
  }

  :host([fixed]) .bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--wu-navbar-z);
  }

  .bar {
    display: flex;
    align-items: center;
    height: var(--wu-navbar-height);
    padding: 0 var(--wu-navbar-padding);
    background: var(--wu-navbar-bg);
    border-bottom: 1px solid var(--wu-navbar-border);
    gap: var(--wu-navbar-gap);
  }

  /* ── Logo ────────────────────────────────── */
  .logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none;
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
  }

  /* ── nav slot fills remaining space ─────── */
  .nav {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
    flex: 1;
  }

  /* ── actions stay right ──────────────────── */
  .actions {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    flex-shrink: 0;
  }

  /* ── Mobile burger ───────────────────────── */
  .burger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    background: none;
    border: 1px solid var(--wu-navbar-border);
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .burger:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  /* ── Mobile drawer ───────────────────────── */
  .drawer {
    display: none;
    flex-direction: column;
    background: var(--wu-navbar-bg);
    border-bottom: 1px solid var(--wu-navbar-border);
    padding: var(--wu-space-3) var(--wu-navbar-padding);
    gap: var(--wu-space-1);
  }

  :host([_open]) .drawer { display: flex; }

  /* ── Responsive breakpoint ───────────────── */
  @media (max-width: 768px) {
    .nav { display: none; }
    .burger { display: inline-flex; }
  }
`;var _o=Object.defineProperty,$o=Object.getOwnPropertyDescriptor,Ft=(e,t,a,o)=>{for(var r=o>1?void 0:o?$o(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&_o(t,a,r),r};let We=class extends d{constructor(){super(...arguments),this.sticky=!1,this.fixed=!1,this._open=!1}_toggleDrawer(){this._open=!this._open,this._open?this.setAttribute("_open",""):this.removeAttribute("_open"),this.dispatchEvent(new CustomEvent(this._open?"wu-menu-open":"wu-menu-close",{bubbles:!0,composed:!0}))}render(){return l`
      <header part="bar" class="bar">
        <a class="logo" part="logo" aria-label="Home">
          <slot name="logo"></slot>
        </a>
        <nav class="nav" part="nav" aria-label="Main navigation">
          <slot></slot>
        </nav>
        <div class="actions" part="actions">
          <slot name="actions"></slot>
        </div>
        <button
          part="burger"
          class="burger"
          aria-label="Toggle navigation"
          aria-expanded=${this._open}
          aria-controls="mobile-drawer"
          @click=${this._toggleDrawer}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round">
            ${this._open?l`<path d="M2 2l14 14M16 2L2 16"/>`:l`<path d="M2 4h14M2 9h14M2 14h14"/>`}
          </svg>
        </button>
      </header>
      <nav id="mobile-drawer" part="drawer" class="drawer"
           aria-label="Mobile navigation" aria-hidden=${!this._open}>
        <slot name="mobile"><slot></slot></slot>
      </nav>
    `}};We.styles=ko;Ft([n({type:Boolean,reflect:!0})],We.prototype,"sticky",2);Ft([n({type:Boolean,reflect:!0})],We.prototype,"fixed",2);Ft([p()],We.prototype,"_open",2);We=Ft([u("wu-navbar")],We);const zo=c`
  :host {
    display: flex;
    flex-direction: column;

    --wu-sidebar-width:          240px;
    --wu-sidebar-collapsed-width: 64px;
    --wu-sidebar-bg:             var(--wu-color-surface);
    --wu-sidebar-border:         var(--wu-color-border);
    --wu-sidebar-padding:        var(--wu-space-3);
    --wu-sidebar-transition:     width var(--wu-duration-normal) var(--wu-ease-default);
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    width: var(--wu-sidebar-width);
    height: 100%;
    background: var(--wu-sidebar-bg);
    border-right: 1px solid var(--wu-sidebar-border);
    overflow: hidden;
    transition: var(--wu-sidebar-transition);
    flex-shrink: 0;
  }

  :host([collapsed]) .sidebar {
    width: var(--wu-sidebar-collapsed-width);
  }

  /* ── Header ──────────────────────────────── */
  .header {
    display: flex;
    align-items: center;
    padding: var(--wu-sidebar-padding);
    border-bottom: 1px solid var(--wu-sidebar-border);
    gap: var(--wu-space-3);
    min-height: 60px;
    flex-shrink: 0;
  }

  .header-slot {
    flex: 1;
    overflow: hidden;
    transition: opacity var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([collapsed]) .header-slot {
    opacity: 0;
    pointer-events: none;
    width: 0;
  }

  /* ── Toggle button ───────────────────────── */
  .toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    background: none;
    border: 1px solid var(--wu-sidebar-border);
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .toggle:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .toggle-icon {
    transition: transform var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([collapsed]) .toggle-icon {
    transform: rotate(180deg);
  }

  /* ── Nav items area ──────────────────────── */
  .body {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: var(--wu-sidebar-padding);
    scrollbar-width: thin;
  }

  /* ── Footer ──────────────────────────────── */
  .footer {
    padding: var(--wu-sidebar-padding);
    border-top: 1px solid var(--wu-sidebar-border);
    flex-shrink: 0;
  }

  :host(:not([collapsed])) .footer:empty { display: none; }
`,Co=c`
  :host {
    display: block;

    --wu-sidebar-item-bg-hover:  var(--wu-color-surface-raised);
    --wu-sidebar-item-bg-active: var(--wu-color-primary-subtle);
    --wu-sidebar-item-color:     var(--wu-color-text-secondary);
    --wu-sidebar-item-color-active: var(--wu-color-primary);
    --wu-sidebar-item-radius:    var(--wu-radius-md);
    --wu-sidebar-item-font-size: var(--wu-text-sm);
  }

  a, .item-btn {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-2) var(--wu-space-3);
    border-radius: var(--wu-sidebar-item-radius);
    text-decoration: none;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-sidebar-item-font-size);
    font-weight: var(--wu-font-medium);
    color: var(--wu-sidebar-item-color);
    cursor: pointer;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    transition: background var(--wu-duration-fast) var(--wu-ease-default),
                color var(--wu-duration-fast) var(--wu-ease-default);
    white-space: nowrap;
    overflow: hidden;
  }

  a:hover, .item-btn:hover { background: var(--wu-sidebar-item-bg-hover); }
  a:focus-visible, .item-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  :host([active]) a, :host([active]) .item-btn {
    background: var(--wu-sidebar-item-bg-active);
    color: var(--wu-sidebar-item-color-active);
    font-weight: var(--wu-font-semibold);
  }

  :host([disabled]) a, :host([disabled]) .item-btn {
    opacity: 0.45;
    pointer-events: none;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    color: inherit;
  }

  .label {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity var(--wu-duration-normal) var(--wu-ease-default),
                width var(--wu-duration-normal) var(--wu-ease-default);
  }

  /* Hidden by parent when sidebar is collapsed */
  :host([collapsed]) .label {
    opacity: 0;
    width: 0;
    overflow: hidden;
  }
`;var Eo=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,Ae=(e,t,a,o)=>{for(var r=o>1?void 0:o?Oo(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Eo(t,a,r),r};let Ge=class extends d{constructor(){super(...arguments),this.active=!1,this.disabled=!1}_handleClick(){this.disabled||this.href||this.dispatchEvent(new CustomEvent("wu-nav",{bubbles:!0,composed:!0,detail:{item:this}}))}render(){const e=l`
      <span class="icon" aria-hidden="true"><slot name="icon"></slot></span>
      <span class="label"><slot></slot></span>
    `;return this.href?l`<a href=${w(this.href)} aria-current=${w(this.active?"page":void 0)}>${e}</a>`:l`<button class="item-btn" ?disabled=${this.disabled} @click=${this._handleClick}>${e}</button>`}};Ge.styles=Co;Ae([n()],Ge.prototype,"href",2);Ae([n({type:Boolean,reflect:!0})],Ge.prototype,"active",2);Ae([n({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);Ge=Ae([u("wu-sidebar-item")],Ge);let _t=class extends d{constructor(){super(...arguments),this.collapsed=!1,this.hideToggle=!1}_toggle(){this.collapsed=!this.collapsed,this.querySelectorAll("wu-sidebar-item").forEach(e=>{this.collapsed?e.setAttribute("collapsed",""):e.removeAttribute("collapsed")}),this.dispatchEvent(new CustomEvent("wu-collapse",{bubbles:!0,composed:!0,detail:{collapsed:this.collapsed}}))}render(){return l`
      <aside part="sidebar" class="sidebar" aria-label="Sidebar navigation">
        <div part="header" class="header">
          <div class="header-slot"><slot name="header"></slot></div>
          ${this.hideToggle?"":l`
            <button
              part="toggle"
              class="toggle"
              aria-label=${this.collapsed?"Expand sidebar":"Collapse sidebar"}
              aria-expanded=${!this.collapsed}
              @click=${this._toggle}
            >
              <svg class="toggle-icon" width="16" height="16" viewBox="0 0 16 16"
                   fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M10 4L6 8l4 4"/>
              </svg>
            </button>
          `}
        </div>
        <nav part="body" class="body">
          <slot></slot>
        </nav>
        <div part="footer" class="footer">
          <slot name="footer"></slot>
        </div>
      </aside>
    `}};_t.styles=zo;Ae([n({type:Boolean,reflect:!0})],_t.prototype,"collapsed",2);Ae([n({type:Boolean,attribute:"hide-toggle"})],_t.prototype,"hideToggle",2);_t=Ae([u("wu-sidebar")],_t);const Po=c`
  :host {
    display: block;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-4);
  }

  /* ── Error summary ──────────────────────── */
  .error-summary {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-2);
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-color-danger-subtle, var(--wu-color-red-50));
    border: 1px solid var(--wu-color-danger);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-danger);
  }

  .error-summary-title {
    font-weight: var(--wu-font-semibold);
  }

  .error-summary ul {
    margin: 0;
    padding-left: var(--wu-space-5);
  }

  .error-summary li {
    line-height: var(--wu-leading-normal);
  }

  /* ── Fields area ────────────────────────── */
  .fields {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-4);
  }

  /* ── Actions row ────────────────────────── */
  .actions {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding-top: var(--wu-space-2);
  }
`;var jo=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,Yt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Do(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&jo(t,a,r),r};let Je=class extends d{constructor(){super(...arguments),this.novalidate=!1,this.loading=!1,this._errors=[]}_handleSubmit(e){e.preventDefault();const t=[...Array.from(this.querySelectorAll("input, select, textarea"))];if(!this.novalidate){const o=[];if(t.forEach(r=>{if(!r.disabled&&typeof r.checkValidity=="function"&&!r.checkValidity()){const s=r.validationMessage;s&&o.push(s)}}),o.length>0){this._errors=[...new Set(o)],this.dispatchEvent(new CustomEvent("wu-invalid",{bubbles:!0,composed:!0,detail:{errors:this._errors}}));return}}this._errors=[];const a={};t.forEach(o=>{!o.name||o.disabled||(o instanceof HTMLInputElement&&(o.type==="checkbox"||o.type==="radio")?o.checked&&(a[o.name]=o.value):a[o.name]=o.value)}),this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{values:a}}))}render(){return l`
      <form
        part="base"
        ?novalidate=${!0}
        aria-busy=${this.loading}
        @submit=${this._handleSubmit}
      >
        ${this._errors.length?l`
          <div part="summary" class="error-summary" role="alert" aria-live="assertive">
            <span class="error-summary-title">Please fix the following errors:</span>
            <ul>${this._errors.map(e=>l`<li>${e}</li>`)}</ul>
          </div>
        `:""}
        <div part="fields" class="fields">
          <slot></slot>
        </div>
        <div part="actions" class="actions">
          <slot name="actions"></slot>
        </div>
      </form>
    `}};Je.styles=Po;Yt([n({type:Boolean})],Je.prototype,"novalidate",2);Yt([n({type:Boolean,reflect:!0})],Je.prototype,"loading",2);Yt([p()],Je.prototype,"_errors",2);Je=Yt([u("wu-form")],Je);const So=c`
  :host {
    display: block;
    height: 100%;
  }

  .shell {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /* ── Top bar area ─────────────────────── */
  .topbar {
    display: contents;
  }

  /* ── Body: sidebar + main ─────────────── */
  .body {
    display: flex;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }

  .sidearea {
    display: contents;
  }

  /* ── Main content ─────────────────────── */
  main {
    flex: 1;
    overflow-y: auto;
    background: var(--wu-color-background);
  }

  .main-inner {
    padding: var(--wu-space-6);
    max-width: 1280px;
  }

  :host([full-width]) .main-inner {
    max-width: none;
  }
`;var Mo=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,kr=(e,t,a,o)=>{for(var r=o>1?void 0:o?Bo(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Mo(t,a,r),r};let Lt=class extends d{constructor(){super(...arguments),this.fullWidth=!1}render(){return l`
      <div part="shell" class="shell">
        <div class="topbar">
          <slot name="navbar"></slot>
        </div>
        <div part="body" class="body">
          <div class="sidearea">
            <slot name="sidebar"></slot>
          </div>
          <main part="main">
            <div class="main-inner">
              <slot></slot>
            </div>
          </main>
        </div>
      </div>
    `}};Lt.styles=So;kr([n({type:Boolean,attribute:"full-width",reflect:!0})],Lt.prototype,"fullWidth",2);Lt=kr([u("wu-dashboard")],Lt);const Io=c`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--wu-space-12) var(--wu-space-6);

    --wu-empty-icon-color: var(--wu-color-text-disabled);
    --wu-empty-title-color: var(--wu-color-text);
    --wu-empty-desc-color: var(--wu-color-text-secondary);
  }

  .icon {
    margin-bottom: var(--wu-space-4);
    color: var(--wu-empty-icon-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    margin: 0 0 var(--wu-space-2);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-empty-title-color);
    line-height: var(--wu-leading-tight);
  }

  .description {
    margin: 0 0 var(--wu-space-6);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-empty-desc-color);
    line-height: var(--wu-leading-normal);
    max-width: 360px;
  }

  .description:empty { display: none; }

  .actions {
    display: flex;
    gap: var(--wu-space-3);
    flex-wrap: wrap;
    justify-content: center;
  }

  .actions:empty { display: none; }
`;var Lo=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,pr=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ao(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Lo(t,a,r),r};let $t=class extends d{constructor(){super(...arguments),this.title="",this.description=""}render(){return l`
      <div class="icon" part="icon">
        <slot name="icon">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8" y="8" width="32" height="32" rx="4"
              stroke="currentColor" stroke-width="2" fill="none"
            />
            <path
              d="M16 24h16M16 30h10"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"
            />
            <circle cx="24" cy="18" r="3" stroke="currentColor" stroke-width="2" fill="none" />
          </svg>
        </slot>
      </div>

      ${this.title?l`<p class="title" part="title">${this.title}</p>`:""}

      <p class="description" part="description">
        ${this.description}
        <slot></slot>
      </p>

      <div class="actions" part="actions">
        <slot name="actions"></slot>
      </div>
    `}};$t.styles=Io;pr([n()],$t.prototype,"title",2);pr([n()],$t.prototype,"description",2);$t=pr([u("wu-empty-state")],$t);const To=c`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--wu-space-16) var(--wu-space-6);
    min-height: 400px;

    --wu-error-code-color: var(--wu-color-text-disabled);
    --wu-error-title-color: var(--wu-color-text);
    --wu-error-desc-color: var(--wu-color-text-secondary);
  }

  .icon {
    margin-bottom: var(--wu-space-6);
    color: var(--wu-color-text-disabled);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .code {
    font-family: var(--wu-font-mono);
    font-size: 5rem;
    font-weight: var(--wu-font-bold);
    line-height: 1;
    color: var(--wu-error-code-color);
    margin: 0 0 var(--wu-space-4);
    letter-spacing: -0.02em;
  }

  .title {
    margin: 0 0 var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-2xl);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-error-title-color);
    line-height: var(--wu-leading-tight);
  }

  .description {
    margin: 0 0 var(--wu-space-8);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    color: var(--wu-error-desc-color);
    line-height: var(--wu-leading-normal);
    max-width: 480px;
  }

  .actions {
    display: flex;
    gap: var(--wu-space-3);
    flex-wrap: wrap;
    justify-content: center;
  }

  .actions:empty { display: none; }
`;var No=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,Vt=(e,t,a,o)=>{for(var r=o>1?void 0:o?qo(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&No(t,a,r),r};const Ko={400:"Bad Request",401:"Unauthorised",403:"Access Denied",404:"Page Not Found",408:"Request Timeout",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout"},Ro={400:"The server couldn't understand the request. Please check the URL or contact support.",401:"You need to be authenticated to access this page. Please sign in and try again.",403:"You don't have permission to access this page. Contact your administrator if this is a mistake.",404:"We can't find the page you're looking for. It may have been moved or deleted.",408:"The request took too long to process. Please check your connection and try again.",500:"Something went wrong on our end. Our team has been notified.",502:"The server received an invalid response. Please try again in a moment.",503:"This service is temporarily unavailable. Please try again shortly.",504:"The server took too long to respond. Please try again in a moment."};let Ze=class extends d{constructor(){super(...arguments),this.code="404",this.title="",this.description=""}_resolvedTitle(){return this.title||Ko[this.code]||"An error occurred"}_resolvedDescription(){return this.description||Ro[this.code]||"An unexpected error occurred. Please try again."}render(){return l`
      <div class="icon" aria-hidden="true">
        <slot name="icon">
          <span class="code" part="code">${this.code}</span>
        </slot>
      </div>

      <p class="title" part="title">${this._resolvedTitle()}</p>
      <p class="description" part="description">${this._resolvedDescription()}</p>

      <div class="actions" part="actions">
        <slot name="actions"></slot>
      </div>
    `}};Ze.styles=To;Vt([n({reflect:!0})],Ze.prototype,"code",2);Vt([n()],Ze.prototype,"title",2);Vt([n()],Ze.prototype,"description",2);Ze=Vt([u("wu-error-page")],Ze);const Ho=c`
  :host {
    display: inline-flex;
    position: relative;
    width: 100%;

    --wu-search-bg:          var(--wu-color-surface);
    --wu-search-border:      var(--wu-color-border);
    --wu-search-border-focus:var(--wu-color-border-focus);
    --wu-search-color:       var(--wu-color-text);
    --wu-search-placeholder: var(--wu-color-text-disabled);
    --wu-search-icon-color:  var(--wu-color-text-secondary);
    --wu-search-radius:      var(--wu-radius-md);
    --wu-search-height:      40px;
    --wu-search-font-size:   var(--wu-text-sm);
    --wu-search-padding-x:   var(--wu-space-4);
  }

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--wu-search-height);
    background: var(--wu-search-bg);
    border: 1px solid var(--wu-search-border);
    border-radius: var(--wu-search-radius);
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default),
                box-shadow  var(--wu-duration-fast) var(--wu-ease-default);
  }

  .wrapper:focus-within {
    border-color: var(--wu-search-border-focus);
    box-shadow: var(--wu-focus-ring);
    outline: none;
  }

  .icon-search {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding-left: var(--wu-search-padding-x);
    color: var(--wu-search-icon-color);
    pointer-events: none;
  }

  input {
    flex: 1;
    height: 100%;
    padding: 0 var(--wu-space-2);
    background: transparent;
    border: none;
    outline: none;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-search-font-size);
    color: var(--wu-search-color);
    min-width: 0;
  }

  input::placeholder {
    color: var(--wu-search-placeholder);
  }

  .actions {
    display: flex;
    align-items: center;
    padding-right: var(--wu-space-2);
    gap: var(--wu-space-1);
  }

  button.clear {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    color: var(--wu-search-icon-color);
    padding: 0;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  button.clear:hover {
    background: var(--wu-color-surface-raised);
    color: var(--wu-color-text);
  }

  button.clear:focus-visible {
    outline: 2px solid var(--wu-color-border-focus);
    outline-offset: 1px;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid var(--wu-search-icon-color);
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    flex-shrink: 0;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
`;var Fo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,Te=(e,t,a,o)=>{for(var r=o>1?void 0:o?Yo(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Fo(t,a,r),r};let re=class extends d{constructor(){super(...arguments),this.value="",this.placeholder="Search…",this.loading=!1,this.clearable=!0,this.debounce=300,this._value="",this._debounceTimer=null}connectedCallback(){super.connectedCallback(),this._value=this.value}updated(e){e.has("value")&&this.value!==this._value&&(this._value=this.value)}_handleInput(e){const t=e.target;this._value=t.value,this.value=this._value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this._value}})),this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{value:this._value}}))},this.debounce)}_handleClear(){var e,t;this._value="",this.value="",this._debounceTimer&&clearTimeout(this._debounceTimer),this.dispatchEvent(new CustomEvent("wu-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{value:""}})),(t=(e=this.shadowRoot)==null?void 0:e.querySelector("input"))==null||t.focus()}_handleKeyDown(e){e.key==="Escape"&&this._value&&(e.preventDefault(),this._handleClear())}render(){const e=this.clearable&&!this.loading&&this._value.length>0;return l`
      <div class="wrapper" part="wrapper">
        <span class="icon-search" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.5"/>
            <path d="m10 10 3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>

        <input
          part="input"
          type="search"
          .value=${this._value}
          placeholder=${this.placeholder}
          aria-label=${this.placeholder}
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown}
        />

        <div class="actions">
          ${this.loading?l`<span class="spinner" role="status" aria-label="Loading"></span>`:""}
          ${e?l`
                <button
                  class="clear"
                  type="button"
                  aria-label="Clear search"
                  @click=${this._handleClear}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              `:""}
        </div>
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}};re.styles=Ho;Te([n()],re.prototype,"value",2);Te([n()],re.prototype,"placeholder",2);Te([n({type:Boolean,reflect:!0})],re.prototype,"loading",2);Te([n({type:Boolean})],re.prototype,"clearable",2);Te([n({type:Number})],re.prototype,"debounce",2);Te([p()],re.prototype,"_value",2);re=Te([u("wu-search")],re);const Vo=c`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);

    --wu-dt-border:       var(--wu-color-border);
    --wu-dt-row-hover:    var(--wu-color-surface);
    --wu-dt-header-bg:    var(--wu-color-surface);
    --wu-dt-selected-bg:  var(--wu-color-primary-subtle);
    --wu-dt-radius:       var(--wu-radius-lg);
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--wu-space-3);
    margin-bottom: var(--wu-space-3);
    flex-wrap: wrap;
  }

  .toolbar wu-search {
    max-width: 280px;
    flex: 1;
  }

  .container {
    position: relative;
    border: 1px solid var(--wu-dt-border);
    border-radius: var(--wu-dt-radius);
    overflow: hidden;
  }

  .table-wrap {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background: var(--wu-dt-header-bg);
    position: sticky;
    top: 0;
    z-index: 1;
  }

  th {
    padding: var(--wu-space-3) var(--wu-space-4);
    text-align: left;
    font-weight: var(--wu-font-semibold);
    font-size: var(--wu-text-xs);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--wu-color-text-secondary);
    border-bottom: 1px solid var(--wu-dt-border);
    white-space: nowrap;
    user-select: none;
  }

  th.sortable {
    cursor: pointer;
  }

  th.sortable:hover {
    color: var(--wu-color-text);
  }

  .sort-icon {
    display: inline-flex;
    vertical-align: middle;
    margin-left: var(--wu-space-1);
    opacity: 0.4;
  }

  th.sorted .sort-icon {
    opacity: 1;
    color: var(--wu-color-primary);
  }

  td {
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-dt-border);
    vertical-align: middle;
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover td {
    background: var(--wu-dt-row-hover);
  }

  tr.selected td {
    background: var(--wu-dt-selected-bg);
  }

  .checkbox-col {
    width: 40px;
    padding-left: var(--wu-space-4);
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: var(--wu-color-primary);
    cursor: pointer;
  }

  .empty-row td {
    text-align: center;
    padding: var(--wu-space-8) var(--wu-space-4);
    color: var(--wu-color-text-secondary);
  }

  .loading-overlay {
    position: absolute;
    inset: 0;
    background: color-mix(in srgb, var(--wu-color-background) 80%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .spinner {
    width: 28px;
    height: 28px;
    border: 3px solid var(--wu-color-border);
    border-top-color: var(--wu-color-primary);
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    border-top: 1px solid var(--wu-dt-border);
    background: var(--wu-dt-header-bg);
    gap: var(--wu-space-4);
    flex-wrap: wrap;
  }

  .footer-info {
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-xs);
    flex-shrink: 0;
  }

  .pagination-btns {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  button.page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    padding: 0 var(--wu-space-2);
    background: transparent;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  button.page-btn:hover:not(:disabled) {
    background: var(--wu-color-surface-raised);
  }

  button.page-btn.active {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border-color: var(--wu-color-primary);
  }

  button.page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  button.page-btn:focus-visible {
    box-shadow: var(--wu-focus-ring);
    outline: none;
  }
`;var Uo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,C=(e,t,a,o)=>{for(var r=o>1?void 0:o?Xo(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Uo(t,a,r),r};let b=class extends d{constructor(){super(...arguments),this.columns=[],this.rows=[],this.total=0,this.page=1,this.pageSize=10,this.loading=!1,this.selectable=!1,this.searchable=!1,this.emptyMessage="No data to display.",this._selected=new Set,this._sortKey=null,this._sortDir=null}_emitPageChange(e){this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:e,pageSize:this.pageSize}}))}_emitSortChange(e,t){this.dispatchEvent(new CustomEvent("wu-sort-change",{bubbles:!0,composed:!0,detail:{key:e,direction:t}}))}_emitSelectionChange(){this.dispatchEvent(new CustomEvent("wu-selection-change",{bubbles:!0,composed:!0,detail:{selected:[...this._selected]}}))}_handleSort(e){if(e.sortable){if(this._sortKey===e.key){const t=this._sortDir==="asc"?"desc":this._sortDir==="desc"?null:"asc";this._sortDir=t,t===null&&(this._sortKey=null)}else this._sortKey=e.key,this._sortDir="asc";this._emitSortChange(this._sortKey??e.key,this._sortDir)}}_handleSelectRow(e){this._selected.has(e)?this._selected.delete(e):this._selected.add(e),this._selected=new Set(this._selected),this._emitSelectionChange()}_handleSelectAll(e){const t=e.target.checked;this._selected=t?new Set(this.rows):new Set,this._emitSelectionChange()}_handleSearch(e){this.dispatchEvent(new CustomEvent("wu-search-change",{bubbles:!0,composed:!0,detail:{value:e.detail.value}}))}_sortIcon(e){if(!e.sortable)return v;const t=this._sortKey===e.key?this._sortDir:null;return l`
      <span class="sort-icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="${t==="asc"?"M6 9l4-4 4 4":t==="desc"?"M6 7l4 4 4-4":"M6 8.5l3.5-3 3.5 3M6 11.5l3.5 3 3.5-3"}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    `}_buildPages(e){const t=[],a=[];for(let o=Math.max(2,this.page-2);o<=Math.min(e-1,this.page+2);o++)a.push(o);return this.page-2>2&&a.unshift(-1),this.page+2<e-1&&a.push(-2),t.push(1),a.forEach(o=>t.push(o<0?"…":o)),e>1&&t.push(e),t}render(){const e=this.rows.length>0&&this._selected.size===this.rows.length,t=this._selected.size>0&&!e,a=Math.max(1,Math.ceil(this.total/this.pageSize)),o=a<=1&&this.total<=this.pageSize,r=Math.min((this.page-1)*this.pageSize+1,Math.max(this.total,0)),s=Math.min(this.page*this.pageSize,this.total),i=this._buildPages(a);return l`
      <div class="toolbar" part="toolbar" ?hidden=${!this.searchable}>
        <wu-search
          placeholder="Search…"
          @wu-search=${this._handleSearch}
        ></wu-search>
      </div>

      <div class="container" part="container">
        <div class="loading-overlay" ?hidden=${!this.loading}>
          <span class="spinner" role="status" aria-label="Loading"></span>
        </div>

        <div class="table-wrap">
          <table part="table" role="grid" aria-rowcount=${this.total}>
            <thead>
              <tr>
                ${this.selectable?l`
                      <th class="checkbox-col">
                        <input
                          type="checkbox"
                          aria-label="Select all rows"
                          .checked=${e}
                          .indeterminate=${t}
                          @change=${this._handleSelectAll}
                        />
                      </th>
                    `:v}
                ${this.columns.map(h=>l`
                  <th
                    class="${h.sortable?"sortable":""} ${this._sortKey===h.key?"sorted":""}"
                    style="${h.width?`width:${h.width}`:""}"
                    @click=${()=>this._handleSort(h)}
                    aria-sort=${this._sortKey===h.key?this._sortDir==="asc"?"ascending":"descending":v}
                  >
                    ${h.label}${this._sortIcon(h)}
                  </th>
                `)}
              </tr>
            </thead>
            <tbody>
              ${this.rows.length===0?l`
                    <tr class="empty-row">
                      <td colspan="${this.columns.length+(this.selectable?1:0)}">
                        ${this.emptyMessage}
                      </td>
                    </tr>
                  `:this.rows.map(h=>l`
                    <tr
                      class="${this._selected.has(h)?"selected":""}"
                      aria-selected=${this._selected.has(h)?"true":"false"}
                    >
                      ${this.selectable?l`
                            <td class="checkbox-col">
                              <input
                                type="checkbox"
                                aria-label="Select row"
                                .checked=${this._selected.has(h)}
                                @change=${()=>this._handleSelectRow(h)}
                              />
                            </td>
                          `:v}
                      ${this.columns.map(f=>l`
                        <td title=${String(h[f.key]??"")}>
                          ${h[f.key]!=null?String(h[f.key]):"—"}
                        </td>
                      `)}
                    </tr>
                  `)}
            </tbody>
          </table>
        </div>

        <div class="footer" part="footer" ?hidden=${o}>
          <span class="footer-info">
            ${this.total>0?`${r}–${s} of ${this.total}`:"No results"}
          </span>
          <nav class="pagination-btns" aria-label="Pagination">
            <button
              class="page-btn"
              ?disabled=${this.page<=1}
              aria-label="Previous page"
              @click=${()=>this._emitPageChange(this.page-1)}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M8 2L4 6l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
            ${i.map(h=>h==="…"?l`<span style="padding:0 4px;color:var(--wu-color-text-secondary)">…</span>`:l`
                    <button
                      class="page-btn ${h===this.page?"active":""}"
                      aria-label="Page ${h}"
                      aria-current=${h===this.page?"page":v}
                      @click=${()=>this._emitPageChange(h)}
                    >${h}</button>
                  `)}
            <button
              class="page-btn"
              ?disabled=${this.page>=a}
              aria-label="Next page"
              @click=${()=>this._emitPageChange(this.page+1)}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    `}};b.styles=Vo;C([n({type:Array})],b.prototype,"columns",2);C([n({type:Array})],b.prototype,"rows",2);C([n({type:Number})],b.prototype,"total",2);C([n({type:Number})],b.prototype,"page",2);C([n({type:Number,attribute:"page-size"})],b.prototype,"pageSize",2);C([n({type:Boolean,reflect:!0})],b.prototype,"loading",2);C([n({type:Boolean})],b.prototype,"selectable",2);C([n({type:Boolean})],b.prototype,"searchable",2);C([n({attribute:"empty-message"})],b.prototype,"emptyMessage",2);C([p()],b.prototype,"_selected",2);C([p()],b.prototype,"_sortKey",2);C([p()],b.prototype,"_sortDir",2);b=C([u("wu-data-table")],b);const Wo=c`
  :host {
    display: block;
    --wu-radio-group-gap: var(--wu-space-3);
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: var(--wu-radio-group-gap);
  }

  :host([orientation='horizontal']) .group {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .legend {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    margin-bottom: var(--wu-space-2);
  }

  .error {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-danger);
    margin-top: var(--wu-space-1);
  }
`,Go=c`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-2);
    cursor: pointer;
    --wu-radio-size: 18px;
    --wu-radio-color: var(--wu-color-primary);
    --wu-radio-border: var(--wu-color-border-strong);
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input[type='radio'] {
    appearance: none;
    -webkit-appearance: none;
    width: var(--wu-radio-size);
    height: var(--wu-radio-size);
    border: 2px solid var(--wu-radio-border);
    border-radius: 50%;
    background: var(--wu-color-background);
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    flex-shrink: 0;
    cursor: pointer;
    position: relative;
    outline: none;
  }

  input[type='radio']:checked {
    border-color: var(--wu-radio-color);
    background: var(--wu-radio-color);
    box-shadow: inset 0 0 0 3px var(--wu-color-background);
  }

  input[type='radio']:focus-visible {
    box-shadow: var(--wu-focus-ring), inset 0 0 0 3px var(--wu-color-background);
  }

  input[type='radio']:checked:focus-visible {
    border-color: var(--wu-radio-color);
  }

  input[type='radio']:disabled {
    cursor: not-allowed;
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    user-select: none;
  }

  :host([disabled]) label {
    cursor: not-allowed;
  }
`;var Jo=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,E=(e,t,a,o)=>{for(var r=o>1?void 0:o?Zo(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Jo(t,a,r),r};let Ce=class extends d{constructor(){super(...arguments),this.value="",this.checked=!1,this.disabled=!1,this.name=""}_handleChange(){this.disabled||this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){const e=`wu-radio-${this.value}`;return l`
      <input
        id=${e}
        type="radio"
        name=${w(this.name||void 0)}
        value=${this.value}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        @change=${this._handleChange}
      />
      <label for=${e}><slot></slot></label>
    `}};Ce.styles=Go;E([n()],Ce.prototype,"value",2);E([n({type:Boolean,reflect:!0})],Ce.prototype,"checked",2);E([n({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);E([n()],Ce.prototype,"name",2);Ce=E([u("wu-radio")],Ce);let Y=class extends d{constructor(){super(...arguments),this.name="",this.value="",this.label="",this.orientation="vertical",this.disabled=!1,this.error="",this._radios=[],this._handleRadioChange=e=>{this.value=e.detail.value,this._syncRadios(),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}})),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("wu-change",this._handleRadioChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("wu-change",this._handleRadioChange)}_handleSlotChange(e){const t=e.target;this._radios=t.assignedElements({flatten:!0}).filter(a=>a.tagName==="WU-RADIO"),this._syncRadios()}_syncRadios(){for(const e of this._radios)e.name=this.name,e.checked=e.value===this.value,e.disabled=this.disabled||e.disabled}updated(e){(e.has("value")||e.has("disabled"))&&this._syncRadios()}render(){return l`
      ${this.label?l`<span class="legend">${this.label}</span>`:""}
      <div
        part="group"
        class="group"
        role="radiogroup"
        aria-label=${w(this.label||void 0)}
        aria-disabled=${this.disabled?"true":"false"}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
      ${this.error?l`<span class="error" role="alert">${this.error}</span>`:""}
    `}};Y.styles=Wo;E([n()],Y.prototype,"name",2);E([n()],Y.prototype,"value",2);E([n()],Y.prototype,"label",2);E([n({reflect:!0})],Y.prototype,"orientation",2);E([n({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);E([n()],Y.prototype,"error",2);E([p()],Y.prototype,"_radios",2);Y=E([u("wu-radio-group")],Y);const Qo=c`
  :host {
    display: block;
    --wu-slider-track-height: 4px;
    --wu-slider-thumb-size: 18px;
    --wu-slider-thumb-color: var(--wu-color-primary);
    --wu-slider-track-color: var(--wu-color-border);
    --wu-slider-fill-color: var(--wu-color-primary);
  }

  :host([disabled]) {
    opacity: 0.5;
    pointer-events: none;
  }

  .label-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: var(--wu-space-2);
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .value {
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .track-container {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--wu-slider-thumb-size);
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: var(--wu-slider-track-height);
    background: transparent;
    outline: none;
    cursor: pointer;
    position: relative;
    z-index: 1;
  }

  input[type='range']::-webkit-slider-runnable-track {
    height: var(--wu-slider-track-height);
    background: var(--wu-slider-track-color);
    border-radius: var(--wu-radius-full);
  }

  input[type='range']::-moz-range-track {
    height: var(--wu-slider-track-height);
    background: var(--wu-slider-track-color);
    border-radius: var(--wu-radius-full);
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: var(--wu-slider-thumb-size);
    height: var(--wu-slider-thumb-size);
    background: var(--wu-slider-thumb-color);
    border-radius: 50%;
    border: 2px solid var(--wu-color-background);
    box-shadow: var(--wu-shadow-sm);
    cursor: pointer;
    transition: transform var(--wu-duration-fast);
  }

  input[type='range']::-moz-range-thumb {
    width: var(--wu-slider-thumb-size);
    height: var(--wu-slider-thumb-size);
    background: var(--wu-slider-thumb-color);
    border-radius: 50%;
    border: 2px solid var(--wu-color-background);
    box-shadow: var(--wu-shadow-sm);
    cursor: pointer;
  }

  input[type='range']:hover::-webkit-slider-thumb {
    transform: scale(1.15);
  }

  input[type='range']:focus-visible::-webkit-slider-thumb {
    box-shadow: var(--wu-focus-ring);
  }

  .hint {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    margin-top: var(--wu-space-1);
  }

  .tick-marks {
    display: flex;
    justify-content: space-between;
    padding: 0 calc(var(--wu-slider-thumb-size) / 2);
    margin-top: var(--wu-space-1);
  }

  .tick {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }
`;var es=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,q=(e,t,a,o)=>{for(var r=o>1?void 0:o?ts(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&es(t,a,r),r};let z=class extends d{constructor(){super(...arguments),this.label="",this.value=0,this.min=0,this.max=100,this.step=1,this.showValue=!1,this.hint="",this.ticks=[],this.disabled=!1,this._currentValue=this.value}updated(e){e.has("value")&&(this._currentValue=this.value)}_handleInput(e){const t=e.target;this._currentValue=Number(t.value),this.dispatchEvent(new CustomEvent("wu-input",{bubbles:!0,composed:!0,detail:{value:this._currentValue}}))}_handleChange(e){const t=e.target;this.value=Number(t.value),this._currentValue=this.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){const e=(this._currentValue-this.min)/(this.max-this.min)*100;return l`
      ${this.label?l`
          <div class="label-row">
            <label>${this.label}</label>
            ${this.showValue?l`<span class="value">${this._currentValue}</span>`:""}
          </div>
        `:""}
      <div class="track-container">
        <input
          part="base"
          type="range"
          min=${this.min}
          max=${this.max}
          step=${this.step}
          .value=${String(this._currentValue)}
          ?disabled=${this.disabled}
          aria-label=${w(this.label||void 0)}
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this._currentValue}
          style="--_pct:${e}%"
          @input=${this._handleInput}
          @change=${this._handleChange}
        />
      </div>
      ${this.ticks.length?l`
          <div class="tick-marks" aria-hidden="true">
            ${this.ticks.map(t=>l`<span class="tick">${t}</span>`)}
          </div>
        `:""}
      ${this.hint?l`<span class="hint">${this.hint}</span>`:""}
    `}};z.styles=Qo;q([n()],z.prototype,"label",2);q([n({type:Number})],z.prototype,"value",2);q([n({type:Number})],z.prototype,"min",2);q([n({type:Number})],z.prototype,"max",2);q([n({type:Number})],z.prototype,"step",2);q([n({type:Boolean,attribute:"show-value"})],z.prototype,"showValue",2);q([n()],z.prototype,"hint",2);q([n({type:Array})],z.prototype,"ticks",2);q([n({type:Boolean,reflect:!0})],z.prototype,"disabled",2);q([p()],z.prototype,"_currentValue",2);z=q([u("wu-slider")],z);const rs=c`
  :host { display: block; }
  label { display: block; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); margin-bottom: var(--wu-space-1); }
  .picker-wrap { display: inline-flex; flex-direction: column; gap: var(--wu-space-2); }
  .canvas-area { position: relative; width: 240px; height: 160px; border-radius: var(--wu-radius-md); overflow: hidden; cursor: crosshair; }
  canvas { display: block; width: 100%; height: 100%; }
  .cursor { position: absolute; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 1px rgba(0,0,0,.5); pointer-events: none; transform: translate(-50%, -50%); }
  .hue-row { display: flex; align-items: center; gap: var(--wu-space-2); }
  .hue-slider { flex: 1; -webkit-appearance: none; height: 12px; border-radius: var(--wu-radius-full); background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00); cursor: pointer; }
  .hue-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 1px rgba(0,0,0,.4); background: var(--wu-color-border); cursor: pointer; }
  .swatch { width: 32px; height: 32px; border-radius: var(--wu-radius-md); border: 1px solid var(--wu-color-border); }
  .inputs { display: flex; gap: var(--wu-space-2); }
  .hex-input { width: 90px; padding: var(--wu-space-1) var(--wu-space-2); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md); font-family: var(--wu-font-mono); font-size: var(--wu-text-xs); color: var(--wu-color-text); background: var(--wu-color-background); }
  .hex-input:focus { outline: none; border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }
  .error-msg { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-danger); margin-top: var(--wu-space-1); }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
`;var as=Object.defineProperty,os=Object.getOwnPropertyDescriptor,D=(e,t,a,o)=>{for(var r=o>1?void 0:o?os(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&as(t,a,r),r};function ss(e,t,a){t/=100,a/=100;const o=t*Math.min(a,1-a),r=s=>{const i=(s+e/30)%12,h=a-o*Math.max(-1,Math.min(i-3,9-i,1));return Math.round(255*h).toString(16).padStart(2,"0")};return`#${r(0)}${r(8)}${r(4)}`}let y=class extends d{constructor(){super(...arguments),this.label="",this.value="#3b82f6",this.error="",this.disabled=!1,this._hue=220,this._sat=75,this._light=55,this._hexInput="#3b82f6",this._cursorX=180,this._cursorY=40}connectedCallback(){super.connectedCallback(),this._hexInput=this.value}firstUpdated(){this._drawCanvas()}_drawCanvas(){const e=this._canvas;if(!e)return;const t=e.getContext("2d"),a=e.width,o=e.height,r=`hsl(${this._hue}, 100%, 50%)`,s=t.createLinearGradient(0,0,a,0);s.addColorStop(0,"#fff"),s.addColorStop(1,r),t.fillStyle=s,t.fillRect(0,0,a,o);const i=t.createLinearGradient(0,0,0,o);i.addColorStop(0,"transparent"),i.addColorStop(1,"#000"),t.fillStyle=i,t.fillRect(0,0,a,o)}_onCanvasClick(e){const t=this._canvas,a=t.getBoundingClientRect(),o=Math.round((e.clientX-a.left)/a.width*t.width),r=Math.round((e.clientY-a.top)/a.height*t.height);this._cursorX=e.clientX-a.left,this._cursorY=e.clientY-a.top;const s=t.getContext("2d").getImageData(o,r,1,1).data;this._hexInput=`#${s[0].toString(16).padStart(2,"0")}${s[1].toString(16).padStart(2,"0")}${s[2].toString(16).padStart(2,"0")}`,this.value=this._hexInput,this._dispatchChange()}_onHueChange(e){this._hue=Number(e.target.value),this.value=ss(this._hue,this._sat,this._light),this._hexInput=this.value,this.requestUpdate(),this.updateComplete.then(()=>this._drawCanvas()),this._dispatchChange()}_onHexInput(e){const t=e.target.value;this._hexInput=t,/^#[0-9a-fA-F]{6}$/.test(t)&&(this.value=t,this._dispatchChange())}_dispatchChange(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){return l`
      ${this.label?l`<label>${this.label}</label>`:""}
      <div class="picker-wrap">
        <div class="canvas-area" @click=${this._onCanvasClick}>
          <canvas width="240" height="160"></canvas>
          <div class="cursor" style="left:${this._cursorX}px;top:${this._cursorY}px"></div>
        </div>
        <div class="hue-row">
          <input type="range" class="hue-slider" min="0" max="360" .value=${String(this._hue)} @input=${this._onHueChange} aria-label="Hue" />
          <div class="swatch" style="background:${this.value}"></div>
        </div>
        <div class="inputs">
          <input type="text" class="hex-input" .value=${this._hexInput} @input=${this._onHexInput} placeholder="#000000" aria-label="Hex colour value" />
        </div>
      </div>
      ${this.error?l`<p class="error-msg" role="alert">${this.error}</p>`:""}
    `}};y.styles=rs;D([n()],y.prototype,"label",2);D([n()],y.prototype,"value",2);D([n()],y.prototype,"error",2);D([n({type:Boolean,reflect:!0})],y.prototype,"disabled",2);D([p()],y.prototype,"_hue",2);D([p()],y.prototype,"_sat",2);D([p()],y.prototype,"_light",2);D([p()],y.prototype,"_hexInput",2);D([p()],y.prototype,"_cursorX",2);D([p()],y.prototype,"_cursorY",2);D([Se("canvas")],y.prototype,"_canvas",2);y=D([u("wu-color-picker")],y);const is=c`
  :host { display: inline-block; }
  .rating { display: flex; gap: 2px; align-items: center; }
  .star { background: none; border: none; cursor: pointer; padding: 2px; font-size: 20px; color: var(--wu-color-border-strong); transition: color var(--wu-duration-fast); line-height: 1; }
  .star.filled { color: var(--wu-color-warning); }
  .star:hover, .star.hovered { color: var(--wu-color-warning); }
  :host([readonly]) .star { cursor: default; pointer-events: none; }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
  .label { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-left: var(--wu-space-2); }
`;var ns=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,Ne=(e,t,a,o)=>{for(var r=o>1?void 0:o?ls(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ns(t,a,r),r};let ae=class extends d{constructor(){super(...arguments),this.value=0,this.max=5,this.readonly=!1,this.disabled=!1,this.showLabel=!1,this._hovered=0}_setHover(e){this.readonly||(this._hovered=e)}_clearHover(){this._hovered=0}_select(e){this.readonly||this.disabled||(this.value=e,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:e}})))}render(){return l`
      <div class="rating" role="radiogroup" aria-label="Rating">
        ${Array.from({length:this.max},(e,t)=>t+1).map(e=>l`
          <button
            class="star ${e<=(this._hovered||this.value)?"filled":""} ${this._hovered&&e<=this._hovered?"hovered":""}"
            @click=${()=>this._select(e)}
            @mouseenter=${()=>this._setHover(e)}
            @mouseleave=${this._clearHover}
            aria-label="Rate ${e} out of ${this.max}"
            aria-pressed=${e===this.value}
          >★</button>
        `)}
        ${this.showLabel?l`<span class="label">${this.value}/${this.max}</span>`:""}
      </div>`}};ae.styles=is;Ne([n({type:Number})],ae.prototype,"value",2);Ne([n({type:Number})],ae.prototype,"max",2);Ne([n({type:Boolean,reflect:!0})],ae.prototype,"readonly",2);Ne([n({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);Ne([n({type:Boolean})],ae.prototype,"showLabel",2);Ne([p()],ae.prototype,"_hovered",2);ae=Ne([u("wu-rating")],ae);const ds=c`
  :host {
    display: inline-flex;
    align-items: center;
    --wu-switch-width:        44px;
    --wu-switch-height:       24px;
    --wu-switch-thumb-size:   18px;
    --wu-switch-off-bg:       var(--wu-color-border-strong);
    --wu-switch-on-bg:        var(--wu-color-primary);
    --wu-switch-thumb-color:  white;
    --wu-switch-gap:          var(--wu-space-2);
    --wu-switch-font-size:    var(--wu-text-sm);
  }

  :host([size='sm']) {
    --wu-switch-width: 32px;
    --wu-switch-height: 18px;
    --wu-switch-thumb-size: 13px;
    --wu-switch-font-size: var(--wu-text-xs);
  }

  :host([size='lg']) {
    --wu-switch-width: 56px;
    --wu-switch-height: 30px;
    --wu-switch-thumb-size: 23px;
    --wu-switch-font-size: var(--wu-text-base);
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  label {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-switch-gap);
    cursor: pointer;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-switch-font-size);
    color: var(--wu-color-text);
    user-select: none;
    -webkit-user-select: none;
  }

  :host([disabled]) label { cursor: not-allowed; pointer-events: none; }

  input[type='checkbox'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .track {
    position: relative;
    flex-shrink: 0;
    width: var(--wu-switch-width);
    height: var(--wu-switch-height);
    background: var(--wu-switch-off-bg);
    border-radius: 9999px;
    transition: background var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([checked]) .track {
    background: var(--wu-switch-on-bg);
  }

  .thumb {
    position: absolute;
    top: calc((var(--wu-switch-height) - var(--wu-switch-thumb-size)) / 2);
    left: calc((var(--wu-switch-height) - var(--wu-switch-thumb-size)) / 2);
    width: var(--wu-switch-thumb-size);
    height: var(--wu-switch-thumb-size);
    background: var(--wu-switch-thumb-color);
    border-radius: 50%;
    box-shadow: var(--wu-shadow-sm);
    transition: transform var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([checked]) .thumb {
    transform: translateX(calc(var(--wu-switch-width) - var(--wu-switch-thumb-size) - (var(--wu-switch-height) - var(--wu-switch-thumb-size))));
  }

  input:focus-visible ~ .track {
    box-shadow: var(--wu-focus-ring);
  }

  .label-text {
    line-height: var(--wu-leading-normal);
  }
`;var us=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,le=(e,t,a,o)=>{for(var r=o>1?void 0:o?cs(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&us(t,a,r),r};let B=class extends d{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.labelPosition="end",this.size="md",this.value="on",this.required=!1}_handleChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.checked?this.value:""}}))}render(){const e=`wu-switch-${this.name??Math.random().toString(36).slice(2)}`,t=this.label?l`<span part="label" class="label-text">${this.label}</span>`:l`<slot></slot>`;return l`
      <label part="base" for=${e}>
        ${this.labelPosition==="start"?t:""}
        <input
          type="checkbox"
          id=${e}
          name=${this.name??""}
          value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          ?required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @change=${this._handleChange}
        />
        <div part="track" class="track">
          <div part="thumb" class="thumb"></div>
        </div>
        ${this.labelPosition==="end"?t:""}
      </label>
    `}};B.styles=ds;le([n({type:Boolean,reflect:!0})],B.prototype,"checked",2);le([n({type:Boolean,reflect:!0})],B.prototype,"disabled",2);le([n()],B.prototype,"label",2);le([n({attribute:"label-position"})],B.prototype,"labelPosition",2);le([n({reflect:!0})],B.prototype,"size",2);le([n()],B.prototype,"name",2);le([n()],B.prototype,"value",2);le([n({type:Boolean})],B.prototype,"required",2);B=le([u("wu-switch")],B);const ps=c`
  :host { display: inline-flex; flex-direction: column; }
  label { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); margin-bottom: var(--wu-space-2); }
  .pin-row { display: flex; gap: var(--wu-space-2); }
  input {
    width: 40px; height: 48px; text-align: center;
    font-family: var(--wu-font-mono); font-size: var(--wu-text-lg); font-weight: var(--wu-font-bold);
    color: var(--wu-color-text); background: var(--wu-color-background);
    border: 2px solid var(--wu-color-border); border-radius: var(--wu-radius-md);
    outline: none; caret-color: var(--wu-color-primary);
    transition: border-color var(--wu-duration-fast);
  }
  input:focus { border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }
  input.filled { border-color: var(--wu-color-primary); }
  :host([error]) input { border-color: var(--wu-color-danger); }
  .error-msg { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-danger); margin-top: var(--wu-space-1); }
`;var hs=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,xe=(e,t,a,o)=>{for(var r=o>1?void 0:o?vs(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&hs(t,a,r),r};let V=class extends d{constructor(){super(...arguments),this.length=6,this.label="",this.value="",this.mask=!1,this.error="",this.disabled=!1,this._digits=[]}updated(e){if(e.has("length")||e.has("value")){const t=(this.value||"").split("").slice(0,this.length);this._digits=Array.from({length:this.length},(a,o)=>t[o]??"")}}_handleInput(e,t){const a=e.target.value.replace(/\D/g,"").slice(-1),o=[...this._digits];o[t]=a,this._digits=o,this.value=o.join(""),a&&t<this.length-1&&this._focusAt(t+1);const r=this.value.length===this.length;this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value,complete:r}})),r&&this.dispatchEvent(new CustomEvent("wu-complete",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleKeydown(e,t){e.key==="Backspace"&&!this._digits[t]&&t>0&&this._focusAt(t-1),e.key==="ArrowLeft"&&t>0&&this._focusAt(t-1),e.key==="ArrowRight"&&t<this.length-1&&this._focusAt(t+1)}_handlePaste(e){var t,a;e.preventDefault();const o=((a=(t=e.clipboardData)==null?void 0:t.getData("text"))==null?void 0:a.replace(/\D/g,"").slice(0,this.length))??"";if(!o)return;this._digits=Array.from({length:this.length},(s,i)=>o[i]??""),this.value=this._digits.join("");const r=this.value.length===this.length;r&&this._focusAt(this.length-1),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value,complete:r}})),r&&this.dispatchEvent(new CustomEvent("wu-complete",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_focusAt(e){var t,a;const o=this.shadowRoot.querySelectorAll("input");(t=o[e])==null||t.focus(),(a=o[e])==null||a.select()}render(){return l`
      ${this.label?l`<label>${this.label}</label>`:""}
      <div class="pin-row" role="group" aria-label=${this.label||"PIN input"}>
        ${Array.from({length:this.length},(e,t)=>l`
          <input
            type=${this.mask?"password":"tel"}
            inputmode="numeric"
            maxlength="1"
            pattern="[0-9]"
            .value=${this._digits[t]??""}
            ?disabled=${this.disabled}
            class=${this._digits[t]?"filled":""}
            aria-label="Digit ${t+1} of ${this.length}"
            @input=${a=>this._handleInput(a,t)}
            @keydown=${a=>this._handleKeydown(a,t)}
            @paste=${this._handlePaste}
          />
        `)}
      </div>
      ${this.error?l`<span class="error-msg" role="alert">${this.error}</span>`:""}
    `}};V.styles=ps;xe([n({type:Number})],V.prototype,"length",2);xe([n()],V.prototype,"label",2);xe([n()],V.prototype,"value",2);xe([n({type:Boolean})],V.prototype,"mask",2);xe([n()],V.prototype,"error",2);xe([n({type:Boolean,reflect:!0})],V.prototype,"disabled",2);xe([p()],V.prototype,"_digits",2);V=xe([u("wu-pin-input")],V);const ws=c`
  :host {
    display: block;
    position: relative;
    --wu-cmb-height: 36px;
  }

  :host([disabled]) {
    opacity: 0.5;
    pointer-events: none;
  }

  label {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    margin-bottom: var(--wu-space-1);
  }

  .wrapper {
    position: relative;
  }

  input {
    width: 100%;
    height: var(--wu-cmb-height);
    padding: 0 var(--wu-space-8) 0 var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    outline: none;
    box-sizing: border-box;
    transition: border-color var(--wu-duration-fast);
  }

  input:focus {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  :host([error]) input {
    border-color: var(--wu-color-danger);
  }

  .chevron {
    position: absolute;
    right: var(--wu-space-3);
    top: 50%;
    transform: translateY(-50%);
    color: var(--wu-color-text-secondary);
    pointer-events: none;
    font-size: 10px;
  }

  .dropdown {
    position: absolute;
    top: calc(100% + var(--wu-space-1));
    left: 0;
    right: 0;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    box-shadow: var(--wu-shadow-md);
    max-height: 240px;
    overflow-y: auto;
    z-index: 100;
    list-style: none;
    margin: 0;
    padding: var(--wu-space-1) 0;
  }

  .dropdown[hidden] {
    display: none;
  }

  .option {
    padding: var(--wu-space-2) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
  }

  .option:hover,
  .option[aria-selected='true'] {
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
  }

  .option.highlighted {
    background: var(--wu-color-surface);
  }

  .empty {
    padding: var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    text-align: center;
  }

  .error-msg {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-danger);
    margin-top: var(--wu-space-1);
  }

  .loading-indicator {
    position: absolute;
    right: var(--wu-space-3);
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border: 2px solid var(--wu-color-border);
    border-top-color: var(--wu-color-primary);
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin { to { transform: translateY(-50%) rotate(360deg); } }
`;var bs=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,O=(e,t,a,o)=>{for(var r=o>1?void 0:o?gs(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&bs(t,a,r),r};let g=class extends d{constructor(){super(...arguments),this.label="",this.placeholder="Search…",this.value="",this.options=[],this.loading=!1,this.disabled=!1,this.error="",this.minChars=0,this._open=!1,this._query="",this._highlighted=-1,this._inputValue="",this._handleOutsideClick=e=>{this.contains(e.target)||(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}get _filtered(){if(this._query.length<this.minChars)return[];const e=this._query.toLowerCase();return this.options.filter(t=>!e||t.label.toLowerCase().includes(e)||t.value.toLowerCase().includes(e))}_handleInput(e){const t=e.target;this._query=t.value,this._inputValue=t.value,this._open=!0,this._highlighted=-1,this.dispatchEvent(new CustomEvent("wu-input",{bubbles:!0,composed:!0,detail:{query:this._query}}))}_handleKeydown(e){const t=this._filtered;e.key==="ArrowDown"?(e.preventDefault(),this._highlighted=Math.min(this._highlighted+1,t.length-1),this._open=!0):e.key==="ArrowUp"?(e.preventDefault(),this._highlighted=Math.max(this._highlighted-1,-1)):e.key==="Enter"&&this._highlighted>=0?(e.preventDefault(),this._select(t[this._highlighted])):e.key==="Escape"&&(this._open=!1)}_select(e){e.disabled||(this.value=e.value,this._inputValue=e.label,this._query="",this._open=!1,this._highlighted=-1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:e.value,label:e.label}})))}render(){var e;const t=this._filtered,a="combobox-list";return l`
      ${this.label?l`<label>${this.label}</label>`:""}
      <div class="wrapper">
        <input
          part="base"
          type="text"
          role="combobox"
          autocomplete="off"
          aria-expanded=${this._open?"true":"false"}
          aria-haspopup="listbox"
          aria-controls=${a}
          aria-activedescendant=${this._highlighted>=0?`option-${(e=t[this._highlighted])==null?void 0:e.value}`:""}
          placeholder=${this.placeholder}
          .value=${this._inputValue}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          @focus=${()=>{this._inputValue.length>=this.minChars&&(this._open=!0)}}
          @keydown=${this._handleKeydown}
        />
        ${this.loading?l`<span class="loading-indicator" aria-hidden="true"></span>`:l`<span class="chevron" aria-hidden="true">▼</span>`}
        <ul
          id=${a}
          part="dropdown"
          class="dropdown"
          role="listbox"
          ?hidden=${!this._open||t.length===0}
        >
          ${t.length===0&&this._query&&!this.loading?l`<li class="empty">No options found</li>`:t.map((o,r)=>l`
                  <li
                    id="option-${o.value}"
                    class="option ${r===this._highlighted?"highlighted":""}"
                    role="option"
                    aria-selected=${o.value===this.value?"true":"false"}
                    aria-disabled=${o.disabled?"true":"false"}
                    @click=${()=>this._select(o)}
                  >
                    ${o.label}
                  </li>
                `)}
        </ul>
      </div>
      ${this.error?l`<span class="error-msg" role="alert">${this.error}</span>`:""}
    `}};g.styles=ws;O([n()],g.prototype,"label",2);O([n()],g.prototype,"placeholder",2);O([n()],g.prototype,"value",2);O([n({type:Array})],g.prototype,"options",2);O([n({type:Boolean})],g.prototype,"loading",2);O([n({type:Boolean,reflect:!0})],g.prototype,"disabled",2);O([n()],g.prototype,"error",2);O([n({type:Number,attribute:"min-chars"})],g.prototype,"minChars",2);O([p()],g.prototype,"_open",2);O([p()],g.prototype,"_query",2);O([p()],g.prototype,"_highlighted",2);O([p()],g.prototype,"_inputValue",2);g=O([u("wu-combobox")],g);const fs=c`
  :host { display: block; }
  label { display: block; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); margin-bottom: var(--wu-space-1); }
  .tag-container {
    min-height: 40px; padding: var(--wu-space-1) var(--wu-space-2);
    border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md);
    background: var(--wu-color-background); display: flex; flex-wrap: wrap;
    gap: var(--wu-space-1); align-items: center; cursor: text;
    transition: border-color var(--wu-duration-fast);
  }
  .tag-container:focus-within { border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }
  .tag {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 2px var(--wu-space-2);
    background: var(--wu-color-surface); color: var(--wu-color-text);
    border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-full);
    font-family: var(--wu-font-sans); font-size: var(--wu-text-xs);
  }
  .tag-remove { background: none; border: none; cursor: pointer; padding: 0; color: var(--wu-color-text-secondary); font-size: 12px; line-height: 1; }
  .tag-remove:hover { color: var(--wu-color-danger); }
  .tag-input { flex: 1; min-width: 80px; border: none; outline: none; background: transparent; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); }
  .hint { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: var(--wu-space-1); }
  .error-msg { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-danger); margin-top: var(--wu-space-1); }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
`;var ms=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,de=(e,t,a,o)=>{for(var r=o>1?void 0:o?ys(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ms(t,a,r),r};let I=class extends d{constructor(){super(...arguments),this.label="",this.values=[],this.placeholder="Add a tag…",this.delimiter=",",this.max=1/0,this.error="",this.disabled=!1,this._inputValue=""}_emit(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{values:[...this.values]}}))}_addTag(e){const t=e.trim();!t||this.values.includes(t)||this.values.length>=this.max||(this.values=[...this.values,t],this._inputValue="",this.dispatchEvent(new CustomEvent("wu-add",{bubbles:!0,composed:!0,detail:{value:t}})),this._emit())}_removeTag(e){this.values=this.values.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("wu-remove",{bubbles:!0,composed:!0,detail:{value:e}})),this._emit()}_onKeyDown(e){const t=e.target;e.key==="Enter"||e.key===this.delimiter?(e.preventDefault(),this._addTag(t.value)):e.key==="Backspace"&&!t.value&&this.values.length&&this._removeTag(this.values[this.values.length-1])}_onInput(e){const t=e.target.value;t.endsWith(this.delimiter)?this._addTag(t.slice(0,-1)):this._inputValue=t}_focusInput(){var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector(".tag-input"))==null||t.focus()}render(){return l`
      ${this.label?l`<label>${this.label}</label>`:""}
      <div class="tag-container" @click=${this._focusInput}>
        ${this.values.map(e=>l`
          <span class="tag">
            ${e}
            <button class="tag-remove" @click=${t=>{t.stopPropagation(),this._removeTag(e)}} aria-label="Remove ${e}">✕</button>
          </span>
        `)}
        <input
          class="tag-input"
          .value=${this._inputValue}
          placeholder=${this.values.length?"":this.placeholder}
          ?disabled=${this.disabled}
          @keydown=${this._onKeyDown}
          @input=${this._onInput}
          aria-label=${this.label||"Tag input"}
        />
      </div>
      ${this.error?l`<p class="error-msg" role="alert">${this.error}</p>`:l`<p class="hint">Press Enter or comma to add tags</p>`}
    `}};I.styles=fs;de([n()],I.prototype,"label",2);de([n({type:Array})],I.prototype,"values",2);de([n()],I.prototype,"placeholder",2);de([n()],I.prototype,"delimiter",2);de([n({type:Number})],I.prototype,"max",2);de([n()],I.prototype,"error",2);de([n({type:Boolean,reflect:!0})],I.prototype,"disabled",2);de([p()],I.prototype,"_inputValue",2);I=de([u("wu-tag-input")],I);const xs=c`
  :host { display: inline; }
  .num { font-variant-numeric: tabular-nums; }
`;var ks=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,ut=(e,t,a,o)=>{for(var r=o>1?void 0:o?_s(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ks(t,a,r),r};let he=class extends d{constructor(){super(...arguments),this.value=0,this.locale=navigator.language||"en-US",this.format="decimal",this.currency="USD",this.decimals=2}_format(){const e={maximumFractionDigits:this.decimals};this.format==="currency"?(e.style="currency",e.currency=this.currency):this.format==="percent"?e.style="percent":this.format==="compact"&&(e.notation="compact");try{return new Intl.NumberFormat(this.locale,e).format(this.value)}catch{return String(this.value)}}render(){return l`<span class="num" aria-label="${this._format()}">${this._format()}</span>`}};he.styles=xs;ut([n({type:Number})],he.prototype,"value",2);ut([n()],he.prototype,"locale",2);ut([n({reflect:!0})],he.prototype,"format",2);ut([n()],he.prototype,"currency",2);ut([n({type:Number})],he.prototype,"decimals",2);he=ut([u("wu-number")],he);const $s=c`
  :host {
    display: block;
    --wu-ms-height: 36px;
  }

  :host([disabled]) { opacity: 0.5; pointer-events: none; }

  label {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    margin-bottom: var(--wu-space-1);
  }

  .chips-input {
    min-height: var(--wu-ms-height);
    padding: var(--wu-space-1) var(--wu-space-2);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    background: var(--wu-color-background);
    display: flex;
    flex-wrap: wrap;
    gap: var(--wu-space-1);
    align-items: center;
    cursor: text;
    outline: none;
    transition: border-color var(--wu-duration-fast);
  }

  .chips-input:focus-within {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px var(--wu-space-2);
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    border-radius: var(--wu-radius-full);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
  }

  .chip-remove {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0;
    font-size: 12px;
    line-height: 1;
    opacity: 0.7;
  }

  .chip-remove:hover { opacity: 1; }

  .search-input {
    flex: 1;
    min-width: 80px;
    border: none;
    outline: none;
    background: transparent;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }

  .dropdown {
    position: absolute;
    left: 0; right: 0;
    top: calc(100% + var(--wu-space-1));
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    box-shadow: var(--wu-shadow-md);
    max-height: 200px;
    overflow-y: auto;
    z-index: 100;
    list-style: none;
    margin: 0;
    padding: var(--wu-space-1) 0;
  }

  .dropdown[hidden] { display: none; }

  .option {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
  }

  .option:hover { background: var(--wu-color-surface); }

  .option input[type='checkbox'] { accent-color: var(--wu-color-primary); }

  .select-all {
    padding: var(--wu-space-2) var(--wu-space-3);
    border-bottom: 1px solid var(--wu-color-border);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
  }

  .select-all:hover { background: var(--wu-color-surface); }

  .wrapper { position: relative; }

  .error-msg {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-danger);
    margin-top: var(--wu-space-1);
  }
`;var zs=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,G=(e,t,a,o)=>{for(var r=o>1?void 0:o?Cs(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&zs(t,a,r),r};let P=class extends d{constructor(){super(...arguments),this.label="",this.placeholder="Select…",this.values=[],this.options=[],this.showSelectAll=!1,this.disabled=!1,this.error="",this._open=!1,this._search="",this._handleOutsideClick=e=>{this.contains(e.target)||(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}get _filtered(){const e=this._search.toLowerCase();return this.options.filter(t=>!e||t.label.toLowerCase().includes(e))}_toggle(e){const t=this.values.includes(e)?this.values.filter(a=>a!==e):[...this.values,e];this.values=t,this._emit()}_remove(e){this.values=this.values.filter(t=>t!==e),this._emit()}_selectAll(){const e=this.options.filter(a=>!a.disabled).map(a=>a.value),t=e.every(a=>this.values.includes(a));this.values=t?[]:e,this._emit()}_emit(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{values:[...this.values]}}))}_handleSearchInput(e){this._search=e.target.value}render(){const e=this.values.map(a=>this.options.find(o=>o.value===a)).filter(Boolean),t=this.options.every(a=>a.disabled||this.values.includes(a.value));return l`
      ${this.label?l`<label>${this.label}</label>`:""}
      <div class="wrapper">
        <div
          class="chips-input"
          part="chips-input"
          @click=${()=>{this._open=!0}}
        >
          ${e.map(a=>l`
              <span class="chip">
                ${a.label}
                <button
                  class="chip-remove"
                  aria-label="Remove ${a.label}"
                  @click=${o=>{o.stopPropagation(),this._remove(a.value)}}
                >✕</button>
              </span>
            `)}
          <input
            class="search-input"
            placeholder=${e.length===0?this.placeholder:""}
            .value=${this._search}
            aria-label=${this.label||"Select options"}
            @input=${this._handleSearchInput}
            @focus=${()=>{this._open=!0}}
          />
        </div>
        <ul class="dropdown" part="dropdown" role="listbox" aria-multiselectable="true" ?hidden=${!this._open}>
          ${this.showSelectAll?l`
              <li class="select-all" role="option" @click=${this._selectAll}>
                <input type="checkbox" .checked=${t} readonly aria-hidden="true" />
                Select all
              </li>
            `:""}
          ${this._filtered.map(a=>l`
              <li
                class="option"
                role="option"
                aria-selected=${this.values.includes(a.value)?"true":"false"}
                @click=${()=>this._toggle(a.value)}
              >
                <input
                  type="checkbox"
                  .checked=${this.values.includes(a.value)}
                  ?disabled=${a.disabled}
                  aria-hidden="true"
                  readonly
                />
                ${a.label}
              </li>
            `)}
        </ul>
      </div>
      ${this.error?l`<span class="error-msg" role="alert">${this.error}</span>`:""}
    `}};P.styles=$s;G([n()],P.prototype,"label",2);G([n()],P.prototype,"placeholder",2);G([n({type:Array})],P.prototype,"values",2);G([n({type:Array})],P.prototype,"options",2);G([n({type:Boolean,attribute:"show-select-all"})],P.prototype,"showSelectAll",2);G([n({type:Boolean,reflect:!0})],P.prototype,"disabled",2);G([n()],P.prototype,"error",2);G([p()],P.prototype,"_open",2);G([p()],P.prototype,"_search",2);P=G([u("wu-multi-select")],P);const Es=c`
  :host { display: inline-block; }
  .stat { padding: var(--wu-space-4); background: var(--wu-color-surface-raised); border-radius: var(--wu-radius-lg); border: 1px solid var(--wu-color-border); }
  .label { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); color: var(--wu-color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--wu-space-1); }
  .value { font-family: var(--wu-font-sans); font-size: var(--wu-text-2xl); font-weight: var(--wu-font-bold); color: var(--wu-color-text); line-height: 1; }
  .delta { display: inline-flex; align-items: center; gap: 4px; font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); margin-top: var(--wu-space-1); padding: 2px 6px; border-radius: var(--wu-radius-full); }
  .delta.up { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  .delta.down { background: var(--wu-color-danger-subtle); color: var(--wu-color-danger); }
  .delta.neutral { background: var(--wu-color-surface); color: var(--wu-color-text-secondary); }
  .description { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: var(--wu-space-1); }
`;var Os=Object.defineProperty,Ps=Object.getOwnPropertyDescriptor,ct=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ps(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Os(t,a,r),r};let ve=class extends d{constructor(){super(...arguments),this.label="",this.value="",this.delta="",this.trend="neutral",this.description=""}render(){const e=this.trend==="up"?"↑":this.trend==="down"?"↓":"→";return l`
      <div class="stat">
        ${this.label?l`<div class="label">${this.label}</div>`:""}
        <div class="value">${this.value}</div>
        ${this.delta?l`<div class="delta ${this.trend}">${e} ${this.delta}</div>`:""}
        ${this.description?l`<div class="description">${this.description}</div>`:""}
      </div>`}};ve.styles=Es;ct([n()],ve.prototype,"label",2);ct([n()],ve.prototype,"value",2);ct([n()],ve.prototype,"delta",2);ct([n({reflect:!0})],ve.prototype,"trend",2);ct([n()],ve.prototype,"description",2);ve=ct([u("wu-stat")],ve);const js=c`
  :host { display: block; }
  .timeline { display: flex; flex-direction: column; }
  :host([orientation="horizontal"]) .timeline { flex-direction: row; }
`,Ds=c`
  :host { display: flex; gap: var(--wu-space-3); }
  .connector { display: flex; flex-direction: column; align-items: center; }
  .dot { width: 12px; height: 12px; border-radius: 50%; background: var(--wu-color-primary); flex-shrink: 0; margin-top: 4px; }
  :host([status="success"]) .dot { background: var(--wu-color-success); }
  :host([status="warning"]) .dot { background: var(--wu-color-warning); }
  :host([status="danger"]) .dot { background: var(--wu-color-danger); }
  :host([status="pending"]) .dot { background: var(--wu-color-border); }
  .line { width: 2px; flex: 1; background: var(--wu-color-border); margin-top: 4px; min-height: 24px; }
  :host(:last-child) .line { display: none; }
  .body { padding-bottom: var(--wu-space-4); }
  .title { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); }
  .meta { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: 2px; }
  .content { margin-top: var(--wu-space-1); font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text-secondary); }
`;var Ss=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,jt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ms(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ss(t,a,r),r};let tr=class extends d{render(){return l`<div class="timeline" role="list"><slot></slot></div>`}};tr.styles=js;tr=jt([u("wu-timeline")],tr);let Qe=class extends d{constructor(){super(...arguments),this.title="",this.meta="",this.status="default"}render(){return l`
      <div class="connector"><div class="dot"></div><div class="line"></div></div>
      <div class="body" role="listitem">
        ${this.title?l`<div class="title">${this.title}</div>`:""}
        ${this.meta?l`<div class="meta">${this.meta}</div>`:""}
        <div class="content"><slot></slot></div>
      </div>`}};Qe.styles=Ds;jt([n()],Qe.prototype,"title",2);jt([n()],Qe.prototype,"meta",2);jt([n({reflect:!0})],Qe.prototype,"status",2);Qe=jt([u("wu-timeline-item")],Qe);const Bs=c`
  :host { display: inline-flex; }
  .tag {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 2px var(--wu-space-2); border-radius: var(--wu-radius-full);
    font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium);
    border: 1px solid transparent; line-height: 1.5;
    background: var(--wu-color-surface); color: var(--wu-color-text); border-color: var(--wu-color-border);
  }
  :host([variant="primary"]) .tag { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); border-color: var(--wu-color-primary); }
  :host([variant="success"]) .tag { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  :host([variant="warning"]) .tag { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }
  :host([variant="danger"]) .tag { background: var(--wu-color-danger-subtle); color: var(--wu-color-danger); }
  .dismiss { background: none; border: none; cursor: pointer; padding: 0; color: inherit; opacity: 0.7; font-size: 14px; line-height: 1; }
  .dismiss:hover { opacity: 1; }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
`;var Is=Object.defineProperty,Ls=Object.getOwnPropertyDescriptor,Ut=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ls(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Is(t,a,r),r};let et=class extends d{constructor(){super(...arguments),this.variant="default",this.dismissible=!1,this.disabled=!1}render(){return l`
      <span class="tag">
        <slot></slot>
        ${this.dismissible?l`<button class="dismiss" @click=${()=>this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0}))} aria-label="Remove tag">✕</button>`:""}
      </span>`}};et.styles=Bs;Ut([n({reflect:!0})],et.prototype,"variant",2);Ut([n({type:Boolean})],et.prototype,"dismissible",2);Ut([n({type:Boolean,reflect:!0})],et.prototype,"disabled",2);et=Ut([u("wu-tag")],et);const As=c`
  :host {
    display: inline-flex;
  }

  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px var(--wu-space-2);
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    line-height: 1;
    color: var(--wu-color-text-secondary);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border-strong);
    border-radius: var(--wu-radius-sm);
    box-shadow: 0 1px 0 var(--wu-color-border-strong);
    white-space: nowrap;
  }
`;var Ts=(e,t,a,o)=>{for(var r=t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=i(r)||r);return r};let rr=class extends d{render(){return l`<kbd><slot></slot></kbd>`}};rr.styles=As;rr=Ts([u("wu-kbd")],rr);const Ns=c`
  :host {
    display: inline;
  }

  code {
    padding: 2px var(--wu-space-1);
    font-family: var(--wu-font-mono);
    font-size: 0.875em;
    color: var(--wu-color-danger);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-sm);
  }
`;var qs=(e,t,a,o)=>{for(var r=t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=i(r)||r);return r};let ar=class extends d{render(){return l`<code><slot></slot></code>`}};ar.styles=Ns;ar=qs([u("wu-code")],ar);const Ks=c`
  :host {
    display: inline-flex;
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    padding: var(--wu-space-1) var(--wu-space-2);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-sm);
    cursor: pointer;
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
    white-space: nowrap;
  }

  button:hover {
    background: var(--wu-color-surface-raised);
    color: var(--wu-color-text);
  }

  button:focus-visible {
    box-shadow: var(--wu-focus-ring);
  }

  button.copied {
    color: var(--wu-color-success);
    border-color: var(--wu-color-success);
  }
`;var Rs=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,pt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Hs(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Rs(t,a,r),r};let we=class extends d{constructor(){super(...arguments),this.value="",this.feedbackDuration=1500,this.label="Copy",this.successLabel="Copied!",this._copied=!1}async _handleClick(){if(this.value)try{await navigator.clipboard.writeText(this.value),this._copied=!0,this.dispatchEvent(new CustomEvent("wu-copy",{bubbles:!0,composed:!0,detail:{value:this.value}})),setTimeout(()=>{this._copied=!1},this.feedbackDuration)}catch{this.dispatchEvent(new CustomEvent("wu-error",{bubbles:!0,composed:!0}))}}render(){return l`
      <button
        part="base"
        class=${this._copied?"copied":""}
        @click=${this._handleClick}
        aria-label=${this._copied?this.successLabel:this.label}
      >
        <slot>${this._copied?this.successLabel:this.label}</slot>
      </button>
    `}};we.styles=Ks;pt([n()],we.prototype,"value",2);pt([n({type:Number,attribute:"feedback-duration"})],we.prototype,"feedbackDuration",2);pt([n()],we.prototype,"label",2);pt([n({attribute:"success-label"})],we.prototype,"successLabel",2);pt([p()],we.prototype,"_copied",2);we=pt([u("wu-copy-button")],we);const Fs=c`
  :host { display: block; }
  .carousel { position: relative; overflow: hidden; }
  .track { display: flex; transition: transform var(--wu-duration-slow) var(--wu-ease-default); will-change: transform; }
  ::slotted(*) { flex-shrink: 0; width: 100%; }
  .nav { position: absolute; top: 50%; transform: translateY(-50%); background: var(--wu-color-background); border: 1px solid var(--wu-color-border); border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10; opacity: 0.9; }
  .nav:hover { opacity: 1; background: var(--wu-color-surface-raised); }
  .prev { left: var(--wu-space-2); }
  .next { right: var(--wu-space-2); }
  .dots { display: flex; justify-content: center; gap: var(--wu-space-2); padding-top: var(--wu-space-2); }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--wu-color-border-strong); border: none; cursor: pointer; padding: 0; transition: background var(--wu-duration-fast); }
  .dot.active { background: var(--wu-color-primary); }
  :host([no-controls]) .nav { display: none; }
  :host([no-dots]) .dots { display: none; }
`;var Ys=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,ke=(e,t,a,o)=>{for(var r=o>1?void 0:o?Vs(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ys(t,a,r),r};let U=class extends d{constructor(){super(...arguments),this.index=0,this.noControls=!1,this.noDots=!1,this.autoplay=!1,this.autoplayInterval=3e3,this._count=0,this._autoTimer=0}firstUpdated(){this._updateCount()}_updateCount(){this._count=this.querySelectorAll("*").length||0,this.autoplay&&this._count>0&&(this._autoTimer=window.setInterval(()=>this._next(),this.autoplayInterval))}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._autoTimer)}_goto(e){const t=Math.max(0,Math.min(e,this._count-1));this.index=t,this._track&&(this._track.style.transform=`translateX(-${t*100}%)`),this.dispatchEvent(new CustomEvent("wu-slide-change",{bubbles:!0,composed:!0,detail:{index:t}}))}_prev(){this._goto(this.index-1)}_next(){this._goto(this.index===this._count-1?0:this.index+1)}_onSlotChange(e){const t=e.target.assignedNodes({flatten:!0}).filter(a=>a.nodeType===1);this._count=t.length}render(){return l`
      <div class="carousel" role="region" aria-label="Carousel" aria-roledescription="carousel">
        <div class="track">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
        <button class="nav prev" @click=${this._prev} aria-label="Previous slide">‹</button>
        <button class="nav next" @click=${this._next} aria-label="Next slide">›</button>
      </div>
      <div class="dots" role="tablist" aria-label="Slides">
        ${Array.from({length:this._count},(e,t)=>l`
          <button class="dot ${t===this.index?"active":""}" @click=${()=>this._goto(t)} role="tab" aria-selected=${t===this.index} aria-label="Slide ${t+1}"></button>
        `)}
      </div>`}};U.styles=Fs;ke([n({type:Number})],U.prototype,"index",2);ke([n({type:Boolean,attribute:"no-controls",reflect:!0})],U.prototype,"noControls",2);ke([n({type:Boolean,attribute:"no-dots",reflect:!0})],U.prototype,"noDots",2);ke([n({type:Boolean})],U.prototype,"autoplay",2);ke([n({type:Number,attribute:"autoplay-interval"})],U.prototype,"autoplayInterval",2);ke([p()],U.prototype,"_count",2);ke([Se(".track")],U.prototype,"_track",2);U=ke([u("wu-carousel")],U);const Us=c`
  :host {
    display: block;
  }

  ul, ol {
    margin: 0;
    padding: 0 0 0 var(--wu-space-6);
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    line-height: var(--wu-leading-relaxed);
  }

  :host([type='none']) ul,
  :host([type='none']) ol {
    list-style: none;
    padding-left: 0;
  }
`;var Xs=Object.defineProperty,Ws=Object.getOwnPropertyDescriptor,hr=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ws(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Xs(t,a,r),r};let At=class extends d{constructor(){super(...arguments),this.type="unordered"}render(){return this.type==="ordered"?l`<ol part="base"><slot></slot></ol>`:l`<ul part="base"><slot></slot></ul>`}};At.styles=Us;hr([n({reflect:!0})],At.prototype,"type",2);At=hr([u("wu-list")],At);let mr=class extends d{render(){return l`<li part="item"><slot></slot></li>`}};mr=hr([u("wu-list-item")],mr);const Gs=c`
  :host { display: block; }
  dl { display: grid; grid-template-columns: auto 1fr; gap: var(--wu-space-1) var(--wu-space-4); margin: 0; }
  :host([layout="stacked"]) dl { grid-template-columns: 1fr; }
`,Js=c`
  :host { display: contents; }
  dt { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text-secondary); padding: var(--wu-space-1) 0; }
`,Zs=c`
  :host { display: contents; }
  dd { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); margin: 0; padding: var(--wu-space-1) 0; }
`;var Qs=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,Xt=(e,t,a,o)=>{for(var r=o>1?void 0:o?ei(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Qs(t,a,r),r};let Tt=class extends d{constructor(){super(...arguments),this.layout="side-by-side"}render(){return l`<dl><slot></slot></dl>`}};Tt.styles=Gs;Xt([n({reflect:!0})],Tt.prototype,"layout",2);Tt=Xt([u("wu-dl")],Tt);let or=class extends d{render(){return l`<dt><slot></slot></dt>`}};or.styles=Js;or=Xt([u("wu-dt")],or);let sr=class extends d{render(){return l`<dd><slot></slot></dd>`}};sr.styles=Zs;sr=Xt([u("wu-dd")],sr);const ti=c`
  :host {
    display: block;
    --wu-callout-bg:     var(--wu-color-info-subtle);
    --wu-callout-border: var(--wu-color-info);
    --wu-callout-color:  var(--wu-color-info);
  }

  :host([variant='success']) {
    --wu-callout-bg:     var(--wu-color-success-subtle);
    --wu-callout-border: var(--wu-color-success);
    --wu-callout-color:  var(--wu-color-success);
  }

  :host([variant='warning']) {
    --wu-callout-bg:     var(--wu-color-warning-subtle);
    --wu-callout-border: var(--wu-color-warning);
    --wu-callout-color:  var(--wu-color-warning);
  }

  :host([variant='danger']) {
    --wu-callout-bg:     var(--wu-color-danger-subtle);
    --wu-callout-border: var(--wu-color-danger);
    --wu-callout-color:  var(--wu-color-danger);
  }

  .callout {
    display: flex;
    gap: var(--wu-space-3);
    padding: var(--wu-space-4);
    background: var(--wu-callout-bg);
    border-left: 4px solid var(--wu-callout-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    line-height: var(--wu-leading-normal);
    color: var(--wu-color-text);
  }

  .icon {
    flex-shrink: 0;
    color: var(--wu-callout-color);
    margin-top: 1px;
  }

  .title {
    font-weight: var(--wu-font-semibold);
    color: var(--wu-callout-color);
    margin-bottom: var(--wu-space-1);
  }
`;var ri=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,vr=(e,t,a,o)=>{for(var r=o>1?void 0:o?ai(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ri(t,a,r),r};const oi={info:"ℹ",success:"✓",warning:"⚠",danger:"✕"};let zt=class extends d{constructor(){super(...arguments),this.variant="info"}render(){return l`
      <div class="callout" role="note">
        <span class="icon" aria-hidden="true">${oi[this.variant]}</span>
        <div class="body">
          ${this.heading?l`<div class="title">${this.heading}</div>`:""}
          <slot></slot>
        </div>
      </div>
    `}};zt.styles=ti;vr([n({reflect:!0})],zt.prototype,"variant",2);vr([n()],zt.prototype,"heading",2);zt=vr([u("wu-callout")],zt);const si=c`
  :host {
    display: block;
    --wu-meter-track-bg:  var(--wu-color-border);
    --wu-meter-fill-bg:   var(--wu-color-primary);
    --wu-meter-height:    8px;
    --wu-meter-radius:    var(--wu-radius-full);
  }

  :host([variant='success']) { --wu-meter-fill-bg: var(--wu-color-success); }
  :host([variant='warning']) { --wu-meter-fill-bg: var(--wu-color-warning); }
  :host([variant='danger'])  { --wu-meter-fill-bg: var(--wu-color-danger); }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  .labels {
    display: flex;
    justify-content: space-between;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .track {
    height: var(--wu-meter-height);
    background: var(--wu-meter-track-bg);
    border-radius: var(--wu-meter-radius);
    overflow: hidden;
  }

  .fill {
    height: 100%;
    background: var(--wu-meter-fill-bg);
    border-radius: var(--wu-meter-radius);
    transition: width var(--wu-duration-normal) var(--wu-ease-default);
  }
`;var ii=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,qe=(e,t,a,o)=>{for(var r=o>1?void 0:o?ni(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ii(t,a,r),r};let oe=class extends d{constructor(){super(...arguments),this.value=0,this.max=100,this.min=0,this.unit="",this.variant="default"}get _pct(){const e=this.max-this.min;return e<=0?0:Math.min(100,Math.max(0,(this.value-this.min)/e*100))}render(){const e=this._pct;return l`
      <div class="wrapper">
        ${this.label||this.unit?l`
          <div class="labels">
            <span>${this.label??""}</span>
            <span>${this.value}${this.unit} / ${this.max}${this.unit}</span>
          </div>
        `:""}
        <div
          class="track"
          role="meter"
          aria-valuenow=${this.value}
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-label=${this.label??"meter"}
        >
          <div class="fill" style="width:${e}%"></div>
        </div>
      </div>
    `}};oe.styles=si;qe([n({type:Number})],oe.prototype,"value",2);qe([n({type:Number})],oe.prototype,"max",2);qe([n({type:Number})],oe.prototype,"min",2);qe([n()],oe.prototype,"label",2);qe([n()],oe.prototype,"unit",2);qe([n({reflect:!0})],oe.prototype,"variant",2);oe=qe([u("wu-meter")],oe);const li=c`
  :host {
    display: block;
  }

  .trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--wu-space-2);
    width: 100%;
    padding: var(--wu-space-3) var(--wu-space-4);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    background: none;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    text-align: left;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
  }

  .trigger:hover {
    background: var(--wu-color-surface);
  }

  .trigger:focus-visible {
    box-shadow: var(--wu-focus-ring);
  }

  :host([open]) .trigger {
    border-color: var(--wu-color-border-strong);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .chevron {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    transition: transform var(--wu-duration-normal) var(--wu-ease-default);
    color: var(--wu-color-text-secondary);
  }

  :host([open]) .chevron {
    transform: rotate(180deg);
  }

  .content {
    overflow: hidden;
    border: 1px solid var(--wu-color-border-strong);
    border-top: none;
    border-bottom-left-radius: var(--wu-radius-md);
    border-bottom-right-radius: var(--wu-radius-md);
    padding: var(--wu-space-4);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-relaxed);
  }

  :host(:not([open])) .content {
    display: none;
  }
`;var di=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,Wt=(e,t,a,o)=>{for(var r=o>1?void 0:o?ui(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&di(t,a,r),r};let tt=class extends d{constructor(){super(...arguments),this.open=!1,this.label="",this.disabled=!1}_toggle(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent(this.open?"wu-open":"wu-close",{bubbles:!0,composed:!0})))}render(){return l`
      <button
        part="trigger"
        class="trigger"
        ?disabled=${this.disabled}
        aria-expanded=${this.open?"true":"false"}
        @click=${this._toggle}
      >
        <slot name="trigger">${this.label}</slot>
        <svg class="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="4,6 8,10 12,6"/>
        </svg>
      </button>
      <div
        part="content"
        class="content"
        role="region"
        aria-hidden=${this.open?"false":"true"}
      >
        <slot></slot>
      </div>
    `}};tt.styles=li;Wt([n({type:Boolean,reflect:!0})],tt.prototype,"open",2);Wt([n()],tt.prototype,"label",2);Wt([n({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);tt=Wt([u("wu-collapse")],tt);const ci=c`
  :host { display: block; }
  .backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 300; opacity: 0; transition: opacity var(--wu-duration-normal); }
  :host([open]) .backdrop { opacity: 1; }
  .drawer {
    position: fixed; top: 0; bottom: 0; background: var(--wu-color-background);
    display: flex; flex-direction: column; z-index: 301;
    box-shadow: var(--wu-shadow-xl);
    transition: transform var(--wu-duration-slow) var(--wu-ease-default);
    width: var(--wu-drawer-width, 320px);
  }
  :host([placement="left"]) .drawer { left: 0; transform: translateX(-100%); }
  :host([placement="right"]) .drawer, :host(:not([placement])) .drawer { right: 0; transform: translateX(100%); }
  :host([placement="top"]) .drawer { top: 0; left: 0; right: 0; height: var(--wu-drawer-height, 40vh); width: 100%; transform: translateY(-100%); }
  :host([placement="bottom"]) .drawer { bottom: 0; left: 0; right: 0; height: var(--wu-drawer-height, 40vh); width: 100%; transform: translateY(100%); }
  :host([open]) .drawer { transform: none; }
  .backdrop[hidden], :host(:not([open])) .backdrop, :host(:not([open])) .drawer { display: none; }
  :host([open]) .backdrop { display: block; }
  :host([open]) .drawer { display: flex; }
  .drawer-header { display: flex; align-items: center; justify-content: space-between; padding: var(--wu-space-4); border-bottom: 1px solid var(--wu-color-border); }
  .drawer-title { font-family: var(--wu-font-sans); font-size: var(--wu-text-base); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); }
  .close-btn { background: none; border: none; cursor: pointer; padding: 4px; border-radius: var(--wu-radius-sm); color: var(--wu-color-text-secondary); }
  .close-btn:hover { background: var(--wu-color-surface); }
  .drawer-body { flex: 1; overflow-y: auto; padding: var(--wu-space-4); }
  .drawer-footer { padding: var(--wu-space-4); border-top: 1px solid var(--wu-color-border); }
`;var pi=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,Gt=(e,t,a,o)=>{for(var r=o>1?void 0:o?hi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&pi(t,a,r),r};let rt=class extends d{constructor(){super(...arguments),this.open=!1,this.label="",this.placement="right",this._onKeydown=e=>{e.key==="Escape"&&this.open&&this._close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown)}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}))}render(){return l`
      <div class="backdrop" @click=${this._close}></div>
      <div class="drawer" role="dialog" aria-modal="true" aria-label=${this.label||"Drawer"}>
        <div class="drawer-header">
          <span class="drawer-title">${this.label}</span>
          <button class="close-btn" @click=${this._close} aria-label="Close drawer">✕</button>
        </div>
        <div class="drawer-body"><slot></slot></div>
        <div class="drawer-footer"><slot name="footer"></slot></div>
      </div>`}};rt.styles=ci;Gt([n({type:Boolean,reflect:!0})],rt.prototype,"open",2);Gt([n()],rt.prototype,"label",2);Gt([n({reflect:!0})],rt.prototype,"placement",2);rt=Gt([u("wu-drawer")],rt);const vi=c`
  :host { display: block; position: fixed; z-index: 400; background: var(--wu-color-surface-overlay); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-lg); box-shadow: var(--wu-shadow-lg); padding: var(--wu-space-1); min-width: 180px; }
  :host(:not([open])) { display: none; }
  .item { display: flex; align-items: center; gap: var(--wu-space-2); width: 100%; padding: var(--wu-space-2) var(--wu-space-3); border: none; background: none; border-radius: var(--wu-radius-md); cursor: pointer; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); text-align: left; }
  .item:hover { background: var(--wu-color-surface); }
  .item.danger { color: var(--wu-color-danger); }
  .item:disabled { opacity: 0.5; cursor: not-allowed; }
  .separator { height: 1px; background: var(--wu-color-border); margin: var(--wu-space-1) 0; }
`;var wi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,Dt=(e,t,a,o)=>{for(var r=o>1?void 0:o?bi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&wi(t,a,r),r};let Ee=class extends d{constructor(){super(...arguments),this.open=!1,this.x=0,this.y=0,this.items=[],this._close=()=>{this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0})))},this._onKey=e=>{e.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._close),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._close),document.removeEventListener("keydown",this._onKey)}_select(e){e.disabled||(this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{value:e.value}})),this._close())}render(){return l`
      <div role="menu" style="left:${this.x}px;top:${this.y}px" @click=${e=>e.stopPropagation()}>
        ${this.items.map(e=>e.separator?l`<div class="separator" role="separator"></div>`:l`<button class="item ${e.danger?"danger":""}" role="menuitem" ?disabled=${e.disabled} @click=${()=>this._select(e)}>
              ${e.icon?l`<span>${e.icon}</span>`:""} ${e.label}
            </button>`)}
      </div>`}};Ee.styles=vi;Dt([n({type:Boolean,reflect:!0})],Ee.prototype,"open",2);Dt([n({type:Number})],Ee.prototype,"x",2);Dt([n({type:Number})],Ee.prototype,"y",2);Dt([n({type:Array})],Ee.prototype,"items",2);Ee=Dt([u("wu-context-menu")],Ee);const gi=c`
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
`;var fi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,Jt=(e,t,a,o)=>{for(var r=o>1?void 0:o?mi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&fi(t,a,r),r};let at=class extends d{constructor(){super(...arguments),this.open=!1,this.placement="left",this.items=[],this._outsideClick=e=>{!this.contains(e.target)&&!this.shadowRoot.contains(e.target)&&(this.open=!1)},this._onKey=e=>{e.key==="Escape"&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick),document.removeEventListener("keydown",this._onKey)}_toggle(){this.open=!this.open}_select(e){e.disabled||e.separator||(this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{value:e.value}})),this.open=!1)}render(){return l`
      <div class="trigger-slot" @click=${this._toggle} role="button" aria-haspopup="true" aria-expanded=${this.open}>
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-menu" ?hidden=${!this.open} role="menu">
        ${this.items.length>0?this.items.map(e=>e.separator?l`<div class="separator" role="separator"></div>`:l`<button class="item ${e.danger?"danger":""}" role="menuitem" ?disabled=${e.disabled} @click=${()=>this._select(e)}>${e.icon?l`<span>${e.icon}</span>`:""}${e.label}</button>`):l`<slot></slot>`}
      </div>`}};at.styles=gi;Jt([n({type:Boolean,reflect:!0})],at.prototype,"open",2);Jt([n({reflect:!0})],at.prototype,"placement",2);Jt([n({type:Array})],at.prototype,"items",2);at=Jt([u("wu-dropdown")],at);const yi=c`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }
`,xi=c`
  :host {
    display: block;
  }
  .row {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
    padding: var(--wu-space-1) var(--wu-space-2);
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    user-select: none;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }
  .row:hover { background: var(--wu-color-surface); }
  :host([selected]) .row { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); }
  .toggle {
    display: inline-flex;
    width: 16px;
    height: 16px;
    align-items: center;
    justify-content: center;
    font-size: var(--wu-text-xs);
    flex-shrink: 0;
    transition: transform var(--wu-duration-fast) var(--wu-ease-default);
  }
  :host([expanded]) .toggle { transform: rotate(90deg); }
  .spacer { width: 16px; flex-shrink: 0; }
  .label { flex: 1; }
  .children {
    padding-left: var(--wu-space-4);
    overflow: hidden;
  }
  .children[hidden] { display: none; }
`;var ki=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,ht=(e,t,a,o)=>{for(var r=o>1?void 0:o?_i(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ki(t,a,r),r};let ir=class extends d{render(){return l`<div role="tree"><slot></slot></div>`}};ir.styles=yi;ir=ht([u("wu-tree")],ir);let Oe=class extends d{constructor(){super(...arguments),this.label="",this.expanded=!1,this.selected=!1,this.disabled=!1,this._hasChildren=!1}firstUpdated(){const e=this.shadowRoot.querySelector("slot");this._hasChildren=e.assignedElements().length>0,this.requestUpdate()}_toggle(e){e.stopPropagation(),this.expanded=!this.expanded}_select(){this.disabled||(this.selected=!0,this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{label:this.label}})))}render(){return l`
      <div class="row" role="treeitem" aria-expanded=${this._hasChildren?this.expanded:"false"} aria-selected=${this.selected} @click=${this._select}>
        ${this._hasChildren?l`<span class="toggle" @click=${this._toggle} aria-hidden="true">▶</span>`:l`<span class="spacer"></span>`}
        <span class="label">${this.label}</span>
      </div>
      <div class="children" ?hidden=${!this.expanded} role="group">
        <slot @slotchange=${()=>{this._hasChildren=this.shadowRoot.querySelector("slot").assignedElements().length>0,this.requestUpdate()}}></slot>
      </div>`}};Oe.styles=xi;ht([n({reflect:!0})],Oe.prototype,"label",2);ht([n({type:Boolean,reflect:!0})],Oe.prototype,"expanded",2);ht([n({type:Boolean,reflect:!0})],Oe.prototype,"selected",2);ht([n({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);Oe=ht([u("wu-tree-item")],Oe);const $i=c`
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
`,zi=c`
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
`;var Ci=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Ke=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ei(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ci(t,a,r),r};let Nt=class extends d{constructor(){super(...arguments),this.value=""}_handleSelect(e){const t=e.detail.value;this.querySelectorAll("wu-bottom-nav-item").forEach(a=>{a.active=a.value===t}),this.value=t,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:t}}))}render(){return l`<nav @wu-item-click=${this._handleSelect}><slot></slot></nav>`}};Nt.styles=$i;Ke([n()],Nt.prototype,"value",2);Nt=Ke([u("wu-bottom-nav")],Nt);let Pe=class extends d{constructor(){super(...arguments),this.value="",this.label="",this.icon="",this.active=!1}_click(){this.dispatchEvent(new CustomEvent("wu-item-click",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){return l`
      <button role="tab" aria-selected=${this.active} @click=${this._click}>
        <span class="icon" aria-hidden="true">${this.icon}</span>
        <span class="label">${this.label}</span>
      </button>`}};Pe.styles=zi;Ke([n({reflect:!0})],Pe.prototype,"value",2);Ke([n()],Pe.prototype,"label",2);Ke([n()],Pe.prototype,"icon",2);Ke([n({type:Boolean,reflect:!0})],Pe.prototype,"active",2);Pe=Ke([u("wu-bottom-nav-item")],Pe);const Oi=c`
  :host {
    display: block;
    position: relative;
  }
  .trigger-slot { display: inline-block; cursor: pointer; }
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 99;
  }
  .overlay {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    box-shadow: var(--wu-shadow-xl);
    z-index: 100;
    display: flex;
    gap: var(--wu-space-6);
    padding: var(--wu-space-6);
  }
  .overlay[hidden] { display: none; }
  .column {
    flex: 1;
    min-width: 160px;
  }
  .column-title {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--wu-color-text-secondary);
    margin-bottom: var(--wu-space-2);
  }
  ::slotted([slot^="col-"]) {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }
`;var Pi=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,_r=(e,t,a,o)=>{for(var r=o>1?void 0:o?ji(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Pi(t,a,r),r};let qt=class extends d{constructor(){super(...arguments),this.open=!1,this._onKey=e=>{e.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKey)}_open(){this.open=!0,this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0}))}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}))}render(){return l`
      <div class="trigger-slot" @click=${()=>this.open?this._close():this._open()}>
        <slot name="trigger"></slot>
      </div>
      ${this.open?l`<div class="backdrop" @click=${this._close}></div>`:""}
      <div class="overlay" ?hidden=${!this.open} role="dialog" aria-label="Navigation menu">
        <slot></slot>
      </div>`}};qt.styles=Oi;_r([n({type:Boolean,reflect:!0})],qt.prototype,"open",2);qt=_r([u("wu-mega-menu")],qt);const Di=c`
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
`;var Si=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,wr=(e,t,a,o)=>{for(var r=o>1?void 0:o?Mi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Si(t,a,r),r};let Ct=class extends d{constructor(){super(...arguments),this.notifications=[],this._open=!1,this._outsideClick=e=>{!this.contains(e.target)&&!this.shadowRoot.contains(e.target)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick)}get _unreadCount(){return this.notifications.filter(e=>!e.read).length}_markAllRead(){this.notifications=this.notifications.map(e=>({...e,read:!0})),this.dispatchEvent(new CustomEvent("wu-mark-all-read",{bubbles:!0,composed:!0}))}_clickItem(e){e.read=!0,this.notifications=[...this.notifications],this.dispatchEvent(new CustomEvent("wu-notification-click",{bubbles:!0,composed:!0,detail:{id:e.id}}))}render(){const e=this._unreadCount;return l`
      <button class="trigger" aria-label="Notifications${e?`, ${e} unread`:""}" @click=${()=>{this._open=!this._open}}>
        🔔
        ${e>0?l`<span class="badge" aria-hidden="true">${e>99?"99+":e}</span>`:""}
      </button>
      <div class="panel" ?hidden=${!this._open} role="region" aria-label="Notifications">
        <div class="header">
          <span class="header-title">Notifications</span>
          ${e>0?l`<button class="mark-all-btn" @click=${this._markAllRead}>Mark all read</button>`:""}
        </div>
        ${this.notifications.length===0?l`<div class="empty">No notifications</div>`:this.notifications.map(t=>l`
            <div class="item ${t.read?"read":"unread"}" role="button" tabindex="0" @click=${()=>this._clickItem(t)}>
              <div class="dot"></div>
              <div>
                <div class="item-title">${t.title}</div>
                ${t.body?l`<div class="item-body">${t.body}</div>`:""}
                ${t.time?l`<div class="item-time">${t.time}</div>`:""}
              </div>
            </div>`)}
      </div>`}};Ct.styles=Di;wr([n({type:Array})],Ct.prototype,"notifications",2);wr([p()],Ct.prototype,"_open",2);Ct=wr([u("wu-notification-center")],Ct);const Bi=c`
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
`;var Ii=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,Zt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Li(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ii(t,a,r),r};let ot=class extends d{constructor(){super(...arguments),this.orientation="both",this.maxHeight="",this.maxWidth=""}render(){const e={};return this.maxHeight&&(e.maxHeight=this.maxHeight),this.maxWidth&&(e.maxWidth=this.maxWidth),l`<div style=${ue(e)}><slot></slot></div>`}};ot.styles=Bi;Zt([n({reflect:!0})],ot.prototype,"orientation",2);Zt([n({attribute:"max-height"})],ot.prototype,"maxHeight",2);Zt([n({attribute:"max-width"})],ot.prototype,"maxWidth",2);ot=Zt([u("wu-scroll-area")],ot);const Ai=c`
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
`;var Ti=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,Re=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ni(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ti(t,a,r),r};let se=class extends d{constructor(){super(...arguments),this.orientation="horizontal",this.initialSize=250,this.minSize=80,this.maxSize=800,this._size=0,this._dragging=!1}connectedCallback(){super.connectedCallback(),this._size=this.initialSize}_onMouseDown(e){e.preventDefault(),this._dragging=!0;const t=this.orientation==="horizontal"?e.clientX:e.clientY,a=this._size,o=s=>{const i=(this.orientation==="horizontal"?s.clientX:s.clientY)-t;this._size=Math.min(this.maxSize,Math.max(this.minSize,a+i)),this.dispatchEvent(new CustomEvent("wu-resize",{bubbles:!0,composed:!0,detail:{position:this._size}}))},r=()=>{this._dragging=!1,document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)}render(){const e=this.orientation==="horizontal"?{width:`${this._size}px`}:{height:`${this._size}px`};return l`
      <div class="pane pane-primary" style=${ue(e)}>
        <slot name="primary"></slot>
      </div>
      <div class="divider ${this._dragging?"active":""}" role="separator" aria-orientation=${this.orientation} @mousedown=${this._onMouseDown}></div>
      <div class="pane pane-secondary">
        <slot name="secondary"></slot>
      </div>`}};se.styles=Ai;Re([n({reflect:!0})],se.prototype,"orientation",2);Re([n({type:Number})],se.prototype,"initialSize",2);Re([n({type:Number})],se.prototype,"minSize",2);Re([n({type:Number})],se.prototype,"maxSize",2);Re([p()],se.prototype,"_size",2);Re([p()],se.prototype,"_dragging",2);se=Re([u("wu-split-pane")],se);const qi=c`
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
`;var Ki=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,St=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ri(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ki(t,a,r),r};let je=class extends d{constructor(){super(...arguments),this.open=!1,this.direction="up",this.icon="+",this.actions=[],this._outsideClick=e=>{!this.contains(e.target)&&!this.shadowRoot.contains(e.target)&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick)}_clickAction(e){this.open=!1,this.dispatchEvent(new CustomEvent("wu-action-click",{bubbles:!0,composed:!0,detail:{value:e.value}}))}render(){return l`
      <div class="container">
        <button class="fab" aria-label="Open actions" aria-expanded=${this.open} @click=${()=>{this.open=!this.open}}>
          ${this.icon}
        </button>
        <div class="actions" ?hidden=${!this.open} role="menu">
          ${this.actions.map(e=>l`
            <button class="action-btn" role="menuitem" @click=${()=>this._clickAction(e)}>
              ${e.icon?l`<span class="action-icon" aria-hidden="true">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>`)}
        </div>
      </div>`}};je.styles=qi;St([n({type:Boolean,reflect:!0})],je.prototype,"open",2);St([n({reflect:!0})],je.prototype,"direction",2);St([n()],je.prototype,"icon",2);St([n({type:Array})],je.prototype,"actions",2);je=St([u("wu-speed-dial")],je);const Hi=c`
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
`;var Fi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,Qt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Yi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Fi(t,a,r),r};let st=class extends d{constructor(){super(...arguments),this.open=!1,this.images=[],this.index=0,this._onKey=e=>{this.open&&(e.key==="Escape"&&this.close(),e.key==="ArrowRight"&&this._next(),e.key==="ArrowLeft"&&this._prev())}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKey)}close(){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}))}_prev(){this.index>0&&this.index--}_next(){this.index<this.images.length-1&&this.index++}render(){const e=this.images[this.index];return l`
      <div class="backdrop" ?hidden=${!this.open} @click=${t=>{t.target===t.currentTarget&&this.close()}} role="dialog" aria-modal="true" aria-label="Image preview">
        <div class="box">
          <button class="close" aria-label="Close lightbox" @click=${this.close}>✕</button>
          ${e?l`<img src=${e.src} alt=${e.alt??""}>`:""}
          ${e!=null&&e.caption?l`<div class="caption">${e.caption}</div>`:""}
          <div class="nav">
            <button class="nav-btn" ?disabled=${this.index===0} aria-label="Previous image" @click=${this._prev}>‹</button>
            <span class="counter">${this.index+1} / ${this.images.length}</span>
            <button class="nav-btn" ?disabled=${this.index===this.images.length-1} aria-label="Next image" @click=${this._next}>›</button>
          </div>
        </div>
      </div>`}};st.styles=Hi;Qt([n({type:Boolean,reflect:!0})],st.prototype,"open",2);Qt([n({type:Array})],st.prototype,"images",2);Qt([n({type:Number})],st.prototype,"index",2);st=Qt([u("wu-lightbox")],st);const Vi=c`
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
`;var Ui=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,br=(e,t,a,o)=>{for(var r=o>1?void 0:o?Xi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ui(t,a,r),r};let Et=class extends d{constructor(){super(...arguments),this.images=[],this.cols=3}_click(e){this.dispatchEvent(new CustomEvent("wu-image-click",{bubbles:!0,composed:!0,detail:{index:e}}))}render(){return l`
      <div class="grid" style=${ue({"--wu-gallery-cols":String(this.cols)})}>
        ${this.images.map((e,t)=>l`
          <div class="thumb" tabindex="0" role="button" aria-label=${e.alt??`Image ${t+1}`} @click=${()=>this._click(t)} @keydown=${a=>{a.key==="Enter"&&this._click(t)}}>
            <img src=${e.src} alt=${e.alt??""} loading="lazy">
          </div>`)}
      </div>`}};Et.styles=Vi;br([n({type:Array})],Et.prototype,"images",2);br([n({type:Number})],Et.prototype,"cols",2);Et=br([u("wu-gallery")],Et);const Wi=c`
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
`;var Gi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,He=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ji(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Gi(t,a,r),r};let ie=class extends d{constructor(){super(...arguments),this.items=[],this.itemHeight=48,this.viewportHeight=400,this.renderItem=e=>l`<div style="height:${this.itemHeight}px;display:flex;align-items:center;padding:0 16px;border-bottom:1px solid var(--wu-color-border)">${String(e)}</div>`,this._scrollTop=0}_onScroll(){this._scrollTop=this._viewport.scrollTop;const e=Math.floor(this._scrollTop/this.itemHeight),t=Math.min(this.items.length,e+Math.ceil(this.viewportHeight/this.itemHeight)+2);this.dispatchEvent(new CustomEvent("wu-visible-change",{bubbles:!0,composed:!0,detail:{start:e,end:t}}))}render(){const e=this.items.length*this.itemHeight,t=Math.max(0,Math.floor(this._scrollTop/this.itemHeight)-2),a=Math.min(this.items.length,t+Math.ceil(this.viewportHeight/this.itemHeight)+4),o=t*this.itemHeight;return l`
      <div class="viewport" style=${ue({height:`${this.viewportHeight}px`})} @scroll=${this._onScroll}>
        <div class="total" style=${ue({height:`${e}px`})}>
          <div class="window" style=${ue({transform:`translateY(${o}px)`})}>
            ${this.items.slice(t,a).map((r,s)=>this.renderItem(r,t+s))}
          </div>
        </div>
      </div>`}};ie.styles=Wi;He([n({type:Array})],ie.prototype,"items",2);He([n({type:Number,attribute:"item-height"})],ie.prototype,"itemHeight",2);He([n({type:Number,attribute:"viewport-height"})],ie.prototype,"viewportHeight",2);He([n()],ie.prototype,"renderItem",2);He([p()],ie.prototype,"_scrollTop",2);He([Se(".viewport")],ie.prototype,"_viewport",2);ie=He([u("wu-virtual-list")],ie);const Zi=c`
  :host { display: block; }
  .list { list-style: none; padding: 0; margin: 0; }
  .item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-3);
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    margin-bottom: var(--wu-space-2);
    cursor: grab;
    user-select: none;
    transition: box-shadow var(--wu-duration-fast), transform var(--wu-duration-fast);
  }
  .item:active { cursor: grabbing; }
  .item.dragging { opacity: 0.5; box-shadow: var(--wu-shadow-xl); transform: scale(1.02); }
  .item.drag-over { border-color: var(--wu-color-primary); background: var(--wu-color-primary-subtle); }
  .handle { color: var(--wu-color-text-disabled); cursor: grab; }
  .content { flex: 1; font-family: var(--wu-font-sans, system-ui); font-size: var(--wu-text-sm); color: var(--wu-color-text); }
`;var Qi=Object.defineProperty,en=Object.getOwnPropertyDescriptor,er=(e,t,a,o)=>{for(var r=o>1?void 0:o?en(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Qi(t,a,r),r};let it=class extends d{constructor(){super(...arguments),this.items=[],this._draggingId=null,this._overIndex=null}_dragStart(e){this._draggingId=e}_dragOver(e,t){e.preventDefault(),this._overIndex=t}_drop(e){if(this._draggingId===null)return;const t=this.items.findIndex(r=>r.id===this._draggingId);if(t===e){this._draggingId=null,this._overIndex=null;return}const a=[...this.items],[o]=a.splice(t,1);a.splice(e,0,o),this.items=a,this.dispatchEvent(new CustomEvent("wu-sort",{bubbles:!0,composed:!0,detail:{items:a,from:t,to:e}})),this._draggingId=null,this._overIndex=null}_dragEnd(){this._draggingId=null,this._overIndex=null}render(){return l`
      <ul class="list" role="list">
        ${this.items.map((e,t)=>l`
          <li class="item ${this._draggingId===e.id?"dragging":""} ${this._overIndex===t?"drag-over":""}"
            draggable="true"
            @dragstart=${()=>this._dragStart(e.id)}
            @dragover=${a=>this._dragOver(a,t)}
            @drop=${()=>this._drop(t)}
            @dragend=${this._dragEnd}>
            <span class="handle" aria-hidden="true">⠿</span>
            <span class="content">${e.label}</span>
          </li>`)}
      </ul>`}};it.styles=Zi;er([n({type:Array})],it.prototype,"items",2);er([p()],it.prototype,"_draggingId",2);er([p()],it.prototype,"_overIndex",2);it=er([u("wu-sortable")],it);const tn=c`
  :host { display: flex; gap: var(--wu-space-4); overflow-x: auto; padding: var(--wu-space-2); }
`,rn=c`
  :host {
    display: flex;
    flex-direction: column;
    min-width: 260px;
    max-width: 320px;
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-xl);
    overflow: hidden;
    flex-shrink: 0;
  }
  :host(.drag-over) { background: var(--wu-color-primary-subtle); border-color: var(--wu-color-primary); }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-color-border);
    font-family: var(--wu-font-sans, system-ui);
    font-weight: var(--wu-font-semibold);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }
  .count {
    background: var(--wu-color-border);
    padding: 2px 8px;
    border-radius: var(--wu-radius-full);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }
  .cards {
    flex: 1;
    padding: var(--wu-space-3);
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-2);
    min-height: 80px;
  }
  .card {
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-3);
    font-family: var(--wu-font-sans, system-ui);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: grab;
    transition: box-shadow var(--wu-duration-fast);
  }
  .card:active { cursor: grabbing; }
  .card.dragging { opacity: 0.4; }
  .card:hover { box-shadow: var(--wu-shadow-md); }
`;var an=Object.defineProperty,on=Object.getOwnPropertyDescriptor,vt=(e,t,a,o)=>{for(var r=o>1?void 0:o?on(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&an(t,a,r),r};let nr=class extends d{render(){return l`<div role="region" aria-label="Kanban board"><slot></slot></div>`}};nr.styles=tn;nr=vt([u("wu-kanban")],nr);let De=class extends d{constructor(){super(...arguments),this.columnId="",this.label="",this.cards=[],this._draggingId=null}_dragStart(e){this._draggingId=e}_dragEnd(){this._draggingId=null}_dragOver(e){e.preventDefault(),this.classList.add("drag-over")}_dragLeave(){this.classList.remove("drag-over")}_drop(e){var t;e.preventDefault(),this.classList.remove("drag-over");const a=(t=e.dataTransfer)==null?void 0:t.getData("text/plain");a&&this.dispatchEvent(new CustomEvent("wu-card-move",{bubbles:!0,composed:!0,detail:{cardId:a,toColumn:this.columnId}}))}render(){return l`
      <div class="header">
        <span>${this.label}</span>
        <span class="count">${this.cards.length}</span>
      </div>
      <div class="cards" @dragover=${this._dragOver} @dragleave=${this._dragLeave} @drop=${this._drop}>
        ${this.cards.map(e=>l`
          <div class="card ${this._draggingId===e.id?"dragging":""}"
            draggable="true"
            @dragstart=${t=>{var a;(a=t.dataTransfer)==null||a.setData("text/plain",e.id),this._dragStart(e.id)}}
            @dragend=${this._dragEnd}>
            ${e.title}
          </div>`)}
      </div>`}};De.styles=rn;vt([n()],De.prototype,"columnId",2);vt([n()],De.prototype,"label",2);vt([n({type:Array})],De.prototype,"cards",2);vt([p()],De.prototype,"_draggingId",2);De=vt([u("wu-kanban-column")],De);const sn=c`
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
`;var nn=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,_e=(e,t,a,o)=>{for(var r=o>1?void 0:o?ln(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&nn(t,a,r),r};let X=class extends d{constructor(){super(...arguments),this.users=[],this.value="",this.placeholder="Type @ to mention someone...",this.multiline=!1,this._query="",this._showList=!1,this._activeIndex=0}get _filtered(){return this._query?this.users.filter(e=>e.name.toLowerCase().includes(this._query.toLowerCase())).slice(0,8):[]}_onInput(e){const t=e.target;this.value=t.value;const a=t.value.slice(0,t.selectionStart??t.value.length).match(/@(\w*)$/);a?(this._query=a[1],this._showList=!0,this._activeIndex=0):(this._showList=!1,this._query=""),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_onKey(e){if(!this._showList)return;const t=this._filtered;e.key==="ArrowDown"?(e.preventDefault(),this._activeIndex=(this._activeIndex+1)%t.length):e.key==="ArrowUp"?(e.preventDefault(),this._activeIndex=(this._activeIndex-1+t.length)%t.length):e.key==="Enter"&&t.length?(e.preventDefault(),this._selectUser(t[this._activeIndex])):e.key==="Escape"&&(this._showList=!1)}_selectUser(e){const t=this.shadowRoot.querySelector("textarea,input").selectionStart??this.value.length,a=this.value.slice(0,t).replace(/@\w*$/,`@${e.name} `);this.value=a+this.value.slice(t),this._showList=!1,this._query="",this.dispatchEvent(new CustomEvent("wu-mention",{bubbles:!0,composed:!0,detail:{user:e}})),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_initials(e){return e.split(" ").map(t=>t[0]).join("").slice(0,2).toUpperCase()}render(){const e=this._filtered,t=this.multiline?l`<textarea .value=${this.value} placeholder=${this.placeholder} rows="3" @input=${this._onInput} @keydown=${this._onKey}></textarea>`:l`<input type="text" .value=${this.value} placeholder=${this.placeholder} @input=${this._onInput} @keydown=${this._onKey}>`;return l`
      <div class="field">
        ${t}
        <div class="mention-list" ?hidden=${!this._showList||e.length===0} role="listbox">
          ${e.map((a,o)=>l`
            <div class="mention-item ${o===this._activeIndex?"active":""}" role="option" @mousedown=${r=>{r.preventDefault(),this._selectUser(a)}}>
              ${a.avatar?l`<img class="avatar" src=${a.avatar} alt="">`:l`<div class="avatar">${this._initials(a.name)}</div>`}
              ${a.name}
            </div>`)}
        </div>
      </div>`}};X.styles=sn;_e([n({type:Array})],X.prototype,"users",2);_e([n()],X.prototype,"value",2);_e([n()],X.prototype,"placeholder",2);_e([n({type:Boolean})],X.prototype,"multiline",2);_e([p()],X.prototype,"_query",2);_e([p()],X.prototype,"_showList",2);_e([p()],X.prototype,"_activeIndex",2);X=_e([u("wu-mention")],X);const dn=c`
  :host { display: inline-block; }
  svg { display: block; }
`;var un=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,wt=(e,t,a,o)=>{for(var r=o>1?void 0:o?cn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&un(t,a,r),r};let be=class extends d{constructor(){super(...arguments),this.value="",this.size=128,this.color="#000000",this.background="#ffffff",this.moduleSize=4}_buildMatrix(){const e=Array.from({length:21},()=>Array(21).fill(!1)),t=(o,r)=>{for(let s=0;s<7;s++)for(let i=0;i<7;i++){if(o+s>=21||r+i>=21)continue;const h=s===0||s===6||i===0||i===6,f=s>=2&&s<=4&&i>=2&&i<=4;e[o+s][r+i]=h||f}};t(0,0),t(0,14),t(14,0);for(let o=8;o<13;o++)e[6][o]=o%2===0,e[o][6]=o%2===0;let a=0;for(let o=0;o<this.value.length;o++)a=a*31+this.value.charCodeAt(o)>>>0;for(let o=9;o<21;o++)for(let r=9;r<21;r++){const s=(a^o*17+r*13)&1;e[o][r]=s===1}return e}render(){if(!this.value)return l`<svg width=${this.size} height=${this.size} style="background:${this.background}"></svg>`;const e=this._buildMatrix();if(!e)return l`<div style="font-size:12px;color:red">Value too long</div>`;const t=e.length,a=this.size/t,o=e.flatMap((r,s)=>r.map((i,h)=>i?Er`<rect x=${h*a} y=${s*a} width=${a} height=${a} fill=${this.color}></rect>`:""));return l`
      <svg width=${this.size} height=${this.size} viewBox="0 0 ${this.size} ${this.size}" aria-label="QR code for: ${this.value}" role="img">
        <rect width="100%" height="100%" fill=${this.background}></rect>
        ${o}
      </svg>`}};be.styles=dn;wt([n()],be.prototype,"value",2);wt([n({type:Number})],be.prototype,"size",2);wt([n()],be.prototype,"color",2);wt([n()],be.prototype,"background",2);wt([n({type:Number,attribute:"module-size"})],be.prototype,"moduleSize",2);be=wt([u("wu-qr-code")],be);const pn=c`
  :host {
    display: block;
    font-family: var(--wu-font-sans, system-ui);
  }
  .container {
    background: #000;
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    position: relative;
    aspect-ratio: 16/9;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--wu-space-3) var(--wu-space-4);
    background: linear-gradient(transparent, rgba(0,0,0,0.7));
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    transition: opacity var(--wu-duration-normal);
  }
  .container:not(:hover) .controls { opacity: 0; }
  .container:hover .controls, :host([paused]) .controls { opacity: 1; }
  .play-btn {
    background: rgba(255,255,255,0.9);
    border: none;
    width: 36px;
    height: 36px;
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
    transition: background var(--wu-duration-fast);
  }
  .play-btn:hover { background: white; }
  .progress {
    flex: 1;
    height: 4px;
    background: rgba(255,255,255,0.3);
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    position: relative;
  }
  .progress-fill {
    height: 100%;
    background: var(--wu-color-primary, #2563eb);
    border-radius: var(--wu-radius-full);
    pointer-events: none;
  }
  .time {
    color: rgba(255,255,255,0.8);
    font-size: var(--wu-text-xs);
    white-space: nowrap;
  }
  .volume-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: var(--wu-space-1);
  }
`;var hn=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,S=(e,t,a,o)=>{for(var r=o>1?void 0:o?vn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&hn(t,a,r),r};let x=class extends d{constructor(){super(...arguments),this.src="",this.poster="",this.autoplay=!1,this.muted=!1,this.loop=!1,this.paused=!0,this._progress=0,this._vol=1,this._currentTime=0,this._duration=0}_toggle(){this._video.paused?this._video.play():this._video.pause()}_onPlay(){this.paused=!1,this.dispatchEvent(new CustomEvent("wu-play",{bubbles:!0,composed:!0}))}_onPause(){this.paused=!0,this.dispatchEvent(new CustomEvent("wu-pause",{bubbles:!0,composed:!0}))}_onEnded(){this.paused=!0,this.dispatchEvent(new CustomEvent("wu-ended",{bubbles:!0,composed:!0}))}_onTimeUpdate(){this._currentTime=this._video.currentTime,this._duration=this._video.duration||0,this._progress=this._duration?this._currentTime/this._duration*100:0}_seek(e){const t=e.currentTarget,a=e.offsetX/t.offsetWidth;this._video.currentTime=a*(this._video.duration||0)}_toggleMute(){this._video.muted=!this._video.muted,this._vol=this._video.muted?0:1}_formatTime(e){if(!isFinite(e))return"0:00";const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${a.toString().padStart(2,"0")}`}render(){return l`
      <div class="container">
        <video src=${this.src} poster=${this.poster} ?autoplay=${this.autoplay} ?muted=${this.muted||this._vol===0} ?loop=${this.loop}
          @play=${this._onPlay} @pause=${this._onPause} @ended=${this._onEnded} @timeupdate=${this._onTimeUpdate}>
        </video>
        <div class="controls">
          <button class="play-btn" aria-label=${this.paused?"Play":"Pause"} @click=${this._toggle}>
            ${this.paused?"▶":"⏸"}
          </button>
          <div class="progress" @click=${this._seek} role="slider" aria-label="Seek" aria-valuenow=${Math.round(this._progress)}>
            <div class="progress-fill" style=${ue({width:`${this._progress}%`})}></div>
          </div>
          <span class="time">${this._formatTime(this._currentTime)} / ${this._formatTime(this._duration)}</span>
          <button class="volume-btn" aria-label=${this._vol===0?"Unmute":"Mute"} @click=${this._toggleMute}>
            ${this._vol===0?"🔇":"🔊"}
          </button>
        </div>
      </div>`}};x.styles=pn;S([n()],x.prototype,"src",2);S([n()],x.prototype,"poster",2);S([n({type:Boolean})],x.prototype,"autoplay",2);S([n({type:Boolean})],x.prototype,"muted",2);S([n({type:Boolean})],x.prototype,"loop",2);S([n({reflect:!0,type:Boolean})],x.prototype,"paused",2);S([p()],x.prototype,"_progress",2);S([p()],x.prototype,"_vol",2);S([p()],x.prototype,"_currentTime",2);S([p()],x.prototype,"_duration",2);S([Se("video")],x.prototype,"_video",2);x=S([u("wu-video")],x);
