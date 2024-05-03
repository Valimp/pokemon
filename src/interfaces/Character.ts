import { Spell } from "./Spell";

export interface CharacterInterface {
    name: string,
    hp: number,
    mp: number,
    image: string,
    attack: number,
    defense: number,
    spells: Array<Spell>
}