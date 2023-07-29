function previewImage(event) {
    const fileInput = event.target;
    const imagePreview = document.getElementById("imagePreview");

    while (imagePreview.firstChild) {
        imagePreview.removeChild(imagePreview.firstChild);
    }

    const image = document.createElement("img");
    image.src = URL.createObjectURL(fileInput.files[0]);
    imagePreview.appendChild(image);
    imagePreview.style.display = "block";

    const uploadLabel = document.getElementById("uploadLabel");
    uploadLabel.innerText = "Change Photo";
}

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").selectedIndex = 0;
    const imagePreview = document.getElementById("imagePreview");
    while (imagePreview.firstChild) {
        imagePreview.removeChild(imagePreview.firstChild);
    }

    const uploadButton = document.getElementById("uploadButton");
    uploadButton.innerText = "Change Photo";
});

function logout() {
    window.location.href = "../../index.html";
}
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});
