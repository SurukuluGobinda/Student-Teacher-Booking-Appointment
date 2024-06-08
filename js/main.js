// js for toggle

bargar = document.querySelector('.bargar')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')
navlist = document.querySelector('.nav-list')
search = document.querySelector('.search')

bargar.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp');
    logo.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    search.classList.toggle('v-class-resp');
})
