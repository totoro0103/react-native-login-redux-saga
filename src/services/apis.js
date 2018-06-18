import axios from 'axios';

const API_URL = 'https://tms.insight.hblab.vn/api/'

const API_LOGIN = API_URL + 'login'

export const login = (params) => {
    return new Promise((resolve, reject) => {
        axios.post(API_LOGIN, params)
            .then(response => (response.status !== 200 ? reject(response) : response))
            .then(response => resolve(response))
            .catch(error => {
                reject(error)
            })
    })
}