// import functions and grab DOM elements

import { getUsers, setUsers } from '../local-storage-utils.js';
import { findUser } from '../utils.js';

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const elForm = document.querySelector('#sign-up');

elForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(elForm);

    const userName = formData.get('name');

    const userExists = findUser(userName);
    
    if (userExists){
        alert('Username already exists, please log in or choose another Username.');
        return;
    }

    const userPassword = formData.get('password');

    // Could be a function. makeNewUser()
    const newUserObj = {
        username: userName,
        password: userPassword,
        todos: []
    };

    const user = getUsers();

    user.push(newUserObj);

    setUsers(user);

    window.location = `../todos/index.html?username=${userName}`;
});