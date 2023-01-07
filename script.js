const navitems = document.getElementById('nav__items');
const openNav = document.getElementById('open__nav-btn');
const closeNav = document.getElementById('close__nav-btn');

const openNavFn = () => {
  navitems.style.display = 'flex';
  closeNav.style.display = 'inline-block';
  openNav.style.display = 'none';
};
const closeNavFn = () => {
  navitems.style.display = 'none';
  closeNav.style.display = 'none';
  openNav.style.display = 'inline-block';
};

openNav.addEventListener('click', openNavFn);

closeNav.addEventListener('click', closeNavFn);

//  Close Nav Menu When Any Link is clicked

if (window.innerWidth < 1024) {
  document.querySelectorAll('#nav__items li a').forEach((navItem) => {
    navItem.addEventListener('click', () => {
      closeNavFn();
    });
  });
}

// Swiper JS
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Responsive Breakpoints
  breakpoints: {
    // When window width is >= 600px
    600: {
      slidesPerView: 2,
    },

    // When window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  },
});

// Nav Scroll Behaviour

window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('window-scroll', window.scrollY > 0);
});
