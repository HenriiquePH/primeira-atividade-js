let num1Input = document.querySelector("#num1");
let num2Input = document.querySelector("#num2");
let h2Resultado = document.querySelector("#h2Titulo");
let btSomar = document.querySelector("#btSomar");

function somarNumeros(){
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    let resultado = num1 + num2;
    h2Resultado.textContent = "Resultado: " + resultado;
}

btSomar.onclick = function(){
    somarNumeros();
}
