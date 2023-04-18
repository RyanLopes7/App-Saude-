function CLL(){
    const copos = document.querySelector("#CP").value
    const resultado = document.querySelector(".resultado")
    var soma = copos*0.24

    resultado.innerHTML = soma+' litros'

}


function voltar(){
    window.location = "../index.html"
}