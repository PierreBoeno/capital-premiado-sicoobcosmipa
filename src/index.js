var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

var btnConsultar = document.querySelector('#bntConsultar');
var cupons = document.querySelector('#search');
var sorteados = document.querySelector('#sorteados');
var msgErro = document.querySelector('.erro');



// btnConsultar.addEventListener('click', function() {
//     container.style.display = 'block';
// })

const inputCpfCnpj = document.querySelector('input');

inputCpfCnpj.addEventListener('keypress', () => {
    let inputlenght = inputCpfCnpj.value.length;

    if (inputlenght ===  3 || inputlenght === 7) {
        inputCpfCnpj.value += '.'
    } else if (inputlenght === 11) {
        inputCpfCnpj.value += '-'
    } else if (inputlenght > 13) {
        console.log("CNPJ");
    }
})


function consultar() {

    var input = document.getElementById("cpf-cnpj");


    var cpfCnpj = input.value;

    // alert("CPF: " + cpfCnpj);
    if(cupons.style.display === 'block'){
        cupons.style.display = 'none';
    } else {
        cupons.style.display = 'block';
    }

    if(msgErro.style.display === 'block'){
        msgErro.style.display = 'none';
    } else {
        msgErro.style.display = 'block'
    }
}

function consulta_ganhadores() {
    if(sorteados.style.display === 'block'){
        sorteados.style.display = 'none';
    } else {
        sorteados.style.display = 'block';
    }
}