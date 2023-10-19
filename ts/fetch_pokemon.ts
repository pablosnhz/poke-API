import { listPokemon } from "./interface/interface"

export default function fetchpokemon(): void {
    const urlPokemon: string = "https://pokeapi.co/api/v2/pokemon"
        $pokeBox: HTMLElement = <HTMLElement>document.getElementById("poke-box");
        fragment: Document = document.createDocumentFragment();


    fetch(urlPokemon)
        .then(res => res.json())
        .then((res: listPokemon) => {
            res.results.forEach((pokemon) => {
                console.log(pokemon)
            })
        })
}

