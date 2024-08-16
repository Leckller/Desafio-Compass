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
