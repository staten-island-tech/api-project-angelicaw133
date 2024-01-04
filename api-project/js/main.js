import "../css/style.css";

import { DOMSelectors } from "./dom";

function make_cards(arr) {
  arr.forEach((object) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card_container">
          <div class="card">
            <h3>${object.strCategory}</h3>
            <img src=${object.strCategoryThumb} alt="${"image of " + object.strCategory}">
            <button class="more">See Foods</button>
          </div>
          </div>`
    );
  });
}
const URLA = `https://www.themealdb.com/api/json/v1/1/categories.php`;
async function getData(URLA) {
  try {
    const response = await fetch(URLA);
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    make_cards(data.categories);

    let cards = document.querySelectorAll(".more");
    cards.forEach((card) =>
      card.addEventListener("click", function (event) {
        let category = event.target.previousSibling.previousSibling.previousSibling
            .previousSibling.textContent;  
            console.log(category)
            getData_more(category);
              clear_scr();
                })
    );
  } catch (error) {
    console.log(error, "please try again later");
    document.querySelector("h1").textContent = "please try again later";
  }}
getData(URLA);

function getData_more(category){
  const URLBf = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  async function getData_meals(URLB) {
    try {
      const response = await fetch(URLB);
      if (response.status != 200) {
        throw new Error(response.statusText);
      }
      const data2 = await response.json();
      console.log(data2);
      document.querySelector("h1").textContent= `${category}`
      card_click(data2.meals);
      

  
    } catch (error) {
      console.log(error, "please try again later");
      document.querySelector("h1").textContent = "please try again later";
    }
  }
  getData_meals(URLBf);
  }

  function card_click(arr2) {
      arr2.forEach((object) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `
      <button class="resetall"></button>
    <div class="card_container">
      <div class="card2">
        <h4>${object.strMeal}</h4>
        <img src=${object.strMealThumb} alt="${"image of " + object.strMeal}">
      </div>
      </div>`
    );
  });
}

function clear_scr() {
    const element = document.querySelector(".container");
    element.innerHTML = "";
  }