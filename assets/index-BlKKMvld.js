import{f as gs,u as fs,A as v,E as Do,i as u,a as c,b as l}from"./lit-element-I0QAeI3K.js";import{M as ms,u as Ge,v as yr,h as pa,p as ys}from"./directive-helpers-QMk0t2il.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xs={attribute:!0,type:String,converter:fs,reflect:!1,hasChanged:gs},ks=(e=xs,t,a)=>{const{kind:o,metadata:r}=a;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(a.name,e),o==="accessor"){const{name:i}=a;return{set(h){const w=t.get.call(this);t.set.call(this,h),this.requestUpdate(i,w,e,!0,h)},init(h){return h!==void 0&&this.C(i,void 0,e,h),h}}}if(o==="setter"){const{name:i}=a;return function(h){const w=this[i];t.call(this,h),this.requestUpdate(i,w,e,!0,h)}}throw Error("Unsupported decorator location: "+o)};function n(e){return(t,a)=>typeof a=="object"?ks(e,t,a):((o,r,s)=>{const i=r.hasOwnProperty(s);return r.constructor.createProperty(s,o),i?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(e){return n({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s=(e,t,a)=>(a.configurable=!0,a.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,a),a);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ze(e,t){return(a,o,r)=>{const s=i=>{var h;return((h=i.renderRoot)==null?void 0:h.querySelector(e))??null};return $s(a,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=e=>e??v;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo={ATTRIBUTE:1,CHILD:2},Mo=e=>(...t)=>({_$litDirective$:e,values:t});let Ao=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,o){this._$Ct=t,this._$AM=a,this._$Ci=o}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rs="important",_s=" !"+rs,_=Mo(class extends Ao{constructor(e){var t;if(super(e),e.type!==Bo.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const o=e[a];return o==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?a.removeProperty(o):a[o]=null);for(const o in t){const r=t[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(_s);o.includes("-")||s?a.setProperty(o,s?r.slice(0,-11):r,s?rs:""):a[o]=r}}return Do}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs=Mo(class extends Ao{constructor(e){var t;if(super(e),e.type!==Bo.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(t)}const a=e.element.classList;for(const s of this.st)s in t||(a.remove(s),this.st.delete(s));for(const s in t){const i=!!t[s];i===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(i?(a.add(s),this.st.add(s)):(a.remove(s),this.st.delete(s)))}return Do}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xa=(e,t,a)=>{const o=new Map;for(let r=t;r<=a;r++)o.set(e[r],r);return o},m=Mo(class extends Ao{constructor(e){if(super(e),e.type!==Bo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let o;a===void 0?a=t:t!==void 0&&(o=t);const r=[],s=[];let i=0;for(const h of e)r[i]=o?o(h,i):i,s[i]=a(h,i),i++;return{values:s,keys:r}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,o]){const r=ms(e),{values:s,keys:i}=this.dt(t,a,o);if(!Array.isArray(r))return this.ut=i,s;const h=this.ut??(this.ut=[]),w=[];let po,Ya,b=0,x=r.length-1,g=0,P=s.length-1;for(;b<=x&&g<=P;)if(r[b]===null)b++;else if(r[x]===null)x--;else if(h[b]===i[g])w[g]=Ge(r[b],s[g]),b++,g++;else if(h[x]===i[P])w[P]=Ge(r[x],s[P]),x--,P--;else if(h[b]===i[P])w[P]=Ge(r[b],s[P]),yr(e,w[P+1],r[b]),b++,P--;else if(h[x]===i[g])w[g]=Ge(r[x],s[g]),yr(e,r[b],r[x]),x--,g++;else if(po===void 0&&(po=Xa(i,g,P),Ya=Xa(h,b,x)),po.has(h[b]))if(po.has(h[x])){const ve=Ya.get(i[g]),ua=ve!==void 0?r[ve]:null;if(ua===null){const Wa=yr(e,r[b]);Ge(Wa,s[g]),w[g]=Wa}else w[g]=Ge(ua,s[g]),yr(e,r[b],ua),r[ve]=null;g++}else pa(r[x]),x--;else pa(r[b]),b++;for(;g<=P;){const ve=yr(e,w[P+1]);Ge(ve,s[g]),w[g++]=ve}for(;b<=x;){const ve=r[b++];ve!==null&&pa(ve)}return this.ut=i,ys(e,w),Do}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ha extends Ao{constructor(t){if(super(t),this.it=v,t.type!==Bo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===Do)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const a=[t];return a.raw=a,this._t={_$litType$:this.constructor.resultType,strings:a,values:[]}}}ha.directiveName="unsafeHTML",ha.resultType=1;const Cs=Mo(ha),js=u`
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
`;var Os=Object.defineProperty,Ps=Object.getOwnPropertyDescriptor,wt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ps(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Os(t,a,r),r};let we=class extends c{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this.ariaLabel=null}_handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}render(){return l`
      <button
        part="base"
        type=${this.type}
        ?disabled=${this.disabled||this.loading}
        aria-disabled=${this.disabled||this.loading?"true":"false"}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${f(this.ariaLabel??void 0)}
        @click=${this._handleClick}
      >
        ${this.loading?l`<span class="spinner" aria-hidden="true"></span>`:""}
        <slot name="prefix"></slot>
        <span part="label" class="label"><slot></slot></span>
        <slot name="suffix"></slot>
      </button>
    `}};we.styles=js;wt([n({reflect:!0})],we.prototype,"variant",2);wt([n({reflect:!0})],we.prototype,"size",2);wt([n({type:Boolean,reflect:!0})],we.prototype,"disabled",2);wt([n({type:Boolean,reflect:!0})],we.prototype,"loading",2);wt([n()],we.prototype,"type",2);wt([n({attribute:"aria-label"})],we.prototype,"ariaLabel",2);we=wt([d("wu-button")],we);const Es=u`
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
`;var Ss=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,os=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ds(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ss(t,a,r),r};let ho=class extends c{constructor(){super(...arguments),this.variant="default"}render(){return l`<span part="base" class="badge"><slot></slot></span>`}};ho.styles=Es;os([n({reflect:!0})],ho.prototype,"variant",2);ho=os([d("wu-badge")],ho);const Bs=u`
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
`;var Ms=Object.defineProperty,As=Object.getOwnPropertyDescriptor,sr=(e,t,a,o)=>{for(var r=o>1?void 0:o?As(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ms(t,a,r),r};let Ee=class extends c{constructor(){super(...arguments),this.size="md",this._imgError=!1}_handleImgError(){this._imgError=!0}render(){const e=this.src&&!this._imgError;return l`
      <div part="base" class="avatar" role="img" aria-label=${f(this.alt??this.initials)}>
        ${e?l`<img src=${this.src} alt=${f(this.alt)} @error=${this._handleImgError} />`:l`${this.initials??""}`}
      </div>
    `}};Ee.styles=Bs;sr([n()],Ee.prototype,"src",2);sr([n()],Ee.prototype,"alt",2);sr([n()],Ee.prototype,"initials",2);sr([n({reflect:!0})],Ee.prototype,"size",2);sr([p()],Ee.prototype,"_imgError",2);Ee=sr([d("wu-avatar")],Ee);const Is=u`
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
`;var qs=Object.defineProperty,Ns=Object.getOwnPropertyDescriptor,W=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ns(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&qs(t,a,r),r};let E=class extends c{constructor(){super(...arguments),this.type="text",this.value="",this.disabled=!1,this.required=!1,this.size="md"}_handleInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const e="input-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="input-row">
          <input
            part="input"
            id=${e}
            type=${this.type}
            .value=${this.value}
            placeholder=${f(this.placeholder)}
            name=${f(this.name)}
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
    `}};E.styles=Is;W([n()],E.prototype,"type",2);W([n()],E.prototype,"value",2);W([n()],E.prototype,"placeholder",2);W([n()],E.prototype,"label",2);W([n()],E.prototype,"hint",2);W([n()],E.prototype,"error",2);W([n({type:Boolean,reflect:!0})],E.prototype,"disabled",2);W([n({type:Boolean})],E.prototype,"required",2);W([n({reflect:!0})],E.prototype,"size",2);W([n()],E.prototype,"name",2);E=W([d("wu-input")],E);const Ts=u`
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
`;var Ls=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,R=(e,t,a,o)=>{for(var r=o>1?void 0:o?Rs(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ls(t,a,r),r};let z=class extends c{constructor(){super(...arguments),this.value="",this.disabled=!1,this.required=!1,this.rows=4,this._charCount=0}connectedCallback(){super.connectedCallback(),this._charCount=this.value.length}_handleInput(e){this.value=e.target.value,this._charCount=this.value.length,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const e="textarea-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <textarea
          part="textarea"
          id=${e}
          rows=${this.rows}
          name=${f(this.name)}
          placeholder=${f(this.placeholder)}
          maxlength=${f(this.maxlength)}
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
    `}};z.styles=Ts;R([n()],z.prototype,"value",2);R([n()],z.prototype,"placeholder",2);R([n()],z.prototype,"label",2);R([n()],z.prototype,"hint",2);R([n()],z.prototype,"error",2);R([n({type:Boolean,reflect:!0})],z.prototype,"disabled",2);R([n({type:Boolean})],z.prototype,"required",2);R([n({type:Number})],z.prototype,"maxlength",2);R([n({type:Number})],z.prototype,"rows",2);R([n()],z.prototype,"name",2);R([p()],z.prototype,"_charCount",2);z=R([d("wu-textarea")],z);const Hs=u`
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
`;var Ks=Object.defineProperty,Fs=Object.getOwnPropertyDescriptor,X=(e,t,a,o)=>{for(var r=o>1?void 0:o?Fs(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ks(t,a,r),r};let S=class extends c{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.required=!1,this.size="md"}_handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){const e="select-"+(this.name??Math.random().toString(36).slice(2));return l`
      <div part="base" class="wrapper">
        ${this.label?l`<label for=${e}>${this.label}${this.required?l` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="select-row">
          <select
            part="select"
            id=${e}
            name=${f(this.name)}
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
    `}};S.styles=Hs;X([n()],S.prototype,"value",2);X([n({type:Array})],S.prototype,"options",2);X([n()],S.prototype,"placeholder",2);X([n()],S.prototype,"label",2);X([n()],S.prototype,"hint",2);X([n()],S.prototype,"error",2);X([n({type:Boolean,reflect:!0})],S.prototype,"disabled",2);X([n({type:Boolean})],S.prototype,"required",2);X([n({reflect:!0})],S.prototype,"size",2);X([n()],S.prototype,"name",2);S=X([d("wu-select")],S);const Us=u`
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
`;var Vs=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,bt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ys(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Vs(t,a,r),r};let be=class extends c{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on"}_handleChange(e){const t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.value}}))}updated(e){var t;if(e.has("indeterminate")){const a=(t=this.shadowRoot)==null?void 0:t.querySelector("input");a&&(a.indeterminate=this.indeterminate)}}render(){const e="checkbox-"+(this.name??Math.random().toString(36).slice(2));return l`
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
    `}};be.styles=Us;bt([n({type:Boolean,reflect:!0})],be.prototype,"checked",2);bt([n({type:Boolean,reflect:!0})],be.prototype,"indeterminate",2);bt([n({type:Boolean,reflect:!0})],be.prototype,"disabled",2);bt([n()],be.prototype,"label",2);bt([n()],be.prototype,"name",2);bt([n()],be.prototype,"value",2);be=bt([d("wu-checkbox")],be);const Ws=u`
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
`;var Xs=Object.defineProperty,Gs=Object.getOwnPropertyDescriptor,gt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Gs(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Xs(t,a,r),r};let ge=class extends c{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.labelPosition="end",this.size="md"}_handleChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked}}))}render(){const e="toggle-"+(this.name??Math.random().toString(36).slice(2)),t=this.label?l`<label part="label" for=${e}>${this.label}</label>`:"";return l`
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
    `}};ge.styles=Ws;gt([n({type:Boolean,reflect:!0})],ge.prototype,"checked",2);gt([n({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);gt([n()],ge.prototype,"label",2);gt([n({attribute:"label-position"})],ge.prototype,"labelPosition",2);gt([n({reflect:!0})],ge.prototype,"size",2);gt([n()],ge.prototype,"name",2);ge=gt([d("wu-toggle")],ge);const Js=u`
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
`;var Qs=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,Io=(e,t,a,o)=>{for(var r=o>1?void 0:o?Zs(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Qs(t,a,r),r};let jt=class extends c{constructor(){super(...arguments),this.interactive=!1,this._hasHeader=!1,this._hasFooter=!1}_handleClick(e){this.interactive&&this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}_onHeaderSlotChange(e){const t=e.target;this._hasHeader=t.assignedNodes({flatten:!0}).length>0}_onFooterSlotChange(e){const t=e.target;this._hasFooter=t.assignedNodes({flatten:!0}).length>0}render(){return l`
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
    `}};jt.styles=Js;Io([n({type:Boolean,reflect:!0})],jt.prototype,"interactive",2);Io([p()],jt.prototype,"_hasHeader",2);Io([p()],jt.prototype,"_hasFooter",2);jt=Io([d("wu-card")],jt);const ei=u`
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
`;var ti=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,ft=(e,t,a,o)=>{for(var r=o>1?void 0:o?ri(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ti(t,a,r),r};let fe=class extends c{constructor(){super(...arguments),this.open=!1,this.label="",this.closeOnBackdrop=!0,this.hideClose=!1,this._hasFooter=!1,this._previouslyFocused=null}updated(e){e.has("open")&&(this.open?this._openDialog():this._closeDialog("api"))}_openDialog(){this._dialog&&(this._previouslyFocused=document.activeElement,this._dialog.showModal(),document.body.style.overflow="hidden",this._dialog.focus(),this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0})))}_closeDialog(e){var t,a;(t=this._dialog)!=null&&t.open&&(this._dialog.close(),document.body.style.overflow="",(a=this._previouslyFocused)==null||a.focus(),this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0,detail:{reason:e}})))}_onBackdropClick(e){this.closeOnBackdrop&&e.target===this._dialog&&this._closeDialog("backdrop")}_onKeydown(e){e.key==="Escape"&&(e.preventDefault(),this._closeDialog("escape")),e.key==="Tab"&&this._trapFocus(e)}_trapFocus(e){const t=Array.from(this._dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(r=>!r.hasAttribute("disabled")),a=t[0],o=t[t.length-1];a&&(e.shiftKey&&document.activeElement===a?(e.preventDefault(),o.focus()):!e.shiftKey&&document.activeElement===o&&(e.preventDefault(),a.focus()))}_onFooterSlotChange(e){const t=e.target;this._hasFooter=t.assignedNodes({flatten:!0}).length>0}render(){return l`
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
    `}};fe.styles=ei;ft([n({type:Boolean,reflect:!0})],fe.prototype,"open",2);ft([n()],fe.prototype,"label",2);ft([n({type:Boolean,attribute:"close-on-backdrop"})],fe.prototype,"closeOnBackdrop",2);ft([n({type:Boolean,attribute:"hide-close"})],fe.prototype,"hideClose",2);ft([p()],fe.prototype,"_hasFooter",2);ft([ze("dialog")],fe.prototype,"_dialog",2);fe=ft([d("wu-modal")],fe);const oi=u`
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
`;var ai=Object.defineProperty,si=Object.getOwnPropertyDescriptor,ka=(e,t,a,o)=>{for(var r=o>1?void 0:o?si(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ai(t,a,r),r};const ii={info:"ℹ",success:"✓",warning:"⚠",danger:"✕",neutral:"•"};let xr=class extends c{constructor(){super(...arguments),this.variant="info",this.dismissible=!1}_handleDismiss(){this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0})),this.remove()}render(){return l`
      <div part="base" class="alert" role="alert" aria-live="polite">
        <span part="icon" class="icon" aria-hidden="true">
          <slot name="icon">${ii[this.variant]}</slot>
        </span>
        <div part="content" class="content">
          <slot name="title"></slot>
          <slot></slot>
        </div>
        ${this.dismissible?l`
          <button class="dismiss-btn" aria-label="Dismiss" @click=${this._handleDismiss}>✕</button>
        `:""}
      </div>
    `}};xr.styles=oi;ka([n({reflect:!0})],xr.prototype,"variant",2);ka([n({type:Boolean})],xr.prototype,"dismissible",2);xr=ka([d("wu-alert")],xr);const ni=u`
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
`;var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,$a=(e,t,a,o)=>{for(var r=o>1?void 0:o?ci(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&li(t,a,r),r};let kr=class extends c{constructor(){super(...arguments),this.size="md",this.label="Loading…"}render(){return l`
      <span role="status" aria-label=${this.label}>
        <span class="spinner" aria-hidden="true"></span>
        <span class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">${this.label}</span>
      </span>
    `}};kr.styles=ni;$a([n({reflect:!0})],kr.prototype,"size",2);$a([n()],kr.prototype,"label",2);kr=$a([d("wu-spinner")],kr);const di=u`
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
`;var ui=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,Re=(e,t,a,o)=>{for(var r=o>1?void 0:o?pi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ui(t,a,r),r};let ee=class extends c{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.indeterminate=!1,this.showLabel=!1,this.size="md",this.label=""}get _pct(){if(this.indeterminate)return 0;const e=Math.min(Math.max(this.value,this.min),this.max);return Math.round((e-this.min)/(this.max-this.min)*100)}render(){return l`
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
    `}};ee.styles=di;Re([n({type:Number})],ee.prototype,"value",2);Re([n({type:Number})],ee.prototype,"min",2);Re([n({type:Number})],ee.prototype,"max",2);Re([n({type:Boolean,reflect:!0})],ee.prototype,"indeterminate",2);Re([n({type:Boolean})],ee.prototype,"showLabel",2);Re([n({reflect:!0})],ee.prototype,"size",2);Re([n()],ee.prototype,"label",2);ee=Re([d("wu-progress")],ee);const hi=u`
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
`;var vi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,qo=(e,t,a,o)=>{for(var r=o>1?void 0:o?wi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&vi(t,a,r),r};let Ot=class extends c{constructor(){super(...arguments),this.variant="text",this.width="100%",this.height=""}render(){const e={width:this.width};return this.height&&(e.height=this.height),l`
      <div
        class="skeleton"
        style=${_(e)}
        role="status"
        aria-label="Loading…"
        aria-busy="true"
      ></div>
    `}};Ot.styles=hi;qo([n({reflect:!0})],Ot.prototype,"variant",2);qo([n()],Ot.prototype,"width",2);qo([n()],Ot.prototype,"height",2);Ot=qo([d("wu-skeleton")],Ot);const bi=u`
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
`;var gi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,_a=(e,t,a,o)=>{for(var r=o>1?void 0:o?fi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&gi(t,a,r),r};let $r=class extends c{constructor(){super(...arguments),this.vertical=!1,this._hasLabel=!1}_onSlotChange(e){const t=e.target;this._hasLabel=t.assignedNodes({flatten:!0}).some(a=>a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE&&a.textContent.trim())}render(){return l`
      <div class="line" role="separator" aria-orientation=${this.vertical?"vertical":"horizontal"}></div>
      ${this._hasLabel?l`<span class="label"><slot @slotchange=${this._onSlotChange}></slot></span>`:l`<slot @slotchange=${this._onSlotChange} style="display:none"></slot>`}
      ${this._hasLabel?l`<div class="line"></div>`:""}
    `}};$r.styles=bi;_a([n({type:Boolean,reflect:!0})],$r.prototype,"vertical",2);_a([p()],$r.prototype,"_hasLabel",2);$r=_a([d("wu-divider")],$r);const mi=u`
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
`;var yi=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,Jr=(e,t,a,o)=>{for(var r=o>1?void 0:o?xi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&yi(t,a,r),r};let Je=class extends c{constructor(){super(...arguments),this.content="",this.placement="top",this.delay=300,this._visible=!1,this._showTimer=null}_show(){this._showTimer=setTimeout(()=>{this._visible=!0},this.delay)}_hide(){this._showTimer&&(clearTimeout(this._showTimer),this._showTimer=null),this._visible=!1}disconnectedCallback(){super.disconnectedCallback(),this._hide()}render(){const e="tooltip-content";return l`
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
    `}};Je.styles=mi;Jr([n()],Je.prototype,"content",2);Jr([n({reflect:!0})],Je.prototype,"placement",2);Jr([n({type:Number})],Je.prototype,"delay",2);Jr([p()],Je.prototype,"_visible",2);Je=Jr([d("wu-tooltip")],Je);const ki=u`
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
`;var $i=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,No=(e,t,a,o)=>{for(var r=o>1?void 0:o?_i(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&$i(t,a,r),r};let Pt=class extends c{constructor(){super(...arguments),this.open=!1,this.placement="bottom",this._isOpen=!1,this._onDocClick=e=>{this.contains(e.target)||(this._isOpen=!1,this.open=!1)}}updated(e){e.has("open")&&(this._isOpen=this.open)}_toggle(){this._isOpen=!this._isOpen,this.open=this._isOpen,this.dispatchEvent(new CustomEvent(this._isOpen?"wu-open":"wu-close",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDocClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDocClick)}render(){return l`
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
    `}};Pt.styles=ki;No([n({type:Boolean,reflect:!0})],Pt.prototype,"open",2);No([n({reflect:!0})],Pt.prototype,"placement",2);No([p()],Pt.prototype,"_isOpen",2);Pt=No([d("wu-popover")],Pt);const zi=u`
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
`,Ci=u`
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
`;var ji=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,ir=(e,t,a,o)=>{for(var r=o>1?void 0:o?Oi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ji(t,a,r),r};const Pi={info:"ℹ",success:"✓",warning:"⚠",danger:"✕",default:"•"};let Et=class extends c{constructor(){super(...arguments),this.variant="default",this.heading="",this.duration=5e3}connectedCallback(){super.connectedCallback(),this.duration>0&&setTimeout(()=>this._dismiss("auto"),this.duration)}_dismiss(e){this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0,detail:{reason:e}})),this.remove()}render(){return l`
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <span class="icon" aria-hidden="true">${Pi[this.variant]}</span>
        <div class="content">
          ${this.heading?l`<div class="title">${this.heading}</div>`:""}
          <slot></slot>
          <slot name="action"></slot>
        </div>
        <button class="close-btn" aria-label="Dismiss notification" @click=${()=>this._dismiss("button")}>✕</button>
      </div>
    `}};Et.styles=zi;ir([n({reflect:!0})],Et.prototype,"variant",2);ir([n()],Et.prototype,"heading",2);ir([n({type:Number})],Et.prototype,"duration",2);Et=ir([d("wu-toast")],Et);let vo=class extends c{constructor(){super(...arguments),this.position="top-right"}toast(e){const t=Object.assign(document.createElement("wu-toast"),{heading:e.heading??"",variant:e.variant??"default",duration:e.duration??5e3});return e.message&&(t.textContent=e.message),this.shadowRoot.querySelector("slot").parentElement.appendChild(t),t}render(){return l`<slot></slot>`}};vo.styles=Ci;ir([n({reflect:!0})],vo.prototype,"position",2);vo=ir([d("wu-toast-provider")],vo);const Ei=u`
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
`,Si=u`
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
`,Di=u`
  :host {
    display: none;
  }

  :host([active]) {
    display: block;
  }
`;var Bi=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,de=(e,t,a,o)=>{for(var r=o>1?void 0:o?Mi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Bi(t,a,r),r};let St=class extends c{constructor(){super(...arguments),this.panel="",this.active=!1,this.disabled=!1}_handleClick(){this.disabled||this.dispatchEvent(new CustomEvent("wu-tab-click",{bubbles:!0,composed:!0,detail:{panel:this.panel}}))}render(){return l`
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
    `}};St.styles=Si;de([n()],St.prototype,"panel",2);de([n({type:Boolean,reflect:!0})],St.prototype,"active",2);de([n({type:Boolean,reflect:!0})],St.prototype,"disabled",2);St=de([d("wu-tab")],St);let _r=class extends c{constructor(){super(...arguments),this.name="",this.active=!1}render(){return l`
      <div role="tabpanel" id=${this.name} aria-hidden=${!this.active}>
        <slot></slot>
      </div>
    `}};_r.styles=Di;de([n({reflect:!0})],_r.prototype,"name",2);de([n({type:Boolean,reflect:!0})],_r.prototype,"active",2);_r=de([d("wu-tab-panel")],_r);let zr=class extends c{constructor(){super(...arguments),this.orientation="horizontal",this.activePanel=""}firstUpdated(){this._setup(),this.addEventListener("wu-tab-click",e=>{const t=e,a=this._tabs(),o=this._panels(),r=a.find(s=>s.panel===t.detail.panel);!r||r.disabled||r.active||(this._activate(t.detail.panel,a,o),this.dispatchEvent(new CustomEvent("wu-tab-change",{bubbles:!0,composed:!0,detail:{panel:t.detail.panel}})))})}_setup(){const e=this._tabs(),t=this._panels();if(!e.length)return;const a=e.find(o=>o.panel===this.activePanel)??e.find(o=>!o.disabled)??e[0];this._activate(a.panel,e,t),this._attachKeyboardListeners(e,t)}_tabs(){return Array.from(this.querySelectorAll("wu-tab"))}_panels(){return Array.from(this.querySelectorAll("wu-tab-panel"))}_activate(e,t,a){t.forEach(o=>{o.active=o.panel===e}),a.forEach(o=>{o.active=o.name===e}),this.activePanel=e}_attachKeyboardListeners(e,t){var a;const o=(a=this.shadowRoot)==null?void 0:a.querySelector(".tablist");o==null||o.addEventListener("keydown",r=>this._onKeydown(r,e,t))}_onKeydown(e,t,a){var o,r;const s=t.findIndex(w=>w.active),i=this.orientation==="horizontal";let h=-1;i&&e.key==="ArrowRight"||!i&&e.key==="ArrowDown"?h=(s+1)%t.length:i&&e.key==="ArrowLeft"||!i&&e.key==="ArrowUp"?h=(s-1+t.length)%t.length:e.key==="Home"?h=0:e.key==="End"&&(h=t.length-1),h>=0&&!t[h].disabled&&(e.preventDefault(),this._activate(t[h].panel,t,a),(r=(o=t[h].shadowRoot)==null?void 0:o.querySelector("button"))==null||r.focus())}render(){return l`
      <div class="tablist" role="tablist" aria-orientation=${this.orientation}>
        <slot name="tabs"></slot>
      </div>
      <div class="panels">
        <slot></slot>
      </div>
    `}};zr.styles=Ei;de([n({reflect:!0})],zr.prototype,"orientation",2);de([n({attribute:"active-panel"})],zr.prototype,"activePanel",2);zr=de([d("wu-tabs")],zr);const Ai=u`
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
`,Ii=u`
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
`;var qi=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,Qr=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ni(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&qi(t,a,r),r};let Ti=0,Cr=class extends c{constructor(){super(...arguments),this._uid=++Ti,this.open=!1,this.disabled=!1}_toggle(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent("wu-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}})))}render(){const e=`wu-acc-header-${this._uid}`,t=`wu-acc-panel-${this._uid}`;return l`
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
        aria-hidden="${f(this.open?void 0:"true")}"
      >
        <div class="content"><slot></slot></div>
      </div>
    `}};Cr.styles=Ii;Qr([n({type:Boolean,reflect:!0})],Cr.prototype,"open",2);Qr([n({type:Boolean,reflect:!0})],Cr.prototype,"disabled",2);Cr=Qr([d("wu-accordion-item")],Cr);let wo=class extends c{constructor(){super(...arguments),this.single=!1,this._onToggle=e=>{const t=e.target;t.open&&this.querySelectorAll("wu-accordion-item").forEach(a=>{a!==t&&(a.open=!1)})}}updated(e){e.has("single")&&(this.single?this.addEventListener("wu-toggle",this._onToggle):this.removeEventListener("wu-toggle",this._onToggle))}render(){return l`<div class="accordion"><slot></slot></div>`}};wo.styles=Ai;Qr([n({type:Boolean,reflect:!0})],wo.prototype,"single",2);wo=Qr([d("wu-accordion")],wo);const Li=u`
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
`;var Ri=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,za=(e,t,a,o)=>{for(var r=o>1?void 0:o?Hi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ri(t,a,r),r};let jr=class extends c{constructor(){super(...arguments),this.separator="/",this.label="Breadcrumb"}firstUpdated(){this.style.setProperty("--wu-breadcrumb-separator-char",`"${this.separator}"`)}render(){return l`
      <nav aria-label=${this.label}>
        <ol>
          <slot></slot>
        </ol>
      </nav>
    `}};jr.styles=Li;za([n()],jr.prototype,"separator",2);za([n()],jr.prototype,"label",2);jr=za([d("wu-breadcrumb")],jr);const Ki=u`
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
`;var Fi=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,nr=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ui(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Fi(t,a,r),r};let Se=class extends c{constructor(){super(...arguments),this.page=1,this.totalPages=1,this.showInfo=!1,this.totalItems=0,this.pageSize=10}_go(e){e<1||e>this.totalPages||e===this.page||(this.page=e,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:e}})))}_pages(){const e=this.totalPages,t=this.page;if(e<=7)return Array.from({length:e},(s,i)=>i+1);const a=[1];t>3&&a.push("dots");const o=Math.max(2,t-1),r=Math.min(e-1,t+1);for(let s=o;s<=r;s++)a.push(s);return t<e-2&&a.push("dots"),a.push(e),a}render(){const e=this._pages(),t=(this.page-1)*this.pageSize+1,a=Math.min(this.page*this.pageSize,this.totalItems);return l`
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
    `}};Se.styles=Ki;nr([n({type:Number})],Se.prototype,"page",2);nr([n({type:Number,attribute:"total-pages"})],Se.prototype,"totalPages",2);nr([n({type:Boolean,attribute:"show-info"})],Se.prototype,"showInfo",2);nr([n({type:Number,attribute:"total-items"})],Se.prototype,"totalItems",2);nr([n({type:Number,attribute:"page-size"})],Se.prototype,"pageSize",2);Se=nr([d("wu-pagination")],Se);const Vi=u`
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
`;var Yi=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,He=(e,t,a,o)=>{for(var r=o>1?void 0:o?Wi(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Yi(t,a,r),r};let te=class extends c{constructor(){super(...arguments),this.columns=[],this.data=[],this.selectable=!1,this.sortKey="",this.sortDirection="asc",this.emptyMessage="No data available.",this._selected=new Set}_sort(e){this.sortKey===e?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortKey=e,this.sortDirection="asc"),this.dispatchEvent(new CustomEvent("wu-sort",{bubbles:!0,composed:!0,detail:{key:this.sortKey,direction:this.sortDirection}}))}_toggleRow(e){const t=new Set(this._selected);t.has(e)?t.delete(e):t.add(e),this._selected=t,this._emitSelect()}_toggleAll(e){this._selected=e?new Set(this.data.map(t=>String(t.id??""))):new Set,this._emitSelect()}_emitSelect(){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{selected:[...this._selected]}}))}_sortIcon(e){const t=this.sortKey===e,a=this.sortDirection;return l`
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
    `}};te.styles=Vi;He([n({type:Array})],te.prototype,"columns",2);He([n({type:Array})],te.prototype,"data",2);He([n({type:Boolean,attribute:"selectable"})],te.prototype,"selectable",2);He([n({attribute:"sort-key"})],te.prototype,"sortKey",2);He([n({attribute:"sort-direction"})],te.prototype,"sortDirection",2);He([n({attribute:"empty-message"})],te.prototype,"emptyMessage",2);He([p()],te.prototype,"_selected",2);te=He([d("wu-table")],te);const Xi=u`
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
`;var Gi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,Ce=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ji(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Gi(t,a,r),r};const Qi=["Su","Mo","Tu","We","Th","Fr","Sa"],Ga=["January","February","March","April","May","June","July","August","September","October","November","December"];function Ja(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}let F=class extends c{constructor(){super(),this.value="",this.placeholder="Select date",this.min="",this.max="",this.open=!1,this.label="Date";const e=new Date;this._viewYear=e.getFullYear(),this._viewMonth=e.getMonth()}_toggle(){if(this.open=!this.open,this.open&&this.value){const e=new Date(this.value+"T00:00:00");this._viewYear=e.getFullYear(),this._viewMonth=e.getMonth()}}_prevMonth(){this._viewMonth===0?(this._viewYear--,this._viewMonth=11):this._viewMonth--}_nextMonth(){this._viewMonth===11?(this._viewYear++,this._viewMonth=0):this._viewMonth++}_select(e){this.value=e,this.open=!1,this.dispatchEvent(new CustomEvent("wu-date-change",{bubbles:!0,composed:!0,detail:{value:e}}))}_isDisabled(e){return!!(this.min&&e<this.min||this.max&&e>this.max)}_getDays(){const e=new Date(this._viewYear,this._viewMonth,1),t=new Date(this._viewYear,this._viewMonth+1,0),a=[];for(let r=0;r<e.getDay();r++){const s=new Date(this._viewYear,this._viewMonth,1-(e.getDay()-r));a.push({date:s,current:!1})}for(let r=1;r<=t.getDate();r++)a.push({date:new Date(this._viewYear,this._viewMonth,r),current:!0});const o=42-a.length;for(let r=1;r<=o;r++)a.push({date:new Date(this._viewYear,this._viewMonth+1,r),current:!1});return a}_onKeydown(e){e.key==="Escape"&&(this.open=!1)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){const e=Ja(new Date),t=this._getDays(),a=this.value?new Date(this.value+"T00:00:00").toLocaleDateString():this.placeholder;return l`
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
          <span class="month-year">${Ga[this._viewMonth]} ${this._viewYear}</span>
          <button class="nav-btn" type="button" aria-label="Next month" @click=${this._nextMonth}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="grid" role="grid" aria-label="${Ga[this._viewMonth]} ${this._viewYear}">
          ${Qi.map(o=>l`<div class="day-name" role="columnheader" aria-label=${o}>${o}</div>`)}
          ${t.map(({date:o,current:r})=>{const s=Ja(o),i=this._isDisabled(s),h=s===this.value,w=s===e;return l`
              <button
                type="button"
                class=${["day",r?"":"other-month",w?"today":"",h?"selected":""].join(" ").trim()}
                role="gridcell"
                aria-label=${o.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}
                aria-selected=${h}
                aria-current=${w?"date":v}
                ?disabled=${i}
                @click=${()=>!i&&this._select(s)}
              >${o.getDate()}</button>
            `})}
        </div>
      </div>
    `}};F.styles=Xi;Ce([n()],F.prototype,"value",2);Ce([n()],F.prototype,"placeholder",2);Ce([n()],F.prototype,"min",2);Ce([n()],F.prototype,"max",2);Ce([n({type:Boolean,reflect:!0})],F.prototype,"open",2);Ce([n()],F.prototype,"label",2);Ce([p()],F.prototype,"_viewYear",2);Ce([p()],F.prototype,"_viewMonth",2);F=Ce([d("wu-date-picker")],F);const Zi=u`
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
`;var en=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,Ke=(e,t,a,o)=>{for(var r=o>1?void 0:o?tn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&en(t,a,r),r};function rn(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}let re=class extends c{constructor(){super(...arguments),this.accept="",this.multiple=!1,this.disabled=!1,this.hint="",this._files=[],this._dragOver=!1}_onInputChange(e){const t=e.target;t.files&&this._addFiles(t.files),t.value=""}_addFiles(e){const t=Array.from(e),a=this.multiple?t:t.slice(0,1);this._files=this.multiple?[...this._files,...a]:a,this.dispatchEvent(new CustomEvent("wu-file-select",{bubbles:!0,composed:!0,detail:{files:[...this._files]}}))}_remove(e){this._files=this._files.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("wu-file-remove",{bubbles:!0,composed:!0,detail:{file:e}}))}_onDragOver(e){e.preventDefault(),this._dragOver=!0}_onDragLeave(){this._dragOver=!1}_onDrop(e){var t;e.preventDefault(),this._dragOver=!1,(t=e.dataTransfer)!=null&&t.files&&this._addFiles(e.dataTransfer.files)}_onKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._input.click())}get files(){return this._files}_renderFile(e){return l`
      <li class="file-item">
        <span class="file-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </span>
        <span class="file-name">${e.name}</span>
        <span class="file-size">${rn(e.size)}</span>
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
    `}};re.styles=Zi;Ke([n()],re.prototype,"accept",2);Ke([n({type:Boolean})],re.prototype,"multiple",2);Ke([n({type:Boolean,reflect:!0})],re.prototype,"disabled",2);Ke([n()],re.prototype,"hint",2);Ke([p()],re.prototype,"_files",2);Ke([p()],re.prototype,"_dragOver",2);Ke([ze("input")],re.prototype,"_input",2);re=Ke([d("wu-file-upload")],re);const on=u`
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
`,an=u`
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
`;var sn=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,G=(e,t,a,o)=>{for(var r=o>1?void 0:o?nn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&sn(t,a,r),r};let me=class extends c{constructor(){super(...arguments),this.label="",this.description="",this.status="pending",this.index=0,this.disabled=!1}_renderIndicator(){return this.status==="complete"?l`
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
    `}};me.styles=an;G([n()],me.prototype,"label",2);G([n()],me.prototype,"description",2);G([n({reflect:!0})],me.prototype,"status",2);G([n({type:Number})],me.prototype,"index",2);G([n({type:Boolean,reflect:!0})],me.prototype,"disabled",2);me=G([d("wu-step")],me);let Qe=class extends c{constructor(){super(...arguments),this.activeStep=0,this.linear=!1,this.vertical=!1,this._steps=[]}_setup(){const e=this.shadowRoot.querySelector("slot");e&&(this._steps=e.assignedNodes({flatten:!0}).filter(t=>t instanceof me),this._updateSteps())}_updateSteps(){this._steps.forEach((e,t)=>{t<this.activeStep?e.status="complete":t===this.activeStep?e.status="active":e.status="pending",e.index=t})}firstUpdated(){this._setup()}next(){this.activeStep<this._steps.length-1&&(this.activeStep++,this._updateSteps(),this._emit())}prev(){this.activeStep>0&&(this.activeStep--,this._updateSteps(),this._emit())}_emit(){this.dispatchEvent(new CustomEvent("wu-step-change",{bubbles:!0,composed:!0,detail:{step:this.activeStep}}))}updated(e){e.has("activeStep")&&this._updateSteps()}render(){return l`
      <div class="stepper" role="list" aria-label="Progress steps">
        <slot @slotchange=${this._setup}></slot>
      </div>
    `}};Qe.styles=on;G([n({type:Number,attribute:"active-step"})],Qe.prototype,"activeStep",2);G([n({type:Boolean})],Qe.prototype,"linear",2);G([n({type:Boolean,reflect:!0})],Qe.prototype,"vertical",2);G([p()],Qe.prototype,"_steps",2);Qe=G([d("wu-stepper")],Qe);const ln=u`
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
`;var cn=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,Fe=(e,t,a,o)=>{for(var r=o>1?void 0:o?dn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&cn(t,a,r),r};let oe=class extends c{constructor(){super(...arguments),this.open=!1,this.items=[],this.placeholder="Search commands…",this.emptyMessage="No results found.",this._query="",this._selectedIndex=0}get _filtered(){if(!this._query.trim())return this.items;const e=this._query.toLowerCase();return this.items.filter(t=>{var a,o;return t.label.toLowerCase().includes(e)||((a=t.group)==null?void 0:a.toLowerCase().includes(e))||((o=t.keywords)==null?void 0:o.some(r=>r.toLowerCase().includes(e)))})}get _grouped(){const e=new Map;for(const t of this._filtered){const a=t.group??"";e.has(a)||e.set(a,[]),e.get(a).push(t)}return e}updated(e){e.has("open")&&this.open&&(this._query="",this._selectedIndex=0,requestAnimationFrame(()=>{var t;return(t=this._input)==null?void 0:t.focus()}))}_onKeydown(e){const t=this._filtered;if(e.key==="Escape"){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}));return}if(e.key==="ArrowDown")e.preventDefault(),this._selectedIndex=Math.min(this._selectedIndex+1,t.length-1);else if(e.key==="ArrowUp")e.preventDefault(),this._selectedIndex=Math.max(this._selectedIndex-1,0);else if(e.key==="Enter"){e.preventDefault();const a=t[this._selectedIndex];a&&this._select(a)}}_select(e){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{item:e}})),this.open=!1}_onBackdropClick(e){e.target.classList.contains("backdrop")&&(this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0})))}_flatIndex(e){return this._filtered.indexOf(e)}render(){const e=this._grouped,t=this._filtered,a=[];for(const[o,r]of e.entries()){o&&a.push({type:"group",label:o});for(const s of r)a.push({type:"item",item:s,idx:this._flatIndex(s)})}return l`
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
    `}};oe.styles=ln;Fe([n({type:Boolean,reflect:!0})],oe.prototype,"open",2);Fe([n({type:Array})],oe.prototype,"items",2);Fe([n()],oe.prototype,"placeholder",2);Fe([n({attribute:"empty-message"})],oe.prototype,"emptyMessage",2);Fe([p()],oe.prototype,"_query",2);Fe([p()],oe.prototype,"_selectedIndex",2);Fe([ze(".search-input")],oe.prototype,"_input",2);oe=Fe([d("wu-command")],oe);const un=u`
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
`;var pn=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,J=(e,t,a,o)=>{for(var r=o>1?void 0:o?hn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&pn(t,a,r),r};let D=class extends c{constructor(){super(...arguments),this.columns=[],this.data=[],this.totalRows=0,this.page=1,this.pageSize=10,this.showToolbar=!0,this.emptyMessage="No data to display.",this._sortKey="",this._sortDir="asc",this._filter=""}get _filteredData(){if(!this._filter.trim())return this.data;const e=this._filter.toLowerCase();return this.data.filter(t=>this.columns.some(a=>String(t[a.key]??"").toLowerCase().includes(e)))}get _sortedData(){return this._sortKey?[...this._filteredData].sort((e,t)=>{const a=String(e[this._sortKey]??""),o=String(t[this._sortKey]??""),r=a.localeCompare(o);return this._sortDir==="asc"?r:-r}):this._filteredData}get _pageData(){if(this.totalRows>this.data.length)return this._sortedData;const e=(this.page-1)*this.pageSize;return this._sortedData.slice(e,e+this.pageSize)}get _totalPages(){const e=this.totalRows||this._filteredData.length;return Math.max(1,Math.ceil(e/this.pageSize))}_sort(e,t){t&&(this._sortKey===e?this._sortDir=this._sortDir==="asc"?"desc":"asc":(this._sortKey=e,this._sortDir="asc"),this.dispatchEvent(new CustomEvent("wu-sort-change",{bubbles:!0,composed:!0,detail:{key:this._sortKey,direction:this._sortDir}})))}_onFilter(e){this._filter=e.target.value,this.page=1,this.dispatchEvent(new CustomEvent("wu-filter-change",{bubbles:!0,composed:!0,detail:{query:this._filter}}))}_goPage(e){e<1||e>this._totalPages||(this.page=e,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:this.page,pageSize:this.pageSize}})))}_onPageSize(e){this.pageSize=Number(e.target.value),this.page=1,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:this.page,pageSize:this.pageSize}}))}_pageButtons(){const e=this._totalPages,t=this.page,a=[];if(e<=7)for(let o=1;o<=e;o++)a.push(o);else{a.push(1),t>3&&a.push("dots");for(let o=Math.max(2,t-1);o<=Math.min(e-1,t+1);o++)a.push(o);t<e-2&&a.push("dots"),a.push(e)}return a}render(){const e=this._pageData,t=this.totalRows||this._filteredData.length;return l`
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
    `}};D.styles=un;J([n({type:Array})],D.prototype,"columns",2);J([n({type:Array})],D.prototype,"data",2);J([n({type:Number,attribute:"total-rows"})],D.prototype,"totalRows",2);J([n({type:Number})],D.prototype,"page",2);J([n({type:Number,attribute:"page-size"})],D.prototype,"pageSize",2);J([n({type:Boolean,attribute:"show-toolbar"})],D.prototype,"showToolbar",2);J([n({attribute:"empty-message"})],D.prototype,"emptyMessage",2);J([p()],D.prototype,"_sortKey",2);J([p()],D.prototype,"_sortDir",2);J([p()],D.prototype,"_filter",2);D=J([d("wu-data-grid")],D);const vn=u`
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
`;var wn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,To=(e,t,a,o)=>{for(var r=o>1?void 0:o?bn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&wn(t,a,r),r};let Dt=class extends c{constructor(){super(...arguments),this.sticky=!1,this.fixed=!1,this._open=!1}_toggleDrawer(){this._open=!this._open,this._open?this.setAttribute("_open",""):this.removeAttribute("_open"),this.dispatchEvent(new CustomEvent(this._open?"wu-menu-open":"wu-menu-close",{bubbles:!0,composed:!0}))}render(){return l`
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
    `}};Dt.styles=vn;To([n({type:Boolean,reflect:!0})],Dt.prototype,"sticky",2);To([n({type:Boolean,reflect:!0})],Dt.prototype,"fixed",2);To([p()],Dt.prototype,"_open",2);Dt=To([d("wu-navbar")],Dt);const gn=u`
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
`,fn=u`
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
`;var mn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,mt=(e,t,a,o)=>{for(var r=o>1?void 0:o?yn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&mn(t,a,r),r};let Bt=class extends c{constructor(){super(...arguments),this.active=!1,this.disabled=!1}_handleClick(){this.disabled||this.href||this.dispatchEvent(new CustomEvent("wu-nav",{bubbles:!0,composed:!0,detail:{item:this}}))}render(){const e=l`
      <span class="icon" aria-hidden="true"><slot name="icon"></slot></span>
      <span class="label"><slot></slot></span>
    `;return this.href?l`<a href=${f(this.href)} aria-current=${f(this.active?"page":void 0)}>${e}</a>`:l`<button class="item-btn" ?disabled=${this.disabled} @click=${this._handleClick}>${e}</button>`}};Bt.styles=fn;mt([n()],Bt.prototype,"href",2);mt([n({type:Boolean,reflect:!0})],Bt.prototype,"active",2);mt([n({type:Boolean,reflect:!0})],Bt.prototype,"disabled",2);Bt=mt([d("wu-sidebar-item")],Bt);let Or=class extends c{constructor(){super(...arguments),this.collapsed=!1,this.hideToggle=!1}_toggle(){this.collapsed=!this.collapsed,this.querySelectorAll("wu-sidebar-item").forEach(e=>{this.collapsed?e.setAttribute("collapsed",""):e.removeAttribute("collapsed")}),this.dispatchEvent(new CustomEvent("wu-collapse",{bubbles:!0,composed:!0,detail:{collapsed:this.collapsed}}))}render(){return l`
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
    `}};Or.styles=gn;mt([n({type:Boolean,reflect:!0})],Or.prototype,"collapsed",2);mt([n({type:Boolean,attribute:"hide-toggle"})],Or.prototype,"hideToggle",2);Or=mt([d("wu-sidebar")],Or);const xn=u`
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
`;var kn=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,Lo=(e,t,a,o)=>{for(var r=o>1?void 0:o?$n(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&kn(t,a,r),r};let Mt=class extends c{constructor(){super(...arguments),this.novalidate=!1,this.loading=!1,this._errors=[]}_handleSubmit(e){e.preventDefault();const t=[...Array.from(this.querySelectorAll("input, select, textarea"))];if(!this.novalidate){const o=[];if(t.forEach(r=>{if(!r.disabled&&typeof r.checkValidity=="function"&&!r.checkValidity()){const s=r.validationMessage;s&&o.push(s)}}),o.length>0){this._errors=[...new Set(o)],this.dispatchEvent(new CustomEvent("wu-invalid",{bubbles:!0,composed:!0,detail:{errors:this._errors}}));return}}this._errors=[];const a={};t.forEach(o=>{!o.name||o.disabled||(o instanceof HTMLInputElement&&(o.type==="checkbox"||o.type==="radio")?o.checked&&(a[o.name]=o.value):a[o.name]=o.value)}),this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{values:a}}))}render(){return l`
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
    `}};Mt.styles=xn;Lo([n({type:Boolean})],Mt.prototype,"novalidate",2);Lo([n({type:Boolean,reflect:!0})],Mt.prototype,"loading",2);Lo([p()],Mt.prototype,"_errors",2);Mt=Lo([d("wu-form")],Mt);const _n=u`
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
`;var zn=Object.defineProperty,Cn=Object.getOwnPropertyDescriptor,as=(e,t,a,o)=>{for(var r=o>1?void 0:o?Cn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&zn(t,a,r),r};let bo=class extends c{constructor(){super(...arguments),this.fullWidth=!1}render(){return l`
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
    `}};bo.styles=_n;as([n({type:Boolean,attribute:"full-width",reflect:!0})],bo.prototype,"fullWidth",2);bo=as([d("wu-dashboard")],bo);const jn=u`
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
`;var On=Object.defineProperty,Pn=Object.getOwnPropertyDescriptor,Ca=(e,t,a,o)=>{for(var r=o>1?void 0:o?Pn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&On(t,a,r),r};let Pr=class extends c{constructor(){super(...arguments),this.title="",this.description=""}render(){return l`
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
    `}};Pr.styles=jn;Ca([n()],Pr.prototype,"title",2);Ca([n()],Pr.prototype,"description",2);Pr=Ca([d("wu-empty-state")],Pr);const En=u`
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
`;var Sn=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,Ro=(e,t,a,o)=>{for(var r=o>1?void 0:o?Dn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Sn(t,a,r),r};const Bn={400:"Bad Request",401:"Unauthorised",403:"Access Denied",404:"Page Not Found",408:"Request Timeout",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout"},Mn={400:"The server couldn't understand the request. Please check the URL or contact support.",401:"You need to be authenticated to access this page. Please sign in and try again.",403:"You don't have permission to access this page. Contact your administrator if this is a mistake.",404:"We can't find the page you're looking for. It may have been moved or deleted.",408:"The request took too long to process. Please check your connection and try again.",500:"Something went wrong on our end. Our team has been notified.",502:"The server received an invalid response. Please try again in a moment.",503:"This service is temporarily unavailable. Please try again shortly.",504:"The server took too long to respond. Please try again in a moment."};let At=class extends c{constructor(){super(...arguments),this.code="404",this.title="",this.description=""}_resolvedTitle(){return this.title||Bn[this.code]||"An error occurred"}_resolvedDescription(){return this.description||Mn[this.code]||"An unexpected error occurred. Please try again."}render(){return l`
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
    `}};At.styles=En;Ro([n({reflect:!0})],At.prototype,"code",2);Ro([n()],At.prototype,"title",2);Ro([n()],At.prototype,"description",2);At=Ro([d("wu-error-page")],At);const An=u`
  :host {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    width: 100%;

    /* ── Input tokens ─────────────────────────────────────────── */
    --wu-search-bg:           var(--wu-color-surface);
    --wu-search-border:       var(--wu-color-border);
    --wu-search-border-focus: var(--wu-color-border-focus);
    --wu-search-color:        var(--wu-color-text);
    --wu-search-placeholder:  var(--wu-color-text-disabled);
    --wu-search-icon-color:   var(--wu-color-text-secondary);
    --wu-search-radius:       var(--wu-radius-md);
    --wu-search-height:       40px;
    --wu-search-font-size:    var(--wu-text-sm);
    --wu-search-padding-x:    var(--wu-space-4);

    /* ── File-type icon colours ────────────────────────────────── */
    --wu-search-icon-doc:    #3b82f6;
    --wu-search-icon-sheet:  #22c55e;
    --wu-search-icon-pdf:    #ef4444;
    --wu-search-icon-image:  #a855f7;
    --wu-search-icon-video:  #f59e0b;
    --wu-search-icon-user:   #0ea5e9;
    --wu-search-icon-action: #f97316;
  }

  /* ── Input row ──────────────────────────────────────────────── */
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
    z-index: 1;
  }

  .wrapper--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: transparent;
  }

  .wrapper:focus-within {
    border-color: var(--wu-search-border-focus);
    box-shadow: var(--wu-focus-ring);
    outline: none;
  }

  .wrapper--open:focus-within {
    box-shadow: none;
    border-color: var(--wu-search-border-focus);
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

  input::placeholder { color: var(--wu-search-placeholder); }

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

  /* ── Suggestion panel ───────────────────────────────────────── */
  .panel {
    position: absolute;
    top: calc(var(--wu-search-height) - 1px);
    left: 0;
    right: 0;
    background: var(--wu-color-surface-overlay, var(--wu-color-surface));
    border: 1px solid var(--wu-search-border-focus);
    border-top: none;
    border-radius: 0 0 var(--wu-search-radius) var(--wu-search-radius);
    box-shadow: var(--wu-shadow-lg);
    overflow-y: auto;
    max-height: 360px;
    z-index: 9999;
  }

  /* ── Category header ───────────────────────────────────────── */
  .category-header {
    padding: 6px 12px 4px;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
  }

  /* ── Suggestion item ───────────────────────────────────────── */
  .item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 10px;
    cursor: pointer;
    border-radius: 0;
    transition: background var(--wu-duration-fast);
    outline: none;
    user-select: none;
    -webkit-user-select: none;
  }

  .item:last-child {
    border-radius: 0 0 var(--wu-search-radius) var(--wu-search-radius);
  }

  .item:hover, .item--active {
    background: var(--wu-color-primary-subtle, var(--wu-color-surface));
  }

  .item--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* ── Icon wrapper ──────────────────────────────────────────── */
  .si-wrap {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: var(--wu-radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--wu-color-surface-raised);
  }

  .si-wrap--document { background: color-mix(in srgb, var(--wu-search-icon-doc) 12%, transparent); }
  .si-wrap--spreadsheet { background: color-mix(in srgb, var(--wu-search-icon-sheet) 12%, transparent); }
  .si-wrap--pdf { background: color-mix(in srgb, var(--wu-search-icon-pdf) 12%, transparent); }
  .si-wrap--image { background: color-mix(in srgb, var(--wu-search-icon-image) 12%, transparent); }
  .si-wrap--video { background: color-mix(in srgb, var(--wu-search-icon-video) 12%, transparent); }
  .si-wrap--user { background: color-mix(in srgb, var(--wu-search-icon-user) 12%, transparent); }
  .si-wrap--action { background: color-mix(in srgb, var(--wu-search-icon-action) 12%, transparent); }

  .si-wrap svg { width: 16px; height: 16px; }

  /* ── Image thumbnail ───────────────────────────────────────── */
  .si-img {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: var(--wu-radius-sm);
    overflow: hidden;
    background: var(--wu-color-surface-raised);
  }

  .si-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ── Item text ─────────────────────────────────────────────── */
  .item-content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .item-label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4;
  }

  mark.hl {
    background: transparent;
    color: var(--wu-color-primary);
    font-weight: var(--wu-font-semibold);
  }

  .item-desc {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3;
  }

  /* ── Trailing meta ─────────────────────────────────────────── */
  .item-meta {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 3px;
  }

  .item-badge {
    display: inline-flex;
    align-items: center;
    padding: 1px 6px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    font-family: var(--wu-font-sans);
    font-size: 10px;
    font-weight: var(--wu-font-semibold);
    white-space: nowrap;
  }

  .item-time {
    font-family: var(--wu-font-sans);
    font-size: 10px;
    color: var(--wu-color-text-disabled);
    white-space: nowrap;
  }

  /* ── Remove recent button ──────────────────────────────────── */
  .remove-recent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background: transparent;
    border: none;
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    color: var(--wu-color-text-disabled);
    padding: 0;
    opacity: 0;
    transition: opacity var(--wu-duration-fast), background var(--wu-duration-fast);
  }

  .item:hover .remove-recent { opacity: 1; }
  .remove-recent:hover { background: var(--wu-color-surface-raised); color: var(--wu-color-text); }

  /* ── Empty state ───────────────────────────────────────────── */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 24px 16px;
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    text-align: center;
  }

  .empty-state p { margin: 0; }
  .empty-state strong { color: var(--wu-color-text); }

  /* ── Panel footer ──────────────────────────────────────────── */
  .panel-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 6px 12px;
    border-top: 1px solid var(--wu-color-border);
  }

  .footer-hint {
    font-family: var(--wu-font-sans);
    font-size: 10px;
    color: var(--wu-color-text-disabled);
    display: flex;
    align-items: center;
    gap: 2px;
  }

  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 16px;
    padding: 0 3px;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: 3px;
    font-family: var(--wu-font-mono);
    font-size: 9px;
    color: var(--wu-color-text-secondary);
  }
