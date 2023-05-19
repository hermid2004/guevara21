let boxStyle = document. getElementById("boxStyle")

boxStyle.addEventListener("hover",function(){
    if(boxStyle.classList.contains("box-style")){
        boxStyle.classList.add("box-style");
        boxStyle.classList.remove("box-style1")
    }
    else {
        boxStyle.classList.add("box-style1")
        boxStyle.classList.remove("box-style")
    }
})