import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Currency from './currency';

async function exchangeRate(currencyOne, currencyTwo, money) {
  const response = await Currency.exchangeRate(currencyOne, currencyTwo, money);
  if (response.result === "success") {
    printElems(response, currencyOne, currencyTwo, money);
  } else {
    printError(response, currencyOne, currencyTwo, money);
  }
}

function printElems (response, currencyOne, currencyTwo, money) {
  document.querySelector('#forNowResponse').innerText = `${money} ${currencyOne} is ${response["conversion_result"].toFixed(2)} ${currencyTwo}`;
}

function printError (error, currencyOne, currencyTwo, money) { 
  document.querySelector('#forNowResponse').innerText = `Computing too hard. Couldn't exchange ${money} from ${currencyOne} to ${currencyTwo}. Try again ${error}.`;
}

function submissionForm (event) {
  event.preventDefault();
  let currencyOne = document.getElementById('currencyOne').value;
  let currencyTwo = document.getElementById('currencyTwo').value;
  let money = document.getElementById('cashMoney').value;

  exchangeRate(currencyOne, currencyTwo, money);
}

window.addEventListener('load', () => {
  document.getElementById('form').addEventListener('submit', submissionForm);
});