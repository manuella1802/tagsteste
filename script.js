
// ----- Caixas: clica muda a cor, clica de novo limpa -----
const caixas = document.querySelectorAll(".box");

caixas.forEach(function (caixa) {
    caixa.addEventListener("click", function () {
        caixa.classList.toggle("ativa");
    });
});

// ----- Botões -----
const botoes = document.querySelectorAll("#botoes button");
const botaoPrimario = botoes[0];
const botaoSecundario = botoes[1];

// Primário: muda a cor da borda de todas as caixas
botaoPrimario.addEventListener("click", function () {
    caixas.forEach(function (caixa) {
        caixa.style.border = "4px solid red";
    });
});

// Secundário: limpa a borda (volta à borda original do CSS)
botaoSecundario.addEventListener("click", function () {
    caixas.forEach(function (caixa) {
        caixa.style.border = "";
    });
});