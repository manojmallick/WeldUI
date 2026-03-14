import{f as He,u as Ue,A as w,E as Xe,i as c,a as u,b as l}from"./lit-element-9a6qN07w.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=e=>(t,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve={attribute:!0,type:String,converter:Ue,reflect:!1,hasChanged:He},We=(e=Ve,t,o)=>{const{kind:a,metadata:r}=o;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),a==="accessor"){const{name:i}=o;return{set(d){const x=t.get.call(this);t.set.call(this,d),this.requestUpdate(i,x,e,!0,d)},init(d){return d!==void 0&&this.C(i,void 0,e,d),d}}}if(a==="setter"){const{name:i}=o;return function(d){const x=this[i];t.call(this,d),this.requestUpdate(i,x,e,!0,d)}}throw Error("Unsupported decorator location: "+a)};function n(e){return(t,o)=>typeof o=="object"?We(e,t,o):((a,r,s)=>{const i=r.hasOwnProperty(s);return r.constructor.createProperty(s,a),i?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(e){return n({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Be(e,t){return(o,a,r)=>{const s=i=>{var d;return((d=i.renderRoot)==null?void 0:d.querySelector(e))??null};return Ge(o,a,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=e=>e??w;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je={ATTRIBUTE:1},Ze=e=>(...t)=>({_$litDirective$:e,values:t});let Qe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,a){this._$Ct=t,this._$AM=o,this._$Ci=a}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe="important",et=" !"+Fe,tt=Ze(class extends Qe{constructor(e){var t;if(super(e),e.type!==Je.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const a=e[o];return a==null?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(e,[t]){const{style:o}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const a of this.ft)t[a]==null&&(this.ft.delete(a),a.includes("-")?o.removeProperty(a):o[a]=null);for(const a in t){const r=t[a];if(r!=null){this.ft.add(a);const s=typeof r=="string"&&r.endsWith(et);a.includes("-")||s?o.setProperty(a,s?r.slice(0,-11):r,s?Fe:""):o[a]=r}}return Xe}}),rt=c`
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
`;var at=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,W=(e,t,o,a)=>{for(var r=a>1?void 0:a?ot(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&at(t,o,r),r};let B=class extends u{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this.ariaLabel=null}_handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}render(){return l`
      <button
        part="base"
        type=${this.type}
        ?disabled=${this.disabled||this.loading}
        aria-disabled=${this.disabled||this.loading?"true":"false"}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${k(this.ariaLabel??void 0)}
        @click=${this._handleClick}
      >
        ${this.loading?l`<span class="spinner" aria-hidden="true"></span>`:""}
        <slot name="prefix"></slot>
        <span part="label" class="label"><slot></slot></span>
        <slot name="suffix"></slot>
      </button>
    `}};B.styles=rt;W([n({reflect:!0})],B.prototype,"variant",2);W([n({reflect:!0})],B.prototype,"size",2);W([n({type:Boolean,reflect:!0})],B.prototype,"disabled",2);W([n({type:Boolean,reflect:!0})],B.prototype,"loading",2);W([n()],B.prototype,"type",2);W([n({attribute:"aria-label"})],B.prototype,"ariaLabel",2);B=W([p("wu-button")],B);const st=c`
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
`;var it=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,Re=(e,t,o,a)=>{for(var r=a>1?void 0:a?nt(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&it(t,o,r),r};let $e=class extends u{constructor(){super(...arguments),this.variant="default"}render(){return l`<span part="base" class="badge"><slot></slot></span>`}};$e.styles=st;Re([n({reflect:!0})],$e.prototype,"variant",2);$e=Re([p("wu-badge")],$e);const lt=c`
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
`;var dt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,ce=(e,t,o,a)=>{for(var r=a>1?void 0:a?ct(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&dt(t,o,r),r};let q=class extends u{constructor(){super(...arguments),this.size="md",this._imgError=!1}_handleImgError(){this._imgError=!0}render(){const e=this.src&&!this._imgError;return l`
      <div part="base" class="avatar" role="img" aria-label=${k(this.alt??this.initials)}>
        ${e?l`<img src=${this.src} alt=${k(this.alt)} @error=${this._handleImgError} />`:l`${this.initials??""}`}
      </div>
    `}};q.styles=lt;ce([n()],q.prototype,"src",2);ce([n()],q.prototype,"alt",2);ce([n()],q.prototype,"initials",2);ce([n({reflect:!0})],q.prototype,"size",2);ce([h()],q.prototype,"_imgError",2);q=ce([p("wu-avatar")],q);const ut=c`
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
`;var pt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,z=(e,t,o,a)=>{for(var r=a>1?void 0:a?ht(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&pt(t,o,r),r};let g=class extends u{constructor(){super(...arguments),this.type="text",this.value="",this.disabled=!1,this.required=!1,this.size="md"}_handleInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const e="input-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="input-row">
          <input
            part="input"
            id=${e}
            type=${this.type}
            .value=${this.value}
            placeholder=${k(this.placeholder)}
            name=${k(this.name)}
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
    `}};g.styles=ut;z([n()],g.prototype,"type",2);z([n()],g.prototype,"value",2);z([n()],g.prototype,"placeholder",2);z([n()],g.prototype,"label",2);z([n()],g.prototype,"hint",2);z([n()],g.prototype,"error",2);z([n({type:Boolean,reflect:!0})],g.prototype,"disabled",2);z([n({type:Boolean})],g.prototype,"required",2);z([n({reflect:!0})],g.prototype,"size",2);z([n()],g.prototype,"name",2);g=z([p("wu-input")],g);const wt=c`
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
`;var vt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,_=(e,t,o,a)=>{for(var r=a>1?void 0:a?bt(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&vt(t,o,r),r};let b=class extends u{constructor(){super(...arguments),this.value="",this.disabled=!1,this.required=!1,this.rows=4,this._charCount=0}connectedCallback(){super.connectedCallback(),this._charCount=this.value.length}_handleInput(e){this.value=e.target.value,this._charCount=this.value.length,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const e="textarea-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <textarea
          part="textarea"
          id=${e}
          rows=${this.rows}
          name=${k(this.name)}
          placeholder=${k(this.placeholder)}
          maxlength=${k(this.maxlength)}
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
    `}};b.styles=wt;_([n()],b.prototype,"value",2);_([n()],b.prototype,"placeholder",2);_([n()],b.prototype,"label",2);_([n()],b.prototype,"hint",2);_([n()],b.prototype,"error",2);_([n({type:Boolean,reflect:!0})],b.prototype,"disabled",2);_([n({type:Boolean})],b.prototype,"required",2);_([n({type:Number})],b.prototype,"maxlength",2);_([n({type:Number})],b.prototype,"rows",2);_([n()],b.prototype,"name",2);_([h()],b.prototype,"_charCount",2);b=_([p("wu-textarea")],b);const gt=c`
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
`;var ft=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,C=(e,t,o,a)=>{for(var r=a>1?void 0:a?mt(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&ft(t,o,r),r};let f=class extends u{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.required=!1,this.size="md"}_handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){const e="select-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="select-row">
          <select
            part="select"
            id=${e}
            name=${k(this.name)}
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
    `}};f.styles=gt;C([n()],f.prototype,"value",2);C([n({type:Array})],f.prototype,"options",2);C([n()],f.prototype,"placeholder",2);C([n()],f.prototype,"label",2);C([n()],f.prototype,"hint",2);C([n()],f.prototype,"error",2);C([n({type:Boolean,reflect:!0})],f.prototype,"disabled",2);C([n({type:Boolean})],f.prototype,"required",2);C([n({reflect:!0})],f.prototype,"size",2);C([n()],f.prototype,"name",2);f=C([p("wu-select")],f);const yt=c`
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
`;var xt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,G=(e,t,o,a)=>{for(var r=a>1?void 0:a?kt(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&xt(t,o,r),r};let T=class extends u{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on"}_handleChange(e){const t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.value}}))}updated(e){var t;if(e.has("indeterminate")){const o=(t=this.shadowRoot)==null?void 0:t.querySelector("input");o&&(o.indeterminate=this.indeterminate)}}render(){const e="checkbox-"+(this.name??Math.random().toString(36).slice(2));return l`
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
    `}};T.styles=yt;G([n({type:Boolean,reflect:!0})],T.prototype,"checked",2);G([n({type:Boolean,reflect:!0})],T.prototype,"indeterminate",2);G([n({type:Boolean,reflect:!0})],T.prototype,"disabled",2);G([n()],T.prototype,"label",2);G([n()],T.prototype,"name",2);G([n()],T.prototype,"value",2);T=G([p("wu-checkbox")],T);const _t=c`
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
`;var $t=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,J=(e,t,o,a)=>{for(var r=a>1?void 0:a?zt(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&$t(t,o,r),r};let A=class extends u{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.labelPosition="end",this.size="md"}_handleChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked}}))}render(){const e="toggle-"+(this.name??Math.random().toString(36).slice(2)),t=this.label?l`<label part="label" for=${e}>${this.label}</label>`:"";return l`
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
    `}};A.styles=_t;J([n({type:Boolean,reflect:!0})],A.prototype,"checked",2);J([n({type:Boolean,reflect:!0})],A.prototype,"disabled",2);J([n()],A.prototype,"label",2);J([n({attribute:"label-position"})],A.prototype,"labelPosition",2);J([n({reflect:!0})],A.prototype,"size",2);J([n()],A.prototype,"name",2);A=J([p("wu-toggle")],A);const Ct=c`
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
`;var Dt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,Ee=(e,t,o,a)=>{for(var r=a>1?void 0:a?Et(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Dt(t,o,r),r};let te=class extends u{constructor(){super(...arguments),this.interactive=!1,this._hasHeader=!1,this._hasFooter=!1}_handleClick(e){this.interactive&&this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}_onHeaderSlotChange(e){const t=e.target;this._hasHeader=t.assignedNodes({flatten:!0}).length>0}_onFooterSlotChange(e){const t=e.target;this._hasFooter=t.assignedNodes({flatten:!0}).length>0}render(){return l`
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
    `}};te.styles=Ct;Ee([n({type:Boolean,reflect:!0})],te.prototype,"interactive",2);Ee([h()],te.prototype,"_hasHeader",2);Ee([h()],te.prototype,"_hasFooter",2);te=Ee([p("wu-card")],te);const Ot=c`
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
`;var Pt=Object.defineProperty,St=Object.getOwnPropertyDescriptor,Z=(e,t,o,a)=>{for(var r=a>1?void 0:a?St(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Pt(t,o,r),r};let L=class extends u{constructor(){super(...arguments),this.open=!1,this.label="",this.closeOnBackdrop=!0,this.hideClose=!1,this._hasFooter=!1,this._previouslyFocused=null}updated(e){e.has("open")&&(this.open?this._openDialog():this._closeDialog("api"))}_openDialog(){this._dialog&&(this._previouslyFocused=document.activeElement,this._dialog.showModal(),document.body.style.overflow="hidden",this._dialog.focus(),this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0})))}_closeDialog(e){var t,o;(t=this._dialog)!=null&&t.open&&(this._dialog.close(),document.body.style.overflow="",(o=this._previouslyFocused)==null||o.focus(),this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0,detail:{reason:e}})))}_onBackdropClick(e){this.closeOnBackdrop&&e.target===this._dialog&&this._closeDialog("backdrop")}_onKeydown(e){e.key==="Escape"&&(e.preventDefault(),this._closeDialog("escape")),e.key==="Tab"&&this._trapFocus(e)}_trapFocus(e){const t=Array.from(this._dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(r=>!r.hasAttribute("disabled")),o=t[0],a=t[t.length-1];o&&(e.shiftKey&&document.activeElement===o?(e.preventDefault(),a.focus()):!e.shiftKey&&document.activeElement===a&&(e.preventDefault(),o.focus()))}_onFooterSlotChange(e){const t=e.target;this._hasFooter=t.assignedNodes({flatten:!0}).length>0}render(){return l`
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
    `}};L.styles=Ot;Z([n({type:Boolean,reflect:!0})],L.prototype,"open",2);Z([n()],L.prototype,"label",2);Z([n({type:Boolean,attribute:"close-on-backdrop"})],L.prototype,"closeOnBackdrop",2);Z([n({type:Boolean,attribute:"hide-close"})],L.prototype,"hideClose",2);Z([h()],L.prototype,"_hasFooter",2);Z([Be("dialog")],L.prototype,"_dialog",2);L=Z([p("wu-modal")],L);const jt=c`
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
`;var Mt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Te=(e,t,o,a)=>{for(var r=a>1?void 0:a?Bt(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Mt(t,o,r),r};const Tt={info:"ℹ",success:"✓",warning:"⚠",danger:"✕",neutral:"•"};let he=class extends u{constructor(){super(...arguments),this.variant="info",this.dismissible=!1}_handleDismiss(){this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0})),this.remove()}render(){return l`
      <div part="base" class="alert" role="alert" aria-live="polite">
        <span part="icon" class="icon" aria-hidden="true">
          <slot name="icon">${Tt[this.variant]}</slot>
        </span>
        <div part="content" class="content">
          <slot name="title"></slot>
          <slot></slot>
        </div>
        ${this.dismissible?l`
          <button class="dismiss-btn" aria-label="Dismiss" @click=${this._handleDismiss}>✕</button>
        `:""}
      </div>
    `}};he.styles=jt;Te([n({reflect:!0})],he.prototype,"variant",2);Te([n({type:Boolean})],he.prototype,"dismissible",2);he=Te([p("wu-alert")],he);const At=c`
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
`;var Lt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,Ae=(e,t,o,a)=>{for(var r=a>1?void 0:a?It(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Lt(t,o,r),r};let we=class extends u{constructor(){super(...arguments),this.size="md",this.label="Loading…"}render(){return l`
      <span role="status" aria-label=${this.label}>
        <span class="spinner" aria-hidden="true"></span>
        <span class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">${this.label}</span>
      </span>
    `}};we.styles=At;Ae([n({reflect:!0})],we.prototype,"size",2);Ae([n()],we.prototype,"label",2);we=Ae([p("wu-spinner")],we);const Kt=c`
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
`;var Nt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,R=(e,t,o,a)=>{for(var r=a>1?void 0:a?qt(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Nt(t,o,r),r};let O=class extends u{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.indeterminate=!1,this.showLabel=!1,this.size="md",this.label=""}get _pct(){if(this.indeterminate)return 0;const e=Math.min(Math.max(this.value,this.min),this.max);return Math.round((e-this.min)/(this.max-this.min)*100)}render(){return l`
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
    `}};O.styles=Kt;R([n({type:Number})],O.prototype,"value",2);R([n({type:Number})],O.prototype,"min",2);R([n({type:Number})],O.prototype,"max",2);R([n({type:Boolean,reflect:!0})],O.prototype,"indeterminate",2);R([n({type:Boolean})],O.prototype,"showLabel",2);R([n({reflect:!0})],O.prototype,"size",2);R([n()],O.prototype,"label",2);O=R([p("wu-progress")],O);const Ft=c`
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
`;var Rt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Oe=(e,t,o,a)=>{for(var r=a>1?void 0:a?Yt(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Rt(t,o,r),r};let re=class extends u{constructor(){super(...arguments),this.variant="text",this.width="100%",this.height=""}render(){const e={width:this.width};return this.height&&(e.height=this.height),l`
      <div
        class="skeleton"
        style=${tt(e)}
        role="status"
        aria-label="Loading…"
        aria-busy="true"
      ></div>
    `}};re.styles=Ft;Oe([n({reflect:!0})],re.prototype,"variant",2);Oe([n()],re.prototype,"width",2);Oe([n()],re.prototype,"height",2);re=Oe([p("wu-skeleton")],re);const Ht=c`
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
`;var Ut=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Le=(e,t,o,a)=>{for(var r=a>1?void 0:a?Xt(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Ut(t,o,r),r};let ve=class extends u{constructor(){super(...arguments),this.vertical=!1,this._hasLabel=!1}_onSlotChange(e){const t=e.target;this._hasLabel=t.assignedNodes({flatten:!0}).some(o=>o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&o.textContent.trim())}render(){return l`
      <div class="line" role="separator" aria-orientation=${this.vertical?"vertical":"horizontal"}></div>
      ${this._hasLabel?l`<span class="label"><slot @slotchange=${this._onSlotChange}></slot></span>`:l`<slot @slotchange=${this._onSlotChange} style="display:none"></slot>`}
      ${this._hasLabel?l`<div class="line"></div>`:""}
    `}};ve.styles=Ht;Le([n({type:Boolean,reflect:!0})],ve.prototype,"vertical",2);Le([h()],ve.prototype,"_hasLabel",2);ve=Le([p("wu-divider")],ve);const Vt=c`
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
`;var Wt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,ke=(e,t,o,a)=>{for(var r=a>1?void 0:a?Gt(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Wt(t,o,r),r};let X=class extends u{constructor(){super(...arguments),this.content="",this.placement="top",this.delay=300,this._visible=!1,this._showTimer=null}_show(){this._showTimer=setTimeout(()=>{this._visible=!0},this.delay)}_hide(){this._showTimer&&(clearTimeout(this._showTimer),this._showTimer=null),this._visible=!1}disconnectedCallback(){super.disconnectedCallback(),this._hide()}render(){const e="tooltip-content";return l`
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
    `}};X.styles=Vt;ke([n()],X.prototype,"content",2);ke([n({reflect:!0})],X.prototype,"placement",2);ke([n({type:Number})],X.prototype,"delay",2);ke([h()],X.prototype,"_visible",2);X=ke([p("wu-tooltip")],X);const Jt=c`
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
`;var Zt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,Pe=(e,t,o,a)=>{for(var r=a>1?void 0:a?Qt(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Zt(t,o,r),r};let ae=class extends u{constructor(){super(...arguments),this.open=!1,this.placement="bottom",this._isOpen=!1,this._onDocClick=e=>{this.contains(e.target)||(this._isOpen=!1,this.open=!1)}}updated(e){e.has("open")&&(this._isOpen=this.open)}_toggle(){this._isOpen=!this._isOpen,this.open=this._isOpen,this.dispatchEvent(new CustomEvent(this._isOpen?"wu-open":"wu-close",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDocClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDocClick)}render(){return l`
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
    `}};ae.styles=Jt;Pe([n({type:Boolean,reflect:!0})],ae.prototype,"open",2);Pe([n({reflect:!0})],ae.prototype,"placement",2);Pe([h()],ae.prototype,"_isOpen",2);ae=Pe([p("wu-popover")],ae);const er=c`
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
`,tr=c`
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
`;var rr=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,ue=(e,t,o,a)=>{for(var r=a>1?void 0:a?ar(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&rr(t,o,r),r};const or={info:"ℹ",success:"✓",warning:"⚠",danger:"✕",default:"•"};let oe=class extends u{constructor(){super(...arguments),this.variant="default",this.heading="",this.duration=5e3}connectedCallback(){super.connectedCallback(),this.duration>0&&setTimeout(()=>this._dismiss("auto"),this.duration)}_dismiss(e){this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0,detail:{reason:e}})),this.remove()}render(){return l`
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <span class="icon" aria-hidden="true">${or[this.variant]}</span>
        <div class="content">
          ${this.heading?l`<div class="title">${this.heading}</div>`:""}
          <slot></slot>
          <slot name="action"></slot>
        </div>
        <button class="close-btn" aria-label="Dismiss notification" @click=${()=>this._dismiss("button")}>✕</button>
      </div>
    `}};oe.styles=er;ue([n({reflect:!0})],oe.prototype,"variant",2);ue([n()],oe.prototype,"heading",2);ue([n({type:Number})],oe.prototype,"duration",2);oe=ue([p("wu-toast")],oe);let ze=class extends u{constructor(){super(...arguments),this.position="top-right"}toast(e){const t=Object.assign(document.createElement("wu-toast"),{heading:e.heading??"",variant:e.variant??"default",duration:e.duration??5e3});return e.message&&(t.textContent=e.message),this.shadowRoot.querySelector("slot").parentElement.appendChild(t),t}render(){return l`<slot></slot>`}};ze.styles=tr;ue([n({reflect:!0})],ze.prototype,"position",2);ze=ue([p("wu-toast-provider")],ze);const sr=c`
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
`,ir=c`
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
`,nr=c`
  :host {
    display: none;
  }

  :host([active]) {
    display: block;
  }
`;var lr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,M=(e,t,o,a)=>{for(var r=a>1?void 0:a?dr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&lr(t,o,r),r};let se=class extends u{constructor(){super(...arguments),this.panel="",this.active=!1,this.disabled=!1}_handleClick(){this.disabled||this.dispatchEvent(new CustomEvent("wu-tab-click",{bubbles:!0,composed:!0,detail:{panel:this.panel}}))}render(){return l`
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
    `}};se.styles=ir;M([n()],se.prototype,"panel",2);M([n({type:Boolean,reflect:!0})],se.prototype,"active",2);M([n({type:Boolean,reflect:!0})],se.prototype,"disabled",2);se=M([p("wu-tab")],se);let be=class extends u{constructor(){super(...arguments),this.name="",this.active=!1}render(){return l`
      <div role="tabpanel" id=${this.name} aria-hidden=${!this.active}>
        <slot></slot>
      </div>
    `}};be.styles=nr;M([n({reflect:!0})],be.prototype,"name",2);M([n({type:Boolean,reflect:!0})],be.prototype,"active",2);be=M([p("wu-tab-panel")],be);let ge=class extends u{constructor(){super(...arguments),this.orientation="horizontal",this.activePanel=""}firstUpdated(){this._setup(),this.addEventListener("wu-tab-click",e=>{const t=e,o=this._tabs(),a=this._panels(),r=o.find(s=>s.panel===t.detail.panel);!r||r.disabled||r.active||(this._activate(t.detail.panel,o,a),this.dispatchEvent(new CustomEvent("wu-tab-change",{bubbles:!0,composed:!0,detail:{panel:t.detail.panel}})))})}_setup(){const e=this._tabs(),t=this._panels();if(!e.length)return;const o=e.find(a=>a.panel===this.activePanel)??e.find(a=>!a.disabled)??e[0];this._activate(o.panel,e,t),this._attachKeyboardListeners(e,t)}_tabs(){return Array.from(this.querySelectorAll("wu-tab"))}_panels(){return Array.from(this.querySelectorAll("wu-tab-panel"))}_activate(e,t,o){t.forEach(a=>{a.active=a.panel===e}),o.forEach(a=>{a.active=a.name===e}),this.activePanel=e}_attachKeyboardListeners(e,t){var o;const a=(o=this.shadowRoot)==null?void 0:o.querySelector(".tablist");a==null||a.addEventListener("keydown",r=>this._onKeydown(r,e,t))}_onKeydown(e,t,o){var a,r;const s=t.findIndex(x=>x.active),i=this.orientation==="horizontal";let d=-1;i&&e.key==="ArrowRight"||!i&&e.key==="ArrowDown"?d=(s+1)%t.length:i&&e.key==="ArrowLeft"||!i&&e.key==="ArrowUp"?d=(s-1+t.length)%t.length:e.key==="Home"?d=0:e.key==="End"&&(d=t.length-1),d>=0&&!t[d].disabled&&(e.preventDefault(),this._activate(t[d].panel,t,o),(r=(a=t[d].shadowRoot)==null?void 0:a.querySelector("button"))==null||r.focus())}render(){return l`
      <div class="tablist" role="tablist" aria-orientation=${this.orientation}>
        <slot name="tabs"></slot>
      </div>
      <div class="panels">
        <slot></slot>
      </div>
    `}};ge.styles=sr;M([n({reflect:!0})],ge.prototype,"orientation",2);M([n({attribute:"active-panel"})],ge.prototype,"activePanel",2);ge=M([p("wu-tabs")],ge);const cr=c`
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
`,ur=c`
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
`;var pr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,_e=(e,t,o,a)=>{for(var r=a>1?void 0:a?hr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&pr(t,o,r),r};let wr=0,fe=class extends u{constructor(){super(...arguments),this._uid=++wr,this.open=!1,this.disabled=!1}_toggle(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent("wu-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}})))}render(){const e=`wu-acc-header-${this._uid}`,t=`wu-acc-panel-${this._uid}`;return l`
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
        aria-hidden="${k(this.open?void 0:"true")}"
      >
        <div class="content"><slot></slot></div>
      </div>
    `}};fe.styles=ur;_e([n({type:Boolean,reflect:!0})],fe.prototype,"open",2);_e([n({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);fe=_e([p("wu-accordion-item")],fe);let Ce=class extends u{constructor(){super(...arguments),this.single=!1,this._onToggle=e=>{const t=e.target;t.open&&this.querySelectorAll("wu-accordion-item").forEach(o=>{o!==t&&(o.open=!1)})}}updated(e){e.has("single")&&(this.single?this.addEventListener("wu-toggle",this._onToggle):this.removeEventListener("wu-toggle",this._onToggle))}render(){return l`<div class="accordion"><slot></slot></div>`}};Ce.styles=cr;_e([n({type:Boolean,reflect:!0})],Ce.prototype,"single",2);Ce=_e([p("wu-accordion")],Ce);const vr=c`
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
`;var br=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,Ie=(e,t,o,a)=>{for(var r=a>1?void 0:a?gr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&br(t,o,r),r};let me=class extends u{constructor(){super(...arguments),this.separator="/",this.label="Breadcrumb"}firstUpdated(){this.style.setProperty("--wu-breadcrumb-separator-char",`"${this.separator}"`)}render(){return l`
      <nav aria-label=${this.label}>
        <ol>
          <slot></slot>
        </ol>
      </nav>
    `}};me.styles=vr;Ie([n()],me.prototype,"separator",2);Ie([n()],me.prototype,"label",2);me=Ie([p("wu-breadcrumb")],me);const fr=c`
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
`;var mr=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,pe=(e,t,o,a)=>{for(var r=a>1?void 0:a?yr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&mr(t,o,r),r};let F=class extends u{constructor(){super(...arguments),this.page=1,this.totalPages=1,this.showInfo=!1,this.totalItems=0,this.pageSize=10}_go(e){e<1||e>this.totalPages||e===this.page||(this.page=e,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:e}})))}_pages(){const e=this.totalPages,t=this.page;if(e<=7)return Array.from({length:e},(s,i)=>i+1);const o=[1];t>3&&o.push("dots");const a=Math.max(2,t-1),r=Math.min(e-1,t+1);for(let s=a;s<=r;s++)o.push(s);return t<e-2&&o.push("dots"),o.push(e),o}render(){const e=this._pages(),t=(this.page-1)*this.pageSize+1,o=Math.min(this.page*this.pageSize,this.totalItems);return l`
      <button
        class="nav-btn"
        ?disabled=${this.page<=1}
        aria-label="Previous page"
        @click=${()=>this._go(this.page-1)}
      >← Prev</button>

      <div class="pages" role="group" aria-label="Pages">
        ${e.map(a=>a==="dots"?l`<span class="dots" aria-hidden="true">…</span>`:l`
              <button
                class="page-btn"
                aria-label="Page ${a}"
                aria-current=${a===this.page?"page":"false"}
                @click=${()=>this._go(a)}
              >${a}</button>
            `)}
      </div>

      <button
        class="nav-btn"
        ?disabled=${this.page>=this.totalPages}
        aria-label="Next page"
        @click=${()=>this._go(this.page+1)}
      >Next →</button>

      ${this.showInfo&&this.totalItems?l`
        <span class="info">${t}–${o} of ${this.totalItems}</span>
      `:""}
    `}};F.styles=fr;pe([n({type:Number})],F.prototype,"page",2);pe([n({type:Number,attribute:"total-pages"})],F.prototype,"totalPages",2);pe([n({type:Boolean,attribute:"show-info"})],F.prototype,"showInfo",2);pe([n({type:Number,attribute:"total-items"})],F.prototype,"totalItems",2);pe([n({type:Number,attribute:"page-size"})],F.prototype,"pageSize",2);F=pe([p("wu-pagination")],F);const xr=c`
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
`;var kr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,Y=(e,t,o,a)=>{for(var r=a>1?void 0:a?_r(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&kr(t,o,r),r};let P=class extends u{constructor(){super(...arguments),this.columns=[],this.data=[],this.selectable=!1,this.sortKey="",this.sortDirection="asc",this.emptyMessage="No data available.",this._selected=new Set}_sort(e){this.sortKey===e?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortKey=e,this.sortDirection="asc"),this.dispatchEvent(new CustomEvent("wu-sort",{bubbles:!0,composed:!0,detail:{key:this.sortKey,direction:this.sortDirection}}))}_toggleRow(e){const t=new Set(this._selected);t.has(e)?t.delete(e):t.add(e),this._selected=t,this._emitSelect()}_toggleAll(e){this._selected=e?new Set(this.data.map(t=>String(t.id??""))):new Set,this._emitSelect()}_emitSelect(){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{selected:[...this._selected]}}))}_sortIcon(e){const t=this.sortKey===e,o=this.sortDirection;return l`
      <span class="sort-icon">
        <svg viewBox="0 0 10 14" fill="currentColor" aria-hidden="true">
          <path d="M5 0L9 5H1L5 0Z" opacity="${t&&o==="asc"?1:.3}"/>
          <path d="M5 14L1 9H9L5 14Z" opacity="${t&&o==="desc"?1:.3}"/>
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
            `:this.data.map(t=>{const o=String(t.id??""),a=this._selected.has(o);return l`
                <tr class=${a?"selected":""}>
                  ${this.selectable?l`
                    <td class="select-cell">
                      <input
                        type="checkbox"
                        .checked=${a}
                        @change=${()=>this._toggleRow(o)}
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
    `}};P.styles=xr;Y([n({type:Array})],P.prototype,"columns",2);Y([n({type:Array})],P.prototype,"data",2);Y([n({type:Boolean,attribute:"selectable"})],P.prototype,"selectable",2);Y([n({attribute:"sort-key"})],P.prototype,"sortKey",2);Y([n({attribute:"sort-direction"})],P.prototype,"sortDirection",2);Y([n({attribute:"empty-message"})],P.prototype,"emptyMessage",2);Y([h()],P.prototype,"_selected",2);P=Y([p("wu-table")],P);const $r=c`
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
`;var zr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,N=(e,t,o,a)=>{for(var r=a>1?void 0:a?Cr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&zr(t,o,r),r};const Dr=["Su","Mo","Tu","We","Th","Fr","Sa"],Ne=["January","February","March","April","May","June","July","August","September","October","November","December"];function qe(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}let $=class extends u{constructor(){super(),this.value="",this.placeholder="Select date",this.min="",this.max="",this.open=!1,this.label="Date";const e=new Date;this._viewYear=e.getFullYear(),this._viewMonth=e.getMonth()}_toggle(){if(this.open=!this.open,this.open&&this.value){const e=new Date(this.value+"T00:00:00");this._viewYear=e.getFullYear(),this._viewMonth=e.getMonth()}}_prevMonth(){this._viewMonth===0?(this._viewYear--,this._viewMonth=11):this._viewMonth--}_nextMonth(){this._viewMonth===11?(this._viewYear++,this._viewMonth=0):this._viewMonth++}_select(e){this.value=e,this.open=!1,this.dispatchEvent(new CustomEvent("wu-date-change",{bubbles:!0,composed:!0,detail:{value:e}}))}_isDisabled(e){return!!(this.min&&e<this.min||this.max&&e>this.max)}_getDays(){const e=new Date(this._viewYear,this._viewMonth,1),t=new Date(this._viewYear,this._viewMonth+1,0),o=[];for(let r=0;r<e.getDay();r++){const s=new Date(this._viewYear,this._viewMonth,1-(e.getDay()-r));o.push({date:s,current:!1})}for(let r=1;r<=t.getDate();r++)o.push({date:new Date(this._viewYear,this._viewMonth,r),current:!0});const a=42-o.length;for(let r=1;r<=a;r++)o.push({date:new Date(this._viewYear,this._viewMonth+1,r),current:!1});return o}_onKeydown(e){e.key==="Escape"&&(this.open=!1)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){const e=qe(new Date),t=this._getDays(),o=this.value?new Date(this.value+"T00:00:00").toLocaleDateString():this.placeholder;return l`
      <button
        part="trigger"
        class="trigger"
        type="button"
        aria-label="${this.label}: ${this.value||"not selected"}"
        aria-expanded=${this.open}
        aria-haspopup="dialog"
        @click=${this._toggle}
      >
        <span>${o}</span>
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
          <span class="month-year">${Ne[this._viewMonth]} ${this._viewYear}</span>
          <button class="nav-btn" type="button" aria-label="Next month" @click=${this._nextMonth}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="grid" role="grid" aria-label="${Ne[this._viewMonth]} ${this._viewYear}">
          ${Dr.map(a=>l`<div class="day-name" role="columnheader" aria-label=${a}>${a}</div>`)}
          ${t.map(({date:a,current:r})=>{const s=qe(a),i=this._isDisabled(s),d=s===this.value,x=s===e;return l`
              <button
                type="button"
                class=${["day",r?"":"other-month",x?"today":"",d?"selected":""].join(" ").trim()}
                role="gridcell"
                aria-label=${a.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}
                aria-selected=${d}
                aria-current=${x?"date":w}
                ?disabled=${i}
                @click=${()=>!i&&this._select(s)}
              >${a.getDate()}</button>
            `})}
        </div>
      </div>
    `}};$.styles=$r;N([n()],$.prototype,"value",2);N([n()],$.prototype,"placeholder",2);N([n()],$.prototype,"min",2);N([n()],$.prototype,"max",2);N([n({type:Boolean,reflect:!0})],$.prototype,"open",2);N([n()],$.prototype,"label",2);N([h()],$.prototype,"_viewYear",2);N([h()],$.prototype,"_viewMonth",2);$=N([p("wu-date-picker")],$);const Er=c`
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
`;var Or=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,H=(e,t,o,a)=>{for(var r=a>1?void 0:a?Pr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Or(t,o,r),r};function Sr(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}let S=class extends u{constructor(){super(...arguments),this.accept="",this.multiple=!1,this.disabled=!1,this.hint="",this._files=[],this._dragOver=!1}_onInputChange(e){const t=e.target;t.files&&this._addFiles(t.files),t.value=""}_addFiles(e){const t=Array.from(e),o=this.multiple?t:t.slice(0,1);this._files=this.multiple?[...this._files,...o]:o,this.dispatchEvent(new CustomEvent("wu-file-select",{bubbles:!0,composed:!0,detail:{files:[...this._files]}}))}_remove(e){this._files=this._files.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("wu-file-remove",{bubbles:!0,composed:!0,detail:{file:e}}))}_onDragOver(e){e.preventDefault(),this._dragOver=!0}_onDragLeave(){this._dragOver=!1}_onDrop(e){var t;e.preventDefault(),this._dragOver=!1,(t=e.dataTransfer)!=null&&t.files&&this._addFiles(e.dataTransfer.files)}_onKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._input.click())}get files(){return this._files}_renderFile(e){return l`
      <li class="file-item">
        <span class="file-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </span>
        <span class="file-name">${e.name}</span>
        <span class="file-size">${Sr(e.size)}</span>
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
    `}};S.styles=Er;H([n()],S.prototype,"accept",2);H([n({type:Boolean})],S.prototype,"multiple",2);H([n({type:Boolean,reflect:!0})],S.prototype,"disabled",2);H([n()],S.prototype,"hint",2);H([h()],S.prototype,"_files",2);H([h()],S.prototype,"_dragOver",2);H([Be("input")],S.prototype,"_input",2);S=H([p("wu-file-upload")],S);const jr=c`
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
`,Mr=c`
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
`;var Br=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,D=(e,t,o,a)=>{for(var r=a>1?void 0:a?Tr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Br(t,o,r),r};let I=class extends u{constructor(){super(...arguments),this.label="",this.description="",this.status="pending",this.index=0,this.disabled=!1}_renderIndicator(){return this.status==="complete"?l`
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
    `}};I.styles=Mr;D([n()],I.prototype,"label",2);D([n()],I.prototype,"description",2);D([n({reflect:!0})],I.prototype,"status",2);D([n({type:Number})],I.prototype,"index",2);D([n({type:Boolean,reflect:!0})],I.prototype,"disabled",2);I=D([p("wu-step")],I);let V=class extends u{constructor(){super(...arguments),this.activeStep=0,this.linear=!1,this.vertical=!1,this._steps=[]}_setup(){const e=this.shadowRoot.querySelector("slot");e&&(this._steps=e.assignedNodes({flatten:!0}).filter(t=>t instanceof I),this._updateSteps())}_updateSteps(){this._steps.forEach((e,t)=>{t<this.activeStep?e.status="complete":t===this.activeStep?e.status="active":e.status="pending",e.index=t})}firstUpdated(){this._setup()}next(){this.activeStep<this._steps.length-1&&(this.activeStep++,this._updateSteps(),this._emit())}prev(){this.activeStep>0&&(this.activeStep--,this._updateSteps(),this._emit())}_emit(){this.dispatchEvent(new CustomEvent("wu-step-change",{bubbles:!0,composed:!0,detail:{step:this.activeStep}}))}updated(e){e.has("activeStep")&&this._updateSteps()}render(){return l`
      <div class="stepper" role="list" aria-label="Progress steps">
        <slot @slotchange=${this._setup}></slot>
      </div>
    `}};V.styles=jr;D([n({type:Number,attribute:"active-step"})],V.prototype,"activeStep",2);D([n({type:Boolean})],V.prototype,"linear",2);D([n({type:Boolean,reflect:!0})],V.prototype,"vertical",2);D([h()],V.prototype,"_steps",2);V=D([p("wu-stepper")],V);const Ar=c`
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
`;var Lr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,U=(e,t,o,a)=>{for(var r=a>1?void 0:a?Ir(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Lr(t,o,r),r};let j=class extends u{constructor(){super(...arguments),this.open=!1,this.items=[],this.placeholder="Search commands…",this.emptyMessage="No results found.",this._query="",this._selectedIndex=0}get _filtered(){if(!this._query.trim())return this.items;const e=this._query.toLowerCase();return this.items.filter(t=>{var o,a;return t.label.toLowerCase().includes(e)||((o=t.group)==null?void 0:o.toLowerCase().includes(e))||((a=t.keywords)==null?void 0:a.some(r=>r.toLowerCase().includes(e)))})}get _grouped(){const e=new Map;for(const t of this._filtered){const o=t.group??"";e.has(o)||e.set(o,[]),e.get(o).push(t)}return e}updated(e){e.has("open")&&this.open&&(this._query="",this._selectedIndex=0,requestAnimationFrame(()=>{var t;return(t=this._input)==null?void 0:t.focus()}))}_onKeydown(e){const t=this._filtered;if(e.key==="Escape"){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}));return}if(e.key==="ArrowDown")e.preventDefault(),this._selectedIndex=Math.min(this._selectedIndex+1,t.length-1);else if(e.key==="ArrowUp")e.preventDefault(),this._selectedIndex=Math.max(this._selectedIndex-1,0);else if(e.key==="Enter"){e.preventDefault();const o=t[this._selectedIndex];o&&this._select(o)}}_select(e){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{item:e}})),this.open=!1}_onBackdropClick(e){e.target.classList.contains("backdrop")&&(this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0})))}_flatIndex(e){return this._filtered.indexOf(e)}render(){const e=this._grouped,t=this._filtered,o=[];for(const[a,r]of e.entries()){a&&o.push({type:"group",label:a});for(const s of r)o.push({type:"item",item:s,idx:this._flatIndex(s)})}return l`
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
              @input=${a=>{this._query=a.target.value,this._selectedIndex=0}}
            />
          </div>

          <div
            class="list"
            role="listbox"
            aria-label="Commands"
          >
            ${t.length===0?l`<div class="empty">${this.emptyMessage}</div>`:w}
            ${o.map(a=>a.type==="group"?l`<div class="group-label">${a.label}</div>`:l`
                  <div
                    class="item"
                    role="option"
                    aria-selected=${this._selectedIndex===a.idx}
                    @click=${()=>this._select(a.item)}
                    @mouseenter=${()=>{this._selectedIndex=a.idx}}
                  >
                    ${a.item.icon?l`<span class="item-icon" aria-hidden="true">${a.item.icon}</span>`:w}
                    <span class="item-label">${a.item.label}</span>
                    ${a.item.shortcut?l`<kbd class="item-shortcut">${a.item.shortcut}</kbd>`:w}
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
    `}};j.styles=Ar;U([n({type:Boolean,reflect:!0})],j.prototype,"open",2);U([n({type:Array})],j.prototype,"items",2);U([n()],j.prototype,"placeholder",2);U([n({attribute:"empty-message"})],j.prototype,"emptyMessage",2);U([h()],j.prototype,"_query",2);U([h()],j.prototype,"_selectedIndex",2);U([Be(".search-input")],j.prototype,"_input",2);j=U([p("wu-command")],j);const Kr=c`
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
`;var Nr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,E=(e,t,o,a)=>{for(var r=a>1?void 0:a?qr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Nr(t,o,r),r};let m=class extends u{constructor(){super(...arguments),this.columns=[],this.data=[],this.totalRows=0,this.page=1,this.pageSize=10,this.showToolbar=!0,this.emptyMessage="No data to display.",this._sortKey="",this._sortDir="asc",this._filter=""}get _filteredData(){if(!this._filter.trim())return this.data;const e=this._filter.toLowerCase();return this.data.filter(t=>this.columns.some(o=>String(t[o.key]??"").toLowerCase().includes(e)))}get _sortedData(){return this._sortKey?[...this._filteredData].sort((e,t)=>{const o=String(e[this._sortKey]??""),a=String(t[this._sortKey]??""),r=o.localeCompare(a);return this._sortDir==="asc"?r:-r}):this._filteredData}get _pageData(){if(this.totalRows>this.data.length)return this._sortedData;const e=(this.page-1)*this.pageSize;return this._sortedData.slice(e,e+this.pageSize)}get _totalPages(){const e=this.totalRows||this._filteredData.length;return Math.max(1,Math.ceil(e/this.pageSize))}_sort(e,t){t&&(this._sortKey===e?this._sortDir=this._sortDir==="asc"?"desc":"asc":(this._sortKey=e,this._sortDir="asc"),this.dispatchEvent(new CustomEvent("wu-sort-change",{bubbles:!0,composed:!0,detail:{key:this._sortKey,direction:this._sortDir}})))}_onFilter(e){this._filter=e.target.value,this.page=1,this.dispatchEvent(new CustomEvent("wu-filter-change",{bubbles:!0,composed:!0,detail:{query:this._filter}}))}_goPage(e){e<1||e>this._totalPages||(this.page=e,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:this.page,pageSize:this.pageSize}})))}_onPageSize(e){this.pageSize=Number(e.target.value),this.page=1,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:this.page,pageSize:this.pageSize}}))}_pageButtons(){const e=this._totalPages,t=this.page,o=[];if(e<=7)for(let a=1;a<=e;a++)o.push(a);else{o.push(1),t>3&&o.push("dots");for(let a=Math.max(2,t-1);a<=Math.min(e-1,t+1);a++)o.push(a);t<e-2&&o.push("dots"),o.push(e)}return o}render(){const e=this._pageData,t=this.totalRows||this._filteredData.length;return l`
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
          ${this.columns.map(o=>l`
            <div
              class=${`header-cell${o.sortable?" sortable":""}${this._sortKey===o.key?" sorted":""}`}
              style=${o.width?`flex: 0 0 ${o.width}`:""}
              role="columnheader"
              aria-sort=${this._sortKey===o.key?this._sortDir==="asc"?"ascending":"descending":"none"}
              @click=${()=>this._sort(o.key,o.sortable)}
            >
              ${o.label}
              ${o.sortable&&this._sortKey===o.key?l`<span class="sort-indicator">${this._sortDir==="asc"?"▲":"▼"}</span>`:w}
            </div>
          `)}
        </div>

        <div class="body" role="rowgroup">
          ${e.length===0?l`<div class="empty">${this.emptyMessage}</div>`:w}
          ${e.map((o,a)=>l`
            <div class="data-row" role="row" aria-rowindex=${(this.page-1)*this.pageSize+a+2}>
              ${this.columns.map(r=>l`
                <div
                  class="cell"
                  role="gridcell"
                  style=${r.width?`flex: 0 0 ${r.width}`:""}
                >${o[r.key]??""}</div>
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
                ${[10,25,50,100].map(o=>l`
                  <option value=${o} ?selected=${this.pageSize===o}>${o}</option>
                `)}
              </select>
              <span class="page-info">
                ${Math.min((this.page-1)*this.pageSize+1,t)}–${Math.min(this.page*this.pageSize,t)} of ${t}
              </span>
            </div>
            <div class="page-controls">
              <button class="page-btn" ?disabled=${this.page===1} @click=${()=>this._goPage(this.page-1)} aria-label="Previous page">‹</button>
              ${this._pageButtons().map(o=>o==="dots"?l`<span class="page-btn" aria-hidden="true" style="border:none;background:none;cursor:default">…</span>`:l`<button class="page-btn ${this.page===o?"active":""}" aria-label="Page ${o}" aria-current=${this.page===o?"page":w} @click=${()=>this._goPage(o)}>${o}</button>`)}
              <button class="page-btn" ?disabled=${this.page===this._totalPages} @click=${()=>this._goPage(this.page+1)} aria-label="Next page">›</button>
            </div>
          </div>
        `:w}
      </div>
    `}};m.styles=Kr;E([n({type:Array})],m.prototype,"columns",2);E([n({type:Array})],m.prototype,"data",2);E([n({type:Number,attribute:"total-rows"})],m.prototype,"totalRows",2);E([n({type:Number})],m.prototype,"page",2);E([n({type:Number,attribute:"page-size"})],m.prototype,"pageSize",2);E([n({type:Boolean,attribute:"show-toolbar"})],m.prototype,"showToolbar",2);E([n({attribute:"empty-message"})],m.prototype,"emptyMessage",2);E([h()],m.prototype,"_sortKey",2);E([h()],m.prototype,"_sortDir",2);E([h()],m.prototype,"_filter",2);m=E([p("wu-data-grid")],m);const Fr=c`
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
`;var Rr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Se=(e,t,o,a)=>{for(var r=a>1?void 0:a?Yr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Rr(t,o,r),r};let ie=class extends u{constructor(){super(...arguments),this.sticky=!1,this.fixed=!1,this._open=!1}_toggleDrawer(){this._open=!this._open,this._open?this.setAttribute("_open",""):this.removeAttribute("_open"),this.dispatchEvent(new CustomEvent(this._open?"wu-menu-open":"wu-menu-close",{bubbles:!0,composed:!0}))}render(){return l`
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
    `}};ie.styles=Fr;Se([n({type:Boolean,reflect:!0})],ie.prototype,"sticky",2);Se([n({type:Boolean,reflect:!0})],ie.prototype,"fixed",2);Se([h()],ie.prototype,"_open",2);ie=Se([p("wu-navbar")],ie);const Hr=c`
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
`,Ur=c`
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
`;var Xr=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,Q=(e,t,o,a)=>{for(var r=a>1?void 0:a?Vr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Xr(t,o,r),r};let ne=class extends u{constructor(){super(...arguments),this.active=!1,this.disabled=!1}_handleClick(){this.disabled||this.href||this.dispatchEvent(new CustomEvent("wu-nav",{bubbles:!0,composed:!0,detail:{item:this}}))}render(){const e=l`
      <span class="icon" aria-hidden="true"><slot name="icon"></slot></span>
      <span class="label"><slot></slot></span>
    `;return this.href?l`<a href=${k(this.href)} aria-current=${k(this.active?"page":void 0)}>${e}</a>`:l`<button class="item-btn" ?disabled=${this.disabled} @click=${this._handleClick}>${e}</button>`}};ne.styles=Ur;Q([n()],ne.prototype,"href",2);Q([n({type:Boolean,reflect:!0})],ne.prototype,"active",2);Q([n({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);ne=Q([p("wu-sidebar-item")],ne);let ye=class extends u{constructor(){super(...arguments),this.collapsed=!1,this.hideToggle=!1}_toggle(){this.collapsed=!this.collapsed,this.querySelectorAll("wu-sidebar-item").forEach(e=>{this.collapsed?e.setAttribute("collapsed",""):e.removeAttribute("collapsed")}),this.dispatchEvent(new CustomEvent("wu-collapse",{bubbles:!0,composed:!0,detail:{collapsed:this.collapsed}}))}render(){return l`
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
    `}};ye.styles=Hr;Q([n({type:Boolean,reflect:!0})],ye.prototype,"collapsed",2);Q([n({type:Boolean,attribute:"hide-toggle"})],ye.prototype,"hideToggle",2);ye=Q([p("wu-sidebar")],ye);const Wr=c`
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
`;var Gr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,je=(e,t,o,a)=>{for(var r=a>1?void 0:a?Jr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Gr(t,o,r),r};let le=class extends u{constructor(){super(...arguments),this.novalidate=!1,this.loading=!1,this._errors=[]}_handleSubmit(e){e.preventDefault();const t=[...Array.from(this.querySelectorAll("input, select, textarea"))];if(!this.novalidate){const a=[];if(t.forEach(r=>{if(!r.disabled&&typeof r.checkValidity=="function"&&!r.checkValidity()){const s=r.validationMessage;s&&a.push(s)}}),a.length>0){this._errors=[...new Set(a)],this.dispatchEvent(new CustomEvent("wu-invalid",{bubbles:!0,composed:!0,detail:{errors:this._errors}}));return}}this._errors=[];const o={};t.forEach(a=>{!a.name||a.disabled||(a instanceof HTMLInputElement&&(a.type==="checkbox"||a.type==="radio")?a.checked&&(o[a.name]=a.value):o[a.name]=a.value)}),this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{values:o}}))}render(){return l`
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
    `}};le.styles=Wr;je([n({type:Boolean})],le.prototype,"novalidate",2);je([n({type:Boolean,reflect:!0})],le.prototype,"loading",2);je([h()],le.prototype,"_errors",2);le=je([p("wu-form")],le);const Zr=c`
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
`;var Qr=Object.defineProperty,ea=Object.getOwnPropertyDescriptor,Ye=(e,t,o,a)=>{for(var r=a>1?void 0:a?ea(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Qr(t,o,r),r};let De=class extends u{constructor(){super(...arguments),this.fullWidth=!1}render(){return l`
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
    `}};De.styles=Zr;Ye([n({type:Boolean,attribute:"full-width",reflect:!0})],De.prototype,"fullWidth",2);De=Ye([p("wu-dashboard")],De);const ta=c`
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
`;var ra=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,Ke=(e,t,o,a)=>{for(var r=a>1?void 0:a?aa(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&ra(t,o,r),r};let xe=class extends u{constructor(){super(...arguments),this.title="",this.description=""}render(){return l`
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
    `}};xe.styles=ta;Ke([n()],xe.prototype,"title",2);Ke([n()],xe.prototype,"description",2);xe=Ke([p("wu-empty-state")],xe);const oa=c`
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
`;var sa=Object.defineProperty,ia=Object.getOwnPropertyDescriptor,Me=(e,t,o,a)=>{for(var r=a>1?void 0:a?ia(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&sa(t,o,r),r};const na={400:"Bad Request",401:"Unauthorised",403:"Access Denied",404:"Page Not Found",408:"Request Timeout",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout"},la={400:"The server couldn't understand the request. Please check the URL or contact support.",401:"You need to be authenticated to access this page. Please sign in and try again.",403:"You don't have permission to access this page. Contact your administrator if this is a mistake.",404:"We can't find the page you're looking for. It may have been moved or deleted.",408:"The request took too long to process. Please check your connection and try again.",500:"Something went wrong on our end. Our team has been notified.",502:"The server received an invalid response. Please try again in a moment.",503:"This service is temporarily unavailable. Please try again shortly.",504:"The server took too long to respond. Please try again in a moment."};let de=class extends u{constructor(){super(...arguments),this.code="404",this.title="",this.description=""}_resolvedTitle(){return this.title||na[this.code]||"An error occurred"}_resolvedDescription(){return this.description||la[this.code]||"An unexpected error occurred. Please try again."}render(){return l`
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
    `}};de.styles=oa;Me([n({reflect:!0})],de.prototype,"code",2);Me([n()],de.prototype,"title",2);Me([n()],de.prototype,"description",2);de=Me([p("wu-error-page")],de);const da=c`
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
`;var ca=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,ee=(e,t,o,a)=>{for(var r=a>1?void 0:a?ua(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&ca(t,o,r),r};let K=class extends u{constructor(){super(...arguments),this.value="",this.placeholder="Search…",this.loading=!1,this.clearable=!0,this.debounce=300,this._value="",this._debounceTimer=null}connectedCallback(){super.connectedCallback(),this._value=this.value}updated(e){e.has("value")&&this.value!==this._value&&(this._value=this.value)}_handleInput(e){const t=e.target;this._value=t.value,this.value=this._value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this._value}})),this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{value:this._value}}))},this.debounce)}_handleClear(){var e,t;this._value="",this.value="",this._debounceTimer&&clearTimeout(this._debounceTimer),this.dispatchEvent(new CustomEvent("wu-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{value:""}})),(t=(e=this.shadowRoot)==null?void 0:e.querySelector("input"))==null||t.focus()}_handleKeyDown(e){e.key==="Escape"&&this._value&&(e.preventDefault(),this._handleClear())}render(){const e=this.clearable&&!this.loading&&this._value.length>0;return l`
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
    `}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}};K.styles=da;ee([n()],K.prototype,"value",2);ee([n()],K.prototype,"placeholder",2);ee([n({type:Boolean,reflect:!0})],K.prototype,"loading",2);ee([n({type:Boolean})],K.prototype,"clearable",2);ee([n({type:Number})],K.prototype,"debounce",2);ee([h()],K.prototype,"_value",2);K=ee([p("wu-search")],K);const pa=c`
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
`;var ha=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,y=(e,t,o,a)=>{for(var r=a>1?void 0:a?wa(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&ha(t,o,r),r};let v=class extends u{constructor(){super(...arguments),this.columns=[],this.rows=[],this.total=0,this.page=1,this.pageSize=10,this.loading=!1,this.selectable=!1,this.searchable=!1,this.emptyMessage="No data to display.",this._selected=new Set,this._sortKey=null,this._sortDir=null}_emitPageChange(e){this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:e,pageSize:this.pageSize}}))}_emitSortChange(e,t){this.dispatchEvent(new CustomEvent("wu-sort-change",{bubbles:!0,composed:!0,detail:{key:e,direction:t}}))}_emitSelectionChange(){this.dispatchEvent(new CustomEvent("wu-selection-change",{bubbles:!0,composed:!0,detail:{selected:[...this._selected]}}))}_handleSort(e){if(e.sortable){if(this._sortKey===e.key){const t=this._sortDir==="asc"?"desc":this._sortDir==="desc"?null:"asc";this._sortDir=t,t===null&&(this._sortKey=null)}else this._sortKey=e.key,this._sortDir="asc";this._emitSortChange(this._sortKey??e.key,this._sortDir)}}_handleSelectRow(e){this._selected.has(e)?this._selected.delete(e):this._selected.add(e),this._selected=new Set(this._selected),this._emitSelectionChange()}_handleSelectAll(e){const t=e.target.checked;this._selected=t?new Set(this.rows):new Set,this._emitSelectionChange()}_handleSearch(e){this.dispatchEvent(new CustomEvent("wu-search-change",{bubbles:!0,composed:!0,detail:{value:e.detail.value}}))}_sortIcon(e){if(!e.sortable)return w;const t=this._sortKey===e.key?this._sortDir:null;return l`
      <span class="sort-icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="${t==="asc"?"M6 9l4-4 4 4":t==="desc"?"M6 7l4 4 4-4":"M6 8.5l3.5-3 3.5 3M6 11.5l3.5 3 3.5-3"}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    `}_buildPages(e){const t=[],o=[];for(let a=Math.max(2,this.page-2);a<=Math.min(e-1,this.page+2);a++)o.push(a);return this.page-2>2&&o.unshift(-1),this.page+2<e-1&&o.push(-2),t.push(1),o.forEach(a=>t.push(a<0?"…":a)),e>1&&t.push(e),t}render(){const e=this.rows.length>0&&this._selected.size===this.rows.length,t=this._selected.size>0&&!e,o=Math.max(1,Math.ceil(this.total/this.pageSize)),a=o<=1&&this.total<=this.pageSize,r=Math.min((this.page-1)*this.pageSize+1,Math.max(this.total,0)),s=Math.min(this.page*this.pageSize,this.total),i=this._buildPages(o);return l`
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
                    `:w}
                ${this.columns.map(d=>l`
                  <th
                    class="${d.sortable?"sortable":""} ${this._sortKey===d.key?"sorted":""}"
                    style="${d.width?`width:${d.width}`:""}"
                    @click=${()=>this._handleSort(d)}
                    aria-sort=${this._sortKey===d.key?this._sortDir==="asc"?"ascending":"descending":w}
                  >
                    ${d.label}${this._sortIcon(d)}
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
                  `:this.rows.map(d=>l`
                    <tr
                      class="${this._selected.has(d)?"selected":""}"
                      aria-selected=${this._selected.has(d)?"true":"false"}
                    >
                      ${this.selectable?l`
                            <td class="checkbox-col">
                              <input
                                type="checkbox"
                                aria-label="Select row"
                                .checked=${this._selected.has(d)}
                                @change=${()=>this._handleSelectRow(d)}
                              />
                            </td>
                          `:w}
                      ${this.columns.map(x=>l`
                        <td title=${String(d[x.key]??"")}>
                          ${d[x.key]!=null?String(d[x.key]):"—"}
                        </td>
                      `)}
                    </tr>
                  `)}
            </tbody>
          </table>
        </div>

        <div class="footer" part="footer" ?hidden=${a}>
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
            ${i.map(d=>d==="…"?l`<span style="padding:0 4px;color:var(--wu-color-text-secondary)">…</span>`:l`
                    <button
                      class="page-btn ${d===this.page?"active":""}"
                      aria-label="Page ${d}"
                      aria-current=${d===this.page?"page":w}
                      @click=${()=>this._emitPageChange(d)}
                    >${d}</button>
                  `)}
            <button
              class="page-btn"
              ?disabled=${this.page>=o}
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
    `}};v.styles=pa;y([n({type:Array})],v.prototype,"columns",2);y([n({type:Array})],v.prototype,"rows",2);y([n({type:Number})],v.prototype,"total",2);y([n({type:Number})],v.prototype,"page",2);y([n({type:Number,attribute:"page-size"})],v.prototype,"pageSize",2);y([n({type:Boolean,reflect:!0})],v.prototype,"loading",2);y([n({type:Boolean})],v.prototype,"selectable",2);y([n({type:Boolean})],v.prototype,"searchable",2);y([n({attribute:"empty-message"})],v.prototype,"emptyMessage",2);y([h()],v.prototype,"_selected",2);y([h()],v.prototype,"_sortKey",2);y([h()],v.prototype,"_sortDir",2);v=y([p("wu-data-table")],v);
