import { useLoaderData } from "react-router-dom";
import Filtre from "../Components/Filtre/Filtre";
import Tableux from "../Components/Tableaux/Tableux";
import { useState } from "react";


function Accueil() {

  const allDatas = useLoaderData();
  console.info("result : ", allDatas)
	const [filtreActif, setFiltreActif] = useState("All");
	return (
		<>
			<Filtre filtreActif={filtreActif} setFiltreActif={setFiltreActif} />
			<Tableux filtreActif={filtreActif} logement={allDatas} />
		</>
	);
}

export default Accueil;
