import React from "react";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function footer() {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <span>
                <a
                  href="https://github.com/macaury"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  &copy; 2023 Macaury Carvalho
                </a>
              </span>
            </Col>
            <Col>
              <span>{" Powered by {}"}</span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default footer;
