function validarDados(e) {
    let input = e.target
    let idInput = e.target.id
    let valueInput = e.target.value
    let btnSubmit = document.getElementById('btn-submit')

    function verificarCampos() {
        let inputs = document.querySelectorAll('input[required], select[required]')

        for (let elemento of inputs) {
            console.log(elemento)
            if (elemento.value === "") {
                elemento.classList.add('invalid')
                btnSubmit.setAttribute('disabled', true)

                return
            }
        }
    }

    if (idInput === "cnpj") {
        let valid = validarCnpj(valueInput)

        if (!valid) {
            input.classList.add('invalid')
            btnSubmit.setAttribute('disabled', true)

            return
        }
    }

    btnSubmit.removeAttribute('disabled')
    verificarCampos()
    input.classList.remove('invalid')

    return
}