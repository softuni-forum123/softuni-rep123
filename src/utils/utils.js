export function getUserData() {
    let data = sessionStorage.getItem('userData')
    let userData;

    if(data) {
        userData = JSON.parse(data);
    }

    return userData;
}

export function setUserData(userInfo) {
    sessionStorage.setItem('userData' ,JSON.stringify(userInfo))
}

export function delUserData() {
    sessionStorage.removeItem('userData')
}