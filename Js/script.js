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