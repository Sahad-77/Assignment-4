let name = document.getElementById("name");
let address = document.getElementById("address");
let email = document.getElementById("email");
let password = document.getElementById("password");
let phone = document.getElementById("phone");


// Name validation
name.addEventListener("input", function () {
    if (name.value.trim().length < 3) {
        document.getElementById("nameError").innerHTML =
            "  Enter the full name";
    }
    else if (!/^[a-zA-Z ]+$/.test(name.value.trim())) {
        document.getElementById("nameError").innerHTML =
            "  Only letters allowed";
    }
    else {
        document.getElementById("nameError").innerHTML =
            "  Valid name";
    }
});


// Address validation
address.addEventListener("input", function () {
    if (address.value.trim().length < 10) {
        document.getElementById("addressError").innerHTML =
            "  Enter at least 10 characters";
    }
    else {
        document.getElementById("addressError").innerHTML =
            "  Valid address";
    }
});


// Email validation
email.addEventListener("input", function () {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email.value)) {
        document.getElementById("emailError").innerHTML =
            "  Please enter valid mail address ";
    }
    else {
        document.getElementById("emailError").innerHTML =
            "  Valid email";
    }
});


// Password validation
password.addEventListener("input", function () {
    if (password.value.length < 8) {
        document.getElementById("passwordError").innerHTML =
            "  Minimum 8 characters";
    }
    else {
        document.getElementById("passwordError").innerHTML =
            "  Valid password";
    }
});


// Phone validation
phone.addEventListener("input", function () {
    let pattern = /^[0-9]{10}$/;

    if (!pattern.test(phone.value)) {
        document.getElementById("phoneError").innerHTML =
            "  Enter 10 digits";
    }
    else {
        document.getElementById("phoneError").innerHTML =
            "  Valid phone number";
    }
});


// Gender validation
let gender = document.getElementsByName("gender");

gender.forEach(function (item) {
    item.addEventListener("change", function () {
        document.getElementById("genderError").innerHTML =
            "  Gender selected";
    });
});