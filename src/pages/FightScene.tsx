import { CharacterInterface } from "../interfaces/Character"
import { Spell } from "../interfaces/Spell"
import '../styles/fightScene.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { characters } from "../data/characters"

const FightScene = () => {
    
    const { player1, player2, map } = useParams()
    let decodeUri
    if (map) {
        decodeUri = decodeURIComponent(map)
    }
    const findPlayer1: CharacterInterface = characters.find((element) => element.name == player1)!
    const findPLayer2: CharacterInterface = characters.find((element) => element.name == player2)!

    const [victory1, setVictory1] = useState(true);
    const [victory2, setVictory2] = useState(true);

    const recoveryPm = 4


    const [character1, setCharacter1] = useState<CharacterInterface>(findPlayer1)
    const [character2, setCharacter2] = useState<CharacterInterface>(findPLayer2)
    const [disabled1, setDisabled1] = useState(false)
    const [disabled2, setDisabled2] = useState(false)

    const divStyle = {
        backgroundImage: `url(${decodeUri})`,
    };

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
        if (character1.hp <= 0) {
            setVictory2(false);
            setDisabled1(true)
            setDisabled2(true)
        } if (character2.hp <= 0) {
            setVictory1(false);
            setDisabled1(true)
            setDisabled2(true)
        }
        console.log(round)
    }, [round, character1.hp, character2.hp])


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

    // useEffect(() => {
    //     setTimeout(() => {
    //         if ('name' in round.playerActuallyPlayed && round.playerActuallyPlayed.name == character1.name) {
    //             skip(character2)
    //         }
    //         if ('name' in round.playerActuallyPlayed && round.playerActuallyPlayed.name == character2.name) {
    //             skip(character1)
    //         }
    //     }, 30000)
    // }, [round])

    useEffect(() => {
        if (character1.mp <= 0) {
            const buttonSpells1 = document.querySelectorAll<HTMLButtonElement>('.button-spell-character1')
            for (const button of buttonSpells1) {
                button.disabled = true
            }
        }
        if (character2.mp <= 0) {
            const buttonSpells2 = document.querySelectorAll<HTMLButtonElement>('.button-spell-character2')
            for (const button of buttonSpells2) {
                button.disabled = true
            }
        }
        character1.spells.map((spell) => {
            if (spell.cost > character1.mp) {
                const button = document.querySelector<HTMLButtonElement>(`#spell-${character1.name}-${spell.name}`)
                if (button) {
                    button.disabled = true
                }
            }
        })
        character2.spells.map((spell) => {
            if (spell.cost > character2.mp) {
                const button = document.querySelector<HTMLButtonElement>(`#spell-${character2.name}-${spell.name}`)
                if (button) {
                    button.disabled = true
                }
            }
        })


    }, [character1.mp, character2.mp])


    const reduceDamage = (spellDamage: number, defense: number): number => {
        const percentage = 1 - (defense / 100)
        const damagereduce = spellDamage * percentage
        return Math.ceil(damagereduce)
    }

    const spellEffect = (spell: Spell, character: CharacterInterface): void => {
        if ('spellEffect' in spell && typeof spell.spellEffect === 'function') {
            spell.spellEffect(character)
        }
    }

    return (
        <div style={divStyle} className="fightScene">
            <h1 className="titre">FIGHT !</h1>
            <div className="content">
                <div className="perso1">
                    <span className="info">{character1.name}</span>
                    <img width={"200px"} src={character1.image} alt="" />
                    <span className="info"> hp: {character1.hp} &nbsp; defense: {character1.defense} PM: {character1.mp} </span>
                    <div className="content-spell">
                        {character1.spells.map((spell) => {
                            return (
                                <>
                                    <button className="button-spell-character1 button-spell" disabled={disabled1} onClick={() => {
                                        spellEffect(spell, character1)
                                        setCharacter1(prevStat => ({
                                            ...prevStat,
                                            mp: prevStat.mp - spell.cost
                                        }))
                                        setCharacter2(prevStat => ({
                                            ...prevStat,
                                            hp: prevStat.hp - reduceDamage(spell.damage, character2.defense)

                                        }))
                                    }}  >{spell.name}</button>
                                </>
                            )
                        })}
                        <button className="button-skip" disabled={disabled1} onClick={() => skip(character2)}>Skip</button>
                    </div>
                </div>

                <div className="perso2">
                    <span className="info">{character2.name}</span>
                    <img width={"200px"} src={character2.image} alt="" />
                    <span className="info"> hp: {character2.hp} &nbsp; defense: {character2.defense} PM: {character2.mp}</span>
                    <div className="content-spell">
                        {character2.spells.map((spell) => {
                            return (
                                <>
                                    <button className="button-spell-character2 button-spell" id={`spell-${character2.name}-${spell.name}`} disabled={disabled2} onClick={() => {
                                        spellEffect(spell, character2)
                                        setCharacter1(prevStat => ({
                                            ...prevStat,
                                            hp: prevStat.hp - reduceDamage(spell.damage, character1.defense),
                                        }))

                                        setCharacter2(prevStat => ({
                                            ...prevStat,
                                            mp: prevStat.mp - spell.cost
                                        }))
                                    }}  >{spell.name}</button>
                                </>
                            )
                        })}
                        <button className="button-skip" disabled={disabled2} onClick={() => skip(character1)}>Skip</button>
                    </div>
                </div>
            </div>

            {!victory1 && <p className="msg-victory1">Victoire de {character1.name}</p>}
            {!victory2 && <p className="msg-victory1">Victoire de {character2.name}</p>}
        </div>

    )
}

export default FightScene