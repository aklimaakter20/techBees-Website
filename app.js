

const scrollTop = document.querySelector("#scrolltop")
scrollTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
});
window.addEventListener("scroll", function(){
    if(window.scrollY >= 700){
        scrollTop.style.opacity = 1;
    }else{
        scrollTop.style.opacity = 0;
    }
})