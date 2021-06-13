function login() {
    user_inp = document.getElementById("user_inpt").value;
    localStorage.setItem("user_:", user_inp)
    window.location = "Choice.html";
}

function re() {
    var SpeechRecognition = window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    document.getElementById("user_inpt").innerHTML = "";
    recognition.start();
}