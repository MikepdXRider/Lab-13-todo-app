//  Does user already exist

import { getUser } from './local-storage-utils.js';

//

export function doesUserExist(username){
    const userArr = getUser();

    for (let user of userArr){
        if (user.username){
            return true;
        }
    }
    
    return false;
}