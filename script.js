function calcularTabela() {
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let operacao = document.getElementById('operacao').value;
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = "";

    for (let i = 1; i <= n2; i++) {
        let linha;
        switch (operacao) {
            case "soma":
                linha = `${n1} + ${i} = ${n1 + i}`;
                break;
            case "subtracao":
                linha = `${n1} - ${i} = ${n1 - i}`;
                break;
            case "multiplicacao":
                linha = `${n1} X ${i} = ${n1 * i}`;
                break;
            case "divisao":
                linha = `${n1} ÷ ${i} = ${(n1 / i).toFixed(2)}`;
                break;
            default:
                linha = "Opção inválida, escolhe uma tabuada.";
        }
        resultado.innerHTML += linha + "<br>";
    }
}


function limparCampos() {
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('operacao').value = "";
    document.getElementById('resultado').innerHTML = "";
}

function verificarInputs() {
    const n1 = document.getElementById('n1').value.trim();
    const n2 = document.getElementById('n2').value.trim();

    const calcularButton = document.getElementById('calcular');
    if (n1 !== "" & n2 !== "") {
        calcularButton.disabled = false;
    } else {
        calcularButton.disabled = true;
    }
}


document.getElementById('calcular').addEventListener('click', calcularTabela);
document.getElementById('limpar').addEventListener('click', limparCampos);
document.getElementById('n1').addEventListener('input', verificarInputs);
document.getElementById('n2').addEventListener('input', verificarInputs);
