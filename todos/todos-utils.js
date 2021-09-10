import { completeTodoInStorage } from '../local-storage-utils.js';

export function resetAndRenderTodoElements(todoArr, elDom){
    elDom.textContent = '';

    todoArr.forEach(item => {

        const elLi = document.createElement('li');
        const elP = document.createElement('p');
        // create an img
        
        elP.textContent = item.description;
        // set image src
        elLi.setAttribute('value', item.id);
        
        //image event listener
            // Access todos
                // Access storage
                // Find user
            // Find the correct todo
                // DESTROY OBJ (splice)
            // Save todos
            // set div display: none

        if (item.completed === false){
            elLi.addEventListener('click', () => {
                completeTodoInStorage(item.id);
                elLi.style.textDecoration = 'line-through';
                elLi.style.borderColor = 'rgba(128, 128, 128, 0.30)';
                elLi.style.backgroundColor = 'rgba(167, 165, 165, 0.20)';
                elP.style.color = 'rgba(167, 165, 165, 0.20)';
            });
        } else { 
            elLi.style.textDecoration = 'line-through';
            elLi.style.borderColor = 'rgba(128, 128, 128, 0.30)';
            elLi.style.backgroundColor = 'rgba(167, 165, 165, 0.20)';
            elP.style.color = 'rgba(167, 165, 165, 0.20)';
        }
        
        elLi.append(elP);
        elDom.append(elLi); 
    });        
}