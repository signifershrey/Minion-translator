var btnTranslate = document.querySelector("#btn-translate")
var textIn = document.querySelector("#txt-input");
var textOut = document.querySelector("#txt-output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "? text" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}
function clickhandler() {

    //taking input
    var inputext = textIn.value;
    var outputText ='';

    fetch(getTranslationURL(inputext))
        .then(response => response.json())
        .then(json => {
            outputText = json.contents.translated;
            textOut.value = outputText;
        })

        .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickhandler)
