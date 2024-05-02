import '../styles/components/CharactersButton.scss'

interface CharactersButtonProps {
    name: string
    image: string
    setInitCombat: any
    initCombat: any
    player: "1" | "2"
}

const CharactersButton = ({ name, image, setInitCombat, initCombat, player }: CharactersButtonProps) => {

    const handleClick = () => {
        if(player === "1") {
            setInitCombat({
                ...initCombat,
                joueur1: name
            })
            return
        }
        setInitCombat({
            ...initCombat,
            joueur2: name
        })
    }

  return (
    <div className='characterCard' onClick={handleClick}>
        <div className="characterCard__image">
            <img src={ image } alt={ name } />
        </div>
        <h3>
            { name }
        </h3>
    </div>
  )
}

export default CharactersButton