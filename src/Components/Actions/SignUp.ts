function SignUpAction() {
  const div = document.querySelector('.signUp')!;
  const button = document.querySelector('.signClose')! as HTMLButtonElement;

  button.addEventListener('click', () => {
    div.remove();
  });
}

export default SignUpAction;
