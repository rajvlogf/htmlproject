var bars = document.querySelector(".fa-bars");
var sidebar = document.querySelector(".sidebar");

bars.addEventListener("click", function(e){
    e.preventDefault();
    sidebar.style.width = 80+"px";

});