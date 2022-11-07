
function convertPokemonToLi(pokemon){
    return `<li class="pokemon">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="imagem ${pokemon.name}">
    </div>
</li>`
}

const pokemonList = document.getElementById('pokemonList')


// Convertendo lista de pokemons objeto em lista de pokemons html 
// se não vinher nenhuma lista, por default é criado uma lista vazia
pokeApi.getPokemons().then((pokemons = []) => {
   //função transformadora
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
    
    //const newList = pokemons.map(convertPokemonToLi).join('');
    //const newLHtml = newList.join('')


    // const listItems = []

    // for(let i = 0; i < pokemons.length; i++){
    //     const pokemon = pokemons[i];
    //     pokemonList.innerHTML += convertPokemonToLi(pokemon)
    //     listItems.push(convertPokemonToLi(pokemon))
    // }
})


