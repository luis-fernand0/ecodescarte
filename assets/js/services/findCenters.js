let btnFind = document.getElementById('btn-find-centers')

btnFind.addEventListener('click', findCenters)

async function findCenters() {
    try {
        showLoading()

        const inputFinder = document.getElementById('input-finder').value;
        const results = document.getElementById('results');

        if (inputFinder.length < 9) {
            alert('Por favor, digite um CEP válido (pelo menos 8 dígitos)');
            return
        }

        const response = await fetch(`http://localhost:5000/pontos?cep=${inputFinder}`)
        const data = await response.json()

        if (!response.ok) {
            results.innerHTML = ``
            results.classList.remove('show');
            throw new Error(data.message)
        }

        if (data.data.length === 0) {
            results.innerHTML = ``
            results.classList.remove('show');
            throw new Error(data.message);
        }

        results.innerHTML =
            `<h3 class="results-title">
                <img src="/assets/images/location-icon.png" alt="localização icon"> Centros de Reciclagem Próximos:
            </h3>`

        for (centro in data.data) {
            let centroAtual = data.data[centro]

            results.innerHTML +=
                `<div class="result-item">
                        <div class="result-dot"></div>
                        <div>
                            <div class="result-name">
                                <h4>${centroAtual.nome}</h5>
                            </div>
                            <div class="result-info">
                                <p>Cidade: ${centroAtual.cidade}</p>
                                <p>Endereço: ${centroAtual.endereco}</p>
                                <p>N°: ${centroAtual.numero}</p>
                            </div>
                        </div>
                    </div>`
        }

        results.classList.add('show');
    } catch (err) {
        showResponse(err.message)
        console.error(err.message)
    } finally {
        closeLoading()
    }
}

document.getElementById('input-finder').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') findCenters();
});