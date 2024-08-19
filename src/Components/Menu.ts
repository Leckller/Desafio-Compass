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
  const title = document.createElement('h2');
  title.innerText = 'SHOP.CO';

  headerMenu.appendChild(title);
  headerMenu.appendChild(xButton);

  const mainContent = document.createElement('section');
  mainContent.classList.add('mainContentMenu');
  const topics = ['On sale', 'New Arrivals', 'Brands'];
  topics.forEach((topic) => {
    const element = document.createElement('button');
    element.innerText = topic;
    element.classList.add('buttons');
    mainContent.appendChild(element);
  });

  menu.appendChild(headerMenu);
  menu.appendChild(mainContent);
  return menu;
};

export default Menu;
