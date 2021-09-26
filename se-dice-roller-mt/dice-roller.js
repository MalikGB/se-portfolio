function helpAlert(){
    alert("This is a dice roller for the board game Yahtzze. \n Click the \'Roll Dice\' button, or press enter, to Roll the die")
}  
function rollDice(){
   // Generating a random dice number
    min = Math.ceil(1);
    max = Math.floor(6);

   for(var i =0; i<=5; i++){
        side =Math.floor(Math.random()*(max-min+1)+min);
        if(i==0){
            document.getElementById("1t").value= side;
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
            document.getElementById("2t").value = side;
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
            document.getElementById("3t").value = side;
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
            document.getElementById("4t").value = side;
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
            document.getElementById("5t").value = side;
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