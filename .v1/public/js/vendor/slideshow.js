/* ================================
    Code for slideshow functionality
    Adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp
    Original code by W3Schools
================================ */
// Slideshow initialization ()
let slideshowId = ["filter-slide"];   // Slideshow Identifiers, slides that are part of slideshow
let slideIndex = []; // Array that holds the slide that each slideshow is on
let numOfSlides = slideshowId.length;  // Get amount of slides from slideshowId

// Initialize the slide array and display first slide of each slide
for (let i = 0; i < numOfSlides; i++) {
    slideIndex[i] = 1;
    displaySlide(1, i, "");
};

/* ==================================================
    Description: Function to advance slides
    Variables:
        slide = number of slide which slideshow is on
        slideNum = index of slideshow in slideshowId
        anim = which animation we are going to use
            - forward: Move from right to left
            - back: Move from left to right
=================================================== */
function advanceSlides(slide, slideNum, anim) {
    displaySlide(slideIndex[slideNum] += slide, slideNum, anim, slideIndex[slideNum]);
};

/* ==================================================
    Description: Function to display slides and animate the switching
    Variables:
        slide = number of slide which slideshow is on
        slideNum = index of slideshow in slideshowId
        anim = which animation we are going to use
            - forward: Move from right to left
            - back: Move from left to right
        prevSlide = holds previous slide number
=================================================== */
function displaySlide(slide, slideNum, anim, prevSlide) {
    // Initialize variables
    let i;  // Initialize iterator
    let x = document.getElementsByClassName(slideshowId[slideNum]); // Get number of slides in each slideshow

    // Overflow control
    slideIndex[slideNum] = ((slide - 1 + x.length) % x.length) + 1;

    // Hide all of the slides
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    // Display slide we want to display and animate slides accordingly
    x[slideIndex[slideNum]-1].style.display = "block";

    if (anim == "forward") {
        x[slideIndex[slideNum]-1].classList.remove("fade");
        x[slideIndex[slideNum]-1].classList.add("fade");
    } else if (anim == "back") {
        x[slideIndex[slideNum]-1].classList.add("fade");
        x[slideIndex[slideNum]-1].classList.add("fade");
    }
};