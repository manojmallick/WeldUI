const m={title:"Components/Command",component:"wu-command",tags:["autodocs"]},i=[{id:"1",label:"New File",group:"File",shortcut:"⌘N"},{id:"2",label:"Open File",group:"File",shortcut:"⌘O"},{id:"3",label:"Save",group:"File",shortcut:"⌘S"},{id:"4",label:"Close Tab",group:"File",shortcut:"⌘W"},{id:"5",label:"Theme: Light",group:"Appearance"},{id:"6",label:"Theme: Dark",group:"Appearance"},{id:"7",label:"Open Settings",group:"Settings",shortcut:"⌘,"},{id:"8",label:"Keyboard Shortcuts",group:"Settings"},{id:"9",label:"About WeldUI",keywords:["info","version","help"]}],t={render:()=>{const e=document.createElement("wu-command");return e.open=!0,e.items=i,e.style.display="block",e.style.height="600px",e.style.position="relative",e}},n={render:()=>{const e=document.createElement("div");e.style.padding="20px";const r=document.createElement("wu-button");r.textContent="Open Command Palette (⌘K)";const a=document.createElement("wu-command");return a.items=i,r.addEventListener("wu-click",()=>{a.open=!0}),e.appendChild(r),e.appendChild(a),e}};var o,s,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-command') as any;
    el.open = true;
    el.items = items;
    el.style.display = 'block';
    el.style.height = '600px';
    el.style.position = 'relative';
    return el;
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = '20px';
    const btn = document.createElement('wu-button') as any;
    btn.textContent = 'Open Command Palette (⌘K)';
    const cmd = document.createElement('wu-command') as any;
    cmd.items = items;
    btn.addEventListener('wu-click', () => {
      cmd.open = true;
    });
    wrapper.appendChild(btn);
    wrapper.appendChild(cmd);
    return wrapper;
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const u=["OpenByDefault","WithTrigger"];export{t as OpenByDefault,n as WithTrigger,u as __namedExportsOrder,m as default};
