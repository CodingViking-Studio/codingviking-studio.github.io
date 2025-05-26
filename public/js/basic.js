window.addEventListener('load', function () {
    console.log("Page Loaded");
    console.log(window.scrollY)
})

document.onscroll = function () {
    if (window.scrollY > window.innerHeight*0.85) {
        document.getElementById("scroll_arrow").classList.remove("opacity-100");
        document.getElementById("para_scene").classList.remove("opacity-100");
        document.getElementById("scroll_arrow").classList.add("opacity-0");
        document.getElementById("para_scene").classList.add("opacity-0");
    }
    else {
        document.getElementById("scroll_arrow").classList.remove("opacity-0");
        document.getElementById("para_scene").classList.remove("opacity-0");
        document.getElementById("scroll_arrow").classList.add("opacity-100");
        document.getElementById("para_scene").classList.add("opacity-100");
    }
    if (window.scrollY > window.innerHeight * 0.2) {
        document.getElementById("s2").classList.remove("opacity-0");
        document.getElementById("s2").classList.add("opacity-100");
    }
    else {
        document.getElementById("s2").classList.remove("opacity-100");
        document.getElementById("s2").classList.add("opacity-0");
    }
}