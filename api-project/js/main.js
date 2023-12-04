import '../css/style.css'

// const URL = `https://api.quotable.io/random`;
// async function getData(URL){
//     try {
//         const response = await fetch(URL);
//         if(response.status !=200){
//             throw new Error(response.statusText);
//         }
//         const data = await response.json();
//         document.querySelector("h1").textContent = data.content;
//         console.log(data.content);
//         console.log(data.tags)
//     } catch (error) {
//         console.log(error, "please try again later")
//         document.querySelector("h1").textContent = "please try again later";
//     }
// }
// getData(URL);

const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=BhEkOBlZIXwRP0RrgAiBCFno8pb2jhCtWNCk4dIye9I');
  if(response.status !=200){
        throw new Error(response.statusText)
  }
  const json = await response.json();
  console.log(json);
})();
console.log('https://trefle.io/api/v1/plants?token=BhEkOBlZIXwRP0RrgAiBCFno8pb2jhCtWNCk4dIye9I')