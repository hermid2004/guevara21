let marker = document.querySelector("#indicador");
let nav = document.querySelector("nav");
let item = document.querySelectorALL("nav a");

nav.onclick = function(){
    marker.classList.toggle("change");
}

function indicador(e){
    marker.style.left = e.offsetleft + "px" ;
    marker.style.width = e.offsetwidth + "px" ;
    marker.style.display = "block" ;
}
item.forEach(link => {
    link.addEventistener("click", (e) =>{
        indicador(e.target);
    })
}); 