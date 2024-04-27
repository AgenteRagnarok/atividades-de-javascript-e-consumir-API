document.getElementById('btnCalcular').addEventListener("click", function () {
    let nome = document.getElementById("nome").value
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let nota3 = document.getElementById("nota3").value

    nota1 = parseInt(nota1)
    nota2 = parseInt(nota2)
    nota3 = parseInt(nota3)

let media = (nota1 + nota2 + nota3) / 3   

monta_resultado_da_media(nome, media)
limpaFormulario()
})

function montaResultadoDaMedia(nome, media) {
    document.getElementById("resultado").innerText = `
    O aluno(a) ${nome} tem a média de: ${media}.
    `
}

function limpaFormulario() {
    document.getElementById("nome").value = ''
    document.getElementById("nota1").value = ''
    document.getElementById("nota2").value = ''
    document.getElementById("nota3").value = ''
}