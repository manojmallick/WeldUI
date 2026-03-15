const d={title:"Media/Gallery",component:"wu-gallery",tags:["autodocs"]},u=Array.from({length:9},(e,o)=>({src:`https://picsum.photos/seed/${o+10}/400/400`,alt:`Photo ${o+1}`,caption:`Caption for photo ${o+1}`})),r={render:()=>{const e=document.createElement("wu-gallery");return e.images=u,e.cols=3,e}},n={render:()=>{const e=document.createElement("wu-gallery");return e.images=u,e.cols=4,e}};var s,t,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-gallery') as any;
    el.images = images;
    el.cols = 3;
    return el;
  }
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-gallery') as any;
    el.images = images;
    el.cols = 4;
    return el;
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const p=["ThreeColumns","FourColumns"];export{n as FourColumns,r as ThreeColumns,p as __namedExportsOrder,d as default};
