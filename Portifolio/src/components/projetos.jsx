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
              <Card.Text className="text_card">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
                      <Button className="mb-3" variant="dark">
              Preview
            </Button>
          </Card>

          <Card className="card_sty">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
                      <Button className="mb-3" variant="dark">
              Preview
            </Button>
          </Card>

          <Card className="card_sty">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
                      <Button className="mb-3" variant="dark">
              Preview
            </Button>
          </Card>
        </Row>

        <Row className="justify-content-md-between">
          <Card className="card_sty">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
                      <Button className="mb-3" variant="dark">
              Preview
            </Button>
          </Card>

          <Card className="card_sty">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text  className="justify">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
                      <Button className="mb-3" variant="dark">
              Preview
            </Button>
          </Card>

          <Card className="card_sty">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button className="mb-3" variant="primary">
              Go somewhere
            </Button>
                      <Button className="mb-3" variant="dark">
              Preview
            </Button>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default projetos;
