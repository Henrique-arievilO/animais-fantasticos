import outsideClick from "./initOutsideClick.js";

const activeClass = "active";

export default function initDropdownMenu() {}

const dropdownMenus = document.querySelectorAll("[data-dropdown]");

function handleClick(event) {
  event.preventDefault();
  this.classList.add(activeClass);
  outsideClick(this, ["touchstart", "click"], () => {
    this.classList.remove(activeClass);
  });
}
if (dropdownMenus.length) {
  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
