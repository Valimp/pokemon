import CharactersButton from "../components/CharactersButton"
import { useState } from "react"
import Pickachu from "../assets/sprites/pikachu.png"
import '../styles/components/App.scss'
import StartFightButton from "../components/StartFightButton"

const Home = () => {

    const [initCombat, setInitCombat] = useState({
        joueur1: "",
        joueur2: "",
        map: ""
    })

    console.log(initCombat);
    
  return (
    <div>
        <h1>Home</h1>
        <div className="charactersChoice">
            <div className="redRectangle"></div>
            <CharactersButton 
                name='pikachu' 
                image={Pickachu} 
                setInitCombat={setInitCombat}
                initCombat={initCombat} 
                player="1"
            />
        </div>
        <div className="charactersChoice">
            <div className="blueRectangle"></div>
            <CharactersButton 
                name='pikachu' 
                image={Pickachu} 
                setInitCombat={setInitCombat}
                initCombat={initCombat} 
                player="2"
            />
        </div>
        <div>
            Vous avez choisi {initCombat.joueur1} contre {initCombat.joueur2}
        </div>
        <StartFightButton player1={initCombat.joueur1} player2={initCombat.joueur2} />
    </div>
  )
}

export default Home