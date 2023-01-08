var translate_button = document.querySelector("#translate")
var text_input = document.querySelector("#input-field")
var text_output = document.querySelector("#output-field")
var serverUrl = "https://api.funtranslations.com/translate/pirate.json"

function errorHandler(error){
    console.log("error handler ",error);
    alert("something wrong with server, try after some time")
}

translate_button.addEventListener("click",function translateToButton(){
    textUrl = serverUrl + "?text=" + text_input.value;
    fetch(textUrl)
    .then(response => response.json())
    .then(json => text_output.innerHTML=json.contents.translated)
    .catch(errorHandler)
})