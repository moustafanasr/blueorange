document.addEventListener('DOMContentLoaded', function () {
  // Toggle mobile menu
  const menuButton = document.getElementById('menu-button');
  const navLinks = document.getElementById('nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  } else {
    console.error('Could not find menu button or nav links element.');
  }
});