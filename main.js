let menubtn = document.getElementById("menubtn");
let palettebtn = document.getElementById("palettebtn");
let modebtn = document.getElementById("darkmode");
let searchbtn = document.getElementById("searchbtn");

let menu = document.querySelector(".menu");
let palettes = document.querySelector(".color-palettes");
let mode = document.querySelector(".mode");
let searchform = document.querySelector(".searchform");


menubtn.onclick = () => {
    menu.classList.toggle("active");
    palettes.classList.remove("active");
    searchform.classList.remove("active");
}
palettebtn.onclick = () => {
        palettes.classList.toggle("active");
        searchform.classList.remove("active");
        menu.classList.remove("active");
    }
    /*
    searchbtn.onclick = () => {
        searchform.classList.toggle("active");
        menu.classList.remove("active");
        palettes.classList.remove("active");
    }*/
modebtn.onclick = () => {
    mode.style.display = (mode.style.display == "none" ? "block" : "none");
}
window.onscroll = () => {
    menu.classList.remove("active");
    palettes.classList.remove("active");
    searchform.classList.remove("active");
}

document.querySelectorAll(".color-palettes .palette").forEach((palette) => {
        palette.onclick = () => {
            let color = palette.style.background;
            document.querySelector(":root").setProperty("--primary", color)
            alert("hrettttttttt");
        }
    })
    /*
    modebtn.onclick = () => {
            modebtn.classList.toggle("fa-sun");
            if (modebtn.classList.contains("fa-sun")) {
                document.body.classList.add("active");
            } else {
                document.body.classList.remove("active");
            }
        } */

//darkmode toggle
let darkmode = localStorage.getItem("darkmode");

//functions
const enabled = () => {
    document.body.classList.add("active");
    localStorage.setItem("darkmode", "enabled");
}

const disable = () => {
    document.body.classList.remove("active");
    localStorage.setItem("darkmode", null);
}
if (darkmode === "enabled") {
    enabled();
}

modebtn.onclick = () => {
    darkmode = localStorage.getItem("darkmode");

    modebtn.classList.toggle("fa-sun");
    if (darkmode !== "enabled") {
        enabled();
    } else {
        disable();
    }
}


/*let menubtn = document.getElementById("menubtn");
let menu = document.querySelector(".menushow");
menubtn.onclick = () => {
    menu.style.display = (menu.style.display == "none" ? "block" : "none");

    // o.classList.toggle("active");
    menubtn.onclick = () => {
    menu.style.display = (menu.style.display == "none" ? "block" : "none");

}
}; */