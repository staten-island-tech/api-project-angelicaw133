import '../css/style.css'

const URL = `http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]`;

//goes before anything bfore getting data from api
async function getData(URL){
    try {
        //requesting response REST API'S
        const response = await fetch(URL);
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        //convert response to json
        const data = await response.json();
        document.querySelector("h1").textContent = data.content;
        console.log(data.content);
    } catch (error) {
        console.log(error, "uhoh")
        document.querySelector("h1").textContent = "awnah";
    }
}
getData(URL);