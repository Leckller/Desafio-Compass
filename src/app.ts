/*
import Comentarios from './utils/Comentarios';
import ComentarioComponent from './Components/ComentarioComponent';
import RoupaComponent from './Components/RoupaComponent';
import { Roupas } from './utils/Roupas';

const ArrivalsContent = document.querySelector('#ArrivalsContent')!;
const TopSeelingContent = document.querySelector('#TopSeelingContent')!;

// Adiciona as roupas

Roupas.arrivals.forEach((roupa) => {
  const newRoupa = RoupaComponent(roupa);
  ArrivalsContent.appendChild(newRoupa);
});

Roupas.topSeeling.forEach((roupa) => {
  const newRoupa = RoupaComponent(roupa);
  TopSeelingContent.appendChild(newRoupa);
});

// Adicion os comentarios

const SectionCards = document.querySelector('.sectionCard')!;

Comentarios.forEach((comentario) => {
  const novoComentario = ComentarioComponent(comentario);
  SectionCards.appendChild(novoComentario);
 });
*/
import MenuAction from './Components/Actions/Menu';
import FormAction from './Components/Actions/Form';

// ======== EVENTOS ======== //

// Evento do menu hamburguer

MenuAction();

// Regex para validação do email

FormAction();
