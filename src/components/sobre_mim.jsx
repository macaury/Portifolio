import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function quemSou() {
  return (
    <>
      <div id="sobre_mim" className="bg_projetos justify-content-center">
        <Container>
          <Row style={{ paddingTop: "2%" }}>
            <span
              className="titulo text-center  "
              style={{
                marginBottom: "30px",
              }}
            >
              Quem sou
            </span>
          </Row>
          <Row className="d-flex flex-row  ">
            <Col xs md="7" sm="5">
              <div className="profile_pict align-items-center"></div>
            </Col>
            <Col xs md="5" sm="7">
              <p>
                Meu nome é Macaury Carvalho.Sou amante de café, design simples e
                ouvinte de mpb.Atualmente trabalho como freenlancer de
                desenvolvimento front-end e Ui design. Desenvolvo interfaces
                modernas e de alta qualidade, concentrado em performance e
                responsividade.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default quemSou;
