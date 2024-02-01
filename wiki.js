let userInputELe = document.getElementById("searchInput");
let searchresultdiv = document.getElementById("searchResults");
let spinner = document.getElementById("spinner")

function CreateandAppendresult(result) {
    let {
        title,
        link,
        description
    } = result; //object destructuring
    //Div container- result item
    let resultitemdiv = document.createElement("div");
    resultitemdiv.classList.add("result-item");
    searchresultdiv.appendChild(resultitemdiv);



    //Anchor- title Element 
    let resultitle = document.createElement("a");
    resultitle.classList.add("result-title");
    resultitle.textContent = title;
    resultitle.href = link;
    resultitle.target = "_blank";
    resultitemdiv.appendChild(resultitle);
    //create break Element
    let titlebreak = document.createElement("br");
    resultitemdiv.appendChild(titlebreak);
    //Anchor  url element 
    let urlele = document.createElement("a");
    urlele.classList.add("result-url");
    urlele.textContent = link;
    urlele.href = link;
    urlele.target = "_blank";
    resultitemdiv.appendChild(urlele);
    //create break element 
    let brekaele = document.createElement("br");
    resultitemdiv.appendChild(brekaele);

    //paragraph description element 
    let paraele = document.createElement("p");
    paraele.classList.add("link-description")
    paraele.textContent = description;
    resultitemdiv.appendChild(paraele);



}

function displayResults(searchresults) {
    spinner.classList.toggle("d-none");
    for (let result of searchresults) {
        //search results are in array 
        CreateandAppendresult(result);





    }
}

function searchwikipedia(event) {
    if (event.key === "Enter") {

        searchresultdiv.textContent = "";
        spinner.classList.toggle("d-none");
        let userinput = userInputELe.value;
        let url = "https://apis.ccbp.in/wiki-search?search=Rahul" + userinput;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                console.log(jsonData)
                let {
                    search_results
                } = jsonData; // object destructuring
                displayResults(search_results);
            })

    }
}
userInputELe.addEventListener('keydown', searchwikipedia);