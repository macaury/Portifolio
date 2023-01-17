import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import img from '../assets/images/img.png';

function quemSou() {
  return (
    <>
      <div className="bg_projetos">
        <Container>
          <Row style={{ paddingTop: "5%" }}>
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
          <Row className="justify-content-md-between habilidades">
            <Col>
            <img src={img} alt="" />
            </Col>
            <Col>
              <div>
                Meu nome é Macaury Carvalho, atualmente trabalho como
                freenlancer de desenvolvimento front-end. Crio sites focado em
                responsividade,desempenho, aliado a um design elegante e moderno{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default quemSou;
