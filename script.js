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
    
    for (let elt of trashIcon) {
        elt.addEventListener('click', (event) => {
            console.log(event.target.parentNode)
            list.removeChild(event.currentTarget.parentNode)
        })
    }
    
}


function filterElement () {
    const filterBtn = document.querySelectorAll('.btn-group .btn')

    for (let btn of filterBtn) {
        console.log(btn)
        const classes = btn.classList
        console.log(classes)
        btn.addEventListener('click', (event) => {
            console.log(event.currentTarget)
            event.currentTarget.classList.toggle('active')
            console.log(classes)
        })
    }
    
}

/**
 * Fonction qui vérifie si le tableau passé en paramètre contient l'élément "active". Si oui, le retire; si non l'ajoute
 * @param {Array} classes 
 * @returns {Array}
 */
function activeClassVerifier (classes) {
    const active = classes.filter((word) => word === 'active')
    if (active.toString() !== "") {
        classes.splice(classes.indexOf('active'), 1)
    } else {
        classes.push('active')
    }
}