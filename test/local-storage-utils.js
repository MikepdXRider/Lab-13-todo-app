// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getUser, setUser, USER } from '../local-storage-utils.js';
import { doesUserExist } from '../utils.js';

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


test('call getUser with no existing storage, expect an array.', (expect) => {
    const expected = [];
   
    const actual = getUser();

    expect.deepEqual(actual, expected);
});


test('call setUser, expect an empty array in localStorage', (expect) => {
    const expected = [];
    
    const user = getUser();
    
    setUser(user);
    
    const storage = localStorage.getItem(USER);
    
    const actual = JSON.parse(storage);
    
    expect.deepEqual(actual, expected);
});


test('call doesUserExist with no existing storage, expect false.', (expect) => {
    const expected = false;
   
    const actual = doesUserExist('username');

    expect.equal(actual, expected);
});


test('call doesUserExist with existing storage, expect true.', (expect) => {
    const StorageArr = [{ username: 'username' }];

    setUser(StorageArr);
    
    const expected = true;
   
    const actual = doesUserExist('username');

    expect.equal(actual, expected);
});



