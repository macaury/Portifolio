import React from "react";
import Col from "react-bootstrap/esm/Col";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function titulo() {
  return (
    <>
      <Container className="justify-content-between">
        <Row className="  justify-content-md-between">
          <div className="titulo">{"<Coder>"}</div>
          <Col>
            <div className="titulo">
              Desenvolvedor Front-end com foco simplicidade,elegancia e
              eficiencia.
            </div>
            <cite>
              {" "}
              Permita-se rolar o scroll do mouse para saber mais sobre mim{" "}
            </cite>
          </Col>
          <Col>dkakldajldajdajldajldajldka</Col>
        </Row>
      </Container>
    </>
  );
}

export default titulo;
