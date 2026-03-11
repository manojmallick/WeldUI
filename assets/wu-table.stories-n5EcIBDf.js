const S={title:"Components/Table",component:"wu-table",tags:["autodocs"],parameters:{docs:{description:{component:"A data table with sortable columns, sticky header and optional row-selection checkboxes. Pass `columns` and `rows` as JavaScript properties. Emits `wu-sort` and `wu-select` events."}}}},s=[{key:"id",label:"ID",width:"60px"},{key:"name",label:"Name",sortable:!0},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status"}],o=[{id:"1",name:"Alice Johnson",role:"Admin",status:"Active"},{id:"2",name:"Bob Smith",role:"User",status:"Active"},{id:"3",name:"Charlie Brown",role:"User",status:"Inactive"},{id:"4",name:"Diana Prince",role:"Manager",status:"Active"},{id:"5",name:"Eve Wilson",role:"User",status:"Pending"}],t={render:()=>{const e=document.createElement("wu-table");return e.columns=s,e.data=o,e}},a={render:()=>{const e=document.createElement("wu-table");return e.columns=s,e.data=o,e.selectable=!0,e}},n={render:()=>{const e=document.createElement("wu-table");return e.columns=s,e.data=[],e.emptyMessage="No users found.",e}},r={render:()=>{const e=document.createElement("wu-table");return e.columns=s,e.data=o,e.sortKey="name",e.sortDirection="asc",e}};var l,c,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-table') as any;
    el.columns = columns;
    el.data = data;
    return el;
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,d,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-table') as any;
    el.columns = columns;
    el.data = data;
    el.selectable = true;
    return el;
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,b,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-table') as any;
    el.columns = columns;
    el.data = [];
    el.emptyMessage = 'No users found.';
    return el;
  }
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,E,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-table') as any;
    el.columns = columns;
    el.data = data;
    el.sortKey = 'name';
    el.sortDirection = 'asc';
    return el;
  }
}`,...(g=(E=r.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};const h=["Default","Selectable","Empty","WithSorting"];export{t as Default,n as Empty,a as Selectable,r as WithSorting,h as __namedExportsOrder,S as default};
