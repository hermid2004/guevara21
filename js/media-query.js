let menuBar = document. getElementById("menuBar")

menuBar.addEventListener("click", function(){
 alert("Bienvenidosa a js")
 if (menuBar.classList.contains("menu-media-hidden")){
    menuBar.classList.add("menu-media-hidden");
    menuBar.classList.remove("menu-media-hidden");
 }
});

