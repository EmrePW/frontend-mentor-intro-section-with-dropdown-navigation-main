const navbar_desktop = document.querySelector(".navbar-desktop");

const features_button_desktop = document.getElementById("features-button-desktop");
const company_button_desktop = document.getElementById("company-button-desktop");
const features_menu = document.querySelector(".dropdown-menu.features");
const company_menu = document.querySelector(".dropdown-menu.company");
const login_desktop = document.querySelector(".nav-login");

const navbar_mobile = document.querySelector(".navbar-mobile");
const hamburgerButton = document.getElementById("icon-hamburger");
const closeNav = document.getElementById("icon-close-navbar");
const features_button_mobile = document.getElementById("features-button-mobile");
const company_button_mobile = document.getElementById("company-button-mobile");
const features_menu_mobile = document.querySelector(".mobile-dropdown.features1");
const company_menu_mobile = document.querySelector(".mobile-dropdown.company1")

const filter = document.querySelector(".filter");

const viewport_width = window.innerWidth;
var viewpoint_breakpoint = 800;

if(window.innerWidth <= viewpoint_breakpoint) {
    isBelow();
}

window.addEventListener("resize", () => {
    isBelow();

})

features_button_desktop.addEventListener("click", () => {
    var attr = features_menu.getAttribute("data_hidden");
    if(attr === "true"){
        features_menu.setAttribute("data_hidden", "false");
        return;
    }
    features_menu.setAttribute("data_hidden", "true");
})

company_button_desktop.addEventListener("click", () => {
    var attr = company_menu.getAttribute("data_hidden");
    if(attr === "true"){
        company_menu.setAttribute("data_hidden", "false");
        return;
    }
    company_menu.setAttribute("data_hidden", "true");
})

hamburgerButton.addEventListener("click", () => {
    navbar_mobile.classList.remove("hidden");
    filter.classList.remove("hidden");
    filter.classList.add("active");
    navbar_mobile.classList.add("active");
})

features_button_mobile.addEventListener("click", () => {
    var attr = features_menu_mobile.getAttribute("data_hidden");
    if(attr === "true"){
        features_menu_mobile.setAttribute("data_hidden", "false");
        return;
    }
    features_menu_mobile.setAttribute("data_hidden", "true");
})

company_button_mobile.addEventListener("click", () => {
    var attr = company_menu_mobile.getAttribute("data_hidden");
    if(attr === "true"){
        company_menu_mobile.setAttribute("data_hidden", "false");
        return;
    }
    company_menu_mobile.setAttribute("data_hidden", "true");
})

closeNav.addEventListener("click", () => {
    navbar_mobile.classList.remove("active");   
    setTimeout(() => {
        filter.classList.remove("active");
    }, 1500)
    
    setTimeout(() => {
        navbar_mobile.classList.add("hidden");
        filter.classList.add("hidden");
    }, 2000);
    
    
})

function isBelow(){
    if(window.innerWidth <= viewpoint_breakpoint){
        navbar_desktop.setAttribute("data_hidden", "true");
        login_desktop.setAttribute("data_hidden", "true");
        hamburgerButton.setAttribute("data_hidden", "false");
        return;
    }
    navbar_desktop.setAttribute("data_hidden", "false");
    login_desktop.setAttribute("data_hidden", "false");
    hamburgerButton.setAttribute("data_hidden", "true");
}