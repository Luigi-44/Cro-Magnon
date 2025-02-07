// Modal.jsx
import React from "react";
import "./Modal.css"; // Ajoutez ce fichier CSS pour styliser la modal

const Modal = ({ logement, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={logement.img} alt={logement.nom} />

        <div className="text">
          <h2>{logement.nom}</h2>
          <p>{logement.type}</p>
          <p>{logement.prix} €</p>
          <p>{logement.date}</p>
          <button type="button">Réserver</button>
        </div>

        <div className="card-profil">
          <img src={logement.img2} alt="RBNB Grotte" />
          <img src={logement.img3} alt="RBNB Grotte" />
          <img src={logement.img4} alt="RBNB Grotte" />
        </div>
        <button className="Button-close" type="button" onClick={closeModal}>
          𝕷
        </button>
      </div>
    </div>
  );
};

export default Modal;
