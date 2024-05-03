import "../styles/components/map.scss";
import select from '../assets/maps/select.mp3';


interface MapProps {
    imageSource: string,
    titre: string
}

const Map = ({ imageSource, titre }: MapProps) => {
  const sound = new Audio(select); 
  const playSound = () => {
    sound.volume = 0.5;
    sound.play(); 
  };

  const stopSound = () => {
    sound.pause();
    sound.currentTime = 0;
  };
    return (
      <div>
        <img className="map"  onMouseEnter={(e) => {
        playSound();
        e.currentTarget.classList.add('hovered'); 
      }}
      onMouseLeave={(e) => {
        stopSound();
        e.currentTarget.classList.remove('hovered'); 
      }} src={imageSource} alt="Image de la carte" />
        <h2>{titre}</h2>
      </div>
    );
  };
  

export default Map
