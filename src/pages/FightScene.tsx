import { FightSceneInterface } from "../interfaces/FightScene"
import { CharacterInterface } from "../interfaces/Character"
import { Passive } from "../interfaces/Passive"
import { Spell } from "../interfaces/Spell"
import imgCharacter from '../assets/characters/perso.jpg'
import imgCharacter2 from '../assets/characters/letamaca-pose-monsieur-epee.jpg'
import '../styles/fightScene.scss'
import { useEffect, useRef, useState } from "react"


const lazyEffect = (): void => {
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




const FightScene = () => {
    const maxPm = 9
    const recoveryPm = 2

    const [character1, setCharacter1] = useState<CharacterInterface>(peonard)
    const [character2, setCharacter2] = useState<CharacterInterface>(pouis)
    const [disabled1, setDisabled1] = useState(false)
    const [disabled2, setDisabled2] = useState(false)

    const [round, setRound] = useState({
        historyRound: [],
        playerActuallyPlayed: {}
    })

    const randomNumber = Math.floor(Math.random() * 2) + 1
    useEffect(() => {
        if (randomNumber == 1) {
            setRound(prevRound => ({
                ...prevRound,
                playerActuallyPlayed: character1
            }))
            setDisabled2(true)
        } else {
            setRound(prevRound => ({
                ...prevRound,
                playerActuallyPlayed: character2
            }))
            setDisabled1(true)
        }
    }, [])

    useEffect(() => {
        console.log(round)
    }, [round])

    const skip = (nextPlayer: CharacterInterface): void => {
        if (nextPlayer === character1) {
            setDisabled1(false)
            setDisabled2(true)
            setCharacter1(prevStat => ({
                ...prevStat,
                mp: prevStat.mp + recoveryPm
            }))
        } else {
            setDisabled1(true)
            setDisabled2(false)
            setCharacter2(prevStat => ({
                ...prevStat,
                mp: prevStat.mp + recoveryPm
            }))


        }
        setRound(prevRound => ({
            ...prevRound,
            playerActuallyPlayed: nextPlayer,
        }))
    }

    return (
        <div className="fightScene">
            <div className="content">
                <div className="perso1">
                    <span> hp: {character1.hp} &nbsp; defense: {character1.defense} PM: {character1.mp} </span>
                    <img width={"10%"} src={imgCharacter} alt="" />
                    <span>{character1.name}</span>
                    <div className="content-spell">
                        {character1.spells.map((spell) => {
                            return (
                                <>
                                    <button disabled={disabled1} onClick={() => {
                                        setCharacter2(prevStat => ({
                                            ...prevStat,
                                            hp: prevStat.hp - spell.damage

                                        }))

                                        setCharacter1(prevStat => ({
                                            ...prevStat,
                                            mp: prevStat.mp - spell.cost
                                        }))

                                    }}  >{spell.name}</button>
                                </>
                            )
                        })}
                        <button disabled={disabled1} onClick={() => skip(character2)}>Skip</button>
                    </div>


                </div>

                <div className="perso2">
                    <span> hp: {character2.hp} &nbsp; defense: {character2.defense} PM: {character2.mp}</span>
                    <img width={"10%"} src={imgCharacter2} alt="" />
                    <span>{character2.name}</span>
                    <div className="content-spell">
                        {character2.spells.map((spell) => {
                            return (
                                <>
                                    <button disabled={disabled2} onClick={() => {
                                        setCharacter1(prevStat => ({
                                            ...prevStat,
                                            hp: prevStat.hp - spell.damage,
                                        }))

                                        setCharacter2(prevStat => ({
                                            ...prevStat,
                                            mp: prevStat.mp - spell.cost
                                        }))
                                    }}  >{spell.name}</button>
                                </>
                            )
                        })}
                        <button disabled={disabled2} onClick={() => skip(character1)}>Skip</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default FightScene