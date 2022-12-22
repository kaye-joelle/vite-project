
export const getCharacterFromApi = async () => {
    const req = await fetch('https://rickandmortyapi.com/api/character/')
  const res = await req.json()

  return res.results
}

export const getPostFromApi = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await req.json()

  return res
}