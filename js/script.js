import SmoothScroll from "./modules/initSmoothScroll.js";
import Accordion from "./modules/initAccordion.js";
import TabNav from "./modules/initTabNav.js";
import Modal from "./modules/initModal.js";
import Tooltip from "./modules/initTooltip.js";
import fetchAnimals from "./modules/initFetchAnimais.js";
import fetchBitcoin from "./modules/initFetchBitcoin.js";
import ScrollAnimation from "./modules/ScrollAnimation.js";
import DropdownMenu from "./modules/initDropdownMenu.js";
import MenuMobile from "./modules/initMenuMobile.js";
//separador
import initOperation from "./modules/initOperation.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
const accordion = new Accordion('[data-anime="accordion"] dt');
const tabnav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]',
);
const tooltip = new Tooltip("[data-tooltip]");
const scrollAnimation = new ScrollAnimation('[data-anime="scroll"');
const dropdownMenu = new DropdownMenu("[data-dropdown]");
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');

fetchAnimals("./animaisApi.json", ".grid-numbers");
fetchBitcoin("https://blockchain.info/ticker", ".btc-price");

smoothScroll.init();
accordion.init();
tabnav.init();
modal.init();
tooltip.init();
scrollAnimation.init();
dropdownMenu.init();
menuMobile.init();

initOperation();
