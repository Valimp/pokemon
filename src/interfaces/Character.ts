import { Passive } from "./Passive";
import { Spell } from "./Spell";

export interface CharacterInterface {
    name: string,
    hp: number,
    mp: number,
    image: string,
    attack: number,
    defense: number,
    passif: Passive,
    spells: Array<Spell>
}