function validateFormForgot() {
    const emailInput = document.getElementById("exampleInputEmail1");
    if (!emailInput.checkValidity()) {
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        return false;
    } else {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");

        // Tampilkan modal jika input sesuai
        showNoticeModalForgot();
        return false; // Untuk mencegah submit form
    }
}

function showNoticeModalForgot() {
    const modal = new bootstrap.Modal(document.getElementById("noticeModal"));
    modal.show();

    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("exampleInputEmail1").classList.remove("is-valid", "is-invalid");
}

document.getElementById("exampleInputEmail1").addEventListener("focus", function () {
    this.classList.remove("is-invalid", "is-valid");
});

function validateFormRegis() {
    const nameInput = document.getElementById("exampleInputName1");
    const emailInput = document.getElementById("exampleInputEmail1");
    const passwordInput = document.getElementById("exampleInputPassword1");
    const agreeCheck = document.getElementById("exampleCheck1");

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "" || !agreeCheck.checked) {
        alert("Please fill all fields and agree to terms & conditions.");
        return false;
    }

    showNoticeModalRegis();
    return false;
}

function showNoticeModalRegis() {
    const modal = new bootstrap.Modal(document.getElementById("noticeModal"));
    modal.show();

    // Bersihkan input setelah modal tampil
    document.getElementById("exampleInputName1").value = "";
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("exampleInputPassword1").value = "";
    document.getElementById("exampleCheck1").checked = false;
}

function validateFormLogin() {
    const emailInput = document.getElementById("exampleInputEmail1");
    const passwordInput = document.getElementById("exampleInputPassword1");
    const agreeCheck = document.getElementById("exampleCheck1");

    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "" || !agreeCheck.checked) {
        alert("Please fill all fields and agree to terms & conditions.");
        return false;
    }

    login();
    return false;
}

function login() {
    window.location.href = "../menu/home.html";
}
