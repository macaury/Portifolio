export function EventoMousedescrição(nameCard, text) {
    var mudarDescricao = document.querySelector(".mudarDescricao");
  
    document.querySelector(nameCard).addEventListener("mouseover", () => {
      mudarDescricao.innerHTML = text;
    });
  
    document.querySelector(nameCard).addEventListener("mouseout", () => {
      mudarDescricao.innerHTML = `*passe o cursor do mouse no card para ler*`;
    });
  }