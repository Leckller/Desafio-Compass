function SearchBarAction() {
  const button = document.querySelector('#lupa')! as HTMLButtonElement;
  const input = document.querySelector('#searchInput')! as HTMLInputElement;

  button.addEventListener('click', () => {
    input.style.visibility = 'visible';
    input.style.position = 'static';
  });

  input.addEventListener('focusout', () => {
    input.style.visibility = 'hidden';
    input.style.position = 'absolute';
  });
}

export default SearchBarAction;
