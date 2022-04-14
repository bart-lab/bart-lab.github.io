const moonBtn = document.querySelector('.todo__icon--moon');
const sunBtn = document.querySelector('.todo__icon--sun');
const todo = document.querySelector('.todo');
const todoTop = document.querySelector('.todo__top');
const todoForm = document.querySelector('.todo__form');


const list = document.querySelector('.todo__list');
const listActive = document.querySelector('.todo__list--active');
const listCompleted = document.querySelector('.todo__list--completed');
const sortBox = document.querySelector('.todo__sort-box');
const newTask = document.querySelector('.todo__new-task');
const todoItemClear = document.querySelector('.todo__item--clear');

const canceleBtnAll = document.querySelectorAll('.todo__cancle');

const buttonAll = document.querySelector('.todo__all');
const buttonActive = document.querySelector('.todo__active');
const buttonCompleted = document.querySelector('.todo__completed');





const onLoad = function(){
    list.innerHTML = '';
    
    sortBox.classList.add('hidden');
}
onLoad();



const themeDark = moonBtn.addEventListener('click', function(){
    todoTop.classList.add('animation-opacity')
    todo.classList.add('todo--dark');
    moonBtn.classList.add('hidden');
    sunBtn.classList.remove('hidden');

    setTimeout(()=> todoTop.classList.remove('animation-opacity'), 1500)
});

const themeNormal = sunBtn.addEventListener('click', function(){
    todoTop.classList.add('animation-opacity')

    todo.classList.remove('todo--dark');
    moonBtn.classList.remove('hidden');
    sunBtn.classList.add('hidden');

    setTimeout(()=> todoTop.classList.remove('animation-opacity'), 1500)

});

const removingFromArray = function(arr, item){
    const index = arr.indexOf(item);
    arr.splice(index, 1);
}

// Event listeners

const taskArr = [];
const taskActiveArr = [];
const taskCompletedArr = [];


newTask.addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        e.preventDefault();
        const taskValue = newTask.value;

        taskArr.push(taskValue);
        taskActiveArr.push(taskValue);
        let activeNum = taskActiveArr.length;

        console.log(activeNum);
        const listHtml = `
        <div class="todo__item">
            <div class="todo__text-wrapper">
                <div class="todo__checkbox "></div>
                <p class="todo__text todo__text">${taskValue}</p>
            </div>
            <div class="todo__cancel">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
            </div>
        </div>`
        
        list.insertAdjacentHTML('afterbegin', listHtml);

        if(sortBox.classList.contains('hidden')){
            sortBox.classList.remove('hidden');
        }

        const checkboxDom = document.querySelector('.todo__checkbox');
        const textDom = document.querySelector('.todo__text');
        const cancelDom = document.querySelector('.todo__cancel');
        const itemDom = document.querySelector('.todo__item');
        const clearDom = document.querySelector('.todo__item--clear');
        const todoItemLeft = document.querySelector('.todo__item-left');


        // checkboxDom, textDom, cancelDom, itemDom, clearDom

        

        checkboxDom.addEventListener('click', function(){
            console.log('btn clicked');
            checkboxDom.classList.toggle('todo__checkbox--done')
            textDom.classList.toggle('todo__text--done')

            if(checkboxDom.classList.contains('todo__checkbox--done') ){
                removingFromArray(taskActiveArr, taskValue);
                taskCompletedArr.push(taskValue);

            }

            if(!checkboxDom.classList.contains('todo__checkbox--done')){
                    removingFromArray(taskCompletedArr, taskValue);
                    taskActiveArr.push(taskValue);


            }

            console.log(`Completed: ${taskCompletedArr}`);
            console.log(`Active: ${taskActiveArr}`);
            
            console.log(activeNum);

        })

        cancelDom.addEventListener('click', function(){
            console.log('canceled');
            removingFromArray(taskArr, taskValue);

            if(taskActiveArr.includes(taskValue)){
                removingFromArray(taskActiveArr, taskValue);
            }
            if(taskCompletedArr.includes(taskValue)){
                removingFromArray(taskCompletedArr, taskValue);
            }

            itemDom.remove();

            if(taskArr.length === 0){
                sortBox.classList.add('hidden');
                clearDom.remove();
            }
            console.log(taskArr);
            console.log(taskActiveArr);
            console.log(taskCompletedArr);

        })


        newTask.value = '';
    }
})

buttonAll.addEventListener('click', function(){
    list.classList.remove('hidden');
    todoForm.classList.remove('hidden')
    listCompleted.classList.add('hidden')
    listCompleted.innerHTML = '';
    listActive.classList.add('hidden')
    listActive.innerHTML = '';
})


buttonActive.addEventListener('click', function(){
    list.classList.add('hidden')
    listCompleted.classList.add('hidden')
    todoForm.classList.add('hidden')


    if(!listActive.innerHTML){
        taskActiveArr.forEach(el => {
            const html = `
            <div class="todo__item">
                <div class="todo__text-wrapper">
                    <div class="todo__checkbox todo__checkbox"></div>
                    <p class="todo__text todo__text">${el}</p>
                </div>
                <div class="todo__cancel">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                </div>
            </div>`
            if(listActive.classList.contains('hidden')){
                listActive.insertAdjacentHTML('afterbegin', html);
            }
    
        })
    }
    listActive.classList.remove('hidden')
})


buttonCompleted.addEventListener('click', function(){
    list.classList.add('hidden')
    listActive.classList.add('hidden')
    todoForm.classList.add('hidden')

   if(!listCompleted.innerHTML){
       taskCompletedArr.forEach(el => {
           const html = `
           <div class="todo__item">
               <div class="todo__text-wrapper">
                   <div class="todo__checkbox todo__checkbox--done"></div>
                   <p class="todo__text todo__text--done">${el}</p>
               </div>
               <div class="todo__cancel">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
               </div>
           </div>`
           if(listCompleted.classList.contains('hidden')){
               listCompleted.insertAdjacentHTML('afterbegin', html);
           }
       })
   }
    listCompleted.classList.remove('hidden')
})



