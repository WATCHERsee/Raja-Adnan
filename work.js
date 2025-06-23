// Removed all cursor-related JavaScript
// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//   cursor.style.top = e.clientY + 'px';
//   cursor.style.left = e.clientX + 'px';
// });

// JavaScript for responsive navbar toggle (if not already handled)
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // Changes menu icon to 'x' on click
    navbar.classList.toggle('active'); // Toggles active class for showing/hiding navbar
});

// JavaScript for active link highlighting on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjust offset as needed
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



