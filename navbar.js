//function navSlide is equal to an anonymous fuction
const navSlide = () => {
    //get the burger and nav
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    //get the individual links
    const navLinks = document.querySelectorAll('.nav-links li')
    

    
    //listen for click of burger
    burger.addEventListener('click', ()=>{
        //Toggle Nav
        //when we click on the burger we want the nav link to get the class
        // of nav active
        nav.classList.toggle('nav-active');


        //Animate Links
        //for each link we run a fuction
        navLinks.forEach((link, index) =>{
        // Template literals are literals delimited with backtick (`) 
        // characters, allowing for multi-line strings, for string 
        // interpolation with embedded expressions, and for special
        // constructs called tagged templates

        //if the animation already exists it gets replaced with nothing
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                //otherwise we add an animation
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .5}s`;
            }
        
        })
        // --------burger animation ----------
        //when clicking on the burger we toggle the toggle class
        burger.classList.toggle('toggle')

    })

    

}
navSlide();