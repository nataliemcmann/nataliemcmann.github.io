//jquery ready
$(document).ready(onReady);

//onReady 
function onReady() {
    console.log('jQuery ready');
    //click handlers for nav bar
    $('.scrollAbout').on('click', scrollToAbout);
    $('.scrollTechnology').on('click', scrollToTech);
    // $('.scrollProjects').on('click', scrollToProjects);
    $('.scrollLinks').on('click', scrollToLinks);
};

//About scroll
function scrollToAbout() {
    console.log('scrolling');
    const targetContainer = $("main");
    const target = $(".aboutBG");
    const position = target.offset().top
                - targetContainer.offset().top
                + targetContainer.scrollTop();
    $('html, body').animate({ scrollTop: position}, 300);
}

// Tech Scroll
function scrollToTech() {
    console.log('scrolling');
    const targetContainer = $("main");
    const target = $(".columnOne"); 
    const position = target.offset().top
                - targetContainer.offset().top
                + targetContainer.scrollTop();
    $('html, body').animate({ scrollTop: position}, 300);
}

//Project Scroll
// function scrollToProjects() {
//     console.log('scrolling');
//     const targetContainer = $("main");
//     const target = $(".projectBG"); //name to change
//     const position = target.offset().top
//                 - targetContainer.offset().top
//                 + targetContainer.scrollTop();
//     $('html, body').animate({ scrollTop: position}, 300);
// }

// Links Scroll
function scrollToLinks() {
    console.log('scrolling');
    const targetContainer = $("main");
    const target = $("#contactSection"); //name to change
    const position = target.offset().top
                - targetContainer.offset().top
                + targetContainer.scrollTop();
    $('html, body').animate({ scrollTop: position}, 300);
}


//vanilla JS to scroll to specific element ID
// document.getElementById("element-id").scrollIntoView();
