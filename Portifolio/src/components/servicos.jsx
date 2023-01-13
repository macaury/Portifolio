import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function servicos() {
  return (
    <>
      <div className="bg_projetos">
        <Card.Header>
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
                  fontSize: "3rem",
                }}
              >
                Serviços
              </span>

              <Card className="card_sty">
                <Card.Body>
                  <Card.Title className="mb-2">Lorem LOrem</Card.Title>
                  <Card.Text>
                    lorem lorem lorem lorem
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card_sty ">
                <Card.Body>
                  <Card.Title className="mb-2">Lorem LOrem</Card.Title>
                  <Card.Text className="text_card">
                    <span>
                    lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card_sty">
                <Card.Body>
                  <Card.Title className="mb-2">Lorem Lorem Lorem</Card.Title>
                  <Card.Text>
                  lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </Card.Header>
      </div>
    </>
  );
}

export default servicos;
