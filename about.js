//CHANGE NAVBAR LETTER COLOR AND BACKGROUND BLURRED
let myNav1 = document.getElementById("header");
let myNav2 = document.getElementById("menu-list1");

window.onscroll = function () {

    if (window.scrollY > 20) {

        myNav1.classList.add("scrolled")
        myNav2.classList.add("scrolled")
    } else {
        myNav1.classList.remove("scrolled")
        myNav2.classList.remove("scrolled")
    }

}

//------------------- CLOSE NAVBAR WHEN LINK CLICKED


const navLinks = document.querySelectorAll('.nav-item')
const bsCollapse = document.getElementById('navbarSupportedContent').Collapse;
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse})
})


function goTo(){
    document.getElementById("up").scrollIntoView();
}
function goTo1(){
    document.getElementById("skills1").scrollIntoView();
}
function goTo2(){
    document.getElementById("projekte1").scrollIntoView();
}
function goTo3(){
    document.getElementById("contact").scrollIntoView();
} 

function openCV(){
    window.open("./media/web-dev.pdf", "_blank")
}

//------------REFRESH TO TOP OF PAGE
history.scrollRestoration = 'manual';