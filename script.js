let valueDisplays = document.querySelectorAll(".num");
let interval = 15000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }

    }, duration)
})

function myFunction() {
    var x = document.getElementById("menu");

    if (x.style.display == "block") {
        x.style.display == "none";
    }
    else {
        x.style.display == "block";
    }
}

const faqs = document.querySelectorAll('.after-dropdown');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //Change icon
        const icon = faq.querySelector('.uil-plus');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

const faqss = document.querySelectorAll('.faq');

faqss.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //Change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil uil-angle-down') {
            icon.className = "uil uil uil-angle-up";
        } else {
            icon.className = "uil uil-angle-down";
        }
    })
})

const faqs2 = document.querySelectorAll('.faq2');

faqs2.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('');

        //Change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil uil-angle-down') {
            icon.className = "uil uil uil-angle-up";
        } else {
            icon.className = "uil uil-angle-down";
        }
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // When windows width is 850px
    breakpoints: {
        850: {
            slidesPerView: 2
        }
    }
});

//Reloading Matter
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})

// Navabr Show and hide

const mobile_nav = document.querySelector(".moblie-navbar-show-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("The Rahul Goswami's Website"); 
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click", () => toggleNavbar());

//Sub Navbar Show and Hide 1

const sub_mobile_nav = document.querySelector(".dropdown_sub_nav");
const sub_nav_header = document.querySelector(".dropdown_sub_nav");

const toggleSubNavbar = () => {
    sub_nav_header.classList.toggle("dropdown_sub_nav_active");
}

sub_mobile_nav.addEventListener("click", () => toggleSubNavbar());

//Sub Navbar Show and Hide 2


const sub_mobile_nav_2 = document.querySelector(".dropdown_sub_nav_2");
const sub_nav_header_2 = document.querySelector(".dropdown_sub_nav_2");

const toggleSubNavbar_2 = () => {
    sub_nav_header_2.classList.toggle("dropdown_sub_nav_active_2");
}
sub_mobile_nav_2.addEventListener("click", () => toggleSubNavbar_2());

//Sub Navbar Show and hide 3

const sub_mobile_nav_3 = document.querySelector(".dropdown_sub_nav_3");
const sub_nav_header_3 = document.querySelector(".dropdown_sub_nav_3");

const toggleSubNavbar_3 = () => {
    sub_nav_header_3.classList.toggle("dropdown_sub_nav_active_3");
}
sub_mobile_nav_3.addEventListener("click", () => toggleSubNavbar_3());