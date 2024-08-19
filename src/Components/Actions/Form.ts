import validateEmail from '../../utils/Validacao';
import AlertAction from './Alert';

function FormAction() {
  const form = document.querySelector('form')! as HTMLFormElement;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#email') as any;
    const validate = validateEmail(input.value);
    if (!validate) {
      AlertAction('Invalid email!', 'Please enter a valid email');
      return;
    }
    AlertAction('A small form...', 'Another step towards supreme style!');

    input.value = '';
  });
}

export default FormAction;
