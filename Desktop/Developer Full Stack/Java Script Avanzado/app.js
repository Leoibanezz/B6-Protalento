// Primero, definimos la clase Pokémon
class Pokemon {
    constructor(id, name, type, weight, abilities) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.abilities = abilities;
    }
}

// Luego, cargamos nuestros Pokémon desde el archivo JSON
let listaPokemon = [];
fetch('pokemones.json')
    .then(response => response.json())
    .then(data => {
        for (let pokemonData of data) {
            let pokemon = new Pokemon(pokemonData.id, pokemonData.name, pokemonData.type, pokemonData.weight, pokemonData.abilities);
            listaPokemon.push(pokemon);
        }
        mostrarListaPokemon();
    });

// Función para mostrar nuestros Pokémon en tarjetas
function mostrarListaPokemon() {
    let container = document.getElementById('lista-pokemon');
    container.innerHTML = '';
    for (let pokemon of listaPokemon) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${pokemon.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${pokemon.type.join(', ')}</h6>
                <button type="button" class="btn btn-primary">
                    Ver detalles
                </button>
            </div>
        `;
        card.querySelector('button').addEventListener('click', () => mostrarDetallesPokemon(pokemon.id));
        container.appendChild(card);
    }
}

// Función para mostrar los detalles de un Pokémon en un modal
function mostrarDetallesPokemon(id) {
    let pokemon = listaPokemon.find(p => p.id === id);
    let modal = document.getElementById('modal-pokemon');
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${pokemon.name}</h5>
                </div>
                <div class="modal-body">
                    <p>Tipo: ${pokemon.type.join(', ')}</p>
                    <p>Peso: ${pokemon.weight}</p>
                    <p>Habilidades: ${pokemon.abilities.join(', ')}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    `;

    // Bootstrap 5
    var myModal = new bootstrap.Modal(document.getElementById('modal-pokemon'), {});
    myModal.show();
}

// Función para buscar Pokémon por nombre
function buscarPokemon(name) {
    let filteredList = listaPokemon.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    mostrarListaPokemon(filteredList);
}

