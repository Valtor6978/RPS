
// --------   Ship Of Start Container => 

    function shipHandler () {

        let LU = Math.floor(Math.random() * 65)
        let RU = Math.floor(Math.random() * 65)
        let LD = Math.floor(Math.random() * 65)
        let RD = Math.floor(Math.random() * 65)
        
    
        $.documentElement.style.setProperty("--radiusTL" , LU+"%")
        $.documentElement.style.setProperty("--radiusTR" , RU+"%")
        $.documentElement.style.setProperty("--radiusDL" , LD+"%")
        $.documentElement.style.setProperty("--radiusDR" , RD+"%")
    }
    
    setInterval(shipHandler ,1000)

// --------   Dom Handler For Games =>

let gamesName = [
    "Rock Paper Scissors" , 
    "Flappy Bird" ,
    "Tic Tac Toe"
] 


    let nextBtn = document.querySelector(".next-btn") 
    let prevBtn = document.querySelector(".prev-btn") 
    let gameNameElem = document.querySelector(".game-name")
    let indexOfGame = 0

function nextBtnHandler () {
    indexOfGame++
    if (indexOfGame === gamesName.length) {
        indexOfGame = 0
    }
    gameNameElem.innerHTML = gamesName[indexOfGame]
}

function prevBtnHandler () {
    indexOfGame--
    if (indexOfGame < 0) {
        indexOfGame = gamesName.length-1
    }
    gameNameElem.innerHTML = gamesName[indexOfGame]
}


    document.body.addEventListener("keydown" , function (event) {
        if (event.which === 39) {
            nextBtnHandler()
        }
        if (event.which === 37) {
            prevBtnHandler()
        }
    })
    nextBtn.addEventListener("click" , nextBtnHandler)
    prevBtn.addEventListener("click" , prevBtnHandler)


