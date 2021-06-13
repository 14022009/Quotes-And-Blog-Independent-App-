var name_dis = localStorage.getItem("user_:");
document.getElementById("name_dis_h1").innerHTML ="Hi, " + name_dis;

function blog_to() {
    console.log("blog is clicked")
    window.location = "Blog.html";
}

function quotes_to() {
    window.location = "Quotes.html";
}