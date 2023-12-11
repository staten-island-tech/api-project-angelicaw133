import "../css/style.css";

import {DOMSelectors} from './dom'

function make_cards(arr) {
  arr.forEach((object) => {
    DOMSelectors.container.insertAdjacentHTML(
   'beforeend', `<div class="btn_container">
        </div>
        <div class="card_container">
          <div class="card">
            <h3>${object.country}</h3>
          </div>
        </div>`
  )})};
const URL = `https://countriesnow.space/api/v0.1/countries`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    make_cards(data.data);
    console.log(data.data)

    let cards = document.querySelectorAll (".card");
    cards.forEach((card) => card.addEventListener("click", function(){

      console.log("workds");
    }))

  } 
    catch (error) {
    console.log(error, "please try again later");
    document.querySelector("h1").textContent = "please try again later";
  }
}
getData(URL);

fucntion 
