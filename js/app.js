/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 * 
*/


 /*  --- Third requirment : Building the navigation menu only with JavaScript functionality   --- */ 

/* To get all sections in the HTML.*/

const navbarSections = Array.from(document.querySelectorAll('section') );

const navbar = document.getElementById('navbar__list');


/* To get id (navbar__list) of all sections in the HTML evenif we add many section. */

const menuList = document.getElementById('navbar__list');

/* To get sections' length    */

let numOfListItems= navbarSections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**  
 * Creating a function that deal with all sections in HTML and get throw it :
 *  1- Name of Section 
 *  2- Link of Section 
 *  3- Creating unordered list to contain all sections 
 *  4- Passing Section Name and Section Link from HTML to JS to make it dynamic as much we can 

*/
function creationOfListItem(){

    /* Creating a Loop to select and apply all for each section in HTML */
    
    for (section of navbarSections){
    
         /*  Get name of Section by a specific way to hunt the actual name store in (data-nav) in HTML  */

        nameOfSection = section.getAttribute('data-nav');

         /*  Get link of Section by attribute (ID) in HTML  */

        linkOfSection = section.getAttribute('id');

         /*  Creating List to contain all sections that in HTML  */

         createListItem = document.createElement('li');

         /* Passing Section Name and Section Link by (Template Literals) from HTML to JS to make it dynamic as much we can */

         createListItem.innerHTML = `<a class = 'menu__link' href = '#${linkOfSection}'> ${nameOfSection} </a> `;

        /* After Creation of List item we pass it to Menulist of Sections */

        menuList.appendChild(createListItem);
    } 

}

 /*  --- Fourth requirment : Add functionality to distinguish the section in view. While navigating through the page  --- */ 
 

 /* Creating function to determin Section in view */

function sectionInView(element){

      /* Determine position of Section in view or not */

         let sectionPostion = element.getBoundingClientRect().top;

      /* Return position of Section */

         return(sectionPostion >= 0 );
}

 /* Creating function that gives the section being viewed using classList Method */

function activeClassToggling (){

      /* Creating a Loop for each section in all sections in HTML */

      for (section of navbarSections) {

        /* If Condition for if the section in view */

        if (sectionInView(section)){

            /* Check if the section does not contain (your-active-class)  */

            if (!section.classList.contains('your-active-class')){

                /* Add (your-active-class) to section if it doesn't have it  */

                section.classList.add('your-active-class');
            }

        }

        /* If it isn't in the view remove (your-active-class)  */ 

        else {section.classList.remove ('your-active-class');}
    }   
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
 
creationOfListItem();

 /*  --- Fifth requirment : Add the functionality to scroll to sections  --- */ 

// Add class 'active' to section when near top of viewport and Scroll to anchor ID using scrollTO event

document.addEventListener('scroll', activeClassToggling);

/**
 * End Main Functions
 * Begin Events
 * 
 * 
 */


/* Add a scroll to top button on the page that’s only visible when :
                                 the user scrolls below the fold of the page. */

topbutton = document.getElementById("toTop");

/* When the user scrolls down 280px from the top of the page or
                              when Headline (Landing page) disapear, show the button */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280 ) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

/* When the user clicks on the button (Up) , scroll to the top of the Page */

function topFunction() {
    
    /* For Safari */
  
    document.body.scrollTop = 0; 

   /* For Chrome, Firefox, IE and Opera */

  document.documentElement.scrollTop = 0; 
}
