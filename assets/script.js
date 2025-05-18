const menuTogger = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');


menuTogger.addEventListener('click', function(){
    sideBar.classList.toggle('active');
});