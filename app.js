
var btnTranslate = document.querySelector("#btn-translate")

var textInput = document.querySelector("#txt-input");

var textOutput = document.querySelector("#txt-output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"
//var serverURL ="https://api.funtranslations.com/translate/valspeak.json"

//Constructtheurl

function getTranslationURL(input) {
    return serverURL + "?" + "text" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")


    function clickhandler() {

        //taking input
        var inputext = textInput.value;


        //    if(inputext.length === 0){
        //        alert("YOU NEED TO ENTER SOME TEXT")
        //    }

        fetch(getTranslationURL(inputext))
            .then(response => response.json())
            .then(json => {
                var TranslatedText = json.contents.translated;
                textOutput.innerText = TranslatedText;
            })

            .catch(errorHandler)

    }

    btnTranslate.addEventListener("click", clickhandler())
