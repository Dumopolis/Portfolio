window.addEventListener('DOMContentLoaded', animationBlock1)
window.addEventListener('scroll', animationBlock1);
window.addEventListener('scroll', animationBlock2);
window.addEventListener('scroll', animationBlock3);
window.addEventListener('scroll', animationPortfolio);
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');


function animationBlock1() {
    if ( window.scrollY >= (first.clientWidth*0.5) || window.innerWidth < 1024) {
        const animation = anime({
            targets: first,
            translateX: [-500, 0],
            duration: 700,
            scale: [0, 1],
            easing: 'easeInOutSine',
            opacity: [0, 1],
            autoplay: false,
        });
        const animation1 = anime({
            targets: first.nextElementSibling,
            translateX: [500, 0],
            duration: 700,
            scale: [0, 1],
            easing: 'easeInOutSine',
            opacity: [0, 1],
            autoplay: false,
        });
        animation1.play()
        animation.play()
        window.removeEventListener('scroll', animationBlock1)
    }
}

function animationBlock2() {
    if (window.scrollY >= (second.clientWidth*1.5)) {
        
        const animation = anime({
            targets: second,
            translateX: [500, 0],
            duration: 700,
            scale: [0, 1],
            easing: 'easeInOutSine',
            opacity: [0, 1],
            autoplay: false,
        });
        const animation1 = anime({
            targets: second.nextElementSibling,
            translateX: [-500, 0],
            duration: 700,
            scale: [0, 1],
            easing: 'easeInOutSine',
            opacity: [0, 1],
            autoplay: false,
        });
        animation1.play()
        animation.play()
        window.removeEventListener('scroll', animationBlock2)
    }
}

function animationBlock3() {
    
    if (window.scrollY >= (third.clientWidth*2)) {
        console.log(window.scrollY)
        console.log(third.offsetTop/2)
        const animation = anime({
            targets: third,
            translateX: [-500, 0],
            duration: 700,
            scale: [0, 1],
            easing: 'easeInOutSine',
            opacity: [0, 1],
            autoplay: false,
        });
        const animation1 = anime({
            targets: third.nextElementSibling,
            translateX: [500, 0],
            duration: 700,
            scale: [0, 1],
            easing: 'easeInOutSine',
            opacity: [0, 1],
            autoplay: false,
        });
        animation1.play()
        animation.play()
        window.removeEventListener('scroll', animationBlock3)
    }
}

function animationPortfolio() {
    console.log(1);
    if (window.scrollY >= (third.clientWidth*3.3)) {
        console.log('nen');
        document.querySelectorAll('.portfolio').forEach(el => el.classList.add('widget'));
        
        window.removeEventListener('scroll', animationPortfolio);
    }

}
window.addEventListener('resize', setVolume);
window.addEventListener('DOMContentLoaded', setVolume);

const vols = document.querySelectorAll(".vol");

function setVolume() {
    console.log(window.innerWidth)
    console.log(vols.length)
    if (window.innerWidth < 1024) {
        for (let index = 0; index < vols.length; index++) {
            console.log(vols[index])
            vols[index].classList.remove('row');
            vols[index].classList.remove('row-reverse');
            vols[index].classList.add('column');
        }


    } else {
        for (let index = 0; index < vols.length; index += 2) {
            vols[index].classList.add('row');
            vols[index].classList.remove('column');
        }
        for (let index = 1; index < vols.length; index += 2) {
            vols[index].classList.add('row-reverse');
            vols[index].classList.remove('column');

        }
    }
}

const moveto = new MoveTo({
    tolerance: 0,
    duration: 4000,
    easing: 'easeOutQuart',
    container: window
  })

moveto.registerTrigger(document.querySelector(".trigger")) 

