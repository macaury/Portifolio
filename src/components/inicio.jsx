import React from "react";
import Col from "react-bootstrap/esm/Col";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import { CiBezier } from "react-icons/ci";

function titulo() {
  return (
    <>
      <div id="inicio"  style={{paddingBottom: "2%"}}>
        <Container >
          <Row className="justify-content-md-center text-center">
            <div
              className="coder text-center"
              style={{ marginTop: "25%", marginBottom: "5px" }}
            >
              <span>{"<Coder>"}</span>
            </div>
            <Col>
              <div className="titulo_inicio ">
                <p>
                  Desenvolvedor Front-end com foco em
                  <span > Simplicidade,Elegância e Eficiência.</span>
                </p>
              </div>
              <Row>
                <cite >
                  - Permita-se e gire o scroll do mouse para saber mais sobre
                  mim
                </cite>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default titulo;

/*

<Col>
            <CiBezier
              style={{
                width: "25rem",
                height: "25rem",
                marginLeft: "35rem",
                marginTop: "2rem",
                color: "red",
                transform: " rotate(-90deg)",
                display : "block"
              }}
            />
          </Col>

*/
