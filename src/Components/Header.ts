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
    const menu = document.createElement('button');
    const img = document.createElement('img');
    img.src = menuImg;
    article.appendChild(menu);
    article.appendChild(title);
    menu.appendChild(img);
    menu.classList.add('menu-hamburguer');
    menu.classList.add('buttonHeader');
    title.textContent = 'SHOP.CO';
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
    const option1 = document.createElement('option');
    dropBox.className = 'buttonHeader';
    option1.innerText = 'T-Shirt';
    dropBox.appendChild(option1);
    return dropBox;
  }

  private onSaleTitle() {
    const onSaleTitle = document.createElement('button');
    onSaleTitle.className = 'buttonHeader';
    onSaleTitle.innerText = 'On Sale';
    return onSaleTitle;
  }

  private newArrivals() {
    const newArrivals = document.createElement('button');
    newArrivals.className = 'buttonHeader';
    newArrivals.innerText = 'New Arrivals';
    return newArrivals;
  }

  private brands() {
    const brands = document.createElement('button');
    brands.className = 'buttonHeader';
    brands.innerText = 'Brands';
    return brands;
  }

  private searchBar() {
    const article = document.createElement('article');
    article.className = 'searchBar';

    const searchBar = document.createElement('input');
    searchBar.style.border = 'none';
    searchBar.placeholder = 'Search for products...';
    searchBar.style.backgroundColor = 'transparent';
    searchBar.style.outline = 'none';

    const img = document.createElement('img');
    img.src = lupaImg;

    article.appendChild(img);
    article.appendChild(searchBar);
    return article;
  }

  private article() {
    const article = document.createElement('article');
    article.id = 'article-buttons';
    article.appendChild(this.searchBar());
    article.appendChild(this.car());
    article.appendChild(this.profile());
    return article;
  }

  private car() {
    const car = document.createElement('button');
    car.style.backgroundColor = 'transparent';
    car.style.border = 'none';
    const img = document.createElement('img');
    img.src = carImg;
    car.appendChild(img);
    return car;
  }

  private profile() {
    const profile = document.createElement('button');
    profile.style.backgroundColor = 'transparent';
    profile.style.border = 'none';
    const img = document.createElement('img');
    img.src = profileImg;
    profile.appendChild(img);
    return profile;
  }
}

export default new HeaderClass();
