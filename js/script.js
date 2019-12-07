$(document).ready(function(){
    $(".slider-wrapper").owlCarousel({
        items: 4,
        loop:true,
        nav:true,
        margin:10


    });
});
$(document).ready(function(){
    $(".row-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        dots:false


    });
});
let acc = document.getElementsByClassName('accordion');
let i;
for (i = 0;i < acc.length;i ++) {
    acc[i].onclick = function () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle("show");

    }
}