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
    printElems(response);
  } else {
    printError(response);
  }
}

printElems = (response, currencyOne, currencyTwo, money) => {
  document.querySelector('#forNowResponse').innerText = `${currencyOne} ${money} is ${response["conversion_result"]} ${currencyTwo}`
}

printError = (error, currencyOne, currencyTwo, money) => {
  document.querySelector('#forNowResponse').innerText = `Computing too hard. Could not get ${currencyOne} to ${currencyTwo} to get any ${money}. Try again ${error}.`
}

submitionForm = (event) => {
  event.preventDefault();
  let currencyOne = document.getElementById('number1').value;
  document.getElementById('number1').value = null;
  let currencyTwo = document.getElementById('number2').value;
  document.getElementById('number2').value = null;
  let money = document.getElementById('cashMoney').value;
  document.getElementById('cashMoney').value = null;
  exchangeRate(currencyOne, currencyTwo, money);
}

