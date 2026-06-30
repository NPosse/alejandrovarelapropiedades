const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",

()=>{

let current="";

sections.forEach(section=>{

const top=
section.offsetTop;

if(

pageYOffset
>=
top-300

){

current=
section.getAttribute(
"id"
);

}

});

navLinks.forEach(link=>{

link.classList.remove(
"active"
);

if(

link.getAttribute(
"href"
===`#${current}`

)

){

link.classList.add(
"active"
);

}

});

});

// MENU HAMBURGUESA

document.addEventListener(
"DOMContentLoaded",

()=>{

const menu =
document.querySelector(
".menu-toggle"
);

const nav =
document.querySelector(
".nav-links"
);

if(
menu
){

menu.onclick=()=>{

menu.classList.toggle(
"active"
);

nav.classList.toggle(
"active"
);

};

}



document

.querySelectorAll(
".nav-links a"
)

.forEach(link=>{

link.onclick=()=>{

menu.classList.remove(
"active"
);

nav.classList.remove(
"active"
);

};

});

});


/* ==========================
        SCROLL ANIMATION
========================== */

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================
        GALERÍA PROPIEDAD
========================== */

const mainPhoto = document.getElementById("mainPhoto");
const thumbs = document.querySelectorAll(".thumb");

if(mainPhoto && thumbs.length){

    thumbs.forEach(thumb=>{

        thumb.addEventListener("click",()=>{

            mainPhoto.src = thumb.src;

            thumbs.forEach(img=>img.classList.remove("active"));

            thumb.classList.add("active");

        });

    });

}