
import { CharacterInterface } from "../interfaces/Character"
import { Spell } from "../interfaces/Spell"

const Character = (props: CharacterInterface) => {
    return (
        <div className="pers">
            <p> name: <span> {props.name} </span></p>
            <div>  <img src={props.image} /> </div>

            <span> Stats  </span>

            <ul>
                <li> Vie: {props.hp}</li>
                <li> PM: {props.mp}</li>
                <li> Attack: {props.attack}</li>
                <li> Defense: {props.defense}</li>

                Liste de spell:
                {props.spells.map((spell: Spell) => {
                    return (
                        <>
                            <li>Name {spell.name} </li>
                            <li> {spell.image} </li>
                            <li> Cout: {spell.cost} </li>
                            <li> Degat:  {spell.damage} </li>

                        </>
                    )
                })}
            </ul>


        </div>
    )
}

export default Character