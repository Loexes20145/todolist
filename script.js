function addElement () {
    const form = document.querySelector('form')
    const input = document.querySelector('.form-control')
    const list = document.querySelector('.list-group')
    
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const liClass = document.querySelector('.list-group li').classList
        const listItem = document.createElement('li')
        for (let elt of liClass) {
            listItem.classList.add(elt)
        }
        listItem.innerHTML = `
        <input class="form-check-input" type="checkbox" id="todo-1">
        <label class="ms-2 form-check-label" for="todo-1">${input.value}</label>
        <label class="ms-auto btn btn-danger btn-sm">
        <i class="bi-trash"></i>
        </label>
        `
        list.appendChild(listItem)

    })
}

addElement()

function removeElement () {}

function filterElement () {}