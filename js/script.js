// --------   Main Variables =>

const $ = document

// --------   Color Scripts =>

let bodyColor = $.querySelector("body")


let R , G , B , R1 , G1 , B1 

function randomBackgroundHandler (){
    R = Math.floor(Math.random() * 255)
    G = Math.floor(Math.random() * 245)
    B = Math.floor(Math.random() * 255)

    R1 = Math.floor(Math.random() * 255)
    G1 = Math.floor(Math.random() * 125)
    B1 = Math.floor(Math.random() * 15)


$.documentElement.style.setProperty("--BodyBackground" , "linear-gradient( rgb( "+ R1 +" , "+ G1 +" , "+ B1 +" ) , rgb( "+ R +" , "+ G +" , "+ B +" )" )

$.documentElement.style.setProperty("--ContainerBackground" , "linear-gradient(210deg , rgb( "+ R1 +" , "+ G1 +" , "+ B1 +" ) , rgb( "+ R +" , "+ G +" , "+ B +" )" )

} 
setInterval( randomBackgroundHandler,2500 )

// --------   Loading Scripts =>

let loader = $.querySelector(".loader")
window.addEventListener("load" , function () {
    loader.style.display = "none"
    $.body.classList.remove("hidden")
})

// Prevent Defult =>


    $.addEventListener("keydown" , function (event) {
        event.preventDefault()
    })

//"start.html"/////////////////////////////////////////////////////////////

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
            $.documentElement.style.setProperty("--backgroundColor" , "#023535")
            $.documentElement.style.setProperty("--containerColor" , "linear-gradient( #015958, #2b7889)")
        }
        else if (gameNameElem.innerHTML === "Flappy Bird") {
            $.documentElement.style.setProperty("--backgroundColor" , "#121335")
            $.documentElement.style.setProperty("--containerColor" , "linear-gradient( #2b7889 , #0c2c61)")
        } 
        else if (gameNameElem.innerHTML === "Tic Tac Toe") {
            $.documentElement.style.setProperty("--backgroundColor" , "#430337")
            $.documentElement.style.setProperty("--containerColor" , "linear-gradient( #8e27aa , #8e3c6b)")
        } 
    }

// --------   Dom Handler For Games =>

let gamesName = [
    "Rock Paper Scissors" , 
    "Flappy Bird" ,
    "Tic Tac Toe"
] 


    let nextBtn = $.querySelector(".next-btn") 
    let prevBtn = $.querySelector(".prev-btn") 
    let gameNameElem = $.querySelector(".game-name")
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


    $.body.addEventListener("keydown" , function (event) {
        if (event.which === 39) {
            nextBtnHandler()
        }
        if (event.which === 37) {
            prevBtnHandler()
        }
    })
    nextBtn.addEventListener("click" , nextBtnHandler)
    prevBtn.addEventListener("click" , prevBtnHandler)


// -------   Game Openin Coce =>

    function openRPS(){
        let gameChi = gameNameElem.innerHTML
        if (gameChi === "Rock Paper Scissors") {
            window.open("RPS.html","_self");
        }
        if (gameChi === "Flappy Bird") {
            window.open("FB.html","_self");
        }
        if (gameChi === "Tic Tac Toe") {
            window.open("TTT.html","_self");
        }
    }

    gameNameElem.addEventListener("click" , openRPS)
    $.body.addEventListener("keyup" , function (event) {
        if (event.which === 13) {
            openRPS()
        }
        if (event.which === 27) {
            window.open("index.html" , "_self")
        }
    })


