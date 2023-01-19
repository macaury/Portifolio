import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import cell_phone from "../assets/images/cell_phone.svg";
import computer from "../assets/images/computer.svg";
import design from "../assets/images/design.svg";

function servicos() {
  return (
    <>
      <div  id="servicos" className="bg_projetos">
        <Container>
          <Row
            className="justify-content-md-between habilidades"
            style={{ paddingTop: "5%", paddingBottom: "5%" }}
          >
            <span
              className="titulo_hab text-center "
              style={{
                marginBottom: "30px",
                fontWeight: "600",
                fontSize: "2.5rem",
              }}
            >
              Serviços
            </span>

            <Card className="card_serv">
              <Card.Body>
                <div>
                  <img src={cell_phone} alt="" />
                </div>
                <Card.Title className="mb-2 text-center">
                  Sites responsivos 
                </Card.Title>
                <Card.Text className="text-justify">lorem lorem lorem lorem LOremLOremLOremLOremLOrem</Card.Text>
              </Card.Body>
            </Card>

            <Card className="card_serv">
              <Card.Body>
                <div>
                  <img src={computer} alt="" />
                </div>
                <Card.Title className="mb-2 text-center">
                 Desenvolvimento
                </Card.Title>
                <Card.Text className="text_card">
                  <span>
                    lorem lorem lorem loremlorem lorem lorem loremlorem lorem
                    lorem lorem
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="card_serv">
              <Card.Body>
                <div>
                  <img src={design} alt="" />
                </div>
                <Card.Title className="mb-2 text-center">
                  Design moderno
                </Card.Title>
                <Card.Text>

                  lorem lorem lorem loremlorem lorem lorem loremlorem lorem
                  lorem loremlorem lorem lorem lorem
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default servicos;
