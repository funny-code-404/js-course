export const getDataForListPokemons = (arr) =>
    Promise.all(
        arr.map(async (item) => {
            const res = await fetch(item.url)
            const data = await res.json();

            return {
                id: data.id,
                name: data.name,
                imageUrl: data.sprites.front_default
            }
        })
    )

