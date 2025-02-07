import "./Filtre.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";

function Filtre({ filtreActif, setFiltreActif }) {
  gsap.registerPlugin(TextPlugin);

  const h2Ref = useRef(null);
  useEffect(() => {
    gsap.to(h2Ref.current, {
      duration: 2,
      text: "Nos grottes à disposition",
      delay: 2,
    });
  }, []);
  const filtres = [
    { id: 1, nom: "All", icon: "fa-solid fa-mountain" },
    { id: 2, nom: "Grotte en pierre", icon: "fa-solid fa-mountain" },
    { id: 3, nom: "Feu de camp", icon: "fa-solid fa-fire" },
    { id: 4, nom: "Lits en peaux de bête", icon: "fa-solid fa-bed" },
    { id: 5, nom: "Torches murales", icon: "fa-solid fa-lightbulb" },
    { id: 6, nom: "Chasse et cueillette", icon: "fa-solid fa-drumstick-bite" },
    { id: 7, nom: "Peinture rupestre", icon: "fa-solid fa-paint-brush" },
    { id: 8, nom: "Bain en source naturelle", icon: "fa-solid fa-water" },
    { id: 9, nom: "100% rustique", icon: "fa-solid fa-campground" },
    { id: 10, nom: "Accès par randonnée", icon: "fa-solid fa-hiking" },
    { id: 11, nom: "Environnement sauvage", icon: "fa-solid fa-tree" },
  ];

  return (
    <div className="filtre">
      <h2 ref={h2Ref}>Our caves at your disposal</h2>
      <div className="filtre__conteneur">
        {filtres.map((filtre) => (
          <button
            key={filtre.id}
            type="button"
            className={`filtre__bouton ${
              filtreActif === filtre.nom ? "active" : ""
            }`}
            onClick={() => setFiltreActif(filtre.nom)}
          >
            <i className={filtre.icon}></i>
            <span>{filtre.nom}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filtre;
