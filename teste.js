function calcularTabela() {
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = "";

    for (let i = 1; i <= n2; i++) {
        resultado.innerHTML += `${n1} x ${i} = ${n1 * i}<br>`
    }
}


function limparCampos() {
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    // document.getElementById('operacao').value = "";
    document.getElementById('resultado').innerHTML = "";
}


document.getElementById('calcular').addEventListener('click', calcularTabela);
document.getElementById('limpar').addEventListener('click', limparCampos);

