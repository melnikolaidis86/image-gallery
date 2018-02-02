// Variables for image-container, image-wrappers and className for image to display
var slideDisplay = 0,
    slides = document.getElementsByClassName('image-wrapper'),
    slidesLength = document.getElementsByClassName('image-wrapper').length,
    classNameForDisplay = 'image-wrapper--active';

// Variables for thumbnails and className for thumbnails
var sliderThumbnails = document.getElementById('sliderThumbnails'),
    classNameForThumbnails = 'slider-container__thumbnails__image';


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


function gatherImages () {
    
    var sliderDivs = document.getElementById('sliderDivs');
    var imagesArray = new Array();
    
    for(i = 0; i < slidesLength; i++) {
            
        imagesArray.push(sliderDivs.children[i].children[0].children[0].src);    
    
    }
    
    return imagesArray;
}

function createThumbnails () {
    
    var imagesArray = gatherImages();
    
    for(i = 0; i < imagesArray.length; i++) {
        
        var imagediv = document.createElement('div');
        var imageElement = document.createElement('img');
        
        imageElement.src = imagesArray[i];
        imagediv.appendChild(imageElement);
        imagediv.setAttribute('onclick', 'playSelected('+ i +')');
        addClassToElement(imagediv, classNameForThumbnails);
        sliderThumbnails.appendChild(imagediv);
    }
}

function addClassToElement(element, className) {
    
    element.classList.add(className);
}

function removeClassFromElement(element, className) {
    
    element.classList.remove(className);
}