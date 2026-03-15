import{b as n}from"./lit-element-CWHijwDH.js";const S={title:"Components/Form",component:"wu-form",tags:["autodocs"],argTypes:{novalidate:{control:"boolean"},loading:{control:"boolean"}},args:{novalidate:!1,loading:!1},parameters:{docs:{description:{component:"A form shell that handles validation, error summary, and serialisation. Listen for the `wu-submit` event to receive a `{ values }` object of all field data. If any fields are invalid a dismissible `error-summary` is shown and `wu-invalid` fires. Set `loading` to disable the form while a request is in flight."}}}},t={render:e=>n`
    <wu-form
      ?loading=${e.loading}
      ?novalidate=${e.novalidate}
      style="max-width:480px"
      @wu-submit=${v=>alert("Submitted: "+JSON.stringify(v.detail.values,null,2))}
    >
      <wu-input name="name"  label="Full name"     required placeholder="Jane Smith"></wu-input>
      <wu-input name="email" label="Email address"  required type="email" placeholder="jane@example.com"></wu-input>
      <wu-textarea name="message" label="Message" required rows="4" placeholder="How can we help?"></wu-textarea>
      <wu-button slot="actions" type="submit" ?loading=${e.loading}>Send message</wu-button>
      <wu-button slot="actions" type="reset" variant="ghost">Clear</wu-button>
    </wu-form>
  `},a={render:()=>n`
    <wu-form style="max-width:360px" @wu-submit=${e=>alert("Login: "+JSON.stringify(e.detail.values))}>
      <wu-input name="email"    label="Email"    type="email"    required></wu-input>
      <wu-input name="password" label="Password" type="password" required></wu-input>
      <wu-button slot="actions" type="submit" style="width:100%">Sign in</wu-button>
    </wu-form>
  `},i={render:()=>n`
    <wu-form loading style="max-width:360px">
      <wu-input name="email"    label="Email"    type="email"    required></wu-input>
      <wu-input name="password" label="Password" type="password" required></wu-input>
      <wu-button slot="actions" type="submit" loading style="width:100%">Sign in</wu-button>
    </wu-form>
  `};var o,r,s,u,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => html\`
    <wu-form
      ?loading=\${args['loading']}
      ?novalidate=\${args['novalidate']}
      style="max-width:480px"
      @wu-submit=\${(e: CustomEvent) => alert('Submitted: ' + JSON.stringify(e.detail.values, null, 2))}
    >
      <wu-input name="name"  label="Full name"     required placeholder="Jane Smith"></wu-input>
      <wu-input name="email" label="Email address"  required type="email" placeholder="jane@example.com"></wu-input>
      <wu-textarea name="message" label="Message" required rows="4" placeholder="How can we help?"></wu-textarea>
      <wu-button slot="actions" type="submit" ?loading=\${args['loading']}>Send message</wu-button>
      <wu-button slot="actions" type="reset" variant="ghost">Clear</wu-button>
    </wu-form>
  \`
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source},description:{story:"Contact form with validation — submit with empty fields to see the error summary.",...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.description}}};var d,m,p,w,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <wu-form style="max-width:360px" @wu-submit=\${(e: CustomEvent) => alert('Login: ' + JSON.stringify(e.detail.values))}>
      <wu-input name="email"    label="Email"    type="email"    required></wu-input>
      <wu-input name="password" label="Password" type="password" required></wu-input>
      <wu-button slot="actions" type="submit" style="width:100%">Sign in</wu-button>
    </wu-form>
  \`
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Login form — compact with two fields.",...(c=(w=a.parameters)==null?void 0:w.docs)==null?void 0:c.description}}};var b,g,y,h,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <wu-form loading style="max-width:360px">
      <wu-input name="email"    label="Email"    type="email"    required></wu-input>
      <wu-input name="password" label="Password" type="password" required></wu-input>
      <wu-button slot="actions" type="submit" loading style="width:100%">Sign in</wu-button>
    </wu-form>
  \`
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:"Loading state — simulates an in-flight request.",...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};const q=["Default","Login","Loading"];export{t as Default,i as Loading,a as Login,q as __namedExportsOrder,S as default};
