// my API:  https://www.exchangerate-api.com/
// and ID:  1d7578694ef7606402b7f942

const exchangeRate = document.getElementById('exchangeRate');
const swap = document.getElementById('swap-button');

const curr1Element = document.getElementById('curr1');
const curr2Element = document.getElementById('curr2');

const amount1El = document.getElementById('amount1');
const amount2El = document.getElementById('amount2');

let url = 'https://v6.exchangerate-api.com/v6/1d7578694ef7606402b7f942/latest/USD';


function calculate() {
  const currency_one = curr1Element.value;
  const currency_two = curr2Element.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two];
      console.log(rate);      
      exchangeRate.innerText =  `1 ${currency_one} = ${rate} ${currency_two}`;
      amount2El.value = (amount1El.value * rate).toFixed(2);
    });
}

// Event listeners
curr1Element.addEventListener("change", calculate);
amount1El.addEventListener("input", calculate);
curr2Element.addEventListener("change", calculate);
amount2El.addEventListener("input", calculate);



calculate()
