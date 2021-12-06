export class Menu extends HTMLElement {
  constructor (templateId) {
    super()
    const template = document.querySelector(templateId)
    const styleTemplate = document.querySelector('#menu-style-template')
    const selectTemplate = document.querySelector('#select-difficulty-template')

    this.attachShadow({ mode: 'open' })

    const form = template.content.querySelector('form')

    form.replaceChild(selectTemplate.content.cloneNode(true), form.querySelector('slot'))

    this.shadowRoot.append(styleTemplate.content.cloneNode(true))
    this.shadowRoot.append(template.content.cloneNode(true))
  }
}
