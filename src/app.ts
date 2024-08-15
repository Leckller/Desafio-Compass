const sectionCards = document.querySelector('.sectionCard')!;
const doorLeft = document.querySelector('.doorLeft')!;
const doorRight = document.querySelector('.doorRight')!;
const carrossel = document.querySelector('.carrossel');

const observerFirst = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    console.log(entry.target);
  }
}, {
  root: carrossel,
  rootMargin: '300px',
});

const observerLast = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    sectionCards.appendChild(sectionCards.firstElementChild!);
  }
}, {
  root: carrossel,
  rootMargin: '300px',
});

observerFirst.observe(doorLeft);
observerLast.observe(doorRight);
