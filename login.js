function loginfeito() {
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    if (email.toLowerCase() === "karstenfeliciano@gmail.com" && senha === "12345678") {
        alert("login feito")
    }
    else {
        alert("email ou senha incorreto")
    }
}