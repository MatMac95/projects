let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).keypress(function(){  
    if(!started){
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){
    if (started){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    }
    });

function nextSequence() {
    let randomNumber =  Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
userClickedPattern = [];
level++;
$("h1").text("Level " + level);
}

function playSound(name) {
    let buttonAudio = new Audio('./sounds/' + name + '.mp3');
buttonAudio.play();
}

function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
 if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(nextSequence, 1000);
        
    }
 }
 else {
playSound("wrong");
$("body").addClass("game-over");
setTimeout(function(){
    $("body").removeClass("game-over");W
}, 200);
$("h1").text("Game Over, Press Any Key to Restart");
startOver();
 }
}

function startOver() {
    gamePattern = [];
    level = 0;
    started = false;

}