function quickSearch() {
    const inputSearch = document.getElementById('search-hero').value;

    if (inputSearch.length == 9) {
        document.querySelector('#input-finder').value = inputSearch;
        document.querySelector('#results').classList.add('show');
        document.querySelector('#results').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Por favor, digite um CEP válido (pelo menos 8 dígitos)');
    }
}

function findCenters() {
    const inputFinder = document.getElementById('input-finder').value;
    const results = document.getElementById('results');

    if (inputFinder.length === 9) {
        results.classList.add('show');
    } else {
        alert('Por favor, digite um CEP válido (pelo menos 8 dígitos)');
    }
}

function shareInfo() {
    if (navigator.share) {
        navigator.share({
            title: 'Guia de Reciclagem de Lixo Eletrônico - Recicle Inteligente, Viva Verde',
            text: 'Junte-se ao movimento pelo descarte sustentável de eletrônicos! Aprenda como reciclar seus dispositivos de forma responsável.',
            url: window.location.href
        });
    } else {
        const text = 'Junte-se ao movimento verde! Confira este guia completo de reciclagem de lixo eletrônico: ' + window.location.href;
        navigator.clipboard.writeText(text).then(() => {
            alert('🎉 Link copiado para a área de transferência! Compartilhe com amigos e familiares para espalhar a mensagem verde.');
        });
    }
}

document.getElementById('search-hero').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') quickSearch();
});

document.getElementById('input-finder').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') findCenters();
});

function registerCenter() {
    buscarEstados()
    document.getElementById('registrationModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('registrationForm').reset()
    document.getElementById('registrationModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function (event) {
    const modal = document.getElementById('registrationModal');
    if (event.target === modal) {
        document.getElementById('registrationForm').reset()
        closeModal();
    }
}