const baseUrl = 'https://rickandmortyapi.com/api/character/'

export const getCharactersByFilterParams = async (params) => {
    let search = Object.entries(params)
        .map((e) => `${e[0]}=${e[1]}`)
        .join('&')
    return await fetch(`${baseUrl}?${search}`).then((e) => e.json())
}
