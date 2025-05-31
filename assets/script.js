// side toggler varibles
const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

//side navegation variables
const navItemLinks = document.querySelectorAll('.nav li a')
const pages = document.querySelectorAll('.page');

// togglin side in mobile
menuToggler.addEventListener('click', function(){
    sideBar.classList.toggle('active');
});

// page navigation functionality
for(let j = 0; j < navItemLinks.length; j++){
    //add onClick event to each link
    navItemLinks[j].addEventListener('click', function(){
    
        const itemLinkText = this.textContent.toLowerCase();
        // defined  page and  add active class 
        for(let i = 0; i < pages.length; i++){
            //define the page conditions
            if(pages[i].classList.contains(itemLinkText)){
                // add active class on current page 
                pages[i].classList.add('active');
                // add active class on clicked  nav link
                navItemLinks[i].classList.add('active');
            }else{
                // remove active class on other pages
                pages[i].classList.remove('active');
                // remove active class on other nav linkes 
                navItemLinks[i].classList.remove('active');
            }
        }
        
    })
}
