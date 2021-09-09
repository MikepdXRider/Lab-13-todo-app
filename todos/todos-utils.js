import { completeTodoInStorage } from '../local-storage-utils.js';

export function resetAndRenderTodoElements(todoArr, elDom){
    elDom.textContent = '';

    todoArr.forEach(item => {
        // console.log(item);

        const elLi = document.createElement('li');
        
        elLi.textContent = item.description;
        
        elLi.setAttribute('value', item.id);
        
        elLi.addEventListener('click', () => {
            elLi.style.textDecoration = 'line-through';
            completeTodoInStorage(item.id);
        });
        
        elDom.append(elLi); 
    });        
}