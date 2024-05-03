import { spells } from "./spells"
import imgPouis from '../assets/characters/2004-Shiny-Charmander.webp'
import imgPeonard from '../assets/characters/1528080679Pokemon-PNG-HD.png'
import imgPyllian from '../assets/characters/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786846qmowo.png'
import imgPulien from '../assets/characters/Mew-Pokemon-PNG-File.png'
import { CharacterInterface } from "../interfaces/Character"

const characters: Array<CharacterInterface> = [
    {
        name: "Pouis",
        hp: 125,
        mp: 5,
        image: imgPouis,
        attack: 50,
        defense: 20,
        spells: [spells[0].charge, spells[0].coupe, spells[0].bouleFeu]
    },
    {
        name: "Péonard",
        hp: 150,
        mp: 6,
        image: imgPeonard,
        attack: 100,
        defense: 10,
        spells: [spells[0].frappeDestructrice, spells[0].pickGlace, spells[0].tsunami]
    },
    {
        name: "Pyllian",
        hp: 100,
        mp: 8,
        image: imgPyllian,
        attack: 50,
        defense: 35,
        spells: [spells[0].toucherMortelle, spells[0].folieMeurtriere, spells[0].deflagration]
    },
    {
        name: "Pulien",
        hp: 200,
        mp: 6,
        image: imgPulien,
        attack: 50,
        defense: 70,
        spells: [spells[0].bouleRoc, spells[0].cataclysme, spells[0].chatiment]
    },
]


export { characters }