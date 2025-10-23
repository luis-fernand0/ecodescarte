let myForm = document.getElementById('registrationForm')
myForm.addEventListener('submit', submitRegistration)
async function submitRegistration(e) {
    e.preventDefault()
    showLoading()
    try {
        let form = new FormData(myForm)

        const response = await fetch('http://localhost:5000/cadastrar', {
            method: 'POST',
            body: form
        })
        
        let data = await response.json()
        if (!response.ok) {
            showResponse(data.message)
            return
        }

        showResponse(data.message)
        myForm.reset();
        closeModal();
    } catch (err) {
        showResponse(err.message)
        console.error(err)
    } finally {
        closeLoading()
    }
}