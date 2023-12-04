import '../css/style.css'

const URL = `https://api.quotable.io/random`;
async function getData(URL){
    try {
        const response = await fetch(URL);
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        document.querySelector("h1").textContent = data.content;
        console.log(data.content);
        console.log(data.tags)
    } catch (error) {
        console.log(error, "uhoh")
        document.querySelector("h1").textContent = "awnah";
    }
}
getData(URL);

//display cards with songs, click on a card, and a new page with cards with quotes that corresponds with song 
// ie. 