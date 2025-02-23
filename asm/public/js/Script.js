
/* button move top*/
window.onscroll = function() { showScrollButton() };

function showScrollButton() {
    let btn = document.getElementById("moveTopBtn");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        btn.classList.add("show"); // Thêm class để hiện ra
    } else {
        btn.classList.remove("show"); // Bỏ class để ẩn đi
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/*slide show*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }    
    if (n < 1) { slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}
