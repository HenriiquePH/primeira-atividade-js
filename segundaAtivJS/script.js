let valorPagoInput = document.querySelector("#valorPago");
let precoProdutoInput = document.querySelector("#precoProduto");
let trocoTitulo = document.querySelector("#trocoTitulo");
let btCalcularTroco = document.querySelector("#btCalcularTroco");

function calcularTroco(){
    let valorPago = parseFloat(valorPagoInput.value);
    let precoProduto = parseFloat(precoProdutoInput.value);
    let troco = valorPago - precoProduto;
    trocoTitulo.textContent = "Troco: " + troco;
}

btCalcularTroco.onclick = function(){
    calcularTroco();
}
