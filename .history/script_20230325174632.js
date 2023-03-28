var form = document.getElementById("myForm");

form.addEventListener('submit', function(e){
e.preventDefault();

var search = document.getElementById("search").value;

var o
fetch("https://api.github.com/users/"+search)
})