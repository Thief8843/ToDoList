import {task} from './add-task.js';

import { createTask } from './create-task.js';


export  function displayTask(){

    const addTask = document.querySelector('[data-add-task]');

    

    addTask.addEventListener('click',(e)=>{

    e.preventDefault();

    const titleInput = document.querySelector('[data-input-title]').value;

    const descriptionInput = document.querySelector('[data-input-description]').value;

    const newTask = new task(titleInput,descriptionInput);
    
    createTask.addTask(newTask);

})



}