let navButton = document.querySelector('#mobile-nav-toggle');
let submenuButton = document.querySelector('#submenu-toggle');
let menu = document.querySelector('nav');
let windowMinWidth = 700;

if (window.innerWidth <= windowMinWidth) {
    menu.classList.add('hidden');
}

window.addEventListener('resize', function () {
    if (window.innerWidth > windowMinWidth) {
        menu.classList.add("hidden");
        navButton.checked = false;
    }
})

window.addEventListener('click', function (e) {
    let target = e.target;
    if (!menu.classList.contains('hidden')) {
        if (!target.closest('nav') && !target.closest('.mobile-nav')) {
            menu.classList.add('hidden');
            navButton.checked = false;
        }
    }

    if (!target.closest('.has-sub>div')) {
        submenuButton.checked = false;
    }
})

navButton.addEventListener('change', function () {
    if (this.checked) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})


// Show and hide back to top button on scroll
let backTop = document.querySelector('.back-top');
window.onscroll = function () {
    if(window.scrollY > 30) {
        backTop.classList.add('show');
    } else {
        backTop.classList.remove('show')
    }
}


// Show on scroll animation
// var scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) };
var scroll = window.requestAnimationFrame;
var elementsToShow = document.querySelectorAll('.section-img>img');

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    // if (typeof jQuery === "function" && el instanceof jQuery) {
    //   el = el[0];
    // }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

loop();