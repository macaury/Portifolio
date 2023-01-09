import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function projetos() {
  return (
    <>
      <Container>
        <span className="titulo linha">Projetos</span>

        <Row className="justify-content-md-between">
          <Card className="card_sty ">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <span className="text_card">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
          </Card>

          <Card className="card_sty">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <span>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
          </Card>

          <Card className="card_sty">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <span>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
          </Card>
        </Row>

        <Row className="justify-content-md-between">
          <Card className="card_sty">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <span>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
          </Card>

          <Card className="card_sty">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <span className="justify">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
          </Card>

          <Card className="card_sty">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <span>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default projetos;
