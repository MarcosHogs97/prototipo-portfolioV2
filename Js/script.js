function scrollToSection(sectionClassName) {
    if (sectionClassName === 'topo') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        const section = document.querySelector('.' + sectionClassName);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function mudarConteudoLogo() {
    // Obter a largura da tela
    const larguraTela = window.innerWidth;
  
    // Selecionar o elemento h1 com ID "logo"
    const logo = document.querySelector('#logo');
  
    // Se a largura da tela for menor que 450px, altere o conteúdo do elemento
    if (larguraTela < 450) {
      logo.innerHTML = '&#60;MHogs&#47;&#62;';
    } else {
      // Se a largura da tela for maior que 450px, restaure o conteúdo original
      logo.innerHTML = '&#60;MarcosHogs&#47;&#62;';
    }
  }
  
  // Adicionar um evento de "resize" à janela para executar a função quando a tela for redimensionada
  window.addEventListener('resize', mudarConteudoLogo);
  
  // Chamar a função pela primeira vez para garantir que o conteúdo seja atualizado
  mudarConteudoLogo();