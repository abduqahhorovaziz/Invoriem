$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
    });
});


//   VIDEO

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function () {

    if (video.paused) {
        videoPicture.classList.add('none');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');
        video.play()
    } else {
        video.pause();
        videoBtn.classList.remove('none');
        videoWrapper.classList.add('video-overlay');
    }
})