export default function initFetchBitcoin() {}

fetch("https://blockchain.info/ticker")
  .then((response) => {
    return response.json();
  })
  .then((bitcoin) => {
    const btcPrice = document.querySelector(".btc-price");
    btcPrice.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
  })
  .catch((error) => {
    window.alert(Error(error));
  });
//https://blockchain.info/ticker
