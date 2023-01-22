import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

import Phone from "./icons/phone";
import Computer from "./icons/computer";
import Design from "./icons/design";
import { Col } from "react-bootstrap";

function servicos() {
  return (
    <>
      <div id="servicos">
        <Container>
          <Row
            className="justify-content-md-between habilidades"
            style={{ paddingTop: "5%" }}
          >
            <span
              className="titulo_hab text-center "
              style={{
                marginBottom: "50px",
                fontWeight: "600",
                fontSize: "2.5rem",
              }}
            >
              Serviços
            </span>
            <Col>
              <div className="card_serv">
                <div>
                  <Phone />
                </div>
                <h5 className="mb-3 text-center card_ti">
                  Sites responsivos
                </h5>
                <p className="text-justify">
                  Crio interações que transmitem sensação de modernidade e
                  conforto, além de chamarem a atenção do usuário.
                </p>
              </div>
            </Col>
            <Col>
              <div className="card_serv" style={{ background: "white" }}>
                <div>
                  <Computer />
                </div>
                <h5 className="mb-3 text-center card_ti">
                  Desenvolvimento
                </h5>
                <p className="text_card">
                  <span>
                    Desenvolvo sites profissionais, blogs, portfólios, landing
                    pages e e-commerce.
                  </span>
                </p>
              </div>
            </Col>
            <Col>
              <div className="card_serv">
                <div>
                  <Design />
                </div>
                <h5 className="mb-3 text-center card_ti">
                  Design moderno
                </h5>
                <p>
                  Crio interface de forma clara, objetiva e principalmente
                  intuitiva para o usuário.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default servicos;
