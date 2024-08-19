import Alert from '../Alert';

function AlertAction(title:string, text: string) {
  const anchor = document.querySelector('#anchor')!;
  const alert = Alert(title, text);
  anchor.appendChild(alert);
}

export default AlertAction;
