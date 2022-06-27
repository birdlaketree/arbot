var numeral = require('numeral');

const app = () => {
  console.log('hey app');
  setInterval(checkPrices, 1000);
}

const checkPrices = () => {
  console.log('check prices');
}

const init = app();