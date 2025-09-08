let inputCnpj = document.getElementById('cnpj')
inputCnpj.addEventListener('input', formatCnpj)
function formatCnpj(e) {
    var cnpj = e.target
    var cnpjValue = cnpj.value.replace(/[^0-9]/g, '')
    if (cnpjValue.length > 2) {
        cnpjValue = cnpjValue.slice(0, 2) + '.' + cnpjValue.slice(2);
    }
    if (cnpjValue.length > 6) {
        cnpjValue = cnpjValue.slice(0, 6) + '.' + cnpjValue.slice(6);
    }
    if (cnpjValue.length > 10) {
        cnpjValue = cnpjValue.slice(0, 10) + '/' + cnpjValue.slice(10);
    }
    if (cnpjValue.length > 15) {
        cnpjValue = cnpjValue.slice(0, 15) + '-' + cnpjValue.slice(15);
    }
    if (cnpjValue.length > 18) {
        cnpjValue = cnpjValue.slice(0, 18)
    }
    cnpj.value = cnpjValue

    return cnpj
}