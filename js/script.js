guimport SmoothScroll from "./modules/initSmoothScroll.js";
import Accordion from "./modules/initAccordion.js";
import TabNav from "./modules/initTabNav.js";
import Modal from "./modules/initModal.js";
import Tooltip from "./modules/initTooltip.js";
import fetchAnimals from "./modules/initFetchAnimais.js";
//separador
import ScrollAnimation from "./modules/ScrollAnimation.js";
import initDropdownMenu from "./modules/initDropdownMenu.js";
import initMenuMobile from "./modules/initMenuMobile.js";
import initOperation from "./modules/initOperation.js";
import fetchBitcoin from "./modules/initFetchBitcoin.js";

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

fetchAnimals("animaisApi.json", ".grid-numbers");
fetchBitcoin("https://blockchain.info/ticker", ".btc-price");

smoothScroll.init();
accordion.init();
tabnav.init();
modal.init();
tooltip.init();
scrollAnimation.init();

initDropdownMenu();
initMenuMobile();
initOperation();
