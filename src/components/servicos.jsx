import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

import Computer from "./icons/computer";
import Design from "./icons/design";
import Phone from "./icons/phone";
import Card from "react-bootstrap/Card";

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
            <Card className="card_serv">
              <Card.Body>
                <div>
                  <Phone />
                </div>
                <Card.Title className="mb-3 text-center card_ti">
                  Sites responsivos
                </Card.Title>
                <p className="text_card">
                  Crio interações que transmitem sensação de modernidade e
                  conforto, além de chamarem a atenção do usuário.
                </p>
              </Card.Body>
            </Card>

            <Card className="card_serv" style={{ background: "white" }}>
              <Card.Body className="body_card">
                <div>
                  <Computer />
                </div>

                <Card.Title className="mb-3 text-center card_ti">
                  Desenvolvimento
                </Card.Title>
                <p className="text_card">
                  Desenvolvo sites profissionais, blogs, portfólios, landing
                  pages e e-commerce.
                </p>
              </Card.Body>
            </Card>

            <Card className="card_serv">
              <Card.Body>
                <div>
                  <Design />
                </div>
                <Card.Title className="mb-3 text-center card_ti">
                  Design moderno
                </Card.Title>
                <p className="text_card">
                  Crio interface de forma clara, objetiva e principalmente
                  intuitiva para o usuário.
                </p>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default servicos;
