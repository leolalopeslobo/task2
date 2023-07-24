let a=document.getElementById('logo1');
a.addEventListener('click',function(){
    location.href="https://www.lamercator.com/";
})

window.onscroll=function(){
    myFunction();
    myFunction2();

}

var navbar =document.getElementById("navbar");
var line1=document.getElementById("line1");
var sticky =navbar.offsetTop;

function myFunction(){
    if(window.pageYOffset>=sticky){
        navbar.classList.add("sticky");

    }
    else{
        navbar.classList.remove("sticky");
;    }
}

function myFunction2() {
    window.onscroll = function (event) {
        var scroll = window.pageYOffset;
        
        if (scroll < 300) {
            navbar.style.opacity="0.9";
            navbar.style.transition="all 0.7s linear";
        } else if (scroll >= 300 && scroll < 600) {
            navbar.style.opacity="0.9";
            navbar.style.transition="all 0.7s linear";
        } else if (scroll >= 600 && scroll < 1200) {
            navbar.style.opacity="0.9";
            navbar.style.transition="all 0.7s linear";
        } else if (scroll >= 1200 && scroll < 1800) {
            navbar.style.opacity="0.9";
            navbar.style.transition="all 1s linear";
        } else if (scroll >= 1800 && scroll < 3000) {            
            navbar.style.opacity="0.9";
            navbar.style.transition="all 1s linear";
        } else if (scroll >= 3000 && scroll < 4000) {
            navbar.style.opacity="0.9";
            navbar.style.transition="all 1s linear";
        } else{
            navbar.style.opacity="0.9";
            navbar.style.transition="all 1s linear";
        }
    }
}

var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
    navbar.style.top='-300px';
}
else{
    navbar.style.top='0px';
}
lastScrollTop = scrollTop;
});