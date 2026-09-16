/**
 * Energy Solutions South - Core Scripts
 * Handles accessible mobile menu toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('is-active');
  });

  // Close navigation menu if user clicks outside of the header
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) {
      navMenu.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close navigation menu on ESC key press
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      navMenu.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
