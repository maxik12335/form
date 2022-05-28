const form = document.querySelector('.form'),
    inputEmail = form.querySelector('.input-email'),
    inputPass = form.querySelector('.input-password'),
    inputCheckbox = form.querySelector('.checkbox'),
    labelImg = form.querySelector('.label-cheked'),
    modal = document.querySelector('.modal-forms'),
    closeModal = document.querySelector('.close')

inputCheckbox.addEventListener('click', (e) => {
    labelImg.classList.toggle('label-cheked-active')
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal-forms-active')
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const regular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail.value)

    if (!regular && inputPass.value.length < 3) {
        inputEmail.classList.add('input-error')
        inputPass.classList.add('input-error')
    } else if (!regular) {
        inputEmail.classList.add('input-error')
    } else if (inputPass.value.length < 3) {
        inputPass.classList.add('input-error')
    }

    if (regular && inputPass.value.length >= 3 && inputCheckbox.checked) {
        modal.classList.add('modal-forms-active')
        inputEmail.classList.remove('input-error')
        inputPass.classList.remove('input-error')
        inputEmail.classList.remove('input-valide')
        inputPass.classList.remove('input-valide')
        inputEmail.value = ''
        inputPass.value = ''
        inputCheckbox.checked = false
        labelImg.classList.remove('label-cheked-active')
    } else if (regular && inputPass.value.length >= 3) {
        inputEmail.classList.remove('input-error')
        inputPass.classList.remove('input-error')
        inputEmail.classList.add('input-valide')
        inputPass.classList.add('input-valide')
    } else if (regular) {
        inputEmail.classList.remove('input-error')
        inputEmail.classList.add('input-valide')
    } else if (inputPass.value.length >= 3) {
        inputPass.classList.remove('input-error')
        inputPass.classList.add('input-valide')
    }
})