import "./Header.css";
import CroMagnon from "../../assets/CroMagnon.webp";
import { gsap } from 'gsap';
import { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";

function Header() {
  gsap.registerPlugin(TextPlugin);

  const textRef = useRef(null);
  useEffect(() => {
    gsap.to(textRef.current, {
      duration: 2,
      text: "Bienvenue au Cromagnon Lodge!",
      delay: 1
    });
  }, []);

  const textRef2 = useRef(null);
  useEffect(() => {
    gsap.to(textRef2.current, {
      duration: 2,
      text: "Trouvez votre Refuge",
      delay: 3
    });
  }, []);

  return (
    <header>
      <div className="full-header">
        <h2 ref={textRef}>Welcome to Cromagnon Lodge!</h2>
        <div className="logo-header">
          <img src={CroMagnon} alt="Presentation Entreprise"/>
        </div>
        <h2 ref={textRef2}>Find your shelter</h2>
      </div>
      <div className="hero">{/* backgrund-image trop styler */}</div>
    </header>
  );
}

export default Header;
