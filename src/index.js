let btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

let btnConsultar = document.querySelector('#bntConsultar');
let cupons = document.querySelector('#search');
let sorteados = document.querySelector('#sorteados');
let sorteio01 = document.querySelector('#sorteio-01');
let sorteio02 = document.querySelector('#sorteio-02');
let monthSelect = document.getElementById('text_mes');
let msgErro = document.querySelector('.erro');
let checkbox = document.getElementById('checkLGPD');
let erroCheckbox = document.querySelector('.checkboxLGPD');

let classCooperado = document.querySelector('.cooperado');
let classQtdCupons = document.querySelector('.qtd-cupons');
let classCupons = document.querySelector('.cupons');

// btnConsultar.addEventListener('click', function() {
//     container.style.display = 'block';
// })

// const inputCpfCnpj = document.querySelector('input');

// inputCpfCnpj.addEventListener('keypress', () => {
//     let inputlenght = inputCpfCnpj.value.length;

//     if (inputlenght ===  3 || inputlenght === 7) {
//         inputCpfCnpj.value += '.'
//     } else if (inputlenght === 11) {
//         inputCpfCnpj.value += '-'
//     } else if (inputlenght > 13) {
//         console.log("CNPJ");
//     }
// })

let cooperado;
let qtd_cupons;
let cupom_inicial;
let cupom_final;
let view = 0;

function consultar() {

    if (checkbox.checked) {
        console.log('marcado');

        msgErro.style.display = 'none';
        erroCheckbox.style.display = 'none'

        const input = document.querySelector("#cpf-cnpj").value;
        console.log(input);
        console.log(typeof input)

        fetch("dados.json").then((response) => {
            response.json().then((dados) => {

                const infos = dados.cooperados.filter(n => n.CNPJ_CPF === input);


                if (infos[0] !== undefined) {
                    console.log(infos[0]);
                    console.log(infos[0].EMPRESA_NOME);
                    console.log(infos[0].Qtd);
                    console.log(infos[0].INICIAL);
                    console.log(infos[0].FINAL);

                    cooperado = infos[0].EMPRESA_NOME;
                    qtd_cupons = infos[0].Qtd;
                    cupom_inicial = infos[0].INICIAL;
                    cupom_final = infos[0].FINAL;

                    // cupons.innerHTML = qtd_cupons;
                    // cupons.innerHTML = cooperado;

                    cupons.style.display = 'block';


                    // if (view == 0) {
                    //     cupom.style.display = 'block';
                    // }
                    // view = 1;

                    // nomeC.innerHTML = nome;
                    // numerodasorteC.innerHTML = numerodasorte;

                    mostrarTela();
                } else {
                    // alert('Sem cupons!');
                    // window.location.reload();
                    msgErro.style.display = 'block';
                    cupons.style.display = 'none';
                }

            })
        })

    } else {
        console.log('desmarcado');
        erroCheckbox.style.display = 'block';
        cupons.style.display = 'none';
        msgErro.style.display = 'none';
    }

    // if (cupons.style.display === 'block') {
    //     cupons.style.display = 'none';
    // } else {
    //     cupons.style.display = 'block';
    // }

    // if (msgErro.style.display === 'block') {
    //     msgErro.style.display = 'none';
    // } else {
    //     msgErro.style.display = 'block'
    // }
}

function mostrarTela() {
    console.log("Cooperado: " + cooperado);
    console.log("Quantidade de Cupons: " + qtd_cupons);

    if (qtd_cupons === 1) {
        console.log("SC" + cupom_inicial);
        classCooperado.innerHTML = cooperado;
        classQtdCupons.innerHTML = qtd_cupons;
        classCupons.innerHTML = "SC" + cupom_inicial;
    } else {
        console.log("SC" + cupom_inicial + " até SC" + cupom_final);
        classCooperado.innerHTML = cooperado;
        classQtdCupons.innerHTML = qtd_cupons;
        classCupons.innerHTML = "SC" + cupom_inicial + " até SC" + cupom_final;
    }

}

function consulta_ganhadores() {
    // if (sorteados.style.display === 'block') {
    //     sorteados.style.display = 'none';
    // } else {
    //     sorteados.style.display = 'block';
    // }
    if (monthSelect.value === '0') {
        sorteados.style.display = 'none'
    }
    if (monthSelect.value === '01'){
        sorteados.style.display = 'block'
        sorteio01.style.display = 'block'
        sorteio02.style.display = 'none'
    }
    if (monthSelect.value === '02') {
        sorteados.style.display = 'block'
        sorteio01.style.display = 'none'
        sorteio02.style.display = 'block'
    }
}