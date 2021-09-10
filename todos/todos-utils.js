import { completeTodoInStorage } from '../local-storage-utils.js';

export function resetAndRenderTodoElements(todoArr, elDom){
    elDom.textContent = '';

    todoArr.forEach(item => {

        const elLi = document.createElement('li');
        
        elLi.textContent = item.description;
        
        elLi.setAttribute('value', item.id);

        if (item.completed === false){
            elLi.addEventListener('click', () => {
                completeTodoInStorage(item.id);
                elLi.style.textDecoration = 'line-through';
                elLi.style.borderColor = 'red';
            });
        } else { 
            elLi.style.textDecoration = 'line-through';
            elLi.style.borderColor = 'red';
        }
        
        elDom.append(elLi); 
    });        
}