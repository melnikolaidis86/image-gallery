var slideDisplay = 0;
var slides = document.getElementsByClassName('image-wrapper');
var slidesLength = document.getElementsByClassName('image-wrapper').length;

function reset () {
    
    for (i=0; i < slidesLength; i++) {
        slides[i].classList.remove('image-wrapper--active');
    }
    
    slides[slideDisplay].classList.add('image-wrapper--active');
    
}

function playNext () {
    
    if (slideDisplay == slidesLength - 1) {
        slideDisplay = 0;
        slides[slideDisplay].classList.add('image-wrapper--active');
        slides[slidesLength - 1].classList.remove('image-wrapper--active'); 
    } else {
        slideDisplay++;
        slides[slideDisplay].classList.add('image-wrapper--active');
        slides[slideDisplay - 1].classList.remove('image-wrapper--active');  
    }
        
}

function playPrevious () {
    
    if (slideDisplay == 0) {
        slideDisplay = slidesLength - 1;
        slides[slideDisplay].classList.add('image-wrapper--active');
        slides[0].classList.remove('image-wrapper--active'); 
    } else {
        slideDisplay--;
        slides[slideDisplay].classList.add('image-wrapper--active');
        slides[slideDisplay + 1].classList.remove('image-wrapper--active');  
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
    var sliderThumbnails = document.getElementById('sliderThumbnails');
    
    for(i = 0; i < imagesArray.length; i++) {
        
        var imagediv = document.createElement('dic');
        var imageElement = document.createElement('img');
        imageElement.src = imagesArray[i];
        imagediv.appendChild(imageElement);
        sliderThumbnails.appendChild(imagediv);
    }
}