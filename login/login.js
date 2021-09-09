// import functions and grab DOM elements
import { findUser } from '../utils.js';

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const elForm = document.getElementById('login');

elForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(elForm);

    const userName = formData.get('name');

    const userExists = findUser(userName);

    if (!userExists){
        alert('Username doesn\'t, please try again or sign up.');
        return;
    }

    const userPassword = formData.get('password');

    // Could be function to check password
    if (userPassword !== userExists.password){
        alert('Incorrect password, please try again.');
        return;
    }
    
    // debugger;

    window.location = `../todos/index.html?username=${userName}`;
});