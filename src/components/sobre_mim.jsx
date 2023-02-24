import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";

import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

function quemSou() {
  return (
    <>
      <div id="sobre_mim" className=" justify-content-center ">
        <Container>
          <Row style={{ paddingTop: "2%" }}>
            <span
              className="titulo text-center  "
              style={{
                marginBottom: "30px",
              }}
            >
              Quem sou
            </span>
          </Row>
          <Row className=" ">
            <Col xs md="7" sm="5">
              <div className="text-center">
                <div className="profile_pict " />
                <img
                  src="https://github.com/macaury/Portifolio/blob/master/src/components/assets/img.png?raw=true"
                  alt="img Macaury Carvalho"
                />
              </div>
            </Col>
            <Col xs md="5" sm="7">
              <p>
                Meu nome é Macaury Carvalho.Atualmente trabalho como freenlancer
                de desenvolvimento front-end e Ui design. Desenvolvo interfaces
                modernas e de alta qualidade, focado em performance e
                responsividade.
              </p>
              <div className="text-center">
                <a
                  href="https://www.linkedin.com/in/macaury-carvalho/"
                  target="_blank"
                >
                  <FaLinkedin className=" mr-4" />
                </a>
                <a href="mailto:macaurydevs@gmail.com " target="_blank">
                  <SiGmail className=" mr-4" />
                </a>
                <a
                  href="https://github.com/macaury?tab=overview&from=2023-01-01&to=2023-01-19"
                  target="_blank"
                >
                  <DiGithubBadge className="mr-4" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default quemSou;
