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

function openCV(){
    window.open("./media/web_dev.pdf", "_blank")
}

history.scrollRestoration = 'manual';