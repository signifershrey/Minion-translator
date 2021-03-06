var btnTranslate = document.querySelector("#btn-translate")
var textIn = document.querySelector("#txt-input");
var textOut = document.querySelector("#txt-output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?"+ "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {

    //taking input
    var inputext = textIn.value;

    //calling for processing
    fetch(getTranslationURL(inputext))
        .then(response => response.json())
        .then(json => {

            var translatedText = json.contents.translated;
            textOut.innerText = translatedText;// output
        })

        .catch(errorHandler)


}

btnTranslate.addEventListener("click", clickHandler);