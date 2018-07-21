import { api } from './api';

export const login = (params) => {
    return api.post('/login', params);
}

export const fetchUserInfo = () => {
    return api.get('/getUserInfo');
}