import ListCard from "../components/ListCard"
import { getCharacterFromApi } from "../utils/Api"

const ListOfCharacter = async (searchCharacter) => {
  if (searchCharacter){
    searchCharacter = `?name=${searchCharacter}`
  }
  const res = await getCharacterFromApi(searchCharacter)
  if (res) {
    const data = res.map((element) => ({
      text: element.name,
      src: element.image   
    }))
    return ListCard(data)
  }
  const element = document.createElement('div');
  element.textContent= 'Aucun résultat'
  return element
}

export default ListOfCharacter