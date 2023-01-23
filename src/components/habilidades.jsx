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


import EventoMousedescricao from "../assets/EventoMousedescricao"

function tecnologias() {

  return (
    <>
      <div id="habilidades" className="height_general">
        <Container>
          <Row className="justify-content-md-between">
            <Col xl md="3" className="habilidade_text">
              <span className="titulo_hab linha" style={{ fontSize: "2.5rem" }}>
                Habilidades
              </span>

              <p className="mudarDescricao" style={{ color: "gray" }}>
                *Passe o mouse em cima dos icones*
              </p>
            </Col>
            <Col xl md="9" className="habilidade_group">
              <div className="icon_habilidade">
                <Row className="d-flex justify-content-between">
                  <Col md="3" className="hab">
                    <DiJava id="java"  onMouseOver={EventoMousedescricao} />
                  </Col>

                  <Col md="3" className="hab">
                    <FaPhp id="php"  onMouseOver={EventoMousedescricao} />
                  </Col>
                  <Col md="3" className="hab">
                    <DiCss3 id="css"  onMouseOver={EventoMousedescricao}  />
                  </Col>
                  <Col md="3" className="hab">
                    <DiHtml5 id="html" onMouseOver={EventoMousedescricao} />
                  </Col>
                </Row>
                <Row className="d-flex justify-content-between">
                  <Col md="3" className="hab ">
                    <SiJavascript id="javascript" />
                  </Col>
                  <Col md="3" className="hab">
                    <FaBootstrap id="bootstrap" />
                  </Col>
                  <Col md="3" className="hab">
                    <FaReact id="react" />
                  </Col>

                  <Col md="3" className="hab">
                    <RxFigmaLogo id="figma" />
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
