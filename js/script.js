import SmoothScroll from "./modules/initSmoothScroll.js";
import initAccordion from "./modules/initAccordion.js";
import initTabNav from "./modules/initTabNav.js";
import initModal from "./modules/initModal.js";
import initTooltip from "./modules/initTooltip.js";
import initDropdownMenu from "./modules/initDropdownMenu.js";
import initMenuMobile from "./modules/initMenuMobile.js";
import initOperation from "./modules/initOperation.js";
import initFetchAnimais from "./modules/initFetchAnimais.js";
import initFetchBitcoin from "./modules/initFetchBitcoin.js";
import initAnimeScroll from "./modules/initAnimeScroll.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimais();
initFetchBitcoin();
initAnimeScroll();
