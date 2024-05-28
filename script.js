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




