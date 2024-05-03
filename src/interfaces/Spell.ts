import { CharacterInterface } from "./Character"

export interface Spell {
    name: string,
    damage: number,
    cost: number,
    image: string
    spellEffect?: (character: CharacterInterface) => void
}