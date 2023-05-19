let menuBar = document. getElementById("menuBar")
let mainNav = document. getElementById("mainNav")
let mainMenu = document. getElementById("mainMenu")

menuBar.addEventListener("click", function(){
   if(mainMenu.classList.contains("main-menu")){
      mainMenu.classList.add("main-menu-block");
      mainMenu.classList.remove("main-menu");
   }
   else {
     mainMenu.classList.add("main-menu");
     mainMenu.classList.remove("main-menu-block");
   }
});



/*  if (menuBar.classList.contains("menu-media-hidden")){
    menuBar.classList.add("menu-media-hidden");
    menuBar.classList.remove("menu-media-hidden");
 }
 else {

 } */
   /* alert("Bienvenidosa a js") */
/*    mainNav.classList.remove("main-nav");
   mainNav.classList.add("main-nav-2"); */

