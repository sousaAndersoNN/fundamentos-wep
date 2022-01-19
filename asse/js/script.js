/*
Case Sensitive = reconhece letras maiusculas e minusculas

 por Tag; getElementByTagName() 
 por Id: getElementById()
 por Nome: getElementsByName()
 por Classe: getElementsByClassName()
 por Seletor: querySelector()
 */

 let nome = window.document.getElementById("Nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let NomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width = "35%"
email.style.width = "35%"

function validaNome() {
let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome invalido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color = "green"
        NomeOk = true
    }

}

function validaEmail () {
    let txtemail = document.querySelector("#txtEmail")

    if (email.value.indexof("@") == -1 || email.value.indexof(".") == 1) {
        txtemail.innerHTML = "E-mail invalido"
        txtemail.style.color = "red"
    } else {
        txtemail.innerHTML = "E-mail valido"
        txtemail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector("#txtAssunto")
   
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito Grande digite Apenas 100 Caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.innerHTML = "Texto valido"
        txtAssunto.style.color = "green" 
        assuntoOk = true
    }

}

function Enviar() {
    if ( NomeOk == true && emailOk == true && assuntoOk == true ) {
        alert ("Formulario enviado com sucesso")
    } else{
        alert ("Preencha o Formulario Corretamente Antes de Envia...")
    }    
}



