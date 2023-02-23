import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function projetos() {
  const [data, setData] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    fetch("https://macaury.github.io/Portifolio/public/projetos.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <div id="projetos" className="height_general ">
        <Container >
          <Row>
            <span
              className="titulo text-center linha"
              style={{
                marginBottom: "35px",
              }}
            >
              Projetos
            </span>

            <div className="carousel" ref={carousel}>
              {data.map((item) => {
                const { id, project, image, link, description } = item;
                return (
                  <Card className="card_sty" key={id}>
                    <Card.Title className="mb-2 card_ti">{project}</Card.Title>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                      <Card.Text>
                        <span>{description}</span>
                      </Card.Text>
                    </Card.Body>

                    <Button
                      className="mb-3 btn_projeto "
                      href={link}
                      target="_blank"
                    >
                      Visualizar Projeto
                    </Button>
                  </Card>
                );
              })}
            </div>
            <div className="buttons text-center">
              <Button className="btL" onClick={handleLeftClick}>
                <FiChevronLeft />
              </Button>
              <Button className="btR" onClick={handleRightClick}>
                <FiChevronRight />
              </Button>
            </div>
          </Row>

          <Button
            className="Botao_repo mt-4"
            href="https://github.com/macaury"
            target="_blank"
          >
            Visualizar Repositorio
          </Button>
        </Container>
      </div>
    </>
  );
}

export default projetos;
