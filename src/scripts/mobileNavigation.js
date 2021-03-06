export default ({
  buttonSelector = '.burger',
  menuSelector = '.nav__menu',
  bodyClass = 'nav-menu-open',
} = {}) => {
  const button = document.querySelector(buttonSelector);
  const menu = document.querySelector(menuSelector);
  if (!button || !menu) return;

  button.hidden = false;

  button.addEventListener('click', () => {
    document.body.classList.toggle(bodyClass);
  });
};
