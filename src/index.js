import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Currency from './currency';

async function exchangeRate(currencyOne, currencyTwo, money) {
  const response = await Currency.exchangeRate(currencyOne, currencyTwo, money);
  console.log(response)
  if (response.result === "success") {
    printElems(response);
  } else {
    printError(response);
  }
}

function printElems (response, currencyOne, currencyTwo, money) {
  document.querySelector('#forNowResponse').innerText = `${currencyOne} ${money} is ${response["conversion_result"]} ${currencyTwo}`;
}

function printError (error, currencyOne, currencyTwo, money) { 
  document.querySelector('#forNowResponse').innerText = `Computing too hard. Could not get ${currencyOne} to ${currencyTwo} to get any ${money}. Try again ${error}.`;
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