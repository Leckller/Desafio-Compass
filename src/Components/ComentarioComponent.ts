import { fullStar, halfStar } from '../assets/Stars/index';
import IComentario from '../Types/IComentario';
import verificado from '../../build/5bedf0c3f466cdaaa786.svg';

function ComentarioComponent(campos: IComentario) {
  const Card = document.createElement('article');
  Card.classList.add('card');

  const avaliacao = document.createElement('div');
  avaliacao.classList.add('avaliacao');
  for (let i = 0; i < campos.avaliacao; i++) {
    const star = document.createElement('img');
    star.src = campos.avaliacao - i === 0.5 ? halfStar : fullStar;
    star.alt = 'Star';
    avaliacao.appendChild(star);
  }

  const TitleBox = document.createElement('article');
  TitleBox.classList.add('TitleBox');

  const Title = document.createElement('h3');
  Title.textContent = campos.nome;

  const Verificado = document.createElement('img');
  Verificado.src = verificado;
  Verificado.alt = 'Usuário verificado';

  TitleBox.appendChild(Title);
  TitleBox.appendChild(Verificado);

  const Comentario = document.createElement('p');
  Comentario.textContent = campos.comentario;

  Card.appendChild(avaliacao);
  Card.appendChild(TitleBox);
  Card.appendChild(Comentario);

  return Card;
}

export default ComentarioComponent;
