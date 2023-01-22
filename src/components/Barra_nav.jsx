import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-scroll";

import { DiGithubBadge } from "react-icons/di";

import { FaLinkedin } from "react-icons/fa";

import Menu from "./icons/menu";
import Button from "react-bootstrap/Button";


const Barra_nav = () => {

  const teste = () => {
   
   
  }



  return (
    <>
      <Navbar className="Barra_navegacao linha " bg="outline-light" expand="lg">
        <Container>
          <Navbar.Brand className="No_bg" href="#">
            <div className="oak">
              <span>{"{ Oak }"}</span>
            </div>
          </Navbar.Brand>
          <Nav className="links_navbar">
            <Nav.Link>
              <span>
                <Link
                  activeClass="active"
                  to="inicio"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Inicio
                </Link>
              </span>
            </Nav.Link>
            <Nav.Link>
              <span>
                <Link
                  activeClass="active"
                  to="sobre_mim"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={400}
                >
                  sobre mim
                </Link>
              </span>
            </Nav.Link>
            <Nav.Link>
              <span>
                <Link
                  activeClass="active"
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                >
                  Projetos
                </Link>
              </span>
            </Nav.Link>
            <Nav.Link>
              <span>
                <Link
                  activeClass="active"
                  to="servicos"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  Serviços
                </Link>
              </span>
            </Nav.Link>
            <Nav.Link>
              <span>
                <Link
                  activeClass="active"
                  to="habilidades"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Habilidades
                </Link>
              </span>
            </Nav.Link>
          </Nav>
          <Nav className="social">
            <Nav.Link
              href={
                "https://github.com/macaury?tab=overview&from=2023-01-01&to=2023-01-19"
              }
            >
              <DiGithubBadge className="bi" />
            </Nav.Link>
            <Nav.Link href={"https://www.linkedin.com/in/macaury-carvalho/"}>
              <FaLinkedin className="bi" />
            </Nav.Link>
          </Nav>
          <Nav className="menu">
            <Button onClick={teste}>
              <Menu/>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Barra_nav;
