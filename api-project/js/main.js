import "../css/style.css";

import {DOMSelectors} from './dom'

function make_cards(arr) {
  arr.forEach((object) => {
    DOMSelectors.container.insertAdjacentHTML(
   'beforeend', `
        </div>
        <div class="card_container">
          <div class="card">
            <h3>${object.country}</h3>
          </div>`
  )})};
const URLA = `https://countriesnow.space/api/v0.1/countries`;
async function getData_country(URLA) {
  try {
    const response = await fetch(URLA);
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    make_cards(data.data);

    let cards = document.querySelectorAll (".card");
    cards.forEach((card) => card.addEventListener("click", function(){
      card_click(card.textContent, data);
      console.log("workds");
    }))

  } 
    catch (error) {
    console.log(error, "please try again later");
    document.querySelector("h1").textContent = "please try again later";
  }
}

getData_country(URLA);

function clear_scr() {
  const element = document.querySelector(".container");
    element.innerHTML = ""
}

function card_click(title, country) {
  clear_scr();
  DOMSelectors.container.insertAdjacentHTML(
      'beforeend', `<div class="pop_up">
      <h2 class="popup2">${title}</h2>
      <h3 class="popup3">${country.data}</h3>
      <h4 class="popup4"></h4>
      </div>`
  )
}


// var name = 'San Francisco'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/city?name=' + name,
//     headers: { 'X-Api-Key': '8mj8svu38m7v53EKnkOMGw==XUn3AP2GywfTbdil'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

// const request = require('request');

// var name = 'San Francisco'
// request.get({
//   url: 'https://api.api-ninjas.com/v1/city?name=' + name,
//   headers: {
//     'X-Api-Key': '8mj8svu38m7v53EKnkOMGw==XUn3AP2GywfTbdil'
//   },
// }, function(error, response, body) {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });

