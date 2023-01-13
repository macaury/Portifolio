export function EventoMousedescricao(nameCard,text) {
    var mudarDescricao = document.querySelector(".mudarDescricao");
  
    document.querySelector(nameCard).addEventListener("mouseover", () => {
      mudarDescricao.innerHTML = text;
    });
  
    document.querySelector(nameCard).addEventListener("mouseout", () => {
      mudarDescricao.innerHTML = '*Passe o mouse em cima dos icones*';

    });
  }
  
