function validarNumero(e) {
    var input = e.target
    var inputValue = input.value.replace(/[^0-9]/g, '')

    input.value = inputValue

    return input
}