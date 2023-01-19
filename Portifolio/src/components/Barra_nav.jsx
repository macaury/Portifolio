import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/esm/Button";

import { DiGithubBadge } from "react-icons/di";

import { FaLinkedin } from "react-icons/fa";

const Barra_nav = () => {
  return (
    <>
      <Navbar className="Barra_navegacao linha" bg="outline-light" expand="lg">
        <Container>
          <Navbar.Brand className="No_bg" href="#home">
            M.Carvalho
          </Navbar.Brand>
          <Nav>
            <Nav.Link href={"#"}>
              <span>inicio</span>
            </Nav.Link>
            <Nav.Link href={"#"}>
              <span> Sobre mim </span>
            </Nav.Link>
            <Nav.Link href={"#projetos"}>
              <span>projetos</span>
            </Nav.Link>
            <Nav.Link href={"#"}>
              <span>Habilidades</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href={"#"}>
              <DiGithubBadge className="bi" />
            </Nav.Link>
            <Nav.Link href={"#"}>
              <FaLinkedin className="bi" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Barra_nav;
