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
                  marginBottom: "10px",
                  fontWeight: "600",
                  fontSize: "3rem",
                }}
              >
                Projetos
              </span>

              <Card className="card_sty">
                <Card.Body>
                  <Card.Title className="mb-2">QuiZztech</Card.Title>
                  <Card.Text>
                    Quiz sobre T.I. Possui tres niveis de dificuldade. Feito em
                    ReactJS,html e bootstrap.
                  </Card.Text>
                </Card.Body>

                <Button
                  className="mb-3"
                  variant="dark"
                  href="https://pedrocslucas.github.io/quizz-tech-site/"
                  target="_blank"
                >
                  Visualizar Projeto
                </Button>
                <Button
                  className="mb-3"
                  variant="primary"
                  href="https://github.com/macaury/quiz-tech/tree/master"
                  target="_blank"
                >
                  Ver no GitHub
                </Button>
              </Card>

              <Card className="card_sty ">
                <Card.Body>
                  <Card.Title className="mb-2">Karowara</Card.Title>
                  <Card.Text className="text_card">
                    <span>
                      software criado para auxiliar os professores no ensino de
                      noções de algoritmo, e facilitar a visualização de
                      estruturas abstratas básicas. Desenvolvido totalmente em
                      Java.
                    </span>
                  </Card.Text>
                </Card.Body>
                <Button className="mb-3" variant="dark">
                  Visualizar Projeto
                </Button>
                <Button className="mb-3" variant="primary">
                  Ver no <span style={{ color: "black" }}>GitHub</span>
                </Button>
              </Card>

              <Card className="card_sty">
                <Card.Body>
                  <Card.Title className="mb-2">Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Button className="mb-3" variant="dark">
                  Visualizar Projeto
                </Button>
                <Button
                  className="mb-3"
                  variant="primary"
                  href="https://github.com/macaury/ranking_movies#Como-rodar-o-projeto-na-sua-maquina"
                  target="_blank"
                >
                  Ver no GitHub
                </Button>
              </Card>
            </Row>
          </Container>
        </Card.Header>
      </div>
    </>
  );
}

export default projetos;
