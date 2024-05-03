import "../styles/components/map.scss";
import select from '../assets/maps/select.mp3';


interface MapProps {
  imageSource: string,
  titre: string
  setInitCombat: any
  initCombat: any
}


const Map = ({ imageSource, titre, setInitCombat, initCombat }: MapProps) => {
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
      <img className="map" onMouseEnter={(e) => {
        playSound();
        e.currentTarget.classList.add('hovered');
      }}
        onClick={(e) => {
          const images = document.querySelectorAll<HTMLImageElement>('.selected')
          for (const image of images) {
            image.classList.remove('selected')
          }
          e.currentTarget.classList.add('selected')
          setInitCombat({
            ...initCombat,
            map: imageSource
          })
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
