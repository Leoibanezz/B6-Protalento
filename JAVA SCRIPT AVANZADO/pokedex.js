const pokemonContenedor = document.querySelector('.ContenedorPokemon')

async function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        crearPokemon(data);

});

} 

async function fetchPokemons(number){
    for (let i =1; i <= number; i++ ){
        fetchPokemon(i);
    }
}


function crearPokemon(pokemon){

    const flipCard = document.createElement('div');
    flipCard.classList.add('flip-card');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    flipCard.appendChild(cardContainer);

    const card = document.createElement('div');
    card.classList.add('bloque-pokemon');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('imagen-contenedor');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.other.home.front_default;

    spriteContainer.appendChild(sprite);

    const number =document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('nombre');
    name.textContent = pokemon.name;

    const type = document.createElement("p")
    type.classList.add("tipo")
    type.textContent = `Tipo: ${pokemon.types.map((type) => type.type.name).join(", ")}`;

card.appendChild(spriteContainer);
card.appendChild(number);
card.appendChild(name);
card.appendChild(type);

const cardBack = document.createElement('div');
cardBack.classList.add('bloque-pokemon-back');
cardBack.appendChild(progressBars(pokemon.stats))

cardContainer.appendChild(card);
cardContainer.appendChild(cardBack);
pokemonContenedor.appendChild(flipCard);
}

function progressBars(stats){
 const statsContainer = document.createElement('div');
 statsContainer.classList.add('stats-container');

 for (let i = 0; i < 4; i++){
    const stat = stats[i];

    const statPercent = stat.base_state / 2 + "%";
     
    const statContainer = document.createElement('div');
    statContainer.classList.add('stat-container');

    const statName = document.createElement('div');
    statName.textContent = stat.stat.name;

    const progress = document.createElement('div');
    progress.classList.add('progress');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
 }

return statsContainer
}

fetchPokemons(151);