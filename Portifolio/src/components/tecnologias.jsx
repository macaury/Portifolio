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
          <span className="titulo_hab linha">Habilidades</span>
        </Col>
        <Row className="justify-content-md-between">
          <Col className="justify-content-md-center">
            <Row>
              <div className="">
                Olá, meu nome é <br />
                <span className="titulo">Macaury Carvalho</span>
              </div>
              <div className="">Bem-vindo ao meu Portifólio</div>
            </Row>
          </Col>
          <Col className="justify-content-md-center">
            <Row>
              <DiJava className="icon teste_bg" />
              
              <FaPhp className="icon  teste_bg" />
              
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
