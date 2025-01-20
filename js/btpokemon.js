let all_pkm = [];
let filtered_pkm = [];

let offset = 0;
let numberOfRender = 36;

let htmlPokemon = "";
let htmlType = "";

const fetchAPI = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

async function getPokemon() {
    const data = await fetchAPI('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898');
    all_pkm = data.results;
    filtered_pkm = all_pkm;
    render();
}

function getIDPokemon(url) {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
}

async function render() {
    const itemPokemon = document.querySelector('.items');
    for (let index = offset; index < offset + numberOfRender && index < filtered_pkm.length; index++) {
        const pokemon = filtered_pkm[index];
        const ID = getIDPokemon(pokemon.url);

        const typeData = await fetchAPI(pokemon.url);
        htmlType = "";
        typeData.types.forEach(element => {
            htmlType += `
                <div class="types__item ${element.type.name}">${element.type.name}</div>
            `;
        });

        htmlPokemon += `
            <div class="pokemon-item">
                <div class="pokemon-id">#${ID}</div>
                <div class="pokemon-image">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png" alt="${pokemon.name}">
                </div>
                <div class="pokemon-name">${pokemon.name}</div>
                <div class="types">${htmlType}</div>
            </div>
        `;
    }

    itemPokemon.innerHTML = htmlPokemon;
    setupLoadMore();
}

function setupLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more');
    if (offset + numberOfRender < filtered_pkm.length) {
        loadMoreBtn.style.display = 'block';
        loadMoreBtn.onclick = () => {
            offset += numberOfRender;
            render();
        };
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

function searchPokemon(query) {
    htmlPokemon = "";
    if (query === '') {
        filtered_pkm = all_pkm;
    } else {
        filtered_pkm = all_pkm.filter(pokemon =>
            pokemon.name.toLowerCase().includes(query.toLowerCase())
        );
    }
    offset = 0;
    render();
}

const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', (event) => {
    const query = event.target.value;
    searchPokemon(query);
});

getPokemon();
