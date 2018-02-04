// Default options for the image gallery
var options = {
    autoplay: false,
    sliderDelay: 4000,
    showThumbnails: false,
    classNameForDisplay: 'image-wrapper--active',
    classNameForThumbnail: 'slider-container__thumbnails__image--active'
}

// Default value of the image to be displayed when image gallery is loaded
var slideDisplay = 0;

// Checking if the options to show thumbnails is true
if (options.showThumbnails) {
    createThumbnails();
    addClassToElement(sliderThumbnails.children[slideDisplay], options.classNameForThumbnail);
}

// Adding function to play the previous image when the left arrow is clicked
sliderArrows.children[0].addEventListener('click', playPrevious);

// Adding function to play the nex image when the right arrow is clicked
sliderArrows.children[1].addEventListener('click', playNext);

// Checking if autoplay is true and beginning the slide show
if (options.autoplay) {
    var autoplay = setInterval(playNext, options.sliderDelay);
}

// A function to remove the class that is used to display an image, as well as removing the opacity effecr from thumbnail
function reset () {
    
    for (i=0; i < slidesLength; i++) {
        removeClassFromElement(slides[i], options.classNameForDisplay);
    }
    
    if(options.showThumbnails) {
        for (i=0; i < slidesLength; i++) {
            removeClassFromElement(sliderThumbnails.children[i], options.classNameForThumbnail);
        }  
    }   
}

// A function to display the appropriate image when a thumbnail is clicked
function playSelected(slideIndex) {
    
    reset();
    addClassToElement(slides[slideIndex], options.classNameForDisplay);
    if(options.showThumbnails) {
        addClassToElement(sliderThumbnails.children[slideDisplay], options.classNameForThumbnail);  
    }
}

// A function to display the next image and thumbnail if the option to show the thumbnails is true
function playNext () {
    
    if (slideDisplay == slidesLength - 1) {
        reset();
        slideDisplay = 0;
        addClassToElement(slides[slideDisplay], options.classNameForDisplay);
        if(options.showThumbnails) {
          addClassToElement(sliderThumbnails.children[slideDisplay], options.classNameForThumbnail);  
        } 
    } else {
        reset();
        slideDisplay++;
        addClassToElement(slides[slideDisplay], options.classNameForDisplay);
        if(options.showThumbnails) {
          addClassToElement(sliderThumbnails.children[slideDisplay], options.classNameForThumbnail);  
        }
    }   
}

// A function to display the previous image and thumbnail if the option to show the thumbnails is true
function playPrevious () {
    
    if (slideDisplay == 0) {
        reset();
        slideDisplay = slidesLength - 1;
        addClassToElement(slides[slideDisplay], options.classNameForDisplay);
        if(options.showThumbnails) {
          addClassToElement(sliderThumbnails.children[slideDisplay], options.classNameForThumbnail);  
        }
    } else {
        reset();
        slideDisplay--;
        addClassToElement(slides[slideDisplay], options.classNameForDisplay);
        if(options.showThumbnails) {
          addClassToElement(sliderThumbnails.children[slideDisplay], options.classNameForThumbnail);  
        }
    }    
}