export default class ScrollAnimation {
  constructor(sections) {
    this.activeClass = "active";
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.5;
    this.animeScroll = this.animeScroll.bind(this);
  }

  animeScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.windowHalf;
      const isSectionVisible = sectionTop - this.windowHalf < 0;
      if (isSectionVisible) {
        section.classList.add(this.activeClass);
      } else if (section.classList.contains(this.activeClass)) {
        section.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    this.animeScroll();
    window.addEventListener("scroll", this.animeScroll);
  }
}
