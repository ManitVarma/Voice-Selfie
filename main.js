var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

    recognition.onresult = function(event) {
        console.log(event)

        var Content = event.results [0][0].transcript;
        document.getElementById("textbox").innerHTML = Content;
        if(Content == "take my selfie"){
            console.log("taking your selfie");
            speak()
        }
    }

}



function speak(){
    var synth = window.speechSynthesis;

    speak_Data = "taking your selfie in 5 seconds";

    var utterthis = new SpeechSynthesisUtterance(speak_Data);

    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function(){
        takeSnap()
        Save()
    },5000);
}

Webcam.set({
    height:360,
    width:250,
    img_format: 'png',
    png_quality: 90
})
camera = document.getElementById("camera")

function takeSnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfi").innerHTML = "<img id='selfi_img' src="+data_uri+"> "
    })


}

function Save(){
    link = document.getElementById("link");
    image = document.getElementById("selfi_img").src;
    link.href=image;
    link.click();
}
