export  function deleteTask(){

    const div = document.querySelector('.to-do-list');

    div.addEventListener('click',(event)=>{

        if(event.target.tagName === 'BUTTON'){

            const button = event.target;

            const buttonParent = button.parentNode.parentNode;

            const mainDiv = buttonParent.parentNode;

            if(button.textContent === 'Delete'){

                mainDiv.removeChild(buttonParent);
            }

            else if(button.textContent === 'Edit'){

                const span = buttonParent.children[1];

                const title = span.children[0];

                const description = span.children[1];

                const inputTitle = document.createElement('input');

                inputTitle.classList.add('input-title');

                const inputDescription = document.createElement('input');

                inputDescription.classList.add('input-description');

                inputTitle.type = 'text';

                inputTitle.value = title.textContent;

                inputDescription.type = 'text';

                inputDescription.value = description.textContent;

                span.insertBefore(inputTitle,title);

                span.removeChild(title);

                span.insertBefore(inputDescription,description);

                span.removeChild(description);

                button.textContent = 'Save';

            }
            else if(button.textContent === 'Save'){

                const span = buttonParent.children[1];

                const inputTitle = span.children[0];

                const inputDescription = span.children[1];

                const newTitle= document.createElement('div');

                newTitle.classList.add('title-content');

                const newDescription = document.createElement('div');

                newDescription.classList.add('description-content');

                newTitle.textContent = inputTitle.value;

                span.insertBefore(newTitle,inputTitle);

                span.removeChild(inputTitle);

                newDescription.textContent = inputDescription.value;

                span.insertBefore(newDescription,inputDescription);
                
                span.removeChild(inputDescription);

                button.textContent = 'Edit';

            }
        }
    })
   
  
}