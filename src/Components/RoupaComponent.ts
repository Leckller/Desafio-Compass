import IRoupa from '../Types/IRoupa';
import { halfStar, fullStar } from '../assets/Stars/index';

function RoupaComponent(campos: IRoupa) {
  const card = document.createElement('article');
  card.classList.add('roupa');

  const Image = document.createElement('img');
  Image.alt = campos.nome;
  Image.src = `.${campos.img}`;

  const Title = document.createElement('h3');
  Title.textContent = campos.nome;

  const avaliacao = document.createElement('div');
  avaliacao.classList.add('avaliacao');
  for (let i = 0; i < campos.avaliacao; i++) {
    const star = document.createElement('img');
    star.src = campos.avaliacao - i === 0.5 ? `.${halfStar}` : `.${fullStar}`;
    star.alt = 'Star';
    avaliacao.appendChild(star);
  }
  const avaliacaoString = document.createElement('p');
  avaliacaoString.textContent = `${campos.avaliacao.toString()}`;

  avaliacao.appendChild(avaliacaoString);

  const Precos = document.createElement('article');
  Precos.classList.add('precos');

  const Preco = document.createElement('p');
  Preco.textContent = (campos.preco * campos.desconto).toFixed(0).toString();
  Preco.classList.add('preco');
  Precos.appendChild(Preco);

  if (campos.desconto !== 1) {
    const DescontoTotal = document.createElement('p');
    DescontoTotal.classList.add('DescontoTotal');
    DescontoTotal.textContent = campos.preco.toString();
    Precos.appendChild(DescontoTotal);
    const Desconto = document.createElement('p');
    Desconto.textContent = (100 - (campos.desconto * 100)).toString();
    Desconto.classList.add('desconto');
    Precos.appendChild(Desconto);
  }

  card.appendChild(Image);
  card.appendChild(Title);
  card.appendChild(avaliacao);
  card.appendChild(Precos);

  return card;
}

export default RoupaComponent;
