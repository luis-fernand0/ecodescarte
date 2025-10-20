let myForm = document.getElementById('registrationForm')
myForm.addEventListener('submit', submitRegistration)
async function submitRegistration(e) {
    e.preventDefault()
    try {
        let form = new FormData(myForm)

        const response = await fetch('http://localhost:5000/cadastrar', {
            method: 'POST',
            body: form
        })

    } catch (err) {
        console.error(err)
    }

    myForm.reset();
    closeModal();
}