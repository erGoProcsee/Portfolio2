// _____________ TODO _________
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
//get the individual links
const navLinks = document.querySelectorAll('.nav-links li');

//Not clicking links or nav closes nav
document.onclick = function(e){
    console.log(e.target);
    //If these ids arent clicked...
    if((e.target.id !== 'header') && (e.target.id !== 'burger') &&
     (e.target.id !== 'nav') && (e.target.id !== 'nav-links') &&
      (e.target.id !== 'nav-links') && (e.target.id !== 'nav-links')){
        //...hide the nav.
        nav.firstElementChild.setAttribute('nav-visible', false);
        burger.setAttribute('burger-active', false);

        // take away the animation
        navLinks.forEach((link, index) =>{ 
            link.style.animation = '';
        })
    }
    
}


//Slide the nav back in from the right
burger.addEventListener('click', (event) => {
    // grab the attribute, its a string
    const visible = nav.firstElementChild.getAttribute('nav-visible');

    // grab the burger attribute, use this later for off menu click maybe?
    // const visibleBurg = burger.getAttribute('burger-active');


    // ----------------- Make nav visible if burger is clicked. ---------------------
    //Check if the string is set to  "false"
    if (visible === "false") {
        // set the attribute to true, the css applies, making the
        //  mobile nav slide out.
        nav.firstElementChild.setAttribute('nav-visible', true);
        burger.setAttribute('burger-active', true);
        
        //Animate Links
        navLinks.forEach((link, index) =>{ 
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .2}s`;
        })
    }
    // --------------- Hide the nav if the burger is clicked again. ---------------
    else if (visible === "true") {
        // If the nav is already out and the burger is clicked again
        // then we close everything
        nav.firstElementChild.setAttribute('nav-visible', false);
        burger.setAttribute('burger-active', false);
        
        // take away the animation
        navLinks.forEach((link, index) =>{ 
            link.style.animation = ''; 
        })
    }

    
})


    




