function validateForm1() {
    const nameInput = document.getElementById("exampleInputName1");
    const emailInput = document.getElementById("exampleInputEmail1");
    const passwordInput = document.getElementById("exampleInputPassword1");
    const agreeCheck = document.getElementById("exampleCheck1");

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "" || !agreeCheck.checked) {
        alert("Please fill all fields and agree to terms & conditions.");
        return false;
    }

    showNoticeModal();
    return false;
}

function showNoticeModal() {
    const modal = new bootstrap.Modal(document.getElementById("noticeModal"));
    modal.show();

    // Bersihkan input setelah modal tampil
    document.getElementById("exampleInputName1").value = "";
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("exampleInputPassword1").value = "";
    document.getElementById("exampleCheck1").checked = false;
}
