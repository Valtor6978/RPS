let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")

let resultModal = document.querySelector(".result-modal")

let resultArray = ["rock" , "paper" , "scissors"] 



let imgModal = document.querySelector(".img-modal")
let imgModalArray = [ "img/Rock.png" , "img/paper.png" , "img/userScssors.png" ] 
let pModal = document.querySelector(".AI")



function gameRunerRPS (event) {
    let indexOfRPS = Math.floor(Math.random() * 3)

        pModal.style.display = "block"
        imgModal.src = imgModalArray[indexOfRPS]
        imgModal.style.display = "flex"
        imgModal.style.transform = "rotate(180deg)"


    let userRPS = event.target.id
    if (userRPS === resultArray[indexOfRPS]) {
        resultModal.innerHTML = "Game Tie"
        resultModal.style.color = "white"
    }

    else if (userRPS === "paper" && indexOfRPS === 0) {
        resultModal.innerHTML = "You Win"
        resultModal.style.color = "rgb(70, 222, 85)"
    }

    else if (userRPS === "scissors" && indexOfRPS === 1) {
        resultModal.innerHTML = "You Win"
        resultModal.style.color = "rgb(70, 222, 85)"
    }
    
    else if (userRPS === "rock" && indexOfRPS === 2) {
        resultModal.innerHTML = "You Win"
        resultModal.style.color = "rgb(70, 222, 85)"
    }

    else {
        resultModal.innerHTML = "You Lost"
        resultModal.style.color = "red"
    }
    
    
    console.log(userRPS)
    console.log(resultArray[indexOfRPS])
}



rock.addEventListener("click" , gameRunerRPS )
paper.addEventListener("click" , gameRunerRPS )
scissors.addEventListener("click" , gameRunerRPS )
