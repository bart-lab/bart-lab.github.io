const hamburgerBtn = document.querySelector('.header__icon--hamburger');
const cancelBtn = document.querySelector('.header__icon--cancel');
const listLink = document.querySelectorAll('.header__link--dropdown');


const dropdownMenu = document.querySelector('.header__nav--dropdown');

// console.log(hamburgerBtn);
// console.log(cancelBtn);
// console.log(listLink);


hamburgerBtn.addEventListener('click', function(){
    dropdownMenu.style.transform = 'translateY(0)'
});

cancelBtn.addEventListener('click', function(){
    dropdownMenu.style.transform = 'translateY(-100%)'
});

listLink.forEach(link => {
    link.addEventListener('click', function(){
        setTimeout(() => dropdownMenu.style.transform = 'translateY(-100%)', 500);
    });
});


const sections = document.querySelectorAll('section');
console.log(sections);

const menuLinks = document.querySelectorAll('[data-menu]');
console.log(menuLinks);

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            const className = entry.target.getAttribute('class');
            // console.log(className);
            menuLinks.forEach(link => {
                
                if(className === link.dataset.menu){
                    // console.log(link);
                    // console.log(link.dataset.menu);
                    link.classList.add('header__link--active');
                } else {
                    link.classList.remove('header__link--active')
                }
            })
        }
    })
},{
    threshold: 0.5,
}
)


sections.forEach(section =>{
    sectionObserver.observe(section)
})