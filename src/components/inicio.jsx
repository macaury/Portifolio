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
          <Row className="  justify-content-md-between">
            <div
              className="coder text-center"
              style={{ marginTop: "30%", marginBottom: "5px" }}
            >
              <span>{"<Coder>"}</span>
            </div>
            <div className="  text-center ">
              <div className="titulo ">
                <p>
                  Desenvolvedor Front-end com foco em
                  <span> simplicidade,elegancia e eficiencia. </span>
                </p>
              </div>
              <Row>
                <cite className=" cite_scroll text-center">
                  - Permita-se e gire o scroll do mouse para saber mais sobre
                  mim
                </cite>
              </Row>
            </div>
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
