const pokemonDetalhe = document.getElementById('pokemonDetalhe')



console.log(pokemonDetalhe);

const urlParams = new URLSearchParams(window.location.search);
const identificadorPokemon = urlParams.get('id')


function convertPokemonToDivDetalhe(pokemon) {
    return `
        <div class="pokemon-header ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </div>

        <div class="pokemon-corpo">
            <div class="tab">
                <button class="tablinks" onclick="openDetalhe(event, 'habilidades')">Habilidades</button>
                <button class="tablinks" onclick="openDetalhe(event, 'especies')">Especies</button>
                <button class="tablinks" onclick="openDetalhe(event, 'tipos')">Tipos</button>
            </div>
            
            <div id="habilidades" class="tabcontent">
              <p>Habilidade Principal: ${pokemon.abilitie}</p>
            </div>
            
            <div id="especies" class="tabcontent">
               <p>Especie Principal: ${pokemon.specie}</p>
            </div>

            <div id="tipos" class="tabcontent">
              <p>Tipo Principal: ${pokemon.type}</p>
               <p>Todos: ${pokemon.types.map((type) => `<li class="type ">${type}</li>`).join('')}</p>
            </div>

        </div>
    `
}

function loadPokemonDetalhe(identificadorPokemon) {
    pokeApi.getPokemon(identificadorPokemon).then((pokemon) => {
        const newHtml = convertPokemonToDivDetalhe(pokemon)
        pokemonDetalhe.innerHTML += newHtml
        console.log(pokemonDetalhe);
    })
}

loadPokemonDetalhe(identificadorPokemon)

function openDetalhe(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
