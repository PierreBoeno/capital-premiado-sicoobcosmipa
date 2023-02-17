var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

function validar() {

    var input = document.getElementById("cpf-cnpj");

    var cpfCnpj = input.value;

    alert("CPF: " + cpfCnpj);
}