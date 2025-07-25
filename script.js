window.addEventListener('load', () => {
  document.querySelectorAll('.icon-card').forEach((card, i) => {
    card.style.opacity = '0';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease';
      card.style.opacity = '1';
    }, i * 150);
  });
});