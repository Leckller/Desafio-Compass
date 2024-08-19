import Menu from '../Menu';

function MenuAction() {
  const menuHbg = document.querySelector('.menu-hamburguer')! as HTMLButtonElement;
  const anchor = document.querySelector('#anchor')! as HTMLDivElement;

  menuHbg.addEventListener('click', () => {
    const menu = document.querySelector('.menu')! as HTMLElement;
    if (menu) {
      menu.style.animation = 'leftIn 1s forwards';
      return;
    }
    const newMenu = Menu();
    anchor.appendChild(newMenu);
  });
}

export default MenuAction;
