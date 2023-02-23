import React from "react";
import Col from "react-bootstrap/esm/Col";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import { CiBezier } from "react-icons/ci";

import { Typewriter } from "react-simple-typewriter";



function titulo() {
  return (
    <>
      <div id="inicio" style={{ paddingBottom: "2%" }}>
        <Container>
          <Row className="justify-content-md-center text-center">
            <div className="align-box">
              <div className="coder text-center">
                <span>{"<Coder>"}</span>
              </div>
              <Col>
                <div className="titulo_inicio ">
                  <p>
                    Desenvolvedor Front-end com foco em {" "}
                    <Typewriter
                      words={["Simplicidade", "Elegância", "Eficiência"]}
                      loop={0}
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={80}
                      delaySpeed={1000}
                    />
                  </p>
                </div>
                <Row>
                  <cite>
                    - Permita-se e gire o scroll do mouse para saber mais sobre
                    mim
                  </cite>
                </Row>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default titulo;