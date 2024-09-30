/**
 * 
 * @param {string} tagName 
 * @param {object} attriubutes 
 * @returns {HTMLElement}
 */
export function createElement(tagName, attriubutes = {}) {
    const element = createElement(tagName)
    for (const [attriubute, value] of Object.entries(attriubutes)) {
        if (value !== null) {
            element.setAttribute(attribute, value)
        }
    }
    return element
}

/**
 * 
 * @param {string} id 
 * @returns {DocumentFragment}
 */
export function cloneTemplate (id) {
    return document.getElementById(id).content.cloneNode(true)
}