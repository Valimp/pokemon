import { passives } from "./passive"
import { spells } from "./spells"
import imgCharacter from '../assets/characters/perso.jpg'
import imgCharacter2 from '../assets/characters/letamaca-pose-monsieur-epee.jpg'

const characters = [
    {
        pouis: {
            name: "Pouis",
            hp: 125,
            mp: 5,
            image: imgCharacter,
            attack: 50,
            defense: 20,
            passif: passives[0],
            spells: [spells[0].charge, spells[0].coupe, spells[0].bouleFeu]
        },
        peonard: {
            name: "Péonard",
            hp: 150,
            mp: 6,
            image: imgCharacter2,
            attack: 100,
            defense: 10,
            passif: passives[1],
            spells: [spells[0].frappeDestructrice, spells[0].pickGlace, spells[0].tsunami]
        },
        pyllian: {
            name: "Pyllian",
            hp: 100,
            mp: 8,
            image: imgCharacter,
            attack: 50,
            defense: 35,
            passif: passives[2],
            spells: [spells[0].toucherMortelle, spells[0].folieMeurtriere, spells[0].deflagration]
        },
        pulien: {
            name: "Pulien",
            hp: 200,
            mp: 6,
            image: imgCharacter2,
            attack: 50,
            defense: 70,
            passif: passives[3],
            spells: [spells[0].bouleRoc, spells[0].cataclysme, spells[0].chatiment]
        },
    }
]


export { characters }