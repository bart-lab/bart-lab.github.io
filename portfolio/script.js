const hamburgerBtn = document.querySelector('.header__icon--hamburger');
const cancelBtn = document.querySelector('.header__icon--cancel');
const contactBtn = document.querySelectorAll('.btn');
const contactBtnLink = document.querySelector('[data-menu="btn"]')
const listLink = document.querySelectorAll('.header__link--dropdown');


const dropdownMenu = document.querySelector('.header__nav--dropdown');


const showDropdown = () => dropdownMenu.style.transform = 'translateY(0)';
const hideDropdown = () => dropdownMenu.style.transform = 'translateY(-100%)';
const hideDropdownDelayed = () => setTimeout(() => hideDropdown(), 500);





hamburgerBtn.addEventListener('click', showDropdown);

cancelBtn.addEventListener('click', hideDropdown);


listLink.forEach(link => {
    link.addEventListener('click', hideDropdownDelayed);
});

contactBtnLink.addEventListener('click', hideDropdownDelayed);



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