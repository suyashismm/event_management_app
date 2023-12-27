import axios from 'axios';

const url = 'http://localhost:8000';

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;  
    }
}

export const authenticateCreateEvent = async (event) => {
    try {
        return await axios.post(`${url}/create-event`, event)
    } catch (error) {
        console.log('Error while calling CreateEvent API: ', error);
        return error.response;  
    }
}
