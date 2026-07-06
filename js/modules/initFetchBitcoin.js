export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((bitcoin) => {
      const btcPrice = document.querySelector(target);
      btcPrice.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      window.alert(Error(error));
    });
}
