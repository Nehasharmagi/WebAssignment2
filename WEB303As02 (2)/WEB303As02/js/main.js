// WEB303 Assignment 2

// Prospect link click event
$("#prospect").click((event) => {
    event.preventDefault();
    loadContent("prospect.html");
})

// Convert link click event
$("#convert").click((event) => {
    event.preventDefault();
    loadContent("convert.html");
})

// Retain link click event
$("#retain").click((event) => {
    event.preventDefault();
    loadContent("retain.html");
})

// Function for JS Ajax
function loadContent(page) {
    $("#content").hide();
    $("#content").empty();
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        $("#content").html(this.responseText);
        $("#content").fadeIn();
    }
    xhttp.open("GET", page, true);
    xhttp.send();
}