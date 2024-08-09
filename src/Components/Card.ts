import { CardType } from '../Types/Card';

function Card(cardFields: CardType, id: number) {
  const card = document.createElement('article');
  card.id = `card-${id}`;
  card.classList.add('card');

  const Image = document.createElement('img');
  Image.src = cardFields.img;

  const Title = document.createElement('h3');
  Title.textContent = cardFields.name;

  const Stars = document.createElement('span');
  Stars.textContent = cardFields.stars;

  const Price = document.createElement('p');
  Price.textContent = cardFields.price;

  card.appendChild(Image);
  card.appendChild(Title);
  card.appendChild(Stars);
  card.appendChild(Price);

  return card;
}

export default Card;
