import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/esm/Button";

import { DiGithubBadge } from "react-icons/di";

import { FaLinkedin } from "react-icons/fa";

import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const iiicon =  "../assets/icon_key.svg";

const Barra_nav = () => {
  return (
    <>
      <Navbar className="linha" bg="outline-light" expand="lg">
        <Container>
          <Navbar.Brand className="No_bg" href="#home">
            M.Carvalho
          </Navbar.Brand>
          <div>
            <Nav>
              <Nav.Link href={"#"}>
                <DiGithubBadge className="bi" />
              </Nav.Link>

              <Nav.Link href={"#"}>
                <FaLinkedin className="bi" />
              </Nav.Link>
              <Nav.Link>
                <MdDarkMode />
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Barra_nav;
