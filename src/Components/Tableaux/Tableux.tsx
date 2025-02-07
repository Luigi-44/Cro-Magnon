import "./Tableaux.css";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import grotte1 from "../../assets/grotte/u8772914434_Un_logement_en_grotte__lpoque_de_lge_de_Pierre_sc_a9603cdd-d98e-440a-898c-993c86499d22_0.png";
import grotte2 from "../../assets/grotte/u8772914434_Un_logement_en_grotte__lpoque_de_lge_de_Pierre_sc_a9603cdd-d98e-440a-898c-993c86499d22_1.png";
import grotte3 from "../../assets/grotte/u8772914434_Un_logement_en_grotte__lpoque_de_lge_de_Pierre_sc_a9603cdd-d98e-440a-898c-993c86499d22_2.png";
import grotte4 from "../../assets/grotte/u8772914434_Un_logement_en_grotte__lpoque_de_lge_de_Pierre_sc_a9603cdd-d98e-440a-898c-993c86499d22_3.png";

function LogementCard({ logement, openModal }) {
  const images = [logement.img, logement.img2, logement.img3, logement.img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const favorisStockés = JSON.parse(localStorage.getItem("favoris")) || [];
  const [favori, setFavori] = useState(favorisStockés.includes(logement.id));

  const toggleFavori = (e) => {
    // Empêcher le clic de se propager à la div parent (qui ouvre la modal)
    e.stopPropagation();
    let newFavoris;
    if (favori) {
      newFavoris = favorisStockés.filter((id) => id !== logement.id);
    } else {
      newFavoris = [...favorisStockés, logement.id];
    }
    localStorage.setItem("favoris", JSON.stringify(newFavoris));
    setFavori(!favori);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="logement" onClick={() => openModal(logement)}>
      <button type="button" className="favori-btn" onClick={toggleFavori}>
        {/* {favori ? "❤️" : "☠"} */}
        <p className={`Fav ${favori ? "active" : ""}`}>☠</p>
      </button>
      <div className="logement-image">
        <img src={images[currentImageIndex]} alt={logement.nom} />
        <div className="navigation">
          <button type="button" onClick={prevImage} className="nav-btn prev">
            ﹝
          </button>
          <button type="button" onClick={nextImage} className="nav-btn next">
            ﹞
          </button>
        </div>
      </div>
      <div className="text-card">
        <h4>{logement.nom}</h4>
        <p>{logement.type}</p>
        <p>{logement.prix} €</p>
        <p>{logement.date}</p>
      </div>
    </div>
  );
}

function Tableaux({ filtreActif }) {
  const logements = [
    {
      id: 1,
      nom: "Grotte du Clan du Mammouth",
      type: ["All", "All", "Grotte en pierre"],
      prix: 1200,
      date: "1-6 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 2,
      nom: "Abri Sous Roche du Chasseur",
      type: ["All", "Grotte en pierre"],
      prix: 950,
      date: "1-6 mai",
      img: "https://cdn.midjourney.com/cca7a3ca-a06f-4289-9e69-1472b66d2ea3/0_1.png",
      img4: "https://cdn.midjourney.com/cca7a3ca-a06f-4289-9e69-1472b66d2ea3/0_1.png",
      img2: "https://cdn.midjourney.com/cca7a3ca-a06f-4289-9e69-1472b66d2ea3/0_2.png",
      img3: "https://cdn.midjourney.com/cca7a3ca-a06f-4289-9e69-1472b66d2ea3/0_3.png",
    },
    {
      id: 3,
      nom: "Caverne des Esprits Ancestraux",
      type: ["All", "Grotte en pierre"],
      prix: 1100,
      date: "1-6 mai",
      img: "https://cdn.midjourney.com/d6730454-7740-4544-942e-ccc16587c741/0_0.png",
      img2: "https://cdn.midjourney.com/d6730454-7740-4544-942e-ccc16587c741/0_1.png",
      img3: "https://cdn.midjourney.com/d6730454-7740-4544-942e-ccc16587c741/0_2.png",
      img4: "https://cdn.midjourney.com/d6730454-7740-4544-942e-ccc16587c741/0_3.png",
    },
    {
      id: 4,
      nom: "Feu Sacré de la Tribu",
      type: ["All", "Feu de camp"],
      prix: 1300,
      date: "2-7 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 5,
      nom: "Hutte en Peaux de Bête",
      type: ["All", "Lits en peaux de bête"],
      prix: 800,
      date: "3-8 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 6,
      nom: "Campement des Chasseurs-Cueilleurs",
      type: ["All", "Chasse et cueillette"],
      prix: 700,
      date: "3-8 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 7,
      nom: "Source d’Eau Bouillonnante",
      type: ["All", "Bain en source naturelle"],
      prix: 1400,
      date: "4-9 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 8,
      nom: "Grotte des Torches Sacrées",
      type: ["All", "Torches murales"],
      prix: 1250,
      date: "5-10 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 9,
      nom: "Refuge 100% Rustique",
      type: ["All", "100% rustique"],
      prix: 900,
      date: "5-10 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 10,
      nom: "Base de Chasse en Forêt",
      type: ["All", "Chasse et cueillette"],
      prix: 1050,
      date: "6-11 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 11,
      nom: "Promontoire des Randonnées Sauvages",
      type: ["All", "Accès par randonnée"],
      prix: 1150,
      date: "6-11 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 12,
      nom: "Caverne du Ciel Étoilé",
      type: ["All", "Grotte en pierre"],
      prix: 1350,
      date: "7-12 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 13,
      nom: "Territoire des Peintures Runiques",
      type: ["All", "Peinture rupestre"],
      prix: 1450,
      date: "7-12 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 14,
      nom: "Feu de Camp Nocturne",
      type: ["All", "Feu de camp"],
      prix: 750,
      date: "8-13 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 15,
      nom: "Grotte du Peintre Mystique",
      type: ["All", "Peinture rupestre"],
      prix: 1250,
      date: "8-13 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 16,
      nom: "Hutte du Grand Esprit",
      type: ["All", "Torches murales"],
      prix: 900,
      date: "9-14 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 17,
      nom: "Caverne du Loup Solitaire",
      type: ["All", "Grotte en pierre"],
      prix: 1000,
      date: "9-14 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 18,
      nom: "Terrasse Sauvage",
      type: ["All", "Environnement sauvage"],
      prix: 1100,
      date: "10-15 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 19,
      nom: "Campement du Feu Ronflant",
      type: ["All", "Feu de camp"],
      prix: 900,
      date: "11-16 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
    {
      id: 20,
      nom: "Grotte du Sabre Dentelé",
      type: ["All", "Grotte en pierre"],
      prix: 1300,
      date: "12-17 mai",
      img: grotte1,
      img2: grotte2,
      img3: grotte3,
      img4: grotte4,
    },
  ];

  const [selectedLogement, setSelectedLogement] = useState(null);

  const openModal = (logement) => {
    setSelectedLogement(logement);
  };

  const closeModal = () => {
    setSelectedLogement(null);
  };

  const logementsFiltres =
    filtreActif === "Tous"
      ? logements
      : logements.filter((logement) => logement.type.includes(filtreActif));

  return (
    <div className="tableaux">
      <div className="card">
        {logementsFiltres.length > 0 ? (
          logementsFiltres.map((logement) => (
            // Assurez-vous de transmettre openModal à vos LogementCard
            <LogementCard
              key={logement.id}
              logement={logement}
              openModal={openModal}
            />
          ))
        ) : (
          <p>Aucun logement ne correspond à ce filtre.</p>
        )}
      </div>
      {selectedLogement && (
        <Modal logement={selectedLogement} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Tableaux;
