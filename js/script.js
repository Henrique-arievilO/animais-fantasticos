import Accordion from "./modules/accordion.js";
import DropdownMenu from "./modules/dropdownMenu.js";
import fetchAnimals from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import MenuMobile from "./modules/menuMobile.js";
import Modal from "./modules/modal.js";
import Operation from "./modules/operation.js";
import ScrollAnimation from "./modules/scrollAnimation.js";
import SmoothScroll from "./modules/smoothScroll.js";
import TabNav from "./modules/tabNav.js";
import Tooltip from "./modules/tooltip.js";

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
const operation = new Operation("[data-week]");

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
operation.init();
