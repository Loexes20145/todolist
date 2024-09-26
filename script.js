function addElement () {
    const form = document.querySelector('form')
    const input = document.querySelector('.form-control')
    const ul = document.querySelector('ul')
    
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const liClass = document.querySelector('.list-group li').classList
        const listItem = document.createElement('li')
        for (let elt of liClass) {
            listItem.classList.add(elt)
        }

    })
}

addElement()

function removeElement () {}

function filterElement () {}