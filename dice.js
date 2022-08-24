const diceButton = document.getElementById("button-el")
const winningItem = "img/trophy.png"               
const imgContainer = document.getElementById("img-el")

diceButton.addEventListener ("click",function(){
    const number = Math.floor( Math.random()*6 ) + 1
     imgContainer.innerHTML = `<img class="dice-img" src="img/dice-${number}.png">`
    
        // if(number === 6){
            
        //     <font color = "white" size = "5px"> Yippee!You won! </font> <br>
        //     <center> <img src ="${winningItem}" height ="50px" width = "50px"> </center>`
        // } 
      
})