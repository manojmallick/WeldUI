import{b as m}from"./lit-element-I0QAeI3K.js";const l={title:"Navigation/NotificationCenter",component:"wu-notification-center",tags:["autodocs"]},d=[{id:"1",title:"New team member",body:"Alice joined your workspace.",time:"2m ago",read:!1},{id:"2",title:"Comment on PR #42",body:"Bob left a review.",time:"15m ago",read:!1},{id:"3",title:"Deployment succeeded",body:"v2.1.0 is live.",time:"1h ago",read:!0}],e={render:()=>{const o=document.createElement("wu-notification-center");return o.notifications=d,o}},t={render:()=>m`<wu-notification-center></wu-notification-center>`};var n,i,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('wu-notification-center') as any;
    el.notifications = notes;
    return el;
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var a,c,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{\n  render: () => html`<wu-notification-center></wu-notification-center>`\n}",...(s=(c=t.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const f=["WithNotifications","Empty"];export{t as Empty,e as WithNotifications,f as __namedExportsOrder,l as default};
