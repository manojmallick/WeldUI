const m = JSON.parse(require('fs').readFileSync('packages/core/custom-elements.json','utf8'));

let issues = 0;
m.modules.forEach(mod => {
  const decl = mod.declarations[0];
  if (!decl.tagName) {
    console.log('MISSING tagName in module:', mod.path);
    issues++;
  }
  decl.members.forEach(member => {
    if (!member.type || !member.type.text || member.type.text.trim() === '') {
      console.log('BAD TYPE:', decl.tagName, member.name, JSON.stringify(member.type));
      issues++;
    }
    if (/(background|color)$/i.test(member.name)) {
      console.log('COLOR MATCH:', decl.tagName, member.name, JSON.stringify(member.type));
    }
  });
  // Check attributes
  (decl.attributes || []).forEach(attr => {
    if (!attr.type || !attr.type.text || attr.type.text.trim() === '') {
      console.log('BAD ATTR TYPE:', decl.tagName, attr.name, JSON.stringify(attr.type));
      issues++;
    }
  });
});
console.log('Total modules:', m.modules.length, '| Issues found:', issues);
// Also dump all member types for wu-avatar
const avatarMod = m.modules.find(x => x.declarations[0].tagName === 'wu-avatar');
if (avatarMod) {
  console.log('\nwu-avatar members:');
  avatarMod.declarations[0].members.forEach(mm => console.log(' ', mm.name, ':', JSON.stringify(mm.type)));
}

// Print all cssProperties that end in color or background
console.log('\n--- CSS Custom Properties ending in color/background ---');
m.modules.forEach(mod => {
  const decl = mod.declarations[0];
  (decl.cssProperties || []).forEach(p => {
    if (/(background|color)$/i.test(p.name)) {
      console.log(' ', decl.tagName, p.name);
    }
  });
});

// Print full structure of first module to see what Storybook receives
const firstMod = m.modules[0].declarations[0];
console.log('\n--- First module declaration keys ---');
Object.keys(firstMod).forEach(k => console.log(' ', k, ':', typeof firstMod[k], Array.isArray(firstMod[k]) ? '['+firstMod[k].length+']' : ''));
