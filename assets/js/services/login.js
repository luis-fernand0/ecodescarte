let myForm = document.getElementById('form')

myForm.addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()
    let formData = new FormData(myForm)
    for (let [key, value] of formData.entries()){
        if(key == 'email' && value == '') {
            return false
        }

        if(key == 'password' && value == '') {
            return false
        }
    }
}