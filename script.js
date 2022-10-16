const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("#navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}))
document.getElementById("BUY").onclick = function () {
    location.href = "https://forms.gle/4DvYkkNvcLkktizq5";
};
document.getElementById("SELL").onclick = function () {
    location.href = "https://forms.gle/ovnEXh24NAkHfEyK8";
};
document.getElementById("RENT").onclick = function () {
    location.href = "https://forms.gle/4DvYkkNvcLkktizq5";
};

$(document).ready(function(){
    $('#About').mouseenter(function(){
        $('.img1').fadeIn(1000);
        $('.img1').fadeOut(1000);
        $('.img2').delay(2000).fadeIn(1000);
        $('.img2').fadeOut(1000);
        $('.img3').delay(3000).fadeIn(1000);
        $('.img3').fadeOut(1000);
        $('.img4').delay(4000).fadeIn(1000);
        $('.img4').fadeOut(1000);
        $('.img5').delay(5000).fadeIn(1000);
        $('.img5').fadeOut(1000);
        $('.img6').delay(6000).fadeIn(1000);
        $('.img6').fadeOut(1000);
        $('.img7').delay(7000).fadeIn(1000);
        $('.img7').fadeOut(1000);
        $('.img8').delay(8000).fadeIn(1000);
        $('.img8').fadeOut(1000);
        $('.img9').delay(9000).fadeIn(1000);
        $('.img9').fadeOut(1000);

    })
    // $('#About').mouseleave(function(){
    //     $('.img5 .img6 .img7 .img4').animate({opacity:0});
    // })
})
    
