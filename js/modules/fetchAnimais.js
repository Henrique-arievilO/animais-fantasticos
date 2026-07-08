import AnimaNumbers from "./animaNumbers.js";

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("animal-number");
    div.innerHTML = `<h3>${animal.specie}</h3>
  <span data-number>${animal.total}</span>`;
    return div;
  }

  //Preenche com os dados de cada animal no DOM
  const gridNumber = document.querySelector(target);
  function fillInAnimals(animal) {
    const divAnimal = createAnimal(animal);
    gridNumber.appendChild(divAnimal);
  }

  //Animas os números de cada animal
  function animateAnimaNumber() {
    const animaNumbers = new AnimaNumbers(
      "[data-number]",
      ".numbers",
      "active",
    );

    animaNumbers.init();
  }

  //cria uma div contento informações sobre o total de animais
  async function createAnimals() {
    //Fetch espera a resposta e transforma em JSON
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      //Após transformar em JSON ativa as funções para preencher e animar os números
      animalsJSON.forEach((animal) => {
        fillInAnimals(animal);
      });
      animateAnimaNumber();
    } catch (error) {
      window.alert(Error(error));
    }
  }

  return createAnimals();
}
