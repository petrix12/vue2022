// Obteniendo nombres de pokemon con push.
fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(data => {
        let nombres = []
        data.results.forEach(element => nombres.push(element.name))
        console.log('Método 1:' + nombres)
    })
    .catch(error => console.log(error))

// Obteniendo nombres de pokemon con map.
const obtenerPokemons = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await res.json()
        /* const nombres = data.results.filter(pokemon => pokemon.name === 'bulbasaur') */
        const nombres = data.results.filter(pokemon => pokemon.name !== 'bulbasaur')
        console.log(nombres)
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemons()