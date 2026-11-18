function buscarPokemon() {
    let nome = document.getElementById("nome").value.toLowerCase();
    let dadosPokemon = document.getElementById("dadosPokemon");
    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;
fetch(url)
.then(res => {
    if (!res.ok) {
        throw new Error('Não foi possivel carregar a imagem');
    }
    return res.json();
})
.then(dados => {
    const foto = dados.sprites.front_default;
    dadosPokemon.innerHTML = `<img src="${foto}" width="250">`;
})
.catch(error => {
    dadosPokemon.innerHTML = `Erro: ${error.message}`;
});
}

var nomes = ["Pikachu", "Gengar", "Snorlax", "Dratini", "Lapras", "Mewtwo", "Togepi", "Typhlosion", "Umbreon", "Lugia", "Scizor", "Marill", "Tyranitar", "Mudkip", "Gardevoir", "Blaziken", "Rayquaza", "Swellow", "Aggron", "Milotic", "Lucario", "Garchomp", "Piplup", "Gallade", "Togekiss", "Infernape", "Dialga", "Zoroark", "Snivy", "Reshiram", "Excadrill", "Chandelure", "Hydreigon", "Lilligant", "Greninja", "Sylveon", "Fennekin", "Talonflame", "Goodra", "Honedge", "Noivern", "Rowlet", "Decidueye", "Incineroar", "Rockruff", "Popplio", "Bewear", "Solgaleo", "Corviknight", "Grookey", "Dragapult", "Zacian", "Rillaboom", "Toxel", "Wooloo", "Cinderace", "Sprigatito", "Fuecoco", "Koraidon", "Miraidon"];

function sortear() {
  var lista = document.getElementById("lista-sorteio");
  lista.innerHTML = "";

  var embaralhados = nomes.slice().sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 3; i++) {
    var item = document.createElement("li");
    item.textContent = embaralhados[i];
    lista.appendChild(item);
  }
}

sortear();
document.getElementById("botao-sorteio").onclick = sortear;