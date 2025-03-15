document.addEventListener('DOMContentLoaded', () => {
    // Back-to-Top Button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.innerHTML = '&#8679;';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '30px';
    backToTopBtn.style.right = '30px';
    backToTopBtn.style.padding = '10px 15px';
    backToTopBtn.style.fontSize = '20px';
    backToTopBtn.style.backgroundColor = '#000';
    backToTopBtn.style.color = '#fff';
    backToTopBtn.style.border = 'none';
    backToTopBtn.style.borderRadius = '5px';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.display = 'none';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Tab Switching Logic for Navigation
    // Get all the sections inside <main>
    const sections = document.querySelectorAll('main section');

    // Initially, show only the "home" section and hide others.
    sections.forEach(section => {
        section.style.display = (section.id === 'home') ? 'block' : 'none';
    });

    // Replace your navLinks event listener with the tab-switching code:
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Get the target section ID from the link's href (remove the '#' char)
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});
