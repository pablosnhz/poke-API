import { listPokemon, pokemon } from "./interface/interface"

export default function fetchpokemon(): void {
    const urlPokemon: string = "https://pokeapi.co/api/v2/pokemon",
        $pokeBox: HTMLElement = <HTMLElement>document.getElementById("poke-box"),
        fragment: Node = document.createDocumentFragment()


    fetch(urlPokemon)
        .then(res => res.json())
        .then((res: listPokemon) => {
            res.results.forEach((pokemon) => {
                const $figure: HTMLElement = document.createElement("figure"),
                $img: HTMLElement = document.createElement("img"),
                $figureCaption: HTMLElement = document.createElement("figcaption"),
                $namePokemon: Node = document.createTextNode(pokemon.name);

                $img.setAttribute("alt", pokemon.name)
                $img.setAttribute("title", pokemon.name)

                fetch(pokemon.url)
                    .then(res => res.json())
                    .then((res: pokemon) => {
                        $img.setAttribute("src", res.sprites.front_default)
                    })
                

                $figureCaption.appendChild($namePokemon)
                $figure.appendChild($img)
                $figure.appendChild($figureCaption)
                fragment.appendChild($figure)

                $img.style.display = "block";
                $img.style.margin = "auto"; 
                $figureCaption.style.textAlign = "center"; // Cambia el color del texto dentro del elemento figcaption a azul
                $figureCaption.style.fontSize = "20px"
            })

            console.log(res)
            $pokeBox.appendChild(fragment);

        })
}

