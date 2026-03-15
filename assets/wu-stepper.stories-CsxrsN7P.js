import{b as u}from"./lit-element-I0QAeI3K.js";const h={title:"Components/Stepper",component:"wu-stepper",tags:["autodocs"],parameters:{docs:{description:{component:"A multi-step wizard composed of `<wu-stepper>` and `<wu-step>` elements. Supports horizontal and vertical orientation, linear and non-linear navigation, and `pending` / `active` / `complete` / `error` step states."}}}},r={render:()=>u`
    <wu-stepper active-step="1">
      <wu-step label="Account" description="Create your account"></wu-step>
      <wu-step label="Profile" description="Set up your profile"></wu-step>
      <wu-step label="Billing" description="Enter payment details"></wu-step>
      <wu-step label="Confirm" description="Review and confirm"></wu-step>
    </wu-stepper>
  `},n={render:()=>u`
    <wu-stepper active-step="0">
      <wu-step label="Start"></wu-step>
      <wu-step label="Process"></wu-step>
      <wu-step label="Finish"></wu-step>
    </wu-stepper>
  `},a={render:()=>u`
    <wu-stepper active-step="3">
      <wu-step label="Done 1"></wu-step>
      <wu-step label="Done 2"></wu-step>
      <wu-step label="Done 3"></wu-step>
    </wu-stepper>
  `},o={render:()=>{const t=document.createElement("wu-stepper");t.setAttribute("active-step","0"),t.innerHTML=`
      <wu-step label="Step 1" description="First step"></wu-step>
      <wu-step label="Step 2" description="Second step"></wu-step>
      <wu-step label="Step 3" description="Third step"></wu-step>
    `;const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.appendChild(t);const p=document.createElement("div");p.style.display="flex",p.style.gap="8px";const s=document.createElement("wu-button");s.setAttribute("variant","secondary"),s.textContent="Previous",s.addEventListener("wu-click",()=>t.prev());const l=document.createElement("wu-button");return l.textContent="Next",l.addEventListener("wu-click",()=>t.next()),p.appendChild(s),p.appendChild(l),e.appendChild(p),e}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <wu-stepper active-step="1">
      <wu-step label="Account" description="Create your account"></wu-step>
      <wu-step label="Profile" description="Set up your profile"></wu-step>
      <wu-step label="Billing" description="Enter payment details"></wu-step>
      <wu-step label="Confirm" description="Review and confirm"></wu-step>
    </wu-stepper>
  \`
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var w,m,b;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <wu-stepper active-step="0">
      <wu-step label="Start"></wu-step>
      <wu-step label="Process"></wu-step>
      <wu-step label="Finish"></wu-step>
    </wu-stepper>
  \`
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,x,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <wu-stepper active-step="3">
      <wu-step label="Done 1"></wu-step>
      <wu-step label="Done 2"></wu-step>
      <wu-step label="Done 3"></wu-step>
    </wu-stepper>
  \`
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,f,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const stepper = document.createElement('wu-stepper') as any;
    stepper.setAttribute('active-step', '0');
    stepper.innerHTML = \`
      <wu-step label="Step 1" description="First step"></wu-step>
      <wu-step label="Step 2" description="Second step"></wu-step>
      <wu-step label="Step 3" description="Third step"></wu-step>
    \`;
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '16px';
    wrapper.appendChild(stepper);
    const btns = document.createElement('div');
    btns.style.display = 'flex';
    btns.style.gap = '8px';
    const prev = document.createElement('wu-button') as any;
    prev.setAttribute('variant', 'secondary');
    prev.textContent = 'Previous';
    prev.addEventListener('wu-click', () => stepper.prev());
    const next = document.createElement('wu-button') as any;
    next.textContent = 'Next';
    next.addEventListener('wu-click', () => stepper.next());
    btns.appendChild(prev);
    btns.appendChild(next);
    wrapper.appendChild(btns);
    return wrapper;
  }
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const g=["Default","StepOne","AllComplete","Interactive"];export{a as AllComplete,r as Default,o as Interactive,n as StepOne,g as __namedExportsOrder,h as default};
