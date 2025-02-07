import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Accueil from "./Pages/Accueil";

const getDatas = async () => {
  try {
    const result = await axios.get("http://localhost:3000/api/alldatas");
    return result.data;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error : any) {
    console.error("Erreur Axios:", error);
    if (error.response) {
      console.log("Réponse de l'API :", error.response);  // Corrigé de error.res à error.response
    } else if (error.request) {
      console.log("Requête envoyée mais sans réponse", error.request);  // Corrigé de error.reqt à error.request
    } else {
      console.log("Erreur lors de la configuration de la requête", error.message);
    }
  }
};


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
        loader: getDatas
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
);