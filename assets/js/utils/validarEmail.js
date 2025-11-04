let inputEmail = document.getElementById('email')

inputEmail.addEventListener('input', formatarEmail)
inputEmail.addEventListener('blur', validarEmail)

function formatarEmail(e) {
    let email = e.target
    email.value = email.value.toLowerCase()

    return email
}

function validarEmail(e) {
    let email = (e.target.value)
    let emailRegex = /^((?!\.)[\w\-_.]*[a-zA-Z0-9])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    
    if(!emailRegex.test(email)) {
        return false
    }

    return true
}