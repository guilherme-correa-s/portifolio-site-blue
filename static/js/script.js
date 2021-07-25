const nomeForm = document.querySelector('#nome')
const emailForm = document.querySelector('#email')
const msgForm = document.querySelector('#mensagem')
const btnForm = document.querySelector('#enviar')
let nomeEnable = false
let emailEnable = false
let msgEnable = false

nomeForm.addEventListener('keyup', () => {
    if(nomeForm.value.length > 0) {
        if(nomeForm.value.length < 2) {
            nomeForm.style.borderColor = 'red'
            nomeEnable = false
        }else if(nomeForm.value.length >= 2) {
            nomeForm.style.borderColor = '#8257e5'
            nomeEnable = true
        }
    }else {
        nomeForm.style.borderColor = '#ccc'
        nomeEnable = false
    }
    enableBtn(nomeEnable, emailEnable, msgEnable)
})

emailForm.addEventListener('keyup', () => {
    if(emailForm.value.length > 0) {
        if(emailForm.value.indexOf('@') == -1 || emailForm.value.indexOf('.') == -1) {
            emailForm.style.borderColor = 'red'
            emailEnable = false
        }else {
            emailForm.style.borderColor = '#8257e5'     
            emailEnable = true
        }
    }else {
        emailForm.style.borderColor = '#ccc'
        emailEnable = false
    }
    enableBtn(nomeEnable, emailEnable, msgEnable)    
})

msgForm.addEventListener('keyup', () => {
    if(msgForm.value.length > 0) {
        if(msgForm.value.length > 0 && msgForm.value.length < 100) {
            msgForm.style.borderColor = '#8257e5'
            msgEnable = true
        }else {
            msgForm.style.borderColor = 'red'
            msgEnable = false
        }
    }else {
        msgForm.style.borderColor = '#ccc'       
        msgEnable = false
    }
    enableBtn(nomeEnable, emailEnable, msgEnable)
})
function enableBtn(nome, email, msg) {
    if(nome && email && msg) {
        btnForm.disabled = false
    }else {
        btnForm.disabled = true
    }
}

btnForm.addEventListener('click', () => {
    const load = document.querySelector('#loader')
    const form = document.querySelector('form')

    load.style.display = 'flex'
    form.style.display = 'none'
})