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
        <span className="titulo_hab linha">Habilidades</span>
        <Row className="justify-content-md-center">
          <DiJava className="icon" />
          <FaPhp className="icon" />
          <DiCss3 className="icon" />
          <DiHtml5 className="icon" />
        </Row>
        <Row className="justify-content-md-center">
          <SiJavascript className="icon" />
          <FaBootstrap className="icon" />
          <FaReact className="icon" />
          <RxFigmaLogo className="icon" />
        </Row>
      </Container>
    </>
  );
}

export default tecnologias;
