import ListCard from "../components/ListCard"
import { getCharacterFromApi } from "../utils/Api"


const ListOfCharacter = async () => {
  const res = await getCharacterFromApi()
  const data = res.map((element) => ({
    text: element.name,
    src: element.image,
  }))
  return ListCard(data)
}

export default ListOfCharacter