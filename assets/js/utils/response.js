let responseModal = document.querySelector("#responseModal")

function showResponse(message) {
    responseModal.classList.add('show')
    responseModal.innerHTML =
        `<div class="response-content">
            <div class="response-text">
                ${message}
            </div>
            <button id="closeResponse" class="btn">
                Entendi 
            </button>
        </div>`
    let btnCloseModal = document.getElementById('closeResponse')
    btnCloseModal.addEventListener('click', closeResponse)
    return
}

function closeResponse() {
    responseModal.classList.remove('show')
    responseModal.innerHTML = ``
    return
}