`;var In=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,O=(e,t,a,o)=>{for(var r=o>1?void 0:o?qn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&In(t,a,r),r};let y=class extends c{constructor(){super(...arguments),this.value="",this.placeholder="Search…",this.loading=!1,this.clearable=!0,this.debounce=300,this.suggestions=[],this.maxSuggestions=8,this.showCategories=!0,this.keepRecentSearches=!1,this._value="",this._open=!1,this._activeIndex=-1,this._recentSearches=[],this._debounceTimer=null,this._uid=`wu-search-lb-${Math.random().toString(36).slice(2)}`}connectedCallback(){if(super.connectedCallback(),this._value=this.value,this.keepRecentSearches)try{const e=sessionStorage.getItem("wu-search-recent");e&&(this._recentSearches=JSON.parse(e).slice(0,5))}catch{}}updated(e){e.has("value")&&this.value!==this._value&&(this._value=this.value)}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _visible(){return this.suggestions.filter(e=>!e.disabled).slice(0,this.maxSuggestions)}get _showPanel(){return this._open?!!(this._visible.length>0||this.keepRecentSearches&&!this._value&&this._recentSearches.length>0):!1}_handleInput(e){const t=e.target;this._value=t.value,this.value=this._value,this._open=!0,this._activeIndex=-1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this._value}})),this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{value:this._value}}))},this.debounce)}_handleFocus(){this._open=!0}_handleBlur(){setTimeout(()=>{this._open=!1},160)}_handleClear(){var e,t;this._value="",this.value="",this._activeIndex=-1,this._debounceTimer&&clearTimeout(this._debounceTimer),this.dispatchEvent(new CustomEvent("wu-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{value:""}})),(t=(e=this.shadowRoot)==null?void 0:e.querySelector("input"))==null||t.focus()}_handleKeyDown(e){const t=this._visible;if(e.key==="Escape"){e.preventDefault(),this._open&&this._showPanel?this._open=!1:this._value&&this._handleClear();return}this._showPanel&&(e.key==="ArrowDown"?(e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActiveIntoView()):e.key==="ArrowUp"?(e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActiveIntoView()):e.key==="Enter"&&this._activeIndex>=0?(e.preventDefault(),this._selectItem(t[this._activeIndex])):e.key==="Tab"&&(this._open=!1))}_scrollActiveIntoView(){requestAnimationFrame(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".panel"),a=t==null?void 0:t.querySelector('[aria-selected="true"]');a==null||a.scrollIntoView({block:"nearest"})})}_selectItem(e){if(this._value=e.label,this.value=e.label,this._open=!1,this._activeIndex=-1,this.keepRecentSearches){this._recentSearches=[e.label,...this._recentSearches.filter(t=>t!==e.label)].slice(0,5);try{sessionStorage.setItem("wu-search-recent",JSON.stringify(this._recentSearches))}catch{}}this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{item:e}}))}_selectRecent(e){this._value=e,this.value=e,this._open=!1,this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{value:e}}))}_highlight(e){if(!this._value)return l`${e}`;const t=this._value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),a=new RegExp(`(${t})`,"i").exec(e);if(!a)return l`${e}`;const o=e.slice(0,a.index),r=a[1],s=e.slice(a.index+r.length);return l`${o}<mark class="hl">${r}</mark>${s}`}_typeIcon(e){switch(e){case"document":return l`
        <svg viewBox="0 0 20 20" fill="none" class="si si-document">
          <rect x="3" y="2" width="11" height="16" rx="1.5" fill="var(--wu-search-icon-doc)" opacity=".15"/>
          <rect x="3" y="2" width="11" height="16" rx="1.5" stroke="var(--wu-search-icon-doc)" stroke-width="1.4"/>
          <path d="M6 7h6M6 10h6M6 13h4" stroke="var(--wu-search-icon-doc)" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M11 2v4h3" fill="var(--wu-search-icon-doc)" opacity=".25"/>
          <path d="M11 2l3 4" stroke="var(--wu-search-icon-doc)" stroke-width="1.2"/>
        </svg>`;case"spreadsheet":return l`
        <svg viewBox="0 0 20 20" fill="none" class="si si-spreadsheet">
          <rect x="3" y="2" width="14" height="16" rx="1.5" fill="var(--wu-search-icon-sheet)" opacity=".12"/>
          <rect x="3" y="2" width="14" height="16" rx="1.5" stroke="var(--wu-search-icon-sheet)" stroke-width="1.4"/>
          <path d="M3 7h14M10 7v11M3 12h14" stroke="var(--wu-search-icon-sheet)" stroke-width="1.2"/>
        </svg>`;case"pdf":return l`
        <svg viewBox="0 0 20 20" fill="none" class="si si-pdf">
          <rect x="3" y="2" width="11" height="16" rx="1.5" fill="var(--wu-search-icon-pdf)" opacity=".15"/>
          <rect x="3" y="2" width="11" height="16" rx="1.5" stroke="var(--wu-search-icon-pdf)" stroke-width="1.4"/>
          <text x="4.5" y="12.5" font-size="5" fill="var(--wu-search-icon-pdf)" font-weight="700" font-family="sans-serif">PDF</text>
        </svg>`;case"image":return l`
        <svg viewBox="0 0 20 20" fill="none" class="si si-image">
          <rect x="2" y="4" width="16" height="12" rx="1.5" fill="var(--wu-search-icon-image)" opacity=".12"/>
          <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="var(--wu-search-icon-image)" stroke-width="1.4"/>
          <circle cx="7" cy="8.5" r="1.5" fill="var(--wu-search-icon-image)"/>
          <path d="M2 13l4-4 3 3 3-3 4 4" stroke="var(--wu-search-icon-image)" stroke-width="1.2" stroke-linejoin="round"/>
        </svg>`;case"video":return l`
        <svg viewBox="0 0 20 20" fill="none" class="si si-video">
          <rect x="2" y="4" width="12" height="12" rx="1.5" fill="var(--wu-search-icon-video)" opacity=".12"/>
          <rect x="2" y="4" width="12" height="12" rx="1.5" stroke="var(--wu-search-icon-video)" stroke-width="1.4"/>
          <path d="M14 8l4-2v8l-4-2V8Z" stroke="var(--wu-search-icon-video)" stroke-width="1.4" stroke-linejoin="round"/>
          <path d="M7 8.5l3.5 1.75L7 12V8.5Z" fill="var(--wu-search-icon-video)"/>
        </svg>`;case"user":return l`
        <svg viewBox="0 0 20 20" fill="none" class="si si-user">
          <circle cx="10" cy="7" r="3.5" fill="var(--wu-search-icon-user)" opacity=".2"/>
          <circle cx="10" cy="7" r="3.5" stroke="var(--wu-search-icon-user)" stroke-width="1.4"/>
          <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="var(--wu-search-icon-user)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`;case"recent":return l`
        <svg viewBox="0 0 20 20" fill="none" class="si si-recent">
          <circle cx="10" cy="10" r="7" stroke="var(--wu-search-icon-color)" stroke-width="1.4"/>
          <path d="M10 6v4l2.5 2.5" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`;case"action":return l`
        <svg viewBox="0 0 20 20" fill="none" class="si si-action">
          <path d="M11 3L4 11h6l-1 6 7-8h-6l1-6Z" fill="var(--wu-search-icon-action)" opacity=".2"/>
          <path d="M11 3L4 11h6l-1 6 7-8h-6l1-6Z" stroke="var(--wu-search-icon-action)" stroke-width="1.4" stroke-linejoin="round"/>
        </svg>`;case"link":return l`
        <svg viewBox="0 0 20 20" fill="none" class="si si-link">
          <path d="M8 12a4 4 0 0 0 5.66 0l2-2A4 4 0 0 0 10 4.34L9 5.35" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
          <path d="M12 8a4 4 0 0 0-5.66 0l-2 2A4 4 0 0 0 10 15.66L11 14.65" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`;default:return l`
        <svg viewBox="0 0 20 20" fill="none" class="si si-default">
          <circle cx="8.5" cy="8.5" r="5" stroke="var(--wu-search-icon-color)" stroke-width="1.4"/>
          <path d="m12 12 4 4" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`}}_renderItemIcon(e){return e.imageUrl?l`<span class="si-img"><img src=${e.imageUrl} alt="" loading="lazy"/></span>`:l`<span class="si-wrap si-wrap--${e.type??"default"}">${this._typeIcon(e.type)}</span>`}_renderCategory(e){return l`<div class="category-header" role="presentation">${e}</div>`}_renderSuggestionList(){const e=this._visible;if(e.length===0)return v;const t=[];let a="";return e.forEach((o,r)=>{this.showCategories&&o.category&&o.category!==a&&(t.push(this._renderCategory(o.category)),a=o.category);const s=this._activeIndex===r;t.push(l`
        <div
          class="item ${s?"item--active":""} ${o.disabled?"item--disabled":""}"
          role="option"
          aria-selected=${s}
          @mousedown=${i=>{i.preventDefault(),o.disabled||this._selectItem(o)}}
          @mouseover=${()=>{this._activeIndex=r}}
        >
          ${this._renderItemIcon(o)}
          <span class="item-content">
            <span class="item-label">${this._highlight(o.label)}</span>
            ${o.description?l`<span class="item-desc">${o.description}</span>`:v}
          </span>
          <span class="item-meta">
            ${o.badge?l`<span class="item-badge">${o.badge}</span>`:v}
            ${o.meta?l`<span class="item-time">${o.meta}</span>`:v}
          </span>
        </div>
      `)}),t}_renderRecentSearches(){return!this.keepRecentSearches||this._value||this._recentSearches.length===0?v:l`
      <div class="category-header">Recent</div>
      ${this._recentSearches.map(e=>l`
        <div class="item" role="option" aria-selected="false"
          @mousedown=${t=>{t.preventDefault(),this._selectRecent(e)}}>
          <span class="si-wrap si-wrap--recent">${this._typeIcon("recent")}</span>
          <span class="item-content">
            <span class="item-label">${e}</span>
          </span>
          <span class="item-meta">
            <button class="remove-recent" aria-label="Remove"
              @mousedown=${t=>{t.stopPropagation(),t.preventDefault(),this._recentSearches=this._recentSearches.filter(a=>a!==e);try{sessionStorage.setItem("wu-search-recent",JSON.stringify(this._recentSearches))}catch{}}}>
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
          </span>
        </div>
      `)}
    `}_renderEmptyState(){return!this._value||this._visible.length>0?v:l`
      <div class="empty-state">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="9" stroke="var(--wu-color-text-disabled)" stroke-width="1.5"/>
          <path d="m21 21 6 6" stroke="var(--wu-color-text-disabled)" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M11 14h6M14 11v6" stroke="var(--wu-color-text-disabled)" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <p>No results for <strong>"${this._value}"</strong></p>
      </div>
    `}_renderSearchAction(){return this._value?l`
      <div class="panel-footer">
        <span class="footer-hint">
          <kbd>↵</kbd> select &nbsp;·&nbsp; <kbd>↑↓</kbd> navigate &nbsp;·&nbsp; <kbd>Esc</kbd> close
        </span>
      </div>
    `:v}render(){const e=this.clearable&&!this.loading&&this._value.length>0,t=this._activeIndex>=0?`${this._uid}-item-${this._activeIndex}`:void 0;return l`
      <div class="wrapper ${this._showPanel?"wrapper--open":""}" part="wrapper">
        <span class="icon-search" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.5"/>
            <path d="m10 10 3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>

        <input
          part="input"
          type="text"
          autocomplete="off"
          spellcheck="false"
          .value=${this._value}
          placeholder=${this.placeholder}
          aria-label=${this.placeholder}
          role=${this.suggestions.length?"combobox":"searchbox"}
          aria-expanded=${this._showPanel?"true":"false"}
          aria-controls=${this._uid}
          aria-activedescendant=${t??""}
          @input=${this._handleInput}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @keydown=${this._handleKeyDown}
        />

        <div class="actions">
          ${this.loading?l`<span class="spinner" role="status" aria-label="Loading"></span>`:v}
          ${e?l`
                <button class="clear" type="button" aria-label="Clear search" @click=${this._handleClear}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>`:v}
        </div>
      </div>

      ${this._showPanel?l`
        <div class="panel" part="panel" id=${this._uid} role="listbox">
          ${this._renderRecentSearches()}
          ${this._renderSuggestionList()}
          ${this._renderEmptyState()}
          ${this._renderSearchAction()}
        </div>`:v}
    `}};y.styles=An;O([n()],y.prototype,"value",2);O([n()],y.prototype,"placeholder",2);O([n({type:Boolean,reflect:!0})],y.prototype,"loading",2);O([n({type:Boolean})],y.prototype,"clearable",2);O([n({type:Number})],y.prototype,"debounce",2);O([n({type:Array})],y.prototype,"suggestions",2);O([n({type:Number})],y.prototype,"maxSuggestions",2);O([n({type:Boolean})],y.prototype,"showCategories",2);O([n({type:Boolean})],y.prototype,"keepRecentSearches",2);O([p()],y.prototype,"_value",2);O([p()],y.prototype,"_open",2);O([p()],y.prototype,"_activeIndex",2);O([p()],y.prototype,"_recentSearches",2);y=O([d("wu-search")],y);const Nn=u`
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
`;var Tn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,A=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ln(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Tn(t,a,r),r};let k=class extends c{constructor(){super(...arguments),this.columns=[],this.rows=[],this.total=0,this.page=1,this.pageSize=10,this.loading=!1,this.selectable=!1,this.searchable=!1,this.emptyMessage="No data to display.",this._selected=new Set,this._sortKey=null,this._sortDir=null}_emitPageChange(e){this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:e,pageSize:this.pageSize}}))}_emitSortChange(e,t){this.dispatchEvent(new CustomEvent("wu-sort-change",{bubbles:!0,composed:!0,detail:{key:e,direction:t}}))}_emitSelectionChange(){this.dispatchEvent(new CustomEvent("wu-selection-change",{bubbles:!0,composed:!0,detail:{selected:[...this._selected]}}))}_handleSort(e){if(e.sortable){if(this._sortKey===e.key){const t=this._sortDir==="asc"?"desc":this._sortDir==="desc"?null:"asc";this._sortDir=t,t===null&&(this._sortKey=null)}else this._sortKey=e.key,this._sortDir="asc";this._emitSortChange(this._sortKey??e.key,this._sortDir)}}_handleSelectRow(e){this._selected.has(e)?this._selected.delete(e):this._selected.add(e),this._selected=new Set(this._selected),this._emitSelectionChange()}_handleSelectAll(e){const t=e.target.checked;this._selected=t?new Set(this.rows):new Set,this._emitSelectionChange()}_handleSearch(e){this.dispatchEvent(new CustomEvent("wu-search-change",{bubbles:!0,composed:!0,detail:{value:e.detail.value}}))}_sortIcon(e){if(!e.sortable)return v;const t=this._sortKey===e.key?this._sortDir:null;return l`
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
                      ${this.columns.map(w=>l`
                        <td title=${String(h[w.key]??"")}>
                          ${h[w.key]!=null?String(h[w.key]):"—"}
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
    `}};k.styles=Nn;A([n({type:Array})],k.prototype,"columns",2);A([n({type:Array})],k.prototype,"rows",2);A([n({type:Number})],k.prototype,"total",2);A([n({type:Number})],k.prototype,"page",2);A([n({type:Number,attribute:"page-size"})],k.prototype,"pageSize",2);A([n({type:Boolean,reflect:!0})],k.prototype,"loading",2);A([n({type:Boolean})],k.prototype,"selectable",2);A([n({type:Boolean})],k.prototype,"searchable",2);A([n({attribute:"empty-message"})],k.prototype,"emptyMessage",2);A([p()],k.prototype,"_selected",2);A([p()],k.prototype,"_sortKey",2);A([p()],k.prototype,"_sortDir",2);k=A([d("wu-data-table")],k);const Rn=u`
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
`,Hn=u`
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
`;var Kn=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,I=(e,t,a,o)=>{for(var r=o>1?void 0:o?Fn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Kn(t,a,r),r};let Ze=class extends c{constructor(){super(...arguments),this.value="",this.checked=!1,this.disabled=!1,this.name=""}_handleChange(){this.disabled||this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){const e=`wu-radio-${this.value}`;return l`
      <input
        id=${e}
        type="radio"
        name=${f(this.name||void 0)}
        value=${this.value}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        @change=${this._handleChange}
      />
      <label for=${e}><slot></slot></label>
    `}};Ze.styles=Hn;I([n()],Ze.prototype,"value",2);I([n({type:Boolean,reflect:!0})],Ze.prototype,"checked",2);I([n({type:Boolean,reflect:!0})],Ze.prototype,"disabled",2);I([n()],Ze.prototype,"name",2);Ze=I([d("wu-radio")],Ze);let ae=class extends c{constructor(){super(...arguments),this.name="",this.value="",this.label="",this.orientation="vertical",this.disabled=!1,this.error="",this._radios=[],this._handleRadioChange=e=>{e.target!==this&&(this.value=e.detail.value,this._syncRadios(),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}})),e.stopImmediatePropagation())}}connectedCallback(){super.connectedCallback(),this.addEventListener("wu-change",this._handleRadioChange)}firstUpdated(){const e=Array.from(this.querySelectorAll("wu-radio"));e.length&&(this._radios=e,this._syncRadios())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("wu-change",this._handleRadioChange)}_handleSlotChange(e){const t=e.target;this._radios=t.assignedElements({flatten:!0}).filter(a=>a.tagName==="WU-RADIO"),this._syncRadios()}_syncRadios(){for(const e of this._radios)e.name=this.name,e.checked=e.value===this.value,e.disabled=this.disabled||e.disabled}updated(e){(e.has("value")||e.has("disabled"))&&this._syncRadios()}render(){return l`
      <span class="legend" ?hidden=${!this.label}>${this.label}</span>
      <div
        part="group"
        class="group"
        role="radiogroup"
        aria-label=${f(this.label||void 0)}
        aria-disabled=${this.disabled?"true":"false"}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
      <span class="error" role="alert" ?hidden=${!this.error}>${this.error}</span>
    `}};ae.styles=Rn;I([n()],ae.prototype,"name",2);I([n()],ae.prototype,"value",2);I([n()],ae.prototype,"label",2);I([n({reflect:!0})],ae.prototype,"orientation",2);I([n({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);I([n()],ae.prototype,"error",2);I([p()],ae.prototype,"_radios",2);ae=I([d("wu-radio-group")],ae);const Un=u`
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
`;var Vn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,Q=(e,t,a,o)=>{for(var r=o>1?void 0:o?Yn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Vn(t,a,r),r};let B=class extends c{constructor(){super(...arguments),this.label="",this.value=0,this.min=0,this.max=100,this.step=1,this.showValue=!1,this.hint="",this.ticks=[],this.disabled=!1,this._currentValue=this.value}_handleInput(e){const t=e.target;this._currentValue=Number(t.value),this.dispatchEvent(new CustomEvent("wu-input",{bubbles:!0,composed:!0,detail:{value:this._currentValue}}))}_handleChange(e){const t=e.target;this.value=Number(t.value),this._currentValue=this.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}willUpdate(e){e.has("value")&&(this._currentValue=this.value)}updated(e){var t;if(e.has("_currentValue")||e.has("value")){const a=(t=this.shadowRoot)==null?void 0:t.querySelector('input[type="range"]');a&&(a.value=String(this._currentValue))}}render(){const e=(this._currentValue-this.min)/(this.max-this.min)*100;return l`
      <div class="label-row" ?hidden=${!this.label&&!this.showValue}>
        <label ?hidden=${!this.label}>${this.label}</label>
        <span class="value" ?hidden=${!this.showValue}>${this._currentValue}</span>
      </div>
      <div class="track-container">
        <input
          part="base"
          type="range"
          min=${this.min}
          max=${this.max}
          step=${this.step}
          ?disabled=${this.disabled}
          aria-label=${this.label}
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this._currentValue}
          style="--_pct:${e}%"
          @input=${this._handleInput}
          @change=${this._handleChange}
        />
      </div>
      <div class="tick-marks" aria-hidden="true" ?hidden=${!this.ticks.length}>
        ${this.ticks.map(t=>l`<span class="tick">${t}</span>`)}
      </div>
      <span class="hint" ?hidden=${!this.hint}>${this.hint}</span>
    `}};B.styles=Un;Q([n()],B.prototype,"label",2);Q([n({type:Number})],B.prototype,"value",2);Q([n({type:Number})],B.prototype,"min",2);Q([n({type:Number})],B.prototype,"max",2);Q([n({type:Number})],B.prototype,"step",2);Q([n({type:Boolean,attribute:"show-value"})],B.prototype,"showValue",2);Q([n()],B.prototype,"hint",2);Q([n({type:Array})],B.prototype,"ticks",2);Q([n({type:Boolean,reflect:!0})],B.prototype,"disabled",2);Q([p()],B.prototype,"_currentValue",2);B=Q([d("wu-slider")],B);const Wn=u`
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
`;var Xn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,H=(e,t,a,o)=>{for(var r=o>1?void 0:o?Gn(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Xn(t,a,r),r};function Jn(e,t,a){t/=100,a/=100;const o=t*Math.min(a,1-a),r=s=>{const i=(s+e/30)%12,h=a-o*Math.max(-1,Math.min(i-3,9-i,1));return Math.round(255*h).toString(16).padStart(2,"0")};return`#${r(0)}${r(8)}${r(4)}`}let C=class extends c{constructor(){super(...arguments),this.label="",this.value="#3b82f6",this.error="",this.disabled=!1,this._hue=220,this._sat=75,this._light=55,this._hexInput="#3b82f6",this._cursorX=180,this._cursorY=40}willUpdate(e){e.has("value")&&(this._hexInput=this.value)}connectedCallback(){super.connectedCallback(),this._hexInput=this.value}firstUpdated(){this._drawCanvas()}_drawCanvas(){const e=this._canvas;if(!e)return;const t=e.getContext("2d");if(!t)return;const a=e.width,o=e.height,r=`hsl(${this._hue}, 100%, 50%)`,s=t.createLinearGradient(0,0,a,0);s.addColorStop(0,"#fff"),s.addColorStop(1,r),t.fillStyle=s,t.fillRect(0,0,a,o);const i=t.createLinearGradient(0,0,0,o);i.addColorStop(0,"transparent"),i.addColorStop(1,"#000"),t.fillStyle=i,t.fillRect(0,0,a,o)}_onCanvasClick(e){const t=this._canvas,a=t.getBoundingClientRect(),o=Math.round((e.clientX-a.left)/a.width*t.width),r=Math.round((e.clientY-a.top)/a.height*t.height);this._cursorX=e.clientX-a.left,this._cursorY=e.clientY-a.top;const s=t.getContext("2d");if(!s)return;const i=s.getImageData(o,r,1,1).data;this._hexInput=`#${i[0].toString(16).padStart(2,"0")}${i[1].toString(16).padStart(2,"0")}${i[2].toString(16).padStart(2,"0")}`,this.value=this._hexInput,this._dispatchChange()}_onHueChange(e){this._hue=Number(e.target.value),this.value=Jn(this._hue,this._sat,this._light),this._hexInput=this.value,this.requestUpdate(),this.updateComplete.then(()=>this._drawCanvas()),this._dispatchChange()}_onHexInput(e){const t=e.target.value;this._hexInput=t,/^#[0-9a-fA-F]{6}$/.test(t)&&(this.value=t,this._dispatchChange())}_dispatchChange(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}updated(){var e,t;const a=(e=this.shadowRoot)==null?void 0:e.querySelector(".hue-slider");a&&a.value!==String(this._hue)&&(a.value=String(this._hue));const o=(t=this.shadowRoot)==null?void 0:t.querySelector(".hex-input");o&&o.value!==this._hexInput&&(o.value=this._hexInput)}render(){return l`
      <label ?hidden=${!this.label}>${this.label}</label>
      <div class="picker-wrap">
        <div class="canvas-area" @click=${this._onCanvasClick}>
          <canvas width="240" height="160"></canvas>
          <div class="cursor" style="left:${this._cursorX}px;top:${this._cursorY}px"></div>
        </div>
        <div class="hue-row">
          <input type="range" class="hue-slider" min="0" max="360" @input=${this._onHueChange} aria-label="Hue" />
          <div class="swatch" style="background:${this.value}"></div>
        </div>
        <div class="inputs">
          <input type="text" class="hex-input" @input=${this._onHexInput} placeholder="#000000" aria-label="Hex colour value" />
        </div>
      </div>
      <p class="error-msg" role="alert" ?hidden=${!this.error}>${this.error}</p>
    `}};C.styles=Wn;H([n()],C.prototype,"label",2);H([n()],C.prototype,"value",2);H([n()],C.prototype,"error",2);H([n({type:Boolean,reflect:!0})],C.prototype,"disabled",2);H([p()],C.prototype,"_hue",2);H([p()],C.prototype,"_sat",2);H([p()],C.prototype,"_light",2);H([p()],C.prototype,"_hexInput",2);H([p()],C.prototype,"_cursorX",2);H([p()],C.prototype,"_cursorY",2);H([ze("canvas")],C.prototype,"_canvas",2);C=H([d("wu-color-picker")],C);const Qn=u`
  :host { display: inline-block; }
  .rating { display: flex; gap: 2px; align-items: center; }
  .star { background: none; border: none; cursor: pointer; padding: 2px; font-size: 20px; color: var(--wu-color-border-strong); transition: color var(--wu-duration-fast); line-height: 1; }
  .star.filled { color: var(--wu-color-warning); }
  .star:hover, .star.hovered { color: var(--wu-color-warning); }
  :host([readonly]) .star { cursor: default; pointer-events: none; }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
  .label { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-left: var(--wu-space-2); }
`;var Zn=Object.defineProperty,el=Object.getOwnPropertyDescriptor,yt=(e,t,a,o)=>{for(var r=o>1?void 0:o?el(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Zn(t,a,r),r};let ye=class extends c{constructor(){super(...arguments),this.value=0,this.max=5,this.readonly=!1,this.disabled=!1,this.showLabel=!1,this._hovered=0}_setHover(e){this.readonly||(this._hovered=e)}_clearHover(){this._hovered=0}_select(e){this.readonly||this.disabled||(this.value=e,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:e}})))}render(){return l`
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
      </div>`}};ye.styles=Qn;yt([n({type:Number})],ye.prototype,"value",2);yt([n({type:Number})],ye.prototype,"max",2);yt([n({type:Boolean,reflect:!0})],ye.prototype,"readonly",2);yt([n({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);yt([n({type:Boolean})],ye.prototype,"showLabel",2);yt([p()],ye.prototype,"_hovered",2);ye=yt([d("wu-rating")],ye);const tl=u`
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
`;var rl=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,je=(e,t,a,o)=>{for(var r=o>1?void 0:o?ol(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&rl(t,a,r),r};let U=class extends c{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.labelPosition="end",this.size="md",this.value="on",this.required=!1}_handleChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.checked?this.value:""}}))}render(){const e=`wu-switch-${this.name??Math.random().toString(36).slice(2)}`,t=this.label?l`<span part="label" class="label-text">${this.label}</span>`:l`<slot></slot>`;return l`
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
    `}};U.styles=tl;je([n({type:Boolean,reflect:!0})],U.prototype,"checked",2);je([n({type:Boolean,reflect:!0})],U.prototype,"disabled",2);je([n()],U.prototype,"label",2);je([n({attribute:"label-position"})],U.prototype,"labelPosition",2);je([n({reflect:!0})],U.prototype,"size",2);je([n()],U.prototype,"name",2);je([n()],U.prototype,"value",2);je([n({type:Boolean})],U.prototype,"required",2);U=je([d("wu-switch")],U);const al=u`
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
`;var sl=Object.defineProperty,il=Object.getOwnPropertyDescriptor,Ue=(e,t,a,o)=>{for(var r=o>1?void 0:o?il(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&sl(t,a,r),r};let se=class extends c{constructor(){super(...arguments),this.length=6,this.label="",this.value="",this.mask=!1,this.error="",this.disabled=!1,this._digits=[]}willUpdate(e){if(e.has("length")||e.has("value")){const t=(this.value||"").split("").slice(0,this.length);this._digits=Array.from({length:this.length},(a,o)=>t[o]??"")}}_handleInput(e,t){const a=e.target.value.replace(/\D/g,"").slice(-1),o=[...this._digits];o[t]=a,this._digits=o,this.value=o.join(""),a&&t<this.length-1&&this._focusAt(t+1);const r=this.value.length===this.length;this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value,complete:r}})),r&&this.dispatchEvent(new CustomEvent("wu-complete",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleKeydown(e,t){e.key==="Backspace"&&!this._digits[t]&&t>0&&this._focusAt(t-1),e.key==="ArrowLeft"&&t>0&&this._focusAt(t-1),e.key==="ArrowRight"&&t<this.length-1&&this._focusAt(t+1)}_handlePaste(e){var t,a;e.preventDefault();const o=((a=(t=e.clipboardData)==null?void 0:t.getData("text"))==null?void 0:a.replace(/\D/g,"").slice(0,this.length))??"";if(!o)return;this._digits=Array.from({length:this.length},(s,i)=>o[i]??""),this.value=this._digits.join("");const r=this.value.length===this.length;r&&this._focusAt(this.length-1),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value,complete:r}})),r&&this.dispatchEvent(new CustomEvent("wu-complete",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_focusAt(e){var t,a;const o=this.shadowRoot.querySelectorAll("input");(t=o[e])==null||t.focus(),(a=o[e])==null||a.select()}updated(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll("input");t==null||t.forEach((a,o)=>{const r=this._digits[o]??"";a.value!==r&&(a.value=r)})}render(){return l`
      <label ?hidden=${!this.label}>${this.label}</label>
      <div class="pin-row" role="group" aria-label=${this.label||"PIN input"}>
        ${Array.from({length:this.length},(e,t)=>l`
          <input
            type=${this.mask?"password":"tel"}
            inputmode="numeric"
            maxlength="1"
            pattern="[0-9]"
            ?disabled=${this.disabled}
            class=${this._digits[t]?"filled":""}
            aria-label="Digit ${t+1} of ${this.length}"
            @input=${a=>this._handleInput(a,t)}
            @keydown=${a=>this._handleKeydown(a,t)}
            @paste=${this._handlePaste}
          />
        `)}
      </div>
      <span class="error-msg" role="alert" ?hidden=${!this.error}>${this.error}</span>
    `}};se.styles=al;Ue([n({type:Number})],se.prototype,"length",2);Ue([n()],se.prototype,"label",2);Ue([n()],se.prototype,"value",2);Ue([n({type:Boolean})],se.prototype,"mask",2);Ue([n()],se.prototype,"error",2);Ue([n({type:Boolean,reflect:!0})],se.prototype,"disabled",2);Ue([p()],se.prototype,"_digits",2);se=Ue([d("wu-pin-input")],se);const nl=u`
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
`;var ll=Object.defineProperty,cl=Object.getOwnPropertyDescriptor,q=(e,t,a,o)=>{for(var r=o>1?void 0:o?cl(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ll(t,a,r),r};let $=class extends c{constructor(){super(...arguments),this.label="",this.placeholder="Search…",this.value="",this.options=[],this.loading=!1,this.disabled=!1,this.error="",this.minChars=0,this._open=!1,this._query="",this._highlighted=-1,this._inputValue="",this._handleOutsideClick=e=>{this.contains(e.target)||(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}get _filtered(){if(this._query.length<this.minChars)return[];const e=this._query.toLowerCase();return this.options.filter(t=>!e||t.label.toLowerCase().includes(e)||t.value.toLowerCase().includes(e))}_handleInput(e){const t=e.target;this._query=t.value,this._inputValue=t.value,this._open=!0,this._highlighted=-1,this.dispatchEvent(new CustomEvent("wu-input",{bubbles:!0,composed:!0,detail:{query:this._query}}))}_handleKeydown(e){const t=this._filtered;e.key==="ArrowDown"?(e.preventDefault(),this._highlighted=Math.min(this._highlighted+1,t.length-1),this._open=!0):e.key==="ArrowUp"?(e.preventDefault(),this._highlighted=Math.max(this._highlighted-1,-1)):e.key==="Enter"&&this._highlighted>=0?(e.preventDefault(),this._select(t[this._highlighted])):e.key==="Escape"&&(this._open=!1)}_select(e){e.disabled||(this.value=e.value,this._inputValue=e.label,this._query="",this._open=!1,this._highlighted=-1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:e.value,label:e.label}})))}updated(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector('input[part="base"]');t&&t.value!==this._inputValue&&(t.value=this._inputValue)}render(){var e;const t=this._filtered,a="combobox-list";return l`
      <label ?hidden=${!this.label}>${this.label}</label>
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
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          @focus=${()=>{this._inputValue.length>=this.minChars&&(this._open=!0)}}
          @keydown=${this._handleKeydown}
        />
        <span class="loading-indicator" aria-hidden="true" ?hidden=${!this.loading}></span>
        <span class="chevron" aria-hidden="true" ?hidden=${this.loading}>▼</span>
        <ul
          id=${a}
          part="dropdown"
          class="dropdown"
          role="listbox"
          ?hidden=${!this._open}
        >
          ${t.length===0&&this._query&&!this.loading?l`<li class="empty">No options found</li>`:t.map((o,r)=>l`
                  <li
                    id="option-${o.value}"
                    class="option ${r===this._highlighted?"highlighted":""}"
                    role="option"
                    aria-selected=${o.value===this.value?"true":"false"}
                    aria-disabled=${o.disabled?"true":"false"}
                    @click=${()=>this._select(o)}
                  >${o.label}</li>
                `)}
        </ul>
      </div>
      <span class="error-msg" role="alert" ?hidden=${!this.error}>${this.error}</span>
    `}};$.styles=nl;q([n()],$.prototype,"label",2);q([n()],$.prototype,"placeholder",2);q([n()],$.prototype,"value",2);q([n({type:Array})],$.prototype,"options",2);q([n({type:Boolean})],$.prototype,"loading",2);q([n({type:Boolean,reflect:!0})],$.prototype,"disabled",2);q([n()],$.prototype,"error",2);q([n({type:Number,attribute:"min-chars"})],$.prototype,"minChars",2);q([p()],$.prototype,"_open",2);q([p()],$.prototype,"_query",2);q([p()],$.prototype,"_highlighted",2);q([p()],$.prototype,"_inputValue",2);$=q([d("wu-combobox")],$);const dl=u`
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
`;var ul=Object.defineProperty,pl=Object.getOwnPropertyDescriptor,Oe=(e,t,a,o)=>{for(var r=o>1?void 0:o?pl(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ul(t,a,r),r};let V=class extends c{constructor(){super(...arguments),this.label="",this.values=[],this.placeholder="Add a tag…",this.delimiter=",",this.max=1/0,this.error="",this.disabled=!1,this._inputValue=""}_emit(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{values:[...this.values]}}))}_addTag(e){const t=e.trim();!t||this.values.includes(t)||this.values.length>=this.max||(this.values=[...this.values,t],this._inputValue="",this.dispatchEvent(new CustomEvent("wu-add",{bubbles:!0,composed:!0,detail:{value:t}})),this._emit())}_removeTag(e){this.values=this.values.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("wu-remove",{bubbles:!0,composed:!0,detail:{value:e}})),this._emit()}_onKeyDown(e){const t=e.target;e.key==="Enter"||e.key===this.delimiter?(e.preventDefault(),this._addTag(t.value)):e.key==="Backspace"&&!t.value&&this.values.length&&this._removeTag(this.values[this.values.length-1])}_onInput(e){const t=e.target.value;t.endsWith(this.delimiter)?this._addTag(t.slice(0,-1)):this._inputValue=t}_focusInput(){var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector(".tag-input"))==null||t.focus()}updated(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".tag-input");t&&t.value!==this._inputValue&&(t.value=this._inputValue)}render(){return l`
      <label ?hidden=${!this.label}>${this.label}</label>
      <div class="tag-container" @click=${this._focusInput}>
        ${this.values.map(e=>l`
          <span class="tag">
            ${e}
            <button class="tag-remove" @click=${t=>{t.stopPropagation(),this._removeTag(e)}} aria-label="Remove ${e}">✕</button>
          </span>
        `)}
        <input
          class="tag-input"
          placeholder=${this.values.length?"":this.placeholder}
          ?disabled=${this.disabled}
          @keydown=${this._onKeyDown}
          @input=${this._onInput}
          aria-label=${this.label||"Tag input"}
        />
      </div>
      <p class="error-msg" role="alert" ?hidden=${!this.error}>${this.error}</p>
      <p class="hint" ?hidden=${!!this.error}>Press Enter or comma to add tags</p>
    `}};V.styles=dl;Oe([n()],V.prototype,"label",2);Oe([n({type:Array})],V.prototype,"values",2);Oe([n()],V.prototype,"placeholder",2);Oe([n()],V.prototype,"delimiter",2);Oe([n({type:Number})],V.prototype,"max",2);Oe([n()],V.prototype,"error",2);Oe([n({type:Boolean,reflect:!0})],V.prototype,"disabled",2);Oe([p()],V.prototype,"_inputValue",2);V=Oe([d("wu-tag-input")],V);const hl=u`
  :host { display: inline; }
  .num { font-variant-numeric: tabular-nums; }
`;var vl=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,lr=(e,t,a,o)=>{for(var r=o>1?void 0:o?wl(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&vl(t,a,r),r};let De=class extends c{constructor(){super(...arguments),this.value=0,this.locale=navigator.language||"en-US",this.format="decimal",this.currency="USD",this.decimals=2}_format(){const e={maximumFractionDigits:this.decimals};this.format==="currency"?(e.style="currency",e.currency=this.currency):this.format==="percent"?e.style="percent":this.format==="compact"&&(e.notation="compact");try{return new Intl.NumberFormat(this.locale,e).format(this.value)}catch{return String(this.value)}}render(){return l`<span class="num" aria-label="${this._format()}">${this._format()}</span>`}};De.styles=hl;lr([n({type:Number})],De.prototype,"value",2);lr([n()],De.prototype,"locale",2);lr([n({reflect:!0})],De.prototype,"format",2);lr([n()],De.prototype,"currency",2);lr([n({type:Number})],De.prototype,"decimals",2);De=lr([d("wu-number")],De);const bl=u`
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
`;var gl=Object.defineProperty,fl=Object.getOwnPropertyDescriptor,ue=(e,t,a,o)=>{for(var r=o>1?void 0:o?fl(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&gl(t,a,r),r};let N=class extends c{constructor(){super(...arguments),this.label="",this.placeholder="Select…",this.values=[],this.options=[],this.showSelectAll=!1,this.disabled=!1,this.error="",this._open=!1,this._search="",this._handleOutsideClick=e=>{this.contains(e.target)||(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}get _filtered(){const e=this._search.toLowerCase();return this.options.filter(t=>!e||t.label.toLowerCase().includes(e))}_toggle(e){const t=this.values.includes(e)?this.values.filter(a=>a!==e):[...this.values,e];this.values=t,this._emit()}_remove(e){this.values=this.values.filter(t=>t!==e),this._emit()}_selectAll(){const e=this.options.filter(a=>!a.disabled).map(a=>a.value),t=e.every(a=>this.values.includes(a));this.values=t?[]:e,this._emit()}_emit(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{values:[...this.values]}}))}_handleSearchInput(e){this._search=e.target.value}updated(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".search-input");t&&(t.value=this._search)}render(){const e=this.values.map(a=>this.options.find(o=>o.value===a)).filter(Boolean),t=this.options.every(a=>a.disabled||this.values.includes(a.value));return l`
      <label ?hidden=${!this.label}>${this.label}</label>
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
      <span class="error-msg" role="alert" ?hidden=${!this.error}>${this.error}</span>
    `}};N.styles=bl;ue([n()],N.prototype,"label",2);ue([n()],N.prototype,"placeholder",2);ue([n({type:Array})],N.prototype,"values",2);ue([n({type:Array})],N.prototype,"options",2);ue([n({type:Boolean,attribute:"show-select-all"})],N.prototype,"showSelectAll",2);ue([n({type:Boolean,reflect:!0})],N.prototype,"disabled",2);ue([n()],N.prototype,"error",2);ue([p()],N.prototype,"_open",2);ue([p()],N.prototype,"_search",2);N=ue([d("wu-multi-select")],N);const ml=u`
  :host { display: inline-block; }
  .stat { padding: var(--wu-space-4); background: var(--wu-color-surface-raised); border-radius: var(--wu-radius-lg); border: 1px solid var(--wu-color-border); }
  .label { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); color: var(--wu-color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--wu-space-1); }
  .value { font-family: var(--wu-font-sans); font-size: var(--wu-text-2xl); font-weight: var(--wu-font-bold); color: var(--wu-color-text); line-height: 1; }
  .delta { display: inline-flex; align-items: center; gap: 4px; font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); margin-top: var(--wu-space-1); padding: 2px 6px; border-radius: var(--wu-radius-full); }
  .delta.up { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  .delta.down { background: var(--wu-color-danger-subtle); color: var(--wu-color-danger); }
  .delta.neutral { background: var(--wu-color-surface); color: var(--wu-color-text-secondary); }
  .description { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: var(--wu-space-1); }
`;var yl=Object.defineProperty,xl=Object.getOwnPropertyDescriptor,cr=(e,t,a,o)=>{for(var r=o>1?void 0:o?xl(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&yl(t,a,r),r};let Be=class extends c{constructor(){super(...arguments),this.label="",this.value="",this.delta="",this.trend="neutral",this.description=""}render(){const e=this.trend==="up"?"↑":this.trend==="down"?"↓":"→";return l`
      <div class="stat">
        ${this.label?l`<div class="label">${this.label}</div>`:""}
        <div class="value">${this.value}</div>
        ${this.delta?l`<div class="delta ${this.trend}">${e} ${this.delta}</div>`:""}
        ${this.description?l`<div class="description">${this.description}</div>`:""}
      </div>`}};Be.styles=ml;cr([n()],Be.prototype,"label",2);cr([n()],Be.prototype,"value",2);cr([n()],Be.prototype,"delta",2);cr([n({reflect:!0})],Be.prototype,"trend",2);cr([n()],Be.prototype,"description",2);Be=cr([d("wu-stat")],Be);const kl=u`
  :host { display: block; }
  .timeline { display: flex; flex-direction: column; }
  :host([orientation="horizontal"]) .timeline { flex-direction: row; }
`,$l=u`
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
`;var _l=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,Zr=(e,t,a,o)=>{for(var r=o>1?void 0:o?zl(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&_l(t,a,r),r};let va=class extends c{render(){return l`<div class="timeline" role="list"><slot></slot></div>`}};va.styles=kl;va=Zr([d("wu-timeline")],va);let It=class extends c{constructor(){super(...arguments),this.title="",this.meta="",this.status="default"}render(){return l`
      <div class="connector"><div class="dot"></div><div class="line"></div></div>
      <div class="body" role="listitem">
        ${this.title?l`<div class="title">${this.title}</div>`:""}
        ${this.meta?l`<div class="meta">${this.meta}</div>`:""}
        <div class="content"><slot></slot></div>
      </div>`}};It.styles=$l;Zr([n()],It.prototype,"title",2);Zr([n()],It.prototype,"meta",2);Zr([n({reflect:!0})],It.prototype,"status",2);It=Zr([d("wu-timeline-item")],It);const Cl=u`
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
`;var jl=Object.defineProperty,Ol=Object.getOwnPropertyDescriptor,Ho=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ol(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&jl(t,a,r),r};let qt=class extends c{constructor(){super(...arguments),this.variant="default",this.dismissible=!1,this.disabled=!1}render(){return l`
      <span class="tag">
        <slot></slot>
        ${this.dismissible?l`<button class="dismiss" @click=${()=>this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0}))} aria-label="Remove tag">✕</button>`:""}
      </span>`}};qt.styles=Cl;Ho([n({reflect:!0})],qt.prototype,"variant",2);Ho([n({type:Boolean})],qt.prototype,"dismissible",2);Ho([n({type:Boolean,reflect:!0})],qt.prototype,"disabled",2);qt=Ho([d("wu-tag")],qt);const Pl=u`
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
`;var El=(e,t,a,o)=>{for(var r=t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=i(r)||r);return r};let wa=class extends c{render(){return l`<kbd><slot></slot></kbd>`}};wa.styles=Pl;wa=El([d("wu-kbd")],wa);const Sl=u`
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
`;var Dl=(e,t,a,o)=>{for(var r=t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=i(r)||r);return r};let ba=class extends c{render(){return l`<code><slot></slot></code>`}};ba.styles=Sl;ba=Dl([d("wu-code")],ba);const Bl=u`
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
`;var Ml=Object.defineProperty,Al=Object.getOwnPropertyDescriptor,dr=(e,t,a,o)=>{for(var r=o>1?void 0:o?Al(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ml(t,a,r),r};let Me=class extends c{constructor(){super(...arguments),this.value="",this.feedbackDuration=1500,this.label="Copy",this.successLabel="Copied!",this._copied=!1}async _handleClick(){if(this.value)try{await navigator.clipboard.writeText(this.value),this._copied=!0,this.dispatchEvent(new CustomEvent("wu-copy",{bubbles:!0,composed:!0,detail:{value:this.value}})),setTimeout(()=>{this._copied=!1},this.feedbackDuration)}catch{this.dispatchEvent(new CustomEvent("wu-error",{bubbles:!0,composed:!0}))}}render(){return l`
      <button
        part="base"
        class=${this._copied?"copied":""}
        @click=${this._handleClick}
        aria-label=${this._copied?this.successLabel:this.label}
      >
        <slot>${this._copied?this.successLabel:this.label}</slot>
      </button>
    `}};Me.styles=Bl;dr([n()],Me.prototype,"value",2);dr([n({type:Number,attribute:"feedback-duration"})],Me.prototype,"feedbackDuration",2);dr([n()],Me.prototype,"label",2);dr([n({attribute:"success-label"})],Me.prototype,"successLabel",2);dr([p()],Me.prototype,"_copied",2);Me=dr([d("wu-copy-button")],Me);const Il=u`
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
`;var ql=Object.defineProperty,Nl=Object.getOwnPropertyDescriptor,Ve=(e,t,a,o)=>{for(var r=o>1?void 0:o?Nl(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ql(t,a,r),r};let ie=class extends c{constructor(){super(...arguments),this.index=0,this.noControls=!1,this.noDots=!1,this.autoplay=!1,this.autoplayInterval=3e3,this._count=0,this._autoTimer=0}firstUpdated(){this._updateCount()}_updateCount(){this._count=this.querySelectorAll("*").length||0,this.autoplay&&this._count>0&&(this._autoTimer=window.setInterval(()=>this._next(),this.autoplayInterval))}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._autoTimer)}_goto(e){const t=Math.max(0,Math.min(e,this._count-1));this.index=t,this._track&&(this._track.style.transform=`translateX(-${t*100}%)`),this.dispatchEvent(new CustomEvent("wu-slide-change",{bubbles:!0,composed:!0,detail:{index:t}}))}_prev(){this._goto(this.index-1)}_next(){this._goto(this.index===this._count-1?0:this.index+1)}_onSlotChange(e){const t=e.target.assignedNodes({flatten:!0}).filter(a=>a.nodeType===1);this._count=t.length}render(){return l`
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
      </div>`}};ie.styles=Il;Ve([n({type:Number})],ie.prototype,"index",2);Ve([n({type:Boolean,attribute:"no-controls",reflect:!0})],ie.prototype,"noControls",2);Ve([n({type:Boolean,attribute:"no-dots",reflect:!0})],ie.prototype,"noDots",2);Ve([n({type:Boolean})],ie.prototype,"autoplay",2);Ve([n({type:Number,attribute:"autoplay-interval"})],ie.prototype,"autoplayInterval",2);Ve([p()],ie.prototype,"_count",2);Ve([ze(".track")],ie.prototype,"_track",2);ie=Ve([d("wu-carousel")],ie);const Tl=u`
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
`;var Ll=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor,ja=(e,t,a,o)=>{for(var r=o>1?void 0:o?Rl(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ll(t,a,r),r};let go=class extends c{constructor(){super(...arguments),this.type="unordered"}render(){return this.type==="ordered"?l`<ol part="base"><slot></slot></ol>`:l`<ul part="base"><slot></slot></ul>`}};go.styles=Tl;ja([n({reflect:!0})],go.prototype,"type",2);go=ja([d("wu-list")],go);let Qa=class extends c{render(){return l`<li part="item"><slot></slot></li>`}};Qa=ja([d("wu-list-item")],Qa);const Hl=u`
  :host { display: block; }
  dl { display: grid; grid-template-columns: auto 1fr; gap: var(--wu-space-1) var(--wu-space-4); margin: 0; }
  :host([layout="stacked"]) dl { grid-template-columns: 1fr; }
`,Kl=u`
  :host { display: contents; }
  dt { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text-secondary); padding: var(--wu-space-1) 0; }
`,Fl=u`
  :host { display: contents; }
  dd { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); margin: 0; padding: var(--wu-space-1) 0; }
`;var Ul=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,Ko=(e,t,a,o)=>{for(var r=o>1?void 0:o?Vl(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ul(t,a,r),r};let fo=class extends c{constructor(){super(...arguments),this.layout="side-by-side"}render(){return l`<dl><slot></slot></dl>`}};fo.styles=Hl;Ko([n({reflect:!0})],fo.prototype,"layout",2);fo=Ko([d("wu-dl")],fo);let ga=class extends c{render(){return l`<dt><slot></slot></dt>`}};ga.styles=Kl;ga=Ko([d("wu-dt")],ga);let fa=class extends c{render(){return l`<dd><slot></slot></dd>`}};fa.styles=Fl;fa=Ko([d("wu-dd")],fa);const Yl=u`
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
`;var Wl=Object.defineProperty,Xl=Object.getOwnPropertyDescriptor,Oa=(e,t,a,o)=>{for(var r=o>1?void 0:o?Xl(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Wl(t,a,r),r};const Gl={info:"ℹ",success:"✓",warning:"⚠",danger:"✕"};let Er=class extends c{constructor(){super(...arguments),this.variant="info"}render(){return l`
      <div class="callout" role="note">
        <span class="icon" aria-hidden="true">${Gl[this.variant]}</span>
        <div class="body">
          ${this.heading?l`<div class="title">${this.heading}</div>`:""}
          <slot></slot>
        </div>
      </div>
    `}};Er.styles=Yl;Oa([n({reflect:!0})],Er.prototype,"variant",2);Oa([n()],Er.prototype,"heading",2);Er=Oa([d("wu-callout")],Er);const Jl=u`
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
`;var Ql=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,xt=(e,t,a,o)=>{for(var r=o>1?void 0:o?Zl(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ql(t,a,r),r};let xe=class extends c{constructor(){super(...arguments),this.value=0,this.max=100,this.min=0,this.unit="",this.variant="default"}get _pct(){const e=this.max-this.min;return e<=0?0:Math.min(100,Math.max(0,(this.value-this.min)/e*100))}render(){const e=this._pct;return l`
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
    `}};xe.styles=Jl;xt([n({type:Number})],xe.prototype,"value",2);xt([n({type:Number})],xe.prototype,"max",2);xt([n({type:Number})],xe.prototype,"min",2);xt([n()],xe.prototype,"label",2);xt([n()],xe.prototype,"unit",2);xt([n({reflect:!0})],xe.prototype,"variant",2);xe=xt([d("wu-meter")],xe);const ec=u`
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
`;var tc=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,Fo=(e,t,a,o)=>{for(var r=o>1?void 0:o?rc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&tc(t,a,r),r};let Nt=class extends c{constructor(){super(...arguments),this.open=!1,this.label="",this.disabled=!1}_toggle(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent(this.open?"wu-open":"wu-close",{bubbles:!0,composed:!0})))}render(){return l`
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
    `}};Nt.styles=ec;Fo([n({type:Boolean,reflect:!0})],Nt.prototype,"open",2);Fo([n()],Nt.prototype,"label",2);Fo([n({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);Nt=Fo([d("wu-collapse")],Nt);const oc=u`
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
`;var ac=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,Uo=(e,t,a,o)=>{for(var r=o>1?void 0:o?sc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ac(t,a,r),r};let Tt=class extends c{constructor(){super(...arguments),this.open=!1,this.label="",this.placement="right",this._onKeydown=e=>{e.key==="Escape"&&this.open&&this._close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown)}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}))}render(){return l`
      <div class="backdrop" @click=${this._close}></div>
      <div class="drawer" role="dialog" aria-modal="true" aria-label=${this.label||"Drawer"}>
        <div class="drawer-header">
          <span class="drawer-title">${this.label}</span>
          <button class="close-btn" @click=${this._close} aria-label="Close drawer">✕</button>
        </div>
        <div class="drawer-body"><slot></slot></div>
        <div class="drawer-footer"><slot name="footer"></slot></div>
      </div>`}};Tt.styles=oc;Uo([n({type:Boolean,reflect:!0})],Tt.prototype,"open",2);Uo([n()],Tt.prototype,"label",2);Uo([n({reflect:!0})],Tt.prototype,"placement",2);Tt=Uo([d("wu-drawer")],Tt);const ic=u`
  :host { display: block; position: fixed; z-index: 400; background: var(--wu-color-surface-overlay); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-lg); box-shadow: var(--wu-shadow-lg); padding: var(--wu-space-1); min-width: 180px; }
  :host(:not([open])) { display: none; }
  .item { display: flex; align-items: center; gap: var(--wu-space-2); width: 100%; padding: var(--wu-space-2) var(--wu-space-3); border: none; background: none; border-radius: var(--wu-radius-md); cursor: pointer; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); text-align: left; }
  .item:hover { background: var(--wu-color-surface); }
  .item.danger { color: var(--wu-color-danger); }
  .item:disabled { opacity: 0.5; cursor: not-allowed; }
  .separator { height: 1px; background: var(--wu-color-border); margin: var(--wu-space-1) 0; }
`;var nc=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,eo=(e,t,a,o)=>{for(var r=o>1?void 0:o?lc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&nc(t,a,r),r};let et=class extends c{constructor(){super(...arguments),this.open=!1,this.x=0,this.y=0,this.items=[],this._close=()=>{this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0})))},this._onKey=e=>{e.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._close),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._close),document.removeEventListener("keydown",this._onKey)}_select(e){e.disabled||(this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{value:e.value}})),this._close())}render(){return l`
      <div role="menu" style="left:${this.x}px;top:${this.y}px" @click=${e=>e.stopPropagation()}>
        ${this.items.map(e=>e.separator?l`<div class="separator" role="separator"></div>`:l`<button class="item ${e.danger?"danger":""}" role="menuitem" ?disabled=${e.disabled} @click=${()=>this._select(e)}>
              ${e.icon?l`<span>${e.icon}</span>`:""} ${e.label}
            </button>`)}
      </div>`}};et.styles=ic;eo([n({type:Boolean,reflect:!0})],et.prototype,"open",2);eo([n({type:Number})],et.prototype,"x",2);eo([n({type:Number})],et.prototype,"y",2);eo([n({type:Array})],et.prototype,"items",2);et=eo([d("wu-context-menu")],et);const cc=u`
  :host { position: relative; display: inline-block; }
  .trigger-slot { display: inline-flex; }

  .dropdown-menu {
    position: absolute; z-index: 200; top: calc(100% + 4px); left: 0;
    min-width: 200px;
    background: var(--wu-color-surface-overlay, var(--wu-color-surface));
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    box-shadow: var(--wu-shadow-lg);
    padding: var(--wu-space-1);
    overflow: hidden;
  }
  .dropdown-menu[hidden] { display: none; }
  :host([placement="right"]) .dropdown-menu { left: auto; right: 0; }
  :host([placement="top"]) .dropdown-menu { top: auto; bottom: calc(100% + 4px); }

  /* ── Search input ─────────────────────────────────────────── */
  .search-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    border-bottom: 1px solid var(--wu-color-border);
    margin-bottom: 4px;
  }
  .search-icon { flex-shrink: 0; color: var(--wu-color-text-secondary); }
  .search-input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    min-width: 0;
  }
  .search-input::placeholder { color: var(--wu-color-text-disabled); }

  /* ── Group header ─────────────────────────────────────────── */
  .group-header {
    padding: 4px 10px 2px;
    font-size: 10px;
    font-weight: var(--wu-font-semibold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
  }

  /* ── Menu item ────────────────────────────────────────────── */
  .item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    width: 100%;
    padding: 7px 10px;
    border: none;
    background: none;
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    text-align: left;
    transition: background var(--wu-duration-fast);
  }

  .item:hover:not(:disabled) { background: var(--wu-color-primary-subtle, var(--wu-color-surface)); }
  .item.danger { color: var(--wu-color-danger); }
  .item.danger:hover:not(:disabled) { background: color-mix(in srgb, var(--wu-color-danger) 10%, transparent); }
  .item.checked { font-weight: var(--wu-font-medium); }
  .item:disabled { opacity: 0.5; cursor: not-allowed; }

  .item-icon { flex-shrink: 0; width: 18px; display: flex; align-items: center; justify-content: center; font-size: 14px; }
  .item-body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
  .item-label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .item-desc { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .checkmark { flex-shrink: 0; color: var(--wu-color-primary); }

  .separator { height: 1px; background: var(--wu-color-border); margin: var(--wu-space-1) 0; }

  /* ── Empty state ──────────────────────────────────────────── */
  .empty {
    padding: 10px 12px;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    text-align: center;
  }
`;var dc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,ur=(e,t,a,o)=>{for(var r=o>1?void 0:o?uc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&dc(t,a,r),r};let Ae=class extends c{constructor(){super(...arguments),this.open=!1,this.placement="left",this.items=[],this.searchable=!1,this._query="",this._outsideClick=e=>{!this.contains(e.target)&&!this.shadowRoot.contains(e.target)&&(this.open=!1)},this._onKey=e=>{e.key==="Escape"&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick),document.removeEventListener("keydown",this._onKey)}_toggle(){this.open=!this.open,this.open&&this.searchable&&(this._query="",requestAnimationFrame(()=>{var e,t;return(t=(e=this.shadowRoot)==null?void 0:e.querySelector(".search-input"))==null?void 0:t.focus()}))}_select(e){e.disabled||e.separator||(this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{value:e.value}})),this.open=!1)}render(){const e=this.searchable&&this._query?this.items.filter(o=>!o.separator&&o.label.toLowerCase().includes(this._query.toLowerCase())):this.items;let t="";const a=e.flatMap(o=>{if(o.separator)return[l`<div class="separator" role="separator"></div>`];const r=!!(o.group&&o.group!==t);r&&(t=o.group);const s="item"+(o.danger?" danger":"")+(o.checked?" checked":""),i=o.disabled===!0,h=l`<button role="menuitem" class=${s} ?disabled=${i} @click=${()=>this._select(o)}><span class="item-label">${o.label}</span></button>`;return r?[l`<div class="group-header">${o.group}</div>`,h]:[h]});return l`
      <div class="trigger-slot" @click=${this._toggle} role="button" aria-haspopup="true" aria-expanded=${this.open}>
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-menu" ?hidden=${!this.open} role="menu">
        ${this.searchable?l`
          <div class="search-wrapper">
            <svg class="search-icon" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" stroke-width="1.3"/>
              <path d="m8.5 8.5 3 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            <input
              class="search-input"
              type="text"
              placeholder="Search…"
              @input=${o=>{this._query=o.target.value}}
              @click=${o=>o.stopPropagation()}
              @keydown=${o=>{o.key==="Escape"&&(this.open=!1)}}
            />
          </div>`:v}
        ${this.items.length>0?a:l`<slot></slot>`}
        ${this.searchable&&e.length===0?l`
          <div class="empty">No results for "${this._query}"</div>`:v}
      </div>`}};Ae.styles=cc;ur([n({type:Boolean,reflect:!0})],Ae.prototype,"open",2);ur([n({reflect:!0})],Ae.prototype,"placement",2);ur([n({type:Array})],Ae.prototype,"items",2);ur([n({type:Boolean})],Ae.prototype,"searchable",2);ur([p()],Ae.prototype,"_query",2);Ae=ur([d("wu-dropdown")],Ae);const pc=u`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }
`,hc=u`
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
`;var vc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,pr=(e,t,a,o)=>{for(var r=o>1?void 0:o?wc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&vc(t,a,r),r};let ma=class extends c{render(){return l`<div role="tree"><slot></slot></div>`}};ma.styles=pc;ma=pr([d("wu-tree")],ma);let tt=class extends c{constructor(){super(...arguments),this.label="",this.expanded=!1,this.selected=!1,this.disabled=!1,this._hasChildren=!1}firstUpdated(){const e=this.shadowRoot.querySelector("slot");this._hasChildren=e.assignedElements().length>0,this.requestUpdate()}_toggle(e){e.stopPropagation(),this.expanded=!this.expanded}_select(){this.disabled||(this.selected=!0,this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{label:this.label}})))}render(){return l`
      <div class="row" role="treeitem" aria-expanded=${this._hasChildren?this.expanded:"false"} aria-selected=${this.selected} @click=${this._select}>
        ${this._hasChildren?l`<span class="toggle" @click=${this._toggle} aria-hidden="true">▶</span>`:l`<span class="spacer"></span>`}
        <span class="label">${this.label}</span>
      </div>
      <div class="children" ?hidden=${!this.expanded} role="group">
        <slot @slotchange=${()=>{this._hasChildren=this.shadowRoot.querySelector("slot").assignedElements().length>0,this.requestUpdate()}}></slot>
      </div>`}};tt.styles=hc;pr([n({reflect:!0})],tt.prototype,"label",2);pr([n({type:Boolean,reflect:!0})],tt.prototype,"expanded",2);pr([n({type:Boolean,reflect:!0})],tt.prototype,"selected",2);pr([n({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);tt=pr([d("wu-tree-item")],tt);const bc=u`
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
`,gc=u`
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
`;var fc=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,kt=(e,t,a,o)=>{for(var r=o>1?void 0:o?mc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&fc(t,a,r),r};let mo=class extends c{constructor(){super(...arguments),this.value=""}connectedCallback(){super.connectedCallback(),this.addEventListener("wu-item-click",this._handleSelect)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("wu-item-click",this._handleSelect)}_handleSelect(e){const t=e.detail.value;this.querySelectorAll("wu-bottom-nav-item").forEach(a=>{a.active=a.value===t}),this.value=t,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:t}}))}render(){return l`<nav><slot></slot></nav>`}};mo.styles=bc;kt([n()],mo.prototype,"value",2);mo=kt([d("wu-bottom-nav")],mo);let rt=class extends c{constructor(){super(...arguments),this.value="",this.label="",this.icon="",this.active=!1}_click(){this.dispatchEvent(new CustomEvent("wu-item-click",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){return l`
      <button role="tab" aria-selected=${this.active} @click=${this._click}>
        <span class="icon" aria-hidden="true">${this.icon}</span>
        <span class="label">${this.label}</span>
      </button>`}};rt.styles=gc;kt([n({reflect:!0})],rt.prototype,"value",2);kt([n()],rt.prototype,"label",2);kt([n()],rt.prototype,"icon",2);kt([n({type:Boolean,reflect:!0})],rt.prototype,"active",2);rt=kt([d("wu-bottom-nav-item")],rt);const yc=u`
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
`;var xc=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,ss=(e,t,a,o)=>{for(var r=o>1?void 0:o?kc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&xc(t,a,r),r};let yo=class extends c{constructor(){super(...arguments),this.open=!1,this._onKey=e=>{e.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKey)}_open(){this.open=!0,this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0}))}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}))}render(){return l`
      <div class="trigger-slot" @click=${()=>this.open?this._close():this._open()}>
        <slot name="trigger"></slot>
      </div>
      <div class="backdrop" ?hidden=${!this.open} @click=${this._close}></div>
      <div class="overlay" ?hidden=${!this.open} role="dialog" aria-label="Navigation menu">
        <slot></slot>
      </div>`}};yo.styles=yc;ss([n({type:Boolean,reflect:!0})],yo.prototype,"open",2);yo=ss([d("wu-mega-menu")],yo);const $c=u`
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
`;var _c=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,Pa=(e,t,a,o)=>{for(var r=o>1?void 0:o?zc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&_c(t,a,r),r};let Sr=class extends c{constructor(){super(...arguments),this.notifications=[],this._open=!1,this._outsideClick=e=>{!this.contains(e.target)&&!this.shadowRoot.contains(e.target)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick)}get _unreadCount(){return this.notifications.filter(e=>!e.read).length}_markAllRead(){this.notifications=this.notifications.map(e=>({...e,read:!0})),this.dispatchEvent(new CustomEvent("wu-mark-all-read",{bubbles:!0,composed:!0}))}_clickItem(e){e.read=!0,this.notifications=[...this.notifications],this.dispatchEvent(new CustomEvent("wu-notification-click",{bubbles:!0,composed:!0,detail:{id:e.id}}))}render(){const e=this._unreadCount;return l`
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
      </div>`}};Sr.styles=$c;Pa([n({type:Array})],Sr.prototype,"notifications",2);Pa([p()],Sr.prototype,"_open",2);Sr=Pa([d("wu-notification-center")],Sr);const Cc=u`
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
`;var jc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,Vo=(e,t,a,o)=>{for(var r=o>1?void 0:o?Oc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&jc(t,a,r),r};let Lt=class extends c{constructor(){super(...arguments),this.orientation="both",this.maxHeight="",this.maxWidth=""}render(){const e={};return this.maxHeight&&(e.maxHeight=this.maxHeight),this.maxWidth&&(e.maxWidth=this.maxWidth),l`<div style=${_(e)}><slot></slot></div>`}};Lt.styles=Cc;Vo([n({reflect:!0})],Lt.prototype,"orientation",2);Vo([n({attribute:"max-height"})],Lt.prototype,"maxHeight",2);Vo([n({attribute:"max-width"})],Lt.prototype,"maxWidth",2);Lt=Vo([d("wu-scroll-area")],Lt);const Pc=u`
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

  /* ── Divider ───────────────────────────────────────────────── */
  .divider {
    flex: 0 0 8px;
    background: var(--wu-color-border);
    cursor: col-resize;
    transition: background var(--wu-duration-fast);
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    touch-action: none; /* needed for pointer capture on touch */
  }

  :host([orientation="vertical"]) .divider { cursor: row-resize; }

  .divider:hover, .divider.active { background: var(--wu-color-primary); }

  .divider:focus-visible {
    background: var(--wu-color-primary);
    box-shadow: 0 0 0 2px var(--wu-color-surface), 0 0 0 4px var(--wu-color-border-focus);
  }

  /* Larger hit target without changing visual size */
  .divider::before {
    content: '';
    position: absolute;
    inset: 0 -4px;
  }

  /* ── Drag handle dots ──────────────────────────────────────── */
  .divider-handle {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wu-color-text-disabled);
    pointer-events: none;
    transition: color var(--wu-duration-fast);
    border-radius: var(--wu-radius-sm);
    padding: 2px;
  }

  .divider:hover .divider-handle,
  .divider.active .divider-handle {
    color: var(--wu-color-primary-fg, white);
  }

  /* ── Collapse button ───────────────────────────────────────── */
  .collapse-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    opacity: 0;
    transition: opacity var(--wu-duration-fast), background var(--wu-duration-fast);
    z-index: 2;
  }

  .divider:hover .collapse-btn,
  .divider.active .collapse-btn,
  .divider:focus-visible .collapse-btn { opacity: 1; }

  .collapse-btn:hover {
    background: var(--wu-color-primary);
    border-color: var(--wu-color-primary);
    color: white;
  }

  .collapse-btn:focus-visible {
    outline: 2px solid var(--wu-color-border-focus);
    outline-offset: 1px;
    opacity: 1;
  }
