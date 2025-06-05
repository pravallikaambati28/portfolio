const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved theme or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  body.classList.add('dark-mode');
  if (toggleBtn) toggleBtn.textContent = '☀️';
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
}
