'use strict';

const nav = document.querySelector('.hero__nav');

const windowScroll = () => {

    const positionY = window.scrollY;

    if (positionY > 200) {
        nav.classList.add('hero__nav-small');
    }
    else {
        nav.classList.remove('hero__nav-small');
    }

}

window.addEventListener('scroll', windowScroll);