const displayBox = document.querySelector('.atlas__display-box');
const atlasAnimatios = document.querySelectorAll('.atlas__animation');
const choiceBoxes = document.querySelectorAll('.atlas__choice-box');
const loadAnimation = document.querySelector('.atlas__load');
const choiceBoxesArr = Array.from(choiceBoxes);
const atlasAnimatiosArr = Array.from(atlasAnimatios);

const defaultAnimation= document.querySelector('.atlas__animation--default');

const changeEmotion = function(index){
    console.log(` number ${index + 1} `);
    const curEmotion = atlasAnimatiosArr[index+1];
    const curSrc = curEmotion.getAttribute('src'); 

    curEmotion.setAttribute('src', curSrc);
    
    atlasAnimatiosArr.forEach(el => {
        el.classList.add('hidden');
    })

    curEmotion.classList.remove('hidden');
    defaultAnimation.setAttribute('src', "gifs/base_loop.gif")
    setTimeout(()=>{
        curEmotion.classList.add('hidden');
        defaultAnimation.classList.remove('hidden')
    }, 10500);
}

const blockClick = function(el){
    choiceBoxesArr.forEach(item =>{
        item.classList.add('foggy');
        item.classList.add('unclickable');
        el.classList.remove('foggy')

        setTimeout(()=>{
            item.classList.remove('foggy');
            item.classList.remove('unclickable');
        }, 10500);
    })
}

choiceBoxesArr.forEach((item, index) => {
    item.addEventListener('click', ()=> {
        changeEmotion(index);
        blockClick(item);
    })
})

// console.log(choiceBoxesArr);
console.log(atlasAnimatiosArr);


