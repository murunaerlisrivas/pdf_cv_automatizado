document.addEventListener('DOMContentLoaded', function() {
    const skillsActive = document.querySelector('.skills-active');
    const s1 = document.getElementById('s1');
    const s2 = document.getElementById('s2');

    let allSpansEmpty = true;

    // Check each span and change class of li elements if empty
    if (s1.textContent.trim() === "") {
        const li1 = document.querySelector('.li-active1');
        li1.classList.remove('li-active1');
        li1.classList.add('li-inactive1');
    } else {
        allSpansEmpty = false;
    }

    if (s2.textContent.trim() === "") {
        const li2 = document.querySelector('.li-active1');
        li2.classList.remove('li-active1');
        li2.classList.add('li-inactive1');
    } else {
        allSpansEmpty = false;
    }

    // Change skills-active to skills-inactive if all spans are empty
    if (allSpansEmpty) {
        skillsActive.classList.remove('skills-active');
        skillsActive.classList.add('skills-inactive');
    }
});