let inputs = document.querySelectorAll('input[required], select[required]')
for (let elemento of inputs) {
    elemento.addEventListener('blur', verificarCampos)
}

function verificarCampos() {
    let btnSubmit = document.getElementById('btn-submit')
    let inputCnpj = true
    let beforeInput = true

    for (let elemento of inputs) {
        elemento.classList.remove('invalid')

        if (elemento.value === "") {
            elemento.classList.add('invalid')
            beforeInput = false
        }
    }

    btnSubmit.setAttribute('disabled', true)
    if (inputCnpj && beforeInput) {
        btnSubmit.removeAttribute('disabled')
    }

    return
}