import{b as t}from"./lit-element-I0QAeI3K.js";const Q={title:"Components/Search",component:"wu-search",tags:["autodocs"],argTypes:{value:{control:"text"},placeholder:{control:"text"},loading:{control:"boolean"},clearable:{control:"boolean"},debounce:{control:"number"},maxSuggestions:{control:"number"},showCategories:{control:"boolean"},keepRecentSearches:{control:"boolean"}}},u=[{id:"1",label:"Q4 Financial Report",description:"/Finance/2024/Q4",type:"pdf",category:"Documents",badge:"PDF",meta:"2h ago"},{id:"2",label:"Product Roadmap 2025",description:"/Product/Planning",type:"document",category:"Documents",meta:"1d ago"},{id:"3",label:"Marketing Budget",description:"/Marketing/Budgets",type:"spreadsheet",category:"Documents",badge:"xlsx",meta:"3d ago"},{id:"4",label:"Brand Assets Pack",description:"/Design/Brand",type:"image",category:"Documents",meta:"1w ago"},{id:"5",label:"Onboarding Video",description:"/HR/Training",type:"video",category:"Documents",meta:"2w ago"}],F=[{id:"u1",label:"Alice Johnson",description:"Product Manager",type:"user",category:"People",meta:"Online",badge:"PM"},{id:"u2",label:"Bob Chen",description:"Senior Engineer",type:"user",category:"People",meta:"Away"},{id:"u3",label:"Clara Müller",description:"UX Designer",type:"user",category:"People",meta:"Offline"}],q=[{id:"a1",label:"Create new document",type:"action",category:"Actions",description:"Start a blank document"},{id:"a2",label:"Invite team member",type:"action",category:"Actions",description:"Send an invitation email"},{id:"a3",label:"Open settings",type:"action",category:"Actions",description:"Manage workspace settings"}],p=[...u,...F,...q],B=[{id:"img1",label:"Emma Parker",description:"Engineering Lead",imageUrl:"https://i.pravatar.cc/64?img=47",category:"Team",badge:"Lead",meta:"NYC"},{id:"img2",label:"Luis Fernandez",description:"Frontend Developer",imageUrl:"https://i.pravatar.cc/64?img=12",category:"Team",meta:"Remote"},{id:"img3",label:"Sara Kim",description:"Data Scientist",imageUrl:"https://i.pravatar.cc/64?img=32",category:"Team",meta:"London"},{id:"img4",label:"Design System Proposal",description:"/Projects/Design",imageUrl:"https://picsum.photos/seed/doc1/64/64",category:"Files",badge:"New",meta:"1h ago"},{id:"img5",label:"Sprint Retrospective",description:"/Projects/Q1",imageUrl:"https://picsum.photos/seed/doc2/64/64",category:"Files",meta:"Yesterday"}],s={args:{placeholder:"Search…",debounce:300,clearable:!0},render:e=>t`
    <div style="max-width:360px">
      <wu-search
        placeholder=${e.placeholder}
        ?loading=${e.loading}
        ?clearable=${e.clearable}
        debounce=${e.debounce}
        @wu-search=${o=>console.log("wu-search",o.detail)}
      ></wu-search>
    </div>
  `},n={name:"Document Suggestions",render:()=>t`
      <div style="max-width:420px; padding-bottom:320px">
        <wu-search
          placeholder="Search documents…"
          .suggestions=${u}
          show-categories
          @wu-select=${o=>console.log("selected",o.detail.item)}
        ></wu-search>
        <p style="margin-top:12px; font-size:13px; color:var(--wu-color-text-secondary)">
          Click the input and type to filter. Use ↑↓ to navigate, Enter to select, Esc to close.
        </p>
      </div>
    `},r={name:"People with Avatars",render:()=>t`
    <div style="max-width:420px; padding-bottom:280px">
      <wu-search
        placeholder="Search team members…"
        .suggestions=${B}
        show-categories
        @wu-select=${e=>console.log("selected",e.detail.item)}
      ></wu-search>
      <p style="margin-top:12px; font-size:13px; color:var(--wu-color-text-secondary)">
        Image thumbnails auto-display when <code>imageUrl</code> is provided on a suggestion item.
      </p>
    </div>
  `},i={name:"Global Search (All Types)",render:()=>{let e=[...p];return t`
      <div style="max-width:480px; padding-bottom:380px">
        <wu-search
          placeholder="Search everything…"
          .suggestions=${e}
          max-suggestions="12"
          show-categories
          @wu-change=${a=>{const g=a.detail.value.toLowerCase(),W=a.target;W.suggestions=g?p.filter(m=>{var h;return m.label.toLowerCase().includes(g)||((h=m.description)==null?void 0:h.toLowerCase().includes(g))}):p}}
          @wu-select=${a=>console.log("selected",a.detail.item)}
        ></wu-search>
        <p style="margin-top:12px; font-size:13px; color:var(--wu-color-text-secondary)">
          Mixes documents, people, and actions with category group headers. Type to filter.
        </p>
      </div>
    `}},c={name:"With Recent Search Memory",render:()=>t`
    <div style="max-width:420px; padding-bottom:280px">
      <wu-search
        placeholder="Search…"
        .suggestions=${u}
        keep-recent-searches
        show-categories
        @wu-select=${e=>console.log("selected",e.detail.item)}
      ></wu-search>
      <p style="margin-top:12px; font-size:13px; color:var(--wu-color-text-secondary)">
        Recent selections appear above suggestions on re-focus. Click × to remove.
      </p>
    </div>
  `},l={render:()=>t`
    <div style="max-width:360px">
      <wu-search value="Q4 report" loading></wu-search>
    </div>
  `},d={name:"Inside a Navbar",render:()=>t`
    <div style="background:var(--wu-color-surface); border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); padding:12px 16px; display:flex; align-items:center; gap:12px; max-width:700px">
      <span style="font-weight:600; font-size:15px; color:var(--wu-color-text); white-space:nowrap">Acme App</span>
      <wu-search
        placeholder="Search docs, people, actions…"
        .suggestions=${p}
        show-categories
        style="max-width:340px"
      ></wu-search>
      <wu-button size="sm" variant="ghost" style="margin-left:auto; white-space:nowrap">Settings</wu-button>
    </div>
    <div style="margin-top:8px; font-size:12px; color:var(--wu-color-text-secondary)">
      Click the search bar to open the suggestion panel.
    </div>
  `};var w,x,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…',
    debounce: 300,
    clearable: true
  },
  render: args => html\`
    <div style="max-width:360px">
      <wu-search
        placeholder=\${args.placeholder}
        ?loading=\${args.loading}
        ?clearable=\${args.clearable}
        debounce=\${args.debounce}
        @wu-search=\${(e: CustomEvent) => console.log('wu-search', e.detail)}
      ></wu-search>
    </div>
  \`
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,b,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Document Suggestions',
  render: () => {
    const handleSelect = (e: CustomEvent) => console.log('selected', e.detail.item);
    return html\`
      <div style="max-width:420px; padding-bottom:320px">
        <wu-search
          placeholder="Search documents…"
          .suggestions=\${docSuggestions}
          show-categories
          @wu-select=\${handleSelect}
        ></wu-search>
        <p style="margin-top:12px; font-size:13px; color:var(--wu-color-text-secondary)">
          Click the input and type to filter. Use ↑↓ to navigate, Enter to select, Esc to close.
        </p>
      </div>
    \`;
  }
}`,...(S=(b=n.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var f,$,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'People with Avatars',
  render: () => html\`
    <div style="max-width:420px; padding-bottom:280px">
      <wu-search
        placeholder="Search team members…"
        .suggestions=\${imageSuggestions}
        show-categories
        @wu-select=\${(e: CustomEvent) => console.log('selected', e.detail.item)}
      ></wu-search>
      <p style="margin-top:12px; font-size:13px; color:var(--wu-color-text-secondary)">
        Image thumbnails auto-display when <code>imageUrl</code> is provided on a suggestion item.
      </p>
    </div>
  \`
}`,...(C=($=r.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var k,D,P;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Global Search (All Types)',
  render: () => {
    let liveSuggestions = [...allSuggestions];
    const handleInput = (e: CustomEvent) => {
      const q = e.detail.value.toLowerCase();
      const el = e.target as HTMLElement & {
        suggestions: SuggestionItem[];
      };
      el.suggestions = q ? allSuggestions.filter(s => s.label.toLowerCase().includes(q) || s.description?.toLowerCase().includes(q)) : allSuggestions;
      void liveSuggestions; // keep ref
    };
    return html\`
      <div style="max-width:480px; padding-bottom:380px">
        <wu-search
          placeholder="Search everything…"
          .suggestions=\${liveSuggestions}
          max-suggestions="12"
          show-categories
          @wu-change=\${handleInput}
          @wu-select=\${(e: CustomEvent) => console.log('selected', e.detail.item)}
        ></wu-search>
        <p style="margin-top:12px; font-size:13px; color:var(--wu-color-text-secondary)">
          Mixes documents, people, and actions with category group headers. Type to filter.
        </p>
      </div>
    \`;
  }
}`,...(P=(D=i.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var z,E,A;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'With Recent Search Memory',
  render: () => html\`
    <div style="max-width:420px; padding-bottom:280px">
      <wu-search
        placeholder="Search…"
        .suggestions=\${docSuggestions}
        keep-recent-searches
        show-categories
        @wu-select=\${(e: CustomEvent) => console.log('selected', e.detail.item)}
      ></wu-search>
      <p style="margin-top:12px; font-size:13px; color:var(--wu-color-text-secondary)">
        Recent selections appear above suggestions on re-focus. Click × to remove.
      </p>
    </div>
  \`
}`,...(A=(E=c.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var L,I,R;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width:360px">
      <wu-search value="Q4 report" loading></wu-search>
    </div>
  \`
}`,...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var T,M,U;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Inside a Navbar',
  render: () => html\`
    <div style="background:var(--wu-color-surface); border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); padding:12px 16px; display:flex; align-items:center; gap:12px; max-width:700px">
      <span style="font-weight:600; font-size:15px; color:var(--wu-color-text); white-space:nowrap">Acme App</span>
      <wu-search
        placeholder="Search docs, people, actions…"
        .suggestions=\${allSuggestions}
        show-categories
        style="max-width:340px"
      ></wu-search>
      <wu-button size="sm" variant="ghost" style="margin-left:auto; white-space:nowrap">Settings</wu-button>
    </div>
    <div style="margin-top:8px; font-size:12px; color:var(--wu-color-text-secondary)">
      Click the search bar to open the suggestion panel.
    </div>
  \`
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const G=["Default","WithDocumentSuggestions","WithPeopleSuggestions","GlobalSearch","WithRecentSearches","Loading","InsideToolbar"];export{s as Default,i as GlobalSearch,d as InsideToolbar,l as Loading,n as WithDocumentSuggestions,r as WithPeopleSuggestions,c as WithRecentSearches,G as __namedExportsOrder,Q as default};
