import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header() {
  const navigate = useNavigate();

  function goToAccueil() {
    navigate('/');
  }

  function goToApropos() {
    navigate('/apropos');
  }

  return (
    <header>
      <nav>
        <button type='button' onClick={goToAccueil}>Accueil</button>
        <button type='button' onClick={goToApropos}>À propos</button>
      </nav>
    </header>
  );
}

export default Header;
