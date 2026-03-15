const r={title:"Media/Lightbox",component:"wu-lightbox",tags:["autodocs"]},a=[{src:"https://picsum.photos/seed/a/800/600",alt:"Mountain",caption:"Mountain at dawn"},{src:"https://picsum.photos/seed/b/800/600",alt:"Ocean",caption:"Ocean sunset"},{src:"https://picsum.photos/seed/c/800/600",alt:"Forest",caption:"Forest path"}],e={render:()=>{const t=document.createElement("wu-lightbox");return t.images=a,t.open=!0,t}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-lightbox') as any;
    el.images = images;
    el.open = true;
    return el;
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const c=["Open"];export{e as Open,c as __namedExportsOrder,r as default};
