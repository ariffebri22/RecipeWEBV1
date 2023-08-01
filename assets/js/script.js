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

function validateFormChange() {
    const newPassword = document.getElementById("newpassword");
    const oldPassword = document.getElementById("oldpassword");

    // Trim the input values to remove leading/trailing whitespaces
    const trimmedNewPassword = newPassword.value.trim();
    const trimmedOldPassword = oldPassword.value.trim();

    if (trimmedNewPassword === "" || trimmedOldPassword === "") {
        alert("Please fill all fields.");
        return false;
    }

    showNoticeModalChange();

    // Prevent form submission
    return false;
}

function showNoticeModalChange() {
    const modal = new bootstrap.Modal(document.getElementById("noticeModal"));
    modal.show();

    // Clear input fields after showing the modal
    document.getElementById("newpassword").value = "";
    document.getElementById("oldpassword").value = "";
}
