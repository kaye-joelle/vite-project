// import ListPost from "../components/ListPost"
import ListCard from "../components/ListCard"
// import { getPostFromApi } from "../utils/Api"


export const getCharacterFromApi = async (firstParam, secondParam) => {
  const res = await getCharacterFromApi()
  const data = res.map((element) => ({
    text: element.name,
    src: element.image,
  }))
  return ListCard(data)
}




  const req = await fetch('https://rickandmortyapi.com/api/character/?name')
  const res = await req.json()

  return res.results
}

const ListOfCharacter = async (firstParam, secondParam) => {
  const res = await getCharacterFromApi()
  const data = res.map((element) => ({
    text: element.name,
    src: element.image,
  }))
  return ListCard(data)
}







// export const filterBySearch = (users, searchString) => {
//     return users.filter(({ id, name, status, species, type, gender, origin, name, url, firstName }) =>
//       `${name.toLowerCase()} ${firstName.toLowerCase()}`.includes(searchString)
//     );
//   };


//   console.log(filterBySearch(userData, 'i'));
