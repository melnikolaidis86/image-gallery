// Default options for the image gallery
var options = {
    autoplay: false,
    sliderDelay: 2000,
    showThumbnails: true,
    classNameForDisplay: 'image-wrapper--active',
    classNameForThumbnail: 'slider-container__thumbnails__image--active'
}

// Default value of the image to be displayed when image gallery is loaded
var slideDisplay = 0;

if (options.showThumbnails) {
    createThumbnails();
    addClassToElement(sliderThumbnails.children[slideDisplay], options.classNameForThumbnail);
}

// A function to remove the class that is used to display an image, as well as removing the opacity effecr from thumbnail
function reset () {
    
    for (i=0; i < slidesLength; i++) {
        removeClassFromElement(slides[i], options.classNameForDisplay);
    }
    
    for (i=0; i < slidesLength; i++) {
        removeClassFromElement(sliderThumbnails.children[i], options.classNameForThumbnail);
    }
    
}

// A function to display the appropriate image when a thumbnail is clicked
function playSelected(slideIndex) {
    
    reset();
    addClassToElement(slides[slideIndex], options.classNameForDisplay);
    addClassToElement(sliderThumbnails.children[slideIndex], options.classNameForThumbnail);
}

function playNext () {
    
    if (slideDisplay == slidesLength - 1) {
        reset();
        slideDisplay = 0;
        addClassToElement(slides[slideDisplay], options.classNameForDisplay);
        addClassToElement(sliderThumbnails.children[slideDisplay], options.classNameForThumbnail);
    } else {
        reset();
        slideDisplay++;
        addClassToElement(slides[slideDisplay], options.classNameForDisplay);
        addClassToElement(sliderThumbnails.children[slideDisplay], options.classNameForThumbnail);
    }
        
}

function playPrevious () {
    
    if (slideDisplay == 0) {
        reset();
        slideDisplay = slidesLength - 1;
        addClassToElement(slides[slideDisplay], options.classNameForDisplay);
        addClassToElement(sliderThumbnails.children[slideDisplay], options.classNameForThumbnail);
    } else {
        reset();
        slideDisplay--;
        addClassToElement(slides[slideDisplay], options.classNameForDisplay);
        addClassToElement(sliderThumbnails.children[slideDisplay], options.classNameForThumbnail);
    }
        
}