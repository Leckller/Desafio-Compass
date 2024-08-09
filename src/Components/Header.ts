import { carImg, profileImg, lupaImg, menuImg } from '../assets/index';

class HeaderClass {
  public build() {
    const h = this.Header();
    h.appendChild(this.title());
    h.appendChild(this.navBar());
    h.appendChild(this.article());
  }

  public Header(): HTMLElement {
    const header = <HTMLElement>document.querySelector('#header');
    return header;
  }

  private title() {
    const article = document.createElement('article');
    article.id = 'title-article';

    const title = document.createElement('h1');
    title.textContent = 'SHOP.CO';

    const menu = document.createElement('button');
    menu.classList.add('menu-hamburguer');
    menu.classList.add('buttonHeader');

    const img = document.createElement('img');
    img.src = menuImg;

    article.appendChild(menu);
    article.appendChild(title);
    menu.appendChild(img);

    return article;
  }

  private navBar() {
    const navBar = document.createElement('nav');
    navBar.appendChild(this.dropBox());
    navBar.appendChild(this.onSaleTitle());
    navBar.appendChild(this.newArrivals());
    navBar.appendChild(this.brands());
    return navBar;
  }

  private dropBox() {
    const dropBox = document.createElement('select');
    dropBox.classList.add('buttonHeader');
    dropBox.classList.add('buttonText');

    const option1 = document.createElement('option');
    option1.innerText = 'Shop';
    const option2 = document.createElement('option');
    option2.innerText = 'T-Shirt';

    dropBox.appendChild(option1);
    dropBox.appendChild(option2);
    return dropBox;
  }

  private onSaleTitle() {
    const onSaleTitle = document.createElement('button');
    onSaleTitle.classList.add('buttonHeader');
    onSaleTitle.classList.add('buttonText');
    onSaleTitle.innerText = 'On Sale';
    return onSaleTitle;
  }

  private newArrivals() {
    const newArrivals = document.createElement('button');
    newArrivals.classList.add('buttonHeader');
    newArrivals.classList.add('buttonText');
    newArrivals.innerText = 'New Arrivals';
    return newArrivals;
  }

  private brands() {
    const brands = document.createElement('button');
    brands.classList.add('buttonHeader');
    brands.classList.add('buttonText');
    brands.innerText = 'Brands';
    return brands;
  }

  private searchBar() {
    const article = document.createElement('article');
    article.className = 'searchBar';

    const searchBar = document.createElement('input');
    searchBar.placeholder = 'Search for products...';

    const img = document.createElement('img');
    img.src = lupaImg;

    article.appendChild(img);
    article.appendChild(searchBar);
    return article;
  }

  private article() {
    const section = document.createElement('section');
    const article = document.createElement('article');
    section.id = 'section-buttons';
    section.appendChild(this.searchBar());
    section.appendChild(article);
    article.appendChild(this.car());
    article.appendChild(this.profile());
    return section;
  }

  private car() {
    const car = document.createElement('button');
    car.classList.add('buttonHeader');
    car.style.backgroundColor = 'transparent';
    car.style.border = 'none';
    const img = document.createElement('img');
    img.src = carImg;
    car.appendChild(img);
    return car;
  }

  private profile() {
    const profile = document.createElement('button');
    profile.classList.add('buttonHeader');
    profile.style.backgroundColor = 'transparent';
    profile.style.border = 'none';
    const img = document.createElement('img');
    img.src = profileImg;
    profile.appendChild(img);
    return profile;
  }
}

export default new HeaderClass();
