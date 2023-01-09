import React from "react";

import Barra_nav from "./components/Barra_nav";
import Titulo from "./components/titulo";
import Tecnologias from "./components/tecnologias";
import Projetos from "./components/projetos";
import Footer from "./components/footer"

import "./css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <div className="">
        <Barra_nav />
        <Titulo/>
        <Tecnologias/>
        <Projetos/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
