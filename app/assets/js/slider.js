// Variables for image-container, image-wrappers and className for image to display
var slideDisplay = 0,
    slides = document.getElementsByClassName('image-wrapper'),
    classNameForDisplay = 'image-wrapper--active';

function reset () {
    
    for (i=0; i < slidesLength; i++) {
        removeClassFromElement(slides[i], classNameForDisplay);
    }
    
}

function playSelected(slideIndex) {
    
    reset();
    addClassToElement(slides[slideIndex], classNameForDisplay);
}

function playNext () {
    
    if (slideDisplay == slidesLength - 1) {
        reset();
        slideDisplay = 0;
        addClassToElement(slides[slideDisplay], classNameForDisplay);
    } else {
        reset();
        slideDisplay++;
       addClassToElement(slides[slideDisplay], classNameForDisplay); 
    }
        
}

function playPrevious () {
    
    if (slideDisplay == 0) {
        reset();
        slideDisplay = slidesLength - 1;
        addClassToElement(slides[slideDisplay], classNameForDisplay);
    } else {
        reset();
        slideDisplay--;
        addClassToElement(slides[slideDisplay], classNameForDisplay);
    }
        
}