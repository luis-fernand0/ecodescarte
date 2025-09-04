async function buscarCidades() {
    let estadoId = document.getElementById('estado').value
    let selectCidade = document.getElementById('cidade')

    try {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)

        const data = await response.json()
        
        for (const cidade of data) {
            let newOption = new Option(cidade.nome, cidade.id)
            selectCidade.add(newOption)
        }
    } catch (err) {
        console.error(err)
    }

    return
}