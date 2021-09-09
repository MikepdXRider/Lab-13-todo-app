// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getUsers, getUserTodos, setUsers, setUserTodos, USER } from '../local-storage-utils.js';
import { findUser } from '../utils.js';

const test = QUnit.test;

// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });


test('call getUsers with no existing storage, expect an array.', (expect) => {
    localStorage.removeItem(USER);

    const expected = [];
   
    const actual = getUsers();

    expect.deepEqual(actual, expected);
});



test('call getUsers with existing storage, expect storage.', (expect) => {
    localStorage.removeItem(USER);

    const expected = [{ username: 'mellow' }];

    setUsers(expected);
   
    const actual = getUsers();

    expect.deepEqual(actual, expected);
});



test('call setUsers, expect an empty array in localStorage', (expect) => {
    localStorage.removeItem(USER);
    
    const expected = [];
    
    const user = getUsers();
    
    setUsers(user);
    
    const storage = localStorage.getItem(USER);
    
    const actual = JSON.parse(storage);
    
    expect.deepEqual(actual, expected);
});



test('call findUser with no existing storage, expect false.', (expect) => {
    localStorage.removeItem(USER);

    const expected = false;
   
    const actual = findUser('username');

    expect.equal(actual, expected);
});



test('call findUser with existing user in storage, expect user obj.', (expect) => {
    localStorage.removeItem(USER);
    
    const StorageArr = [{ username: 'username' }];

    setUsers(StorageArr);
    
    const expected = { username: 'username' };
   
    const actual = findUser('username');

    expect.deepEqual(actual, expected);
});


// Specific to login and sign up pages.
test('call findUser with existing different user in storage, expect false.', (expect) => {
    localStorage.removeItem(USER);
    
    const StorageArr = [{ username: 'test-name' }];

    setUsers(StorageArr);
    
    const expected = false;
   
    const actual = findUser('username');

    expect.equal(actual, expected);
});


test('call getUserTodos with existing same user in storage, expect an array.', (expect) => {
    localStorage.removeItem(USER);

    const users = getUsers();

    const userObj = { username: 'mellow', todos: [{ description: 'todo' }] };

    users.push(userObj);

    setUsers(users);
    
    const expected = [{ description: 'todo' }];
   
    const actual = getUserTodos('mellow');

    expect.deepEqual(actual, expected);
});

test('call setUserTodos with existing same user in storage, expect a new object in local storage.', (expect) => {
    localStorage.removeItem(USER);
    
    const beforeObj = [{ username: 'mellow', todos: [{ description: 'todo' }] }];
    
    setUsers(beforeObj);

    const currentTodo = getUserTodos('mellow');

    const newTodoObj = { description: 'another todo' };

    currentTodo.push(newTodoObj);

    setUserTodos('mellow', currentTodo);
    
    const expected = [{ description: 'todo' }, { description: 'another todo' }];
   
    const actual = getUserTodos('mellow');

    expect.deepEqual(actual, expected);
});



