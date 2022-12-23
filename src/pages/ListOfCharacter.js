import ListCard from "../components/ListCard"
import { getCharacterFromApi } from "../utils/Api"

const ListOfCharacter = async (searchCharacter, Param) => {
  if (searchCharacter){
    searchCharacter = `?name=${searchCharacter}`
  }
  const res = await getCharacterFromApi(searchCharacter)
  if (res){
    const data = res.map((element) => ({
      text: element.name,
      src: element.image   
  }))
  return ListOfCharacter(data)
}
}

export default ListOfCharacter