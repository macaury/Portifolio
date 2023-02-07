import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-scroll";

import { DiGithubBadge } from "react-icons/di";

import { FaLinkedin } from "react-icons/fa";

import Menu from "./icons/menu";

import { GrClose } from "react-icons/gr";

import Button from "react-bootstrap/Button";

const Barra_nav = () => {
  const [isMobile, setMobile] = useState(false);

  return (
    <>
      <Navbar className="Barra_navegacao linha" sticky="top" bg="outline-light" expand="lg">
        <Container>
          <Navbar.Brand className="No_bg" href="#">
            <div className="logo">
              <span>{"{ Oak }"}</span>
            </div>
          </Navbar.Brand>
          <Nav className={isMobile ? "links_navbar_mobile" : "links_navbar"}>
            <Link
              className="link_inicio"
              activeClass="active"
              to="inicio"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li>Inicio</li>
            </Link>
            <Link
              className="link_sobre_mim"
              activeClass="active"
              to="sobre_mim"
              spy={true}
              smooth={true}
              offset={-90}
              duration={400}
            >
              <li>sobre mim</li>
            </Link>
            <Link
              className="link_projetos"
              activeClass="active"
              to="projetos"
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
            >
              <li>Projetos</li>
            </Link>
            <Link
              className="link_servicos"
              activeClass="active"
              to="servicos"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <li>Serviços</li>
            </Link>
            <Link
              className="link_habilidades"
              activeClass="active"
              to="habilidades"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li>Habilidades</li>
            </Link>
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
          <Nav >
            <Button className="mobile_menu bg-transparent"  onClick={() => setMobile(!isMobile)}>{isMobile ? <GrClose /> : <Menu />}</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Barra_nav;
/*

*/
