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
    uploadButton.innerText = "Ganti Foto";
});

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("titleFill");
    nameInput.value = "Egg Sandwich"; // Ganti dengan isi input yang Anda inginkan
});