`;var Ec=Object.defineProperty,Sc=Object.getOwnPropertyDescriptor,Z=(e,t,a,o)=>{for(var r=o>1?void 0:o?Sc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ec(t,a,r),r};let M=class extends c{constructor(){super(...arguments),this.orientation="horizontal",this.initialSize=250,this.minSize=60,this.maxSize=800,this.snapThreshold=20,this.keyStep=8,this.collapsible=!1,this._size=0,this._dragging=!1,this._collapsed=!1,this._sizeBeforeCollapse=0}willUpdate(e){e.has("initialSize")&&!this._dragging&&(this._size=this.initialSize,this._sizeBeforeCollapse=this.initialSize)}firstUpdated(){this._dragging||(this._size=this.initialSize,this._sizeBeforeCollapse=this.initialSize)}connectedCallback(){super.connectedCallback(),this._size===0&&(this._size=this.initialSize,this._sizeBeforeCollapse=this.initialSize)}_onPointerDown(e){if(!e.target.closest(".collapse-btn")){e.preventDefault(),this._dragging=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}}}_onPointerMove(e){if(!this._dragging)return;const t=this.getBoundingClientRect(),a=this.orientation==="horizontal"?e.clientX-t.left:e.clientY-t.top;let o=Math.min(this.maxSize,Math.max(this.minSize,a));Math.abs(o-this.minSize)<this.snapThreshold&&(o=this.minSize),Math.abs(o-this.maxSize)<this.snapThreshold&&(o=this.maxSize);const r=this._collapsed;this._collapsed=o<=this.minSize,this._size=o,!r&&this._collapsed&&this.dispatchEvent(new CustomEvent("wu-collapse",{bubbles:!0,composed:!0,detail:{panel:"primary"}})),this.dispatchEvent(new CustomEvent("wu-resize",{bubbles:!0,composed:!0,detail:{position:this._size}}))}_onPointerUp(e){if(this._dragging){this._dragging=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}this._collapsed||(this._sizeBeforeCollapse=this._size)}}_onKeyDown(e){const t=this.orientation==="horizontal"?["ArrowRight","ArrowUp"]:["ArrowDown","ArrowRight"],a=this.orientation==="horizontal"?["ArrowLeft","ArrowDown"]:["ArrowUp","ArrowLeft"],o=e.shiftKey?this.keyStep*5:this.keyStep;t.includes(e.key)?(e.preventDefault(),this._setSize(this._size+o)):a.includes(e.key)?(e.preventDefault(),this._setSize(this._size-o)):e.key==="Home"?(e.preventDefault(),this._setSize(this.minSize)):e.key==="End"?(e.preventDefault(),this._setSize(this.maxSize)):(e.key==="Enter"||e.key===" ")&&this.collapsible&&(e.preventDefault(),this._toggleCollapse())}_setSize(e){this._size=Math.min(this.maxSize,Math.max(this.minSize,e)),this._sizeBeforeCollapse=this._size,this._collapsed=this._size<=this.minSize,this.dispatchEvent(new CustomEvent("wu-resize",{bubbles:!0,composed:!0,detail:{position:this._size}}))}_toggleCollapse(){this._collapsed?(this._size=this._sizeBeforeCollapse>this.minSize?this._sizeBeforeCollapse:this.initialSize,this._collapsed=!1,this.dispatchEvent(new CustomEvent("wu-expand",{bubbles:!0,composed:!0,detail:{panel:"primary"}}))):(this._sizeBeforeCollapse=this._size,this._size=this.minSize,this._collapsed=!0,this.dispatchEvent(new CustomEvent("wu-collapse",{bubbles:!0,composed:!0,detail:{panel:"primary"}})))}render(){const e=this.orientation==="horizontal",t=e?{width:`${this._size}px`}:{height:`${this._size}px`};return l`
      <div class="pane pane-primary" part="primary" style=${_(t)}>
        <slot name="primary"></slot>
      </div>

      <div
        class=${zs({divider:!0,active:this._dragging,"is-collapsed":this._collapsed})}
        part="divider"
        role="separator"
        tabindex="0"
        aria-orientation=${this.orientation}
        aria-label="Resize panel — use arrow keys"
        aria-valuenow=${this._size}
        aria-valuemin=${this.minSize}
        aria-valuemax=${this.maxSize}
        @pointerdown=${this._onPointerDown}
        @pointermove=${this._onPointerMove}
        @pointerup=${this._onPointerUp}
        @pointercancel=${this._onPointerUp}
        @keydown=${this._onKeyDown}
      >
        <span class="divider-handle" aria-hidden="true">
          ${e?l`<svg width="4" height="20" viewBox="0 0 4 20"><circle cx="2" cy="4" r="1.5" fill="currentColor"/><circle cx="2" cy="10" r="1.5" fill="currentColor"/><circle cx="2" cy="16" r="1.5" fill="currentColor"/></svg>`:l`<svg width="20" height="4" viewBox="0 0 20 4"><circle cx="4" cy="2" r="1.5" fill="currentColor"/><circle cx="10" cy="2" r="1.5" fill="currentColor"/><circle cx="16" cy="2" r="1.5" fill="currentColor"/></svg>`}
        </span>
        ${this.collapsible?l`
          <button class="collapse-btn" type="button"
            aria-label=${this._collapsed?"Expand panel":"Collapse panel"}
            @click=${this._toggleCollapse}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              ${e?l`<path d="${this._collapsed?"M3 1l4 4-4 4":"M7 1L3 5l4 4"}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`:l`<path d="${this._collapsed?"M1 3l4 4 4-4":"M1 7l4-4 4 4"}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`}
            </svg>
          </button>`:""}
      </div>

      <div class="pane pane-secondary" part="secondary">
        <slot name="secondary"></slot>
      </div>`}};M.styles=Pc;Z([n({reflect:!0})],M.prototype,"orientation",2);Z([n({type:Number,attribute:"initial-size"})],M.prototype,"initialSize",2);Z([n({type:Number,attribute:"min-size"})],M.prototype,"minSize",2);Z([n({type:Number,attribute:"max-size"})],M.prototype,"maxSize",2);Z([n({type:Number,attribute:"snap-threshold"})],M.prototype,"snapThreshold",2);Z([n({type:Number,attribute:"key-step"})],M.prototype,"keyStep",2);Z([n({type:Boolean})],M.prototype,"collapsible",2);Z([p()],M.prototype,"_size",2);Z([p()],M.prototype,"_dragging",2);Z([p()],M.prototype,"_collapsed",2);M=Z([d("wu-split-pane")],M);const Dc=u`
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
`;var Bc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,to=(e,t,a,o)=>{for(var r=o>1?void 0:o?Mc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Bc(t,a,r),r};let ot=class extends c{constructor(){super(...arguments),this.open=!1,this.direction="up",this.icon="+",this.actions=[],this._outsideClick=e=>{!this.contains(e.target)&&!this.shadowRoot.contains(e.target)&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick)}_clickAction(e){this.open=!1,this.dispatchEvent(new CustomEvent("wu-action-click",{bubbles:!0,composed:!0,detail:{value:e.value}}))}render(){return l`
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
      </div>`}};ot.styles=Dc;to([n({type:Boolean,reflect:!0})],ot.prototype,"open",2);to([n({reflect:!0})],ot.prototype,"direction",2);to([n()],ot.prototype,"icon",2);to([n({type:Array})],ot.prototype,"actions",2);ot=to([d("wu-speed-dial")],ot);const Ac=u`
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
`;var Ic=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,Yo=(e,t,a,o)=>{for(var r=o>1?void 0:o?qc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ic(t,a,r),r};let Rt=class extends c{constructor(){super(...arguments),this.open=!1,this.images=[],this.index=0,this._onKey=e=>{this.open&&(e.key==="Escape"&&this.close(),e.key==="ArrowRight"&&this._next(),e.key==="ArrowLeft"&&this._prev())}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKey)}close(){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}))}_prev(){this.index>0&&this.index--}_next(){this.index<this.images.length-1&&this.index++}render(){const e=this.images[this.index];return l`
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
      </div>`}};Rt.styles=Ac;Yo([n({type:Boolean,reflect:!0})],Rt.prototype,"open",2);Yo([n({type:Array})],Rt.prototype,"images",2);Yo([n({type:Number})],Rt.prototype,"index",2);Rt=Yo([d("wu-lightbox")],Rt);const Nc=u`
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
`;var Tc=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,Ea=(e,t,a,o)=>{for(var r=o>1?void 0:o?Lc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Tc(t,a,r),r};let Dr=class extends c{constructor(){super(...arguments),this.images=[],this.cols=3}_click(e){this.dispatchEvent(new CustomEvent("wu-image-click",{bubbles:!0,composed:!0,detail:{index:e}}))}render(){return l`
      <div class="grid" style=${_({"--wu-gallery-cols":String(this.cols)})}>
        ${this.images.map((e,t)=>l`
          <div class="thumb" tabindex="0" role="button" aria-label=${e.alt??`Image ${t+1}`} @click=${()=>this._click(t)} @keydown=${a=>{a.key==="Enter"&&this._click(t)}}>
            <img src=${e.src} alt=${e.alt??""} loading="lazy">
          </div>`)}
      </div>`}};Dr.styles=Nc;Ea([n({type:Array})],Dr.prototype,"images",2);Ea([n({type:Number})],Dr.prototype,"cols",2);Dr=Ea([d("wu-gallery")],Dr);const Rc=u`
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
`;var Hc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,$t=(e,t,a,o)=>{for(var r=o>1?void 0:o?Kc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Hc(t,a,r),r};let ke=class extends c{constructor(){super(...arguments),this.items=[],this.itemHeight=48,this.viewportHeight=400,this.renderItem=e=>l`<div style="height:${this.itemHeight}px;display:flex;align-items:center;padding:0 16px;border-bottom:1px solid var(--wu-color-border)">${String(e)}</div>`,this._scrollTop=0}_onScroll(){this._scrollTop=this._viewport.scrollTop;const e=Math.floor(this._scrollTop/this.itemHeight),t=Math.min(this.items.length,e+Math.ceil(this.viewportHeight/this.itemHeight)+2);this.dispatchEvent(new CustomEvent("wu-visible-change",{bubbles:!0,composed:!0,detail:{start:e,end:t}}))}render(){const e=this.items.length*this.itemHeight,t=Math.max(0,Math.floor(this._scrollTop/this.itemHeight)-2),a=Math.min(this.items.length,t+Math.ceil(this.viewportHeight/this.itemHeight)+4),o=t*this.itemHeight;return l`
      <div class="viewport" style=${_({height:`${this.viewportHeight}px`})} @scroll=${this._onScroll}>
        <div class="total" style=${_({height:`${e}px`})}>
          <div class="window" style=${_({transform:`translateY(${o}px)`})}>
            ${this.items.slice(t,a).map((r,s)=>this.renderItem(r,t+s))}
          </div>
        </div>
      </div>`}};ke.styles=Rc;$t([n({type:Array})],ke.prototype,"items",2);$t([n({type:Number,attribute:"item-height"})],ke.prototype,"itemHeight",2);$t([n({type:Number,attribute:"viewport-height"})],ke.prototype,"viewportHeight",2);$t([n()],ke.prototype,"renderItem",2);$t([p()],ke.prototype,"_scrollTop",2);$t([ze(".viewport")],ke.prototype,"_viewport",2);ke=$t([d("wu-virtual-list")],ke);const Fc=u`
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
`;var Uc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,Wo=(e,t,a,o)=>{for(var r=o>1?void 0:o?Vc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Uc(t,a,r),r};let Ht=class extends c{constructor(){super(...arguments),this.items=[],this._draggingId=null,this._overIndex=null}_dragStart(e){this._draggingId=e}_dragOver(e,t){e.preventDefault(),this._overIndex=t}_drop(e){if(this._draggingId===null)return;const t=this.items.findIndex(r=>r.id===this._draggingId);if(t===e){this._draggingId=null,this._overIndex=null;return}const a=[...this.items],[o]=a.splice(t,1);a.splice(e,0,o),this.items=a,this.dispatchEvent(new CustomEvent("wu-sort",{bubbles:!0,composed:!0,detail:{items:a,from:t,to:e}})),this._draggingId=null,this._overIndex=null}_dragEnd(){this._draggingId=null,this._overIndex=null}render(){return l`
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
      </ul>`}};Ht.styles=Fc;Wo([n({type:Array})],Ht.prototype,"items",2);Wo([p()],Ht.prototype,"_draggingId",2);Wo([p()],Ht.prototype,"_overIndex",2);Ht=Wo([d("wu-sortable")],Ht);const Yc=u`
  :host { display: flex; gap: var(--wu-space-4); overflow-x: auto; padding: var(--wu-space-2); }
