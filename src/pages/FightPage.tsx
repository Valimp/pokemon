import { useSearchParams } from "react-router-dom";

const FightPage = () => {

    const [searchParams] = useSearchParams();
    const player1 = searchParams.get('player1') || undefined;
    const player2 = searchParams.get('player2') || undefined;

    return (
        <div>
            {player1} vs {player2}
        </div>
  )
}

export default FightPage