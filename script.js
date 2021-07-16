
const tempo = document.getElementById("tempo")
const startBut = document.getElementById("start")
const stopBut = document.getElementById("stop")
const resetBut = document.getElementById("reset")

stopBut.disabled = true;
resetBut.disabled = true;

let relogio = 0

let funcaoSet
let piscaSet

startBut.addEventListener("click",function(){
    stopBut.disabled = false;
    resetBut.disabled = false;
    startBut.disabled = true;
    funcaoSet = setInterval(function (){ 
        clearInterval(piscaSet)
        tempo.style.visibility = 'visible'
        relogio += 1
        tempo.textContent = convertTime(relogio) 
    }
        , 1000);
})

stopBut.addEventListener("click",function(){
    stopBut.disabled = true;
    startBut.disabled = false;
    clearInterval(funcaoSet)
    let i = 0
    piscaSet = setInterval(function (){
        i++ 
        if(i %2 === 0){
            tempo.style.visibility = 'hidden'
        }
        else{
            tempo.style.visibility = 'visible'
        }
    }
        , 500);
})

resetBut.addEventListener("click",function(){
    stopBut.disabled = true;
    resetBut.disabled = true;
    startBut.disabled = false;
    clearInterval(funcaoSet)
    clearInterval(piscaSet)
    tempo.style.visibility = 'visible'
    relogio = 0
    tempo.textContent = "0:00"
})

function convertTime(tempo){
    let min = 0
    let sec = 0
    sec = tempo % 60
    min = Math.floor(tempo / 60)
    if(sec < 10){
        return `${min}:0${sec}`
    }
    else{
        return `${min}:${sec}` 
    }
    
}