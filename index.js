// detecting button press
var numberofDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofDrumButtons;i++){
    document.querySelectorAll('button')[i].addEventListener("click",function(){
         
        // console.log(this.innerHTML)
        // this.style.color='red'
        var button= this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
        
    });
    
}
// detecting keyboardpress
addEventListener("keydown", function(event){
    makeSound(event.key)
    buttonAnimation(event.key);
});
function makeSound(key){
    switch (key) {
        case "w":
            var tom_1=new Audio('sounds/tom-1.mp3');
            tom_1.play(); 
            break;
        case "a":
            var tom_2=new Audio('sounds/tom-2.mp3');
                tom_2.play(); 
                break;
        case "s":
            var tom_3=new Audio('sounds/tom-3.mp3');
                tom_3.play(); 
                break;
        case "d":
             var tom_4=new Audio('sounds/tom-4.mp3');
                tom_4.play(); 
                break; 
        case "j":
            var snare=new Audio('sounds/snare.mp3');
                snare.play(); 
                break; 
        case "k":
            var crash=new Audio('sounds/crash.mp3');
                crash.play(); 
                break; 
        case "l":
            var kick_bass=new Audio('sounds/kick-bass.mp3');
                kick_bass.play(); 
                break;             
        default: console.log(button);
            break;
    }
}

function buttonAnimation(current_key){
  var activebutton=document.querySelector("." +current_key);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
 
},100,);
}
// function clickControl(){
//  alert("i got clicked");
// }