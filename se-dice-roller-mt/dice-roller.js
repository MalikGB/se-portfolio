var dice1 = {id: document.getElementById("Dice1").src, side: 1};
var dice2 = {id:document.getElementById("Dice2").src, side: 2};
var dice3 = {id:document.getElementById("Dice3").src,side:3};
var dice4 = {id:document.getElementById("Dice4").src,side:4};
var dice5 = {id:document.getElementById("Dice5").src,side:5};

dieObj = [dice1,dice2,dice3,dice4,dice5];

function diceAnimation(){
    document.getElementById("Dice1").src = "dice-images/dice_rolling.gif";
    document.getElementById("Dice2").src = "dice-images/dice_rolling.gif";
    document.getElementById("Dice3").src = "dice-images/dice_rolling.gif";
    document.getElementById("Dice4").src = "dice-images/dice_rolling.gif";
    document.getElementById("Dice5").src = "dice-images/dice_rolling.gif";

}

function rollDice(){
   diceAnimation();
   // Generating a random dice number
    min = Math.ceil(1);
    max = Math.floor(6);

   for(var i =0; i<=5; i++){
        side =Math.floor(Math.random()*(max-min+1)+min);
        if(i==0){
        
        if(side==1){
            document.getElementById("Dice1").src = "dice-images/Alea_1.png";
        }
        if(side==2){
            document.getElementById("Dice1").src = "dice-images/Alea_2.png";
        }
        if(side==3){
            document.getElementById("Dice1").src = "dice-images/Alea_3.png";
        }
        if(side==4){
            document.getElementById("Dice1").src = "dice-images/Alea_4.png";
        }
        if(side==5){
            document.getElementById("Dice1").src = "dice-images/Alea_5.png";
        }
        if(side==6){
            document.getElementById("Dice1").src = "dice-images/Alea_6.png";
        }
    }
    if(i==1){
        
        if(side==1){
            document.getElementById("Dice2").src = "dice-images/Alea_1.png";
        }
        if(side==2){
            document.getElementById("Dice2").src = "dice-images/Alea_2.png";
        }
        if(side==3){
            document.getElementById("Dice2").src = "dice-images/Alea_3.png";
        }
        if(side==4){
            document.getElementById("Dice2").src = "dice-images/Alea_4.png";
        }
        if(side==5){
            document.getElementById("Dice2").src = "dice-images/Alea_5.png";
        }
        if(side==6){
            document.getElementById("Dice2").src = "dice-images/Alea_6.png";
        }
    }
    if(i==2){
        
        if(side==1){
            document.getElementById("Dice3").src = "dice-images/Alea_1.png";
        }
        if(side==2){
            document.getElementById("Dice3").src = "dice-images/Alea_2.png";
        }
        if(side==3){
            document.getElementById("Dice3").src = "dice-images/Alea_3.png";
        }
        if(side==4){
            document.getElementById("Dice3").src = "dice-images/Alea_4.png";
        }
        if(side==5){
            document.getElementById("Dice3").src = "dice-images/Alea_5.png";
        }
        if(side==6){
            document.getElementById("Dice3").src = "dice-images/Alea_6.png";
        }
    }
    if(i==3){
        
        if(side==1){
            document.getElementById("Dice4").src = "dice-images/Alea_1.png";
        }
        if(side==2){
            document.getElementById("Dice4").src = "dice-images/Alea_2.png";
        }
        if(side==3){
            document.getElementById("Dice4").src = "dice-images/Alea_3.png";
        }
        if(side==4){
            document.getElementById("Dice4").src = "dice-images/Alea_4.png";
        }
        if(side==5){
            document.getElementById("Dice4").src = "dice-images/Alea_5.png";
        }
        if(side==6){
            document.getElementById("Dice4").src = "dice-images/Alea_6.png";
        }
    }
    if(i==4){
        
        if(side==1){
            document.getElementById("Dice5").src = "dice-images/Alea_1.png";
        }
        if(side==2){
            document.getElementById("Dice5").src = "dice-images/Alea_2.png";
        }
        if(side==3){
            document.getElementById("Dice5").src = "dice-images/Alea_3.png";
        }
        if(side==4){
            document.getElementById("Dice5").src = "dice-images/Alea_4.png";
        }
        if(side==5){
            document.getElementById("Dice5").src = "dice-images/Alea_5.png";
        }
        if(side==6){
            document.getElementById("Dice5").src = "dice-images/Alea_6.png";
        }
        
    }
           
    }
       
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
