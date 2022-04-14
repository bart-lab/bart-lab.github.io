const priceSwitch = document.querySelector('#myToggle');
const planAll = document.querySelectorAll('.plan-box__pricing');
const planBasic = document.querySelector('.plan-box__pricing--basic');
const planProfessional = document.querySelector('.plan-box__pricing--professional');
const planMaster = document.querySelector('.plan-box__pricing--master');

let monthlyBasic = '$19.99';
let monthlyProfessional = '$24.99';
let monthlyMaster = '$39.99';

let annuallyBasic = '$199.99';
let annuallyProfessional = '$249.99';
let annuallyMaster = '$399.99';


priceSwitch.addEventListener('change', () => {
    if(priceSwitch.checked){
        console.log('monthly');
        planBasic.style.opacity = '0';
        planProfessional.style.opacity = '0';
        planMaster.style.opacity = '0';

        setTimeout(()=>{
            planBasic.textContent = monthlyBasic;
            planProfessional.textContent = monthlyProfessional;
            planMaster.textContent = monthlyMaster;

        }, 500);

        setTimeout(()=>{
            planBasic.style.opacity = '1';
            planProfessional.style.opacity = '1';
            planMaster.style.opacity = '1';
            }, 500);


    } else {
        console.log('annually');

        planBasic.style.opacity = '0';
        planProfessional.style.opacity = '0';
        planMaster.style.opacity = '0';

        setTimeout(()=>{
            planBasic.textContent = annuallyBasic;
            planProfessional.textContent = annuallyProfessional;
            planMaster.textContent = annuallyMaster;

        }, 500);

        setTimeout(()=>{
            planBasic.style.opacity = '1';
            planProfessional.style.opacity = '1';
            planMaster.style.opacity = '1';
            }, 500);
       }
       
});

