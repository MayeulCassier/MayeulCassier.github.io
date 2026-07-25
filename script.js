const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');

function updateToggle() {
  const dark = root.dataset.theme === 'dark';
  const french = root.lang === 'fr';
  toggle.setAttribute('aria-pressed', String(dark));
  toggle.setAttribute('aria-label', french ? (dark ? 'Passer au thème clair' : 'Passer au thème sombre') : (dark ? 'Switch to light theme' : 'Switch to dark theme'));
  if (themeColor) themeColor.setAttribute('content', dark ? '#08111f' : '#f5f5f1');
}

toggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', root.dataset.theme);
  updateToggle();
});

updateToggle();
document.querySelector('#year').textContent = new Date().getFullYear();
