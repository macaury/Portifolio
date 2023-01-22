import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import Phone from "./icons/phone";
import Computer from "./icons/computer";
import Design from "./icons/design";

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
              <div>
                <Phone />
              </div>
              <Card.Title className="mb-3 text-center card_ti">
                Sites responsivos
              </Card.Title>
              <Card.Text className="text-justify">
                Crio interações que transmitem sensação de modernidade e
                conforto, além de chamarem a atenção do usuário.
              </Card.Text>
            </Card>

            <Card className="card_serv" style={{ background: "white" }}>
              <div>
                <Computer />
              </div>
              <Card.Title className="mb-3 text-center card_ti">
                Desenvolvimento
              </Card.Title>
              <Card.Text className="text_card">
                <span>
                  Desenvolvo sites profissionais, blogs, portfólios, landing
                  pages e e-commerce.
                </span>
              </Card.Text>
            </Card>

            <Card className="card_serv">
              <div>
                <Design />
              </div>
              <Card.Title className="mb-3 text-center card_ti">
                Design moderno
              </Card.Title>
              <Card.Text>
                Crio interface de forma clara, objetiva e principalmente
                intuitiva para o usuário.
              </Card.Text>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default servicos;
