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
                elLi.style.borderColor = 'rgba(128, 128, 128, 0.30)';
                elLi.style.backgroundColor = 'rgba(167, 165, 165, 0.20)';
                elLi.style.color = 'rgba(167, 165, 165, 0.20)';
            });
        } else { 
            elLi.style.textDecoration = 'line-through';
            elLi.style.borderColor = 'rgba(128, 128, 128, 0.30)';
            elLi.style.backgroundColor = 'rgba(167, 165, 165, 0.20)';
            elLi.style.color = 'rgba(167, 165, 165, 0.20)';
        }
        
        elDom.append(elLi); 
    });        
}