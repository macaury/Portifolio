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
            <div className="subtitle" style={{color : "gray"}}>
              *Passe o mouse em cima dos icones*
            </div>
            <p id="java_Sub" className="hide">java é do caralho de bom que essa porra é</p>
            <p id="php_Sub" className="hide">php lorem lorem lorem lorem</p>
          </Col>
          <Col className="justify-content-md-center">
            <Row>
              <DiJava className="icon teste_bg"  id="Java"/>

              <FaPhp className="icon  teste_bg" id="Php"/>

              <DiCss3 className="icon teste_bg" />

              <DiHtml5 className="icon teste_bg" />
            </Row>
            <Row>
              <SiJavascript className="icon teste_bg " />
              <FaBootstrap className="icon teste_bg" />
              <FaReact className="icon teste_bg" />
              <RxFigmaLogo className="icon teste_bg" />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default tecnologias;
