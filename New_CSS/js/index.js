var backdrop = document.querySelector('.backdrop');
var hamburger = document.querySelector('.menu');
var mobileNav = document.querySelector('.mobile-nav');
var profileImg = document.querySelector('.profile-icon');
var welcomeInfo = document.querySelector('.welcome-info');

console.log(backdrop);
console.log(hamburger);
console.log(mobileNav);
console.log(profileImg);

hamburger.addEventListener('click', function () {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});

backdrop.addEventListener('click', function () {
    backdrop.classList.remove('open');
    mobileNav.classList.remove('open');
});

profileImg.addEventListener('mouseover', function () {
    welcomeInfo.style.display = 'block';
});

profileImg.addEventListener('mouseleave', function () {
    welcomeInfo.style.display = 'none';
});