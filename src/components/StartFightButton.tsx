import { Link } from 'react-router-dom'

interface StartFightButtonProps {
    player1: string
    player2: string
}

const StartFightButton = ({ player1, player2 }: StartFightButtonProps) => {

    return (
        <Link to={`/fight?player1=${ player1 }&player2=${ player2 }`} >
            Start Fight
        </Link>
    )
}

export default StartFightButton