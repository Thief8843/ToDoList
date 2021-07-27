
export class createTask {
   
    static addTask(task){    
        

    const toDoList = document.querySelector('.to-do-list');

    const newTask = document.createElement('div');

    newTask.classList.add('new-task-div');

    newTask.innerHTML = `
    <div class="check-div"><input type="checkbox"></div>

    <div class="main-content">
      <div class="title-content">${task.title}</div>
      <div class="description-content">${task.description}</div>
    </div>
    
    <div class="buttons-content">
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    </div>
    `;
    toDoList.insertBefore(newTask , toDoList.firstChild);
 

    


    }

    
}