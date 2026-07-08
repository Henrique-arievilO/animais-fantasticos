export default class AnimaNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    //Bind o this do objeto ao tardet da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  //recebe um elemento do dom com número em seu texto e incrementa a partir de 0 até o número final
  static increaseNumber(number) {
    const total = +number.innerText;
    const increase = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += increase;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  //ativa increaseNumber para cada número selecionado do dom
  animateNumber() {
    this.numbers.forEach((number) => {
      this.constructor.increaseNumber(number);
    });
  }

  //Função que ativa quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumber();
    }
  }

  //Adiciona o MutationObserver para verificar quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
