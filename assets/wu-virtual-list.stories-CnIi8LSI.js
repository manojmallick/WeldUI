const i={title:"Media/VirtualList",component:"wu-virtual-list",tags:["autodocs"]},o=Array.from({length:1e4},(e,n)=>`Item ${n+1} — Data row`),t={render:()=>{const e=document.createElement("wu-virtual-list");return e.items=o,e.viewportHeight=400,e}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-virtual-list') as any;
    el.items = items;
    el.viewportHeight = 400;
    return el;
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const l=["Default"];export{t as Default,l as __namedExportsOrder,i as default};
