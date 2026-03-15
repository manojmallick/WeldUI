import{i as b,a as v,b as u}from"./lit-element-CWHijwDH.js";import{n as h,t as _}from"./property-CV4LBOm_.js";import{r as p}from"./state-kdcVxHgv.js";const f=b`
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
`;var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,i=(e,r,t,s)=>{for(var a=s>1?void 0:s?x(r,t):r,d=e.length-1,l;d>=0;d--)(l=e[d])&&(a=(s?l(r,t,a):l(a))||a);return s&&a&&w(r,t,a),a};let n=class extends v{constructor(){super(...arguments),this.items=[],this._draggingId=null,this._overIndex=null}_dragStart(e){this._draggingId=e}_dragOver(e,r){e.preventDefault(),this._overIndex=r}_drop(e){if(this._draggingId===null)return;const r=this.items.findIndex(a=>a.id===this._draggingId);if(r===e){this._draggingId=null,this._overIndex=null;return}const t=[...this.items],[s]=t.splice(r,1);t.splice(e,0,s),this.items=t,this.dispatchEvent(new CustomEvent("wu-sort",{bubbles:!0,composed:!0,detail:{items:t,from:r,to:e}})),this._draggingId=null,this._overIndex=null}_dragEnd(){this._draggingId=null,this._overIndex=null}render(){return u`
      <ul class="list" role="list">
        ${this.items.map((e,r)=>u`
          <li class="item ${this._draggingId===e.id?"dragging":""} ${this._overIndex===r?"drag-over":""}"
            draggable="true"
            @dragstart=${()=>this._dragStart(e.id)}
            @dragover=${t=>this._dragOver(t,r)}
            @drop=${()=>this._drop(r)}
            @dragend=${this._dragEnd}>
            <span class="handle" aria-hidden="true">⠿</span>
            <span class="content">${e.label}</span>
          </li>`)}
      </ul>`}};n.styles=f;i([h({type:Array})],n.prototype,"items",2);i([p()],n.prototype,"_draggingId",2);i([p()],n.prototype,"_overIndex",2);n=i([_("wu-sortable")],n);const D={title:"Media/Sortable",component:"wu-sortable",tags:["autodocs"]},o={render:()=>{const e=document.createElement("wu-sortable");return e.items=[{id:"1",label:"Design system"},{id:"2",label:"Accessibility audit"},{id:"3",label:"Performance review"},{id:"4",label:"Documentation update"}],e}};var c,g,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-sortable') as any;
    el.items = [{
      id: '1',
      label: 'Design system'
    }, {
      id: '2',
      label: 'Accessibility audit'
    }, {
      id: '3',
      label: 'Performance review'
    }, {
      id: '4',
      label: 'Documentation update'
    }];
    return el;
  }
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,D as default};
