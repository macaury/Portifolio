import React from "react";
import Container from "react-bootstrap/esm/Container";


import { DiJava} from "react-icons/di";
import { DiPhp} from "react-icons/di";
import { DiCss3} from "react-icons/di";
import { DiHtml5} from "react-icons/di";

import { SiJavascript } from "react-icons/si";

import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

function tecnologias() {
  return (
    <>
      <Container>
        <span className="titulo linha">Tecnológias</span>
        <div>

        <DiJava className="icon"/> 
        <DiPhp className="icon"/>
        <DiCss3 className="icon"/>
        <DiHtml5 className="icon"/>
        <SiJavascript className="icon"/>
        <FaBootstrap className="icon"/>
        <FaReact className="icon"/>
        <FaFigma className="icon"/>
        </div>


        
      </Container>
    </>
  );
}

export default tecnologias;
