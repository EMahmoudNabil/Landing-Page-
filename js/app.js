// var btnContainer = document.getElementById("myDIV");
// var listItems = btnContainer.getElementsByClassName("listItem");
// for (var i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
// });
// } 

// function to Scroll to Anchor
$(document).ready(function(){
    $("a").on('click', function(e) {
    if (this.hash !== "") {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 900, function(){
        window.location.hash = hash;
        });
    }
    });
});