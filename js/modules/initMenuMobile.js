import outsideClick from "./initOutsideClick.js";

const activeClass = "active";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  function openMenu(event) {
    menuButton.classList.add(activeClass);
    menuList.classList.add(activeClass);
    outsideClick(menuList, events, () => {
      menuButton.classList.remove(activeClass);
      menuList.classList.remove(activeClass);
    });
  }
  if (menuButton) {
    events.forEach((event) => {
      menuButton.addEventListener("click", openMenu);
    });
  }
}
