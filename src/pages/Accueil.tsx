
import StartBtn from '../components/StartBtn';
import Pfighter from "../assets/pfighter.png";
import { Link } from 'react-router-dom';

const Accueil = () => {
  return (
    <Link to={"/home"}>
      <div className='main-container'>
        <img className='pfighter-logo' src={Pfighter} alt="" />
        <StartBtn
          titre="Démarrer le jeu"
        />
      </div>
    </Link>
  );
};

export default Accueil;