`,Wc=u`
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
`;var Xc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,hr=(e,t,a,o)=>{for(var r=o>1?void 0:o?Gc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Xc(t,a,r),r};let ya=class extends c{render(){return l`<div role="region" aria-label="Kanban board"><slot></slot></div>`}};ya.styles=Yc;ya=hr([d("wu-kanban")],ya);let at=class extends c{constructor(){super(...arguments),this.columnId="",this.label="",this.cards=[],this._draggingId=null}_dragStart(e){this._draggingId=e}_dragEnd(){this._draggingId=null}_dragOver(e){e.preventDefault(),this.classList.add("drag-over")}_dragLeave(){this.classList.remove("drag-over")}_drop(e){var t;e.preventDefault(),this.classList.remove("drag-over");const a=(t=e.dataTransfer)==null?void 0:t.getData("text/plain");a&&this.dispatchEvent(new CustomEvent("wu-card-move",{bubbles:!0,composed:!0,detail:{cardId:a,toColumn:this.columnId}}))}render(){return l`
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
      </div>`}};at.styles=Wc;hr([n()],at.prototype,"columnId",2);hr([n()],at.prototype,"label",2);hr([n({type:Array})],at.prototype,"cards",2);hr([p()],at.prototype,"_draggingId",2);at=hr([d("wu-kanban-column")],at);const Jc=u`
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
`;var Qc=Object.defineProperty,Zc=Object.getOwnPropertyDescriptor,Ye=(e,t,a,o)=>{for(var r=o>1?void 0:o?Zc(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Qc(t,a,r),r};let ne=class extends c{constructor(){super(...arguments),this.users=[],this.value="",this.placeholder="Type @ to mention someone...",this.multiline=!1,this._query="",this._showList=!1,this._activeIndex=0}get _filtered(){return this._query?this.users.filter(e=>e.name.toLowerCase().includes(this._query.toLowerCase())).slice(0,8):[]}_onInput(e){const t=e.target;this.value=t.value;const a=t.value.slice(0,t.selectionStart??t.value.length).match(/@(\w*)$/);a?(this._query=a[1],this._showList=!0,this._activeIndex=0):(this._showList=!1,this._query=""),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_onKey(e){if(!this._showList)return;const t=this._filtered;e.key==="ArrowDown"?(e.preventDefault(),this._activeIndex=(this._activeIndex+1)%t.length):e.key==="ArrowUp"?(e.preventDefault(),this._activeIndex=(this._activeIndex-1+t.length)%t.length):e.key==="Enter"&&t.length?(e.preventDefault(),this._selectUser(t[this._activeIndex])):e.key==="Escape"&&(this._showList=!1)}_selectUser(e){const t=this.shadowRoot.querySelector("textarea,input").selectionStart??this.value.length,a=this.value.slice(0,t).replace(/@\w*$/,`@${e.name} `);this.value=a+this.value.slice(t),this._showList=!1,this._query="",this.dispatchEvent(new CustomEvent("wu-mention",{bubbles:!0,composed:!0,detail:{user:e}})),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_initials(e){return e.split(" ").map(t=>t[0]).join("").slice(0,2).toUpperCase()}render(){const e=this._filtered,t=this.multiline?l`<textarea .value=${this.value} placeholder=${this.placeholder} rows="3" @input=${this._onInput} @keydown=${this._onKey}></textarea>`:l`<input type="text" .value=${this.value} placeholder=${this.placeholder} @input=${this._onInput} @keydown=${this._onKey}>`;return l`
      <div class="field">
        ${t}
        <div class="mention-list" ?hidden=${!this._showList||e.length===0} role="listbox">
          ${e.map((a,o)=>l`
            <div class="mention-item ${o===this._activeIndex?"active":""}" role="option" @mousedown=${r=>{r.preventDefault(),this._selectUser(a)}}>
              ${a.avatar?l`<img class="avatar" src=${a.avatar} alt="">`:l`<div class="avatar">${this._initials(a.name)}</div>`}
              ${a.name}
            </div>`)}
        </div>
      </div>`}};ne.styles=Jc;Ye([n({type:Array})],ne.prototype,"users",2);Ye([n()],ne.prototype,"value",2);Ye([n()],ne.prototype,"placeholder",2);Ye([n({type:Boolean})],ne.prototype,"multiline",2);Ye([p()],ne.prototype,"_query",2);Ye([p()],ne.prototype,"_showList",2);Ye([p()],ne.prototype,"_activeIndex",2);ne=Ye([d("wu-mention")],ne);const ed=u`
  :host { display: inline-block; }
  svg { display: block; }
