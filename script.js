addElement()

removeElement()

filterElement()

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

function removeElement () {
    const list = document.querySelector('.list-group')
    const trashIcon = document.querySelectorAll(`.btn-danger`)
    
    trashIcon.forEach(trash => {
        trash.addEventListener('click', (event) => {
            console.log(event.target.parentNode)
            list.removeChild(event.currentTarget.parentNode)
        })
    })
}


function filterElement () {
    const buttons = document.querySelectorAll('.btn-group .btn')

    /**
     * document.querySelectorAll('.btn') sélectionne tous les boutons ayant la classe btn.
     * forEach() parcourt chaque bouton et ajoute un gestionnaire d'événements click à chaque bouton.
     * Lorsque tu cliques sur un bouton, la fonction supprime la classe active de tous les boutons, puis ajoute cette classe au bouton cliqué (grâce à this qui fait référence au bouton actuel).
     */
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'))

            this.classList.add('active')
        })
    })
}
