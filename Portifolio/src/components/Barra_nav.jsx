import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

const Barra_nav = () => {
  return (
    <>
      <Navbar className="linha" bg="outline-light" expand="lg">
        <Container>
          <Navbar.Brand className="No_bg" href="#home">
            Home
          </Navbar.Brand>
          <div>
            <Nav>
              <Nav.Link href={"#"} >
                <DiGithubBadge className="bi" />
              </Nav.Link>

              <Nav.Link href={"#"}>
                <FaLinkedin className="bi" />
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Barra_nav;
