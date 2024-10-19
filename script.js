// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navbar toggle (optional for mobile friendliness)
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.navbar ul');

document.querySelector('.logo').addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tea of the Month: highlight on click
const teaItems = document.querySelectorAll('.tea-item img');

teaItems.forEach(item => {
    item.addEventListener('click', () => {
        teaItems.forEach(i => i.classList.remove('highlight'));  // Remove existing highlight
        item.classList.add('highlight');  // Add highlight to clicked tea
    });
});

// Location info toggle
const locationItems = document.querySelectorAll('.location-item');

locationItems.forEach(location => {
    location.addEventListener('click', () => {
        location.querySelector('p').classList.toggle('hidden');
    });
});
