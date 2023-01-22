import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import img from "./icons/img.png";

function quemSou() {
  return (
    <>
      <div id="sobre_mim" className="bg_projetos">
        <Container>
          <Row style={{ paddingTop: "2%" }}>
            <span
              className="titulo_hab text-center "
              style={{
                marginBottom: "30px",
                fontWeight: "600",
                fontSize: "2.5rem",
              }}
            >
              Quem sou
            </span>
          </Row>
          <Row className="d-flex">
            <Col xs md="7">
              <div className="">
            

                <img
                  src={img}
                  alt="macaury_carvalho"
                  style={{ with: "20rem", height: "20rem" }}
                />
              </div>
            </Col>
            <Col xs md="5">
              <p
                
              >
                Meu nome é Macaury Carvalho, atualmente trabalho como
                freenlancer de desenvolvimento front-end e design Ui/Ux. Crio sites focado em
                responsividade,desempenho, aliado a um design elegante e
                moderno.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default quemSou;
