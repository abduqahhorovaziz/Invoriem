$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 32,
            },
            601: {
                items: 3,
                margin: 32,
            },
            1001: {
                items: 3,
                margin: 48,
            }
        }
    });
});


//   VIDEO

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function () {

    if (video.paused) {
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');
        video.play()
    } else {
        video.pause();
        videoBtn.classList.remove('none');
        videoWrapper.classList.add('video-overlay');
    }
})