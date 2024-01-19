const hamburder = document.querySelector("#hamburder");

hamburder.addEventListener("click", function(){
  // hamburder.style.marginTop = "10px";
  const menuBar = document.querySelector("#menu-bar");
  menuBar.classList.toggle("show-icons");

});