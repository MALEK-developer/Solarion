
// content four

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
})

// content eight

let videoVar = document.querySelector('.video');

function playVideo() {
    videoVar.style.display = 'flex';
}

function stopVideo() {
    videoVar.style.display = 'none';
}