import {getUserData} from '../utils/utils.js'

let hostname = 'https://parseapi.back4app.com'
let appId = 'yRUhY28x7aNIPlISm849JHvpVA3onilrsReb1BT9'
let apiKey = '9yX1DREwHKvbCDwVXVwYPQXrlvTuZiagdkTAfozx' //back4app JavaScript key

async function requester(method, url ,data) {
    
    let options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-JavaScript-Key': apiKey
        }
    }

    if(data) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data);
    }
    
    const userData = getUserData();
    const sessionToken = userData?.sessionToken
    
    if(userData) {
        options.headers['X-Parse-Session-Token'] = sessionToken;
    }
    
    try {
        const response = await fetch(hostname + url, options);
        
        if(!response.ok) {
            let err = await response.json();

            throw new Error(err.message);
        }
        if(response.status == 204) {
            return response;
        }

        const result = await response.json();
        
        return result;

    } catch (error) {
        alert(error.message);
        throw error;
    }

}

export const get = (url) => requester('get', url);
export const put = (url, data) => requester('put', url, data);
export const post = (url, data) => requester('post', url, data);
export const del = (url) => requester('delete', url);