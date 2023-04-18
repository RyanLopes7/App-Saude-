

function calcularHM(){
var CT = document.querySelector("#CT").value
var QD = document.querySelector("#QD").value
var resultado = document.querySelector("#resultado") 



    var soma = CT/QD
console.log(soma)
    if(soma<0.95){
        resultado.innerHTML =  `O seu icq é ${ parseFloat(soma) } O risco de ser afetado(a) pela doença cardiaca é baixo,`
        
    }else{
        resultado.innerHTML = `O seu icq é ${ parseFloat(soma) } O risco de ser afetado(a) pela doença cardiaca é moderado,`
 

}
}


function calcularML(){
    var CT = document.querySelector("#CT").value
var QD = document.querySelector("#QD").value
var resultado = document.querySelector("#resultado") 
    var soma = CT/QD

    if(soma<0.80){
        resultado.innerHTML = `O seu icq é ${ parseFloat(soma) } O risco de ser afetado(a) pela doença cardiaca é baixo,`
        }else{
         resultado.innerHTML =`O seu icq é ${ parseFloat(soma) } O risco de ser afetado(a) pela doença cardiaca é moderado,`
        }

}


function voltar(){
    window.location = "../index.html"
}