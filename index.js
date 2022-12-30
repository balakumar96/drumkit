var list = document.querySelectorAll(".drum");
var button = ["w","a","s","d","j","k","l"];
var sound = ["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"];
var lenbutton = button.length;

//Detecting Mouse Click
for (let i = 0; i<list.length;i++) {
    list[i].addEventListener("click",function () {
        var trig1 = this.innerHTML;
        Aud(trig1);
    });
}

//Detecting Keyboard Press
document.addEventListener("keydown", function(event){
    var trig2 = event.key ;
    Aud(trig2);
});

//Play Audio + Add Animation
function Aud(letter) {
    for (var i = 0; i<lenbutton; i++) {
        if (letter === button[i]) {
            var audio1 = new Audio ("sounds/"+sound[i] +".mp3"); //Audio
            audio1.play();
            document.querySelector("." + letter).classList.add("pressed"); //Animation
            setTimeout(function(){
                document.querySelector("." + letter).classList.remove("pressed");
            }, 100);
        }
    } 
}


