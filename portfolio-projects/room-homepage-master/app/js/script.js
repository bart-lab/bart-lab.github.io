const hamburgerBtn = document.querySelector('.header__hamburger');
const cancelBtn = document.querySelector('.header__close');
const header = document.querySelector('.header');
const menuHeader = document.querySelector('.header__menu');
const carouselNextBtn = document.querySelector('.hero__buttons--next');
const carouselPrevBtn = document.querySelector('.hero__buttons--prev');
const carouselImg = document.querySelector('.hero__carousel');
const heroText = document.querySelector('.hero__text');
const heroTextOne = document.querySelector('.hero__text--1');
const heroTextTwo = document.querySelector('.hero__text--2');
const heroTextThree = document.querySelector('.hero__text--3');

const headerMenuToggle = function(){
    menuHeader.classList.toggle('header__active');
}



let carouselNumber = 1;

const heroTextSwitch = function(){
    if(carouselNumber === 1){
        heroTextOne.classList.add('hero__text--active');
        heroTextTwo.classList.remove('hero__text--active');
        heroTextThree.classList.remove('hero__text--active');

    } else if(carouselNumber === 2){
        heroTextOne.classList.remove('hero__text--active');
        heroTextTwo.classList.add('hero__text--active');
        heroTextThree.classList.remove('hero__text--active');

    } else {
        heroTextOne.classList.remove('hero__text--active');
        heroTextTwo.classList.remove('hero__text--active');
        heroTextThree.classList.add('hero__text--active');
    }
}

const nextImg = function() {
    carouselImg.classList.remove(`hero__img--${carouselNumber}`);
    carouselNumber++;
    if(carouselNumber > 3){
        carouselNumber = 1;
    }
    carouselImg.classList.add(`hero__img--${carouselNumber}`);
    
    heroTextSwitch();
    
}

const prevImg = function() {
    carouselImg.classList.remove(`hero__img--${carouselNumber}`);
    carouselNumber--;
    if(carouselNumber < 1){
        carouselNumber = 3;
    }
    carouselImg.classList.add(`hero__img--${carouselNumber}`);
    
    heroTextSwitch();
    
}

window.addEventListener('scroll', ()=>{
    console.log(scrollY);
    if(scrollY > 100){
        header.classList.add('header--scroll-bg')
    } else {
        header.classList.remove('header--scroll-bg')
    }
})

hamburgerBtn.addEventListener('click', headerMenuToggle);

cancelBtn.addEventListener('click', headerMenuToggle);

carouselNextBtn.addEventListener('click', nextImg);

carouselPrevBtn.addEventListener('click', prevImg);


