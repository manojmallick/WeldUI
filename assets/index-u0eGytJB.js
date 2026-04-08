import{f as zl,u as Ol,A as v,E as ms,i as d,a as u,b as n,w as jl}from"./lit-element-CBn2YVps.js";import{M as Pl,u as ot,v as Kr,h as li,p as Cl}from"./directive-helpers-C-d-vSw_.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=t=>(r,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(t,r)}):customElements.define(t,r)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dl={attribute:!0,type:String,converter:Ol,reflect:!1,hasChanged:zl},El=(t=Dl,r,a)=>{const{kind:o,metadata:e}=a;let s=globalThis.litPropertyMetadata.get(e);if(s===void 0&&globalThis.litPropertyMetadata.set(e,s=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(a.name,t),o==="accessor"){const{name:i}=a;return{set(h){const b=r.get.call(this);r.set.call(this,h),this.requestUpdate(i,b,t,!0,h)},init(h){return h!==void 0&&this.C(i,void 0,t,h),h}}}if(o==="setter"){const{name:i}=a;return function(h){const b=this[i];r.call(this,h),this.requestUpdate(i,b,t,!0,h)}}throw Error("Unsupported decorator location: "+o)};function l(t){return(r,a)=>typeof a=="object"?El(t,r,a):((o,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,o),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,r,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sl=(t,r,a)=>(a.configurable=!0,a.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(t,r,a),a);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pe(t,r){return(a,o,e)=>{const s=i=>{var h;return((h=i.renderRoot)==null?void 0:h.querySelector(t))??null};return Sl(a,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=t=>t??v;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ys={ATTRIBUTE:1,CHILD:2},xs=t=>(...r)=>({_$litDirective$:t,values:r});let ks=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,a,o){this._$Ct=r,this._$AM=a,this._$Ci=o}_$AS(r,a){return this.update(r,a)}update(r,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const il="important",Ml=" !"+il,_=xs(class extends ks{constructor(t){var r;if(super(t),t.type!==ys.ATTRIBUTE||t.name!=="style"||((r=t.strings)==null?void 0:r.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((r,a)=>{const o=t[a];return o==null?r:r+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[r]){const{style:a}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(r)),this.render(r);for(const o of this.ft)r[o]==null&&(this.ft.delete(o),o.includes("-")?a.removeProperty(o):a[o]=null);for(const o in r){const e=r[o];if(e!=null){this.ft.add(o);const s=typeof e=="string"&&e.endsWith(Ml);o.includes("-")||s?a.setProperty(o,s?e.slice(0,-11):e,s?il:""):a[o]=e}}return ms}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bl=xs(class extends ks{constructor(t){var r;if(super(t),t.type!==ys.ATTRIBUTE||t.name!=="class"||((r=t.strings)==null?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(r=>t[r]).join(" ")+" "}update(t,[r]){var o,e;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in r)r[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(r)}const a=t.element.classList;for(const s of this.st)s in r||(a.remove(s),this.st.delete(s));for(const s in r){const i=!!r[s];i===this.st.has(s)||(e=this.nt)!=null&&e.has(s)||(i?(a.add(s),this.st.add(s)):(a.remove(s),this.st.delete(s)))}return ms}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tl=(t,r,a)=>{const o=new Map;for(let e=r;e<=a;e++)o.set(t[e],e);return o},m=xs(class extends ks{constructor(t){if(super(t),t.type!==ys.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,r,a){let o;a===void 0?a=r:r!==void 0&&(o=r);const e=[],s=[];let i=0;for(const h of t)e[i]=o?o(h,i):i,s[i]=a(h,i),i++;return{values:s,keys:e}}render(t,r,a){return this.dt(t,r,a).values}update(t,[r,a,o]){const e=Pl(t),{values:s,keys:i}=this.dt(r,a,o);if(!Array.isArray(e))return this.ut=i,s;const h=this.ut??(this.ut=[]),b=[];let Lt,Zn,g=0,x=e.length-1,f=0,D=s.length-1;for(;g<=x&&f<=D;)if(e[g]===null)g++;else if(e[x]===null)x--;else if(h[g]===i[f])b[f]=ot(e[g],s[f]),g++,f++;else if(h[x]===i[D])b[D]=ot(e[x],s[D]),x--,D--;else if(h[g]===i[D])b[D]=ot(e[g],s[D]),Kr(t,b[D+1],e[g]),g++,D--;else if(h[x]===i[f])b[f]=ot(e[x],s[f]),Kr(t,e[g],e[x]),x--,f++;else if(Lt===void 0&&(Lt=tl(i,f,D),Zn=tl(h,g,x)),Lt.has(h[g]))if(Lt.has(h[x])){const fe=Zn.get(i[f]),ni=fe!==void 0?e[fe]:null;if(ni===null){const el=Kr(t,e[g]);ot(el,s[f]),b[f]=el}else b[f]=ot(ni,s[f]),Kr(t,e[g],ni),e[fe]=null;f++}else li(e[x]),x--;else li(e[g]),g++;for(;f<=D;){const fe=Kr(t,b[D+1]);ot(fe,s[f]),b[f++]=fe}for(;g<=x;){const fe=e[g++];fe!==null&&li(fe)}return this.ut=i,Cl(t,b),ms}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ci extends ks{constructor(r){if(super(r),this.it=v,r.type!==ys.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===v||r==null)return this._t=void 0,this.it=r;if(r===ms)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const a=[r];return a.raw=a,this._t={_$litType$:this.constructor.resultType,strings:a,values:[]}}}ci.directiveName="unsafeHTML",ci.resultType=1;const Al=xs(ci),Il=d`
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
`;var Nl=Object.defineProperty,Ll=Object.getOwnPropertyDescriptor,jt=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ll(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Nl(r,a,e),e};let me=class extends u{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this.ariaLabel=null}_handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopPropagation();return}this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}render(){return n`
      <button
        part="base"
        type=${this.type}
        ?disabled=${this.disabled||this.loading}
        aria-disabled=${this.disabled||this.loading?"true":"false"}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${w(this.ariaLabel??void 0)}
        @click=${this._handleClick}
      >
        ${this.loading?n`<span class="spinner" aria-hidden="true"></span>`:""}
        <slot name="prefix"></slot>
        <span part="label" class="label"><slot></slot></span>
        <slot name="suffix"></slot>
      </button>
    `}};me.styles=Il;jt([l({reflect:!0})],me.prototype,"variant",2);jt([l({reflect:!0})],me.prototype,"size",2);jt([l({type:Boolean,reflect:!0})],me.prototype,"disabled",2);jt([l({type:Boolean,reflect:!0})],me.prototype,"loading",2);jt([l()],me.prototype,"type",2);jt([l({attribute:"aria-label"})],me.prototype,"ariaLabel",2);me=jt([c("wu-button")],me);const Tl=d`
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
`;var ql=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor,nl=(t,r,a,o)=>{for(var e=o>1?void 0:o?Rl(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ql(r,a,e),e};let Ga=class extends u{constructor(){super(...arguments),this.variant="default"}render(){return n`<span part="base" class="badge"><slot></slot></span>`}};Ga.styles=Tl;nl([l({reflect:!0})],Ga.prototype,"variant",2);Ga=nl([c("wu-badge")],Ga);const Fl=d`
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
`;var Hl=Object.defineProperty,Kl=Object.getOwnPropertyDescriptor,Or=(t,r,a,o)=>{for(var e=o>1?void 0:o?Kl(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Hl(r,a,e),e};let Be=class extends u{constructor(){super(...arguments),this.size="md",this._imgError=!1}_handleImgError(){this._imgError=!0}render(){const t=this.src&&!this._imgError;return n`
      <div part="base" class="avatar" role="img" aria-label=${w(this.alt??this.initials)}>
        ${t?n`<img src=${this.src} alt=${w(this.alt)} @error=${this._handleImgError} />`:n`${this.initials??""}`}
      </div>
    `}};Be.styles=Fl;Or([l()],Be.prototype,"src",2);Or([l()],Be.prototype,"alt",2);Or([l()],Be.prototype,"initials",2);Or([l({reflect:!0})],Be.prototype,"size",2);Or([p()],Be.prototype,"_imgError",2);Be=Or([c("wu-avatar")],Be);const Vl=d`
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
`;var Ul=Object.defineProperty,Yl=Object.getOwnPropertyDescriptor,Q=(t,r,a,o)=>{for(var e=o>1?void 0:o?Yl(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ul(r,a,e),e};let E=class extends u{constructor(){super(...arguments),this._uid=Math.random().toString(36).slice(2,9),this.type="text",this.value="",this.disabled=!1,this.required=!1,this.size="md"}_handleInput(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const t=`wu-input-${this._uid}`,r=`${t}-error`,a=`${t}-hint`,o=this.error?r:this.hint?a:void 0;return n`
      <div part="base" class="wrapper">
        ${this.label?n`<label for=${t}>${this.label}${this.required?n` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="input-row">
          <input
            part="input"
            id=${t}
            type=${this.type}
            .value=${this.value}
            placeholder=${w(this.placeholder)}
            name=${w(this.name)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-invalid=${this.error?"true":"false"}
            aria-describedby=${w(o)}
            @input=${this._handleInput}
            @blur=${this._handleBlur}
          />
        </div>
        ${this.error?n`<span id=${r} class="error" role="alert">${this.error}</span>`:""}
        ${this.hint&&!this.error?n`<span id=${a} class="hint">${this.hint}</span>`:""}
      </div>
    `}};E.styles=Vl;Q([l()],E.prototype,"type",2);Q([l()],E.prototype,"value",2);Q([l()],E.prototype,"placeholder",2);Q([l()],E.prototype,"label",2);Q([l()],E.prototype,"hint",2);Q([l()],E.prototype,"error",2);Q([l({type:Boolean,reflect:!0})],E.prototype,"disabled",2);Q([l({type:Boolean})],E.prototype,"required",2);Q([l({reflect:!0})],E.prototype,"size",2);Q([l()],E.prototype,"name",2);E=Q([c("wu-input")],E);const Wl=d`
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
`;var Xl=Object.defineProperty,Gl=Object.getOwnPropertyDescriptor,F=(t,r,a,o)=>{for(var e=o>1?void 0:o?Gl(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Xl(r,a,e),e};let z=class extends u{constructor(){super(...arguments),this._uid=Math.random().toString(36).slice(2,9),this.value="",this.disabled=!1,this.required=!1,this.rows=4,this._charCount=0}connectedCallback(){super.connectedCallback(),this._charCount=this.value.length}_handleInput(t){this.value=t.target.value,this._charCount=this.value.length,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleBlur(){this.dispatchEvent(new CustomEvent("wu-blur",{bubbles:!0,composed:!0}))}render(){const t=`wu-textarea-${this._uid}`,r=`${t}-error`,a=`${t}-hint`,o=`${t}-count`,e=[this.error?r:"",this.hint&&!this.error?a:"",this.maxlength?o:""].filter(Boolean).join(" ")||void 0;return n`
      <div part="base" class="wrapper">
        ${this.label?n`<label for=${t}>${this.label}${this.required?n` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <textarea
          part="textarea"
          id=${t}
          rows=${this.rows}
          name=${w(this.name)}
          placeholder=${w(this.placeholder)}
          maxlength=${w(this.maxlength)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${this.error?"true":"false"}
          aria-describedby=${w(e)}
          .value=${this.value}
          @input=${this._handleInput}
          @blur=${this._handleBlur}
        ></textarea>
        ${this.maxlength?n`<span id=${o} class="char-count" aria-live="polite">${this._charCount} / ${this.maxlength}</span>`:""}
        ${this.error?n`<span id=${r} class="error" role="alert">${this.error}</span>`:""}
        ${this.hint&&!this.error?n`<span id=${a} class="hint">${this.hint}</span>`:""}
      </div>
    `}};z.styles=Wl;F([l()],z.prototype,"value",2);F([l()],z.prototype,"placeholder",2);F([l()],z.prototype,"label",2);F([l()],z.prototype,"hint",2);F([l()],z.prototype,"error",2);F([l({type:Boolean,reflect:!0})],z.prototype,"disabled",2);F([l({type:Boolean})],z.prototype,"required",2);F([l({type:Number})],z.prototype,"maxlength",2);F([l({type:Number})],z.prototype,"rows",2);F([l()],z.prototype,"name",2);F([p()],z.prototype,"_charCount",2);z=F([c("wu-textarea")],z);const Jl=d`
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
`;var Ql=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,Z=(t,r,a,o)=>{for(var e=o>1?void 0:o?Zl(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ql(r,a,e),e};let S=class extends u{constructor(){super(...arguments),this._uid=Math.random().toString(36).slice(2,9),this.value="",this.options=[],this.disabled=!1,this.required=!1,this.size="md"}_handleChange(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){const t=`wu-select-${this._uid}`,r=`${t}-error`,a=`${t}-hint`,o=this.error?r:this.hint?a:void 0;return n`
      <div part="base" class="wrapper">
        ${this.label?n`<label for=${t}>${this.label}${this.required?n` <span aria-hidden="true">*</span>`:""}</label>`:""}
        <div class="select-row">
          <select
            part="select"
            id=${t}
            name=${w(this.name)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-invalid=${this.error?"true":"false"}
            aria-describedby=${w(o)}
            @change=${this._handleChange}
          >
            ${this.placeholder?n`<option value="" ?selected=${!this.value} disabled>${this.placeholder}</option>`:""}
            ${this.options.map(e=>n`
              <option value=${e.value} ?selected=${this.value===e.value} ?disabled=${e.disabled??!1}>
                ${e.label}
              </option>
            `)}
          </select>
          <svg class="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M4 6l4 4 4-4"/>
          </svg>
        </div>
        ${this.error?n`<span id=${r} class="error" role="alert">${this.error}</span>`:""}
        ${this.hint&&!this.error?n`<span id=${a} class="hint">${this.hint}</span>`:""}
      </div>
    `}};S.styles=Jl;Z([l()],S.prototype,"value",2);Z([l({type:Array})],S.prototype,"options",2);Z([l()],S.prototype,"placeholder",2);Z([l()],S.prototype,"label",2);Z([l()],S.prototype,"hint",2);Z([l()],S.prototype,"error",2);Z([l({type:Boolean,reflect:!0})],S.prototype,"disabled",2);Z([l({type:Boolean})],S.prototype,"required",2);Z([l({reflect:!0})],S.prototype,"size",2);Z([l()],S.prototype,"name",2);S=Z([c("wu-select")],S);const eu=d`
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
`;var tu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,Ce=(t,r,a,o)=>{for(var e=o>1?void 0:o?ru(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&tu(r,a,e),e};let Y=class extends u{constructor(){super(...arguments),this._uid=Math.random().toString(36).slice(2,9),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on"}_handleChange(t){const r=t.target;this.checked=r.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.value}}))}updated(t){var r;if(t.has("indeterminate")){const a=(r=this.shadowRoot)==null?void 0:r.querySelector("input");a&&(a.indeterminate=this.indeterminate)}}render(){const t=`wu-checkbox-${this._uid}`,r=`${t}-error`,a=`${t}-hint`,o=this.error?r:this.hint?a:void 0;return n`
      <div part="base" class="wrapper">
        <input
          part="input"
          type="checkbox"
          id=${t}
          name=${this.name??""}
          value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          aria-checked=${this.indeterminate?"mixed":this.checked?"true":"false"}
          aria-invalid=${w(this.error?"true":void 0)}
          aria-describedby=${w(o)}
          @change=${this._handleChange}
        />
        ${this.label?n`<label part="label" for=${t}>${this.label}</label>`:""}
      </div>
      ${this.error?n`<span id=${r} class="error" role="alert">${this.error}</span>`:""}
      ${this.hint&&!this.error?n`<span id=${a} class="hint">${this.hint}</span>`:""}
    `}};Y.styles=eu;Ce([l({type:Boolean,reflect:!0})],Y.prototype,"checked",2);Ce([l({type:Boolean,reflect:!0})],Y.prototype,"indeterminate",2);Ce([l({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);Ce([l()],Y.prototype,"label",2);Ce([l()],Y.prototype,"name",2);Ce([l()],Y.prototype,"value",2);Ce([l()],Y.prototype,"hint",2);Ce([l()],Y.prototype,"error",2);Y=Ce([c("wu-checkbox")],Y);const ou=d`
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
`;var au=Object.defineProperty,su=Object.getOwnPropertyDescriptor,De=(t,r,a,o)=>{for(var e=o>1?void 0:o?su(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&au(r,a,e),e};let W=class extends u{constructor(){super(...arguments),this._uid=Math.random().toString(36).slice(2,9),this.checked=!1,this.disabled=!1,this.labelPosition="end",this.size="md"}_handleChange(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked}}))}render(){const t=`wu-toggle-${this._uid}`,r=`${t}-error`,a=`${t}-hint`,o=this.error?r:this.hint?a:void 0,e=this.label?n`<label part="label" for=${t}>${this.label}</label>`:"";return n`
      <div part="base" class="wrapper">
        ${this.labelPosition==="start"?e:""}
        <input
          type="checkbox"
          id=${t}
          name=${this.name??""}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          aria-invalid=${w(this.error?"true":void 0)}
          aria-describedby=${w(o)}
          @change=${this._handleChange}
        />
        <div part="track" class="track ${this.checked?"on":""}">
          <div part="thumb" class="thumb"></div>
        </div>
        ${this.labelPosition==="end"?e:""}
      </div>
      ${this.error?n`<span id=${r} class="error" role="alert">${this.error}</span>`:""}
      ${this.hint&&!this.error?n`<span id=${a} class="hint">${this.hint}</span>`:""}
    `}};W.styles=ou;De([l({type:Boolean,reflect:!0})],W.prototype,"checked",2);De([l({type:Boolean,reflect:!0})],W.prototype,"disabled",2);De([l()],W.prototype,"label",2);De([l({attribute:"label-position"})],W.prototype,"labelPosition",2);De([l({reflect:!0})],W.prototype,"size",2);De([l()],W.prototype,"name",2);De([l()],W.prototype,"hint",2);De([l()],W.prototype,"error",2);W=De([c("wu-toggle")],W);const iu=d`
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
`;var nu=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,$s=(t,r,a,o)=>{for(var e=o>1?void 0:o?lu(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&nu(r,a,e),e};let Tt=class extends u{constructor(){super(...arguments),this.interactive=!1,this._hasHeader=!1,this._hasFooter=!1}_handleClick(t){this.interactive&&this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}_onHeaderSlotChange(t){const r=t.target;this._hasHeader=r.assignedNodes({flatten:!0}).length>0}_onFooterSlotChange(t){const r=t.target;this._hasFooter=r.assignedNodes({flatten:!0}).length>0}render(){return n`
      <div
        part="base"
        class="card ${this._hasHeader?"":"no-header"} ${this._hasFooter?"":"no-footer"}"
        tabindex=${this.interactive?"0":"-1"}
        role=${this.interactive?"button":"article"}
        @click=${this._handleClick}
        @keydown=${t=>{this.interactive&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this._handleClick(t))}}
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
    `}};Tt.styles=iu;$s([l({type:Boolean,reflect:!0})],Tt.prototype,"interactive",2);$s([p()],Tt.prototype,"_hasHeader",2);$s([p()],Tt.prototype,"_hasFooter",2);Tt=$s([c("wu-card")],Tt);const uu=d`
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
`;var cu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,Pt=(t,r,a,o)=>{for(var e=o>1?void 0:o?du(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&cu(r,a,e),e};let ye=class extends u{constructor(){super(...arguments),this.open=!1,this.label="",this.closeOnBackdrop=!0,this.hideClose=!1,this._hasFooter=!1,this._previouslyFocused=null}updated(t){t.has("open")&&(this.open?this._openDialog():this._closeDialog("api"))}_openDialog(){this._dialog&&(this._previouslyFocused=document.activeElement,this._dialog.showModal(),document.body.style.overflow="hidden",this._dialog.focus(),this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0})))}_closeDialog(t){var r,a;(r=this._dialog)!=null&&r.open&&(this._dialog.close(),document.body.style.overflow="",(a=this._previouslyFocused)==null||a.focus(),this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0,detail:{reason:t}})))}_onBackdropClick(t){this.closeOnBackdrop&&t.target===this._dialog&&this._closeDialog("backdrop")}_onKeydown(t){t.key==="Escape"&&(t.preventDefault(),this._closeDialog("escape")),t.key==="Tab"&&this._trapFocus(t)}_trapFocus(t){const r=Array.from(this._dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(e=>!e.hasAttribute("disabled")),a=r[0],o=r[r.length-1];a&&(t.shiftKey&&document.activeElement===a?(t.preventDefault(),o.focus()):!t.shiftKey&&document.activeElement===o&&(t.preventDefault(),a.focus()))}_onFooterSlotChange(t){const r=t.target;this._hasFooter=r.assignedNodes({flatten:!0}).length>0}render(){return n`
      <dialog
        part="base"
        aria-labelledby="modal-title"
        aria-modal="true"
        @click=${this._onBackdropClick}
        @keydown=${this._onKeydown}
      >
        <div part="header" class="modal-header">
          <h2 id="modal-title" class="modal-title">${this.label}</h2>
          ${this.hideClose?"":n`
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
    `}};ye.styles=uu;Pt([l({type:Boolean,reflect:!0})],ye.prototype,"open",2);Pt([l()],ye.prototype,"label",2);Pt([l({type:Boolean,attribute:"close-on-backdrop"})],ye.prototype,"closeOnBackdrop",2);Pt([l({type:Boolean,attribute:"hide-close"})],ye.prototype,"hideClose",2);Pt([p()],ye.prototype,"_hasFooter",2);Pt([Pe("dialog")],ye.prototype,"_dialog",2);ye=Pt([c("wu-modal")],ye);const pu=d`
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
`;var hu=Object.defineProperty,vu=Object.getOwnPropertyDescriptor,mi=(t,r,a,o)=>{for(var e=o>1?void 0:o?vu(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&hu(r,a,e),e};const wu={info:"ℹ",success:"✓",warning:"⚠",danger:"✕",neutral:"•"};let Ur=class extends u{constructor(){super(...arguments),this.variant="info",this.dismissible=!1}_handleDismiss(){this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0})),this.remove()}render(){return n`
      <div part="base" class="alert" role="alert" aria-live="polite">
        <span part="icon" class="icon" aria-hidden="true">
          <slot name="icon">${wu[this.variant]}</slot>
        </span>
        <div part="content" class="content">
          <slot name="title"></slot>
          <slot></slot>
        </div>
        ${this.dismissible?n`
          <button class="dismiss-btn" aria-label="Dismiss" @click=${this._handleDismiss}>✕</button>
        `:""}
      </div>
    `}};Ur.styles=pu;mi([l({reflect:!0})],Ur.prototype,"variant",2);mi([l({type:Boolean})],Ur.prototype,"dismissible",2);Ur=mi([c("wu-alert")],Ur);const bu=d`
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

  @media (prefers-reduced-motion: reduce) {
    .spinner {
      animation: none;
      border-top-color: var(--wu-spinner-color);
      border-right-color: var(--wu-spinner-color);
    }
  }
`;var gu=Object.defineProperty,fu=Object.getOwnPropertyDescriptor,yi=(t,r,a,o)=>{for(var e=o>1?void 0:o?fu(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&gu(r,a,e),e};let Yr=class extends u{constructor(){super(...arguments),this.size="md",this.label="Loading…"}render(){return n`
      <span role="status" aria-label=${this.label}>
        <span class="spinner" aria-hidden="true"></span>
        <span class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">${this.label}</span>
      </span>
    `}};Yr.styles=bu;yi([l({reflect:!0})],Yr.prototype,"size",2);yi([l()],Yr.prototype,"label",2);Yr=yi([c("wu-spinner")],Yr);const mu=d`
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

  @media (prefers-reduced-motion: reduce) {
    :host([indeterminate]) .fill {
      animation: none;
      transform: none;
      width: 100% !important;
      opacity: 0.4;
    }
  }
`;var yu=Object.defineProperty,xu=Object.getOwnPropertyDescriptor,We=(t,r,a,o)=>{for(var e=o>1?void 0:o?xu(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&yu(r,a,e),e};let oe=class extends u{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.indeterminate=!1,this.showLabel=!1,this.size="md",this.label=""}get _pct(){if(this.indeterminate)return 0;const t=Math.min(Math.max(this.value,this.min),this.max);return Math.round((t-this.min)/(this.max-this.min)*100)}render(){return n`
      <div class="wrapper">
        ${this.label||this.showLabel?n`
          <div class="labels">
            <span>${this.label}</span>
            ${this.showLabel&&!this.indeterminate?n`<span>${this._pct}%</span>`:""}
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
    `}};oe.styles=mu;We([l({type:Number})],oe.prototype,"value",2);We([l({type:Number})],oe.prototype,"min",2);We([l({type:Number})],oe.prototype,"max",2);We([l({type:Boolean,reflect:!0})],oe.prototype,"indeterminate",2);We([l({type:Boolean})],oe.prototype,"showLabel",2);We([l({reflect:!0})],oe.prototype,"size",2);We([l()],oe.prototype,"label",2);oe=We([c("wu-progress")],oe);const ku=d`
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

  @media (prefers-reduced-motion: reduce) {
    .skeleton {
      animation: none;
      background: var(--wu-skeleton-color);
    }
  }
`;var $u=Object.defineProperty,_u=Object.getOwnPropertyDescriptor,_s=(t,r,a,o)=>{for(var e=o>1?void 0:o?_u(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&$u(r,a,e),e};let qt=class extends u{constructor(){super(...arguments),this.variant="text",this.width="100%",this.height=""}render(){const t={width:this.width};return this.height&&(t.height=this.height),n`
      <div
        class="skeleton"
        style=${_(t)}
        role="status"
        aria-label="Loading…"
        aria-busy="true"
      ></div>
    `}};qt.styles=ku;_s([l({reflect:!0})],qt.prototype,"variant",2);_s([l()],qt.prototype,"width",2);_s([l()],qt.prototype,"height",2);qt=_s([c("wu-skeleton")],qt);const zu=d`
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
`;var Ou=Object.defineProperty,ju=Object.getOwnPropertyDescriptor,xi=(t,r,a,o)=>{for(var e=o>1?void 0:o?ju(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ou(r,a,e),e};let Wr=class extends u{constructor(){super(...arguments),this.vertical=!1,this._hasLabel=!1}_onSlotChange(t){const r=t.target;this._hasLabel=r.assignedNodes({flatten:!0}).some(a=>a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE&&a.textContent.trim())}render(){return n`
      <div class="line" role="separator" aria-orientation=${this.vertical?"vertical":"horizontal"}></div>
      ${this._hasLabel?n`<span class="label"><slot @slotchange=${this._onSlotChange}></slot></span>`:n`<slot @slotchange=${this._onSlotChange} style="display:none"></slot>`}
      ${this._hasLabel?n`<div class="line"></div>`:""}
    `}};Wr.styles=zu;xi([l({type:Boolean,reflect:!0})],Wr.prototype,"vertical",2);xi([p()],Wr.prototype,"_hasLabel",2);Wr=xi([c("wu-divider")],Wr);const Pu=d`
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
`;var Cu=Object.defineProperty,Du=Object.getOwnPropertyDescriptor,Ea=(t,r,a,o)=>{for(var e=o>1?void 0:o?Du(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Cu(r,a,e),e};let at=class extends u{constructor(){super(...arguments),this.content="",this.placement="top",this.delay=300,this._visible=!1,this._showTimer=null}_show(){this._showTimer=setTimeout(()=>{this._visible=!0},this.delay)}_hide(){this._showTimer&&(clearTimeout(this._showTimer),this._showTimer=null),this._visible=!1}disconnectedCallback(){super.disconnectedCallback(),this._hide()}render(){const t="tooltip-content";return n`
      <span
        class="trigger"
        aria-describedby=${this._visible?t:""}
        @mouseenter=${this._show}
        @mouseleave=${this._hide}
        @focusin=${this._show}
        @focusout=${this._hide}
      >
        <slot></slot>
      </span>
      <span
        id=${t}
        role="tooltip"
        class="tooltip ${this._visible?"visible":""}"
        aria-hidden=${!this._visible}
      >${this.content}</span>
    `}};at.styles=Pu;Ea([l()],at.prototype,"content",2);Ea([l({reflect:!0})],at.prototype,"placement",2);Ea([l({type:Number})],at.prototype,"delay",2);Ea([p()],at.prototype,"_visible",2);at=Ea([c("wu-tooltip")],at);const Eu=d`
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
`;var Su=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,zs=(t,r,a,o)=>{for(var e=o>1?void 0:o?Mu(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Su(r,a,e),e};let Rt=class extends u{constructor(){super(...arguments),this.open=!1,this.placement="bottom",this._isOpen=!1,this._onDocClick=t=>{this.contains(t.target)||(this._isOpen=!1,this.open=!1)}}updated(t){t.has("open")&&(this._isOpen=this.open)}_toggle(){this._isOpen=!this._isOpen,this.open=this._isOpen,this.dispatchEvent(new CustomEvent(this._isOpen?"wu-open":"wu-close",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDocClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDocClick)}render(){return n`
      <span class="trigger" @click=${t=>{t.stopPropagation(),this._toggle()}}>
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
    `}};Rt.styles=Eu;zs([l({type:Boolean,reflect:!0})],Rt.prototype,"open",2);zs([l({reflect:!0})],Rt.prototype,"placement",2);zs([p()],Rt.prototype,"_isOpen",2);Rt=zs([c("wu-popover")],Rt);const Bu=d`
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

  @media (prefers-reduced-motion: reduce) {
    .toast { animation: none; }
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
`,Au=d`
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
`;var Iu=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,jr=(t,r,a,o)=>{for(var e=o>1?void 0:o?Nu(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Iu(r,a,e),e};const Lu={info:"ℹ",success:"✓",warning:"⚠",danger:"✕",default:"•"};let Ft=class extends u{constructor(){super(...arguments),this.variant="default",this.heading="",this.duration=5e3}connectedCallback(){super.connectedCallback(),this.duration>0&&setTimeout(()=>this._dismiss("auto"),this.duration)}_dismiss(t){this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0,detail:{reason:t}})),this.remove()}render(){return n`
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <span class="icon" aria-hidden="true">${Lu[this.variant]}</span>
        <div class="content">
          ${this.heading?n`<div class="title">${this.heading}</div>`:""}
          <slot></slot>
          <slot name="action"></slot>
        </div>
        <button class="close-btn" aria-label="Dismiss notification" @click=${()=>this._dismiss("button")}>✕</button>
      </div>
    `}};Ft.styles=Bu;jr([l({reflect:!0})],Ft.prototype,"variant",2);jr([l()],Ft.prototype,"heading",2);jr([l({type:Number})],Ft.prototype,"duration",2);Ft=jr([c("wu-toast")],Ft);let Ja=class extends u{constructor(){super(...arguments),this.position="top-right"}toast(t){const r=Object.assign(document.createElement("wu-toast"),{heading:t.heading??"",variant:t.variant??"default",duration:t.duration??5e3});return t.message&&(r.textContent=t.message),this.shadowRoot.querySelector("slot").parentElement.appendChild(r),r}render(){return n`<slot></slot>`}};Ja.styles=Au;jr([l({reflect:!0})],Ja.prototype,"position",2);Ja=jr([c("wu-toast-provider")],Ja);const Tu=d`
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
`,qu=d`
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
`,Ru=d`
  :host {
    display: none;
  }

  :host([active]) {
    display: block;
  }
`;var Fu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,he=(t,r,a,o)=>{for(var e=o>1?void 0:o?Hu(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Fu(r,a,e),e};let Ht=class extends u{constructor(){super(...arguments),this.panel="",this.active=!1,this.disabled=!1}_handleClick(){this.disabled||this.dispatchEvent(new CustomEvent("wu-tab-click",{bubbles:!0,composed:!0,detail:{panel:this.panel}}))}render(){return n`
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
    `}};Ht.styles=qu;he([l()],Ht.prototype,"panel",2);he([l({type:Boolean,reflect:!0})],Ht.prototype,"active",2);he([l({type:Boolean,reflect:!0})],Ht.prototype,"disabled",2);Ht=he([c("wu-tab")],Ht);let Xr=class extends u{constructor(){super(...arguments),this.name="",this.active=!1}render(){return n`
      <div role="tabpanel" id=${this.name} aria-hidden=${!this.active}>
        <slot></slot>
      </div>
    `}};Xr.styles=Ru;he([l({reflect:!0})],Xr.prototype,"name",2);he([l({type:Boolean,reflect:!0})],Xr.prototype,"active",2);Xr=he([c("wu-tab-panel")],Xr);let Gr=class extends u{constructor(){super(...arguments),this.orientation="horizontal",this.activePanel=""}firstUpdated(){this._setup(),this.addEventListener("wu-tab-click",t=>{const r=t,a=this._tabs(),o=this._panels(),e=a.find(s=>s.panel===r.detail.panel);!e||e.disabled||e.active||(this._activate(r.detail.panel,a,o),this.dispatchEvent(new CustomEvent("wu-tab-change",{bubbles:!0,composed:!0,detail:{panel:r.detail.panel}})))})}_setup(){const t=this._tabs(),r=this._panels();if(!t.length)return;const a=t.find(o=>o.panel===this.activePanel)??t.find(o=>!o.disabled)??t[0];this._activate(a.panel,t,r),this._attachKeyboardListeners(t,r)}_tabs(){return Array.from(this.querySelectorAll("wu-tab"))}_panels(){return Array.from(this.querySelectorAll("wu-tab-panel"))}_activate(t,r,a){r.forEach(o=>{o.active=o.panel===t}),a.forEach(o=>{o.active=o.name===t}),this.activePanel=t}_attachKeyboardListeners(t,r){var a;const o=(a=this.shadowRoot)==null?void 0:a.querySelector(".tablist");o==null||o.addEventListener("keydown",e=>this._onKeydown(e,t,r))}_onKeydown(t,r,a){var o,e;const s=r.findIndex(b=>b.active),i=this.orientation==="horizontal";let h=-1;i&&t.key==="ArrowRight"||!i&&t.key==="ArrowDown"?h=(s+1)%r.length:i&&t.key==="ArrowLeft"||!i&&t.key==="ArrowUp"?h=(s-1+r.length)%r.length:t.key==="Home"?h=0:t.key==="End"&&(h=r.length-1),h>=0&&!r[h].disabled&&(t.preventDefault(),this._activate(r[h].panel,r,a),(e=(o=r[h].shadowRoot)==null?void 0:o.querySelector("button"))==null||e.focus())}render(){return n`
      <div class="tablist" role="tablist" aria-orientation=${this.orientation}>
        <slot name="tabs"></slot>
      </div>
      <div class="panels">
        <slot></slot>
      </div>
    `}};Gr.styles=Tu;he([l({reflect:!0})],Gr.prototype,"orientation",2);he([l({attribute:"active-panel"})],Gr.prototype,"activePanel",2);Gr=he([c("wu-tabs")],Gr);const Ku=d`
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
`,Vu=d`
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
`;var Uu=Object.defineProperty,Yu=Object.getOwnPropertyDescriptor,Sa=(t,r,a,o)=>{for(var e=o>1?void 0:o?Yu(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Uu(r,a,e),e};let Wu=0,Jr=class extends u{constructor(){super(...arguments),this._uid=++Wu,this.open=!1,this.disabled=!1}_toggle(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent("wu-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}})))}render(){const t=`wu-acc-header-${this._uid}`,r=`wu-acc-panel-${this._uid}`;return n`
      <button
        part="header"
        class="header"
        id="${t}"
        aria-expanded="${this.open?"true":"false"}"
        aria-controls="${r}"
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
        id="${r}"
        role="region"
        aria-labelledby="${t}"
        aria-hidden="${w(this.open?void 0:"true")}"
      >
        <div class="content"><slot></slot></div>
      </div>
    `}};Jr.styles=Vu;Sa([l({type:Boolean,reflect:!0})],Jr.prototype,"open",2);Sa([l({type:Boolean,reflect:!0})],Jr.prototype,"disabled",2);Jr=Sa([c("wu-accordion-item")],Jr);let Qa=class extends u{constructor(){super(...arguments),this.single=!1,this._onToggle=t=>{const r=t.target;r.open&&this.querySelectorAll("wu-accordion-item").forEach(a=>{a!==r&&(a.open=!1)})}}updated(t){t.has("single")&&(this.single?this.addEventListener("wu-toggle",this._onToggle):this.removeEventListener("wu-toggle",this._onToggle))}render(){return n`<div class="accordion"><slot></slot></div>`}};Qa.styles=Ku;Sa([l({type:Boolean,reflect:!0})],Qa.prototype,"single",2);Qa=Sa([c("wu-accordion")],Qa);const Xu=d`
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
`;var Gu=Object.defineProperty,Ju=Object.getOwnPropertyDescriptor,ki=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ju(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Gu(r,a,e),e};let Qr=class extends u{constructor(){super(...arguments),this.separator="/",this.label="Breadcrumb"}firstUpdated(){this.style.setProperty("--wu-breadcrumb-separator-char",`"${this.separator}"`)}render(){return n`
      <nav aria-label=${this.label}>
        <ol>
          <slot></slot>
        </ol>
      </nav>
    `}};Qr.styles=Xu;ki([l()],Qr.prototype,"separator",2);ki([l()],Qr.prototype,"label",2);Qr=ki([c("wu-breadcrumb")],Qr);const Qu=d`
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
`;var Zu=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,Pr=(t,r,a,o)=>{for(var e=o>1?void 0:o?ec(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Zu(r,a,e),e};let Ae=class extends u{constructor(){super(...arguments),this.page=1,this.totalPages=1,this.showInfo=!1,this.totalItems=0,this.pageSize=10}_go(t){t<1||t>this.totalPages||t===this.page||(this.page=t,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:t}})))}_pages(){const t=this.totalPages,r=this.page;if(t<=7)return Array.from({length:t},(s,i)=>i+1);const a=[1];r>3&&a.push("dots");const o=Math.max(2,r-1),e=Math.min(t-1,r+1);for(let s=o;s<=e;s++)a.push(s);return r<t-2&&a.push("dots"),a.push(t),a}render(){const t=this._pages(),r=(this.page-1)*this.pageSize+1,a=Math.min(this.page*this.pageSize,this.totalItems);return n`
      <button
        class="nav-btn"
        ?disabled=${this.page<=1}
        aria-label="Previous page"
        @click=${()=>this._go(this.page-1)}
      >← Prev</button>

      <div class="pages" role="group" aria-label="Pages">
        ${t.map(o=>o==="dots"?n`<span class="dots" aria-hidden="true">…</span>`:n`
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

      ${this.showInfo&&this.totalItems?n`
        <span class="info">${r}–${a} of ${this.totalItems}</span>
      `:""}
    `}};Ae.styles=Qu;Pr([l({type:Number})],Ae.prototype,"page",2);Pr([l({type:Number,attribute:"total-pages"})],Ae.prototype,"totalPages",2);Pr([l({type:Boolean,attribute:"show-info"})],Ae.prototype,"showInfo",2);Pr([l({type:Number,attribute:"total-items"})],Ae.prototype,"totalItems",2);Pr([l({type:Number,attribute:"page-size"})],Ae.prototype,"pageSize",2);Ae=Pr([c("wu-pagination")],Ae);const tc=d`
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
`;var rc=Object.defineProperty,oc=Object.getOwnPropertyDescriptor,Xe=(t,r,a,o)=>{for(var e=o>1?void 0:o?oc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&rc(r,a,e),e};let ae=class extends u{constructor(){super(...arguments),this.columns=[],this.data=[],this.selectable=!1,this.sortKey="",this.sortDirection="asc",this.emptyMessage="No data available.",this._selected=new Set}_sort(t){this.sortKey===t?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortKey=t,this.sortDirection="asc"),this.dispatchEvent(new CustomEvent("wu-sort",{bubbles:!0,composed:!0,detail:{key:this.sortKey,direction:this.sortDirection}}))}_toggleRow(t){const r=new Set(this._selected);r.has(t)?r.delete(t):r.add(t),this._selected=r,this._emitSelect()}_toggleAll(t){this._selected=t?new Set(this.data.map(r=>String(r.id??""))):new Set,this._emitSelect()}_emitSelect(){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{selected:[...this._selected]}}))}_sortIcon(t){const r=this.sortKey===t,a=this.sortDirection;return n`
      <span class="sort-icon">
        <svg viewBox="0 0 10 14" fill="currentColor" aria-hidden="true">
          <path d="M5 0L9 5H1L5 0Z" opacity="${r&&a==="asc"?1:.3}"/>
          <path d="M5 14L1 9H9L5 14Z" opacity="${r&&a==="desc"?1:.3}"/>
        </svg>
      </span>
    `}render(){const t=this.data.length>0&&this._selected.size===this.data.length;return n`
      <div class="wrapper" part="base">
        <table part="table">
          <thead>
            <tr>
              ${this.selectable?n`
                <th class="select-cell">
                  <input
                    type="checkbox"
                    .checked=${t}
                    @change=${r=>this._toggleAll(r.target.checked)}
                    aria-label="Select all rows"
                  />
                </th>
              `:v}
              ${this.columns.map(r=>n`
                <th
                  class=${["",r.sortable?"sortable":"",this.sortKey===r.key?"sorted":""].join(" ").trim()}
                  style=${r.width?`width:${r.width}`:""}
                  @click=${r.sortable?()=>this._sort(r.key):void 0}
                  aria-sort=${this.sortKey===r.key?this.sortDirection==="asc"?"ascending":"descending":"none"}
                >
                  <span class="th-inner">
                    ${r.label}
                    ${r.sortable?this._sortIcon(r.key):v}
                  </span>
                </th>
              `)}
            </tr>
          </thead>
          <tbody>
            ${this.data.length===0?n`
              <tr>
                <td class="empty" colspan=${this.columns.length+(this.selectable?1:0)}>
                  ${this.emptyMessage}
                </td>
              </tr>
            `:this.data.map(r=>{const a=String(r.id??""),o=this._selected.has(a);return n`
                <tr class=${o?"selected":""}>
                  ${this.selectable?n`
                    <td class="select-cell">
                      <input
                        type="checkbox"
                        .checked=${o}
                        @change=${()=>this._toggleRow(a)}
                        aria-label="Select row"
                      />
                    </td>
                  `:v}
                  ${this.columns.map(e=>n`
                    <td>${r[e.key]??""}</td>
                  `)}
                </tr>
              `})}
          </tbody>
        </table>
      </div>
    `}};ae.styles=tc;Xe([l({type:Array})],ae.prototype,"columns",2);Xe([l({type:Array})],ae.prototype,"data",2);Xe([l({type:Boolean,attribute:"selectable"})],ae.prototype,"selectable",2);Xe([l({attribute:"sort-key"})],ae.prototype,"sortKey",2);Xe([l({attribute:"sort-direction"})],ae.prototype,"sortDirection",2);Xe([l({attribute:"empty-message"})],ae.prototype,"emptyMessage",2);Xe([p()],ae.prototype,"_selected",2);ae=Xe([c("wu-table")],ae);function ui(t,r="polite"){const a=`wu-live-region-${r}`;let o=document.getElementById(a);o||(o=document.createElement("div"),o.id=a,o.setAttribute("aria-live",r),o.setAttribute("aria-atomic","true"),o.style.cssText="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;",document.body.appendChild(o)),o.textContent="",requestAnimationFrame(()=>{o.textContent=t})}const ac=d`
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
`;var sc=Object.defineProperty,ic=Object.getOwnPropertyDescriptor,ve=(t,r,a,o)=>{for(var e=o>1?void 0:o?ic(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&sc(r,a,e),e};const nc=["Su","Mo","Tu","We","Th","Fr","Sa"],Vr=["January","February","March","April","May","June","July","August","September","October","November","December"];function U(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}let L=class extends u{constructor(){super(),this.value="",this.placeholder="Select date",this.min="",this.max="",this.open=!1,this.label="Date",this._focusedDate="";const t=new Date;this._viewYear=t.getFullYear(),this._viewMonth=t.getMonth()}_toggle(){if(this.open=!this.open,this.open){const t=this.value||U(new Date),r=new Date(t+"T00:00:00");this._viewYear=r.getFullYear(),this._viewMonth=r.getMonth(),this._focusedDate=t,requestAnimationFrame(()=>this._focusDay(this._focusedDate))}}_prevMonth(){this._viewMonth===0?(this._viewYear--,this._viewMonth=11):this._viewMonth--,ui(`${Vr[this._viewMonth]} ${this._viewYear}`)}_nextMonth(){this._viewMonth===11?(this._viewYear++,this._viewMonth=0):this._viewMonth++,ui(`${Vr[this._viewMonth]} ${this._viewYear}`)}_focusDay(t){var r;const a=(r=this.shadowRoot)==null?void 0:r.querySelector(`[data-date="${t}"]`);a==null||a.focus()}_moveDay(t){const r=this._focusedDate||U(new Date),a=new Date(r+"T00:00:00");a.setDate(a.getDate()+t);const o=U(a);(a.getMonth()!==this._viewMonth||a.getFullYear()!==this._viewYear)&&(this._viewYear=a.getFullYear(),this._viewMonth=a.getMonth(),ui(`${Vr[this._viewMonth]} ${this._viewYear}`)),this._focusedDate=o,requestAnimationFrame(()=>this._focusDay(o))}_select(t){this.value=t,this.open=!1,this.dispatchEvent(new CustomEvent("wu-date-change",{bubbles:!0,composed:!0,detail:{value:t}}))}_isDisabled(t){return!!(this.min&&t<this.min||this.max&&t>this.max)}_getDays(){const t=new Date(this._viewYear,this._viewMonth,1),r=new Date(this._viewYear,this._viewMonth+1,0),a=[];for(let e=0;e<t.getDay();e++){const s=new Date(this._viewYear,this._viewMonth,1-(t.getDay()-e));a.push({date:s,current:!1})}for(let e=1;e<=r.getDate();e++)a.push({date:new Date(this._viewYear,this._viewMonth,e),current:!0});const o=42-a.length;for(let e=1;e<=o;e++)a.push({date:new Date(this._viewYear,this._viewMonth+1,e),current:!1});return a}_onCalendarKeydown(t){var r,a;if(this.open)switch(t.key){case"Escape":this.open=!1,(a=(r=this.shadowRoot)==null?void 0:r.querySelector(".trigger"))==null||a.focus();break;case"ArrowRight":t.preventDefault(),this._moveDay(1);break;case"ArrowLeft":t.preventDefault(),this._moveDay(-1);break;case"ArrowDown":t.preventDefault(),this._moveDay(7);break;case"ArrowUp":t.preventDefault(),this._moveDay(-7);break;case"Home":t.preventDefault();{const o=new Date((this._focusedDate||U(new Date))+"T00:00:00");this._moveDay(-o.getDay())}break;case"End":t.preventDefault();{const o=new Date((this._focusedDate||U(new Date))+"T00:00:00");this._moveDay(6-o.getDay())}break;case"PageUp":t.preventDefault(),this._prevMonth(),requestAnimationFrame(()=>{const o=new Date((this._focusedDate||U(new Date))+"T00:00:00"),e=new Date(this._viewYear,this._viewMonth+1,0),s=Math.min(o.getDate(),e.getDate()),i=U(new Date(this._viewYear,this._viewMonth,s));this._focusedDate=i,this._focusDay(i)});break;case"PageDown":t.preventDefault(),this._nextMonth(),requestAnimationFrame(()=>{const o=new Date((this._focusedDate||U(new Date))+"T00:00:00"),e=new Date(this._viewYear,this._viewMonth+1,0),s=Math.min(o.getDate(),e.getDate()),i=U(new Date(this._viewYear,this._viewMonth,s));this._focusedDate=i,this._focusDay(i)});break;case"Enter":case" ":this._focusedDate&&!this._isDisabled(this._focusedDate)&&(t.preventDefault(),this._select(this._focusedDate));break}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onCalendarKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onCalendarKeydown)}render(){const t=U(new Date),r=this._getDays(),a=this.value?new Date(this.value+"T00:00:00").toLocaleDateString():this.placeholder;return n`
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
        aria-label="${this.label} picker"
        aria-modal="true"
        @keydown=${this._onCalendarKeydown}
      >
        <div class="header">
          <button class="nav-btn" type="button" aria-label="Previous month" @click=${this._prevMonth}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <span class="month-year" aria-live="polite" aria-atomic="true">${Vr[this._viewMonth]} ${this._viewYear}</span>
          <button class="nav-btn" type="button" aria-label="Next month" @click=${this._nextMonth}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="grid" role="grid" aria-label="${Vr[this._viewMonth]} ${this._viewYear}">
          ${nc.map((o,e)=>n`<div class="day-name" role="columnheader" abbr=${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]}>${o}</div>`)}
          ${r.map(({date:o,current:e})=>{const s=U(o),i=this._isDisabled(s),h=s===this.value,b=s===t,Lt=s===this._focusedDate;return n`
              <button
                type="button"
                class=${["day",e?"":"other-month",b?"today":"",h?"selected":""].join(" ").trim()}
                role="gridcell"
                data-date=${s}
                aria-label=${o.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}
                aria-selected=${h}
                aria-current=${b?"date":v}
                aria-disabled=${i?"true":v}
                tabindex=${Lt?"0":"-1"}
                ?disabled=${i}
                @click=${()=>!i&&this._select(s)}
                @focus=${()=>{this._focusedDate=s}}
              >${o.getDate()}</button>
            `})}
        </div>
      </div>
    `}};L.styles=ac;ve([l()],L.prototype,"value",2);ve([l()],L.prototype,"placeholder",2);ve([l()],L.prototype,"min",2);ve([l()],L.prototype,"max",2);ve([l({type:Boolean,reflect:!0})],L.prototype,"open",2);ve([l()],L.prototype,"label",2);ve([p()],L.prototype,"_viewYear",2);ve([p()],L.prototype,"_viewMonth",2);ve([p()],L.prototype,"_focusedDate",2);L=ve([c("wu-date-picker")],L);const lc=d`
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
`;var uc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,Ge=(t,r,a,o)=>{for(var e=o>1?void 0:o?cc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&uc(r,a,e),e};function dc(t){return t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}let se=class extends u{constructor(){super(...arguments),this.accept="",this.multiple=!1,this.disabled=!1,this.hint="",this._files=[],this._dragOver=!1}_onInputChange(t){const r=t.target;r.files&&this._addFiles(r.files),r.value=""}_addFiles(t){const r=Array.from(t),a=this.multiple?r:r.slice(0,1);this._files=this.multiple?[...this._files,...a]:a,this.dispatchEvent(new CustomEvent("wu-file-select",{bubbles:!0,composed:!0,detail:{files:[...this._files]}}))}_remove(t){this._files=this._files.filter(r=>r!==t),this.dispatchEvent(new CustomEvent("wu-file-remove",{bubbles:!0,composed:!0,detail:{file:t}}))}_onDragOver(t){t.preventDefault(),this._dragOver=!0}_onDragLeave(){this._dragOver=!1}_onDrop(t){var r;t.preventDefault(),this._dragOver=!1,(r=t.dataTransfer)!=null&&r.files&&this._addFiles(t.dataTransfer.files)}_onKeydown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this._input.click())}get files(){return this._files}_renderFile(t){return n`
      <li class="file-item">
        <span class="file-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </span>
        <span class="file-name">${t.name}</span>
        <span class="file-size">${dc(t.size)}</span>
        <button
          type="button"
          class="remove-btn"
          aria-label="Remove ${t.name}"
          @click=${()=>this._remove(t)}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </li>
    `}render(){return n`
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
          Drag and drop, or <strong @click=${t=>{t.stopPropagation(),this._input.click()}}>browse</strong>
        </p>
        ${this.hint?n`<p class="hint">${this.hint}</p>`:""}
      </div>

      <ul
        class="file-list"
        part="file-list"
        aria-label="Selected files"
        ?hidden=${this._files.length===0}
      >
        ${this._files.map(t=>this._renderFile(t))}
      </ul>
    `}};se.styles=lc;Ge([l()],se.prototype,"accept",2);Ge([l({type:Boolean})],se.prototype,"multiple",2);Ge([l({type:Boolean,reflect:!0})],se.prototype,"disabled",2);Ge([l()],se.prototype,"hint",2);Ge([p()],se.prototype,"_files",2);Ge([p()],se.prototype,"_dragOver",2);Ge([Pe("input")],se.prototype,"_input",2);se=Ge([c("wu-file-upload")],se);const pc=d`
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
`,hc=d`
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
`;var vc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,ee=(t,r,a,o)=>{for(var e=o>1?void 0:o?wc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&vc(r,a,e),e};let xe=class extends u{constructor(){super(...arguments),this.label="",this.description="",this.status="pending",this.index=0,this.disabled=!1}_renderIndicator(){return this.status==="complete"?n`
        <svg class="check-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="2 7 6 11 12 3"/>
        </svg>
      `:this.status==="error"?n`
        <svg class="error-icon" width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
          <path d="M7 1L1 12h12L7 1zm0 8v2m0-5v2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </svg>
      `:n`${this.index+1}`}render(){return n`
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
          ${this.description?n`<div class="description">${this.description}</div>`:v}
        </div>
      </div>
    `}};xe.styles=hc;ee([l()],xe.prototype,"label",2);ee([l()],xe.prototype,"description",2);ee([l({reflect:!0})],xe.prototype,"status",2);ee([l({type:Number})],xe.prototype,"index",2);ee([l({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);xe=ee([c("wu-step")],xe);let st=class extends u{constructor(){super(...arguments),this.activeStep=0,this.linear=!1,this.vertical=!1,this._steps=[]}_setup(){const t=this.shadowRoot.querySelector("slot");t&&(this._steps=t.assignedNodes({flatten:!0}).filter(r=>r instanceof xe),this._updateSteps())}_updateSteps(){this._steps.forEach((t,r)=>{r<this.activeStep?t.status="complete":r===this.activeStep?t.status="active":t.status="pending",t.index=r})}firstUpdated(){this._setup()}next(){this.activeStep<this._steps.length-1&&(this.activeStep++,this._updateSteps(),this._emit())}prev(){this.activeStep>0&&(this.activeStep--,this._updateSteps(),this._emit())}_emit(){this.dispatchEvent(new CustomEvent("wu-step-change",{bubbles:!0,composed:!0,detail:{step:this.activeStep}}))}updated(t){t.has("activeStep")&&this._updateSteps()}render(){return n`
      <div class="stepper" role="list" aria-label="Progress steps">
        <slot @slotchange=${this._setup}></slot>
      </div>
    `}};st.styles=pc;ee([l({type:Number,attribute:"active-step"})],st.prototype,"activeStep",2);ee([l({type:Boolean})],st.prototype,"linear",2);ee([l({type:Boolean,reflect:!0})],st.prototype,"vertical",2);ee([p()],st.prototype,"_steps",2);st=ee([c("wu-stepper")],st);const bc=d`
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
`;var gc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,Je=(t,r,a,o)=>{for(var e=o>1?void 0:o?fc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&gc(r,a,e),e};let ie=class extends u{constructor(){super(...arguments),this._uid=Math.random().toString(36).slice(2,9),this.open=!1,this.items=[],this.placeholder="Search commands…",this.emptyMessage="No results found.",this._query="",this._selectedIndex=0}get _filtered(){if(!this._query.trim())return this.items;const t=this._query.toLowerCase();return this.items.filter(r=>{var a,o;return r.label.toLowerCase().includes(t)||((a=r.group)==null?void 0:a.toLowerCase().includes(t))||((o=r.keywords)==null?void 0:o.some(e=>e.toLowerCase().includes(t)))})}get _grouped(){const t=new Map;for(const r of this._filtered){const a=r.group??"";t.has(a)||t.set(a,[]),t.get(a).push(r)}return t}updated(t){t.has("open")&&this.open&&(this._query="",this._selectedIndex=0,requestAnimationFrame(()=>{var r;return(r=this._input)==null?void 0:r.focus()}))}_onKeydown(t){const r=this._filtered;if(t.key==="Escape"){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}));return}if(t.key==="ArrowDown")t.preventDefault(),this._selectedIndex=Math.min(this._selectedIndex+1,r.length-1);else if(t.key==="ArrowUp")t.preventDefault(),this._selectedIndex=Math.max(this._selectedIndex-1,0);else if(t.key==="Enter"){t.preventDefault();const a=r[this._selectedIndex];a&&this._select(a)}}_select(t){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{item:t}})),this.open=!1}_onBackdropClick(t){t.target.classList.contains("backdrop")&&(this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0})))}_flatIndex(t){return this._filtered.indexOf(t)}render(){const t=this._grouped,r=this._filtered,a=[];for(const[s,i]of t.entries()){s&&a.push({type:"group",label:s});for(const h of i)a.push({type:"item",item:h,idx:this._flatIndex(h)})}const o=`wu-command-list-${this._uid}`,e=r.length>0?`wu-cmd-item-${this._uid}-${this._selectedIndex}`:void 0;return n`
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
              aria-controls=${o}
              aria-activedescendant=${w(e)}
              aria-label="${this.placeholder}"
              placeholder=${this.placeholder}
              .value=${this._query}
              @input=${s=>{this._query=s.target.value,this._selectedIndex=0}}
            />
          </div>

          <div
            id=${o}
            class="list"
            role="listbox"
            aria-label="Commands"
          >
            ${r.length===0?n`<div class="empty" role="option" aria-disabled="true">${this.emptyMessage}</div>`:v}
            ${a.map(s=>s.type==="group"?n`<div class="group-label" role="presentation">${s.label}</div>`:n`
                  <div
                    id="wu-cmd-item-${this._uid}-${s.idx}"
                    class="item"
                    role="option"
                    aria-selected=${this._selectedIndex===s.idx}
                    @click=${()=>this._select(s.item)}
                    @mouseenter=${()=>{this._selectedIndex=s.idx}}
                  >
                    ${s.item.icon?n`<span class="item-icon" aria-hidden="true">${s.item.icon}</span>`:v}
                    <span class="item-label">${s.item.label}</span>
                    ${s.item.shortcut?n`<kbd class="item-shortcut" aria-label="Shortcut: ${s.item.shortcut}">${s.item.shortcut}</kbd>`:v}
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
    `}};ie.styles=bc;Je([l({type:Boolean,reflect:!0})],ie.prototype,"open",2);Je([l({type:Array})],ie.prototype,"items",2);Je([l()],ie.prototype,"placeholder",2);Je([l({attribute:"empty-message"})],ie.prototype,"emptyMessage",2);Je([p()],ie.prototype,"_query",2);Je([p()],ie.prototype,"_selectedIndex",2);Je([Pe(".search-input")],ie.prototype,"_input",2);ie=Je([c("wu-command")],ie);const mc=d`
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
`;var yc=Object.defineProperty,xc=Object.getOwnPropertyDescriptor,te=(t,r,a,o)=>{for(var e=o>1?void 0:o?xc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&yc(r,a,e),e};let M=class extends u{constructor(){super(...arguments),this.columns=[],this.data=[],this.totalRows=0,this.page=1,this.pageSize=10,this.showToolbar=!0,this.emptyMessage="No data to display.",this._sortKey="",this._sortDir="asc",this._filter=""}get _filteredData(){if(!this._filter.trim())return this.data;const t=this._filter.toLowerCase();return this.data.filter(r=>this.columns.some(a=>String(r[a.key]??"").toLowerCase().includes(t)))}get _sortedData(){return this._sortKey?[...this._filteredData].sort((t,r)=>{const a=String(t[this._sortKey]??""),o=String(r[this._sortKey]??""),e=a.localeCompare(o);return this._sortDir==="asc"?e:-e}):this._filteredData}get _pageData(){if(this.totalRows>this.data.length)return this._sortedData;const t=(this.page-1)*this.pageSize;return this._sortedData.slice(t,t+this.pageSize)}get _totalPages(){const t=this.totalRows||this._filteredData.length;return Math.max(1,Math.ceil(t/this.pageSize))}_sort(t,r){r&&(this._sortKey===t?this._sortDir=this._sortDir==="asc"?"desc":"asc":(this._sortKey=t,this._sortDir="asc"),this.dispatchEvent(new CustomEvent("wu-sort-change",{bubbles:!0,composed:!0,detail:{key:this._sortKey,direction:this._sortDir}})))}_onFilter(t){this._filter=t.target.value,this.page=1,this.dispatchEvent(new CustomEvent("wu-filter-change",{bubbles:!0,composed:!0,detail:{query:this._filter}}))}_goPage(t){t<1||t>this._totalPages||(this.page=t,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:this.page,pageSize:this.pageSize}})))}_onPageSize(t){this.pageSize=Number(t.target.value),this.page=1,this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:this.page,pageSize:this.pageSize}}))}_pageButtons(){const t=this._totalPages,r=this.page,a=[];if(t<=7)for(let o=1;o<=t;o++)a.push(o);else{a.push(1),r>3&&a.push("dots");for(let o=Math.max(2,r-1);o<=Math.min(t-1,r+1);o++)a.push(o);r<t-2&&a.push("dots"),a.push(t)}return a}render(){const t=this._pageData,r=this.totalRows||this._filteredData.length;return n`
      <div class="grid" part="grid" role="grid" aria-rowcount=${this.totalRows||this._filteredData.length}>
        ${this.showToolbar?n`
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
            <span class="row-count" aria-live="polite">${r} row${r!==1?"s":""}</span>
          </div>
        `:v}

        <div class="header-row" role="row">
          ${this.columns.map(a=>n`
            <div
              class=${`header-cell${a.sortable?" sortable":""}${this._sortKey===a.key?" sorted":""}`}
              style=${a.width?`flex: 0 0 ${a.width}`:""}
              role="columnheader"
              aria-sort=${this._sortKey===a.key?this._sortDir==="asc"?"ascending":"descending":"none"}
              @click=${()=>this._sort(a.key,a.sortable)}
            >
              ${a.label}
              ${a.sortable&&this._sortKey===a.key?n`<span class="sort-indicator">${this._sortDir==="asc"?"▲":"▼"}</span>`:v}
            </div>
          `)}
        </div>

        <div class="body" role="rowgroup">
          ${t.length===0?n`<div class="empty">${this.emptyMessage}</div>`:v}
          ${t.map((a,o)=>n`
            <div class="data-row" role="row" aria-rowindex=${(this.page-1)*this.pageSize+o+2}>
              ${this.columns.map(e=>n`
                <div
                  class="cell"
                  role="gridcell"
                  style=${e.width?`flex: 0 0 ${e.width}`:""}
                >${a[e.key]??""}</div>
              `)}
            </div>
          `)}
        </div>

        ${this._totalPages>1?n`
          <div class="pagination-bar" role="navigation" aria-label="Pagination">
            <div style="display:flex;align-items:center;gap:8px">
              <span class="page-info">
                Rows per page:
              </span>
              <select class="page-size-select" aria-label="Rows per page" @change=${this._onPageSize}>
                ${[10,25,50,100].map(a=>n`
                  <option value=${a} ?selected=${this.pageSize===a}>${a}</option>
                `)}
              </select>
              <span class="page-info">
                ${Math.min((this.page-1)*this.pageSize+1,r)}–${Math.min(this.page*this.pageSize,r)} of ${r}
              </span>
            </div>
            <div class="page-controls">
              <button class="page-btn" ?disabled=${this.page===1} @click=${()=>this._goPage(this.page-1)} aria-label="Previous page">‹</button>
              ${this._pageButtons().map(a=>a==="dots"?n`<span class="page-btn" aria-hidden="true" style="border:none;background:none;cursor:default">…</span>`:n`<button class="page-btn ${this.page===a?"active":""}" aria-label="Page ${a}" aria-current=${this.page===a?"page":v} @click=${()=>this._goPage(a)}>${a}</button>`)}
              <button class="page-btn" ?disabled=${this.page===this._totalPages} @click=${()=>this._goPage(this.page+1)} aria-label="Next page">›</button>
            </div>
          </div>
        `:v}
      </div>
    `}};M.styles=mc;te([l({type:Array})],M.prototype,"columns",2);te([l({type:Array})],M.prototype,"data",2);te([l({type:Number,attribute:"total-rows"})],M.prototype,"totalRows",2);te([l({type:Number})],M.prototype,"page",2);te([l({type:Number,attribute:"page-size"})],M.prototype,"pageSize",2);te([l({type:Boolean,attribute:"show-toolbar"})],M.prototype,"showToolbar",2);te([l({attribute:"empty-message"})],M.prototype,"emptyMessage",2);te([p()],M.prototype,"_sortKey",2);te([p()],M.prototype,"_sortDir",2);te([p()],M.prototype,"_filter",2);M=te([c("wu-data-grid")],M);const kc=d`
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
`;var $c=Object.defineProperty,_c=Object.getOwnPropertyDescriptor,Os=(t,r,a,o)=>{for(var e=o>1?void 0:o?_c(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&$c(r,a,e),e};let Kt=class extends u{constructor(){super(...arguments),this.sticky=!1,this.fixed=!1,this._open=!1}_toggleDrawer(){this._open=!this._open,this._open?this.setAttribute("_open",""):this.removeAttribute("_open"),this.dispatchEvent(new CustomEvent(this._open?"wu-menu-open":"wu-menu-close",{bubbles:!0,composed:!0}))}render(){return n`
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
            ${this._open?n`<path d="M2 2l14 14M16 2L2 16"/>`:n`<path d="M2 4h14M2 9h14M2 14h14"/>`}
          </svg>
        </button>
      </header>
      <nav id="mobile-drawer" part="drawer" class="drawer"
           aria-label="Mobile navigation" aria-hidden=${!this._open}>
        <slot name="mobile"><slot></slot></slot>
      </nav>
    `}};Kt.styles=kc;Os([l({type:Boolean,reflect:!0})],Kt.prototype,"sticky",2);Os([l({type:Boolean,reflect:!0})],Kt.prototype,"fixed",2);Os([p()],Kt.prototype,"_open",2);Kt=Os([c("wu-navbar")],Kt);const zc=d`
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
`,Oc=d`
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
`;var jc=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,Ct=(t,r,a,o)=>{for(var e=o>1?void 0:o?Pc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&jc(r,a,e),e};let Vt=class extends u{constructor(){super(...arguments),this.active=!1,this.disabled=!1}_handleClick(){this.disabled||this.href||this.dispatchEvent(new CustomEvent("wu-nav",{bubbles:!0,composed:!0,detail:{item:this}}))}render(){const t=n`
      <span class="icon" aria-hidden="true"><slot name="icon"></slot></span>
      <span class="label"><slot></slot></span>
    `;return this.href?n`<a href=${w(this.href)} aria-current=${w(this.active?"page":void 0)}>${t}</a>`:n`<button class="item-btn" ?disabled=${this.disabled} @click=${this._handleClick}>${t}</button>`}};Vt.styles=Oc;Ct([l()],Vt.prototype,"href",2);Ct([l({type:Boolean,reflect:!0})],Vt.prototype,"active",2);Ct([l({type:Boolean,reflect:!0})],Vt.prototype,"disabled",2);Vt=Ct([c("wu-sidebar-item")],Vt);let Zr=class extends u{constructor(){super(...arguments),this.collapsed=!1,this.hideToggle=!1}_toggle(){this.collapsed=!this.collapsed,this.querySelectorAll("wu-sidebar-item").forEach(t=>{this.collapsed?t.setAttribute("collapsed",""):t.removeAttribute("collapsed")}),this.dispatchEvent(new CustomEvent("wu-collapse",{bubbles:!0,composed:!0,detail:{collapsed:this.collapsed}}))}render(){return n`
      <aside part="sidebar" class="sidebar" aria-label="Sidebar navigation">
        <div part="header" class="header">
          <div class="header-slot"><slot name="header"></slot></div>
          ${this.hideToggle?"":n`
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
    `}};Zr.styles=zc;Ct([l({type:Boolean,reflect:!0})],Zr.prototype,"collapsed",2);Ct([l({type:Boolean,attribute:"hide-toggle"})],Zr.prototype,"hideToggle",2);Zr=Ct([c("wu-sidebar")],Zr);const Cc=d`
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
`;var Dc=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,js=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ec(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Dc(r,a,e),e};let Ut=class extends u{constructor(){super(...arguments),this.novalidate=!1,this.loading=!1,this._errors=[]}_handleSubmit(t){t.preventDefault();const r=[...Array.from(this.querySelectorAll("input, select, textarea"))];if(!this.novalidate){const o=[];if(r.forEach(e=>{if(!e.disabled&&typeof e.checkValidity=="function"&&!e.checkValidity()){const s=e.validationMessage;s&&o.push(s)}}),o.length>0){this._errors=[...new Set(o)],this.dispatchEvent(new CustomEvent("wu-invalid",{bubbles:!0,composed:!0,detail:{errors:this._errors}}));return}}this._errors=[];const a={};r.forEach(o=>{!o.name||o.disabled||(o instanceof HTMLInputElement&&(o.type==="checkbox"||o.type==="radio")?o.checked&&(a[o.name]=o.value):a[o.name]=o.value)}),this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{values:a}}))}render(){return n`
      <form
        part="base"
        ?novalidate=${!0}
        aria-busy=${this.loading}
        @submit=${this._handleSubmit}
      >
        ${this._errors.length?n`
          <div part="summary" class="error-summary" role="alert" aria-live="assertive">
            <span class="error-summary-title">Please fix the following errors:</span>
            <ul>${this._errors.map(t=>n`<li>${t}</li>`)}</ul>
          </div>
        `:""}
        <div part="fields" class="fields">
          <slot></slot>
        </div>
        <div part="actions" class="actions">
          <slot name="actions"></slot>
        </div>
      </form>
    `}};Ut.styles=Cc;js([l({type:Boolean})],Ut.prototype,"novalidate",2);js([l({type:Boolean,reflect:!0})],Ut.prototype,"loading",2);js([p()],Ut.prototype,"_errors",2);Ut=js([c("wu-form")],Ut);const Sc=d`
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
`;var Mc=Object.defineProperty,Bc=Object.getOwnPropertyDescriptor,ll=(t,r,a,o)=>{for(var e=o>1?void 0:o?Bc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Mc(r,a,e),e};let Za=class extends u{constructor(){super(...arguments),this.fullWidth=!1}render(){return n`
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
    `}};Za.styles=Sc;ll([l({type:Boolean,attribute:"full-width",reflect:!0})],Za.prototype,"fullWidth",2);Za=ll([c("wu-dashboard")],Za);const Ac=d`
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
`;var Ic=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,$i=(t,r,a,o)=>{for(var e=o>1?void 0:o?Nc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ic(r,a,e),e};let eo=class extends u{constructor(){super(...arguments),this.title="",this.description=""}render(){return n`
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

      ${this.title?n`<p class="title" part="title">${this.title}</p>`:""}

      <p class="description" part="description">
        ${this.description}
        <slot></slot>
      </p>

      <div class="actions" part="actions">
        <slot name="actions"></slot>
      </div>
    `}};eo.styles=Ac;$i([l()],eo.prototype,"title",2);$i([l()],eo.prototype,"description",2);eo=$i([c("wu-empty-state")],eo);const Lc=d`
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
`;var Tc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,Ps=(t,r,a,o)=>{for(var e=o>1?void 0:o?qc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Tc(r,a,e),e};const Rc={400:"Bad Request",401:"Unauthorised",403:"Access Denied",404:"Page Not Found",408:"Request Timeout",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout"},Fc={400:"The server couldn't understand the request. Please check the URL or contact support.",401:"You need to be authenticated to access this page. Please sign in and try again.",403:"You don't have permission to access this page. Contact your administrator if this is a mistake.",404:"We can't find the page you're looking for. It may have been moved or deleted.",408:"The request took too long to process. Please check your connection and try again.",500:"Something went wrong on our end. Our team has been notified.",502:"The server received an invalid response. Please try again in a moment.",503:"This service is temporarily unavailable. Please try again shortly.",504:"The server took too long to respond. Please try again in a moment."};let Yt=class extends u{constructor(){super(...arguments),this.code="404",this.title="",this.description=""}_resolvedTitle(){return this.title||Rc[this.code]||"An error occurred"}_resolvedDescription(){return this.description||Fc[this.code]||"An unexpected error occurred. Please try again."}render(){return n`
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
    `}};Yt.styles=Lc;Ps([l({reflect:!0})],Yt.prototype,"code",2);Ps([l()],Yt.prototype,"title",2);Ps([l()],Yt.prototype,"description",2);Yt=Ps([c("wu-error-page")],Yt);const Hc=d`
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
`;var Kc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,C=(t,r,a,o)=>{for(var e=o>1?void 0:o?Vc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Kc(r,a,e),e};let y=class extends u{constructor(){super(...arguments),this.value="",this.placeholder="Search…",this.loading=!1,this.clearable=!0,this.debounce=300,this.suggestions=[],this.maxSuggestions=8,this.showCategories=!0,this.keepRecentSearches=!1,this._value="",this._open=!1,this._activeIndex=-1,this._recentSearches=[],this._debounceTimer=null,this._uid=`wu-search-lb-${Math.random().toString(36).slice(2)}`}connectedCallback(){if(super.connectedCallback(),this._value=this.value,this.keepRecentSearches)try{const t=sessionStorage.getItem("wu-search-recent");t&&(this._recentSearches=JSON.parse(t).slice(0,5))}catch{}}updated(t){t.has("value")&&this.value!==this._value&&(this._value=this.value)}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _visible(){return this.suggestions.filter(t=>!t.disabled).slice(0,this.maxSuggestions)}get _showPanel(){return this._open?!!(this._visible.length>0||this.keepRecentSearches&&!this._value&&this._recentSearches.length>0):!1}_handleInput(t){const r=t.target;this._value=r.value,this.value=this._value,this._open=!0,this._activeIndex=-1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this._value}})),this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{value:this._value}}))},this.debounce)}_handleFocus(){this._open=!0}_handleBlur(){setTimeout(()=>{this._open=!1},160)}_handleClear(){var t,r;this._value="",this.value="",this._activeIndex=-1,this._debounceTimer&&clearTimeout(this._debounceTimer),this.dispatchEvent(new CustomEvent("wu-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{value:""}})),(r=(t=this.shadowRoot)==null?void 0:t.querySelector("input"))==null||r.focus()}_handleKeyDown(t){const r=this._visible;if(t.key==="Escape"){t.preventDefault(),this._open&&this._showPanel?this._open=!1:this._value&&this._handleClear();return}this._showPanel&&(t.key==="ArrowDown"?(t.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,r.length-1),this._scrollActiveIntoView()):t.key==="ArrowUp"?(t.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActiveIntoView()):t.key==="Enter"&&this._activeIndex>=0?(t.preventDefault(),this._selectItem(r[this._activeIndex])):t.key==="Tab"&&(this._open=!1))}_scrollActiveIntoView(){requestAnimationFrame(()=>{var t;const r=(t=this.shadowRoot)==null?void 0:t.querySelector(".panel"),a=r==null?void 0:r.querySelector('[aria-selected="true"]');a==null||a.scrollIntoView({block:"nearest"})})}_selectItem(t){if(this._value=t.label,this.value=t.label,this._open=!1,this._activeIndex=-1,this.keepRecentSearches){this._recentSearches=[t.label,...this._recentSearches.filter(r=>r!==t.label)].slice(0,5);try{sessionStorage.setItem("wu-search-recent",JSON.stringify(this._recentSearches))}catch{}}this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{item:t}}))}_selectRecent(t){this._value=t,this.value=t,this._open=!1,this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{value:t}}))}_highlight(t){if(!this._value)return n`${t}`;const r=this._value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),a=new RegExp(`(${r})`,"i").exec(t);if(!a)return n`${t}`;const o=t.slice(0,a.index),e=a[1],s=t.slice(a.index+e.length);return n`${o}<mark class="hl">${e}</mark>${s}`}_typeIcon(t){switch(t){case"document":return n`
        <svg viewBox="0 0 20 20" fill="none" class="si si-document">
          <rect x="3" y="2" width="11" height="16" rx="1.5" fill="var(--wu-search-icon-doc)" opacity=".15"/>
          <rect x="3" y="2" width="11" height="16" rx="1.5" stroke="var(--wu-search-icon-doc)" stroke-width="1.4"/>
          <path d="M6 7h6M6 10h6M6 13h4" stroke="var(--wu-search-icon-doc)" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M11 2v4h3" fill="var(--wu-search-icon-doc)" opacity=".25"/>
          <path d="M11 2l3 4" stroke="var(--wu-search-icon-doc)" stroke-width="1.2"/>
        </svg>`;case"spreadsheet":return n`
        <svg viewBox="0 0 20 20" fill="none" class="si si-spreadsheet">
          <rect x="3" y="2" width="14" height="16" rx="1.5" fill="var(--wu-search-icon-sheet)" opacity=".12"/>
          <rect x="3" y="2" width="14" height="16" rx="1.5" stroke="var(--wu-search-icon-sheet)" stroke-width="1.4"/>
          <path d="M3 7h14M10 7v11M3 12h14" stroke="var(--wu-search-icon-sheet)" stroke-width="1.2"/>
        </svg>`;case"pdf":return n`
        <svg viewBox="0 0 20 20" fill="none" class="si si-pdf">
          <rect x="3" y="2" width="11" height="16" rx="1.5" fill="var(--wu-search-icon-pdf)" opacity=".15"/>
          <rect x="3" y="2" width="11" height="16" rx="1.5" stroke="var(--wu-search-icon-pdf)" stroke-width="1.4"/>
          <text x="4.5" y="12.5" font-size="5" fill="var(--wu-search-icon-pdf)" font-weight="700" font-family="sans-serif">PDF</text>
        </svg>`;case"image":return n`
        <svg viewBox="0 0 20 20" fill="none" class="si si-image">
          <rect x="2" y="4" width="16" height="12" rx="1.5" fill="var(--wu-search-icon-image)" opacity=".12"/>
          <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="var(--wu-search-icon-image)" stroke-width="1.4"/>
          <circle cx="7" cy="8.5" r="1.5" fill="var(--wu-search-icon-image)"/>
          <path d="M2 13l4-4 3 3 3-3 4 4" stroke="var(--wu-search-icon-image)" stroke-width="1.2" stroke-linejoin="round"/>
        </svg>`;case"video":return n`
        <svg viewBox="0 0 20 20" fill="none" class="si si-video">
          <rect x="2" y="4" width="12" height="12" rx="1.5" fill="var(--wu-search-icon-video)" opacity=".12"/>
          <rect x="2" y="4" width="12" height="12" rx="1.5" stroke="var(--wu-search-icon-video)" stroke-width="1.4"/>
          <path d="M14 8l4-2v8l-4-2V8Z" stroke="var(--wu-search-icon-video)" stroke-width="1.4" stroke-linejoin="round"/>
          <path d="M7 8.5l3.5 1.75L7 12V8.5Z" fill="var(--wu-search-icon-video)"/>
        </svg>`;case"user":return n`
        <svg viewBox="0 0 20 20" fill="none" class="si si-user">
          <circle cx="10" cy="7" r="3.5" fill="var(--wu-search-icon-user)" opacity=".2"/>
          <circle cx="10" cy="7" r="3.5" stroke="var(--wu-search-icon-user)" stroke-width="1.4"/>
          <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="var(--wu-search-icon-user)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`;case"recent":return n`
        <svg viewBox="0 0 20 20" fill="none" class="si si-recent">
          <circle cx="10" cy="10" r="7" stroke="var(--wu-search-icon-color)" stroke-width="1.4"/>
          <path d="M10 6v4l2.5 2.5" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`;case"action":return n`
        <svg viewBox="0 0 20 20" fill="none" class="si si-action">
          <path d="M11 3L4 11h6l-1 6 7-8h-6l1-6Z" fill="var(--wu-search-icon-action)" opacity=".2"/>
          <path d="M11 3L4 11h6l-1 6 7-8h-6l1-6Z" stroke="var(--wu-search-icon-action)" stroke-width="1.4" stroke-linejoin="round"/>
        </svg>`;case"link":return n`
        <svg viewBox="0 0 20 20" fill="none" class="si si-link">
          <path d="M8 12a4 4 0 0 0 5.66 0l2-2A4 4 0 0 0 10 4.34L9 5.35" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
          <path d="M12 8a4 4 0 0 0-5.66 0l-2 2A4 4 0 0 0 10 15.66L11 14.65" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`;default:return n`
        <svg viewBox="0 0 20 20" fill="none" class="si si-default">
          <circle cx="8.5" cy="8.5" r="5" stroke="var(--wu-search-icon-color)" stroke-width="1.4"/>
          <path d="m12 12 4 4" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`}}_renderItemIcon(t){return t.imageUrl?n`<span class="si-img"><img src=${t.imageUrl} alt="" loading="lazy"/></span>`:n`<span class="si-wrap si-wrap--${t.type??"default"}">${this._typeIcon(t.type)}</span>`}_renderCategory(t){return n`<div class="category-header" role="presentation">${t}</div>`}_renderSuggestionList(){const t=this._visible;if(t.length===0)return v;const r=[];let a="";return t.forEach((o,e)=>{this.showCategories&&o.category&&o.category!==a&&(r.push(this._renderCategory(o.category)),a=o.category);const s=this._activeIndex===e;r.push(n`
        <div
          class="item ${s?"item--active":""} ${o.disabled?"item--disabled":""}"
          role="option"
          aria-selected=${s}
          @mousedown=${i=>{i.preventDefault(),o.disabled||this._selectItem(o)}}
          @mouseover=${()=>{this._activeIndex=e}}
        >
          ${this._renderItemIcon(o)}
          <span class="item-content">
            <span class="item-label">${this._highlight(o.label)}</span>
            ${o.description?n`<span class="item-desc">${o.description}</span>`:v}
          </span>
          <span class="item-meta">
            ${o.badge?n`<span class="item-badge">${o.badge}</span>`:v}
            ${o.meta?n`<span class="item-time">${o.meta}</span>`:v}
          </span>
        </div>
      `)}),r}_renderRecentSearches(){return!this.keepRecentSearches||this._value||this._recentSearches.length===0?v:n`
      <div class="category-header">Recent</div>
      ${this._recentSearches.map(t=>n`
        <div class="item" role="option" aria-selected="false"
          @mousedown=${r=>{r.preventDefault(),this._selectRecent(t)}}>
          <span class="si-wrap si-wrap--recent">${this._typeIcon("recent")}</span>
          <span class="item-content">
            <span class="item-label">${t}</span>
          </span>
          <span class="item-meta">
            <button class="remove-recent" aria-label="Remove"
              @mousedown=${r=>{r.stopPropagation(),r.preventDefault(),this._recentSearches=this._recentSearches.filter(a=>a!==t);try{sessionStorage.setItem("wu-search-recent",JSON.stringify(this._recentSearches))}catch{}}}>
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
          </span>
        </div>
      `)}
    `}_renderEmptyState(){return!this._value||this._visible.length>0?v:n`
      <div class="empty-state">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="9" stroke="var(--wu-color-text-disabled)" stroke-width="1.5"/>
          <path d="m21 21 6 6" stroke="var(--wu-color-text-disabled)" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M11 14h6M14 11v6" stroke="var(--wu-color-text-disabled)" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <p>No results for <strong>"${this._value}"</strong></p>
      </div>
    `}_renderSearchAction(){return this._value?n`
      <div class="panel-footer">
        <span class="footer-hint">
          <kbd>↵</kbd> select &nbsp;·&nbsp; <kbd>↑↓</kbd> navigate &nbsp;·&nbsp; <kbd>Esc</kbd> close
        </span>
      </div>
    `:v}render(){const t=this.clearable&&!this.loading&&this._value.length>0,r=this._activeIndex>=0?`${this._uid}-item-${this._activeIndex}`:void 0;return n`
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
          aria-activedescendant=${r??""}
          @input=${this._handleInput}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @keydown=${this._handleKeyDown}
        />

        <div class="actions">
          ${this.loading?n`<span class="spinner" role="status" aria-label="Loading"></span>`:v}
          ${t?n`
                <button class="clear" type="button" aria-label="Clear search" @click=${this._handleClear}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>`:v}
        </div>
      </div>

      ${this._showPanel?n`
        <div class="panel" part="panel" id=${this._uid} role="listbox">
          ${this._renderRecentSearches()}
          ${this._renderSuggestionList()}
          ${this._renderEmptyState()}
          ${this._renderSearchAction()}
        </div>`:v}
    `}};y.styles=Hc;C([l()],y.prototype,"value",2);C([l()],y.prototype,"placeholder",2);C([l({type:Boolean,reflect:!0})],y.prototype,"loading",2);C([l({type:Boolean})],y.prototype,"clearable",2);C([l({type:Number})],y.prototype,"debounce",2);C([l({type:Array})],y.prototype,"suggestions",2);C([l({type:Number})],y.prototype,"maxSuggestions",2);C([l({type:Boolean})],y.prototype,"showCategories",2);C([l({type:Boolean})],y.prototype,"keepRecentSearches",2);C([p()],y.prototype,"_value",2);C([p()],y.prototype,"_open",2);C([p()],y.prototype,"_activeIndex",2);C([p()],y.prototype,"_recentSearches",2);y=C([c("wu-search")],y);const Uc=d`
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
`;var Yc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,A=(t,r,a,o)=>{for(var e=o>1?void 0:o?Wc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Yc(r,a,e),e};let k=class extends u{constructor(){super(...arguments),this.columns=[],this.rows=[],this.total=0,this.page=1,this.pageSize=10,this.loading=!1,this.selectable=!1,this.searchable=!1,this.emptyMessage="No data to display.",this._selected=new Set,this._sortKey=null,this._sortDir=null}_emitPageChange(t){this.dispatchEvent(new CustomEvent("wu-page-change",{bubbles:!0,composed:!0,detail:{page:t,pageSize:this.pageSize}}))}_emitSortChange(t,r){this.dispatchEvent(new CustomEvent("wu-sort-change",{bubbles:!0,composed:!0,detail:{key:t,direction:r}}))}_emitSelectionChange(){this.dispatchEvent(new CustomEvent("wu-selection-change",{bubbles:!0,composed:!0,detail:{selected:[...this._selected]}}))}_handleSort(t){if(t.sortable){if(this._sortKey===t.key){const r=this._sortDir==="asc"?"desc":this._sortDir==="desc"?null:"asc";this._sortDir=r,r===null&&(this._sortKey=null)}else this._sortKey=t.key,this._sortDir="asc";this._emitSortChange(this._sortKey??t.key,this._sortDir)}}_handleSelectRow(t){this._selected.has(t)?this._selected.delete(t):this._selected.add(t),this._selected=new Set(this._selected),this._emitSelectionChange()}_handleSelectAll(t){const r=t.target.checked;this._selected=r?new Set(this.rows):new Set,this._emitSelectionChange()}_handleSearch(t){this.dispatchEvent(new CustomEvent("wu-search-change",{bubbles:!0,composed:!0,detail:{value:t.detail.value}}))}_sortIcon(t){if(!t.sortable)return v;const r=this._sortKey===t.key?this._sortDir:null;return n`
      <span class="sort-icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="${r==="asc"?"M6 9l4-4 4 4":r==="desc"?"M6 7l4 4 4-4":"M6 8.5l3.5-3 3.5 3M6 11.5l3.5 3 3.5-3"}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    `}_buildPages(t){const r=[],a=[];for(let o=Math.max(2,this.page-2);o<=Math.min(t-1,this.page+2);o++)a.push(o);return this.page-2>2&&a.unshift(-1),this.page+2<t-1&&a.push(-2),r.push(1),a.forEach(o=>r.push(o<0?"…":o)),t>1&&r.push(t),r}render(){const t=this.rows.length>0&&this._selected.size===this.rows.length,r=this._selected.size>0&&!t,a=Math.max(1,Math.ceil(this.total/this.pageSize)),o=a<=1&&this.total<=this.pageSize,e=Math.min((this.page-1)*this.pageSize+1,Math.max(this.total,0)),s=Math.min(this.page*this.pageSize,this.total),i=this._buildPages(a);return n`
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
                ${this.selectable?n`
                      <th class="checkbox-col">
                        <input
                          type="checkbox"
                          aria-label="Select all rows"
                          .checked=${t}
                          .indeterminate=${r}
                          @change=${this._handleSelectAll}
                        />
                      </th>
                    `:v}
                ${this.columns.map(h=>n`
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
              ${this.rows.length===0?n`
                    <tr class="empty-row">
                      <td colspan="${this.columns.length+(this.selectable?1:0)}">
                        ${this.emptyMessage}
                      </td>
                    </tr>
                  `:this.rows.map(h=>n`
                    <tr
                      class="${this._selected.has(h)?"selected":""}"
                      aria-selected=${this._selected.has(h)?"true":"false"}
                    >
                      ${this.selectable?n`
                            <td class="checkbox-col">
                              <input
                                type="checkbox"
                                aria-label="Select row"
                                .checked=${this._selected.has(h)}
                                @change=${()=>this._handleSelectRow(h)}
                              />
                            </td>
                          `:v}
                      ${this.columns.map(b=>n`
                        <td title=${String(h[b.key]??"")}>
                          ${h[b.key]!=null?String(h[b.key]):"—"}
                        </td>
                      `)}
                    </tr>
                  `)}
            </tbody>
          </table>
        </div>

        <div class="footer" part="footer" ?hidden=${o}>
          <span class="footer-info">
            ${this.total>0?`${e}–${s} of ${this.total}`:"No results"}
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
            ${i.map(h=>h==="…"?n`<span style="padding:0 4px;color:var(--wu-color-text-secondary)">…</span>`:n`
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
    `}};k.styles=Uc;A([l({type:Array})],k.prototype,"columns",2);A([l({type:Array})],k.prototype,"rows",2);A([l({type:Number})],k.prototype,"total",2);A([l({type:Number})],k.prototype,"page",2);A([l({type:Number,attribute:"page-size"})],k.prototype,"pageSize",2);A([l({type:Boolean,reflect:!0})],k.prototype,"loading",2);A([l({type:Boolean})],k.prototype,"selectable",2);A([l({type:Boolean})],k.prototype,"searchable",2);A([l({attribute:"empty-message"})],k.prototype,"emptyMessage",2);A([p()],k.prototype,"_selected",2);A([p()],k.prototype,"_sortKey",2);A([p()],k.prototype,"_sortDir",2);k=A([c("wu-data-table")],k);const Xc=d`
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
`,Gc=d`
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
`;var Jc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,I=(t,r,a,o)=>{for(var e=o>1?void 0:o?Qc(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Jc(r,a,e),e};let it=class extends u{constructor(){super(...arguments),this.value="",this.checked=!1,this.disabled=!1,this.name=""}_handleChange(){this.disabled||this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){const t=`wu-radio-${this.value}`;return n`
      <input
        id=${t}
        type="radio"
        name=${w(this.name||void 0)}
        value=${this.value}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        @change=${this._handleChange}
      />
      <label for=${t}><slot></slot></label>
    `}};it.styles=Gc;I([l()],it.prototype,"value",2);I([l({type:Boolean,reflect:!0})],it.prototype,"checked",2);I([l({type:Boolean,reflect:!0})],it.prototype,"disabled",2);I([l()],it.prototype,"name",2);it=I([c("wu-radio")],it);let ne=class extends u{constructor(){super(...arguments),this._uid=Math.random().toString(36).slice(2,9),this.name="",this.value="",this.label="",this.orientation="vertical",this.disabled=!1,this.error="",this._radios=[],this._handleRadioChange=t=>{t.target!==this&&(this.value=t.detail.value,this._syncRadios(),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}})),t.stopImmediatePropagation())}}connectedCallback(){super.connectedCallback(),this.addEventListener("wu-change",this._handleRadioChange)}firstUpdated(){const t=Array.from(this.querySelectorAll("wu-radio"));t.length&&(this._radios=t,this._syncRadios())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("wu-change",this._handleRadioChange)}_handleSlotChange(t){const r=t.target;this._radios=r.assignedElements({flatten:!0}).filter(a=>a.tagName==="WU-RADIO"),this._syncRadios()}_syncRadios(){for(const t of this._radios)t.name=this.name,t.checked=t.value===this.value,t.disabled=this.disabled||t.disabled}updated(t){(t.has("value")||t.has("disabled"))&&this._syncRadios()}render(){const t=`wu-radio-group-error-${this._uid}`;return n`
      <span class="legend" ?hidden=${!this.label}>${this.label}</span>
      <div
        part="group"
        class="group"
        role="radiogroup"
        aria-label=${w(this.label||void 0)}
        aria-disabled=${this.disabled?"true":"false"}
        aria-describedby=${w(this.error?t:void 0)}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
      <span id=${t} class="error" role="alert" ?hidden=${!this.error}>${this.error}</span>
    `}};ne.styles=Xc;I([l()],ne.prototype,"name",2);I([l()],ne.prototype,"value",2);I([l()],ne.prototype,"label",2);I([l({reflect:!0})],ne.prototype,"orientation",2);I([l({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);I([l()],ne.prototype,"error",2);I([p()],ne.prototype,"_radios",2);ne=I([c("wu-radio-group")],ne);const Zc=d`
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
`;var ed=Object.defineProperty,td=Object.getOwnPropertyDescriptor,H=(t,r,a,o)=>{for(var e=o>1?void 0:o?td(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ed(r,a,e),e};let O=class extends u{constructor(){super(...arguments),this._uid=Math.random().toString(36).slice(2,9),this.label="",this.value=0,this.min=0,this.max=100,this.step=1,this.showValue=!1,this.hint="",this.valueText="",this.ticks=[],this.disabled=!1,this._currentValue=this.value}_handleInput(t){const r=t.target;this._currentValue=Number(r.value),this.dispatchEvent(new CustomEvent("wu-input",{bubbles:!0,composed:!0,detail:{value:this._currentValue}}))}_handleChange(t){const r=t.target;this.value=Number(r.value),this._currentValue=this.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}willUpdate(t){t.has("value")&&(this._currentValue=this.value)}updated(t){var r;if(t.has("_currentValue")||t.has("value")){const a=(r=this.shadowRoot)==null?void 0:r.querySelector('input[type="range"]');a&&(a.value=String(this._currentValue))}}render(){const t=(this._currentValue-this.min)/(this.max-this.min)*100,r=`wu-slider-label-${this._uid}`,a=`wu-slider-hint-${this._uid}`,o=this.valueText||String(this._currentValue);return n`
      <div class="label-row" ?hidden=${!this.label&&!this.showValue}>
        <label id=${r} ?hidden=${!this.label}>${this.label}</label>
        <span class="value" ?hidden=${!this.showValue} aria-hidden="true">${this._currentValue}</span>
      </div>
      <div class="track-container">
        <input
          part="base"
          type="range"
          min=${this.min}
          max=${this.max}
          step=${this.step}
          ?disabled=${this.disabled}
          aria-labelledby=${w(this.label?r:void 0)}
          aria-label=${w(this.label?void 0:this.label||void 0)}
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this._currentValue}
          aria-valuetext=${o}
          aria-describedby=${w(this.hint?a:void 0)}
          style="--_pct:${t}%"
          @input=${this._handleInput}
          @change=${this._handleChange}
        />
      </div>
      <div class="tick-marks" aria-hidden="true" ?hidden=${!this.ticks.length}>
        ${this.ticks.map(e=>n`<span class="tick">${e}</span>`)}
      </div>
      <span id=${a} class="hint" ?hidden=${!this.hint}>${this.hint}</span>
    `}};O.styles=Zc;H([l()],O.prototype,"label",2);H([l({type:Number})],O.prototype,"value",2);H([l({type:Number})],O.prototype,"min",2);H([l({type:Number})],O.prototype,"max",2);H([l({type:Number})],O.prototype,"step",2);H([l({type:Boolean,attribute:"show-value"})],O.prototype,"showValue",2);H([l()],O.prototype,"hint",2);H([l({attribute:"value-text"})],O.prototype,"valueText",2);H([l({type:Array})],O.prototype,"ticks",2);H([l({type:Boolean,reflect:!0})],O.prototype,"disabled",2);H([p()],O.prototype,"_currentValue",2);O=H([c("wu-slider")],O);const rd=d`
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
`;var od=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,K=(t,r,a,o)=>{for(var e=o>1?void 0:o?ad(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&od(r,a,e),e};function sd(t,r,a){r/=100,a/=100;const o=r*Math.min(a,1-a),e=s=>{const i=(s+t/30)%12,h=a-o*Math.max(-1,Math.min(i-3,9-i,1));return Math.round(255*h).toString(16).padStart(2,"0")};return`#${e(0)}${e(8)}${e(4)}`}let j=class extends u{constructor(){super(...arguments),this.label="",this.value="#3b82f6",this.error="",this.disabled=!1,this._hue=220,this._sat=75,this._light=55,this._hexInput="#3b82f6",this._cursorX=180,this._cursorY=40}willUpdate(t){t.has("value")&&(this._hexInput=this.value)}connectedCallback(){super.connectedCallback(),this._hexInput=this.value}firstUpdated(){this._drawCanvas()}_drawCanvas(){const t=this._canvas;if(!t)return;const r=t.getContext("2d");if(!r)return;const a=t.width,o=t.height,e=`hsl(${this._hue}, 100%, 50%)`,s=r.createLinearGradient(0,0,a,0);s.addColorStop(0,"#fff"),s.addColorStop(1,e),r.fillStyle=s,r.fillRect(0,0,a,o);const i=r.createLinearGradient(0,0,0,o);i.addColorStop(0,"transparent"),i.addColorStop(1,"#000"),r.fillStyle=i,r.fillRect(0,0,a,o)}_onCanvasClick(t){const r=this._canvas,a=r.getBoundingClientRect(),o=Math.round((t.clientX-a.left)/a.width*r.width),e=Math.round((t.clientY-a.top)/a.height*r.height);this._cursorX=t.clientX-a.left,this._cursorY=t.clientY-a.top;const s=r.getContext("2d");if(!s)return;const i=s.getImageData(o,e,1,1).data;this._hexInput=`#${i[0].toString(16).padStart(2,"0")}${i[1].toString(16).padStart(2,"0")}${i[2].toString(16).padStart(2,"0")}`,this.value=this._hexInput,this._dispatchChange()}_onHueChange(t){this._hue=Number(t.target.value),this.value=sd(this._hue,this._sat,this._light),this._hexInput=this.value,this.requestUpdate(),this.updateComplete.then(()=>this._drawCanvas()),this._dispatchChange()}_onHexInput(t){const r=t.target.value;this._hexInput=r,/^#[0-9a-fA-F]{6}$/.test(r)&&(this.value=r,this._dispatchChange())}_dispatchChange(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}updated(){var t,r;const a=(t=this.shadowRoot)==null?void 0:t.querySelector(".hue-slider");a&&a.value!==String(this._hue)&&(a.value=String(this._hue));const o=(r=this.shadowRoot)==null?void 0:r.querySelector(".hex-input");o&&o.value!==this._hexInput&&(o.value=this._hexInput)}render(){return n`
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
    `}};j.styles=rd;K([l()],j.prototype,"label",2);K([l()],j.prototype,"value",2);K([l()],j.prototype,"error",2);K([l({type:Boolean,reflect:!0})],j.prototype,"disabled",2);K([p()],j.prototype,"_hue",2);K([p()],j.prototype,"_sat",2);K([p()],j.prototype,"_light",2);K([p()],j.prototype,"_hexInput",2);K([p()],j.prototype,"_cursorX",2);K([p()],j.prototype,"_cursorY",2);K([Pe("canvas")],j.prototype,"_canvas",2);j=K([c("wu-color-picker")],j);const id=d`
  :host { display: inline-block; }
  .rating { display: flex; gap: 2px; align-items: center; }
  .star { background: none; border: none; cursor: pointer; padding: 2px; font-size: 20px; color: var(--wu-color-border-strong); transition: color var(--wu-duration-fast); line-height: 1; }
  .star.filled { color: var(--wu-color-warning); }
  .star:hover, .star.hovered { color: var(--wu-color-warning); }
  :host([readonly]) .star { cursor: default; pointer-events: none; }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
  .label { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-left: var(--wu-space-2); }
`;var nd=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,Dt=(t,r,a,o)=>{for(var e=o>1?void 0:o?ld(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&nd(r,a,e),e};let ke=class extends u{constructor(){super(...arguments),this.value=0,this.max=5,this.readonly=!1,this.disabled=!1,this.showLabel=!1,this._hovered=0}_setHover(t){this.readonly||(this._hovered=t)}_clearHover(){this._hovered=0}_select(t){this.readonly||this.disabled||(this.value=t,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:t}})))}render(){return n`
      <div class="rating" role="radiogroup" aria-label="Rating">
        ${Array.from({length:this.max},(t,r)=>r+1).map(t=>n`
          <button
            class="star ${t<=(this._hovered||this.value)?"filled":""} ${this._hovered&&t<=this._hovered?"hovered":""}"
            @click=${()=>this._select(t)}
            @mouseenter=${()=>this._setHover(t)}
            @mouseleave=${this._clearHover}
            aria-label="Rate ${t} out of ${this.max}"
            aria-pressed=${t===this.value}
          >★</button>
        `)}
        ${this.showLabel?n`<span class="label">${this.value}/${this.max}</span>`:""}
      </div>`}};ke.styles=id;Dt([l({type:Number})],ke.prototype,"value",2);Dt([l({type:Number})],ke.prototype,"max",2);Dt([l({type:Boolean,reflect:!0})],ke.prototype,"readonly",2);Dt([l({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);Dt([l({type:Boolean})],ke.prototype,"showLabel",2);Dt([p()],ke.prototype,"_hovered",2);ke=Dt([c("wu-rating")],ke);const ud=d`
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
`;var cd=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,Ee=(t,r,a,o)=>{for(var e=o>1?void 0:o?dd(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&cd(r,a,e),e};let X=class extends u{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.labelPosition="end",this.size="md",this.value="on",this.required=!1}_handleChange(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.checked?this.value:""}}))}render(){const t=`wu-switch-${this.name??Math.random().toString(36).slice(2)}`,r=this.label?n`<span part="label" class="label-text">${this.label}</span>`:n`<slot></slot>`;return n`
      <label part="base" for=${t}>
        ${this.labelPosition==="start"?r:""}
        <input
          type="checkbox"
          id=${t}
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
        ${this.labelPosition==="end"?r:""}
      </label>
    `}};X.styles=ud;Ee([l({type:Boolean,reflect:!0})],X.prototype,"checked",2);Ee([l({type:Boolean,reflect:!0})],X.prototype,"disabled",2);Ee([l()],X.prototype,"label",2);Ee([l({attribute:"label-position"})],X.prototype,"labelPosition",2);Ee([l({reflect:!0})],X.prototype,"size",2);Ee([l()],X.prototype,"name",2);Ee([l()],X.prototype,"value",2);Ee([l({type:Boolean})],X.prototype,"required",2);X=Ee([c("wu-switch")],X);const pd=d`
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
`;var hd=Object.defineProperty,vd=Object.getOwnPropertyDescriptor,Qe=(t,r,a,o)=>{for(var e=o>1?void 0:o?vd(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&hd(r,a,e),e};let le=class extends u{constructor(){super(...arguments),this.length=6,this.label="",this.value="",this.mask=!1,this.error="",this.disabled=!1,this._digits=[]}willUpdate(t){if(t.has("length")||t.has("value")){const r=(this.value||"").split("").slice(0,this.length);this._digits=Array.from({length:this.length},(a,o)=>r[o]??"")}}_handleInput(t,r){const a=t.target.value.replace(/\D/g,"").slice(-1),o=[...this._digits];o[r]=a,this._digits=o,this.value=o.join(""),a&&r<this.length-1&&this._focusAt(r+1);const e=this.value.length===this.length;this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value,complete:e}})),e&&this.dispatchEvent(new CustomEvent("wu-complete",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleKeydown(t,r){t.key==="Backspace"&&!this._digits[r]&&r>0&&this._focusAt(r-1),t.key==="ArrowLeft"&&r>0&&this._focusAt(r-1),t.key==="ArrowRight"&&r<this.length-1&&this._focusAt(r+1)}_handlePaste(t){var r,a;t.preventDefault();const o=((a=(r=t.clipboardData)==null?void 0:r.getData("text"))==null?void 0:a.replace(/\D/g,"").slice(0,this.length))??"";if(!o)return;this._digits=Array.from({length:this.length},(s,i)=>o[i]??""),this.value=this._digits.join("");const e=this.value.length===this.length;e&&this._focusAt(this.length-1),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value,complete:e}})),e&&this.dispatchEvent(new CustomEvent("wu-complete",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_focusAt(t){var r,a;const o=this.shadowRoot.querySelectorAll("input");(r=o[t])==null||r.focus(),(a=o[t])==null||a.select()}updated(){var t;const r=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("input");r==null||r.forEach((a,o)=>{const e=this._digits[o]??"";a.value!==e&&(a.value=e)})}render(){return n`
      <label ?hidden=${!this.label}>${this.label}</label>
      <div class="pin-row" role="group" aria-label=${this.label||"PIN input"}>
        ${Array.from({length:this.length},(t,r)=>n`
          <input
            type=${this.mask?"password":"tel"}
            inputmode="numeric"
            maxlength="1"
            pattern="[0-9]"
            ?disabled=${this.disabled}
            class=${this._digits[r]?"filled":""}
            aria-label="Digit ${r+1} of ${this.length}"
            @input=${a=>this._handleInput(a,r)}
            @keydown=${a=>this._handleKeydown(a,r)}
            @paste=${this._handlePaste}
          />
        `)}
      </div>
      <span class="error-msg" role="alert" ?hidden=${!this.error}>${this.error}</span>
    `}};le.styles=pd;Qe([l({type:Number})],le.prototype,"length",2);Qe([l()],le.prototype,"label",2);Qe([l()],le.prototype,"value",2);Qe([l({type:Boolean})],le.prototype,"mask",2);Qe([l()],le.prototype,"error",2);Qe([l({type:Boolean,reflect:!0})],le.prototype,"disabled",2);Qe([p()],le.prototype,"_digits",2);le=Qe([c("wu-pin-input")],le);const wd=d`
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
`;var bd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,N=(t,r,a,o)=>{for(var e=o>1?void 0:o?gd(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&bd(r,a,e),e};let $=class extends u{constructor(){super(...arguments),this._uid=Math.random().toString(36).slice(2,9),this.label="",this.placeholder="Search…",this.value="",this.options=[],this.loading=!1,this.disabled=!1,this.error="",this.minChars=0,this._open=!1,this._query="",this._highlighted=-1,this._inputValue="",this._handleOutsideClick=t=>{this.contains(t.target)||(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}get _filtered(){if(this._query.length<this.minChars)return[];const t=this._query.toLowerCase();return this.options.filter(r=>!t||r.label.toLowerCase().includes(t)||r.value.toLowerCase().includes(t))}_handleInput(t){const r=t.target;this._query=r.value,this._inputValue=r.value,this._open=!0,this._highlighted=-1,this.dispatchEvent(new CustomEvent("wu-input",{bubbles:!0,composed:!0,detail:{query:this._query}}))}_handleKeydown(t){const r=this._filtered;t.key==="ArrowDown"?(t.preventDefault(),this._highlighted=Math.min(this._highlighted+1,r.length-1),this._open=!0):t.key==="ArrowUp"?(t.preventDefault(),this._highlighted=Math.max(this._highlighted-1,-1)):t.key==="Enter"&&this._highlighted>=0?(t.preventDefault(),this._select(r[this._highlighted])):t.key==="Escape"&&(this._open=!1)}_select(t){t.disabled||(this.value=t.value,this._inputValue=t.label,this._query="",this._open=!1,this._highlighted=-1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:t.value,label:t.label}})))}updated(){var t;const r=(t=this.shadowRoot)==null?void 0:t.querySelector('input[part="base"]');r&&r.value!==this._inputValue&&(r.value=this._inputValue)}render(){var t;const r=this._filtered,a=`wu-combobox-${this._uid}`,o=`wu-combobox-list-${this._uid}`,e=`wu-combobox-error-${this._uid}`,s=this._highlighted>=0?`option-${(t=r[this._highlighted])==null?void 0:t.value}-${this._uid}`:void 0;return n`
      <label for=${a} ?hidden=${!this.label}>${this.label}</label>
      <div class="wrapper">
        <input
          part="base"
          id=${a}
          type="text"
          role="combobox"
          autocomplete="off"
          aria-expanded=${this._open?"true":"false"}
          aria-haspopup="listbox"
          aria-controls=${o}
          aria-activedescendant=${w(s)}
          aria-describedby=${w(this.error?e:void 0)}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          @focus=${()=>{this._inputValue.length>=this.minChars&&(this._open=!0)}}
          @keydown=${this._handleKeydown}
        />
        <span class="loading-indicator" aria-hidden="true" ?hidden=${!this.loading}></span>
        <span class="chevron" aria-hidden="true" ?hidden=${this.loading}>▼</span>
        <ul
          id=${o}
          part="dropdown"
          class="dropdown"
          role="listbox"
          ?hidden=${!this._open}
        >
          ${r.length===0&&this._query&&!this.loading?n`<li class="empty" role="option" aria-disabled="true">No options found</li>`:r.map((i,h)=>n`
                  <li
                    id="option-${i.value}-${this._uid}"
                    class="option ${h===this._highlighted?"highlighted":""}"
                    role="option"
                    aria-selected=${i.value===this.value?"true":"false"}
                    aria-disabled=${i.disabled?"true":"false"}
                    @click=${()=>this._select(i)}
                  >${i.label}</li>
                `)}
        </ul>
      </div>
      <span id=${e} class="error-msg" role="alert" ?hidden=${!this.error}>${this.error}</span>
    `}};$.styles=wd;N([l()],$.prototype,"label",2);N([l()],$.prototype,"placeholder",2);N([l()],$.prototype,"value",2);N([l({type:Array})],$.prototype,"options",2);N([l({type:Boolean})],$.prototype,"loading",2);N([l({type:Boolean,reflect:!0})],$.prototype,"disabled",2);N([l()],$.prototype,"error",2);N([l({type:Number,attribute:"min-chars"})],$.prototype,"minChars",2);N([p()],$.prototype,"_open",2);N([p()],$.prototype,"_query",2);N([p()],$.prototype,"_highlighted",2);N([p()],$.prototype,"_inputValue",2);$=N([c("wu-combobox")],$);const fd=d`
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
`;var md=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,Se=(t,r,a,o)=>{for(var e=o>1?void 0:o?yd(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&md(r,a,e),e};let G=class extends u{constructor(){super(...arguments),this.label="",this.values=[],this.placeholder="Add a tag…",this.delimiter=",",this.max=1/0,this.error="",this.disabled=!1,this._inputValue=""}_emit(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{values:[...this.values]}}))}_addTag(t){const r=t.trim();!r||this.values.includes(r)||this.values.length>=this.max||(this.values=[...this.values,r],this._inputValue="",this.dispatchEvent(new CustomEvent("wu-add",{bubbles:!0,composed:!0,detail:{value:r}})),this._emit())}_removeTag(t){this.values=this.values.filter(r=>r!==t),this.dispatchEvent(new CustomEvent("wu-remove",{bubbles:!0,composed:!0,detail:{value:t}})),this._emit()}_onKeyDown(t){const r=t.target;t.key==="Enter"||t.key===this.delimiter?(t.preventDefault(),this._addTag(r.value)):t.key==="Backspace"&&!r.value&&this.values.length&&this._removeTag(this.values[this.values.length-1])}_onInput(t){const r=t.target.value;r.endsWith(this.delimiter)?this._addTag(r.slice(0,-1)):this._inputValue=r}_focusInput(){var t,r;(r=(t=this.shadowRoot)==null?void 0:t.querySelector(".tag-input"))==null||r.focus()}updated(){var t;const r=(t=this.shadowRoot)==null?void 0:t.querySelector(".tag-input");r&&r.value!==this._inputValue&&(r.value=this._inputValue)}render(){return n`
      <label ?hidden=${!this.label}>${this.label}</label>
      <div class="tag-container" @click=${this._focusInput}>
        ${this.values.map(t=>n`
          <span class="tag">
            ${t}
            <button class="tag-remove" @click=${r=>{r.stopPropagation(),this._removeTag(t)}} aria-label="Remove ${t}">✕</button>
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
    `}};G.styles=fd;Se([l()],G.prototype,"label",2);Se([l({type:Array})],G.prototype,"values",2);Se([l()],G.prototype,"placeholder",2);Se([l()],G.prototype,"delimiter",2);Se([l({type:Number})],G.prototype,"max",2);Se([l()],G.prototype,"error",2);Se([l({type:Boolean,reflect:!0})],G.prototype,"disabled",2);Se([p()],G.prototype,"_inputValue",2);G=Se([c("wu-tag-input")],G);const xd=d`
  :host { display: inline; }
  .num { font-variant-numeric: tabular-nums; }
`;var kd=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,Cr=(t,r,a,o)=>{for(var e=o>1?void 0:o?$d(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&kd(r,a,e),e};let Ie=class extends u{constructor(){super(...arguments),this.value=0,this.locale=navigator.language||"en-US",this.format="decimal",this.currency="USD",this.decimals=2}_format(){const t={maximumFractionDigits:this.decimals};this.format==="currency"?(t.style="currency",t.currency=this.currency):this.format==="percent"?t.style="percent":this.format==="compact"&&(t.notation="compact");try{return new Intl.NumberFormat(this.locale,t).format(this.value)}catch{return String(this.value)}}render(){return n`<span class="num" aria-label="${this._format()}">${this._format()}</span>`}};Ie.styles=xd;Cr([l({type:Number})],Ie.prototype,"value",2);Cr([l()],Ie.prototype,"locale",2);Cr([l({reflect:!0})],Ie.prototype,"format",2);Cr([l()],Ie.prototype,"currency",2);Cr([l({type:Number})],Ie.prototype,"decimals",2);Ie=Cr([c("wu-number")],Ie);const _d=d`
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
`;var zd=Object.defineProperty,Od=Object.getOwnPropertyDescriptor,we=(t,r,a,o)=>{for(var e=o>1?void 0:o?Od(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&zd(r,a,e),e};let T=class extends u{constructor(){super(...arguments),this.label="",this.placeholder="Select…",this.values=[],this.options=[],this.showSelectAll=!1,this.disabled=!1,this.error="",this._open=!1,this._search="",this._handleOutsideClick=t=>{this.contains(t.target)||(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}get _filtered(){const t=this._search.toLowerCase();return this.options.filter(r=>!t||r.label.toLowerCase().includes(t))}_toggle(t){const r=this.values.includes(t)?this.values.filter(a=>a!==t):[...this.values,t];this.values=r,this._emit()}_remove(t){this.values=this.values.filter(r=>r!==t),this._emit()}_selectAll(){const t=this.options.filter(a=>!a.disabled).map(a=>a.value),r=t.every(a=>this.values.includes(a));this.values=r?[]:t,this._emit()}_emit(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{values:[...this.values]}}))}_handleSearchInput(t){this._search=t.target.value}updated(){var t;const r=(t=this.shadowRoot)==null?void 0:t.querySelector(".search-input");r&&(r.value=this._search)}render(){const t=this.values.map(a=>this.options.find(o=>o.value===a)).filter(Boolean),r=this.options.every(a=>a.disabled||this.values.includes(a.value));return n`
      <label ?hidden=${!this.label}>${this.label}</label>
      <div class="wrapper">
        <div
          class="chips-input"
          part="chips-input"
          @click=${()=>{this._open=!0}}
        >
          ${t.map(a=>n`
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
            placeholder=${t.length===0?this.placeholder:""}
            aria-label=${this.label||"Select options"}
            @input=${this._handleSearchInput}
            @focus=${()=>{this._open=!0}}
          />
        </div>
        <ul class="dropdown" part="dropdown" role="listbox" aria-multiselectable="true" ?hidden=${!this._open}>
          ${this.showSelectAll?n`
              <li class="select-all" role="option" @click=${this._selectAll}>
                <input type="checkbox" .checked=${r} readonly aria-hidden="true" />
                Select all
              </li>
            `:""}
          ${this._filtered.map(a=>n`
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
    `}};T.styles=_d;we([l()],T.prototype,"label",2);we([l()],T.prototype,"placeholder",2);we([l({type:Array})],T.prototype,"values",2);we([l({type:Array})],T.prototype,"options",2);we([l({type:Boolean,attribute:"show-select-all"})],T.prototype,"showSelectAll",2);we([l({type:Boolean,reflect:!0})],T.prototype,"disabled",2);we([l()],T.prototype,"error",2);we([p()],T.prototype,"_open",2);we([p()],T.prototype,"_search",2);T=we([c("wu-multi-select")],T);const jd=d`
  :host { display: inline-block; }
  .stat { padding: var(--wu-space-4); background: var(--wu-color-surface-raised); border-radius: var(--wu-radius-lg); border: 1px solid var(--wu-color-border); }
  .label { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); color: var(--wu-color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--wu-space-1); }
  .value { font-family: var(--wu-font-sans); font-size: var(--wu-text-2xl); font-weight: var(--wu-font-bold); color: var(--wu-color-text); line-height: 1; }
  .delta { display: inline-flex; align-items: center; gap: 4px; font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); margin-top: var(--wu-space-1); padding: 2px 6px; border-radius: var(--wu-radius-full); }
  .delta.up { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  .delta.down { background: var(--wu-color-danger-subtle); color: var(--wu-color-danger); }
  .delta.neutral { background: var(--wu-color-surface); color: var(--wu-color-text-secondary); }
  .description { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: var(--wu-space-1); }
`;var Pd=Object.defineProperty,Cd=Object.getOwnPropertyDescriptor,Dr=(t,r,a,o)=>{for(var e=o>1?void 0:o?Cd(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Pd(r,a,e),e};let Ne=class extends u{constructor(){super(...arguments),this.label="",this.value="",this.delta="",this.trend="neutral",this.description=""}render(){const t=this.trend==="up"?"↑":this.trend==="down"?"↓":"→";return n`
      <div class="stat">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="value">${this.value}</div>
        ${this.delta?n`<div class="delta ${this.trend}">${t} ${this.delta}</div>`:""}
        ${this.description?n`<div class="description">${this.description}</div>`:""}
      </div>`}};Ne.styles=jd;Dr([l()],Ne.prototype,"label",2);Dr([l()],Ne.prototype,"value",2);Dr([l()],Ne.prototype,"delta",2);Dr([l({reflect:!0})],Ne.prototype,"trend",2);Dr([l()],Ne.prototype,"description",2);Ne=Dr([c("wu-stat")],Ne);const Dd=d`
  :host { display: block; }
  .timeline { display: flex; flex-direction: column; }
  :host([orientation="horizontal"]) .timeline { flex-direction: row; }
`,Ed=d`
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
`;var Sd=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,Ma=(t,r,a,o)=>{for(var e=o>1?void 0:o?Md(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Sd(r,a,e),e};let di=class extends u{render(){return n`<div class="timeline" role="list"><slot></slot></div>`}};di.styles=Dd;di=Ma([c("wu-timeline")],di);let Wt=class extends u{constructor(){super(...arguments),this.title="",this.meta="",this.status="default"}render(){return n`
      <div class="connector"><div class="dot"></div><div class="line"></div></div>
      <div class="body" role="listitem">
        ${this.title?n`<div class="title">${this.title}</div>`:""}
        ${this.meta?n`<div class="meta">${this.meta}</div>`:""}
        <div class="content"><slot></slot></div>
      </div>`}};Wt.styles=Ed;Ma([l()],Wt.prototype,"title",2);Ma([l()],Wt.prototype,"meta",2);Ma([l({reflect:!0})],Wt.prototype,"status",2);Wt=Ma([c("wu-timeline-item")],Wt);const Bd=d`
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
`;var Ad=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,Cs=(t,r,a,o)=>{for(var e=o>1?void 0:o?Id(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ad(r,a,e),e};let Xt=class extends u{constructor(){super(...arguments),this.variant="default",this.dismissible=!1,this.disabled=!1}render(){return n`
      <span class="tag">
        <slot></slot>
        ${this.dismissible?n`<button class="dismiss" @click=${()=>this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0}))} aria-label="Remove tag">✕</button>`:""}
      </span>`}};Xt.styles=Bd;Cs([l({reflect:!0})],Xt.prototype,"variant",2);Cs([l({type:Boolean})],Xt.prototype,"dismissible",2);Cs([l({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);Xt=Cs([c("wu-tag")],Xt);const Nd=d`
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
`;var Ld=(t,r,a,o)=>{for(var e=r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=i(e)||e);return e};let pi=class extends u{render(){return n`<kbd><slot></slot></kbd>`}};pi.styles=Nd;pi=Ld([c("wu-kbd")],pi);const Td=d`
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
`;var qd=(t,r,a,o)=>{for(var e=r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=i(e)||e);return e};let hi=class extends u{render(){return n`<code><slot></slot></code>`}};hi.styles=Td;hi=qd([c("wu-code")],hi);const Rd=d`
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
`;var Fd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,Er=(t,r,a,o)=>{for(var e=o>1?void 0:o?Hd(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Fd(r,a,e),e};let Le=class extends u{constructor(){super(...arguments),this.value="",this.feedbackDuration=1500,this.label="Copy",this.successLabel="Copied!",this._copied=!1}async _handleClick(){if(this.value)try{await navigator.clipboard.writeText(this.value),this._copied=!0,this.dispatchEvent(new CustomEvent("wu-copy",{bubbles:!0,composed:!0,detail:{value:this.value}})),setTimeout(()=>{this._copied=!1},this.feedbackDuration)}catch{this.dispatchEvent(new CustomEvent("wu-error",{bubbles:!0,composed:!0}))}}render(){return n`
      <button
        part="base"
        class=${this._copied?"copied":""}
        @click=${this._handleClick}
        aria-label=${this._copied?this.successLabel:this.label}
      >
        <slot>${this._copied?this.successLabel:this.label}</slot>
      </button>
    `}};Le.styles=Rd;Er([l()],Le.prototype,"value",2);Er([l({type:Number,attribute:"feedback-duration"})],Le.prototype,"feedbackDuration",2);Er([l()],Le.prototype,"label",2);Er([l({attribute:"success-label"})],Le.prototype,"successLabel",2);Er([p()],Le.prototype,"_copied",2);Le=Er([c("wu-copy-button")],Le);const Kd=d`
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
`;var Vd=Object.defineProperty,Ud=Object.getOwnPropertyDescriptor,Ze=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ud(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Vd(r,a,e),e};let ue=class extends u{constructor(){super(...arguments),this.index=0,this.noControls=!1,this.noDots=!1,this.autoplay=!1,this.autoplayInterval=3e3,this._count=0,this._autoTimer=0}firstUpdated(){this._updateCount()}_updateCount(){this._count=this.querySelectorAll("*").length||0;const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;this.autoplay&&this._count>0&&!t&&(this._autoTimer=window.setInterval(()=>this._next(),this.autoplayInterval))}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._autoTimer)}_goto(t){const r=Math.max(0,Math.min(t,this._count-1));this.index=r,this._track&&(this._track.style.transform=`translateX(-${r*100}%)`),this.dispatchEvent(new CustomEvent("wu-slide-change",{bubbles:!0,composed:!0,detail:{index:r}}))}_prev(){this._goto(this.index-1)}_next(){this._goto(this.index===this._count-1?0:this.index+1)}_onSlotChange(t){const r=t.target.assignedNodes({flatten:!0}).filter(a=>a.nodeType===1);this._count=r.length}render(){return n`
      <div class="carousel" role="region" aria-label="Carousel" aria-roledescription="carousel">
        <div
          class="track"
          aria-live=${this.autoplay?"off":"polite"}
          aria-atomic="false"
        >
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
        ${this.noControls?v:n`
          <button class="nav prev" @click=${this._prev} aria-label="Previous slide, slide ${this.index===0?this._count:this.index} of ${this._count}">‹</button>
          <button class="nav next" @click=${this._next} aria-label="Next slide, slide ${this.index===this._count-1?1:this.index+2} of ${this._count}">›</button>
        `}
      </div>
      ${this.noDots?v:n`
        <div class="dots" role="tablist" aria-label="Slides">
          ${Array.from({length:this._count},(t,r)=>n`
            <button
              class="dot ${r===this.index?"active":""}"
              @click=${()=>this._goto(r)}
              role="tab"
              aria-selected=${r===this.index}
              aria-label="Slide ${r+1} of ${this._count}"
            ></button>
          `)}
        </div>
      `}`}};ue.styles=Kd;Ze([l({type:Number})],ue.prototype,"index",2);Ze([l({type:Boolean,attribute:"no-controls",reflect:!0})],ue.prototype,"noControls",2);Ze([l({type:Boolean,attribute:"no-dots",reflect:!0})],ue.prototype,"noDots",2);Ze([l({type:Boolean})],ue.prototype,"autoplay",2);Ze([l({type:Number,attribute:"autoplay-interval"})],ue.prototype,"autoplayInterval",2);Ze([p()],ue.prototype,"_count",2);Ze([Pe(".track")],ue.prototype,"_track",2);ue=Ze([c("wu-carousel")],ue);const Yd=d`
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
`;var Wd=Object.defineProperty,Xd=Object.getOwnPropertyDescriptor,_i=(t,r,a,o)=>{for(var e=o>1?void 0:o?Xd(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Wd(r,a,e),e};let es=class extends u{constructor(){super(...arguments),this.type="unordered"}render(){return this.type==="ordered"?n`<ol part="base"><slot></slot></ol>`:n`<ul part="base"><slot></slot></ul>`}};es.styles=Yd;_i([l({reflect:!0})],es.prototype,"type",2);es=_i([c("wu-list")],es);let rl=class extends u{render(){return n`<li part="item"><slot></slot></li>`}};rl=_i([c("wu-list-item")],rl);const Gd=d`
  :host { display: block; }
  dl { display: grid; grid-template-columns: auto 1fr; gap: var(--wu-space-1) var(--wu-space-4); margin: 0; }
  :host([layout="stacked"]) dl { grid-template-columns: 1fr; }
`,Jd=d`
  :host { display: contents; }
  dt { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text-secondary); padding: var(--wu-space-1) 0; }
`,Qd=d`
  :host { display: contents; }
  dd { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); margin: 0; padding: var(--wu-space-1) 0; }
`;var Zd=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,Ds=(t,r,a,o)=>{for(var e=o>1?void 0:o?ep(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Zd(r,a,e),e};let ts=class extends u{constructor(){super(...arguments),this.layout="side-by-side"}render(){return n`<dl><slot></slot></dl>`}};ts.styles=Gd;Ds([l({reflect:!0})],ts.prototype,"layout",2);ts=Ds([c("wu-dl")],ts);let vi=class extends u{render(){return n`<dt><slot></slot></dt>`}};vi.styles=Jd;vi=Ds([c("wu-dt")],vi);let wi=class extends u{render(){return n`<dd><slot></slot></dd>`}};wi.styles=Qd;wi=Ds([c("wu-dd")],wi);const tp=d`
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
`;var rp=Object.defineProperty,op=Object.getOwnPropertyDescriptor,zi=(t,r,a,o)=>{for(var e=o>1?void 0:o?op(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&rp(r,a,e),e};const ap={info:"ℹ",success:"✓",warning:"⚠",danger:"✕"};let to=class extends u{constructor(){super(...arguments),this.variant="info"}render(){return n`
      <div class="callout" role="note">
        <span class="icon" aria-hidden="true">${ap[this.variant]}</span>
        <div class="body">
          ${this.heading?n`<div class="title">${this.heading}</div>`:""}
          <slot></slot>
        </div>
      </div>
    `}};to.styles=tp;zi([l({reflect:!0})],to.prototype,"variant",2);zi([l()],to.prototype,"heading",2);to=zi([c("wu-callout")],to);const sp=d`
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
`;var ip=Object.defineProperty,np=Object.getOwnPropertyDescriptor,Et=(t,r,a,o)=>{for(var e=o>1?void 0:o?np(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ip(r,a,e),e};let $e=class extends u{constructor(){super(...arguments),this.value=0,this.max=100,this.min=0,this.unit="",this.variant="default"}get _pct(){const t=this.max-this.min;return t<=0?0:Math.min(100,Math.max(0,(this.value-this.min)/t*100))}render(){const t=this._pct;return n`
      <div class="wrapper">
        ${this.label||this.unit?n`
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
          <div class="fill" style="width:${t}%"></div>
        </div>
      </div>
    `}};$e.styles=sp;Et([l({type:Number})],$e.prototype,"value",2);Et([l({type:Number})],$e.prototype,"max",2);Et([l({type:Number})],$e.prototype,"min",2);Et([l()],$e.prototype,"label",2);Et([l()],$e.prototype,"unit",2);Et([l({reflect:!0})],$e.prototype,"variant",2);$e=Et([c("wu-meter")],$e);const lp=d`
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
`;var up=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,Es=(t,r,a,o)=>{for(var e=o>1?void 0:o?cp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&up(r,a,e),e};let Gt=class extends u{constructor(){super(...arguments),this.open=!1,this.label="",this.disabled=!1}_toggle(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent(this.open?"wu-open":"wu-close",{bubbles:!0,composed:!0})))}render(){return n`
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
    `}};Gt.styles=lp;Es([l({type:Boolean,reflect:!0})],Gt.prototype,"open",2);Es([l()],Gt.prototype,"label",2);Es([l({type:Boolean,reflect:!0})],Gt.prototype,"disabled",2);Gt=Es([c("wu-collapse")],Gt);const dp=d`
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
`;var pp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,Ss=(t,r,a,o)=>{for(var e=o>1?void 0:o?hp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&pp(r,a,e),e};let Jt=class extends u{constructor(){super(...arguments),this.open=!1,this.label="",this.placement="right",this._onKeydown=t=>{t.key==="Escape"&&this.open&&this._close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown)}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}))}render(){return n`
      <div class="backdrop" @click=${this._close}></div>
      <div class="drawer" role="dialog" aria-modal="true" aria-label=${this.label||"Drawer"}>
        <div class="drawer-header">
          <span class="drawer-title">${this.label}</span>
          <button class="close-btn" @click=${this._close} aria-label="Close drawer">✕</button>
        </div>
        <div class="drawer-body"><slot></slot></div>
        <div class="drawer-footer"><slot name="footer"></slot></div>
      </div>`}};Jt.styles=dp;Ss([l({type:Boolean,reflect:!0})],Jt.prototype,"open",2);Ss([l()],Jt.prototype,"label",2);Ss([l({reflect:!0})],Jt.prototype,"placement",2);Jt=Ss([c("wu-drawer")],Jt);const vp=d`
  :host { display: block; position: fixed; z-index: 400; background: var(--wu-color-surface-overlay); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-lg); box-shadow: var(--wu-shadow-lg); padding: var(--wu-space-1); min-width: 180px; }
  :host(:not([open])) { display: none; }
  .item { display: flex; align-items: center; gap: var(--wu-space-2); width: 100%; padding: var(--wu-space-2) var(--wu-space-3); border: none; background: none; border-radius: var(--wu-radius-md); cursor: pointer; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); text-align: left; }
  .item:hover { background: var(--wu-color-surface); }
  .item.danger { color: var(--wu-color-danger); }
  .item:disabled { opacity: 0.5; cursor: not-allowed; }
  .separator { height: 1px; background: var(--wu-color-border); margin: var(--wu-space-1) 0; }
`;var wp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,Ba=(t,r,a,o)=>{for(var e=o>1?void 0:o?bp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&wp(r,a,e),e};let nt=class extends u{constructor(){super(...arguments),this.open=!1,this.x=0,this.y=0,this.items=[],this._close=()=>{this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0})))},this._onKey=t=>{t.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._close),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._close),document.removeEventListener("keydown",this._onKey)}_select(t){t.disabled||(this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{value:t.value}})),this._close())}render(){return n`
      <div role="menu" style="left:${this.x}px;top:${this.y}px" @click=${t=>t.stopPropagation()}>
        ${this.items.map(t=>t.separator?n`<div class="separator" role="separator"></div>`:n`<button class="item ${t.danger?"danger":""}" role="menuitem" ?disabled=${t.disabled} @click=${()=>this._select(t)}>
              ${t.icon?n`<span>${t.icon}</span>`:""} ${t.label}
            </button>`)}
      </div>`}};nt.styles=vp;Ba([l({type:Boolean,reflect:!0})],nt.prototype,"open",2);Ba([l({type:Number})],nt.prototype,"x",2);Ba([l({type:Number})],nt.prototype,"y",2);Ba([l({type:Array})],nt.prototype,"items",2);nt=Ba([c("wu-context-menu")],nt);const gp=d`
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
`;var fp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,Sr=(t,r,a,o)=>{for(var e=o>1?void 0:o?mp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&fp(r,a,e),e};let Te=class extends u{constructor(){super(...arguments),this.open=!1,this.placement="left",this.items=[],this.searchable=!1,this._query="",this._outsideClick=t=>{!this.contains(t.target)&&!this.shadowRoot.contains(t.target)&&(this.open=!1)},this._onKey=t=>{t.key==="Escape"&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick),document.removeEventListener("keydown",this._onKey)}_toggle(){this.open=!this.open,this.open&&this.searchable&&(this._query="",requestAnimationFrame(()=>{var t,r;return(r=(t=this.shadowRoot)==null?void 0:t.querySelector(".search-input"))==null?void 0:r.focus()}))}_select(t){t.disabled||t.separator||(this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{value:t.value}})),this.open=!1)}render(){const t=this.searchable&&this._query?this.items.filter(o=>!o.separator&&o.label.toLowerCase().includes(this._query.toLowerCase())):this.items;let r="";const a=t.flatMap(o=>{if(o.separator)return[n`<div class="separator" role="separator"></div>`];const e=!!(o.group&&o.group!==r);e&&(r=o.group);const s="item"+(o.danger?" danger":"")+(o.checked?" checked":""),i=o.disabled===!0,h=n`<button role="menuitem" class=${s} ?disabled=${i} @click=${()=>this._select(o)}><span class="item-label">${o.label}</span></button>`;return e?[n`<div class="group-header">${o.group}</div>`,h]:[h]});return n`
      <div class="trigger-slot" @click=${this._toggle} role="button" aria-haspopup="true" aria-expanded=${this.open}>
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-menu" ?hidden=${!this.open} role="menu">
        ${this.searchable?n`
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
        ${this.items.length>0?a:n`<slot></slot>`}
        ${this.searchable&&t.length===0?n`
          <div class="empty">No results for "${this._query}"</div>`:v}
      </div>`}};Te.styles=gp;Sr([l({type:Boolean,reflect:!0})],Te.prototype,"open",2);Sr([l({reflect:!0})],Te.prototype,"placement",2);Sr([l({type:Array})],Te.prototype,"items",2);Sr([l({type:Boolean})],Te.prototype,"searchable",2);Sr([p()],Te.prototype,"_query",2);Te=Sr([c("wu-dropdown")],Te);const yp=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }
`,xp=d`
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
`;var kp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,Mr=(t,r,a,o)=>{for(var e=o>1?void 0:o?$p(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&kp(r,a,e),e};let bi=class extends u{render(){return n`<div role="tree"><slot></slot></div>`}};bi.styles=yp;bi=Mr([c("wu-tree")],bi);let lt=class extends u{constructor(){super(...arguments),this.label="",this.expanded=!1,this.selected=!1,this.disabled=!1,this._hasChildren=!1}firstUpdated(){const t=this.shadowRoot.querySelector("slot");this._hasChildren=t.assignedElements().length>0,this.requestUpdate()}_toggle(t){t.stopPropagation(),this.expanded=!this.expanded}_select(){this.disabled||(this.selected=!0,this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{label:this.label}})))}render(){return n`
      <div class="row" role="treeitem" aria-expanded=${this._hasChildren?this.expanded:"false"} aria-selected=${this.selected} @click=${this._select}>
        ${this._hasChildren?n`<span class="toggle" @click=${this._toggle} aria-hidden="true">▶</span>`:n`<span class="spacer"></span>`}
        <span class="label">${this.label}</span>
      </div>
      <div class="children" ?hidden=${!this.expanded} role="group">
        <slot @slotchange=${()=>{this._hasChildren=this.shadowRoot.querySelector("slot").assignedElements().length>0,this.requestUpdate()}}></slot>
      </div>`}};lt.styles=xp;Mr([l({reflect:!0})],lt.prototype,"label",2);Mr([l({type:Boolean,reflect:!0})],lt.prototype,"expanded",2);Mr([l({type:Boolean,reflect:!0})],lt.prototype,"selected",2);Mr([l({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);lt=Mr([c("wu-tree-item")],lt);const _p=d`
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
`,zp=d`
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
`;var Op=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,St=(t,r,a,o)=>{for(var e=o>1?void 0:o?jp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Op(r,a,e),e};let rs=class extends u{constructor(){super(...arguments),this.value=""}connectedCallback(){super.connectedCallback(),this.addEventListener("wu-item-click",this._handleSelect)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("wu-item-click",this._handleSelect)}_handleSelect(t){const r=t.detail.value;this.querySelectorAll("wu-bottom-nav-item").forEach(a=>{a.active=a.value===r}),this.value=r,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:r}}))}render(){return n`<nav><slot></slot></nav>`}};rs.styles=_p;St([l()],rs.prototype,"value",2);rs=St([c("wu-bottom-nav")],rs);let ut=class extends u{constructor(){super(...arguments),this.value="",this.label="",this.icon="",this.active=!1}_click(){this.dispatchEvent(new CustomEvent("wu-item-click",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){return n`
      <button role="tab" aria-selected=${this.active} @click=${this._click}>
        <span class="icon" aria-hidden="true">${this.icon}</span>
        <span class="label">${this.label}</span>
      </button>`}};ut.styles=zp;St([l({reflect:!0})],ut.prototype,"value",2);St([l()],ut.prototype,"label",2);St([l()],ut.prototype,"icon",2);St([l({type:Boolean,reflect:!0})],ut.prototype,"active",2);ut=St([c("wu-bottom-nav-item")],ut);const Pp=d`
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
`;var Cp=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,ul=(t,r,a,o)=>{for(var e=o>1?void 0:o?Dp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Cp(r,a,e),e};let os=class extends u{constructor(){super(...arguments),this.open=!1,this._onKey=t=>{t.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKey)}_open(){this.open=!0,this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0}))}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}))}render(){return n`
      <div class="trigger-slot" @click=${()=>this.open?this._close():this._open()}>
        <slot name="trigger"></slot>
      </div>
      <div class="backdrop" ?hidden=${!this.open} @click=${this._close}></div>
      <div class="overlay" ?hidden=${!this.open} role="dialog" aria-label="Navigation menu">
        <slot></slot>
      </div>`}};os.styles=Pp;ul([l({type:Boolean,reflect:!0})],os.prototype,"open",2);os=ul([c("wu-mega-menu")],os);const Ep=d`
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
`;var Sp=Object.defineProperty,Mp=Object.getOwnPropertyDescriptor,Oi=(t,r,a,o)=>{for(var e=o>1?void 0:o?Mp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Sp(r,a,e),e};let ro=class extends u{constructor(){super(...arguments),this.notifications=[],this._open=!1,this._outsideClick=t=>{!this.contains(t.target)&&!this.shadowRoot.contains(t.target)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick)}get _unreadCount(){return this.notifications.filter(t=>!t.read).length}_markAllRead(){this.notifications=this.notifications.map(t=>({...t,read:!0})),this.dispatchEvent(new CustomEvent("wu-mark-all-read",{bubbles:!0,composed:!0}))}_clickItem(t){t.read=!0,this.notifications=[...this.notifications],this.dispatchEvent(new CustomEvent("wu-notification-click",{bubbles:!0,composed:!0,detail:{id:t.id}}))}render(){const t=this._unreadCount;return n`
      <button class="trigger" aria-label="Notifications${t?`, ${t} unread`:""}" @click=${()=>{this._open=!this._open}}>
        🔔
        ${t>0?n`<span class="badge" aria-hidden="true">${t>99?"99+":t}</span>`:""}
      </button>
      <div class="panel" ?hidden=${!this._open} role="region" aria-label="Notifications">
        <div class="header">
          <span class="header-title">Notifications</span>
          ${t>0?n`<button class="mark-all-btn" @click=${this._markAllRead}>Mark all read</button>`:""}
        </div>
        ${this.notifications.length===0?n`<div class="empty">No notifications</div>`:this.notifications.map(r=>n`
            <div class="item ${r.read?"read":"unread"}" role="button" tabindex="0" @click=${()=>this._clickItem(r)}>
              <div class="dot"></div>
              <div>
                <div class="item-title">${r.title}</div>
                ${r.body?n`<div class="item-body">${r.body}</div>`:""}
                ${r.time?n`<div class="item-time">${r.time}</div>`:""}
              </div>
            </div>`)}
      </div>`}};ro.styles=Ep;Oi([l({type:Array})],ro.prototype,"notifications",2);Oi([p()],ro.prototype,"_open",2);ro=Oi([c("wu-notification-center")],ro);const Bp=d`
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
`;var Ap=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,Ms=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ip(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ap(r,a,e),e};let Qt=class extends u{constructor(){super(...arguments),this.orientation="both",this.maxHeight="",this.maxWidth=""}render(){const t={};return this.maxHeight&&(t.maxHeight=this.maxHeight),this.maxWidth&&(t.maxWidth=this.maxWidth),n`<div style=${_(t)}><slot></slot></div>`}};Qt.styles=Bp;Ms([l({reflect:!0})],Qt.prototype,"orientation",2);Ms([l({attribute:"max-height"})],Qt.prototype,"maxHeight",2);Ms([l({attribute:"max-width"})],Qt.prototype,"maxWidth",2);Qt=Ms([c("wu-scroll-area")],Qt);const Np=d`
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
`;var Lp=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,re=(t,r,a,o)=>{for(var e=o>1?void 0:o?Tp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Lp(r,a,e),e};let B=class extends u{constructor(){super(...arguments),this.orientation="horizontal",this.initialSize=250,this.minSize=60,this.maxSize=800,this.snapThreshold=20,this.keyStep=8,this.collapsible=!1,this._size=0,this._dragging=!1,this._collapsed=!1,this._sizeBeforeCollapse=0}willUpdate(t){t.has("initialSize")&&!this._dragging&&(this._size=this.initialSize,this._sizeBeforeCollapse=this.initialSize)}firstUpdated(){this._dragging||(this._size=this.initialSize,this._sizeBeforeCollapse=this.initialSize)}connectedCallback(){super.connectedCallback(),this._size===0&&(this._size=this.initialSize,this._sizeBeforeCollapse=this.initialSize)}_onPointerDown(t){if(!t.target.closest(".collapse-btn")){t.preventDefault(),this._dragging=!0;try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}}}_onPointerMove(t){if(!this._dragging)return;const r=this.getBoundingClientRect(),a=this.orientation==="horizontal"?t.clientX-r.left:t.clientY-r.top;let o=Math.min(this.maxSize,Math.max(this.minSize,a));Math.abs(o-this.minSize)<this.snapThreshold&&(o=this.minSize),Math.abs(o-this.maxSize)<this.snapThreshold&&(o=this.maxSize);const e=this._collapsed;this._collapsed=o<=this.minSize,this._size=o,!e&&this._collapsed&&this.dispatchEvent(new CustomEvent("wu-collapse",{bubbles:!0,composed:!0,detail:{panel:"primary"}})),this.dispatchEvent(new CustomEvent("wu-resize",{bubbles:!0,composed:!0,detail:{position:this._size}}))}_onPointerUp(t){if(this._dragging){this._dragging=!1;try{t.currentTarget.releasePointerCapture(t.pointerId)}catch{}this._collapsed||(this._sizeBeforeCollapse=this._size)}}_onKeyDown(t){const r=this.orientation==="horizontal"?["ArrowRight","ArrowUp"]:["ArrowDown","ArrowRight"],a=this.orientation==="horizontal"?["ArrowLeft","ArrowDown"]:["ArrowUp","ArrowLeft"],o=t.shiftKey?this.keyStep*5:this.keyStep;r.includes(t.key)?(t.preventDefault(),this._setSize(this._size+o)):a.includes(t.key)?(t.preventDefault(),this._setSize(this._size-o)):t.key==="Home"?(t.preventDefault(),this._setSize(this.minSize)):t.key==="End"?(t.preventDefault(),this._setSize(this.maxSize)):(t.key==="Enter"||t.key===" ")&&this.collapsible&&(t.preventDefault(),this._toggleCollapse())}_setSize(t){this._size=Math.min(this.maxSize,Math.max(this.minSize,t)),this._sizeBeforeCollapse=this._size,this._collapsed=this._size<=this.minSize,this.dispatchEvent(new CustomEvent("wu-resize",{bubbles:!0,composed:!0,detail:{position:this._size}}))}_toggleCollapse(){this._collapsed?(this._size=this._sizeBeforeCollapse>this.minSize?this._sizeBeforeCollapse:this.initialSize,this._collapsed=!1,this.dispatchEvent(new CustomEvent("wu-expand",{bubbles:!0,composed:!0,detail:{panel:"primary"}}))):(this._sizeBeforeCollapse=this._size,this._size=this.minSize,this._collapsed=!0,this.dispatchEvent(new CustomEvent("wu-collapse",{bubbles:!0,composed:!0,detail:{panel:"primary"}})))}render(){const t=this.orientation==="horizontal",r=t?{width:`${this._size}px`}:{height:`${this._size}px`};return n`
      <div class="pane pane-primary" part="primary" style=${_(r)}>
        <slot name="primary"></slot>
      </div>

      <div
        class=${Bl({divider:!0,active:this._dragging,"is-collapsed":this._collapsed})}
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
          ${t?n`<svg width="4" height="20" viewBox="0 0 4 20"><circle cx="2" cy="4" r="1.5" fill="currentColor"/><circle cx="2" cy="10" r="1.5" fill="currentColor"/><circle cx="2" cy="16" r="1.5" fill="currentColor"/></svg>`:n`<svg width="20" height="4" viewBox="0 0 20 4"><circle cx="4" cy="2" r="1.5" fill="currentColor"/><circle cx="10" cy="2" r="1.5" fill="currentColor"/><circle cx="16" cy="2" r="1.5" fill="currentColor"/></svg>`}
        </span>
        ${this.collapsible?n`
          <button class="collapse-btn" type="button"
            aria-label=${this._collapsed?"Expand panel":"Collapse panel"}
            @click=${this._toggleCollapse}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              ${t?n`<path d="${this._collapsed?"M3 1l4 4-4 4":"M7 1L3 5l4 4"}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`:n`<path d="${this._collapsed?"M1 3l4 4 4-4":"M1 7l4-4 4 4"}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`}
            </svg>
          </button>`:""}
      </div>

      <div class="pane pane-secondary" part="secondary">
        <slot name="secondary"></slot>
      </div>`}};B.styles=Np;re([l({reflect:!0})],B.prototype,"orientation",2);re([l({type:Number,attribute:"initial-size"})],B.prototype,"initialSize",2);re([l({type:Number,attribute:"min-size"})],B.prototype,"minSize",2);re([l({type:Number,attribute:"max-size"})],B.prototype,"maxSize",2);re([l({type:Number,attribute:"snap-threshold"})],B.prototype,"snapThreshold",2);re([l({type:Number,attribute:"key-step"})],B.prototype,"keyStep",2);re([l({type:Boolean})],B.prototype,"collapsible",2);re([p()],B.prototype,"_size",2);re([p()],B.prototype,"_dragging",2);re([p()],B.prototype,"_collapsed",2);B=re([c("wu-split-pane")],B);const qp=d`
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
`;var Rp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Aa=(t,r,a,o)=>{for(var e=o>1?void 0:o?Fp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Rp(r,a,e),e};let ct=class extends u{constructor(){super(...arguments),this.open=!1,this.direction="up",this.icon="+",this.actions=[],this._outsideClick=t=>{!this.contains(t.target)&&!this.shadowRoot.contains(t.target)&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._outsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._outsideClick)}_clickAction(t){this.open=!1,this.dispatchEvent(new CustomEvent("wu-action-click",{bubbles:!0,composed:!0,detail:{value:t.value}}))}render(){return n`
      <div class="container">
        <button class="fab" aria-label="Open actions" aria-expanded=${this.open} @click=${()=>{this.open=!this.open}}>
          ${this.icon}
        </button>
        <div class="actions" ?hidden=${!this.open} role="menu">
          ${this.actions.map(t=>n`
            <button class="action-btn" role="menuitem" @click=${()=>this._clickAction(t)}>
              ${t.icon?n`<span class="action-icon" aria-hidden="true">${t.icon}</span>`:""}
              <span>${t.label}</span>
            </button>`)}
        </div>
      </div>`}};ct.styles=qp;Aa([l({type:Boolean,reflect:!0})],ct.prototype,"open",2);Aa([l({reflect:!0})],ct.prototype,"direction",2);Aa([l()],ct.prototype,"icon",2);Aa([l({type:Array})],ct.prototype,"actions",2);ct=Aa([c("wu-speed-dial")],ct);const Hp=d`
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
`;var Kp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,Bs=(t,r,a,o)=>{for(var e=o>1?void 0:o?Vp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Kp(r,a,e),e};let Zt=class extends u{constructor(){super(...arguments),this.open=!1,this.images=[],this.index=0,this._onKey=t=>{this.open&&(t.key==="Escape"&&this.close(),t.key==="ArrowRight"&&this._next(),t.key==="ArrowLeft"&&this._prev())}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKey)}close(){this.open=!1,this.dispatchEvent(new CustomEvent("wu-close",{bubbles:!0,composed:!0}))}_prev(){this.index>0&&this.index--}_next(){this.index<this.images.length-1&&this.index++}render(){const t=this.images[this.index];return n`
      <div class="backdrop" ?hidden=${!this.open} @click=${r=>{r.target===r.currentTarget&&this.close()}} role="dialog" aria-modal="true" aria-label="Image preview">
        <div class="box">
          <button class="close" aria-label="Close lightbox" @click=${this.close}>✕</button>
          ${t?n`<img src=${t.src} alt=${t.alt??""}>`:""}
          ${t!=null&&t.caption?n`<div class="caption">${t.caption}</div>`:""}
          <div class="nav">
            <button class="nav-btn" ?disabled=${this.index===0} aria-label="Previous image" @click=${this._prev}>‹</button>
            <span class="counter">${this.index+1} / ${this.images.length}</span>
            <button class="nav-btn" ?disabled=${this.index===this.images.length-1} aria-label="Next image" @click=${this._next}>›</button>
          </div>
        </div>
      </div>`}};Zt.styles=Hp;Bs([l({type:Boolean,reflect:!0})],Zt.prototype,"open",2);Bs([l({type:Array})],Zt.prototype,"images",2);Bs([l({type:Number})],Zt.prototype,"index",2);Zt=Bs([c("wu-lightbox")],Zt);const Up=d`
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
`;var Yp=Object.defineProperty,Wp=Object.getOwnPropertyDescriptor,ji=(t,r,a,o)=>{for(var e=o>1?void 0:o?Wp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Yp(r,a,e),e};let oo=class extends u{constructor(){super(...arguments),this.images=[],this.cols=3}_click(t){this.dispatchEvent(new CustomEvent("wu-image-click",{bubbles:!0,composed:!0,detail:{index:t}}))}render(){return n`
      <div class="grid" style=${_({"--wu-gallery-cols":String(this.cols)})}>
        ${this.images.map((t,r)=>n`
          <div class="thumb" tabindex="0" role="button" aria-label=${t.alt??`Image ${r+1}`} @click=${()=>this._click(r)} @keydown=${a=>{a.key==="Enter"&&this._click(r)}}>
            <img src=${t.src} alt=${t.alt??""} loading="lazy">
          </div>`)}
      </div>`}};oo.styles=Up;ji([l({type:Array})],oo.prototype,"images",2);ji([l({type:Number})],oo.prototype,"cols",2);oo=ji([c("wu-gallery")],oo);const Xp=d`
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
`;var Gp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,Mt=(t,r,a,o)=>{for(var e=o>1?void 0:o?Jp(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Gp(r,a,e),e};let _e=class extends u{constructor(){super(...arguments),this.items=[],this.itemHeight=48,this.viewportHeight=400,this.renderItem=t=>n`<div style="height:${this.itemHeight}px;display:flex;align-items:center;padding:0 16px;border-bottom:1px solid var(--wu-color-border)">${String(t)}</div>`,this._scrollTop=0}_onScroll(){this._scrollTop=this._viewport.scrollTop;const t=Math.floor(this._scrollTop/this.itemHeight),r=Math.min(this.items.length,t+Math.ceil(this.viewportHeight/this.itemHeight)+2);this.dispatchEvent(new CustomEvent("wu-visible-change",{bubbles:!0,composed:!0,detail:{start:t,end:r}}))}render(){const t=this.items.length*this.itemHeight,r=Math.max(0,Math.floor(this._scrollTop/this.itemHeight)-2),a=Math.min(this.items.length,r+Math.ceil(this.viewportHeight/this.itemHeight)+4),o=r*this.itemHeight;return n`
      <div class="viewport" style=${_({height:`${this.viewportHeight}px`})} @scroll=${this._onScroll}>
        <div class="total" style=${_({height:`${t}px`})}>
          <div class="window" style=${_({transform:`translateY(${o}px)`})}>
            ${this.items.slice(r,a).map((e,s)=>this.renderItem(e,r+s))}
          </div>
        </div>
      </div>`}};_e.styles=Xp;Mt([l({type:Array})],_e.prototype,"items",2);Mt([l({type:Number,attribute:"item-height"})],_e.prototype,"itemHeight",2);Mt([l({type:Number,attribute:"viewport-height"})],_e.prototype,"viewportHeight",2);Mt([l()],_e.prototype,"renderItem",2);Mt([p()],_e.prototype,"_scrollTop",2);Mt([Pe(".viewport")],_e.prototype,"_viewport",2);_e=Mt([c("wu-virtual-list")],_e);const Qp=d`
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
`;var Zp=Object.defineProperty,eh=Object.getOwnPropertyDescriptor,As=(t,r,a,o)=>{for(var e=o>1?void 0:o?eh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Zp(r,a,e),e};let er=class extends u{constructor(){super(...arguments),this.items=[],this._draggingId=null,this._overIndex=null}_dragStart(t){this._draggingId=t}_dragOver(t,r){t.preventDefault(),this._overIndex=r}_drop(t){if(this._draggingId===null)return;const r=this.items.findIndex(e=>e.id===this._draggingId);if(r===t){this._draggingId=null,this._overIndex=null;return}const a=[...this.items],[o]=a.splice(r,1);a.splice(t,0,o),this.items=a,this.dispatchEvent(new CustomEvent("wu-sort",{bubbles:!0,composed:!0,detail:{items:a,from:r,to:t}})),this._draggingId=null,this._overIndex=null}_dragEnd(){this._draggingId=null,this._overIndex=null}render(){return n`
      <ul class="list" role="list">
        ${this.items.map((t,r)=>n`
          <li class="item ${this._draggingId===t.id?"dragging":""} ${this._overIndex===r?"drag-over":""}"
            draggable="true"
            @dragstart=${()=>this._dragStart(t.id)}
            @dragover=${a=>this._dragOver(a,r)}
            @drop=${()=>this._drop(r)}
            @dragend=${this._dragEnd}>
            <span class="handle" aria-hidden="true">⠿</span>
            <span class="content">${t.label}</span>
          </li>`)}
      </ul>`}};er.styles=Qp;As([l({type:Array})],er.prototype,"items",2);As([p()],er.prototype,"_draggingId",2);As([p()],er.prototype,"_overIndex",2);er=As([c("wu-sortable")],er);const th=d`
  :host { display: flex; gap: var(--wu-space-4); overflow-x: auto; padding: var(--wu-space-2); }
`,rh=d`
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
`;var oh=Object.defineProperty,ah=Object.getOwnPropertyDescriptor,Br=(t,r,a,o)=>{for(var e=o>1?void 0:o?ah(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&oh(r,a,e),e};let gi=class extends u{render(){return n`<div role="region" aria-label="Kanban board"><slot></slot></div>`}};gi.styles=th;gi=Br([c("wu-kanban")],gi);let dt=class extends u{constructor(){super(...arguments),this.columnId="",this.label="",this.cards=[],this._draggingId=null}_dragStart(t){this._draggingId=t}_dragEnd(){this._draggingId=null}_dragOver(t){t.preventDefault(),this.classList.add("drag-over")}_dragLeave(){this.classList.remove("drag-over")}_drop(t){var r;t.preventDefault(),this.classList.remove("drag-over");const a=(r=t.dataTransfer)==null?void 0:r.getData("text/plain");a&&this.dispatchEvent(new CustomEvent("wu-card-move",{bubbles:!0,composed:!0,detail:{cardId:a,toColumn:this.columnId}}))}render(){return n`
      <div class="header">
        <span>${this.label}</span>
        <span class="count">${this.cards.length}</span>
      </div>
      <div class="cards" @dragover=${this._dragOver} @dragleave=${this._dragLeave} @drop=${this._drop}>
        ${this.cards.map(t=>n`
          <div class="card ${this._draggingId===t.id?"dragging":""}"
            draggable="true"
            @dragstart=${r=>{var a;(a=r.dataTransfer)==null||a.setData("text/plain",t.id),this._dragStart(t.id)}}
            @dragend=${this._dragEnd}>
            ${t.title}
          </div>`)}
      </div>`}};dt.styles=rh;Br([l()],dt.prototype,"columnId",2);Br([l()],dt.prototype,"label",2);Br([l({type:Array})],dt.prototype,"cards",2);Br([p()],dt.prototype,"_draggingId",2);dt=Br([c("wu-kanban-column")],dt);const sh=d`
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
`;var ih=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,et=(t,r,a,o)=>{for(var e=o>1?void 0:o?nh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ih(r,a,e),e};let ce=class extends u{constructor(){super(...arguments),this.users=[],this.value="",this.placeholder="Type @ to mention someone...",this.multiline=!1,this._query="",this._showList=!1,this._activeIndex=0}get _filtered(){return this._query?this.users.filter(t=>t.name.toLowerCase().includes(this._query.toLowerCase())).slice(0,8):[]}_onInput(t){const r=t.target;this.value=r.value;const a=r.value.slice(0,r.selectionStart??r.value.length).match(/@(\w*)$/);a?(this._query=a[1],this._showList=!0,this._activeIndex=0):(this._showList=!1,this._query=""),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_onKey(t){if(!this._showList)return;const r=this._filtered;t.key==="ArrowDown"?(t.preventDefault(),this._activeIndex=(this._activeIndex+1)%r.length):t.key==="ArrowUp"?(t.preventDefault(),this._activeIndex=(this._activeIndex-1+r.length)%r.length):t.key==="Enter"&&r.length?(t.preventDefault(),this._selectUser(r[this._activeIndex])):t.key==="Escape"&&(this._showList=!1)}_selectUser(t){const r=this.shadowRoot.querySelector("textarea,input").selectionStart??this.value.length,a=this.value.slice(0,r).replace(/@\w*$/,`@${t.name} `);this.value=a+this.value.slice(r),this._showList=!1,this._query="",this.dispatchEvent(new CustomEvent("wu-mention",{bubbles:!0,composed:!0,detail:{user:t}})),this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_initials(t){return t.split(" ").map(r=>r[0]).join("").slice(0,2).toUpperCase()}render(){const t=this._filtered,r=this.multiline?n`<textarea .value=${this.value} placeholder=${this.placeholder} rows="3" @input=${this._onInput} @keydown=${this._onKey}></textarea>`:n`<input type="text" .value=${this.value} placeholder=${this.placeholder} @input=${this._onInput} @keydown=${this._onKey}>`;return n`
      <div class="field">
        ${r}
        <div class="mention-list" ?hidden=${!this._showList||t.length===0} role="listbox">
          ${t.map((a,o)=>n`
            <div class="mention-item ${o===this._activeIndex?"active":""}" role="option" @mousedown=${e=>{e.preventDefault(),this._selectUser(a)}}>
              ${a.avatar?n`<img class="avatar" src=${a.avatar} alt="">`:n`<div class="avatar">${this._initials(a.name)}</div>`}
              ${a.name}
            </div>`)}
        </div>
      </div>`}};ce.styles=sh;et([l({type:Array})],ce.prototype,"users",2);et([l()],ce.prototype,"value",2);et([l()],ce.prototype,"placeholder",2);et([l({type:Boolean})],ce.prototype,"multiline",2);et([p()],ce.prototype,"_query",2);et([p()],ce.prototype,"_showList",2);et([p()],ce.prototype,"_activeIndex",2);ce=et([c("wu-mention")],ce);const lh=d`
  :host { display: inline-block; }
  svg { display: block; }
`;var uh=Object.defineProperty,ch=Object.getOwnPropertyDescriptor,Ar=(t,r,a,o)=>{for(var e=o>1?void 0:o?ch(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&uh(r,a,e),e};let qe=class extends u{constructor(){super(...arguments),this.value="",this.size=128,this.color="#000000",this.background="#ffffff",this.moduleSize=4}_buildMatrix(){const t=Array.from({length:21},()=>Array(21).fill(!1)),r=(o,e)=>{for(let s=0;s<7;s++)for(let i=0;i<7;i++){if(o+s>=21||e+i>=21)continue;const h=s===0||s===6||i===0||i===6,b=s>=2&&s<=4&&i>=2&&i<=4;t[o+s][e+i]=h||b}};r(0,0),r(0,14),r(14,0);for(let o=8;o<13;o++)t[6][o]=o%2===0,t[o][6]=o%2===0;let a=0;for(let o=0;o<this.value.length;o++)a=a*31+this.value.charCodeAt(o)>>>0;for(let o=9;o<21;o++)for(let e=9;e<21;e++){const s=(a^o*17+e*13)&1;t[o][e]=s===1}return t}render(){if(!this.value)return n`<svg width=${this.size} height=${this.size} style="background:${this.background}"></svg>`;const t=this._buildMatrix();if(!t)return n`<div style="font-size:12px;color:red">Value too long</div>`;const r=t.length,a=this.size/r,o=t.flatMap((s,i)=>s.map((h,b)=>h?`<rect x="${b*a}" y="${i*a}" width="${a}" height="${a}" fill="${this.color}"/>`:"")).join(""),e=`<rect width="100%" height="100%" fill="${this.background}"/>${o}`;return n`
      <svg width=${this.size} height=${this.size}
        viewBox="0 0 ${this.size} ${this.size}"
        aria-label="QR code for: ${this.value}"
        role="img"
        .innerHTML=${e}
      ></svg>`}};qe.styles=lh;Ar([l()],qe.prototype,"value",2);Ar([l({type:Number})],qe.prototype,"size",2);Ar([l()],qe.prototype,"color",2);Ar([l()],qe.prototype,"background",2);Ar([l({type:Number,attribute:"module-size"})],qe.prototype,"moduleSize",2);qe=Ar([c("wu-qr-code")],qe);const dh=d`
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
`;var ph=Object.defineProperty,hh=Object.getOwnPropertyDescriptor,V=(t,r,a,o)=>{for(var e=o>1?void 0:o?hh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ph(r,a,e),e};let P=class extends u{constructor(){super(...arguments),this.src="",this.poster="",this.autoplay=!1,this.muted=!1,this.loop=!1,this.paused=!0,this._progress=0,this._vol=1,this._currentTime=0,this._duration=0}_toggle(){this._video.paused?this._video.play():this._video.pause()}_onPlay(){this.paused=!1,this.dispatchEvent(new CustomEvent("wu-play",{bubbles:!0,composed:!0}))}_onPause(){this.paused=!0,this.dispatchEvent(new CustomEvent("wu-pause",{bubbles:!0,composed:!0}))}_onEnded(){this.paused=!0,this.dispatchEvent(new CustomEvent("wu-ended",{bubbles:!0,composed:!0}))}_onTimeUpdate(){this._currentTime=this._video.currentTime,this._duration=this._video.duration||0,this._progress=this._duration?this._currentTime/this._duration*100:0}_seek(t){const r=t.currentTarget,a=t.offsetX/r.offsetWidth;this._video.currentTime=a*(this._video.duration||0)}_toggleMute(){this._video.muted=!this._video.muted,this._vol=this._video.muted?0:1}_formatTime(t){if(!isFinite(t))return"0:00";const r=Math.floor(t/60),a=Math.floor(t%60);return`${r}:${a.toString().padStart(2,"0")}`}render(){return n`
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
      </div>`}};P.styles=dh;V([l()],P.prototype,"src",2);V([l()],P.prototype,"poster",2);V([l({type:Boolean})],P.prototype,"autoplay",2);V([l({type:Boolean})],P.prototype,"muted",2);V([l({type:Boolean})],P.prototype,"loop",2);V([l({reflect:!0,type:Boolean})],P.prototype,"paused",2);V([p()],P.prototype,"_progress",2);V([p()],P.prototype,"_vol",2);V([p()],P.prototype,"_currentTime",2);V([p()],P.prototype,"_duration",2);V([Pe("video")],P.prototype,"_video",2);P=V([c("wu-video")],P);const vh=d`
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
`;var wh=Object.defineProperty,bh=Object.getOwnPropertyDescriptor,Pi=(t,r,a,o)=>{for(var e=o>1?void 0:o?bh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&wh(r,a,e),e};let ao=class extends u{constructor(){super(...arguments),this.size="lg",this.flush=!1}render(){return n`<div part="base" class="base"><slot></slot></div>`}};ao.styles=vh;Pi([l({reflect:!0})],ao.prototype,"size",2);Pi([l({type:Boolean,reflect:!0})],ao.prototype,"flush",2);ao=Pi([c("wu-container")],ao);const gh=d`
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
`;var fh=Object.defineProperty,mh=Object.getOwnPropertyDescriptor,Ia=(t,r,a,o)=>{for(var e=o>1?void 0:o?mh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&fh(r,a,e),e};let pt=class extends u{constructor(){super(...arguments),this.direction="vertical",this.gap="md",this.align="stretch",this.justify="start"}get _alignValue(){switch(this.align){case"start":return"flex-start";case"center":return"center";case"end":return"flex-end";default:return"stretch"}}get _justifyValue(){switch(this.justify){case"center":return"center";case"end":return"flex-end";case"between":return"space-between";case"around":return"space-around";default:return"flex-start"}}render(){return n`
      <div
        part="base"
        class="stack"
        style=${_({"--wu-stack-align":this._alignValue,"--wu-stack-justify":this._justifyValue})}
      >
        <slot></slot>
      </div>
    `}};pt.styles=gh;Ia([l({reflect:!0})],pt.prototype,"direction",2);Ia([l({reflect:!0})],pt.prototype,"gap",2);Ia([l()],pt.prototype,"align",2);Ia([l()],pt.prototype,"justify",2);pt=Ia([c("wu-stack")],pt);const yh=d`
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
`;var xh=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,Is=(t,r,a,o)=>{for(var e=o>1?void 0:o?kh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&xh(r,a,e),e};let tr=class extends u{constructor(){super(...arguments),this.gap="sm",this.align="center",this.justify="start"}get _alignValue(){switch(this.align){case"start":return"flex-start";case"center":return"center";case"end":return"flex-end";default:return"stretch"}}get _justifyValue(){switch(this.justify){case"center":return"center";case"end":return"flex-end";case"between":return"space-between";case"around":return"space-around";default:return"flex-start"}}render(){return n`
      <div
        part="base"
        class="cluster"
        style=${_({"--wu-cluster-align":this._alignValue,"--wu-cluster-justify":this._justifyValue})}
      >
        <slot></slot>
      </div>
    `}};tr.styles=yh;Is([l({reflect:!0})],tr.prototype,"gap",2);Is([l()],tr.prototype,"align",2);Is([l()],tr.prototype,"justify",2);tr=Is([c("wu-cluster")],tr);const $h=d`
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
`;var _h=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,Na=(t,r,a,o)=>{for(var e=o>1?void 0:o?zh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&_h(r,a,e),e};let ht=class extends u{constructor(){super(...arguments),this.columns=3,this.gap="md",this.minItemWidth="16rem",this.autoFit=!1}render(){return n`
      <div
        part="base"
        class="grid"
        style=${_({"--wu-grid-columns":String(this.columns),"--wu-grid-min-item-width":this.minItemWidth})}
      >
        <slot></slot>
      </div>
    `}};ht.styles=$h;Na([l({type:Number,reflect:!0})],ht.prototype,"columns",2);Na([l({reflect:!0})],ht.prototype,"gap",2);Na([l({attribute:"min-item-width"})],ht.prototype,"minItemWidth",2);Na([l({type:Boolean,reflect:!0,attribute:"auto-fit"})],ht.prototype,"autoFit",2);ht=Na([c("wu-grid")],ht);const Oh=d`
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
`;var jh=Object.defineProperty,Ph=Object.getOwnPropertyDescriptor,Ci=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ph(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&jh(r,a,e),e};let so=class extends u{constructor(){super(...arguments),this.columns=3,this.gap="md"}render(){return n`
      <div
        part="base"
        class="masonry"
        style=${_({"--wu-masonry-columns":String(this.columns)})}
      >
        <slot></slot>
      </div>
    `}};so.styles=Oh;Ci([l({type:Number,reflect:!0})],so.prototype,"columns",2);Ci([l({reflect:!0})],so.prototype,"gap",2);so=Ci([c("wu-masonry")],so);const Ch=d`
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
`;var Dh=Object.defineProperty,Eh=Object.getOwnPropertyDescriptor,cl=(t,r,a,o)=>{for(var e=o>1?void 0:o?Eh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Dh(r,a,e),e};let as=class extends u{constructor(){super(...arguments),this.ratio="16/9"}render(){return n`
      <div
        part="base"
        class="aspect-ratio"
        style=${_({"--wu-aspect-ratio-ratio":this.ratio})}
      >
        <slot></slot>
      </div>
    `}};as.styles=Ch;cl([l({reflect:!0})],as.prototype,"ratio",2);as=cl([c("wu-aspect-ratio")],as);const Sh=d`
  :host {
    display: block;
  }

  .sticky {
    position: sticky;
    top: var(--wu-sticky-top, 0);
    bottom: var(--wu-sticky-bottom, auto);
    z-index: var(--wu-sticky-z, 10);
  }
`;var Mh=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,Ns=(t,r,a,o)=>{for(var e=o>1?void 0:o?Bh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Mh(r,a,e),e};let rr=class extends u{constructor(){super(...arguments),this.top="0",this.bottom="",this.zIndex=10}render(){return n`
      <div
        part="base"
        class="sticky"
        style=${_({"--wu-sticky-top":this.top||"0","--wu-sticky-bottom":this.bottom||"","--wu-sticky-z":String(this.zIndex)})}
      >
        <slot></slot>
      </div>
    `}};rr.styles=Sh;Ns([l({reflect:!0})],rr.prototype,"top",2);Ns([l({reflect:!0})],rr.prototype,"bottom",2);Ns([l({type:Number,reflect:!0,attribute:"z-index"})],rr.prototype,"zIndex",2);rr=Ns([c("wu-sticky")],rr);const Ah=d`
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
`;var Ih=Object.defineProperty,Nh=Object.getOwnPropertyDescriptor,dl=(t,r,a,o)=>{for(var e=o>1?void 0:o?Nh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ih(r,a,e),e};let ss=class extends u{constructor(){super(...arguments),this.size="auto"}render(){return n`<span part="base" aria-hidden="true"></span>`}};ss.styles=Ah;dl([l({reflect:!0})],ss.prototype,"size",2);ss=dl([c("wu-spacer")],ss);const Lh=d`
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
`;var Th=(t,r,a,o)=>{for(var e=r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=i(e)||e);return e};let fi=class extends u{render(){return n`<span part="base"><slot></slot></span>`}};fi.styles=Lh;fi=Th([c("wu-visually-hidden")],fi);const qh=d`
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
`;var Rh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,Di=(t,r,a,o)=>{for(var e=o>1?void 0:o?Fh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Rh(r,a,e),e};let io=class extends u{constructor(){super(...arguments),this.printOnly=!1,this.noPrint=!1}render(){return n`<div part="base"><slot></slot></div>`}};io.styles=qh;Di([l({type:Boolean,reflect:!0,attribute:"print-only"})],io.prototype,"printOnly",2);Di([l({type:Boolean,reflect:!0,attribute:"no-print"})],io.prototype,"noPrint",2);io=Di([c("wu-print-area")],io);const Hh=d`
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
`;var Kh=Object.defineProperty,Vh=Object.getOwnPropertyDescriptor,pl=(t,r,a,o)=>{for(var e=o>1?void 0:o?Vh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Kh(r,a,e),e};let is=class extends u{constructor(){super(...arguments),this.size="base"}render(){return n`<div part="base" class="prose"><slot></slot></div>`}};is.styles=Hh;pl([l({reflect:!0})],is.prototype,"size",2);is=pl([c("wu-prose")],is);const Uh=d`
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
`;var Yh=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,Ls=(t,r,a,o)=>{for(var e=o>1?void 0:o?Wh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Yh(r,a,e),e};let or=class extends u{constructor(){super(...arguments),this.level=2,this.size="auto",this.truncate=!1}get sizeClass(){return this.size==="auto"?`level-${this.level}`:this.size}render(){const t=`heading size-${this.sizeClass}${this.truncate?" truncate":""}`;switch(this.level){case 1:return n`<h1 part="base" class=${t}><slot></slot></h1>`;case 3:return n`<h3 part="base" class=${t}><slot></slot></h3>`;case 4:return n`<h4 part="base" class=${t}><slot></slot></h4>`;case 5:return n`<h5 part="base" class=${t}><slot></slot></h5>`;case 6:return n`<h6 part="base" class=${t}><slot></slot></h6>`;default:return n`<h2 part="base" class=${t}><slot></slot></h2>`}}};or.styles=Uh;Ls([l({type:Number,reflect:!0})],or.prototype,"level",2);Ls([l({reflect:!0})],or.prototype,"size",2);Ls([l({type:Boolean,reflect:!0})],or.prototype,"truncate",2);or=Ls([c("wu-heading")],or);const Xh=d`
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
`;var Gh=Object.defineProperty,Jh=Object.getOwnPropertyDescriptor,Ir=(t,r,a,o)=>{for(var e=o>1?void 0:o?Jh(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Gh(r,a,e),e};let Re=class extends u{constructor(){super(...arguments),this.variant="default",this.size="base",this.weight="normal",this.italic=!1,this.mono=!1}render(){return n`<span part="base" class="text"><slot></slot></span>`}};Re.styles=Xh;Ir([l({reflect:!0})],Re.prototype,"variant",2);Ir([l({reflect:!0})],Re.prototype,"size",2);Ir([l({reflect:!0})],Re.prototype,"weight",2);Ir([l({type:Boolean,reflect:!0})],Re.prototype,"italic",2);Ir([l({type:Boolean,reflect:!0})],Re.prototype,"mono",2);Re=Ir([c("wu-text")],Re);const Qh=d`
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
`;var Zh=Object.defineProperty,ev=Object.getOwnPropertyDescriptor,Ts=(t,r,a,o)=>{for(var e=o>1?void 0:o?ev(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Zh(r,a,e),e};let ar=class extends u{constructor(){super(...arguments),this.for="",this.required=!1,this.disabled=!1}render(){return n`
      <label part="base" for=${w(this.for||void 0)}>
        <slot></slot>
        ${this.required?n`<span class="required" aria-hidden="true">*</span>`:""}
      </label>
    `}};ar.styles=Qh;Ts([l()],ar.prototype,"for",2);Ts([l({type:Boolean,reflect:!0})],ar.prototype,"required",2);Ts([l({type:Boolean,reflect:!0})],ar.prototype,"disabled",2);ar=Ts([c("wu-label")],ar);const tv=d`
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
`;var rv=Object.defineProperty,ov=Object.getOwnPropertyDescriptor,Nr=(t,r,a,o)=>{for(var e=o>1?void 0:o?ov(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&rv(r,a,e),e};let Fe=class extends u{constructor(){super(...arguments),this.href="",this.external=!1,this.download="",this.variant="default",this.underline="hover"}render(){var t;return n`
      <a
        part="base"
        href=${this.href}
        ?download=${!!this.download}
        target=${w(this.external?"_blank":void 0)}
        rel=${w(this.external?"noopener noreferrer":void 0)}
        aria-label=${w(this.external?`${(t=this.textContent)==null?void 0:t.trim()} (opens in new tab)`:void 0)}
      >
        <slot name="prefix"></slot>
        <slot></slot>
        ${this.external?n`<svg class="external-icon" aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`:""}
      </a>
    `}};Fe.styles=tv;Nr([l()],Fe.prototype,"href",2);Nr([l({type:Boolean,reflect:!0})],Fe.prototype,"external",2);Nr([l()],Fe.prototype,"download",2);Nr([l({reflect:!0})],Fe.prototype,"variant",2);Nr([l({reflect:!0})],Fe.prototype,"underline",2);Fe=Nr([c("wu-link")],Fe);const av=d`
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
`;var sv=Object.defineProperty,iv=Object.getOwnPropertyDescriptor,hl=(t,r,a,o)=>{for(var e=o>1?void 0:o?iv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&sv(r,a,e),e};let ns=class extends u{constructor(){super(...arguments),this.variant="default"}render(){return n`<mark part="base"><slot></slot></mark>`}};ns.styles=av;hl([l({reflect:!0})],ns.prototype,"variant",2);ns=hl([c("wu-mark")],ns);const nv=d`
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
`;var lv=Object.defineProperty,uv=Object.getOwnPropertyDescriptor,Ei=(t,r,a,o)=>{for(var e=o>1?void 0:o?uv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&lv(r,a,e),e};let no=class extends u{constructor(){super(...arguments),this.cite="",this.attribution=""}render(){return n`
      <figure part="base" class="blockquote-figure">
        <blockquote cite=${this.cite}>
          <slot></slot>
        </blockquote>
        ${this.attribution?n`<figcaption part="attribution" class="attribution">— ${this.attribution}</figcaption>`:""}
      </figure>
    `}};no.styles=nv;Ei([l()],no.prototype,"cite",2);Ei([l()],no.prototype,"attribution",2);no=Ei([c("wu-blockquote")],no);const cv=d`
  :host { display: inline; }

  abbr {
    font-style: inherit;
    text-decoration: underline dotted var(--wu-color-text-secondary);
    text-underline-offset: 2px;
    cursor: help;
  }
`;var dv=Object.defineProperty,pv=Object.getOwnPropertyDescriptor,vl=(t,r,a,o)=>{for(var e=o>1?void 0:o?pv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&dv(r,a,e),e};let ls=class extends u{constructor(){super(...arguments),this.title=""}render(){return n`
      <abbr part="base" title=${this.title}>
        <slot></slot>
      </abbr>
    `}};ls.styles=cv;vl([l()],ls.prototype,"title",2);ls=vl([c("wu-abbr")],ls);const hv=d`
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
`;var vv=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,La=(t,r,a,o)=>{for(var e=o>1?void 0:o?wv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&vv(r,a,e),e};let vt=class extends u{constructor(){super(...arguments),this.variant="info",this.dismissible=!1,this.sticky=!1,this.dismissed=!1}handleDismiss(){this.dismissed=!0,this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0}))}render(){return this.dismissed?n``:n`
      <div part="base" class="banner" role="status" aria-live="polite">
        <div class="content">
          <slot></slot>
        </div>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
        ${this.dismissible?n`
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
    `}};vt.styles=hv;La([l({reflect:!0})],vt.prototype,"variant",2);La([l({type:Boolean,reflect:!0})],vt.prototype,"dismissible",2);La([l({type:Boolean,reflect:!0})],vt.prototype,"sticky",2);La([p()],vt.prototype,"dismissed",2);vt=La([c("wu-banner")],vt);const bv=d`
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
`;var gv=Object.defineProperty,fv=Object.getOwnPropertyDescriptor,wl=(t,r,a,o)=>{for(var e=o>1?void 0:o?fv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&gv(r,a,e),e};let us=class extends u{constructor(){super(...arguments),this.variant="info"}render(){return n`
      <div part="base" class="message" role=${this.variant==="error"?"alert":"status"}>
        <span class="icon" aria-hidden="true">${this._icon}</span>
        <span class="text"><slot></slot></span>
      </div>
    `}get _icon(){switch(this.variant){case"success":return"✓";case"warning":return"⚠";case"error":return"✕";default:return"ℹ"}}};us.styles=bv;wl([l({reflect:!0})],us.prototype,"variant",2);us=wl([c("wu-inline-message")],us);const mv=d`
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
`;var yv=Object.defineProperty,xv=Object.getOwnPropertyDescriptor,Si=(t,r,a,o)=>{for(var e=o>1?void 0:o?xv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&yv(r,a,e),e};let lo=class extends u{constructor(){super(...arguments),this.errors=[],this.heading="Please fix the following errors:"}render(){return this.errors.length?n`
      <div part="base" class="summary" role="alert" aria-live="polite">
        <p part="title" class="title">${this.heading}</p>
        <ul part="list" class="list">
          ${m(this.errors,t=>t,t=>n`<li class="item">${t}</li>`)}
        </ul>
      </div>
    `:n``}};lo.styles=mv;Si([l({type:Array})],lo.prototype,"errors",2);Si([l()],lo.prototype,"heading",2);lo=Si([c("wu-validation-summary")],lo);const kv=d`
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
`;var $v=Object.defineProperty,_v=Object.getOwnPropertyDescriptor,qs=(t,r,a,o)=>{for(var e=o>1?void 0:o?_v(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&$v(r,a,e),e};let sr=class extends u{constructor(){super(...arguments),this.steps=[],this.current=0,this.orientation="horizontal"}render(){return n`
      <nav part="base" class="steps orientation-${this.orientation}" aria-label="Progress">
        <ol>
          ${m(this.steps,(t,r)=>r,(t,r)=>{const a=r<this.current?"completed":r===this.current?"current":"upcoming";return n`
                <li class="step ${a}" aria-current=${a==="current"?"step":"false"}>
                  <span class="indicator" aria-hidden="true">
                    ${a==="completed"?"✓":r+1}
                  </span>
                  <span class="label">${t}</span>
                  ${r<this.steps.length-1?n`<span class="connector" aria-hidden="true"></span>`:""}
                </li>
              `})}
        </ol>
      </nav>
    `}};sr.styles=kv;qs([l({type:Array})],sr.prototype,"steps",2);qs([l({type:Number,reflect:!0})],sr.prototype,"current",2);qs([l({reflect:!0})],sr.prototype,"orientation",2);sr=qs([c("wu-progress-steps")],sr);const zv=d`
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
`;var Ov=Object.defineProperty,jv=Object.getOwnPropertyDescriptor,Ta=(t,r,a,o)=>{for(var e=o>1?void 0:o?jv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ov(r,a,e),e};let wt=class extends u{constructor(){super(...arguments),this.variant="thumbs",this.prompt="Was this helpful?",this.selected=null,this.submitted=!1}select(t){this.selected=t,this.submitted=!0,this.dispatchEvent(new CustomEvent("wu-feedback",{bubbles:!0,composed:!0,detail:{value:t}}))}render(){return this.submitted?n`
        <div part="base" class="wrapper submitted" role="status">
          <span class="thanks">Thanks for your feedback!</span>
        </div>
      `:n`
      <div part="base" class="wrapper">
        ${this.prompt?n`<span class="prompt">${this.prompt}</span>`:""}
        <div class="controls" role="group" aria-label="Feedback">
          ${this.variant==="thumbs"?this._thumbs():this._stars()}
        </div>
      </div>
    `}_thumbs(){return n`
      <button class="thumb" aria-label="Helpful" @click=${()=>this.select(1)}>👍</button>
      <button class="thumb" aria-label="Not helpful" @click=${()=>this.select(0)}>👎</button>
    `}_stars(){return n`
      ${[1,2,3,4,5].map(t=>n`
          <button
            class="star ${(this.selected??0)>=t?"filled":""}"
            aria-label="${t} star${t!==1?"s":""}"
            @click=${()=>this.select(t)}
          >★</button>
        `)}
    `}};wt.styles=zv;Ta([l({reflect:!0})],wt.prototype,"variant",2);Ta([l()],wt.prototype,"prompt",2);Ta([p()],wt.prototype,"selected",2);Ta([p()],wt.prototype,"submitted",2);wt=Ta([c("wu-feedback")],wt);const Pv=d`
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
`;var Cv=Object.defineProperty,Dv=Object.getOwnPropertyDescriptor,Lr=(t,r,a,o)=>{for(var e=o>1?void 0:o?Dv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Cv(r,a,e),e};let He=class extends u{constructor(){super(...arguments),this.question="How likely are you to recommend us to a colleague?",this.withComment=!1,this.score=null,this.comment="",this.submitted=!1}handleSubmit(t){t.preventDefault(),this.score!==null&&(this.submitted=!0,this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{score:this.score,comment:this.comment}})))}render(){return this.submitted?n`
        <div part="base" class="survey submitted" role="status">
          <p class="thanks">Thank you for your feedback!</p>
        </div>
      `:n`
      <form part="base" class="survey" @submit=${this.handleSubmit} novalidate>
        <p class="question">${this.question}</p>
        <div class="scale" role="group" aria-label="Score 0 to 10">
          ${Array.from({length:11},(t,r)=>n`
            <button
              type="button"
              class="score-btn ${this.score===r?"selected":""}"
              aria-label="${r} out of 10"
              aria-pressed=${this.score===r}
              @click=${()=>{this.score=r}}
            >${r}</button>
          `)}
        </div>
        <div class="scale-labels">
          <span>Not at all likely</span>
          <span>Extremely likely</span>
        </div>
        ${this.withComment?n`
              <textarea
                class="comment"
                placeholder="Any additional comments? (optional)"
                rows="3"
                .value=${this.comment}
                @input=${t=>{this.comment=t.target.value}}
              ></textarea>
            `:""}
        <button type="submit" class="submit-btn" ?disabled=${this.score===null}>Submit</button>
      </form>
    `}};He.styles=Pv;Lr([l()],He.prototype,"question",2);Lr([l({type:Boolean,reflect:!0,attribute:"with-comment"})],He.prototype,"withComment",2);Lr([p()],He.prototype,"score",2);Lr([p()],He.prototype,"comment",2);Lr([p()],He.prototype,"submitted",2);He=Lr([c("wu-survey")],He);const Ev=d`
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
`;var Sv=Object.defineProperty,Mv=Object.getOwnPropertyDescriptor,Rs=(t,r,a,o)=>{for(var e=o>1?void 0:o?Mv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Sv(r,a,e),e};let ir=class extends u{constructor(){super(...arguments),this.position="bottom-right",this.label="Help",this.open=!1}handleClick(){this.open=!this.open,this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0,detail:{open:this.open}}))}render(){return n`
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
    `}};ir.styles=Ev;Rs([l({reflect:!0})],ir.prototype,"position",2);Rs([l()],ir.prototype,"label",2);Rs([p()],ir.prototype,"open",2);ir=Rs([c("wu-support-bubble")],ir);const Bv=d`
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
`;var Av=Object.defineProperty,Iv=Object.getOwnPropertyDescriptor,Fs=(t,r,a,o)=>{for(var e=o>1?void 0:o?Iv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Av(r,a,e),e};let nr=class extends u{constructor(){super(...arguments),this.title="Getting Started",this.items=[],this.dismissed=!1}handleCheck(t){this.items=this.items.map(r=>r.id===t?{...r,completed:!0}:r),this.dispatchEvent(new CustomEvent("wu-item-complete",{bubbles:!0,composed:!0,detail:{id:t}}))}handleDismiss(){this.dismissed=!0,this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0}))}get completedCount(){return this.items.filter(t=>t.completed).length}render(){if(this.dismissed)return n``;const t=this.items.length,r=this.completedCount,a=t>0?Math.round(r/t*100):0;return n`
      <div part="base" class="checklist">
        <div class="header">
          <span class="title">${this.title}</span>
          <button class="dismiss-btn" aria-label="Dismiss checklist" @click=${this.handleDismiss}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="progress-bar-wrap" aria-label="${r} of ${t} steps completed">
          <div class="progress-bar" style="width:${a}%"></div>
        </div>
        <p class="progress-text">${r} / ${t} completed</p>
        <ul class="items" role="list">
          ${m(this.items,o=>o.id,o=>n`
              <li class="item ${o.completed?"completed":""}">
                <button
                  class="check-btn"
                  aria-label="Mark '${o.label}' as complete"
                  ?disabled=${o.completed}
                  @click=${()=>this.handleCheck(o.id)}
                >
                  ${o.completed?n`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`:n`<span class="empty-check" aria-hidden="true"></span>`}
                </button>
                <span class="item-label">${o.label}</span>
              </li>
            `)}
        </ul>
      </div>
    `}};nr.styles=Bv;Fs([l()],nr.prototype,"title",2);Fs([l({type:Array})],nr.prototype,"items",2);Fs([p()],nr.prototype,"dismissed",2);nr=Fs([c("wu-onboarding-checklist")],nr);const Nv=d`
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
`;var Lv=Object.defineProperty,Tv=Object.getOwnPropertyDescriptor,be=(t,r,a,o)=>{for(var e=o>1?void 0:o?Tv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Lv(r,a,e),e};let q=class extends u{constructor(){super(...arguments),this.heading="Sign in",this.showRemember=!1,this.showForgot=!0,this.loading=!1,this.error="",this.email="",this.password="",this.remember=!1,this.showPw=!1}handleSubmit(t){t.preventDefault(),!(!this.email||!this.password)&&this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{email:this.email,password:this.password,remember:this.remember}}))}render(){return n`
      <form class="form" @submit=${this.handleSubmit} novalidate>
        <h2 class="heading">${this.heading}</h2>
        ${this.error?n`<p class="error-msg" role="alert">${this.error}</p>`:""}
        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            autocomplete="email"
            required
            placeholder="you@example.com"
            .value=${this.email}
            @input=${t=>{this.email=t.target.value}}
          />
        </div>
        <div class="field">
          <div class="label-row">
            <label for="password">Password</label>
            ${this.showForgot?n`<button type="button" class="link-btn" @click=${()=>this.dispatchEvent(new CustomEvent("wu-forgot-password",{bubbles:!0,composed:!0}))}>Forgot password?</button>`:""}
          </div>
          <div class="pw-wrap">
            <input
              id="password"
              type=${this.showPw?"text":"password"}
              autocomplete="current-password"
              required
              placeholder="••••••••"
              .value=${this.password}
              @input=${t=>{this.password=t.target.value}}
            />
            <button type="button" class="show-pw" aria-label=${this.showPw?"Hide password":"Show password"} @click=${()=>{this.showPw=!this.showPw}}>
              ${this.showPw?"Hide":"Show"}
            </button>
          </div>
        </div>
        ${this.showRemember?n`
              <label class="remember">
                <input type="checkbox" ?checked=${this.remember} @change=${t=>{this.remember=t.target.checked}} />
                Remember me
              </label>
            `:""}
        <button type="submit" class="submit-btn" ?disabled=${this.loading}>
          ${this.loading?n`<span class="spinner"></span>`:""}
          ${this.heading}
        </button>
      </form>
    `}};q.styles=Nv;be([l()],q.prototype,"heading",2);be([l({type:Boolean,reflect:!0,attribute:"show-remember"})],q.prototype,"showRemember",2);be([l({type:Boolean,reflect:!0,attribute:"show-forgot"})],q.prototype,"showForgot",2);be([l({type:Boolean,reflect:!0})],q.prototype,"loading",2);be([l()],q.prototype,"error",2);be([p()],q.prototype,"email",2);be([p()],q.prototype,"password",2);be([p()],q.prototype,"remember",2);be([p()],q.prototype,"showPw",2);q=be([c("wu-login-form")],q);const qv=d`
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
`;var Rv=Object.defineProperty,Fv=Object.getOwnPropertyDescriptor,ge=(t,r,a,o)=>{for(var e=o>1?void 0:o?Fv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Rv(r,a,e),e};let R=class extends u{constructor(){super(...arguments),this.heading="Create account",this.loading=!1,this.error="",this.confirmPassword=!0,this.name="",this.email="",this.password="",this.confirm="",this.mismatch=!1}handleSubmit(t){if(t.preventDefault(),this.confirmPassword&&this.password!==this.confirm){this.mismatch=!0;return}this.mismatch=!1,!(!this.name||!this.email||!this.password)&&this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{name:this.name,email:this.email,password:this.password}}))}render(){return n`
      <form class="form" @submit=${this.handleSubmit} novalidate>
        <h2 class="heading">${this.heading}</h2>
        ${this.error?n`<p class="error-msg" role="alert">${this.error}</p>`:""}
        <div class="field">
          <label for="name">Full name</label>
          <input id="name" type="text" autocomplete="name" required placeholder="Jane Smith"
            .value=${this.name}
            @input=${t=>{this.name=t.target.value}} />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" type="email" autocomplete="email" required placeholder="you@example.com"
            .value=${this.email}
            @input=${t=>{this.email=t.target.value}} />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" type="password" autocomplete="new-password" required placeholder="8+ characters"
            .value=${this.password}
            @input=${t=>{this.password=t.target.value}} />
        </div>
        ${this.confirmPassword?n`
              <div class="field">
                <label for="confirm">Confirm password</label>
                <input id="confirm" type="password" autocomplete="new-password" required placeholder="Repeat password"
                  .value=${this.confirm}
                  @input=${t=>{this.confirm=t.target.value,this.mismatch=!1}} />
                ${this.mismatch?n`<span class="field-error">Passwords do not match</span>`:""}
              </div>
            `:""}
        <button type="submit" class="submit-btn" ?disabled=${this.loading}>
          ${this.loading?n`<span class="spinner"></span>`:""}
          ${this.heading}
        </button>
      </form>
    `}};R.styles=qv;ge([l()],R.prototype,"heading",2);ge([l({type:Boolean,reflect:!0})],R.prototype,"loading",2);ge([l()],R.prototype,"error",2);ge([l({type:Boolean,reflect:!0,attribute:"confirm-password"})],R.prototype,"confirmPassword",2);ge([p()],R.prototype,"name",2);ge([p()],R.prototype,"email",2);ge([p()],R.prototype,"password",2);ge([p()],R.prototype,"confirm",2);ge([p()],R.prototype,"mismatch",2);R=ge([c("wu-signup-form")],R);const Hv=d`
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
`;var Kv=Object.defineProperty,Vv=Object.getOwnPropertyDescriptor,qa=(t,r,a,o)=>{for(var e=o>1?void 0:o?Vv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Kv(r,a,e),e};let bt=class extends u{constructor(){super(...arguments),this.digits=6,this.heading="Enter verification code",this.hint="",this.values=[]}connectedCallback(){super.connectedCallback(),this.values=Array(this.digits).fill("")}handleInput(t,r){var a;const o=t.target.value.replace(/\D/g,"").slice(-1),e=[...this.values];e[r]=o,this.values=e,o&&r<this.digits-1&&((a=this.shadowRoot.querySelectorAll(".digit")[r+1])==null||a.focus()),e.every(s=>s!=="")&&this.dispatchEvent(new CustomEvent("wu-complete",{bubbles:!0,composed:!0,detail:{code:e.join("")}}))}handleKeydown(t,r){var a;t.key==="Backspace"&&!this.values[r]&&r>0&&((a=this.shadowRoot.querySelectorAll(".digit")[r-1])==null||a.focus())}render(){return n`
      <div class="otp">
        ${this.heading?n`<p class="heading">${this.heading}</p>`:""}
        ${this.hint?n`<p class="hint">${this.hint}</p>`:""}
        <div class="digits" role="group" aria-label="Verification code">
          ${m(Array.from({length:this.digits},(t,r)=>r),t=>t,t=>n`
              <input
                class="digit"
                type="text"
                inputmode="numeric"
                maxlength="1"
                autocomplete="one-time-code"
                aria-label="Digit ${t+1}"
                .value=${this.values[t]??""}
                @input=${r=>this.handleInput(r,t)}
                @keydown=${r=>this.handleKeydown(r,t)}
              />
            `)}
        </div>
      </div>
    `}};bt.styles=Hv;qa([l({type:Number})],bt.prototype,"digits",2);qa([l()],bt.prototype,"heading",2);qa([l()],bt.prototype,"hint",2);qa([p()],bt.prototype,"values",2);bt=qa([c("wu-otp-verify")],bt);const Uv=d`
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
`;var Yv=Object.defineProperty,Wv=Object.getOwnPropertyDescriptor,Mi=(t,r,a,o)=>{for(var e=o>1?void 0:o?Wv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Yv(r,a,e),e};let uo=class extends u{constructor(){super(...arguments),this.password="",this.score=null,this.labels=["","Weak","Fair","Good","Strong"],this.variants=["","danger","warning","info","success"]}computeScore(t){if(!t)return 0;let r=0;return t.length>=8&&r++,/[A-Z]/.test(t)&&r++,/[0-9]/.test(t)&&r++,/[^a-zA-Z0-9]/.test(t)&&r++,r}render(){const t=this.score??this.computeScore(this.password),r=this.labels[t]??"",a=this.variants[t]??"";return n`
      <div class="strength" aria-label="Password strength: ${r||"Enter a password"}">
        ${[1,2,3,4].map(o=>n`<div class="bar ${o<=t?a:"empty"}"></div>`)}
        ${r?n`<span class="label ${a}">${r}</span>`:""}
      </div>
    `}};uo.styles=Uv;Mi([l()],uo.prototype,"password",2);Mi([l({type:Number})],uo.prototype,"score",2);uo=Mi([c("wu-password-strength")],uo);const Xv=d`
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
`;var Gv=Object.defineProperty,Jv=Object.getOwnPropertyDescriptor,bl=(t,r,a,o)=>{for(var e=o>1?void 0:o?Jv(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Gv(r,a,e),e};const Qv=[{id:"google",label:"Continue with Google"},{id:"github",label:"Continue with GitHub"},{id:"microsoft",label:"Continue with Microsoft"}];let cs=class extends u{constructor(){super(...arguments),this.providers=Qv}render(){return n`
      <div class="providers">
        ${m(this.providers,t=>t.id,t=>n`
            <button
              class="provider-btn"
              @click=${()=>this.dispatchEvent(new CustomEvent("wu-provider-click",{bubbles:!0,composed:!0,detail:{provider:t.id}}))}
            >
              <span class="provider-icon" aria-hidden="true">
                ${t.id==="google"?n`
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                `:t.id==="github"?n`
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                `:n`<span style="font-size:12px;font-weight:700">${t.id.slice(0,2).toUpperCase()}</span>`}
              </span>
              <span>${t.label}</span>
            </button>
          `)}
      </div>
    `}};cs.styles=Xv;bl([l({type:Array})],cs.prototype,"providers",2);cs=bl([c("wu-social-login")],cs);const Zv=d`
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
`;var ew=Object.defineProperty,tw=Object.getOwnPropertyDescriptor,Ra=(t,r,a,o)=>{for(var e=o>1?void 0:o?tw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ew(r,a,e),e};let gt=class extends u{constructor(){super(...arguments),this.value="",this.label="API Key",this.revealed=!1,this.copied=!1}async handleCopy(){try{await navigator.clipboard.writeText(this.value),this.copied=!0,this.dispatchEvent(new CustomEvent("wu-copy",{bubbles:!0,composed:!0})),setTimeout(()=>{this.copied=!1},2e3)}catch{}}get displayValue(){if(!this.value)return"—";if(this.revealed)return this.value;const t=this.value.slice(-4);return"•".repeat(Math.max(0,this.value.length-4))+t}render(){return n`
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
              ${this.revealed?n`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:n`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
            </button>
            <button
              class="icon-btn ${this.copied?"copied":""}"
              aria-label="Copy to clipboard"
              title=${this.copied?"Copied!":"Copy"}
              @click=${this.handleCopy}
            >
              ${this.copied?n`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`:n`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`}
            </button>
          </div>
        </div>
      </div>
    `}};gt.styles=Zv;Ra([l()],gt.prototype,"value",2);Ra([l()],gt.prototype,"label",2);Ra([p()],gt.prototype,"revealed",2);Ra([p()],gt.prototype,"copied",2);gt=Ra([c("wu-api-key-display")],gt);const rw=d`
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
`;var ow=Object.defineProperty,aw=Object.getOwnPropertyDescriptor,Hs=(t,r,a,o)=>{for(var e=o>1?void 0:o?aw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ow(r,a,e),e};let lr=class extends u{constructor(){super(...arguments),this.secondsRemaining=120,this.visible=!1,this.remaining=120,this._interval=null}updated(t){(t.has("visible")||t.has("secondsRemaining"))&&(this.remaining=this.secondsRemaining,this.visible?this._startCountdown():this._stopCountdown())}disconnectedCallback(){super.disconnectedCallback(),this._stopCountdown()}_startCountdown(){this._stopCountdown(),this._interval=setInterval(()=>{this.remaining>0?this.remaining--:(this._stopCountdown(),this.dispatchEvent(new CustomEvent("wu-logout",{bubbles:!0,composed:!0})))},1e3)}_stopCountdown(){this._interval&&(clearInterval(this._interval),this._interval=null)}handleExtend(){this._stopCountdown(),this.visible=!1,this.dispatchEvent(new CustomEvent("wu-extend",{bubbles:!0,composed:!0}))}handleLogout(){this._stopCountdown(),this.dispatchEvent(new CustomEvent("wu-logout",{bubbles:!0,composed:!0}))}get formattedTime(){const t=Math.floor(this.remaining/60),r=this.remaining%60;return`${t}:${String(r).padStart(2,"0")}`}render(){return this.visible?n`
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
    `:n``}};lr.styles=rw;Hs([l({type:Number,attribute:"seconds-remaining"})],lr.prototype,"secondsRemaining",2);Hs([l({type:Boolean,reflect:!0})],lr.prototype,"visible",2);Hs([p()],lr.prototype,"remaining",2);lr=Hs([c("wu-session-timeout")],lr);const sw=d`
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
`;var iw=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,Bi=(t,r,a,o)=>{for(var e=o>1?void 0:o?nw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&iw(r,a,e),e};let co=class extends u{constructor(){super(...arguments),this.provider="CAPTCHA",this.verified=!1}handleChange(t){this.verified=t.target.checked,this.verified&&this.dispatchEvent(new CustomEvent("wu-verified",{bubbles:!0,composed:!0}))}render(){return n`
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
    `}};co.styles=sw;Bi([l()],co.prototype,"provider",2);Bi([l({type:Boolean,reflect:!0})],co.prototype,"verified",2);co=Bi([c("wu-captcha")],co);const lw=d`
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
`;var uw=Object.defineProperty,cw=Object.getOwnPropertyDescriptor,Bt=(t,r,a,o)=>{for(var e=o>1?void 0:o?cw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&uw(r,a,e),e};let ze=class extends u{constructor(){super(...arguments),this.amount=0,this.originalAmount=null,this.currency="USD",this.locale="en-US",this.badge="",this.size="md"}format(t){return new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency}).format(t)}render(){const t=this.originalAmount!==null&&this.originalAmount>this.amount;return n`
      <span class="price" aria-label="${this.format(this.amount)}${t?`, was ${this.format(this.originalAmount)}`:""}">
        ${this.badge?n`<span class="badge">${this.badge}</span>`:""}
        <span class="current">${this.format(this.amount)}</span>
        ${t?n`<span class="original" aria-hidden="true">${this.format(this.originalAmount)}</span>`:""}
      </span>
    `}};ze.styles=lw;Bt([l({type:Number})],ze.prototype,"amount",2);Bt([l({type:Number,attribute:"original-amount"})],ze.prototype,"originalAmount",2);Bt([l()],ze.prototype,"currency",2);Bt([l()],ze.prototype,"locale",2);Bt([l()],ze.prototype,"badge",2);Bt([l({reflect:!0})],ze.prototype,"size",2);ze=Bt([c("wu-price")],ze);const dw=d`
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
`;var pw=Object.defineProperty,hw=Object.getOwnPropertyDescriptor,Fa=(t,r,a,o)=>{for(var e=o>1?void 0:o?hw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&pw(r,a,e),e};let ft=class extends u{constructor(){super(...arguments),this.value=1,this.min=1,this.max=99,this.disabled=!1}emit(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}decrement(){this.value>this.min&&(this.value--,this.emit())}increment(){this.value<this.max&&(this.value++,this.emit())}render(){return n`
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
          @change=${t=>{const r=parseInt(t.target.value,10);!isNaN(r)&&r>=this.min&&r<=this.max&&(this.value=r,this.emit())}}
        />
        <button
          class="btn"
          aria-label="Increase quantity"
          ?disabled=${this.disabled||this.value>=this.max}
          @click=${this.increment}
        >+</button>
      </div>
    `}};ft.styles=dw;Fa([l({type:Number})],ft.prototype,"value",2);Fa([l({type:Number})],ft.prototype,"min",2);Fa([l({type:Number})],ft.prototype,"max",2);Fa([l({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);ft=Fa([c("wu-quantity-picker")],ft);const vw=d`
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
`;var ww=Object.defineProperty,bw=Object.getOwnPropertyDescriptor,Ai=(t,r,a,o)=>{for(var e=o>1?void 0:o?bw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ww(r,a,e),e};let po=class extends u{constructor(){super(...arguments),this.count=0,this.label="Shopping cart"}render(){return n`
      <button
        class="cart-btn"
        aria-label="${this.label}${this.count>0?`, ${this.count} items`:""}"
        @click=${()=>this.dispatchEvent(new CustomEvent("wu-click",{bubbles:!0,composed:!0}))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        ${this.count>0?n`<span class="badge" aria-hidden="true">${this.count>99?"99+":this.count}</span>`:""}
      </button>
    `}};po.styles=vw;Ai([l({type:Number})],po.prototype,"count",2);Ai([l()],po.prototype,"label",2);po=Ai([c("wu-cart-icon")],po);const gw=d`
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
`;var fw=Object.defineProperty,mw=Object.getOwnPropertyDescriptor,tt=(t,r,a,o)=>{for(var e=o>1?void 0:o?mw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&fw(r,a,e),e};let de=class extends u{constructor(){super(...arguments),this.productId="",this.name="",this.image="",this.price="",this.originalPrice="",this.badge="",this.soldOut=!1}render(){return n`
      <article class="card" aria-label="${this.name}">
        <div class="image-wrap">
          ${this.image?n`<img src="${this.image}" alt="${this.name}" class="image" loading="lazy" />`:n`<div class="image-placeholder" aria-hidden="true"></div>`}
          ${this.badge?n`<span class="badge">${this.badge}</span>`:""}
          ${this.soldOut?n`<span class="sold-out-overlay">Sold out</span>`:""}
        </div>
        <div class="body">
          <h3 class="name">${this.name}</h3>
          <div class="prices">
            <span class="price">${this.price}</span>
            ${this.originalPrice?n`<span class="original-price">${this.originalPrice}</span>`:""}
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
    `}};de.styles=gw;tt([l()],de.prototype,"productId",2);tt([l()],de.prototype,"name",2);tt([l()],de.prototype,"image",2);tt([l()],de.prototype,"price",2);tt([l({attribute:"original-price"})],de.prototype,"originalPrice",2);tt([l()],de.prototype,"badge",2);tt([l({type:Boolean,reflect:!0,attribute:"sold-out"})],de.prototype,"soldOut",2);de=tt([c("wu-product-card")],de);const yw=d`
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
`;var xw=Object.defineProperty,kw=Object.getOwnPropertyDescriptor,Ks=(t,r,a,o)=>{for(var e=o>1?void 0:o?kw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&xw(r,a,e),e};let ur=class extends u{constructor(){super(...arguments),this.images=[],this.alt="Product image",this.active=0}render(){const t=this.images[this.active];return n`
      <div class="gallery">
        <div class="main-image">
          ${t?n`<img src="${t}" alt="${this.alt}" class="main-img" loading="lazy" />`:n`<div class="placeholder" aria-label="${this.alt}"></div>`}
        </div>
        ${this.images.length>1?n`
              <div class="thumbnails" role="list">
                ${this.images.map((r,a)=>n`
                    <button
                      class="thumb ${a===this.active?"active":""}"
                      role="listitem"
                      aria-label="View image ${a+1}"
                      aria-pressed=${a===this.active}
                      @click=${()=>{this.active=a}}
                    >
                      <img src="${r}" alt="" loading="lazy" />
                    </button>
                  `)}
              </div>
            `:""}
      </div>
    `}};ur.styles=yw;Ks([l({type:Array})],ur.prototype,"images",2);Ks([l()],ur.prototype,"alt",2);Ks([p()],ur.prototype,"active",2);ur=Ks([c("wu-product-gallery")],ur);const $w=d`
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
`;var _w=Object.defineProperty,zw=Object.getOwnPropertyDescriptor,At=(t,r,a,o)=>{for(var e=o>1?void 0:o?zw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&_w(r,a,e),e};let Oe=class extends u{constructor(){super(...arguments),this.itemId="",this.name="",this.image="",this.price="",this.variant="",this.quantity=1}render(){return n`
      <div class="line-item">
        <div class="image-wrap">
          ${this.image?n`<img src="${this.image}" alt="${this.name}" class="img" loading="lazy" />`:n`<div class="img-placeholder"></div>`}
        </div>
        <div class="details">
          <span class="name">${this.name}</span>
          ${this.variant?n`<span class="variant">${this.variant}</span>`:""}
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
    `}_emitQty(){this.dispatchEvent(new CustomEvent("wu-quantity-change",{bubbles:!0,composed:!0,detail:{id:this.itemId,quantity:this.quantity}}))}};Oe.styles=$w;At([l({attribute:"item-id"})],Oe.prototype,"itemId",2);At([l()],Oe.prototype,"name",2);At([l()],Oe.prototype,"image",2);At([l()],Oe.prototype,"price",2);At([l()],Oe.prototype,"variant",2);At([l({type:Number})],Oe.prototype,"quantity",2);Oe=At([c("wu-cart-line-item")],Oe);const Ow=d`
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
`;var jw=Object.defineProperty,Pw=Object.getOwnPropertyDescriptor,Ii=(t,r,a,o)=>{for(var e=o>1?void 0:o?Pw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&jw(r,a,e),e};let ho=class extends u{constructor(){super(...arguments),this.steps=["Cart","Shipping","Payment","Review"],this.current=0}render(){return n`
      <nav aria-label="Checkout steps" class="steps">
        ${m(this.steps,t=>t,(t,r)=>{const a=r<this.current?"done":r===this.current?"current":"upcoming";return n`
              ${r>0?n`<div class="connector ${a!=="upcoming"?"filled":""}"></div>`:""}
              <div class="step ${a}" aria-current=${a==="current"?"step":"false"}>
                <span class="step-num" aria-hidden="true">
                  ${a==="done"?n`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:r+1}
                </span>
                <span class="step-label">${t}</span>
              </div>
            `})}
      </nav>
    `}};ho.styles=Ow;Ii([l({type:Array})],ho.prototype,"steps",2);Ii([l({type:Number})],ho.prototype,"current",2);ho=Ii([c("wu-checkout-steps")],ho);const Cw=d`
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
`;var Dw=Object.defineProperty,Ew=Object.getOwnPropertyDescriptor,rt=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ew(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Dw(r,a,e),e};let pe=class extends u{constructor(){super(...arguments),this.heading="Payment details",this.loading=!1,this.error="",this.cardNumber="",this.expiry="",this.cvc="",this.name=""}formatCard(t){return t.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim()}formatExpiry(t){const r=t.replace(/\D/g,"").slice(0,4);return r.length>=2?`${r.slice(0,2)} / ${r.slice(2)}`:r}handleSubmit(t){t.preventDefault();const r=this.cardNumber.replace(/\s/g,"");r.length<16||this.expiry.length<7||this.cvc.length<3||!this.name||this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{last4:r.slice(-4),expiry:this.expiry,name:this.name}}))}render(){return n`
      <form class="form" @submit=${this.handleSubmit} novalidate>
        <h2 class="heading">${this.heading}</h2>
        ${this.error?n`<p class="error-msg" role="alert">${this.error}</p>`:""}
        <div class="field">
          <label for="card-name">Cardholder name</label>
          <input id="card-name" type="text" autocomplete="cc-name" placeholder="Jane Smith"
            .value=${this.name}
            @input=${t=>{this.name=t.target.value}} />
        </div>
        <div class="field">
          <label for="card-number">Card number</label>
          <input id="card-number" type="text" inputmode="numeric" autocomplete="cc-number" placeholder="1234 5678 9012 3456"
            .value=${this.cardNumber}
            @input=${t=>{this.cardNumber=this.formatCard(t.target.value)}} />
        </div>
        <div class="field-row">
          <div class="field">
            <label for="expiry">Expiry</label>
            <input id="expiry" type="text" inputmode="numeric" autocomplete="cc-exp" placeholder="MM / YY"
              .value=${this.expiry}
              @input=${t=>{this.expiry=this.formatExpiry(t.target.value)}} />
          </div>
          <div class="field">
            <label for="cvc">CVC</label>
            <input id="cvc" type="text" inputmode="numeric" autocomplete="cc-csc" placeholder="123" maxlength="4"
              .value=${this.cvc}
              @input=${t=>{this.cvc=t.target.value.replace(/\D/g,"").slice(0,4)}} />
          </div>
        </div>
        <button type="submit" class="submit-btn" ?disabled=${this.loading}>
          ${this.loading?n`<span class="spinner"></span>`:""}
          Pay now
        </button>
      </form>
    `}};pe.styles=Cw;rt([l()],pe.prototype,"heading",2);rt([l({type:Boolean,reflect:!0})],pe.prototype,"loading",2);rt([l()],pe.prototype,"error",2);rt([p()],pe.prototype,"cardNumber",2);rt([p()],pe.prototype,"expiry",2);rt([p()],pe.prototype,"cvc",2);rt([p()],pe.prototype,"name",2);pe=rt([c("wu-payment-form")],pe);const Sw=d`
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
`;var Mw=Object.defineProperty,Bw=Object.getOwnPropertyDescriptor,Vs=(t,r,a,o)=>{for(var e=o>1?void 0:o?Bw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Mw(r,a,e),e};let cr=class extends u{constructor(){super(...arguments),this.orderId="",this.status="pending",this.steps=[{label:"Order placed",date:"",done:!1},{label:"Processing",date:"",done:!1},{label:"Shipped",date:"",done:!1},{label:"Delivered",date:"",done:!1}]}statusLabel(){return{pending:"Pending",processing:"Processing",shipped:"Shipped",delivered:"Delivered",cancelled:"Cancelled"}[this.status]??this.status}render(){return n`
      <div class="wrapper">
        <div class="header">
          ${this.orderId?n`<span class="order-id">Order #${this.orderId}</span>`:""}
          <span class="status-badge status-${this.status}">${this.statusLabel()}</span>
        </div>
        <ol class="timeline" aria-label="Order timeline">
          ${m(this.steps,t=>t.label,t=>n`
              <li class="step ${t.done?"done":""}">
                <div class="circle" aria-hidden="true">${t.done?n`<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`:""}</div>
                <div class="step-content">
                  <span class="step-label">${t.label}</span>
                  ${t.date?n`<span class="step-date">${t.date}</span>`:""}
                </div>
              </li>
            `)}
        </ol>
      </div>
    `}};cr.styles=Sw;Vs([l({attribute:"order-id"})],cr.prototype,"orderId",2);Vs([l({reflect:!0})],cr.prototype,"status",2);Vs([l({type:Array})],cr.prototype,"steps",2);cr=Vs([c("wu-order-status")],cr);const Aw=d`
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
`;var Iw=Object.defineProperty,Nw=Object.getOwnPropertyDescriptor,Ni=(t,r,a,o)=>{for(var e=o>1?void 0:o?Nw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Iw(r,a,e),e};let vo=class extends u{constructor(){super(...arguments),this.active=!1,this.count=0}handleClick(){this.active=!this.active,this.dispatchEvent(new CustomEvent("wu-toggle",{bubbles:!0,composed:!0,detail:{active:this.active}}))}render(){return n`
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
        ${this.count>0?n`<span class="count">${this.count}</span>`:""}
      </button>
    `}};vo.styles=Aw;Ni([l({type:Boolean,reflect:!0})],vo.prototype,"active",2);Ni([l({type:Number})],vo.prototype,"count",2);vo=Ni([c("wu-wishlist-button")],vo);const Lw=d`
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
`;var Tw=Object.defineProperty,qw=Object.getOwnPropertyDescriptor,Li=(t,r,a,o)=>{for(var e=o>1?void 0:o?qw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Tw(r,a,e),e};let wo=class extends u{constructor(){super(...arguments),this.sidebarCollapsed=!1,this.noSidebar=!1}render(){return n`
      <div class="shell ${this.sidebarCollapsed?"collapsed":""} ${this.noSidebar?"no-sidebar":""}">
        ${this.noSidebar?"":n`<aside class="sidebar"><slot name="sidebar"></slot></aside>`}
        <div class="body">
          <header class="header"><slot name="header"></slot></header>
          <main class="main"><slot></slot></main>
        </div>
      </div>
    `}};wo.styles=Lw;Li([l({type:Boolean,reflect:!0,attribute:"sidebar-collapsed"})],wo.prototype,"sidebarCollapsed",2);Li([l({type:Boolean,attribute:"no-sidebar"})],wo.prototype,"noSidebar",2);wo=Li([c("wu-app-shell")],wo);const Rw=d`
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
`;var Fw=Object.defineProperty,Hw=Object.getOwnPropertyDescriptor,gl=(t,r,a,o)=>{for(var e=o>1?void 0:o?Hw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Fw(r,a,e),e};let ds=class extends u{constructor(){super(...arguments),this.heading=""}render(){return n`
      <header class="header" role="banner">
        <div class="logo"><slot name="logo">${this.heading?n`<span class="wordmark">${this.heading}</span>`:""}</slot></div>
        <nav class="nav" aria-label="Primary"><slot name="nav"></slot></nav>
        <div class="actions"><slot name="actions"></slot></div>
      </header>
    `}};ds.styles=Rw;gl([l()],ds.prototype,"heading",2);ds=gl([c("wu-app-header")],ds);const Kw=d`
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
`;var Vw=Object.defineProperty,Uw=Object.getOwnPropertyDescriptor,Ha=(t,r,a,o)=>{for(var e=o>1?void 0:o?Uw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Vw(r,a,e),e};let mt=class extends u{constructor(){super(...arguments),this.placeholder="Search or type a command…",this.shortcut="⌘K",this.readonlyTrigger=!1,this.query=""}handleInput(t){this.query=t.target.value,this.dispatchEvent(new CustomEvent("wu-search",{bubbles:!0,composed:!0,detail:{query:this.query}}))}handleClick(){this.dispatchEvent(new CustomEvent("wu-open",{bubbles:!0,composed:!0}))}render(){return n`
      <div class="bar" role="search" @click=${this.readonlyTrigger?this.handleClick:void 0}>
        <svg class="icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
          <circle cx="9" cy="9" r="6" stroke-width="1.5"/>
          <path d="M15 15l-3-3" stroke-width="2" stroke-linecap="round"/>
        </svg>
        ${this.readonlyTrigger?n`<span class="placeholder">${this.placeholder}</span>`:n`<input type="search" class="input" placeholder=${this.placeholder} .value=${this.query} @input=${this.handleInput} aria-label="Search" />`}
        ${this.shortcut?n`<kbd class="shortcut">${this.shortcut}</kbd>`:""}
      </div>
    `}};mt.styles=Kw;Ha([l()],mt.prototype,"placeholder",2);Ha([l()],mt.prototype,"shortcut",2);Ha([l({type:Boolean,attribute:"readonly-trigger"})],mt.prototype,"readonlyTrigger",2);Ha([p()],mt.prototype,"query",2);mt=Ha([c("wu-command-bar")],mt);const Yw=d`
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
`;var Ww=Object.defineProperty,Xw=Object.getOwnPropertyDescriptor,Us=(t,r,a,o)=>{for(var e=o>1?void 0:o?Xw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ww(r,a,e),e};let dr=class extends u{constructor(){super(...arguments),this.items=[],this.heading="Activity",this.showHeading=!1}initials(t){return t.split(" ").map(r=>r[0]).join("").slice(0,2).toUpperCase()}render(){return n`
      <div class="feed">
        ${this.showHeading?n`<h3 class="heading">${this.heading}</h3>`:""}
        ${this.items.length===0?n`<p class="empty">No activity yet.</p>`:n`
            <ul class="list" aria-label="${this.heading}">
              ${m(this.items,t=>t.id,t=>n`
                  <li class="item">
                    <div class="avatar-wrap">
                      ${t.avatarUrl?n`<img src="${t.avatarUrl}" alt="${t.actor}" class="avatar" />`:n`<span class="avatar initials">${this.initials(t.actor)}</span>`}
                      <span class="connector" aria-hidden="true"></span>
                    </div>
                    <div class="content">
                      <p class="text"><strong>${t.actor}</strong> ${t.action}${t.target?n` <em>${t.target}</em>`:""}</p>
                      <time class="time">${t.time}</time>
                    </div>
                  </li>
                `)}
            </ul>
          `}
      </div>
    `}};dr.styles=Yw;Us([l({type:Array})],dr.prototype,"items",2);Us([l()],dr.prototype,"heading",2);Us([l({type:Boolean,attribute:"show-heading"})],dr.prototype,"showHeading",2);dr=Us([c("wu-activity-feed")],dr);const Gw=d`
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
`;var Jw=Object.defineProperty,Qw=Object.getOwnPropertyDescriptor,Tr=(t,r,a,o)=>{for(var e=o>1?void 0:o?Qw(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Jw(r,a,e),e};let Ke=class extends u{constructor(){super(...arguments),this.value="",this.placeholder="Type @ to mention someone…",this.rows=3,this.mentionQuery="",this.mentioning=!1}handleInput(t){const r=t.target;this.value=r.value,this.dispatchEvent(new CustomEvent("wu-input",{bubbles:!0,composed:!0,detail:{value:this.value}}));const a=r.selectionStart??r.value.length,o=r.value.slice(0,a).match(/@(\w*)$/);o?(this.mentioning=!0,this.mentionQuery=o[1],this.dispatchEvent(new CustomEvent("wu-mention",{bubbles:!0,composed:!0,detail:{query:o[1]}}))):(this.mentioning=!1,this.mentionQuery="")}render(){return n`
      <div class="wrapper">
        <textarea
          class="textarea ${this.mentioning?"mentioning":""}"
          rows=${this.rows}
          placeholder=${this.placeholder}
          .value=${this.value}
          @input=${this.handleInput}
          aria-label=${this.placeholder}
        ></textarea>
        ${this.mentioning?n`<div class="mention-hint" role="status">Mentioning: @${this.mentionQuery}</div>`:""}
      </div>
    `}};Ke.styles=Gw;Tr([l()],Ke.prototype,"value",2);Tr([l()],Ke.prototype,"placeholder",2);Tr([l({type:Number})],Ke.prototype,"rows",2);Tr([p()],Ke.prototype,"mentionQuery",2);Tr([p()],Ke.prototype,"mentioning",2);Ke=Tr([c("wu-mention-input")],Ke);const Zw=d`
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
`;var eb=Object.defineProperty,tb=Object.getOwnPropertyDescriptor,Ti=(t,r,a,o)=>{for(var e=o>1?void 0:o?tb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&eb(r,a,e),e};let bo=class extends u{constructor(){super(...arguments),this.reactions=[],this.showAdd=!1}handleReact(t){const r=this.reactions.map(o=>o.emoji===t.emoji?{...o,reacted:!o.reacted,count:o.reacted?o.count-1:o.count+1}:o);this.reactions=r;const a=r.find(o=>o.emoji===t.emoji);this.dispatchEvent(new CustomEvent("wu-react",{bubbles:!0,composed:!0,detail:{emoji:a.emoji,reacted:a.reacted}}))}render(){return n`
      <div class="bar" role="group" aria-label="Reactions">
        ${m(this.reactions,t=>t.emoji,t=>n`
            <button
              class="reaction ${t.reacted?"active":""}"
              type="button"
              aria-label="${t.emoji} ${t.count} reaction${t.count!==1?"s":""}"
              aria-pressed=${String(t.reacted)}
              @click=${()=>this.handleReact(t)}
            >
              <span class="emoji">${t.emoji}</span>
              <span class="count">${t.count}</span>
            </button>
          `)}
        ${this.showAdd?n`<button class="add-btn" type="button" aria-label="Add reaction">+</button>`:""}
      </div>
    `}};bo.styles=Zw;Ti([l({type:Array})],bo.prototype,"reactions",2);Ti([l({type:Boolean,attribute:"show-add"})],bo.prototype,"showAdd",2);bo=Ti([c("wu-reaction-bar")],bo);const rb=d`
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
`;var ob=Object.defineProperty,ab=Object.getOwnPropertyDescriptor,qi=(t,r,a,o)=>{for(var e=o>1?void 0:o?ab(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ob(r,a,e),e};let go=class extends u{constructor(){super(...arguments),this.content="",this.compact=!1}render(){return n`
      <div class="prose" aria-live="polite">
        ${this.content?Al(this.content):n`<slot></slot>`}
      </div>
    `}};go.styles=rb;qi([l()],go.prototype,"content",2);qi([l({type:Boolean,reflect:!0})],go.prototype,"compact",2);go=qi([c("wu-rich-text-viewer")],go);const sb=d`
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
`;var ib=Object.defineProperty,nb=Object.getOwnPropertyDescriptor,fl=(t,r,a,o)=>{for(var e=o>1?void 0:o?nb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ib(r,a,e),e};let ps=class extends u{constructor(){super(...arguments),this.entries=[]}typeLabel(t){return{added:"Added",fixed:"Fixed",changed:"Changed",removed:"Removed"}[t]??t}render(){return n`
      <div class="changelog">
        ${this.entries.length===0?n`<p class="empty">No changelog entries.</p>`:m(this.entries,t=>t.version,t=>n`
                <section class="entry" aria-label="Version ${t.version}">
                  <div class="version-row">
                    <span class="version">${t.version}</span>
                    <time class="date">${t.date}</time>
                  </div>
                  <ul class="changes">
                    ${m(t.changes,(r,a)=>`${t.version}-${a}`,r=>n`
                        <li class="change">
                          <span class="badge type-${r.type}">${this.typeLabel(r.type)}</span>
                          <span class="change-text">${r.text}</span>
                        </li>
                      `)}
                  </ul>
                </section>
              `)}
      </div>
    `}};ps.styles=sb;fl([l({type:Array})],ps.prototype,"entries",2);ps=fl([c("wu-changelog")],ps);const lb=d`
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
`;var ub=Object.defineProperty,cb=Object.getOwnPropertyDescriptor,Ri=(t,r,a,o)=>{for(var e=o>1?void 0:o?cb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ub(r,a,e),e};let fo=class extends u{constructor(){super(...arguments),this.shortcuts=[],this.heading="Keyboard shortcuts"}grouped(){const t=new Map;for(const r of this.shortcuts){const a=r.group??"General";t.has(a)||t.set(a,[]),t.get(a).push(r)}return t}render(){const t=this.grouped();return n`
      <div class="wrapper">
        <h2 class="heading">${this.heading}</h2>
        ${[...t.entries()].map(([r,a])=>n`
            <section class="group">
              <h3 class="group-heading">${r}</h3>
              <dl class="list">
                ${m(a,(o,e)=>`${r}-${e}`,o=>n`
                    <div class="row">
                      <dt class="desc">${o.description}</dt>
                      <dd class="keys">${o.keys.map(e=>n`<kbd>${e}</kbd>`)}</dd>
                    </div>
                  `)}
              </dl>
            </section>
          `)}
      </div>
    `}};fo.styles=lb;Ri([l({type:Array})],fo.prototype,"shortcuts",2);Ri([l()],fo.prototype,"heading",2);fo=Ri([c("wu-keyboard-shortcuts")],fo);const db=d`
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
`;var pb=Object.defineProperty,hb=Object.getOwnPropertyDescriptor,Fi=(t,r,a,o)=>{for(var e=o>1?void 0:o?hb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&pb(r,a,e),e};let mo=class extends u{constructor(){super(...arguments),this.variant="beta",this.label=""}defaultLabel(){return{alpha:"Alpha",beta:"Beta",new:"New",experimental:"Experimental",deprecated:"Deprecated",stable:"Stable"}[this.variant]??this.variant}render(){return n`
      <span class="badge" role="status" aria-label="Feature status: ${this.label||this.defaultLabel()}">
        ${this.label||this.defaultLabel()}
      </span>
    `}};mo.styles=db;Fi([l({reflect:!0})],mo.prototype,"variant",2);Fi([l()],mo.prototype,"label",2);mo=Fi([c("wu-feature-flag-badge")],mo);const vb=d`
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
`;var wb=Object.defineProperty,bb=Object.getOwnPropertyDescriptor,Ys=(t,r,a,o)=>{for(var e=o>1?void 0:o?bb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&wb(r,a,e),e};let pr=class extends u{constructor(){super(...arguments),this.steps=[],this.active=!1,this.current=0}goNext(){this.current<this.steps.length-1?(this.current++,this.dispatchEvent(new CustomEvent("wu-step-change",{bubbles:!0,composed:!0,detail:{step:this.current}}))):(this.active=!1,this.dispatchEvent(new CustomEvent("wu-complete",{bubbles:!0,composed:!0})))}goPrev(){this.current>0&&(this.current--,this.dispatchEvent(new CustomEvent("wu-step-change",{bubbles:!0,composed:!0,detail:{step:this.current}})))}skip(){this.active=!1,this.dispatchEvent(new CustomEvent("wu-skip",{bubbles:!0,composed:!0}))}render(){if(!this.active||this.steps.length===0)return n``;const t=this.steps[this.current],r=this.current===this.steps.length-1;return n`
      <div class="overlay" role="dialog" aria-modal="true" aria-label="${t.title}">
        <div class="panel">
          <div class="panel-header">
            <span class="counter">${this.current+1} / ${this.steps.length}</span>
            <button class="skip-btn" type="button" @click=${this.skip} aria-label="Skip tour">✕</button>
          </div>
          <h3 class="title">${t.title}</h3>
          <p class="content">${t.content}</p>
          <div class="actions">
            ${this.current>0?n`<button class="btn-secondary" type="button" @click=${this.goPrev}>Back</button>`:""}
            <button class="btn-primary" type="button" @click=${this.goNext}>${r?"Finish":"Next"}</button>
          </div>
          <div class="dots" aria-hidden="true">
            ${this.steps.map((a,o)=>n`<span class="dot ${o===this.current?"active":""}"></span>`)}
          </div>
        </div>
      </div>
    `}};pr.styles=vb;Ys([l({type:Array})],pr.prototype,"steps",2);Ys([l({type:Boolean,reflect:!0})],pr.prototype,"active",2);Ys([p()],pr.prototype,"current",2);pr=Ys([c("wu-tour")],pr);const gb=d`
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
`;var fb=Object.defineProperty,mb=Object.getOwnPropertyDescriptor,qr=(t,r,a,o)=>{for(var e=o>1?void 0:o?mb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&fb(r,a,e),e};let yo=class extends u{constructor(){super(...arguments),this.data=null,this.expandDepth=2}renderValue(t,r=0){return t===null?n`<span class="null">null</span>`:typeof t=="boolean"?n`<span class="bool">${String(t)}</span>`:typeof t=="number"?n`<span class="num">${t}</span>`:typeof t=="string"?n`<span class="str">"${t}"</span>`:Array.isArray(t)?this.renderArray(t,r):typeof t=="object"?this.renderObject(t,r):n``}renderArray(t,r){if(t.length===0)return n`<span class="bracket">[]</span>`;const a=r<this.expandDepth;return n`
      <wu-json-node ?expanded=${a} label="Array(${t.length})">
        <div class="entries">
          ${t.map((o,e)=>n`
            <div class="entry">
              <span class="index">${e}</span>
              <span class="colon">:</span>
              ${this.renderValue(o,r+1)}
            </div>
          `)}
        </div>
      </wu-json-node>
    `}renderObject(t,r){const a=Object.keys(t);if(a.length===0)return n`<span class="bracket">{}</span>`;const o=r<this.expandDepth;return n`
      <wu-json-node ?expanded=${o} label="{${a.length}}">
        <div class="entries">
          ${a.map(e=>n`
            <div class="entry">
              <span class="key">"${e}"</span>
              <span class="colon">:</span>
              ${this.renderValue(t[e],r+1)}
            </div>
          `)}
        </div>
      </wu-json-node>
    `}render(){return n`<div class="viewer" role="tree">${this.renderValue(this.data)}</div>`}};yo.styles=gb;qr([l({type:Object})],yo.prototype,"data",2);qr([l({type:Number,attribute:"expand-depth"})],yo.prototype,"expandDepth",2);yo=qr([c("wu-json-viewer")],yo);let xo=class extends u{constructor(){super(...arguments),this.expanded=!0,this.label=""}render(){return n`
      <button class="toggle" type="button" @click=${()=>{this.expanded=!this.expanded}} aria-expanded=${String(this.expanded)}>
        <span class="arrow ${this.expanded?"open":""}">▶</span>
        <span>${this.label}</span>
      </button>
      ${this.expanded?n`<div class="content"><slot></slot></div>`:""}
    `}};xo.styles=d`
    :host { display: block; }
    .toggle { cursor: pointer; user-select: none; display: inline-flex; align-items: center; gap: 4px; background: none; border: none; color: var(--wu-color-text-secondary); font-family: var(--wu-font-mono); font-size: var(--wu-text-xs); padding: 0; outline: none; }
    .toggle:focus-visible { box-shadow: var(--wu-focus-ring); }
    .arrow { display: inline-block; transition: transform 0.15s; font-size: 10px; }
    .arrow.open { transform: rotate(90deg); }
    .content { padding-left: 16px; }
  `;qr([l({type:Boolean,reflect:!0})],xo.prototype,"expanded",2);qr([l()],xo.prototype,"label",2);xo=qr([c("wu-json-node")],xo);const yb=d`
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
`;var xb=Object.defineProperty,kb=Object.getOwnPropertyDescriptor,Ws=(t,r,a,o)=>{for(var e=o>1?void 0:o?kb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&xb(r,a,e),e};let hr=class extends u{constructor(){super(...arguments),this.logs=[],this.maxHeight=320,this.autoScroll=!0}updated(){if(this.autoScroll){const t=this.shadowRoot.querySelector(".container");t&&(t.scrollTop=t.scrollHeight)}}render(){return n`
      <div class="container" style="max-height:${this.maxHeight}px" role="log" aria-live="polite" aria-label="Log output">
        ${this.logs.length===0?n`<span class="empty">No log entries.</span>`:m(this.logs,(t,r)=>r,t=>n`
                <div class="line level-${t.level}">
                  ${t.timestamp?n`<span class="ts">${t.timestamp}</span>`:""}
                  <span class="badge">${t.level.toUpperCase()}</span>
                  <span class="msg">${t.message}</span>
                </div>
              `)}
      </div>
    `}};hr.styles=yb;Ws([l({type:Array})],hr.prototype,"logs",2);Ws([l({type:Number})],hr.prototype,"maxHeight",2);Ws([l({type:Boolean,attribute:"auto-scroll"})],hr.prototype,"autoScroll",2);hr=Ws([c("wu-log-viewer")],hr);const $b=d`
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
`;var _b=Object.defineProperty,zb=Object.getOwnPropertyDescriptor,Xs=(t,r,a,o)=>{for(var e=o>1?void 0:o?zb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&_b(r,a,e),e};let vr=class extends u{constructor(){super(...arguments),this.lines=[],this.mode="unified",this.filename=""}render(){return n`
      <div class="wrapper">
        ${this.filename?n`<div class="filename">${this.filename}</div>`:""}
        <div class="table-wrap" role="table" aria-label="Code diff">
          ${m(this.lines,(t,r)=>r,t=>n`
              <div class="row type-${t.type}" role="row">
                <span class="gutter old" role="cell">${t.lineOld??""}</span>
                <span class="gutter new" role="cell">${t.lineNew??""}</span>
                <span class="sign" role="cell">${t.type==="added"?"+":t.type==="removed"?"-":" "}</span>
                <span class="content" role="cell">${t.content}</span>
              </div>
            `)}
        </div>
      </div>
    `}};vr.styles=$b;Xs([l({type:Array})],vr.prototype,"lines",2);Xs([l({reflect:!0})],vr.prototype,"mode",2);Xs([l()],vr.prototype,"filename",2);vr=Xs([c("wu-diff-viewer")],vr);const Ob=d`
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
`;var jb=Object.defineProperty,Pb=Object.getOwnPropertyDescriptor,Gs=(t,r,a,o)=>{for(var e=o>1?void 0:o?Pb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&jb(r,a,e),e};const ol=["equals","not equals","contains","starts with","ends with"],Cb=["=","!=",">","<",">=","<="],Db=["is true","is false"];let wr=class extends u{constructor(){super(...arguments),this.fields=[],this.rules=[],this.internalRules=[]}connectedCallback(){super.connectedCallback(),this.internalRules=[...this.rules]}operators(t){const r=this.fields.find(a=>a.id===t);return r?r.type==="number"||r.type==="date"?Cb:r.type==="boolean"?Db:ol:ol}addRule(){const t=this.fields[0];if(!t)return;const r=this.operators(t.id);this.internalRules=[...this.internalRules,{id:crypto.randomUUID(),field:t.id,operator:r[0],value:""}],this.emit()}removeRule(t){this.internalRules=this.internalRules.filter(r=>r.id!==t),this.emit()}updateRule(t,r){this.internalRules=this.internalRules.map(a=>a.id===t?{...a,...r}:a),this.emit()}emit(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{rules:this.internalRules}}))}render(){return n`
      <div class="builder">
        ${this.internalRules.length===0?n`<p class="empty">No filters. Click "Add filter" to get started.</p>`:""}
        <div class="rules">
          ${m(this.internalRules,t=>t.id,(t,r)=>n`
              <div class="rule">
                ${r>0?n`<span class="conjunction">AND</span>`:""}
                <select class="select" @change=${a=>this.updateRule(t.id,{field:a.target.value,operator:this.operators(a.target.value)[0]})} aria-label="Field">
                  ${this.fields.map(a=>n`<option value=${a.id} ?selected=${a.id===t.field}>${a.label}</option>`)}
                </select>
                <select class="select" @change=${a=>this.updateRule(t.id,{operator:a.target.value})} aria-label="Operator">
                  ${this.operators(t.field).map(a=>n`<option value=${a} ?selected=${a===t.operator}>${a}</option>`)}
                </select>
                <input class="value-input" type="text" placeholder="Value" .value=${t.value}
                  @input=${a=>this.updateRule(t.id,{value:a.target.value})}
                  aria-label="Value" />
                <button class="remove-btn" type="button" @click=${()=>this.removeRule(t.id)} aria-label="Remove filter">✕</button>
              </div>
            `)}
        </div>
        <button class="add-btn" type="button" @click=${this.addRule}>+ Add filter</button>
      </div>
    `}};wr.styles=Ob;Gs([l({type:Array})],wr.prototype,"fields",2);Gs([l({type:Array})],wr.prototype,"rules",2);Gs([p()],wr.prototype,"internalRules",2);wr=Gs([c("wu-query-builder")],wr);const ml=d`
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
`;var Eb=Object.defineProperty,Sb=Object.getOwnPropertyDescriptor,It=(t,r,a,o)=>{for(var e=o>1?void 0:o?Sb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Eb(r,a,e),e};let yt=class extends u{constructor(){super(...arguments),this.side="left",this.author="",this.time="",this.showAvatar=!1}initials(){return this.author.split(" ").map(t=>t[0]).join("").slice(0,2).toUpperCase()}render(){return n`
      <div class="bubble-row">
        ${this.showAvatar&&this.side==="left"?n`<span class="avatar" aria-hidden="true">${this.initials()}</span>`:""}
        <div class="bubble">
          ${this.author?n`<span class="author">${this.author}</span>`:""}
          <div class="content"><slot></slot></div>
          ${this.time?n`<span class="time">${this.time}</span>`:""}
        </div>
        ${this.showAvatar&&this.side==="right"?n`<span class="avatar" aria-hidden="true">${this.initials()}</span>`:""}
      </div>
    `}};yt.styles=ml;It([l({reflect:!0})],yt.prototype,"side",2);It([l()],yt.prototype,"author",2);It([l()],yt.prototype,"time",2);It([l({type:Boolean,attribute:"show-avatar"})],yt.prototype,"showAvatar",2);yt=It([c("wu-chat-bubble")],yt);let hs=class extends u{constructor(){super(...arguments),this.maxHeight=400}render(){return n`
      <div class="chat-container" style="max-height:${this.maxHeight}px" role="log" aria-label="Chat messages" aria-live="polite">
        <slot></slot>
      </div>
    `}};hs.styles=ml;It([l({type:Number,attribute:"max-height"})],hs.prototype,"maxHeight",2);hs=It([c("wu-chat")],hs);const Mb=d`
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
`;var Bb=Object.defineProperty,Ab=Object.getOwnPropertyDescriptor,Ka=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ab(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Bb(r,a,e),e};let xt=class extends u{constructor(){super(...arguments),this.height=160,this.lineWidth=2,this.empty=!0,this.drawing=!1,this.ctx=null}firstUpdated(){this.canvas.width=this.canvas.offsetWidth*devicePixelRatio,this.canvas.height=this.height*devicePixelRatio,this.ctx=this.canvas.getContext("2d"),this.ctx&&(this.ctx.scale(devicePixelRatio,devicePixelRatio),this.ctx.lineCap="round",this.ctx.lineJoin="round")}getPos(t){const r=this.canvas.getBoundingClientRect();return{x:t.clientX-r.left,y:t.clientY-r.top}}onPointerDown(t){var r,a;this.drawing=!0,this.canvas.setPointerCapture(t.pointerId);const{x:o,y:e}=this.getPos(t);(r=this.ctx)==null||r.beginPath(),(a=this.ctx)==null||a.moveTo(o,e)}onPointerMove(t){if(!this.drawing)return;const{x:r,y:a}=this.getPos(t);this.ctx&&(this.ctx.strokeStyle=getComputedStyle(this).getPropertyValue("--wu-sig-line-color").trim()||"#000",this.ctx.lineWidth=this.lineWidth,this.ctx.lineTo(r,a),this.ctx.stroke())}onPointerUp(){this.drawing&&(this.drawing=!1,this.empty=!1,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{dataUrl:this.toDataURL()}})))}toDataURL(){var t;return((t=this.canvas)==null?void 0:t.toDataURL("image/png"))??""}clear(){this.ctx&&this.canvas&&this.ctx.clearRect(0,0,this.canvas.offsetWidth,this.height),this.empty=!0,this.dispatchEvent(new CustomEvent("wu-clear",{bubbles:!0,composed:!0}))}render(){return n`
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
        ${this.empty?n`<span class="placeholder">Sign here</span>`:""}
      </div>
      <div class="actions">
        <button class="clear-btn" type="button" @click=${this.clear}>Clear</button>
      </div>
    `}};xt.styles=Mb;Ka([l({type:Number})],xt.prototype,"height",2);Ka([l({type:Number,attribute:"line-width"})],xt.prototype,"lineWidth",2);Ka([p()],xt.prototype,"empty",2);Ka([Pe("canvas")],xt.prototype,"canvas",2);xt=Ka([c("wu-signature")],xt);const Ib=d`
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
`;var Nb=Object.defineProperty,Lb=Object.getOwnPropertyDescriptor,Me=(t,r,a,o)=>{for(var e=o>1?void 0:o?Lb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Nb(r,a,e),e};let J=class extends u{constructor(){super(...arguments),this.src="",this.autoplay=!1,this.loop=!1,this.playing=!1,this.muted=!1,this.currentTime=0,this.duration=0}fmt(t){const r=Math.floor(t/60),a=Math.floor(t%60);return`${r}:${a.toString().padStart(2,"0")}`}toggle(){this.playing?this.audio.pause():this.audio.play()}onPlay(){this.playing=!0,this.dispatchEvent(new CustomEvent("wu-play",{bubbles:!0,composed:!0}))}onPause(){this.playing=!1,this.dispatchEvent(new CustomEvent("wu-pause",{bubbles:!0,composed:!0}))}onEnded(){this.playing=!1,this.dispatchEvent(new CustomEvent("wu-ended",{bubbles:!0,composed:!0}))}onTimeUpdate(){this.currentTime=this.audio.currentTime}onLoadedMetadata(){this.duration=this.audio.duration}onProgressClick(t){const r=t.currentTarget.getBoundingClientRect(),a=(t.clientX-r.left)/r.width;this.audio.currentTime=a*this.duration}toggleMute(){this.muted=!this.muted,this.audio.muted=this.muted}render(){const t=this.duration?this.currentTime/this.duration:0,r=this.playing?n`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="4" height="16"/><rect x="15" y="4" width="4" height="16"/></svg>`:n`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`,a=this.muted?"🔇":"🔊";return n`
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
          ${r}
        </button>
        <div class="progress-wrap">
          <progress
            max="1"
            .value=${t}
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
    `}};J.styles=Ib;Me([l()],J.prototype,"src",2);Me([l({type:Boolean})],J.prototype,"autoplay",2);Me([l({type:Boolean})],J.prototype,"loop",2);Me([p()],J.prototype,"playing",2);Me([p()],J.prototype,"muted",2);Me([p()],J.prototype,"currentTime",2);Me([p()],J.prototype,"duration",2);Me([Pe("audio")],J.prototype,"audio",2);J=Me([c("wu-audio")],J);const Tb=d`
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
`;var qb=Object.defineProperty,Rb=Object.getOwnPropertyDescriptor,Js=(t,r,a,o)=>{for(var e=o>1?void 0:o?Rb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&qb(r,a,e),e};const Fb=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],al=["January","February","March","April","May","June","July","August","September","October","November","December"];let br=class extends u{constructor(){super(),this.events=[];const t=new Date;this.year=t.getFullYear(),this.month=t.getMonth()}prevMonth(){this.month===0?(this.month=11,this.year--):this.month--}nextMonth(){this.month===11?(this.month=0,this.year++):this.month++}getDays(){const t=new Date(this.year,this.month,1),r=new Date(this.year,this.month+1,0),a=[];for(let e=0;e<t.getDay();e++)a.push({date:new Date(this.year,this.month,-t.getDay()+e+1),current:!1});for(let e=1;e<=r.getDate();e++)a.push({date:new Date(this.year,this.month,e),current:!0});const o=42-a.length;for(let e=1;e<=o;e++)a.push({date:new Date(this.year,this.month+1,e),current:!1});return a}isoDate(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}isToday(t){const r=new Date;return t.getFullYear()===r.getFullYear()&&t.getMonth()===r.getMonth()&&t.getDate()===r.getDate()}eventsForDate(t){return this.events.filter(r=>r.date===t)}clickDay(t){this.dispatchEvent(new CustomEvent("wu-date-click",{bubbles:!0,composed:!0,detail:{date:t}}))}clickEvent(t,r){t.stopPropagation(),this.dispatchEvent(new CustomEvent("wu-event-click",{bubbles:!0,composed:!0,detail:{event:r}}))}render(){const t=this.getDays();return n`
      <div class="calendar" role="grid" aria-label="Calendar">
        <div class="header">
          <button class="nav-btn" type="button" aria-label="Previous month" @click=${this.prevMonth}>‹</button>
          <span class="month-label">${al[this.month]} ${this.year}</span>
          <button class="nav-btn" type="button" aria-label="Next month" @click=${this.nextMonth}>›</button>
        </div>
        <div class="grid" role="row">
          ${Fb.map(r=>n`<div class="dow" role="columnheader">${r}</div>`)}
        </div>
        <div class="grid">
          ${m(t,r=>this.isoDate(r.date),({date:r,current:a})=>{const o=this.isoDate(r),e=this.eventsForDate(o);return n`
              <div
                class="day ${a?"":"other-month"} ${this.isToday(r)?"today":""}"
                role="gridcell"
                tabindex="0"
                aria-label="${r.getDate()} ${a?al[this.month]:""}"
                @click=${()=>this.clickDay(o)}
                @keydown=${s=>s.key==="Enter"&&this.clickDay(o)}
              >
                <div class="day-num">${r.getDate()}</div>
                ${e.map(s=>n`
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
    `}};br.styles=Tb;Js([l({type:Array})],br.prototype,"events",2);Js([p()],br.prototype,"year",2);Js([p()],br.prototype,"month",2);br=Js([c("wu-event-calendar")],br);const Hb=d`
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
`;var Kb=Object.defineProperty,Vb=Object.getOwnPropertyDescriptor,Hi=(t,r,a,o)=>{for(var e=o>1?void 0:o?Vb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Kb(r,a,e),e};let ko=class extends u{constructor(){super(...arguments),this.columns=[],this.items=[]}willUpdate(t){t.has("columns")&&(this.items=this.columns.map(r=>({...r,selected:r.selected??!1})))}toggle(t){this.items=this.items.map(r=>r.id===t?{...r,selected:!r.selected}:r),this.emitChange()}move(t,r){const a=t+r;if(a<0||a>=this.items.length)return;const o=[...this.items];[o[t],o[a]]=[o[a],o[t]],this.items=o,this.emitChange()}selectAll(){this.items=this.items.map(t=>({...t,selected:!0})),this.emitChange()}selectNone(){this.items=this.items.map(t=>({...t,selected:!1})),this.emitChange()}emitChange(){this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{selected:this.items.filter(t=>t.selected).map(t=>t.id)}}))}render(){const t=this.items.filter(r=>r.selected).length;return n`
      <div class="builder">
        <div class="builder-header">
          <span>Columns</span>
          <span class="count">${t} / ${this.items.length} selected</span>
        </div>
        <ul class="column-list" role="list">
          ${m(this.items,r=>r.id,(r,a)=>n`
            <li class="column-item">
              <label>
                <input
                  type="checkbox"
                  .checked=${r.selected??!1}
                  @change=${()=>this.toggle(r.id)}
                  aria-label=${r.label}
                />
                ${r.label}
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
    `}};ko.styles=Hb;Hi([l({type:Array})],ko.prototype,"columns",2);Hi([p()],ko.prototype,"items",2);ko=Hi([c("wu-report-builder")],ko);const Ub=d`
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
`;var Yb=Object.defineProperty,Wb=Object.getOwnPropertyDescriptor,yl=(t,r,a,o)=>{for(var e=o>1?void 0:o?Wb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Yb(r,a,e),e};const sl=[{category:"Smileys",emojis:["😀","😁","😂","🤣","😃","😄","😅","😆","😇","😉","😊","🙂","😋","😌","😍","🥰","😘","😗","😙","😚","😛","😜","🤪","😝","🤑","🤗","🤭","🤫","🤔","🤐","🥶","🥺","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","🤧","🥵","🤯"]},{category:"Gestures",emojis:["👋","🤚","🖐","✋","🖖","👌","🤌","🤏","✌️","🤞","🤟","🤘","🤙","👈","👉","👆","🖕","👇","☝️","👍","👎","✊","👊","🤛","🤜","👏","🙌","🫶","👐","🤲","🤝","🙏"]},{category:"Animals",emojis:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🙈","🙉","🙊","🐔","🐧","🐦","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝"]},{category:"Food",emojis:["🍎","🍊","🍋","🍇","🍓","🫐","🍈","🍒","🥝","🍑","🥭","🍍","🥥","🍅","🍆","🥑","🥦","🥕","🌽","🌶","🥒","🧄","🧅","🥔","🍠","🫘","🌰","🥜","🍞","🥐"]},{category:"Activities",emojis:["⚽","🏀","🏈","⚾","🥎","🎾","🏐","🏉","🎱","🏓","🏸","🥊","🥋","🎽","🛹","🛼","🤸","🏋️","🤼","🤺","🤾","🏌️","🏇","🧘","🤿","🎿","⛷️","🏂","🪂","🏊"]},{category:"Objects",emojis:["💡","🔦","🕯️","💰","💳","💎","🔑","🗝️","🔒","🔓","🔨","⛏️","🔧","🔩","🪛","🔗","📱","💻","🖥️","🖨️","⌨️","🖱️","💾","📀","📷","📸","📹","🎥","📞","☎️"]},{category:"Symbols",emojis:["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❤️‍🔥","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☯️","🕉️","✡️","🔯","🪯","🛐","♋","♓","🆗","🆕","🆙","🆒","🆓","0️⃣"]}];let vs=class extends u{constructor(){super(...arguments),this.query=""}onSearch(t){this.query=t.target.value}select(t){this.dispatchEvent(new CustomEvent("wu-select",{bubbles:!0,composed:!0,detail:{emoji:t}}))}getFiltered(){return this.query.trim()?sl.map(t=>({...t,emojis:t.emojis.filter(r=>r.includes(this.query))})).filter(t=>t.emojis.length>0):sl}render(){const t=this.getFiltered(),r=t.some(a=>a.emojis.length>0);return n`
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
          ${r?t.map(a=>n`
                ${this.query?"":n`<div class="category-label" style="grid-column:1/-1">${a.category}</div>`}
                ${a.emojis.map(o=>n`
                  <button
                    type="button"
                    class="emoji-btn"
                    role="option"
                    aria-label=${o}
                    title=${o}
                    @click=${()=>this.select(o)}
                  >${o}</button>
                `)}
              `):n`<div class="no-results" style="grid-column:1/-1">No emoji found</div>`}
        </div>
      </div>
    `}};vs.styles=Ub;yl([p()],vs.prototype,"query",2);vs=yl([c("wu-emoji-picker")],vs);const Xb=d`
  :host {
    display: block;
    --wu-chat-message-gap: var(--wu-space-2);
    --wu-chat-message-radius: var(--wu-radius-lg);
    --wu-chat-message-padding: var(--wu-space-3) var(--wu-space-4);
    --wu-chat-message-font-size: var(--wu-text-sm);
    --wu-chat-message-user-bg: var(--wu-color-primary);
    --wu-chat-message-user-color: var(--wu-color-primary-fg);
    --wu-chat-message-assistant-bg: var(--wu-color-surface);
    --wu-chat-message-assistant-color: var(--wu-color-text);
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: var(--wu-chat-message-gap);
    max-width: 80%;
  }

  :host([role="user"]) .message {
    align-self: flex-end;
    align-items: flex-end;
    margin-left: auto;
  }

  :host([role="assistant"]) .message,
  :host([role="system"]) .message {
    align-self: flex-start;
    align-items: flex-start;
    margin-right: auto;
  }

  .bubble {
    padding: var(--wu-chat-message-padding);
    border-radius: var(--wu-chat-message-radius);
    font-size: var(--wu-chat-message-font-size);
    line-height: var(--wu-leading-normal);
    word-break: break-word;
  }

  :host([role="user"]) .bubble {
    background: var(--wu-chat-message-user-bg);
    color: var(--wu-chat-message-user-color);
    border-bottom-right-radius: var(--wu-radius-sm);
  }

  :host([role="assistant"]) .bubble,
  :host([role="system"]) .bubble {
    background: var(--wu-chat-message-assistant-bg);
    color: var(--wu-chat-message-assistant-color);
    border-bottom-left-radius: var(--wu-radius-sm);
  }

  .meta {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    padding: 0 var(--wu-space-1);
  }

  .code-block {
    background: var(--wu-color-gray-900, #0f172a);
    color: var(--wu-color-gray-100, #f1f5f9);
    padding: var(--wu-space-3) var(--wu-space-4);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    overflow-x: auto;
    white-space: pre-wrap;
    margin: var(--wu-space-2) 0;
  }

  .tool-call {
    background: var(--wu-color-primary-subtle);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-2) var(--wu-space-3);
    font-size: var(--wu-text-xs);
    font-family: var(--wu-font-mono);
    color: var(--wu-color-text-secondary);
  }
`;var Gb=Object.defineProperty,Jb=Object.getOwnPropertyDescriptor,Nt=(t,r,a,o)=>{for(var e=o>1?void 0:o?Jb(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Gb(r,a,e),e};let je=class extends u{constructor(){super(...arguments),this.role="user",this.author="",this.timestamp="",this.type="text",this.language="",this.toolName=""}render(){return n`
      <div class="message" part="message">
        ${this.author?n`<span class="meta">${this.author}</span>`:""}
        <div class="bubble" part="bubble">
          ${this.type==="code"?n`<div class="code-block" part="code">${this.language?n`<span class="lang">${this.language}</span>`:""}<slot></slot></div>`:this.type==="tool-call"?n`<div class="tool-call" part="tool-call">${this.toolName?n`<strong>${this.toolName}</strong><br>`:""}<slot></slot></div>`:n`<slot></slot>`}
        </div>
        ${this.timestamp?n`<span class="meta">${this.timestamp}</span>`:""}
      </div>
    `}};je.styles=Xb;Nt([l({reflect:!0})],je.prototype,"role",2);Nt([l()],je.prototype,"author",2);Nt([l()],je.prototype,"timestamp",2);Nt([l()],je.prototype,"type",2);Nt([l()],je.prototype,"language",2);Nt([l({attribute:"tool-name"})],je.prototype,"toolName",2);je=Nt([c("wu-chat-message")],je);const Qb=d`
  :host {
    display: block;
    --wu-chat-input-bg: var(--wu-color-surface);
    --wu-chat-input-border: var(--wu-color-border);
    --wu-chat-input-radius: var(--wu-radius-xl);
    --wu-chat-input-padding: var(--wu-space-3) var(--wu-space-4);
    --wu-chat-input-font-size: var(--wu-text-sm);
  }

  .wrapper {
    display: flex;
    align-items: flex-end;
    gap: var(--wu-space-2);
    background: var(--wu-chat-input-bg);
    border: 1px solid var(--wu-chat-input-border);
    border-radius: var(--wu-chat-input-radius);
    padding: var(--wu-chat-input-padding);
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .wrapper:focus-within {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  textarea {
    flex: 1;
    border: none;
    background: transparent;
    resize: none;
    outline: none;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-chat-input-font-size);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
    min-height: 40px;
    max-height: 200px;
    overflow-y: auto;
    field-sizing: content;
  }

  textarea::placeholder {
    color: var(--wu-color-text-disabled);
  }

  .actions {
    display: flex;
    gap: var(--wu-space-1);
    align-items: center;
    flex-shrink: 0;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: var(--wu-radius-md);
    background: transparent;
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
    font-size: 16px;
  }

  button:hover:not(:disabled) {
    background: var(--wu-color-surface-raised);
    color: var(--wu-color-text);
  }

  button.send {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border-radius: var(--wu-radius-md);
  }

  button.send:hover:not(:disabled) {
    background: var(--wu-color-primary-hover);
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;var Zb=Object.defineProperty,eg=Object.getOwnPropertyDescriptor,Rr=(t,r,a,o)=>{for(var e=o>1?void 0:o?eg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Zb(r,a,e),e};let Ve=class extends u{constructor(){super(...arguments),this.placeholder="Ask anything…",this.disabled=!1,this.showAttach=!1,this.showVoice=!1,this.value=""}onInput(t){this.value=t.target.value}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.submit())}submit(){const t=this.value.trim();if(!t||this.disabled)return;this.dispatchEvent(new CustomEvent("wu-submit",{bubbles:!0,composed:!0,detail:{value:t}})),this.value="";const r=this.shadowRoot.querySelector("textarea");r&&(r.value="")}render(){return n`
      <div class="wrapper" part="wrapper">
        <textarea
          part="textarea"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          rows="1"
          @input=${this.onInput}
          @keydown=${this.onKeyDown}
          aria-label="Message input"
        ></textarea>
        <div class="actions">
          ${this.showAttach?n`<button
                type="button"
                aria-label="Attach file"
                ?disabled=${this.disabled}
                @click=${()=>this.dispatchEvent(new CustomEvent("wu-attach",{bubbles:!0,composed:!0}))}
              >📎</button>`:""}
          ${this.showVoice?n`<button type="button" aria-label="Voice input" ?disabled=${this.disabled}>🎤</button>`:""}
          <button
            type="button"
            class="send"
            aria-label="Send message"
            ?disabled=${this.disabled||!this.value.trim()}
            @click=${this.submit}
          >↑</button>
        </div>
      </div>
    `}};Ve.styles=Qb;Rr([l()],Ve.prototype,"placeholder",2);Rr([l({type:Boolean})],Ve.prototype,"disabled",2);Rr([l({type:Boolean,attribute:"show-attach"})],Ve.prototype,"showAttach",2);Rr([l({type:Boolean,attribute:"show-voice"})],Ve.prototype,"showVoice",2);Rr([p()],Ve.prototype,"value",2);Ve=Rr([c("wu-chat-input")],Ve);const tg=d`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-surface);
    border-radius: var(--wu-radius-lg);
    border-bottom-left-radius: var(--wu-radius-sm);
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--wu-color-text-secondary);
    animation: bounce 1.4s ease-in-out infinite;
  }

  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(3) { animation-delay: 0.4s; }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
    40% { transform: scale(1); opacity: 1; }
  }
`;var rg=Object.defineProperty,og=Object.getOwnPropertyDescriptor,xl=(t,r,a,o)=>{for(var e=o>1?void 0:o?og(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&rg(r,a,e),e};let ws=class extends u{constructor(){super(...arguments),this.ariaLabel="Typing…"}render(){return n`
      <span role="status" aria-label=${this.ariaLabel}>
        <span class="dot" aria-hidden="true"></span>
        <span class="dot" aria-hidden="true"></span>
        <span class="dot" aria-hidden="true"></span>
      </span>
    `}};ws.styles=tg;xl([l({attribute:"aria-label"})],ws.prototype,"ariaLabel",2);ws=xl([c("wu-typing-indicator")],ws);const ag=d`
  :host {
    display: inline;
    --wu-streaming-cursor-color: var(--wu-color-primary);
  }

  .text {
    display: inline;
  }

  .cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background: var(--wu-streaming-cursor-color);
    margin-left: 1px;
    vertical-align: text-bottom;
    animation: blink 1s step-end infinite;
  }

  :host([done]) .cursor {
    display: none;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .cursor {
      animation: none;
      opacity: 1;
    }
  }
`;var sg=Object.defineProperty,ig=Object.getOwnPropertyDescriptor,Va=(t,r,a,o)=>{for(var e=o>1?void 0:o?ig(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&sg(r,a,e),e};let kt=class extends u{constructor(){super(...arguments),this.text="",this.speed=30,this.done=!1,this.displayed="",this._timer=null,this._index=0}updated(t){t.has("text")&&this._reset()}_reset(){this._timer&&clearInterval(this._timer),this._index=0,this.displayed="",this.done=!1,this.text&&(this._timer=setInterval(()=>{this._index<this.text.length?this.displayed+=this.text[this._index++]:(clearInterval(this._timer),this._timer=null,this.done=!0,this.dispatchEvent(new CustomEvent("wu-done",{bubbles:!0,composed:!0})))},1e3/this.speed))}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}render(){return n`
      <span class="text" part="text" aria-live="polite">${this.displayed}</span>
      <span class="cursor" aria-hidden="true"></span>
    `}};kt.styles=ag;Va([l()],kt.prototype,"text",2);Va([l({type:Number})],kt.prototype,"speed",2);Va([l({type:Boolean,reflect:!0})],kt.prototype,"done",2);Va([p()],kt.prototype,"displayed",2);kt=Va([c("wu-streaming-text")],kt);const ng=d`
  :host {
    display: inline-block;
  }

  select {
    appearance: none;
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-2) var(--wu-space-8) var(--wu-space-2) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  select:focus {
    outline: none;
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .badge {
    display: inline-block;
    font-size: var(--wu-text-xs);
    padding: 2px 6px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    margin-left: var(--wu-space-2);
    font-weight: var(--wu-font-medium);
  }
`;var lg=Object.defineProperty,ug=Object.getOwnPropertyDescriptor,Qs=(t,r,a,o)=>{for(var e=o>1?void 0:o?ug(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&lg(r,a,e),e};const cg=[{value:"gpt-4o",label:"GPT-4o",badge:"OpenAI"},{value:"gpt-4-turbo",label:"GPT-4 Turbo",badge:"OpenAI"},{value:"claude-3-5-sonnet",label:"Claude 3.5 Sonnet",badge:"Anthropic"},{value:"claude-3-opus",label:"Claude 3 Opus",badge:"Anthropic"},{value:"gemini-1.5-pro",label:"Gemini 1.5 Pro",badge:"Google"}];let gr=class extends u{constructor(){super(...arguments),this.value="gpt-4o",this.models=cg,this.disabled=!1}onChange(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("wu-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){return n`
      <select
        part="select"
        .value=${this.value}
        ?disabled=${this.disabled}
        aria-label="Select AI model"
        @change=${this.onChange}
      >
        ${this.models.map(t=>n`
          <option value=${t.value} ?selected=${t.value===this.value}>${t.label}${t.badge?` (${t.badge})`:""}</option>
        `)}
      </select>
    `}};gr.styles=ng;Qs([l()],gr.prototype,"value",2);Qs([l({attribute:!1})],gr.prototype,"models",2);Qs([l({type:Boolean})],gr.prototype,"disabled",2);gr=Qs([c("wu-model-selector")],gr);const dg=d`
  :host {
    display: inline-flex;
    flex-direction: column;
    gap: var(--wu-space-1);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    min-width: 120px;
  }

  .label {
    display: flex;
    justify-content: space-between;
  }

  .count { font-variant-numeric: tabular-nums; }

  .bar-track {
    height: 4px;
    background: var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    background: var(--wu-color-primary);
    border-radius: var(--wu-radius-full);
    transition: width var(--wu-duration-normal) var(--wu-ease-default),
                background var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([over-limit]) .bar-fill { background: var(--wu-color-danger); }
  :host([near-limit]) .bar-fill { background: var(--wu-color-warning); }
`;var pg=Object.defineProperty,hg=Object.getOwnPropertyDescriptor,Zs=(t,r,a,o)=>{for(var e=o>1?void 0:o?hg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&pg(r,a,e),e};let fr=class extends u{constructor(){super(...arguments),this.count=0,this.limit=4096,this.warnAt=.8}get pct(){return Math.min(1,this.count/this.limit)}get overLimit(){return this.count>this.limit}get nearLimit(){return!this.overLimit&&this.pct>=this.warnAt}updated(){this.toggleAttribute("over-limit",this.overLimit),this.toggleAttribute("near-limit",this.nearLimit)}render(){return n`
      <div class="label">
        <span>Tokens</span>
        <span class="count" aria-live="polite">${this.count.toLocaleString()} / ${this.limit.toLocaleString()}</span>
      </div>
      <div class="bar-track" role="progressbar" aria-valuenow=${this.count} aria-valuemax=${this.limit} aria-valuemin="0">
        <div class="bar-fill" style="width:${(this.pct*100).toFixed(1)}%"></div>
      </div>
    `}};fr.styles=dg;Zs([l({type:Number})],fr.prototype,"count",2);Zs([l({type:Number})],fr.prototype,"limit",2);Zs([l({type:Number,attribute:"warn-at"})],fr.prototype,"warnAt",2);fr=Zs([c("wu-token-counter")],fr);const vg=d`
  :host {
    display: block;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    background: var(--wu-color-surface);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-color-border);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .search input {
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-1) var(--wu-space-3);
    font-size: var(--wu-text-xs);
    background: var(--wu-color-background);
    color: var(--wu-color-text);
    outline: none;
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 320px;
    overflow-y: auto;
  }

  .item {
    display: flex;
    align-items: flex-start;
    gap: var(--wu-space-3);
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-color-border);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .item:hover { background: var(--wu-color-surface-raised); }
  .item:last-child { border-bottom: none; }

  .item-info { flex: 1; }
  .item-title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); }
  .item-preview { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 240px; }

  .insert-btn {
    flex-shrink: 0;
    border: 1px solid var(--wu-color-border);
    background: var(--wu-color-background);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-1) var(--wu-space-2);
    font-size: var(--wu-text-xs);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
  }

  .insert-btn:hover { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); }

  .empty { padding: var(--wu-space-6); text-align: center; color: var(--wu-color-text-secondary); font-size: var(--wu-text-sm); }
`;var wg=Object.defineProperty,bg=Object.getOwnPropertyDescriptor,Ki=(t,r,a,o)=>{for(var e=o>1?void 0:o?bg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&wg(r,a,e),e};let $o=class extends u{constructor(){super(...arguments),this.prompts=[{id:"1",title:"Summarize text",text:"Please summarize the following text in 3 bullet points:"},{id:"2",title:"Translate to Spanish",text:"Translate the following text to Spanish:"},{id:"3",title:"Fix grammar",text:"Fix the grammar and spelling in the following text:"},{id:"4",title:"Write unit tests",text:"Write unit tests for the following code:"}],this.query=""}get filtered(){if(!this.query)return this.prompts;const t=this.query.toLowerCase();return this.prompts.filter(r=>r.title.toLowerCase().includes(t)||r.text.toLowerCase().includes(t))}insert(t){this.dispatchEvent(new CustomEvent("wu-insert",{bubbles:!0,composed:!0,detail:{prompt:t}}))}render(){const t=this.filtered;return n`
      <div class="header">
        <span>Prompt Library</span>
        <span class="search">
          <input
            type="search"
            placeholder="Search…"
            .value=${this.query}
            @input=${r=>{this.query=r.target.value}}
            aria-label="Search prompts"
          />
        </span>
      </div>
      ${t.length===0?n`<div class="empty">No prompts found</div>`:n`
          <ul class="list" role="list">
            ${t.map(r=>n`
              <li class="item" role="listitem" key=${r.id}>
                <div class="item-info">
                  <div class="item-title">${r.title}</div>
                  <div class="item-preview">${r.text}</div>
                </div>
                <button class="insert-btn" @click=${()=>this.insert(r)} aria-label="Insert prompt: ${r.title}">Insert</button>
              </li>
            `)}
          </ul>
        `}
    `}};$o.styles=vg;Ki([l({attribute:!1})],$o.prototype,"prompts",2);Ki([p()],$o.prototype,"query",2);$o=Ki([c("wu-prompt-library")],$o);const gg=d`
  :host {
    display: inline;
    position: relative;
  }

  .suggestion {
    display: inline;
    color: var(--wu-color-text-disabled);
    font-style: italic;
    pointer-events: none;
    user-select: none;
  }

  .accept-hint {
    display: inline-block;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-sm);
    padding: 1px 4px;
    margin-left: var(--wu-space-1);
    vertical-align: middle;
  }
`;var fg=Object.defineProperty,mg=Object.getOwnPropertyDescriptor,ei=(t,r,a,o)=>{for(var e=o>1?void 0:o?mg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&fg(r,a,e),e};let mr=class extends u{constructor(){super(...arguments),this.suggestion="",this.showHint=!0,this.visible=!0}onKeyDown(t){t.key==="Tab"?(t.preventDefault(),this.accept()):t.key==="Escape"&&this.dismiss()}accept(){this.dispatchEvent(new CustomEvent("wu-accept",{bubbles:!0,composed:!0,detail:{value:this.suggestion}})),this.visible=!1}dismiss(){this.dispatchEvent(new CustomEvent("wu-dismiss",{bubbles:!0,composed:!0})),this.visible=!1}render(){return!this.visible||!this.suggestion?n``:n`
      <span
        class="suggestion"
        part="suggestion"
        tabindex="0"
        aria-label="AI suggestion: ${this.suggestion}. Press Tab to accept."
        @keydown=${this.onKeyDown}
        @click=${this.accept}
      >${this.suggestion}</span>
      ${this.showHint?n`<span class="accept-hint" aria-hidden="true">Tab</span>`:""}
    `}};mr.styles=gg;ei([l()],mr.prototype,"suggestion",2);ei([l({type:Boolean,attribute:"show-hint"})],mr.prototype,"showHint",2);ei([l({type:Boolean,reflect:!0})],mr.prototype,"visible",2);mr=ei([c("wu-ai-suggestion")],mr);const yg=d`
  :host {
    display: inline-flex;
    position: relative;
  }

  .bar {
    display: inline-flex;
    gap: var(--wu-space-1);
    align-items: center;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    padding: var(--wu-space-1) var(--wu-space-2);
    box-shadow: var(--wu-shadow-md);
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    border: none;
    background: transparent;
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-1) var(--wu-space-2);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    white-space: nowrap;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  button:hover {
    background: var(--wu-color-surface);
    color: var(--wu-color-text);
  }

  .divider {
    width: 1px;
    height: 16px;
    background: var(--wu-color-border);
    align-self: center;
  }
`;var xg=Object.defineProperty,kg=Object.getOwnPropertyDescriptor,Vi=(t,r,a,o)=>{for(var e=o>1?void 0:o?kg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&xg(r,a,e),e};let _o=class extends u{constructor(){super(...arguments),this.selectedText="",this.actions=[{id:"explain",label:"Explain",icon:"💡"},{id:"fix",label:"Fix",icon:"🔧"},{id:"improve",label:"Improve",icon:"✨"},{id:"summarize",label:"Summarize",icon:"📝"}]}fire(t){this.dispatchEvent(new CustomEvent("wu-action",{bubbles:!0,composed:!0,detail:{action:t,selectedText:this.selectedText}}))}render(){return n`
      <div class="bar" part="bar" role="toolbar" aria-label="AI actions">
        ${this.actions.map((t,r)=>n`
          ${r>0?n`<span class="divider" aria-hidden="true"></span>`:""}
          <button type="button" @click=${()=>this.fire(t.id)} aria-label="${t.label}">
            ${t.icon?n`<span aria-hidden="true">${t.icon}</span>`:""}
            ${t.label}
          </button>
        `)}
      </div>
    `}};_o.styles=yg;Vi([l({attribute:"selected-text"})],_o.prototype,"selectedText",2);Vi([l({attribute:!1})],_o.prototype,"actions",2);_o=Vi([c("wu-ai-action-bar")],_o);const $g=d`
  :host {
    display: block;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    background: var(--wu-color-surface);
    font-size: var(--wu-text-sm);
  }

  .header {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-surface-raised);
    border-bottom: 1px solid var(--wu-color-border);
    cursor: pointer;
    user-select: none;
  }

  .header:hover { background: var(--wu-color-surface); }

  .icon {
    font-size: 14px;
    transition: transform var(--wu-duration-fast) var(--wu-ease-default);
  }

  :host([open]) .icon { transform: rotate(90deg); }

  .title {
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-xs);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .steps {
    padding: var(--wu-space-3);
    display: none;
  }

  :host([open]) .steps { display: block; }

  .step {
    display: flex;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) 0;
    color: var(--wu-color-text);
    border-bottom: 1px solid var(--wu-color-border);
    line-height: var(--wu-leading-normal);
  }

  .step:last-child { border-bottom: none; }

  .step-num {
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-xs);
    min-width: 20px;
    flex-shrink: 0;
    padding-top: 2px;
  }
`;var _g=Object.defineProperty,zg=Object.getOwnPropertyDescriptor,ti=(t,r,a,o)=>{for(var e=o>1?void 0:o?zg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&_g(r,a,e),e};let yr=class extends u{constructor(){super(...arguments),this.open=!1,this.steps=[],this.label="Reasoning"}toggle(){this.open=!this.open}render(){return n`
      <div
        class="header"
        part="header"
        @click=${this.toggle}
        role="button"
        aria-expanded=${this.open}
        tabindex="0"
        @keydown=${t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.toggle())}}
      >
        <span class="icon" aria-hidden="true">▶</span>
        <span class="title">${this.label} (${this.steps.length} steps)</span>
      </div>
      <div class="steps" part="steps" role="list">
        ${this.steps.map((t,r)=>n`
          <div class="step" role="listitem">
            <span class="step-num">${r+1}.</span>
            <span>${t}</span>
          </div>
        `)}
      </div>
    `}};yr.styles=$g;ti([l({type:Boolean,reflect:!0})],yr.prototype,"open",2);ti([l({attribute:!1})],yr.prototype,"steps",2);ti([l()],yr.prototype,"label",2);yr=ti([c("wu-reasoning-trace")],yr);const Og=d`
  :host {
    display: block;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    overflow: hidden;
    font-size: var(--wu-text-sm);
    background: var(--wu-color-surface);
  }

  .header {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-primary-subtle);
    border-bottom: 1px solid var(--wu-color-border);
  }

  .tool-name {
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-primary);
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: var(--wu-text-xs);
    padding: 2px 6px;
    border-radius: var(--wu-radius-full);
    font-weight: var(--wu-font-medium);
    margin-left: auto;
  }

  .status-badge.running { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }
  .status-badge.success { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  .status-badge.error { background: var(--wu-color-danger-subtle); color: var(--wu-color-danger); }

  .body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  .section {
    padding: var(--wu-space-3);
  }

  .section + .section {
    border-left: 1px solid var(--wu-color-border);
  }

  .section-title {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }

  pre {
    margin: 0;
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text);
    white-space: pre-wrap;
    word-break: break-all;
  }
`;var jg=Object.defineProperty,Pg=Object.getOwnPropertyDescriptor,Ua=(t,r,a,o)=>{for(var e=o>1?void 0:o?Pg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&jg(r,a,e),e};let $t=class extends u{constructor(){super(...arguments),this.toolName="",this.status="success",this.input="",this.output=""}formatJSON(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch{return t}}get statusLabel(){switch(this.status){case"running":return"⟳ Running";case"success":return"✓ Done";case"error":return"✗ Error"}}render(){return n`
      <div class="header" part="header">
        <span class="tool-name">${this.toolName||"Tool Call"}</span>
        <span class="status-badge ${this.status}" aria-label="Status: ${this.status}">${this.statusLabel}</span>
      </div>
      <div class="body" part="body">
        <div class="section">
          <div class="section-title">Input</div>
          <pre>${this.formatJSON(this.input)}</pre>
        </div>
        <div class="section">
          <div class="section-title">Output</div>
          <pre>${this.formatJSON(this.output)}</pre>
        </div>
      </div>
    `}};$t.styles=Og;Ua([l({attribute:"tool-name"})],$t.prototype,"toolName",2);Ua([l({reflect:!0})],$t.prototype,"status",2);Ua([l()],$t.prototype,"input",2);Ua([l()],$t.prototype,"output",2);$t=Ua([c("wu-tool-call-display")],$t);const Cg=d`
  :host {
    display: inline-flex;
    align-items: center;
  }

  .avatars {
    display: flex;
    flex-direction: row-reverse;
  }

  .avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid var(--wu-color-background);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    margin-left: -8px;
    position: relative;
    cursor: default;
    overflow: hidden;
    flex-shrink: 0;
  }

  .avatar:last-child { margin-left: 0; }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overflow {
    background: var(--wu-color-surface-raised);
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-xs);
  }

  .label {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    margin-left: var(--wu-space-2);
  }
`;var Dg=Object.defineProperty,Eg=Object.getOwnPropertyDescriptor,ri=(t,r,a,o)=>{for(var e=o>1?void 0:o?Eg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Dg(r,a,e),e};let xr=class extends u{constructor(){super(...arguments),this.users=[],this.max=5,this.showLabel=!1}initials(t){return t.split(" ").map(r=>r[0]).join("").slice(0,2).toUpperCase()}render(){const t=this.users.slice(0,this.max),r=this.users.length-t.length,a=this.users.length===0?"No one else here":`${this.users.length} viewer${this.users.length>1?"s":""}`;return n`
      <div class="avatars" aria-label="${a}">
        ${r>0?n`<div class="avatar overflow">+${r}</div>`:""}
        ${[...t].reverse().map(o=>n`
          <div class="avatar" style=${o.color?`background:${o.color}`:""} title=${o.name} aria-label=${o.name}>
            ${o.avatar?n`<img src=${o.avatar} alt=${o.name}>`:this.initials(o.name)}
          </div>
        `)}
      </div>
      ${this.showLabel?n`<span class="label">${a}</span>`:""}
    `}};xr.styles=Cg;ri([l({attribute:!1})],xr.prototype,"users",2);ri([l({type:Number})],xr.prototype,"max",2);ri([l({type:Boolean,attribute:"show-label"})],xr.prototype,"showLabel",2);xr=ri([c("wu-presence")],xr);const Sg=d`
  :host {
    display: block;
    position: absolute;
    pointer-events: none;
    z-index: 999;
  }

  .cursor {
    position: absolute;
    transform: translate(-2px, -2px);
  }

  .pointer {
    width: 16px;
    height: 16px;
  }

  .label {
    display: inline-block;
    background: var(--wu-cursor-color, var(--wu-color-primary));
    color: white;
    font-size: 10px;
    padding: 1px 5px;
    border-radius: var(--wu-radius-sm);
    white-space: nowrap;
    margin-top: 2px;
    font-weight: var(--wu-font-medium);
    font-family: var(--wu-font-sans);
  }
`;var Mg=Object.defineProperty,Bg=Object.getOwnPropertyDescriptor,Ya=(t,r,a,o)=>{for(var e=o>1?void 0:o?Bg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Mg(r,a,e),e};let _t=class extends u{constructor(){super(...arguments),this.name="",this.color="#3b82f6",this.x=0,this.y=0}render(){return n`
      <div class="cursor" style="left:${this.x}px;top:${this.y}px;" aria-hidden="true">
        <svg class="pointer" viewBox="0 0 16 16" fill="none">
          ${jl`<path d="M2 2l12 5-6 1-3 6z" fill="${this.color}" stroke="white" stroke-width="1"/>`}
        </svg>
        ${this.name?n`<span class="label" style="background:${this.color}">${this.name}</span>`:""}
      </div>
    `}};_t.styles=Sg;Ya([l()],_t.prototype,"name",2);Ya([l()],_t.prototype,"color",2);Ya([l({type:Number})],_t.prototype,"x",2);Ya([l({type:Number})],_t.prototype,"y",2);_t=Ya([c("wu-user-cursor")],_t);const Ag=d`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--wu-color-success);
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  .text {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-bold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--wu-color-success);
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }

  @media (prefers-reduced-motion: reduce) {
    .dot { animation: none; }
  }
`;var Ig=Object.defineProperty,Ng=Object.getOwnPropertyDescriptor,Ui=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ng(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ig(r,a,e),e};let zo=class extends u{constructor(){super(...arguments),this.label="LIVE",this.active=!0}render(){return n`
      ${this.active?n`<span class="dot" aria-hidden="true"></span>`:""}
      <span class="text" role="status" aria-live="polite">${this.label}</span>
    `}};zo.styles=Ag;Ui([l()],zo.prototype,"label",2);Ui([l({type:Boolean,reflect:!0})],zo.prototype,"active",2);zo=Ui([c("wu-live-indicator")],zo);const Lg=d`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .icon { font-size: 14px; }

  :host([status="synced"]) { color: var(--wu-color-success); }
  :host([status="syncing"]) { color: var(--wu-color-warning); }
  :host([status="offline"]) { color: var(--wu-color-danger); }
  :host([status="error"]) { color: var(--wu-color-danger); }
`;var Tg=Object.defineProperty,qg=Object.getOwnPropertyDescriptor,Yi=(t,r,a,o)=>{for(var e=o>1?void 0:o?qg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Tg(r,a,e),e};let Oo=class extends u{constructor(){super(...arguments),this.status="synced",this.lastSaved=""}get icon(){switch(this.status){case"synced":return"☁️";case"syncing":return"🔄";case"offline":return"📴";case"error":return"⚠️"}}get label(){switch(this.status){case"synced":return this.lastSaved?`Saved ${this.lastSaved}`:"All changes saved";case"syncing":return"Saving…";case"offline":return"Offline";case"error":return"Save failed"}}render(){return n`
      <span class="icon" aria-hidden="true">${this.icon}</span>
      <span role="status" aria-live="polite">${this.label}</span>
    `}};Oo.styles=Lg;Yi([l({reflect:!0})],Oo.prototype,"status",2);Yi([l({attribute:"last-saved"})],Oo.prototype,"lastSaved",2);Oo=Yi([c("wu-sync-status")],Oo);const Rg=d`
  :host {
    display: block;
  }

  .banner {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-4);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    transition: background var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([status="online"]) .banner { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  :host([status="offline"]) .banner { background: var(--wu-color-danger-subtle); color: var(--wu-color-danger); }
  :host([status="reconnecting"]) .banner { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    flex-shrink: 0;
  }

  :host([status="reconnecting"]) .dot {
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;var Fg=Object.defineProperty,Hg=Object.getOwnPropertyDescriptor,kl=(t,r,a,o)=>{for(var e=o>1?void 0:o?Hg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Fg(r,a,e),e};let bs=class extends u{constructor(){super(...arguments),this.status="online"}get label(){switch(this.status){case"online":return"Connected";case"offline":return"No internet connection";case"reconnecting":return"Reconnecting…"}}render(){return n`
      <div class="banner" role="status" aria-live="polite">
        <span class="dot" aria-hidden="true"></span>
        ${this.label}
      </div>
    `}};bs.styles=Rg;kl([l({reflect:!0})],bs.prototype,"status",2);bs=kl([c("wu-connection-status")],bs);const Kg=d`
  :host {
    display: block;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    font-size: var(--wu-text-sm);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-color-warning-subtle);
    border-bottom: 1px solid var(--wu-color-border);
    gap: var(--wu-space-2);
    flex-wrap: wrap;
  }

  .title {
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-warning);
  }

  .diff {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  .pane {
    padding: var(--wu-space-4);
  }

  .pane + .pane {
    border-left: 1px solid var(--wu-color-border);
  }

  .pane-title {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--wu-color-text-secondary);
    margin-bottom: var(--wu-space-2);
  }

  .content {
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    white-space: pre-wrap;
    word-break: break-all;
    background: var(--wu-color-surface-raised);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-3);
  }

  .actions {
    display: flex;
    gap: var(--wu-space-2);
    padding: var(--wu-space-3) var(--wu-space-4);
    border-top: 1px solid var(--wu-color-border);
    justify-content: flex-end;
  }

  button {
    padding: var(--wu-space-2) var(--wu-space-4);
    border-radius: var(--wu-radius-md);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    border: 1px solid var(--wu-color-border);
    background: var(--wu-color-surface);
    color: var(--wu-color-text);
    cursor: pointer;
  }

  button.primary {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border-color: transparent;
  }

  button:hover { opacity: 0.85; }
`;var Vg=Object.defineProperty,Ug=Object.getOwnPropertyDescriptor,Fr=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ug(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Vg(r,a,e),e};let Ue=class extends u{constructor(){super(...arguments),this.mineLabel="Your version",this.theirsLabel="Their version",this.mineContent="",this.theirsContent="",this.title="Edit conflict detected"}resolve(t){this.dispatchEvent(new CustomEvent("wu-resolve",{bubbles:!0,composed:!0,detail:{winner:t}}))}render(){return n`
      <div class="header" role="alert">
        <span class="title">⚠️ ${this.title}</span>
      </div>
      <div class="diff">
        <div class="pane">
          <div class="pane-title">${this.mineLabel}</div>
          <div class="content" part="mine">${this.mineContent}</div>
        </div>
        <div class="pane">
          <div class="pane-title">${this.theirsLabel}</div>
          <div class="content" part="theirs">${this.theirsContent}</div>
        </div>
      </div>
      <div class="actions">
        <button @click=${()=>this.resolve("theirs")}>Keep ${this.theirsLabel}</button>
        <button class="primary" @click=${()=>this.resolve("mine")}>Keep ${this.mineLabel}</button>
      </div>
    `}};Ue.styles=Kg;Fr([l({attribute:"mine-label"})],Ue.prototype,"mineLabel",2);Fr([l({attribute:"theirs-label"})],Ue.prototype,"theirsLabel",2);Fr([l({attribute:"mine-content"})],Ue.prototype,"mineContent",2);Fr([l({attribute:"theirs-content"})],Ue.prototype,"theirsContent",2);Fr([l()],Ue.prototype,"title",2);Ue=Fr([c("wu-conflict-resolver")],Ue);const Yg=d`
  :host {
    display: block;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
    margin-bottom: var(--wu-space-4);
    position: relative;
  }

  label {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .input-wrap {
    position: relative;
  }

  input, textarea {
    width: 100%;
    box-sizing: border-box;
    padding: var(--wu-space-2) var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  input[aria-readonly="true"], textarea[aria-readonly="true"] {
    background: var(--wu-color-surface);
    cursor: not-allowed;
    opacity: 0.7;
  }

  .lock-badge {
    position: absolute;
    right: var(--wu-space-2);
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--wu-text-xs);
    background: var(--wu-color-warning-subtle);
    color: var(--wu-color-warning);
    padding: 2px 6px;
    border-radius: var(--wu-radius-full);
    white-space: nowrap;
  }
`;var Wg=Object.defineProperty,Xg=Object.getOwnPropertyDescriptor,$l=(t,r,a,o)=>{for(var e=o>1?void 0:o?Xg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Wg(r,a,e),e};let gs=class extends u{constructor(){super(...arguments),this.fields=[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"textarea"}]}emitFocusEvent(t,r){this.dispatchEvent(new CustomEvent(r,{bubbles:!0,composed:!0,detail:{field:t}}))}render(){return n`
      <form part="form" @submit=${t=>t.preventDefault()}>
        ${this.fields.map(t=>n`
          <div class="field" part="field">
            <label for="cf-${t.name}">${t.label}</label>
            <div class="input-wrap">
              ${t.type==="textarea"?n`<textarea
                    id="cf-${t.name}"
                    .value=${t.value??""}
                    aria-readonly=${t.lockedBy?"true":"false"}
                    ?readonly=${!!t.lockedBy}
                    rows="3"
                    @focus=${()=>this.emitFocusEvent(t.name,"wu-field-focus")}
                    @blur=${()=>this.emitFocusEvent(t.name,"wu-field-blur")}
                  ></textarea>`:n`<input
                    type=${t.type??"text"}
                    id="cf-${t.name}"
                    .value=${t.value??""}
                    aria-readonly=${t.lockedBy?"true":"false"}
                    ?readonly=${!!t.lockedBy}
                    @focus=${()=>this.emitFocusEvent(t.name,"wu-field-focus")}
                    @blur=${()=>this.emitFocusEvent(t.name,"wu-field-blur")}
                  >`}
              ${t.lockedBy?n`<span class="lock-badge">🔒 ${t.lockedBy}</span>`:""}
            </div>
          </div>
        `)}
      </form>
    `}};gs.styles=Yg;$l([l({attribute:!1})],gs.prototype,"fields",2);gs=$l([c("wu-collaborative-form")],gs);const Gg=d`
  :host {
    display: block;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    min-height: 20px;
    padding: var(--wu-space-1) 0;
    font-style: italic;
  }
`;var Jg=Object.defineProperty,Qg=Object.getOwnPropertyDescriptor,_l=(t,r,a,o)=>{for(var e=o>1?void 0:o?Qg(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Jg(r,a,e),e};let fs=class extends u{constructor(){super(...arguments),this.users=[]}get message(){if(this.users.length===0)return"";if(this.users.length===1)return`${this.users[0]} is typing…`;if(this.users.length===2)return`${this.users[0]} and ${this.users[1]} are typing…`;const t=this.users.length-2;return`${this.users[0]}, ${this.users[1]} and ${t} other${t>1?"s":""} are typing…`}render(){const t=this.message;return n`
      <span role="status" aria-live="polite">${t}</span>
    `}};fs.styles=Gg;_l([l({attribute:!1})],fs.prototype,"users",2);fs=_l([c("wu-typing-users")],fs);const Zg=d`
  :host { display: block; }
  .chart { width: 100%; }
  .stage { display: flex; flex-direction: column; gap: var(--wu-space-1); margin-bottom: var(--wu-space-2); }
  .stage-row { display: flex; align-items: center; gap: var(--wu-space-2); }
  .bar { height: 28px; background: var(--wu-color-primary); border-radius: var(--wu-radius-sm); transition: width var(--wu-duration-slow) var(--wu-ease-default); }
  .label { font-size: var(--wu-text-xs); color: var(--wu-color-text); min-width: 80px; white-space: nowrap; }
  .value { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-3); }
`;var ef=Object.defineProperty,tf=Object.getOwnPropertyDescriptor,Wi=(t,r,a,o)=>{for(var e=o>1?void 0:o?tf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ef(r,a,e),e};let jo=class extends u{constructor(){super(...arguments),this.title="",this.stages=[]}render(){const t=Math.max(...this.stages.map(r=>r.value),1);return n`
      <div class="chart" part="chart" role="figure" aria-label="${this.title||"Funnel chart"}">
        ${this.title?n`<div class="title">${this.title}</div>`:""}
        ${this.stages.map(r=>n`
          <div class="stage">
            <div class="stage-row">
              <span class="label">${r.label}</span>
              <div class="bar" style="width:${(r.value/t*100).toFixed(1)}%;${r.color?`background:${r.color}`:""}" role="progressbar" aria-valuenow=${r.value} aria-valuemax=${t} aria-label="${r.label}: ${r.value}"></div>
              <span class="value">${r.value.toLocaleString()}</span>
            </div>
          </div>
        `)}
      </div>
    `}};jo.styles=Zg;Wi([l()],jo.prototype,"title",2);Wi([l({attribute:!1})],jo.prototype,"stages",2);jo=Wi([c("wu-funnel-chart")],jo);const rf=d`
  :host { display: block; }
  svg { overflow: visible; }
  .node rect { rx: 2; }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-3); }
  .placeholder { background: var(--wu-color-surface); border: 1px dashed var(--wu-color-border); border-radius: var(--wu-radius-md); display: flex; align-items: center; justify-content: center; color: var(--wu-color-text-secondary); font-size: var(--wu-text-sm); height: 200px; }
`;var of=Object.defineProperty,af=Object.getOwnPropertyDescriptor,Hr=(t,r,a,o)=>{for(var e=o>1?void 0:o?af(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&of(r,a,e),e};let Ye=class extends u{constructor(){super(...arguments),this.title="",this.nodes=[],this.links=[],this.width=500,this.height=300}render(){return n`
      ${this.title?n`<div class="title">${this.title}</div>`:""}
      <div class="placeholder" style="width:${this.width}px;height:${this.height}px" role="figure" aria-label="${this.title||"Sankey chart"}">
        Sankey chart — ${this.nodes.length} nodes, ${this.links.length} links
      </div>
    `}};Ye.styles=rf;Hr([l()],Ye.prototype,"title",2);Hr([l({attribute:!1})],Ye.prototype,"nodes",2);Hr([l({attribute:!1})],Ye.prototype,"links",2);Hr([l({type:Number})],Ye.prototype,"width",2);Hr([l({type:Number})],Ye.prototype,"height",2);Ye=Hr([c("wu-sankey")],Ye);const sf=d`
  :host { display: block; }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-3); }
  .placeholder { background: var(--wu-color-surface); border: 1px dashed var(--wu-color-border); border-radius: var(--wu-radius-md); display: flex; align-items: center; justify-content: center; color: var(--wu-color-text-secondary); font-size: var(--wu-text-sm); }
`;var nf=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,Wa=(t,r,a,o)=>{for(var e=o>1?void 0:o?lf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&nf(r,a,e),e};let zt=class extends u{constructor(){super(...arguments),this.title="",this.data=[],this.width=500,this.height=300}render(){return n`
      ${this.title?n`<div class="title">${this.title}</div>`:""}
      <div class="placeholder" style="width:${this.width}px;height:${this.height}px" role="figure" aria-label="${this.title||"Tree map"}">
        Tree map — ${this.data.length} root nodes
      </div>`}};zt.styles=sf;Wa([l()],zt.prototype,"title",2);Wa([l({attribute:!1})],zt.prototype,"data",2);Wa([l({type:Number})],zt.prototype,"width",2);Wa([l({type:Number})],zt.prototype,"height",2);zt=Wa([c("wu-tree-map")],zt);const uf=d`
  :host { display: block; }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-3); }
  .placeholder { background: var(--wu-color-surface); border: 1px dashed var(--wu-color-border); border-radius: var(--wu-radius-md); display: flex; align-items: center; justify-content: center; color: var(--wu-color-text-secondary); font-size: var(--wu-text-sm); }
`;var cf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,oi=(t,r,a,o)=>{for(var e=o>1?void 0:o?df(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&cf(r,a,e),e};let kr=class extends u{constructor(){super(...arguments),this.title="",this.axes=[],this.size=300}render(){return n`
      ${this.title?n`<div class="title">${this.title}</div>`:""}
      <div class="placeholder" style="width:${this.size}px;height:${this.size}px" role="figure" aria-label="${this.title||"Radar chart"}">
        Radar chart — ${this.axes.length} axes
      </div>`}};kr.styles=uf;oi([l()],kr.prototype,"title",2);oi([l({attribute:!1})],kr.prototype,"axes",2);oi([l({type:Number})],kr.prototype,"size",2);kr=oi([c("wu-radar-chart")],kr);const pf=d`
  :host { display: block; }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-3); }
  .candles { display: flex; align-items: flex-end; gap: 3px; overflow-x: auto; padding: var(--wu-space-2) 0; }
  .candle { display: flex; flex-direction: column; align-items: center; gap: 1px; }
  .wick { width: 2px; background: var(--wu-color-text-secondary); }
  .body { width: 10px; border-radius: 1px; min-height: 4px; }
  .body.up { background: var(--wu-color-success); }
  .body.down { background: var(--wu-color-danger); }
`;var hf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,ai=(t,r,a,o)=>{for(var e=o>1?void 0:o?vf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&hf(r,a,e),e};let $r=class extends u{constructor(){super(...arguments),this.title="",this.candles=[],this.height=120}render(){const t=this.candles.flatMap(s=>[s.high,s.low]),r=Math.max(...t,1),a=Math.min(...t,0),o=r-a||1,e=(s,i)=>(Math.abs(s-i)/o*this.height).toFixed(1);return n`
      ${this.title?n`<div class="title">${this.title}</div>`:""}
      <div class="candles" role="figure" aria-label="${this.title||"Candlestick chart"}">
        ${this.candles.map(s=>{const i=s.close>=s.open;return n`
            <div class="candle" title="${s.date}: O=${s.open} H=${s.high} L=${s.low} C=${s.close}">
              <div class="wick" style="height:${e(s.high,Math.max(s.open,s.close))}px"></div>
              <div class="body ${i?"up":"down"}" style="height:${e(s.open,s.close)}px"></div>
              <div class="wick" style="height:${e(Math.min(s.open,s.close),s.low)}px"></div>
            </div>`})}
      </div>`}};$r.styles=pf;ai([l()],$r.prototype,"title",2);ai([l({attribute:!1})],$r.prototype,"candles",2);ai([l({type:Number})],$r.prototype,"height",2);$r=ai([c("wu-candlestick")],$r);const wf=d`
  :host { display: block; font-family: var(--wu-font-sans); }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-2); }
  .bars { display: flex; align-items: flex-end; gap: var(--wu-space-2); height: 120px; }
  .bar-wrap { display: flex; flex-direction: column; align-items: center; gap: 2px; flex: 1; }
  .bar { width: 100%; border-radius: var(--wu-radius-sm) var(--wu-radius-sm) 0 0; min-height: 4px; transition: opacity var(--wu-duration-normal) var(--wu-ease-default); }
  .bar.positive { background: var(--wu-color-success); }
  .bar.negative { background: var(--wu-color-danger); }
  .bar.total { background: var(--wu-color-primary); }
  .bar-label { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); text-align: center; }
  .bar-value { font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); color: var(--wu-color-text); }
`;var bf=Object.defineProperty,gf=Object.getOwnPropertyDescriptor,si=(t,r,a,o)=>{for(var e=o>1?void 0:o?gf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&bf(r,a,e),e};let _r=class extends u{constructor(){super(...arguments),this.title="",this.items=[],this.height=120}render(){const t=Math.max(...this.items.map(r=>Math.abs(r.value)),1);return n`
      ${this.title?n`<div class="title">${this.title}</div>`:""}
      <div class="bars" role="figure" aria-label="${this.title||"Waterfall chart"}"
           style="height:${this.height}px">
        ${this.items.map(r=>{const a=Math.round(Math.abs(r.value)/t*(this.height-20)),o=r.total?"total":r.value>=0?"positive":"negative";return n`
            <div class="bar-wrap">
              <div class="bar-value">${r.value>0?"+":""}${r.value}</div>
              <div class="bar ${o}" style="height:${a}px"></div>
              <div class="bar-label">${r.label}</div>
            </div>`})}
      </div>`}};_r.styles=wf;si([l()],_r.prototype,"title",2);si([l({attribute:!1})],_r.prototype,"items",2);si([l({type:Number})],_r.prototype,"height",2);_r=si([c("wu-waterfall-chart")],_r);const ff=d`
  :host { display: block; font-family: var(--wu-font-sans); }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-2); }
  .placeholder { background: var(--wu-color-surface); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--wu-space-2); padding: var(--wu-space-8); color: var(--wu-color-text-secondary); font-size: var(--wu-text-sm); min-height: 200px; }
  .placeholder svg { width: 40px; height: 40px; opacity: 0.5; }
  .region-list { width: 100%; max-height: 120px; overflow-y: auto; }
  .region { display: flex; align-items: center; justify-content: space-between; padding: var(--wu-space-1) var(--wu-space-2); border-radius: var(--wu-radius-sm); font-size: var(--wu-text-xs); }
  .region:hover { background: var(--wu-color-surface); }
  .region-id { color: var(--wu-color-text-secondary); font-weight: var(--wu-font-medium); }
  .region-label { color: var(--wu-color-text); flex: 1; margin: 0 var(--wu-space-2); }
  .region-value { color: var(--wu-color-primary); font-weight: var(--wu-font-semibold); }
`;var mf=Object.defineProperty,yf=Object.getOwnPropertyDescriptor,ii=(t,r,a,o)=>{for(var e=o>1?void 0:o?yf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&mf(r,a,e),e};let zr=class extends u{constructor(){super(...arguments),this.title="",this.regions=[],this.projection="mercator"}select(t){this.dispatchEvent(new CustomEvent("wu-region-select",{bubbles:!0,composed:!0,detail:{region:t}}))}render(){return n`
      ${this.title?n`<div class="title">${this.title}</div>`:""}
      <div class="placeholder" role="figure" aria-label="${this.title||"Geographic map"}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span>Geo map — ${this.projection} projection</span>
        ${this.regions.length?n`
          <div class="region-list">
            ${this.regions.map(t=>n`
              <div class="region" @click=${()=>this.select(t)} role="button" tabindex="0"
                   @keydown=${r=>r.key==="Enter"&&this.select(t)}>
                <span class="region-id">${t.id}</span>
                <span class="region-label">${t.label}</span>
                ${t.value!=null?n`<span class="region-value">${t.value}</span>`:""}
              </div>`)}
          </div>`:""}
      </div>`}};zr.styles=ff;ii([l()],zr.prototype,"title",2);ii([l({attribute:!1})],zr.prototype,"regions",2);ii([l()],zr.prototype,"projection",2);zr=ii([c("wu-geo-map")],zr);const xf=d`
  :host { display: block; font-family: var(--wu-font-sans); }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-2); }
  .placeholder { background: var(--wu-color-surface); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--wu-space-2); padding: var(--wu-space-8); color: var(--wu-color-text-secondary); font-size: var(--wu-text-sm); min-height: 200px; }
  .placeholder svg { width: 40px; height: 40px; opacity: 0.5; }
  .stats { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); }
  .nodes-list { display: flex; flex-wrap: wrap; gap: var(--wu-space-2); margin-top: var(--wu-space-2); }
  .node-chip { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); padding: 2px var(--wu-space-2); border-radius: var(--wu-radius-full); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); }
`;var kf=Object.defineProperty,$f=Object.getOwnPropertyDescriptor,Xa=(t,r,a,o)=>{for(var e=o>1?void 0:o?$f(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&kf(r,a,e),e};let Ot=class extends u{constructor(){super(...arguments),this.title="",this.nodes=[],this.edges=[],this.layout="force"}selectNode(t){this.dispatchEvent(new CustomEvent("wu-node-select",{bubbles:!0,composed:!0,detail:{node:t}}))}render(){return n`
      ${this.title?n`<div class="title">${this.title}</div>`:""}
      <div class="placeholder" role="figure" aria-label="${this.title||"Network graph"}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/>
          <line x1="8" y1="12" x2="16" y2="7"/><line x1="8" y1="12" x2="16" y2="17"/>
        </svg>
        <div class="stats">${this.nodes.length} nodes · ${this.edges.length} edges · ${this.layout} layout</div>
        ${this.nodes.length?n`
          <div class="nodes-list">
            ${this.nodes.map(t=>n`
              <span class="node-chip" @click=${()=>this.selectNode(t)}
                    role="button" tabindex="0"
                    @keydown=${r=>r.key==="Enter"&&this.selectNode(t)}>
                ${t.label}
              </span>`)}
          </div>`:""}
      </div>`}};Ot.styles=xf;Xa([l()],Ot.prototype,"title",2);Xa([l({attribute:!1})],Ot.prototype,"nodes",2);Xa([l({attribute:!1})],Ot.prototype,"edges",2);Xa([l()],Ot.prototype,"layout",2);Ot=Xa([c("wu-network-graph")],Ot);const _f=d`
  :host { display: block; font-family: var(--wu-font-sans); color: var(--wu-color-text); }
  .container { background: var(--wu-color-surface); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md); padding: var(--wu-space-4); font-size: var(--wu-text-sm); }
  .label { font-size: var(--wu-text-xs); font-weight: var(--wu-font-semibold); color: var(--wu-color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--wu-space-2); }
  .content { color: var(--wu-color-text); line-height: var(--wu-leading-normal); }
`;var zf=Object.defineProperty,Of=Object.getOwnPropertyDescriptor,Xi=(t,r,a,o)=>{for(var e=o>1?void 0:o?Of(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&zf(r,a,e),e};let Po=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Po.styles=_f;Xi([l()],Po.prototype,"label",2);Xi([l()],Po.prototype,"value",2);Po=Xi([c("wu-image-crop")],Po);const jf=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-image-compare-bg: var(--wu-color-surface);
    --wu-image-compare-border: var(--wu-color-border);
    --wu-image-compare-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-image-compare-bg);
    border: 1px solid var(--wu-image-compare-border);
    border-radius: var(--wu-image-compare-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Pf=Object.defineProperty,Cf=Object.getOwnPropertyDescriptor,Gi=(t,r,a,o)=>{for(var e=o>1?void 0:o?Cf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Pf(r,a,e),e};let Co=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Co.styles=jf;Gi([l()],Co.prototype,"label",2);Gi([l()],Co.prototype,"value",2);Co=Gi([c("wu-image-compare")],Co);const Df=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-color-swatch-bg: var(--wu-color-surface);
    --wu-color-swatch-border: var(--wu-color-border);
    --wu-color-swatch-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-color-swatch-bg);
    border: 1px solid var(--wu-color-swatch-border);
    border-radius: var(--wu-color-swatch-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Ef=Object.defineProperty,Sf=Object.getOwnPropertyDescriptor,Ji=(t,r,a,o)=>{for(var e=o>1?void 0:o?Sf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ef(r,a,e),e};let Do=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Do.styles=Df;Ji([l()],Do.prototype,"label",2);Ji([l()],Do.prototype,"value",2);Do=Ji([c("wu-color-swatch")],Do);const Mf=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-color-palette-bg: var(--wu-color-surface);
    --wu-color-palette-border: var(--wu-color-border);
    --wu-color-palette-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-color-palette-bg);
    border: 1px solid var(--wu-color-palette-border);
    border-radius: var(--wu-color-palette-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Bf=Object.defineProperty,Af=Object.getOwnPropertyDescriptor,Qi=(t,r,a,o)=>{for(var e=o>1?void 0:o?Af(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Bf(r,a,e),e};let Eo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Eo.styles=Mf;Qi([l()],Eo.prototype,"label",2);Qi([l()],Eo.prototype,"value",2);Eo=Qi([c("wu-color-palette")],Eo);const If=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-icon-bg: var(--wu-color-surface);
    --wu-icon-border: var(--wu-color-border);
    --wu-icon-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-icon-bg);
    border: 1px solid var(--wu-icon-border);
    border-radius: var(--wu-icon-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Nf=Object.defineProperty,Lf=Object.getOwnPropertyDescriptor,Zi=(t,r,a,o)=>{for(var e=o>1?void 0:o?Lf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Nf(r,a,e),e};let So=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};So.styles=If;Zi([l()],So.prototype,"label",2);Zi([l()],So.prototype,"value",2);So=Zi([c("wu-icon")],So);const Tf=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-lottie-bg: var(--wu-color-surface);
    --wu-lottie-border: var(--wu-color-border);
    --wu-lottie-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-lottie-bg);
    border: 1px solid var(--wu-lottie-border);
    border-radius: var(--wu-lottie-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var qf=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,en=(t,r,a,o)=>{for(var e=o>1?void 0:o?Rf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&qf(r,a,e),e};let Mo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Mo.styles=Tf;en([l()],Mo.prototype,"label",2);en([l()],Mo.prototype,"value",2);Mo=en([c("wu-lottie")],Mo);const Ff=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-confetti-bg: var(--wu-color-surface);
    --wu-confetti-border: var(--wu-color-border);
    --wu-confetti-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-confetti-bg);
    border: 1px solid var(--wu-confetti-border);
    border-radius: var(--wu-confetti-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Hf=Object.defineProperty,Kf=Object.getOwnPropertyDescriptor,tn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Kf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Hf(r,a,e),e};let Bo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Bo.styles=Ff;tn([l()],Bo.prototype,"label",2);tn([l()],Bo.prototype,"value",2);Bo=tn([c("wu-confetti")],Bo);const Vf=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-canvas-sketch-bg: var(--wu-color-surface);
    --wu-canvas-sketch-border: var(--wu-color-border);
    --wu-canvas-sketch-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-canvas-sketch-bg);
    border: 1px solid var(--wu-canvas-sketch-border);
    border-radius: var(--wu-canvas-sketch-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Uf=Object.defineProperty,Yf=Object.getOwnPropertyDescriptor,rn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Yf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Uf(r,a,e),e};let Ao=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Ao.styles=Vf;rn([l()],Ao.prototype,"label",2);rn([l()],Ao.prototype,"value",2);Ao=rn([c("wu-canvas-sketch")],Ao);const Wf=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-pdf-viewer-bg: var(--wu-color-surface);
    --wu-pdf-viewer-border: var(--wu-color-border);
    --wu-pdf-viewer-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-pdf-viewer-bg);
    border: 1px solid var(--wu-pdf-viewer-border);
    border-radius: var(--wu-pdf-viewer-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Xf=Object.defineProperty,Gf=Object.getOwnPropertyDescriptor,on=(t,r,a,o)=>{for(var e=o>1?void 0:o?Gf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Xf(r,a,e),e};let Io=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Io.styles=Wf;on([l()],Io.prototype,"label",2);on([l()],Io.prototype,"value",2);Io=on([c("wu-pdf-viewer")],Io);const Jf=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-map-bg: var(--wu-color-surface);
    --wu-map-border: var(--wu-color-border);
    --wu-map-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-map-bg);
    border: 1px solid var(--wu-map-border);
    border-radius: var(--wu-map-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Qf=Object.defineProperty,Zf=Object.getOwnPropertyDescriptor,an=(t,r,a,o)=>{for(var e=o>1?void 0:o?Zf(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Qf(r,a,e),e};let No=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};No.styles=Jf;an([l()],No.prototype,"label",2);an([l()],No.prototype,"value",2);No=an([c("wu-map")],No);const em=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-address-input-bg: var(--wu-color-surface);
    --wu-address-input-border: var(--wu-color-border);
    --wu-address-input-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-address-input-bg);
    border: 1px solid var(--wu-address-input-border);
    border-radius: var(--wu-address-input-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var tm=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,sn=(t,r,a,o)=>{for(var e=o>1?void 0:o?rm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&tm(r,a,e),e};let Lo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Lo.styles=em;sn([l()],Lo.prototype,"label",2);sn([l()],Lo.prototype,"value",2);Lo=sn([c("wu-address-input")],Lo);const om=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-location-picker-bg: var(--wu-color-surface);
    --wu-location-picker-border: var(--wu-color-border);
    --wu-location-picker-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-location-picker-bg);
    border: 1px solid var(--wu-location-picker-border);
    border-radius: var(--wu-location-picker-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var am=Object.defineProperty,sm=Object.getOwnPropertyDescriptor,nn=(t,r,a,o)=>{for(var e=o>1?void 0:o?sm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&am(r,a,e),e};let To=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};To.styles=om;nn([l()],To.prototype,"label",2);nn([l()],To.prototype,"value",2);To=nn([c("wu-location-picker")],To);const im=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-route-display-bg: var(--wu-color-surface);
    --wu-route-display-border: var(--wu-color-border);
    --wu-route-display-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-route-display-bg);
    border: 1px solid var(--wu-route-display-border);
    border-radius: var(--wu-route-display-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var nm=Object.defineProperty,lm=Object.getOwnPropertyDescriptor,ln=(t,r,a,o)=>{for(var e=o>1?void 0:o?lm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&nm(r,a,e),e};let qo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};qo.styles=im;ln([l()],qo.prototype,"label",2);ln([l()],qo.prototype,"value",2);qo=ln([c("wu-route-display")],qo);const um=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-geofence-bg: var(--wu-color-surface);
    --wu-geofence-border: var(--wu-color-border);
    --wu-geofence-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-geofence-bg);
    border: 1px solid var(--wu-geofence-border);
    border-radius: var(--wu-geofence-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var cm=Object.defineProperty,dm=Object.getOwnPropertyDescriptor,un=(t,r,a,o)=>{for(var e=o>1?void 0:o?dm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&cm(r,a,e),e};let Ro=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Ro.styles=um;un([l()],Ro.prototype,"label",2);un([l()],Ro.prototype,"value",2);Ro=un([c("wu-geofence")],Ro);const pm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-distance-calculator-bg: var(--wu-color-surface);
    --wu-distance-calculator-border: var(--wu-color-border);
    --wu-distance-calculator-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-distance-calculator-bg);
    border: 1px solid var(--wu-distance-calculator-border);
    border-radius: var(--wu-distance-calculator-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var hm=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,cn=(t,r,a,o)=>{for(var e=o>1?void 0:o?vm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&hm(r,a,e),e};let Fo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Fo.styles=pm;cn([l()],Fo.prototype,"label",2);cn([l()],Fo.prototype,"value",2);Fo=cn([c("wu-distance-calculator")],Fo);const wm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-invoice-bg: var(--wu-color-surface);
    --wu-invoice-border: var(--wu-color-border);
    --wu-invoice-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-invoice-bg);
    border: 1px solid var(--wu-invoice-border);
    border-radius: var(--wu-invoice-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var bm=Object.defineProperty,gm=Object.getOwnPropertyDescriptor,dn=(t,r,a,o)=>{for(var e=o>1?void 0:o?gm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&bm(r,a,e),e};let Ho=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Ho.styles=wm;dn([l()],Ho.prototype,"label",2);dn([l()],Ho.prototype,"value",2);Ho=dn([c("wu-invoice")],Ho);const fm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-receipt-bg: var(--wu-color-surface);
    --wu-receipt-border: var(--wu-color-border);
    --wu-receipt-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-receipt-bg);
    border: 1px solid var(--wu-receipt-border);
    border-radius: var(--wu-receipt-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var mm=Object.defineProperty,ym=Object.getOwnPropertyDescriptor,pn=(t,r,a,o)=>{for(var e=o>1?void 0:o?ym(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&mm(r,a,e),e};let Ko=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Ko.styles=fm;pn([l()],Ko.prototype,"label",2);pn([l()],Ko.prototype,"value",2);Ko=pn([c("wu-receipt")],Ko);const xm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-letter-bg: var(--wu-color-surface);
    --wu-letter-border: var(--wu-color-border);
    --wu-letter-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-letter-bg);
    border: 1px solid var(--wu-letter-border);
    border-radius: var(--wu-letter-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var km=Object.defineProperty,$m=Object.getOwnPropertyDescriptor,hn=(t,r,a,o)=>{for(var e=o>1?void 0:o?$m(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&km(r,a,e),e};let Vo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Vo.styles=xm;hn([l()],Vo.prototype,"label",2);hn([l()],Vo.prototype,"value",2);Vo=hn([c("wu-letter")],Vo);const _m=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-report-bg: var(--wu-color-surface);
    --wu-report-border: var(--wu-color-border);
    --wu-report-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-report-bg);
    border: 1px solid var(--wu-report-border);
    border-radius: var(--wu-report-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var zm=Object.defineProperty,Om=Object.getOwnPropertyDescriptor,vn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Om(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&zm(r,a,e),e};let Uo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Uo.styles=_m;vn([l()],Uo.prototype,"label",2);vn([l()],Uo.prototype,"value",2);Uo=vn([c("wu-report")],Uo);const jm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-certificate-bg: var(--wu-color-surface);
    --wu-certificate-border: var(--wu-color-border);
    --wu-certificate-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-certificate-bg);
    border: 1px solid var(--wu-certificate-border);
    border-radius: var(--wu-certificate-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Pm=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,wn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Cm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Pm(r,a,e),e};let Yo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Yo.styles=jm;wn([l()],Yo.prototype,"label",2);wn([l()],Yo.prototype,"value",2);Yo=wn([c("wu-certificate")],Yo);const Dm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-label-sheet-bg: var(--wu-color-surface);
    --wu-label-sheet-border: var(--wu-color-border);
    --wu-label-sheet-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-label-sheet-bg);
    border: 1px solid var(--wu-label-sheet-border);
    border-radius: var(--wu-label-sheet-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Em=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,bn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Sm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Em(r,a,e),e};let Wo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Wo.styles=Dm;bn([l()],Wo.prototype,"label",2);bn([l()],Wo.prototype,"value",2);Wo=bn([c("wu-label-sheet")],Wo);const Mm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-api-explorer-bg: var(--wu-color-surface);
    --wu-api-explorer-border: var(--wu-color-border);
    --wu-api-explorer-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-api-explorer-bg);
    border: 1px solid var(--wu-api-explorer-border);
    border-radius: var(--wu-api-explorer-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Bm=Object.defineProperty,Am=Object.getOwnPropertyDescriptor,gn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Am(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Bm(r,a,e),e};let Xo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Xo.styles=Mm;gn([l()],Xo.prototype,"label",2);gn([l()],Xo.prototype,"value",2);Xo=gn([c("wu-api-explorer")],Xo);const Im=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-code-editor-bg: var(--wu-color-surface);
    --wu-code-editor-border: var(--wu-color-border);
    --wu-code-editor-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-code-editor-bg);
    border: 1px solid var(--wu-code-editor-border);
    border-radius: var(--wu-code-editor-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Nm=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,fn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Lm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Nm(r,a,e),e};let Go=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Go.styles=Im;fn([l()],Go.prototype,"label",2);fn([l()],Go.prototype,"value",2);Go=fn([c("wu-code-editor")],Go);const Tm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-terminal-bg: var(--wu-color-surface);
    --wu-terminal-border: var(--wu-color-border);
    --wu-terminal-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-terminal-bg);
    border: 1px solid var(--wu-terminal-border);
    border-radius: var(--wu-terminal-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var qm=Object.defineProperty,Rm=Object.getOwnPropertyDescriptor,mn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Rm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&qm(r,a,e),e};let Jo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Jo.styles=Tm;mn([l()],Jo.prototype,"label",2);mn([l()],Jo.prototype,"value",2);Jo=mn([c("wu-terminal")],Jo);const Fm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-schema-viewer-bg: var(--wu-color-surface);
    --wu-schema-viewer-border: var(--wu-color-border);
    --wu-schema-viewer-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-schema-viewer-bg);
    border: 1px solid var(--wu-schema-viewer-border);
    border-radius: var(--wu-schema-viewer-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Hm=Object.defineProperty,Km=Object.getOwnPropertyDescriptor,yn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Km(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Hm(r,a,e),e};let Qo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Qo.styles=Fm;yn([l()],Qo.prototype,"label",2);yn([l()],Qo.prototype,"value",2);Qo=yn([c("wu-schema-viewer")],Qo);const Vm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-webhook-log-bg: var(--wu-color-surface);
    --wu-webhook-log-border: var(--wu-color-border);
    --wu-webhook-log-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-webhook-log-bg);
    border: 1px solid var(--wu-webhook-log-border);
    border-radius: var(--wu-webhook-log-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Um=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,xn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ym(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Um(r,a,e),e};let Zo=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Zo.styles=Vm;xn([l()],Zo.prototype,"label",2);xn([l()],Zo.prototype,"value",2);Zo=xn([c("wu-webhook-log")],Zo);const Wm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-env-vars-bg: var(--wu-color-surface);
    --wu-env-vars-border: var(--wu-color-border);
    --wu-env-vars-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-env-vars-bg);
    border: 1px solid var(--wu-env-vars-border);
    border-radius: var(--wu-env-vars-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Xm=Object.defineProperty,Gm=Object.getOwnPropertyDescriptor,kn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Gm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Xm(r,a,e),e};let ea=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ea.styles=Wm;kn([l()],ea.prototype,"label",2);kn([l()],ea.prototype,"value",2);ea=kn([c("wu-env-vars")],ea);const Jm=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-cron-builder-bg: var(--wu-color-surface);
    --wu-cron-builder-border: var(--wu-color-border);
    --wu-cron-builder-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-cron-builder-bg);
    border: 1px solid var(--wu-cron-builder-border);
    border-radius: var(--wu-cron-builder-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Qm=Object.defineProperty,Zm=Object.getOwnPropertyDescriptor,$n=(t,r,a,o)=>{for(var e=o>1?void 0:o?Zm(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Qm(r,a,e),e};let ta=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ta.styles=Jm;$n([l()],ta.prototype,"label",2);$n([l()],ta.prototype,"value",2);ta=$n([c("wu-cron-builder")],ta);const ey=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-regex-tester-bg: var(--wu-color-surface);
    --wu-regex-tester-border: var(--wu-color-border);
    --wu-regex-tester-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-regex-tester-bg);
    border: 1px solid var(--wu-regex-tester-border);
    border-radius: var(--wu-regex-tester-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var ty=Object.defineProperty,ry=Object.getOwnPropertyDescriptor,_n=(t,r,a,o)=>{for(var e=o>1?void 0:o?ry(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ty(r,a,e),e};let ra=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ra.styles=ey;_n([l()],ra.prototype,"label",2);_n([l()],ra.prototype,"value",2);ra=_n([c("wu-regex-tester")],ra);const oy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-metric-card-bg: var(--wu-color-surface);
    --wu-metric-card-border: var(--wu-color-border);
    --wu-metric-card-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-metric-card-bg);
    border: 1px solid var(--wu-metric-card-border);
    border-radius: var(--wu-metric-card-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var ay=Object.defineProperty,sy=Object.getOwnPropertyDescriptor,zn=(t,r,a,o)=>{for(var e=o>1?void 0:o?sy(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ay(r,a,e),e};let oa=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};oa.styles=oy;zn([l()],oa.prototype,"label",2);zn([l()],oa.prototype,"value",2);oa=zn([c("wu-metric-card")],oa);const iy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-uptime-bar-bg: var(--wu-color-surface);
    --wu-uptime-bar-border: var(--wu-color-border);
    --wu-uptime-bar-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-uptime-bar-bg);
    border: 1px solid var(--wu-uptime-bar-border);
    border-radius: var(--wu-uptime-bar-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var ny=Object.defineProperty,ly=Object.getOwnPropertyDescriptor,On=(t,r,a,o)=>{for(var e=o>1?void 0:o?ly(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ny(r,a,e),e};let aa=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};aa.styles=iy;On([l()],aa.prototype,"label",2);On([l()],aa.prototype,"value",2);aa=On([c("wu-uptime-bar")],aa);const uy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-alert-rule-bg: var(--wu-color-surface);
    --wu-alert-rule-border: var(--wu-color-border);
    --wu-alert-rule-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-alert-rule-bg);
    border: 1px solid var(--wu-alert-rule-border);
    border-radius: var(--wu-alert-rule-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var cy=Object.defineProperty,dy=Object.getOwnPropertyDescriptor,jn=(t,r,a,o)=>{for(var e=o>1?void 0:o?dy(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&cy(r,a,e),e};let sa=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};sa.styles=uy;jn([l()],sa.prototype,"label",2);jn([l()],sa.prototype,"value",2);sa=jn([c("wu-alert-rule")],sa);const py=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-log-stream-bg: var(--wu-color-surface);
    --wu-log-stream-border: var(--wu-color-border);
    --wu-log-stream-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-log-stream-bg);
    border: 1px solid var(--wu-log-stream-border);
    border-radius: var(--wu-log-stream-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var hy=Object.defineProperty,vy=Object.getOwnPropertyDescriptor,Pn=(t,r,a,o)=>{for(var e=o>1?void 0:o?vy(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&hy(r,a,e),e};let ia=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ia.styles=py;Pn([l()],ia.prototype,"label",2);Pn([l()],ia.prototype,"value",2);ia=Pn([c("wu-log-stream")],ia);const wy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-error-trace-bg: var(--wu-color-surface);
    --wu-error-trace-border: var(--wu-color-border);
    --wu-error-trace-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-error-trace-bg);
    border: 1px solid var(--wu-error-trace-border);
    border-radius: var(--wu-error-trace-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var by=Object.defineProperty,gy=Object.getOwnPropertyDescriptor,Cn=(t,r,a,o)=>{for(var e=o>1?void 0:o?gy(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&by(r,a,e),e};let na=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};na.styles=wy;Cn([l()],na.prototype,"label",2);Cn([l()],na.prototype,"value",2);na=Cn([c("wu-error-trace")],na);const fy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-event-timeline-bg: var(--wu-color-surface);
    --wu-event-timeline-border: var(--wu-color-border);
    --wu-event-timeline-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-event-timeline-bg);
    border: 1px solid var(--wu-event-timeline-border);
    border-radius: var(--wu-event-timeline-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var my=Object.defineProperty,yy=Object.getOwnPropertyDescriptor,Dn=(t,r,a,o)=>{for(var e=o>1?void 0:o?yy(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&my(r,a,e),e};let la=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};la.styles=fy;Dn([l()],la.prototype,"label",2);Dn([l()],la.prototype,"value",2);la=Dn([c("wu-event-timeline")],la);const xy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-health-check-bg: var(--wu-color-surface);
    --wu-health-check-border: var(--wu-color-border);
    --wu-health-check-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-health-check-bg);
    border: 1px solid var(--wu-health-check-border);
    border-radius: var(--wu-health-check-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var ky=Object.defineProperty,$y=Object.getOwnPropertyDescriptor,En=(t,r,a,o)=>{for(var e=o>1?void 0:o?$y(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ky(r,a,e),e};let ua=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ua.styles=xy;En([l()],ua.prototype,"label",2);En([l()],ua.prototype,"value",2);ua=En([c("wu-health-check")],ua);const _y=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-sla-tracker-bg: var(--wu-color-surface);
    --wu-sla-tracker-border: var(--wu-color-border);
    --wu-sla-tracker-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-sla-tracker-bg);
    border: 1px solid var(--wu-sla-tracker-border);
    border-radius: var(--wu-sla-tracker-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var zy=Object.defineProperty,Oy=Object.getOwnPropertyDescriptor,Sn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Oy(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&zy(r,a,e),e};let ca=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ca.styles=_y;Sn([l()],ca.prototype,"label",2);Sn([l()],ca.prototype,"value",2);ca=Sn([c("wu-sla-tracker")],ca);const jy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-skip-link-bg: var(--wu-color-surface);
    --wu-skip-link-border: var(--wu-color-border);
    --wu-skip-link-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-skip-link-bg);
    border: 1px solid var(--wu-skip-link-border);
    border-radius: var(--wu-skip-link-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Py=Object.defineProperty,Cy=Object.getOwnPropertyDescriptor,Mn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Cy(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Py(r,a,e),e};let da=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};da.styles=jy;Mn([l()],da.prototype,"label",2);Mn([l()],da.prototype,"value",2);da=Mn([c("wu-skip-link")],da);const Dy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-focus-trap-bg: var(--wu-color-surface);
    --wu-focus-trap-border: var(--wu-color-border);
    --wu-focus-trap-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-focus-trap-bg);
    border: 1px solid var(--wu-focus-trap-border);
    border-radius: var(--wu-focus-trap-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Ey=Object.defineProperty,Sy=Object.getOwnPropertyDescriptor,Bn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Sy(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ey(r,a,e),e};let pa=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};pa.styles=Dy;Bn([l()],pa.prototype,"label",2);Bn([l()],pa.prototype,"value",2);pa=Bn([c("wu-focus-trap")],pa);const My=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-announce-bg: var(--wu-color-surface);
    --wu-announce-border: var(--wu-color-border);
    --wu-announce-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-announce-bg);
    border: 1px solid var(--wu-announce-border);
    border-radius: var(--wu-announce-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var By=Object.defineProperty,Ay=Object.getOwnPropertyDescriptor,An=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ay(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&By(r,a,e),e};let ha=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ha.styles=My;An([l()],ha.prototype,"label",2);An([l()],ha.prototype,"value",2);ha=An([c("wu-announce")],ha);const Iy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-sr-only-bg: var(--wu-color-surface);
    --wu-sr-only-border: var(--wu-color-border);
    --wu-sr-only-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-sr-only-bg);
    border: 1px solid var(--wu-sr-only-border);
    border-radius: var(--wu-sr-only-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Ny=Object.defineProperty,Ly=Object.getOwnPropertyDescriptor,In=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ly(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ny(r,a,e),e};let va=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};va.styles=Iy;In([l()],va.prototype,"label",2);In([l()],va.prototype,"value",2);va=In([c("wu-sr-only")],va);const Ty=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-reduced-motion-bg: var(--wu-color-surface);
    --wu-reduced-motion-border: var(--wu-color-border);
    --wu-reduced-motion-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-reduced-motion-bg);
    border: 1px solid var(--wu-reduced-motion-border);
    border-radius: var(--wu-reduced-motion-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var qy=Object.defineProperty,Ry=Object.getOwnPropertyDescriptor,Nn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ry(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&qy(r,a,e),e};let wa=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};wa.styles=Ty;Nn([l()],wa.prototype,"label",2);Nn([l()],wa.prototype,"value",2);wa=Nn([c("wu-reduced-motion")],wa);const Fy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-high-contrast-bg: var(--wu-color-surface);
    --wu-high-contrast-border: var(--wu-color-border);
    --wu-high-contrast-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-high-contrast-bg);
    border: 1px solid var(--wu-high-contrast-border);
    border-radius: var(--wu-high-contrast-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Hy=Object.defineProperty,Ky=Object.getOwnPropertyDescriptor,Ln=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ky(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Hy(r,a,e),e};let ba=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ba.styles=Fy;Ln([l()],ba.prototype,"label",2);Ln([l()],ba.prototype,"value",2);ba=Ln([c("wu-high-contrast")],ba);const Vy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-keyboard-focus-bg: var(--wu-color-surface);
    --wu-keyboard-focus-border: var(--wu-color-border);
    --wu-keyboard-focus-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-keyboard-focus-bg);
    border: 1px solid var(--wu-keyboard-focus-border);
    border-radius: var(--wu-keyboard-focus-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Uy=Object.defineProperty,Yy=Object.getOwnPropertyDescriptor,Tn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Yy(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Uy(r,a,e),e};let ga=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ga.styles=Vy;Tn([l()],ga.prototype,"label",2);Tn([l()],ga.prototype,"value",2);ga=Tn([c("wu-keyboard-focus")],ga);const Wy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-landmark-bg: var(--wu-color-surface);
    --wu-landmark-border: var(--wu-color-border);
    --wu-landmark-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-landmark-bg);
    border: 1px solid var(--wu-landmark-border);
    border-radius: var(--wu-landmark-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Xy=Object.defineProperty,Gy=Object.getOwnPropertyDescriptor,qn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Gy(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Xy(r,a,e),e};let fa=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};fa.styles=Wy;qn([l()],fa.prototype,"label",2);qn([l()],fa.prototype,"value",2);fa=qn([c("wu-landmark")],fa);const Jy=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-wallet-connect-bg: var(--wu-color-surface);
    --wu-wallet-connect-border: var(--wu-color-border);
    --wu-wallet-connect-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-wallet-connect-bg);
    border: 1px solid var(--wu-wallet-connect-border);
    border-radius: var(--wu-wallet-connect-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Qy=Object.defineProperty,Zy=Object.getOwnPropertyDescriptor,Rn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Zy(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Qy(r,a,e),e};let ma=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ma.styles=Jy;Rn([l()],ma.prototype,"label",2);Rn([l()],ma.prototype,"value",2);ma=Rn([c("wu-wallet-connect")],ma);const ex=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-address-display-bg: var(--wu-color-surface);
    --wu-address-display-border: var(--wu-color-border);
    --wu-address-display-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-address-display-bg);
    border: 1px solid var(--wu-address-display-border);
    border-radius: var(--wu-address-display-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var tx=Object.defineProperty,rx=Object.getOwnPropertyDescriptor,Fn=(t,r,a,o)=>{for(var e=o>1?void 0:o?rx(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&tx(r,a,e),e};let ya=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ya.styles=ex;Fn([l()],ya.prototype,"label",2);Fn([l()],ya.prototype,"value",2);ya=Fn([c("wu-address-display")],ya);const ox=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-transaction-status-bg: var(--wu-color-surface);
    --wu-transaction-status-border: var(--wu-color-border);
    --wu-transaction-status-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-transaction-status-bg);
    border: 1px solid var(--wu-transaction-status-border);
    border-radius: var(--wu-transaction-status-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var ax=Object.defineProperty,sx=Object.getOwnPropertyDescriptor,Hn=(t,r,a,o)=>{for(var e=o>1?void 0:o?sx(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&ax(r,a,e),e};let xa=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};xa.styles=ox;Hn([l()],xa.prototype,"label",2);Hn([l()],xa.prototype,"value",2);xa=Hn([c("wu-transaction-status")],xa);const ix=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-nft-card-bg: var(--wu-color-surface);
    --wu-nft-card-border: var(--wu-color-border);
    --wu-nft-card-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-nft-card-bg);
    border: 1px solid var(--wu-nft-card-border);
    border-radius: var(--wu-nft-card-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var nx=Object.defineProperty,lx=Object.getOwnPropertyDescriptor,Kn=(t,r,a,o)=>{for(var e=o>1?void 0:o?lx(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&nx(r,a,e),e};let ka=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ka.styles=ix;Kn([l()],ka.prototype,"label",2);Kn([l()],ka.prototype,"value",2);ka=Kn([c("wu-nft-card")],ka);const ux=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-chain-selector-bg: var(--wu-color-surface);
    --wu-chain-selector-border: var(--wu-color-border);
    --wu-chain-selector-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-chain-selector-bg);
    border: 1px solid var(--wu-chain-selector-border);
    border-radius: var(--wu-chain-selector-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var cx=Object.defineProperty,dx=Object.getOwnPropertyDescriptor,Vn=(t,r,a,o)=>{for(var e=o>1?void 0:o?dx(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&cx(r,a,e),e};let $a=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};$a.styles=ux;Vn([l()],$a.prototype,"label",2);Vn([l()],$a.prototype,"value",2);$a=Vn([c("wu-chain-selector")],$a);const px=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-gas-fee-bg: var(--wu-color-surface);
    --wu-gas-fee-border: var(--wu-color-border);
    --wu-gas-fee-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-gas-fee-bg);
    border: 1px solid var(--wu-gas-fee-border);
    border-radius: var(--wu-gas-fee-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var hx=Object.defineProperty,vx=Object.getOwnPropertyDescriptor,Un=(t,r,a,o)=>{for(var e=o>1?void 0:o?vx(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&hx(r,a,e),e};let _a=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};_a.styles=px;Un([l()],_a.prototype,"label",2);Un([l()],_a.prototype,"value",2);_a=Un([c("wu-gas-fee")],_a);const wx=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-install-prompt-bg: var(--wu-color-surface);
    --wu-install-prompt-border: var(--wu-color-border);
    --wu-install-prompt-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-install-prompt-bg);
    border: 1px solid var(--wu-install-prompt-border);
    border-radius: var(--wu-install-prompt-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var bx=Object.defineProperty,gx=Object.getOwnPropertyDescriptor,Yn=(t,r,a,o)=>{for(var e=o>1?void 0:o?gx(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&bx(r,a,e),e};let za=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};za.styles=wx;Yn([l()],za.prototype,"label",2);Yn([l()],za.prototype,"value",2);za=Yn([c("wu-install-prompt")],za);const fx=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-notification-permission-bg: var(--wu-color-surface);
    --wu-notification-permission-border: var(--wu-color-border);
    --wu-notification-permission-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-notification-permission-bg);
    border: 1px solid var(--wu-notification-permission-border);
    border-radius: var(--wu-notification-permission-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var mx=Object.defineProperty,yx=Object.getOwnPropertyDescriptor,Wn=(t,r,a,o)=>{for(var e=o>1?void 0:o?yx(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&mx(r,a,e),e};let Oa=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Oa.styles=fx;Wn([l()],Oa.prototype,"label",2);Wn([l()],Oa.prototype,"value",2);Oa=Wn([c("wu-notification-permission")],Oa);const xx=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-share-button-bg: var(--wu-color-surface);
    --wu-share-button-border: var(--wu-color-border);
    --wu-share-button-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-share-button-bg);
    border: 1px solid var(--wu-share-button-border);
    border-radius: var(--wu-share-button-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var kx=Object.defineProperty,$x=Object.getOwnPropertyDescriptor,Xn=(t,r,a,o)=>{for(var e=o>1?void 0:o?$x(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&kx(r,a,e),e};let ja=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};ja.styles=xx;Xn([l()],ja.prototype,"label",2);Xn([l()],ja.prototype,"value",2);ja=Xn([c("wu-share-button")],ja);const _x=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-offline-banner-bg: var(--wu-color-surface);
    --wu-offline-banner-border: var(--wu-color-border);
    --wu-offline-banner-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-offline-banner-bg);
    border: 1px solid var(--wu-offline-banner-border);
    border-radius: var(--wu-offline-banner-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var zx=Object.defineProperty,Ox=Object.getOwnPropertyDescriptor,Gn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Ox(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&zx(r,a,e),e};let Pa=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Pa.styles=_x;Gn([l()],Pa.prototype,"label",2);Gn([l()],Pa.prototype,"value",2);Pa=Gn([c("wu-offline-banner")],Pa);const jx=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-update-available-bg: var(--wu-color-surface);
    --wu-update-available-border: var(--wu-color-border);
    --wu-update-available-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-update-available-bg);
    border: 1px solid var(--wu-update-available-border);
    border-radius: var(--wu-update-available-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Px=Object.defineProperty,Cx=Object.getOwnPropertyDescriptor,Jn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Cx(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Px(r,a,e),e};let Ca=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Ca.styles=jx;Jn([l()],Ca.prototype,"label",2);Jn([l()],Ca.prototype,"value",2);Ca=Jn([c("wu-update-available")],Ca);const Dx=d`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-battery-indicator-bg: var(--wu-color-surface);
    --wu-battery-indicator-border: var(--wu-color-border);
    --wu-battery-indicator-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-battery-indicator-bg);
    border: 1px solid var(--wu-battery-indicator-border);
    border-radius: var(--wu-battery-indicator-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;var Ex=Object.defineProperty,Sx=Object.getOwnPropertyDescriptor,Qn=(t,r,a,o)=>{for(var e=o>1?void 0:o?Sx(r,a):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&Ex(r,a,e),e};let Da=class extends u{constructor(){super(...arguments),this.label="",this.value=""}render(){return n`
      <div class="container">
        ${this.label?n`<div class="label">${this.label}</div>`:""}
        <div class="content">
          ${this.value||n`<slot></slot>`}
        </div>
      </div>`}};Da.styles=Dx;Qn([l()],Da.prototype,"label",2);Qn([l()],Da.prototype,"value",2);Da=Qn([c("wu-battery-indicator")],Da);
