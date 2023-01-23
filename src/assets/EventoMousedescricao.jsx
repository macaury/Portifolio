import react from "react";

const Descricao = {
  Html: "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.",
  Css: "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.",
  javascript:
    "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
  Bootstrap:
    "Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.",
  React:
    "ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
  Php: "PHP é uma linguagem de programação voltada para o desenvolvimento de aplicações para a web e para criar sites, favorecendo a conexão entre os servidores e a interface do usuário.",
  Figma:
    "Figma é uma ferramenta de design utilizada para realizar protopipação de aplicativos,mobile,web e desktop",
  Java: "Java É uma linguagem de programação rápida, segura e confiável para codificar tudo, desde aplicações móveis e software empresarial até aplicações de big data e tecnologias do servidor.",
};

export default function EventoMousedescricao(e) {
  const name = e.target.id;

  var mudarDescricao = document.querySelector(".mudarDescricao");

  document.getElementById(name).addEventListener("mouseover", () => {
    mudarDescricao.innerHTML = Descricao.Figma;
  });

  document.getElementById(name).addEventListener("mouseout", () => {
    mudarDescricao.innerHTML = "*Passe o mouse em cima dos icones*";
  });
}
