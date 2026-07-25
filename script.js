const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');

function updateToggle() {
  const dark = root.dataset.theme === 'dark';
  toggle.setAttribute('aria-pressed', String(dark));
  toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
}

toggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', root.dataset.theme);
  updateToggle();
});

updateToggle();
document.querySelector('#year').textContent = new Date().getFullYear();
