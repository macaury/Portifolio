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
      <div id="projetos" className="height_general ">
        <Container>
          <Row className="justify-content-md-between">
            <span
              className="titulo_hab text-center linha"
              style={{
                marginBottom: "35px",
                fontWeight: "600",
                fontSize: "2.5rem",
              }}
            >
              Projetos
            </span>
            <Col>
              <Card className="card_sty">
                <Card.Body>
                  <Card.Title className="mb-2 card_ti">QuiZztech</Card.Title>
                  <Card.Text>
                    <span>
                      Quiz sobre T.I. Possui tres niveis de dificuldade. Feito
                      em ReactJS,html e bootstrap.
                    </span>
                  </Card.Text>
                </Card.Body>

                <Button
                  className="mb-3 visu_proj "
                  href="https://pedrocslucas.github.io/quizz-tech-site/"
                  target="_blank"
                >
                  Visualizar Projeto
                </Button>
              </Card>
            </Col>
            <Col>
              <Card className="card_sty">
                <Card.Body className="body_card">
                  <Card.Title className="mb-2 card_ti">Karowara</Card.Title>
                  <Card.Text>
                    <span>
                      software criado para auxiliar os professores no ensino de
                      noções de algoritmo, e facilitar a visualização de
                      estruturas abstratas básicas. Desenvolvido totalmente em
                      Java.
                    </span>
                  </Card.Text>
                </Card.Body>
                <Button
                  className="mb-3 visu_proj "
                  variant="dark"
                  style={{ with: "100%" }}
                >
                  Visualizar Projeto
                </Button>
              </Card>
            </Col>

            <Col>
              <Card className="card_sty">
                <Card.Body className="body_card">
                  <Card.Title className="mb-2 card_ti">
                    Ranking Movies
                  </Card.Title>
                  <Card.Text>
                    <span>
                      Aplicação web para pesquisar informações de filmes. É
                      possivel saber a classificação da critica, receita
                      bilheteria, capital investido, tempo de exibição da
                      pelicula e a sinopse. Desenvolvido com ReactJs,Html,Css e
                      Vite.
                    </span>
                  </Card.Text>
                </Card.Body>
                <Button className="mb-3 visu_proj " variant="dark">
                  Visualizar Projeto
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default projetos;
