import { getUserTodos, addTodoToStorage } from '../local-storage-utils.js';
import { getUserName } from '../utils.js';
import { resetAndRenderTodoElements } from './todos-utils.js';



const elForm = document.querySelector('#add-todo');
const elUl = document.querySelector('#li-parent');

const username = getUserName();

const userTodosArr = getUserTodos(username);

resetAndRenderTodoElements(userTodosArr, elUl);




elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(elForm);
    
    const description = formData.get('description');
    // console.log(username);
    addTodoToStorage(description, username);
    
    const userTodosArr = getUserTodos(username);
    
    resetAndRenderTodoElements(userTodosArr, elUl);
    
});



