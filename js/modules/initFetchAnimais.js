import AnimaNumbers from "./initAnimaNumbers.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        const gridNumber = document.querySelector(".grid-numbers");
        gridNumber.appendChild(divAnimal);
      });

      const animaNumbers = new AnimaNumbers(
        "[data-number]",
        ".numbers",
        "active",
      );

      animaNumbers.init();
    } catch (error) {
      window.alert(Error(error));
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("animal-number");
    div.innerHTML = `<h3>${animal.specie}</h3>
  <span data-number>${animal.total}</span>`;
    return div;
  }
  fetchAnimais("../../animaisApi.json");
}
