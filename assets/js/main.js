/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

// preloader
$(document).ready(function () {
    setTimeout(function () {
        $("#preloader").fadeOut();
    }, 3000);
});


// gallery portfolio

$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none",
    });

    $(".zoom").hover(function () {

        $(this).addClass('transition');
    }, function () {

        $(this).removeClass('transition');
    });


});

$('[data-fancybox="images"]').fancybox({
    buttons: [
        'slideShow',
        'share',
        'zoom',
        'fullScreen',
        'close'
    ],
    thumbs: {
        autoStart: true
    }
});



