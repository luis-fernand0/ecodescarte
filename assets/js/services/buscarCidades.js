let selectEstado = document.getElementById('estado')
selectEstado.addEventListener('change', buscarCidades)

async function buscarCidades(e) {
    let estadoId = e.target.value
    let selectCidade = document.getElementById('cidade')
    
    selectCidade.innerHTML = ''

    let defaultOption = new Option(`Selecione uma cidade`, ``)
    selectCidade.add(defaultOption)

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