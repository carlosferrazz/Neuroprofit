let diario = localStorage.getItem("diario") || 0;
let total = localStorage.getItem("total") || 0;

function login() {
    window.location.href = "dashboard.html";
}

function logout() {
    window.location.href = "index.html";
}

function somar() {
    diario = parseInt(diario) + 10;
    total = parseInt(total) + 10;

    localStorage.setItem("diario", diario);
    localStorage.setItem("total", total);

    atualizar();
    salvarHistorico("+10 adicionados");
}

function atualizar() {
    if(document.getElementById("diario"))
        document.getElementById("diario").innerText = diario;
    if(document.getElementById("total"))
        document.getElementById("total").innerText = total;
}

function gerarRoteiro() {
    let tema = document.getElementById("roteiro").value;
    document.getElementById("resultadoRoteiro").innerText =
        "Roteiro gerado sobre: " + tema + " 🚀";
}

function salvarHistorico(texto) {
    let historico = document.getElementById("historico");
    let li = document.createElement("li");
    li.innerText = texto;
    historico.appendChild(li);
}

atualizar();
