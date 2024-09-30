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