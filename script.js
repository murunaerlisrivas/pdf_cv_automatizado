document.addEventListener('DOMContentLoaded', function() {
    const skillsActive = document.querySelector('.skills-active');
    const s1 = document.getElementById('s1');
    const s2 = document.getElementById('s2');

    const isS1Empty = s1.textContent.trim() === "";
    const isS2Empty = s2.textContent.trim() === "";

    if (isS1Empty && isS2Empty) {
        skillsActive.classList.remove('skills-active');
        skillsActive.classList.add('skills-inactive');
    }
    if (isS1Empty) {
        const li1 = document.querySelector('.coma');
        li1.classList.remove('coma');
        li1.classList.add('coma-inact');
    }
    if (isS2Empty) {
        const li2 = document.querySelector('.coma');
        li2.classList.remove('coma');
        li2.classList.add('coma-inact');
    }
});