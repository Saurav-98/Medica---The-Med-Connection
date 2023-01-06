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
