import CharactersButton from "../components/CharactersButton"
import { useState } from "react"
import '../styles/components/App.scss'
import StartFightButton from "../components/StartFightButton"
import { characters } from "../data/characters"
import Map from '../components/Map';
import Bamboo from "../assets/maps/bamboobridge.png";
import NewCastle from "../assets/maps/castlebridge.png";
import Forest from "../assets/maps/forest bridge.png";
import Sky from "../assets/maps/sky bridge.png";


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
                {
                    characters.map((character) => (
                        <CharactersButton
                            key={character.name}
                            name={character.name}
                            image={character.image}
                            setInitCombat={setInitCombat}
                            initCombat={initCombat}
                            player="1"
                        />
                    ))
                }
            </div>
            <div className="charactersChoice">
                <div className="blueRectangle"></div>
                {
                    characters.map((character) => (
                        <CharactersButton
                            key={character.name}
                            name={character.name}
                            image={character.image}
                            setInitCombat={setInitCombat}
                            initCombat={initCombat}
                            player="2"
                        />
                    ))
                }
            </div>

            <div className="container-maps">
                <Map
                    imageSource={Bamboo}
                    titre="Bamboom"
                />
                <Map
                    imageSource={NewCastle}
                    titre="New Castle"
                />
                <Map
                    imageSource={Forest}
                    titre="Foresty"
                />
                <Map
                    imageSource={Sky}
                    titre="Sky Art"
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