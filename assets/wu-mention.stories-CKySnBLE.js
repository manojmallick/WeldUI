const l={title:"Media/Mention",component:"wu-mention",tags:["autodocs"]},u=[{id:"1",name:"Alice Smith"},{id:"2",name:"Bob Jones"},{id:"3",name:"Charlie Brown"},{id:"4",name:"Diana Prince"}],n={render:()=>{const e=document.createElement("wu-mention");return e.users=u,e}},t={render:()=>{const e=document.createElement("wu-mention");return e.users=u,e.multiline=!0,e.placeholder="Write a comment, type @ to mention...",e}};var r,o,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-mention') as any;
    el.users = users;
    return el;
  }
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-mention') as any;
    el.users = users;
    el.multiline = true;
    el.placeholder = 'Write a comment, type @ to mention...';
    return el;
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const i=["Default","Multiline"];export{n as Default,t as Multiline,i as __namedExportsOrder,l as default};
