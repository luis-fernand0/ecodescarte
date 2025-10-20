let btnFind = document.getElementById('btn-find-centers')

btnFind.addEventListener('click', findCenters)

async function findCenters() {
    const inputFinder = document.getElementById('input-finder').value;
    const results = document.getElementById('results');

    if (inputFinder.length === 9) {
        const response = await fetch(`http://localhost:5000/users?cep=${inputFinder}`)
        const datas = await response.json()
        
        results.innerHTML = 
            `<h3 class="results-title">
                <img src="/assets/images/location-icon.png" alt="localização icon"> Centros de Reciclagem Próximos:
            </h3>`

        for (centro in datas) {
            let centroAtual = datas[centro]

            results.innerHTML +=
                `<div class="result-item">
                    <div class="result-dot"></div>
                    <div>
                        <div class="result-name">
                            <h4>${centroAtual.nome}</h5>
                        </div>
                        <div class="result-info">
                            <p>Endereço: ${centroAtual.endereco}</p>
                            <p>Funcionamento: ${centroAtual?.funcionamento}</p>
                        </div>
                    </div>
                </div>`
        }

        results.classList.add('show');
    } else {
        alert('Por favor, digite um CEP válido (pelo menos 8 dígitos)');
    }
}

document.getElementById('input-finder').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') findCenters();
});