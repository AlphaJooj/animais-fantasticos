//FUNÇÃO PRA ADD SCROLL SUAVE AO CLICAR NOS ITENS DO MENU
export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
  
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  
      //FORMA ALTERNATIVA DE SCROLL SUAVE
      //const topo = section.offsetTop;
      //window.scrollTo({
      //  top: topo,
      //  behavior: "smooth",
      //  });
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
  