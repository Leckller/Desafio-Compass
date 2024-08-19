function SearchBarAction() {
  const button = document.querySelector('#lupa')! as HTMLButtonElement;
  const input = document.querySelector('#searchInput')! as HTMLInputElement;
  const otherButtons = document.querySelector('#otherButtons')! as HTMLDivElement;

  button.addEventListener('click', () => {
    input.style.visibility = 'visible';
    input.placeholder = 'Search';
    input.style.position = 'static';
    input.style.width = '200px';
    button.style.visibility = 'hidden';
    otherButtons.style.position = 'absolute';
    otherButtons.style.visibility = 'hidden';
  });

  input.addEventListener('focusout', () => {
    input.style.visibility = 'hidden';
    input.style.position = 'absolute';
    input.style.width = '0';
    button.style.visibility = 'visible';
    otherButtons.style.position = 'static';
    otherButtons.style.visibility = 'visible';
  });
}

export default SearchBarAction;
