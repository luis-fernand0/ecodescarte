let inputEmail = document.getElementById('email')

inputEmail.addEventListener('input', formatarEmail)

function formatarEmail(e) {
    let email = e.target
    email.value = email.value.toLowerCase()

    return email
}