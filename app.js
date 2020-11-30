// alert("wakee up")
// var a = prompt("Give your name?")
// console.log("Welcome "+a);
// console.log("shrey is here")


 var btnTranslate = document.querySelector("#btn-translate")

 var textInput = document.querySelector("#txt-input");

 var textOutput = document.querySelector("#output");

 
// btnTranslate.addEventListener("click",function clickEventHandler() {
//     //console.log('Button is Clicked!')
// })

// function clickEventHandler() {
//     console.log("Clicked!")

// }

//console.log(textInput);

//console.log(textOutput);


btnTranslate.addEventListener("click",function clickhandler(){
        console.log("Clicked");
        console.log("Your Input:",textInput.value)
        textOutput.innerHTML="IN BANANA LANGUAGE :  " +textInput.value;
  
})




// 1)document.querySelector("textarea")
// 2)document.querySelector(".btn-primary")
// 3)document.querySelector("#input-btn")
// 4)document.querySelector("input[name ='translator']")
