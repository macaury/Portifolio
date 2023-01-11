import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { DiJava } from "react-icons/di";

function projetos() {
  return (
    <>
      <Card>
        <Card.Header >
          <Container>
            <Row
              className="justify-content-md-between habilidades"
              style={{ paddingTop: "5%" , paddingBottom : "5%"}}
            >
              <span className="titulo_hab text-center " style={{marginBottom:"10px" ,fontWeight: "600",
  fontSize: "3rem"}}>Projetos</span>




              <Card className="card_sty " style={{ border: "solid 0.5px red" }}>
                <Card.Body>
                  <Card.Title>Karowara</Card.Title>
                  <Card.Text className="text_card">
                    <span>
                      software criado para auxiliar os professores no ensino de
                      noções de algoritmo, e facilitar a visualização de
                      estruturas abstratas básicas.
                    </span>
                    <Row className="text-center">
                      <span style={{ color: "red" }}>Desenvolvido em :</span>
                      <span
                        style={{
                          border: "solid 2px red",
                          borderRadius: "50px",
                          width: "70px",
                          marginTop: "5px",
                          marginLeft: "40%",
                        }}
                      >
                        Java
                      </span>
                    </Row>
                  </Card.Text>
                </Card.Body>
                <Button className="mb-3" variant="primary">
                  Ver no GitHub
                </Button>
                <Button className="mb-3" variant="dark">
                  Preview
                </Button>
              </Card>

              <Card className="card_sty">
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Button className="mb-3" variant="primary">
                  Ver no GitHub
                </Button>
                <Button className="mb-3" variant="dark">
                  Preview
                </Button>
              </Card>

              <Card className="card_sty">
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Button className="mb-3" variant="primary">
                  Ver no GitHub
                </Button>
                <Button className="mb-3" variant="dark">
                  Preview
                </Button>
              </Card>
            </Row>
          </Container>
        </Card.Header>
      </Card>
    </>
  );
}

export default projetos;
