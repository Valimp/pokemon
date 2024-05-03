import { Link } from 'react-router-dom'

interface StartFightButtonProps {
    player1: string
    player2: string
    map: string
}

const StartFightButton = ({ player1, player2, map }: StartFightButtonProps) => {

    return (
        <Link to={`/FightScene/${player1}/${player2}`} >
            Start Fight
        </Link>
    )
}

export default StartFightButton