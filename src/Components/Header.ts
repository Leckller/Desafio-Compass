class HeaderClass {
  public build() {
    const h = this.Header();
    h.appendChild(this.title());
    h.appendChild(this.navBar());
    h.appendChild(this.searchBar());
    h.appendChild(this.article());
  }

  public Header(): HTMLElement {
    const header = <HTMLElement>document.querySelector('#header');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    return header;
  }

  private title() {
    const title = document.createElement('h1');
    title.textContent = 'SHOP.CO';
    return title;
  }

  private article() {
    const article = document.createElement('article');
    article.appendChild(this.car());
    article.appendChild(this.profile());
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
    return dropBox;
  }

  private onSaleTitle() {
    const onSaleTitle = document.createElement('button');
    return onSaleTitle;
  }

  private newArrivals() {
    const newArrivals = document.createElement('button');
    return newArrivals;
  }

  private brands() {
    const brands = document.createElement('button');
    return brands;
  }

  private searchBar() {
    const searchBar = document.createElement('input');
    searchBar.placeholder = 'Search for products';
    return searchBar;
  }

  private car() {
    const car = document.createElement('button');
    return car;
  }

  private profile() {
    const profile = document.createElement('button');
    return profile;
  }
}

export default new HeaderClass();
