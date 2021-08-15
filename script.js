document.getElementById("login-submite").addEventListener("click", function () {
    const emailFile = document.getElementById("user-email");
    const userEmail = emailFile.value;
    // console.log(userEmail);
    //Get user Password
    const passwordFile = document.getElementById("user-password");
    const userPassword = passwordFile.value;
    // console.log(userPassword);
    if (userEmail == "bay@gmail.com" && userPassword == "rony") {
        window.location.href = "banking.html"
    }


});