// Variables for thumbnails and className for thumbnails
var sliderThumbnails = document.getElementById('sliderThumbnails'),
    slidesLength = document.getElementsByClassName('image-wrapper').length,
    classNameForThumbnails = 'slider-container__thumbnails__image';

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

// Helpers classes to change an element's class name
function addClassToElement(element, className) {
    
    element.classList.add(className);
}

function removeClassFromElement(element, className) {
    
    element.classList.remove(className);
}