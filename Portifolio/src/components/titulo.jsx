import React from "react";
import Container from "react-bootstrap/esm/Container";

function titulo() {
  return (
    <>
      <Container>
        <div className="">
          Olá, meu nome é <br />
          <span className="titulo">Macaury Carvalho</span>
        </div>
        <div className="">Bem-vindo ao meu Portifólio</div>
      </Container>
    </>
  );
}

export default titulo;
