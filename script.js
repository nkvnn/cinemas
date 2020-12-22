var video = document.querySelectorAll('.video');
var preview = document.querySelectorAll('.series-item__hover');
var playBtn = document.querySelectorAll('.play_btn');

for (let i = 0; i < playBtn.length; i++) {
    playBtn[i].addEventListener('click', function () {
        if (video[i].paused) {
            video[i].play();
            preview[i].style.top = '100%';
        } else {
            video[i].pause();
            preview[i].style.top = '0';
            
        }
    })
    
    video[i].addEventListener('click', function () {
        if (video[i].paused) {
            video[i].play();
            preview[i].style.top = '100%';
        } else {
            video[i].pause();
            preview[i].style.top = '0';
            
        }
    })
}


// function test() {
//     for (let i = 0; i < video.length; i++) {
//         if (video[i].paused) {
            
//         } else {
            
//         }
//     }


//     setTimeout(() => {
//         test();
//     }, 100);
// }

// test();