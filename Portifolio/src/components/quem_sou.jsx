import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


function quemSou() {

  return (
    <>
      <Container>
        <Row style={{ paddingTop: "5%", paddingBottom: "5%" }}>
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
          
          </Col>
          <Col>
            <div className="">
              Meu nome é Macaury Carvalho, atualmente trabalho como freenlancer
              de desenvolvimento front-end. Crio sites focado em
              responsividade,desempenho, aliado a um design elegante e moderno{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default quemSou;
