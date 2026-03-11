const f={title:"Components/DataGrid",component:"wu-data-grid",tags:["autodocs"]},s=[{key:"id",label:"ID",width:"60px"},{key:"name",label:"Name",sortable:!0,filterable:!0},{key:"dept",label:"Department",sortable:!0,filterable:!0},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status"}],l=Array.from({length:50},(e,a)=>({id:String(a+1),name:`User ${a+1}`,dept:["Engineering","Design","Marketing","Sales","Support"][a%5],role:["Admin","User","Manager","Viewer"][a%4],status:a%3===0?"Inactive":"Active"})),r={render:()=>{const e=document.createElement("wu-data-grid");return e.columns=s,e.data=l,e.pageSize=10,e}},t={render:()=>{const e=document.createElement("wu-data-grid");return e.columns=s,e.data=l.slice(0,5),e.showToolbar=!1,e}},n={render:()=>{const e=document.createElement("wu-data-grid");return e.columns=s,e.data=[],e.emptyMessage="No records found.",e}},o={render:()=>{const e=document.createElement("wu-data-grid");return e.columns=s,e.data=l,e.pageSize=5,e}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-data-grid') as any;
    el.columns = columns;
    el.data = data;
    el.pageSize = 10;
    return el;
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,i,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-data-grid') as any;
    el.columns = columns;
    el.data = data.slice(0, 5);
    el.showToolbar = false;
    return el;
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var g,S,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-data-grid') as any;
    el.columns = columns;
    el.data = [];
    el.emptyMessage = 'No records found.';
    return el;
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,w,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-data-grid') as any;
    el.columns = columns;
    el.data = data;
    el.pageSize = 5;
    return el;
  }
}`,...(E=(w=o.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const h=["Default","WithoutToolbar","Empty","SmallPageSize"];export{r as Default,n as Empty,o as SmallPageSize,t as WithoutToolbar,h as __namedExportsOrder,f as default};
