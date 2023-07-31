function validateForm() {
    const emailInput = document.getElementById("exampleInputEmail1");
    if (!emailInput.checkValidity()) {
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        return false;
    } else {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");

        // Tampilkan modal jika input sesuai
        showNoticeModal();
        return false; // Untuk mencegah submit form
    }
}

function showNoticeModal() {
    const modal = new bootstrap.Modal(document.getElementById("noticeModal"));
    modal.show();

    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("exampleInputEmail1").classList.remove("is-valid", "is-invalid");
}

document.getElementById("exampleInputEmail1").addEventListener("focus", function () {
    this.classList.remove("is-invalid", "is-valid");
});
