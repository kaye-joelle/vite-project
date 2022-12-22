
//Filter by character
export const getCharacterFromApi = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/character/')
  const res = await req.json()

  return res.results
}

// //Filter by character gender male
// export const getCharacterGenderFromApi = async ()=> {
//   const req = await fetch('https://rickandmortyapi.com/api/character/?gender=male')
//   const res = await req.json()

//   return res.results
// }

// //Filter by character gender female 
// export const getCharacterGenderFromApi = async ()=> {
//   const req = await fetch('https://rickandmortyapi.com/api/character/?gender=female')
//   const res = await req.json()

//   return res.results
// }

// //Filter by character gender genderless
// export const getCharacterGenderFromApi = async ()=> {
//   const req = await fetch('https://rickandmortyapi.com/api/character/?gender=genderless')
//   const res = await req.json()

//   return res.results
// }

// //Filter by character gender unknown
// export const getCharacterGenderFromApi = async ()=> {
//   const req = await fetch('https://rickandmortyapi.com/api/character/?gender=unknown')
//   const res = await req.json()

//   return res.results
// }


export const getPostFromApi = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await req.json()

  return res
}