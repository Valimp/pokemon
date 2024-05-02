import CharactersButton from "../components/CharactersButton"
import { useState } from "react"
import Pickachu from "../assets/sprites/pikachu.png"

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
        <CharactersButton 
            name='pikachu' 
            image={Pickachu} 
            setInitCombat={setInitCombat}
            initCombat={initCombat} 
            player="1"
        />
        <CharactersButton 
            name='pikachu' 
            image={Pickachu} 
            setInitCombat={setInitCombat}
            initCombat={initCombat} 
            player="2"
        />
    </div>
  )
}

export default Home