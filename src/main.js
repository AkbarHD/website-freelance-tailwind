const menuAktif = document.getElementById('menu');
const faBars = document.querySelector('.fa-bars');
const navMobile = document.getElementById('navMobile');

menuAktif.addEventListener('click', () => {
    faBars.classList.toggle('fa-x');
    navMobile.classList.toggle('hidden');
});