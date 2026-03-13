import{f as Oe,u as Ee,A as w,E as Pe,i as d,a as u,b as l}from"./lit-element-9a6qN07w.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je={attribute:!0,type:String,converter:Ee,reflect:!1,hasChanged:Oe},Se=(e=je,t,a)=>{const{kind:o,metadata:r}=a;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(a.name,e),o==="accessor"){const{name:n}=a;return{set(p){const I=t.get.call(this);t.set.call(this,p),this.requestUpdate(n,I,e,!0,p)},init(p){return p!==void 0&&this.C(n,void 0,e,p),p}}}if(o==="setter"){const{name:n}=a;return function(p){const I=this[n];t.call(this,p),this.requestUpdate(n,I,e,!0,p)}}throw Error("Unsupported decorator location: "+o)};function i(e){return(t,a)=>typeof a=="object"?Se(e,t,a):((o,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(e){return i({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=(e,t,a)=>(a.configurable=!0,a.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,a),a);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(e,t){return(a,o,r)=>{const s=n=>{var p;return((p=n.renderRoot)==null?void 0:p.querySelector(e))??null};return Me(a,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=e=>e??w;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be={ATTRIBUTE:1},Le=e=>(...t)=>({_$litDirective$:e,values:t});let Ae=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,o){this._$Ct=t,this._$AM=a,this._$Ci=o}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce="important",Ie=" !"+Ce,Te=Le(class extends Ae{constructor(e){var t;if(super(e),e.type!==Be.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const o=e[a];return o==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?a.removeProperty(o):a[o]=null);for(const o in t){const r=t[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(Ie);o.includes("-")||s?a.setProperty(o,s?r.slice(0,-11):r,s?Ce:""):a[o]=r}}return Pe}}),Ne=d`
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
`;var qe=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,U=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ke(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&qe(t,a,r),r};let j=class extends u{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this.ariaLabel=null}_handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}render(){return l`
      <button
        part="base"
        type=${this.type}
        ?disabled=${this.disabled||this.loading}
        aria-disabled=${this.disabled||this.loading?"true":"false"}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${z(this.ariaLabel??void 0)}
        @click=${this._handleClick}
      >
        ${this.loading?l`<span class="spinner" aria-hidden="true"></span>`:""}
        <slot name="prefix"></slot>
        <span part="label" class="label"><slot></slot></span>
        <slot name="suffix"></slot>
      </button>
    `}};j.styles=Ne;U([i({reflect:!0})],j.prototype,"variant",2);U([i({reflect:!0})],j.prototype,"size",2);U([i({type:Boolean,reflect:!0})],j.prototype,"disabled",2);U([i({type:Boolean,reflect:!0})],j.prototype,"loading",2);U([i()],j.prototype,"type",2);U([i({attribute:"aria-label"})],j.prototype,"ariaLabel",2);j=U([c("wu-button")],j);const Fe=d`
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
`;var Ye=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,De=(e,t,a,o)=>{for(var r=o>1?void 0:o?Re(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&Ye(t,a,r),r};let he=class extends u{constructor(){super(...arguments),this.variant="default"}render(){return l`<span part="base" class="badge"><slot></slot></span>`}};he.styles=Fe;De([i({reflect:!0})],he.prototype,"variant",2);he=De([c("wu-badge")],he);const He=d`
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
`;var Ue=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,te=(e,t,a,o)=>{for(var r=o>1?void 0:o?Xe(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&Ue(t,a,r),r};let T=class extends u{constructor(){super(...arguments),this.size="md",this._imgError=!1}_handleImgError(){this._imgError=!0}render(){const e=this.src&&!this._imgError;return l`
      <div part="base" class="avatar" role="img" aria-label=${z(this.alt??this.initials)}>
        ${e?l`<img src=${this.src} alt=${z(this.alt)} @error=${this._handleImgError} />`:l`${this.initials??""}`}
      </div>
    `}};T.styles=He;te([i()],T.prototype,"src",2);te([i()],T.prototype,"alt",2);te([i()],T.prototype,"initials",2);te([i({reflect:!0})],T.prototype,"size",2);te([h()],T.prototype,"_imgError",2);T=te([c("wu-avatar")],T);const Ve=d`
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
`;var We=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,x=(e,t,a,o)=>{for(var r=o>1?void 0:o?Je(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&We(t,a,r),r};let b=class extends u{constructor(){super(...arguments),this.type="text",this.value="",this.disabled=!1,this.required=!1,this.size="md"}_handleInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const e="input-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="input-row">
          <input
            part="input"
            id=${e}
            type=${this.type}
            .value=${this.value}
            placeholder=${z(this.placeholder)}
            name=${z(this.name)}
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
    `}};b.styles=Ve;x([i()],b.prototype,"type",2);x([i()],b.prototype,"value",2);x([i()],b.prototype,"placeholder",2);x([i()],b.prototype,"label",2);x([i()],b.prototype,"hint",2);x([i()],b.prototype,"error",2);x([i({type:Boolean,reflect:!0})],b.prototype,"disabled",2);x([i({type:Boolean})],b.prototype,"required",2);x([i({reflect:!0})],b.prototype,"size",2);x([i()],b.prototype,"name",2);b=x([c("wu-input")],b);const Ze=d`
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
`;var Ge=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,m=(e,t,a,o)=>{for(var r=o>1?void 0:o?Qe(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&Ge(t,a,r),r};let v=class extends u{constructor(){super(...arguments),this.value="",this.disabled=!1,this.required=!1,this.rows=4,this._charCount=0}connectedCallback(){super.connectedCallback(),this._charCount=this.value.length}_handleInput(e){this.value=e.target.value,this._charCount=this.value.length,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const e="textarea-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <textarea
          part="textarea"
          id=${e}
          rows=${this.rows}
          name=${z(this.name)}
          placeholder=${z(this.placeholder)}
          maxlength=${z(this.maxlength)}
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
    `}};v.styles=Ze;m([i()],v.prototype,"value",2);m([i()],v.prototype,"placeholder",2);m([i()],v.prototype,"label",2);m([i()],v.prototype,"hint",2);m([i()],v.prototype,"error",2);m([i({type:Boolean,reflect:!0})],v.prototype,"disabled",2);m([i({type:Boolean})],v.prototype,"required",2);m([i({type:Number})],v.prototype,"maxlength",2);m([i({type:Number})],v.prototype,"rows",2);m([i()],v.prototype,"name",2);m([h()],v.prototype,"_charCount",2);v=m([c("wu-textarea")],v);const et=d`
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
`;var tt=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,k=(e,t,a,o)=>{for(var r=o>1?void 0:o?rt(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&tt(t,a,r),r};let g=class extends u{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.required=!1,this.size="md"}_handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){const e="select-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="select-row">
          <select
            part="select"
            id=${e}
            name=${z(this.name)}
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
    `}};g.styles=et;k([i()],g.prototype,"value",2);k([i({type:Array})],g.prototype,"options",2);k([i()],g.prototype,"placeholder",2);k([i()],g.prototype,"label",2);k([i()],g.prototype,"hint",2);k([i()],g.prototype,"error",2);k([i({type:Boolean,reflect:!0})],g.prototype,"disabled",2);k([i({type:Boolean})],g.prototype,"required",2);k([i({reflect:!0})],g.prototype,"size",2);k([i()],g.prototype,"name",2);g=k([c("wu-select")],g);const at=d`
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
`;var ot=Object.defineProperty,st=Object.getOwnPropertyDescriptor,X=(e,t,a,o)=>{for(var r=o>1?void 0:o?st(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&ot(t,a,r),r};let S=class extends u{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on"}_handleChange(e){const t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.value}}))}updated(e){var t;if(e.has("indeterminate")){const a=(t=this.shadowRoot)==null?void 0:t.querySelector("input");a&&(a.indeterminate=this.indeterminate)}}render(){const e="checkbox-"+(this.name??Math.random().toString(36).slice(2));return l`
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
    `}};S.styles=at;X([i({type:Boolean,reflect:!0})],S.prototype,"checked",2);X([i({type:Boolean,reflect:!0})],S.prototype,"indeterminate",2);X([i({type:Boolean,reflect:!0})],S.prototype,"disabled",2);X([i()],S.prototype,"label",2);X([i()],S.prototype,"name",2);X([i()],S.prototype,"value",2);S=X([c("wu-checkbox")],S);const it=d`
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
`;var nt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,V=(e,t,a,o)=>{for(var r=o>1?void 0:o?lt(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&nt(t,a,r),r};let M=class extends u{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.labelPosition="end",this.size="md"}_handleChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked}}))}render(){const e="toggle-"+(this.name??Math.random().toString(36).slice(2)),t=this.label?l`<label part="label" for=${e}>${this.label}</label>`:"";return l`
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
    `}};M.styles=it;V([i({type:Boolean,reflect:!0})],M.prototype,"checked",2);V([i({type:Boolean,reflect:!0})],M.prototype,"disabled",2);V([i()],M.prototype,"label",2);V([i({attribute:"label-position"})],M.prototype,"labelPosition",2);V([i({reflect:!0})],M.prototype,"size",2);V([i()],M.prototype,"name",2);M=V([c("wu-toggle")],M);const dt=d`
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
`;var ut=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,be=(e,t,a,o)=>{for(var r=o>1?void 0:o?ct(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&ut(t,a,r),r};let J=class extends u{constructor(){super(...arguments),this.interactive=!1,this._hasHeader=!1,this._hasFooter=!1}_handleClick(e){this.interactive&&this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}_onHeaderSlotChange(e){const t=e.target;this._hasHeader=t.assignedNodes({flatten:!0}).length>0}_onFooterSlotChange(e){const t=e.target;this._hasFooter=t.assignedNodes({flatten:!0}).length>0}render(){return l`
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
    `}};J.styles=dt;be([i({type:Boolean,reflect:!0})],J.prototype,"interactive",2);be([h()],J.prototype,"_hasHeader",2);be([h()],J.prototype,"_hasFooter",2);J=be([c("wu-card")],J);const pt=d`
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
`;var ht=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,W=(e,t,a,o)=>{for(var r=o>1?void 0:o?wt(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&ht(t,a,r),r};let B=class extends u{constructor(){super(...arguments),this.open=!1,this.label="",this.closeOnBackdrop=!0,this.hideClose=!1,this._hasFooter=!1,this._previouslyFocused=null}updated(e){e.has("open")&&(this.open?this._openDialog():this._closeDialog("api"))}_openDialog(){this._dialog&&(this._previouslyFocused=document.activeElement,this._dialog.showModal(),document.body.style.overflow="hidden",this._dialog.focus(),this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0})))}_closeDialog(e){var t,a;(t=this._dialog)!=null&&t.open&&(this._dialog.close(),document.body.style.overflow="",(a=this._previouslyFocused)==null||a.focus(),this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0,detail:{reason:e}})))}_onBackdropClick(e){this.closeOnBackdrop&&e.target===this._dialog&&this._closeDialog("backdrop")}_onKeydown(e){e.key==="Escape"&&(e.preventDefault(),this._closeDialog("escape")),e.key==="Tab"&&this._trapFocus(e)}_trapFocus(e){const t=Array.from(this._dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(r=>!r.hasAttribute("disabled")),a=t[0],o=t[t.length-1];a&&(e.shiftKey&&document.activeElement===a?(e.preventDefault(),o.focus()):!e.shiftKey&&document.activeElement===o&&(e.preventDefault(),a.focus()))}_onFooterSlotChange(e){const t=e.target;this._hasFooter=t.assignedNodes({flatten:!0}).length>0}render(){return l`
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
    `}};B.styles=pt;W([i({type:Boolean,reflect:!0})],B.prototype,"open",2);W([i()],B.prototype,"label",2);W([i({type:Boolean,attribute:"close-on-backdrop"})],B.prototype,"closeOnBackdrop",2);W([i({type:Boolean,attribute:"hide-close"})],B.prototype,"hideClose",2);W([h()],B.prototype,"_hasFooter",2);W([me("dialog")],B.prototype,"_dialog",2);B=W([c("wu-modal")],B);const vt=d`
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
`;var bt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,ye=(e,t,a,o)=>{for(var r=o>1?void 0:o?gt(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&bt(t,a,r),r};const ft={info:"ℹ",success:"✓",warning:"⚠",danger:"✕",neutral:"•"};let oe=class extends u{constructor(){super(...arguments),this.variant="info",this.dismissible=!1}_handleDismiss(){this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0})),this.remove()}render(){return l`
      <div part="base" class="alert" role="alert" aria-live="polite">
        <span part="icon" class="icon" aria-hidden="true">
          <slot name="icon">${ft[this.variant]}</slot>
        </span>
        <div part="content" class="content">
          <slot name="title"></slot>
          <slot></slot>
        </div>
        ${this.dismissible?l`
          <button class="dismiss-btn" aria-label="Dismiss" @click=${this._handleDismiss}>✕</button>
        `:""}
      </div>
    `}};oe.styles=vt;ye([i({reflect:!0})],oe.prototype,"variant",2);ye([i({type:Boolean})],oe.prototype,"dismissible",2);oe=ye([c("wu-alert")],oe);const mt=d`
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
`;var yt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,xe=(e,t,a,o)=>{for(var r=o>1?void 0:o?xt(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&yt(t,a,r),r};let se=class extends u{constructor(){super(...arguments),this.size="md",this.label="Loading…"}render(){return l`
      <span role="status" aria-label=${this.label}>
        <span class="spinner" aria-hidden="true"></span>
        <span class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">${this.label}</span>
      </span>
    `}};se.styles=mt;xe([i({reflect:!0})],se.prototype,"size",2);xe([i()],se.prototype,"label",2);se=xe([c("wu-spinner")],se);const kt=d`
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
`;var _t=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,q=(e,t,a,o)=>{for(var r=o>1?void 0:o?$t(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&_t(t,a,r),r};let C=class extends u{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.indeterminate=!1,this.showLabel=!1,this.size="md",this.label=""}get _pct(){if(this.indeterminate)return 0;const e=Math.min(Math.max(this.value,this.min),this.max);return Math.round((e-this.min)/(this.max-this.min)*100)}render(){return l`
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
    `}};C.styles=kt;q([i({type:Number})],C.prototype,"value",2);q([i({type:Number})],C.prototype,"min",2);q([i({type:Number})],C.prototype,"max",2);q([i({type:Boolean,reflect:!0})],C.prototype,"indeterminate",2);q([i({type:Boolean})],C.prototype,"showLabel",2);q([i({reflect:!0})],C.prototype,"size",2);q([i()],C.prototype,"label",2);C=q([c("wu-progress")],C);const zt=d`
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
`;var Ct=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,ge=(e,t,a,o)=>{for(var r=o>1?void 0:o?Dt(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&Ct(t,a,r),r};let Z=class extends u{constructor(){super(...arguments),this.variant="text",this.width="100%",this.height=""}render(){const e={width:this.width};return this.height&&(e.height=this.height),l`
      <div
        class="skeleton"
        style=${Te(e)}
        role="status"
        aria-label="Loading…"
        aria-busy="true"
      ></div>
    `}};Z.styles=zt;ge([i({reflect:!0})],Z.prototype,"variant",2);ge([i()],Z.prototype,"width",2);ge([i()],Z.prototype,"height",2);Z=ge([c("wu-skeleton")],Z);const Ot=d`
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
`;var Et=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,ke=(e,t,a,o)=>{for(var r=o>1?void 0:o?Pt(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&Et(t,a,r),r};let ie=class extends u{constructor(){super(...arguments),this.vertical=!1,this._hasLabel=!1}_onSlotChange(e){const t=e.target;this._hasLabel=t.assignedNodes({flatten:!0}).some(a=>a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE&&a.textContent.trim())}render(){return l`
      <div class="line" role="separator" aria-orientation=${this.vertical?"vertical":"horizontal"}></div>
      ${this._hasLabel?l`<span class="label"><slot @slotchange=${this._onSlotChange}></slot></span>`:l`<slot @slotchange=${this._onSlotChange} style="display:none"></slot>`}
      ${this._hasLabel?l`<div class="line"></div>`:""}
    `}};ie.styles=Ot;ke([i({type:Boolean,reflect:!0})],ie.prototype,"vertical",2);ke([h()],ie.prototype,"_hasLabel",2);ie=ke([c("wu-divider")],ie);const jt=d`
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
`;var St=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,ce=(e,t,a,o)=>{for(var r=o>1?void 0:o?Mt(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&St(t,a,r),r};let R=class extends u{constructor(){super(...arguments),this.content="",this.placement="top",this.delay=300,this._visible=!1,this._showTimer=null}_show(){this._showTimer=setTimeout(()=>{this._visible=!0},this.delay)}_hide(){this._showTimer&&(clearTimeout(this._showTimer),this._showTimer=null),this._visible=!1}disconnectedCallback(){super.disconnectedCallback(),this._hide()}render(){const e="tooltip-content";return l`
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
    `}};R.styles=jt;ce([i()],R.prototype,"content",2);ce([i({reflect:!0})],R.prototype,"placement",2);ce([i({type:Number})],R.prototype,"delay",2);ce([h()],R.prototype,"_visible",2);R=ce([c("wu-tooltip")],R);const Bt=d`
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
`;var Lt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,fe=(e,t,a,o)=>{for(var r=o>1?void 0:o?At(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&Lt(t,a,r),r};let G=class extends u{constructor(){super(...arguments),this.open=!1,this.placement="bottom",this._isOpen=!1,this._onDocClick=e=>{this.contains(e.target)||(this._isOpen=!1,this.open=!1)}}updated(e){e.has("open")&&(this._isOpen=this.open)}_toggle(){this._isOpen=!this._isOpen,this.open=this._isOpen,this.dispatchEvent(new CustomEvent(this._isOpen?"wu-open":"wu-close",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDocClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDocClick)}render(){return l`
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
    `}};G.styles=Bt;fe([i({type:Boolean,reflect:!0})],G.prototype,"open",2);fe([i({reflect:!0})],G.prototype,"placement",2);fe([h()],G.prototype,"_isOpen",2);G=fe([c("wu-popover")],G);const It=d`
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
`,Tt=d`
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
`;var Nt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,re=(e,t,a,o)=>{for(var r=o>1?void 0:o?qt(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&Nt(t,a,r),r};const Kt={info:"ℹ",success:"✓",warning:"⚠",danger:"✕",default:"•"};let Q=class extends u{constructor(){super(...arguments),this.variant="default",this.heading="",this.duration=5e3}connectedCallback(){super.connectedCallback(),this.duration>0&&setTimeout(()=>this._dismiss("auto"),this.duration)}_dismiss(e){this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0,detail:{reason:e}})),this.remove()}render(){return l`
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <span class="icon" aria-hidden="true">${Kt[this.variant]}</span>
        <div class="content">
          ${this.heading?l`<div class="title">${this.heading}</div>`:""}
          <slot></slot>
          <slot name="action"></slot>
        </div>
        <button class="close-btn" aria-label="Dismiss notification" @click=${()=>this._dismiss("button")}>✕</button>
      </div>
    `}};Q.styles=It;re([i({reflect:!0})],Q.prototype,"variant",2);re([i()],Q.prototype,"heading",2);re([i({type:Number})],Q.prototype,"duration",2);Q=re([c("wu-toast")],Q);let we=class extends u{constructor(){super(...arguments),this.position="top-right"}toast(e){const t=Object.assign(document.createElement("wu-toast"),{heading:e.heading??"",variant:e.variant??"default",duration:e.duration??5e3});return e.message&&(t.textContent=e.message),this.shadowRoot.querySelector("slot").parentElement.appendChild(t),t}render(){return l`<slot></slot>`}};we.styles=Tt;re([i({reflect:!0})],we.prototype,"position",2);we=re([c("wu-toast-provider")],we);const Ft=d`
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
`,Yt=d`
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
`,Rt=d`
  :host {
    display: none;
  }

  :host([active]) {
    display: block;
  }
`;var Ht=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,P=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ut(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&Ht(t,a,r),r};let ee=class extends u{constructor(){super(...arguments),this.panel="",this.active=!1,this.disabled=!1}_handleClick(){this.disabled||this.dispatchEvent(new CustomEvent("wu-tab-click",{bubbles:!0,composed:!0,detail:{panel:this.panel}}))}render(){return l`
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
    `}};ee.styles=Yt;P([i()],ee.prototype,"panel",2);P([i({type:Boolean,reflect:!0})],ee.prototype,"active",2);P([i({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);ee=P([c("wu-tab")],ee);let ne=class extends u{constructor(){super(...arguments),this.name="",this.active=!1}render(){return l`
      <div role="tabpanel" id=${this.name} aria-hidden=${!this.active}>
        <slot></slot>
      </div>
    `}};ne.styles=Rt;P([i({reflect:!0})],ne.prototype,"name",2);P([i({type:Boolean,reflect:!0})],ne.prototype,"active",2);ne=P([c("wu-tab-panel")],ne);let le=class extends u{constructor(){super(...arguments),this.orientation="horizontal",this.activePanel=""}firstUpdated(){this._setup(),this.addEventListener("wu-tab-click",e=>{const t=e,a=this._tabs(),o=this._panels(),r=a.find(s=>s.panel===t.detail.panel);!r||r.disabled||r.active||(this._activate(t.detail.panel,a,o),this.dispatchEvent(new CustomEvent("wu-tab-change",{bubbles:!0,composed:!0,detail:{panel:t.detail.panel}})))})}_setup(){const e=this._tabs(),t=this._panels();if(!e.length)return;const a=e.find(o=>o.panel===this.activePanel)??e.find(o=>!o.disabled)??e[0];this._activate(a.panel,e,t),this._attachKeyboardListeners(e,t)}_tabs(){return Array.from(this.querySelectorAll("wu-tab"))}_panels(){return Array.from(this.querySelectorAll("wu-tab-panel"))}_activate(e,t,a){t.forEach(o=>{o.active=o.panel===e}),a.forEach(o=>{o.active=o.name===e}),this.activePanel=e}_attachKeyboardListeners(e,t){var a;const o=(a=this.shadowRoot)==null?void 0:a.querySelector(".tablist");o==null||o.addEventListener("keydown",r=>this._onKeydown(r,e,t))}_onKeydown(e,t,a){var o,r;const s=t.findIndex(I=>I.active),n=this.orientation==="horizontal";let p=-1;n&&e.key==="ArrowRight"||!n&&e.key==="ArrowDown"?p=(s+1)%t.length:n&&e.key==="ArrowLeft"||!n&&e.key==="ArrowUp"?p=(s-1+t.length)%t.length:e.key==="Home"?p=0:e.key==="End"&&(p=t.length-1),p>=0&&!t[p].disabled&&(e.preventDefault(),this._activate(t[p].panel,t,a),(r=(o=t[p].shadowRoot)==null?void 0:o.querySelector("button"))==null||r.focus())}render(){return l`
      <div class="tablist" role="tablist" aria-orientation=${this.orientation}>
        <slot name="tabs"></slot>
      </div>
      <div class="panels">
        <slot></slot>
      </div>
    `}};le.styles=Ft;P([i({reflect:!0})],le.prototype,"orientation",2);P([i({attribute:"active-panel"})],le.prototype,"activePanel",2);le=P([c("wu-tabs")],le);const Xt=d`
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
`,Vt=d`
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
`;var Wt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,pe=(e,t,a,o)=>{for(var r=o>1?void 0:o?Jt(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&Wt(t,a,r),r};let Zt=0,de=class extends u{constructor(){super(...arguments),this._uid=++Zt,this.open=!1,this.disabled=!1}_toggle(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent("wu-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}})))}render(){const e=`wu-acc-header-${this._uid}`,t=`wu-acc-panel-${this._uid}`;return l`
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
        aria-hidden="${z(this.open?void 0:"true")}"
      >
        <div class="content"><slot></slot></div>
      </div>
    `}};de.styles=Vt;pe([i({type:Boolean,reflect:!0})],de.prototype,"open",2);pe([i({type:Boolean,reflect:!0})],de.prototype,"disabled",2);de=pe([c("wu-accordion-item")],de);let ve=class extends u{constructor(){super(...arguments),this.single=!1,this._onToggle=e=>{const t=e.target;t.open&&this.querySelectorAll("wu-accordion-item").forEach(a=>{a!==t&&(a.open=!1)})}}updated(e){e.has("single")&&(this.single?this.addEventListener("wu-toggle",this._onToggle):this.removeEventListener("wu-toggle",this._onToggle))}render(){return l`<div class="accordion"><slot></slot></div>`}};ve.styles=Xt;pe([i({type:Boolean,reflect:!0})],ve.prototype,"single",2);ve=pe([c("wu-accordion")],ve);const Gt=d`
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
`;var Qt=Object.defineProperty,er=Object.getOwnPropertyDescriptor,_e=(e,t,a,o)=>{for(var r=o>1?void 0:o?er(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&Qt(t,a,r),r};let ue=class extends u{constructor(){super(...arguments),this.separator="/",this.label="Breadcrumb"}firstUpdated(){this.style.setProperty("--wu-breadcrumb-separator-char",`"${this.separator}"`)}render(){return l`
      <nav aria-label=${this.label}>
        <ol>
          <slot></slot>
        </ol>
      </nav>
    `}};ue.styles=Gt;_e([i()],ue.prototype,"separator",2);_e([i()],ue.prototype,"label",2);ue=_e([c("wu-breadcrumb")],ue);const tr=d`
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
`;var rr=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,ae=(e,t,a,o)=>{for(var r=o>1?void 0:o?ar(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&rr(t,a,r),r};let N=class extends u{constructor(){super(...arguments),this.page=1,this.totalPages=1,this.showInfo=!1,this.totalItems=0,this.pageSize=10}_go(e){e<1||e>this.totalPages||e===this.page||(this.page=e,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:e}})))}_pages(){const e=this.totalPages,t=this.page;if(e<=7)return Array.from({length:e},(s,n)=>n+1);const a=[1];t>3&&a.push("dots");const o=Math.max(2,t-1),r=Math.min(e-1,t+1);for(let s=o;s<=r;s++)a.push(s);return t<e-2&&a.push("dots"),a.push(e),a}render(){const e=this._pages(),t=(this.page-1)*this.pageSize+1,a=Math.min(this.page*this.pageSize,this.totalItems);return l`
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
    `}};N.styles=tr;ae([i({type:Number})],N.prototype,"page",2);ae([i({type:Number,attribute:"total-pages"})],N.prototype,"totalPages",2);ae([i({type:Boolean,attribute:"show-info"})],N.prototype,"showInfo",2);ae([i({type:Number,attribute:"total-items"})],N.prototype,"totalItems",2);ae([i({type:Number,attribute:"page-size"})],N.prototype,"pageSize",2);N=ae([c("wu-pagination")],N);const or=d`
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
`;var sr=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,K=(e,t,a,o)=>{for(var r=o>1?void 0:o?ir(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&sr(t,a,r),r};let D=class extends u{constructor(){super(...arguments),this.columns=[],this.data=[],this.selectable=!1,this.sortKey="",this.sortDirection="asc",this.emptyMessage="No data available.",this._selected=new Set}_sort(e){this.sortKey===e?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortKey=e,this.sortDirection="asc"),this.dispatchEvent(new CustomEvent("wu-sort",{bubbles:!0,composed:!0,detail:{key:this.sortKey,direction:this.sortDirection}}))}_toggleRow(e){const t=new Set(this._selected);t.has(e)?t.delete(e):t.add(e),this._selected=t,this._emitSelect()}_toggleAll(e){this._selected=e?new Set(this.data.map(t=>String(t.id??""))):new Set,this._emitSelect()}_emitSelect(){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{selected:[...this._selected]}}))}_sortIcon(e){const t=this.sortKey===e,a=this.sortDirection;return l`
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
              `:w}
              ${this.columns.map(t=>l`
                <th
                  class=${["",t.sortable?"sortable":"",this.sortKey===t.key?"sorted":""].join(" ").trim()}
                  style=${t.width?`width:${t.width}`:""}
                  @click=${t.sortable?()=>this._sort(t.key):void 0}
                  aria-sort=${this.sortKey===t.key?this.sortDirection==="asc"?"ascending":"descending":"none"}
                >
                  <span class="th-inner">
                    ${t.label}
                    ${t.sortable?this._sortIcon(t.key):w}
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
                  `:w}
                  ${this.columns.map(r=>l`
                    <td>${t[r.key]??""}</td>
                  `)}
                </tr>
              `})}
          </tbody>
        </table>
      </div>
    `}};D.styles=or;K([i({type:Array})],D.prototype,"columns",2);K([i({type:Array})],D.prototype,"data",2);K([i({type:Boolean,attribute:"selectable"})],D.prototype,"selectable",2);K([i({attribute:"sort-key"})],D.prototype,"sortKey",2);K([i({attribute:"sort-direction"})],D.prototype,"sortDirection",2);K([i({attribute:"empty-message"})],D.prototype,"emptyMessage",2);K([h()],D.prototype,"_selected",2);D=K([c("wu-table")],D);const nr=d`
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
`;var lr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,A=(e,t,a,o)=>{for(var r=o>1?void 0:o?dr(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&lr(t,a,r),r};const ur=["Su","Mo","Tu","We","Th","Fr","Sa"],$e=["January","February","March","April","May","June","July","August","September","October","November","December"];function ze(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}let y=class extends u{constructor(){super(),this.value="",this.placeholder="Select date",this.min="",this.max="",this.open=!1,this.label="Date";const e=new Date;this._viewYear=e.getFullYear(),this._viewMonth=e.getMonth()}_toggle(){if(this.open=!this.open,this.open&&this.value){const e=new Date(this.value+"T00:00:00");this._viewYear=e.getFullYear(),this._viewMonth=e.getMonth()}}_prevMonth(){this._viewMonth===0?(this._viewYear--,this._viewMonth=11):this._viewMonth--}_nextMonth(){this._viewMonth===11?(this._viewYear++,this._viewMonth=0):this._viewMonth++}_select(e){this.value=e,this.open=!1,this.dispatchEvent(new CustomEvent("wu-date-change",{bubbles:!0,composed:!0,detail:{value:e}}))}_isDisabled(e){return!!(this.min&&e<this.min||this.max&&e>this.max)}_getDays(){const e=new Date(this._viewYear,this._viewMonth,1),t=new Date(this._viewYear,this._viewMonth+1,0),a=[];for(let r=0;r<e.getDay();r++){const s=new Date(this._viewYear,this._viewMonth,1-(e.getDay()-r));a.push({date:s,current:!1})}for(let r=1;r<=t.getDate();r++)a.push({date:new Date(this._viewYear,this._viewMonth,r),current:!0});const o=42-a.length;for(let r=1;r<=o;r++)a.push({date:new Date(this._viewYear,this._viewMonth+1,r),current:!1});return a}_onKeydown(e){e.key==="Escape"&&(this.open=!1)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){const e=ze(new Date),t=this._getDays(),a=this.value?new Date(this.value+"T00:00:00").toLocaleDateString():this.placeholder;return l`
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
          <span class="month-year">${$e[this._viewMonth]} ${this._viewYear}</span>
          <button class="nav-btn" type="button" aria-label="Next month" @click=${this._nextMonth}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="grid" role="grid" aria-label="${$e[this._viewMonth]} ${this._viewYear}">
          ${ur.map(o=>l`<div class="day-name" role="columnheader" aria-label=${o}>${o}</div>`)}
          ${t.map(({date:o,current:r})=>{const s=ze(o),n=this._isDisabled(s),p=s===this.value,I=s===e;return l`
              <button
                type="button"
                class=${["day",r?"":"other-month",I?"today":"",p?"selected":""].join(" ").trim()}
                role="gridcell"
                aria-label=${o.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}
                aria-selected=${p}
                aria-current=${I?"date":w}
                ?disabled=${n}
                @click=${()=>!n&&this._select(s)}
              >${o.getDate()}</button>
            `})}
        </div>
      </div>
    `}};y.styles=nr;A([i()],y.prototype,"value",2);A([i()],y.prototype,"placeholder",2);A([i()],y.prototype,"min",2);A([i()],y.prototype,"max",2);A([i({type:Boolean,reflect:!0})],y.prototype,"open",2);A([i()],y.prototype,"label",2);A([h()],y.prototype,"_viewYear",2);A([h()],y.prototype,"_viewMonth",2);y=A([c("wu-date-picker")],y);const cr=d`
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
`;var pr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,F=(e,t,a,o)=>{for(var r=o>1?void 0:o?hr(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&pr(t,a,r),r};function wr(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}let O=class extends u{constructor(){super(...arguments),this.accept="",this.multiple=!1,this.disabled=!1,this.hint="",this._files=[],this._dragOver=!1}_onInputChange(e){const t=e.target;t.files&&this._addFiles(t.files),t.value=""}_addFiles(e){const t=Array.from(e),a=this.multiple?t:t.slice(0,1);this._files=this.multiple?[...this._files,...a]:a,this.dispatchEvent(new CustomEvent("wu-file-select",{bubbles:!0,composed:!0,detail:{files:[...this._files]}}))}_remove(e){this._files=this._files.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("wu-file-remove",{bubbles:!0,composed:!0,detail:{file:e}}))}_onDragOver(e){e.preventDefault(),this._dragOver=!0}_onDragLeave(){this._dragOver=!1}_onDrop(e){var t;e.preventDefault(),this._dragOver=!1,(t=e.dataTransfer)!=null&&t.files&&this._addFiles(e.dataTransfer.files)}_onKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._input.click())}get files(){return this._files}_renderFile(e){return l`
      <li class="file-item">
        <span class="file-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </span>
        <span class="file-name">${e.name}</span>
        <span class="file-size">${wr(e.size)}</span>
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
    `}};O.styles=cr;F([i()],O.prototype,"accept",2);F([i({type:Boolean})],O.prototype,"multiple",2);F([i({type:Boolean,reflect:!0})],O.prototype,"disabled",2);F([i()],O.prototype,"hint",2);F([h()],O.prototype,"_files",2);F([h()],O.prototype,"_dragOver",2);F([me("input")],O.prototype,"_input",2);O=F([c("wu-file-upload")],O);const vr=d`
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
`,br=d`
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
`;var gr=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,_=(e,t,a,o)=>{for(var r=o>1?void 0:o?fr(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&gr(t,a,r),r};let L=class extends u{constructor(){super(...arguments),this.label="",this.description="",this.status="pending",this.index=0,this.disabled=!1}_renderIndicator(){return this.status==="complete"?l`
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
          ${this.description?l`<div class="description">${this.description}</div>`:w}
        </div>
      </div>
    `}};L.styles=br;_([i()],L.prototype,"label",2);_([i()],L.prototype,"description",2);_([i({reflect:!0})],L.prototype,"status",2);_([i({type:Number})],L.prototype,"index",2);_([i({type:Boolean,reflect:!0})],L.prototype,"disabled",2);L=_([c("wu-step")],L);let H=class extends u{constructor(){super(...arguments),this.activeStep=0,this.linear=!1,this.vertical=!1,this._steps=[]}_setup(){const e=this.shadowRoot.querySelector("slot");e&&(this._steps=e.assignedNodes({flatten:!0}).filter(t=>t instanceof L),this._updateSteps())}_updateSteps(){this._steps.forEach((e,t)=>{t<this.activeStep?e.status="complete":t===this.activeStep?e.status="active":e.status="pending",e.index=t})}firstUpdated(){this._setup()}next(){this.activeStep<this._steps.length-1&&(this.activeStep++,this._updateSteps(),this._emit())}prev(){this.activeStep>0&&(this.activeStep--,this._updateSteps(),this._emit())}_emit(){this.dispatchEvent(new CustomEvent("wu-step-change",{bubbles:!0,composed:!0,detail:{step:this.activeStep}}))}updated(e){e.has("activeStep")&&this._updateSteps()}render(){return l`
      <div class="stepper" role="list" aria-label="Progress steps">
        <slot @slotchange=${this._setup}></slot>
      </div>
    `}};H.styles=vr;_([i({type:Number,attribute:"active-step"})],H.prototype,"activeStep",2);_([i({type:Boolean})],H.prototype,"linear",2);_([i({type:Boolean,reflect:!0})],H.prototype,"vertical",2);_([h()],H.prototype,"_steps",2);H=_([c("wu-stepper")],H);const mr=d`
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
`;var yr=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,Y=(e,t,a,o)=>{for(var r=o>1?void 0:o?xr(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&yr(t,a,r),r};let E=class extends u{constructor(){super(...arguments),this.open=!1,this.items=[],this.placeholder="Search commands…",this.emptyMessage="No results found.",this._query="",this._selectedIndex=0}get _filtered(){if(!this._query.trim())return this.items;const e=this._query.toLowerCase();return this.items.filter(t=>{var a,o;return t.label.toLowerCase().includes(e)||((a=t.group)==null?void 0:a.toLowerCase().includes(e))||((o=t.keywords)==null?void 0:o.some(r=>r.toLowerCase().includes(e)))})}get _grouped(){const e=new Map;for(const t of this._filtered){const a=t.group??"";e.has(a)||e.set(a,[]),e.get(a).push(t)}return e}updated(e){e.has("open")&&this.open&&(this._query="",this._selectedIndex=0,requestAnimationFrame(()=>{var t;return(t=this._input)==null?void 0:t.focus()}))}_onKeydown(e){const t=this._filtered;if(e.key==="Escape"){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}));return}if(e.key==="ArrowDown")e.preventDefault(),this._selectedIndex=Math.min(this._selectedIndex+1,t.length-1);else if(e.key==="ArrowUp")e.preventDefault(),this._selectedIndex=Math.max(this._selectedIndex-1,0);else if(e.key==="Enter"){e.preventDefault();const a=t[this._selectedIndex];a&&this._select(a)}}_select(e){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{item:e}})),this.open=!1}_onBackdropClick(e){e.target.classList.contains("backdrop")&&(this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0})))}_flatIndex(e){return this._filtered.indexOf(e)}render(){const e=this._grouped,t=this._filtered,a=[];for(const[o,r]of e.entries()){o&&a.push({type:"group",label:o});for(const s of r)a.push({type:"item",item:s,idx:this._flatIndex(s)})}return l`
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
            ${t.length===0?l`<div class="empty">${this.emptyMessage}</div>`:w}
            ${a.map(o=>o.type==="group"?l`<div class="group-label">${o.label}</div>`:l`
                  <div
                    class="item"
                    role="option"
                    aria-selected=${this._selectedIndex===o.idx}
                    @click=${()=>this._select(o.item)}
                    @mouseenter=${()=>{this._selectedIndex=o.idx}}
                  >
                    ${o.item.icon?l`<span class="item-icon" aria-hidden="true">${o.item.icon}</span>`:w}
                    <span class="item-label">${o.item.label}</span>
                    ${o.item.shortcut?l`<kbd class="item-shortcut">${o.item.shortcut}</kbd>`:w}
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
    `}};E.styles=mr;Y([i({type:Boolean,reflect:!0})],E.prototype,"open",2);Y([i({type:Array})],E.prototype,"items",2);Y([i()],E.prototype,"placeholder",2);Y([i({attribute:"empty-message"})],E.prototype,"emptyMessage",2);Y([h()],E.prototype,"_query",2);Y([h()],E.prototype,"_selectedIndex",2);Y([me(".search-input")],E.prototype,"_input",2);E=Y([c("wu-command")],E);const kr=d`
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
`;var _r=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,$=(e,t,a,o)=>{for(var r=o>1?void 0:o?$r(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&_r(t,a,r),r};let f=class extends u{constructor(){super(...arguments),this.columns=[],this.data=[],this.totalRows=0,this.page=1,this.pageSize=10,this.showToolbar=!0,this.emptyMessage="No data to display.",this._sortKey="",this._sortDir="asc",this._filter=""}get _filteredData(){if(!this._filter.trim())return this.data;const e=this._filter.toLowerCase();return this.data.filter(t=>this.columns.some(a=>String(t[a.key]??"").toLowerCase().includes(e)))}get _sortedData(){return this._sortKey?[...this._filteredData].sort((e,t)=>{const a=String(e[this._sortKey]??""),o=String(t[this._sortKey]??""),r=a.localeCompare(o);return this._sortDir==="asc"?r:-r}):this._filteredData}get _pageData(){if(this.totalRows>this.data.length)return this._sortedData;const e=(this.page-1)*this.pageSize;return this._sortedData.slice(e,e+this.pageSize)}get _totalPages(){const e=this.totalRows||this._filteredData.length;return Math.max(1,Math.ceil(e/this.pageSize))}_sort(e,t){t&&(this._sortKey===e?this._sortDir=this._sortDir==="asc"?"desc":"asc":(this._sortKey=e,this._sortDir="asc"),this.dispatchEvent(new CustomEvent("wu-sort-change",{bubbles:!0,composed:!0,detail:{key:this._sortKey,direction:this._sortDir}})))}_onFilter(e){this._filter=e.target.value,this.page=1,this.dispatchEvent(new CustomEvent("wu-filter-change",{bubbles:!0,composed:!0,detail:{query:this._filter}}))}_goPage(e){e<1||e>this._totalPages||(this.page=e,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:this.page,pageSize:this.pageSize}})))}_onPageSize(e){this.pageSize=Number(e.target.value),this.page=1,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:this.page,pageSize:this.pageSize}}))}_pageButtons(){const e=this._totalPages,t=this.page,a=[];if(e<=7)for(let o=1;o<=e;o++)a.push(o);else{a.push(1),t>3&&a.push("dots");for(let o=Math.max(2,t-1);o<=Math.min(e-1,t+1);o++)a.push(o);t<e-2&&a.push("dots"),a.push(e)}return a}render(){const e=this._pageData,t=this.totalRows||this._filteredData.length;return l`
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
        `:w}

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
              ${a.sortable&&this._sortKey===a.key?l`<span class="sort-indicator">${this._sortDir==="asc"?"▲":"▼"}</span>`:w}
            </div>
          `)}
        </div>

        <div class="body" role="rowgroup">
          ${e.length===0?l`<div class="empty">${this.emptyMessage}</div>`:w}
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
              ${this._pageButtons().map(a=>a==="dots"?l`<span class="page-btn" aria-hidden="true" style="border:none;background:none;cursor:default">…</span>`:l`<button class="page-btn ${this.page===a?"active":""}" aria-label="Page ${a}" aria-current=${this.page===a?"page":w} @click=${()=>this._goPage(a)}>${a}</button>`)}
              <button class="page-btn" ?disabled=${this.page===this._totalPages} @click=${()=>this._goPage(this.page+1)} aria-label="Next page">›</button>
            </div>
          </div>
        `:w}
      </div>
    `}};f.styles=kr;$([i({type:Array})],f.prototype,"columns",2);$([i({type:Array})],f.prototype,"data",2);$([i({type:Number,attribute:"total-rows"})],f.prototype,"totalRows",2);$([i({type:Number})],f.prototype,"page",2);$([i({type:Number,attribute:"page-size"})],f.prototype,"pageSize",2);$([i({type:Boolean,attribute:"show-toolbar"})],f.prototype,"showToolbar",2);$([i({attribute:"empty-message"})],f.prototype,"emptyMessage",2);$([h()],f.prototype,"_sortKey",2);$([h()],f.prototype,"_sortDir",2);$([h()],f.prototype,"_filter",2);f=$([c("wu-data-grid")],f);
