document.onscroll = function () {
    if (window.scrollY > window.innerHeight*0.85) {
        document.getElementById("scroll_arrow").style.opacity = 0;
        document.getElementById("para_scene").style.opacity = 0;
    }
    else {
        document.getElementById("scroll_arrow").style.opacity = 1;
        document.getElementById("para_scene").style.opacity = 1;
    }
    if (window.scrollY > window.innerHeight * 0.2) {
        document.getElementById("s2").style.opacity = 1;
    }
    else {
        document.getElementById("s2").style.opacity = 0;
    }
}