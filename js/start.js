
// --------   Shape Of "Start.HTML" Container => 

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

// --------   Function For Game Colors =>

    function GameColorHandler () {
        if (gameNameElem.innerHTML === "Rock Paper Scissors") {
            document.documentElement.style.setProperty("--backgroundColor" , "#023535")
            document.documentElement.style.setProperty("--containerColor" , "linear-gradient( #015958, #2b7889)")
        }
        else if (gameNameElem.innerHTML === "Flappy Bird") {
            document.documentElement.style.setProperty("--backgroundColor" , "#121335")
            document.documentElement.style.setProperty("--containerColor" , "linear-gradient( #2b7889 , #0c2c61)")
        } 
        else if (gameNameElem.innerHTML === "Tic Tac Toe") {
            document.documentElement.style.setProperty("--backgroundColor" , "#430337")
            document.documentElement.style.setProperty("--containerColor" , "linear-gradient( #8e27aa , #8e3c6b)")
        } 
    }

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
    GameColorHandler ()
}

function prevBtnHandler () {
    indexOfGame--
    if (indexOfGame < 0) {
        indexOfGame = gamesName.length-1
    }
    gameNameElem.innerHTML = gamesName[indexOfGame]
    GameColorHandler ()
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







