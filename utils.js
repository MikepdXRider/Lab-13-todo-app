//  Does user already exist

import { getUsers } from './local-storage-utils.js';

//

export function findUser(username){
    const userArr = getUsers();

    // Could be a find array method which returns boolean on ternary
    for (let user of userArr){
        if (user.username === username){
            return user;
        }
    }
    
    return false;
}




export function getUserName(){
    const params = new URLSearchParams(window.location.search);

    const username = params.get('username');
    
    return username;
}

