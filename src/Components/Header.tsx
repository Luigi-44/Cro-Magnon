import { useNavigate } from 'react-router-dom';
import './Header.css'
import CroMagnon from "../assets/CroMagnon.webp"

function Header() {
  
  return (
    <header>
      <div className="full-header">
        <h2>Bienvenue au Cromagnon Lodge!</h2>
      <div className='logo-header'>
        <img src={CroMagnon}/>
      </div>
      <h2>Trouvez votre Refuge</h2>
      </div>
    </header>
    
  );
}

export default Header;
