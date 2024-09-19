import { delUserData, setUserData } from '../utils/utils.js'
import { get, post } from './api.js'

const endPoints = {
    register: '/users',
    login: '/login',
    logout: '/logout'
}
export async function register(username, password) {
    let result = await post(endPoints.register, { username, password })

    const userData = {
        username,
        objectId: result.objectId,
        sessionToken: result.sessionToken
    }

    setUserData(userData)

    return result
}

export async function login(username, password) {
    let result = await post(endPoints.login, { username, password })

    const userData = {
        username: result.username,
        objectId: result.objectId,
        sessionToken: result.sessionToken
    }

    setUserData(userData)

    return result
}

export async function logout() {
    let result = await post(endPoints.logout, {});

    delUserData()

    return result
}