`;var td=Object.defineProperty,rd=Object.getOwnPropertyDescriptor,vr=(e,t,a,o)=>{for(var r=o>1?void 0:o?rd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&td(t,a,r),r};let Ie=class extends c{constructor(){super(...arguments),this.value="",this.size=128,this.color="#000000",this.background="#ffffff",this.moduleSize=4}_buildMatrix(){const e=Array.from({length:21},()=>Array(21).fill(!1)),t=(o,r)=>{for(let s=0;s<7;s++)for(let i=0;i<7;i++){if(o+s>=21||r+i>=21)continue;const h=s===0||s===6||i===0||i===6,w=s>=2&&s<=4&&i>=2&&i<=4;e[o+s][r+i]=h||w}};t(0,0),t(0,14),t(14,0);for(let o=8;o<13;o++)e[6][o]=o%2===0,e[o][6]=o%2===0;let a=0;for(let o=0;o<this.value.length;o++)a=a*31+this.value.charCodeAt(o)>>>0;for(let o=9;o<21;o++)for(let r=9;r<21;r++){const s=(a^o*17+r*13)&1;e[o][r]=s===1}return e}render(){if(!this.value)return l`<svg width=${this.size} height=${this.size} style="background:${this.background}"></svg>`;const e=this._buildMatrix();if(!e)return l`<div style="font-size:12px;color:red">Value too long</div>`;const t=e.length,a=this.size/t,o=e.flatMap((s,i)=>s.map((h,w)=>h?`<rect x="${w*a}" y="${i*a}" width="${a}" height="${a}" fill="${this.color}"/>`:"")).join(""),r=`<rect width="100%" height="100%" fill="${this.background}"/>${o}`;return l`
      <svg width=${this.size} height=${this.size}
        viewBox="0 0 ${this.size} ${this.size}"
        aria-label="QR code for: ${this.value}"
        role="img"
        .innerHTML=${r}
      ></svg>`}};Ie.styles=ed;vr([n()],Ie.prototype,"value",2);vr([n({type:Number})],Ie.prototype,"size",2);vr([n()],Ie.prototype,"color",2);vr([n()],Ie.prototype,"background",2);vr([n({type:Number,attribute:"module-size"})],Ie.prototype,"moduleSize",2);Ie=vr([d("wu-qr-code")],Ie);const od=u`
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
`;var ad=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,K=(e,t,a,o)=>{for(var r=o>1?void 0:o?sd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ad(t,a,r),r};let j=class extends c{constructor(){super(...arguments),this.src="",this.poster="",this.autoplay=!1,this.muted=!1,this.loop=!1,this.paused=!0,this._progress=0,this._vol=1,this._currentTime=0,this._duration=0}_toggle(){this._video.paused?this._video.play():this._video.pause()}_onPlay(){this.paused=!1,this.dispatchEvent(new CustomEvent("wu-play",{bubbles:!0,composed:!0}))}_onPause(){this.paused=!0,this.dispatchEvent(new CustomEvent("wu-pause",{bubbles:!0,composed:!0}))}_onEnded(){this.paused=!0,this.dispatchEvent(new CustomEvent("wu-ended",{bubbles:!0,composed:!0}))}_onTimeUpdate(){this._currentTime=this._video.currentTime,this._duration=this._video.duration||0,this._progress=this._duration?this._currentTime/this._duration*100:0}_seek(e){const t=e.currentTarget,a=e.offsetX/t.offsetWidth;this._video.currentTime=a*(this._video.duration||0)}_toggleMute(){this._video.muted=!this._video.muted,this._vol=this._video.muted?0:1}_formatTime(e){if(!isFinite(e))return"0:00";const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${a.toString().padStart(2,"0")}`}render(){return l`
      <div class="container">
        <video src=${this.src} poster=${this.poster} ?autoplay=${this.autoplay} ?muted=${this.muted||this._vol===0} ?loop=${this.loop}
          @play=${this._onPlay} @pause=${this._onPause} @ended=${this._onEnded} @timeupdate=${this._onTimeUpdate}>
        </video>
        <div class="controls">
          <button class="play-btn" aria-label=${this.paused?"Play":"Pause"} @click=${this._toggle}>
            ${this.paused?"▶":"⏸"}
          </button>
          <div class="progress" @click=${this._seek} role="slider" aria-label="Seek" aria-valuenow=${Math.round(this._progress)}>
            <div class="progress-fill" style=${_({width:`${this._progress}%`})}></div>
          </div>
          <span class="time">${this._formatTime(this._currentTime)} / ${this._formatTime(this._duration)}</span>
          <button class="volume-btn" aria-label=${this._vol===0?"Unmute":"Mute"} @click=${this._toggleMute}>
            ${this._vol===0?"🔇":"🔊"}
          </button>
        </div>
      </div>`}};j.styles=od;K([n()],j.prototype,"src",2);K([n()],j.prototype,"poster",2);K([n({type:Boolean})],j.prototype,"autoplay",2);K([n({type:Boolean})],j.prototype,"muted",2);K([n({type:Boolean})],j.prototype,"loop",2);K([n({reflect:!0,type:Boolean})],j.prototype,"paused",2);K([p()],j.prototype,"_progress",2);K([p()],j.prototype,"_vol",2);K([p()],j.prototype,"_currentTime",2);K([p()],j.prototype,"_duration",2);K([ze("video")],j.prototype,"_video",2);j=K([d("wu-video")],j);const id=u`
  :host {
    display: block;
    --wu-container-max-width: 64rem;
    --wu-container-padding-inline: var(--wu-space-4);
  }

  :host([size='sm']) {
    --wu-container-max-width: 40rem;
  }

  :host([size='md']) {
    --wu-container-max-width: 48rem;
  }

  :host([size='xl']) {
    --wu-container-max-width: 80rem;
  }

  :host([size='full']) {
    --wu-container-max-width: 100%;
  }

  :host([flush]) {
    --wu-container-padding-inline: 0px;
  }

  .base {
    box-sizing: border-box;
    width: min(100%, var(--wu-container-max-width));
    margin-inline: auto;
    padding-inline: var(--wu-container-padding-inline);
  }
`;var nd=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,Sa=(e,t,a,o)=>{for(var r=o>1?void 0:o?ld(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&nd(t,a,r),r};let Br=class extends c{constructor(){super(...arguments),this.size="lg",this.flush=!1}render(){return l`<div part="base" class="base"><slot></slot></div>`}};Br.styles=id;Sa([n({reflect:!0})],Br.prototype,"size",2);Sa([n({type:Boolean,reflect:!0})],Br.prototype,"flush",2);Br=Sa([d("wu-container")],Br);const cd=u`
  :host {
    display: block;
    --wu-stack-gap: var(--wu-space-4);
    --wu-stack-direction: column;
  }

  :host([gap='xs']) {
    --wu-stack-gap: var(--wu-space-1);
  }

  :host([gap='sm']) {
    --wu-stack-gap: var(--wu-space-2);
  }

  :host([gap='lg']) {
    --wu-stack-gap: var(--wu-space-6);
  }

  :host([gap='xl']) {
    --wu-stack-gap: var(--wu-space-8);
  }

  :host([direction='horizontal']) {
    --wu-stack-direction: row;
  }

  .stack {
    display: flex;
    flex-direction: var(--wu-stack-direction);
    gap: var(--wu-stack-gap);
    align-items: var(--wu-stack-align, stretch);
    justify-content: var(--wu-stack-justify, flex-start);
  }
`;var dd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,ro=(e,t,a,o)=>{for(var r=o>1?void 0:o?ud(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&dd(t,a,r),r};let st=class extends c{constructor(){super(...arguments),this.direction="vertical",this.gap="md",this.align="stretch",this.justify="start"}get _alignValue(){switch(this.align){case"start":return"flex-start";case"center":return"center";case"end":return"flex-end";default:return"stretch"}}get _justifyValue(){switch(this.justify){case"center":return"center";case"end":return"flex-end";case"between":return"space-between";case"around":return"space-around";default:return"flex-start"}}render(){return l`
      <div
        part="base"
        class="stack"
        style=${_({"--wu-stack-align":this._alignValue,"--wu-stack-justify":this._justifyValue})}
      >
        <slot></slot>
      </div>
    `}};st.styles=cd;ro([n({reflect:!0})],st.prototype,"direction",2);ro([n({reflect:!0})],st.prototype,"gap",2);ro([n()],st.prototype,"align",2);ro([n()],st.prototype,"justify",2);st=ro([d("wu-stack")],st);const pd=u`
  :host {
    display: block;
    --wu-cluster-gap: var(--wu-space-3);
  }

  :host([gap='xs']) {
    --wu-cluster-gap: var(--wu-space-1);
  }

  :host([gap='sm']) {
    --wu-cluster-gap: var(--wu-space-2);
  }

  :host([gap='md']) {
    --wu-cluster-gap: var(--wu-space-4);
  }

  :host([gap='lg']) {
    --wu-cluster-gap: var(--wu-space-6);
  }

  :host([gap='xl']) {
    --wu-cluster-gap: var(--wu-space-8);
  }

  .cluster {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wu-cluster-gap);
    align-items: var(--wu-cluster-align, center);
    justify-content: var(--wu-cluster-justify, flex-start);
  }
`;var hd=Object.defineProperty,vd=Object.getOwnPropertyDescriptor,Xo=(e,t,a,o)=>{for(var r=o>1?void 0:o?vd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&hd(t,a,r),r};let Kt=class extends c{constructor(){super(...arguments),this.gap="sm",this.align="center",this.justify="start"}get _alignValue(){switch(this.align){case"start":return"flex-start";case"center":return"center";case"end":return"flex-end";default:return"stretch"}}get _justifyValue(){switch(this.justify){case"center":return"center";case"end":return"flex-end";case"between":return"space-between";case"around":return"space-around";default:return"flex-start"}}render(){return l`
      <div
        part="base"
        class="cluster"
        style=${_({"--wu-cluster-align":this._alignValue,"--wu-cluster-justify":this._justifyValue})}
      >
        <slot></slot>
      </div>
    `}};Kt.styles=pd;Xo([n({reflect:!0})],Kt.prototype,"gap",2);Xo([n()],Kt.prototype,"align",2);Xo([n()],Kt.prototype,"justify",2);Kt=Xo([d("wu-cluster")],Kt);const wd=u`
  :host {
    display: block;
    --wu-grid-gap: var(--wu-space-4);
  }

  :host([gap='xs']) {
    --wu-grid-gap: var(--wu-space-1);
  }

  :host([gap='sm']) {
    --wu-grid-gap: var(--wu-space-2);
  }

  :host([gap='lg']) {
    --wu-grid-gap: var(--wu-space-6);
  }

  :host([gap='xl']) {
    --wu-grid-gap: var(--wu-space-8);
  }

  .grid {
    display: grid;
    gap: var(--wu-grid-gap);
    grid-template-columns: repeat(var(--wu-grid-columns, 3), minmax(0, 1fr));
  }

  :host([auto-fit]) .grid {
    grid-template-columns: repeat(auto-fit, minmax(var(--wu-grid-min-item-width, 16rem), 1fr));
  }
`;var bd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,oo=(e,t,a,o)=>{for(var r=o>1?void 0:o?gd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&bd(t,a,r),r};let it=class extends c{constructor(){super(...arguments),this.columns=3,this.gap="md",this.minItemWidth="16rem",this.autoFit=!1}render(){return l`
      <div
        part="base"
        class="grid"
        style=${_({"--wu-grid-columns":String(this.columns),"--wu-grid-min-item-width":this.minItemWidth})}
      >
        <slot></slot>
      </div>
    `}};it.styles=wd;oo([n({type:Number,reflect:!0})],it.prototype,"columns",2);oo([n({reflect:!0})],it.prototype,"gap",2);oo([n({attribute:"min-item-width"})],it.prototype,"minItemWidth",2);oo([n({type:Boolean,reflect:!0,attribute:"auto-fit"})],it.prototype,"autoFit",2);it=oo([d("wu-grid")],it);const fd=u`
  :host {
    display: block;
    --wu-masonry-gap: var(--wu-space-4);
  }

  :host([gap='xs']) { --wu-masonry-gap: var(--wu-space-1); }
  :host([gap='sm']) { --wu-masonry-gap: var(--wu-space-2); }
  :host([gap='lg']) { --wu-masonry-gap: var(--wu-space-6); }
  :host([gap='xl']) { --wu-masonry-gap: var(--wu-space-8); }

  .masonry {
    columns: var(--wu-masonry-columns, 3);
    column-gap: var(--wu-masonry-gap);
  }

  ::slotted(*) {
    break-inside: avoid;
    margin-bottom: var(--wu-masonry-gap);
    display: block;
  }
`;var md=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,Da=(e,t,a,o)=>{for(var r=o>1?void 0:o?yd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&md(t,a,r),r};let Mr=class extends c{constructor(){super(...arguments),this.columns=3,this.gap="md"}render(){return l`
      <div
        part="base"
        class="masonry"
        style=${_({"--wu-masonry-columns":String(this.columns)})}
      >
        <slot></slot>
      </div>
    `}};Mr.styles=fd;Da([n({type:Number,reflect:!0})],Mr.prototype,"columns",2);Da([n({reflect:!0})],Mr.prototype,"gap",2);Mr=Da([d("wu-masonry")],Mr);const xd=u`
  :host {
    display: block;
  }

  .aspect-ratio {
    aspect-ratio: var(--wu-aspect-ratio-ratio, 16 / 9);
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  ::slotted(img),
  ::slotted(video),
  ::slotted(iframe) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border: none;
  }
`;var kd=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,is=(e,t,a,o)=>{for(var r=o>1?void 0:o?$d(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&kd(t,a,r),r};let xo=class extends c{constructor(){super(...arguments),this.ratio="16/9"}render(){return l`
      <div
        part="base"
        class="aspect-ratio"
        style=${_({"--wu-aspect-ratio-ratio":this.ratio})}
      >
        <slot></slot>
      </div>
    `}};xo.styles=xd;is([n({reflect:!0})],xo.prototype,"ratio",2);xo=is([d("wu-aspect-ratio")],xo);const _d=u`
  :host {
    display: block;
  }

  .sticky {
    position: sticky;
    top: var(--wu-sticky-top, 0);
    bottom: var(--wu-sticky-bottom, auto);
    z-index: var(--wu-sticky-z, 10);
  }
`;var zd=Object.defineProperty,Cd=Object.getOwnPropertyDescriptor,Go=(e,t,a,o)=>{for(var r=o>1?void 0:o?Cd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&zd(t,a,r),r};let Ft=class extends c{constructor(){super(...arguments),this.top="0",this.bottom="",this.zIndex=10}render(){return l`
      <div
        part="base"
        class="sticky"
        style=${_({"--wu-sticky-top":this.top||"0","--wu-sticky-bottom":this.bottom||"","--wu-sticky-z":String(this.zIndex)})}
      >
        <slot></slot>
      </div>
    `}};Ft.styles=_d;Go([n({reflect:!0})],Ft.prototype,"top",2);Go([n({reflect:!0})],Ft.prototype,"bottom",2);Go([n({type:Number,reflect:!0,attribute:"z-index"})],Ft.prototype,"zIndex",2);Ft=Go([d("wu-sticky")],Ft);const jd=u`
  :host {
    display: block;
    flex: 1 1 auto;
  }

  :host([size='xs']) { flex: 0 0 var(--wu-space-1); width: var(--wu-space-1); height: var(--wu-space-1); }
  :host([size='sm']) { flex: 0 0 var(--wu-space-2); width: var(--wu-space-2); height: var(--wu-space-2); }
  :host([size='md']) { flex: 0 0 var(--wu-space-4); width: var(--wu-space-4); height: var(--wu-space-4); }
  :host([size='lg']) { flex: 0 0 var(--wu-space-6); width: var(--wu-space-6); height: var(--wu-space-6); }
  :host([size='xl']) { flex: 0 0 var(--wu-space-8); width: var(--wu-space-8); height: var(--wu-space-8); }
  :host([size='auto']) { flex: 1 1 auto; }

  span {
    display: block;
    width: 100%;
    height: 100%;
  }
`;var Od=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,ns=(e,t,a,o)=>{for(var r=o>1?void 0:o?Pd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Od(t,a,r),r};let ko=class extends c{constructor(){super(...arguments),this.size="auto"}render(){return l`<span part="base" aria-hidden="true"></span>`}};ko.styles=jd;ns([n({reflect:!0})],ko.prototype,"size",2);ko=ns([d("wu-spacer")],ko);const Ed=u`
  :host {
    display: contents;
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;var Sd=(e,t,a,o)=>{for(var r=t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=i(r)||r);return r};let xa=class extends c{render(){return l`<span part="base"><slot></slot></span>`}};xa.styles=Ed;xa=Sd([d("wu-visually-hidden")],xa);const Dd=u`
  :host {
    display: block;
  }

  /* print-only: invisible on screen, visible when printing */
  :host([print-only]) {
    display: none;
  }

  @media print {
    :host([print-only]) {
      display: block !important;
    }

    :host([no-print]) {
      display: none !important;
    }
  }
`;var Bd=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,Ba=(e,t,a,o)=>{for(var r=o>1?void 0:o?Md(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Bd(t,a,r),r};let Ar=class extends c{constructor(){super(...arguments),this.printOnly=!1,this.noPrint=!1}render(){return l`<div part="base"><slot></slot></div>`}};Ar.styles=Dd;Ba([n({type:Boolean,reflect:!0,attribute:"print-only"})],Ar.prototype,"printOnly",2);Ba([n({type:Boolean,reflect:!0,attribute:"no-print"})],Ar.prototype,"noPrint",2);Ar=Ba([d("wu-print-area")],Ar);const Ad=u`
  :host {
    display: block;
    --wu-prose-max-width: 65ch;
    --wu-prose-font-size: var(--wu-text-base);
    --wu-prose-line-height: var(--wu-leading-relaxed);
  }

  :host([size='sm']) { --wu-prose-font-size: var(--wu-text-sm); }
  :host([size='lg']) { --wu-prose-font-size: var(--wu-text-lg); }

  .prose {
    max-width: var(--wu-prose-max-width);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-prose-font-size);
    line-height: var(--wu-prose-line-height);
    color: var(--wu-color-text);
  }

  .prose ::slotted(p) {
    margin: 0 0 var(--wu-space-4);
  }

  .prose ::slotted(h2),
  .prose ::slotted(h3),
  .prose ::slotted(h4) {
    font-weight: var(--wu-font-semibold);
    margin: var(--wu-space-6) 0 var(--wu-space-2);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-tight);
  }

  .prose ::slotted(ul),
  .prose ::slotted(ol) {
    margin: 0 0 var(--wu-space-4);
    padding-left: var(--wu-space-6);
  }

  .prose ::slotted(blockquote) {
    border-left: 4px solid var(--wu-color-primary);
    margin: var(--wu-space-4) 0;
    padding: var(--wu-space-2) var(--wu-space-4);
    color: var(--wu-color-text-secondary);
    font-style: italic;
  }

  .prose ::slotted(code) {
    font-family: var(--wu-font-mono);
    font-size: 0.9em;
    background: var(--wu-color-surface);
    padding: 0.1em 0.3em;
    border-radius: var(--wu-radius-sm);
    border: 1px solid var(--wu-color-border);
  }

  .prose ::slotted(pre) {
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-4);
    overflow-x: auto;
    margin: 0 0 var(--wu-space-4);
  }

  .prose ::slotted(a) {
    color: var(--wu-color-primary);
    text-decoration: underline;
  }

  .prose ::slotted(hr) {
    border: none;
    border-top: 1px solid var(--wu-color-border);
    margin: var(--wu-space-6) 0;
  }
`;var Id=Object.defineProperty,qd=Object.getOwnPropertyDescriptor,ls=(e,t,a,o)=>{for(var r=o>1?void 0:o?qd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Id(t,a,r),r};let $o=class extends c{constructor(){super(...arguments),this.size="base"}render(){return l`<div part="base" class="prose"><slot></slot></div>`}};$o.styles=Ad;ls([n({reflect:!0})],$o.prototype,"size",2);$o=ls([d("wu-prose")],$o);const Nd=u`
  :host {
    display: block;
  }

  .heading {
    font-family: var(--wu-font-sans);
    font-weight: var(--wu-font-semibold);
    line-height: var(--wu-leading-tight);
    color: var(--wu-color-text);
    margin: 0;
  }

  /* Auto sizes by semantic level */
  .size-level-1 { font-size: var(--wu-text-2xl); }
  .size-level-2 { font-size: var(--wu-text-xl); }
  .size-level-3 { font-size: var(--wu-text-lg); }
  .size-level-4 { font-size: var(--wu-text-base); }
  .size-level-5 { font-size: var(--wu-text-sm); }
  .size-level-6 { font-size: var(--wu-text-xs); }

  /* Explicit sizes */
  .size-xs  { font-size: var(--wu-text-xs); }
  .size-sm  { font-size: var(--wu-text-sm); }
  .size-md  { font-size: var(--wu-text-base); }
  .size-lg  { font-size: var(--wu-text-lg); }
  .size-xl  { font-size: var(--wu-text-xl); }
  .size-2xl { font-size: var(--wu-text-2xl); }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;var Td=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,Jo=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ld(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Td(t,a,r),r};let Ut=class extends c{constructor(){super(...arguments),this.level=2,this.size="auto",this.truncate=!1}get sizeClass(){return this.size==="auto"?`level-${this.level}`:this.size}render(){const e=`heading size-${this.sizeClass}${this.truncate?" truncate":""}`;switch(this.level){case 1:return l`<h1 part="base" class=${e}><slot></slot></h1>`;case 3:return l`<h3 part="base" class=${e}><slot></slot></h3>`;case 4:return l`<h4 part="base" class=${e}><slot></slot></h4>`;case 5:return l`<h5 part="base" class=${e}><slot></slot></h5>`;case 6:return l`<h6 part="base" class=${e}><slot></slot></h6>`;default:return l`<h2 part="base" class=${e}><slot></slot></h2>`}}};Ut.styles=Nd;Jo([n({type:Number,reflect:!0})],Ut.prototype,"level",2);Jo([n({reflect:!0})],Ut.prototype,"size",2);Jo([n({type:Boolean,reflect:!0})],Ut.prototype,"truncate",2);Ut=Jo([d("wu-heading")],Ut);const Rd=u`
  :host { display: inline; }

  .text {
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    font-size: inherit;
    line-height: inherit;
  }

  /* Variant colours */
  :host([variant='secondary']) .text { color: var(--wu-color-text-secondary); }
  :host([variant='muted'])     .text { color: var(--wu-color-text-disabled); }
  :host([variant='danger'])    .text { color: var(--wu-color-danger); }
  :host([variant='success'])   .text { color: var(--wu-color-success); }
  :host([variant='warning'])   .text { color: var(--wu-color-warning); }
  :host([variant='primary'])   .text { color: var(--wu-color-primary); }

  /* Sizes */
  :host([size='xs'])   .text { font-size: var(--wu-text-xs); }
  :host([size='sm'])   .text { font-size: var(--wu-text-sm); }
  :host([size='base']) .text { font-size: var(--wu-text-base); }
  :host([size='lg'])   .text { font-size: var(--wu-text-lg); }
  :host([size='xl'])   .text { font-size: var(--wu-text-xl); }

  /* Weights */
  :host([weight='medium'])   .text { font-weight: var(--wu-font-medium); }
  :host([weight='semibold']) .text { font-weight: var(--wu-font-semibold); }
  :host([weight='bold'])     .text { font-weight: var(--wu-font-bold); }

  /* Modifiers */
  :host([italic]) .text { font-style: italic; }
  :host([mono])   .text { font-family: var(--wu-font-mono); }
`;var Hd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,wr=(e,t,a,o)=>{for(var r=o>1?void 0:o?Kd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Hd(t,a,r),r};let qe=class extends c{constructor(){super(...arguments),this.variant="default",this.size="base",this.weight="normal",this.italic=!1,this.mono=!1}render(){return l`<span part="base" class="text"><slot></slot></span>`}};qe.styles=Rd;wr([n({reflect:!0})],qe.prototype,"variant",2);wr([n({reflect:!0})],qe.prototype,"size",2);wr([n({reflect:!0})],qe.prototype,"weight",2);wr([n({type:Boolean,reflect:!0})],qe.prototype,"italic",2);wr([n({type:Boolean,reflect:!0})],qe.prototype,"mono",2);qe=wr([d("wu-text")],qe);const Fd=u`
  :host { display: inline-block; }

  label {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([disabled]) label {
    color: var(--wu-color-text-disabled);
    cursor: not-allowed;
  }

  .required {
    color: var(--wu-color-danger);
    font-weight: var(--wu-font-bold);
    line-height: 1;
  }
`;var Ud=Object.defineProperty,Vd=Object.getOwnPropertyDescriptor,Qo=(e,t,a,o)=>{for(var r=o>1?void 0:o?Vd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ud(t,a,r),r};let Vt=class extends c{constructor(){super(...arguments),this.for="",this.required=!1,this.disabled=!1}render(){return l`
      <label part="base" for=${f(this.for||void 0)}>
        <slot></slot>
        ${this.required?l`<span class="required" aria-hidden="true">*</span>`:""}
      </label>
    `}};Vt.styles=Fd;Qo([n()],Vt.prototype,"for",2);Qo([n({type:Boolean,reflect:!0})],Vt.prototype,"required",2);Qo([n({type:Boolean,reflect:!0})],Vt.prototype,"disabled",2);Vt=Qo([d("wu-label")],Vt);const Yd=u`
  :host { display: inline; }

  a {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    font-family: inherit;
    font-size: inherit;
    color: var(--wu-color-primary);
    text-decoration: none;
    border-radius: var(--wu-radius-sm);
    transition: color var(--wu-duration-fast) var(--wu-ease-default),
                text-decoration-color var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
  }

  a:hover {
    color: var(--wu-color-primary-hover);
  }

  a:focus-visible {
    box-shadow: var(--wu-focus-ring);
  }

  :host([underline='always']) a,
  :host([underline='hover']) a:hover {
    text-decoration: underline;
  }

  :host([underline='never']) a {
    text-decoration: none !important;
  }

  :host([variant='subtle']) a {
    color: var(--wu-color-text-secondary);
  }

  :host([variant='subtle']) a:hover {
    color: var(--wu-color-text);
  }

  :host([variant='danger']) a {
    color: var(--wu-color-danger);
  }

  .external-icon {
    flex-shrink: 0;
    opacity: 0.7;
  }
`;var Wd=Object.defineProperty,Xd=Object.getOwnPropertyDescriptor,br=(e,t,a,o)=>{for(var r=o>1?void 0:o?Xd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Wd(t,a,r),r};let Ne=class extends c{constructor(){super(...arguments),this.href="",this.external=!1,this.download="",this.variant="default",this.underline="hover"}render(){var e;return l`
      <a
        part="base"
        href=${this.href}
        ?download=${!!this.download}
        target=${f(this.external?"_blank":void 0)}
        rel=${f(this.external?"noopener noreferrer":void 0)}
        aria-label=${f(this.external?`${(e=this.textContent)==null?void 0:e.trim()} (opens in new tab)`:void 0)}
      >
        <slot name="prefix"></slot>
        <slot></slot>
        ${this.external?l`<svg class="external-icon" aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`:""}
      </a>
    `}};Ne.styles=Yd;br([n()],Ne.prototype,"href",2);br([n({type:Boolean,reflect:!0})],Ne.prototype,"external",2);br([n()],Ne.prototype,"download",2);br([n({reflect:!0})],Ne.prototype,"variant",2);br([n({reflect:!0})],Ne.prototype,"underline",2);Ne=br([d("wu-link")],Ne);const Gd=u`
  :host { display: inline; }

  mark {
    background: color-mix(in srgb, var(--wu-color-warning) 25%, transparent);
    color: inherit;
    border-radius: 2px;
    padding: 0.05em 0.2em;
  }

  :host([variant='success']) mark {
    background: color-mix(in srgb, var(--wu-color-success) 20%, transparent);
  }

  :host([variant='danger']) mark {
    background: color-mix(in srgb, var(--wu-color-danger) 20%, transparent);
  }

  :host([variant='info']) mark {
    background: color-mix(in srgb, var(--wu-color-primary) 20%, transparent);
  }
`;var Jd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,cs=(e,t,a,o)=>{for(var r=o>1?void 0:o?Qd(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Jd(t,a,r),r};let _o=class extends c{constructor(){super(...arguments),this.variant="default"}render(){return l`<mark part="base"><slot></slot></mark>`}};_o.styles=Gd;cs([n({reflect:!0})],_o.prototype,"variant",2);_o=cs([d("wu-mark")],_o);const Zd=u`
  :host { display: block; }

  .blockquote-figure {
    margin: 0;
    padding: 0;
  }

  blockquote {
    margin: 0;
    padding: var(--wu-space-4) var(--wu-space-6);
    border-left: 4px solid var(--wu-color-primary);
    background: var(--wu-color-primary-subtle);
    border-radius: 0 var(--wu-radius-md) var(--wu-radius-md) 0;
    font-size: var(--wu-text-base);
    font-style: italic;
    line-height: var(--wu-leading-relaxed);
    color: var(--wu-color-text);
  }

  .attribution {
    margin-top: var(--wu-space-2);
    padding-left: var(--wu-space-6);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    font-style: normal;
    font-weight: var(--wu-font-medium);
  }
`;var eu=Object.defineProperty,tu=Object.getOwnPropertyDescriptor,Ma=(e,t,a,o)=>{for(var r=o>1?void 0:o?tu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&eu(t,a,r),r};let Ir=class extends c{constructor(){super(...arguments),this.cite="",this.attribution=""}render(){return l`
      <figure part="base" class="blockquote-figure">
        <blockquote cite=${this.cite}>
          <slot></slot>
        </blockquote>
        ${this.attribution?l`<figcaption part="attribution" class="attribution">— ${this.attribution}</figcaption>`:""}
      </figure>
    `}};Ir.styles=Zd;Ma([n()],Ir.prototype,"cite",2);Ma([n()],Ir.prototype,"attribution",2);Ir=Ma([d("wu-blockquote")],Ir);const ru=u`
  :host { display: inline; }

  abbr {
    font-style: inherit;
    text-decoration: underline dotted var(--wu-color-text-secondary);
    text-underline-offset: 2px;
    cursor: help;
  }
`;var ou=Object.defineProperty,au=Object.getOwnPropertyDescriptor,ds=(e,t,a,o)=>{for(var r=o>1?void 0:o?au(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ou(t,a,r),r};let zo=class extends c{constructor(){super(...arguments),this.title=""}render(){return l`
      <abbr part="base" title=${this.title}>
        <slot></slot>
      </abbr>
    `}};zo.styles=ru;ds([n()],zo.prototype,"title",2);zo=ds([d("wu-abbr")],zo);const su=u`
  :host {
    display: block;
    --wu-banner-bg:     var(--wu-color-info-subtle);
    --wu-banner-color:  var(--wu-color-text);
    --wu-banner-border: var(--wu-color-info);
  }

  :host([variant='success']) {
    --wu-banner-bg:     var(--wu-color-success-subtle);
    --wu-banner-border: var(--wu-color-success);
  }

  :host([variant='warning']) {
    --wu-banner-bg:     var(--wu-color-warning-subtle);
    --wu-banner-border: var(--wu-color-warning);
  }

  :host([variant='danger']) {
    --wu-banner-bg:     var(--wu-color-danger-subtle);
    --wu-banner-border: var(--wu-color-danger);
  }

  :host([sticky]) {
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .banner {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-banner-bg);
    border-bottom: 1px solid var(--wu-banner-border);
    font-size: var(--wu-text-sm);
    font-family: var(--wu-font-sans);
    color: var(--wu-banner-color);
  }

  .content {
    flex: 1;
  }

  .actions {
    display: contents;
  }

  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    opacity: 0.7;
    border-radius: var(--wu-radius-sm);
    flex-shrink: 0;
    padding: 0;
    transition: opacity var(--wu-duration-fast) var(--wu-ease-default);
  }

  .close:hover { opacity: 1; }
  .close:focus-visible { box-shadow: var(--wu-focus-ring); outline: none; }
`;var iu=Object.defineProperty,nu=Object.getOwnPropertyDescriptor,ao=(e,t,a,o)=>{for(var r=o>1?void 0:o?nu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&iu(t,a,r),r};let nt=class extends c{constructor(){super(...arguments),this.variant="info",this.dismissible=!1,this.sticky=!1,this.dismissed=!1}handleDismiss(){this.dismissed=!0,this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0}))}render(){return this.dismissed?l``:l`
      <div part="base" class="banner" role="status" aria-live="polite">
        <div class="content">
          <slot></slot>
        </div>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
        ${this.dismissible?l`
              <button
                part="close"
                class="close"
                aria-label="Dismiss"
                @click=${this.handleDismiss}
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            `:""}
      </div>
    `}};nt.styles=su;ao([n({reflect:!0})],nt.prototype,"variant",2);ao([n({type:Boolean,reflect:!0})],nt.prototype,"dismissible",2);ao([n({type:Boolean,reflect:!0})],nt.prototype,"sticky",2);ao([p()],nt.prototype,"dismissed",2);nt=ao([d("wu-banner")],nt);const lu=u`
  :host {
    display: block;
    --wu-im-color: var(--wu-color-info);
  }

  :host([variant='success']) { --wu-im-color: var(--wu-color-success); }
  :host([variant='warning']) { --wu-im-color: var(--wu-color-warning); }
  :host([variant='error'])   { --wu-im-color: var(--wu-color-danger); }

  .message {
    display: flex;
    align-items: flex-start;
    gap: var(--wu-space-1);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-im-color);
    line-height: var(--wu-leading-normal);
  }

  .icon {
    flex-shrink: 0;
    font-style: normal;
    font-size: var(--wu-text-xs);
    line-height: var(--wu-leading-normal);
  }

  .text {
    flex: 1;
  }
`;var cu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,us=(e,t,a,o)=>{for(var r=o>1?void 0:o?du(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&cu(t,a,r),r};let Co=class extends c{constructor(){super(...arguments),this.variant="info"}render(){return l`
      <div part="base" class="message" role=${this.variant==="error"?"alert":"status"}>
        <span class="icon" aria-hidden="true">${this._icon}</span>
        <span class="text"><slot></slot></span>
      </div>
    `}get _icon(){switch(this.variant){case"success":return"✓";case"warning":return"⚠";case"error":return"✕";default:return"ℹ"}}};Co.styles=lu;us([n({reflect:!0})],Co.prototype,"variant",2);Co=us([d("wu-inline-message")],Co);const uu=u`
  :host { display: block; }

  .summary {
    padding: var(--wu-space-4);
    background: var(--wu-color-danger-subtle);
    border: 1px solid var(--wu-color-danger);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
  }

  .title {
    margin: 0 0 var(--wu-space-2);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-danger);
  }

  .list {
    margin: 0;
    padding-left: var(--wu-space-5);
    list-style: disc;
  }

  .item {
    margin-bottom: var(--wu-space-1);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }

  .item:last-child { margin-bottom: 0; }
`;var pu=Object.defineProperty,hu=Object.getOwnPropertyDescriptor,Aa=(e,t,a,o)=>{for(var r=o>1?void 0:o?hu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&pu(t,a,r),r};let qr=class extends c{constructor(){super(...arguments),this.errors=[],this.heading="Please fix the following errors:"}render(){return this.errors.length?l`
      <div part="base" class="summary" role="alert" aria-live="polite">
        <p part="title" class="title">${this.heading}</p>
        <ul part="list" class="list">
          ${m(this.errors,e=>e,e=>l`<li class="item">${e}</li>`)}
        </ul>
      </div>
    `:l``}};qr.styles=uu;Aa([n({type:Array})],qr.prototype,"errors",2);Aa([n()],qr.prototype,"heading",2);qr=Aa([d("wu-validation-summary")],qr);const vu=u`
  :host { display: block; }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-start;
    gap: 0;
  }

  .orientation-vertical ol {
    flex-direction: column;
  }

  .step {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    position: relative;
    flex: 1;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-disabled);
  }

  .step:last-child { flex: none; }

  .indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid var(--wu-color-border-strong);
    background: var(--wu-color-background);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    flex-shrink: 0;
    transition: all var(--wu-duration-normal) var(--wu-ease-default);
  }

  .label {
    white-space: nowrap;
  }

  .connector {
    flex: 1;
    height: 2px;
    background: var(--wu-color-border);
    margin: 0 var(--wu-space-2);
    align-self: center;
    display: block;
  }

  .orientation-vertical .connector {
    width: 2px;
    height: var(--wu-space-6);
    flex: none;
    margin: var(--wu-space-1) 0 var(--wu-space-1) 13px;
  }

  /* Completed step */
  .step.completed { color: var(--wu-color-success); }
  .step.completed .indicator {
    background: var(--wu-color-success);
    border-color: var(--wu-color-success);
    color: white;
  }
  .step.completed .connector { background: var(--wu-color-success); }

  /* Current step */
  .step.current { color: var(--wu-color-text); }
  .step.current .indicator {
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary);
    font-weight: var(--wu-font-bold);
  }
  .step.current .label { font-weight: var(--wu-font-semibold); }
`;var wu=Object.defineProperty,bu=Object.getOwnPropertyDescriptor,Zo=(e,t,a,o)=>{for(var r=o>1?void 0:o?bu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&wu(t,a,r),r};let Yt=class extends c{constructor(){super(...arguments),this.steps=[],this.current=0,this.orientation="horizontal"}render(){return l`
      <nav part="base" class="steps orientation-${this.orientation}" aria-label="Progress">
        <ol>
          ${m(this.steps,(e,t)=>t,(e,t)=>{const a=t<this.current?"completed":t===this.current?"current":"upcoming";return l`
                <li class="step ${a}" aria-current=${a==="current"?"step":"false"}>
                  <span class="indicator" aria-hidden="true">
                    ${a==="completed"?"✓":t+1}
                  </span>
                  <span class="label">${e}</span>
                  ${t<this.steps.length-1?l`<span class="connector" aria-hidden="true"></span>`:""}
                </li>
              `})}
        </ol>
      </nav>
    `}};Yt.styles=vu;Zo([n({type:Array})],Yt.prototype,"steps",2);Zo([n({type:Number,reflect:!0})],Yt.prototype,"current",2);Zo([n({reflect:!0})],Yt.prototype,"orientation",2);Yt=Zo([d("wu-progress-steps")],Yt);const gu=u`
  :host { display: block; }

  .wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-3);
    font-family: var(--wu-font-sans);
  }

  .prompt {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
  }

  .controls {
    display: flex;
    gap: var(--wu-space-1);
  }

  .thumb,
  .star {
    background: none;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-1) var(--wu-space-2);
    font-size: var(--wu-text-base);
    cursor: pointer;
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    line-height: 1;
  }

  .thumb:hover,
  .star:hover {
    background: var(--wu-color-surface);
    border-color: var(--wu-color-border-strong);
  }

  .thumb:focus-visible,
  .star:focus-visible { box-shadow: var(--wu-focus-ring); outline: none; }

  .star { color: var(--wu-color-border-strong); border: none; font-size: var(--wu-text-lg); }
  .star.filled { color: var(--wu-color-warning); }

  .submitted { color: var(--wu-color-success); font-size: var(--wu-text-sm); }
  .thanks { font-weight: var(--wu-font-medium); }
`;var fu=Object.defineProperty,mu=Object.getOwnPropertyDescriptor,so=(e,t,a,o)=>{for(var r=o>1?void 0:o?mu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&fu(t,a,r),r};let lt=class extends c{constructor(){super(...arguments),this.variant="thumbs",this.prompt="Was this helpful?",this.selected=null,this.submitted=!1}select(e){this.selected=e,this.submitted=!0,this.dispatchEvent(new CustomEvent("wu-feedback",{bubbles:!0,composed:!0,detail:{value:e}}))}render(){return this.submitted?l`
        <div part="base" class="wrapper submitted" role="status">
          <span class="thanks">Thanks for your feedback!</span>
        </div>
      `:l`
      <div part="base" class="wrapper">
        ${this.prompt?l`<span class="prompt">${this.prompt}</span>`:""}
        <div class="controls" role="group" aria-label="Feedback">
          ${this.variant==="thumbs"?this._thumbs():this._stars()}
        </div>
      </div>
    `}_thumbs(){return l`
      <button class="thumb" aria-label="Helpful" @click=${()=>this.select(1)}>👍</button>
      <button class="thumb" aria-label="Not helpful" @click=${()=>this.select(0)}>👎</button>
    `}_stars(){return l`
      ${[1,2,3,4,5].map(e=>l`
          <button
            class="star ${(this.selected??0)>=e?"filled":""}"
            aria-label="${e} star${e!==1?"s":""}"
            @click=${()=>this.select(e)}
          >★</button>
        `)}
    `}};lt.styles=gu;so([n({reflect:!0})],lt.prototype,"variant",2);so([n()],lt.prototype,"prompt",2);so([p()],lt.prototype,"selected",2);so([p()],lt.prototype,"submitted",2);lt=so([d("wu-feedback")],lt);const yu=u`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
  }

  .survey {
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    padding: var(--wu-space-6);
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-4);
  }

  .question {
    margin: 0;
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .scale {
    display: flex;
    gap: var(--wu-space-1);
    flex-wrap: wrap;
  }

  .score-btn {
    width: 36px;
    height: 36px;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    background: transparent;
    color: var(--wu-color-text);
    font-size: var(--wu-text-sm);
    font-family: var(--wu-font-sans);
    cursor: pointer;
    transition: all var(--wu-duration-normal) var(--wu-ease-default);
    padding: 0;
  }

  .score-btn:hover {
    background: var(--wu-color-primary-subtle);
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary);
  }

  .score-btn.selected {
    background: var(--wu-color-primary);
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
  }

  .score-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .scale-labels {
    display: flex;
    justify-content: space-between;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .comment {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-2) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
    resize: vertical;
  }

  .comment:focus {
    outline: none;
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .submit-btn {
    align-self: flex-end;
    padding: var(--wu-space-2) var(--wu-space-6);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    transition: background var(--wu-duration-normal) var(--wu-ease-default);
  }

  .submit-btn:hover:not(:disabled) {
    background: var(--wu-color-primary-hover);
  }

  .submit-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .submit-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .submitted .thanks {
    margin: 0;
    text-align: center;
    color: var(--wu-color-success);
    font-weight: var(--wu-font-semibold);
    font-size: var(--wu-text-base);
    padding: var(--wu-space-4) 0;
  }
`;var xu=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,gr=(e,t,a,o)=>{for(var r=o>1?void 0:o?ku(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&xu(t,a,r),r};let Te=class extends c{constructor(){super(...arguments),this.question="How likely are you to recommend us to a colleague?",this.withComment=!1,this.score=null,this.comment="",this.submitted=!1}handleSubmit(e){e.preventDefault(),this.score!==null&&(this.submitted=!0,this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{score:this.score,comment:this.comment}})))}render(){return this.submitted?l`
        <div part="base" class="survey submitted" role="status">
          <p class="thanks">Thank you for your feedback!</p>
        </div>
      `:l`
      <form part="base" class="survey" @submit=${this.handleSubmit} novalidate>
        <p class="question">${this.question}</p>
        <div class="scale" role="group" aria-label="Score 0 to 10">
          ${Array.from({length:11},(e,t)=>l`
            <button
              type="button"
              class="score-btn ${this.score===t?"selected":""}"
              aria-label="${t} out of 10"
              aria-pressed=${this.score===t}
              @click=${()=>{this.score=t}}
            >${t}</button>
          `)}
        </div>
        <div class="scale-labels">
          <span>Not at all likely</span>
          <span>Extremely likely</span>
        </div>
        ${this.withComment?l`
              <textarea
                class="comment"
                placeholder="Any additional comments? (optional)"
                rows="3"
                .value=${this.comment}
                @input=${e=>{this.comment=e.target.value}}
              ></textarea>
            `:""}
        <button type="submit" class="submit-btn" ?disabled=${this.score===null}>Submit</button>
      </form>
    `}};Te.styles=yu;gr([n()],Te.prototype,"question",2);gr([n({type:Boolean,reflect:!0,attribute:"with-comment"})],Te.prototype,"withComment",2);gr([p()],Te.prototype,"score",2);gr([p()],Te.prototype,"comment",2);gr([p()],Te.prototype,"submitted",2);Te=gr([d("wu-survey")],Te);const $u=u`
  :host {
    display: block;
    position: fixed;
    bottom: var(--wu-space-6);
    right: var(--wu-space-6);
    z-index: 100;
  }

  :host([position='bottom-left']) {
    right: auto;
    left: var(--wu-space-6);
  }

  .bubble {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-full);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    box-shadow: var(--wu-shadow-lg);
    transition: background var(--wu-duration-normal) var(--wu-ease-default),
      box-shadow var(--wu-duration-normal) var(--wu-ease-default);
    white-space: nowrap;
  }

  .bubble:hover {
    background: var(--wu-color-primary-hover);
    box-shadow: var(--wu-shadow-xl);
  }

  .bubble:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .label {
    font-size: var(--wu-text-sm);
  }
`;var _u=Object.defineProperty,zu=Object.getOwnPropertyDescriptor,ea=(e,t,a,o)=>{for(var r=o>1?void 0:o?zu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&_u(t,a,r),r};let Wt=class extends c{constructor(){super(...arguments),this.position="bottom-right",this.label="Help",this.open=!1}handleClick(){this.open=!this.open,this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0,detail:{open:this.open}}))}render(){return l`
      <button
        part="bubble"
        class="bubble"
        aria-label=${this.label}
        aria-expanded=${this.open}
        title=${this.label}
        @click=${this.handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span class="label">${this.label}</span>
      </button>
    `}};Wt.styles=$u;ea([n({reflect:!0})],Wt.prototype,"position",2);ea([n()],Wt.prototype,"label",2);ea([p()],Wt.prototype,"open",2);Wt=ea([d("wu-support-bubble")],Wt);const Cu=u`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
  }

  .checklist {
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    padding: var(--wu-space-5);
    max-width: 360px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--wu-space-3);
  }

  .title {
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .dismiss-btn {
    background: transparent;
    border: none;
    padding: var(--wu-space-1);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    border-radius: var(--wu-radius-sm);
    display: flex;
    align-items: center;
  }

  .dismiss-btn:hover { color: var(--wu-color-text); }

  .dismiss-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .progress-bar-wrap {
    height: 6px;
    background: var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    overflow: hidden;
    margin-bottom: var(--wu-space-2);
  }

  .progress-bar {
    height: 100%;
    background: var(--wu-color-primary);
    border-radius: var(--wu-radius-full);
    transition: width var(--wu-duration-slow) var(--wu-ease-default);
  }

  .progress-text {
    margin: 0 0 var(--wu-space-3);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-2);
  }

  .item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
  }

  .item-label {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    transition: color var(--wu-duration-normal);
  }

  .item.completed .item-label {
    color: var(--wu-color-text-secondary);
    text-decoration: line-through;
  }

  .check-btn {
    width: 24px;
    height: 24px;
    min-width: 24px;
    border-radius: 50%;
    border: 2px solid var(--wu-color-border-strong);
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: var(--wu-color-primary-fg);
    transition: all var(--wu-duration-normal) var(--wu-ease-default);
  }

  .check-btn:hover:not(:disabled) {
    border-color: var(--wu-color-primary);
    background: var(--wu-color-primary-subtle);
  }

  .check-btn:disabled {
    background: var(--wu-color-primary);
    border-color: var(--wu-color-primary);
    cursor: default;
    color: var(--wu-color-primary-fg);
  }

  .check-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .empty-check {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: transparent;
  }
`;var ju=Object.defineProperty,Ou=Object.getOwnPropertyDescriptor,ta=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ou(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ju(t,a,r),r};let Xt=class extends c{constructor(){super(...arguments),this.title="Getting Started",this.items=[],this.dismissed=!1}handleCheck(e){this.items=this.items.map(t=>t.id===e?{...t,completed:!0}:t),this.dispatchEvent(new CustomEvent("wu-item-complete",{bubbles:!0,composed:!0,detail:{id:e}}))}handleDismiss(){this.dismissed=!0,this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0}))}get completedCount(){return this.items.filter(e=>e.completed).length}render(){if(this.dismissed)return l``;const e=this.items.length,t=this.completedCount,a=e>0?Math.round(t/e*100):0;return l`
      <div part="base" class="checklist">
        <div class="header">
          <span class="title">${this.title}</span>
          <button class="dismiss-btn" aria-label="Dismiss checklist" @click=${this.handleDismiss}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="progress-bar-wrap" aria-label="${t} of ${e} steps completed">
          <div class="progress-bar" style="width:${a}%"></div>
        </div>
        <p class="progress-text">${t} / ${e} completed</p>
        <ul class="items" role="list">
          ${m(this.items,o=>o.id,o=>l`
              <li class="item ${o.completed?"completed":""}">
                <button
                  class="check-btn"
                  aria-label="Mark '${o.label}' as complete"
                  ?disabled=${o.completed}
                  @click=${()=>this.handleCheck(o.id)}
                >
                  ${o.completed?l`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`:l`<span class="empty-check" aria-hidden="true"></span>`}
                </button>
                <span class="item-label">${o.label}</span>
              </li>
            `)}
        </ul>
      </div>
    `}};Xt.styles=Cu;ta([n()],Xt.prototype,"title",2);ta([n({type:Array})],Xt.prototype,"items",2);ta([p()],Xt.prototype,"dismissed",2);Xt=ta([d("wu-onboarding-checklist")],Xt);const Pu=u`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-5);
    max-width: 400px;
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    padding: var(--wu-space-8);
  }

  .heading {
    margin: 0;
    font-size: var(--wu-text-xl);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .error-msg {
    margin: 0;
    padding: var(--wu-space-3);
    background: var(--wu-color-danger-subtle);
    color: var(--wu-color-danger);
    border-radius: var(--wu-radius-md);
    font-size: var(--wu-text-sm);
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  label {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input[type='email'],
  input[type='password'],
  input[type='text'] {
    width: 100%;
    box-sizing: border-box;
    height: 36px;
    padding: var(--wu-space-2) var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
  }

  input:focus {
    outline: none;
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .pw-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }

  .pw-wrap input {
    padding-right: 56px;
  }

  .show-pw {
    position: absolute;
    right: var(--wu-space-2);
    background: transparent;
    border: none;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-primary);
    cursor: pointer;
    padding: var(--wu-space-1);
    font-family: var(--wu-font-sans);
  }

  .link-btn {
    background: transparent;
    border: none;
    padding: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-primary);
    cursor: pointer;
    font-family: var(--wu-font-sans);
    text-decoration: underline;
  }

  .remember {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
  }

  .submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wu-space-2);
    width: 100%;
    height: 40px;
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    transition: background var(--wu-duration-normal) var(--wu-ease-default);
  }

  .submit-btn:hover:not(:disabled) {
    background: var(--wu-color-primary-hover);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .submit-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
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

  @keyframes spin { to { transform: rotate(360deg); } }
`;var Eu=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,pe=(e,t,a,o)=>{for(var r=o>1?void 0:o?Su(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Eu(t,a,r),r};let T=class extends c{constructor(){super(...arguments),this.heading="Sign in",this.showRemember=!1,this.showForgot=!0,this.loading=!1,this.error="",this.email="",this.password="",this.remember=!1,this.showPw=!1}handleSubmit(e){e.preventDefault(),!(!this.email||!this.password)&&this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{email:this.email,password:this.password,remember:this.remember}}))}render(){return l`
      <form class="form" @submit=${this.handleSubmit} novalidate>
        <h2 class="heading">${this.heading}</h2>
        ${this.error?l`<p class="error-msg" role="alert">${this.error}</p>`:""}
        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            autocomplete="email"
            required
            placeholder="you@example.com"
            .value=${this.email}
            @input=${e=>{this.email=e.target.value}}
          />
        </div>
        <div class="field">
          <div class="label-row">
            <label for="password">Password</label>
            ${this.showForgot?l`<button type="button" class="link-btn" @click=${()=>this.dispatchEvent(new CustomEvent("wu-forgot-password",{bubbles:!0,composed:!0}))}>Forgot password?</button>`:""}
          </div>
          <div class="pw-wrap">
            <input
              id="password"
              type=${this.showPw?"text":"password"}
              autocomplete="current-password"
              required
              placeholder="••••••••"
              .value=${this.password}
              @input=${e=>{this.password=e.target.value}}
            />
            <button type="button" class="show-pw" aria-label=${this.showPw?"Hide password":"Show password"} @click=${()=>{this.showPw=!this.showPw}}>
              ${this.showPw?"Hide":"Show"}
            </button>
          </div>
        </div>
        ${this.showRemember?l`
              <label class="remember">
                <input type="checkbox" ?checked=${this.remember} @change=${e=>{this.remember=e.target.checked}} />
                Remember me
              </label>
            `:""}
        <button type="submit" class="submit-btn" ?disabled=${this.loading}>
          ${this.loading?l`<span class="spinner"></span>`:""}
          ${this.heading}
        </button>
      </form>
    `}};T.styles=Pu;pe([n()],T.prototype,"heading",2);pe([n({type:Boolean,reflect:!0,attribute:"show-remember"})],T.prototype,"showRemember",2);pe([n({type:Boolean,reflect:!0,attribute:"show-forgot"})],T.prototype,"showForgot",2);pe([n({type:Boolean,reflect:!0})],T.prototype,"loading",2);pe([n()],T.prototype,"error",2);pe([p()],T.prototype,"email",2);pe([p()],T.prototype,"password",2);pe([p()],T.prototype,"remember",2);pe([p()],T.prototype,"showPw",2);T=pe([d("wu-login-form")],T);const Du=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .form {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-5);
    max-width: 400px;
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    padding: var(--wu-space-8);
  }

  .heading {
    margin: 0;
    font-size: var(--wu-text-xl);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .error-msg {
    margin: 0;
    padding: var(--wu-space-3);
    background: var(--wu-color-danger-subtle);
    color: var(--wu-color-danger);
    border-radius: var(--wu-radius-md);
    font-size: var(--wu-text-sm);
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  label {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  input {
    width: 100%;
    box-sizing: border-box;
    height: 36px;
    padding: var(--wu-space-2) var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
  }

  input:focus {
    outline: none;
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .field-error {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-danger);
  }

  .submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wu-space-2);
    width: 100%;
    height: 40px;
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    transition: background var(--wu-duration-normal) var(--wu-ease-default);
  }

  .submit-btn:hover:not(:disabled) { background: var(--wu-color-primary-hover); }
  .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .submit-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .spinner {
    width: 14px; height: 14px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    flex-shrink: 0;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
`;var Bu=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,he=(e,t,a,o)=>{for(var r=o>1?void 0:o?Mu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Bu(t,a,r),r};let L=class extends c{constructor(){super(...arguments),this.heading="Create account",this.loading=!1,this.error="",this.confirmPassword=!0,this.name="",this.email="",this.password="",this.confirm="",this.mismatch=!1}handleSubmit(e){if(e.preventDefault(),this.confirmPassword&&this.password!==this.confirm){this.mismatch=!0;return}this.mismatch=!1,!(!this.name||!this.email||!this.password)&&this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{name:this.name,email:this.email,password:this.password}}))}render(){return l`
      <form class="form" @submit=${this.handleSubmit} novalidate>
        <h2 class="heading">${this.heading}</h2>
        ${this.error?l`<p class="error-msg" role="alert">${this.error}</p>`:""}
        <div class="field">
          <label for="name">Full name</label>
          <input id="name" type="text" autocomplete="name" required placeholder="Jane Smith"
            .value=${this.name}
            @input=${e=>{this.name=e.target.value}} />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" type="email" autocomplete="email" required placeholder="you@example.com"
            .value=${this.email}
            @input=${e=>{this.email=e.target.value}} />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" type="password" autocomplete="new-password" required placeholder="8+ characters"
            .value=${this.password}
            @input=${e=>{this.password=e.target.value}} />
        </div>
        ${this.confirmPassword?l`
              <div class="field">
                <label for="confirm">Confirm password</label>
                <input id="confirm" type="password" autocomplete="new-password" required placeholder="Repeat password"
                  .value=${this.confirm}
                  @input=${e=>{this.confirm=e.target.value,this.mismatch=!1}} />
                ${this.mismatch?l`<span class="field-error">Passwords do not match</span>`:""}
              </div>
            `:""}
        <button type="submit" class="submit-btn" ?disabled=${this.loading}>
          ${this.loading?l`<span class="spinner"></span>`:""}
          ${this.heading}
        </button>
      </form>
    `}};L.styles=Du;he([n()],L.prototype,"heading",2);he([n({type:Boolean,reflect:!0})],L.prototype,"loading",2);he([n()],L.prototype,"error",2);he([n({type:Boolean,reflect:!0,attribute:"confirm-password"})],L.prototype,"confirmPassword",2);he([p()],L.prototype,"name",2);he([p()],L.prototype,"email",2);he([p()],L.prototype,"password",2);he([p()],L.prototype,"confirm",2);he([p()],L.prototype,"mismatch",2);L=he([d("wu-signup-form")],L);const Au=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .otp {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--wu-space-4);
  }

  .heading {
    margin: 0;
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
    text-align: center;
  }

  .hint {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    text-align: center;
  }

  .digits {
    display: flex;
    gap: var(--wu-space-2);
  }

  .digit {
    width: 44px;
    height: 52px;
    text-align: center;
    font-size: var(--wu-text-xl);
    font-family: var(--wu-font-mono);
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
    border: 2px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    outline: none;
    transition: border-color var(--wu-duration-normal);
  }

  .digit:focus {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }
`;var Iu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,io=(e,t,a,o)=>{for(var r=o>1?void 0:o?qu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Iu(t,a,r),r};let ct=class extends c{constructor(){super(...arguments),this.digits=6,this.heading="Enter verification code",this.hint="",this.values=[]}connectedCallback(){super.connectedCallback(),this.values=Array(this.digits).fill("")}handleInput(e,t){var a;const o=e.target.value.replace(/\D/g,"").slice(-1),r=[...this.values];r[t]=o,this.values=r,o&&t<this.digits-1&&((a=this.shadowRoot.querySelectorAll(".digit")[t+1])==null||a.focus()),r.every(s=>s!=="")&&this.dispatchEvent(new CustomEvent("wu-complete",{bubbles:!0,composed:!0,detail:{code:r.join("")}}))}handleKeydown(e,t){var a;e.key==="Backspace"&&!this.values[t]&&t>0&&((a=this.shadowRoot.querySelectorAll(".digit")[t-1])==null||a.focus())}render(){return l`
      <div class="otp">
        ${this.heading?l`<p class="heading">${this.heading}</p>`:""}
        ${this.hint?l`<p class="hint">${this.hint}</p>`:""}
        <div class="digits" role="group" aria-label="Verification code">
          ${m(Array.from({length:this.digits},(e,t)=>t),e=>e,e=>l`
              <input
                class="digit"
                type="text"
                inputmode="numeric"
                maxlength="1"
                autocomplete="one-time-code"
                aria-label="Digit ${e+1}"
                .value=${this.values[e]??""}
                @input=${t=>this.handleInput(t,e)}
                @keydown=${t=>this.handleKeydown(t,e)}
              />
            `)}
        </div>
      </div>
    `}};ct.styles=Au;io([n({type:Number})],ct.prototype,"digits",2);io([n()],ct.prototype,"heading",2);io([n()],ct.prototype,"hint",2);io([p()],ct.prototype,"values",2);ct=io([d("wu-otp-verify")],ct);const Nu=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .strength {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  .bar {
    flex: 1;
    height: 4px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-border);
    transition: background var(--wu-duration-normal) var(--wu-ease-default);
  }

  .bar.danger   { background: var(--wu-color-danger); }
  .bar.warning  { background: var(--wu-color-warning); }
  .bar.info     { background: var(--wu-color-info); }
  .bar.success  { background: var(--wu-color-success); }

  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    min-width: 44px;
    text-align: right;
  }

  .label.danger   { color: var(--wu-color-danger); }
  .label.warning  { color: var(--wu-color-warning); }
  .label.info     { color: var(--wu-color-info); }
  .label.success  { color: var(--wu-color-success); }
`;var Tu=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,Ia=(e,t,a,o)=>{for(var r=o>1?void 0:o?Lu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Tu(t,a,r),r};let Nr=class extends c{constructor(){super(...arguments),this.password="",this.score=null,this.labels=["","Weak","Fair","Good","Strong"],this.variants=["","danger","warning","info","success"]}computeScore(e){if(!e)return 0;let t=0;return e.length>=8&&t++,/[A-Z]/.test(e)&&t++,/[0-9]/.test(e)&&t++,/[^a-zA-Z0-9]/.test(e)&&t++,t}render(){const e=this.score??this.computeScore(this.password),t=this.labels[e]??"",a=this.variants[e]??"";return l`
      <div class="strength" aria-label="Password strength: ${t||"Enter a password"}">
        ${[1,2,3,4].map(o=>l`<div class="bar ${o<=e?a:"empty"}"></div>`)}
        ${t?l`<span class="label ${a}">${t}</span>`:""}
      </div>
    `}};Nr.styles=Nu;Ia([n()],Nr.prototype,"password",2);Ia([n({type:Number})],Nr.prototype,"score",2);Nr=Ia([d("wu-password-strength")],Nr);const Ru=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .providers {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-3);
  }

  .provider-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wu-space-3);
    width: 100%;
    height: 40px;
    padding: 0 var(--wu-space-4);
    background: var(--wu-color-surface);
    color: var(--wu-color-text);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    cursor: pointer;
    transition: background var(--wu-duration-normal) var(--wu-ease-default),
      border-color var(--wu-duration-normal);
  }

  .provider-btn:hover {
    background: var(--wu-color-surface-raised);
    border-color: var(--wu-color-border-strong);
  }

  .provider-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .provider-icon {
    display: flex;
    align-items: center;
    width: 20px;
    flex-shrink: 0;
  }
`;var Hu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,ps=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ku(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Hu(t,a,r),r};const Fu=[{id:"google",label:"Continue with Google"},{id:"github",label:"Continue with GitHub"},{id:"microsoft",label:"Continue with Microsoft"}];let jo=class extends c{constructor(){super(...arguments),this.providers=Fu}render(){return l`
      <div class="providers">
        ${m(this.providers,e=>e.id,e=>l`
            <button
              class="provider-btn"
              @click=${()=>this.dispatchEvent(new CustomEvent("wu-provider-click",{bubbles:!0,composed:!0,detail:{provider:e.id}}))}
            >
              <span class="provider-icon" aria-hidden="true">
                ${e.id==="google"?l`
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                `:e.id==="github"?l`
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                `:l`<span style="font-size:12px;font-weight:700">${e.id.slice(0,2).toUpperCase()}</span>`}
              </span>
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `}};jo.styles=Ru;ps([n({type:Array})],jo.prototype,"providers",2);jo=ps([d("wu-social-login")],jo);const Uu=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .api-key-display {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .key-row {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-2) var(--wu-space-3);
  }

  .key-value {
    flex: 1;
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    letter-spacing: 0.05em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .actions {
    display: flex;
    gap: var(--wu-space-1);
    flex-shrink: 0;
  }

  .icon-btn {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: var(--wu-radius-sm);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    transition: color var(--wu-duration-fast), background var(--wu-duration-fast);
    padding: 0;
  }

  .icon-btn:hover { background: var(--wu-color-surface-raised); color: var(--wu-color-text); }
  .icon-btn.copied { color: var(--wu-color-success); }
  .icon-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;var Vu=Object.defineProperty,Yu=Object.getOwnPropertyDescriptor,no=(e,t,a,o)=>{for(var r=o>1?void 0:o?Yu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Vu(t,a,r),r};let dt=class extends c{constructor(){super(...arguments),this.value="",this.label="API Key",this.revealed=!1,this.copied=!1}async handleCopy(){try{await navigator.clipboard.writeText(this.value),this.copied=!0,this.dispatchEvent(new CustomEvent("wu-copy",{bubbles:!0,composed:!0})),setTimeout(()=>{this.copied=!1},2e3)}catch{}}get displayValue(){if(!this.value)return"—";if(this.revealed)return this.value;const e=this.value.slice(-4);return"•".repeat(Math.max(0,this.value.length-4))+e}render(){return l`
      <div class="api-key-display">
        <span class="label">${this.label}</span>
        <div class="key-row">
          <code class="key-value">${this.displayValue}</code>
          <div class="actions">
            <button
              class="icon-btn"
              aria-label=${this.revealed?"Hide key":"Reveal key"}
              title=${this.revealed?"Hide":"Reveal"}
              @click=${()=>{this.revealed=!this.revealed}}
            >
              ${this.revealed?l`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:l`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
            </button>
            <button
              class="icon-btn ${this.copied?"copied":""}"
              aria-label="Copy to clipboard"
              title=${this.copied?"Copied!":"Copy"}
              @click=${this.handleCopy}
            >
              ${this.copied?l`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`:l`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`}
            </button>
          </div>
        </div>
      </div>
    `}};dt.styles=Uu;no([n()],dt.prototype,"value",2);no([n()],dt.prototype,"label",2);no([p()],dt.prototype,"revealed",2);no([p()],dt.prototype,"copied",2);dt=no([d("wu-api-key-display")],dt);const Wu=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .timeout-warning {
    display: flex;
    align-items: center;
    gap: var(--wu-space-4);
    background: var(--wu-color-warning-subtle);
    border: 1px solid var(--wu-color-warning);
    border-radius: var(--wu-radius-lg);
    padding: var(--wu-space-4) var(--wu-space-5);
    flex-wrap: wrap;
  }

  .icon {
    font-size: 24px;
    flex-shrink: 0;
  }

  .content {
    flex: 1;
    min-width: 200px;
  }

  .message, .sub {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }

  .sub {
    color: var(--wu-color-text-secondary);
    margin-top: var(--wu-space-1);
  }

  .actions {
    display: flex;
    gap: var(--wu-space-2);
    flex-shrink: 0;
  }

  .extend-btn {
    padding: var(--wu-space-2) var(--wu-space-4);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    transition: background var(--wu-duration-normal);
  }

  .extend-btn:hover { background: var(--wu-color-primary-hover); }
  .extend-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .logout-btn {
    padding: var(--wu-space-2) var(--wu-space-4);
    background: transparent;
    color: var(--wu-color-text-secondary);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    cursor: pointer;
    transition: background var(--wu-duration-normal);
  }

  .logout-btn:hover { background: var(--wu-color-surface-raised); }
  .logout-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;var Xu=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,ra=(e,t,a,o)=>{for(var r=o>1?void 0:o?Gu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Xu(t,a,r),r};let Gt=class extends c{constructor(){super(...arguments),this.secondsRemaining=120,this.visible=!1,this.remaining=120,this._interval=null}updated(e){(e.has("visible")||e.has("secondsRemaining"))&&(this.remaining=this.secondsRemaining,this.visible?this._startCountdown():this._stopCountdown())}disconnectedCallback(){super.disconnectedCallback(),this._stopCountdown()}_startCountdown(){this._stopCountdown(),this._interval=setInterval(()=>{this.remaining>0?this.remaining--:(this._stopCountdown(),this.dispatchEvent(new CustomEvent("wu-logout",{bubbles:!0,composed:!0})))},1e3)}_stopCountdown(){this._interval&&(clearInterval(this._interval),this._interval=null)}handleExtend(){this._stopCountdown(),this.visible=!1,this.dispatchEvent(new CustomEvent("wu-extend",{bubbles:!0,composed:!0}))}handleLogout(){this._stopCountdown(),this.dispatchEvent(new CustomEvent("wu-logout",{bubbles:!0,composed:!0}))}get formattedTime(){const e=Math.floor(this.remaining/60),t=this.remaining%60;return`${e}:${String(t).padStart(2,"0")}`}render(){return this.visible?l`
      <div class="timeout-warning" role="alertdialog" aria-live="assertive" aria-label="Session timeout warning">
        <div class="icon">⏱</div>
        <div class="content">
          <p class="message">Your session will expire in <strong>${this.formattedTime}</strong>.</p>
          <p class="sub">Do you want to stay signed in?</p>
        </div>
        <div class="actions">
          <button class="extend-btn" @click=${this.handleExtend}>Stay signed in</button>
          <button class="logout-btn" @click=${this.handleLogout}>Sign out</button>
        </div>
      </div>
    `:l``}};Gt.styles=Wu;ra([n({type:Number,attribute:"seconds-remaining"})],Gt.prototype,"secondsRemaining",2);ra([n({type:Boolean,reflect:!0})],Gt.prototype,"visible",2);ra([p()],Gt.prototype,"remaining",2);Gt=ra([d("wu-session-timeout")],Gt);const Ju=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .captcha-widget {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-4) var(--wu-space-5);
    max-width: 300px;
  }

  .check-label {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    user-select: none;
  }

  .checkbox {
    width: 20px;
    height: 20px;
    accent-color: var(--wu-color-primary);
    cursor: pointer;
  }

  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .brand-name {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-text-secondary);
  }

  .brand-sub {
    font-size: 10px;
    color: var(--wu-color-text-disabled);
  }
`;var Qu=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,qa=(e,t,a,o)=>{for(var r=o>1?void 0:o?Zu(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Qu(t,a,r),r};let Tr=class extends c{constructor(){super(...arguments),this.provider="CAPTCHA",this.verified=!1}handleChange(e){this.verified=e.target.checked,this.verified&&this.dispatchEvent(new CustomEvent("wu-verified",{bubbles:!0,composed:!0}))}render(){return l`
      <div class="captcha-widget" role="group" aria-label="${this.provider} verification">
        <label class="check-label">
          <input
            type="checkbox"
            class="checkbox"
            ?checked=${this.verified}
            @change=${this.handleChange}
            aria-label="I am not a robot"
          />
          <span>I'm not a robot</span>
        </label>
        <div class="brand">
          <span class="brand-name">${this.provider}</span>
          <span class="brand-sub">Privacy - Terms</span>
        </div>
      </div>
    `}};Tr.styles=Ju;qa([n()],Tr.prototype,"provider",2);qa([n({type:Boolean,reflect:!0})],Tr.prototype,"verified",2);Tr=qa([d("wu-captcha")],Tr);const ep=u`
  :host { display: inline-flex; font-family: var(--wu-font-sans); }

  .price {
    display: inline-flex;
    align-items: baseline;
    gap: var(--wu-space-2);
    flex-wrap: wrap;
  }

  .current {
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-text);
  }

  :host([size='sm']) .current { font-size: var(--wu-text-sm); }
  :host([size='lg']) .current { font-size: var(--wu-text-2xl); }

  .original {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    text-decoration: line-through;
  }

  .badge {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-danger);
    background: var(--wu-color-danger-subtle);
    border-radius: var(--wu-radius-full);
    padding: 2px var(--wu-space-2);
    align-self: center;
  }
`;var tp=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,_t=(e,t,a,o)=>{for(var r=o>1?void 0:o?rp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&tp(t,a,r),r};let $e=class extends c{constructor(){super(...arguments),this.amount=0,this.originalAmount=null,this.currency="USD",this.locale="en-US",this.badge="",this.size="md"}format(e){return new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency}).format(e)}render(){const e=this.originalAmount!==null&&this.originalAmount>this.amount;return l`
      <span class="price" aria-label="${this.format(this.amount)}${e?`, was ${this.format(this.originalAmount)}`:""}">
        ${this.badge?l`<span class="badge">${this.badge}</span>`:""}
        <span class="current">${this.format(this.amount)}</span>
        ${e?l`<span class="original" aria-hidden="true">${this.format(this.originalAmount)}</span>`:""}
      </span>
    `}};$e.styles=ep;_t([n({type:Number})],$e.prototype,"amount",2);_t([n({type:Number,attribute:"original-amount"})],$e.prototype,"originalAmount",2);_t([n()],$e.prototype,"currency",2);_t([n()],$e.prototype,"locale",2);_t([n()],$e.prototype,"badge",2);_t([n({reflect:!0})],$e.prototype,"size",2);$e=_t([d("wu-price")],$e);const op=u`
  :host { display: inline-block; font-family: var(--wu-font-sans); }

  .picker {
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    overflow: hidden;
    height: 36px;
  }

  .btn {
    width: 36px;
    height: 100%;
    background: var(--wu-color-surface);
    border: none;
    color: var(--wu-color-text);
    font-size: var(--wu-text-lg);
    cursor: pointer;
    transition: background var(--wu-duration-fast);
    padding: 0;
    line-height: 1;
  }

  .btn:hover:not(:disabled) { background: var(--wu-color-surface-raised); }
  .btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .btn:focus-visible { outline: none; box-shadow: inset var(--wu-focus-ring); }

  .value {
    width: 44px;
    height: 100%;
    border: none;
    border-left: 1px solid var(--wu-color-border);
    border-right: 1px solid var(--wu-color-border);
    text-align: center;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
    -moz-appearance: textfield;
  }

  .value::-webkit-inner-spin-button,
  .value::-webkit-outer-spin-button { -webkit-appearance: none; }

  .value:focus { outline: none; }
`;var ap=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,lo=(e,t,a,o)=>{for(var r=o>1?void 0:o?sp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ap(t,a,r),r};let ut=class extends c{constructor(){super(...arguments),this.value=1,this.min=1,this.max=99,this.disabled=!1}emit(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}decrement(){this.value>this.min&&(this.value--,this.emit())}increment(){this.value<this.max&&(this.value++,this.emit())}render(){return l`
      <div class="picker" role="group" aria-label="Quantity">
        <button
          class="btn"
          aria-label="Decrease quantity"
          ?disabled=${this.disabled||this.value<=this.min}
          @click=${this.decrement}
        >−</button>
        <input
          class="value"
          type="number"
          .valueAsNumber=${this.value}
          min=${this.min}
          max=${this.max}
          ?disabled=${this.disabled}
          aria-label="Quantity"
          @change=${e=>{const t=parseInt(e.target.value,10);!isNaN(t)&&t>=this.min&&t<=this.max&&(this.value=t,this.emit())}}
        />
        <button
          class="btn"
          aria-label="Increase quantity"
          ?disabled=${this.disabled||this.value>=this.max}
          @click=${this.increment}
        >+</button>
      </div>
    `}};ut.styles=op;lo([n({type:Number})],ut.prototype,"value",2);lo([n({type:Number})],ut.prototype,"min",2);lo([n({type:Number})],ut.prototype,"max",2);lo([n({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);ut=lo([d("wu-quantity-picker")],ut);const ip=u`
  :host { display: inline-block; font-family: var(--wu-font-sans); }

  .cart-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: transparent;
    border: none;
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    color: var(--wu-color-text);
    transition: background var(--wu-duration-fast);
    padding: 0;
  }

  .cart-btn:hover { background: var(--wu-color-surface); }
  .cart-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .badge {
    position: absolute;
    top: 4px;
    right: 4px;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    background: var(--wu-color-danger);
    color: white;
    border-radius: var(--wu-radius-full);
    font-size: 10px;
    font-weight: var(--wu-font-bold);
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }
`;var np=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,Na=(e,t,a,o)=>{for(var r=o>1?void 0:o?lp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&np(t,a,r),r};let Lr=class extends c{constructor(){super(...arguments),this.count=0,this.label="Shopping cart"}render(){return l`
      <button
        class="cart-btn"
        aria-label="${this.label}${this.count>0?`, ${this.count} items`:""}"
        @click=${()=>this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0}))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        ${this.count>0?l`<span class="badge" aria-hidden="true">${this.count>99?"99+":this.count}</span>`:""}
      </button>
    `}};Lr.styles=ip;Na([n({type:Number})],Lr.prototype,"count",2);Na([n()],Lr.prototype,"label",2);Lr=Na([d("wu-cart-icon")],Lr);const cp=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .card {
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    transition: box-shadow var(--wu-duration-normal) var(--wu-ease-default);
    display: flex;
    flex-direction: column;
  }

  .card:hover { box-shadow: var(--wu-shadow-md); }

  .image-wrap {
    position: relative;
    aspect-ratio: 4 / 3;
    background: var(--wu-color-border);
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    background: var(--wu-color-border);
  }

  .badge {
    position: absolute;
    top: var(--wu-space-2);
    left: var(--wu-space-2);
    background: var(--wu-color-danger);
    color: white;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    padding: 2px var(--wu-space-2);
    border-radius: var(--wu-radius-full);
  }

  .sold-out-overlay {
    position: absolute;
    inset: 0;
    background: color-mix(in srgb, var(--wu-color-background) 70%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
  }

  .body {
    padding: var(--wu-space-4);
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-3);
    flex: 1;
  }

  .name {
    margin: 0;
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-tight);
  }

  .prices {
    display: flex;
    align-items: baseline;
    gap: var(--wu-space-2);
  }

  .price {
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-text);
  }

  .original-price {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    text-decoration: line-through;
  }

  .add-btn {
    margin-top: auto;
    width: 100%;
    height: 36px;
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    transition: background var(--wu-duration-normal);
  }

  .add-btn:hover:not(:disabled) { background: var(--wu-color-primary-hover); }
  .add-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .add-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;var dp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,We=(e,t,a,o)=>{for(var r=o>1?void 0:o?up(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&dp(t,a,r),r};let le=class extends c{constructor(){super(...arguments),this.productId="",this.name="",this.image="",this.price="",this.originalPrice="",this.badge="",this.soldOut=!1}render(){return l`
      <article class="card" aria-label="${this.name}">
        <div class="image-wrap">
          ${this.image?l`<img src="${this.image}" alt="${this.name}" class="image" loading="lazy" />`:l`<div class="image-placeholder" aria-hidden="true"></div>`}
          ${this.badge?l`<span class="badge">${this.badge}</span>`:""}
          ${this.soldOut?l`<span class="sold-out-overlay">Sold out</span>`:""}
        </div>
        <div class="body">
          <h3 class="name">${this.name}</h3>
          <div class="prices">
            <span class="price">${this.price}</span>
            ${this.originalPrice?l`<span class="original-price">${this.originalPrice}</span>`:""}
          </div>
          <button
            class="add-btn"
            ?disabled=${this.soldOut}
            @click=${()=>this.dispatchEvent(new CustomEvent("wu-add-to-cart",{bubbles:!0,composed:!0,detail:{id:this.productId}}))}
          >
            ${this.soldOut?"Sold Out":"Add to cart"}
          </button>
        </div>
      </article>
    `}};le.styles=cp;We([n()],le.prototype,"productId",2);We([n()],le.prototype,"name",2);We([n()],le.prototype,"image",2);We([n()],le.prototype,"price",2);We([n({attribute:"original-price"})],le.prototype,"originalPrice",2);We([n()],le.prototype,"badge",2);We([n({type:Boolean,reflect:!0,attribute:"sold-out"})],le.prototype,"soldOut",2);le=We([d("wu-product-card")],le);const pp=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .gallery { display: flex; flex-direction: column; gap: var(--wu-space-3); }

  .main-image {
    aspect-ratio: 1 / 1;
    background: var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
  }

  .main-img, .placeholder {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .thumbnails {
    display: flex;
    gap: var(--wu-space-2);
    flex-wrap: wrap;
  }

  .thumb {
    width: 60px;
    height: 60px;
    border-radius: var(--wu-radius-md);
    overflow: hidden;
    border: 2px solid transparent;
    padding: 0;
    cursor: pointer;
    background: none;
    transition: border-color var(--wu-duration-fast);
  }

  .thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .thumb.active { border-color: var(--wu-color-primary); }
  .thumb:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;var hp=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,oa=(e,t,a,o)=>{for(var r=o>1?void 0:o?vp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&hp(t,a,r),r};let Jt=class extends c{constructor(){super(...arguments),this.images=[],this.alt="Product image",this.active=0}render(){const e=this.images[this.active];return l`
      <div class="gallery">
        <div class="main-image">
          ${e?l`<img src="${e}" alt="${this.alt}" class="main-img" loading="lazy" />`:l`<div class="placeholder" aria-label="${this.alt}"></div>`}
        </div>
        ${this.images.length>1?l`
              <div class="thumbnails" role="list">
                ${this.images.map((t,a)=>l`
                    <button
                      class="thumb ${a===this.active?"active":""}"
                      role="listitem"
                      aria-label="View image ${a+1}"
                      aria-pressed=${a===this.active}
                      @click=${()=>{this.active=a}}
                    >
                      <img src="${t}" alt="" loading="lazy" />
                    </button>
                  `)}
              </div>
            `:""}
      </div>
    `}};Jt.styles=pp;oa([n({type:Array})],Jt.prototype,"images",2);oa([n()],Jt.prototype,"alt",2);oa([p()],Jt.prototype,"active",2);Jt=oa([d("wu-product-gallery")],Jt);const wp=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .line-item {
    display: flex;
    gap: var(--wu-space-3);
    padding: var(--wu-space-4) 0;
    border-bottom: 1px solid var(--wu-color-border);
    align-items: flex-start;
  }

  .image-wrap { flex-shrink: 0; }

  .img, .img-placeholder {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: var(--wu-radius-md);
    display: block;
    background: var(--wu-color-border);
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
    min-width: 0;
  }

  .name {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .variant {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .bottom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--wu-space-2);
  }

  .qty-row {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: 0 var(--wu-space-1);
    height: 28px;
  }

  .qty-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--wu-color-text);
    font-size: var(--wu-text-base);
    padding: 0 var(--wu-space-1);
    line-height: 1;
  }

  .qty { font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); }

  .price {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .remove-btn {
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    padding: var(--wu-space-1);
    border-radius: var(--wu-radius-sm);
    display: flex;
    align-items: center;
    transition: color var(--wu-duration-fast);
  }

  .remove-btn:hover { color: var(--wu-color-danger); }
  .remove-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;var bp=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,zt=(e,t,a,o)=>{for(var r=o>1?void 0:o?gp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&bp(t,a,r),r};let _e=class extends c{constructor(){super(...arguments),this.itemId="",this.name="",this.image="",this.price="",this.variant="",this.quantity=1}render(){return l`
      <div class="line-item">
        <div class="image-wrap">
          ${this.image?l`<img src="${this.image}" alt="${this.name}" class="img" loading="lazy" />`:l`<div class="img-placeholder"></div>`}
        </div>
        <div class="details">
          <span class="name">${this.name}</span>
          ${this.variant?l`<span class="variant">${this.variant}</span>`:""}
          <div class="bottom-row">
            <div class="qty-row">
              <button class="qty-btn" aria-label="Decrease quantity"
                @click=${()=>{this.quantity>1&&(this.quantity--,this._emitQty())}}>−</button>
              <span class="qty">${this.quantity}</span>
              <button class="qty-btn" aria-label="Increase quantity"
                @click=${()=>{this.quantity++,this._emitQty()}}>+</button>
            </div>
            <span class="price">${this.price}</span>
          </div>
        </div>
        <button class="remove-btn" aria-label="Remove ${this.name}"
          @click=${()=>this.dispatchEvent(new CustomEvent("wu-remove",{bubbles:!0,composed:!0,detail:{id:this.itemId}}))}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    `}_emitQty(){this.dispatchEvent(new CustomEvent("wu-quantity-change",{bubbles:!0,composed:!0,detail:{id:this.itemId,quantity:this.quantity}}))}};_e.styles=wp;zt([n()],_e.prototype,"itemId",2);zt([n()],_e.prototype,"name",2);zt([n()],_e.prototype,"image",2);zt([n()],_e.prototype,"price",2);zt([n()],_e.prototype,"variant",2);zt([n({type:Number})],_e.prototype,"quantity",2);_e=zt([d("wu-cart-line-item")],_e);const fp=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .steps {
    display: flex;
    align-items: center;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--wu-space-1);
    min-width: 60px;
  }

  .step-num {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-bold);
    background: var(--wu-color-border);
    color: var(--wu-color-text-secondary);
    border: 2px solid transparent;
    transition: all var(--wu-duration-normal);
  }

  .step.done .step-num {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
  }

  .step.current .step-num {
    background: var(--wu-color-background);
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary);
  }

  .step-label {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
  }

  .step.current .step-label {
    color: var(--wu-color-text);
    font-weight: var(--wu-font-medium);
  }

  .step.done .step-label { color: var(--wu-color-text-secondary); }

  .connector {
    flex: 1;
    height: 2px;
    background: var(--wu-color-border);
    margin-bottom: 16px;
    transition: background var(--wu-duration-normal);
  }

  .connector.filled { background: var(--wu-color-primary); }
`;var mp=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,Ta=(e,t,a,o)=>{for(var r=o>1?void 0:o?yp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&mp(t,a,r),r};let Rr=class extends c{constructor(){super(...arguments),this.steps=["Cart","Shipping","Payment","Review"],this.current=0}render(){return l`
      <nav aria-label="Checkout steps" class="steps">
        ${m(this.steps,e=>e,(e,t)=>{const a=t<this.current?"done":t===this.current?"current":"upcoming";return l`
              ${t>0?l`<div class="connector ${a!=="upcoming"?"filled":""}"></div>`:""}
              <div class="step ${a}" aria-current=${a==="current"?"step":"false"}>
                <span class="step-num" aria-hidden="true">
                  ${a==="done"?l`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:t+1}
                </span>
                <span class="step-label">${e}</span>
              </div>
            `})}
      </nav>
    `}};Rr.styles=fp;Ta([n({type:Array})],Rr.prototype,"steps",2);Ta([n({type:Number})],Rr.prototype,"current",2);Rr=Ta([d("wu-checkout-steps")],Rr);const xp=u`
  :host { display: block; }

  .form {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-4);
    padding: var(--wu-space-6);
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    max-width: 420px;
  }

  .heading {
    margin: 0;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .error-msg {
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-danger-subtle);
    border-left: 3px solid var(--wu-color-danger);
    border-radius: var(--wu-radius-sm);
    color: var(--wu-color-danger);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    margin: 0;
  }

  .field { display: flex; flex-direction: column; gap: var(--wu-space-1); }

  .field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--wu-space-3);
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  input {
    padding: var(--wu-space-2) var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    background: var(--wu-color-background);
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    outline: none;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  input::placeholder { color: var(--wu-color-text-disabled); }

  input:focus {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .submit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .submit-btn:hover:not(:disabled) { background: var(--wu-color-primary-hover); }
  .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  .spinner {
    width: 14px; height: 14px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
`;var kp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,Xe=(e,t,a,o)=>{for(var r=o>1?void 0:o?$p(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&kp(t,a,r),r};let ce=class extends c{constructor(){super(...arguments),this.heading="Payment details",this.loading=!1,this.error="",this.cardNumber="",this.expiry="",this.cvc="",this.name=""}formatCard(e){return e.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim()}formatExpiry(e){const t=e.replace(/\D/g,"").slice(0,4);return t.length>=2?`${t.slice(0,2)} / ${t.slice(2)}`:t}handleSubmit(e){e.preventDefault();const t=this.cardNumber.replace(/\s/g,"");t.length<16||this.expiry.length<7||this.cvc.length<3||!this.name||this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{last4:t.slice(-4),expiry:this.expiry,name:this.name}}))}render(){return l`
      <form class="form" @submit=${this.handleSubmit} novalidate>
        <h2 class="heading">${this.heading}</h2>
        ${this.error?l`<p class="error-msg" role="alert">${this.error}</p>`:""}
        <div class="field">
          <label for="card-name">Cardholder name</label>
          <input id="card-name" type="text" autocomplete="cc-name" placeholder="Jane Smith"
            .value=${this.name}
            @input=${e=>{this.name=e.target.value}} />
        </div>
        <div class="field">
          <label for="card-number">Card number</label>
          <input id="card-number" type="text" inputmode="numeric" autocomplete="cc-number" placeholder="1234 5678 9012 3456"
            .value=${this.cardNumber}
            @input=${e=>{this.cardNumber=this.formatCard(e.target.value)}} />
        </div>
        <div class="field-row">
          <div class="field">
            <label for="expiry">Expiry</label>
            <input id="expiry" type="text" inputmode="numeric" autocomplete="cc-exp" placeholder="MM / YY"
              .value=${this.expiry}
              @input=${e=>{this.expiry=this.formatExpiry(e.target.value)}} />
          </div>
          <div class="field">
            <label for="cvc">CVC</label>
            <input id="cvc" type="text" inputmode="numeric" autocomplete="cc-csc" placeholder="123" maxlength="4"
              .value=${this.cvc}
              @input=${e=>{this.cvc=e.target.value.replace(/\D/g,"").slice(0,4)}} />
          </div>
        </div>
        <button type="submit" class="submit-btn" ?disabled=${this.loading}>
          ${this.loading?l`<span class="spinner"></span>`:""}
          Pay now
        </button>
      </form>
    `}};ce.styles=xp;Xe([n()],ce.prototype,"heading",2);Xe([n({type:Boolean,reflect:!0})],ce.prototype,"loading",2);Xe([n()],ce.prototype,"error",2);Xe([p()],ce.prototype,"cardNumber",2);Xe([p()],ce.prototype,"expiry",2);Xe([p()],ce.prototype,"cvc",2);Xe([p()],ce.prototype,"name",2);ce=Xe([d("wu-payment-form")],ce);const _p=u`
  :host { display: block; }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-4);
    padding: var(--wu-space-5);
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    max-width: 360px;
    font-family: var(--wu-font-sans);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--wu-space-2);
  }

  .order-id {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    padding: var(--wu-space-1) var(--wu-space-2);
    border-radius: var(--wu-radius-full);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
  }

  .status-pending    { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }
  .status-processing { background: var(--wu-color-info-subtle);    color: var(--wu-color-info); }
  .status-shipped    { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); }
  .status-delivered  { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  .status-cancelled  { background: var(--wu-color-danger-subtle);  color: var(--wu-color-danger); }

  .timeline {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
  }

  .step {
    display: flex;
    align-items: flex-start;
    gap: var(--wu-space-3);
    position: relative;
    padding-bottom: var(--wu-space-4);
  }

  .step:last-child { padding-bottom: 0; }

  .step::after {
    content: '';
    position: absolute;
    left: 11px;
    top: 24px;
    bottom: 0;
    width: 2px;
    background: var(--wu-color-border);
  }

  .step:last-child::after { display: none; }

  .step.done::after { background: var(--wu-color-success); }

  .circle {
    flex-shrink: 0;
    width: 24px; height: 24px;
    border-radius: 50%;
    border: 2px solid var(--wu-color-border);
    background: var(--wu-color-background);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wu-color-text-disabled);
    position: relative;
    z-index: 1;
  }

  .step.done .circle {
    background: var(--wu-color-success);
    border-color: var(--wu-color-success);
    color: white;
  }

  .step-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-top: 2px;
  }

  .step-label {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .step.done .step-label { color: var(--wu-color-text); }

  .step-date {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }
`;var zp=Object.defineProperty,Cp=Object.getOwnPropertyDescriptor,aa=(e,t,a,o)=>{for(var r=o>1?void 0:o?Cp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&zp(t,a,r),r};let Qt=class extends c{constructor(){super(...arguments),this.orderId="",this.status="pending",this.steps=[{label:"Order placed",date:"",done:!1},{label:"Processing",date:"",done:!1},{label:"Shipped",date:"",done:!1},{label:"Delivered",date:"",done:!1}]}statusLabel(){return{pending:"Pending",processing:"Processing",shipped:"Shipped",delivered:"Delivered",cancelled:"Cancelled"}[this.status]??this.status}render(){return l`
      <div class="wrapper">
        <div class="header">
          ${this.orderId?l`<span class="order-id">Order #${this.orderId}</span>`:""}
          <span class="status-badge status-${this.status}">${this.statusLabel()}</span>
        </div>
        <ol class="timeline" aria-label="Order timeline">
          ${m(this.steps,e=>e.label,e=>l`
              <li class="step ${e.done?"done":""}">
                <div class="circle" aria-hidden="true">${e.done?l`<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`:""}</div>
                <div class="step-content">
                  <span class="step-label">${e.label}</span>
                  ${e.date?l`<span class="step-date">${e.date}</span>`:""}
                </div>
              </li>
            `)}
        </ol>
      </div>
    `}};Qt.styles=_p;aa([n({attribute:"order-id"})],Qt.prototype,"orderId",2);aa([n({reflect:!0})],Qt.prototype,"status",2);aa([n({type:Array})],Qt.prototype,"steps",2);Qt=aa([d("wu-order-status")],Qt);const jp=u`
  :host { display: inline-flex; }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    padding: var(--wu-space-2);
    background: transparent;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
  }

  .btn:hover {
    background: var(--wu-color-danger-subtle);
    border-color: var(--wu-color-danger);
    color: var(--wu-color-danger);
  }

  .btn:focus-visible { box-shadow: var(--wu-focus-ring); }

  :host([active]) .btn {
    color: var(--wu-color-danger);
    border-color: var(--wu-color-danger);
    background: var(--wu-color-danger-subtle);
  }

  .heart { width: 20px; height: 20px; }

  .count {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    line-height: 1;
    padding-right: var(--wu-space-1);
  }
`;var Op=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,La=(e,t,a,o)=>{for(var r=o>1?void 0:o?Pp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Op(t,a,r),r};let Hr=class extends c{constructor(){super(...arguments),this.active=!1,this.count=0}handleClick(){this.active=!this.active,this.dispatchEvent(new CustomEvent("wu-toggle",{bubbles:!0,composed:!0,detail:{active:this.active}}))}render(){return l`
      <button
        class="btn"
        type="button"
        aria-label=${this.active?"Remove from wishlist":"Add to wishlist"}
        aria-pressed=${String(this.active)}
        @click=${this.handleClick}
      >
        <svg class="heart" viewBox="0 0 24 24" fill="${this.active?"currentColor":"none"}" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
        ${this.count>0?l`<span class="count">${this.count}</span>`:""}
      </button>
    `}};Hr.styles=jp;La([n({type:Boolean,reflect:!0})],Hr.prototype,"active",2);La([n({type:Number})],Hr.prototype,"count",2);Hr=La([d("wu-wishlist-button")],Hr);const Ep=u`
  :host { display: block; height: 100%; }

  .shell {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 1fr;
    height: 100%;
    min-height: 100dvh;
    background: var(--wu-color-background);
  }

  .shell.collapsed { grid-template-columns: 60px 1fr; }
  .shell.no-sidebar { grid-template-columns: 1fr; }

  .sidebar {
    background: var(--wu-color-surface);
    border-right: 1px solid var(--wu-color-border);
    overflow-y: auto;
    overflow-x: hidden;
  }

  .body {
    display: grid;
    grid-template-rows: auto 1fr;
    overflow: hidden;
  }

  .header {
    background: var(--wu-color-surface-raised);
    border-bottom: 1px solid var(--wu-color-border);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .main {
    overflow-y: auto;
    padding: var(--wu-space-6);
  }
`;var Sp=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,Ra=(e,t,a,o)=>{for(var r=o>1?void 0:o?Dp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Sp(t,a,r),r};let Kr=class extends c{constructor(){super(...arguments),this.sidebarCollapsed=!1,this.noSidebar=!1}render(){return l`
      <div class="shell ${this.sidebarCollapsed?"collapsed":""} ${this.noSidebar?"no-sidebar":""}">
        ${this.noSidebar?"":l`<aside class="sidebar"><slot name="sidebar"></slot></aside>`}
        <div class="body">
          <header class="header"><slot name="header"></slot></header>
          <main class="main"><slot></slot></main>
        </div>
      </div>
    `}};Kr.styles=Ep;Ra([n({type:Boolean,reflect:!0,attribute:"sidebar-collapsed"})],Kr.prototype,"sidebarCollapsed",2);Ra([n({type:Boolean,attribute:"no-sidebar"})],Kr.prototype,"noSidebar",2);Kr=Ra([d("wu-app-shell")],Kr);const Bp=u`
  :host { display: block; }

  .header {
    display: flex;
    align-items: center;
    gap: var(--wu-space-4);
    padding: 0 var(--wu-space-6);
    height: 56px;
    background: var(--wu-color-surface-raised);
    border-bottom: 1px solid var(--wu-color-border);
    font-family: var(--wu-font-sans);
  }

  .logo { flex-shrink: 0; }

  .wordmark {
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-text);
  }

  .nav { flex: 1; display: flex; align-items: center; gap: var(--wu-space-1); }

  .actions { flex-shrink: 0; display: flex; align-items: center; gap: var(--wu-space-2); }
`;var Mp=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,hs=(e,t,a,o)=>{for(var r=o>1?void 0:o?Ap(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Mp(t,a,r),r};let Oo=class extends c{constructor(){super(...arguments),this.heading=""}render(){return l`
      <header class="header" role="banner">
        <div class="logo"><slot name="logo">${this.heading?l`<span class="wordmark">${this.heading}</span>`:""}</slot></div>
        <nav class="nav" aria-label="Primary"><slot name="nav"></slot></nav>
        <div class="actions"><slot name="actions"></slot></div>
      </header>
    `}};Oo.styles=Bp;hs([n()],Oo.prototype,"heading",2);Oo=hs([d("wu-app-header")],Oo);const Ip=u`
  :host { display: block; }

  .bar {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    cursor: text;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .bar:focus-within {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .icon {
    flex-shrink: 0;
    width: 16px; height: 16px;
    color: var(--wu-color-text-secondary);
  }

  .input {
    flex: 1;
    border: none;
    background: transparent;
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    outline: none;
    min-width: 0;
  }

  .input::placeholder { color: var(--wu-color-text-disabled); }

  .placeholder {
    flex: 1;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-disabled);
    user-select: none;
  }

  .shortcut {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    padding: 2px 6px;
    background: var(--wu-color-background);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-sm);
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }
`;var qp=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,co=(e,t,a,o)=>{for(var r=o>1?void 0:o?Np(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&qp(t,a,r),r};let pt=class extends c{constructor(){super(...arguments),this.placeholder="Search or type a command…",this.shortcut="⌘K",this.readonlyTrigger=!1,this.query=""}handleInput(e){this.query=e.target.value,this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{query:this.query}}))}handleClick(){this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0}))}render(){return l`
      <div class="bar" role="search" @click=${this.readonlyTrigger?this.handleClick:void 0}>
        <svg class="icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
          <circle cx="9" cy="9" r="6" stroke-width="1.5"/>
          <path d="M15 15l-3-3" stroke-width="2" stroke-linecap="round"/>
        </svg>
        ${this.readonlyTrigger?l`<span class="placeholder">${this.placeholder}</span>`:l`<input type="search" class="input" placeholder=${this.placeholder} .value=${this.query} @input=${this.handleInput} aria-label="Search" />`}
        ${this.shortcut?l`<kbd class="shortcut">${this.shortcut}</kbd>`:""}
      </div>
    `}};pt.styles=Ip;co([n()],pt.prototype,"placeholder",2);co([n()],pt.prototype,"shortcut",2);co([n({type:Boolean,attribute:"readonly-trigger"})],pt.prototype,"readonlyTrigger",2);co([p()],pt.prototype,"query",2);pt=co([d("wu-command-bar")],pt);const Tp=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .feed { display: flex; flex-direction: column; gap: var(--wu-space-3); }

  .heading {
    margin: 0 0 var(--wu-space-2);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--wu-color-text-secondary);
  }

  .empty {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
  }

  .list { list-style: none; margin: 0; padding: 0; }

  .item {
    display: flex;
    gap: var(--wu-space-3);
    position: relative;
  }

  .avatar-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  }

  .avatar {
    width: 32px; height: 32px;
    border-radius: 50%;
    object-fit: cover;
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .initials {
    width: 32px; height: 32px;
    border-radius: 50%;
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .connector {
    flex: 1;
    width: 2px;
    background: var(--wu-color-border);
    margin-top: 2px;
    min-height: 16px;
  }

  .item:last-child .connector { display: none; }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: var(--wu-space-4);
    min-width: 0;
  }

  .item:last-child .content { padding-bottom: 0; }

  .text {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }

  .text strong { font-weight: var(--wu-font-semibold); }
  .text em { font-style: normal; color: var(--wu-color-primary); }

  .time {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }
`;var Lp=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,sa=(e,t,a,o)=>{for(var r=o>1?void 0:o?Rp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Lp(t,a,r),r};let Zt=class extends c{constructor(){super(...arguments),this.items=[],this.heading="Activity",this.showHeading=!1}initials(e){return e.split(" ").map(t=>t[0]).join("").slice(0,2).toUpperCase()}render(){return l`
      <div class="feed">
        ${this.showHeading?l`<h3 class="heading">${this.heading}</h3>`:""}
        ${this.items.length===0?l`<p class="empty">No activity yet.</p>`:l`
            <ul class="list" aria-label="${this.heading}">
              ${m(this.items,e=>e.id,e=>l`
                  <li class="item">
                    <div class="avatar-wrap">
                      ${e.avatarUrl?l`<img src="${e.avatarUrl}" alt="${e.actor}" class="avatar" />`:l`<span class="avatar initials">${this.initials(e.actor)}</span>`}
                      <span class="connector" aria-hidden="true"></span>
                    </div>
                    <div class="content">
                      <p class="text"><strong>${e.actor}</strong> ${e.action}${e.target?l` <em>${e.target}</em>`:""}</p>
                      <time class="time">${e.time}</time>
                    </div>
                  </li>
                `)}
            </ul>
          `}
      </div>
    `}};Zt.styles=Tp;sa([n({type:Array})],Zt.prototype,"items",2);sa([n()],Zt.prototype,"heading",2);sa([n({type:Boolean,attribute:"show-heading"})],Zt.prototype,"showHeading",2);Zt=sa([d("wu-activity-feed")],Zt);const Hp=u`
  :host { display: block; }
  .wrapper { position: relative; }

  .textarea {
    width: 100%;
    box-sizing: border-box;
    padding: var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    background: var(--wu-color-background);
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    line-height: var(--wu-leading-normal);
    resize: vertical;
    outline: none;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .textarea::placeholder { color: var(--wu-color-text-disabled); }
  .textarea:focus { border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }
  .textarea.mentioning { border-color: var(--wu-color-primary); }

  .mention-hint {
    margin-top: var(--wu-space-1);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-primary);
  }
`;var Kp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,fr=(e,t,a,o)=>{for(var r=o>1?void 0:o?Fp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Kp(t,a,r),r};let Le=class extends c{constructor(){super(...arguments),this.value="",this.placeholder="Type @ to mention someone…",this.rows=3,this.mentionQuery="",this.mentioning=!1}handleInput(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("wu-input",{bubbles:!0,composed:!0,detail:{value:this.value}}));const a=t.selectionStart??t.value.length,o=t.value.slice(0,a).match(/@(\w*)$/);o?(this.mentioning=!0,this.mentionQuery=o[1],this.dispatchEvent(new CustomEvent("wu-mention",{bubbles:!0,composed:!0,detail:{query:o[1]}}))):(this.mentioning=!1,this.mentionQuery="")}render(){return l`
      <div class="wrapper">
        <textarea
          class="textarea ${this.mentioning?"mentioning":""}"
          rows=${this.rows}
          placeholder=${this.placeholder}
          .value=${this.value}
          @input=${this.handleInput}
          aria-label=${this.placeholder}
        ></textarea>
        ${this.mentioning?l`<div class="mention-hint" role="status">Mentioning: @${this.mentionQuery}</div>`:""}
      </div>
    `}};Le.styles=Hp;fr([n()],Le.prototype,"value",2);fr([n()],Le.prototype,"placeholder",2);fr([n({type:Number})],Le.prototype,"rows",2);fr([p()],Le.prototype,"mentionQuery",2);fr([p()],Le.prototype,"mentioning",2);Le=fr([d("wu-mention-input")],Le);const Up=u`
  :host { display: inline-flex; }

  .bar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wu-space-1);
    align-items: center;
  }

  .reaction, .add-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: var(--wu-space-1) var(--wu-space-2);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-surface);
    cursor: pointer;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
  }

  .reaction:hover, .add-btn:hover {
    background: var(--wu-color-primary-subtle);
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary);
  }

  .reaction:focus-visible, .add-btn:focus-visible { box-shadow: var(--wu-focus-ring); }

  .reaction.active {
    background: var(--wu-color-primary-subtle);
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary);
  }

  .emoji { font-size: 1rem; line-height: 1; }
  .count { font-weight: var(--wu-font-semibold); }
  .add-btn { padding: var(--wu-space-1) var(--wu-space-2); font-size: var(--wu-text-sm); }
`;var Vp=Object.defineProperty,Yp=Object.getOwnPropertyDescriptor,Ha=(e,t,a,o)=>{for(var r=o>1?void 0:o?Yp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Vp(t,a,r),r};let Fr=class extends c{constructor(){super(...arguments),this.reactions=[],this.showAdd=!1}handleReact(e){const t=this.reactions.map(o=>o.emoji===e.emoji?{...o,reacted:!o.reacted,count:o.reacted?o.count-1:o.count+1}:o);this.reactions=t;const a=t.find(o=>o.emoji===e.emoji);this.dispatchEvent(new CustomEvent("wu-react",{bubbles:!0,composed:!0,detail:{emoji:a.emoji,reacted:a.reacted}}))}render(){return l`
      <div class="bar" role="group" aria-label="Reactions">
        ${m(this.reactions,e=>e.emoji,e=>l`
            <button
              class="reaction ${e.reacted?"active":""}"
              type="button"
              aria-label="${e.emoji} ${e.count} reaction${e.count!==1?"s":""}"
              aria-pressed=${String(e.reacted)}
              @click=${()=>this.handleReact(e)}
            >
              <span class="emoji">${e.emoji}</span>
              <span class="count">${e.count}</span>
            </button>
          `)}
        ${this.showAdd?l`<button class="add-btn" type="button" aria-label="Add reaction">+</button>`:""}
      </div>
    `}};Fr.styles=Up;Ha([n({type:Array})],Fr.prototype,"reactions",2);Ha([n({type:Boolean,attribute:"show-add"})],Fr.prototype,"showAdd",2);Fr=Ha([d("wu-reaction-bar")],Fr);const Wp=u`
  :host { display: block; }

  .prose {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    line-height: var(--wu-leading-relaxed);
    color: var(--wu-color-text);
    max-width: 65ch;
  }

  :host([compact]) .prose {
    font-size: var(--wu-text-sm);
    line-height: var(--wu-leading-normal);
    max-width: none;
  }

  .prose :is(h1,h2,h3,h4,h5,h6) {
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
    margin-top: var(--wu-space-5);
    margin-bottom: var(--wu-space-2);
    line-height: var(--wu-leading-tight);
  }

  .prose p { margin: 0 0 var(--wu-space-3); }

  .prose a { color: var(--wu-color-primary); text-decoration: underline; }
  .prose a:hover { color: var(--wu-color-primary-hover); }

  .prose strong { font-weight: var(--wu-font-semibold); }
  .prose em { font-style: italic; }

  .prose ul, .prose ol { padding-left: var(--wu-space-5); margin: 0 0 var(--wu-space-3); }
  .prose li { margin-bottom: var(--wu-space-1); }

  .prose blockquote {
    border-left: 3px solid var(--wu-color-border-strong);
    padding-left: var(--wu-space-4);
    margin: var(--wu-space-4) 0;
    color: var(--wu-color-text-secondary);
  }

  .prose code {
    font-family: var(--wu-font-mono);
    font-size: 0.85em;
    background: var(--wu-color-surface);
    padding: 2px 5px;
    border-radius: var(--wu-radius-sm);
  }

  .prose pre {
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-4);
    overflow-x: auto;
    margin: var(--wu-space-4) 0;
  }

  .prose pre code { background: none; padding: 0; }

  .prose hr {
    border: none;
    border-top: 1px solid var(--wu-color-border);
    margin: var(--wu-space-6) 0;
  }
`;var Xp=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,Ka=(e,t,a,o)=>{for(var r=o>1?void 0:o?Gp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Xp(t,a,r),r};let Ur=class extends c{constructor(){super(...arguments),this.content="",this.compact=!1}render(){return l`
      <div class="prose" aria-live="polite">
        ${this.content?Cs(this.content):l`<slot></slot>`}
      </div>
    `}};Ur.styles=Wp;Ka([n()],Ur.prototype,"content",2);Ka([n({type:Boolean,reflect:!0})],Ur.prototype,"compact",2);Ur=Ka([d("wu-rich-text-viewer")],Ur);const Jp=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .changelog { display: flex; flex-direction: column; gap: var(--wu-space-6); }

  .empty { margin: 0; font-size: var(--wu-text-sm); color: var(--wu-color-text-secondary); }

  .entry { display: flex; flex-direction: column; gap: var(--wu-space-3); }

  .version-row {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    border-bottom: 1px solid var(--wu-color-border);
    padding-bottom: var(--wu-space-2);
  }

  .version {
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .date {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
  }

  .changes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--wu-space-2); }

  .change { display: flex; align-items: flex-start; gap: var(--wu-space-2); }

  .badge {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    padding: 2px 6px;
    border-radius: var(--wu-radius-sm);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .type-added   { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  .type-fixed   { background: var(--wu-color-info-subtle);    color: var(--wu-color-info); }
  .type-changed { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }
  .type-removed { background: var(--wu-color-danger-subtle);  color: var(--wu-color-danger); }

  .change-text {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Qp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,vs=(e,t,a,o)=>{for(var r=o>1?void 0:o?Zp(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Qp(t,a,r),r};let Po=class extends c{constructor(){super(...arguments),this.entries=[]}typeLabel(e){return{added:"Added",fixed:"Fixed",changed:"Changed",removed:"Removed"}[e]??e}render(){return l`
      <div class="changelog">
        ${this.entries.length===0?l`<p class="empty">No changelog entries.</p>`:m(this.entries,e=>e.version,e=>l`
                <section class="entry" aria-label="Version ${e.version}">
                  <div class="version-row">
                    <span class="version">${e.version}</span>
                    <time class="date">${e.date}</time>
                  </div>
                  <ul class="changes">
                    ${m(e.changes,(t,a)=>`${e.version}-${a}`,t=>l`
                        <li class="change">
                          <span class="badge type-${t.type}">${this.typeLabel(t.type)}</span>
                          <span class="change-text">${t.text}</span>
                        </li>
                      `)}
                  </ul>
                </section>
              `)}
      </div>
    `}};Po.styles=Jp;vs([n({type:Array})],Po.prototype,"entries",2);Po=vs([d("wu-changelog")],Po);const eh=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .wrapper { display: flex; flex-direction: column; gap: var(--wu-space-5); }

  .heading {
    margin: 0;
    font-size: var(--wu-text-xl);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .group { display: flex; flex-direction: column; gap: var(--wu-space-2); }

  .group-heading {
    margin: 0;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--wu-color-text-secondary);
    padding-bottom: var(--wu-space-1);
    border-bottom: 1px solid var(--wu-color-border);
  }

  .list { margin: 0; padding: 0; display: flex; flex-direction: column; }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-2) 0;
    border-bottom: 1px solid var(--wu-color-border);
  }

  .row:last-child { border-bottom: none; }

  .desc {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }

  .keys {
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0;
  }

  kbd {
    display: inline-flex;
    align-items: center;
    padding: 2px 7px;
    border: 1px solid var(--wu-color-border-strong);
    border-bottom-width: 2px;
    border-radius: var(--wu-radius-sm);
    background: var(--wu-color-surface);
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text);
    box-shadow: var(--wu-shadow-sm);
  }
`;var th=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,Fa=(e,t,a,o)=>{for(var r=o>1?void 0:o?rh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&th(t,a,r),r};let Vr=class extends c{constructor(){super(...arguments),this.shortcuts=[],this.heading="Keyboard shortcuts"}grouped(){const e=new Map;for(const t of this.shortcuts){const a=t.group??"General";e.has(a)||e.set(a,[]),e.get(a).push(t)}return e}render(){const e=this.grouped();return l`
      <div class="wrapper">
        <h2 class="heading">${this.heading}</h2>
        ${[...e.entries()].map(([t,a])=>l`
            <section class="group">
              <h3 class="group-heading">${t}</h3>
              <dl class="list">
                ${m(a,(o,r)=>`${t}-${r}`,o=>l`
                    <div class="row">
                      <dt class="desc">${o.description}</dt>
                      <dd class="keys">${o.keys.map(r=>l`<kbd>${r}</kbd>`)}</dd>
                    </div>
                  `)}
              </dl>
            </section>
          `)}
      </div>
    `}};Vr.styles=eh;Fa([n({type:Array})],Vr.prototype,"shortcuts",2);Fa([n()],Vr.prototype,"heading",2);Vr=Fa([d("wu-keyboard-shortcuts")],Vr);const oh=u`
  :host { display: inline-flex; }

  .badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: var(--wu-radius-full);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }

  :host([variant="alpha"])        .badge { background: var(--wu-color-danger-subtle);  color: var(--wu-color-danger); }
  :host([variant="beta"])         .badge { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }
  :host([variant="new"])          .badge { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  :host([variant="experimental"]) .badge { background: var(--wu-color-info-subtle);    color: var(--wu-color-info); }
  :host([variant="deprecated"])   .badge { background: var(--wu-color-surface);        color: var(--wu-color-text-secondary); border: 1px solid var(--wu-color-border); }
  :host([variant="stable"])       .badge { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); }
`;var ah=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,Ua=(e,t,a,o)=>{for(var r=o>1?void 0:o?sh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&ah(t,a,r),r};let Yr=class extends c{constructor(){super(...arguments),this.variant="beta",this.label=""}defaultLabel(){return{alpha:"Alpha",beta:"Beta",new:"New",experimental:"Experimental",deprecated:"Deprecated",stable:"Stable"}[this.variant]??this.variant}render(){return l`
      <span class="badge" role="status" aria-label="Feature status: ${this.label||this.defaultLabel()}">
        ${this.label||this.defaultLabel()}
      </span>
    `}};Yr.styles=oh;Ua([n({reflect:!0})],Yr.prototype,"variant",2);Ua([n()],Yr.prototype,"label",2);Yr=Ua([d("wu-feature-flag-badge")],Yr);const ih=u`
  :host { display: contents; }

  .overlay {
    position: fixed;
    inset: 0;
    z-index: 9000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(2px);
  }

  .panel {
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-xl);
    box-shadow: var(--wu-shadow-xl);
    padding: var(--wu-space-6);
    max-width: 360px;
    width: calc(100vw - 32px);
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-3);
    font-family: var(--wu-font-sans);
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .counter {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
  }

  .skip-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-base);
    padding: var(--wu-space-1);
    border-radius: var(--wu-radius-sm);
    outline: none;
  }
  .skip-btn:focus-visible { box-shadow: var(--wu-focus-ring); }
  .skip-btn:hover { color: var(--wu-color-text); }

  .title {
    margin: 0;
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .content {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    line-height: var(--wu-leading-relaxed);
  }

  .actions {
    display: flex;
    gap: var(--wu-space-2);
    justify-content: flex-end;
  }

  .btn-primary, .btn-secondary {
    padding: var(--wu-space-2) var(--wu-space-4);
    border-radius: var(--wu-radius-md);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    outline: none;
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
  }

  .btn-primary:focus-visible, .btn-secondary:focus-visible { box-shadow: var(--wu-focus-ring); }

  .btn-primary {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
  }
  .btn-primary:hover { background: var(--wu-color-primary-hover); }

  .btn-secondary {
    background: transparent;
    color: var(--wu-color-text);
    border: 1px solid var(--wu-color-border);
  }
  .btn-secondary:hover { background: var(--wu-color-surface); }

  .dots { display: flex; justify-content: center; gap: var(--wu-space-1); }

  .dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--wu-color-border-strong);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .dot.active { background: var(--wu-color-primary); }
`;var nh=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,ia=(e,t,a,o)=>{for(var r=o>1?void 0:o?lh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&nh(t,a,r),r};let er=class extends c{constructor(){super(...arguments),this.steps=[],this.active=!1,this.current=0}goNext(){this.current<this.steps.length-1?(this.current++,this.dispatchEvent(new CustomEvent("wu-step-change",{bubbles:!0,composed:!0,detail:{step:this.current}}))):(this.active=!1,this.dispatchEvent(new CustomEvent("wu-complete",{bubbles:!0,composed:!0})))}goPrev(){this.current>0&&(this.current--,this.dispatchEvent(new CustomEvent("wu-step-change",{bubbles:!0,composed:!0,detail:{step:this.current}})))}skip(){this.active=!1,this.dispatchEvent(new CustomEvent("wu-skip",{bubbles:!0,composed:!0}))}render(){if(!this.active||this.steps.length===0)return l``;const e=this.steps[this.current],t=this.current===this.steps.length-1;return l`
      <div class="overlay" role="dialog" aria-modal="true" aria-label="${e.title}">
        <div class="panel">
          <div class="panel-header">
            <span class="counter">${this.current+1} / ${this.steps.length}</span>
            <button class="skip-btn" type="button" @click=${this.skip} aria-label="Skip tour">✕</button>
          </div>
          <h3 class="title">${e.title}</h3>
          <p class="content">${e.content}</p>
          <div class="actions">
            ${this.current>0?l`<button class="btn-secondary" type="button" @click=${this.goPrev}>Back</button>`:""}
            <button class="btn-primary" type="button" @click=${this.goNext}>${t?"Finish":"Next"}</button>
          </div>
          <div class="dots" aria-hidden="true">
            ${this.steps.map((a,o)=>l`<span class="dot ${o===this.current?"active":""}"></span>`)}
          </div>
        </div>
      </div>
    `}};er.styles=ih;ia([n({type:Array})],er.prototype,"steps",2);ia([n({type:Boolean,reflect:!0})],er.prototype,"active",2);ia([p()],er.prototype,"current",2);er=ia([d("wu-tour")],er);const ch=u`
  :host { display: block; }

  .viewer {
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    line-height: 1.7;
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-4);
    overflow: auto;
  }

  .entries { display: flex; flex-direction: column; }

  .entry {
    display: flex;
    align-items: flex-start;
    gap: 4px;
    padding: 1px 0;
  }

  .key   { color: var(--wu-color-primary); }
  .index { color: var(--wu-color-text-secondary); }
  .colon { color: var(--wu-color-text-secondary); }
  .str   { color: var(--wu-color-success); }
  .num   { color: var(--wu-color-warning); }
  .bool  { color: var(--wu-color-info); }
  .null  { color: var(--wu-color-text-disabled); font-style: italic; }
  .bracket { color: var(--wu-color-text-secondary); }
`;var dh=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,mr=(e,t,a,o)=>{for(var r=o>1?void 0:o?uh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&dh(t,a,r),r};let Wr=class extends c{constructor(){super(...arguments),this.data=null,this.expandDepth=2}renderValue(e,t=0){return e===null?l`<span class="null">null</span>`:typeof e=="boolean"?l`<span class="bool">${String(e)}</span>`:typeof e=="number"?l`<span class="num">${e}</span>`:typeof e=="string"?l`<span class="str">"${e}"</span>`:Array.isArray(e)?this.renderArray(e,t):typeof e=="object"?this.renderObject(e,t):l``}renderArray(e,t){if(e.length===0)return l`<span class="bracket">[]</span>`;const a=t<this.expandDepth;return l`
      <wu-json-node ?expanded=${a} label="Array(${e.length})">
        <div class="entries">
          ${e.map((o,r)=>l`
            <div class="entry">
              <span class="index">${r}</span>
              <span class="colon">:</span>
              ${this.renderValue(o,t+1)}
            </div>
          `)}
        </div>
      </wu-json-node>
    `}renderObject(e,t){const a=Object.keys(e);if(a.length===0)return l`<span class="bracket">{}</span>`;const o=t<this.expandDepth;return l`
      <wu-json-node ?expanded=${o} label="{${a.length}}">
        <div class="entries">
          ${a.map(r=>l`
            <div class="entry">
              <span class="key">"${r}"</span>
              <span class="colon">:</span>
              ${this.renderValue(e[r],t+1)}
            </div>
          `)}
        </div>
      </wu-json-node>
    `}render(){return l`<div class="viewer" role="tree">${this.renderValue(this.data)}</div>`}};Wr.styles=ch;mr([n({type:Object})],Wr.prototype,"data",2);mr([n({type:Number,attribute:"expand-depth"})],Wr.prototype,"expandDepth",2);Wr=mr([d("wu-json-viewer")],Wr);let Xr=class extends c{constructor(){super(...arguments),this.expanded=!0,this.label=""}render(){return l`
      <button class="toggle" type="button" @click=${()=>{this.expanded=!this.expanded}} aria-expanded=${String(this.expanded)}>
        <span class="arrow ${this.expanded?"open":""}">▶</span>
        <span>${this.label}</span>
      </button>
      ${this.expanded?l`<div class="content"><slot></slot></div>`:""}
    `}};Xr.styles=u`
    :host { display: block; }
    .toggle { cursor: pointer; user-select: none; display: inline-flex; align-items: center; gap: 4px; background: none; border: none; color: var(--wu-color-text-secondary); font-family: var(--wu-font-mono); font-size: var(--wu-text-xs); padding: 0; outline: none; }
    .toggle:focus-visible { box-shadow: var(--wu-focus-ring); }
    .arrow { display: inline-block; transition: transform 0.15s; font-size: 10px; }
    .arrow.open { transform: rotate(90deg); }
    .content { padding-left: 16px; }
  `;mr([n({type:Boolean,reflect:!0})],Xr.prototype,"expanded",2);mr([n()],Xr.prototype,"label",2);Xr=mr([d("wu-json-node")],Xr);const ph=u`
  :host { display: block; }

  .container {
    overflow-y: auto;
    background: var(--wu-color-gray-950, #020617);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-2) 0;
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    line-height: 1.7;
  }

  .empty {
    padding: var(--wu-space-3) var(--wu-space-4);
    color: var(--wu-color-text-disabled);
  }

  .line {
    display: flex;
    align-items: flex-start;
    gap: var(--wu-space-2);
    padding: 1px var(--wu-space-4);
    min-height: 22px;
  }

  .line:hover { background: rgba(255,255,255,0.04); }

  .ts { color: #4b5563; flex-shrink: 0; }

  .badge {
    flex-shrink: 0;
    padding: 0 5px;
    border-radius: 3px;
    font-weight: 700;
    font-size: 10px;
    line-height: 18px;
  }

  .level-info  .badge { background: #1e3a5f; color: #60a5fa; }
  .level-warn  .badge { background: #422006; color: #fbbf24; }
  .level-error .badge { background: #4c0519; color: #f87171; }
  .level-debug .badge { background: #1a1a2e; color: #a78bfa; }

  .level-info  .msg { color: #d1d5db; }
  .level-warn  .msg { color: #fcd34d; }
  .level-error .msg { color: #fca5a5; }
  .level-debug .msg { color: #9ca3af; }
`;var hh=Object.defineProperty,vh=Object.getOwnPropertyDescriptor,na=(e,t,a,o)=>{for(var r=o>1?void 0:o?vh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&hh(t,a,r),r};let tr=class extends c{constructor(){super(...arguments),this.logs=[],this.maxHeight=320,this.autoScroll=!0}updated(){if(this.autoScroll){const e=this.shadowRoot.querySelector(".container");e&&(e.scrollTop=e.scrollHeight)}}render(){return l`
      <div class="container" style="max-height:${this.maxHeight}px" role="log" aria-live="polite" aria-label="Log output">
        ${this.logs.length===0?l`<span class="empty">No log entries.</span>`:m(this.logs,(e,t)=>t,e=>l`
                <div class="line level-${e.level}">
                  ${e.timestamp?l`<span class="ts">${e.timestamp}</span>`:""}
                  <span class="badge">${e.level.toUpperCase()}</span>
                  <span class="msg">${e.message}</span>
                </div>
              `)}
      </div>
    `}};tr.styles=ph;na([n({type:Array})],tr.prototype,"logs",2);na([n({type:Number})],tr.prototype,"maxHeight",2);na([n({type:Boolean,attribute:"auto-scroll"})],tr.prototype,"autoScroll",2);tr=na([d("wu-log-viewer")],tr);const wh=u`
  :host { display: block; }

  .wrapper {
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    overflow: hidden;
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    line-height: 1.7;
  }

  .filename {
    padding: var(--wu-space-2) var(--wu-space-4);
    background: var(--wu-color-surface);
    border-bottom: 1px solid var(--wu-color-border);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
  }

  .table-wrap { overflow-x: auto; background: var(--wu-color-background); }

  .row {
    display: flex;
    align-items: stretch;
    min-height: 22px;
  }

  .row:hover { filter: brightness(1.03); }

  .type-added   { background: color-mix(in srgb, var(--wu-color-success) 10%, transparent); }
  .type-removed { background: color-mix(in srgb, var(--wu-color-danger)  10%, transparent); }
  .type-unchanged { background: transparent; }

  .gutter {
    flex-shrink: 0;
    width: 40px;
    padding: 0 var(--wu-space-2);
    text-align: right;
    color: var(--wu-color-text-disabled);
    border-right: 1px solid var(--wu-color-border);
    user-select: none;
  }

  .sign {
    flex-shrink: 0;
    width: 20px;
    text-align: center;
    user-select: none;
  }

  .type-added   .sign { color: var(--wu-color-success); font-weight: bold; }
  .type-removed .sign { color: var(--wu-color-danger);  font-weight: bold; }

  .content {
    flex: 1;
    padding: 0 var(--wu-space-3);
    white-space: pre;
    color: var(--wu-color-text);
    overflow: visible;
  }
`;var bh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,la=(e,t,a,o)=>{for(var r=o>1?void 0:o?gh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&bh(t,a,r),r};let rr=class extends c{constructor(){super(...arguments),this.lines=[],this.mode="unified",this.filename=""}render(){return l`
      <div class="wrapper">
        ${this.filename?l`<div class="filename">${this.filename}</div>`:""}
        <div class="table-wrap" role="table" aria-label="Code diff">
          ${m(this.lines,(e,t)=>t,e=>l`
              <div class="row type-${e.type}" role="row">
                <span class="gutter old" role="cell">${e.lineOld??""}</span>
                <span class="gutter new" role="cell">${e.lineNew??""}</span>
                <span class="sign" role="cell">${e.type==="added"?"+":e.type==="removed"?"-":" "}</span>
                <span class="content" role="cell">${e.content}</span>
              </div>
            `)}
        </div>
      </div>
    `}};rr.styles=wh;la([n({type:Array})],rr.prototype,"lines",2);la([n({reflect:!0})],rr.prototype,"mode",2);la([n()],rr.prototype,"filename",2);rr=la([d("wu-diff-viewer")],rr);const fh=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  .builder { display: flex; flex-direction: column; gap: var(--wu-space-3); }

  .empty {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
  }

  .rules { display: flex; flex-direction: column; gap: var(--wu-space-2); }

  .rule {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    flex-wrap: wrap;
  }

  .conjunction {
    flex-shrink: 0;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    min-width: 28px;
    text-align: center;
  }

  .select, .value-input {
    padding: var(--wu-space-1) var(--wu-space-2);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    background: var(--wu-color-background);
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    outline: none;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .select:focus, .value-input:focus { border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }

  .value-input { flex: 1; min-width: 120px; }

  .remove-btn {
    flex-shrink: 0;
    width: 28px; height: 28px;
    display: inline-flex; align-items: center; justify-content: center;
    background: transparent;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-sm);
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    font-size: var(--wu-text-sm);
    outline: none;
  }
  .remove-btn:hover { background: var(--wu-color-danger-subtle); border-color: var(--wu-color-danger); color: var(--wu-color-danger); }
  .remove-btn:focus-visible { box-shadow: var(--wu-focus-ring); }

  .add-btn {
    align-self: flex-start;
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-primary-subtle);
    border: 1px dashed var(--wu-color-primary);
    border-radius: var(--wu-radius-md);
    color: var(--wu-color-primary);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    cursor: pointer;
    outline: none;
  }
  .add-btn:hover { background: var(--wu-color-primary); color: var(--wu-color-primary-fg); border-style: solid; }
  .add-btn:focus-visible { box-shadow: var(--wu-focus-ring); }
`;var mh=Object.defineProperty,yh=Object.getOwnPropertyDescriptor,ca=(e,t,a,o)=>{for(var r=o>1?void 0:o?yh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&mh(t,a,r),r};const Za=["equals","not equals","contains","starts with","ends with"],xh=["=","!=",">","<",">=","<="],kh=["is true","is false"];let or=class extends c{constructor(){super(...arguments),this.fields=[],this.rules=[],this.internalRules=[]}connectedCallback(){super.connectedCallback(),this.internalRules=[...this.rules]}operators(e){const t=this.fields.find(a=>a.id===e);return t?t.type==="number"||t.type==="date"?xh:t.type==="boolean"?kh:Za:Za}addRule(){const e=this.fields[0];if(!e)return;const t=this.operators(e.id);this.internalRules=[...this.internalRules,{id:crypto.randomUUID(),field:e.id,operator:t[0],value:""}],this.emit()}removeRule(e){this.internalRules=this.internalRules.filter(t=>t.id!==e),this.emit()}updateRule(e,t){this.internalRules=this.internalRules.map(a=>a.id===e?{...a,...t}:a),this.emit()}emit(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{rules:this.internalRules}}))}render(){return l`
      <div class="builder">
        ${this.internalRules.length===0?l`<p class="empty">No filters. Click "Add filter" to get started.</p>`:""}
        <div class="rules">
          ${m(this.internalRules,e=>e.id,(e,t)=>l`
              <div class="rule">
                ${t>0?l`<span class="conjunction">AND</span>`:""}
                <select class="select" @change=${a=>this.updateRule(e.id,{field:a.target.value,operator:this.operators(a.target.value)[0]})} aria-label="Field">
                  ${this.fields.map(a=>l`<option value=${a.id} ?selected=${a.id===e.field}>${a.label}</option>`)}
                </select>
                <select class="select" @change=${a=>this.updateRule(e.id,{operator:a.target.value})} aria-label="Operator">
                  ${this.operators(e.field).map(a=>l`<option value=${a} ?selected=${a===e.operator}>${a}</option>`)}
                </select>
                <input class="value-input" type="text" placeholder="Value" .value=${e.value}
                  @input=${a=>this.updateRule(e.id,{value:a.target.value})}
                  aria-label="Value" />
                <button class="remove-btn" type="button" @click=${()=>this.removeRule(e.id)} aria-label="Remove filter">✕</button>
              </div>
            `)}
        </div>
        <button class="add-btn" type="button" @click=${this.addRule}>+ Add filter</button>
      </div>
    `}};or.styles=fh;ca([n({type:Array})],or.prototype,"fields",2);ca([n({type:Array})],or.prototype,"rules",2);ca([p()],or.prototype,"internalRules",2);or=ca([d("wu-query-builder")],or);const ws=u`
  :host { display: block; font-family: var(--wu-font-sans); }

  /* wu-chat */
  .chat-container {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-3);
    padding: var(--wu-space-4);
    background: var(--wu-color-background);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
  }

  /* wu-chat-bubble */
  .bubble-row {
    display: flex;
    align-items: flex-end;
    gap: var(--wu-space-2);
  }

  :host([side="right"]) .bubble-row { flex-direction: row-reverse; }

  .avatar {
    flex-shrink: 0;
    width: 28px; height: 28px;
    border-radius: 50%;
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bubble {
    max-width: 70%;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  :host([side="right"]) .bubble { align-items: flex-end; }

  .author {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    padding: 0 var(--wu-space-1);
  }

  .content {
    padding: var(--wu-space-2) var(--wu-space-3);
    border-radius: var(--wu-radius-lg);
    font-size: var(--wu-text-sm);
    line-height: var(--wu-leading-normal);
    word-break: break-word;
  }

  :host([side="left"])  .content { background: var(--wu-color-surface); color: var(--wu-color-text); border-bottom-left-radius: var(--wu-radius-sm); }
  :host([side="right"]) .content { background: var(--wu-color-primary); color: var(--wu-color-primary-fg); border-bottom-right-radius: var(--wu-radius-sm); }

  .time {
    font-size: 10px;
    color: var(--wu-color-text-disabled);
    padding: 0 var(--wu-space-1);
  }
`;var $h=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,Ct=(e,t,a,o)=>{for(var r=o>1?void 0:o?_h(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&$h(t,a,r),r};let ht=class extends c{constructor(){super(...arguments),this.side="left",this.author="",this.time="",this.showAvatar=!1}initials(){return this.author.split(" ").map(e=>e[0]).join("").slice(0,2).toUpperCase()}render(){return l`
      <div class="bubble-row">
        ${this.showAvatar&&this.side==="left"?l`<span class="avatar" aria-hidden="true">${this.initials()}</span>`:""}
        <div class="bubble">
          ${this.author?l`<span class="author">${this.author}</span>`:""}
          <div class="content"><slot></slot></div>
          ${this.time?l`<span class="time">${this.time}</span>`:""}
        </div>
        ${this.showAvatar&&this.side==="right"?l`<span class="avatar" aria-hidden="true">${this.initials()}</span>`:""}
      </div>
    `}};ht.styles=ws;Ct([n({reflect:!0})],ht.prototype,"side",2);Ct([n()],ht.prototype,"author",2);Ct([n()],ht.prototype,"time",2);Ct([n({type:Boolean,attribute:"show-avatar"})],ht.prototype,"showAvatar",2);ht=Ct([d("wu-chat-bubble")],ht);let Eo=class extends c{constructor(){super(...arguments),this.maxHeight=400}render(){return l`
      <div class="chat-container" style="max-height:${this.maxHeight}px" role="log" aria-label="Chat messages" aria-live="polite">
        <slot></slot>
      </div>
    `}};Eo.styles=ws;Ct([n({type:Number,attribute:"max-height"})],Eo.prototype,"maxHeight",2);Eo=Ct([d("wu-chat")],Eo);const zh=u`
  :host {
    display: block;
    --wu-sig-border: var(--wu-color-border);
    --wu-sig-bg: var(--wu-color-surface);
    --wu-sig-radius: var(--wu-radius-md);
    --wu-sig-line-color: var(--wu-color-text);
  }

  .wrapper {
    position: relative;
    border: 1px solid var(--wu-sig-border);
    border-radius: var(--wu-sig-radius);
    background: var(--wu-sig-bg);
    overflow: hidden;
  }

  canvas {
    display: block;
    width: 100%;
    touch-action: none;
    cursor: crosshair;
  }

  .placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wu-color-text-disabled);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    pointer-events: none;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    padding: var(--wu-space-2) var(--wu-space-3);
    border-top: 1px solid var(--wu-sig-border);
    background: var(--wu-color-surface);
  }

  .clear-btn {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--wu-space-1) var(--wu-space-2);
    border-radius: var(--wu-radius-sm);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .clear-btn:hover {
    background: var(--wu-color-surface-raised);
  }

  .clear-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }
`;var Ch=Object.defineProperty,jh=Object.getOwnPropertyDescriptor,uo=(e,t,a,o)=>{for(var r=o>1?void 0:o?jh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ch(t,a,r),r};let vt=class extends c{constructor(){super(...arguments),this.height=160,this.lineWidth=2,this.empty=!0,this.drawing=!1,this.ctx=null}firstUpdated(){this.canvas.width=this.canvas.offsetWidth*devicePixelRatio,this.canvas.height=this.height*devicePixelRatio,this.ctx=this.canvas.getContext("2d"),this.ctx&&(this.ctx.scale(devicePixelRatio,devicePixelRatio),this.ctx.lineCap="round",this.ctx.lineJoin="round")}getPos(e){const t=this.canvas.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}onPointerDown(e){var t,a;this.drawing=!0,this.canvas.setPointerCapture(e.pointerId);const{x:o,y:r}=this.getPos(e);(t=this.ctx)==null||t.beginPath(),(a=this.ctx)==null||a.moveTo(o,r)}onPointerMove(e){if(!this.drawing)return;const{x:t,y:a}=this.getPos(e);this.ctx&&(this.ctx.strokeStyle=getComputedStyle(this).getPropertyValue("--wu-sig-line-color").trim()||"#000",this.ctx.lineWidth=this.lineWidth,this.ctx.lineTo(t,a),this.ctx.stroke())}onPointerUp(){this.drawing&&(this.drawing=!1,this.empty=!1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{dataUrl:this.toDataURL()}})))}toDataURL(){var e;return((e=this.canvas)==null?void 0:e.toDataURL("image/png"))??""}clear(){this.ctx&&this.canvas&&this.ctx.clearRect(0,0,this.canvas.offsetWidth,this.height),this.empty=!0,this.dispatchEvent(new CustomEvent("wu-clear",{bubbles:!0,composed:!0}))}render(){return l`
      <div class="wrapper">
        <canvas
          style="height:${this.height}px"
          @pointerdown=${this.onPointerDown}
          @pointermove=${this.onPointerMove}
          @pointerup=${this.onPointerUp}
          @pointercancel=${this.onPointerUp}
          role="img"
          aria-label="Signature pad"
        ></canvas>
        ${this.empty?l`<span class="placeholder">Sign here</span>`:""}
      </div>
      <div class="actions">
        <button class="clear-btn" type="button" @click=${this.clear}>Clear</button>
      </div>
    `}};vt.styles=zh;uo([n({type:Number})],vt.prototype,"height",2);uo([n({type:Number,attribute:"line-width"})],vt.prototype,"lineWidth",2);uo([p()],vt.prototype,"empty",2);uo([ze("canvas")],vt.prototype,"canvas",2);vt=uo([d("wu-signature")],vt);const Oh=u`
  :host {
    display: block;
    --wu-audio-bg: var(--wu-color-surface);
    --wu-audio-border: var(--wu-color-border);
    --wu-audio-radius: var(--wu-radius-lg);
    --wu-audio-accent: var(--wu-color-primary);
  }

  .player {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-audio-bg);
    border: 1px solid var(--wu-audio-border);
    border-radius: var(--wu-audio-radius);
  }

  .ctrl-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--wu-audio-accent);
    color: var(--wu-color-primary-fg);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: opacity var(--wu-duration-fast) var(--wu-ease-default);
  }

  .ctrl-btn:hover { opacity: 0.85; }
  .ctrl-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .progress-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  progress {
    width: 100%;
    height: 4px;
    appearance: none;
    border-radius: 9999px;
    overflow: hidden;
    cursor: pointer;
    background: var(--wu-color-border);
  }

  progress::-webkit-progress-bar { background: var(--wu-color-border); }
  progress::-webkit-progress-value { background: var(--wu-audio-accent); }
  progress::-moz-progress-bar { background: var(--wu-audio-accent); }

  .times {
    display: flex;
    justify-content: space-between;
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .mute-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    padding: var(--wu-space-1);
    border-radius: var(--wu-radius-sm);
    line-height: 1;
  }

  .mute-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;var Ph=Object.defineProperty,Eh=Object.getOwnPropertyDescriptor,Pe=(e,t,a,o)=>{for(var r=o>1?void 0:o?Eh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ph(t,a,r),r};let Y=class extends c{constructor(){super(...arguments),this.src="",this.autoplay=!1,this.loop=!1,this.playing=!1,this.muted=!1,this.currentTime=0,this.duration=0}fmt(e){const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${a.toString().padStart(2,"0")}`}toggle(){this.playing?this.audio.pause():this.audio.play()}onPlay(){this.playing=!0,this.dispatchEvent(new CustomEvent("wu-play",{bubbles:!0,composed:!0}))}onPause(){this.playing=!1,this.dispatchEvent(new CustomEvent("wu-pause",{bubbles:!0,composed:!0}))}onEnded(){this.playing=!1,this.dispatchEvent(new CustomEvent("wu-ended",{bubbles:!0,composed:!0}))}onTimeUpdate(){this.currentTime=this.audio.currentTime}onLoadedMetadata(){this.duration=this.audio.duration}onProgressClick(e){const t=e.currentTarget.getBoundingClientRect(),a=(e.clientX-t.left)/t.width;this.audio.currentTime=a*this.duration}toggleMute(){this.muted=!this.muted,this.audio.muted=this.muted}render(){const e=this.duration?this.currentTime/this.duration:0,t=this.playing?l`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="4" height="16"/><rect x="15" y="4" width="4" height="16"/></svg>`:l`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`,a=this.muted?"🔇":"🔊";return l`
      <audio
        src=${this.src}
        ?autoplay=${this.autoplay}
        ?loop=${this.loop}
        @play=${this.onPlay}
        @pause=${this.onPause}
        @ended=${this.onEnded}
        @timeupdate=${this.onTimeUpdate}
        @loadedmetadata=${this.onLoadedMetadata}
      ></audio>
      <div class="player" role="region" aria-label="Audio player">
        <button class="ctrl-btn" type="button" aria-label=${this.playing?"Pause":"Play"} @click=${this.toggle}>
          ${t}
        </button>
        <div class="progress-wrap">
          <progress
            max="1"
            .value=${e}
            aria-label="Playback progress"
            @click=${this.onProgressClick}
          ></progress>
          <div class="times">
            <span>${this.fmt(this.currentTime)}</span>
            <span>${this.duration?this.fmt(this.duration):"--:--"}</span>
          </div>
        </div>
        <button class="mute-btn" type="button" aria-label=${this.muted?"Unmute":"Mute"} @click=${this.toggleMute}>
          ${a}
        </button>
      </div>
    `}};Y.styles=Oh;Pe([n()],Y.prototype,"src",2);Pe([n({type:Boolean})],Y.prototype,"autoplay",2);Pe([n({type:Boolean})],Y.prototype,"loop",2);Pe([p()],Y.prototype,"playing",2);Pe([p()],Y.prototype,"muted",2);Pe([p()],Y.prototype,"currentTime",2);Pe([p()],Y.prototype,"duration",2);Pe([ze("audio")],Y.prototype,"audio",2);Y=Pe([d("wu-audio")],Y);const Sh=u`
  :host {
    display: block;
    --wu-cal-bg: var(--wu-color-surface);
    --wu-cal-border: var(--wu-color-border);
    --wu-cal-radius: var(--wu-radius-lg);
    --wu-cal-today-bg: var(--wu-color-primary-subtle);
    --wu-cal-today-border: var(--wu-color-primary);
    --wu-cal-event-bg: var(--wu-color-primary);
    --wu-cal-event-color: var(--wu-color-primary-fg);
  }

  .calendar {
    background: var(--wu-cal-bg);
    border: 1px solid var(--wu-cal-border);
    border-radius: var(--wu-cal-radius);
    overflow: hidden;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-cal-border);
  }

  .month-label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .nav-btn {
    background: none;
    border: 1px solid var(--wu-cal-border);
    border-radius: var(--wu-radius-sm);
    cursor: pointer;
    padding: var(--wu-space-1) var(--wu-space-2);
    color: var(--wu-color-text-secondary);
    line-height: 1;
    font-size: var(--wu-text-sm);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .nav-btn:hover { background: var(--wu-color-surface-raised); }
  .nav-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .dow {
    text-align: center;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    padding: var(--wu-space-2) 0;
    border-bottom: 1px solid var(--wu-cal-border);
  }

  .day {
    min-height: 72px;
    padding: var(--wu-space-1);
    border-right: 1px solid var(--wu-cal-border);
    border-bottom: 1px solid var(--wu-cal-border);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .day:hover { background: var(--wu-color-surface-raised); }
  .day:focus-visible { outline: none; box-shadow: var(--wu-focus-ring) inset; }

  .day:nth-child(7n) { border-right: none; }

  .day.other-month .day-num {
    color: var(--wu-color-text-disabled);
  }

  .day.today {
    background: var(--wu-cal-today-bg);
  }

  .day-num {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    margin-bottom: var(--wu-space-1);
  }

  .day.today .day-num {
    color: var(--wu-cal-today-border);
    font-weight: var(--wu-font-bold);
  }

  .event-chip {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: 10px;
    padding: 1px 4px;
    border-radius: var(--wu-radius-sm);
    background: var(--wu-cal-event-bg);
    color: var(--wu-cal-event-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-bottom: 2px;
  }
`;var Dh=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,da=(e,t,a,o)=>{for(var r=o>1?void 0:o?Bh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Dh(t,a,r),r};const Mh=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],es=["January","February","March","April","May","June","July","August","September","October","November","December"];let ar=class extends c{constructor(){super(),this.events=[];const e=new Date;this.year=e.getFullYear(),this.month=e.getMonth()}prevMonth(){this.month===0?(this.month=11,this.year--):this.month--}nextMonth(){this.month===11?(this.month=0,this.year++):this.month++}getDays(){const e=new Date(this.year,this.month,1),t=new Date(this.year,this.month+1,0),a=[];for(let r=0;r<e.getDay();r++)a.push({date:new Date(this.year,this.month,-e.getDay()+r+1),current:!1});for(let r=1;r<=t.getDate();r++)a.push({date:new Date(this.year,this.month,r),current:!0});const o=42-a.length;for(let r=1;r<=o;r++)a.push({date:new Date(this.year,this.month+1,r),current:!1});return a}isoDate(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}isToday(e){const t=new Date;return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}eventsForDate(e){return this.events.filter(t=>t.date===e)}clickDay(e){this.dispatchEvent(new CustomEvent("wu-date-click",{bubbles:!0,composed:!0,detail:{date:e}}))}clickEvent(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent("wu-event-click",{bubbles:!0,composed:!0,detail:{event:t}}))}render(){const e=this.getDays();return l`
      <div class="calendar" role="grid" aria-label="Calendar">
        <div class="header">
          <button class="nav-btn" type="button" aria-label="Previous month" @click=${this.prevMonth}>‹</button>
          <span class="month-label">${es[this.month]} ${this.year}</span>
          <button class="nav-btn" type="button" aria-label="Next month" @click=${this.nextMonth}>›</button>
        </div>
        <div class="grid" role="row">
          ${Mh.map(t=>l`<div class="dow" role="columnheader">${t}</div>`)}
        </div>
        <div class="grid">
          ${m(e,t=>this.isoDate(t.date),({date:t,current:a})=>{const o=this.isoDate(t),r=this.eventsForDate(o);return l`
              <div
                class="day ${a?"":"other-month"} ${this.isToday(t)?"today":""}"
                role="gridcell"
                tabindex="0"
                aria-label="${t.getDate()} ${a?es[this.month]:""}"
                @click=${()=>this.clickDay(o)}
                @keydown=${s=>s.key==="Enter"&&this.clickDay(o)}
              >
                <div class="day-num">${t.getDate()}</div>
                ${r.map(s=>l`
                  <span
                    class="event-chip"
                    style=${s.color?`background:${s.color}`:""}
                    @click=${i=>this.clickEvent(i,s)}
                  >${s.title}</span>
                `)}
              </div>
            `})}
        </div>
      </div>
    `}};ar.styles=Sh;da([n({type:Array})],ar.prototype,"events",2);da([p()],ar.prototype,"year",2);da([p()],ar.prototype,"month",2);ar=da([d("wu-event-calendar")],ar);const Ah=u`
  :host {
    display: block;
    --wu-rb-bg: var(--wu-color-surface);
    --wu-rb-border: var(--wu-color-border);
    --wu-rb-radius: var(--wu-radius-lg);
  }

  .builder {
    background: var(--wu-rb-bg);
    border: 1px solid var(--wu-rb-border);
    border-radius: var(--wu-rb-radius);
    overflow: hidden;
  }

  .builder-header {
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-rb-border);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    font-weight: var(--wu-font-normal);
  }

  .column-list {
    list-style: none;
    margin: 0;
    padding: var(--wu-space-2) 0;
  }

  .column-item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-2) var(--wu-space-4);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .column-item:hover {
    background: var(--wu-color-surface-raised);
  }

  label {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    flex: 1;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: var(--wu-color-primary);
    cursor: pointer;
    flex-shrink: 0;
  }

  .reorder {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-left: auto;
  }

  .reorder-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--wu-color-text-disabled);
    padding: 0 2px;
    font-size: 10px;
    line-height: 1;
    transition: color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .reorder-btn:hover { color: var(--wu-color-text-secondary); }
  .reorder-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .footer {
    padding: var(--wu-space-3) var(--wu-space-4);
    border-top: 1px solid var(--wu-rb-border);
    display: flex;
    gap: var(--wu-space-2);
  }

  .select-all-btn {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-primary);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
  }

  .select-all-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); border-radius: var(--wu-radius-sm); }
`;var Ih=Object.defineProperty,qh=Object.getOwnPropertyDescriptor,Va=(e,t,a,o)=>{for(var r=o>1?void 0:o?qh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Ih(t,a,r),r};let Gr=class extends c{constructor(){super(...arguments),this.columns=[],this.items=[]}willUpdate(e){e.has("columns")&&(this.items=this.columns.map(t=>({...t,selected:t.selected??!1})))}toggle(e){this.items=this.items.map(t=>t.id===e?{...t,selected:!t.selected}:t),this.emitChange()}move(e,t){const a=e+t;if(a<0||a>=this.items.length)return;const o=[...this.items];[o[e],o[a]]=[o[a],o[e]],this.items=o,this.emitChange()}selectAll(){this.items=this.items.map(e=>({...e,selected:!0})),this.emitChange()}selectNone(){this.items=this.items.map(e=>({...e,selected:!1})),this.emitChange()}emitChange(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{selected:this.items.filter(e=>e.selected).map(e=>e.id)}}))}render(){const e=this.items.filter(t=>t.selected).length;return l`
      <div class="builder">
        <div class="builder-header">
          <span>Columns</span>
          <span class="count">${e} / ${this.items.length} selected</span>
        </div>
        <ul class="column-list" role="list">
          ${m(this.items,t=>t.id,(t,a)=>l`
            <li class="column-item">
              <label>
                <input
                  type="checkbox"
                  .checked=${t.selected??!1}
                  @change=${()=>this.toggle(t.id)}
                  aria-label=${t.label}
                />
                ${t.label}
              </label>
              <div class="reorder">
                <button class="reorder-btn" type="button" aria-label="Move up" ?disabled=${a===0} @click=${()=>this.move(a,-1)}>▲</button>
                <button class="reorder-btn" type="button" aria-label="Move down" ?disabled=${a===this.items.length-1} @click=${()=>this.move(a,1)}>▼</button>
              </div>
            </li>
          `)}
        </ul>
        <div class="footer">
          <button class="select-all-btn" type="button" @click=${this.selectAll}>Select all</button>
          <button class="select-all-btn" type="button" @click=${this.selectNone}>Clear all</button>
        </div>
      </div>
    `}};Gr.styles=Ah;Va([n({type:Array})],Gr.prototype,"columns",2);Va([p()],Gr.prototype,"items",2);Gr=Va([d("wu-report-builder")],Gr);const Nh=u`
  :host {
    display: block;
    --wu-emoji-bg: var(--wu-color-surface);
    --wu-emoji-border: var(--wu-color-border);
    --wu-emoji-radius: var(--wu-radius-lg);
  }

  .picker {
    background: var(--wu-emoji-bg);
    border: 1px solid var(--wu-emoji-border);
    border-radius: var(--wu-emoji-radius);
    width: 320px;
    max-width: 100%;
    overflow: hidden;
  }

  .search-row {
    padding: var(--wu-space-2) var(--wu-space-3);
    border-bottom: 1px solid var(--wu-emoji-border);
  }

  .search-input {
    width: 100%;
    box-sizing: border-box;
    padding: var(--wu-space-2) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-emoji-border);
    border-radius: var(--wu-radius-md);
    outline: none;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .search-input:focus {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .category-label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    padding: var(--wu-space-2) var(--wu-space-3) var(--wu-space-1);
  }

  .emoji-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 0 var(--wu-space-2) var(--wu-space-2);
    gap: 2px;
    max-height: 240px;
    overflow-y: auto;
  }

  .emoji-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    line-height: 1;
    padding: var(--wu-space-1);
    border-radius: var(--wu-radius-sm);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
    text-align: center;
  }

  .emoji-btn:hover {
    background: var(--wu-color-surface-raised);
  }

  .emoji-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .no-results {
    padding: var(--wu-space-4);
    text-align: center;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
  }
`;var Th=Object.defineProperty,Lh=Object.getOwnPropertyDescriptor,bs=(e,t,a,o)=>{for(var r=o>1?void 0:o?Lh(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(o?i(t,a,r):i(r))||r);return o&&r&&Th(t,a,r),r};const ts=[{category:"Smileys",emojis:["😀","😁","😂","🤣","😃","😄","😅","😆","😇","😉","😊","🙂","😋","😌","😍","🥰","😘","😗","😙","😚","😛","😜","🤪","😝","🤑","🤗","🤭","🤫","🤔","🤐","🥶","🥺","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","🤧","🥵","🤯"]},{category:"Gestures",emojis:["👋","🤚","🖐","✋","🖖","👌","🤌","🤏","✌️","🤞","🤟","🤘","🤙","👈","👉","👆","🖕","👇","☝️","👍","👎","✊","👊","🤛","🤜","👏","🙌","🫶","👐","🤲","🤝","🙏"]},{category:"Animals",emojis:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🙈","🙉","🙊","🐔","🐧","🐦","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝"]},{category:"Food",emojis:["🍎","🍊","🍋","🍇","🍓","🫐","🍈","🍒","🥝","🍑","🥭","🍍","🥥","🍅","🍆","🥑","🥦","🥕","🌽","🌶","🥒","🧄","🧅","🥔","🍠","🫘","🌰","🥜","🍞","🥐"]},{category:"Activities",emojis:["⚽","🏀","🏈","⚾","🥎","🎾","🏐","🏉","🎱","🏓","🏸","🥊","🥋","🎽","🛹","🛼","🤸","🏋️","🤼","🤺","🤾","🏌️","🏇","🧘","🤿","🎿","⛷️","🏂","🪂","🏊"]},{category:"Objects",emojis:["💡","🔦","🕯️","💰","💳","💎","🔑","🗝️","🔒","🔓","🔨","⛏️","🔧","🔩","🪛","🔗","📱","💻","🖥️","🖨️","⌨️","🖱️","💾","📀","📷","📸","📹","🎥","📞","☎️"]},{category:"Symbols",emojis:["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❤️‍🔥","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☯️","🕉️","✡️","🔯","🪯","🛐","♋","♓","🆗","🆕","🆙","🆒","🆓","0️⃣"]}];let So=class extends c{constructor(){super(...arguments),this.query=""}onSearch(e){this.query=e.target.value}select(e){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{emoji:e}}))}getFiltered(){return this.query.trim()?ts.map(e=>({...e,emojis:e.emojis.filter(t=>t.includes(this.query))})).filter(e=>e.emojis.length>0):ts}render(){const e=this.getFiltered(),t=e.some(a=>a.emojis.length>0);return l`
      <div class="picker" role="dialog" aria-label="Emoji picker">
        <div class="search-row">
          <input
            class="search-input"
            type="search"
            placeholder="Search emoji..."
            .value=${this.query}
            @input=${this.onSearch}
            aria-label="Search emoji"
          />
        </div>
        <div class="emoji-grid" role="listbox" aria-label="Emoji list">
          ${t?e.map(a=>l`
                ${this.query?"":l`<div class="category-label" style="grid-column:1/-1">${a.category}</div>`}
                ${a.emojis.map(o=>l`
                  <button
                    type="button"
                    class="emoji-btn"
                    role="option"
                    aria-label=${o}
                    title=${o}
                    @click=${()=>this.select(o)}
                  >${o}</button>
                `)}
              `):l`<div class="no-results" style="grid-column:1/-1">No emoji found</div>`}
        </div>
      </div>
    `}};So.styles=Nh;bs([p()],So.prototype,"query",2);So=bs([d("wu-emoji-picker")],So);
