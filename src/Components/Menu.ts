const Menu = (): HTMLElement => {
  const menu = document.createElement('aside');
  menu.classList.add('menu');

  const headerMenu = document.createElement('article');
  headerMenu.classList.add('headerMenu');

  const xButton = document.createElement('button');
  xButton.innerText = 'X';
  xButton.classList.add('buttons');
  xButton.addEventListener('click', () => {
    menu.style.animation = 'leftOut 1s forwards';
  });

  headerMenu.appendChild(xButton);

  menu.appendChild(headerMenu);
  return menu;
};

export default Menu;
