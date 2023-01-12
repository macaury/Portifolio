import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { DiJava } from "react-icons/di";

import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";

import { SiJavascript } from "react-icons/si";

import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RxFigmaLogo } from "react-icons/rx";

function tecnologias() {

  return (
    <>
      <Container>
        <Col>
          <span className="titulo_hab ">Habilidades</span>
        </Col>
        <Row className="justify-content-md-between">
          <Col>
            <p className="mudarDescricao" style={{color : "gray"}}>
              *Passe o mouse em cima dos icones*
            </p>
          </Col>
          <Col className="justify-content-md-center">
            <Row>
              <DiJava className="java icon teste_bg"  />

              <FaPhp className="php icon  teste_bg" />

              <DiCss3 className="css icon teste_bg" />

              <DiHtml5 className="html icon teste_bg" />
            </Row>
            <Row>
              <SiJavascript className="javascript icon teste_bg " />
              <FaBootstrap className="bootstrap icon teste_bg" />
              <FaReact className="react icon teste_bg" />
              <RxFigmaLogo className="figma icon teste_bg" />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default tecnologias;
