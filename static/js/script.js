const nomeForm = document.querySelector('#nome')
const emailForm = document.querySelector('#email')
const msgForm = document.querySelector('#mensagem')

nomeForm.addEventListener('keyup', () => {
    if(nomeForm.value.length > 0) {
        if(nomeForm.value.length < 2) {
            nomeForm.style.borderColor = 'red'
        }else if(nomeForm.value.length >= 2) {
            nomeForm.style.borderColor = '#8257e5'
        }
    }else {
        nomeForm.style.borderColor = '#ccc'
    }
})

emailForm.addEventListener('keyup', () => {
    if(emailForm.value.length > 0) {
        if(emailForm.value.indexOf('@') == -1 || emailForm.value.indexOf('.') == -1) {
            emailForm.style.borderColor = 'red'
        }else {
            emailForm.style.borderColor = '#8257e5'        
        }
    }else {
        emailForm.style.borderColor = '#ccc'
    }
})

msgForm.addEventListener('keyup', () => {
    if(msgForm.value.length > 0) {
        if(msgForm.value.length > 0 && msgForm.value.length < 100) {
            msgForm.style.borderColor = '#8257e5'
        }else {
            msgForm.style.borderColor = 'red'
        }
    }else {
        msgForm.style.borderColor = '#ccc'        
    }
})