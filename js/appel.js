let iconChevronLeft = document.getElementById("iconChevronLeft");
let iconChevronRight = document.getElementById("iconChevronRight");
let boxCarousel = document.getElementById("boxCarousel");

iconChevronRight.addEventListener("click", function(){
    if(boxCarousel.classList.contains("box-carousel-1")) {
        boxCarousel.classList.remove("box-carousel-1");
        boxCarousel.classList.add("box-carousel-2");
    }
    else if (boxCarousel.classList.contains("box-carousel-2")) {
        boxCarousel.classList.remove("box-carousel-2");
        boxCarousel.classList.add("box-carousel-3");
    }
    else if (boxCarousel.classList.contains("box-carousel-3")) {
        boxCarousel.classList.remove("box-carousel-3");
        boxCarousel.classList.add("box-carousel-4");
    }
    else if (boxCarousel.classList.contains("box-carousel-4")) {
        boxCarousel.classList.remove("box-carousel-4");
        boxCarousel.classList.add("box-carousel-5");
    }
    else if (boxCarousel.classList.contains("box-carousel-5")) {
        boxCarousel.classList.remove("box-carousel-5");
        boxCarousel.classList.add("box-carousel-6");
    }
});

iconChevronLeft.addEventListener("click", function(){
    if(boxCarousel.classList.contains("box-carousel-2")) {
        boxCarousel.classList.remove("box-carousel-2");
        boxCarousel.classList.add("box-carousel-1");
    }
    else if (boxCarousel.classList.contains("box-carousel-3")) {
        boxCarousel.classList.remove("box-carousel-3");
        boxCarousel.classList.add("box-carousel-2");
    }
    else if (boxCarousel.classList.contains("box-carousel-4")) {
        boxCarousel.classList.remove("box-carousel-4");
        boxCarousel.classList.add("box-carousel-3");
    }
});