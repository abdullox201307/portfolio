const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');


//  navbar actions and all section octions along with cube  rotation when navbar is clicked
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        const activeNav = document.querySelector('.nav-list li.active');
        if (activeNav) activeNav.classList.remove('active');
        nav.classList.add('active');

        const activeSection = document.querySelector('.section.active');
        if (activeSection) activeSection.classList.remove('active');
        sections[idx].classList.add('active');
        
        cube.style.transform = `rotateY(${idx * -90}deg)`;
        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');

        const array = Array.from(sections);
        const arrSecs = array.slice(1, -1);
        arrSecs.forEach(arrSec => { 
            if (arrSec.classList.contains('active')) {
                sections[4].classList.add('action-contact');
            }
        });
        if (sections[0].classList.contains('active')){
            sections[4].classList.remove('action-contact');
        }
    });
});

// // resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        // const activeResumeList = document.querySelector('.resume-list.active');
        // if (activeResumeList) activeResumeList.classList.remove('active');o
        // list.classList.add('active');
        const activeResume = document.querySelector('.resume-list.active');
if (activeResume) activeResume.classList.remove('active');
list.classList.add('active');


        const activeResumeBox = document.querySelector('.resume-box.active');
        if (activeResumeBox) activeResumeBox.classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});

// Portfolio
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        const activePortfolioList = document.querySelector('.portfolio-list.active');
        if (activePortfolioList) activePortfolioList.classList.remove('active');
        list.classList.add('active');

        const activePortfolioBox = document.querySelector('.portfolio-box.active');
        if (activePortfolioBox) activePortfolioBox.classList.remove('active');
        portfolioBoxs[idx].classList.add('active');
    });
});


// visibility for contact section when reloading (cube reloading animation)
setTimeout( () => {
    sections[4].classList.remove('active');
}, 1500);