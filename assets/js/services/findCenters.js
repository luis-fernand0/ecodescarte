let btnFind = document.getElementById('btn-find-centers')

btnFind.addEventListener('click', findCenters)

function findCenters() {
    const inputFinder = document.getElementById('input-finder').value;
    const results = document.getElementById('results');

    if (inputFinder.length === 9) {
        results.classList.add('show');
    } else {
        alert('Por favor, digite um CEP válido (pelo menos 8 dígitos)');
    }
}
document.getElementById('input-finder').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') findCenters();
});