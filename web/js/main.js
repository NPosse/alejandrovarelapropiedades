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