import { CharacterInterface } from "../interfaces/Character"
import { Passive } from "../interfaces/Passive"
import { Spell } from "../interfaces/Spell"
import Character from "../components/Character"

const lazyEffect = ():void => {
}

const pouisPass: Passive = {
    name: "Fégnant",
    desc: "Pouis quand il est motivé boost ses attaques pendant 2 tours, et se repose au troisieme tours",
    effect: lazyEffect
}

const peonardPass: Passive = {
    name: "Ombre et Lumière",
    desc: "Un tour sur deux Péonard échange ses stats attaque et defense",
    effect: lazyEffect
}

const charge: Spell = {
    name: "charge",
    damage: 15,
    cost: 1,
    image: "youtube.com"
}

const coupe: Spell = {
    name: "coupe",
    damage: 20,
    cost: 2,
    image: "youtube.com"
}

const pouis: CharacterInterface = {
    name: "Pouis",
    hp: 125,
    mp: 5,
    image: "youtube.com",
    attack: 50,
    defense: 20,
    passif: pouisPass,
    spells: [charge, coupe]
}

const peonard: CharacterInterface = {
    name: "Péonard",
    hp: 150,
    mp: 6,
    image: "youtube.com",
    attack: 100,
    defense: 10,
    passif: peonardPass,
    spells: [charge, coupe]
}

const characters = [pouis, peonard]


const Characters = () => {
    return (
        <div>
        {characters.map((characterInfo: CharacterInterface) => {
            return (
                <Character name={characterInfo.name} image={characterInfo.image} attack={characterInfo.attack} defense={characterInfo.defense} passif={characterInfo.passif} spells={characterInfo.spells} hp={characterInfo.hp} mp={characterInfo.mp} />
            )
        })}
        </div>
    )
}

export default Characters