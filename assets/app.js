
document.querySelectorAll('[data-year]').forEach(n=> n.textContent = new Date().getFullYear());
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach(a => {
  const file = a.getAttribute('href');
  if ((here === 'index.html' && (file === './' || file === 'index.html')) || file === here) {
    a.classList.add('active');
  }
});
