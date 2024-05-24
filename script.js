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
setInterval( randomBackgroundHandler,2000 )







