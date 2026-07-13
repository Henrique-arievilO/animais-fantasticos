import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.activeClass = "active";
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.openMenu = this.openMenu.bind(this);
    //define "touchstart", "click" como argumento padrão de events caso não seja definido
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
  }

  openMenu(event) {
    event.preventDefault();
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
