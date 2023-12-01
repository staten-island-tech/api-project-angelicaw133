import '../css/style.css'

const URL = `https://api.ebird.org/v2/data/obs/{{regionCode}}/recent`;

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
        document.querySelector(".ee"). = data.content;
        console.log(data.content);
    } catch (error) {
        console.log(error, "uhoh")
    }
}
getData(URL);