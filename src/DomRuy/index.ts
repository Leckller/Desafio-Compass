// Dom Ruy (manipulador do dom)
class DR {
  // Factory Method
  static dr(): DR {
    return new DR();
  }

  // QUERY SELECTOR
  public q(q: string): Element | undefined {
    try {
      const element = document.querySelector(q);
      if (!element) throw new Error('Elemento não encontrado!');
      return element;
    } catch (err) { console.log(`Erro: ${err}`); }
  }
}

export default DR.dr();
