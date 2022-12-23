import ListOfPost from './src/pages/ListOfPost'
import ListOfCharacter from './src/pages/ListOfCharacter'
import TabManager from './src/utils/TabManager'
import Search from './src/pages/Search'

const rootElement = document.querySelector('#app')
const searchElement = document.querySelector('#searchCharacter')


const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfCharacter,
    params: [1, 'hello']
  },
  pageSearch: {
    component: Search,
    params: []
  }
  // page2: {
  //   component: ListOfPost,
  //   params: ['https://jsonplaceholder.typicode.com/posts']
  // }
})

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })

searchElement.addEventListener('input', () => {
  // console.log(element.getAttribute('data-tabId'));
  tabManager.openTabById('pageSearch', [searchElement.value])
  })
})

tabManager.openTabById('page1')