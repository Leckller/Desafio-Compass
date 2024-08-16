import IRoupa from '../Types/IRoupa';

function Roupa(cardFields: IRoupa, id: number) {
  const card = document.createElement('article');
  card.id = `card-${id}`;
  card.classList.add('card');

  const Image = document.createElement('img');
  Image.src = cardFields.img;

  const Title = document.createElement('h3');
  Title.textContent = cardFields.nome;

  const Stars = document.createElement('span');
  Stars.textContent = cardFields.avaliacao.toString();

  const Price = document.createElement('p');
  Price.textContent = cardFields.preco.toString();

  card.appendChild(Image);
  card.appendChild(Title);
  card.appendChild(Stars);
  card.appendChild(Price);

  return card;
}

export default Roupa;
