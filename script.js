let images = document.querySelectorAll('img')
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')

let currentImg = 0;



prev.addEventListener('click', function() {

    images[currentImg].classList.remove('active')
    currentImg--;
    images[currentImg].classList.add('active')
    next.disabled = false
    if(currentImg === 0) {
        prev.disabled = true
    }
})
next.addEventListener('click', function() {
    images[currentImg].classList.remove('active')
    currentImg++
    images[currentImg].classList.add('active')
    prev.disabled = false;
    // event.classList.add('active')

    if(images.length === currentImg+1) {
        next.disabled = true
    }
})
