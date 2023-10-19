export default function fetchpokemon() {
    const urlPokemon = "https://pokeapi.co/api/v2/pokemon", $pokeBox = document.getElementById("poke-box"), fragment = document.createDocumentFragment();
    fetch(urlPokemon)
        .then(res => res.json())
        .then((res) => {
        res.results.forEach((pokemon) => {
            const $figure = document.createElement("figure"), $img = document.createElement("img"), $figureCaption = document.createElement("figcaption"), $namePokemon = document.createTextNode(pokemon.name);
            $img.setAttribute("alt", pokemon.name);
            $img.setAttribute("title", pokemon.name);
            fetch(pokemon.url)
                .then(res => res.json())
                .then((res) => {
                $img.setAttribute("src", res.sprites.front_default);
            });
            $figureCaption.appendChild($namePokemon);
            $figure.appendChild($img);
            $figure.appendChild($figureCaption);
            fragment.appendChild($figure);
            $img.style.display = "block";
            $img.style.margin = "auto";
            $figureCaption.style.textAlign = "center"; // Cambia el color del texto dentro del elemento figcaption a azul
            $figureCaption.style.fontSize = "20px";
        });
        console.log(res);
        $pokeBox.appendChild(fragment);
    });
}
