//FUNÇÃO PRA CRIAR UMA NAVEGAÇÃO POR TABS
export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    tabContent[0].classList.add("ativo");
  
    if (tabMenu.length && tabContent.length) {
      function ativarTab(index) {
        tabContent.forEach((section) => {
          section.classList.remove("ativo");
        });
        const direction = tabContent[index].dataset.anime;
        tabContent[index].classList.add("ativo", direction);
      }
  
      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
          ativarTab(index);
        });
      });
    }
  }