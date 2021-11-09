var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
function start(){
    document.getElementById("textbox").value="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").value=content;
}