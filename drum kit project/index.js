
var button =document.getElementsByClassName("drum");
for(var i=0;i<button.length;i++){
    button[i].addEventListener("click",function (){
       
     var a = this.innerText;   
     play(a);
     buttonAnimation(a);

    
    });
}
document.addEventListener("keydown",function(event){
    var a =event.key;
    play(a);
    buttonAnimation(a);
});
function play(p){
    switch(p){
        case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        case "j":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
        case "k":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;       
        case "l":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        default: console.log(p)
    }
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
   
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

