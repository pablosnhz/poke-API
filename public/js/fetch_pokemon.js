export default function fetchpokemon() {
    const urlPokemon = "https://pokeapi.co/api/v2/pokemon";
    $pokeBox: HTMLElement = document.getElementById("poke-box");
    fragment: Document = document.createDocumentFragment();
    fetch(urlPokemon)
        .then(res => res.json())
        .then((res) => {
        res.results.forEach((pokemon) => {
            console.log(pokemon);
        });
    });
}
