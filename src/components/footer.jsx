import React from "react";

import Container from "react-bootstrap/esm/Container";

function footer() {
  return (
    <>
      <div className="footer text-center ">
        <Container>
          <a
            href="https://github.com/macaury"
            target={"_blank"}
            style={{ textDecoration: "none" }}
          >
            &copy; 2023 Macaury Carvalho
            {" | Powered by "}
            <span style={{ color: "red" }}>{"{ Oak }"}</span>
          </a>
        </Container>
      </div>
    </>
  );
}

export default footer;
