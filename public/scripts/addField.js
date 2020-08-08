document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const filds = newFieldContainer.querySelectorAll('input')
    filds.forEach((field) => {
        field.value = ""
    });
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}