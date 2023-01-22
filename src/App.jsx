import React from "react";

import "./assets/mudarDescricao";
import "./assets/EventoMousedescricao";

import Barra_nav from "./components/Barra_nav";
import Titulo from "./components/inicio";
import Tecnologias from "./components/habilidades";
import Projetos from "./components/projetos";
import Footer from "./components/footer";
import Servicos from "./components/servicos";
import Quem_sou from "./components/sobre_mim";

import "./css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Barra_nav />
      <Titulo />
      <Quem_sou />
      <Projetos />
      <Servicos />
      <Tecnologias />
      <Footer />
    </>
  );
}

export default App;
