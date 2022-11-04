const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToHtml(pokemon){
    return `<li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>
        <img src="assets/img/bulbasaur.png" alt="imagem ${pokemon.name}">
    </div>
</li>`
}

fetch(url)
    .then((response) => response.json()) // fazendo requisição
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        // debugger
        
        for(let i = 0; i < pokemonList.length; i++)
    })
    .catch(error => console.error(error)) // quando der erro


