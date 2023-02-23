import React from "react";

import Barra_nav from "./components/Barra_nav";
import Titulo from "./components/inicio";
import Tecnologias from "./components/habilidades";
import Projetos from "./components/projetos";
import Footer from "./components/footer";
import Servicos from "./components/servicos";
import Quem_sou from "./components/sobre_mim";

import "./css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show");
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

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
