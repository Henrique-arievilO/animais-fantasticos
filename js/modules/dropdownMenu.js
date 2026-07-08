import outsideClick from "./outsideClick.js";
export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.activeClass = "active";
    //define "touchstart", "click" como argumento padrão de events caso não seja definido
    if (this.events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeDrpodownMenu = this.activeDrpodownMenu.bind(this);
  }

  //ativa o dropdownmenu e ativa a função que observa o clique fora dele
  activeDrpodownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  //adiciona os eventos ao dropdown menu
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDrpodownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
