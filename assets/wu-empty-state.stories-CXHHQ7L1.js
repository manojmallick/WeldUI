import{b as s}from"./lit-element-CBn2YVps.js";import"./index-u0eGytJB.js";import"./directive-helpers-C-d-vSw_.js";const x={title:"Components/EmptyState",component:"wu-empty-state",tags:["autodocs"],argTypes:{title:{control:"text"},description:{control:"text"}}},t={args:{title:"Nothing here yet",description:"Get started by creating your first item."},render:n=>s`
    <wu-empty-state title=${n.title} description=${n.description}></wu-empty-state>
  `},e={render:()=>s`
    <wu-empty-state
      title="No projects found"
      description="Create a new project to get started."
    >
      <wu-button slot="actions" variant="primary">New project</wu-button>
      <wu-button slot="actions" variant="secondary">Browse templates</wu-button>
    </wu-empty-state>
  `},r={render:()=>s`
    <div style="border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); padding:var(--wu-space-4)">
      <wu-empty-state
        title="No records"
        description="There are no items matching your current filters."
      >
        <wu-button slot="actions" variant="ghost">Clear filters</wu-button>
      </wu-empty-state>
    </div>
  `},o={render:()=>s`
    <wu-empty-state
      title="No messages"
      description="Your inbox is empty. Start a conversation."
    >
      <svg slot="icon" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" stroke-width="2"/>
        <path d="M6 16l18 12 18-12" stroke="currentColor" stroke-width="2"/>
      </svg>
      <wu-button slot="actions" variant="primary">Compose message</wu-button>
    </wu-empty-state>
  `};var a,i,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Nothing here yet',
    description: 'Get started by creating your first item.'
  },
  render: args => html\`
    <wu-empty-state title=\${args.title} description=\${args.description}></wu-empty-state>
  \`
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <wu-empty-state
      title="No projects found"
      description="Create a new project to get started."
    >
      <wu-button slot="actions" variant="primary">New project</wu-button>
      <wu-button slot="actions" variant="secondary">Browse templates</wu-button>
    </wu-empty-state>
  \`
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,l,w;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <div style="border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); padding:var(--wu-space-4)">
      <wu-empty-state
        title="No records"
        description="There are no items matching your current filters."
      >
        <wu-button slot="actions" variant="ghost">Clear filters</wu-button>
      </wu-empty-state>
    </div>
  \`
}`,...(w=(l=r.parameters)==null?void 0:l.docs)==null?void 0:w.source}}};var y,g,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <wu-empty-state
      title="No messages"
      description="Your inbox is empty. Start a conversation."
    >
      <svg slot="icon" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" stroke-width="2"/>
        <path d="M6 16l18 12 18-12" stroke="currentColor" stroke-width="2"/>
      </svg>
      <wu-button slot="actions" variant="primary">Compose message</wu-button>
    </wu-empty-state>
  \`
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const C=["Default","WithAction","NoData","CustomIcon"];export{o as CustomIcon,t as Default,r as NoData,e as WithAction,C as __namedExportsOrder,x as default};
