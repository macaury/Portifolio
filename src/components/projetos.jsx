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
              <Card.Body>
                <Card.Title className="mb-2 card_ti">Green Panther</Card.Title>
                <Card.Text>
                  <span>
                    E-commerce feito com reactjs,bootstrap.
                  </span>
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
                    Java.
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
              <Card.Body>
                <Card.Title className="mb-2 card_ti">Ranking Movies</Card.Title>
                <Card.Text>
                  <span>
                    Aplicação web para pesquisar informações de filmes. É
                    possivel saber a classificação da critica, receita
                    bilheteria, capital investido, tempo de exibição da pelicula
                    e a sinopse. Desenvolvido com ReactJs,Html,Css e Vite.
                  </span>
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
