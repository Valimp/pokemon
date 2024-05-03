import Map from '../components/Map'; 
import Bamboo from "../assets/maps/bamboobridge.png";
import NewCastle from "../assets/maps/castlebridge.png";
import Forest from "../assets/maps/forest bridge.png";
import Sky from "../assets/maps/sky bridge.png";
import StartBtn from '../components/StartBtn';


const HomeMap = () => {
  return (
    <div className="container">
      <h1>Liste des cartes</h1>
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
    <StartBtn
     titre="Lancer la partie"
    />
    </div>
  );
};

export default HomeMap;