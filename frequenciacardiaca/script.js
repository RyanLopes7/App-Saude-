var contador = 0
var temporizador = document.getElementById("temporizador")



function iniciarTemporizador(){
    setInterval(function(){
contador++
if (contador <= 10){
temporizador.innerHTML = "Tempo decorrido: " + contador + " segundos"
}
}, 1000)
clearInterval(contador)
}

function CalcularFC(){
    var fc = document.getElementById("fc").value
    var resultado = document.getElementById("resultado")
var result = fc*6 

    resultado.innerHTML = result

}


function voltar(){
    window.location = "../index.html"
}







