import axios from 'axios';

const BASE_URL = "http://localhost:9090";
export const createUser = async (data) => {
    let response = await axios.post(`${BASE_URL}/api/auth/signup`, data);
    response.data;
}

export const loginUser = (data) => {
    return axios.post(`${BASE_URL}/api/auth/signin`,data).then(response => {
        response.data;
    })
}