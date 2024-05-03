import CharactersButton from "../components/CharactersButton"
import { useState } from "react"
import '../styles/components/App.scss'
import StartFightButton from "../components/StartFightButton"
import { characters } from "../data/characters"
import Map from '../components/Map';
import Bamboo from "../assets/maps/bamboobridge.png";
import NewCastle from "../assets/maps/castlebridge.png";
import Forest from "../assets/maps/forest_bridge.png";
import Sky from "../assets/maps/sky_bridge.png";
import '../styles/pages/home.scss'


const Home = () => {

    const [initCombat, setInitCombat] = useState({
        joueur1: "",
        joueur2: "",
        map: ""
    })

    console.log(initCombat);

    return (
        <div className="main-container-selecteur">
            <h1 className="title-select-hero">Select Your Hero</h1>
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

            <h1>Select Your Map</h1>
            <div className="container-maps">
                <Map
                    imageSource={Bamboo}
                    titre="Bamboom"
                    setInitCombat={setInitCombat}
                    initCombat={initCombat}
                />
                <Map
                    imageSource={NewCastle}
                    titre="New Castle"
                    setInitCombat={setInitCombat}
                    initCombat={initCombat}
                />
                <Map
                    imageSource={Forest}
                    titre="Foresty"
                    setInitCombat={setInitCombat}
                    initCombat={initCombat}
                />
                <Map
                    imageSource={Sky}
                    titre="Sky Art"
                    setInitCombat={setInitCombat}
                    initCombat={initCombat}
                />
            </div>
            <div>
                Vous avez choisi {initCombat.joueur1} contre {initCombat.joueur2}
            </div>
            <StartFightButton player1={initCombat.joueur1} player2={initCombat.joueur2} map={initCombat.map} />
        </div>
    )
}


export default Home