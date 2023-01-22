import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

import {Design,Computer,Phone} from "./icons"
import { Card, Col } from "react-bootstrap";

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
              <Card className="card_serv">
                <div>
                  <Phone />
                </div>
                <Card.Title className="mb-3 text-center card_ti">
                  Sites responsivos
                </Card.Title>
                <p className="text-justify">
                  Crio interações que transmitem sensação de modernidade e
                  conforto, além de chamarem a atenção do usuário.
                </p>
              </Card>
            </Col>
            <Col>
              <div className="card_serv" style={{ background: "white" }}>
                <div>
                  <Computer />
                </div>
                <Card.Title className="mb-3 text-center card_ti">
                  Desenvolvimento
                </Card.Title>
                <p className="text_card">
                  <span>
                    Desenvolvo sites profissionais, blogs, portfólios, landing
                    pages e e-commerce.
                  </span>
                </p>
              </div>
            </Col>
            <Col>
              <Card className="card_serv">
                <div>
                  <Design />
                </div>
                <Card.Title className="mb-3 text-center card_ti">
                  Design moderno
                </Card.Title>
                <p>
                  Crio interface de forma clara, objetiva e principalmente
                  intuitiva para o usuário.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default servicos;
