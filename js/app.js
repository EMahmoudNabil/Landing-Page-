
var menuLists = document.getElementById("menuList");


var listItems = menuLists.getElementsByClassName("listItem");

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}