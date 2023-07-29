function logout() {
    window.location.href = "../../index.html";
}

function login() {
    window.location.href = "../../page/auth/login.html";
}

function pageProfile() {
    window.location.href = "../../page/profile/detailProfileRecipe.html";
}

function pageEditProfile() {
    window.location.href = "../../page/profile/editProfile.html";
}

function pageEditMenu() {
    window.location.href = "../../page/menu/editMenu.html";
}

function pageDetailMenu() {
    window.location.href = "../../page/menu/detailMenu.html";
}

function navbarBack() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar-scrolled");
}

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});
