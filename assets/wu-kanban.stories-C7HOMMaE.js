import{i as w,a as v,b as i}from"./lit-element-CWHijwDH.js";import{n as p,t as f}from"./property-CV4LBOm_.js";import{r as h}from"./state-kdcVxHgv.js";const x=w`
  :host { display: flex; gap: var(--wu-space-4); overflow-x: auto; padding: var(--wu-space-2); }
`,y=w`
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
`;var _=Object.defineProperty,k=Object.getOwnPropertyDescriptor,n=(a,r,e,s)=>{for(var t=s>1?void 0:s?k(r,e):r,l=a.length-1,u;l>=0;l--)(u=a[l])&&(t=(s?u(r,e,t):u(t))||t);return s&&t&&_(r,e,t),t};let c=class extends v{render(){return i`<div role="region" aria-label="Kanban board"><slot></slot></div>`}};c.styles=x;c=n([f("wu-kanban")],c);let o=class extends v{constructor(){super(...arguments),this.columnId="",this.label="",this.cards=[],this._draggingId=null}_dragStart(a){this._draggingId=a}_dragEnd(){this._draggingId=null}_dragOver(a){a.preventDefault(),this.classList.add("drag-over")}_dragLeave(){this.classList.remove("drag-over")}_drop(a){var e;a.preventDefault(),this.classList.remove("drag-over");const r=(e=a.dataTransfer)==null?void 0:e.getData("text/plain");r&&this.dispatchEvent(new CustomEvent("wu-card-move",{bubbles:!0,composed:!0,detail:{cardId:r,toColumn:this.columnId}}))}render(){return i`
      <div class="header">
        <span>${this.label}</span>
        <span class="count">${this.cards.length}</span>
      </div>
      <div class="cards" @dragover=${this._dragOver} @dragleave=${this._dragLeave} @drop=${this._drop}>
        ${this.cards.map(a=>i`
          <div class="card ${this._draggingId===a.id?"dragging":""}"
            draggable="true"
            @dragstart=${r=>{var e;(e=r.dataTransfer)==null||e.setData("text/plain",a.id),this._dragStart(a.id)}}
            @dragend=${this._dragEnd}>
            ${a.title}
          </div>`)}
      </div>`}};o.styles=y;n([p()],o.prototype,"columnId",2);n([p()],o.prototype,"label",2);n([p({type:Array})],o.prototype,"cards",2);n([h()],o.prototype,"_draggingId",2);o=n([f("wu-kanban-column")],o);const O={title:"Media/Kanban",component:"wu-kanban",tags:["autodocs"]},d={render:()=>i`
    <wu-kanban>
      <wu-kanban-column column-id="todo" label="To Do" .cards=${[{id:"1",title:"Design new homepage"},{id:"2",title:"Accessibility audit"},{id:"3",title:"Write unit tests"}]}></wu-kanban-column>
      <wu-kanban-column column-id="in-progress" label="In Progress" .cards=${[{id:"4",title:"Build wu-kanban component"},{id:"5",title:"Update documentation"}]}></wu-kanban-column>
      <wu-kanban-column column-id="done" label="Done" .cards=${[{id:"6",title:"Set up monorepo"}]}></wu-kanban-column>
    </wu-kanban>`};var m,b,g;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <wu-kanban>
      <wu-kanban-column column-id="todo" label="To Do" .cards=\${[{
    id: '1',
    title: 'Design new homepage'
  }, {
    id: '2',
    title: 'Accessibility audit'
  }, {
    id: '3',
    title: 'Write unit tests'
  }]}></wu-kanban-column>
      <wu-kanban-column column-id="in-progress" label="In Progress" .cards=\${[{
    id: '4',
    title: 'Build wu-kanban component'
  }, {
    id: '5',
    title: 'Update documentation'
  }]}></wu-kanban-column>
      <wu-kanban-column column-id="done" label="Done" .cards=\${[{
    id: '6',
    title: 'Set up monorepo'
  }]}></wu-kanban-column>
    </wu-kanban>\`
}`,...(g=(b=d.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const S=["Default"];export{d as Default,S as __namedExportsOrder,O as default};
