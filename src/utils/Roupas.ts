import Roupa from '../models/Roupa';
// import { TopSeeling, Arrivals } from '../assets/Roupas/index';
// Infelizmente a exportação com barril n tá funcionando
import camisaCinzaIMG from '../../build/Arrivals/CamisaCinza.svg';
import CheckeredShirtIMG from '../../build/Arrivals/CheckeredShirt.svg';
import SkinnyFitJeansIMG from '../../build/Arrivals/SkinnyFitJeans.svg';
import SleeveStripedTshirtIMG from '../../build/Arrivals/SleeveStripedTshirt.svg';
import VerticalStripedShirtIMG from '../../build/TopSeeling/VerticalStripedShirt.svg';
import CourageGraphicTshirtIMG from '../../build/TopSeeling/CourageGraphicTshirt.svg';
import FadedSkinnyJeansIMG from '../../build/TopSeeling/FadedSkinnyJeans.svg';
import LooseFitBermudaShortsIMG from '../../build/TopSeeling/LooseFitBermudaShorts.svg';

// ARRIVALS

const tshirtWithTapeDetails = new Roupa({
  img: camisaCinzaIMG,
  avaliacao: 4.5,
  nome: 'T-shirt with Tape Details',
  preco: 120,
  desconto: 1,
});

const SkinnyFitJeans = new Roupa({
  img: SkinnyFitJeansIMG,
  avaliacao: 3.5,
  nome: 'Skinny Fit Jeans',
  preco: 240,
  desconto: 0.8,
});

const CheckeredShirt = new Roupa({
  img: CheckeredShirtIMG,
  avaliacao: 4.5,
  nome: 'Checkered Shirt',
  preco: 180,
  desconto: 1,
});

const SleeveStripedTshirt = new Roupa({
  img: SleeveStripedTshirtIMG,
  avaliacao: 4.5,
  nome: 'Sleeve Striped T-shirt',
  preco: 130,
  desconto: 0.7,
});

const arrivals = [
  tshirtWithTapeDetails,
  SkinnyFitJeans,
  CheckeredShirt,
  SleeveStripedTshirt,
];

// TOP SEELING

const VerticalStripedShirt = new Roupa({
  img: VerticalStripedShirtIMG,
  avaliacao: 5,
  nome: 'Vertical Striped Shirt',
  preco: 212,
  desconto: 0.8,
});
const CourageGraphicTshirt = new Roupa({
  img: CourageGraphicTshirtIMG,
  avaliacao: 4,
  nome: 'Courage Graphic T-shirt',
  preco: 145,
  desconto: 1,
});
const LooseFitBermudaShorts = new Roupa({
  img: LooseFitBermudaShortsIMG,
  avaliacao: 3,
  nome: 'Loose Fit Bermuda Shorts',
  preco: 80,
  desconto: 1,
});
const FadedSkinnyJeans = new Roupa({
  img: FadedSkinnyJeansIMG,
  avaliacao: 4.5,
  nome: 'Faded Skinny Jeans',
  preco: 210,
  desconto: 1,
});

const topSeeling = [
  VerticalStripedShirt,
  CourageGraphicTshirt,
  LooseFitBermudaShorts,
  FadedSkinnyJeans,
];

export const Roupas = {
  arrivals,
  topSeeling,
};
