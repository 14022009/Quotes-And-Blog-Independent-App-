var username = localStorage.getItem("user_:");
document.getElementById("name_holder_p").innerHTML = "Hi, " + username;

function home_blog() {
    window.location = "Choice.html";
}