function validateEmail(email: string): boolean {
  // Expressão regular para validar email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Testa o email com a regex
  return emailRegex.test(email);
}

export default validateEmail;
