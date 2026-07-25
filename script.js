const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
const mobileQuery = window.matchMedia('(max-width: 700px)');

function isMobile() {
  return mobileQuery.matches;
}

function updateToggle() {
  const dark = root.dataset.theme === 'dark';
  const french = root.lang === 'fr';
  toggle.hidden = isMobile();
  toggle.disabled = isMobile();
  toggle.setAttribute('aria-pressed', String(dark));
  toggle.setAttribute('aria-label', french ? (dark ? 'Passer au thème clair' : 'Passer au thème sombre') : (dark ? 'Switch to light theme' : 'Switch to dark theme'));
  if (themeColor) themeColor.setAttribute('content', dark ? '#08111f' : '#f5f5f1');
}

toggle.addEventListener('click', () => {
  if (isMobile()) return;
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  root.style.colorScheme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateToggle();
});

mobileQuery.addEventListener('change', (event) => {
  if (event.matches) {
    root.dataset.theme = 'light';
  } else {
    const savedTheme = localStorage.getItem('theme');
    root.dataset.theme = savedTheme || 'light';
  }
  updateToggle();
});

updateToggle();
document.querySelector('#year').textContent = new Date().getFullYear();
