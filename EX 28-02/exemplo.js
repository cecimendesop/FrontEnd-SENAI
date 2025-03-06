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