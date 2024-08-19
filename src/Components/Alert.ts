function Alert(TITLE: string, TEXT: string) {
  const div = document.createElement('div');
  div.classList.add('alert');

  div.addEventListener('click', () => {
    div.remove();
  });

  const article = document.createElement('article');

  const title = document.createElement('h3');
  title.innerText = TITLE;

  const text = document.createElement('p');
  text.innerText = TEXT;

  const button = document.createElement('button');
  button.classList.add('buttons');
  button.innerText = 'Ok';

  button.addEventListener('click', () => {
    div.remove();
  });

  article.appendChild(title);
  article.appendChild(text);
  article.appendChild(button);
  div.appendChild(article);

  return div;
}

export default Alert;
