import "./Filtre.css";
import { useState } from "react";

function Filtre() {
  const [active, setActive] = useState("Grotte en pierre");

  const filtres = [
    { id: 1, nom: "Grotte en pierre", icon: "fa-solid fa-mountain" },
    { id: 2, nom: "Feu de camp", icon: "fa-solid fa-fire" },
    { id: 3, nom: "Lits en peaux de bête", icon: "fa-solid fa-bed" },
    { id: 4, nom: "Torches murales", icon: "fa-solid fa-lightbulb" },
    { id: 5, nom: "Chasse et cueillette", icon: "fa-solid fa-drumstick-bite" },
    { id: 6, nom: "Peinture rupestre", icon: "fa-solid fa-paint-brush" },
    { id: 7, nom: "Bain en source naturelle", icon: "fa-solid fa-water" },
    { id: 8, nom: "100% rustique", icon: "fa-solid fa-campground" },
    { id: 9, nom: "Accès par randonnée", icon: "fa-solid fa-hiking" },
    { id: 10, nom: "Environnement sauvage", icon: "fa-solid fa-tree" },
  ];

  return (
    <div className="filtre">
      <h2>Filtrer par type de parcours</h2>
      <div className="filtre__conteneur">
        {filtres.map((filtre) => (
          <div className="filtre__item" key={filtre.id}>
            <button
              type="button"
              className={`filtre__bouton ${
                active === filtre.nom ? "active" : ""
              }`}
              onClick={() => setActive(filtre.nom)}
            >
              <span>{filtre.nom}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filtre;
