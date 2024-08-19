function ViewAllAction() {
  const carrossel = document.querySelectorAll('.carrossel')!;
  const buttons = document.querySelectorAll('.viewAll')!;

  buttons.forEach((button, index) => {
    (button as HTMLButtonElement).addEventListener('click', () => {
      const actual = carrossel[index] as HTMLDivElement;
      if (button.textContent === 'View All') {
        actual.style.flexDirection = 'row';
        actual.style.height = 'auto';
        button.textContent = 'Retract';
      } else {
        actual.style.flexDirection = 'column';
        actual.style.height = '450px';
        button.textContent = 'View All';
      }
    });
  });
}

export default ViewAllAction;
