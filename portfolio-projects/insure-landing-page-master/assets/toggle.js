const body = document.querySelector('body');
const hamburgerBtn = document.querySelector('.header__hamburger');
const closeBtn = document.querySelector('.header__close');
const mobileMenu = document.querySelector('.header__menu--mobile');
const mobileLink = document.querySelectorAll('.header__link');
const mobileLinkArray = Array.from(mobileLink);

const addMenu = function(){
    body.classList.add('noScroll');
    mobileMenu.classList.remove('hidden');
    setTimeout(()=>mobileMenu.classList.add('header__opened'), 10)
    hamburgerBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
}

const removeMenu = function(){
    body.classList.remove('noScroll')
    mobileMenu.classList.remove('header__opened');
    setTimeout(()=>mobileMenu.classList.add('hidden'), 750);
    hamburgerBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');

}


hamburgerBtn.addEventListener('click', ()=>{
    addMenu();
})

closeBtn.addEventListener('click', ()=>{
    removeMenu();
})

mobileLinkArray.forEach(item => {
    item.addEventListener('click', ()=>{
        removeMenu();
    })
});
