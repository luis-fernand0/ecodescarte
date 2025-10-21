let loadingModal = document.querySelector("#responseModal")

function showLoading() {
    loadingModal.classList.add('show')
    loadingModal.innerHTML = 
        `<div class="loading-content">
            <div class="loading-icon">
                <img class="loading-spin" src="/assets/images/recycle-icon.png" alt="recycle icon modal">
            </div>
            <div class="loading-text">
                Carregando...
            </div>
            <div class="loading-subtext">
                Aguarde um momento
            </div>
        </div>`
    return
}

function closeLoading() {
    //TIVE QUE FAZER UMA GAMBIARRA, JÁ QUE EM TODO BLOCO FINALLY EU CHAMO closeLoading() QUE POR PADRÃO SEMPRE VAI SER DEPOIS DE closeResponse() O QUE ACABA FECHANDO O MODAL DE RESPONSE AUTOMATICAMENTE
    //EU VERIFICO SE DENTRO DO ELEMENTO HTML #responseModal O 1° ELEMENTO TEM A CLASSE .response-content SE TIVER SIGNIFICA QUE OQUE TEM AI É UM RESPONSE PARA O USER
    //TIVE QUE FAZER ESSA GAMBIARRA PORQUE O LOADING E O RESPONSE COMPARTILHAM A MESMA DIV ASSIM EVITO CRIAR VARIOS MODAIS DIFERENTES
    let isResponse = loadingModal.children[0].classList.contains('response-content')
    if (isResponse) {
        return
    }

    loadingModal.classList.remove('show')
    loadingModal.innerHTML = ``
    return
}