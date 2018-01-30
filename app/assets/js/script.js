var slideDisplay = 0;
var slides = document.getElementsByClassName('image-wrapper');
var slidesLength = document.getElementsByClassName('image-wrapper').length;

function play () {
    
    for (i=0; i < slidesLength; i++) {
        slides[i].classList.remove('image-wrapper--active');
    }
    
    if (slideDisplay >= slidesLength) {
        slideDisplay = 0;
    }
    
    slides[slideDisplay].classList.add('image-wrapper--active');
    
    slideDisplay++;
        
}