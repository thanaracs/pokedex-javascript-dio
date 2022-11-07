
function convertPokemonToLi(pokemon){
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

const pokemonList = document.getElementById('pokemonList')


// Convertendo lista de pokemons objeto em lista de pokemons html 
// se não vinher nenhuma lista, por default é criado uma lista vazia
pokeApi.getPokemons().then((pokemons = []) => {
    const listItems = []

    for(let i = 0; i < pokemons.length; i++){
        const pokemon = pokemons[i];
        pokemonList.innerHTML += convertPokemonToLi(pokemon)
        listItems.push(convertPokemonToLi(pokemon))
    }
})


