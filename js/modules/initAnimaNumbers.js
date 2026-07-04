const activeClass = "active";

export default function initAnimaNumbers() {
  function animateNumber() {
    const numbers = document.querySelectorAll("[data-number]");

    numbers.forEach((number) => {
      const total = +number.innerText;
      const increase = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += increase;
        number.innerText = start;
        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains(activeClass)) {
      observer.disconnect();
      animateNumber();
    }
  }

  const observeTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observeTarget, { attributes: true });
}
