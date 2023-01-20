import React from "react";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import tree_oak  from "../icons/tree_oak_footer.svg";

function footer() {
  return (
    <>
      <div className="footer">
        <Container>
          <Row className=" justify-content-md-between">
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
            <Col className="oak">
              <div>
                {" Powered by "} 
                <span> 
                  {"{ Oak }"}
                  </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default footer;
