export const USER = 'USER';

export function getUser(){
    const packagedStorage = localStorage.getItem(USER);

    return JSON.parse(packagedStorage);
}


export function setUser(userObj){
    const packagedUserObj = JSON.stringify(userObj);

    localStorage.setItem(USER, packagedUserObj);
}


export function getTodos(){
    const userObj = getUser();

    return userObj.todos;
}

    
export function setTodos(todosArray){
    const userObj = getUser();
    
    userObj.todos = todosArray;

    setUser(userObj);
}


export function addTodoToStorage(formMessage, idAcc){

    const newTodoObj = {
        id: idAcc,
        description: formMessage,
        completed: false
    };

    const todosArr = getTodos();
    
    todosArr.push(newTodoObj);

    setTodos(todosArr);
}


export function completeTodoInStorage(id){
    const todosArr = getTodos();

    const currentTodo = todosArr.find(item => item.id === id);

    currentTodo.completed = true;
}


export function renderTodosFromStorage(todoObj){
    const elLi = document.createElement('li');
    
    elLi.textContent = todoObj.description;

    return elLi; 
}

