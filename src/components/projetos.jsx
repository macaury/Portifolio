import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function projetos() {
  return (
    <>
      <div id="projetos" className="height_general ">
        <Container>
          <Row className="justify-content-md-between">
            <span
              className="titulo text-center linha"
              style={{
                marginBottom: "35px",
              }}
            >
              Projetos
            </span>

            <Card className="card_sty">
              <Card.Title className="mb-2 card_ti">Green Panther</Card.Title>
              <Card.Img variant="top" src="https://user-images.githubusercontent.com/64115668/216777142-985ed6c0-ee51-4cdb-95b7-290c0b2350d0.png" />
              <Card.Body>
                <Card.Text>
                  <span>Desenvolvido com ReactJs,Html,Css e Vite.</span>
                </Card.Text>
              </Card.Body>

              <Button
                className="mb-3 btn_projeto "
                href="https://macaury.github.io/Green-Panther/"
                target="_blank"
              >
                Visualizar Projeto
              </Button>
            </Card>

            <Card className="card_sty">
              <Card.Body>
                <Card.Title className="mb-2 card_ti">Karowara</Card.Title>
                <Card.Text>
                  <span>
                    software criado para auxiliar os professores no ensino de
                    noções de algoritmo, e facilitar a visualização de
                    estruturas abstratas básicas. Desenvolvido totalmente em
                    Java - Desktop.
                  </span>
                </Card.Text>
              </Card.Body>
              <Button
                className="mb-3 btn_projeto"
                href="https://github.com/macaury/karowara"
                target="_blank"
              >
                Visualizar Projeto
              </Button>
            </Card>

            <Card className="card_sty">
              <Card.Title className="mb-2 card_ti">Ranking Movies</Card.Title>
              <Card.Img
                variant="top"
                src="https://user-images.githubusercontent.com/64115668/197311438-a9878d71-4da1-4b57-8b83-2451ff11c253.jpeg"
              />
              <Card.Body>
                <Card.Text>
                  <span>Desenvolvido com API:The Movie Db,ReactJs,Html,Css,Vite.</span>
                </Card.Text>
              </Card.Body>
              <Button
                className="mb-3 btn_projeto"
                href="https://github.com/macaury/ranking_movies"
                target="_blank"
              >
                Visualizar Projeto
              </Button>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default projetos;
