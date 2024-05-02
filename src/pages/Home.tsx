import CharactersButton from "../components/CharactersButton"
import { useState } from "react"
import Pickachu from "../assets/sprites/pikachu.png"
import '../styles/components/App.scss'

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
    </div>
  )
}

export default Home