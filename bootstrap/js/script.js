let nome = document.querySelector('#txt_nome')
let email = document.querySelector('#txt_email')
let assunto = document.querySelector('#txt_assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {

    let input = document.querySelector('#inputNome')

    if(nome.value.length < 3) {
        nomeOk = false
        nome.classList.add("is-invalid")
        nome.classList.remove("is-valid")
        input.classList.replace("d-none","d-block")
    } else {
        nome.classList.add("is-valid")
        nome.classList.remove("is-invalid")
        input.classList.replace("d-block","d-none")
        nomeOk = true
    }

    if(nome.value.length == 0) {
        nome.classList.remove("is-valid", "is-invalid")
        input.classList.replace("d-block","d-none")
        nomeOk = false

    }
}

function validaEmail() {

    let input = document.querySelector('#inputEmail')
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.value.match(regex)) {
        email.classList.add("is-valid")
        email.classList.remove("is-invalid")
        input.classList.replace("d-block","d-none")
        emailOk = true

    } else {
        email.classList.add("is-invalid")
        email.classList.remove("is-valid")
        input.classList.replace("d-none","d-block")
        emailOk = false
    }

    if(email.value.length == 0) {
        nome.classList.remove("is-valid", "is-invalid")
        input.classList.replace("d-block","d-none")
        emailOk = false
    }
}

function validaAssunto() {

    let input = document.querySelector('#inputAssunto')
    
    if(assunto.value != 0) {

        assunto.classList.add("is-valid")
        assuntoOk = false

    } else {
        assunto.classList.remove("is-valid")
        assuntoOk = true
    }
}

function enviar() {

    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')

    } else {
        alert('Preencha corretamente o formulário para enviar.')
    }
}