$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 430) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
    })
});