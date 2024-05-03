import startbtn from '../assets/maps/startbtn.mp3';
import "../styles/components/startbutton.scss";


interface StartBtnProps {
    titre: string
}

const StartBtn = ({ titre }: StartBtnProps) => {
  const sound = new Audio(startbtn); 
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
      <button 
        className="start-btn"  
        onMouseEnter={(e) => {
          playSound();
          e.currentTarget.classList.add('hovered'); 
        }}
        onMouseLeave={(e) => {
          stopSound();
          e.currentTarget.classList.remove('hovered'); 
        }}
      >
        {titre}
      </button>
    </div>
  );
};

export default StartBtn;