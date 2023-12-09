import "../css/style.css";

import {DOMSelectors} from './dom'

function make_cards(arr) {
  arr.forEach((object) => {
    DOMSelectors.container.insertAdjacentHTML(
   'afterbegin', `<div class="btn_container">
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
    

    // let data_arr = data.data;
    // data_arr.forEach((object)=> console.log(object.country))
  } 
    
    catch (error) {
    console.log(error, "please try again later");
    document.querySelector("h1").textContent = "please try again later";
  }
}
getData(URL);

// const fetch = require('node-fetch');

// (async () => {
//   const response = await fetch('https://trefle.io/api/v1/plants?token=BhEkOBlZIXwRP0RrgAiBCFno8pb2jhCtWNCk4dIye9I');
//   if(response.status !=200){
//         throw new Error(response.statusText)
//   }
//   const json = await response.json();
//   console.log(json);
//   console.log(data.author);
// })();
// console.log('https://trefle.io/api/v1/plants?token=BhEkOBlZIXwRP0RrgAiBCFno8pb2jhCtWNCk4dIye9I')
