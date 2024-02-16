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
    const larguraTela = window.innerWidth;
  
    const logo = document.querySelector('#logo');
    if (larguraTela < 450) {
      logo.innerHTML = '&#60;MHogs&#47;&#62;';
    } else {
      logo.innerHTML = '&#60;MarcosHogs&#47;&#62;';
    }
  }
  
  window.addEventListener('resize', mudarConteudoLogo);
  
  mudarConteudoLogo();