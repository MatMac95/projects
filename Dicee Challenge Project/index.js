let button = document.querySelector(".button-play");
button.addEventListener("click", play);
    
    
    
    function play(){
        let playerOneScore = random();
        let playerTwoScore = random();
        
        if (playerOneScore > playerTwoScore){
            document.querySelector("h1.winner").innerHTML = "PLAYER 1 WON!";
           // console.log("player one is the winner");
        }
        else if (playerOneScore < playerTwoScore){
            document.querySelector("h1.winner").innerHTML = "PLAYER 2 WON!";
           // console.log("player two is the winner");
        }
        else {
            document.querySelector("h1.winner").innerHTML = "DRAW!";
           // console.log("DRAW");
        }
        document.querySelector("img.img1").setAttribute("src", "./images/dice" + playerOneScore + ".png");
        document.querySelector("img.img2").setAttribute("src", "./images/dice" + playerTwoScore + ".png"); 
    }
    
    
    function random(){
         let randomNumber = Math.floor((Math.random()*6)+1);
         //console.log(randomNumber);
         return randomNumber;
          }











