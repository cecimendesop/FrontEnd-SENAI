// alert("Olá mundo")
//
// var teste = prompt("Digite qualquer cosa")
// alert(teste)

function testeColor() {
    const titulo  = document.getElementById("titulo")
    titulo.style.color = "black"
    titulo.style.fontSize = "30px"
}
function reset() {
    document.getElementById("titulo").innerHTML = "INTERNACIONAL 2025"
}
function testeTexto() {
    document.getElementById("titulo").innerHTML += "Boa tarde"
}
function testeInput() {
    document.getElementById("input").value = "Tarde"

}

function alimenta_input() {
    document.getElementById("inputEmail4").value = "Email"
}

function alimenta_input2() {
    document.getElementById("inputPassword4").value = "Senha"
}

function alimenta_input3() {
    document.getElementById("inputAddress").value = "Endereço"
}

function alimenta_input4() {
    document.getElementById("inputAddress2").value = "Endereço 2"
}

function alimenta_input5() {
    document.getElementById("inputCity").value = "Cidade"
}

function alimenta_input6() {
    document.getElementById("inputZip").value = "CEP"
}


function limpainput() {
    const confirmar = confirm("Deseja apagar todos os campos?");
    if (confirmar) {
        document.getElementById('inputEmail4').value = ""
        document.getElementById('inputPassword4').value = ""
        document.getElementById('inputAddress').value = ""
        document.getElementById('inputAddress2').value = ""
        document.getElementById('inputCity').value = ""
        document.getElementById('inputZip').value = ""
    }}

function CorInput() {
    const coremail  = document.getElementById("coremail")
    coremail.style.color = "red"
}

function CorInput2() {
    const corsenha  = document.getElementById("corsenha")
    corsenha.style.color = "red"

}

function CorInput3() {
    const corendereco  = document.getElementById("corendereco")
    corendereco.style.color = "red"
}

function CorInput4() {
    const corendereco2  = document.getElementById("corendereco2")
    corendereco2.style.color = "red"
}

function CorInput5() {
    const corcidade  = document.getElementById("corcidade")
    corcidade.style.color = "red"
}

function CorInput6() {
    const corcep  = document.getElementById("corcep")
    corcep.style.color = "red"
}

function CorInput7() {
    const corestado  = document.getElementById("corestado")
    corestado.style.color = "red"
}