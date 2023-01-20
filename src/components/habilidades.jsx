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

import "../assets/mudarDescricao";

function tecnologias() {
  return (
    <>
      <div id="habilidades" className="height_general">
        <Container>
          <Row className="justify-content-md-between">
            <Col>
              <span className="titulo_hab linha" style={{ fontSize: "2.5rem" }}>
                Habilidades
              </span>

              <p className="mudarDescricao" style={{ color: "gray" }}>
                *Passe o mouse em cima dos icones*
              </p>
            </Col>
            <Col className="">
              <div className="icon_habilidade">
                <Row>
                  <Col xl md="3">
                    <DiJava className="java " />
                  </Col>

                  <Col xl md="3">
                    <FaPhp className="php  " />
                  </Col>
                  <Col xl md="3">
                    <DiCss3 className="  " id="css" />
                  </Col>

                  <Col xl md="3">
                    <DiHtml5 className="  " id="html" />
                  </Col>
                </Row>
                <Row>
                  <Col xl md="3">
                    <SiJavascript className="javascript   " />
                  </Col>
                  <Col xl md="3">
                    <FaBootstrap className="bootstrap  " />
                  </Col>
                  <Col xl md="3">
                    <FaReact className="react  " />
                  </Col>

                  <Col xl md="3">
                    <RxFigmaLogo className="figma  " />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default tecnologias;
