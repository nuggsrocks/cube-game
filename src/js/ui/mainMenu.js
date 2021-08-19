export const mainMenu = (callback) => {
  const t = document.querySelector('#main-menu-template')

  const clone = document.importNode(t.content, true)

  clone.querySelector('button').onclick = callback

  return clone
}
