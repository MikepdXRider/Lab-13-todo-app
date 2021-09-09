import { getUserName } from './utils.js';

export const USER = 'USER';


// Tested
export function getUsers(){
    const packagedStorage = localStorage.getItem(USER);

    if (!packagedStorage) return [];

    const user = JSON.parse(packagedStorage);

    return user;
}



// Tested
export function setUsers(arr){
    const packagedUserArr = JSON.stringify(arr);
    
    localStorage.setItem(USER, packagedUserArr);
}

//Tested
export function getUserTodos(userName){
    const users = getUsers();

    for (let user of users){
        if (user.username === userName) return user.todos;  
    }
}
    

// Tested
export function setUserTodos(userName, todoArr){
    const users = getUsers();

    for (let user of users){
        if (user.username === userName){
            user.todos = todoArr;
        }
    }

    setUsers(users);
}


export function addTodoToStorage(formMessage, username){

    const newTodoObj = {
        id: Math.floor(Math.random() * 10000),
        description: formMessage,
        completed: false
    };

    const todosArr = getUserTodos(username);
    
    todosArr.push(newTodoObj);

    setUserTodos(username, todosArr);
}


export function completeTodoInStorage(todoId){
    const username = getUserName();
    
    const todosArr = getUserTodos(username);
    
    for (let todo of todosArr){
        if (todo.id === todoId){
            todo.completed = true;
        }
    }
    
    setUserTodos(username, todosArr);
}




