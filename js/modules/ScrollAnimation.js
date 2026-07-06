export default class ScrollAnimation {
  constructor(sections) {
    this.activeClass = "active";
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.5;
    this.checkDistance = this.checkDistance.bind(this);
  }

  //pega a distância de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowHalf),
      };
    });
  }

  //verifica a distância em cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        section.element.classList.add(this.activeClass);
      } else if (section.element.classList.contains(this.activeClass)) {
        section.element.classList.remove(this.activeClass);
      }
    });
  }

  //adiciona o evento de scroll
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  //remove o evento de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
