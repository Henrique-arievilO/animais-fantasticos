import SmoothScroll from "./modules/initSmoothScroll.js";
import Accordion from "./modules/initAccordion.js";
import TabNav from "./modules/initTabNav.js";
import Modal from "./modules/initModal.js";
import initTooltip from "./modules/initTooltip.js";
import initDropdownMenu from "./modules/initDropdownMenu.js";
import initMenuMobile from "./modules/initMenuMobile.js";
import initOperation from "./modules/initOperation.js";
import initFetchAnimais from "./modules/initFetchAnimais.js";
import initFetchBitcoin from "./modules/initFetchBitcoin.js";
import initAnimeScroll from "./modules/initAnimeScroll.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
const accordion = new Accordion('[data-anime="accordion"] dt');
const tabnav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');

smoothScroll.init();
accordion.init();
tabnav.init();
modal.init();

initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimais();
initFetchBitcoin();
initAnimeScroll();
