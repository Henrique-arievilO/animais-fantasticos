const activeClass = "active";

export default function initAnimeScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"');
  const windowHalf = window.innerHeight * 0.5;

  function animeScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowHalf;
      const isSectionVisible = sectionTop - windowHalf < 0;
      if (isSectionVisible) {
        section.classList.add(activeClass);
      } else if (section.classList.contains(activeClass)) {
        section.classList.remove(activeClass);
      }
    });
  }
  if (sections.length) {

    animeScroll();

    window.addEventListener("scroll", animeScroll);
  }
}
