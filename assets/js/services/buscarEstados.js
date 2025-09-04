async function buscarEstados() {
    let selectEstado = document.getElementById('estado')
    
    try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        
        const data = await response.json()
        
        for(const estado of data) {
            let newOption = new Option(estado.sigla, estado.id)
            selectEstado.add(newOption)
        }
    } catch (err) {
        console.error(err)
    }

    return
}