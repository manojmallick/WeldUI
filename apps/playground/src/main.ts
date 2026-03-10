// Playground entry point — registers all WeldUI components
import '@weldui/core';

// Apply extra themes dynamically based on URL/localStorage
const savedTheme = localStorage.getItem('wu-theme');
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
  const picker = document.getElementById('theme-picker') as HTMLSelectElement;
  if (picker) picker.value = savedTheme;
}

// Save theme preference
document.getElementById('theme-picker')?.addEventListener('change', (e) => {
  const target = e.target as HTMLSelectElement;
  localStorage.setItem('wu-theme', target.value);
  document.documentElement.dataset.theme = target.value;
});
