import "./Footer.css";
import rdv from "../../assets/rdv.png";
import png1 from "../../assets/test.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <img className="Parchemin" src={png1} alt="" />
        <h2>🌄 Retrouvez-nous au Cœur de l'Âge de Pierre 🏕️</h2>
        <div className="form">
          <img src={rdv} alt="Point de RDV" />
          <div className="card">
            <h3>🌅 Rendez-vous au Cœur du Temps Oublié 🏕️</h3>
            <p>
              Venez nous retrouver dès les premiers rayons du soleil jusqu'à ce
              que la nuit enveloppe la terre. Notre point de rencontre se trouve
              au [nom du lieu sur la carte], un refuge ancestral où le temps
              semble s’être arrêté. Suivez les sentiers gravés par nos ancêtres
              et laissez-vous guider par les symboles anciens jusqu’à notre
              campement.
            </p>

            <ul>
              <li>🔥 Horaires : du lever au coucher du soleil</li>
              <li>🗺️ Lieu : [Nom du point de rendez-vous]</li>
              <li>
                📜 Comment nous trouver ? Suivez les gravures sur les pierres et
                laissez-vous porter par l’esprit de l’aventure !
              </li>
              <li>
                🌿 Venez partager un moment hors du temps, au cœur de la nature
                sauvage.
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-container">
          <p>
            🔥 Forgé dans la pierre et le feu par{" "}
            <span className="names">Lucie, Luidgie, Mohamed & William</span> 🔥
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
