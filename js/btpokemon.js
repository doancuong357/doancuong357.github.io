const pokemonList = document.querySelector("#pokemon-list");

// Dlieu trong data.js
let pokemonData = data.results;

function displayPokemon(pokemonResults) {
    pokemonList.innerHTML = ''; 
    const pokemonItems =[];

    pokemonResults.forEach(function(pokemon, index) {
        const pokemonId = index + 1;  // lấy Id pokemon (index+1)
        const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

        pokemonItems.push(`
            <div class="pokemon-item">
                <div class="pokemon-id">#${pokemonId}</div>
                <img src="${pokemonImage}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
            </div>
        `);
    });
    //add all pokemon vào ds
    pokemonList.innerHTML = pokemonItems.join('');
}
displayPokemon(pokemonData);
