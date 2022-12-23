import ListOfPost from './src/pages/ListOfPost'
import ListOfCharacter from './src/pages/ListOfCharacter'
import TabManager from './src/utils/TabManager'

const rootElement = document.querySelector('#app')
const searchElement = document.querySelector('#searchCharacter')


const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfCharacter,
    params: [1, 'hello']
  },
  page2: {
    component: ListOfPost,
    params: ['https://jsonplaceholder.typicode.com/posts']
  }
})

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabByID(element.getAttribute('data-tabId'))
  })

searchElement.addEventListener('input', () => {
  tabManager.openTabByID(element.getAttribute('data-tabId'), searchElement.value)
  })
})

tabManager.openTabByID('page1')