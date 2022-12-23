class TabManager {
  constructor(rootElement, componentMapping) {
    this.rootElement = rootElement
    this.componentMapping = componentMapping
  }

  async openTabById(id, params =[]) {
    if (id in this.componentMapping) {
      const { component, params: [...props] = [] } = this.componentMapping[id]
      const Component = await component(...(params.length ? params : props))
      this.rootElement.innerHTML = ''
      this.rootElement.appendChild(Component)
    } else {
      console.error('Invalid id provided')
    }
  }
}

export default TabManager