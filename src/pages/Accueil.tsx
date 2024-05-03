
import StartBtn from '../components/StartBtn';
import Pfighter from "../assets/pfighter.png";
import '../styles/pages/accueil.scss'

const Accueil = () => {
  return (
    <div className='main-container'>
      <img className='pfighter-logo' src={Pfighter} alt="" />
      <StartBtn
        titre="Démarrer le jeu"
      />
    </div>
  );
};

export default Accueil;