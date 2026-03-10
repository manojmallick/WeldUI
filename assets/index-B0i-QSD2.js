import{f as q,u as D,A as M,i as y,a as k,b as u}from"./lit-element-CTfEKIed.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=e=>(r,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,r)}):customElements.define(e,r)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:q},I=(e=S,r,o)=>{const{kind:s,metadata:t}=o;let i=globalThis.litPropertyMetadata.get(t);if(i===void 0&&globalThis.litPropertyMetadata.set(t,i=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(o.name,e),s==="accessor"){const{name:n}=o;return{set(b){const P=r.get.call(this);r.set.call(this,b),this.requestUpdate(n,P,e,!0,b)},init(b){return b!==void 0&&this.C(n,void 0,e,b),b}}}if(s==="setter"){const{name:n}=o;return function(b){const P=this[n];r.call(this,b),this.requestUpdate(n,P,e,!0,b)}}throw Error("Unsupported decorator location: "+s)};function a(e){return(r,o)=>typeof o=="object"?I(e,r,o):((s,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,s),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(e){return a({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=e=>e??M,A=y`
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
`;var L=Object.defineProperty,T=Object.getOwnPropertyDescriptor,z=(e,r,o,s)=>{for(var t=s>1?void 0:s?T(r,o):r,i=e.length-1,n;i>=0;i--)(n=e[i])&&(t=(s?n(r,o,t):n(t))||t);return s&&t&&L(r,o,t),t};let g=class extends k{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this.ariaLabel=null}_handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}render(){return u`
      <button
        part="base"
        type=${this.type}
        ?disabled=${this.disabled||this.loading}
        aria-disabled=${this.disabled||this.loading?"true":"false"}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${v(this.ariaLabel??void 0)}
        @click=${this._handleClick}
      >
        ${this.loading?u`<span class="spinner" aria-hidden="true"></span>`:""}
        <slot name="prefix"></slot>
        <span part="label" class="label"><slot></slot></span>
        <slot name="suffix"></slot>
      </button>
    `}};g.styles=A;z([a({reflect:!0})],g.prototype,"variant",2);z([a({reflect:!0})],g.prototype,"size",2);z([a({type:Boolean,reflect:!0})],g.prototype,"disabled",2);z([a({type:Boolean,reflect:!0})],g.prototype,"loading",2);z([a()],g.prototype,"type",2);z([a({attribute:"aria-label"})],g.prototype,"ariaLabel",2);g=z([$("wu-button")],g);const U=y`
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
`;var N=Object.defineProperty,R=Object.getOwnPropertyDescriptor,B=(e,r,o,s)=>{for(var t=s>1?void 0:s?R(r,o):r,i=e.length-1,n;i>=0;i--)(n=e[i])&&(t=(s?n(r,o,t):n(t))||t);return s&&t&&N(r,o,t),t};let E=class extends k{constructor(){super(...arguments),this.variant="default"}render(){return u`<span part="base" class="badge"><slot></slot></span>`}};E.styles=U;B([a({reflect:!0})],E.prototype,"variant",2);E=B([$("wu-badge")],E);const V=y`
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
`;var X=Object.defineProperty,F=Object.getOwnPropertyDescriptor,_=(e,r,o,s)=>{for(var t=s>1?void 0:s?F(r,o):r,i=e.length-1,n;i>=0;i--)(n=e[i])&&(t=(s?n(r,o,t):n(t))||t);return s&&t&&X(r,o,t),t};let m=class extends k{constructor(){super(...arguments),this.size="md",this._imgError=!1}_handleImgError(){this._imgError=!0}render(){const e=this.src&&!this._imgError;return u`
      <div part="base" class="avatar" role="img" aria-label=${v(this.alt??this.initials)}>
        ${e?u`<img src=${this.src} alt=${v(this.alt)} @error=${this._handleImgError} />`:u`${this.initials??""}`}
      </div>
    `}};m.styles=V;_([a()],m.prototype,"src",2);_([a()],m.prototype,"alt",2);_([a()],m.prototype,"initials",2);_([a({reflect:!0})],m.prototype,"size",2);_([j()],m.prototype,"_imgError",2);m=_([$("wu-avatar")],m);const G=y`
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
`;var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,h=(e,r,o,s)=>{for(var t=s>1?void 0:s?J(r,o):r,i=e.length-1,n;i>=0;i--)(n=e[i])&&(t=(s?n(r,o,t):n(t))||t);return s&&t&&H(r,o,t),t};let d=class extends k{constructor(){super(...arguments),this.type="text",this.value="",this.disabled=!1,this.required=!1,this.size="md"}_handleInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const e="input-"+(this.name??Math.random().toString(36).slice(2));return u`
      <div part="base" class="wrapper">
        ${this.label?u`<label for=${e}>${this.label}${this.required?u` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="input-row">
          <input
            part="input"
            id=${e}
            type=${this.type}
            .value=${this.value}
            placeholder=${v(this.placeholder)}
            name=${v(this.name)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-invalid=${this.error?"true":"false"}
            @input=${this._handleInput}
            @blur=${this._handleBlur}
          />
        </div>
        ${this.error?u`<span class="error" role="alert">${this.error}</span>`:""}
        ${this.hint&&!this.error?u`<span class="hint">${this.hint}</span>`:""}
      </div>
    `}};d.styles=G;h([a()],d.prototype,"type",2);h([a()],d.prototype,"value",2);h([a()],d.prototype,"placeholder",2);h([a()],d.prototype,"label",2);h([a()],d.prototype,"hint",2);h([a()],d.prototype,"error",2);h([a({type:Boolean,reflect:!0})],d.prototype,"disabled",2);h([a({type:Boolean})],d.prototype,"required",2);h([a({reflect:!0})],d.prototype,"size",2);h([a()],d.prototype,"name",2);d=h([$("wu-input")],d);const K=y`
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
`;var Q=Object.defineProperty,W=Object.getOwnPropertyDescriptor,p=(e,r,o,s)=>{for(var t=s>1?void 0:s?W(r,o):r,i=e.length-1,n;i>=0;i--)(n=e[i])&&(t=(s?n(r,o,t):n(t))||t);return s&&t&&Q(r,o,t),t};let l=class extends k{constructor(){super(...arguments),this.value="",this.disabled=!1,this.required=!1,this.rows=4,this._charCount=0}connectedCallback(){super.connectedCallback(),this._charCount=this.value.length}_handleInput(e){this.value=e.target.value,this._charCount=this.value.length,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const e="textarea-"+(this.name??Math.random().toString(36).slice(2));return u`
      <div part="base" class="wrapper">
        ${this.label?u`<label for=${e}>${this.label}${this.required?u` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <textarea
          part="textarea"
          id=${e}
          rows=${this.rows}
          name=${v(this.name)}
          placeholder=${v(this.placeholder)}
          maxlength=${v(this.maxlength)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${this.error?"true":"false"}
          .value=${this.value}
          @input=${this._handleInput}
          @blur=${this._handleBlur}
        ></textarea>
        ${this.maxlength?u`<span class="char-count">${this._charCount} / ${this.maxlength}</span>`:""}
        ${this.error?u`<span class="error" role="alert">${this.error}</span>`:""}
        ${this.hint&&!this.error?u`<span class="hint">${this.hint}</span>`:""}
      </div>
    `}};l.styles=K;p([a()],l.prototype,"value",2);p([a()],l.prototype,"placeholder",2);p([a()],l.prototype,"label",2);p([a()],l.prototype,"hint",2);p([a()],l.prototype,"error",2);p([a({type:Boolean,reflect:!0})],l.prototype,"disabled",2);p([a({type:Boolean})],l.prototype,"required",2);p([a({type:Number})],l.prototype,"maxlength",2);p([a({type:Number})],l.prototype,"rows",2);p([a()],l.prototype,"name",2);p([j()],l.prototype,"_charCount",2);l=p([$("wu-textarea")],l);const Y=y`
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
`;var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,w=(e,r,o,s)=>{for(var t=s>1?void 0:s?ee(r,o):r,i=e.length-1,n;i>=0;i--)(n=e[i])&&(t=(s?n(r,o,t):n(t))||t);return s&&t&&Z(r,o,t),t};let c=class extends k{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.required=!1,this.size="md"}_handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){const e="select-"+(this.name??Math.random().toString(36).slice(2));return u`
      <div part="base" class="wrapper">
        ${this.label?u`<label for=${e}>${this.label}${this.required?u` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="select-row">
          <select
            part="select"
            id=${e}
            name=${v(this.name)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-invalid=${this.error?"true":"false"}
            @change=${this._handleChange}
          >
            ${this.placeholder?u`<option value="" ?selected=${!this.value} disabled>${this.placeholder}</option>`:""}
            ${this.options.map(r=>u`
              <option value=${r.value} ?selected=${this.value===r.value} ?disabled=${r.disabled??!1}>
                ${r.label}
              </option>
            `)}
          </select>
          <svg class="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M4 6l4 4 4-4"/>
          </svg>
        </div>
        ${this.error?u`<span class="error" role="alert">${this.error}</span>`:""}
        ${this.hint&&!this.error?u`<span class="hint">${this.hint}</span>`:""}
      </div>
    `}};c.styles=Y;w([a()],c.prototype,"value",2);w([a({type:Array})],c.prototype,"options",2);w([a()],c.prototype,"placeholder",2);w([a()],c.prototype,"label",2);w([a()],c.prototype,"hint",2);w([a()],c.prototype,"error",2);w([a({type:Boolean,reflect:!0})],c.prototype,"disabled",2);w([a({type:Boolean})],c.prototype,"required",2);w([a({reflect:!0})],c.prototype,"size",2);w([a()],c.prototype,"name",2);c=w([$("wu-select")],c);const te=y`
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
`;var re=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,C=(e,r,o,s)=>{for(var t=s>1?void 0:s?ae(r,o):r,i=e.length-1,n;i>=0;i--)(n=e[i])&&(t=(s?n(r,o,t):n(t))||t);return s&&t&&re(r,o,t),t};let f=class extends k{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on"}_handleChange(e){const r=e.target;this.checked=r.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.value}}))}updated(e){var r;if(e.has("indeterminate")){const o=(r=this.shadowRoot)==null?void 0:r.querySelector("input");o&&(o.indeterminate=this.indeterminate)}}render(){const e="checkbox-"+(this.name??Math.random().toString(36).slice(2));return u`
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
        ${this.label?u`<label part="label" for=${e}>${this.label}</label>`:""}
      </div>
    `}};f.styles=te;C([a({type:Boolean,reflect:!0})],f.prototype,"checked",2);C([a({type:Boolean,reflect:!0})],f.prototype,"indeterminate",2);C([a({type:Boolean,reflect:!0})],f.prototype,"disabled",2);C([a()],f.prototype,"label",2);C([a()],f.prototype,"name",2);C([a()],f.prototype,"value",2);f=C([$("wu-checkbox")],f);const oe=y`
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
`;var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,O=(e,r,o,s)=>{for(var t=s>1?void 0:s?ie(r,o):r,i=e.length-1,n;i>=0;i--)(n=e[i])&&(t=(s?n(r,o,t):n(t))||t);return s&&t&&se(r,o,t),t};let x=class extends k{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.labelPosition="end",this.size="md"}_handleChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked}}))}render(){const e="toggle-"+(this.name??Math.random().toString(36).slice(2)),r=this.label?u`<label part="label" for=${e}>${this.label}</label>`:"";return u`
      <div part="base" class="wrapper">
        ${this.labelPosition==="start"?r:""}
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
        ${this.labelPosition==="end"?r:""}
      </div>
    `}};x.styles=oe;O([a({type:Boolean,reflect:!0})],x.prototype,"checked",2);O([a({type:Boolean,reflect:!0})],x.prototype,"disabled",2);O([a()],x.prototype,"label",2);O([a({attribute:"label-position"})],x.prototype,"labelPosition",2);O([a({reflect:!0})],x.prototype,"size",2);O([a()],x.prototype,"name",2);x=O([$("wu-toggle")],x);
