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


export function getUserTodos(userName){
    const users = getUsers();

    for (let user of users){
        if (user.username === userName) return user.todos;  
    }

}
    
    
export function setUserTodos(userName, todoArr){
    const users = getUsers();
    console.log('users...', typeof users);
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
    console.log(todosArr);
    setUserTodos(username, todosArr);
}


export function completeTodoInStorage(id, username){
    const todosArr = getUserTodos(username);

    const currentTodo = todosArr.find(item => item.id === id);

    currentTodo.completed = true;
}




