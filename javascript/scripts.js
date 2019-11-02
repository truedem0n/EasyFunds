// JQuery stuff:
$(document).ready(function() {
    $("#header").load("reusables/header.html");

    $("#footer").load("login.html");
});

$('.nav-item').click(function() {
    $(this).tab('active');
})



// if(window.location.protocol != "https"){
// 	window.location.href = window.location.href.replace('http', 'https');    
// }