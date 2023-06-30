let menuBar = document. getElementById("menuBar")
let mainNav = document. getElementById("mainNav")
let mainMenu = document. getElementById("mainMenu")

menuBar.addEventListener("click", function(){
   if(mainMenu.classList.contains("main-menu")){
      mainMenu.classList.add("main-menu-block");
      mainMenu.classList.remove("main-menu");
   }
   else {
     .classList.add("main-menu");
     .classList.remove("main-menu-block");
   }
});